import { Channel } from "./Channel";
import { IChannelOptions } from "./IChannelOptions";
export interface IProcessChannelOptions extends IChannelOptions {
    file?: string;
}
export declare class ProcessChannel extends Channel {
}
