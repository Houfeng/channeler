import { Message } from "./Message";
import { MessageType } from "./MessageType";

export class ExcuteMessage extends Message {
  constructor(public code: string) {
    super(MessageType.excute);
  }
  toJSON(): any {
    const others = super.toJSON();
    return { code: this.code, ...others };
  }
}
