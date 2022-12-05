/**
 * 函数节流
 *
 * @param cb - 目标函数
 * @param wait - 等待时常
 * @returns
 */
export declare function throttle(
  cb: Function,
  wait: number,
): (this: any, e: Event) => void;
