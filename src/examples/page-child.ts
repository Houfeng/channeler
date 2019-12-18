import { PageChannel } from "..";

const channel = new PageChannel();
channel.sub("xxx", data => {
  console.log("xxx", data);
});

export * from "..";
