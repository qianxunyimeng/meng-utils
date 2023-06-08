const endtimeStr = '23:59:59';
// const starttimeStr = '00:00:00';

function getYYMMdd(d: Date) {
  return `${d.getFullYear()}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
}

function getHHMMdd(d: Date) {
  return d.toLocaleTimeString();
}

function getTodayTime() {
  const d = new Date();
  return `${getYYMMdd(d)} ${getHHMMdd(d)}`;
}

/**
 * 今年起始时间
 * @param isTodayAsEnd - 是否以当前时间作为结束点，默认 isTodayAsEnd = true
 * @returns
 */
export const yearRange = (isTodayAsEnd = true) => {
  const d = new Date();
  return {
    start: `${getYYMMdd(new Date(d.getFullYear(), 0, 1))} 00:00:00`,
    end: isTodayAsEnd
      ? getTodayTime()
      : `${getYYMMdd(new Date(d.getFullYear(), 12, 0))} 23:59:59`,
  };
};

/**
 * 获取今天的起始时间
 * @param isTodayAsEnd - 是否以当前时间作为结束点，默认 isTodayAsEnd = true
 * @returns
 */
export const todayRange = (isTodayAsEnd = true) => {
  const d = new Date();
  let startTime = '';
  let endTime = '';
  const startDate = getYYMMdd(d);
  startTime = `${startDate} 00:00:00`;
  endTime = `${startDate} ${isTodayAsEnd ? getHHMMdd(d) : endtimeStr}`;
  return {
    start: startTime,
    end: endTime,
  };
};

/**
 * 昨日 起始时间
 * @returns
 */
export const lastDayRange = () => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const startDate = getYYMMdd(d);
  return {
    startTime: `${startDate} 00:00:00`,
    endTime: `${startDate} ${endtimeStr}`,
  };
};
/**
 * 最近7天 起始时间
 * @param isTodayAsEnd - 是否以当前时间作为结束点，默认 isTodayAsEnd = true
 * @returns
 */
export const last7DaysRange = (isTodayAsEnd = true) => {
  const d = new Date();
  const enddate = getYYMMdd(d);
  d.setDate(d.getDate() - 6);
  return {
    start: `${getYYMMdd(d)} 00:00:00`,
    end: isTodayAsEnd ? getTodayTime() : `${enddate} 23:59:59`,
  };
};

/**
 * 最近 14 天 起始时间
 * @param isTodayAsEnd - 是否以当前时间作为结束点，默认 isTodayAsEnd = true
 * @returns
 */
export const last14DaysRange = (isTodayAsEnd = true) => {
  const d = new Date();
  const enddate = getYYMMdd(d);
  d.setDate(d.getDate() - 13);
  return {
    start: `${getYYMMdd(d)} 00:00:00`,
    end: isTodayAsEnd ? getTodayTime() : `${enddate} 23:59:59`,
  };
};

/**
 * 本周起始时间
 * @param isTodayAsEnd - 是否以当前时间作为结束点 默认 isTodayAsEnd = true
 * @returns
 */
export const weekRange = (isTodayAsEnd = true) => {
  const d = new Date();
  const week = d.getDay();
  const millisecond = 1000 * 60 * 60 * 24;
  const minusDay = week !== 0 ? week - 1 : 6; // 本周周一

  const monday = new Date(d.getTime() - minusDay * millisecond);
  const sunday = new Date(monday.getTime() + 6 * millisecond);
  return {
    start: `${getYYMMdd(monday)} 00:00:00 `,
    end: isTodayAsEnd ? getTodayTime() : `${getYYMMdd(sunday)} 23:59:59`,
  };
};

/**
 * 上周起始时间
 * @returns
 */
export const lastWeekRange = () => {
  const d = new Date();
  let weekNum = d.getDay();
  weekNum = weekNum === 0 ? 7 : weekNum;
  const lastdate = new Date(d.getTime() - weekNum * 24 * 60 * 60 * 1000);
  const firstdate = new Date(d.getTime() - (weekNum + 6) * 24 * 60 * 60 * 1000);
  return {
    start: `${getYYMMdd(firstdate)} 00:00:00`,
    end: `${getYYMMdd(lastdate)} 23:59:59`,
  };
};

/**
 * 上月起始时间
 * @returns
 */
export const lastMonthRange = () => {
  const d = new Date();
  const s1 = new Date(d.getFullYear(), d.getMonth(), 0);
  const s2 = new Date(d.getFullYear(), d.getMonth() - 1, 1);
  return {
    start: `${getYYMMdd(s2)} 00:00:00`,
    end: `${getYYMMdd(s1)} 23:59:59`,
  };
};

/**
 * 去年起始时间
 * @returns
 */
export const lastYearRange = () => {
  const d = new Date();
  return {
    start: `${getYYMMdd(new Date(d.getFullYear() - 1, 0, 1))} 00:00:00`,
    end: `${getYYMMdd(new Date(d.getFullYear() - 1, 12, 0))} 23:59:59`,
  };
};
