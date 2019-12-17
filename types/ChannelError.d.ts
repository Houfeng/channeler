export declare class ChannelError {
    protected error: Error;
    constructor(message: string | Error);
    get name(): string;
    get message(): string;
    get stack(): string;
    toJSON(): {
        name: string;
        message: string;
        stack: string;
    };
    toError(): Error;
}
