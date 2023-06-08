/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
import { isPlanObject, isArray } from '../utils/type';

const { hasOwnProperty: hasOwn } = Object.prototype;
const gOPD = Object.getOwnPropertyDescriptor;

const { defineProperty } = Object;
/**
 * 对目标对象set属性值
 * @param target - 目标对象
 * @param options - set的key和value  options:{ name: string, newValue: any }
 */
export function setProperty(
  target: { [key: string]: any },
  options: { name: string; newValue: any },
) {
  if (defineProperty && options.name === '__proto__') {
    defineProperty(target, options.name, {
      enumerable: true,
      configurable: true,
      value: options.newValue,
      writable: true,
    });
  } else {
    // eslint-disable-next-line no-param-reassign
    target[options.name] = options.newValue;
  }
}

/**
 * 获取目标参数属性
 * @param obj
 * @param name
 * @returns
 */
export function getProperty<T extends object, K extends keyof T>(
  obj: T,
  name: K,
): T[K] | undefined {
  if (name === '__proto__') {
    if (!hasOwn.call(obj, name)) {
      // eslint-disable-next-line no-void
      return void 0;
    }
    if (gOPD) {
      // In early versions of node, obj['__proto__'] is buggy when obj has
      // __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
      return gOPD(obj, name)!.value;
    }
  }

  return obj[name];
}

/**
 * 将多个对象属性复制到目标对象身上。
 * 如果deep=true extend将执行深度复制，递归复制它找到的任何对象。否则，副本将与原始对象共享结构。
 * 未定义的属性不会被复制,但是，从对象原型继承的属性将被复制
 * @param target - 目标对象
 * @param deep - 是否执行深度复制
 * @param objs
 * @returns
 */
export function extend(target: any, deep = true, ...objs: any[]) {
  let options;
  let name;
  let src;
  let copy;
  let copyIsArray: boolean;
  // eslint-disable-next-line no-shadow
  let clone;
  if (
    target == null ||
    (typeof target !== 'object' && typeof target !== 'function')
  ) {
    // eslint-disable-next-line no-param-reassign
    target = {};
  }
  objs.forEach((obj: any) => {
    options = obj;
    if (options != null) {
      for (name in options) {
        src = getProperty(target, name);
        copy = getProperty(options, name);

        // Prevent never-ending loop
        if (target !== copy) {
          // Recurse if we're merging plain objects or arrays
          if (
            deep &&
            copy &&
            // eslint-disable-next-line no-cond-assign
            (isPlanObject(copy) || (copyIsArray = isArray(copy)))
          ) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && isArray(src) ? src : [];
            } else {
              // eslint-disable-next-line no-undef
              clone = src && isPlanObject(src) ? src : {};
            }

            // Never move original objects, clone them
            setProperty(target, {
              name,
              newValue: extend(clone, deep, copy),
            });

            // Don't bring in undefined values
          } else if (typeof copy !== 'undefined') {
            setProperty(target, { name, newValue: copy });
          }
        }
      }
    }
  });
  return target;
}

/**
 * 深度复制对象
 * @param obj - 被复制的对象
 * @returns
 */
export function deepCopy<T extends { [key: string]: any } = any>(
  obj: T | null | undefined,
): T {
  const result = extend({}, true, { _: obj });
  return result._ as T;
}

/**
 * 深度合并对象，替换叶子结点同名属性
 * 不会合并原型链上的属性
 * @param original - 原始对象
 * @param arrayProcessMethod - 数组处理方式
 *  - `true` 表示替换新值，不管新值为哪种类型
 *  - `false` 表示会合并整个数组（将旧数据与新数据合并成新数组）
 * @param objects - 要合并到对象
 * @returns
 * @example
 * ```
 * const config = {
 *     userName: {
 *       first: 'A',
 *       second: 'B',
 *     },
 *     age: 2,
 *    hobby:["读书"]
 *  };
 *  const config2 = {
 *   userName: {
 *      first: "C"
 *     },
 *     hobby:["唱歌"]
 *   }
 * console.log(JSON.stringify(mu.deepMergeKey(config,false,config2))); // -> {"userName":{"first":"C","second":"B"},"age":2,"hobby":["读书","唱歌"]}
 *
 * ```
 */
export function deepMergeKey(
  original: unknown,
  arrayProcessMethod: boolean,
  ...objects: any[]
): any {
  if (Array.isArray(original) || typeof original !== 'object') return original;

  const isObject = (v: unknown): boolean => typeof v === 'object';

  const merge = (target: any, obj: any): any => {
    Object.keys(obj)
      .filter(
        key =>
          key !== '__proto__' && Object.prototype.hasOwnProperty.call(obj, key),
      )
      .forEach(key => {
        const fromValue = obj[key];
        const toValue = target[key];
        if (Array.isArray(toValue)) {
          target[key] = arrayProcessMethod
            ? fromValue
            : [...toValue, ...fromValue];
        } else if (typeof fromValue === 'function') {
          target[key] = fromValue;
        } else if (
          fromValue != null &&
          isObject(fromValue) &&
          toValue != null &&
          isObject(toValue)
        ) {
          target[key] = merge(toValue, fromValue);
        } else {
          target[key] = deepCopy(fromValue);
        }
      });
    return target;
  };

  objects
    .filter(v => v != null && isObject(v))
    .forEach(v => merge(original, v));

  return original;
}

/**
 * 多个对象合并，如果有重名属性，则会合并成数组
 * 此方法仅支持单层合并，不支持深层合并
 * @param objs - 要合并的目标对象
 * @returns
 */
export function mergeObject(...objs: any[]) {
  const result: any = {};
  objs.forEach((obj: any) => {
    // 获取每一个对象上所有的属性
    Object.keys(obj).forEach((key: string) => {
      // 检测result中是否存在key属性
      if (result.hasOwnProperty(key)) {
        result[key] = [].concat(result[key], obj[key]);
      } else {
        result[key] = obj[key];
      }
    });
  });
  return result;
}

/**
 * 浅拷贝
 * @param target -要拷贝的目标源
 * @returns 拷贝后产生的新对象
 */
export function clone(target: any) {
  if (isPlanObject(target)) {
    return { ...target };
  }
  if (isArray(target)) {
    return [...target];
  }
  return target;
}
/**
 * 对象深度拷贝
 * @param target -待拷贝的源数据
 * @param map -
 * @returns
 */
export function deepClone(target: any, map = new Map()) {
  if (isPlanObject(target) && target !== null) {
    // 克隆之前，先判断数据是否克隆过
    const cache = map.get(target);
    if (cache) {
      return cache;
    }
    // 创建目标容器
    const isArr: boolean = Array.isArray(target);
    const result: any = isArr ? [] : {};
    // 对已经克隆过的对象做缓存
    map.set(target, result);
    if (isArr) {
      target.forEach((item: any, index: number) => {
        result[index] = deepClone(item, map);
      });
    } else {
      Object.keys(target).forEach(key => {
        result[key] = deepClone(target[key], map);
      });
    }
    return result;
  }
  return target;
}
