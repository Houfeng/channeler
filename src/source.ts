import { symbol } from "./Symbol";

export function source(): string {
  const content = (self as any)[symbol];
  if (!content) return "";
  return `self.${symbol}=${content};self.${symbol}();`;
}
