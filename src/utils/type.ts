const { toString } = Object.prototype;

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
 * @param value -待判定的目标参数
 * @returns true / false
 * @example
 * ```ts
 * isPlanObject([]) // => false
 * isPlanObject({}) // => true
 * ```
 */
export function isPlanObject(value: any) {
  return getTag(value) === '[object Object]';
}
