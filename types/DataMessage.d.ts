import { Message } from "./Message";
export declare class DataMessage<R = any> extends Message<R> {
    name: string;
    data: any;
    constructor(name: string, data: any);
    toJSON(): any;
}
