import { Message } from "./Message";
import { InvokeError } from "./InvokeError";
export declare class ReturnMessage extends Message {
    result: any;
    error: Error | InvokeError;
    constructor(value: any, id: string);
    toJSON(): any;
}
