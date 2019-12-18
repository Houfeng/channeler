import { IframeChannel, source } from '../src';

const channel = new IframeChannel({
  url: "//localhost:6002/child.html",
  timeout: 2000,
});

channel.on('ready', async () => {
  try {
    console.info(await channel.execute(() => 100));
  } catch (err) {
    console.error(err);
  }
});

(window as any).source = source;
(window as any).channel = channel;