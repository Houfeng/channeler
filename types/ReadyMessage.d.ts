import { Message } from "./Message";
export declare class ReadyMessage extends Message<boolean> {
    state: boolean;
    data?: string;
    constructor(state?: boolean, data?: string);
    toJSON(): any;
}
