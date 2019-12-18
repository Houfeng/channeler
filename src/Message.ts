import { MessageType } from "./MessageType";
import { symbol } from "./Symbol";

const { newGuid } = require("ntils");

export class Message<R = any> {
  public symbol = symbol;
  public id: string;
  public resolve: (value: any) => void;
  public reject: (err: Error) => void;
  public promise: Promise<R>;

  constructor(public type: MessageType, id?: string) {
    this.id = id || newGuid();
    this.promise = new Promise<R>((resove, reject) => {
      this.resolve = resove;
      this.reject = reject;
    });
  }

  timeout(callback: Function, delay?: number) {
    return setTimeout(() => {
      this.reject(new Error("Channel return timeout"));
      if (callback) callback();
    }, delay || 10000);
  }

  toJSON(): any {
    return { id: this.id, type: this.type, symbol: this.symbol };
  }
}
