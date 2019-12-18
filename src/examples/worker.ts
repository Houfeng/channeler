import { WorkerChannel } from "..";

(async owner => {
  if (!owner.window) return;

  const channel = new WorkerChannel();

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
