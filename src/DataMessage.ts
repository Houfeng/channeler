import { Message } from "./Message";
import { MessageType } from "./MessageType";

export class DataMessage<R = any> extends Message<R> {
  constructor(public name: string, public data: any) {
    super(MessageType.data);
    this.resolve(data);
  }

  toJSON() {
    const others = super.toJSON();
    return { name: this.name, data: this.data, ...others };
  }
}
