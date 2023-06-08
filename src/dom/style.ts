/* eslint-disable consistent-return */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
import { camelize } from '../string';
import { isPlanObject, Nullable } from '../utils';
import isServer from './isServer';

function trimArr(s: string) {
  return (s || '').split(' ').filter(item => !!item.trim());
}

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
export function hasClass(el: HTMLElement | Element, cls: string): boolean {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1)
    throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  }
  const className = el.getAttribute('class') || '';
  return className.split(' ').includes(cls);
}

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
export function addClass(el: HTMLElement | Element, cls: string): void {
  if (!el) return;
  let className = el.getAttribute('class') || '';
  const curClass = trimArr(className);
  const classes = (cls || '')
    .split(' ')
    .filter(item => !curClass.includes(item) && !!item.trim());

  if (el.classList) {
    el.classList.add(...classes);
  } else {
    className += ` ${classes.join(' ')}`;
    el.setAttribute('class', className);
  }
}

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
export function removeClass(el: HTMLElement | Element, cls: string): void {
  if (!el || !cls) return;
  const classes = trimArr(cls);
  let curClass = el.getAttribute('class') || '';

  if (el.classList) {
    el.classList.remove(...classes);
    return;
  }
  classes.forEach(item => {
    curClass = curClass.replace(` ${item} `, ' ');
  });
  const className = trimArr(curClass).join(' ');
  el.setAttribute('class', className);
}

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
export const getStyle = function (
  element: HTMLElement,
  styleName: string,
): string {
  if (isServer) return '';
  if (!element || !styleName) return '';
  styleName = camelize(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    const style = element.style[styleName];
    if (style) return style;
    const computed = document.defaultView?.getComputedStyle(element, '');
    return computed ? computed[styleName] : '';
  } catch (e) {
    return element.style[styleName];
  }
};

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
export function setStyle(
  element: HTMLElement,
  styleName: Object | string,
  value?: string,
): void {
  if (!element || !styleName) return;

  if (isPlanObject(styleName)) {
    Object.keys(styleName).forEach(prop => {
      setStyle(element, prop, styleName[prop]);
    });
  } else {
    styleName = camelize(styleName as string);
    element.style[styleName as string] = value;
  }
}
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
export function removeStyle(element: HTMLElement, style: string) {
  if (!element || !style) return;

  if (isPlanObject(style)) {
    Object.keys(style).forEach(prop => {
      setStyle(element, prop, '');
    });
  } else {
    setStyle(element, style, '');
  }
}

/**
 * 目标元素是否有滚动条，如果有并返回滚动相关的style getStyle(el,'overflow')
 * @param el
 * @param isVertical
 * @returns
 */
export const isScroll = (
  el: HTMLElement,
  isVertical?: Nullable<boolean>,
): RegExpMatchArray | null => {
  if (isServer) return null;
  const determinedDirection = isVertical === null || isVertical === undefined;
  const overflow = determinedDirection
    ? getStyle(el, 'overflow')
    : isVertical
    ? getStyle(el, 'overflow-y')
    : getStyle(el, 'overflow-x');

  return overflow.match(/(scroll|auto|overlay)/);
};

/**
 * 从当前元素向祖先依次查找，查找到第一个发生滚动的父yuansu
 * @param el - 开始查找的元素
 * @param isVertical - 垂直方向
 * @returns
 */
export const getScrollContainer = (
  el: HTMLElement,
  isVertical?: Nullable<boolean>,
): Window | HTMLElement | undefined => {
  if (isServer) return;

  let parent: HTMLElement = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }
    if (isScroll(parent, isVertical)) {
      return parent;
    }
    parent = parent.parentNode as HTMLElement;
  }
  return parent;
};

export const isInContainer = (
  el: Element | undefined,
  container: Element | Window | undefined,
): boolean => {
  if (isServer || !el || !container) return false;

  const elRect = el.getBoundingClientRect();

  let containerRect: Pick<DOMRect, 'top' | 'bottom' | 'left' | 'right'>;
  if (container instanceof Element) {
    containerRect = container.getBoundingClientRect();
  } else {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0,
    };
  }
  return (
    elRect.top < containerRect.bottom &&
    elRect.bottom > containerRect.top &&
    elRect.right > containerRect.left &&
    elRect.left < containerRect.right
  );
};
/**
 * 返回元素相对父级（带有定位的父级）上方的偏移
 * @param el
 * @returns
 */
export const getOffsetTop = (el: HTMLElement) => {
  let offset = 0;
  let parent = el;

  while (parent) {
    offset += parent.offsetTop;
    parent = parent.offsetParent as HTMLElement;
  }

  return offset;
};

/**
 * getOffsetTop(el) - getOffsetTop(containerEl)
 * @param el
 * @param containerEl
 * @returns
 */
export const getOffsetTopDistance = (
  el: HTMLElement,
  containerEl: HTMLElement,
) => {
  return Math.abs(getOffsetTop(el) - getOffsetTop(containerEl));
};

export const stop = (e: Event) => e.stopPropagation();

export const getClientXY = (event: MouseEvent | TouchEvent) => {
  let clientX: number;
  let clientY: number;
  if (event.type === 'touchend') {
    clientY = (event as TouchEvent).changedTouches[0].clientY;
    clientX = (event as TouchEvent).changedTouches[0].clientX;
  } else if (event.type.startsWith('touch')) {
    clientY = (event as TouchEvent).touches[0].clientY;
    clientX = (event as TouchEvent).touches[0].clientX;
  } else {
    clientY = (event as MouseEvent).clientY;
    clientX = (event as MouseEvent).clientX;
  }
  return {
    clientX,
    clientY,
  };
};
/**
 * 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
 * @param element
 * @returns
 */
export const getBoundingClientRect = (element: HTMLElement | Element) => {
  const rect = element.getBoundingClientRect();

  // IE浏览器是否低于11
  const isIE = navigator.userAgent.indexOf('MSIE') !== -1;

  const rectTop =
    isIE && element.tagName === 'HTML' ? -element.scrollTop : rect.top;

  return {
    left: rect.left,
    top: rectTop,
    right: rect.right,
    bottom: rect.bottom,
    width: rect.right - rect.left,
    height: rect.bottom - rectTop,
  };
};
