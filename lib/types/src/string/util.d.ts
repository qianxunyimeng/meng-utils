/**
 * 连字符转驼峰(小驼峰，第一个单词首字母小写，从第二个单词开始首字母大写)
 * @param str - 目标字符串
 * @returns
 * @example
 * ```
 * camelize('hello-world') // -> helloWorld
 * ```
 */
export declare const camelize: (str: string) => string;
/**
 * 下划线命名法转大驼峰命名法
 * @param str - 待转换的目标字符串
 * @returns
 * @example
 * ```
 * underScoreToPascal('hello_world') // -> HelloWorld
 * ```
 */
export declare function underScoreToPascal(str: string): string;
/**
 * 下划线命名法转小驼峰命名法
 * @param str - 待转换的目标字符串
 * @returns
 * @example
 * ```
 * underScoreToCamel('hello_world') // -> helloWorld
 * ```
 */
export declare function underScoreToCamel(str: string): string;
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
export declare function camelToUnderScore(str: string): string;
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
export declare const hyphenate: (str: string) => string;
/**
 * 字符串值首字母转大写
 * @param str - 目标字符串
 * @returns
 * @example
 * ```
 * capitalize('helloWorld') // -> HelloWorld
 * ```
 */
export declare const capitalize: (str: string) => string;
/**
 *大小写转换
 * @param str - 待转换的目标字符串
 * @returns
 * @example
 * ```
 * caseConvert('sql12Dc_w9U') // -> SQL12dC_W9u
 * ```
 */
export declare function caseConvert(str: string): string;
