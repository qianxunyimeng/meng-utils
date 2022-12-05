/**
 * 事件绑定(带事件委托)，如果selector为null则是事件绑定，否则就是事件委托
 * @param el - 父元素选择器
 * @param eventType -事件类型
 * @param cb - 事件回调函数
 * @param selector -子元素选择器
 */
export declare function addEventListener(
  el: any,
  eventType: string,
  cb: Function,
  selector: any,
): void;
