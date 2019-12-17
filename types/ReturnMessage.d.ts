import { Message } from "./Message";
import { ChannelError } from "./ChannelError";
export declare class ReturnMessage<R = any> extends Message<R> {
    result: any;
    error: Error | ChannelError;
    constructor(value: any, id: string);
    toJSON(): any;
}
