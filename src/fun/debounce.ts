/**
 * 函数防抖
 * @param cb 回调函数
 * @param times 延迟执行时间（毫秒）
 * @returns
 */
export function debounce(cb: Function, times: number) {
  let timeId: any = null;
  return function (this: any, e: Event) {
    if (timeId !== null) {
      // 清空定时器
      clearTimeout(timeId);
    }
    timeId = setTimeout(() => {
      const _this: any = this;
      cb.call(_this, e);
      timeId = null;
    }, times);
  };
}

/**
 * 函数防抖
 * @param func 回调函数
 * @param wait 延迟等待时间（毫秒）
 * @param immediate 是否立即执行
 * @returns
 */
export function debounceSuper(
  func: Function,
  wait: number,
  immediate: boolean,
) {
  let timeout: any = null;
  return function (this: any, ...args: any[]) {
    const context = this;
    // const args = [...arguments];
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
        timeout = null;
      }, wait);
    }
  };
}
