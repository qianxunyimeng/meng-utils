/**
 * 获取值的类型标签
 * @param value - 任意值
 * @returns [object Xxxx]
 *
 * @public
 */
export declare function getTag(value: any): string;
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
export declare function isNumber(value: any): boolean;
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
export declare function isString(value: any): boolean;
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
export declare function isArray(value: any): value is Array<any>;
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
export declare function isPlanObject(value: any): boolean;
