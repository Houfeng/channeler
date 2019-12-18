import { Message } from "./Message";
import { MessageType } from "./MessageType";

export class InvokeMessage<R = any> extends Message<R> {
  constructor(public path: string, public args: any[]) {
    super(MessageType.invoke);
  }

  toJSON(): any {
    const others = super.toJSON();
    return { path: this.path, args: this.args, ...others };
  }
}
