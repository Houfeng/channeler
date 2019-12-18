import { isString } from "util";

export class ChannelError {
  protected error: Error;

  constructor(message: string | Error) {
    this.error = isString(message) ? new Error(message) : message;
  }

  get name() {
    return this.error.name;
  }

  get message() {
    return this.error.message;
  }

  get stack() {
    return this.error.stack;
  }

  toJSON() {
    const { name, message, stack } = this.error;
    return { name, message, stack };
  }

  toError() {
    return new Error(this.message);
  }
}

Object.setPrototypeOf(ChannelError.prototype, Error.prototype);
