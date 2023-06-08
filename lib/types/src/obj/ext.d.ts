/**
 * 对目标对象set属性值
 * @param target - 目标对象
 * @param options - set的key和value  options:{ name: string, newValue: any }
 */
export declare function setProperty(
  target: {
    [key: string]: any;
  },
  options: {
    name: string;
    newValue: any;
  },
): void;
/**
 * 获取目标参数属性
 * @param obj
 * @param name
 * @returns
 */
export declare function getProperty<T extends object, K extends keyof T>(
  obj: T,
  name: K,
): T[K] | undefined;
/**
 * 将多个对象属性复制到目标对象身上。
 * 如果deep=true extend将执行深度复制，递归复制它找到的任何对象。否则，副本将与原始对象共享结构。
 * 未定义的属性不会被复制,但是，从对象原型继承的属性将被复制
 * @param target - 目标对象
 * @param deep - 是否执行深度复制
 * @param objs
 * @returns
 */
export declare function extend(
  target: any,
  deep?: boolean,
  ...objs: any[]
): any;
/**
 * 深度复制对象
 * @param obj - 被复制的对象
 * @returns
 */
export declare function deepCopy<
  T extends {
    [key: string]: any;
  } = any,
>(obj: T | null | undefined): T;
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
export declare function deepMergeKey(
  original: unknown,
  arrayProcessMethod: boolean,
  ...objects: any[]
): any;
/**
 * 多个对象合并，如果有重名属性，则会合并成数组
 * 此方法仅支持单层合并，不支持深层合并
 * @param objs - 要合并的目标对象
 * @returns
 */
export declare function mergeObject(...objs: any[]): any;
/**
 * 浅拷贝
 * @param target -要拷贝的目标源
 * @returns 拷贝后产生的新对象
 */
export declare function clone(target: any): any;
/**
 * 对象深度拷贝
 * @param target -待拷贝的源数据
 * @param map -
 * @returns
 */
export declare function deepClone(target: any, map?: Map<any, any>): any;
