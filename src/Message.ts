import { MessageType } from "./MessageType";

const { newGuid } = require("ntils");

export const MessageSymbol = "__channeler__";

export class Message {
  public symbol = MessageSymbol;
  public resolve: (value: any) => void;
  public reject: (err: Error) => void;
  public promise: Promise<any>;
  constructor(public type: MessageType, public id?: string) {
    this.id = id || newGuid();
    this.promise = new Promise((resove, reject) => {
      this.resolve = resove;
      this.reject = reject;
    });
  }
  toJSON(): any {
    return { id: this.id, type: this.type, symbol: this.symbol };
  }
}
