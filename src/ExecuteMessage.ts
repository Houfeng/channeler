import { Message } from "./Message";
import { MessageType } from "./MessageType";

export class ExecuteMessage<R = any> extends Message<R> {
  constructor(public code: string, public params: any = {}) {
    super(MessageType.execute);
  }

  toJSON(): any {
    const others = super.toJSON();
    return { code: this.code, params: this.params, ...others };
  }
}
