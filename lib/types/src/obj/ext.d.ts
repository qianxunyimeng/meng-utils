/**
 * 多个对象合并，如果有重名属性，则会合并成数组
 * 此方法仅支持单层合并，不支持深层合并
 * @param objs 要合并的目标对象
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
