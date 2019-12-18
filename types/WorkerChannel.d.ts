import { Channel } from "./Channel";
import { IChannelOptions } from "./IChannelOptions";
import { Message } from "./Message";
export interface IWorkerChannelOptions extends IChannelOptions {
    url?: string;
}
export declare class WorkerChannel extends Channel {
    protected options: IWorkerChannelOptions;
    worker: Worker;
    constructor(options?: IWorkerChannelOptions);
    protected send(message: Message): void;
    static get defaultURL(): string;
}
