import { EventEmitter } from "events";
import { ExecuteMessage } from "./ExecuteMessage";
import { IChannelOptions } from "./IChannelOptions";
import { IMessageMap } from "./IMessageMap";
import { ChannelError } from "./ChannelError";
import { InvokeMessage } from "./InvokeMessage";
import { IReceiver } from "./IReceiver";
import { ISender } from "./ISender";
import { isFunction, isString } from "util";
import { Message } from "./Message";
import { MessageType } from "./MessageType";
import { ReturnMessage } from "./ReturnMessage";
import { symbol } from "./Symbol";
import { ReadyMessage } from "./ReadyMessage";
import { DataMessage } from "./DataMessage";

const { getByPath, setByPath } = require("ntils");

export class Channel extends EventEmitter {
  protected options: IChannelOptions;
  protected receiver: IReceiver;
  protected sender: ISender;
  protected context: any;
  protected pendings: IMessageMap = {};

  constructor(options: IChannelOptions = {}) {
    super();
    this.init(options);
  }

  protected init(options: IChannelOptions) {
    this.options = { ...options };
    const { receiver, sender, context } = this.options;
    this.receiver = (receiver || self.process || self) as IReceiver;
    this.sender = (sender || receiver) as ISender;
    this.context = context || self;
    this.bindMessageReceived();
    setTimeout(() => this.sendReadyMessage(), 0);
  }

  protected bindMessageReceived() {
    const on = this.receiver.addEventListener || this.receiver.on;
    on.call(this.receiver, "message", this.onMessageReceived, false);
  }

  protected sendReadyMessage() {
    const message = new ReadyMessage(true);
    this.send(message);
  }

  protected checkMessage(message?: Message, event?: any) {
    return !!message && !!event;
  }

  protected parse(str: string) {
    try {
      return JSON.parse(str);
    } catch {
      return null;
    }
  }

  protected stringify(obj: any) {
    return JSON.stringify(obj);
  }

  protected removePending(id: string) {
    this.pendings[id] = null;
    delete this.pendings[id];
  }

  protected onMessageReceived = (event: any) => {
    const data = isString(event) ? event : event.data;
    if (!data) return;
    const msg: Message = this.parse(data);
    if (!msg || symbol !== msg.symbol || !this.checkMessage(msg, event)) {
      return;
    }
    switch (msg.type) {
      case MessageType.ready:
        this.onReadyMessageReceived(msg as ReadyMessage);
        break;
      case MessageType.return:
        this.onReturnMessageReceived(msg as ReturnMessage);
        break;
      case MessageType.invoke:
        this.onInvokeMessageReceived(msg as InvokeMessage);
        break;
      case MessageType.execute:
        this.onExecuteMessageReceived(msg as ExecuteMessage);
        break;
      case MessageType.data:
        this.onDataMessageReceived(msg as DataMessage);
        break;
    }
  };

  protected onReadyMessageReceived(message: ReadyMessage) {
    const { state, data } = message;
    if (state) this.emit("ready");
    if (data) throw new Error(data);
  }

  protected onDataMessageReceived(message: DataMessage) {
    const { name, data } = message;
    this.emit(`data:${name}`, data);
  }

  protected onReturnMessageReceived(message: ReturnMessage) {
    const { id, result, error } = message;
    const pending = this.pendings[id];
    if (!pending) return;
    if (error) {
      pending.reject(new ChannelError(error).toError());
    } else {
      pending.resolve(result);
    }
    this.removePending(id);
  }

  protected async onInvokeMessageReceived(message: InvokeMessage) {
    const { id, path, args = [] } = message;
    let error: ChannelError, result: any;
    try {
      const current = await getByPath(this.context, path);
      if (isFunction(current)) {
        const pathParts = path.split(".");
        pathParts.pop();
        const parent = await getByPath(this.context, pathParts.join("."));
        result = await current.apply(parent, args);
      } else if (args && args.length > 0) {
        result = await setByPath(this.context, path, args[0]);
      } else {
        result = await getByPath(this.context, path);
      }
    } catch (err) {
      error = new ChannelError(err);
    }
    const returnMessage = new ReturnMessage(error || result, id);
    this.send(returnMessage);
  }

  protected async onExecuteMessageReceived(message: ExecuteMessage) {
    const { id, code, params } = message;
    let error: ChannelError, result: any;
    try {
      // tslint:disable-next-line
      const func = new Function('$', `return (${code}).call(this,$)`);
      // tslint:disable-next-line
      result = await func.call(this.context, params);
    } catch (err) {
      error = new ChannelError(err);
    }
    const returnMessage = new ReturnMessage(error || result, id);
    this.send(returnMessage);
  }

  protected send(message: Message) {
    if (!message) return;
    const content = this.stringify(message);
    if (this.sender.postMessage) return this.sender.postMessage(content, "*");
    if (this.sender.send) return this.sender.send(content);
  }

  public invoke<R = any>(path: string, ...args: any[]) {
    const { timeout } = this.options;
    const message = new InvokeMessage<R>(path, args);
    this.pendings[message.id] = message;
    message.timeout(() => this.removePending(message.id), timeout);
    this.send(message);
    return message.promise;
  }

  public execute<R = any, P = any>(fn: (params?: P) => R, params?: P) {
    const { timeout } = this.options;
    const message = new ExecuteMessage<R>(fn.toString(), params);
    this.pendings[message.id] = message;
    message.timeout(() => this.removePending(message.id), timeout);
    this.send(message);
    return message.promise;
  }

  public pub<T = any>(name: string, data: T): void {
    const message = new DataMessage(name, data);
    this.send(message);
  }

  public sub<T = any>(name: string, handler: (data: T) => void): void {
    this.on(`data:${name}`, handler);
  }
}
