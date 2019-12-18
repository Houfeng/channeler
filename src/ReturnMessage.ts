import { Message } from "./Message";
import { MessageType } from "./MessageType";
import { ChannelError } from "./ChannelError";

export class ReturnMessage<R = any> extends Message<R> {
  public result: any;
  public error: Error | ChannelError;

  constructor(value: any, id: string) {
    super(MessageType.return, id);
    if (value instanceof Error || value instanceof ChannelError) {
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
