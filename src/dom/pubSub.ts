/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { isNumber } from '../utils/type';
import { uuid } from '../utils/util';

/** 发布订阅者模式实现消息订阅 */
export class PubSub {
  private cbFns: {
    [key in string]: {
      [key in number]: Function;
    };
  } = {};

  /**
   * 订阅消息
   * @param channel - 订阅消息的管道
   * @param cb - 回调函数
   * @returns 订阅id
   */
  subscribe(channel: string, cb: Function) {
    // 创建唯一id
    const token = uuid();
    if (this.cbFns[channel]) {
      this.cbFns[channel][token] = cb;
    } else {
      this.cbFns[channel] = {
        [token]: cb,
      };
    }
    return token;
  }

  /**
   * 发布消息
   * @param channel -发布的管道
   * @param data -数据
   */
  publish(channel: string, data: any) {
    if (this.cbFns[channel]) {
      Object.values(this.cbFns[channel]).forEach(cb => {
        cb(data);
      });
    }
  }

  unsubscribe(flag: string | number | undefined) {
    if (flag === undefined) {
      this.cbFns = {};
    } else if (typeof flag === 'string') {
      if (this.cbFns[flag]) {
        // 删除整个频道
        delete this.cbFns[flag];
      }
    } else if (isNumber(flag)) {
      // 取消订阅id对应的消息
      const cbObj = Object.values(this.cbFns).find(obj =>
        obj.hasOwnProperty(flag),
      );
      if (cbObj) {
        delete cbObj[flag];
      }
    }
  }
}
