import { WorkerChannel } from "..";

const channel = new WorkerChannel();
channel.sub("xxx", data => {
  console.log("xxx", data);
});

export * from "..";
