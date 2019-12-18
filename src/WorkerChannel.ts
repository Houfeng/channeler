import { Channel } from "./Channel";
import { IChannelOptions } from "./IChannelOptions";
import { IReceiver } from "./IReceiver";
import { Message } from "./Message";
import { source } from "./source";

export interface IWorkerChannelOptions extends IChannelOptions {
  url?: string;
}

export class WorkerChannel extends Channel {
  protected options: IWorkerChannelOptions;
  public worker: Worker;

  constructor(options: IWorkerChannelOptions = {}) {
    options = { ...options };
    if (self.window) {
      if (!options.url) options.url = WorkerChannel.defaultURL;
      const worker = new Worker(options.url);
      options.sender = worker;
      options.receiver = worker as IReceiver;
    } else {
      options.sender = self;
      options.receiver = self as IReceiver;
    }
    super(options);
    this.worker = options.sender as Worker;
  }

  protected send(message: Message) {
    if (!message) return;
    const content = this.stringify(message);
    return this.sender.postMessage(content);
  }

  public static get defaultURL() {
    const content = [
      source(),
      "self.channel=new self.Channeler.WorkerChannel()"
    ].join(";");
    if (self.URL && self.URL.createObjectURL) {
      const blob = new Blob([content], { type: "application/javascript" });
      return URL.createObjectURL(blob);
    } else {
      const encodeContent = btoa(unescape(encodeURIComponent(content)));
      return `data:text/javascript;base64,${encodeContent}`;
    }
  }
}
