import { Channel } from "./Channel";
import { IChannelOptions } from "./IChannelOptions";
export interface IPageChannelOptions extends IChannelOptions {
    url?: string;
    target?: string;
}
export declare class PageChannel extends Channel {
    protected options: IPageChannelOptions;
    window: Window;
    constructor(options?: IPageChannelOptions);
}
