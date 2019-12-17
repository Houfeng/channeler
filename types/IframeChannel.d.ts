import { Channel } from "./Channel";
import { IChannelOptions } from "./IChannelOptions";
import { Message } from "./Message";
export interface IIframeChannelOptions extends IChannelOptions {
    url?: string;
    origins?: string[];
}
export declare class IframeChannel extends Channel {
    protected options: IIframeChannelOptions;
    constructor(options?: IIframeChannelOptions);
    checkMessage(_: Message, event: any): boolean;
}
