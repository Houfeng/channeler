import { IframeChannel } from '../src';

const channel = new IframeChannel({
  url: "//localhost:6002/child.html"
});

channel.on('ready', async () => {
  const result = await channel.execute($ => $, { name: 'houfeng' });
  console.log('ready', result);
});

(window as any).channel = channel;