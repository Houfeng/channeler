import { Channel } from "./Channel";
import { IChannelOptions } from "./IChannelOptions";

export interface IThreadChannelOptions extends IChannelOptions {
  file?: string;
}

export class ThreadChannel extends Channel {}
