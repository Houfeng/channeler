import { Channel } from "./Channel";
import { IChannelOptions } from "./IChannelOptions";

export interface IPageChannelOptions extends IChannelOptions {
  url?: string;
  target?: string;
}

export class PageChannel extends Channel {
  protected options: IPageChannelOptions;
  public window: Window;

  constructor(options: IPageChannelOptions = {}) {
    options = { ...options };
    if (options.url) {
      const name = options.target || options.url;
      const child = window.open("", name);
      options.sender = child;
      setTimeout(() => (child.location.href = options.url), 0);
    } else {
      options.sender = options.sender || window.opener;
    }
    super(options);
    this.window = options.sender as Window;
  }
}
