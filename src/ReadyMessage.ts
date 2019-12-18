import { Message } from "./Message";
import { MessageType } from "./MessageType";

export class ReadyMessage extends Message<boolean> {
  constructor(public state = true, public data?: string) {
    super(MessageType.ready);
    this.resolve(state);
  }

  toJSON() {
    const others = super.toJSON();
    return { state: this.state, ...others };
  }
}
