import { isPlanObject, isArray } from '../utils/type';
/**
 * 多个对象合并，如果有重名属性，则会合并成数组
 * 此方法仅支持单层合并，不支持深层合并
 * @param objs 要合并的目标对象
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
