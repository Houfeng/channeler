import { IReceiver } from "./IReceiver";
import { ISender } from "./ISender";
export interface IChannelOptions {
    sender?: ISender;
    receiver?: IReceiver;
    context?: any;
    timeout?: number;
}
