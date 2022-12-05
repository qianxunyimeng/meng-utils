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
