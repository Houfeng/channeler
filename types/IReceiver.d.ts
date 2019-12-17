/// <reference types="node" />
export interface IReceiver {
    on?(event: string, listener: NodeJS.MessageListener): void;
    addEventListener?(event: string, listener: NodeJS.MessageListener): void;
}
