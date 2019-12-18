import { IframeChannel } from "..";

(owner => {
  const channel = new IframeChannel({
    url: "//localhost:6002/iframe-child.html",
    timeout: 2000
  });

  channel.on("ready", async () => {
    try {
      console.info(await channel.execute(() => 1000));
    } catch (err) {
      console.error(err);
    }
  });

  owner.channel = channel;
})(self as any);

export * from "..";
