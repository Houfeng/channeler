/// <reference types="node" />
import { EventEmitter } from "events";
import { ExecuteMessage } from "./ExecuteMessage";
import { IChannelOptions } from "./IChannelOptions";
import { IMessageMap } from "./IMessageMap";
import { InvokeMessage } from "./InvokeMessage";
import { IReceiver } from "./IReceiver";
import { ISender } from "./ISender";
import { Message } from "./Message";
import { ReturnMessage } from "./ReturnMessage";
export declare class Channel extends EventEmitter {
    protected options: IChannelOptions;
    protected receiver: IReceiver;
    protected sender: ISender;
    protected context: any;
    protected pendings: IMessageMap;
    constructor(options?: IChannelOptions);
    protected init(options: IChannelOptions): void;
    protected bindMessageReceived(): void;
    protected checkMessage(message?: Message, event?: any): boolean;
    protected parse(text: string): any;
    protected stringify(obj: any): string;
    protected removePending(id: string): void;
    protected onMessageReceived: (event: any) => void;
    protected onReturnMessageReceived(message: ReturnMessage): void;
    protected onInvokeMessageReceived(message: InvokeMessage): Promise<void>;
    protected onExecuteMessageReceived(message: ExecuteMessage): Promise<void>;
    protected send(message: Message): void;
    invoke<R = any>(path: string, ...args: any[]): Promise<R>;
    execute<R = any, P = any>(fn: (params?: P) => R, params?: P): Promise<R>;
}
