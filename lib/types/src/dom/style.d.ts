import { Nullable } from '../utils';
/**
 * 目标元素有没有某class
 * @param el - 目标DOM元素
 * @param cls - class名称
 * @returns true/false
 * @example
 * ```
 * const dom = document.getElementById("parent")
 * hasClass(dom,'actived') // -> true
 * ```
 */
export declare function hasClass(
  el: HTMLElement | Element,
  cls: string,
): boolean;
/**
 * 给目标对象添加某class,可以添加多个，用空格分隔
 * @param el - 目标对象
 * @param cls - 要添加的class
 * @returns
 * @example
 * ```
 * const dom = document.getElementById("parent")
 * addClass(dom,'actived red')
 * ```
 */
export declare function addClass(el: HTMLElement | Element, cls: string): void;
/**
 * 目标元素删除一个或多个class
 * @param el - 目标元素
 * @param cls - 要删除的class,多个用空格分隔
 * @returns void
 * @example
 * ```
 * const dom = document.getElementById("parent")
 * removeClass(dom,'actived red')
 * ```
 */
export declare function removeClass(
  el: HTMLElement | Element,
  cls: string,
): void;
/**
 * 获取dom style
 * @param element - 目标dom元素
 * @param styleName - style名称
 * @returns
 * @example
 * ```
 * const dom = document.getElementById("parent")
 * getStyle(dom,'border-radius')
 * getStyle(dom,'height')
 * ```
 */
export declare const getStyle: (
  element: HTMLElement,
  styleName: string,
) => string;
/**
 * 给指定元素设置某样式或一组样式
 * @param element - 指定dom元素
 * @param styleName - 样式名称
 * @param value - 样式值
 * @returns
 * @example
 * ```
 * const dom = document.getElementById("parent")
 * setStyle(dom,{border:'1px solid red','border-radius':'5px'})
 * setStyle(dom,'height','400px')
 * ```
 */
export declare function setStyle(
  element: HTMLElement,
  styleName: Object | string,
  value?: string,
): void;
/**
 * 移除指定样式
 * @param element - 指定dom
 * @param style - style名称
 * @returns
 * @example
 * ```
 * const dom = document.getElementById("parent")
 * removeStyle(dom,'border-radius')
 * removeStyle(dom,'height')
 * ```
 */
export declare function removeStyle(element: HTMLElement, style: string): void;
/**
 * 目标元素是否有滚动条，如果有并返回滚动相关的style getStyle(el,'overflow')
 * @param el
 * @param isVertical
 * @returns
 */
export declare const isScroll: (
  el: HTMLElement,
  isVertical?: Nullable<boolean>,
) => RegExpMatchArray | null;
/**
 * 从当前元素向祖先依次查找，查找到第一个发生滚动的父yuansu
 * @param el - 开始查找的元素
 * @param isVertical - 垂直方向
 * @returns
 */
export declare const getScrollContainer: (
  el: HTMLElement,
  isVertical?: Nullable<boolean>,
) => Window | HTMLElement | undefined;
export declare const isInContainer: (
  el: Element | undefined,
  container: Element | Window | undefined,
) => boolean;
/**
 * 返回元素相对父级（带有定位的父级）上方的偏移
 * @param el
 * @returns
 */
export declare const getOffsetTop: (el: HTMLElement) => number;
/**
 * getOffsetTop(el) - getOffsetTop(containerEl)
 * @param el
 * @param containerEl
 * @returns
 */
export declare const getOffsetTopDistance: (
  el: HTMLElement,
  containerEl: HTMLElement,
) => number;
export declare const stop: (e: Event) => void;
export declare const getClientXY: (event: MouseEvent | TouchEvent) => {
  clientX: number;
  clientY: number;
};
/**
 * 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
 * @param element
 * @returns
 */
export declare const getBoundingClientRect: (
  element: HTMLElement | Element,
) => {
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
};
