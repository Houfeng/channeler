import { IChannelOptions } from "./IChannelOptions";
import { IMessageMap } from "./IMessageMap";
import { InvokeMessage } from "./InvokeMessage";
import { IReceiver } from "./IReceiver";
import { ISender } from "./ISender";
import { Message } from "./Message";
import { ReturnMessage } from "./ReturnMessage";
import { ExecuteMessage } from "./ExecuteMessage";
export declare class Channel {
    protected receiver: IReceiver;
    protected sender: ISender;
    protected context: any;
    protected pendings: IMessageMap;
    constructor(options?: IChannelOptions);
    protected init(options: IChannelOptions): void;
    protected bindMessageReceived(): void;
    protected checkMessage(message?: Message, event?: any): boolean;
    protected parse: (text: string) => any;
    protected stringify(obj: any): string;
    protected onMessageReceived: (event: any) => void;
    protected onReturnMessageReceived: (message: ReturnMessage) => void;
    protected onInvokeMessageReceived: (message: InvokeMessage) => Promise<void>;
    protected onExecuteMessageReceived: (message: ExecuteMessage) => Promise<void>;
    protected send(message: Message): void;
    invoke: (path: string, ...args: any[]) => Promise<any>;
    execute: (fn: Function, params?: any) => Promise<any>;
}
