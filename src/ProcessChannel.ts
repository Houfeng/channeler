import { Channel } from "./Channel";
import { IChannelOptions } from "./IChannelOptions";

export interface IProcessChannelOptions extends IChannelOptions {
  file?: string;
}

export class ProcessChannel extends Channel {}
