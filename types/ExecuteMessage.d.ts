import { Message } from "./Message";
export declare class ExcuteMessage extends Message {
    code: string;
    constructor(code: string);
    toJSON(): any;
}
