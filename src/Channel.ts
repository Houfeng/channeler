import { IChannelOptions } from "./IChannelOptions";
import { IMessageMap } from "./IMessageMap";
import { InvokeError } from "./InvokeError";
import { InvokeMessage } from "./InvokeMessage";
import { IReceiver } from "./IReceiver";
import { ISender } from "./ISender";
import { isFunction, isString } from "util";
import { Message, MessageSymbol } from "./Message";
import { MessageType } from "./MessageType";
import { ReturnMessage } from "./ReturnMessage";
import { ExecuteMessage } from "./ExecuteMessage";

const { getByPath, setByPath } = require("ntils");

export class Channel {
  protected receiver: IReceiver;
  protected sender: ISender;
  protected context: any;
  protected pendings: IMessageMap = {};

  constructor(options: IChannelOptions = {}) {
    this.init(options);
  }

  protected init(options: IChannelOptions) {
    const { receiver, sender, context } = { ...options };
    this.receiver = (receiver || global.process || global) as IReceiver;
    this.sender = (sender || receiver) as ISender;
    this.context = context || global;
    this.bindMessageReceived();
  }

  protected bindMessageReceived() {
    const on = this.receiver.addEventListener || this.receiver.on;
    on.call(this.receiver, "message", this.onMessageReceived, false);
  }

  protected checkMessage(message?: Message, event?: any) {
    return !!message && !!event;
  }

  protected parse = (text: string) => {
    try {
      return JSON.parse(text);
    } catch {
      return null;
    }
  };

  protected stringify(obj: any) {
    return JSON.stringify(obj);
  }

  protected onMessageReceived = (event: any) => {
    const data = isString(event) ? event : event.data;
    if (!data) return;
    const msg: Message = this.parse(data);
    if (
      !msg ||
      MessageSymbol !== msg.symbol ||
      !this.checkMessage(msg, event)
    ) {
      return;
    }
    switch (msg.type) {
      case MessageType.return:
        this.onReturnMessageReceived(msg as ReturnMessage);
        break;
      case MessageType.invoke:
        this.onInvokeMessageReceived(msg as InvokeMessage);
        break;
      case MessageType.execute:
        this.onExecuteMessageReceived(msg as ExecuteMessage);
        break;
    }
  };

  protected onReturnMessageReceived = (message: ReturnMessage) => {
    const { id, result, error } = message;
    const pending = this.pendings[id];
    if (error) {
      pending.reject(new InvokeError(error).toError());
    } else {
      pending.resolve(result);
    }
    this.pendings[id] = null;
    delete this.pendings[id];
  };

  protected onInvokeMessageReceived = async (message: InvokeMessage) => {
    const { id, path, args = [] } = message;
    let error: InvokeError, result: any;
    try {
      const current = getByPath(this.context, path);
      if (isFunction(current)) {
        const pathParts = path.split(".");
        pathParts.pop();
        const parent = getByPath(this.context, pathParts.join("."));
        result = await current.apply(parent, args);
      } else if (args && args.length > 0) {
        result = await setByPath(this.context, path, args[0]);
      } else {
        result = await getByPath(this.context, path);
      }
    } catch (err) {
      error = new InvokeError(err);
    }
    const returnMessage = new ReturnMessage(error || result, id);
    this.send(returnMessage);
  };

  protected onExecuteMessageReceived = async (message: ExecuteMessage) => {
    const { id, code, params } = message;
    let error: InvokeError, result: any;
    try {
      // tslint:disable-next-line
      const func = new Function('$', `return (${code}).call(this,$)`);
      // tslint:disable-next-line
      result = await func.call(this.context, params);
    } catch (err) {
      error = new InvokeError(err);
    }
    const returnMessage = new ReturnMessage(error || result, id);
    this.send(returnMessage);
  };

  protected send(message: Message) {
    const content = this.stringify(message);
    if (this.sender.postMessage) return this.sender.postMessage(content, "*");
    if (this.sender.send) return this.sender.send(content);
  }

  public invoke = (path: string, ...args: any[]) => {
    const message = new InvokeMessage(path, args);
    this.pendings[message.id] = message;
    this.send(message);
    return message.promise;
  };

  public execute = (fn: Function, params: any = {}) => {
    const message = new ExecuteMessage(fn.toString(), params);
    this.pendings[message.id] = message;
    this.send(message);
    return message.promise;
  };
}
