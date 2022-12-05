!(function (t, n) {
  'object' == typeof exports && 'undefined' != typeof module
    ? n(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], n)
    : n(
        ((t =
          'undefined' != typeof globalThis ? globalThis : t || self).mxUtils =
          {}),
      );
})(this, function (t) {
  'use strict';
  var n = Object.prototype.toString;
  function e(t) {
    return null == t
      ? void 0 === t
        ? '[object Undefined]'
        : '[object Null]'
      : n.call(t);
  }
  function r(t) {
    return '[object Number]' === e(t);
  }
  function o(t) {
    return '[object Array]' === e(t);
  }
  function c(t) {
    return '[object Object]' === e(t);
  }
  function i() {
    for (
      var t = new Date().valueOf(), n = '1234567890', e = '', r = 0;
      r < 13;
      r++
    )
      e += n.charAt(Math.floor(Math.random() * n.length));
    return t + parseInt(e, 10);
  }
  function u(t, n) {
    void 0 === n && (n = 0);
    for (var e = t.charCodeAt(n).toString(16).toUpperCase(); e.length < 4; )
      e = '0'.concat(e);
    return '\\u'.concat(e);
  }
  var f = function () {
    return (
      (f =
        Object.assign ||
        function (t) {
          for (var n, e = 1, r = arguments.length; e < r; e++)
            for (var o in (n = arguments[e]))
              Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          return t;
        }),
      f.apply(this, arguments)
    );
  };
  function a(t, n) {
    var e = 'function' == typeof Symbol && t[Symbol.iterator];
    if (!e) return t;
    var r,
      o,
      c = e.call(t),
      i = [];
    try {
      for (; (void 0 === n || n-- > 0) && !(r = c.next()).done; )
        i.push(r.value);
    } catch (t) {
      o = { error: t };
    } finally {
      try {
        r && !r.done && (e = c.return) && e.call(c);
      } finally {
        if (o) throw o.error;
      }
    }
    return i;
  }
  function s(t, n, e) {
    if (e || 2 === arguments.length)
      for (var r, o = 0, c = n.length; o < c; o++)
        (!r && o in n) ||
          (r || (r = Array.prototype.slice.call(n, 0, o)), (r[o] = n[o]));
    return t.concat(r || Array.prototype.slice.call(n));
  }
  var l = (function () {
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
    h = (function () {
      function t() {
        this.cbFns = {};
      }
      return (
        (t.prototype.subscribe = function (t, n) {
          var e,
            r = i();
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
          else if (r(t)) {
            var n = Object.values(this.cbFns).find(function (n) {
              return n.hasOwnProperty(t);
            });
            n && delete n[t];
          }
        }),
        t
      );
    })();
  (t.EventBus = l),
    (t.PubSub = h),
    (t.addEventListener = function (t, n, e, r) {
      'string' == typeof t && (t = document.querySelector(t)),
        r
          ? t.addEventListener(n, function (t) {
              var n = t.target;
              n.matches(r) && e.call(n, t);
            })
          : t.addEventListener(n, e);
    }),
    (t.clone = function (t) {
      return c(t) ? f({}, t) : o(t) ? s([], a(t), !1) : t;
    }),
    (t.debounce = function (t, n) {
      var e = null;
      return function (r) {
        var o = this;
        null !== e && clearTimeout(e),
          (e = setTimeout(function () {
            var n = o;
            t.call(n, r), (e = null);
          }, n));
      };
    }),
    (t.deepClone = function t(n, e) {
      if ((void 0 === e && (e = new Map()), c(n) && null !== n)) {
        var r = e.get(n);
        if (r) return r;
        var o = Array.isArray(n),
          i = o ? [] : {};
        return (
          e.set(n, i),
          o
            ? n.forEach(function (n, r) {
                i[r] = t(n, e);
              })
            : Object.keys(n).forEach(function (r) {
                i[r] = t(n[r], e);
              }),
          i
        );
      }
      return n;
    }),
    (t.flatten = function t(n) {
      return n.reduce(function (n, e) {
        return n.concat(Array.isArray(e) ? t(e) : e);
      }, []);
    }),
    (t.getTag = e),
    (t.isArray = o),
    (t.isNumber = r),
    (t.isPlanObject = c),
    (t.isString = function (t) {
      return '[object String]' === e(t);
    }),
    (t.mergeObject = function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var e = {};
      return (
        t.forEach(function (t) {
          Object.keys(t).forEach(function (n) {
            e.hasOwnProperty(n)
              ? (e[n] = [].concat(e[n], t[n]))
              : (e[n] = t[n]);
          });
        }),
        e
      );
    }),
    (t.throttle = function (t, n) {
      var e = 0;
      return function (r) {
        var o = Date.now();
        o - e >= n && (t.call(this, r), (e = o));
      };
    }),
    (t.toUnicode = function (t) {
      return t
        ? Array.prototype.reduce.call(
            t,
            function (n, e, r) {
              return ''.concat(n).concat(u(t, r));
            },
            '',
          )
        : '';
    }),
    (t.toUnicodeAt = u),
    (t.unique = function (t) {
      return s([], a(new Set(t)), !1);
    }),
    (t.uuid = i),
    Object.defineProperty(t, '__esModule', { value: !0 });
});
