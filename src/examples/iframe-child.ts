import { IframeChannel } from "..";

const channel = new IframeChannel();
channel.sub("xxx", data => {
  console.log("xxx", data);
});

export * from "..";
