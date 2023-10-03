!function(e) {
    function t(t) {
        for (var n, r, o = t[0], a = t[1], s = 0, c = []; s < o.length; s++)
            r = o[s],
            Object.prototype.hasOwnProperty.call(i, r) && i[r] && c.push(i[r][0]),
            i[r] = 0;
        for (n in a)
            Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        for (u && u(t); c.length; )
            c.shift()()
    }
    var n = {}
      , r = {
        5: 0
    }
      , i = {
        5: 0
    };
    function o(t) {
        if (n[t])
            return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, o),
        r.l = !0,
        r.exports
    }
    o.e = function(e) {
        var t = [];
        r[e] ? t.push(r[e]) : 0 !== r[e] && {
            1: 1,
            8: 1,
            19: 1
        }[e] && t.push(r[e] = new Promise((function(t, n) {
            for (var i = ({}[e] || e) + ".css", a = o.p + i, s = document.getElementsByTagName("link"), c = 0; c < s.length; c++) {
                var u = (f = s[c]).getAttribute("data-href") || f.getAttribute("href");
                if ("stylesheet" === f.rel && (u === i || u === a))
                    return t()
            }
            var l = document.getElementsByTagName("style");
            for (c = 0; c < l.length; c++) {
                var f;
                if ((u = (f = l[c]).getAttribute("data-href")) === i || u === a)
                    return t()
            }
            var d = document.createElement("link");
            d.rel = "stylesheet",
            d.type = "text/css",
            d.onload = t,
            d.onerror = function(t) {
                var i = t && t.target && t.target.src || a
                  , o = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED",
                o.request = i,
                delete r[e],
                d.parentNode.removeChild(d),
                n(o)
            }
            ,
            d.href = a,
            document.getElementsByTagName("head")[0].appendChild(d)
        }
        )).then((function() {
            r[e] = 0
        }
        )));
        var n = i[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var a = new Promise((function(t, r) {
                    n = i[e] = [t, r]
                }
                ));
                t.push(n[2] = a);
                var s, c = document.createElement("script");
                c.charset = "utf-8",
                c.timeout = 120,
                o.nc && c.setAttribute("nonce", o.nc),
                c.src = function(e) {
                    return "retrogames/" +o.p + "" + ({}[e] || e) + ".chunk.js"
                }(e);
                var u = new Error;
                s = function(t) {
                    c.onerror = c.onload = null,
                    clearTimeout(l);
                    var n = i[e];
                    if (0 !== n) {
                        if (n) {
                            var r = t && ("load" === t.type ? "missing" : t.type)
                              , o = t && t.target && t.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + r + ": " + o + ")",
                            u.name = "ChunkLoadError",
                            u.type = r,
                            u.request = o,
                            n[1](u)
                        }
                        i[e] = void 0
                    }
                }
                ;
                var l = setTimeout((function() {
                    s({
                        type: "timeout",
                        target: c
                    })
                }
                ), 12e4);
                c.onerror = c.onload = s,
                document.head.appendChild(c)
            }
        return Promise.all(t)
    }
    ,
    o.m = e,
    o.c = n,
    o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(e, t) {
        if (1 & t && (e = o(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (o.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                o.d(n, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return n
    }
    ,
    o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return o.d(t, "a", t),
        t
    }
    ,
    o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    o.p = "",
    o.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var a = window.webpackJsonp = window.webpackJsonp || []
      , s = a.push.bind(a);
    a.push = t,
    a = a.slice();
    for (var c = 0; c < a.length; c++)
        t(a[c]);
    var u = s;
    o(o.s = 13)
}([function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "__extends", (function() {
        return i
    }
    )),
    n.d(t, "__assign", (function() {
        return o
    }
    )),
    n.d(t, "__rest", (function() {
        return a
    }
    )),
    n.d(t, "__decorate", (function() {
        return s
    }
    )),
    n.d(t, "__param", (function() {
        return c
    }
    )),
    n.d(t, "__metadata", (function() {
        return u
    }
    )),
    n.d(t, "__awaiter", (function() {
        return l
    }
    )),
    n.d(t, "__generator", (function() {
        return f
    }
    )),
    n.d(t, "__createBinding", (function() {
        return d
    }
    )),
    n.d(t, "__exportStar", (function() {
        return p
    }
    )),
    n.d(t, "__values", (function() {
        return h
    }
    )),
    n.d(t, "__read", (function() {
        return v
    }
    )),
    n.d(t, "__spread", (function() {
        return b
    }
    )),
    n.d(t, "__spreadArrays", (function() {
        return m
    }
    )),
    n.d(t, "__await", (function() {
        return g
    }
    )),
    n.d(t, "__asyncGenerator", (function() {
        return y
    }
    )),
    n.d(t, "__asyncDelegator", (function() {
        return _
    }
    )),
    n.d(t, "__asyncValues", (function() {
        return w
    }
    )),
    n.d(t, "__makeTemplateObject", (function() {
        return O
    }
    )),
    n.d(t, "__importStar", (function() {
        return E
    }
    )),
    n.d(t, "__importDefault", (function() {
        return S
    }
    )),
    n.d(t, "__classPrivateFieldGet", (function() {
        return I
    }
    )),
    n.d(t, "__classPrivateFieldSet", (function() {
        return C
    }
    ));
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
    var r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    };
    function i(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    var o = function() {
        return (o = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }
        ).apply(this, arguments)
    };
    function a(e, t) {
        var n = {};
        for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
        }
        return n
    }
    function s(e, t, n, r) {
        var i, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            a = Reflect.decorate(e, t, n, r);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return o > 3 && a && Object.defineProperty(t, n, a),
        a
    }
    function c(e, t) {
        return function(n, r) {
            t(n, r, e)
        }
    }
    function u(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
            return Reflect.metadata(e, t)
    }
    function l(e, t, n, r) {
        return new (n || (n = Promise))((function(i, o) {
            function a(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    o(e)
                }
            }
            function s(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }
            function c(e) {
                var t;
                e.done ? i(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(a, s)
            }
            c((r = r.apply(e, t || [])).next())
        }
        ))
    }
    function f(e, t) {
        var n, r, i, o, a = {
            label: 0,
            sent: function() {
                if (1 & i[0])
                    throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }
        ),
        o;
        function s(o) {
            return function(s) {
                return function(o) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                            0) : r.next) && !(i = i.call(r, o[1])).done)
                                return i;
                            switch (r = 0,
                            i && (o = [2 & o[0], i.value]),
                            o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = o[1],
                                o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(i = a.trys,
                                (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < i[1]) {
                                    a.label = i[1],
                                    i = o;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2],
                                    a.ops.push(o);
                                    break
                                }
                                i[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            o = t.call(e, a)
                        } catch (e) {
                            o = [6, e],
                            r = 0
                        } finally {
                            n = i = 0
                        }
                    if (5 & o[0])
                        throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    }
    function d(e, t, n, r) {
        void 0 === r && (r = n),
        e[r] = t[n]
    }
    function p(e, t) {
        for (var n in e)
            "default" === n || t.hasOwnProperty(n) || (t[n] = e[n])
    }
    function h(e) {
        var t = "function" == typeof Symbol && Symbol.iterator
          , n = t && e[t]
          , r = 0;
        if (n)
            return n.call(e);
        if (e && "number" == typeof e.length)
            return {
                next: function() {
                    return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
                }
            };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }
    function v(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, i, o = n.call(e), a = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
                a.push(r.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i)
                    throw i.error
            }
        }
        return a
    }
    function b() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(v(arguments[t]));
        return e
    }
    function m() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
        var r = Array(e)
          , i = 0;
        for (t = 0; t < n; t++)
            for (var o = arguments[t], a = 0, s = o.length; a < s; a++,
            i++)
                r[i] = o[a];
        return r
    }
    function g(e) {
        return this instanceof g ? (this.v = e,
        this) : new g(e)
    }
    function y(e, t, n) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var r, i = n.apply(e, t || []), o = [];
        return r = {},
        a("next"),
        a("throw"),
        a("return"),
        r[Symbol.asyncIterator] = function() {
            return this
        }
        ,
        r;
        function a(e) {
            i[e] && (r[e] = function(t) {
                return new Promise((function(n, r) {
                    o.push([e, t, n, r]) > 1 || s(e, t)
                }
                ))
            }
            )
        }
        function s(e, t) {
            try {
                (n = i[e](t)).value instanceof g ? Promise.resolve(n.value.v).then(c, u) : l(o[0][2], n)
            } catch (e) {
                l(o[0][3], e)
            }
            var n
        }
        function c(e) {
            s("next", e)
        }
        function u(e) {
            s("throw", e)
        }
        function l(e, t) {
            e(t),
            o.shift(),
            o.length && s(o[0][0], o[0][1])
        }
    }
    function _(e) {
        var t, n;
        return t = {},
        r("next"),
        r("throw", (function(e) {
            throw e
        }
        )),
        r("return"),
        t[Symbol.iterator] = function() {
            return this
        }
        ,
        t;
        function r(r, i) {
            t[r] = e[r] ? function(t) {
                return (n = !n) ? {
                    value: g(e[r](t)),
                    done: "return" === r
                } : i ? i(t) : t
            }
            : i
        }
    }
    function w(e) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, n = e[Symbol.asyncIterator];
        return n ? n.call(e) : (e = h(e),
        t = {},
        r("next"),
        r("throw"),
        r("return"),
        t[Symbol.asyncIterator] = function() {
            return this
        }
        ,
        t);
        function r(n) {
            t[n] = e[n] && function(t) {
                return new Promise((function(r, i) {
                    (function(e, t, n, r) {
                        Promise.resolve(r).then((function(t) {
                            e({
                                value: t,
                                done: n
                            })
                        }
                        ), t)
                    }
                    )(r, i, (t = e[n](t)).done, t.value)
                }
                ))
            }
        }
    }
    function O(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
            value: t
        }) : e.raw = t,
        e
    }
    function E(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e,
        t
    }
    function S(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function I(e, t) {
        if (!t.has(e))
            throw new TypeError("attempted to get private field on non-instance");
        return t.get(e)
    }
    function C(e, t, n) {
        if (!t.has(e))
            throw new TypeError("attempted to set private field on non-instance");
        return t.set(e, n),
        n
    }
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(0)
          , i = {
            NODE_CLIENT: !1,
            NODE_ADMIN: !1,
            SDK_VERSION: "${JSCORE_VERSION}"
        }
          , o = function(e, t) {
            if (!e)
                throw a(t)
        }
          , a = function(e) {
            return new Error("Firebase Database (" + i.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + e)
        }
          , s = function(e) {
            for (var t = [], n = 0, r = 0; r < e.length; r++) {
                var i = e.charCodeAt(r);
                i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192,
                t[n++] = 63 & i | 128) : 55296 == (64512 & i) && r + 1 < e.length && 56320 == (64512 & e.charCodeAt(r + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r)),
                t[n++] = i >> 18 | 240,
                t[n++] = i >> 12 & 63 | 128,
                t[n++] = i >> 6 & 63 | 128,
                t[n++] = 63 & i | 128) : (t[n++] = i >> 12 | 224,
                t[n++] = i >> 6 & 63 | 128,
                t[n++] = 63 & i | 128)
            }
            return t
        }
          , c = {
            byteToCharMap_: null,
            charToByteMap_: null,
            byteToCharMapWebSafe_: null,
            charToByteMapWebSafe_: null,
            ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            get ENCODED_VALS() {
                return this.ENCODED_VALS_BASE + "+/="
            },
            get ENCODED_VALS_WEBSAFE() {
                return this.ENCODED_VALS_BASE + "-_."
            },
            HAS_NATIVE_SUPPORT: "function" == typeof atob,
            encodeByteArray: function(e, t) {
                if (!Array.isArray(e))
                    throw Error("encodeByteArray takes an array as a parameter");
                this.init_();
                for (var n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [], i = 0; i < e.length; i += 3) {
                    var o = e[i]
                      , a = i + 1 < e.length
                      , s = a ? e[i + 1] : 0
                      , c = i + 2 < e.length
                      , u = c ? e[i + 2] : 0
                      , l = o >> 2
                      , f = (3 & o) << 4 | s >> 4
                      , d = (15 & s) << 2 | u >> 6
                      , p = 63 & u;
                    c || (p = 64,
                    a || (d = 64)),
                    r.push(n[l], n[f], n[d], n[p])
                }
                return r.join("")
            },
            encodeString: function(e, t) {
                return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(s(e), t)
            },
            decodeString: function(e, t) {
                return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : function(e) {
                    for (var t = [], n = 0, r = 0; n < e.length; ) {
                        var i = e[n++];
                        if (i < 128)
                            t[r++] = String.fromCharCode(i);
                        else if (i > 191 && i < 224) {
                            var o = e[n++];
                            t[r++] = String.fromCharCode((31 & i) << 6 | 63 & o)
                        } else if (i > 239 && i < 365) {
                            var a = ((7 & i) << 18 | (63 & (o = e[n++])) << 12 | (63 & (s = e[n++])) << 6 | 63 & e[n++]) - 65536;
                            t[r++] = String.fromCharCode(55296 + (a >> 10)),
                            t[r++] = String.fromCharCode(56320 + (1023 & a))
                        } else {
                            o = e[n++];
                            var s = e[n++];
                            t[r++] = String.fromCharCode((15 & i) << 12 | (63 & o) << 6 | 63 & s)
                        }
                    }
                    return t.join("")
                }(this.decodeStringToByteArray(e, t))
            },
            decodeStringToByteArray: function(e, t) {
                this.init_();
                for (var n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [], i = 0; i < e.length; ) {
                    var o = n[e.charAt(i++)]
                      , a = i < e.length ? n[e.charAt(i)] : 0
                      , s = ++i < e.length ? n[e.charAt(i)] : 64
                      , c = ++i < e.length ? n[e.charAt(i)] : 64;
                    if (++i,
                    null == o || null == a || null == s || null == c)
                        throw Error();
                    var u = o << 2 | a >> 4;
                    if (r.push(u),
                    64 !== s) {
                        var l = a << 4 & 240 | s >> 2;
                        if (r.push(l),
                        64 !== c) {
                            var f = s << 6 & 192 | c;
                            r.push(f)
                        }
                    }
                }
                return r
            },
            init_: function() {
                if (!this.byteToCharMap_) {
                    this.byteToCharMap_ = {},
                    this.charToByteMap_ = {},
                    this.byteToCharMapWebSafe_ = {},
                    this.charToByteMapWebSafe_ = {};
                    for (var e = 0; e < this.ENCODED_VALS.length; e++)
                        this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e),
                        this.charToByteMap_[this.byteToCharMap_[e]] = e,
                        this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e),
                        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e,
                        e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e,
                        this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
                }
            }
        }
          , u = function(e) {
            try {
                return c.decodeString(e, !0)
            } catch (e) {
                console.error("base64Decode failed: ", e)
            }
            return null
        };
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function l(e, t) {
            if (!(t instanceof Object))
                return t;
            switch (t.constructor) {
            case Date:
                return new Date(t.getTime());
            case Object:
                void 0 === e && (e = {});
                break;
            case Array:
                e = [];
                break;
            default:
                return t
            }
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = l(e[n], t[n]));
            return e
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        var f = function() {
            function e() {
                var e = this;
                this.reject = function() {}
                ,
                this.resolve = function() {}
                ,
                this.promise = new Promise((function(t, n) {
                    e.resolve = t,
                    e.reject = n
                }
                ))
            }
            return e.prototype.wrapCallback = function(e) {
                var t = this;
                return function(n, r) {
                    n ? t.reject(n) : t.resolve(r),
                    "function" == typeof e && (t.promise.catch((function() {}
                    )),
                    1 === e.length ? e(n) : e(n, r))
                }
            }
            ,
            e
        }();
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function d() {
            return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""
        }
        function p() {
            try {
                return "[object process]" === Object.prototype.toString.call(e.process)
            } catch (e) {
                return !1
            }
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        var h = function(e) {
            function t(n, r) {
                var i = e.call(this, r) || this;
                return i.code = n,
                i.name = "FirebaseError",
                Object.setPrototypeOf(i, t.prototype),
                Error.captureStackTrace && Error.captureStackTrace(i, v.prototype.create),
                i
            }
            return r.__extends(t, e),
            t
        }(Error)
          , v = function() {
            function e(e, t, n) {
                this.service = e,
                this.serviceName = t,
                this.errors = n
            }
            return e.prototype.create = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                for (var r = t[0] || {}, i = this.service + "/" + e, o = this.errors[e], a = o ? b(o, r) : "Error", s = this.serviceName + ": " + a + " (" + i + ").", c = new h(i,s), u = 0, l = Object.keys(r); u < l.length; u++) {
                    var f = l[u];
                    "_" !== f.slice(-1) && (f in c && console.warn('Overwriting FirebaseError base field "' + f + '" can cause unexpected behavior.'),
                    c[f] = r[f])
                }
                return c
            }
            ,
            e
        }();
        function b(e, t) {
            return e.replace(m, (function(e, n) {
                var r = t[n];
                return null != r ? String(r) : "<" + n + "?>"
            }
            ))
        }
        var m = /\{\$([^}]+)}/g;
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function g(e) {
            return JSON.parse(e)
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        var y = function(e) {
            var t = {}
              , n = {}
              , r = {}
              , i = "";
            try {
                var o = e.split(".");
                t = g(u(o[0]) || ""),
                n = g(u(o[1]) || ""),
                i = o[2],
                r = n.d || {},
                delete n.d
            } catch (e) {}
            return {
                header: t,
                claims: n,
                data: r,
                signature: i
            }
        };
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        var _ = function() {
            function e() {
                this.chain_ = [],
                this.buf_ = [],
                this.W_ = [],
                this.pad_ = [],
                this.inbuf_ = 0,
                this.total_ = 0,
                this.blockSize = 64,
                this.pad_[0] = 128;
                for (var e = 1; e < this.blockSize; ++e)
                    this.pad_[e] = 0;
                this.reset()
            }
            return e.prototype.reset = function() {
                this.chain_[0] = 1732584193,
                this.chain_[1] = 4023233417,
                this.chain_[2] = 2562383102,
                this.chain_[3] = 271733878,
                this.chain_[4] = 3285377520,
                this.inbuf_ = 0,
                this.total_ = 0
            }
            ,
            e.prototype.compress_ = function(e, t) {
                t || (t = 0);
                var n = this.W_;
                if ("string" == typeof e)
                    for (var r = 0; r < 16; r++)
                        n[r] = e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | e.charCodeAt(t + 3),
                        t += 4;
                else
                    for (r = 0; r < 16; r++)
                        n[r] = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3],
                        t += 4;
                for (r = 16; r < 80; r++) {
                    var i = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16];
                    n[r] = 4294967295 & (i << 1 | i >>> 31)
                }
                var o, a, s = this.chain_[0], c = this.chain_[1], u = this.chain_[2], l = this.chain_[3], f = this.chain_[4];
                for (r = 0; r < 80; r++) {
                    r < 40 ? r < 20 ? (o = l ^ c & (u ^ l),
                    a = 1518500249) : (o = c ^ u ^ l,
                    a = 1859775393) : r < 60 ? (o = c & u | l & (c | u),
                    a = 2400959708) : (o = c ^ u ^ l,
                    a = 3395469782);
                    i = (s << 5 | s >>> 27) + o + f + a + n[r] & 4294967295;
                    f = l,
                    l = u,
                    u = 4294967295 & (c << 30 | c >>> 2),
                    c = s,
                    s = i
                }
                this.chain_[0] = this.chain_[0] + s & 4294967295,
                this.chain_[1] = this.chain_[1] + c & 4294967295,
                this.chain_[2] = this.chain_[2] + u & 4294967295,
                this.chain_[3] = this.chain_[3] + l & 4294967295,
                this.chain_[4] = this.chain_[4] + f & 4294967295
            }
            ,
            e.prototype.update = function(e, t) {
                if (null != e) {
                    void 0 === t && (t = e.length);
                    for (var n = t - this.blockSize, r = 0, i = this.buf_, o = this.inbuf_; r < t; ) {
                        if (0 === o)
                            for (; r <= n; )
                                this.compress_(e, r),
                                r += this.blockSize;
                        if ("string" == typeof e) {
                            for (; r < t; )
                                if (i[o] = e.charCodeAt(r),
                                ++r,
                                ++o === this.blockSize) {
                                    this.compress_(i),
                                    o = 0;
                                    break
                                }
                        } else
                            for (; r < t; )
                                if (i[o] = e[r],
                                ++r,
                                ++o === this.blockSize) {
                                    this.compress_(i),
                                    o = 0;
                                    break
                                }
                    }
                    this.inbuf_ = o,
                    this.total_ += t
                }
            }
            ,
            e.prototype.digest = function() {
                var e = []
                  , t = 8 * this.total_;
                this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
                for (var n = this.blockSize - 1; n >= 56; n--)
                    this.buf_[n] = 255 & t,
                    t /= 256;
                this.compress_(this.buf_);
                var r = 0;
                for (n = 0; n < 5; n++)
                    for (var i = 24; i >= 0; i -= 8)
                        e[r] = this.chain_[n] >> i & 255,
                        ++r;
                return e
            }
            ,
            e
        }();
        var w = function() {
            function e(e, t) {
                var n = this;
                this.observers = [],
                this.unsubscribes = [],
                this.observerCount = 0,
                this.task = Promise.resolve(),
                this.finalized = !1,
                this.onNoObservers = t,
                this.task.then((function() {
                    e(n)
                }
                )).catch((function(e) {
                    n.error(e)
                }
                ))
            }
            return e.prototype.next = function(e) {
                this.forEachObserver((function(t) {
                    t.next(e)
                }
                ))
            }
            ,
            e.prototype.error = function(e) {
                this.forEachObserver((function(t) {
                    t.error(e)
                }
                )),
                this.close(e)
            }
            ,
            e.prototype.complete = function() {
                this.forEachObserver((function(e) {
                    e.complete()
                }
                )),
                this.close()
            }
            ,
            e.prototype.subscribe = function(e, t, n) {
                var r, i = this;
                if (void 0 === e && void 0 === t && void 0 === n)
                    throw new Error("Missing Observer.");
                void 0 === (r = function(e, t) {
                    if ("object" != typeof e || null === e)
                        return !1;
                    for (var n = 0, r = t; n < r.length; n++) {
                        var i = r[n];
                        if (i in e && "function" == typeof e[i])
                            return !0
                    }
                    return !1
                }(e, ["next", "error", "complete"]) ? e : {
                    next: e,
                    error: t,
                    complete: n
                }).next && (r.next = O),
                void 0 === r.error && (r.error = O),
                void 0 === r.complete && (r.complete = O);
                var o = this.unsubscribeOne.bind(this, this.observers.length);
                return this.finalized && this.task.then((function() {
                    try {
                        i.finalError ? r.error(i.finalError) : r.complete()
                    } catch (e) {}
                }
                )),
                this.observers.push(r),
                o
            }
            ,
            e.prototype.unsubscribeOne = function(e) {
                void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e],
                this.observerCount -= 1,
                0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
            }
            ,
            e.prototype.forEachObserver = function(e) {
                if (!this.finalized)
                    for (var t = 0; t < this.observers.length; t++)
                        this.sendOne(t, e)
            }
            ,
            e.prototype.sendOne = function(e, t) {
                var n = this;
                this.task.then((function() {
                    if (void 0 !== n.observers && void 0 !== n.observers[e])
                        try {
                            t(n.observers[e])
                        } catch (e) {
                            "undefined" != typeof console && console.error && console.error(e)
                        }
                }
                ))
            }
            ,
            e.prototype.close = function(e) {
                var t = this;
                this.finalized || (this.finalized = !0,
                void 0 !== e && (this.finalError = e),
                this.task.then((function() {
                    t.observers = void 0,
                    t.onNoObservers = void 0
                }
                )))
            }
            ,
            e
        }();
        function O() {}
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function E(e, t, n) {
            var r = "";
            switch (t) {
            case 1:
                r = n ? "first" : "First";
                break;
            case 2:
                r = n ? "second" : "Second";
                break;
            case 3:
                r = n ? "third" : "Third";
                break;
            case 4:
                r = n ? "fourth" : "Fourth";
                break;
            default:
                throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")
            }
            var i = e + " failed: ";
            return i += r + " argument "
        }
        t.CONSTANTS = i,
        t.Deferred = f,
        t.ErrorFactory = v,
        t.FirebaseError = h,
        t.MAX_VALUE_MILLIS = 144e5,
        t.RANDOM_FACTOR = .5,
        t.Sha1 = _,
        t.areCookiesEnabled = function() {
            return !(!navigator || !navigator.cookieEnabled)
        }
        ,
        t.assert = o,
        t.assertionError = a,
        t.async = function(e, t) {
            return function() {
                for (var n = [], r = 0; r < arguments.length; r++)
                    n[r] = arguments[r];
                Promise.resolve(!0).then((function() {
                    e.apply(void 0, n)
                }
                )).catch((function(e) {
                    t && t(e)
                }
                ))
            }
        }
        ,
        t.base64 = c,
        t.base64Decode = u,
        t.base64Encode = function(e) {
            var t = s(e);
            return c.encodeByteArray(t, !0)
        }
        ,
        t.calculateBackoffMillis = function(e, t, n) {
            void 0 === t && (t = 1e3),
            void 0 === n && (n = 2);
            var r = t * Math.pow(n, e)
              , i = Math.round(.5 * r * (Math.random() - .5) * 2);
            return Math.min(144e5, r + i)
        }
        ,
        t.contains = /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        t.createSubscribe = function(e, t) {
            var n = new w(e,t);
            return n.subscribe.bind(n)
        }
        ,
        t.decode = y,
        t.deepCopy = /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function(e) {
            return l(void 0, e)
        }
        ,
        t.deepExtend = l,
        t.errorPrefix = E,
        t.getUA = d,
        t.isAdmin = function(e) {
            var t = y(e).claims;
            return "object" == typeof t && !0 === t.admin
        }
        ,
        t.isBrowser = function() {
            return "object" == typeof self && self.self === self
        }
        ,
        t.isBrowserExtension = function() {
            var e = "object" == typeof chrome ? chrome.runtime : "object" == typeof browser ? browser.runtime : void 0;
            return "object" == typeof e && void 0 !== e.id
        }
        ,
        t.isElectron = function() {
            return d().indexOf("Electron/") >= 0
        }
        ,
        t.isEmpty = function(e) {
            for (var t in e)
                if (Object.prototype.hasOwnProperty.call(e, t))
                    return !1;
            return !0
        }
        ,
        t.isIE = function() {
            var e = d();
            return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0
        }
        ,
        t.isIndexedDBAvailable = function() {
            return "indexedDB"in self && null != indexedDB
        }
        ,
        t.isMobileCordova = function() {
            return "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(d())
        }
        ,
        t.isNode = p,
        t.isNodeSdk = function() {
            return !0 === i.NODE_CLIENT || !0 === i.NODE_ADMIN
        }
        ,
        t.isReactNative = function() {
            return "object" == typeof navigator && "ReactNative" === navigator.product
        }
        ,
        t.isSafari = function() {
            return !p() && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")
        }
        ,
        t.isUWP = function() {
            return d().indexOf("MSAppHost/") >= 0
        }
        ,
        t.isValidFormat = function(e) {
            var t = y(e).claims;
            return !!t && "object" == typeof t && t.hasOwnProperty("iat")
        }
        ,
        t.isValidTimestamp = function(e) {
            var t = y(e).claims
              , n = Math.floor((new Date).getTime() / 1e3)
              , r = 0
              , i = 0;
            return "object" == typeof t && (t.hasOwnProperty("nbf") ? r = t.nbf : t.hasOwnProperty("iat") && (r = t.iat),
            i = t.hasOwnProperty("exp") ? t.exp : r + 86400),
            !!n && !!r && !!i && n >= r && n <= i
        }
        ,
        t.issuedAtTime = function(e) {
            var t = y(e).claims;
            return "object" == typeof t && t.hasOwnProperty("iat") ? t.iat : null
        }
        ,
        t.jsonEval = g,
        t.map = function(e, t, n) {
            var r = {};
            for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (r[i] = t.call(n, e[i], i, e));
            return r
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        ,
        t.querystring = function(e) {
            for (var t = [], n = function(e, n) {
                Array.isArray(n) ? n.forEach((function(n) {
                    t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
                }
                )) : t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
            }, r = 0, i = Object.entries(e); r < i.length; r++) {
                var o = i[r];
                n(o[0], o[1])
            }
            return t.length ? "&" + t.join("&") : ""
        }
        ,
        t.querystringDecode = function(e) {
            var t = {};
            return e.replace(/^\?/, "").split("&").forEach((function(e) {
                if (e) {
                    var n = e.split("=");
                    t[n[0]] = n[1]
                }
            }
            )),
            t
        }
        ,
        t.safeGet = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0
        }
        ,
        t.stringLength = function(e) {
            for (var t = 0, n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                r < 128 ? t++ : r < 2048 ? t += 2 : r >= 55296 && r <= 56319 ? (t += 4,
                n++) : t += 3
            }
            return t
        }
        ,
        t.stringToByteArray = function(e) {
            for (var t = [], n = 0, r = 0; r < e.length; r++) {
                var i = e.charCodeAt(r);
                if (i >= 55296 && i <= 56319) {
                    var a = i - 55296;
                    r++,
                    o(r < e.length, "Surrogate pair missing trail surrogate."),
                    i = 65536 + (a << 10) + (e.charCodeAt(r) - 56320)
                }
                i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192,
                t[n++] = 63 & i | 128) : i < 65536 ? (t[n++] = i >> 12 | 224,
                t[n++] = i >> 6 & 63 | 128,
                t[n++] = 63 & i | 128) : (t[n++] = i >> 18 | 240,
                t[n++] = i >> 12 & 63 | 128,
                t[n++] = i >> 6 & 63 | 128,
                t[n++] = 63 & i | 128)
            }
            return t
        }
        ,
        t.stringify = function(e) {
            return JSON.stringify(e)
        }
        ,
        t.validateArgCount = function(e, t, n, r) {
            var i;
            if (r < t ? i = "at least " + t : r > n && (i = 0 === n ? "none" : "no more than " + n),
            i)
                throw new Error(e + " failed: Was called with " + r + (1 === r ? " argument." : " arguments.") + " Expects " + i + ".")
        }
        ,
        t.validateCallback = function(e, t, n, r) {
            if ((!r || n) && "function" != typeof n)
                throw new Error(E(e, t, r) + "must be a valid function.")
        }
        ,
        t.validateContextObject = function(e, t, n, r) {
            if ((!r || n) && ("object" != typeof n || null === n))
                throw new Error(E(e, t, r) + "must be a valid context object.")
        }
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        ,
        t.validateIndexedDBOpenable = function() {
            return new Promise((function(e, t) {
                try {
                    var n = !0
                      , r = "validate-browser-context-for-indexeddb-analytics-module"
                      , i = window.indexedDB.open(r);
                    i.onsuccess = function() {
                        i.result.close(),
                        n || window.indexedDB.deleteDatabase(r),
                        e(!0)
                    }
                    ,
                    i.onupgradeneeded = function() {
                        n = !1
                    }
                    ,
                    i.onerror = function() {
                        var e;
                        t((null === (e = i.error) || void 0 === e ? void 0 : e.message) || "")
                    }
                } catch (e) {
                    t(e)
                }
            }
            ))
        }
        ,
        t.validateNamespace = function(e, t, n, r) {
            if ((!r || n) && "string" != typeof n)
                throw new Error(E(e, t, r) + "must be a valid firebase namespace.")
        }
    }
    ).call(this, n(11))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0)
      , i = n(1)
      , o = function() {
        function e(e, t, n) {
            this.name = e,
            this.instanceFactory = t,
            this.type = n,
            this.multipleInstances = !1,
            this.serviceProps = {},
            this.instantiationMode = "LAZY"
        }
        return e.prototype.setInstantiationMode = function(e) {
            return this.instantiationMode = e,
            this
        }
        ,
        e.prototype.setMultipleInstances = function(e) {
            return this.multipleInstances = e,
            this
        }
        ,
        e.prototype.setServiceProps = function(e) {
            return this.serviceProps = e,
            this
        }
        ,
        e
    }()
      , a = function() {
        function e(e, t) {
            this.name = e,
            this.container = t,
            this.component = null,
            this.instances = new Map,
            this.instancesDeferred = new Map
        }
        return e.prototype.get = function(e) {
            void 0 === e && (e = "[DEFAULT]");
            var t = this.normalizeInstanceIdentifier(e);
            if (!this.instancesDeferred.has(t)) {
                var n = new i.Deferred;
                this.instancesDeferred.set(t, n);
                try {
                    var r = this.getOrInitializeService(t);
                    r && n.resolve(r)
                } catch (e) {}
            }
            return this.instancesDeferred.get(t).promise
        }
        ,
        e.prototype.getImmediate = function(e) {
            var t = r.__assign({
                identifier: "[DEFAULT]",
                optional: !1
            }, e)
              , n = t.identifier
              , i = t.optional
              , o = this.normalizeInstanceIdentifier(n);
            try {
                var a = this.getOrInitializeService(o);
                if (!a) {
                    if (i)
                        return null;
                    throw Error("Service " + this.name + " is not available")
                }
                return a
            } catch (e) {
                if (i)
                    return null;
                throw e
            }
        }
        ,
        e.prototype.getComponent = function() {
            return this.component
        }
        ,
        e.prototype.setComponent = function(e) {
            var t, n;
            if (e.name !== this.name)
                throw Error("Mismatching Component " + e.name + " for Provider " + this.name + ".");
            if (this.component)
                throw Error("Component for " + this.name + " has already been provided");
            if (this.component = e,
            function(e) {
                return "EAGER" === e.instantiationMode
            }/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
            (e))
                try {
                    this.getOrInitializeService("[DEFAULT]")
                } catch (e) {}
            try {
                for (var i = r.__values(this.instancesDeferred.entries()), o = i.next(); !o.done; o = i.next()) {
                    var a = r.__read(o.value, 2)
                      , s = a[0]
                      , c = a[1]
                      , u = this.normalizeInstanceIdentifier(s);
                    try {
                        var l = this.getOrInitializeService(u);
                        c.resolve(l)
                    } catch (e) {}
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    o && !o.done && (n = i.return) && n.call(i)
                } finally {
                    if (t)
                        throw t.error
                }
            }
        }
        ,
        e.prototype.clearInstance = function(e) {
            void 0 === e && (e = "[DEFAULT]"),
            this.instancesDeferred.delete(e),
            this.instances.delete(e)
        }
        ,
        e.prototype.delete = function() {
            return r.__awaiter(this, void 0, void 0, (function() {
                var e;
                return r.__generator(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return e = Array.from(this.instances.values()),
                        [4, Promise.all(r.__spread(e.filter((function(e) {
                            return "INTERNAL"in e
                        }
                        )).map((function(e) {
                            return e.INTERNAL.delete()
                        }
                        )), e.filter((function(e) {
                            return "_delete"in e
                        }
                        )).map((function(e) {
                            return e._delete()
                        }
                        ))))];
                    case 1:
                        return t.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        e.prototype.isComponentSet = function() {
            return null != this.component
        }
        ,
        e.prototype.getOrInitializeService = function(e) {
            var t = this.instances.get(e);
            return !t && this.component && (t = this.component.instanceFactory(this.container, function(e) {
                return "[DEFAULT]" === e ? void 0 : e
            }(e)),
            this.instances.set(e, t)),
            t || null
        }
        ,
        e.prototype.normalizeInstanceIdentifier = function(e) {
            return this.component ? this.component.multipleInstances ? e : "[DEFAULT]" : e
        }
        ,
        e
    }();
    var s = function() {
        function e(e) {
            this.name = e,
            this.providers = new Map
        }
        return e.prototype.addComponent = function(e) {
            var t = this.getProvider(e.name);
            if (t.isComponentSet())
                throw new Error("Component " + e.name + " has already been registered with " + this.name);
            t.setComponent(e)
        }
        ,
        e.prototype.addOrOverwriteComponent = function(e) {
            this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
            this.addComponent(e)
        }
        ,
        e.prototype.getProvider = function(e) {
            if (this.providers.has(e))
                return this.providers.get(e);
            var t = new a(e,this);
            return this.providers.set(e, t),
            t
        }
        ,
        e.prototype.getProviders = function() {
            return Array.from(this.providers.values())
        }
        ,
        e
    }();
    t.Component = o,
    t.ComponentContainer = s,
    t.Provider = a
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, i, o = n(0), a = n(1), s = n(2), c = n(7), u = ((r = {})["no-app"] = "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
    r["bad-app-name"] = "Illegal App name: '{$appName}",
    r["duplicate-app"] = "Firebase App named '{$appName}' already exists",
    r["app-deleted"] = "Firebase App named '{$appName}' already deleted",
    r["invalid-app-argument"] = "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    r["invalid-log-argument"] = "First argument to `onLog` must be null or a function.",
    r), l = new a.ErrorFactory("app","Firebase",u), f = ((i = {})["@firebase/app"] = "fire-core",
    i["@firebase/analytics"] = "fire-analytics",
    i["@firebase/auth"] = "fire-auth",
    i["@firebase/database"] = "fire-rtdb",
    i["@firebase/functions"] = "fire-fn",
    i["@firebase/installations"] = "fire-iid",
    i["@firebase/messaging"] = "fire-fcm",
    i["@firebase/performance"] = "fire-perf",
    i["@firebase/remote-config"] = "fire-rc",
    i["@firebase/storage"] = "fire-gcs",
    i["@firebase/firestore"] = "fire-fst",
    i["fire-js"] = "fire-js",
    i["firebase-wrapper"] = "fire-js-all",
    i), d = new c.Logger("@firebase/app"), p = function() {
        function e(e, t, n) {
            var r, i, c = this;
            this.firebase_ = n,
            this.isDeleted_ = !1,
            this.name_ = t.name,
            this.automaticDataCollectionEnabled_ = t.automaticDataCollectionEnabled || !1,
            this.options_ = a.deepCopy(e),
            this.container = new s.ComponentContainer(t.name),
            this._addComponent(new s.Component("app",(function() {
                return c
            }
            ),"PUBLIC"));
            try {
                for (var u = o.__values(this.firebase_.INTERNAL.components.values()), l = u.next(); !l.done; l = u.next()) {
                    var f = l.value;
                    this._addComponent(f)
                }
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    l && !l.done && (i = u.return) && i.call(u)
                } finally {
                    if (r)
                        throw r.error
                }
            }
        }
        return Object.defineProperty(e.prototype, "automaticDataCollectionEnabled", {
            get: function() {
                return this.checkDestroyed_(),
                this.automaticDataCollectionEnabled_
            },
            set: function(e) {
                this.checkDestroyed_(),
                this.automaticDataCollectionEnabled_ = e
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "name", {
            get: function() {
                return this.checkDestroyed_(),
                this.name_
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "options", {
            get: function() {
                return this.checkDestroyed_(),
                this.options_
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.delete = function() {
            var e = this;
            return new Promise((function(t) {
                e.checkDestroyed_(),
                t()
            }
            )).then((function() {
                return e.firebase_.INTERNAL.removeApp(e.name_),
                Promise.all(e.container.getProviders().map((function(e) {
                    return e.delete()
                }
                )))
            }
            )).then((function() {
                e.isDeleted_ = !0
            }
            ))
        }
        ,
        e.prototype._getService = function(e, t) {
            return void 0 === t && (t = "[DEFAULT]"),
            this.checkDestroyed_(),
            this.container.getProvider(e).getImmediate({
                identifier: t
            })
        }
        ,
        e.prototype._removeServiceInstance = function(e, t) {
            void 0 === t && (t = "[DEFAULT]"),
            this.container.getProvider(e).clearInstance(t)
        }
        ,
        e.prototype._addComponent = function(e) {
            try {
                this.container.addComponent(e)
            } catch (t) {
                d.debug("Component " + e.name + " failed to register with FirebaseApp " + this.name, t)
            }
        }
        ,
        e.prototype._addOrOverwriteComponent = function(e) {
            this.container.addOrOverwriteComponent(e)
        }
        ,
        e.prototype.checkDestroyed_ = function() {
            if (this.isDeleted_)
                throw l.create("app-deleted", {
                    appName: this.name_
                })
        }
        ,
        e
    }();
    p.prototype.name && p.prototype.options || p.prototype.delete || console.log("dc");
    var h = /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    function e() {
        var t = /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function(e) {
            var t = {}
              , n = new Map
              , r = {
                __esModule: !0,
                initializeApp: function(n, i) {
                    void 0 === i && (i = {});
                    if ("object" != typeof i || null === i) {
                        i = {
                            name: i
                        }
                    }
                    var o = i;
                    void 0 === o.name && (o.name = "[DEFAULT]");
                    var s = o.name;
                    if ("string" != typeof s || !s)
                        throw l.create("bad-app-name", {
                            appName: String(s)
                        });
                    if (a.contains(t, s))
                        throw l.create("duplicate-app", {
                            appName: s
                        });
                    var c = new e(n,o,r);
                    return t[s] = c,
                    c
                },
                app: i,
                registerVersion: function(e, t, n) {
                    var r, i = null !== (r = f[e]) && void 0 !== r ? r : e;
                    n && (i += "-" + n);
                    var o = i.match(/\s|\//)
                      , a = t.match(/\s|\//);
                    if (o || a) {
                        var c = ['Unable to register library "' + i + '" with version "' + t + '":'];
                        return o && c.push('library name "' + i + '" contains illegal characters (whitespace or "/")'),
                        o && a && c.push("and"),
                        a && c.push('version name "' + t + '" contains illegal characters (whitespace or "/")'),
                        void d.warn(c.join(" "))
                    }
                    u(new s.Component(i + "-version",(function() {
                        return {
                            library: i,
                            version: t
                        }
                    }
                    ),"VERSION"))
                },
                setLogLevel: c.setLogLevel,
                onLog: function(e, t) {
                    if (null !== e && "function" != typeof e)
                        throw l.create("invalid-log-argument", {
                            appName: name
                        });
                    c.setUserLogHandler(e, t)
                },
                apps: null,
                SDK_VERSION: "7.20.0",
                INTERNAL: {
                    registerComponent: u,
                    removeApp: function(e) {
                        delete t[e]
                    },
                    components: n,
                    useAsService: function(e, t) {
                        if ("serverAuth" === t)
                            return null;
                        return t
                    }
                }
            };
            function i(e) {
                if (e = e || "[DEFAULT]",
                !a.contains(t, e))
                    throw l.create("no-app", {
                        appName: e
                    });
                return t[e]
            }
            function u(s) {
                var c, u, f = s.name;
                if (n.has(f))
                    return d.debug("There were multiple attempts to register component " + f + "."),
                    "PUBLIC" === s.type ? r[f] : null;
                if (n.set(f, s),
                "PUBLIC" === s.type) {
                    var p = function(e) {
                        if (void 0 === e && (e = i()),
                        "function" != typeof e[f])
                            throw l.create("invalid-app-argument", {
                                appName: f
                            });
                        return e[f]()
                    };
                    void 0 !== s.serviceProps && a.deepExtend(p, s.serviceProps),
                    r[f] = p,
                    e.prototype[f] = function() {
                        for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                        var n = this._getService.bind(this, f);
                        return n.apply(this, s.multipleInstances ? e : [])
                    }
                }
                try {
                    for (var h = o.__values(Object.keys(t)), v = h.next(); !v.done; v = h.next()) {
                        var b = v.value;
                        t[b]._addComponent(s)
                    }
                } catch (e) {
                    c = {
                        error: e
                    }
                } finally {
                    try {
                        v && !v.done && (u = h.return) && u.call(h)
                    } finally {
                        if (c)
                            throw c.error
                    }
                }
                return "PUBLIC" === s.type ? r[f] : null
            }
            return r.default = r,
            Object.defineProperty(r, "apps", {
                get: function() {
                    return Object.keys(t).map((function(e) {
                        return t[e]
                    }
                    ))
                }
            }),
            i.App = e,
            r
        }(p);
        return t.INTERNAL = o.__assign(o.__assign({}, t.INTERNAL), {
            createFirebaseNamespace: e,
            extendNamespace: function(e) {
                a.deepExtend(t, e)
            },
            createSubscribe: a.createSubscribe,
            ErrorFactory: a.ErrorFactory,
            deepExtend: a.deepExtend
        }),
        t
    }()
      , v = function() {
        function e(e) {
            this.container = e
        }
        return e.prototype.getPlatformInfoString = function() {
            return this.container.getProviders().map((function(e) {
                if (function(e) {
                    var t = e.getComponent();
                    return "VERSION" === (null == t ? void 0 : t.type)
                }/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
                (e)) {
                    var t = e.getImmediate();
                    return t.library + "/" + t.version
                }
                return null
            }
            )).filter((function(e) {
                return e
            }
            )).join(" ")
        }
        ,
        e
    }();
    /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    if (a.isBrowser() && void 0 !== self.firebase) {
        d.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
        var b = self.firebase.SDK_VERSION;
        b && b.indexOf("LITE") >= 0 && d.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")
    }
    var m = h.initializeApp;
    h.initializeApp = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return a.isNode() && d.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '),
        m.apply(void 0, e)
    }
    ;
    var g = h;
    !function(e, t) {
        e.INTERNAL.registerComponent(new s.Component("platform-logger",(function(e) {
            return new v(e)
        }
        ),"PRIVATE")),
        e.registerVersion("@firebase/app", "0.6.11", t),
        e.registerVersion("fire-js", "")
    }(g),
    t.default = g,
    t.firebase = g
}
, function(e, t) {
    e.exports = m
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }
    ));
    var r, i = 0, o = 0, a = {
        show: s,
        hide: u,
        wrap: function(e) {
            return s(),
            e.then((function(e) {
                return u(),
                e
            }
            )).catch((function(e) {
                throw u(),
                e
            }
            ))
        }
    };
    function s() {
        var e = f();
        0 === i && null === e && ((e = document.createElement("div")).className = "loadingOverlay",
        e.innerText = "LOADING",
        document.body.appendChild(e)),
        null == r && (e.innerText = "LOADING",
        o = 0,
        r = window.setTimeout(c, 500)),
        i++
    }
    function c() {
        var e = f();
        null != e ? (4 === ++o ? (o = 0,
        e.innerText = "LOADING") : e.innerText += ".",
        r = window.setTimeout(c, 500)) : r = null
    }
    function u() {
        0 !== i && 0 === --i && setTimeout(l)
    }
    function l() {
        var e = f();
        0 === i && null != e && (e.remove(),
        clearTimeout(r),
        r = null)
    }
    function f() {
        return document.querySelector(".loadingOverlay")
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return r
    }
    ));
    var r = function() {
        function e() {}
        return e.show = function(t) {
            e._element || (e._element = document.createElement("div"),
            e._element.className = "ng-bot-alert",
            document.body.appendChild(e._element)),
            e._element.innerHTML = t
        }
        ,
        e
    }()
}
, function(e, t, n) {
    "use strict";
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    function r() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
        var r = Array(e)
          , i = 0;
        for (t = 0; t < n; t++)
            for (var o = arguments[t], a = 0, s = o.length; a < s; a++,
            i++)
                r[i] = o[a];
        return r
    }
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    var i;
    n.r(t),
    n.d(t, "LogLevel", (function() {
        return o
    }
    )),
    n.d(t, "Logger", (function() {
        return f
    }
    )),
    n.d(t, "setLogLevel", (function() {
        return d
    }
    )),
    n.d(t, "setUserLogHandler", (function() {
        return p
    }
    ));
    var o, a = [];
    !function(e) {
        e[e.DEBUG = 0] = "DEBUG",
        e[e.VERBOSE = 1] = "VERBOSE",
        e[e.INFO = 2] = "INFO",
        e[e.WARN = 3] = "WARN",
        e[e.ERROR = 4] = "ERROR",
        e[e.SILENT = 5] = "SILENT"
    }(o || (o = {}));
    var s = {
        debug: o.DEBUG,
        verbose: o.VERBOSE,
        info: o.INFO,
        warn: o.WARN,
        error: o.ERROR,
        silent: o.SILENT
    }
      , c = o.INFO
      , u = ((i = {})[o.DEBUG] = "log",
    i[o.VERBOSE] = "log",
    i[o.INFO] = "info",
    i[o.WARN] = "warn",
    i[o.ERROR] = "error",
    i)
      , l = function(e, t) {
        for (var n = [], i = 2; i < arguments.length; i++)
            n[i - 2] = arguments[i];
        if (!(t < e.logLevel)) {
            var o = (new Date).toISOString()
              , a = u[t];
            if (!a)
                throw new Error("Attempted to log a message with an invalid logType (value: " + t + ")");
            console[a].apply(console, r(["[" + o + "]  " + e.name + ":"], n))
        }
    }
      , f = function() {
        function e(e) {
            this.name = e,
            this._logLevel = c,
            this._logHandler = l,
            this._userLogHandler = null,
            a.push(this)
        }
        return Object.defineProperty(e.prototype, "logLevel", {
            get: function() {
                return this._logLevel
            },
            set: function(e) {
                if (!(e in o))
                    throw new TypeError('Invalid value "' + e + '" assigned to `logLevel`');
                this._logLevel = e
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.setLogLevel = function(e) {
            this._logLevel = "string" == typeof e ? s[e] : e
        }
        ,
        Object.defineProperty(e.prototype, "logHandler", {
            get: function() {
                return this._logHandler
            },
            set: function(e) {
                if ("function" != typeof e)
                    throw new TypeError("Value assigned to `logHandler` must be a function");
                this._logHandler = e
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "userLogHandler", {
            get: function() {
                return this._userLogHandler
            },
            set: function(e) {
                this._userLogHandler = e
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.debug = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            this._userLogHandler && this._userLogHandler.apply(this, r([this, o.DEBUG], e)),
            this._logHandler.apply(this, r([this, o.DEBUG], e))
        }
        ,
        e.prototype.log = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            this._userLogHandler && this._userLogHandler.apply(this, r([this, o.VERBOSE], e)),
            this._logHandler.apply(this, r([this, o.VERBOSE], e))
        }
        ,
        e.prototype.info = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            this._userLogHandler && this._userLogHandler.apply(this, r([this, o.INFO], e)),
            this._logHandler.apply(this, r([this, o.INFO], e))
        }
        ,
        e.prototype.warn = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            this._userLogHandler && this._userLogHandler.apply(this, r([this, o.WARN], e)),
            this._logHandler.apply(this, r([this, o.WARN], e))
        }
        ,
        e.prototype.error = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            this._userLogHandler && this._userLogHandler.apply(this, r([this, o.ERROR], e)),
            this._logHandler.apply(this, r([this, o.ERROR], e))
        }
        ,
        e
    }();
    function d(e) {
        a.forEach((function(t) {
            t.setLogLevel(e)
        }
        ))
    }
    function p(e, t) {
        for (var n = function(n) {
            var r = null;
            t && t.level && (r = s[t.level]),
            n.userLogHandler = null === e ? null : function(t, n) {
                for (var i = [], a = 2; a < arguments.length; a++)
                    i[a - 2] = arguments[a];
                var s = i.map((function(e) {
                    if (null == e)
                        return null;
                    if ("string" == typeof e)
                        return e;
                    if ("number" == typeof e || "boolean" == typeof e)
                        return e.toString();
                    if (e instanceof Error)
                        return e.message;
                    try {
                        return JSON.stringify(e)
                    } catch (e) {
                        return null
                    }
                }
                )).filter((function(e) {
                    return e
                }
                )).join(" ");
                n >= (null != r ? r : t.logLevel) && e({
                    level: o[n].toLowerCase(),
                    message: s,
                    args: i,
                    type: t.name
                })
            }
        }, r = 0, i = a; r < i.length; r++) {
            n(i[r])
        }
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && "object" == typeof e && "default"in e ? e : {
            default: e
        }
    }
    var i = r(n(3));
    /**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    i.default.registerVersion("firebase", "7.24.0", "app"),
    e.exports = i.default
}
, function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return c
    }
    )),
    n.d(t, "e", (function() {
        return u
    }
    )),
    n.d(t, "f", (function() {
        return l
    }
    )),
    n.d(t, "g", (function() {
        return f
    }
    )),
    n.d(t, "a", (function() {
        return d
    }
    )),
    n.d(t, "b", (function() {
        return i
    }
    )),
    n.d(t, "h", (function() {
        return p
    }
    )),
    n.d(t, "d", (function() {
        return h
    }
    ));
    var r, i, o = (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    ), a = function(e, t, n, r) {
        return new (n || (n = Promise))((function(i, o) {
            function a(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    o(e)
                }
            }
            function s(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }
            function c(e) {
                var t;
                e.done ? i(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(a, s)
            }
            c((r = r.apply(e, t || [])).next())
        }
        ))
    }, s = function(e, t) {
        var n, r, i, o, a = {
            label: 0,
            sent: function() {
                if (1 & i[0])
                    throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }
        ),
        o;
        function s(o) {
            return function(s) {
                return function(o) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                            0) : r.next) && !(i = i.call(r, o[1])).done)
                                return i;
                            switch (r = 0,
                            i && (o = [2 & o[0], i.value]),
                            o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = o[1],
                                o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(i = a.trys,
                                (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < i[1]) {
                                    a.label = i[1],
                                    i = o;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2],
                                    a.ops.push(o);
                                    break
                                }
                                i[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            o = t.call(e, a)
                        } catch (e) {
                            o = [6, e],
                            r = 0
                        } finally {
                            n = i = 0
                        }
                    if (5 & o[0])
                        throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    };
    function c(e) {
        return a(this, void 0, void 0, (function() {
            return s(this, (function(t) {
                return [2, new Promise((function(t) {
                    return setTimeout(t, e)
                }
                ))]
            }
            ))
        }
        ))
    }
    function u() {
        return a(this, void 0, void 0, (function() {
            return s(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, new Promise((function(e) {
                        var t = document.createElement("div");
                        t.classList.add("iosClickOverlay"),
                        t.innerText = "TAP TO START",
                        document.body.appendChild(t);
                        var n = function() {
                            t.removeEventListener("click", n),
                            document.body.removeChild(t),
                            e()
                        };
                        t.addEventListener("click", n)
                    }
                    ))];
                case 1:
                    return e.sent(),
                    [2]
                }
            }
            ))
        }
        ))
    }
    function l(e) {
        return !e || 0 === e.split(" ").join("").length
    }
    function f(e) {
        return new Promise((function(t) {
            var n = document.createElement("script");
            n.onload = t,
            n.src = e,
            document.body.appendChild(n)
        }
        ))
    }
    function d() {
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
            var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
            return [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3] || 0, 10)]
        }
    }
    !function(e) {
        e.SNES = "snes",
        e.GENESIS = "genesis",
        e.GBA = "gba"
    }(i || (i = {}));
    !function(e) {
        function t(t) {
            return e.call(this, t) || this
        }
        o(t, e),
        t.prototype.preventDefault = function() {}
    }(Event);
    function p(e, t) {
        var n, r, i;
        document.dispatchEvent((n = e,
        i = (r = t).key || r.code,
        new KeyboardEvent(n,{
            code: r.code,
            key: i,
            view: window,
            which: r.which,
            keyCode: r.which
        })))
    }
    function h(e) {
        return e.split(".").pop().toLowerCase()
    }
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        function t(e) {
            return Array.prototype.slice.call(e)
        }
        function n(e) {
            return new Promise((function(t, n) {
                e.onsuccess = function() {
                    t(e.result)
                }
                ,
                e.onerror = function() {
                    n(e.error)
                }
            }
            ))
        }
        function r(e, t, r) {
            var i, o = new Promise((function(o, a) {
                n(i = e[t].apply(e, r)).then(o, a)
            }
            ));
            return o.request = i,
            o
        }
        function i(e, t, n) {
            var i = r(e, t, n);
            return i.then((function(e) {
                if (e)
                    return new l(e,i.request)
            }
            ))
        }
        function o(e, t, n) {
            n.forEach((function(n) {
                Object.defineProperty(e.prototype, n, {
                    get: function() {
                        return this[t][n]
                    },
                    set: function(e) {
                        this[t][n] = e
                    }
                })
            }
            ))
        }
        function a(e, t, n, i) {
            i.forEach((function(i) {
                i in n.prototype && (e.prototype[i] = function() {
                    return r(this[t], i, arguments)
                }
                )
            }
            ))
        }
        function s(e, t, n, r) {
            r.forEach((function(r) {
                r in n.prototype && (e.prototype[r] = function() {
                    return this[t][r].apply(this[t], arguments)
                }
                )
            }
            ))
        }
        function c(e, t, n, r) {
            r.forEach((function(r) {
                r in n.prototype && (e.prototype[r] = function() {
                    return i(this[t], r, arguments)
                }
                )
            }
            ))
        }
        function u(e) {
            this._index = e
        }
        function l(e, t) {
            this._cursor = e,
            this._request = t
        }
        function f(e) {
            this._store = e
        }
        function d(e) {
            this._tx = e,
            this.complete = new Promise((function(t, n) {
                e.oncomplete = function() {
                    t()
                }
                ,
                e.onerror = function() {
                    n(e.error)
                }
                ,
                e.onabort = function() {
                    n(e.error)
                }
            }
            ))
        }
        function p(e, t, n) {
            this._db = e,
            this.oldVersion = t,
            this.transaction = new d(n)
        }
        function h(e) {
            this._db = e
        }
        o(u, "_index", ["name", "keyPath", "multiEntry", "unique"]),
        a(u, "_index", IDBIndex, ["get", "getKey", "getAll", "getAllKeys", "count"]),
        c(u, "_index", IDBIndex, ["openCursor", "openKeyCursor"]),
        o(l, "_cursor", ["direction", "key", "primaryKey", "value"]),
        a(l, "_cursor", IDBCursor, ["update", "delete"]),
        ["advance", "continue", "continuePrimaryKey"].forEach((function(e) {
            e in IDBCursor.prototype && (l.prototype[e] = function() {
                var t = this
                  , r = arguments;
                return Promise.resolve().then((function() {
                    return t._cursor[e].apply(t._cursor, r),
                    n(t._request).then((function(e) {
                        if (e)
                            return new l(e,t._request)
                    }
                    ))
                }
                ))
            }
            )
        }
        )),
        f.prototype.createIndex = function() {
            return new u(this._store.createIndex.apply(this._store, arguments))
        }
        ,
        f.prototype.index = function() {
            return new u(this._store.index.apply(this._store, arguments))
        }
        ,
        o(f, "_store", ["name", "keyPath", "indexNames", "autoIncrement"]),
        a(f, "_store", IDBObjectStore, ["put", "add", "delete", "clear", "get", "getAll", "getKey", "getAllKeys", "count"]),
        c(f, "_store", IDBObjectStore, ["openCursor", "openKeyCursor"]),
        s(f, "_store", IDBObjectStore, ["deleteIndex"]),
        d.prototype.objectStore = function() {
            return new f(this._tx.objectStore.apply(this._tx, arguments))
        }
        ,
        o(d, "_tx", ["objectStoreNames", "mode"]),
        s(d, "_tx", IDBTransaction, ["abort"]),
        p.prototype.createObjectStore = function() {
            return new f(this._db.createObjectStore.apply(this._db, arguments))
        }
        ,
        o(p, "_db", ["name", "version", "objectStoreNames"]),
        s(p, "_db", IDBDatabase, ["deleteObjectStore", "close"]),
        h.prototype.transaction = function() {
            return new d(this._db.transaction.apply(this._db, arguments))
        }
        ,
        o(h, "_db", ["name", "version", "objectStoreNames"]),
        s(h, "_db", IDBDatabase, ["close"]),
        ["openCursor", "openKeyCursor"].forEach((function(e) {
            [f, u].forEach((function(n) {
                e in n.prototype && (n.prototype[e.replace("open", "iterate")] = function() {
                    var n = t(arguments)
                      , r = n[n.length - 1]
                      , i = this._store || this._index
                      , o = i[e].apply(i, n.slice(0, -1));
                    o.onsuccess = function() {
                        r(o.result)
                    }
                }
                )
            }
            ))
        }
        )),
        [u, f].forEach((function(e) {
            e.prototype.getAll || (e.prototype.getAll = function(e, t) {
                var n = this
                  , r = [];
                return new Promise((function(i) {
                    n.iterateCursor(e, (function(e) {
                        e ? (r.push(e.value),
                        void 0 === t || r.length != t ? e.continue() : i(r)) : i(r)
                    }
                    ))
                }
                ))
            }
            )
        }
        )),
        e.openDb = function(e, t, n) {
            var i = r(indexedDB, "open", [e, t])
              , o = i.request;
            return o && (o.onupgradeneeded = function(e) {
                n && n(new p(o.result,e.oldVersion,o.transaction))
            }
            ),
            i.then((function(e) {
                return new h(e)
            }
            ))
        }
        ,
        e.deleteDb = function(e) {
            return r(indexedDB, "deleteDatabase", [e])
        }
        ,
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }(t)
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t, n) {}
, function(e, t, n) {
    "use strict";
    n.r(t);
    n(12);
    var r, i = n(4), o = n(5), a = n(9), s = n(6), c = n(8), u = n.n(c), l = n(0), f = n(3), d = n.n(f), p = n(2), h = n(1), v = n(10), b = ((r = {})["missing-app-config-values"] = 'Missing App configuration value: "{$valueName}"',
    r["not-registered"] = "Firebase Installation is not registered.",
    r["installation-not-found"] = "Firebase Installation not found.",
    r["request-failed"] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
    r["app-offline"] = "Could not process request. Application offline.",
    r["delete-pending-registration"] = "Can't delete installation while there is a pending registration request.",
    r), m = new h.ErrorFactory("installations","Installations",b);
    function g(e) {
        return e instanceof h.FirebaseError && e.code.includes("request-failed")
    }
    /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    function y(e) {
        return "https://firebaseinstallations.googleapis.com/v1/projects/" + e.projectId + "/installations"
    }
    function _(e) {
        return {
            token: e.token,
            requestStatus: 2,
            expiresIn: (t = e.expiresIn,
            Number(t.replace("s", "000"))),
            creationTime: Date.now()
        };
        var t
    }
    function w(e, t) {
        return Object(l.__awaiter)(this, void 0, void 0, (function() {
            var n, r;
            return Object(l.__generator)(this, (function(i) {
                switch (i.label) {
                case 0:
                    return [4, t.json()];
                case 1:
                    return n = i.sent(),
                    r = n.error,
                    [2, m.create("request-failed", {
                        requestName: e,
                        serverCode: r.code,
                        serverMessage: r.message,
                        serverStatus: r.status
                    })]
                }
            }
            ))
        }
        ))
    }
    function O(e) {
        var t = e.apiKey;
        return new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
            "x-goog-api-key": t
        })
    }
    function E(e, t) {
        var n = t.refreshToken
          , r = O(e);
        return r.append("Authorization", function(e) {
            return "FIS_v2 " + e
        }/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        (n)),
        r
    }
    function S(e) {
        return Object(l.__awaiter)(this, void 0, void 0, (function() {
            var t;
            return Object(l.__generator)(this, (function(n) {
                switch (n.label) {
                case 0:
                    return [4, e()];
                case 1:
                    return (t = n.sent()).status >= 500 && t.status < 600 ? [2, e()] : [2, t]
                }
            }
            ))
        }
        ))
    }
    function I(e, t) {
        var n = t.fid;
        return Object(l.__awaiter)(this, void 0, void 0, (function() {
            var t, r, i, o, a, s;
            return Object(l.__generator)(this, (function(c) {
                switch (c.label) {
                case 0:
                    return t = y(e),
                    r = O(e),
                    i = {
                        fid: n,
                        authVersion: "FIS_v2",
                        appId: e.appId,
                        sdkVersion: "w:0.4.17"
                    },
                    o = {
                        method: "POST",
                        headers: r,
                        body: JSON.stringify(i)
                    },
                    [4, S((function() {
                        return fetch(t, o)
                    }
                    ))];
                case 1:
                    return (a = c.sent()).ok ? [4, a.json()] : [3, 3];
                case 2:
                    return s = c.sent(),
                    [2, {
                        fid: s.fid || n,
                        registrationStatus: 2,
                        refreshToken: s.refreshToken,
                        authToken: _(s.authToken)
                    }];
                case 3:
                    return [4, w("Create Installation", a)];
                case 4:
                    throw c.sent()
                }
            }
            ))
        }
        ))
    }
    /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    function C(e) {
        return new Promise((function(t) {
            setTimeout(t, e)
        }
        ))
    }
    /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    var j = /^[cdef][\w-]{21}$/;
    function T() {
        try {
            var e = new Uint8Array(17);
            (self.crypto || self.msCrypto).getRandomValues(e),
            e[0] = 112 + e[0] % 16;
            var t = function(e) {
                return (t = e,
                btoa(String.fromCharCode.apply(String, Object(l.__spread)(t))).replace(/\+/g, "-").replace(/\//g, "_")).substr(0, 22);
                var t
            }/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
            (e);
            return j.test(t) ? t : ""
        } catch (e) {
            return ""
        }
    }
    function A(e) {
        return e.appName + "!" + e.appId
    }
    /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    var N = new Map;
    function P(e, t) {
        var n = A(e);
        D(n, t),
        function(e, t) {
            var n = x();
            n && n.postMessage({
                key: e,
                fid: t
            });
            L()
        }(n, t)
    }
    function D(e, t) {
        var n, r, i = N.get(e);
        if (i)
            try {
                for (var o = Object(l.__values)(i), a = o.next(); !a.done; a = o.next()) {
                    (0,
                    a.value)(t)
                }
            } catch (e) {
                n = {
                    error: e
                }
            } finally {
                try {
                    a && !a.done && (r = o.return) && r.call(o)
                } finally {
                    if (n)
                        throw n.error
                }
            }
    }
    var k = null;
    function x() {
        return !k && "BroadcastChannel"in self && ((k = new BroadcastChannel("[Firebase] FID Change")).onmessage = function(e) {
            D(e.data.key, e.data.fid)
        }
        ),
        k
    }
    function L() {
        0 === N.size && k && (k.close(),
        k = null)
    }
    /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    var F, M = "firebase-installations-store", R = null;
    function B() {
        return R || (R = Object(v.openDb)("firebase-installations-database", 1, (function(e) {
            switch (e.oldVersion) {
            case 0:
                e.createObjectStore(M)
            }
        }
        ))),
        R
    }
    function V(e, t) {
        return Object(l.__awaiter)(this, void 0, void 0, (function() {
            var n, r, i, o, a;
            return Object(l.__generator)(this, (function(s) {
                switch (s.label) {
                case 0:
                    return n = A(e),
                    [4, B()];
                case 1:
                    return r = s.sent(),
                    i = r.transaction(M, "readwrite"),
                    [4, (o = i.objectStore(M)).get(n)];
                case 2:
                    return a = s.sent(),
                    [4, o.put(t, n)];
                case 3:
                    return s.sent(),
                    [4, i.complete];
                case 4:
                    return s.sent(),
                    a && a.fid === t.fid || P(e, t.fid),
                    [2, t]
                }
            }
            ))
        }
        ))
    }
    function U(e) {
        return Object(l.__awaiter)(this, void 0, void 0, (function() {
            var t, n, r;
            return Object(l.__generator)(this, (function(i) {
                switch (i.label) {
                case 0:
                    return t = A(e),
                    [4, B()];
                case 1:
                    return n = i.sent(),
                    [4, (r = n.transaction(M, "readwrite")).objectStore(M).delete(t)];
                case 2:
                    return i.sent(),
                    [4, r.complete];
                case 3:
                    return i.sent(),
                    [2]
                }
            }
            ))
        }
        ))
    }
    function G(e, t) {
        return Object(l.__awaiter)(this, void 0, void 0, (function() {
            var n, r, i, o, a, s;
            return Object(l.__generator)(this, (function(c) {
                switch (c.label) {
                case 0:
                    return n = A(e),
                    [4, B()];
                case 1:
                    return r = c.sent(),
                    i = r.transaction(M, "readwrite"),
                    [4, (o = i.objectStore(M)).get(n)];
                case 2:
                    return a = c.sent(),
                    void 0 !== (s = t(a)) ? [3, 4] : [4, o.delete(n)];
                case 3:
                    return c.sent(),
                    [3, 6];
                case 4:
                    return [4, o.put(s, n)];
                case 5:
                    c.sent(),
                    c.label = 6;
                case 6:
                    return [4, i.complete];
                case 7:
                    return c.sent(),
                    !s || a && a.fid === s.fid || P(e, s.fid),
                    [2, s]
                }
            }
            ))
        }
        ))
    }
    /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    function H(e) {
        return Object(l.__awaiter)(this, void 0, void 0, (function() {
            var t, n, r;
            return Object(l.__generator)(this, (function(i) {
                switch (i.label) {
                case 0:
                    return [4, G(e, (function(n) {
                        var r = function(e) {
                            return q(e || {
                                fid: T(),
                                registrationStatus: 0
                            })
                        }(n)
                          , i = function(e, t) {
                            if (0 === t.registrationStatus) {
                                if (!navigator.onLine) {
                                    var n = Promise.reject(m.create("app-offline"));
                                    return {
                                        installationEntry: t,
                                        registrationPromise: n
                                    }
                                }
                                var r = {
                                    fid: t.fid,
                                    registrationStatus: 1,
                                    registrationTime: Date.now()
                                }
                                  , i = function(e, t) {
                                    return Object(l.__awaiter)(this, void 0, void 0, (function() {
                                        var n, r;
                                        return Object(l.__generator)(this, (function(i) {
                                            switch (i.label) {
                                            case 0:
                                                return i.trys.push([0, 2, , 7]),
                                                [4, I(e, t)];
                                            case 1:
                                                return n = i.sent(),
                                                [2, V(e, n)];
                                            case 2:
                                                return g(r = i.sent()) && 409 === r.serverCode ? [4, U(e)] : [3, 4];
                                            case 3:
                                                return i.sent(),
                                                [3, 6];
                                            case 4:
                                                return [4, V(e, {
                                                    fid: t.fid,
                                                    registrationStatus: 0
                                                })];
                                            case 5:
                                                i.sent(),
                                                i.label = 6;
                                            case 6:
                                                throw r;
                                            case 7:
                                                return [2]
                                            }
                                        }
                                        ))
                                    }
                                    ))
                                }(e, r);
                                return {
                                    installationEntry: r,
                                    registrationPromise: i
                                }
                            }
                            return 1 === t.registrationStatus ? {
                                installationEntry: t,
                                registrationPromise: W(e)
                            } : {
                                installationEntry: t
                            }
                        }(e, r);
                        return t = i.registrationPromise,
                        i.installationEntry
                    }
                    ))];
                case 1:
                    return "" !== (n = i.sent()).fid ? [3, 3] : (r = {},
                    [4, t]);
                case 2:
                    return [2, (r.installationEntry = i.sent(),
                    r)];
                case 3:
                    return [2, {
                        installationEntry: n,
                        registrationPromise: t
                    }]
                }
            }
            ))
        }
        ))
    }
    function W(e) {
        return Object(l.__awaiter)(this, void 0, void 0, (function() {
            var t, n, r, i;
            return Object(l.__generator)(this, (function(o) {
                switch (o.label) {
                case 0:
                    return [4, z(e)];
                case 1:
                    t = o.sent(),
                    o.label = 2;
                case 2:
                    return 1 !== t.registrationStatus ? [3, 5] : [4, C(100)];
                case 3:
                    return o.sent(),
                    [4, z(e)];
                case 4:
                    return t = o.sent(),
                    [3, 2];
                case 5:
                    return 0 !== t.registrationStatus ? [3, 7] : [4, H(e)];
                case 6:
                    return n = o.sent(),
                    r = n.installationEntry,
                    (i = n.registrationPromise) ? [2, i] : [2, r];
                case 7:
                    return [2, t]
                }
            }
            ))
        }
        ))
    }
    function z(e) {
        return G(e, (function(e) {
            if (!e)
                throw m.create("installation-not-found");
            return q(e)
        }
        ))
    }
    function q(e) {
        return 1 === (t = e).registrationStatus && t.registrationTime + 1e4 < Date.now() ? {
            fid: e.fid,
            registrationStatus: 0
        } : e;
        var t;
        /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    }
    function K(e, t) {
        var n = e.appConfig
          , r = e.platformLoggerProvider;
        return Object(l.__awaiter)(this, void 0, void 0, (function() {
            var e, i, o, a, s, c, u;
            return Object(l.__generator)(this, (function(l) {
                switch (l.label) {
                case 0:
                    return e = function(e, t) {
                        var n = t.fid;
                        return y(e) + "/" + n + "/authTokens:generate"
                    }/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
                    (n, t),
                    i = E(n, t),
                    (o = r.getImmediate({
                        optional: !0
                    })) && i.append("x-firebase-client", o.getPlatformInfoString()),
                    a = {
                        installation: {
                            sdkVersion: "w:0.4.17"
                        }
                    },
                    s = {
                        method: "POST",
                        headers: i,
                        body: JSON.stringify(a)
                    },
                    [4, S((function() {
                        return fetch(e, s)
                    }
                    ))];
                case 1:
                    return (c = l.sent()).ok ? [4, c.json()] : [3, 3];
                case 2:
                    return u = l.sent(),
                    [2, _(u)];
                case 3:
                    return [4, w("Generate Auth Token", c)];
                case 4:
                    throw l.sent()
                }
            }
            ))
        }
        ))
    }
    function $(e, t) {
        return void 0 === t && (t = !1),
        Object(l.__awaiter)(this, void 0, void 0, (function() {
            var n, r, i;
            return Object(l.__generator)(this, (function(o) {
                switch (o.label) {
                case 0:
                    return [4, G(e.appConfig, (function(r) {
                        if (!Y(r))
                            throw m.create("not-registered");
                        var i = r.authToken;
                        if (!t && function(e) {
                            return 2 === e.requestStatus && !function(e) {
                                var t = Date.now();
                                return t < e.creationTime || e.creationTime + e.expiresIn < t + 36e5
                            }(e)
                        }(i))
                            return r;
                        if (1 === i.requestStatus)
                            return n = function(e, t) {
                                return Object(l.__awaiter)(this, void 0, void 0, (function() {
                                    var n, r;
                                    return Object(l.__generator)(this, (function(i) {
                                        switch (i.label) {
                                        case 0:
                                            return [4, J(e.appConfig)];
                                        case 1:
                                            n = i.sent(),
                                            i.label = 2;
                                        case 2:
                                            return 1 !== n.authToken.requestStatus ? [3, 5] : [4, C(100)];
                                        case 3:
                                            return i.sent(),
                                            [4, J(e.appConfig)];
                                        case 4:
                                            return n = i.sent(),
                                            [3, 2];
                                        case 5:
                                            return 0 === (r = n.authToken).requestStatus ? [2, $(e, t)] : [2, r]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }(e, t),
                            r;
                        if (!navigator.onLine)
                            throw m.create("app-offline");
                        var o = function(e) {
                            var t = {
                                requestStatus: 1,
                                requestTime: Date.now()
                            };
                            return Object(l.__assign)(Object(l.__assign)({}, e), {
                                authToken: t
                            })
                        }(r);
                        return n = function(e, t) {
                            return Object(l.__awaiter)(this, void 0, void 0, (function() {
                                var n, r, i;
                                return Object(l.__generator)(this, (function(o) {
                                    switch (o.label) {
                                    case 0:
                                        return o.trys.push([0, 3, , 8]),
                                        [4, K(e, t)];
                                    case 1:
                                        return n = o.sent(),
                                        i = Object(l.__assign)(Object(l.__assign)({}, t), {
                                            authToken: n
                                        }),
                                        [4, V(e.appConfig, i)];
                                    case 2:
                                        return o.sent(),
                                        [2, n];
                                    case 3:
                                        return !g(r = o.sent()) || 401 !== r.serverCode && 404 !== r.serverCode ? [3, 5] : [4, U(e.appConfig)];
                                    case 4:
                                        return o.sent(),
                                        [3, 7];
                                    case 5:
                                        return i = Object(l.__assign)(Object(l.__assign)({}, t), {
                                            authToken: {
                                                requestStatus: 0
                                            }
                                        }),
                                        [4, V(e.appConfig, i)];
                                    case 6:
                                        o.sent(),
                                        o.label = 7;
                                    case 7:
                                        throw r;
                                    case 8:
                                        return [2]
                                    }
                                }
                                ))
                            }
                            ))
                        }(e, o),
                        o
                    }
                    ))];
                case 1:
                    return r = o.sent(),
                    n ? [4, n] : [3, 3];
                case 2:
                    return i = o.sent(),
                    [3, 4];
                case 3:
                    i = r.authToken,
                    o.label = 4;
                case 4:
                    return [2, i]
                }
            }
            ))
        }
        ))
    }
    function J(e) {
        return G(e, (function(e) {
            if (!Y(e))
                throw m.create("not-registered");
            var t, n = e.authToken;
            return 1 === (t = n).requestStatus && t.requestTime + 1e4 < Date.now() ? Object(l.__assign)(Object(l.__assign)({}, e), {
                authToken: {
                    requestStatus: 0
                }
            }) : e
        }
        ))
    }
    function Y(e) {
        return void 0 !== e && 2 === e.registrationStatus
    }
    function X(e) {
        return Object(l.__awaiter)(this, void 0, void 0, (function() {
            var t;
            return Object(l.__generator)(this, (function(n) {
                switch (n.label) {
                case 0:
                    return [4, H(e)];
                case 1:
                    return (t = n.sent().registrationPromise) ? [4, t] : [3, 3];
                case 2:
                    n.sent(),
                    n.label = 3;
                case 3:
                    return [2]
                }
            }
            ))
        }
        ))
    }
    /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    function Z(e, t) {
        return Object(l.__awaiter)(this, void 0, void 0, (function() {
            var n, r, i, o;
            return Object(l.__generator)(this, (function(a) {
                switch (a.label) {
                case 0:
                    return n = function(e, t) {
                        var n = t.fid;
                        return y(e) + "/" + n
                    }/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
                    (e, t),
                    r = E(e, t),
                    i = {
                        method: "DELETE",
                        headers: r
                    },
                    [4, S((function() {
                        return fetch(n, i)
                    }
                    ))];
                case 1:
                    return (o = a.sent()).ok ? [3, 3] : [4, w("Delete Installation", o)];
                case 2:
                    throw a.sent();
                case 3:
                    return [2]
                }
            }
            ))
        }
        ))
    }
    /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    function Q(e, t) {
        var n = e.appConfig;
        return function(e, t) {
            x();
            var n = A(e)
              , r = N.get(n);
            r || (r = new Set,
            N.set(n, r)),
            r.add(t)
        }(n, t),
        function() {
            !function(e, t) {
                var n = A(e)
                  , r = N.get(n);
                r && (r.delete(t),
                0 === r.size && N.delete(n),
                L())
            }(n, t)
        }
    }
    /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    function ee(e) {
        return m.create("missing-app-config-values", {
            valueName: e
        })
    }
    /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    (F = d.a).INTERNAL.registerComponent(new p.Component("installations",(function(e) {
        var t = e.getProvider("app").getImmediate()
          , n = {
            appConfig: function(e) {
                var t, n;
                if (!e || !e.options)
                    throw ee("App Configuration");
                if (!e.name)
                    throw ee("App Name");
                try {
                    for (var r = Object(l.__values)(["projectId", "apiKey", "appId"]), i = r.next(); !i.done; i = r.next()) {
                        var o = i.value;
                        if (!e.options[o])
                            throw ee(o)
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (n = r.return) && n.call(r)
                    } finally {
                        if (t)
                            throw t.error
                    }
                }
                return {
                    appName: e.name,
                    projectId: e.options.projectId,
                    apiKey: e.options.apiKey,
                    appId: e.options.appId
                }
            }(t),
            platformLoggerProvider: e.getProvider("platform-logger")
        };
        return {
            app: t,
            getId: function() {
                /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
                return function(e) {
                    return Object(l.__awaiter)(this, void 0, void 0, (function() {
                        var t, n, r;
                        return Object(l.__generator)(this, (function(i) {
                            switch (i.label) {
                            case 0:
                                return [4, H(e.appConfig)];
                            case 1:
                                return t = i.sent(),
                                n = t.installationEntry,
                                (r = t.registrationPromise) ? r.catch(console.error) : $(e).catch(console.error),
                                [2, n.fid]
                            }
                        }
                        ))
                    }
                    ))
                }/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
                (n)
            },
            getToken: function(e) {
                return function(e, t) {
                    return void 0 === t && (t = !1),
                    Object(l.__awaiter)(this, void 0, void 0, (function() {
                        return Object(l.__generator)(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return [4, X(e.appConfig)];
                            case 1:
                                return n.sent(),
                                [4, $(e, t)];
                            case 2:
                                return [2, n.sent().token]
                            }
                        }
                        ))
                    }
                    ))
                }(n, e)
            },
            delete: function() {
                return function(e) {
                    return Object(l.__awaiter)(this, void 0, void 0, (function() {
                        var t, n;
                        return Object(l.__generator)(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return [4, G(t = e.appConfig, (function(e) {
                                    if (!e || 0 !== e.registrationStatus)
                                        return e
                                }
                                ))];
                            case 1:
                                if (!(n = r.sent()))
                                    return [3, 6];
                                if (1 !== n.registrationStatus)
                                    return [3, 2];
                                throw m.create("delete-pending-registration");
                            case 2:
                                if (2 !== n.registrationStatus)
                                    return [3, 6];
                                if (navigator.onLine)
                                    return [3, 3];
                                throw m.create("app-offline");
                            case 3:
                                return [4, Z(t, n)];
                            case 4:
                                return r.sent(),
                                [4, U(t)];
                            case 5:
                                r.sent(),
                                r.label = 6;
                            case 6:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }(n)
            },
            onIdChange: function(e) {
                return Q(n, e)
            }
        }
    }
    ),"PUBLIC")),
    F.registerVersion("@firebase/installations", "0.4.17");
    var te, ne, re = n(7), ie = "https://www.googletagmanager.com/gtag/js";
    /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    !function(e) {
        e.EVENT = "event",
        e.SET = "set",
        e.CONFIG = "config"
    }(te || (te = {})),
    function(e) {
        e.ADD_SHIPPING_INFO = "add_shipping_info",
        e.ADD_PAYMENT_INFO = "add_payment_info",
        e.ADD_TO_CART = "add_to_cart",
        e.ADD_TO_WISHLIST = "add_to_wishlist",
        e.BEGIN_CHECKOUT = "begin_checkout",
        e.CHECKOUT_PROGRESS = "checkout_progress",
        e.EXCEPTION = "exception",
        e.GENERATE_LEAD = "generate_lead",
        e.LOGIN = "login",
        e.PAGE_VIEW = "page_view",
        e.PURCHASE = "purchase",
        e.REFUND = "refund",
        e.REMOVE_FROM_CART = "remove_from_cart",
        e.SCREEN_VIEW = "screen_view",
        e.SEARCH = "search",
        e.SELECT_CONTENT = "select_content",
        e.SELECT_ITEM = "select_item",
        e.SELECT_PROMOTION = "select_promotion",
        e.SET_CHECKOUT_OPTION = "set_checkout_option",
        e.SHARE = "share",
        e.SIGN_UP = "sign_up",
        e.TIMING_COMPLETE = "timing_complete",
        e.VIEW_CART = "view_cart",
        e.VIEW_ITEM = "view_item",
        e.VIEW_ITEM_LIST = "view_item_list",
        e.VIEW_PROMOTION = "view_promotion",
        e.VIEW_SEARCH_RESULTS = "view_search_results"
    }(ne || (ne = {}));
    /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    var oe, ae = new re.Logger("@firebase/analytics");
    /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    function se(e, t, n, r, i, o) {
        return Object(l.__awaiter)(this, void 0, void 0, (function() {
            var a, s, c, u;
            return Object(l.__generator)(this, (function(l) {
                switch (l.label) {
                case 0:
                    a = r[i],
                    l.label = 1;
                case 1:
                    return l.trys.push([1, 7, , 8]),
                    a ? [4, t[a]] : [3, 3];
                case 2:
                    return l.sent(),
                    [3, 6];
                case 3:
                    return [4, Promise.all(n)];
                case 4:
                    return s = l.sent(),
                    (c = s.find((function(e) {
                        return e.measurementId === i
                    }
                    ))) ? [4, t[c.appId]] : [3, 6];
                case 5:
                    l.sent(),
                    l.label = 6;
                case 6:
                    return [3, 8];
                case 7:
                    return u = l.sent(),
                    ae.error(u),
                    [3, 8];
                case 8:
                    return e(te.CONFIG, i, o),
                    [2]
                }
            }
            ))
        }
        ))
    }
    function ce(e, t, n, r, i) {
        return Object(l.__awaiter)(this, void 0, void 0, (function() {
            var o, a, s, c, u, f, d, p;
            return Object(l.__generator)(this, (function(l) {
                switch (l.label) {
                case 0:
                    return l.trys.push([0, 4, , 5]),
                    o = [],
                    i && i.send_to ? (a = i.send_to,
                    Array.isArray(a) || (a = [a]),
                    [4, Promise.all(n)]) : [3, 2];
                case 1:
                    for (s = l.sent(),
                    c = function(e) {
                        var n = s.find((function(t) {
                            return t.measurementId === e
                        }
                        ))
                          , r = n && t[n.appId];
                        if (!r)
                            return o = [],
                            "break";
                        o.push(r)
                    }
                    ,
                    u = 0,
                    f = a; u < f.length && (d = f[u],
                    "break" !== c(d)); u++)
                        ;
                    l.label = 2;
                case 2:
                    return 0 === o.length && (o = Object.values(t)),
                    [4, Promise.all(o)];
                case 3:
                    return l.sent(),
                    e(te.EVENT, r, i || {}),
                    [3, 5];
                case 4:
                    return p = l.sent(),
                    ae.error(p),
                    [3, 5];
                case 5:
                    return [2]
                }
            }
            ))
        }
        ))
    }
    function ue(e, t, n, r, i) {
        var o = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            window[r].push(arguments)
        };
        return window[i] && "function" == typeof window[i] && (o = window[i]),
        window[i] = function(e, t, n, r) {
            return function(i, o, a) {
                return Object(l.__awaiter)(this, void 0, void 0, (function() {
                    var s;
                    return Object(l.__generator)(this, (function(c) {
                        switch (c.label) {
                        case 0:
                            return c.trys.push([0, 6, , 7]),
                            i !== te.EVENT ? [3, 2] : [4, ce(e, t, n, o, a)];
                        case 1:
                            return c.sent(),
                            [3, 5];
                        case 2:
                            return i !== te.CONFIG ? [3, 4] : [4, se(e, t, n, r, o, a)];
                        case 3:
                            return c.sent(),
                            [3, 5];
                        case 4:
                            e(te.SET, o),
                            c.label = 5;
                        case 5:
                            return [3, 7];
                        case 6:
                            return s = c.sent(),
                            ae.error(s),
                            [3, 7];
                        case 7:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
        }(o, e, t, n),
        {
            gtagCore: o,
            wrappedGtag: window[i]
        }
    }
    var le = ((oe = {})["already-exists"] = "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
    oe["already-initialized"] = "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
    oe["interop-component-reg-failed"] = "Firebase Analytics Interop Component failed to instantiate: {$reason}",
    oe["invalid-analytics-context"] = "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
    oe["indexeddb-unavailable"] = "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
    oe["fetch-throttle"] = "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
    oe["config-fetch-failed"] = "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
    oe["no-api-key"] = 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
    oe["no-app-id"] = 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',
    oe)
      , fe = new h.ErrorFactory("analytics","Analytics",le)
      , de = new (function() {
        function e(e, t) {
            void 0 === e && (e = {}),
            void 0 === t && (t = 1e3),
            this.throttleMetadata = e,
            this.intervalMillis = t
        }
        return e.prototype.getThrottleMetadata = function(e) {
            return this.throttleMetadata[e]
        }
        ,
        e.prototype.setThrottleMetadata = function(e, t) {
            this.throttleMetadata[e] = t
        }
        ,
        e.prototype.deleteThrottleMetadata = function(e) {
            delete this.throttleMetadata[e]
        }
        ,
        e
    }());
    function pe(e) {
        return new Headers({
            Accept: "application/json",
            "x-goog-api-key": e
        })
    }
    function he(e) {
        var t;
        return Object(l.__awaiter)(this, void 0, void 0, (function() {
            var n, r, i, o, a, s, c;
            return Object(l.__generator)(this, (function(u) {
                switch (u.label) {
                case 0:
                    return n = e.appId,
                    r = e.apiKey,
                    i = {
                        method: "GET",
                        headers: pe(r)
                    },
                    o = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", n),
                    [4, fetch(o, i)];
                case 1:
                    if (200 === (a = u.sent()).status || 304 === a.status)
                        return [3, 6];
                    s = "",
                    u.label = 2;
                case 2:
                    return u.trys.push([2, 4, , 5]),
                    [4, a.json()];
                case 3:
                    return c = u.sent(),
                    (null === (t = c.error) || void 0 === t ? void 0 : t.message) && (s = c.error.message),
                    [3, 5];
                case 4:
                    return u.sent(),
                    [3, 5];
                case 5:
                    throw fe.create("config-fetch-failed", {
                        httpStatus: a.status,
                        responseMessage: s
                    });
                case 6:
                    return [2, a.json()]
                }
            }
            ))
        }
        ))
    }
    function ve(e, t, n, r) {
        var i = t.throttleEndTimeMillis
          , o = t.backoffCount;
        return void 0 === r && (r = de),
        Object(l.__awaiter)(this, void 0, void 0, (function() {
            var t, a, s, c, u, f, d;
            return Object(l.__generator)(this, (function(l) {
                switch (l.label) {
                case 0:
                    t = e.appId,
                    a = e.measurementId,
                    l.label = 1;
                case 1:
                    return l.trys.push([1, 3, , 4]),
                    [4, be(n, i)];
                case 2:
                    return l.sent(),
                    [3, 4];
                case 3:
                    if (s = l.sent(),
                    a)
                        return ae.warn("Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID " + a + ' provided in the "measurementId" field in the local Firebase config. [' + s.message + "]"),
                        [2, {
                            appId: t,
                            measurementId: a
                        }];
                    throw s;
                case 4:
                    return l.trys.push([4, 6, , 7]),
                    [4, he(e)];
                case 5:
                    return c = l.sent(),
                    r.deleteThrottleMetadata(t),
                    [2, c];
                case 6:
                    if (!function(e) {
                        if (!(e instanceof h.FirebaseError))
                            return !1;
                        var t = Number(e.httpStatus);
                        return 429 === t || 500 === t || 503 === t || 504 === t
                    }(u = l.sent())) {
                        if (r.deleteThrottleMetadata(t),
                        a)
                            return ae.warn("Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID " + a + ' provided in the "measurementId" field in the local Firebase config. [' + u.message + "]"),
                            [2, {
                                appId: t,
                                measurementId: a
                            }];
                        throw u
                    }
                    return f = 503 === Number(u.httpStatus) ? Object(h.calculateBackoffMillis)(o, r.intervalMillis, 30) : Object(h.calculateBackoffMillis)(o, r.intervalMillis),
                    d = {
                        throttleEndTimeMillis: Date.now() + f,
                        backoffCount: o + 1
                    },
                    r.setThrottleMetadata(t, d),
                    ae.debug("Calling attemptFetch again in " + f + " millis"),
                    [2, ve(e, d, n, r)];
                case 7:
                    return [2]
                }
            }
            ))
        }
        ))
    }
    function be(e, t) {
        return new Promise((function(n, r) {
            var i = Math.max(t - Date.now(), 0)
              , o = setTimeout(n, i);
            e.addEventListener((function() {
                clearTimeout(o),
                r(fe.create("fetch-throttle", {
                    throttleEndTimeMillis: t
                }))
            }
            ))
        }
        ))
    }
    var me = function() {
        function e() {
            this.listeners = []
        }
        return e.prototype.addEventListener = function(e) {
            this.listeners.push(e)
        }
        ,
        e.prototype.abort = function() {
            this.listeners.forEach((function(e) {
                return e()
            }
            ))
        }
        ,
        e
    }();
    /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    function ge(e, t, n, r, i) {
        return Object(l.__awaiter)(this, void 0, void 0, (function() {
            var o, a, s, c, u, f, d;
            return Object(l.__generator)(this, (function(p) {
                switch (p.label) {
                case 0:
                    return (o = function(e, t, n) {
                        return void 0 === t && (t = de),
                        Object(l.__awaiter)(this, void 0, void 0, (function() {
                            var r, i, o, a, s, c, u = this;
                            return Object(l.__generator)(this, (function(f) {
                                if (r = e.options,
                                i = r.appId,
                                o = r.apiKey,
                                a = r.measurementId,
                                !i)
                                    throw fe.create("no-app-id");
                                if (!o) {
                                    if (a)
                                        return [2, {
                                            measurementId: a,
                                            appId: i
                                        }];
                                    throw fe.create("no-api-key")
                                }
                                return s = t.getThrottleMetadata(i) || {
                                    backoffCount: 0,
                                    throttleEndTimeMillis: Date.now()
                                },
                                c = new me,
                                setTimeout((function() {
                                    return Object(l.__awaiter)(u, void 0, void 0, (function() {
                                        return Object(l.__generator)(this, (function(e) {
                                            return c.abort(),
                                            [2]
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ), void 0 !== n ? n : 6e4),
                                [2, ve({
                                    appId: i,
                                    apiKey: o,
                                    measurementId: a
                                }, s, c, t)]
                            }
                            ))
                        }
                        ))
                    }(e)).then((function(t) {
                        n[t.measurementId] = t.appId,
                        e.options.measurementId && t.measurementId !== e.options.measurementId && ae.warn("The measurement ID in the local Firebase config (" + e.options.measurementId + ") does not match the measurement ID fetched from the server (" + t.measurementId + "). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")
                    }
                    )).catch((function(e) {
                        return ae.error(e)
                    }
                    )),
                    t.push(o),
                    a = function() {
                        return Object(l.__awaiter)(this, void 0, void 0, (function() {
                            var e;
                            return Object(l.__generator)(this, (function(t) {
                                switch (t.label) {
                                case 0:
                                    return Object(h.isIndexedDBAvailable)() ? [3, 1] : (ae.warn(fe.create("indexeddb-unavailable", {
                                        errorInfo: "IndexedDB is not available in this environment."
                                    }).message),
                                    [2, !1]);
                                case 1:
                                    return t.trys.push([1, 3, , 4]),
                                    [4, Object(h.validateIndexedDBOpenable)()];
                                case 2:
                                    return t.sent(),
                                    [3, 4];
                                case 3:
                                    return e = t.sent(),
                                    ae.warn(fe.create("indexeddb-unavailable", {
                                        errorInfo: e
                                    }).message),
                                    [2, !1];
                                case 4:
                                    return [2, !0]
                                }
                            }
                            ))
                        }
                        ))
                    }().then((function(e) {
                        return e ? r.getId() : void 0
                    }
                    )),
                    [4, Promise.all([o, a])];
                case 1:
                    return s = p.sent(),
                    c = s[0],
                    u = s[1],
                    i("js", new Date),
                    (d = {}).origin = "firebase",
                    d.update = !0,
                    f = d,
                    null != u && (f.firebase_id = u),
                    i(te.CONFIG, c.measurementId, f),
                    [2, c.measurementId]
                }
            }
            ))
        }
        ))
    }
    /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    var ye, _e, we = {}, Oe = [], Ee = {}, Se = "dataLayer", Ie = "gtag", Ce = !1;
    function je(e) {
        if (Ce)
            throw fe.create("already-initialized");
        e.dataLayerName && (Se = e.dataLayerName),
        e.gtagName && (Ie = e.gtagName)
    }
    function Te(e, t) {
        !function() {
            var e = [];
            if (Object(h.isBrowserExtension)() && e.push("This is a browser extension environment."),
            Object(h.areCookiesEnabled)() || e.push("Cookies are not available."),
            e.length > 0) {
                var t = e.map((function(e, t) {
                    return "(" + (t + 1) + ") " + e
                }
                )).join(" ")
                  , n = fe.create("invalid-analytics-context", {
                    errorInfo: t
                });
                ae.warn(n.message)
            }
        }();
        var n = e.options.appId;
        if (!n)
            throw fe.create("no-app-id");
        if (!e.options.apiKey) {
            if (!e.options.measurementId)
                throw fe.create("no-api-key");
            ae.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ' + e.options.measurementId + ' provided in the "measurementId" field in the local Firebase config.')
        }
        if (null != we[n])
            throw fe.create("already-exists", {
                id: n
            });
        if (!Ce) {
            (function() {
                for (var e = window.document.getElementsByTagName("script"), t = 0, n = Object.values(e); t < n.length; t++) {
                    var r = n[t];
                    if (r.src && r.src.includes(ie))
                        return r
                }
                return null
            }
            /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
            )() || function(e) {
                var t = document.createElement("script");
                t.src = ie + "?l=" + e,
                t.async = !0,
                document.head.appendChild(t)
            }(Se),
            function(e) {
                var t = [];
                Array.isArray(window[e]) ? t = window[e] : window[e] = t
            }(Se);
            var r = ue(we, Oe, Ee, Se, Ie)
              , i = r.wrappedGtag
              , o = r.gtagCore;
            _e = i,
            ye = o,
            Ce = !0
        }
        return we[n] = ge(e, Oe, Ee, t, ye),
        {
            app: e,
            logEvent: function(e, t, r) {
                (/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
                function(e, t, n, r, i) {
                    return Object(l.__awaiter)(this, void 0, void 0, (function() {
                        var o, a;
                        return Object(l.__generator)(this, (function(s) {
                            switch (s.label) {
                            case 0:
                                return i && i.global ? (e(te.EVENT, n, r),
                                [2]) : [3, 1];
                            case 1:
                                return [4, t];
                            case 2:
                                o = s.sent(),
                                a = Object(l.__assign)(Object(l.__assign)({}, r), {
                                    send_to: o
                                }),
                                e(te.EVENT, n, a),
                                s.label = 3;
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                )(_e, we[n], e, t, r).catch((function(e) {
                    return ae.error(e)
                }
                ))
            },
            setCurrentScreen: function(e, t) {
                (function(e, t, n, r) {
                    return Object(l.__awaiter)(this, void 0, void 0, (function() {
                        var i;
                        return Object(l.__generator)(this, (function(o) {
                            switch (o.label) {
                            case 0:
                                return r && r.global ? (e(te.SET, {
                                    screen_name: n
                                }),
                                [2, Promise.resolve()]) : [3, 1];
                            case 1:
                                return [4, t];
                            case 2:
                                i = o.sent(),
                                e(te.CONFIG, i, {
                                    update: !0,
                                    screen_name: n
                                }),
                                o.label = 3;
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                )(_e, we[n], e, t).catch((function(e) {
                    return ae.error(e)
                }
                ))
            },
            setUserId: function(e, t) {
                (function(e, t, n, r) {
                    return Object(l.__awaiter)(this, void 0, void 0, (function() {
                        var i;
                        return Object(l.__generator)(this, (function(o) {
                            switch (o.label) {
                            case 0:
                                return r && r.global ? (e(te.SET, {
                                    user_id: n
                                }),
                                [2, Promise.resolve()]) : [3, 1];
                            case 1:
                                return [4, t];
                            case 2:
                                i = o.sent(),
                                e(te.CONFIG, i, {
                                    update: !0,
                                    user_id: n
                                }),
                                o.label = 3;
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                )(_e, we[n], e, t).catch((function(e) {
                    return ae.error(e)
                }
                ))
            },
            setUserProperties: function(e, t) {
                (function(e, t, n, r) {
                    return Object(l.__awaiter)(this, void 0, void 0, (function() {
                        var i, o, a, s, c;
                        return Object(l.__generator)(this, (function(u) {
                            switch (u.label) {
                            case 0:
                                if (!r || !r.global)
                                    return [3, 1];
                                for (i = {},
                                o = 0,
                                a = Object.keys(n); o < a.length; o++)
                                    s = a[o],
                                    i["user_properties." + s] = n[s];
                                return e(te.SET, i),
                                [2, Promise.resolve()];
                            case 1:
                                return [4, t];
                            case 2:
                                c = u.sent(),
                                e(te.CONFIG, c, {
                                    update: !0,
                                    user_properties: n
                                }),
                                u.label = 3;
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                )(_e, we[n], e, t).catch((function(e) {
                    return ae.error(e)
                }
                ))
            },
            setAnalyticsCollectionEnabled: function(e) {
                (function(e, t) {
                    return Object(l.__awaiter)(this, void 0, void 0, (function() {
                        var n;
                        return Object(l.__generator)(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return [4, e];
                            case 1:
                                return n = r.sent(),
                                window["ga-disable-" + n] = !t,
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                )(we[n], e).catch((function(e) {
                    return ae.error(e)
                }
                ))
            },
            INTERNAL: {
                delete: function() {
                    return delete we[n],
                    Promise.resolve()
                }
            }
        }
    }
    function Ae() {
        return Object(l.__awaiter)(this, void 0, void 0, (function() {
            return Object(l.__generator)(this, (function(e) {
                switch (e.label) {
                case 0:
                    if (Object(h.isBrowserExtension)())
                        return [2, !1];
                    if (!Object(h.areCookiesEnabled)())
                        return [2, !1];
                    if (!Object(h.isIndexedDBAvailable)())
                        return [2, !1];
                    e.label = 1;
                case 1:
                    return e.trys.push([1, 3, , 4]),
                    [4, Object(h.validateIndexedDBOpenable)()];
                case 2:
                    return [2, e.sent()];
                case 3:
                    return e.sent(),
                    [2, !1];
                case 4:
                    return [2]
                }
            }
            ))
        }
        ))
    }
    !function(e) {
        e.INTERNAL.registerComponent(new p.Component("analytics",(function(e) {
            return Te(e.getProvider("app").getImmediate(), e.getProvider("installations").getImmediate())
        }
        ),"PUBLIC").setServiceProps({
            settings: je,
            EventName: ne,
            isSupported: Ae
        })),
        e.INTERNAL.registerComponent(new p.Component("analytics-internal",(function(e) {
            try {
                return {
                    logEvent: e.getProvider("analytics").getImmediate().logEvent
                }
            } catch (e) {
                throw fe.create("interop-component-reg-failed", {
                    reason: e
                })
            }
        }
        ),"PRIVATE")),
        e.registerVersion("@firebase/analytics", "0.6.0")
    }(d.a);
    var Ne = function(e, t, n, r) {
        return new (n || (n = Promise))((function(i, o) {
            function a(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    o(e)
                }
            }
            function s(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }
            function c(e) {
                var t;
                e.done ? i(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(a, s)
            }
            c((r = r.apply(e, t || [])).next())
        }
        ))
    }
      , Pe = function(e, t) {
        var n, r, i, o, a = {
            label: 0,
            sent: function() {
                if (1 & i[0])
                    throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }
        ),
        o;
        function s(o) {
            return function(s) {
                return function(o) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                            0) : r.next) && !(i = i.call(r, o[1])).done)
                                return i;
                            switch (r = 0,
                            i && (o = [2 & o[0], i.value]),
                            o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = o[1],
                                o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(i = a.trys,
                                (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < i[1]) {
                                    a.label = i[1],
                                    i = o;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2],
                                    a.ops.push(o);
                                    break
                                }
                                i[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            o = t.call(e, a)
                        } catch (e) {
                            o = [6, e],
                            r = 0
                        } finally {
                            n = i = 0
                        }
                    if (5 & o[0])
                        throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    };
    function De() {
        return Ne(this, void 0, void 0, (function() {
            var e, t;
            return Pe(this, (function(n) {
                switch (n.label) {
                case 0:
                    return n.trys.push([0, 2, , 3]),
                    [4, navigator.serviceWorker.register("/sw.js")];
                case 1:
                    return (e = n.sent()).addEventListener("updatefound", (function() {
                        var t = e.installing;
                        t.addEventListener("statechange", (function() {
                            "installed" === t.state && (navigator.serviceWorker.controller ? console.log("update available") : console.log("update isn't available"))
                        }
                        ))
                    }
                    )),
                    console.log("SW registered: ", e),
                    [3, 3];
                case 2:
                    return t = n.sent(),
                    console.log("SW registration failed: ", t),
                    [3, 3];
                case 3:
                    return [2]
                }
            }
            ))
        }
        ))
    }
    function ke(e) {
        return Ne(this, void 0, void 0, (function() {
            var t;
            return Pe(this, (function(n) {
                switch (n.label) {
                case 0:
                    return n.trys.push([0, 2, , 3]),
                    [4, e()];
                case 1:
                    return [2, n.sent()];
                case 2:
                    return t = n.sent(),
                    Sentry.captureException(t),
                    s.a.show("Something went wrong. Try to reload the page."),
                    [3, 3];
                case 3:
                    return [2]
                }
            }
            ))
        }
        ))
    }
    u.a.initializeApp({
        apiKey: "AIzaSyBqZb08P-VGZ-nUNDfOWJhzEwJ-12hOpqI",
        authDomain: "retro-games-257212.firebaseapp.com",
        databaseURL: "https://retro-games-257212.firebaseio.com",
        projectId: "retro-games-257212",
        storageBucket: "retro-games-257212.appspot.com",
        messagingSenderId: "325015648544",
        appId: "1:325015648544:web:d31d2624c05cec73583f45",
        measurementId: "G-KXEHGB0NC8"
    }),
    u.a.analytics(),
    console.log("%c Retro Games, build 67", "background: #222; color: #bada55"),
    "undefined" == typeof Sentry && (window.Sentry = {
        init: function() {},
        captureException: function() {}
    }),
    Sentry.init({
        dsn: "https://5439e70942c24b2688118af95b085ef1@sentry.io/302754"
    }),
    document.addEventListener("touchmove", (function(e) {
        1 !== e.scale && e.preventDefault()
    }
    ), {
        passive: !1
    }),
    function() {
        var e = this;
        "serviceWorker"in navigator && window.addEventListener("load", De),
        o.a.show();
        var t = Object(a.a)();
        if (t && t[0] < 11)
            return o.a.hide(),
            void s.a.show("Looks like you're using outdated iOS version. At least iOS 11 is required. Yours is iOS " + t[0] + ".");
        var r = document.querySelector("main");
        i.route.prefix = "",
        i.route(r, "", {
            "/": {
                onmatch: function() {
                    return ke((function() {
                        return Ne(e, void 0, void 0, (function() {
                            return Pe(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, Promise.all([n.e(9), n.e(8)]).then(n.bind(null, 301))];
                                case 1:
                                    return [2, e.sent().UiComponent]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
            },
            "/terms": {
                onmatch: function() {
                    return ke((function() {
                        return Ne(e, void 0, void 0, (function() {
                            return Pe(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, n.e(19).then(n.bind(null, 302))];
                                case 1:
                                    return [2, e.sent().TermsComponent]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
            },
            "/nes/:token...": {
                onmatch: function() {
                    return ke((function() {
                        return Ne(e, void 0, void 0, (function() {
                            return Pe(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, Promise.all([n.e(0), n.e(2), n.e(1), n.e(13)]).then(n.bind(null, 287))];
                                case 1:
                                    return [2, e.sent().NesComponent]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
            },
            "/gb/:token...": {
                onmatch: function() {
                    return ke((function() {
                        return Ne(e, void 0, void 0, (function() {
                            return Pe(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, Promise.all([n.e(0), n.e(2), n.e(1), n.e(3)]).then(n.bind(null, 288))];
                                case 1:
                                    return [2, e.sent().GBComponent]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
            },
            "/gbc/:token...": {
                onmatch: function() {
                    return ke((function() {
                        return Ne(e, void 0, void 0, (function() {
                            return Pe(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, Promise.all([n.e(0), n.e(2), n.e(1), n.e(3)]).then(n.bind(null, 288))];
                                case 1:
                                    return [2, e.sent().GBComponent]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
            },
            "/snes/:token": {
                onmatch: function() {
                    return ke((function() {
                        return Ne(e, void 0, void 0, (function() {
                            return Pe(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, Promise.all([n.e(0), n.e(2), n.e(1), n.e(17)]).then(n.bind(null, 289))];
                                case 1:
                                    return [2, e.sent().SnesComponent]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
            },
            "/gba/:token...": {
                onmatch: function() {
                    return ke((function() {
                        return Ne(e, void 0, void 0, (function() {
                            return Pe(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, Promise.all([n.e(0), n.e(2), n.e(1), n.e(10)]).then(n.bind(null, 290))];
                                case 1:
                                    return [2, e.sent().GbaComponent]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
            },
            "/genesis/:token...": {
                onmatch: function() {
                    return ke((function() {
                        return Ne(e, void 0, void 0, (function() {
                            return Pe(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, Promise.all([n.e(0), n.e(2), n.e(1), n.e(4)]).then(n.bind(null, 291))];
                                case 1:
                                    return [2, e.sent().GenesisComponent]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
            },
            "/sms/:token...": {
                onmatch: function() {
                    return ke((function() {
                        return Ne(e, void 0, void 0, (function() {
                            return Pe(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, Promise.all([n.e(0), n.e(2), n.e(1), n.e(4)]).then(n.bind(null, 291))];
                                case 1:
                                    return [2, e.sent().GenesisComponent]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
            },
            "/n64/:token": {
                onmatch: function() {
                    return ke((function() {
                        return Ne(e, void 0, void 0, (function() {
                            return Pe(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, Promise.all([n.e(0), n.e(1), n.e(12)]).then(n.bind(null, 292))];
                                case 1:
                                    return [2, e.sent().N64Component]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
            },
            "/jaguar/:token...": {
                onmatch: function() {
                    return ke((function() {
                        return Ne(e, void 0, void 0, (function() {
                            return Pe(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, Promise.all([n.e(0), n.e(2), n.e(1), n.e(11)]).then(n.bind(null, 293))];
                                case 1:
                                    return [2, e.sent().JaguarComponent]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
            },
            "/psx/:token...": {
                onmatch: function() {
                    return ke((function() {
                        return Ne(e, void 0, void 0, (function() {
                            return Pe(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, Promise.all([n.e(0), n.e(6), n.e(1), n.e(7)]).then(n.bind(null, 294))];
                                case 1:
                                    return [2, e.sent().PsxComponent]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
            },
            "/stella/:token...": {
                onmatch: function() {
                    return ke((function() {
                        return Ne(e, void 0, void 0, (function() {
                            return Pe(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, Promise.all([n.e(0), n.e(2), n.e(1), n.e(18)]).then(n.bind(null, 295))];
                                case 1:
                                    return [2, e.sent().StellaComponent]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
            },
            "/pros/:token...": {
                onmatch: function() {
                    return ke((function() {
                        return Ne(e, void 0, void 0, (function() {
                            return Pe(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, Promise.all([n.e(0), n.e(2), n.e(1), n.e(15)]).then(n.bind(null, 296))];
                                case 1:
                                    return [2, e.sent().ProsComponent]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
            },
            "/sgx/:token...": {
                onmatch: function() {
                    return ke((function() {
                        return Ne(e, void 0, void 0, (function() {
                            return Pe(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, Promise.all([n.e(0), n.e(2), n.e(1), n.e(16)]).then(n.bind(null, 297))];
                                case 1:
                                    return [2, e.sent().SgxComponent]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
            },
            "/ngp/:token...": {
                onmatch: function() {
                    return ke((function() {
                        return Ne(e, void 0, void 0, (function() {
                            return Pe(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, Promise.all([n.e(0), n.e(2), n.e(1), n.e(14)]).then(n.bind(null, 298))];
                                case 1:
                                    return [2, e.sent().NgpComponent]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
            },
            "/game/:token": {
                onmatch: function() {
                    return ke((function() {
                        return Ne(e, void 0, void 0, (function() {
                            return Pe(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return [4, n.e(20).then(n.bind(null, 299))];
                                case 1:
                                    return [2, e.sent().GameComponent]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
            }
        })
    }()
}
]);
