import { symbol } from "./Symbol";

export function source(): string {
  const content = (global as any)[symbol];
  if (!content) return;
  return `var ${symbol}=${content};${symbol}();`;
}
