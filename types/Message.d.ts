import { MessageType } from "./MessageType";
export declare class Message<R = any> {
    type: MessageType;
    symbol: string;
    id: string;
    resolve: (value: any) => void;
    reject: (err: Error) => void;
    promise: Promise<R>;
    constructor(type: MessageType, id?: string);
    timeout(callback: Function, delay?: number): number;
    toJSON(): any;
}
