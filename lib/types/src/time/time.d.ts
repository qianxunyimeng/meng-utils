/**
 * 今年起始时间
 * @param isTodayAsEnd - 是否以当前时间作为结束点，默认 isTodayAsEnd = true
 * @returns
 */
export declare const yearRange: (isTodayAsEnd?: boolean) => {
  start: string;
  end: string;
};
/**
 * 获取今天的起始时间
 * @param isTodayAsEnd - 是否以当前时间作为结束点，默认 isTodayAsEnd = true
 * @returns
 */
export declare const todayRange: (isTodayAsEnd?: boolean) => {
  start: string;
  end: string;
};
/**
 * 昨日 起始时间
 * @returns
 */
export declare const lastDayRange: () => {
  startTime: string;
  endTime: string;
};
/**
 * 最近7天 起始时间
 * @param isTodayAsEnd - 是否以当前时间作为结束点，默认 isTodayAsEnd = true
 * @returns
 */
export declare const last7DaysRange: (isTodayAsEnd?: boolean) => {
  start: string;
  end: string;
};
/**
 * 最近 14 天 起始时间
 * @param isTodayAsEnd - 是否以当前时间作为结束点，默认 isTodayAsEnd = true
 * @returns
 */
export declare const last14DaysRange: (isTodayAsEnd?: boolean) => {
  start: string;
  end: string;
};
/**
 * 本周起始时间
 * @param isTodayAsEnd - 是否以当前时间作为结束点 默认 isTodayAsEnd = true
 * @returns
 */
export declare const weekRange: (isTodayAsEnd?: boolean) => {
  start: string;
  end: string;
};
/**
 * 上周起始时间
 * @returns
 */
export declare const lastWeekRange: () => {
  start: string;
  end: string;
};
/**
 * 上月起始时间
 * @returns
 */
export declare const lastMonthRange: () => {
  start: string;
  end: string;
};
/**
 * 去年起始时间
 * @returns
 */
export declare const lastYearRange: () => {
  start: string;
  end: string;
};
