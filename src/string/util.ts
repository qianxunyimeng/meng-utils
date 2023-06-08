/* eslint-disable no-useless-escape */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
const camelizeRE = /-(\w)/g;
const hyphenateRE = /\B([A-Z])/g;

/**
 * 将字符串计算结果保存在闭包中的函数，为了避免相同值的重复计算，有点像设计模式中通用单例模式。
 * @param fn
 * @returns
 */
const cacheStringFunction = <T extends (str: string) => string>(fn: T): T => {
  const cache: Record<string, string> = Object.create(null);
  return ((str: string) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  }) as T;
};

/**
 * 连字符转驼峰(小驼峰，第一个单词首字母小写，从第二个单词开始首字母大写)
 * @param str - 目标字符串
 * @returns
 * @example
 * ```
 * camelize('hello-world') // -> helloWorld
 * ```
 */
export const camelize = cacheStringFunction((str: string): string => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});

/**
 * 下划线命名法转大驼峰命名法
 * @param str - 待转换的目标字符串
 * @returns
 * @example
 * ```
 * underScoreToPascal('hello_world') // -> HelloWorld
 * ```
 */
export function underScoreToPascal(str: string) {
  return str.replace(/(^|_)(\w)/g, (m, $1, $2) => {
    return $2.toUpperCase();
  });
}

/**
 * 下划线命名法转小驼峰命名法
 * @param str - 待转换的目标字符串
 * @returns
 * @example
 * ```
 * underScoreToCamel('hello_world') // -> helloWorld
 * ```
 */
export function underScoreToCamel(str: string) {
  return str.replace(/\_(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
}

/**
 * 驼峰(大驼峰或小驼峰)转下划线
 * @param str - 待转换的目标字符串
 * @returns
 * @example
 * ```
 * camelToUnderScore('sqlFunInput') ==> sql_fun_input
 * camelToUnderScore('SqlFunInput') ==> sql_fun_input
 *
 * ```
 */
export function camelToUnderScore(str: string) {
  let temp = str.replace(/([A-Z])/g, '_$1').toLowerCase();
  if (temp.substr(0, 1) === '_') {
    temp = temp.substring(1);
  }
  return temp;
}

/**
 * 驼峰转连字符(大驼峰，小驼峰都能转成连字符)
 * @param str - 目标字符串
 * @returns
 * @example
 * ```
 * hyphenate('helloWorld') // -> hello-world
 * hyphenate('HelloWorld') // -> hello-world
 * ```
 */
export const hyphenate = cacheStringFunction((str: string) =>
  str.replace(hyphenateRE, '-$1').toLowerCase(),
);
/**
 * 字符串值首字母转大写
 * @param str - 目标字符串
 * @returns
 * @example
 * ```
 * capitalize('helloWorld') // -> HelloWorld
 * ```
 */
export const capitalize = cacheStringFunction(
  (str: string) => str.charAt(0).toUpperCase() + str.slice(1),
);

/**
 *大小写转换
 * @param str - 待转换的目标字符串
 * @returns
 * @example
 * ```
 * caseConvert('sql12Dc_w9U') // -> SQL12dC_W9u
 * ```
 */
export function caseConvert(str: string) {
  return str.replace(/([a-z]*)([A-Z]*)/g, (m, s1, s2) => {
    return `${s1.toUpperCase()}${s2.toLowerCase()}`;
  });
}
