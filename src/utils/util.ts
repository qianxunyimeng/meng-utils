/**
 * 简易版的uuid
 * @returns
 */
export function uuid() {
  const date: number = new Date().valueOf(); // 获取时间戳
  const txt = '1234567890'; // 生成的随机机器码
  const len = 13; // 机器码有多少位
  let pwd = ''; // 定义空变量用来接收机器码
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < len; i++) {
    pwd += txt.charAt(Math.floor(Math.random() * txt.length)); // 循环机器码位数随机填充
  }
  return date + parseInt(pwd, 10);
}

const isObject = (val: any) => typeof val === 'object' && val !== null;

/**
 *
 *判断两值是不是想等的，如果是对象的话不会比较原型链的属性
 * @param {*} val1
 * @param {*} val2
 * @return {*}
 */
export function equal(val1: any, val2: any) {
  if (isObject(val1) && isObject(val2)) {
    const keys1 = Object.keys(val1);
    const keys2 = Object.keys(val2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const k of keys1) {
      if (!keys2.includes(k)) {
        return false;
      }
      if (!equal(val1[k], val2[k])) {
        return false;
      }
    }
    return true;
  }
  return val1 === val2;
}
