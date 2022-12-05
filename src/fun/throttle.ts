/* eslint-disable func-names */

/**
 * 函数节流
 *
 * @param cb - 目标函数
 * @param wait - 等待时常
 * @returns
 */
export function throttle(cb: Function, wait: number) {
  let start = 0;
  return function (this: any, e: Event) {
    const now = Date.now();
    if (now - start >= wait) {
      cb.call(this, e);
      start = now;
    }
  };
}
