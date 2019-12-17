export interface ISender {
  send?(message: any, ...args: any[]): void;
  postMessage?(message: any, ...args: any[]): void;
}
