import { symbol } from "./Symbol";

export function source(): string {
  const content = (self as any)[symbol];
  if (!content) return "";
  const __self__ = `var __self__=(typeof self)!=='undefined'?self:this`;
  return `${__self__};__self__.${symbol}=${content};__self__.${symbol}();`;
}
