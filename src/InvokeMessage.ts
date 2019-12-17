import { Message } from "./Message";
import { MessageType } from "./MessageType";

export class InvokeMessage extends Message {
  constructor(public path: string, public args: any[]) {
    super(MessageType.invoke);
  }
  toJSON(): any {
    const others = super.toJSON();
    return { path: this.path, args: this.args, ...others };
  }
}
