import { MessageType } from "./MessageType";
export declare const MessageSymbol = "__channeler__";
export declare class Message<R = any> {
    type: MessageType;
    id?: string;
    symbol: string;
    resolve: (value: any) => void;
    reject: (err: Error) => void;
    promise: Promise<R>;
    constructor(type: MessageType, id?: string);
    toJSON(): any;
}
