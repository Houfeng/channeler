import { IframeChannel, source } from '../src';

const channel = new IframeChannel({
  url: "//localhost:6002/child.html"
});

channel.on('ready', async () => {
  const result = await channel.execute(x => x, { name: 'houfeng' });
  console.log('ready', result);
});

(window as any).source = source;
(window as any).channel = channel;