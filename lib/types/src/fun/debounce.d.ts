/**
 * 函数防抖
 * @param cb 回调函数
 * @param times 延迟执行时间（毫秒）
 * @returns
 */
export declare function debounce(
  cb: Function,
  times: number,
): (this: any, e: Event) => void;
/**
 * 函数防抖
 * @param func 回调函数
 * @param wait 延迟等待时间（毫秒）
 * @param immediate 是否立即执行
 * @returns
 */
export declare function debounceSuper(
  func: Function,
  wait: number,
  immediate: boolean,
): (this: any, ...args: any[]) => void;
