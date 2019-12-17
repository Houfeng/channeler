export function source() {
  const { __channeler__ } = global as any;
  if (!__channeler__) return "";
  return `(${__channeler__})();`;
}
