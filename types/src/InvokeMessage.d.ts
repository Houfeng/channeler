import { Message } from "./Message";
export declare class InvokeMessage extends Message {
    path: string;
    args: any[];
    constructor(path: string, args: any[]);
    toJSON(): any;
}
