import { Message } from "./Message";
export declare class ExecuteMessage extends Message {
    code: string;
    params: any;
    constructor(code: string, params?: any);
    toJSON(): any;
}
