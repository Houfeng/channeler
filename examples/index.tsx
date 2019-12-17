import { IframeChannel } from '../src';

const channel = new IframeChannel({
  url: "//localhost:6002/child.html"
});

(window as any).channel = channel;