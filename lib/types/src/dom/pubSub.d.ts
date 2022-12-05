export declare class PubSub {
  private cbFns;
  /**
   * 订阅消息
   * @param channel - 订阅消息的管道
   * @param cb - 回调函数
   * @returns 订阅id
   */
  subscribe(channel: string, cb: Function): number;
  /**
   * 发布消息
   * @param channel -发布的管道
   * @param data -数据
   */
  publish(channel: string, data: any): void;
  unsubscribe(flag: string | number | undefined): void;
}
