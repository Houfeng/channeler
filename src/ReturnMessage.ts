import { Message } from "./Message";
import { MessageType } from "./MessageType";
import { InvokeError } from "./InvokeError";

export class ReturnMessage extends Message {
  public result: any;
  public error: Error | InvokeError;
  constructor(value: any, id: string) {
    super(MessageType.return, id);
    if (value instanceof Error || value instanceof InvokeError) {
      this.error = value;
    } else {
      this.result = value;
    }
  }
  toJSON() {
    const others = super.toJSON();
    return { result: this.result, error: this.error, ...others };
  }
}
