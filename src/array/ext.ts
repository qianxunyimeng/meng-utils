export function unique<T = number | string>(arr: Array<T>) {
  return [...new Set(arr)];
}

/**
 * 数组扁平化 将多维数组降为一维数组(只支持将数字或字符串数组)
 * @param arr - 多维数组
 * @returns 一维数组
 */
export function flatten(arr: Array<any>): Array<any> {
  return arr.reduce(function (prev, next) {
    return prev.concat(Array.isArray(next) ? flatten(next) : next);
  }, []);
}
