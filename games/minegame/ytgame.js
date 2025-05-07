(function() {
    'use strict';
    var aa = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
    ;
    function ba(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }
    var ca = ba(this);
    function da(a, b) {
        if (b)
            a: {
                var c = ca;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c))
                        break a;
                    c = c[e]
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && b != null && aa(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
    }
    function l(a) {
        function b(d) {
            return a.next(d)
        }
        function c(d) {
            return a.throw(d)
        }
        return new Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        }
        )
    }
    da("globalThis", function(a) {
        return a || ca
    });
    da("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
            return c
        }
    });
    da("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b))
                    return !0
            }
            return !1
        }
    });
    da("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for (d in b)
                Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    function ea(a, b) {
        a instanceof String && (a += "");
        var c = 0
          , d = !1
          , e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
        e[Symbol.iterator] = function() {
            return e
        }
        ;
        return e
    }
    da("Array.prototype.values", function(a) {
        return a ? a : function() {
            return ea(this, function(b, c) {
                return c
            })
        }
    });
    const fa = () => {
        var a = window.getCurrentSdkUrl();
        if (a !== null) {
            a = new URL(a.origin + a.pathname + "?" + window.getLocationHash().substring(1));
            if (a.searchParams.has("flags")) {
                let b;
                window.sdkFlags = (b = a.searchParams.get("flags")) != null ? b : ""
            }
            if (a.searchParams.has("environment") && a.searchParams.has("bundle") && a.searchParams.has("key") && (a.searchParams.get("environment") !== "prod" || a.searchParams.get("bundle") !== "public"))
                throw document.write('<script src="' + a.toString() + '">\x3c/script>'),
                Error("Exiting SDK: Purposefully exiting to load a different SDK version.");
        }
    }
    ;
    if (!window.loadYTGame) {
        window.getLocationHash = () => window.location.hash;
        const a = document.currentScript.src;
        window.getCurrentSdkUrl = () => a != "" ? new URL(a) : null;
        window.loadYTGame = fa;
        fa()
    }
    window.enableSendingResourceLoadedEvents = !0;
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var m = this || self;
    function ha(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    }
    function n(a, b) {
        a = a.split(".");
        for (var c = m, d; a.length && (d = a.shift()); )
            a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }
    function ia(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.I = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.P = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }
    ;function ja(a) {
        m.setTimeout( () => {
            throw a;
        }
        , 0)
    }
    ;function p() {
        var a = m.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    ;const ka = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    : function(a, b) {
        if (typeof a === "string")
            return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    ;
    function la(a) {
        la[" "](a);
        return a
    }
    la[" "] = function() {}
    ;
    var ma = p().indexOf("Gecko") != -1 && !(p().toLowerCase().indexOf("webkit") != -1 && p().indexOf("Edge") == -1) && !(p().indexOf("Trident") != -1 || p().indexOf("MSIE") != -1) && p().indexOf("Edge") == -1
      , na = p().toLowerCase().indexOf("webkit") != -1 && p().indexOf("Edge") == -1;
    function oa(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    }
    ;let pa = void 0;
    function qa(a) {
        a = Error(a);
        oa(a, "warning");
        return a
    }
    ;var ra = typeof Symbol === "function" && typeof Symbol() === "symbol";
    function sa(a, b, c=!1) {
        return typeof Symbol === "function" && typeof Symbol() === "symbol" ? c && Symbol.for && a ? Symbol.for(a) : a != null ? Symbol(a) : Symbol() : b
    }
    var ta = sa("jas", void 0, !0)
      , ua = sa(void 0, "0di")
      , va = sa(void 0, "1oa")
      , wa = sa(void 0, "0actk")
      , xa = sa("m_m", "U", !0);
    const ya = {
        M: {
            value: 0,
            configurable: !0,
            writable: !0,
            enumerable: !1
        }
    }
      , za = Object.defineProperties
      , q = ra ? ta : "M";
    var Aa;
    const Ca = [];
    r(Ca, 7);
    Aa = Object.freeze(Ca);
    function Da(a, b) {
        ra || q in a || za(a, ya);
        a[q] |= b
    }
    function r(a, b) {
        ra || q in a || za(a, ya);
        a[q] = b
    }
    function Ea(a) {
        Da(a, 34);
        return a
    }
    ;var Fa = {};
    function t(a, b) {
        return b === void 0 ? a.g !== Ga && !!(2 & (a.j[q] | 0)) : !!(2 & b) && a.g !== Ga
    }
    const Ga = {};
    class Ha {
        constructor(a, b, c) {
            this.g = a;
            this.h = b;
            this.i = c
        }
        next() {
            const a = this.g.next();
            a.done || (a.value = this.h.call(this.i, a.value));
            return a
        }
        [Symbol.iterator]() {
            return this
        }
    }
    ;function Ia() {
        return typeof BigInt === "function"
    }
    ;function Ja(a) {
        a.T = !0;
        return a
    }
    ;var Ka = Ja(a => typeof a === "number")
      , La = Ja(a => typeof a === "string")
      , Ma = Ja(a => typeof a === "boolean");
    var Na = typeof m.BigInt === "function" && typeof m.BigInt(0) === "bigint";
    var Ta = Ja(a => Na ? a >= Oa && a <= Pa : a[0] === "-" ? Qa(a, Ra) : Qa(a, Sa));
    const Ra = Number.MIN_SAFE_INTEGER.toString()
      , Oa = Na ? BigInt(Number.MIN_SAFE_INTEGER) : void 0
      , Sa = Number.MAX_SAFE_INTEGER.toString()
      , Pa = Na ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;
    function Qa(a, b) {
        if (a.length > b.length)
            return !1;
        if (a.length < b.length || a === b)
            return !0;
        for (let c = 0; c < a.length; c++) {
            const d = a[c]
              , e = b[c];
            if (d > e)
                return !1;
            if (d < e)
                return !0
        }
    }
    ;let v = 0
      , w = 0;
    function Ua(a) {
        const b = a >>> 0;
        v = b;
        w = (a - b) / 4294967296 >>> 0
    }
    function Va(a) {
        if (a < 0) {
            Ua(-a);
            const [b,c] = Wa(v, w);
            v = b >>> 0;
            w = c >>> 0
        } else
            Ua(a)
    }
    function Xa(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (b <= 2097151)
            var c = "" + (4294967296 * b + a);
        else
            Ia() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215,
            b = b >> 16 & 65535,
            a = (a & 16777215) + c * 6777216 + b * 6710656,
            c += b * 8147497,
            b *= 2,
            a >= 1E7 && (c += a / 1E7 >>> 0,
            a %= 1E7),
            c >= 1E7 && (b += c / 1E7 >>> 0,
            c %= 1E7),
            c = b + Ya(c) + Ya(a));
        return c
    }
    function Ya(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }
    function Wa(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    }
    ;const Za = typeof BigInt === "function" ? BigInt.asIntN : void 0
      , $a = Number.isSafeInteger
      , ab = Number.isFinite
      , bb = Math.trunc;
    function cb(a) {
        if (typeof a !== "number")
            throw Error(`Value of float/double field must be a number, found ${typeof a}: ${a}`);
        return a
    }
    const db = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    function eb(a) {
        switch (typeof a) {
        case "bigint":
            return !0;
        case "number":
            return ab(a);
        case "string":
            return db.test(a);
        default:
            return !1
        }
    }
    function fb(a) {
        if (typeof a !== "number")
            throw qa("int32");
        if (!ab(a))
            throw qa("int32");
        return a | 0
    }
    function x(a) {
        return a == null ? a : fb(a)
    }
    function gb(a) {
        if (a == null)
            return a;
        if (typeof a === "string" && a)
            a = +a;
        else if (typeof a !== "number")
            return;
        return ab(a) ? a | 0 : void 0
    }
    function A(a) {
        if (a != null)
            a: {
                if (!eb(a))
                    throw qa("int64");
                switch (typeof a) {
                case "string":
                    var b = bb(Number(a));
                    if ($a(b))
                        a = String(b);
                    else if (b = a.indexOf("."),
                    b !== -1 && (a = a.substring(0, b)),
                    b = a.length,
                    !(a[0] === "-" ? b < 20 || b === 20 && Number(a.substring(0, 7)) > -922337 : b < 19 || b === 19 && Number(a.substring(0, 6)) < 922337)) {
                        if (a.length < 16)
                            Va(Number(a));
                        else if (Ia())
                            a = BigInt(a),
                            v = Number(a & BigInt(4294967295)) >>> 0,
                            w = Number(a >> BigInt(32) & BigInt(4294967295));
                        else {
                            b = +(a[0] === "-");
                            w = v = 0;
                            var c = a.length;
                            for (let e = b, f = (c - b) % 6 + b; f <= c; e = f,
                            f += 6) {
                                var d = Number(a.slice(e, f));
                                w *= 1E6;
                                v = v * 1E6 + d;
                                v >= 4294967296 && (w += Math.trunc(v / 4294967296),
                                w >>>= 0,
                                v >>>= 0)
                            }
                            if (b) {
                                const [e,f] = Wa(v, w);
                                v = e;
                                w = f
                            }
                        }
                        a = v;
                        b = w;
                        if (b & 2147483648)
                            if (Ia())
                                a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0));
                            else {
                                const [e,f] = Wa(a, b);
                                a = "-" + Xa(e, f)
                            }
                        else
                            a = Xa(a, b)
                    }
                    break a;
                case "bigint":
                    b = a = Za(64, a);
                    if (La(b)) {
                        if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))
                            throw Error(String(b));
                    } else if (Ka(b) && !Number.isSafeInteger(b))
                        throw Error(String(b));
                    Na ? a = BigInt(a) : a = Ma(a) ? a ? "1" : "0" : La(a) ? a.trim() || "0" : String(a);
                    break a;
                default:
                    if (a = bb(a),
                    !$a(a)) {
                        Va(a);
                        b = v;
                        c = w;
                        if (a = c & 2147483648)
                            b = ~b + 1 >>> 0,
                            c = ~c >>> 0,
                            b == 0 && (c = c + 1 >>> 0);
                        d = c * 4294967296 + (b >>> 0);
                        b = Number.isSafeInteger(d) ? d : Xa(b, c);
                        a = typeof b === "number" ? a ? -b : b : a ? "-" + b : b
                    }
                }
            }
        return a
    }
    function B(a) {
        if (a != null && typeof a !== "string")
            throw Error();
        return a
    }
    function hb(a) {
        return a == null || typeof a === "string" ? a : void 0
    }
    function ib(a, b, c, d) {
        if (a != null && typeof a === "object" && a[xa] === Fa)
            return a;
        if (!Array.isArray(a))
            return c ? d & 2 ? ((a = b[ua]) || (a = new b,
            Ea(a.j),
            a = b[ua] = a),
            b = a) : b = new b : b = void 0,
            b;
        c = a[q] | 0;
        d = c | d & 32 | d & 2;
        d !== c && r(a, d);
        return new b(a)
    }
    function jb(a, b, c) {
        a = b ? fb(a) : gb(a);
        return a == null ? c ? 0 : void 0 : a | 0
    }
    ;function kb(a) {
        return a
    }
    ;const lb = {};
    let mb = function() {
        try {
            return la(new class extends Map {
                constructor() {
                    super()
                }
            }
            ),
            !1
        } catch (a) {
            return !0
        }
    }();
    class nb {
        constructor() {
            this.g = new Map
        }
        get(a) {
            return this.g.get(a)
        }
        set(a, b) {
            this.g.set(a, b);
            this.size = this.g.size;
            return this
        }
        delete(a) {
            a = this.g.delete(a);
            this.size = this.g.size;
            return a
        }
        clear() {
            this.g.clear();
            this.size = this.g.size
        }
        has(a) {
            return this.g.has(a)
        }
        entries() {
            return this.g.entries()
        }
        keys() {
            return this.g.keys()
        }
        values() {
            return this.g.values()
        }
        forEach(a, b) {
            return this.g.forEach(a, b)
        }
        [Symbol.iterator]() {
            return this.entries()
        }
    }
    const ob = ( () => mb ? (Object.setPrototypeOf(nb.prototype, Map.prototype),
    Object.defineProperties(nb.prototype, {
        size: {
            value: 0,
            configurable: !0,
            enumerable: !0,
            writable: !0
        }
    }),
    nb) : class extends Map {
        constructor() {
            super()
        }
    }
    )();
    function pb(a) {
        return a
    }
    function qb(a) {
        if (a.A & 2)
            throw Error("Cannot mutate an immutable Map");
    }
    var C = class extends ob {
        constructor(a, b, c=pb, d=pb) {
            super();
            this.A = a[q] | 0;
            this.B = b;
            this.D = c;
            this.K = this.B ? rb : d;
            for (let e = 0; e < a.length; e++) {
                const f = a[e]
                  , g = c(f[0], !1, !0);
                let h = f[1];
                b ? h === void 0 && (h = null) : h = d(f[1], !1, !0, void 0, void 0, this.A);
                super.set(g, h)
            }
        }
        O() {
            var a = sb;
            if (this.size !== 0)
                return Array.from(super.entries(), a)
        }
        J() {
            return Array.from(super.entries())
        }
        clear() {
            qb(this);
            super.clear()
        }
        delete(a) {
            qb(this);
            return super.delete(this.D(a, !0, !1))
        }
        entries() {
            if (this.B) {
                var a = super.keys();
                a = new Ha(a,tb,this)
            } else
                a = super.entries();
            return a
        }
        values() {
            if (this.B) {
                var a = super.keys();
                a = new Ha(a,C.prototype.get,this)
            } else
                a = super.values();
            return a
        }
        forEach(a, b) {
            this.B ? super.forEach( (c, d, e) => {
                a.call(b, e.get(d), d, e)
            }
            ) : super.forEach(a, b)
        }
        set(a, b) {
            qb(this);
            a = this.D(a, !0, !1);
            return a == null ? this : b == null ? (super.delete(a),
            this) : super.set(a, this.K(b, !0, !0, this.B, !1, this.A))
        }
        has(a) {
            return super.has(this.D(a, !1, !1))
        }
        get(a) {
            a = this.D(a, !1, !1);
            const b = super.get(a);
            if (b !== void 0) {
                var c = this.B;
                return c ? (c = this.K(b, !1, !0, c, this.R, this.A),
                c !== b && super.set(a, c),
                c) : b
            }
        }
        [Symbol.iterator]() {
            return this.entries()
        }
    }
    ;
    C.prototype.toJSON = void 0;
    function rb(a, b, c, d, e, f) {
        a = ib(a, d, c, f);
        e && (a = ub(a));
        return a
    }
    function tb(a) {
        return [a, this.get(a)]
    }
    let vb;
    function wb() {
        return vb || (vb = new C(Ea([]),void 0,void 0,void 0,lb))
    }
    ;function xb(a, b, c, d=!1, e=!1) {
        const f = [];
        var g = a.length;
        let h, k = 4294967295, u = !1;
        const N = !!(b & 64)
          , G = N ? b & 128 ? 0 : -1 : void 0;
        if (!(b & 1 || (h = g && a[g - 1],
        h != null && typeof h === "object" && h.constructor === Object ? (g--,
        k = g) : h = void 0,
        !N || b & 128 || e))) {
            u = !0;
            var y;
            k = ((y = yb) != null ? y : kb)(k - G, G, a, h) + G
        }
        y = void 0;
        for (let z = 0; z < g; z++) {
            let O = a[z];
            if (O != null && (O = c(O, d)) != null)
                if (N && z >= k) {
                    const Ba = z - G;
                    let Ob;
                    ((Ob = y) != null ? Ob : y = {})[Ba] = O
                } else
                    f[z] = O
        }
        if (h)
            for (let z in h) {
                a = h[z];
                if (a == null || (a = c(a, d)) == null)
                    continue;
                g = +z;
                let O;
                if (N && !Number.isNaN(g) && (O = g + G) < k)
                    f[O] = a;
                else {
                    let Ba;
                    ((Ba = y) != null ? Ba : y = {})[z] = a
                }
            }
        y && (u ? f.push(y) : f[k] = y);
        e && r(f, b & 16761025 | 34);
        return f
    }
    function sb(a) {
        a[0] = zb(a[0]);
        a[1] = zb(a[1]);
        return a
    }
    function zb(a) {
        switch (typeof a) {
        case "number":
            return Number.isFinite(a) ? a : "" + a;
        case "bigint":
            return Ta(a) ? Number(a) : "" + a;
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (Array.isArray(a)) {
                const b = a[q] | 0;
                return a.length === 0 && b & 1 ? void 0 : xb(a, b, zb)
            }
            if (a[xa] === Fa)
                return Ab(a);
            if (a instanceof C)
                return a.O();
            return
        }
        return a
    }
    let yb;
    function Ab(a) {
        a = a.j;
        return xb(a, a[q] | 0, zb)
    }
    ;function Bb(a) {
        a: {
            if (a == null) {
                var b = 32;
                a = []
            } else {
                if (!Array.isArray(a))
                    throw Error("narr");
                b = a[q] | 0;
                4096 & b && !(2 & b) && Cb();
                if (b & 256)
                    throw Error("farr");
                if (b & 64) {
                    b & 4096 || r(a, b | 4096);
                    var c = a;
                    break a
                }
                var d = a;
                b |= 64;
                var e = d.length;
                if (e) {
                    var f = e - 1;
                    e = d[f];
                    if (e != null && typeof e === "object" && e.constructor === Object) {
                        const g = b & 128 ? 0 : -1;
                        f -= g;
                        if (f >= 1024)
                            throw Error("pvtlmt");
                        for (c in e) {
                            const h = +c;
                            h < f && (d[h + g] = e[c],
                            delete e[c])
                        }
                        b = b & -16760833 | (f & 1023) << 14
                    }
                }
            }
            r(a, b | 4160);
            c = a
        }
        return c
    }
    function Cb() {
        if (wa != null) {
            var a;
            var b = (a = pa) != null ? a : pa = {};
            a = b[wa] || 0;
            a >= 5 || (b[wa] = a + 1,
            b = Error(),
            oa(b, "incident"),
            ja(b))
        }
    }
    ;function Db(a, b) {
        if (typeof a !== "object")
            return a;
        if (Array.isArray(a)) {
            var c = a[q] | 0;
            return a.length === 0 && c & 1 ? void 0 : Eb(a, c, b)
        }
        if (a[xa] === Fa)
            return Fb(a);
        if (a instanceof C) {
            c = a.A;
            if (c & 2)
                return a;
            if (a.size) {
                b = Ea(a.J());
                if (a.B)
                    for (a = 0; a < b.length; a++) {
                        const d = b[a];
                        let e = d[1];
                        e == null || typeof e !== "object" ? e = void 0 : e[xa] === Fa ? e = Fb(e) : Array.isArray(e) ? e = Eb(e, e[q] | 0, !!(c & 32)) : e = void 0;
                        d[1] = e
                    }
                return b
            }
        }
    }
    function Eb(a, b, c) {
        if (b & 2)
            return a;
        !c || 8192 & b || 16 & b ? a = Gb(a, b, c && !(b & 16)) : (Da(a, 34),
        b & 4 && Object.freeze(a));
        return a
    }
    function Fb(a) {
        const b = a.j
          , c = b[q] | 0;
        return t(a, c) ? a : Gb(b, c)
    }
    function Gb(a, b, c) {
        c != null || (c = !!(34 & b));
        return xb(a, b, Db, c, !0)
    }
    function ub(a) {
        var b = a.j;
        const c = b[q] | 0;
        if (!t(a, c))
            return a;
        a = new a.constructor(Gb(b, c));
        b = a.j;
        b[q] &= -3;
        return a
    }
    function Hb(a) {
        if (a.g !== Ga)
            return !1;
        let b = a.j;
        b = Gb(b, b[q] | 0);
        b[q] &= -3;
        a.j = b;
        a.g = void 0;
        return !0
    }
    function Ib(a) {
        if (!Hb(a) && t(a, a.j[q] | 0))
            throw Error();
    }
    ;function D(a, b, c, d) {
        if (b === -1)
            return null;
        const e = b + (c ? 0 : -1)
          , f = a.length - 1;
        let g, h;
        if (!(f < 1 + (c ? 0 : -1))) {
            if (e >= f)
                if (g = a[f],
                g != null && typeof g === "object" && g.constructor === Object)
                    c = g[b],
                    h = !0;
                else if (e === f)
                    c = g;
                else
                    return;
            else
                c = a[e];
            if (d && c != null) {
                d = d(c);
                if (d == null)
                    return d;
                if (!Object.is(d, c))
                    return h ? g[b] = d : a[e] = d,
                    d
            }
            return c
        }
    }
    function E(a, b, c) {
        Ib(a);
        const d = a.j;
        F(d, d[q] | 0, b, c);
        return a
    }
    function F(a, b, c, d) {
        const e = c + -1;
        var f = a.length - 1;
        if (f >= 0 && e >= f) {
            const g = a[f];
            if (g != null && typeof g === "object" && g.constructor === Object)
                return g[c] = d,
                b
        }
        if (e <= f)
            return a[e] = d,
            b;
        if (d !== void 0) {
            let g;
            f = ((g = b) != null ? g : b = a[q] | 0) >> 14 & 1023 || 536870912;
            c >= f ? d != null && (a[f + -1] = {
                [c]: d
            }) : a[e] = d
        }
        return b
    }
    function Jb(a, b, c) {
        const d = a.j;
        return Kb(d, d[q] | 0, b, Lb(a, H, c)) !== void 0
    }
    function Mb(a, b) {
        this.set(b, a)
    }
    function Nb(a, b, c, d) {
        Ib(a);
        const e = a.j;
        var f = e[q] | 0;
        if (d == null) {
            var g = Pb(e);
            if (Qb(g, e, f, c) === b)
                g.set(c, 0);
            else
                return a
        } else {
            g = Pb(e);
            const h = Qb(g, e, f, c);
            h !== b && (h && (f = F(e, f, h)),
            g.set(c, b))
        }
        F(e, f, b, d);
        return a
    }
    function Lb(a, b, c) {
        a = a.j;
        return Qb(Pb(a), a, void 0, b) === c ? c : -1
    }
    function Pb(a) {
        if (ra) {
            var b;
            return (b = a[va]) != null ? b : a[va] = new Map
        }
        if (va in a)
            return a[va];
        b = new Map;
        Object.defineProperty(a, va, {
            value: b
        });
        return b
    }
    function Qb(a, b, c, d) {
        let e = a.get(d);
        if (e != null)
            return e;
        e = 0;
        for (let f = 0; f < d.length; f++) {
            const g = d[f];
            D(b, g) != null && (e !== 0 && (c = F(b, c, e)),
            e = g)
        }
        a.set(d, e);
        return e
    }
    function Kb(a, b, c, d) {
        a = D(a, d, void 0, e => ib(e, c, !1, b));
        if (a != null)
            return a
    }
    function Rb(a) {
        a == null && (a = void 0);
        return a
    }
    function I(a, b, c) {
        c = Rb(c);
        E(a, b, c);
        return a
    }
    function J(a, b, c, d) {
        d = Rb(d);
        Nb(a, b, c, d);
        return a
    }
    function Sb(a, b) {
        let c;
        return (c = hb(D(a.j, b))) != null ? c : ""
    }
    function Tb(a, b) {
        a = D(a.j, b);
        a = a == null ? a : ab(a) ? a | 0 : void 0;
        return a != null ? a : 0
    }
    function K(a, b, c, d) {
        {
            c = Lb(a, d, c);
            d = a.j;
            let e = d[q] | 0;
            b = Kb(d, e, b, c);
            if (b != null && (e = d[q] | 0,
            !t(a, e))) {
                const f = ub(b);
                f !== b && (Hb(a) && (d = a.j,
                e = d[q] | 0),
                b = f,
                F(d, e, c, b))
            }
            a = b
        }
        return a
    }
    function L(a, b, c) {
        if (c != null) {
            if (!ab(c))
                throw qa("enum");
            c |= 0
        }
        return E(a, b, c)
    }
    function Ub(a, b, c) {
        Ib(a);
        var d = a.j
          , e = d[q] | 0
          , f = D(d, b);
        f instanceof C && !(f instanceof C && f.A & 2) ? f.clear() : f != null && F(d, e, b);
        if (c) {
            Ib(a);
            d = c.forEach;
            e = a.j;
            var g = e[q] | 0;
            a: {
                f = g;
                var h = t(a, g);
                !h && Hb(a) && (e = a.j,
                f = e[q] | 0);
                var k = D(e, b);
                g = !1;
                if (k == null) {
                    if (h) {
                        b = wb();
                        break a
                    }
                    k = []
                } else if (k.constructor === C)
                    if (k.A & 2 && !h)
                        k = k.J();
                    else {
                        b = k;
                        break a
                    }
                else
                    Array.isArray(k) ? g = !!((k[q] | 0) & 2) : k = [];
                if (h) {
                    if (!k.length) {
                        b = wb();
                        break a
                    }
                    g || (g = !0,
                    Ea(k))
                } else if (g) {
                    g = !1;
                    h = k;
                    h = Array.prototype.slice.call(h);
                    for (k = 0; k < h.length; k++) {
                        const u = h[k] = Array.prototype.slice.call(h[k]);
                        Array.isArray(u[1]) && (u[1] = Ea(u[1]))
                    }
                    k = h
                }
                !g && f & 32 && Da(k, 32);
                g = new C(k,void 0,jb,jb);
                F(e, f, b, g);
                b = g
            }
            d.call(c, Mb, b)
        }
        return a
    }
    ;var M = class {
        constructor(a) {
            this.j = Bb(a)
        }
        toJSON() {
            return Ab(this)
        }
        clone() {
            var a = this
              , b = a.j;
            a = new a.constructor(Gb(b, b[q] | 0));
            b = a.j;
            b[q] &= -3;
            return a
        }
    }
    ;
    M.prototype[xa] = Fa;
    M.prototype.toString = function() {
        return this.j.toString()
    }
    ;
    class Vb {
        constructor(a, b) {
            this.data = a;
            this.channel = b
        }
    }
    ;function Wb(a) {
        const b = new MessageChannel;
        Xb(b.port1, a);
        return b
    }
    function Yb(a, b) {
        Xb(a, b);
        return new Zb(a)
    }
    class Zb {
        constructor(a) {
            this.h = a
        }
        g(a, b, c=[]) {
            b = Wb(b);
            this.h.postMessage(a, [b.port2].concat(c))
        }
    }
    function Xb(a, b) {
        b && (a.onmessage = c => {
            var d = c.data;
            c = Yb(c.ports[0]);
            b(new Vb(d,c))
        }
        )
    }
    ;var $b = function() {
        if (!m.addEventListener || !Object.defineProperty)
            return !1;
        var a = !1
          , b = Object.defineProperty({}, "passive", {
            get: function() {
                a = !0
            }
        });
        try {
            const c = () => {}
            ;
            m.addEventListener("test", c, b);
            m.removeEventListener("test", c, b)
        } catch (c) {}
        return a
    }();
    var ac = ({destination: a, origin: b, V: c, L: d="ZNWN1d", onMessage: e}) => {
        if (b === "*")
            throw Error("Sending to wildcard origin not allowed.");
        const f = Wb(e);
        a.postMessage(c ? {
            n: d,
            t: c
        } : d, b, [f.port2]);
        return Yb(f.port1, e)
    }
    ;
    var bc = class {
        constructor(a) {
            this.h = a
        }
        g(a, b, c) {
            this.h.g(Ab(a), b, c)
        }
    }
      , dc = a => {
        var b = cc;
        return c => {
            const d = new b(c.data);
            return a(new Vb(d,c.channel))
        }
    }
      , ec = a => b => a(new Vb(b.data,new bc(b.channel)));
    /*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
    let fc = globalThis.trustedTypes, gc;
    function hc() {
        let a = null;
        if (!fc)
            return a;
        try {
            const b = c => c;
            a = fc.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (b) {}
        return a
    }
    ;var ic = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    }
    ;
    function jc(a) {
        var b;
        gc === void 0 && (gc = hc());
        a = (b = gc) ? b.createScriptURL(a) : a;
        return new ic(a)
    }
    ;function kc(a, b) {
        var c = a.register;
        if (b instanceof ic)
            b = b.g;
        else
            throw Error("");
        return c.call(a, b, void 0)
    }
    ;function lc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }
    function mc(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    }
    ;function nc(a, ...b) {
        if (b.length === 0)
            return jc(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++)
            c += encodeURIComponent(b[d]) + a[d + 1];
        return jc(c)
    }
    ;function oc(a, b) {
        this.type = a;
        this.target = b
    }
    oc.prototype.g = function() {}
    ;
    function pc(a, b) {
        oc.call(this, a ? a.type : "");
        this.relatedTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.h = null;
        a && this.init(a, b)
    }
    ia(pc, oc);
    pc.prototype.init = function(a) {
        const b = this.type = a.type
          , c = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        let d = a.relatedTarget;
        d || (b == "mouseover" ? d = a.fromElement : b == "mouseout" && (d = a.toElement));
        this.relatedTarget = d;
        c ? (this.clientX = c.clientX !== void 0 ? c.clientX : c.pageX,
        this.clientY = c.clientY !== void 0 ? c.clientY : c.pageY,
        this.screenX = c.screenX || 0,
        this.screenY = c.screenY || 0) : (this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX,
        this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY,
        this.screenX = a.screenX || 0,
        this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = a.pointerType;
        this.state = a.state;
        this.h = a;
        a.defaultPrevented && pc.I.g.call(this)
    }
    ;
    pc.prototype.g = function() {
        pc.I.g.call(this);
        const a = this.h;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
    ;
    var qc = "closure_listenable_" + (Math.random() * 1E6 | 0);
    var rc = 0;
    function sc(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.h = e;
        this.key = ++rc;
        this.g = this.F = !1
    }
    function tc(a) {
        a.g = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.h = null
    }
    ;function uc(a) {
        this.src = a;
        this.g = {};
        this.h = 0
    }
    uc.prototype.add = function(a, b, c, d, e) {
        const f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [],
        this.h++);
        var g;
        a: {
            for (g = 0; g < a.length; ++g) {
                const h = a[g];
                if (!h.g && h.listener == b && h.capture == !!d && h.h == e)
                    break a
            }
            g = -1
        }
        g > -1 ? (b = a[g],
        c || (b.F = !1)) : (b = new sc(b,this.src,f,!!d,e),
        b.F = c,
        a.push(b));
        return b
    }
    ;
    var vc = "closure_lm_" + (Math.random() * 1E6 | 0)
      , wc = {}
      , xc = 0;
    function yc(a, b, c, d, e) {
        if (d && d.once)
            zc(a, b, c, d, e);
        else if (Array.isArray(b))
            for (let f = 0; f < b.length; f++)
                yc(a, b[f], c, d, e);
        else
            c = Ac(c),
            a && a[qc] ? a.g(b, c, ha(d) ? !!d.capture : !!d, e) : Bc(a, b, c, !1, d, e)
    }
    function Bc(a, b, c, d, e, f) {
        if (!b)
            throw Error("Invalid event type");
        const g = ha(e) ? !!e.capture : !!e;
        let h = Cc(a);
        h || (a[vc] = h = new uc(a));
        c = h.add(b, c, d, g, f);
        if (!c.proxy) {
            d = Dc();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener)
                $b || (e = g),
                e === void 0 && (e = !1),
                a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent)
                a.attachEvent(Ec(b.toString()), d);
            else if (a.addListener && a.removeListener)
                a.addListener(d);
            else
                throw Error("addEventListener and attachEvent are unavailable.");
            xc++
        }
    }
    function Dc() {
        function a(c) {
            return b.call(a.src, a.listener, c)
        }
        const b = Fc;
        return a
    }
    function zc(a, b, c, d, e) {
        if (Array.isArray(b))
            for (let f = 0; f < b.length; f++)
                zc(a, b[f], c, d, e);
        else
            c = Ac(c),
            a && a[qc] ? a.h(b, c, ha(d) ? !!d.capture : !!d, e) : Bc(a, b, c, !0, d, e)
    }
    function Ec(a) {
        return a in wc ? wc[a] : wc[a] = "on" + a
    }
    function Fc(a, b) {
        if (a.g)
            a = !0;
        else {
            b = new pc(b,this);
            const g = a.listener
              , h = a.h || a.src;
            if (a.F && typeof a !== "number" && a && !a.g) {
                var c = a.src;
                if (c && c[qc])
                    c.i(a);
                else {
                    var d = a.type
                      , e = a.proxy;
                    c.removeEventListener ? c.removeEventListener(d, e, a.capture) : c.detachEvent ? c.detachEvent(Ec(d), e) : c.addListener && c.removeListener && c.removeListener(e);
                    xc--;
                    if (d = Cc(c)) {
                        e = a.type;
                        var f;
                        if (f = e in d.g) {
                            f = d.g[e];
                            const k = ka(f, a);
                            let u;
                            (u = k >= 0) && Array.prototype.splice.call(f, k, 1);
                            f = u
                        }
                        f && (tc(a),
                        d.g[e].length == 0 && (delete d.g[e],
                        d.h--));
                        d.h == 0 && (d.src = null,
                        c[vc] = null)
                    } else
                        tc(a)
                }
            }
            a = g.call(h, b)
        }
        return a
    }
    function Cc(a) {
        a = a[vc];
        return a instanceof uc ? a : null
    }
    var Gc = "__closure_events_fn_" + (Math.random() * 1E9 >>> 0);
    function Ac(a) {
        if (typeof a === "function")
            return a;
        a[Gc] || (a[Gc] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[Gc]
    }
    ;function P(a, b) {
        if (typeof b === "string")
            (b = Hc(a, b)) && (a.style[b] = "none");
        else
            for (const e in b) {
                var c = a
                  , d = b[e];
                const f = Hc(c, e);
                f && (c.style[f] = d)
            }
    }
    var Ic = {};
    function Hc(a, b) {
        let c = Ic[b];
        if (!c) {
            var d = lc(b);
            c = d;
            a.style[d] === void 0 && (d = (na ? "Webkit" : ma ? "Moz" : null) + mc(d),
            a.style[d] !== void 0 && (c = d));
            Ic[b] = c
        }
        return c
    }
    ;var Jc = class extends M {
    }
    ;
    var Kc = class extends M {
    }
    ;
    var Lc = class extends M {
    }
    ;
    var Mc = class extends M {
    }
    ;
    var Nc = class extends M {
    }
      , Oc = [3, 4];
    var Pc = class extends M {
    }
    ;
    function Qc(a, b) {
        {
            Ib(a);
            const u = a.j;
            let N = u[q] | 0;
            if (b == null)
                F(u, N, 1);
            else {
                var c = b === Aa ? 7 : b[q] | 0
                  , d = c
                  , e = !!(2 & c) && !!(4 & c) || !!(256 & c)
                  , f = e || Object.isFrozen(b)
                  , g = !0
                  , h = !0;
                for (let G = 0; G < b.length; G++) {
                    var k = b[G];
                    e || (k = t(k),
                    g && (g = !k),
                    h && (h = k))
                }
                e || (c = g ? 13 : 5,
                c = h ? c & -8193 : c | 8192);
                f && c === d || (b = Array.prototype.slice.call(b),
                d = 0,
                c = 2 & N ? c | 2 : c & -3,
                c &= -273);
                c !== d && r(b, c);
                F(u, N, 1, b)
            }
        }
        return a
    }
    var Rc = class extends M {
    }
    ;
    var Sc = class extends M {
    }
    ;
    function Tc(a) {
        var b = new Uc;
        if (a != null && typeof a !== "boolean")
            throw b = typeof a,
            Error(`Expected boolean but got ${b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"}: ${a}`);
        return E(b, 2, a)
    }
    var Uc = class extends M {
    }
    ;
    var Vc = class extends M {
    }
    ;
    var Wc = class extends M {
    }
    ;
    var Xc = class extends M {
    }
    ;
    function Yc(a) {
        var b = new Zc;
        return L(b, 1, a)
    }
    function $c(a, b) {
        return I(a, 2, b)
    }
    function ad(a) {
        var b = bd();
        b = cd(b.s);
        return I(a, 4, b)
    }
    var Zc = class extends M {
    }
      , dd = [3];
    function ed(a, b) {
        return E(a, 1, b == null ? b : cb(b))
    }
    function fd(a, b) {
        return E(a, 2, b == null ? b : cb(b))
    }
    var gd = class extends M {
    }
    ;
    function hd() {
        var a = new id;
        return E(a, 1, A(performance.now()))
    }
    function jd(a, b) {
        return E(a, 2, B(b))
    }
    var id = class extends M {
    }
    ;
    var kd = class extends M {
    }
    ;
    var ld = class extends M {
    }
    ;
    var md = class extends M {
        getInviteCode() {
            return Sb(this, 1)
        }
        hasInviteCode() {
            return hb(D(this.j, 1)) != null
        }
    }
    ;
    var od = class extends M {
        getLanguage() {
            return Sb(this, Lb(this, nd, 4))
        }
    }
      , nd = [3, 4, 5, 6];
    var cc = class extends M {
    }
      , H = [2, 3, 4, 5];
    var pd = class extends M {
    }
    ;
    var qd = class extends M {
    }
    ;
    function rd(a, b) {
        return E(a, 1, A(b))
    }
    function sd(a) {
        return E(a, 2, A(performance.now()))
    }
    function td(a, b) {
        return E(a, 3, b == null ? b : cb(b))
    }
    function ud(a, b) {
        return E(a, 4, b == null ? b : cb(b))
    }
    function vd(a, b) {
        return I(a, 5, b)
    }
    function wd(a, b) {
        return I(a, 6, b)
    }
    function xd(a, b) {
        I(a, 7, b)
    }
    var yd = class extends M {
    }
    ;
    var zd = class extends M {
    }
    ;
    var Ad = class extends M {
    }
    ;
    function Q(a) {
        var b = new Bd;
        return L(b, 1, a)
    }
    function Cd(a, b) {
        return J(a, 2, R, b)
    }
    function Dd(a, b) {
        return J(a, 5, R, b)
    }
    function Ed(a) {
        var b = Q(12);
        return J(b, 10, R, a)
    }
    function Fd(a, b) {
        return J(a, 14, R, b)
    }
    var Bd = class extends M {
        getInviteCode() {
            return Sb(this, Lb(this, R, 11))
        }
        hasInviteCode() {
            var a = Lb(this, R, 11);
            return hb(D(this.j, a)) != null
        }
    }
      , R = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    var Gd = {
        UNKNOWN: 0,
        API_UNAVAILABLE: 1,
        INVALID_PARAMS: 2,
        SIZE_LIMIT_EXCEEDED: 3,
        0: "UNKNOWN",
        1: "API_UNAVAILABLE",
        2: "INVALID_PARAMS",
        3: "SIZE_LIMIT_EXCEEDED"
    }
      , S = class extends Error {
        constructor(a, b) {
            super(b);
            this.errorType = a;
            this.name = `SDK_ERROR_${Gd[this.errorType]}`
        }
    }
    ;
    function Hd(a) {
        switch (a) {
        case 1:
            return "SDK_API_FIRST_FRAME_READY";
        case 2:
            return "SDK_API_LOAD_DATA";
        case 3:
            return "SDK_API_SAVE_DATA";
        case 4:
            return "SDK_API_SEND_SCORE";
        case 5:
            return "SDK_API_ON_AUDIO_ENABLED_CHANGE";
        case 6:
            return "SDK_API_ON_PAUSE";
        case 7:
            return "SDK_API_ON_RESUME";
        case 8:
            return "SDK_API_GET_LANGUAGE";
        case 9:
            return "SDK_API_GAME_READY";
        case 10:
            return "SDK_API_IS_AUDIO_ENABLED";
        case 11:
            return "SDK_API_BENCHMARKING"
        }
        return "SDK_API_UNSPECIFIED"
    }
    var T = class extends S {
        constructor(a, b, c, d) {
            super(a.errorType, c != null ? c : a.message);
            this.v = a;
            this.g = b;
            this.data = d;
            this.name = `${this.name}_${Hd(b)}`
        }
    }
    ;
    var Id = new S(0,"An unknown error occurred.")
      , U = new S(2,"Invalid parameters entered, please fix and try again.")
      , Jd = new S(1,"Unspecified network error. Check your internet connection and try again.")
      , Kd = new S(3,"Size limit exceeded.")
      , Ld = new S(0,"Resource URL is malformed")
      , Md = new S(1,"The requested Ad failed to load. Check your network and try again.");
    function V(a, b) {
        let c = Id;
        if (Jb(a, od, 2))
            switch (a = K(a, od, 2, H),
            Tb(a, 2)) {
            case 1:
                return;
            case 2:
                c = U;
                break;
            case 3:
                if (b === 14) {
                    c = Md;
                    break
                }
                c = Jd;
                break;
            case 4:
                console.warn("The SDK is no-op, if you are trying to verify SDK integration please use the SDK Test Suite available at https://developers.google.com/youtube/gaming/playables/certification/sdktestsuite");
                return;
            default:
                c = Id
            }
        throw new T(c,b);
    }
    ;function Nd(a, b) {
        const c = d => {
            d instanceof Od && b(d.g)
        }
        ;
        a.g.addEventListener(a.type, c);
        a.h !== void 0 && a.dispatchEvent(a.h);
        return () => {
            a.g.removeEventListener(a.type, c)
        }
    }
    var Pd = class {
        constructor(a, b) {
            this.type = a;
            this.g = new EventTarget;
            let c;
            this.G = (c = b == null ? void 0 : b.G) != null ? c : !0;
            (b == null ? void 0 : b.H) !== void 0 && this.dispatchEvent(b == null ? void 0 : b.H)
        }
        dispatchEvent(a) {
            this.g.dispatchEvent(new Od(this.type,a));
            this.G && (this.h = a)
        }
    }
    ;
    class Od extends Event {
        constructor(a, b) {
            super(a);
            this.g = b
        }
    }
    ;var Qd, Rd, Sd = new cc;
    Rd = L(Sd, 1, 1);
    var Td, Ud = new od;
    Td = L(Ud, 2, 4);
    Qd = J(Rd, 2, H, Td);
    var Vd = new Vb(Qd,Yb((new MessageChannel).port2));
    function W() {
        var a = window !== window.parent;
        Wd || (Wd = new Xd(a));
        if (Wd.g !== a)
            throw Error(`MessagingService is already created with isEmbedded=${!a}`);
        return Wd
    }
    function Yd(a, b) {
        Nd(a.target, b)
    }
    function X(a, b, c= () => {}
    ) {
        a.g ? a.channel.g(b, ec(dc(c))) : c(Vd)
    }
    function Y(a, b) {
        return new Promise(c => {
            X(a, b, c)
        }
        )
    }
    var Xd = class {
        constructor(a) {
            this.g = a;
            this.target = new Pd("HOST_EVENT",{
                G: !1
            });
            a = (new URLSearchParams(window.location.hash.substring(1))).get("origin") || document.referrer;
            this.channel = new bc(ac({
                destination: window.parent,
                origin: this.g ? a : window.location.origin,
                L: "playableIframe",
                onMessage: ec(dc(b => {
                    this.target.dispatchEvent(b)
                }
                ))
            }))
        }
    }
    , Wd;
    const Zd = {
        UNKNOWN: 0,
        SHOWED: 1,
        REJECTED: 3,
        DISMISSED: 2,
        0: "UNKNOWN",
        1: "SHOWED",
        3: "REJECTED",
        2: "DISMISSED"
    };
    var $d = class {
        constructor() {
            this.g = W();
            this.AdResult = Zd
        }
        requestAd() {
            const a = this;
            return l(function*() {
                try {
                    yield a.requestInterstitialAd()
                } catch (b) {
                    if (b instanceof T)
                        throw b;
                    return 3
                }
                return 1
            }())
        }
        requestInterstitialAd() {
            const a = this;
            return l(function*() {
                var b = a.g;
                var c = Q(14);
                var d = new Kc;
                d = L(d, 1, 1);
                c = J(c, 13, R, d);
                b = yield Y(b, c);
                V(b.data, 16);
                let e, f;
                if (((e = K(b.data, od, 2, H)) == null ? void 0 : (f = K(e, Jc, 6, nd)) == null ? void 0 : Tb(f, 1)) !== 4)
                    return Promise.reject()
            }())
        }
    }
    ;
    var ae = window !== window.parent
      , be = class {
        constructor() {
            this.SDK_VERSION = "1.20250428.0000";
            this.IN_PLAYABLES_ENV = ae;
            this.SdkError = S;
            this.SdkErrorType = Gd
        }
    }
    ;
    var ce = class {
        constructor() {
            this.g = W()
        }
        sendScore(a) {
            const b = this;
            return l(function*() {
                if (!Number.isInteger(a.value))
                    throw new T(U,4,"Score value must be an integer and" + ` the value entered was: ${a.value}`);
                if (!Number.isSafeInteger(a.value))
                    throw new T(U,4,`Score value must be less than the maximum safe integer in Javascript ${Number.MAX_SAFE_INTEGER} and the value entered was: ${a.value}`);
                var c = b.g
                  , d = Q(2);
                var e = new zd;
                e = E(e, 1, A(a.value));
                d = J(d, 3, R, e);
                c = yield Y(c, d);
                V(c.data, 4)
            }())
        }
        openYTContent(a) {
            const b = this;
            return l(function*() {
                var c = a.id;
                if (c.length !== 11 || !/^[-A-Za-z0-9_]+$/.test(c) || !"AEIMQUYcgkosw048".includes(c[10]) || c === "GU5U2spHI_4")
                    throw new T(U,15,"Invalid format for content being passed");
                c = b.g;
                var d = Q(15);
                var e = new Mc;
                e = E(e, 1, B(a.id));
                d = J(d, 12, R, e);
                c = yield Y(c, d);
                V(c.data, 15)
            }())
        }
    }
    ;
    const de = {
        disableConsoleLog: !1,
        enableNerdStats: !1,
        enableServiceWorker: !1,
        enableServiceWorkerKillswitch: !1,
        enableAudioCapture: !1
    };
    function ee(a) {
        return typeof a === "boolean" ? a : !1
    }
    let fe = null;
    function ge() {
        if (fe)
            return fe;
        fe = de;
        let a;
        const b = (a = window.sdkFlags) != null ? a : "";
        if (b) {
            let c;
            try {
                c = JSON.parse(b)
            } catch (d) {
                return console.error("Failed to parse flags.", d, " Flags string: ", b),
                fe
            }
            typeof c === "object" && c && Object.keys(c).length > 0 && (fe = {
                disableConsoleLog: ee(c.disableConsoleLog),
                enableNerdStats: ee(c.enableNerdStats),
                enableServiceWorker: ee(c.enableServiceWorker),
                enableServiceWorkerKillswitch: ee(c.enableServiceWorkerKillswitch),
                enableAudioCapture: ee(c.enableAudioCapture)
            })
        }
        return fe
    }
    ;function he(a) {
        a.h = 0;
        a.g = 0;
        a.i = a.index
    }
    function ie(a, b) {
        a.index === a.i && a.g > 0 && (a.h -= a.l[a.index],
        a.g--,
        a.i++,
        a.i >= a.l.length && (a.i = 0));
        a.l[a.index] = b;
        a.h += b;
        a.g++;
        a.index++;
        a.index >= a.l.length && (a.index = 0)
    }
    function je(a) {
        return a.g === 0 ? 0 : a.h / a.g
    }
    var ke = class {
        constructor(a) {
            this.index = this.i = this.g = this.h = 0;
            this.l = Array(a)
        }
    }
    ;
    function le() {
        let a;
        return (a = me.instance) != null ? a : new me
    }
    function ne(a) {
        Object.defineProperty(window, "AudioContext", {
            value: new Proxy(AudioContext,{
                construct() {
                    return a
                }
            }),
            writable: !0
        })
    }
    function oe(a, b) {
        l(function*() {
            var c = b - a.g;
            c > 33.33 && (a.g = b - c % 33.33,
            a.h && (X(a.i, Fd(Q(16), jd(hd(), a.h.toDataURL("image/png")))),
            c = performance.now(),
            ie(a.l, c - a.o),
            ie(a.m, c - b),
            a.o = c));
            requestAnimationFrame(d => {
                oe(a, d)
            }
            )
        }())
    }
    function pe() {
        var a = le();
        requestAnimationFrame(b => {
            oe(a, b)
        }
        );
        if (ge().enableAudioCapture) {
            const b = new MediaRecorder(a.s.stream);
            b.ondataavailable = c => new Promise(d => {
                const e = new FileReader;
                e.onload = () => {
                    var f = e.result
                      , g = a.i
                      , h = Q(17)
                      , k = new Sc;
                    f = E(k, 1, B(f));
                    h = J(h, 15, R, f);
                    X(g, h);
                    d(null)
                }
                ;
                e.readAsDataURL(c.data)
            }
            );
            b.start(33.33)
        }
    }
    var me = class {
        constructor() {
            var a = window.document;
            this.i = W();
            this.s = null;
            this.o = this.g = 0;
            this.l = new ke(1800);
            this.m = new ke(1800);
            this.h = a.getElementsByTagName("canvas")[0];
            ge().enableAudioCapture && (a = new AudioContext,
            this.s = a.createMediaStreamDestination(),
            ne(a))
        }
    }
    ;
    function qe(a) {
        const b = performance.now();
        a.h > 0 ? ie(a.g, b - a.h) : a.l !== 0 && (ie(a.g, 0),
        clearTimeout(a.l));
        a.h = -1;
        a.l = setTimeout( () => {
            a.h = performance.now()
        }
        , 0);
        a.m > 0 && ie(a.i, b - a.m);
        a.m = b;
        requestAnimationFrame( () => {
            qe(a)
        }
        )
    }
    var re = class {
        constructor() {
            this.h = this.m = -1;
            this.l = 0;
            this.i = new ke(3600);
            this.g = new ke(3600)
        }
        init() {
            requestAnimationFrame( () => {
                qe(this)
            }
            )
        }
    }
    ;
    function se(a) {
        var b = new qd;
        return E(b, 1, A(je(a.g)))
    }
    var te = class {
        constructor() {
            this.g = new ke(12)
        }
        init() {
            setInterval( () => {
                const a = window.performance && window.performance.memory || null;
                a && ie(this.g, a.usedJSHeapSize)
            }
            , 5E3)
        }
    }
    ;
    function ue(a, b) {
        a.C = b
    }
    function Z(a) {
        return a != null && typeof a === "number" && Number.isFinite(a) ? Math.floor(a) : 0
    }
    function cd(a) {
        var b = new Wc;
        var c = Z(a.o);
        b = E(b, 1, x(c));
        c = Z(a.m);
        b = E(b, 2, x(c));
        c = Z(a.l);
        b = E(b, 3, x(c));
        b = Ub(b, 4, a.h);
        b = Ub(b, 5, a.g);
        c = new Vc;
        var d = Z(a.u);
        c = E(c, 1, A(d));
        d = Z(a.s);
        c = E(c, 2, A(d));
        a = Z(a.i);
        a = E(c, 3, A(a));
        return I(b, 6, a)
    }
    var ve = class {
        constructor() {
            this.navigator = window.navigator;
            this.h = new Map;
            this.g = new Map;
            this.i = this.s = this.u = this.l = this.m = this.o = 0;
            this.C = null
        }
        init(a=window.navigator) {
            this.navigator = a;
            typeof performance.getEntriesByType === "function" && "encodedBodySize"in PerformanceResourceTiming.prototype && "decodedBodySize"in PerformanceResourceTiming.prototype && "transferSize"in PerformanceResourceTiming.prototype && ((new PerformanceObserver(b => {
                b.getEntries().forEach(c => {
                    if (c.entryType === "resource" && !c.name.includes("https://www.youtube.com/game_api")) {
                        this.o++;
                        this.l += c.encodedBodySize;
                        c.transferSize === 0 && c.decodedBodySize > 0 && this.m++;
                        const f = Z(c.responseStatus);
                        if (!(f >= 100 && f < 200)) {
                            try {
                                var d = new URL(c.name)
                            } catch (g) {
                                throw Ld;
                            }
                            window.location.origin === d.origin ? this.h.set(f, (this.h.get(f) || 0) + 1) : this.g.set(f, (this.g.get(f) || 0) + 1)
                        }
                        var e;
                        (e = this.C) == null || e.call(this, c)
                    }
                }
                )
            }
            )).observe({
                type: "resource",
                buffered: !0
            }),
            this.navigator && "serviceWorker"in this.navigator && this.navigator.serviceWorker.addEventListener && this.navigator.serviceWorker.addEventListener("message", b => {
                this.u++;
                b.data.cacheHit && (this.s++,
                this.i += b.data.cachedBytes)
            }
            ))
        }
    }
    ;
    function bd() {
        we || (we = new xe);
        return we
    }
    function ye(a) {
        a.i !== 0 && (a.i = 0,
        ze(a),
        a.h = setTimeout( () => {
            Ae(a)
        }
        , 3E4))
    }
    function ze(a) {
        a.u = performance.now();
        var b = a.g;
        he(b.i);
        he(b.g);
        b = a.o;
        b.o = 0;
        b.m = 0;
        b.l = 0;
        b.u = 0;
        b.s = 0;
        b.i = 0;
        b.h.clear();
        b.g.clear();
        he(a.m.g)
    }
    function Ae(a) {
        const b = wd(vd(ud(td(sd(rd(new yd, a.u)), je(a.g.i)), je(a.g.g)), cd(a.o)), se(a.m));
        a.l.g > 0 && xd(b, fd(ed(new gd, je(a.l.l)), je(a.l.m)));
        X(W(), Ed(b));
        ze(a);
        a.h = setTimeout( () => {
            Ae(a)
        }
        , 3E4)
    }
    var xe = class {
        constructor() {
            this.u = this.h = 0;
            this.i = 1;
            this.C = W();
            this.l = le();
            this.g = new re;
            this.s = new ve;
            this.o = new ve;
            this.m = new te
        }
        init() {
            const a = (new URLSearchParams(window.location.hash.substring(1))).get("debug") !== null;
            (a || window.enableSendingResourceLoadedEvents === !0) && ue(this.s, b => {
                var c = this.C
                  , d = Q(1)
                  , e = Yc(3);
                var f = new Xc;
                f = E(f, 1, B(b.name));
                f = E(f, 2, x(b.decodedBodySize));
                f = E(f, 3, x(b.encodedBodySize));
                b = E(f, 4, x(b.transferSize));
                e = J(e, 3, dd, b);
                X(c, Cd(d, e))
            }
            );
            this.g.init();
            this.s.init();
            this.o.init();
            a && this.m.init();
            ye(this)
        }
    }
    , we;
    function Be() {
        Ce || (Ce = new De);
        return Ce
    }
    function Ee(a) {
        a.navigator && "serviceWorker"in a.navigator && a.navigator.serviceWorker.addEventListener && a.navigator.serviceWorker.addEventListener("message", b => {
            b.data.serviceWorkerMessageKind === "clientStatusRequest" && Fe(a)
        }
        )
    }
    function Fe(a) {
        a.navigator && "serviceWorker"in a.navigator && a.navigator.serviceWorker.controller && a.navigator.serviceWorker.controller.postMessage({
            serviceWorkerMessageKind: "clientStatus",
            shouldCacheResources: a.shouldCacheResources
        })
    }
    var De = class {
        constructor() {
            this.navigator = window.navigator;
            this.shouldCacheResources = !0
        }
        init() {
            Ee(this);
            Fe(this)
        }
    }
    , Ce;
    var Ge = class {
        constructor() {
            this.log = () => {}
        }
    }
    ;
    function He(a) {
        switch (a) {
        case 0:
            return 1;
        case 1:
            return 2;
        case 2:
            return 3;
        case 3:
            return 4;
        case 4:
            return 5;
        default:
            return 0
        }
    }
    function Ie(a) {
        switch (a.errorType) {
        case 2:
            return 2;
        case 1:
            return 1;
        case 3:
            return 3;
        default:
            return 0
        }
    }
    function Je(a, b) {
        var c = Q(9)
          , d = new Ad;
        b = L(d, 1, b);
        c = J(c, 8, R, b);
        X(a, c)
    }
    ;var Ke = class {
        constructor() {
            this.h = ae;
            this.i = new Pd("GAME_DATA_EVENT");
            this.g = W();
            this.l = Be();
            Yd(this.g, a => {
                switch (Tb(a.data, 1)) {
                case 7:
                    Jb(a.data, md, 5) && this.i.dispatchEvent(K(a.data, md, 5, H))
                }
            }
            )
        }
        saveData(a) {
            const b = this;
            return l(function*() {
                if (b.h) {
                    try {
                        encodeURIComponent(a)
                    } catch (f) {
                        throw new T(U,3,"Failed to encode save data");
                    }
                    var c = (new Blob([a])).size;
                    if (c > 3145727) {
                        var d = new Nc;
                        c = Nb(d, 3, Oc, x(c));
                        throw new T(Kd,3,void 0,c);
                    }
                    c = b.g;
                    d = Q(3);
                    var e = new Lc;
                    e = E(e, 1, B(a));
                    d = J(d, 4, R, e);
                    c = yield Y(c, d);
                    V(c.data, 3);
                }
            }())
        }
        loadData(input) {
    const a = this;
    return l(function*() {
        if (!a.h)
            return "";

        if (input) {
            // If an input is given, use that instead of loading from backend
            try {
                return input;
            } catch (err) {
                console.error("Failed to load from input:", err);
                return "";
            }
        }

        // Original behavior
        const b = yield Y(a.g, Q(4));
        V(b.data, 2);
        let c, d;
        return ((c = K(b.data, od, 2, H)) == null ? void 0 : (d = K(c, Lc, 3, nd)) == null ? void 0 : Sb(d, 1)) || ""
    }())
}
        firstFrameReady() {
            var a = Array.from(document.getElementsByTagName("script")).filter(b => !b.src.endsWith("/@vite/client"))[0];
            a = !!a && a.src.startsWith("https://www.youtube.com/game_api/") && a.attributes.getNamedItem("defer") === null && a.attributes.getNamedItem("async") === null;
            X(this.g, Cd(Q(1), ad($c(Yc(1), Tc(a)))))
        }
        gameReady() {
            X(this.g, Cd(Q(1), ad(Yc(2))));
            var a = this.l;
            const b = a.shouldCacheResources !== !1;
            a.shouldCacheResources = !1;
            b && Fe(a)
        }
        onGameDataAvailable(a) {
            Je(this.g, 13);
            return Nd(this.i, a)
        }
        shareInviteCode(a) {
            const b = this;
            return l(function*() {
                if (a.length === 0)
                    throw new T(U,12,"Invite code cannot be empty");
                if ((new TextEncoder).encode(a).length > 8)
                    throw new T(U,12,"Invite code provided exceeded 8 bytes");
                var c = b.g;
                var d = Q(13);
                d = Nb(d, 11, R, B(a));
                c = yield Y(c, d);
                V(c.data, 12)
            }())
        }
    }
    ;
    function Le(a, b) {
        const c = {
            level: 1,
            source: 1
        };
        b && (c.v = b,
        c.source = 3,
        c.message = b.message,
        c.N = b.stack);
        a.h.log(c)
    }
    var Me = class {
        constructor(a) {
            var b = window;
            this.h = a;
            this.g = b;
            this.i = !1;
            this.l = c => {
                Le(this, c.reason instanceof S ? c.reason : void 0)
            }
            ;
            this.o = this.g.onerror;
            this.s = this.g.console.warn;
            this.m = this.g.console.error
        }
        install() {
            this.i || (this.i = !0,
            this.g.onerror = (a, b, c, d, e) => {
                let f;
                (f = this.o) == null || f.call(this.g, a, b, c, d, e);
                Le(this, e instanceof S ? e : void 0)
            }
            ,
            this.g.console.warn = (...a) => {
                this.warn(...a)
            }
            ,
            this.g.console.error = (...a) => {
                this.error(...a)
            }
            ,
            this.g.addEventListener("unhandledrejection", this.l))
        }
        error(...a) {
            this.h.log({
                level: 1,
                source: 0
            });
            this.m(...a)
        }
        warn(...a) {
            this.h.log({
                level: 0,
                source: 0
            });
            this.s(...a)
        }
    }
    ;
    function Ne(a, b) {
        X(a.h, Dd(Q(6), Qc(new Rc, b.map( (c, d) => {
            c = b[b.length - 1 - d];
            d = new Pc;
            a: switch (c.level) {
            case 0:
                var e = 1;
                break a;
            case 1:
                e = 2;
                break a;
            default:
                e = 0
            }
            d = L(d, 2, e);
            d = L(d, 1, He(c.source));
            c.v && (e = L(d, 6, Ie(c.v)),
            e = E(e, 4, B(c.message)),
            E(e, 5, B(c.N)),
            c.v instanceof T && c.v.g !== 0 && (L(d, 7, c.v.g),
            c.v.data && I(d, 8, c.v.data)));
            return d
        }
        ))))
    }
    var Oe = class {
        constructor() {
            this.g = void 0;
            this.h = W();
            this.g = new Ge;
            this.g.log = this.log.bind(this);
            this.i = new Me(this.g);
            this.i.install()
        }
        logError() {
            this.log({
                level: 1,
                source: 2
            })
        }
        logWarning() {
            this.log({
                level: 0,
                source: 2
            })
        }
        log(a) {
            Ne(this, [a])
        }
    }
    ;
    function Pe() {
        l(function*() {
            try {
                yield kc(navigator.serviceWorker, nc`/null_sw.js`)
            } catch (a) {
                console.error("Failed to register null service worker.", a)
            }
        }())
    }
    function Qe() {
        l(function*() {
            try {
                yield kc(navigator.serviceWorker, nc`/sw.js`)
            } catch (a) {
                console.error("Failed to register service worker.", a)
            }
        }())
    }
    function Re(a) {
        l(function*() {
            try {
                yield Se()
            } catch (b) {
                console.error("Failed to unregister service worker.", b)
            }
            try {
                yield Te(a)
            } catch (b) {
                console.error("Failed to delete cache entries.", b)
            }
        }())
    }
    function Se() {
        return l(function*() {
            if (navigator && "serviceWorker"in navigator) {
                var a = yield navigator.serviceWorker.getRegistration("/");
                a && (yield a.unregister())
            }
        }())
    }
    function Te(a) {
        return l(function*() {
            if (a && "keys"in a) {
                var b = yield a.keys();
                b && (yield Promise.all(b.map(c => a.delete(c))))
            }
        }())
    }
    var Ue = class {
        constructor() {
            var a = window.caches;
            ae && (ge().enableServiceWorker ? ge().enableServiceWorkerKillswitch ? Pe() : Qe() : Re(a))
        }
    }
    ;
    var Ve = class {
        constructor() {
            this.l = ae;
            this.m = new Pd("AUDIO_EVENT",{
                H: !1
            });
            this.o = !1;
            this.g = W();
            this.i = bd();
            this.C = Be();
            this.h = new Pd("LIFECYCLE_EVENT");
            this.u = 1E4;
            this.s = 0;
            Yd(this.g, a => {
                switch (Tb(a.data, 1)) {
                case 2:
                    var b;
                    (b = K(a.data, kd, 3, H)) == null ? b = void 0 : (b = D(b.j, 1),
                    b = b == null || typeof b === "boolean" ? b : typeof b === "number" ? !!b : void 0,
                    b = b != null ? b : !1);
                    this.l && b !== void 0 && (this.m.dispatchEvent(b),
                    this.o = b);
                    break;
                case 3:
                    this.h.dispatchEvent(1);
                    b = this.i;
                    b.i = 1;
                    clearTimeout(b.h);
                    b.h = 0;
                    break;
                case 4:
                    this.h.dispatchEvent(0);
                    ye(this.i);
                    break;
                case 5:
                    Jb(a.data, ld, 4) && (a = K(a.data, ld, 4, H),
                    this.u = (b = gb(D(a.j, 1))) != null ? b : 0);
                    b = this.g;
                    a = Q(8);
                    var c = new pd;
                    c = E(c, 1, B("1.20250428.0000"));
                    a = J(a, 7, R, c);
                    X(b, a);
                    break;
                case 9:
                    pe()
                }
            }
            );
            yc(window, "pointerdown", a => {
                !a.h.isTrusted || Date.now() - this.s < this.u || (this.s = Date.now(),
                X(this.g, Q(10)))
            }
            , !0);
            this.i.init();
            this.C.init()
        }
        onAudioEnabledChange(a) {
            Je(this.g, 5);
            return Nd(this.m, a)
        }
        isAudioEnabled() {
            if (!this.l)
                return !0;
            Je(this.g, 10);
            return this.o
        }
        onPause(a) {
            a.S || Je(this.g, 6);
            return Nd(this.h, b => {
                b === 1 && a()
            }
            )
        }
        onResume(a) {
            Je(this.g, 7);
            return Nd(this.h, b => {
                b === 0 && a()
            }
            )
        }
        getLanguage() {
            const a = this;
            return l(function*() {
                const b = yield Y(a.g, Q(5));
                V(b.data, 8);
                let c;
                return ((c = K(b.data, od, 2, H)) == null ? void 0 : c.getLanguage()) || "en"
            }())
        }
    }
    ;
    const We = new class {
        constructor(a=ae, b=new be, c=new $d, d=new ce, e=new Ke, f=new Oe, g=new Ve, h=new Ue) {
            this.g = a;
            this.h = b;
            this.ads = c;
            this.engagement = d;
            this.game = e;
            this.health = f;
            this.system = g;
            document.addEventListener("DOMContentLoaded", () => {
                const k = document.body;
                P(k, "touch-action");
                P(k, "overscroll-behavior");
                P(k, "user-select");
                P(k, "-webkit-user-select");
                P(k, "-ms-user-select");
                P(k, "-moz-user-select");
                P(k, "-o-user-select")
            }
            );
            this.g && (Object.defineProperty(window, "localStorage", {
                value: null,
                writable: !1
            }),
            Object.defineProperty(window, "sessionStorage", {
                value: null,
                writable: !1
            }),
            Object.defineProperty(window, "indexedDB", {
                value: null,
                writable: !1
            }),
            Object.defineProperty(window, "caches", {
                value: null,
                writable: !1
            }),
            Object.defineProperty(document, "cookie", {
                value: null,
                writable: !1
            }))
        }
    }
    ;
    n("ytgame", We.h);
    n("ytgame.ads", We.ads);
    n("ytgame.engagement", We.engagement);
    n("ytgame.game", We.game);
    n("ytgame.health", We.health);
    n("ytgame.system", We.system);
}
).call(this);
