import { MessageType } from "./MessageType";
export declare const MessageSymbol = "__channeler__";
export declare class Message {
    type: MessageType;
    id?: string;
    symbol: string;
    resolve: (value: any) => void;
    reject: (err: Error) => void;
    promise: Promise<any>;
    constructor(type: MessageType, id?: string);
    toJSON(): any;
}
