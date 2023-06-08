/**
 * 简易版的uuid
 * @returns
 */
export declare function uuid(): number;
/**
 *
 *判断两值是不是想等的，如果是对象的话不会比较原型链的属性
 * @param {*} val1
 * @param {*} val2
 * @return {*}
 */
export declare function equal(val1: any, val2: any): boolean;
