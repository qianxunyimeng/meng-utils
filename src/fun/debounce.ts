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
