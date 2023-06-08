var t = Object.prototype,
  n = t.toString,
  e = t.hasOwnProperty;
function r(t) {
  return null == t
    ? void 0 === t
      ? '[object Undefined]'
      : '[object Null]'
    : n.call(t);
}
function o(t) {
  return '[object Number]' === r(t);
}
function c(t) {
  return '[object String]' === r(t);
}
function a(t) {
  return '[object Array]' === r(t);
}
function i(t) {
  if (!t || '[object Object]' !== r(t)) return !1;
  var n,
    o = e.call(t, 'constructor'),
    c =
      t.constructor &&
      t.constructor.prototype &&
      e.call(t.constructor.prototype, 'isPrototypeOf');
  if (t.constructor && !o && !c) return !1;
  for (n in t);
  return void 0 === n || e.call(t, n);
}
var u = function () {
  return (
    (u =
      Object.assign ||
      function (t) {
        for (var n, e = 1, r = arguments.length; e < r; e++)
          for (var o in (n = arguments[e]))
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        return t;
      }),
    u.apply(this, arguments)
  );
};
function f(t, n) {
  var e = 'function' == typeof Symbol && t[Symbol.iterator];
  if (!e) return t;
  var r,
    o,
    c = e.call(t),
    a = [];
  try {
    for (; (void 0 === n || n-- > 0) && !(r = c.next()).done; ) a.push(r.value);
  } catch (t) {
    o = { error: t };
  } finally {
    try {
      r && !r.done && (e = c.return) && e.call(c);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function l(t, n, e) {
  if (e || 2 === arguments.length)
    for (var r, o = 0, c = n.length; o < c; o++)
      (!r && o in n) ||
        (r || (r = Array.prototype.slice.call(n, 0, o)), (r[o] = n[o]));
  return t.concat(r || Array.prototype.slice.call(n));
}
function s() {
  for (
    var t = new Date().valueOf(), n = '1234567890', e = '', r = 0;
    r < 13;
    r++
  )
    e += n.charAt(Math.floor(Math.random() * n.length));
  return t + parseInt(e, 10);
}
var p = function (t) {
  return 'object' == typeof t && null !== t;
};
function v(t, n) {
  var e, r;
  if (p(t) && p(n)) {
    var o = Object.keys(t),
      c = Object.keys(n);
    if (o.length !== c.length) return !1;
    try {
      for (
        var a = (function (t) {
            var n = 'function' == typeof Symbol && Symbol.iterator,
              e = n && t[n],
              r = 0;
            if (e) return e.call(t);
            if (t && 'number' == typeof t.length)
              return {
                next: function () {
                  return (
                    t && r >= t.length && (t = void 0),
                    { value: t && t[r++], done: !t }
                  );
                },
              };
            throw new TypeError(
              n ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
            );
          })(o),
          i = a.next();
        !i.done;
        i = a.next()
      ) {
        var u = i.value;
        if (!c.includes(u)) return !1;
        if (!v(t[u], n[u])) return !1;
      }
    } catch (t) {
      e = { error: t };
    } finally {
      try {
        i && !i.done && (r = a.return) && r.call(a);
      } finally {
        if (e) throw e.error;
      }
    }
    return !0;
  }
  return t === n;
}
function h(t, n) {
  void 0 === n && (n = 0);
  for (var e = t.charCodeAt(n).toString(16).toUpperCase(); e.length < 4; )
    e = '0'.concat(e);
  return '\\u'.concat(e);
}
function y(t) {
  return t
    ? Array.prototype.reduce.call(
        t,
        function (n, e, r) {
          return ''.concat(n).concat(h(t, r));
        },
        '',
      )
    : '';
}
var d = /-(\w)/g,
  b = /\B([A-Z])/g,
  g = function (t) {
    var n = Object.create(null);
    return function (e) {
      return n[e] || (n[e] = t(e));
    };
  },
  w = g(function (t) {
    return t.replace(d, function (t, n) {
      return n ? n.toUpperCase() : '';
    });
  });
function m(t) {
  return t.replace(/(^|_)(\w)/g, function (t, n, e) {
    return e.toUpperCase();
  });
}
function D(t) {
  return t.replace(/\_(\w)/g, function (t, n) {
    return n.toUpperCase();
  });
}
function j(t) {
  var n = t.replace(/([A-Z])/g, '_$1').toLowerCase();
  return '_' === n.substr(0, 1) && (n = n.substring(1)), n;
}
var O = g(function (t) {
    return t.replace(b, '-$1').toLowerCase();
  }),
  F = g(function (t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  });
function A(t) {
  return t.replace(/([a-z]*)([A-Z]*)/g, function (t, n, e) {
    return ''.concat(n.toUpperCase()).concat(e.toLowerCase());
  });
}
function E(t) {
  return l([], f(new Set(t)), !1);
}
function T(t) {
  return t.reduce(function (t, n) {
    return t.concat(Array.isArray(n) ? T(n) : n);
  }, []);
}
function _(t, n) {
  var e = null;
  return function (r) {
    var o = this;
    null !== e && clearTimeout(e),
      (e = setTimeout(function () {
        var n = o;
        t.call(n, r), (e = null);
      }, n));
  };
}
function S(t, n, e) {
  var r = null;
  return function () {
    for (var o = [], c = 0; c < arguments.length; c++) o[c] = arguments[c];
    var a = this;
    if ((r && clearTimeout(r), e)) {
      var i = !r;
      (r = setTimeout(function () {
        r = null;
      }, n)),
        i && t.apply(a, o);
    } else
      r = setTimeout(function () {
        t.apply(a, o), (r = null);
      }, n);
  };
}
function C(t, n) {
  var e = 0;
  return function (r) {
    var o = Date.now();
    o - e >= n && (t.call(this, r), (e = o));
  };
}
var L = Object.prototype.hasOwnProperty,
  P = Object.getOwnPropertyDescriptor,
  Y = Object.defineProperty;
function M(t, n) {
  Y && '__proto__' === n.name
    ? Y(t, n.name, {
        enumerable: !0,
        configurable: !0,
        value: n.newValue,
        writable: !0,
      })
    : (t[n.name] = n.newValue);
}
function x(t, n) {
  if ('__proto__' === n) {
    if (!L.call(t, n)) return;
    if (P) return P(t, n).value;
  }
  return t[n];
}
function k(t, n) {
  void 0 === n && (n = !0);
  for (var e, r, o, c, u, f, l = [], s = 2; s < arguments.length; s++)
    l[s - 2] = arguments[s];
  return (
    (null == t || ('object' != typeof t && 'function' != typeof t)) && (t = {}),
    l.forEach(function (l) {
      if (null != (e = l))
        for (r in e)
          (o = x(t, r)),
            (c = x(e, r)),
            t !== c &&
              (n && c && (i(c) || (u = a(c)))
                ? (u
                    ? ((u = !1), (f = o && a(o) ? o : []))
                    : (f = o && i(o) ? o : {}),
                  M(t, { name: r, newValue: k(f, n, c) }))
                : void 0 !== c && M(t, { name: r, newValue: c }));
    }),
    t
  );
}
function U(t) {
  return k({}, !0, { _: t })._;
}
function N(t, n) {
  for (var e = [], r = 2; r < arguments.length; r++) e[r - 2] = arguments[r];
  if (Array.isArray(t) || 'object' != typeof t) return t;
  var o = function (t) {
      return 'object' == typeof t;
    },
    c = function (t, e) {
      return (
        Object.keys(e)
          .filter(function (t) {
            return (
              '__proto__' !== t && Object.prototype.hasOwnProperty.call(e, t)
            );
          })
          .forEach(function (r) {
            var a = e[r],
              i = t[r];
            Array.isArray(i)
              ? (t[r] = n ? a : l(l([], f(i), !1), f(a), !1))
              : 'function' == typeof a
              ? (t[r] = a)
              : null != a && o(a) && null != i && o(i)
              ? (t[r] = c(i, a))
              : (t[r] = U(a));
          }),
        t
      );
    };
  return (
    e
      .filter(function (t) {
        return null != t && o(t);
      })
      .forEach(function (n) {
        return c(t, n);
      }),
    t
  );
}
function V() {
  for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
  var e = {};
  return (
    t.forEach(function (t) {
      Object.keys(t).forEach(function (n) {
        e.hasOwnProperty(n) ? (e[n] = [].concat(e[n], t[n])) : (e[n] = t[n]);
      });
    }),
    e
  );
}
function B(t) {
  return i(t) ? u({}, t) : a(t) ? l([], f(t), !1) : t;
}
function X(t, n) {
  if ((void 0 === n && (n = new Map()), i(t) && null !== t)) {
    var e = n.get(t);
    if (e) return e;
    var r = Array.isArray(t),
      o = r ? [] : {};
    return (
      n.set(t, o),
      r
        ? t.forEach(function (t, e) {
            o[e] = X(t, n);
          })
        : Object.keys(t).forEach(function (e) {
            o[e] = X(t[e], n);
          }),
      o
    );
  }
  return t;
}
function R(t, n, e, r) {
  'string' == typeof t && (t = document.querySelector(t)),
    r
      ? t.addEventListener(n, function (t) {
          var n = t.target;
          n.matches(r) && e.call(n, t);
        })
      : t.addEventListener(n, e);
}
var Z = (function () {
    function t() {
      this.cbFns = {};
    }
    return (
      (t.prototype.on = function (t, n) {
        this.cbFns[t] ? this.cbFns[t].push(n) : (this.cbFns[t] = [n]);
      }),
      (t.prototype.emit = function (t, n) {
        this.cbFns[t] &&
          this.cbFns[t].length > 0 &&
          this.cbFns[t].forEach(function (t) {
            t(n);
          });
      }),
      (t.prototype.off = function (t) {
        t ? delete this.cbFns[t] : (this.cbFns = {});
      }),
      t
    );
  })(),
  H = (function () {
    function t() {
      this.cbFns = {};
    }
    return (
      (t.prototype.subscribe = function (t, n) {
        var e,
          r = s();
        return (
          this.cbFns[t]
            ? (this.cbFns[t][r] = n)
            : (this.cbFns[t] = (((e = {})[r] = n), e)),
          r
        );
      }),
      (t.prototype.publish = function (t, n) {
        this.cbFns[t] &&
          Object.values(this.cbFns[t]).forEach(function (t) {
            t(n);
          });
      }),
      (t.prototype.unsubscribe = function (t) {
        if (void 0 === t) this.cbFns = {};
        else if ('string' == typeof t) this.cbFns[t] && delete this.cbFns[t];
        else if (o(t)) {
          var n = Object.values(this.cbFns).find(function (n) {
            return n.hasOwnProperty(t);
          });
          n && delete n[t];
        }
      }),
      t
    );
  })(),
  I = 'undefined' == typeof window;
function W(t) {
  return (t || '').split(' ').filter(function (t) {
    return !!t.trim();
  });
}
function $(t, n) {
  if (!t || !n) return !1;
  if (-1 !== n.indexOf(' '))
    throw new Error('className should not contain space.');
  return t.classList
    ? t.classList.contains(n)
    : (t.getAttribute('class') || '').split(' ').includes(n);
}
function q(t, n) {
  var e;
  if (t) {
    var r = t.getAttribute('class') || '',
      o = W(r),
      c = (n || '').split(' ').filter(function (t) {
        return !o.includes(t) && !!t.trim();
      });
    t.classList
      ? (e = t.classList).add.apply(e, l([], f(c), !1))
      : ((r += ' '.concat(c.join(' '))), t.setAttribute('class', r));
  }
}
function z(t, n) {
  var e;
  if (t && n) {
    var r = W(n),
      o = t.getAttribute('class') || '';
    if (t.classList) (e = t.classList).remove.apply(e, l([], f(r), !1));
    else {
      r.forEach(function (t) {
        o = o.replace(' '.concat(t, ' '), ' ');
      });
      var c = W(o).join(' ');
      t.setAttribute('class', c);
    }
  }
}
var G = function (t, n) {
  var e;
  if (I) return '';
  if (!t || !n) return '';
  'float' === (n = w(n)) && (n = 'cssFloat');
  try {
    var r = t.style[n];
    if (r) return r;
    var o =
      null === (e = document.defaultView) || void 0 === e
        ? void 0
        : e.getComputedStyle(t, '');
    return o ? o[n] : '';
  } catch (e) {
    return t.style[n];
  }
};
function J(t, n, e) {
  t &&
    n &&
    (i(n)
      ? Object.keys(n).forEach(function (e) {
          J(t, e, n[e]);
        })
      : ((n = w(n)), (t.style[n] = e)));
}
function K(t, n) {
  t &&
    n &&
    (i(n)
      ? Object.keys(n).forEach(function (n) {
          J(t, n, '');
        })
      : J(t, n, ''));
}
var Q = function (t, n) {
    return I
      ? null
      : G(t, null == n ? 'overflow' : n ? 'overflow-y' : 'overflow-x').match(
          /(scroll|auto|overlay)/,
        );
  },
  tt = function (t, n) {
    if (!I) {
      for (var e = t; e; ) {
        if ([window, document, document.documentElement].includes(e))
          return window;
        if (Q(e, n)) return e;
        e = e.parentNode;
      }
      return e;
    }
  },
  nt = function (t, n) {
    if (I || !t || !n) return !1;
    var e,
      r = t.getBoundingClientRect();
    return (
      (e =
        n instanceof Element
          ? n.getBoundingClientRect()
          : {
              top: 0,
              right: window.innerWidth,
              bottom: window.innerHeight,
              left: 0,
            }),
      r.top < e.bottom &&
        r.bottom > e.top &&
        r.right > e.left &&
        r.left < e.right
    );
  },
  et = function (t) {
    for (var n = 0, e = t; e; ) (n += e.offsetTop), (e = e.offsetParent);
    return n;
  },
  rt = function (t, n) {
    return Math.abs(et(t) - et(n));
  },
  ot = function (t) {
    return t.stopPropagation();
  },
  ct = function (t) {
    var n, e;
    return (
      'touchend' === t.type
        ? ((e = t.changedTouches[0].clientY), (n = t.changedTouches[0].clientX))
        : t.type.startsWith('touch')
        ? ((e = t.touches[0].clientY), (n = t.touches[0].clientX))
        : ((e = t.clientY), (n = t.clientX)),
      { clientX: n, clientY: e }
    );
  },
  at = function (t) {
    var n = t.getBoundingClientRect(),
      e =
        -1 !== navigator.userAgent.indexOf('MSIE') && 'HTML' === t.tagName
          ? -t.scrollTop
          : n.top;
    return {
      left: n.left,
      top: e,
      right: n.right,
      bottom: n.bottom,
      width: n.right - n.left,
      height: n.bottom - e,
    };
  },
  it = '23:59:59';
function ut(t) {
  return ''
    .concat(t.getFullYear(), '-')
    .concat((t.getMonth() + 1).toString().padStart(2, '0'), '-')
    .concat(t.getDate().toString().padStart(2, '0'));
}
function ft(t) {
  return t.toLocaleTimeString();
}
function lt() {
  var t = new Date();
  return ''.concat(ut(t), ' ').concat(ft(t));
}
var st = function (t) {
    void 0 === t && (t = !0);
    var n = new Date();
    return {
      start: ''.concat(ut(new Date(n.getFullYear(), 0, 1)), ' 00:00:00'),
      end: t
        ? lt()
        : ''.concat(ut(new Date(n.getFullYear(), 12, 0)), ' 23:59:59'),
    };
  },
  pt = function (t) {
    void 0 === t && (t = !0);
    var n = new Date(),
      e = ut(n);
    return {
      start: ''.concat(e, ' 00:00:00'),
      end: ''.concat(e, ' ').concat(t ? ft(n) : it),
    };
  },
  vt = function () {
    var t = new Date();
    t.setDate(t.getDate() - 1);
    var n = ut(t);
    return {
      startTime: ''.concat(n, ' 00:00:00'),
      endTime: ''.concat(n, ' ').concat(it),
    };
  },
  ht = function (t) {
    void 0 === t && (t = !0);
    var n = new Date(),
      e = ut(n);
    return (
      n.setDate(n.getDate() - 6),
      {
        start: ''.concat(ut(n), ' 00:00:00'),
        end: t ? lt() : ''.concat(e, ' 23:59:59'),
      }
    );
  },
  yt = function (t) {
    void 0 === t && (t = !0);
    var n = new Date(),
      e = ut(n);
    return (
      n.setDate(n.getDate() - 13),
      {
        start: ''.concat(ut(n), ' 00:00:00'),
        end: t ? lt() : ''.concat(e, ' 23:59:59'),
      }
    );
  },
  dt = function (t) {
    void 0 === t && (t = !0);
    var n = new Date(),
      e = n.getDay(),
      r = 864e5,
      o = 0 !== e ? e - 1 : 6,
      c = new Date(n.getTime() - o * r),
      a = new Date(c.getTime() + 5184e5);
    return {
      start: ''.concat(ut(c), ' 00:00:00 '),
      end: t ? lt() : ''.concat(ut(a), ' 23:59:59'),
    };
  },
  bt = function () {
    var t = new Date(),
      n = t.getDay();
    n = 0 === n ? 7 : n;
    var e = new Date(t.getTime() - 24 * n * 60 * 60 * 1e3),
      r = new Date(t.getTime() - 24 * (n + 6) * 60 * 60 * 1e3);
    return {
      start: ''.concat(ut(r), ' 00:00:00'),
      end: ''.concat(ut(e), ' 23:59:59'),
    };
  },
  gt = function () {
    var t = new Date(),
      n = new Date(t.getFullYear(), t.getMonth(), 0),
      e = new Date(t.getFullYear(), t.getMonth() - 1, 1);
    return {
      start: ''.concat(ut(e), ' 00:00:00'),
      end: ''.concat(ut(n), ' 23:59:59'),
    };
  },
  wt = function () {
    var t = new Date();
    return {
      start: ''.concat(ut(new Date(t.getFullYear() - 1, 0, 1)), ' 00:00:00'),
      end: ''.concat(ut(new Date(t.getFullYear() - 1, 12, 0)), ' 23:59:59'),
    };
  };
export {
  Z as EventBus,
  H as PubSub,
  q as addClass,
  R as addEventListener,
  j as camelToUnderScore,
  w as camelize,
  F as capitalize,
  A as caseConvert,
  B as clone,
  _ as debounce,
  S as debounceSuper,
  X as deepClone,
  U as deepCopy,
  N as deepMergeKey,
  v as equal,
  k as extend,
  T as flatten,
  at as getBoundingClientRect,
  ct as getClientXY,
  et as getOffsetTop,
  rt as getOffsetTopDistance,
  x as getProperty,
  tt as getScrollContainer,
  G as getStyle,
  r as getTag,
  $ as hasClass,
  O as hyphenate,
  a as isArray,
  nt as isInContainer,
  o as isNumber,
  i as isPlanObject,
  Q as isScroll,
  c as isString,
  yt as last14DaysRange,
  ht as last7DaysRange,
  vt as lastDayRange,
  gt as lastMonthRange,
  bt as lastWeekRange,
  wt as lastYearRange,
  V as mergeObject,
  z as removeClass,
  K as removeStyle,
  M as setProperty,
  J as setStyle,
  ot as stop,
  C as throttle,
  y as toUnicode,
  h as toUnicodeAt,
  pt as todayRange,
  D as underScoreToCamel,
  m as underScoreToPascal,
  E as unique,
  s as uuid,
  dt as weekRange,
  st as yearRange,
};
