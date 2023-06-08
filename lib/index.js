!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], e)
    : e(
        ((t = 'undefined' != typeof globalThis ? globalThis : t || self).mu =
          {}),
      );
})(this, function (t) {
  'use strict';
  var e = Object.prototype,
    n = e.toString,
    r = e.hasOwnProperty;
  function o(t) {
    return null == t
      ? void 0 === t
        ? '[object Undefined]'
        : '[object Null]'
      : n.call(t);
  }
  function c(t) {
    return '[object Number]' === o(t);
  }
  function a(t) {
    return '[object Array]' === o(t);
  }
  function i(t) {
    if (!t || '[object Object]' !== o(t)) return !1;
    var e,
      n = r.call(t, 'constructor'),
      c =
        t.constructor &&
        t.constructor.prototype &&
        r.call(t.constructor.prototype, 'isPrototypeOf');
    if (t.constructor && !n && !c) return !1;
    for (e in t);
    return void 0 === e || r.call(t, e);
  }
  var u = function () {
    return (
      (u =
        Object.assign ||
        function (t) {
          for (var e, n = 1, r = arguments.length; n < r; n++)
            for (var o in (e = arguments[n]))
              Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          return t;
        }),
      u.apply(this, arguments)
    );
  };
  function l(t, e) {
    var n = 'function' == typeof Symbol && t[Symbol.iterator];
    if (!n) return t;
    var r,
      o,
      c = n.call(t),
      a = [];
    try {
      for (; (void 0 === e || e-- > 0) && !(r = c.next()).done; )
        a.push(r.value);
    } catch (t) {
      o = { error: t };
    } finally {
      try {
        r && !r.done && (n = c.return) && n.call(c);
      } finally {
        if (o) throw o.error;
      }
    }
    return a;
  }
  function f(t, e, n) {
    if (n || 2 === arguments.length)
      for (var r, o = 0, c = e.length; o < c; o++)
        (!r && o in e) ||
          (r || (r = Array.prototype.slice.call(e, 0, o)), (r[o] = e[o]));
    return t.concat(r || Array.prototype.slice.call(e));
  }
  function s() {
    for (
      var t = new Date().valueOf(), e = '1234567890', n = '', r = 0;
      r < 13;
      r++
    )
      n += e.charAt(Math.floor(Math.random() * e.length));
    return t + parseInt(n, 10);
  }
  var p = function (t) {
    return 'object' == typeof t && null !== t;
  };
  function d(t, e) {
    void 0 === e && (e = 0);
    for (var n = t.charCodeAt(e).toString(16).toUpperCase(); n.length < 4; )
      n = '0'.concat(n);
    return '\\u'.concat(n);
  }
  var v = /-(\w)/g,
    h = /\B([A-Z])/g,
    y = function (t) {
      var e = Object.create(null);
      return function (n) {
        return e[n] || (e[n] = t(n));
      };
    },
    g = y(function (t) {
      return t.replace(v, function (t, e) {
        return e ? e.toUpperCase() : '';
      });
    });
  var b = y(function (t) {
      return t.replace(h, '-$1').toLowerCase();
    }),
    w = y(function (t) {
      return t.charAt(0).toUpperCase() + t.slice(1);
    });
  var m = Object.prototype.hasOwnProperty,
    D = Object.getOwnPropertyDescriptor,
    j = Object.defineProperty;
  function O(t, e) {
    j && '__proto__' === e.name
      ? j(t, e.name, {
          enumerable: !0,
          configurable: !0,
          value: e.newValue,
          writable: !0,
        })
      : (t[e.name] = e.newValue);
  }
  function S(t, e) {
    if ('__proto__' === e) {
      if (!m.call(t, e)) return;
      if (D) return D(t, e).value;
    }
    return t[e];
  }
  function F(t, e) {
    void 0 === e && (e = !0);
    for (var n, r, o, c, u, l, f = [], s = 2; s < arguments.length; s++)
      f[s - 2] = arguments[s];
    return (
      (null == t || ('object' != typeof t && 'function' != typeof t)) &&
        (t = {}),
      f.forEach(function (f) {
        if (null != (n = f))
          for (r in n)
            (o = S(t, r)),
              (c = S(n, r)),
              t !== c &&
                (e && c && (i(c) || (u = a(c)))
                  ? (u
                      ? ((u = !1), (l = o && a(o) ? o : []))
                      : (l = o && i(o) ? o : {}),
                    O(t, { name: r, newValue: F(l, e, c) }))
                  : void 0 !== c && O(t, { name: r, newValue: c }));
      }),
      t
    );
  }
  function A(t) {
    return F({}, !0, { _: t })._;
  }
  var T = (function () {
      function t() {
        this.cbFns = {};
      }
      return (
        (t.prototype.on = function (t, e) {
          this.cbFns[t] ? this.cbFns[t].push(e) : (this.cbFns[t] = [e]);
        }),
        (t.prototype.emit = function (t, e) {
          this.cbFns[t] &&
            this.cbFns[t].length > 0 &&
            this.cbFns[t].forEach(function (t) {
              t(e);
            });
        }),
        (t.prototype.off = function (t) {
          t ? delete this.cbFns[t] : (this.cbFns = {});
        }),
        t
      );
    })(),
    C = (function () {
      function t() {
        this.cbFns = {};
      }
      return (
        (t.prototype.subscribe = function (t, e) {
          var n,
            r = s();
          return (
            this.cbFns[t]
              ? (this.cbFns[t][r] = e)
              : (this.cbFns[t] = (((n = {})[r] = e), n)),
            r
          );
        }),
        (t.prototype.publish = function (t, e) {
          this.cbFns[t] &&
            Object.values(this.cbFns[t]).forEach(function (t) {
              t(e);
            });
        }),
        (t.prototype.unsubscribe = function (t) {
          if (void 0 === t) this.cbFns = {};
          else if ('string' == typeof t) this.cbFns[t] && delete this.cbFns[t];
          else if (c(t)) {
            var e = Object.values(this.cbFns).find(function (e) {
              return e.hasOwnProperty(t);
            });
            e && delete e[t];
          }
        }),
        t
      );
    })(),
    E = 'undefined' == typeof window;
  function _(t) {
    return (t || '').split(' ').filter(function (t) {
      return !!t.trim();
    });
  }
  var P = function (t, e) {
    var n;
    if (E) return '';
    if (!t || !e) return '';
    'float' === (e = g(e)) && (e = 'cssFloat');
    try {
      var r = t.style[e];
      if (r) return r;
      var o =
        null === (n = document.defaultView) || void 0 === n
          ? void 0
          : n.getComputedStyle(t, '');
      return o ? o[e] : '';
    } catch (n) {
      return t.style[e];
    }
  };
  function L(t, e, n) {
    t &&
      e &&
      (i(e)
        ? Object.keys(e).forEach(function (n) {
            L(t, n, e[n]);
          })
        : ((e = g(e)), (t.style[e] = n)));
  }
  var R = function (t, e) {
      return E
        ? null
        : P(t, null == e ? 'overflow' : e ? 'overflow-y' : 'overflow-x').match(
            /(scroll|auto|overlay)/,
          );
    },
    Y = function (t) {
      for (var e = 0, n = t; n; ) (e += n.offsetTop), (n = n.offsetParent);
      return e;
    },
    M = '23:59:59';
  function x(t) {
    return ''
      .concat(t.getFullYear(), '-')
      .concat((t.getMonth() + 1).toString().padStart(2, '0'), '-')
      .concat(t.getDate().toString().padStart(2, '0'));
  }
  function U(t) {
    return t.toLocaleTimeString();
  }
  function k() {
    var t = new Date();
    return ''.concat(x(t), ' ').concat(U(t));
  }
  (t.EventBus = T),
    (t.PubSub = C),
    (t.addClass = function (t, e) {
      var n;
      if (t) {
        var r = t.getAttribute('class') || '',
          o = _(r),
          c = (e || '').split(' ').filter(function (t) {
            return !o.includes(t) && !!t.trim();
          });
        t.classList
          ? (n = t.classList).add.apply(n, f([], l(c), !1))
          : ((r += ' '.concat(c.join(' '))), t.setAttribute('class', r));
      }
    }),
    (t.addEventListener = function (t, e, n, r) {
      'string' == typeof t && (t = document.querySelector(t)),
        r
          ? t.addEventListener(e, function (t) {
              var e = t.target;
              e.matches(r) && n.call(e, t);
            })
          : t.addEventListener(e, n);
    }),
    (t.camelToUnderScore = function (t) {
      var e = t.replace(/([A-Z])/g, '_$1').toLowerCase();
      return '_' === e.substr(0, 1) && (e = e.substring(1)), e;
    }),
    (t.camelize = g),
    (t.capitalize = w),
    (t.caseConvert = function (t) {
      return t.replace(/([a-z]*)([A-Z]*)/g, function (t, e, n) {
        return ''.concat(e.toUpperCase()).concat(n.toLowerCase());
      });
    }),
    (t.clone = function (t) {
      return i(t) ? u({}, t) : a(t) ? f([], l(t), !1) : t;
    }),
    (t.debounce = function (t, e) {
      var n = null;
      return function (r) {
        var o = this;
        null !== n && clearTimeout(n),
          (n = setTimeout(function () {
            var e = o;
            t.call(e, r), (n = null);
          }, e));
      };
    }),
    (t.debounceSuper = function (t, e, n) {
      var r = null;
      return function () {
        for (var o = [], c = 0; c < arguments.length; c++) o[c] = arguments[c];
        var a = this;
        if ((r && clearTimeout(r), n)) {
          var i = !r;
          (r = setTimeout(function () {
            r = null;
          }, e)),
            i && t.apply(a, o);
        } else
          r = setTimeout(function () {
            t.apply(a, o), (r = null);
          }, e);
      };
    }),
    (t.deepClone = function t(e, n) {
      if ((void 0 === n && (n = new Map()), i(e) && null !== e)) {
        var r = n.get(e);
        if (r) return r;
        var o = Array.isArray(e),
          c = o ? [] : {};
        return (
          n.set(e, c),
          o
            ? e.forEach(function (e, r) {
                c[r] = t(e, n);
              })
            : Object.keys(e).forEach(function (r) {
                c[r] = t(e[r], n);
              }),
          c
        );
      }
      return e;
    }),
    (t.deepCopy = A),
    (t.deepMergeKey = function (t, e) {
      for (var n = [], r = 2; r < arguments.length; r++)
        n[r - 2] = arguments[r];
      if (Array.isArray(t) || 'object' != typeof t) return t;
      var o = function (t) {
          return 'object' == typeof t;
        },
        c = function (t, n) {
          return (
            Object.keys(n)
              .filter(function (t) {
                return (
                  '__proto__' !== t &&
                  Object.prototype.hasOwnProperty.call(n, t)
                );
              })
              .forEach(function (r) {
                var a = n[r],
                  i = t[r];
                Array.isArray(i)
                  ? (t[r] = e ? a : f(f([], l(i), !1), l(a), !1))
                  : 'function' == typeof a
                  ? (t[r] = a)
                  : null != a && o(a) && null != i && o(i)
                  ? (t[r] = c(i, a))
                  : (t[r] = A(a));
              }),
            t
          );
        };
      return (
        n
          .filter(function (t) {
            return null != t && o(t);
          })
          .forEach(function (e) {
            return c(t, e);
          }),
        t
      );
    }),
    (t.equal = function t(e, n) {
      var r, o;
      if (p(e) && p(n)) {
        var c = Object.keys(e),
          a = Object.keys(n);
        if (c.length !== a.length) return !1;
        try {
          for (
            var i = (function (t) {
                var e = 'function' == typeof Symbol && Symbol.iterator,
                  n = e && t[e],
                  r = 0;
                if (n) return n.call(t);
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
                  e
                    ? 'Object is not iterable.'
                    : 'Symbol.iterator is not defined.',
                );
              })(c),
              u = i.next();
            !u.done;
            u = i.next()
          ) {
            var l = u.value;
            if (!a.includes(l)) return !1;
            if (!t(e[l], n[l])) return !1;
          }
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            u && !u.done && (o = i.return) && o.call(i);
          } finally {
            if (r) throw r.error;
          }
        }
        return !0;
      }
      return e === n;
    }),
    (t.extend = F),
    (t.flatten = function t(e) {
      return e.reduce(function (e, n) {
        return e.concat(Array.isArray(n) ? t(n) : n);
      }, []);
    }),
    (t.getBoundingClientRect = function (t) {
      var e = t.getBoundingClientRect(),
        n =
          -1 !== navigator.userAgent.indexOf('MSIE') && 'HTML' === t.tagName
            ? -t.scrollTop
            : e.top;
      return {
        left: e.left,
        top: n,
        right: e.right,
        bottom: e.bottom,
        width: e.right - e.left,
        height: e.bottom - n,
      };
    }),
    (t.getClientXY = function (t) {
      var e, n;
      return (
        'touchend' === t.type
          ? ((n = t.changedTouches[0].clientY),
            (e = t.changedTouches[0].clientX))
          : t.type.startsWith('touch')
          ? ((n = t.touches[0].clientY), (e = t.touches[0].clientX))
          : ((n = t.clientY), (e = t.clientX)),
        { clientX: e, clientY: n }
      );
    }),
    (t.getOffsetTop = Y),
    (t.getOffsetTopDistance = function (t, e) {
      return Math.abs(Y(t) - Y(e));
    }),
    (t.getProperty = S),
    (t.getScrollContainer = function (t, e) {
      if (!E) {
        for (var n = t; n; ) {
          if ([window, document, document.documentElement].includes(n))
            return window;
          if (R(n, e)) return n;
          n = n.parentNode;
        }
        return n;
      }
    }),
    (t.getStyle = P),
    (t.getTag = o),
    (t.hasClass = function (t, e) {
      if (!t || !e) return !1;
      if (-1 !== e.indexOf(' '))
        throw new Error('className should not contain space.');
      return t.classList
        ? t.classList.contains(e)
        : (t.getAttribute('class') || '').split(' ').includes(e);
    }),
    (t.hyphenate = b),
    (t.isArray = a),
    (t.isInContainer = function (t, e) {
      if (E || !t || !e) return !1;
      var n,
        r = t.getBoundingClientRect();
      return (
        (n =
          e instanceof Element
            ? e.getBoundingClientRect()
            : {
                top: 0,
                right: window.innerWidth,
                bottom: window.innerHeight,
                left: 0,
              }),
        r.top < n.bottom &&
          r.bottom > n.top &&
          r.right > n.left &&
          r.left < n.right
      );
    }),
    (t.isNumber = c),
    (t.isPlanObject = i),
    (t.isScroll = R),
    (t.isString = function (t) {
      return '[object String]' === o(t);
    }),
    (t.last14DaysRange = function (t) {
      void 0 === t && (t = !0);
      var e = new Date(),
        n = x(e);
      return (
        e.setDate(e.getDate() - 13),
        {
          start: ''.concat(x(e), ' 00:00:00'),
          end: t ? k() : ''.concat(n, ' 23:59:59'),
        }
      );
    }),
    (t.last7DaysRange = function (t) {
      void 0 === t && (t = !0);
      var e = new Date(),
        n = x(e);
      return (
        e.setDate(e.getDate() - 6),
        {
          start: ''.concat(x(e), ' 00:00:00'),
          end: t ? k() : ''.concat(n, ' 23:59:59'),
        }
      );
    }),
    (t.lastDayRange = function () {
      var t = new Date();
      t.setDate(t.getDate() - 1);
      var e = x(t);
      return {
        startTime: ''.concat(e, ' 00:00:00'),
        endTime: ''.concat(e, ' ').concat(M),
      };
    }),
    (t.lastMonthRange = function () {
      var t = new Date(),
        e = new Date(t.getFullYear(), t.getMonth(), 0),
        n = new Date(t.getFullYear(), t.getMonth() - 1, 1);
      return {
        start: ''.concat(x(n), ' 00:00:00'),
        end: ''.concat(x(e), ' 23:59:59'),
      };
    }),
    (t.lastWeekRange = function () {
      var t = new Date(),
        e = t.getDay();
      e = 0 === e ? 7 : e;
      var n = new Date(t.getTime() - 24 * e * 60 * 60 * 1e3),
        r = new Date(t.getTime() - 24 * (e + 6) * 60 * 60 * 1e3);
      return {
        start: ''.concat(x(r), ' 00:00:00'),
        end: ''.concat(x(n), ' 23:59:59'),
      };
    }),
    (t.lastYearRange = function () {
      var t = new Date();
      return {
        start: ''.concat(x(new Date(t.getFullYear() - 1, 0, 1)), ' 00:00:00'),
        end: ''.concat(x(new Date(t.getFullYear() - 1, 12, 0)), ' 23:59:59'),
      };
    }),
    (t.mergeObject = function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      var n = {};
      return (
        t.forEach(function (t) {
          Object.keys(t).forEach(function (e) {
            n.hasOwnProperty(e)
              ? (n[e] = [].concat(n[e], t[e]))
              : (n[e] = t[e]);
          });
        }),
        n
      );
    }),
    (t.removeClass = function (t, e) {
      var n;
      if (t && e) {
        var r = _(e),
          o = t.getAttribute('class') || '';
        if (t.classList) (n = t.classList).remove.apply(n, f([], l(r), !1));
        else {
          r.forEach(function (t) {
            o = o.replace(' '.concat(t, ' '), ' ');
          });
          var c = _(o).join(' ');
          t.setAttribute('class', c);
        }
      }
    }),
    (t.removeStyle = function (t, e) {
      t &&
        e &&
        (i(e)
          ? Object.keys(e).forEach(function (e) {
              L(t, e, '');
            })
          : L(t, e, ''));
    }),
    (t.setProperty = O),
    (t.setStyle = L),
    (t.stop = function (t) {
      return t.stopPropagation();
    }),
    (t.throttle = function (t, e) {
      var n = 0;
      return function (r) {
        var o = Date.now();
        o - n >= e && (t.call(this, r), (n = o));
      };
    }),
    (t.toUnicode = function (t) {
      return t
        ? Array.prototype.reduce.call(
            t,
            function (e, n, r) {
              return ''.concat(e).concat(d(t, r));
            },
            '',
          )
        : '';
    }),
    (t.toUnicodeAt = d),
    (t.todayRange = function (t) {
      void 0 === t && (t = !0);
      var e = new Date(),
        n = x(e);
      return {
        start: ''.concat(n, ' 00:00:00'),
        end: ''.concat(n, ' ').concat(t ? U(e) : M),
      };
    }),
    (t.underScoreToCamel = function (t) {
      return t.replace(/\_(\w)/g, function (t, e) {
        return e.toUpperCase();
      });
    }),
    (t.underScoreToPascal = function (t) {
      return t.replace(/(^|_)(\w)/g, function (t, e, n) {
        return n.toUpperCase();
      });
    }),
    (t.unique = function (t) {
      return f([], l(new Set(t)), !1);
    }),
    (t.uuid = s),
    (t.weekRange = function (t) {
      void 0 === t && (t = !0);
      var e = new Date(),
        n = e.getDay(),
        r = 864e5,
        o = 0 !== n ? n - 1 : 6,
        c = new Date(e.getTime() - o * r),
        a = new Date(c.getTime() + 5184e5);
      return {
        start: ''.concat(x(c), ' 00:00:00 '),
        end: t ? k() : ''.concat(x(a), ' 23:59:59'),
      };
    }),
    (t.yearRange = function (t) {
      void 0 === t && (t = !0);
      var e = new Date();
      return {
        start: ''.concat(x(new Date(e.getFullYear(), 0, 1)), ' 00:00:00'),
        end: t
          ? k()
          : ''.concat(x(new Date(e.getFullYear(), 12, 0)), ' 23:59:59'),
      };
    }),
    Object.defineProperty(t, '__esModule', { value: !0 });
});
