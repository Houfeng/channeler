import { Channel } from "./Channel";
import { IChannelOptions } from "./IChannelOptions";
export interface IThreadChannelOptions extends IChannelOptions {
    file?: string;
}
export declare class ThreadChannel extends Channel {
}
