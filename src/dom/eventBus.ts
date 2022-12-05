type CallbacksType = {
  // eslint-disable-next-line no-unused-vars
  [key in string]: Function[];
};

/**
 * 事件总线
 */
export class EventBus {
  private cbFns: CallbacksType = {};

  /**
   *  事件注册
   * @param type -事件名称
   * @param cb -事件触发回调函数
   */
  public on(type: string, cb: Function) {
    if (this.cbFns[type]) {
      this.cbFns[type].push(cb);
    } else {
      this.cbFns[type] = [cb];
    }
  }

  /**
   * 事件触发
   * @param type -触发事件名称
   * @param data -事件触发传参
   */
  public emit(type: string, data: any) {
    if (this.cbFns[type] && this.cbFns[type].length > 0) {
      this.cbFns[type].forEach((cb: Function) => {
        cb(data);
      });
    }
  }

  /**
   * 事件注销
   * @param eventname -注销的事件名称，该参数可选，不传则注销所有事件绑定，否则只注销该事件名称对应的事件回调
   */
  public off(eventname?: string) {
    if (eventname) {
      delete this.cbFns[eventname];
    } else {
      this.cbFns = {};
    }
  }
}
