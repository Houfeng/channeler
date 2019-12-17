import { Message } from "./Message";
export declare class InvokeMessage<R = any> extends Message<R> {
    path: string;
    args: any[];
    constructor(path: string, args: any[]);
    toJSON(): any;
}
