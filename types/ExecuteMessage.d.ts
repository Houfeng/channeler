import { Message } from "./Message";
export declare class ExecuteMessage<R = any> extends Message<R> {
    code: string;
    params: any;
    constructor(code: string, params?: any);
    toJSON(): any;
}
