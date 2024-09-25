export function warning(condition: unknown, msg: string) {
  if (__DEV__) {
    if (!condition) {
      console.error(msg);
    }
  }
}
