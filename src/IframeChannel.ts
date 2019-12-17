import { Channel } from "./Channel";
import { IChannelOptions } from "./IChannelOptions";
import { Message } from "./Message";

export interface IIframeChannelOptions extends IChannelOptions {
  url?: string;
  origins?: string[];
}

export class IframeChannel extends Channel {
  protected options: IIframeChannelOptions;
  constructor(options: IIframeChannelOptions = {}) {
    options = { ...options };
    if (options.url) {
      const child = document.createElement("iframe");
      child.src = options.url;
      child.addEventListener("load", () => this.emit("ready"));
      child.style.display = "none";
      document.body.appendChild(child);
      options.sender = child.contentWindow;
    } else {
      options.sender = window.parent;
    }
    super(options);
    this.options = options;
  }

  checkMessage(_: Message, event: any) {
    const { origins = [] } = this.options;
    return !origins || origins.length < 1 || origins.indexOf(event.origin) > -1;
  }
}
