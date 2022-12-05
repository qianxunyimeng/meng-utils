/**
 * 事件总线
 */
export declare class EventBus {
  private cbFns;
  /**
   *  事件注册
   * @param type -事件名称
   * @param cb -事件触发回调函数
   */
  on(type: string, cb: Function): void;
  /**
   * 事件触发
   * @param type -触发事件名称
   * @param data -事件触发传参
   */
  emit(type: string, data: any): void;
  /**
   * 事件注销
   * @param eventname -注销的事件名称，该参数可选，不传则注销所有事件绑定，否则只注销该事件名称对应的事件回调
   */
  off(eventname?: string): void;
}
