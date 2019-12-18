import { PageChannel } from "..";

(owner => {
  const channel = new PageChannel({
    url: "//localhost:6002/page-child.html"
  });

  channel.on("ready", async () => {
    try {
      await channel.execute(() => {
        document.title = "Child Window";
      });
    } catch (err) {
      console.error(err);
    }
  });

  owner.channel = channel;
})(self as any);

export * from "..";
