import { IframeChannel } from '../src';

const channel = new IframeChannel({
  url: "//localhost:6002/child.html"
});

channel.on('ready', () => {
  console.log('ready');
});

(window as any).channel = channel;