var t = Object.prototype.toString;
function n(n) {
  return null == n
    ? void 0 === n
      ? '[object Undefined]'
      : '[object Null]'
    : t.call(n);
}
function r(t) {
  return '[object Number]' === n(t);
}
function e(t) {
  return '[object String]' === n(t);
}
function o(t) {
  return '[object Array]' === n(t);
}
function c(t) {
  return '[object Object]' === n(t);
}
function i() {
  for (
    var t = new Date().valueOf(), n = '1234567890', r = '', e = 0;
    e < 13;
    e++
  )
    r += n.charAt(Math.floor(Math.random() * n.length));
  return t + parseInt(r, 10);
}
function u(t, n) {
  void 0 === n && (n = 0);
  for (var r = t.charCodeAt(n).toString(16).toUpperCase(); r.length < 4; )
    r = '0'.concat(r);
  return '\\u'.concat(r);
}
function a(t) {
  return t
    ? Array.prototype.reduce.call(
        t,
        function (n, r, e) {
          return ''.concat(n).concat(u(t, e));
        },
        '',
      )
    : '';
}
var f = function () {
  return (
    (f =
      Object.assign ||
      function (t) {
        for (var n, r = 1, e = arguments.length; r < e; r++)
          for (var o in (n = arguments[r]))
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        return t;
      }),
    f.apply(this, arguments)
  );
};
function s(t, n) {
  var r = 'function' == typeof Symbol && t[Symbol.iterator];
  if (!r) return t;
  var e,
    o,
    c = r.call(t),
    i = [];
  try {
    for (; (void 0 === n || n-- > 0) && !(e = c.next()).done; ) i.push(e.value);
  } catch (t) {
    o = { error: t };
  } finally {
    try {
      e && !e.done && (r = c.return) && r.call(c);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}
function l(t, n, r) {
  if (r || 2 === arguments.length)
    for (var e, o = 0, c = n.length; o < c; o++)
      (!e && o in n) ||
        (e || (e = Array.prototype.slice.call(n, 0, o)), (e[o] = n[o]));
  return t.concat(e || Array.prototype.slice.call(n));
}
function h(t) {
  return l([], s(new Set(t)), !1);
}
function b(t) {
  return t.reduce(function (t, n) {
    return t.concat(Array.isArray(n) ? b(n) : n);
  }, []);
}
function p(t, n) {
  var r = null;
  return function (e) {
    var o = this;
    null !== r && clearTimeout(r),
      (r = setTimeout(function () {
        var n = o;
        t.call(n, e), (r = null);
      }, n));
  };
}
function y(t, n) {
  var r = 0;
  return function (e) {
    var o = Date.now();
    o - r >= n && (t.call(this, e), (r = o));
  };
}
function v() {
  for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
  var r = {};
  return (
    t.forEach(function (t) {
      Object.keys(t).forEach(function (n) {
        r.hasOwnProperty(n) ? (r[n] = [].concat(r[n], t[n])) : (r[n] = t[n]);
      });
    }),
    r
  );
}
function d(t) {
  return c(t) ? f({}, t) : o(t) ? l([], s(t), !1) : t;
}
function F(t, n) {
  if ((void 0 === n && (n = new Map()), c(t) && null !== t)) {
    var r = n.get(t);
    if (r) return r;
    var e = Array.isArray(t),
      o = e ? [] : {};
    return (
      n.set(t, o),
      e
        ? t.forEach(function (t, r) {
            o[r] = F(t, n);
          })
        : Object.keys(t).forEach(function (r) {
            o[r] = F(t[r], n);
          }),
      o
    );
  }
  return t;
}
function g(t, n, r, e) {
  'string' == typeof t && (t = document.querySelector(t)),
    e
      ? t.addEventListener(n, function (t) {
          var n = t.target;
          n.matches(e) && r.call(n, t);
        })
      : t.addEventListener(n, r);
}
var j = (function () {
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
  O = (function () {
    function t() {
      this.cbFns = {};
    }
    return (
      (t.prototype.subscribe = function (t, n) {
        var r,
          e = i();
        return (
          this.cbFns[t]
            ? (this.cbFns[t][e] = n)
            : (this.cbFns[t] = (((r = {})[e] = n), r)),
          e
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
export {
  j as EventBus,
  O as PubSub,
  g as addEventListener,
  d as clone,
  p as debounce,
  F as deepClone,
  b as flatten,
  n as getTag,
  o as isArray,
  r as isNumber,
  c as isPlanObject,
  e as isString,
  v as mergeObject,
  y as throttle,
  a as toUnicode,
  u as toUnicodeAt,
  h as unique,
  i as uuid,
};
