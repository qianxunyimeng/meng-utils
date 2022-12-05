/* eslint-disable func-names */
/* eslint-disable no-param-reassign */

/**
 * 事件绑定(带事件委托)，如果selector为null则是事件绑定，否则就是事件委托
 * @param el - 父元素选择器
 * @param eventType -事件类型
 * @param cb - 事件回调函数
 * @param selector -子元素选择器
 */
export function addEventListener(
  el: any,
  eventType: string,
  cb: Function,
  selector: any,
) {
  if (typeof el === 'string') {
    el = document.querySelector(el);
  }
  if (!selector) {
    // 事件绑定
    el.addEventListener(eventType, cb);
  } else {
    // 事件委托
    el.addEventListener(eventType, function (e: any) {
      // 获取目标事件源
      const { target } = e;
      // 判断选择器与目标元素是否符合
      if (target.matches(selector)) {
        // 符合调用回掉函数
        cb.call(target, e);
      }
    });
  }
}
