const { toString, hasOwnProperty: hasOwn } = Object.prototype;
// const hasOwn = Object.prototype.hasOwnProperty;
// const toStr = Object.prototype.toString;

// const gOPD = Object.getOwnPropertyDescriptor;

/**
 * 获取值的类型标签
 * @param value - 任意值
 * @returns [object Xxxx]
 *
 * @public
 */
export function getTag(value: any): string {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return toString.call(value);
}

/**
 * 判断是否是数值类型
 * @param value - 任意值
 * @returns true / false
 * @example
 * ```ts
 * isNumber(2) // => true
 * ```
 *
 * @public
 */
export function isNumber(value: any): boolean {
  return getTag(value) === '[object Number]';
}

/**
 * 判断是否是字符串类型
 * @param value - 任意值
 * @returns true / false
 * @example
 * ```ts
 * isString('abc') // => true
 * ```
 *
 * @public
 */
export function isString(value: any): boolean {
  return getTag(value) === '[object String]';
}

/**
 * 判断是否是数组类型
 * @param value - 任意值
 * @returns true / false
 * @example
 * ```ts
 * isArray([]) // => true
 * ```
 *
 * @public
 */
export function isArray(value: any): value is Array<any> {
  return getTag(value) === '[object Array]';
}

/**
 * 判断是否是纯粹的对象
 * 纯粹对象：通过字面量{},或者 new Object()创建的对象
 * @param obj -待判定的目标参数
 * @returns true / false
 * @example
 * ```ts
 * isPlanObject([]) // => false
 * isPlanObject({}) // => true
 * ```
 */
export function isPlanObject(obj: any) {
  if (!obj || getTag(obj) !== '[object Object]') {
    return false;
  }

  const hasOwnConstructor = hasOwn.call(obj, 'constructor');
  const hasIsPrototypeOf =
    obj.constructor &&
    obj.constructor.prototype &&
    hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
  // Not own constructor property must be Object
  if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
    return false;
  }

  // Own properties are enumerated firstly, so to speed up,
  // if last one is own, then all properties are own.
  let key;
  for (key in obj) {
    /**/
  }

  return typeof key === 'undefined' || hasOwn.call(obj, key);
}

export type Nullable<T> = T | null;
