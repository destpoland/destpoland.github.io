var Ih = "function" == typeof Object.defineProperties ? Object.defineProperty : function(ea, ia, sa) {
    if (ea == Array.prototype || ea == Object.prototype)
        return ea;
    ea[ia] = sa.value;
    return ea
}
;
function mi(ea) {
    ea = ["object" == typeof globalThis && globalThis, ea, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var ia = 0; ia < ea.length; ++ia) {
        var sa = ea[ia];
        if (sa && sa.Math == Math)
            return sa
    }
    throw Error("Cannot find global object");
}
var ni = mi(this);
function oi(ea, ia) {
    if (ia)
        a: {
            var sa = ni;
            ea = ea.split(".");
            for (var Da = 0; Da < ea.length - 1; Da++) {
                var ya = ea[Da];
                if (!(ya in sa))
                    break a;
                sa = sa[ya]
            }
            ea = ea[ea.length - 1];
            Da = sa[ea];
            ia = ia(Da);
            ia != Da && null != ia && Ih(sa, ea, {
                configurable: !0,
                writable: !0,
                value: ia
            })
        }
}
oi("Array.prototype.includes", function(ea) {
    return ea ? ea : function(ia, sa) {
        var Da = this;
        Da instanceof String && (Da = String(Da));
        var ya = Da.length;
        sa = sa || 0;
        for (0 > sa && (sa = Math.max(sa + ya, 0)); sa < ya; sa++) {
            var Ab = Da[sa];
            if (Ab === ia || Object.is(Ab, ia))
                return !0
        }
        return !1
    }
});
function pi(ea, ia) {
    ea instanceof String && (ea += "");
    var sa = 0
      , Da = !1
      , ya = {
        next: function() {
            if (!Da && sa < ea.length) {
                var Ab = sa++;
                return {
                    value: ia(Ab, ea[Ab]),
                    done: !1
                }
            }
            Da = !0;
            return {
                done: !0,
                value: void 0
            }
        }
    };
    ya[Symbol.iterator] = function() {
        return ya
    }
    ;
    return ya
}
oi("Array.prototype.values", function(ea) {
    return ea ? ea : function() {
        return pi(this, function(ia, sa) {
            return sa
        })
    }
});
(function(ea, ia) {
    function sa() {
        return Sa.Kl(this, "")
    }
    function Da(a, b) {
        return 0 < a ? a < b : -a < b
    }
    function ya(a, b, c, d, e) {
        return d + (a - b) / (c - b) * (e - d)
    }
    function Ab(a) {
        return a instanceof Array ? new Ac(a) : a.iterator()
    }
    function O(a, b) {
        if (null == b)
            return null;
        null == b.Ce && (b.Ce = ia.mr++);
        var c;
        null == a.gt ? a.gt = {} : c = a.gt[b.Ce];
        null == c && (c = b.bind(a),
        a.gt[b.Ce] = c);
        return c
    }
    ea.Ctrr = ea.Ctrr || {};
    var gg = gg || {}, lb;
    class ja {
        constructor(a, b) {
            this.r = new RegExp(a,b.split("u").join(""))
        }
        match(a) {
            this.r.global && (this.r.lastIndex = 0);
            this.r.Li = this.r.exec(a);
            this.r.DA = a;
            return null != this.r.Li
        }
        Dc(a) {
            if (null != this.r.Li && 0 <= a && a < this.r.Li.length)
                return this.r.Li[a];
            throw 0;
        }
        WK() {
            if (null == this.r.Li)
                throw 1;
            let a = this.r.Li.index + this.r.Li[0].length;
            return ta.substr(this.r.DA, a, this.r.DA.length - a)
        }
    }
    ja.g = !0;
    Object.assign(ja.prototype, {
        j: ja
    });
    class l {
        static bA(a) {
            return Bc.QK(null == a ? "null" : "" + a)
        }
        static Yh(a, b) {
            return a + l.bA(b)
        }
        static La(a, b, c, d) {
            return bb.create((null == a ? "" : a + ",") + b + "-" + c + "@" + d)
        }
    }
    l.g = !0;
    class za {
        constructor() {
            this.eO = null;
            this.Wx = [];
            this.kt = [];
            this.ju = [];
            this.images = new cb;
            this.Tz = null;
            this.bJ = new hg;
            this.save = null;
            this.Wm = new Cc;
            this.da = null;
            this.Ea = new he;
            this.window = this.P = null;
            this.kO = new Bb;
            this.Tf = new ig;
            za.instance = this
        }
        Qa(a, b) {
            this.config = a;
            this.Tz = b;
            ia.console.info("%c" + a.title.toUpperCase() + " %c" + od.fD, "font-weight:bold;", null);
            a.Ey && (window.addEventListener("error", O(this, this.$e)),
            window.addEventListener("unhandledrejection", O(this, this.$e)));
            this.Fi = this.hO();
            k.rN(a.Uy);
            k.Au(a.language);
            this.Tf.Mf = O(this, this.SK);
            this.window = new ie(a.os);
            a.Gm && this.window.WJ(a.fu) && (this.P = new wb);
            null == this.P && (this.window.SJ(a.fu),
            this.P = new je,
            a.Gm = !1);
            if (null != this.P) {
                this.P.Bn(this.window);
                this.window.Hf(2, O(this, this.Sz));
                this.window.Hf(1, O(this, this.Yz));
                this.window.update();
                this.it();
                this.Wm.version = od.VERSION.toString();
                this.Wm.ln = a.ln;
                this.da = new fc(this);
                this.PN();
                this.save = this.Xs();
                var c = this;
                this.aO().then(function(d) {
                    d && k.fN()
                }).then(function() {
                    c.preload()
                })
            }
        }
        preload() {
            function a(f, g, h) {
                let m = b.fI();
                m.name = k.zi(f);
                b.images.G.hasOwnProperty(f) && b.ju.push(b.images.G[f]);
                b.images.G[f] = m;
                m.load(g, function() {
                    if (k.mJ().includes(f)) {
                        let n = new FileReader;
                        n.onload = function(q) {
                            k.iN(f, new pd(q.target.result));
                            h(m.data)
                        }
                        ;
                        n.onerror = function() {
                            throw 2;
                        }
                        ;
                        n.readAsArrayBuffer(g)
                    } else
                        h(m.data)
                })
            }
            let b = this;
            for (var c = 0; c < k.MAX; ) {
                var d = c++;
                k.gK(d) && k.Gw(d, a)
            }
            0 < k.xy().length ? this.load(k.xy(), null, O(this, this.Vz)) : this.Vz();
            if (this.config.yB) {
                let f = window.document.querySelectorAll("meta[data-hash]").item(0).dataset.hash;
                c = window.document.querySelectorAll("script[src]");
                d = null;
                let g = 0
                  , h = c.length;
                for (; g < h && (d = c.item(g++),
                !(new ja(this.config.title,"i")).match(d.src)); )
                    ;
                if (null != d) {
                    var e = new XMLHttpRequest;
                    e.open("GET", d.src);
                    e.responseType = "arraybuffer";
                    e.onreadystatechange = function() {
                        if (4 == e.readyState && 200 == e.status)
                            try {
                                window.crypto.subtle.digest("SHA-256", e.response).then(function(m) {
                                    m = btoa(String.fromCharCode.apply(null, new Uint8Array(m)));
                                    b.eO = m != f
                                }).catch(function() {})
                            } catch (m) {}
                    }
                    ;
                    e.send()
                }
            }
        }
        Vz() {
            let a = this;
            Dc.delay(function() {
                a.Tf.start();
                a.Tz(a)
            }, 1)
        }
        Ap(a) {
            a = Object.create(a.prototype);
            a.Y = this;
            a.caller = a;
            return this.load(a.dc(), null, void 0)
        }
        load(a, b, c) {
            let d = []
              , e = []
              , f = 0
              , g = 0;
            for (; g < a.length; ) {
                var h = a[g];
                ++g;
                if (!k.mt(h) || null != k.Xo() && null != k.Zx())
                    f += 1,
                    k.lL(h, function(m) {
                        --f;
                        null != b && b(m);
                        null != c && 0 == f && c()
                    }),
                    h = k.zi(h),
                    this.Wm.load(h) && e.push(h)
            }
            for (; 0 < d.length; )
                this.Wm.bM(d.pop());
            return new jg(this.Wm,e)
        }
        ny(a) {
            return this.images.G[a]
        }
        fI() {
            return new ke(this.config.Ty,this.config.Gm)
        }
        tI(a) {
            this.ny(a).gv();
            this.images.remove(a);
            k.eq(a)
        }
        uI() {
            let a = 0
              , b = this.ju;
            for (; a < b.length; )
                b[a++].gv();
            this.ju = []
        }
        createTexture(a, b, c) {
            function d(n) {
                if (84 == n.b[0] && 80 == n.b[1] && 83 == n.b[2])
                    return n = (new qd).tA(n),
                    new Ub(kg.dk(n),n.Ek.scale);
                if (66 == n.b[0] && 77 == n.b[1] && 70 == n.b[2])
                    return n = (new le).Zk(n),
                    new Ub(me.dk(n),1,me.ey(n));
                throw 3;
            }
            null == c && (c = !1);
            null == b && (b = 0);
            for (var e = k.zi(a), f = 0, g = this.P.DJ(); f < g.length; ) {
                var h = g[f];
                ++f;
                if (h.name == e)
                    return h
            }
            f = this.ny(a);
            g = k.rJ(a);
            let m = null;
            null == g && (h = k.ek(a, "dat"),
            -1 != h ? (g = new pd(k.data.G[h]),
            null == g.data && (g = null)) : (h = k.ek(a, "dat", !0),
            -1 != h && (g = new pd(k.data.G[h]))));
            if (null == g) {
                h = k.ek(a, "tps");
                if (-1 != h)
                    try {
                        m = d(k.wm(h))
                    } catch (n) {}
                null == m && (h = k.ek(a, "json"),
                -1 != h && (h = k.ec(h),
                h = (new qd).lM(h),
                m = new Ub(kg.dk(h),h.Ek.scale)));
                null == m && (h = k.ek(a, "dat"),
                -1 != h && (h = k.wm(h),
                h = (new qd).tA(h),
                m = new Ub(kg.dk(h),h.Ek.scale)));
                null == m && (h = k.ek(a, "fnt"),
                -1 != h && (h = k.wm(h),
                h = (new le).Zk(h),
                m = new Ub(me.dk(h),1,me.ey(h))))
            }
            h = null;
            if (null == g)
                h = this.P.createTexture(f, b, m, e);
            else if (g = g.qo,
            1 == g.length || Fa.Yj(g, function(n) {
                return null != n.name
            }))
                for (h = this.P.createTexture(f, b, d(g[0].data), e),
                b = 1,
                e = g.length; b < e; )
                    f = b++,
                    this.P.Cx(h, d(g[f].data), g[f].name);
            else
                for (h = this.P.createTexture(f, b, null, e),
                b = 0,
                e = g.length; b < e; )
                    this.P.Cx(h, d(g[b++].data), null);
            c && (h.we = 1 / k.nJ(a));
            return h
        }
        SK(a) {
            this.window.update();
            if (this.config.Tx) {
                let b = this.kO
                  , c = O(this, this.update);
                b.elapsedTime += a;
                b.Tg += a * b.Yu;
                .25 < b.Tg && (b.Tg = .25);
                for (; b.Tg >= Bb.vj; )
                    c(Bb.vj),
                    b.Tg -= Bb.vj;
                this.Ec(b.Tg / Bb.vj)
            } else
                this.update(a),
                this.Ec(1);
            for (this.bJ.update(a); 0 < this.Wx.length; )
                this.Wx.pop()()
        }
        update(a) {
            let b = 0
              , c = this.kt;
            for (; b < c.length; ) {
                let d = c[b];
                ++b;
                null != d && d.state.update(a)
            }
            this.P.yh();
            this.P.$k();
            this.qK();
            this.da.update(a);
            this.P.fh()
        }
        Ec(a) {
            this.P.yh() && (this.P.$k(),
            this.P.clear(),
            this.da.Ec(a),
            this.P.$k(),
            this.P.fh())
        }
        qK() {
            if (this.config.mz) {
                var a = this.window;
                a = a.zd.x / a.zd.y;
                var b = this.window.zd
                  , c = b.x;
                b = b.y;
                2.5 < a ? (a = b / c * 2.5,
                c = (1 - a) / 2,
                this.P.gj(c, 0, c + a, 1)) : .4 > a && (a = c / b / .4,
                c = (1 - a) / 2,
                this.P.gj(0, c, 1, c + a))
            }
        }
        it() {
            if (this.config.audio && J.bz())
                if (null != this.Ea && this.Ea instanceof Ec) {
                    var a = this.Ea.gg
                      , b = this.Ea.names;
                    this.Ea.H();
                    J.Qa();
                    this.Ea = new Ec;
                    this.Ea.gg = a;
                    this.Ea.names = b
                } else {
                    a = this.config.Tw;
                    var c = null != a ? a : J.rI();
                    Fa.Yj(k.Xo(), function(f) {
                        return f == c
                    }) && k.YM(c);
                    b = k.xJ();
                    a = [];
                    for (var d = 0; d < b.length; ) {
                        let f = b[d];
                        ++d;
                        (new ja("audio","")).match(f) && a.push(f)
                    }
                    if (0 != a.length) {
                        J.Qa();
                        J.bz() && (this.Ea = new Ec);
                        var e = this;
                        b = function(f, g, h) {
                            ne.Ky(g) ? (f = ne.eJ(g),
                            g = ne.rM(g),
                            e.Ea.bq(f, g, h)) : e.Ea.aq(f, g, k.Bf(f), h)
                        }
                        ;
                        for (d = 0; d < a.length; )
                            k.Gw(k.zf(a[d++]), b)
                    }
                }
        }
        Xs() {
            return new oe
        }
        oJ() {
            return this.kt[3]
        }
        BH(a) {
            return this.kt[3] = a
        }
        Em() {
            let a = this.oJ();
            return null != a ? a : this.BH(new pe(this.window.canvas))
        }
        Re() {
            return this.Em().state
        }
        hI(a) {
            return new qe(a)
        }
        PN() {
            let a = lg.tr;
            new mg("#" + a[0] + a[0] + a[0])
        }
        Yz() {
            this.Ea.Lh(1, 0)
        }
        Sz() {
            this.Ea.Lh(0, 0)
        }
        hO() {
            try {
                return navigator.userAgentData.mobile
            } catch (a) {
                return (new ja("Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini","i")).match(ia.navigator.userAgent) || "undefined" !== typeof window.orientation || "onTouchstart"in window || 0 < navigator.LO ? !0 : window.matchMedia("(any-pointer:coarse)").matches
            }
        }
        aO() {
            return this.config.Uw ? new Promise(function(a) {
                let b = new Image;
                b.onerror = function() {
                    b.onload = null;
                    b.onerror = null;
                    a(!1)
                }
                ;
                b.onload = function() {
                    b.onload = null;
                    b.onerror = null;
                    a(!0)
                }
                ;
                b.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="
            }
            ) : Promise.resolve(!1)
        }
        $e(a) {
            "unhandledrejection" != a.type && null != (null != a ? a.error : null) && null != a.error.stack && Ga.ge(a.error.stack);
            null != this.Tf && this.Tf.stop();
            ia.console.log("" + this.config.title + " CRASHED \ud83d\udc80");
            window.removeEventListener("error", O(this, this.$e));
            window.removeEventListener("unhandledrejection", O(this, this.$e))
        }
    }
    za.g = !0;
    Object.assign(za.prototype, {
        j: za
    });
    class rd extends za {
        constructor(a) {
            super();
            this.Qa(new ng("Ctrr",!0,null != a ? a : "en",null,null,null,null,{
                alpha: !1,
                depth: !1,
                antialias: !0,
                stencil: !0
            },!1,null,!0,null,null,null,null,!1,null,null,null,null,!1,null), O(this, this.Mf))
        }
        Xs() {
            return new D(this.hI(this.config.title))
        }
        Mf() {
            window.document.body.addEventListener("touchcancel", function(b) {
                b.preventDefault()
            }, {
                passive: !1
            });
            window.document.body.addEventListener("touchend", function(b) {
                b.preventDefault()
            }, {
                passive: !1
            });
            this.P.aN(new E(0,0,0,1));
            Bb.vj = .016;
            this.P.sI();
            this.window.mN(this.Fi && 2 < this.window.ik() ? 2 : 1);
            this.Em().SA(5);
            this.config.Gm ? (this.P.Lc(new Fc),
            this.P.Lc(new re),
            this.P.Lc(new se),
            this.P.Lc(new te),
            this.P.Lc(new ue),
            this.P.Lc(new ve),
            this.P.Lc(new we),
            this.P.Lc(new xe)) : (this.P.Lc(new ye),
            this.P.Lc(new ze),
            this.P.Lc(new Ae),
            this.P.Lc(new Be),
            this.P.Lc(new Ce),
            this.P.Lc(new De),
            this.P.Lc(new Ee),
            this.P.Lc(new Fe),
            this.P.Lc(new Ge));
            let a = this;
            this.save.load(function() {
                null == D.language && (D.language = a.config.language);
                k.Au(D.language);
                a.nB()
            })
        }
        nB() {
            this.da.ad.sceneToLoad = Cb;
            J.Hf("EContextBroken", O(this, this.it));
            this.Rj = -1;
            let a = this;
            J.Hf("EContextResumed", function() {
                a.Ea.Bc(a.Rj) || a.Ea.play(a.Rj, !0, !0)
            });
            this.da.io(sd)
        }
    }
    rd.g = !0;
    rd.u = za;
    Object.assign(rd.prototype, {
        j: rd
    });
    class og {
        constructor() {
            this.Tu = -1;
            this.i = new E(0,0,0,1);
            this.Jm = this.ei = -1;
            this.pressed = this.released = !1
        }
        yh() {
            this.Jm = -1
        }
        fh() {}
        RH(a, b) {
            b = b.Gb(this.i);
            0 > this.ei && (this.pressed && (this.Tu = b ? a : -1),
            b && (this.Jm = a,
            this.pressed && (this.ei = a)));
            if (this.ei == a && (b && (this.Jm = a),
            this.released)) {
                b = this.Tu != a;
                this.Tu = -1;
                if (b)
                    return this.ei = -1,
                    this.pressed = this.released = !1;
                if (a == this.Jm)
                    return this.ei = -1,
                    this.pressed = this.released = !1,
                    !0;
                this.ei = -1
            }
            return !1
        }
        dz(a) {
            return a == this.Jm
        }
        isActive(a) {
            return a == this.ei
        }
    }
    og.g = !0;
    Object.assign(og.prototype, {
        j: og
    });
    class ta {
        static qs(a, b) {
            a = a.charCodeAt(b);
            if (a == a)
                return a
        }
        static substr(a, b, c) {
            if (null == c)
                c = a.length;
            else if (0 > c)
                if (0 == b)
                    c = a.length + c;
                else
                    return "";
            return a.substr(b, c)
        }
        static remove(a, b) {
            b = a.indexOf(b);
            if (-1 == b)
                return !1;
            a.splice(b, 1);
            return !0
        }
        static now() {
            return Date.now()
        }
    }
    ta.g = !0;
    class qh {
        constructor(a, b) {
            this.min = a;
            this.max = b
        }
        bb() {
            return this.min < this.max
        }
        next() {
            return this.min++
        }
    }
    qh.g = !0;
    Object.assign(qh.prototype, {
        j: qh
    });
    class Fa {
        static Yj(a, b) {
            for (a = Ab(a); a.bb(); )
                if (b(a.next()))
                    return !0;
            return !1
        }
        static uh(a, b) {
            for (a = Ab(a); a.bb(); )
                b(a.next())
        }
        static count(a, b) {
            let c = 0;
            if (null == b)
                for (b = Ab(a); b.bb(); )
                    b.next(),
                    ++c;
            else
                for (a = Ab(a); a.bb(); )
                    b(a.next()) && ++c;
            return c
        }
        static find(a, b) {
            for (a = Ab(a); a.bb(); ) {
                let c = a.next();
                if (b(c))
                    return c
            }
            return null
        }
    }
    Fa.g = !0;
    class Jh {
        static RK() {
            new qb
        }
    }
    ea.Ctrr.main = Jh.RK;
    Jh.g = !0;
    Math.g = !0;
    class F {
        static reset() {
            F.Eb = 1;
            F.box = 1;
            F.level = 1
        }
        static Bq(a) {
            F.Eb = a
        }
        static cj(a) {
            F.box = a
        }
        static Du(a) {
            F.level = a
        }
        static gN(a) {
            let b = F.box - 1
              , c = F.level - 1;
            D.vg[b][c] = a;
            25 > c && (D.ug[b][c + 1] = !0);
            D.flush()
        }
        static hK(a) {
            return D.ug[F.box - 1][a - 1]
        }
        static sp(a) {
            return D.locked[a - 1]
        }
        static qx(a) {
            return 0 >= F.Vs(a)
        }
        static uO(a) {
            D.locked[a - 1] = !1;
            D.ug[a - 1][0] = !0;
            D.flush()
        }
        static Vs(a) {
            --a;
            return Kh[a] - F.Ys()
        }
        static fs() {
            return 25 == F.level
        }
        static AN() {
            F.Du(F.level + 1)
        }
        static hk() {
            let a = 0
              , b = F.Eb
              , c = 0;
            for (; 3 > c; )
                F.Eb = c++ + 1,
                a += F.Ys();
            F.Eb = b;
            return a
        }
        static Ys() {
            var a = 0
              , b = 0;
            let c = 0;
            switch (F.Eb) {
            case 1:
                a = 0;
                b = 5;
                break;
            case 2:
                a = 5;
                b = 10;
                break;
            case 3:
                a = 10,
                b = 17
            }
            for (; a < b; ) {
                let d = a++
                  , e = 0;
                for (; 25 > e; )
                    c += D.vg[d][e++]
            }
            return c
        }
        static Ow() {
            let a = 0;
            for (; 17 > a; ) {
                let b = a++
                  , c = 0;
                for (; 25 > c; )
                    if (!D.ug[b][c++])
                        return !1
            }
            return !0
        }
        static ay(a) {
            null == a && (a = F.box);
            let b = 0
              , c = 0;
            for (; 25 > c; )
                b += D.vg[a - 1][c++];
            return b
        }
        static py(a) {
            null == a && (a = F.level);
            return D.vg[F.box - 1][a - 1]
        }
    }
    F.g = !0;
    class gc {
        static Zj(a, b) {
            try {
                return a[b]
            } catch (c) {
                return null
            }
        }
        static SI(a) {
            let b = [];
            if (null != a) {
                let d = Object.prototype.hasOwnProperty;
                for (var c in a)
                    "__id__" != c && "hx__closures__" != c && d.call(a, c) && b.push(c)
            }
            return b
        }
    }
    gc.g = !0;
    class td {
    }
    td.g = !0;
    class Gc {
        constructor(a) {
            this.storage = a;
            this.RM = this.fz = !1;
            this.version = this.xm();
            this.reset()
        }
        load(a) {
            let b = this;
            this.storage.load(function(c) {
                let d = !1;
                try {
                    if (null != c) {
                        b.parse(c);
                        if (b.version > b.xm())
                            throw 4;
                        for (c = !1; b.version < b.xm(); )
                            b.Qp(b.version + 1),
                            b.version++,
                            c = !0;
                        if (c) {
                            b.save(a);
                            return
                        }
                    } else
                        d = !0
                } catch (e) {
                    d = !0
                }
                d ? (b.reset(),
                b.save(a)) : a()
            })
        }
        save(a) {
            this.fz = !0;
            let b = this;
            this.storage.save(this.stringify(), function(c) {
                b.fz = !1;
                b.RM = 0 == c;
                a()
            })
        }
    }
    Gc.g = !0;
    Object.assign(Gc.prototype, {
        j: Gc
    });
    class D extends Gc {
        constructor(a) {
            super(a);
            D.instance = this;
            this.reset()
        }
        reset() {
            this.version = this.xm();
            D.Vc = !0;
            D.ye = !0;
            D.language = null;
            D.gf = 0;
            D.hint = 1;
            D.lh = !1;
            D.vg = [];
            D.ug = [];
            D.locked = [];
            let a = 1;
            for (; 17 >= a; )
                this.Vy(a, 1 != a && 6 != a && 11 != a),
                ++a
        }
        parse(a) {
            a = JSON.parse(a);
            this.version = a.v;
            D.Vc = a.music;
            D.ye = a.sound;
            D.language = a.language;
            D.vg = a.levelStars;
            D.ug = a.levelCleared;
            D.locked = a.locked;
            2 <= this.version && (D.hint = a.hint,
            D.gf = a.skin,
            D.lh = a.gameWon)
        }
        stringify() {
            let a = {};
            a.v = this.version;
            a.music = D.Vc;
            a.sound = D.ye;
            a.language = D.language;
            a.levelStars = D.vg;
            a.levelCleared = D.ug;
            a.locked = D.locked;
            a.hint = D.hint;
            a.skin = D.gf;
            a.gameWon = D.lh;
            return JSON.stringify(a)
        }
        Qp(a) {
            switch (a) {
            case 2:
                for (D.hint = 1,
                D.gf = 0,
                D.lh = !1,
                a = 3; 17 >= a; )
                    this.Vy(a, 6 != a && 11 != a),
                    ++a
            }
        }
        xm() {
            return 2
        }
        Vy(a, b) {
            null == b && (b = !0);
            --a;
            D.locked[a] = b;
            D.vg[a] = [];
            D.ug[a] = [];
            let c = 0;
            for (; 25 > c; ) {
                let d = c++;
                D.vg[a][d] = 0;
                D.ug[a][d] = !1
            }
            b || (D.ug[a][0] = !0)
        }
        static flush() {
            D.instance.save(function() {})
        }
    }
    D.g = !0;
    D.u = Gc;
    Object.assign(D.prototype, {
        j: D
    });
    class z {
        static play(a, b) {
            null == b && (b = !1);
            D.ye && za.instance.Ea.play(a, b)
        }
        static stop(a) {
            za.instance.Ea.stop(a)
        }
        static Nh(a, b) {
            za.instance.Ea.xN(a, b)
        }
        static qm(a) {
            D.ye && za.instance.Ea.qm(a, 1, !0)
        }
    }
    z.g = !0;
    class Ga {
        static ge(a) {
            return Sa.Kl(a, "")
        }
        static parseInt(a) {
            a = parseInt(a);
            return isNaN(a) ? null : a
        }
    }
    Ga.g = !0;
    class Bc {
        static wp(a, b) {
            a = ta.qs(a, b);
            return 8 < a && 14 > a ? !0 : 32 == a
        }
        static QK(a) {
            var b;
            let c = "";
            for (b = 4 - a.length; c.length < b; )
                c += "0";
            return c + (null == a ? "null" : "" + a)
        }
        static NJ(a) {
            let b = "";
            do
                b = "0123456789ABCDEF".charAt(a & 15) + b,
                a >>>= 4;
            while (0 < a);
            for (; 2 > b.length; )
                b = "0" + b;
            return b
        }
    }
    Bc.g = !0;
    class Vb {
        static get(a, b) {
            null == Vb.Xc && (Vb.Xc = JSON.parse(k.ec(k.ag)));
            var c = gc.Zj(Vb.Xc, a);
            if (null == c || null == D.language)
                return a;
            if (Object.prototype.hasOwnProperty.call(c, D.language)) {
                a = gc.Zj(c, D.language);
                if (null != b) {
                    c = 0;
                    let d = b.length;
                    for (; c < d; )
                        a = a.replace(RegExp("::\\w+::", ""), b[c++])
                }
                return a
            }
            return gc.Zj(c, "en")
        }
    }
    class r {
        static Us(a, b) {
            let c = pg.slice();
            c.sort(Lh.WH);
            c.splice(c.indexOf(a), 0, a);
            return c.indexOf(b)
        }
    }
    r.g = !0;
    class rh {
        static Bx(a) {
            return new (Function.prototype.bind.apply(a, [null].concat([])))
        }
    }
    rh.g = !0;
    class ud {
    }
    ud.g = !0;
    ud.ke = !0;
    Object.assign(ud.prototype, {
        j: ud
    });
    class He {
        constructor() {}
        load(a) {
            window.ytgame.game.loadData()
                .then(b => {
                    a(b);
                })
                .catch(err => {
                    console.warn("Load failed:", err);
                    a(null);
                });
            return null;
        }
        save(a, b) {
            window.ytgame.game.saveData(a).then( () => {
                b(!0)
            }
            , () => {
                b(!1)
            }
            )
        }
    }
    He.g = !0;
    He.ob = [ud];
    Object.assign(He.prototype, {
        j: He
    });
    class qb extends rd {
        constructor(a) {
            super(a)
        }
        Xs() {
            return new D(new He)
        }
        Mf(a) {
            this.LN();
            super.Mf(a)
        }
        nB() {
            this.WI();
            this.da.ad.sceneToLoad = Ib;
            this.da.io(sd);
            J.Hf("EContextBroken", O(this, this.it));
            this.Rj = -1;
            let a = this;
            J.Hf("EContextResumed", function() {
                a.Ea.Bc(a.Rj) || a.Ea.play(a.Rj, !0, !0)
            })
        }
        LN() {
            this.hv = [];
            let a = this;
            this.hv.push(this.jL(function(b) {
                a.Ea.Lh(b ? 1 : 0);
                a.da.gs(b ? 2 : 1)
            }));
            this.hv.push(this.Ti(function() {
                a.Em().enabled = !1;
                a.da.gs(3);
                a.Tf.stop()
            }));
            this.hv.push(this.Ta(function() {
                a.Em().enabled = !0;
                a.Re().reset();
                a.da.gs(4);
                a.Tf.start()
            }))
        }
        Yz() {}
        Sz() {}
        WI() {
            window.ytgame.game.firstFrameReady()
        }
        jL(a) {
            return window.ytgame.system.onAudioEnabledChange(function(b) {
                qb.muted = !b;
                a(b)
            })
        }
        Ti(a) {
            return window.ytgame.system.onPause(function() {
                qb.paused = !0;
                a()
            })
        }
        Ta(a) {
            return window.ytgame.system.onResume(function() {
                qb.paused = !1;
                a()
            })
        }
        static cK() {
            return window.ytgame.system.isAudioEnabled()
        }
        static xM(a, b) {
            window.ytgame.ads.requestAd().then(function(c) {
                let d = window.ytgame.ads.AdResult;
                c == d.UNKNOWN ? b() : c == d.SHOWED ? a() : c == d.REJECTED && b()
            }, function() {
                b()
            })
        }
    }
    qb.g = !0;
    qb.u = rd;
    Object.assign(qb.prototype, {
        j: qb
    });
    class qg {
    }
    qg.g = !0;
    qg.ke = !0;
    class Hc {
    }
    Hc.g = !0;
    Hc.ke = !0;
    Hc.ob = [qg];
    class rg {
    }
    rg.g = !0;
    rg.ke = !0;
    rg.ob = [Hc];
    class rb {
        constructor(a, b, c) {
            null == a && (a = 2);
            this.Uc = null;
            this.Z = 0;
            this.bl = !1;
            this.Ai = -2;
            this.Ck = 2 > a ? 2 : a;
            null != b && 0 < b.length ? (this.Z = b.length,
            this.K = b.slice(0, b.length),
            this.Ka = this.Z) : (this.Ka = this.Ck,
            this.K = Array(this.Ka));
            c && (this.Ai = 0)
        }
        au(a) {
            this.Z == this.Ka && this.grow();
            this.K[this.Z++] = a
        }
        xa() {
            return this.K[0]
        }
        dO(a) {
            let b = this.K;
            b[a] = b[--this.Z]
        }
        trim(a) {
            this.Z = a;
            return this
        }
        indexOf(a) {
            if (0 == this.Z)
                return -1;
            let b = 0
              , c = -1
              , d = this.Z - 1
              , e = this.K;
            do
                if (e[b] == a) {
                    c = b;
                    break
                }
            while (b++ < d);
            return c
        }
        af(a) {
            a > this.Ka && (this.Ka = a,
            this.Jh(a))
        }
        Qa(a, b) {
            this.af(a);
            this.Z = a;
            let c = this.K
              , d = 0;
            for (; d < a; )
                c[d++] = b
        }
        EL() {
            if (this.Ka > this.Ck) {
                var a = this.Ck
                  , b = this.Z;
                this.Ka = a > b ? a : b;
                this.Jh(this.Ka)
            } else {
                a = this.K;
                b = this.Z;
                let c = this.Ka;
                for (; b < c; )
                    a[b++] = null
            }
        }
        grow() {
            this.Ka = sg.em(this.Ai, this.Ka);
            this.Jh(this.Ka)
        }
        Jh(a) {
            a = Array(a);
            Db.Wl(this.K, 0, a, this.Z);
            this.K = a
        }
        Ms() {
            Db.Gp(this.K);
            this.K = null;
            null != this.Uc && (this.Uc.Ms(),
            this.Uc = null)
        }
        clear(a) {
            null == a && (a = !1);
            a && Db.Gp(this.K);
            this.Z = 0
        }
        iterator() {
            if (this.bl) {
                if (null == this.Uc)
                    this.Uc = new vd(this);
                else {
                    let a = this.Uc;
                    a.K = a.Xd.K;
                    a.Ff = a.Xd.Z;
                    a.Wd = 0
                }
                return this.Uc
            }
            return new vd(this)
        }
    }
    rb.g = !0;
    rb.ob = [rg];
    Object.assign(rb.prototype, {
        j: rb
    });
    class fa {
        constructor() {
            this.Y = za.instance;
            this.listener = null;
            this.lv = !1;
            this.parent = this.od = this.U = null;
            this.Kz = this.Jz = !1;
            this.name = null;
            this.time = 0;
            fa.St.au(this)
        }
        ua() {
            if (null != this.Y) {
                for (var a = this.od; null != a; ) {
                    var b = a.U;
                    a.ua();
                    a = b
                }
                null != this.parent && this.remove();
                for (a = this.listener; null != a; )
                    b = a.next,
                    a.ng = null,
                    a.next = null,
                    a = b;
                this.Y = this.listener = null;
                fa.St.dO(fa.St.indexOf(this))
            }
        }
        remove() {
            null != this.parent && fa.removeChild(this)
        }
        iterator() {
            return new tg(this)
        }
        sa(a) {
            return this.appendChild(a)
        }
        add(a) {
            return this.appendChild(rh.Bx(a))
        }
        gs(a) {
            if (null != this.od) {
                a = new ug(this,a,!1,void 0);
                for (var b = this.od, c; null != b; )
                    c = b.U,
                    b.on(a),
                    b = c
            }
        }
        update(a) {
            if (null != this.Y) {
                this.lv = !0;
                for (var b = this.od, c; null != b; )
                    c = b.U,
                    b.Kz || null == b.Y || (b.update(a),
                    b.time += a),
                    b = c;
                this.time += a
            }
        }
        Ec(a) {
            if (null != this.Y && 0 != this.lv)
                for (var b = this.od, c; null != b; )
                    c = b.U,
                    b.Jz || null == b.Y || b.Ec(a),
                    b = c
        }
        on(a) {
            for (var b = !1, c = this.listener; null != c; )
                c.type == a.type && (null != c.ng && c.ng(a.data),
                c.once && (c.ng = null),
                null == c.ng && (b = !0)),
                c = c.next;
            if (b)
                for (c = this.listener,
                b = null; null != c; ) {
                    let d = c.next;
                    null == c.ng && (c == this.listener ? c = this.listener = d : (b.next = d,
                    c.next = null,
                    c = b));
                    b = c;
                    c = d
                }
            if (a.$) {
                if (null != this.parent)
                    this.parent.on(a)
            } else
                for (c = this.od; null != c; )
                    b = c.U,
                    c.on(a),
                    c = b
        }
        Ip() {}
        xb(a) {
            return Math.min(1, this.time / a)
        }
        Fs(a, b) {
            for (var c = this.parent; null != c; ) {
                if (Sa.Jr(c, a))
                    return c;
                c = c.parent
            }
            c = 1;
            let d = [this];
            for (; 0 < c; ) {
                let e = d[--c]
                  , f = e.od;
                for (; null != f; )
                    d[c++] = f,
                    f = f.U;
                if (e != b && Sa.Jr(e, a))
                    return e
            }
            return null
        }
        appendChild(a) {
            a.parent = this;
            var b = this.od;
            if (null != b) {
                for (; null != b.U; )
                    b = b.U;
                b.U = a
            } else
                this.od = a;
            a.Ip();
            return a
        }
        static removeChild(a) {
            if (null == a || null == a.parent)
                return !1;
            var b = a.parent;
            if (a == b.od)
                b.od = a.U;
            else
                for (b = b.od; null != b; ) {
                    if (b.U == a) {
                        b.U = a.U;
                        break
                    }
                    b = b.U
                }
            a.parent = a.U = null;
            return !0
        }
    }
    fa.g = !0;
    Object.assign(fa.prototype, {
        j: fa
    });
    class hc extends fa {
        constructor() {
            super();
            this.name = this.Na();
            this.ad = {};
            this.caller = null;
            this.xe = "New";
            this.eb("New");
            this.node = new mb;
            this.node.ne = 1;
            this.Xc = null
        }
        GJ() {
            return "Running" == this.xe
        }
        ia(a) {
            this.da.io(a, this, !1)
        }
        Zi(a) {
            this.da.io(a, this, !0)
        }
        Xi(a) {
            let b = this;
            if (null != a) {
                let c = this.iterator();
                for (; 0 < c.top; ) {
                    let d = c.stack[--c.top];
                    c.push(d);
                    Sa.Jr(d, a) && (b = d)
                }
            }
            this.da.Xi(b)
        }
        rk() {
            return !0
        }
        dc() {
            return []
        }
        wy() {
            let a = []
              , b = 0
              , c = this.dc();
            for (; b < c.length; ) {
                let d = c[b];
                ++b;
                k.mt(d) && null == k.Zx() || k.ab(d) || a.push(d)
            }
            return a
        }
        qy(a) {
            return new Ic(this,a)
        }
        ph() {
            return 0
        }
        Nb() {
            return 0
        }
        ua() {
            super.ua();
            this.eb("Destroyed");
            null != this.node && this.node.H();
            this.node = null
        }
        update(a) {
            super.update(a);
            this.node.Kg(a)
        }
        Ec(a) {
            super.Ec(a);
            this.node.hd();
            this.node.nl();
            this.Y.P.Ko(this.node)
        }
        Ga() {}
        Pk() {}
        Ta() {}
        Ti() {}
        ae() {}
        cb() {}
        Zd(a) {
            this.Aq(Aa.Jf()(a))
        }
        Yc(a) {
            this.Aq(1 - a)
        }
        eb(a) {
            switch (a) {
            case "Created":
                this.node.ne = 0;
                this.Aq(0);
                break;
            case "Stopped":
                this.node.ne = 1
            }
            this.xe = a
        }
        Aq(a) {
            this.zm().Hg(a)
        }
        zm() {
            let a = this.node.mh(5);
            null == a && (a = new Wb(0));
            this.node.Eg(a);
            return a
        }
        wJ() {
            return this.Xc.parent instanceof fc ? null : this.Xc.parent.bf
        }
        Na() {
            return "Scene"
        }
    }
    hc.g = !0;
    hc.u = fa;
    Object.assign(hc.prototype, {
        j: hc
    });
    class ha extends hc {
        constructor() {
            super();
            this.buttons = [null];
            this.Ac = new og;
            this.Jc = this.si = this.Rc = this.mg = this.Ca = null
        }
        createTexture(a) {
            if (null != r.Bk[a])
                return r.Bk[a];
            let b = this.Y.createTexture(a, 8);
            return r.Bk[a] = b
        }
        fa(a) {
            let b = r.Bk[a];
            null != b && (za.instance.P.fa(b),
            za.instance.tI(a),
            r.Bk[a] = null)
        }
        Pl() {
            let a = Ha.create(null, l.rG, l.sG);
            this.node.S(a.l.B);
            this.buttons[0] = a
        }
        eg(a, b) {
            this.Rc = new E(a,b,0,1);
            this.Ca = new R("fix");
            this.node.S(this.Ca.B)
        }
        Ej() {
            null == r.Jc && (r.Jc = this.createTexture(k.Zf));
            this.Jc = new B(null,r.Jc);
            this.node.S(this.Jc.B);
            this.Jc.ka(V.pm(0, 360))
        }
        fi() {
            this.Aa = new B(null,r.Aa);
            this.node.S(this.Aa.B)
        }
        Qd() {
            if (k.ab(k.Ad)) {
                r.kh = this.createTexture(k.Ad);
                let a = r.Us(D.language, D.language);
                r.zc = r.kh.children[a];
                r.tm = r.kh.children[a + 1]
            }
            k.ab(k.sr) && (r.yk = this.createTexture(k.sr));
            k.ab(k.Yf) && (r.Aa = this.createTexture(k.Yf));
            k.ab(k.Be) && (r.Lb = this.createTexture(k.Be));
            k.ab(k.Xn) && (r.ac = this.createTexture(k.Xn))
        }
        qy(a) {
            return new Ie(this,a)
        }
        Ga() {
            this.Qd();
            null == ha.Lr && (ha.Lr = new ic(null,new E(0,0,0,1)),
            this.da.xa.S(ha.Lr.B));
            this.si = ha.Lr
        }
        Pk() {
            super.Pk();
            this.cb()
        }
        cb() {
            var a = this.da.ta()
              , b = this.da.wa();
            let c = this.da.Zs();
            if (null != this.Rc) {
                this.mg = c.ih(this.Rc.x / this.Rc.y);
                this.Ca.o(this.mg.m);
                this.Ca.s(this.mg.C);
                var d = this.mg;
                this.Ca.J((d.A - d.m) / this.Rc.x)
            }
            null != this.Ze && (this.Ze.o(this.da.ta() - this.Ze.ta()),
            this.Ze.s(this.da.wa() - this.Ze.wa()));
            d = this.buttons[0];
            if (null != d) {
                var e = c.ih(this.Rc.x / this.Rc.y);
                d.l.J(.2 * (e.A - e.m) / d.Zb.x);
                d.o(10);
                d.s(this.da.wa() - d.l.wa() - 10)
            }
            null != this.Aa && (e = r.Aa.size,
            d = a / e.x,
            e = b / e.y,
            this.YI = d > e,
            this.Aa.J(Math.max(d, e)),
            this.Aa.o(this.da.ta() / 2),
            d = this.Aa,
            d.o(d.$a() - this.Aa.ta() / 2),
            this.Aa.s(0));
            null != this.Jc && (c.ih(1),
            this.Jc.F(),
            this.Jc.IN(new E((c.m + c.A) / 2,(c.C + c.D) / 2,0,1)),
            this.Jc.J((c.A - c.m) / 260),
            a = Math.max(a, b) / 2,
            a = 2 * Math.sqrt(2 * a * a) / r.Jc.size.x,
            this.Jc.pb < a && this.Jc.J(a),
            a = 1 / this.da.Td(),
            1 > a && (b = this.Jc,
            b.J(b.pb * a)),
            a = this.Jc,
            a.J(2 * a.pb))
        }
        update(a) {
            super.update(a);
            if (this.GJ()) {
                this.Ac.yh();
                this.eN();
                this.pe();
                this.Ac.fh();
                let b = 0
                  , c = this.buttons;
                for (; b < c.length; ) {
                    let d = c[b];
                    ++b;
                    null != d && d.update(a)
                }
            }
            null != this.Jc && (a = this.Jc,
            a.ka(a.Od + .1))
        }
        Nb() {
            return .5
        }
        Zd(a) {
            this.si.aa(1 - a)
        }
        Yc(a) {
            this.si.aa(a)
        }
        eN() {
            var a = this.Y.Re();
            this.Ac.pressed = a.Vf(0);
            this.Ac.released = a.Xh(0);
            a = a.position[0];
            var b = a.x
              , c = a.y;
            a = this.Y.P.fb;
            let d = this.Y.window.Cm();
            b = -1 + 2 * (b - d.x) / d.w;
            c = -1 + 2 * (d.y - c) / d.G;
            a = a.lt;
            a = new E(a.m11 * b + a.m12 * c + a.m14,a.m21 * b + a.m22 * c + a.m24,0,1);
            null != a && (b = this.Ac.i,
            b.x = a.x,
            b.y = a.y)
        }
        OJ() {
            let a = 0
              , b = this.buttons;
            for (; a < b.length; ) {
                let c = b[a];
                ++a;
                null != c && c.l.O(!1)
            }
        }
        MN() {
            let a = 0
              , b = this.buttons;
            for (; a < b.length; ) {
                let c = b[a];
                ++a;
                null != c && c.l.O(!0)
            }
        }
        pe() {}
        sb(a) {
            let b = this.buttons[a];
            if (null == b || "Running" != this.xe || b.selected || !b.l.Sg)
                return !1;
            let c = !1;
            this.Ac.RH(a, b) && (b.select(),
            c = !0);
            b.yu(this.Ac.dz(a));
            b.setActive(this.Ac.isActive(a));
            c && z.play(z.Og);
            return c
        }
        Aq() {}
        ec(a, ...b) {
            return Vb.get(a, 0 < b.length ? b.slice() : null)
        }
        bp(...a) {
            let b = []
              , c = 0;
            for (; c < a.length; )
                b.push(Vb.get(a[c++]));
            return b
        }
        rn() {
            this.Y.Ea.stop(k.sl);
            this.eA(k.Wf)
        }
        ML() {
            this.Y.Ea.stop(k.Wf);
            this.eA(k.sl)
        }
        eA(a) {
            if (D.Vc) {
                var b = this.Y.Ea;
                b.Bc(a) || (b.play(a, !0),
                this.Y.Rj = a)
            }
        }
        Ox() {
            let a = this.Y.Ea;
            a.Bc(k.Wf) && a.qm(k.Wf, .5, !0);
            a.Bc(k.sl) && a.qm(k.sl, .5, !0)
        }
        EA() {
            let a = this;
            J.Fm() && !ha.FA && k.ab(k.Hl) && (this.Ze = new B(null,this.createTexture(k.Hl),"0000"),
            this.Ze.J(this.Y.window.qn),
            this.Y.Fi || this.Ze.J(this.Y.window.ik()),
            this.da.xa.S(this.Ze.B),
            this.Ze.ja().play(l.La(null, 0, 53, 30)).$d(function() {
                a.Ze.H();
                a.Ze = null;
                a.fa(k.Hl)
            }),
            z.play(z.WF),
            ha.FA = !0,
            this.cb())
        }
        tO() {
            let a = 0;
            for (; 17 > a; ) {
                let b = a++;
                this.fa([160, 155, 150, 145, 140, 135, 130, 124, 119, 114, 109, 104, 99, 94, 89, 84, 79][b]);
                this.fa([162, 157, 152, 147, 142, 137, 132, 127, 121, 116, 111, 106, 101, 96, 91, 86, 81][b]);
                this.fa([164, 159, 154, 149, 144, 139, 134, 129, 123, 118, 113, 108, 103, 98, 93, 88, 83][b])
            }
            r.yo = null;
            r.ki = null;
            r.ds = null;
            this.fa(k.vl);
            r.$ = null;
            this.fa(k.Cl);
            r.ze = null;
            this.fa(k.zl);
            r.Wk = null;
            this.fa(k.Bl);
            r.lc = null;
            this.fa(k.wl);
            r.Me = null;
            this.fa(k.Al);
            r.hj = null;
            this.fa(k.ul);
            r.Hc = null;
            this.fa(k.$h);
            r.tb = null;
            this.fa(k.$h);
            r.Kj = null;
            this.fa(k.Fl);
            r.wc = null;
            this.fa(k.Dl);
            r.oj = null;
            this.fa(k.yl);
            r.vh = null;
            this.fa(k.xl);
            r.Oe = null;
            this.fa(k.ai);
            r.Xe = null;
            this.fa(k.El);
            r.uc = null;
            this.fa(k.ai);
            r.Xe = null;
            this.fa(k.tl);
            r.Pj = null
        }
        Pn(a) {
            function b(d) {
                return 0 == (Mh[a - 1] & d)
            }
            let c = a - 1;
            this.fa([160, 155, 150, 145, 140, 135, 130, 124, 119, 114, 109, 104, 99, 94, 89, 84, 79][c]);
            this.fa([162, 157, 152, 147, 142, 137, 132, 127, 121, 116, 111, 106, 101, 96, 91, 86, 81][c]);
            this.fa([164, 159, 154, 149, 144, 139, 134, 129, 123, 118, 113, 108, 103, 98, 93, 88, 83][c]);
            r.yo = null;
            r.ki = null;
            r.ds = null;
            null != r.$ && b(1) && (this.fa(k.vl),
            r.$ = null);
            null != r.ze && b(2) && (this.fa(k.Cl),
            r.ze = null);
            null != r.Wk && b(4) && (this.fa(k.zl),
            r.Wk = null);
            null != r.lc && b(8) && (this.fa(k.Bl),
            r.lc = null);
            null != r.Me && b(64) && (this.fa(k.wl),
            r.Me = null);
            null != r.hj && b(128) && (this.fa(k.Al),
            r.hj = null);
            null != r.Hc && b(512) && (this.fa(k.ul),
            r.Hc = null);
            null != r.tb && b(2048) && (this.fa(k.$h),
            r.tb = null);
            null != r.Kj && b(4096) && (this.fa(k.$h),
            r.Kj = null);
            null != r.wc && b(16384) && (this.fa(k.Fl),
            r.wc = null);
            null != r.oj && b(65536) && (this.fa(k.Dl),
            r.oj = null);
            null != r.vh && b(131072) && (this.fa(k.yl),
            r.vh = null);
            null != r.Oe && b(262144) && (this.fa(k.xl),
            r.Oe = null);
            null != r.Xe && b(524288) && (this.fa(k.ai),
            r.Xe = null);
            null != r.uc && b(1048576) && (this.fa(k.El),
            r.uc = null);
            null != r.Xe && b(524288) && (this.fa(k.ai),
            r.Xe = null,
            this.fa(k.tl),
            r.Pj = null)
        }
        Na() {
            return "AbstractScene"
        }
    }
    ha.g = !0;
    ha.u = hc;
    Object.assign(ha.prototype, {
        j: ha
    });
    class Cb extends ha {
        constructor() {
            super()
        }
        dc() {
            let a = [k.mf, k.Ad, k.Yf, k.Gl, k.Zf, k.Be, k.$f, k.ag, k.Xf, k.Hl, k.Uv];
            0 == F.hk() && a.push(1 < this.Y.window.um() ? k.Hr : k.Ir);
            0 < F.hk() && a.push(k.Wf);
            return a
        }
        Nb(a) {
            return a instanceof Jc ? 0 : super.Nb(a)
        }
        Zd(a, b) {
            null == b ? this.si.aa(1 - a) : super.Zd(a, b)
        }
        fi() {
            super.fi();
            this.rc = new B(null,r.Yw);
            this.node.S(this.rc.B)
        }
        Qd() {
            super.Qd();
            k.ab(k.Gl) && (r.Yw = this.createTexture(k.Gl))
        }
        Ga() {
            super.Ga();
            this.fi();
            this.Ej();
            this.eg(600, 900);
            this.Zh = new B(null,r.Lb,l.iH);
            this.hh = new B(null,r.Lb,l.EG);
            this.node.S(this.Zh.B);
            this.node.S(this.hh.B);
            this.Df = new B(this.Ca,r.Lb,"ru" == k.oy() ? l.OG : l.NG);
            this.Df.o(300);
            this.Df.s(220);
            this.Df.F();
            this.Df.J(.9);
            this.N = new B(this.Ca,r.Lb);
            this.N.o(378);
            this.N.s(364);
            this.SB();
            this.N.F();
            this.wo = 0;
            var a = Jb.gm(this.ec("PLAY"));
            a.o(65);
            a.s(500);
            this.Ca.appendChild(a.l);
            this.buttons.push(a);
            this.sa(a);
            a = Ha.create(null, l.Dr, l.Er, l.FG);
            a.o(219);
            a.s(617);
            this.Ca.appendChild(a.l);
            this.buttons.push(a);
            this.sa(a)
        }
        Ta() {
            super.Ta();
            Cb.wf = !1;
            this.rn();
            this.lA();
            1 == D.hint && V.Yk() && 3 < F.hk() && 3 < this.time && this.sa(new wd);
            this.fa([63, 61, 59][D.gf]);
            r.N = null;
            this.EA();
            this.cb()
        }
        cb() {
            var a = 0;
            this.Rc.y = 900;
            var b = .9
              , c = this.da.Td();
            1 < c && (2 < c && (c = 2),
            this.Rc.y = ya(c, 1, 2, 900, 650),
            a = ya(c, 1, 2, 0, -80),
            b = ya(c, 1, 2, .9, .8));
            super.cb();
            this.buttons[1].s(500 + a);
            this.buttons[2].s(617 + a);
            this.Df.J(b);
            c = this.da.Zs();
            a = this.Aa.ta() / this.rc.X.x;
            this.rc.J(a);
            this.rc.o((c.m + c.A) / 2);
            a = this.rc;
            a.o(a.$a() - this.rc.ta() / 2);
            this.rc.s(this.Aa.wa() - this.rc.wa());
            this.YI && (this.rc.s(c.D - c.C - this.rc.wa()),
            a = this.rc,
            a.s(a.Oa + this.da.Td() * this.rc.wa() * .3));
            a = (c.A - c.m) / 2;
            b = .2;
            var d = this.da.Td();
            1 < d && (b = .2 + (d - 1),
            .3 < b && (b = .3));
            b = new W(0,0,a,(c.D - c.C) * b);
            c = c.D;
            let e = b.D - b.C;
            b.D = c;
            b.C = c - e;
            this.yt = b.ih(1);
            c = 1 < d ? .6 : .4;
            d = this.yt;
            this.Zh.J((d.A - d.m) * c / this.Zh.X.x);
            d = this.yt;
            this.Zh.o((d.m + d.A) / 2 - this.Zh.ta() / 2);
            this.Zh.s(this.yt.D - 1.1 * this.Zh.wa());
            this.Zh.aa(.5);
            d = b.A - b.m;
            b.m = a;
            b.A = a + d;
            a = this.zt = b.ih(1);
            this.hh.J((a.A - a.m) * c / this.hh.X.x);
            a = this.zt;
            this.hh.o((a.m + a.A) / 2 - this.hh.ta() / 2);
            this.hh.s(this.zt.D - 1.1 * this.hh.wa());
            this.hh.aa(.5)
        }
        update(a) {
            super.update(a);
            if (null == this.Fs(wd, this) && (this.wo -= a,
            0 >= this.wo && this.Y.Re().Vf(0) && this.N.Gb(this.Ac.i))) {
                a = D.gf + 1;
                let b = qi;
                a %= b;
                0 > a && (a += b);
                D.gf = a;
                D.hint = 0;
                this.SB();
                this.rz();
                z.play(z.Og);
                D.flush();
                this.wo = .25
            }
        }
        Ec(a) {
            super.Ec(a)
        }
        pe() {
            this.sb(1) && (0 == F.hk() ? this.ia(Jc) : this.ia(Kb));
            this.sb(2) && this.ia(jc)
        }
        SB() {
            this.N.Yb(l.Yh(l.DG, D.gf))
        }
        rz() {
            this.N.J(.8);
            this.N.Ub().ZN();
            this.N.Ub().scale(1, 1, Aa.Mx(.1))
        }
        lA() {
            0 == D.vg[0][0] ? this.Y.Ap(Jc) : this.Y.Ap(Kb)
        }
        Na() {
            return "MenuScene"
        }
    }
    Cb.g = !0;
    Cb.u = ha;
    Object.assign(Cb.prototype, {
        j: Cb
    });
    class Ib extends Cb {
        constructor() {
            super()
        }
        dc() {
            let a = [k.mf, k.Ad, k.Yf, k.Gl, k.Zf, k.Be, k.$f, k.ag, k.Xf, k.Hl, k.Uv];
            return a = a.concat(Object.create((0 == F.hk() ? nb : Kb).prototype).dc())
        }
        Ta() {
            super.Ta();
            Ib.wf && (window.ytgame.game.gameReady(),
            Ib.wf = !1)
        }
        pe() {
            this.sb(1) && (0 == F.hk() ? this.ia(xd) : this.ia(kc));
            this.sb(2) && this.ia(yd)
        }
        lA() {}
        Na() {
            return "YouTubeMenuScene"
        }
    }
    Ib.g = !0;
    Ib.u = Cb;
    Object.assign(Ib.prototype, {
        j: Ib
    });
    class Kb extends ha {
        constructor() {
            super()
        }
        dc() {
            return [k.mf, k.Ad, k.Yf, k.Zf, k.Be, k.$f, k.ag, k.Xf, k.xr, k.eD, k.Wf]
        }
        Ga() {
            super.Ga();
            this.fa(k.ur);
            this.fa(k.vr);
            this.fa(k.wr);
            this.tO();
            this.fi();
            this.eg(600, 900);
            this.Ej();
            this.Pl();
            r.Nf = this.createTexture(k.xr);
            this.Ww = 750 / r.Nf.Mb.Qe(l.zr).Zb.x;
            this.offsetY = 150;
            this.vB = .7 * r.Nf.Mb.Qe(l.zr).Zb.y;
            this.Nf = [];
            let a = 0;
            for (; 3 > a; ) {
                var b = a++;
                let c = new R(null,this.Ca);
                new B(c,r.Nf,l.zr);
                new B(c,r.Nf,[l.zF, l.AF, l.BF][b]);
                c.F();
                c.J(this.Ww);
                c.o(300);
                c.s(this.offsetY + b * this.vB);
                this.Nf.push(c);
                let d = new wa(c,r.zc);
                d.o(312);
                d.s(140);
                d.Fc(70);
                d.Xb(0);
                d.Ib(400, 100);
                d.Xa(this.ec("SEASON_NO", Ga.ge(b + 1)));
                b = Ha.create(r.Nf, l.CF, l.DF);
                b.o(512);
                b.s(285);
                b.l.F();
                c.appendChild(b.l);
                this.buttons.push(b);
                this.sa(b)
            }
        }
        Ta() {
            super.Ta();
            this.rn();
            this.EA()
        }
        cb() {
            super.cb();
            let a = Math.min(Math.max(0, this.Y.window.um() - 1), .2)
              , b = 0;
            for (; 3 > b; ) {
                let c = b++;
                this.Nf[c].J(this.Ww + a);
                this.Nf[c].s(this.offsetY + c * (this.vB + 150 * a))
            }
        }
        ae() {
            super.ae();
            r.Nf = null;
            this.fa(k.xr)
        }
        pe() {
            if (this.sb(0))
                D.flush(),
                this.Pn(F.box),
                this.jc();
            else
                for (var a = 1; 4 > a; ) {
                    let b = a++;
                    this.sb(b) && this.MI(b)
                }
        }
        MI(a) {
            a != F.Eb && (this.fa([14, 12, 10][F.Eb - 1]),
            r.Ab = null);
            F.Bq(a);
            this.Pn(F.box);
            switch (a) {
            case 1:
                F.cj(1);
                break;
            case 2:
                F.cj(6);
                break;
            case 3:
                F.cj(11)
            }
            this.ia(this.zy()[a - 1])
        }
        zy() {
            return [Lb, Eb, Mb]
        }
        jc() {
            this.ia(Cb)
        }
        Na() {
            return "SelectSeasonScene"
        }
    }
    Kb.g = !0;
    Kb.u = ha;
    Object.assign(Kb.prototype, {
        j: Kb
    });
    class kc extends Kb {
        constructor() {
            super()
        }
        jc() {
            this.ia(Ib)
        }
        zy() {
            return [Kc, Lc, Mc]
        }
        Na() {
            return "YouTubeSelectSeasonScene"
        }
    }
    kc.g = !0;
    kc.u = Kb;
    Object.assign(kc.prototype, {
        j: kc
    });
    class sb extends ha {
        constructor() {
            super()
        }
        dc() {
            return [k.mf, k.Ad, k.Yf, k.Zf, k.Be, k.$f, k.Xf, k.Wf, k.ag]
        }
        Ga() {
            super.Ga();
            this.Za = F.box;
            10 < this.Za ? this.Za -= 10 : 5 < this.Za && (this.Za -= 5);
            this.state = 0;
            this.fi();
            this.Ej();
            this.eg(650, 650);
            this.Ab = new R(null,this.Ca);
            this.Ab.o(75);
            this.Ab.s(75);
            this.offsetX = this.Ab.$a();
            this.advance = 500;
            var a = this.Qs()
              , b = this.Ps();
            switch (F.Eb) {
            case 2:
                var c = 5;
                break;
            case 3:
                c = 7;
                break;
            default:
                c = 5
            }
            this.Lj = c;
            this.Zw = [];
            for (var d = c = 0, e = this.Lj; d < e; ) {
                ++d;
                var f = new B(this.Ab);
                f.setColor(new E(.17647058823529413,.17647058823529413,.20784313725490197,1), 300, 300);
                f.o(100 + c);
                f.s(150);
                this.Zw.push(f);
                c += this.advance
            }
            this.Ma = new B(this.Ab,r.Ab,l.hF);
            this.clipPath = new W(0,0,177,182);
            this.Xl = [];
            e = this.Lj;
            this.Sk = e += 3 > F.Eb ? 1 : 0;
            for (d = c = 0; d < e; ) {
                f = d++;
                var g = this.Bp(f);
                let q = new R(null,this.Ab);
                this.Xl.push(q);
                let p = f == this.Lj;
                q.o(c);
                var h = null;
                if (p && 3 > F.Eb)
                    h = new R(null,q),
                    new B(h,r.Ab,b[f]);
                else {
                    new B(q,r.Ab,b[f]);
                    var m = new B(q,r.Ab,b[f]);
                    m.de(m.X.x, 0);
                    m.qa(-1)
                }
                if (!p && F.sp(g)) {
                    m = new R(null,q);
                    m.GN();
                    new B(m,r.Ab,l.yr);
                    var n = new B(m,r.Ab,l.yr);
                    n.de(n.X.x, 0);
                    n.qa(-1);
                    m.F();
                    n = r.Ab.Mb.Qe(l.yr).Zb;
                    m.o(m.$a() + n.x);
                    m.s(m.Oa + n.y / 2);
                    0 < F.Vs(g) && (m = new B(q,r.Lb,l.pw),
                    m.o(260),
                    m.s(320),
                    m.J(.7),
                    n = new wa(q,r.zc),
                    n.Ib(80, m.wa()),
                    n.Xb(1, 0),
                    n.Iu(-3),
                    n.Xa(Ga.ge(Kh[g - 1])),
                    n.Fc(1.2 * (m.wa() | 0)),
                    n.o(m.$a() - 80),
                    n.s(m.Oa));
                    3 == F.Eb && f == this.Lj - 1 && (new B(q,r.Ab,l.yF),
                    m = new wa(q,r.zc),
                    m.Xa(this.ec("MECH_HARDEST")),
                    m.Ib(184, 60),
                    m.Fc(36),
                    m.Xb(0),
                    m.o(253),
                    m.s(425),
                    m.ka(-16))
                }
                p || 75 != F.ay(g) || new B(q,r.Ab,l.lF);
                p && 3 > F.Eb ? (g = new wa(h,r.zc),
                g.Ib(300, 100),
                g.o(100),
                g.s(206),
                g.Xa(a[f]),
                g.Fc(60),
                g.Mh(!0),
                g.yq(-40),
                g.Xb(0, 0),
                h.Nj(),
                h.ka(15)) : (h = new wa(q,r.zc),
                h.Ib(400, 200),
                h.o(56),
                h.Xa(a[f]),
                h.Fc(70),
                h.Mh(!0),
                h.Xb(0),
                h.yq(-30),
                h.shape(),
                h.s(1 == h.Ws() ? 110 : 90));
                c += this.advance
            }
            this.sc = [];
            for (a = 0; 2 > a; )
                ++a,
                b = new B(null,r.Lb,l.qw),
                b.F(),
                this.Ca.appendChild(b),
                this.sc.push(b);
            this.Pl();
            this.Hd = this.add(lc);
            a = F.Ys();
            this.Hd.Xa(null == a ? "null" : "" + a);
            this.MH = new Je(this.Ca.node,new W(145,145,505,505));
            this.er();
            this.mo = !0;
            this.cs = !1;
            this.Rx = !0
        }
        To() {
            this.ia(Nb)
        }
        er() {
            1 < this.Za ? (this.sc[0].Yb(l.qw),
            this.sc[0].Oh(1)) : (this.sc[0].Yb(l.WG),
            this.sc[0].Oh(2));
            this.Za == this.Sk ? (this.sc[1].Yb(l.UG),
            this.sc[1].Oh(2)) : (this.sc[1].Yb(l.VG),
            this.sc[1].Oh(1));
            this.sc[0].J(1);
            this.sc[1].J(1)
        }
        Nu() {
            this.rq = -1;
            this.Sr();
            this.na(1);
            this.je = -(this.Za - 1) * this.advance;
            this.x1 = this.je - this.advance * this.rq;
            this.je += this.offsetX;
            this.x1 += this.offsetX;
            this.mo = this.Za != this.Sk || 3 == F.Eb;
            this.Za--;
            this.er();
            this.sc[0].J(.9)
        }
        Gq() {
            this.rq = 1;
            this.Sr();
            this.na(1);
            this.je = -(this.Za - 1) * this.advance;
            this.x1 = this.je - this.advance * this.rq;
            this.je += this.offsetX;
            this.x1 += this.offsetX;
            this.mo = this.Za != this.Lj;
            this.Za++;
            this.er();
            this.sc[1].J(.9)
        }
        update(a) {
            super.update(a);
            if ("Running" == this.xe) {
                var b = this.Y.Re().Vf(0);
                a = this.Y.Re().Xh(0);
                switch (this.state) {
                case 0:
                    this.time > (this.Rx ? 1 : 0) && !this.cs && (this.cs = !0,
                    this.Rx = !1,
                    this.$w());
                    if (this.Io) {
                        var c = this.Y.Re().position[0];
                        this.Jo = c.x - this.Jx.x;
                        50 > Math.abs(c.y - this.Jx.y) && (-100 > this.Jo && this.Za < this.Sk && (this.Io = !1,
                        this.Gq()),
                        100 < this.Jo && 1 < this.Za && (this.Io = !1,
                        this.Nu()))
                    }
                    c = this.MH.Gb(this.Ac.i);
                    var d = this.sc[0].Gb(this.Ac.i);
                    let e = this.sc[1].Gb(this.Ac.i);
                    b && (this.sn = 1 < this.Za && d,
                    this.hn = this.Za < this.Sk && e,
                    this.NH = this.Za <= this.Sk && c,
                    this.Io = !0,
                    b = this.Ac.i,
                    this.Jx = new E(b.x,b.y,0,1),
                    this.Jo = 0);
                    a && (this.sn && d && (this.Nu(),
                    z.play(z.Og)),
                    this.hn && e && (this.Gq(),
                    z.play(z.Og)),
                    this.Io = this.hn = this.sn = !1,
                    this.NH && c && 10 > Math.abs(this.Jo) && (z.play(z.Og),
                    this.Za > this.Lj ? this.Ut() && this.na(4) : (a = this.Bp(this.Za - 1),
                    F.sp(a) ? (this.ad.starCount = F.Vs(a),
                    this.Zi(zd)) : (F.box != a && this.Pn(F.box),
                    F.cj(a),
                    this.To(),
                    this.na(4)))));
                    break;
                case 1:
                    c = this.Bp(this.Za - 1);
                    17 >= c && F.sp(c) && F.qx(c) || (c = this.sc[0].Gb(this.Ac.i),
                    d = this.sc[1].Gb(this.Ac.i),
                    b && (this.sn = 1 < this.Za && c,
                    this.hn = this.Za < this.Sk && d),
                    a && (this.sn && c && (this.Ma.o(-(this.x1 - this.offsetX)),
                    this.Nu(),
                    z.play(z.Og)),
                    this.hn && d && (this.Ma.o(-(this.x1 - this.offsetX)),
                    this.Gq(),
                    z.play(z.Og)),
                    this.hn = this.sn = !1));
                    a = this.xb(.2);
                    b = this.je;
                    this.Ab.o(b + (this.x1 - b) * Aa.Jf()(a));
                    b = -(this.Ab.$a() - this.offsetX);
                    this.mo ? (this.Ma.o(b),
                    b = b + this.je - this.offsetX,
                    0 < this.rq ? b > this.advance / 2 ? (c = this.clipPath,
                    b = this.advance - b,
                    d = c.A - c.m,
                    c.m = b,
                    c.A = b + d) : (c = this.clipPath,
                    b = -b,
                    d = c.A - c.m,
                    c.m = b,
                    c.A = b + d) : (b = -b,
                    b > this.advance / 2 ? (c = this.clipPath,
                    b = -this.advance + b,
                    d = c.A - c.m,
                    c.m = b,
                    c.A = b + d) : (c = this.clipPath,
                    d = c.A - c.m,
                    c.m = b,
                    c.A = b + d)),
                    this.Ma.eB(this.clipPath)) : this.Ma.eB(null);
                    1 == a && (this.cs = !1,
                    this.na(2),
                    this.er());
                    break;
                case 2:
                    a = this.Bp(this.Za - 1);
                    F.sp(a) && F.qx(a) ? (this.$w(),
                    this.na(3),
                    this.Xl[this.Za - 1].Yo("lock").tq(),
                    z.play(z.dG),
                    b = new Ke,
                    c = this.mg,
                    b.l.o((c.m + c.A) / 2),
                    d = c = this.mg,
                    b.l.s((c.C + c.D) / 2 + .15 * (d.D - d.C)),
                    this.sa(b),
                    this.node.S(b.l.B),
                    F.uO(a)) : this.na(0);
                    break;
                case 3:
                    a = this.Xl[this.Za - 1].Yo("lock"),
                    b = this.xb(1.5),
                    a.J(1 + .5 * b),
                    a.aa(1 - b),
                    a.yn((new Xb).vu(.5 * -b)),
                    1 == b && this.na(0)
                }
            }
        }
        na(a) {
            this.state = a;
            this.time = 0
        }
        $w() {
            this.es = this.sa(new Nc(this.Xl[this.Za - 1]));
            this.Qz = this.sa(new Nc(this.Ma))
        }
        Sr() {
            null != this.es && (this.es.ua(),
            this.Qz.ua(),
            this.Qz = this.es = null)
        }
        Bp(a) {
            a += 1;
            2 == F.Eb && (a += 5);
            3 == F.Eb && (a += 10);
            return a
        }
        Ut() {
            return !1
        }
        Nb(a) {
            return null != a && a instanceof zd ? 1.5 : super.Nb(a)
        }
        Ta() {
            super.Ta();
            this.rn();
            this.fa(k.Gl);
            r.Df = null;
            r.Yw = null;
            null != this.caller && this.caller.ad.boxComplete && this.Gq()
        }
        cb() {
            super.cb();
            this.Sr();
            this.advance = 500;
            let a = this.da.Td();
            .6 > a || (this.advance *= Math.min(1.5, ya(a, .6, 2, 1, 1.2)));
            for (var b = 0, c = 0, d = this.Zw; c < d.length; ) {
                let e = d[c];
                ++c;
                e.o(100 + b);
                e.aa(.5);
                b += this.advance
            }
            c = b = 0;
            for (d = this.Xl; c < d.length; )
                d[c++].o(b),
                b += this.advance;
            this.Ab.o(-(this.Za - 1) * this.advance + this.offsetX);
            this.mo && (this.Ma.o(-(this.Ab.$a() - this.offsetX)),
            this.na(0));
            b = this.sc[0];
            c = this.sc[1];
            .7 < a ? (b.o(50),
            b.s(325),
            c.o(600),
            c.s(325)) : (b.o(250),
            b.s(650),
            c.o(400),
            c.s(650));
            this.Fs(lc, this).layout()
        }
        pe() {
            this.sb(0) && this.jc()
        }
        jc() {
            this.ia(Kb)
        }
        Na() {
            return "SelectBoxScene"
        }
    }
    sb.g = !0;
    sb.u = ha;
    Object.assign(sb.prototype, {
        j: sb
    });
    class Lb extends sb {
        constructor() {
            super()
        }
        dc() {
            return super.dc().concat([k.ur, k.bD])
        }
        Qd() {
            super.Qd();
            r.Ab = this.createTexture(k.ur)
        }
        Ut() {
            this.ia(Eb);
            return !0
        }
        Qs() {
            let a = this.bp("BOX1_LABEL", "BOX2_LABEL", "BOX3_LABEL", "BOX4_LABEL", "BOX5_LABEL", "NEXT_SEASON")
              , b = 0;
            for (; 5 > b; ) {
                let c = b++;
                a[c] = c + 1 + ". " + a[c]
            }
            return a
        }
        Ps() {
            return [l.cF, l.dF, l.eF, l.fF, l.gF, l.gw]
        }
        Na() {
            return "Season1Scene"
        }
    }
    Lb.g = !0;
    Lb.u = sb;
    Object.assign(Lb.prototype, {
        j: Lb
    });
    class Kc extends Lb {
        constructor() {
            super()
        }
        To() {
            this.ia(Yb)
        }
        jc() {
            this.ia(kc)
        }
        Na() {
            return "YouTubeSeason1Scene"
        }
    }
    Kc.g = !0;
    Kc.u = Lb;
    Object.assign(Kc.prototype, {
        j: Kc
    });
    class Eb extends sb {
        constructor() {
            super()
        }
        dc() {
            return super.dc().concat([k.vr, k.cD])
        }
        Ga() {
            null != this.caller && this.caller instanceof Lb && (F.Bq(2),
            this.Pn(F.box),
            F.cj(6));
            super.Ga()
        }
        Ta() {
            super.Ta();
            this.fa(14)
        }
        Qd() {
            super.Qd();
            r.Ab = this.createTexture(k.vr)
        }
        Ut() {
            this.ia(Mb);
            return !0
        }
        Qs() {
            let a = this.bp("BOX6_LABEL", "BOX7_LABEL", "BOX8_LABEL", "BOX9_LABEL", "BOX10_LABEL", "NEXT_SEASON")
              , b = 0;
            for (; 5 > b; ) {
                let c = b++;
                a[c] = c + 1 + 5 + ". " + a[c]
            }
            return a
        }
        Ps() {
            return [l.nF, l.oF, l.pF, l.qF, l.mF, l.gw]
        }
        Na() {
            return "Season2Scene"
        }
    }
    Eb.g = !0;
    Eb.u = sb;
    Object.assign(Eb.prototype, {
        j: Eb
    });
    class Lc extends Eb {
        constructor() {
            super()
        }
        To() {
            this.ia(Yb)
        }
        jc() {
            this.ia(kc)
        }
        Na() {
            return "YouTubeSeason2Scene"
        }
    }
    Lc.g = !0;
    Lc.u = Eb;
    Object.assign(Lc.prototype, {
        j: Lc
    });
    class Mb extends sb {
        constructor() {
            super()
        }
        dc() {
            return super.dc().concat([k.wr, k.dD])
        }
        Ga() {
            null != this.caller && this.caller instanceof Eb && (F.Bq(3),
            this.Pn(F.box),
            F.cj(11));
            super.Ga()
        }
        Ta() {
            super.Ta();
            this.fa(12)
        }
        Qd() {
            super.Qd();
            r.Ab = this.createTexture(k.wr)
        }
        Qs() {
            let a = this.bp("BOX11_LABEL", "BOX12_LABEL", "BOX13_LABEL", "BOX14_LABEL", "BOX15_LABEL", "BOX16_LABEL", "BOX17_LABEL")
              , b = 0;
            for (; 7 > b; ) {
                let c = b++;
                a[c] = c + 1 + 10 + ". " + a[c]
            }
            return a.slice(0, 7)
        }
        Ps() {
            return [l.rF, l.sF, l.tF, l.uF, l.vF, l.wF, l.xF].slice(0, 7)
        }
        Na() {
            return "Season3Scene"
        }
    }
    Mb.g = !0;
    Mb.u = sb;
    Object.assign(Mb.prototype, {
        j: Mb
    });
    class Mc extends Mb {
        constructor() {
            super()
        }
        To() {
            this.ia(Yb)
        }
        jc() {
            this.ia(kc)
        }
        Na() {
            return "YouTubeSeason3Scene"
        }
    }
    Mc.g = !0;
    Mc.u = Mb;
    Object.assign(Mc.prototype, {
        j: Mc
    });
    class Nb extends ha {
        constructor() {
            super()
        }
        dc() {
            let a = [k.mf, k.Ad, k.Zf, k.Be, k.$f, k.Xn, k.Tv, k.Zf, k.Xf, k.Wf, k.ag]
              , b = F.box - 1;
            a.push([161, 156, 151, 146, 141, 136, 131, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80][b]);
            a.push([162, 157, 152, 147, 142, 137, 132, 127, 121, 116, 111, 106, 101, 96, 91, 86, 81][b]);
            a.push([163, 158, 153, 148, 143, 138, 133, 128, 122, 117, 112, 107, 102, 97, 92, 87, 82][b]);
            return a
        }
        GM(a) {
            this.uL(a)
        }
        uL(a) {
            F.Du(a);
            z.play(z.Og);
            this.state = 1;
            this.time = 0
        }
        Ga() {
            super.Ga();
            this.si.O(!0);
            null != db.instance && db.instance.ua();
            this.Wa = this.add(db);
            this.da.back.S(this.Wa.node);
            this.state = 0;
            this.Ej();
            this.Pl();
            this.Nm = new R;
            var a = r.Lb.Mb.Qe(l.Fr).Zb;
            let b = a.x - 20
              , c = a.y
              , d = 1;
            this.ht = new Ad(5,5);
            let e = this;
            this.ht.forEach(function(f, g, h) {
                d += 1;
                f = new Oc(d - 1);
                e.Nm.appendChild(f.l);
                f.l.o(g * b);
                f.l.s(h * c);
                return f
            });
            this.Nm.o(-5);
            this.size = new Qa(5 * b,5 * c);
            this.eg(this.size.x, this.size.y);
            this.Ca.appendChild(this.Nm);
            for (a = this.ht.iterator(); a.bb(); ) {
                let f = a.next();
                F.hK(f.level) && f.nN(F.py(f.level))
            }
            this.Hd = this.add(lc);
            a = F.ay();
            this.Hd.Xa(0 == a ? "0" : "" + a + "/75");
            this.rn()
        }
        Ta() {
            super.Ta();
            this.Y.Ea.ef(D.Vc ? 1 : 0)
        }
        ua() {
            super.ua();
            this.Wa = null
        }
        Qd() {
            super.Qd();
            r.ki = this.createTexture([162, 157, 152, 147, 142, 137, 132, 127, 121, 116, 111, 106, 101, 96, 91, 86, 81][F.box - 1])
        }
        update(a) {
            super.update(a);
            switch (this.state) {
            case 0:
                if (this.Y.Re().Vf(0))
                    for (a = this.ht.iterator(); a.bb(); ) {
                        let b = a.next();
                        if (b.Gb(this.Ac.i)) {
                            this.ft = b;
                            break
                        }
                    }
                this.Y.Re().Xh(0) && null != this.ft && this.ft.Gb(this.Ac.i) && this.GM(this.ft.level);
                break;
            case 1:
                a = this.xb(.3);
                this.zm().Hg(1 - a);
                1 == a && (this.Ox(),
                this.Wa.kI(),
                this.state = 2);
                break;
            case 2:
                0 == this.Wa.state && (this.state = 3,
                this.Wa.remove(),
                this.Lk())
            }
        }
        Yc(a, b) {
            b instanceof nb ? 0 == a && (this.da.back.removeChild(this.Wa.node),
            this.da.xa.S(this.Wa.node)) : (super.Yc(a, b),
            1 == a && b instanceof sb && this.Wa.ua())
        }
        cb() {
            this.Rc.y = this.size.y;
            this.Nm.s(0);
            let a = this.da.Td();
            !this.Y.Fi && .7 < a && (this.Rc.y += 400,
            this.Nm.s(200));
            super.cb();
            this.Wa.layout();
            this.Fs(lc, this).layout()
        }
        pe() {
            this.sb(0) && this.jc()
        }
        jc() {
            switch (F.Eb) {
            case 1:
                this.ia(Lb);
                break;
            case 2:
                this.ia(Eb);
                break;
            case 3:
                this.ia(Mb)
            }
        }
        Lk() {
            this.ia(nb)
        }
        Na() {
            return "SelectLevelScene"
        }
    }
    Nb.g = !0;
    Nb.u = ha;
    Object.assign(Nb.prototype, {
        j: Nb
    });
    class Yb extends Nb {
        constructor() {
            super()
        }
        jc() {
            switch (F.Eb) {
            case 1:
                this.ia(Kc);
                break;
            case 2:
                this.ia(Lc);
                break;
            case 3:
                this.ia(Mc)
            }
        }
        Lk() {
            this.ia(xd)
        }
        Na() {
            return "YouTubeSelectLevelScene"
        }
    }
    Yb.g = !0;
    Yb.u = Nb;
    Object.assign(Yb.prototype, {
        j: Yb
    });
    class nb extends ha {
        constructor(a, b) {
            null == b && (b = !1);
            null == a && (a = !0);
            super();
            this.Hq = a;
            this.Cn = b
        }
        dc() {
            function a(d) {
                return 0 < (Mh[c] & d)
            }
            let b = [k.mf, k.Ad, k.Be, k.$f, k.Xn, k.Tv, k.Xf, k.sl, k.ag, k.Mv, k.DC, k.Nv, k.EC, k.Ov, k.OC, k.Pv, k.VC, k.Qv, k.ZC];
            b.push([63, 61, 59][D.gf]);
            b.push([64, 62, 60][D.gf]);
            let c = F.box - 1;
            a(1) && (b.push(k.vl),
            b.push(k.JC));
            a(2) && (b.push(k.Cl),
            b.push(k.UC));
            a(4) && (b.push(k.zl),
            b.push(k.RC));
            a(8) && (b.push(k.Bl),
            b.push(k.TC));
            a(64) && (b.push(k.wl),
            b.push(k.KC));
            a(128) && (b.push(k.Al),
            b.push(k.SC));
            a(512) && (b.push(k.ul),
            b.push(k.IC));
            a(2048) && (b.push(k.$h),
            b.push(k.NC));
            a(4096) && (b.push(k.pr),
            b.push(k.HC));
            a(8192) && (b.push(k.nr),
            b.push(k.GC));
            a(16384) && (b.push(k.Fl),
            b.push(k.YC));
            a(32768) && (b.push(k.qr),
            b.push(k.MC));
            a(65536) && (b.push(k.Dl),
            b.push(k.WC));
            a(131072) && (b.push(k.yl),
            b.push(k.PC));
            a(262144) && (b.push(k.xl),
            b.push(k.LC));
            a(524288) && (b.push(k.ai),
            b.push(k.QC),
            b.push(k.tl),
            b.push(k.FC));
            a(1048576) && (b.push(k.El),
            b.push(k.XC));
            b.push([160, 155, 150, 145, 140, 135, 130, 124, 119, 114, 109, 104, 99, 94, 89, 84, 79][c]);
            b.push([161, 156, 151, 146, 141, 136, 131, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80][c]);
            b.push([162, 157, 152, 147, 142, 137, 132, 127, 121, 116, 111, 106, 101, 96, 91, 86, 81][c]);
            b.push([163, 158, 153, 148, 143, 138, 133, 128, 122, 117, 112, 107, 102, 97, 92, 87, 82][c]);
            b.push([164, 159, 154, 149, 144, 139, 134, 129, 123, 118, 113, 108, 103, 98, 93, 88, 83][c]);
            8 == F.box && b.push(k.yv);
            return b
        }
        ph() {
            return nb.wf ? 5 : 0
        }
        Ga() {
            super.Ga();
            this.si.O(!1);
            this.xn = new ic(null,new E(1,1,1,1));
            this.V = new na(this);
            var a = Ha.create(null, l.vG, l.wG);
            this.buttons.push(a);
            this.node.S(a.l.B);
            a = Ha.create(null, l.xG, l.yG);
            this.buttons.push(a);
            this.node.S(a.l.B);
            this.Cn && (a = Ha.create(null, l.uG, l.tG, l.kw),
            a.icon.O(!D.Vc),
            this.buttons.push(a),
            this.node.S(a.l.B),
            a = Ha.create(null, l.AG, l.zG, l.kw),
            a.icon.O(!D.ye),
            this.buttons.push(a),
            this.node.S(a.l.B));
            this.Hd = new R;
            this.node.S(this.Hd.B);
            for (a = 0; 3 > a; ) {
                let b = new B(this.Hd,r.Lb,Nh);
                b.o(b.ta() * a++)
            }
            this.Gd = new R;
            a = new wa(this.Gd,r.zc);
            a.Ib(200, 60);
            a.Xa(this.ec("LEVEL"));
            a.Qh();
            a = new wa(this.Gd,r.zc);
            a.s(50);
            a.Ib(200, 60);
            this.TB();
            this.node.S(this.Gd.B);
            this.kn = this.state = this.rh = this.Km = 0
        }
        ae() {
            super.ae();
            null != this.Wa && this.Wa.remove()
        }
        Qd() {
            super.Qd();
            let a = F.box - 1;
            null == r.N && (r.N = this.createTexture([63, 61, 59][D.gf]),
            r.rs = this.createTexture(k.Mv),
            r.TH = this.createTexture(k.Nv),
            r.qO = this.createTexture(k.Qv),
            r.fd = this.createTexture(k.Pv),
            r.sg = this.createTexture(k.Ov));
            null == r.$ && k.ab(k.vl) && (r.$ = this.createTexture(k.vl));
            null == r.ze && k.ab(k.Cl) && (r.ze = this.createTexture(k.Cl));
            null == r.Wk && k.ab(k.zl) && (r.Wk = this.createTexture(k.zl));
            null == r.lc && k.ab(k.Bl) && (r.lc = this.createTexture(k.Bl));
            null == r.Me && k.ab(k.wl) && (r.Me = this.createTexture(k.wl));
            null == r.hj && k.ab(k.Al) && (r.hj = this.createTexture(k.Al));
            null == r.Hc && k.ab(k.ul) && (r.Hc = this.createTexture(k.ul));
            null == r.tb && k.ab(k.$h) && (r.tb = this.createTexture(k.$h),
            8 == F.box && (r.om = this.createTexture(k.yv)));
            null == r.Kj && k.ab(k.pr) && (r.Kj = this.createTexture(k.pr));
            null == r.nd && k.ab(k.nr) && (r.nd = this.createTexture(k.nr));
            null == r.wc && k.ab(k.Fl) && (r.wc = this.createTexture(k.Fl));
            null == r.Fd && k.ab(k.qr) && (r.Fd = this.createTexture(k.qr));
            null == r.oj && k.ab(k.Dl) && (r.oj = this.createTexture(k.Dl));
            null == r.vh && k.ab(k.yl) && (r.vh = this.createTexture(k.yl));
            null == r.Oe && k.ab(k.xl) && (r.Oe = this.createTexture(k.xl));
            null == r.Xe && k.ab(k.ai) && (r.Xe = this.createTexture(k.ai));
            null == r.uc && k.ab(k.El) && (r.uc = this.createTexture(k.El));
            null == r.Pj && k.ab(k.tl) && (r.Pj = this.createTexture(k.tl));
            null == r.yo && (r.yo = this.createTexture([160, 155, 150, 145, 140, 135, 130, 124, 119, 114, 109, 104, 99, 94, 89, 84, 79][a]),
            r.ki = this.createTexture([162, 157, 152, 147, 142, 137, 132, 127, 121, 116, 111, 106, 101, 96, 91, 86, 81][a]),
            r.ds = this.createTexture([164, 159, 154, 149, 144, 139, 134, 129, 123, 118, 113, 108, 103, 98, 93, 88, 83][a]))
        }
        Ta() {
            super.Ta();
            nb.wf = !1;
            switch (this.state) {
            case 0:
                this.ML();
                this.V.show();
                this.Wa = db.instance;
                if (null == this.Wa) {
                    this.na(1);
                    break
                }
                this.sa(this.Wa);
                this.Wa.RB((lb = this.Wa,
                O(lb, lb.ua)));
                this.ku();
                this.na(1);
                break;
            case 4:
                this.MA(!0);
                this.na(1);
                this.buttons[1].selected = !1;
                break;
            case 6:
                this.V.ua(),
                this.V = new na(this),
                this.V.show(),
                this.V.update(.016666666666666666),
                this.Wa.RB((lb = this.Wa,
                O(lb, lb.ua))),
                this.na(1),
                this.buttons[1].selected = !1,
                this.buttons[2].selected = !1,
                this.ku(),
                this.TB(),
                this.kB()
            }
        }
        xL(a) {
            this.Hd.Sc(a - 1).ja().play(ri);
            this.kn++
        }
        pL() {
            this.buttons[1].selected = !0;
            this.buttons[2].selected = !0;
            F.gN(Math.max(F.py(), this.kn));
            this.Wa = this.add(db);
            this.Wa.UA();
            this.node.S(this.Wa.node);
            this.Wa.Vx();
            z.qm(z.Pg);
            this.na(5)
        }
        oL() {
            1 == this.state && (this.wn(),
            this.EM())
        }
        EM() {
            this.wn()
        }
        wn() {
            1 != this.state || this.V.al || (this.V.al = !0,
            this.ku(),
            this.node.S(this.xn.B),
            this.xn.aa(0),
            z.stop(z.Pg),
            this.na(2))
        }
        lB() {
            this.Zi(mc)
        }
        na(a) {
            this.state = a;
            this.time = 0
        }
        ku() {
            let a = this.kn = 0;
            for (; 3 > a; )
                this.Hd.Sc(a++).Yb(Nh)
        }
        kB() {
            this.rh = this.Km = 0;
            this.Gd.O(!0)
        }
        TB() {
            let a = this.Gd.Sc(1);
            a.Fc(100);
            a.Xa("" + F.box + " - " + F.level);
            a.Qh()
        }
        MA(a) {
            this.Hd.O(a);
            this.buttons[1].l.O(a);
            this.buttons[2].l.O(a);
            a && !this.Hq && this.buttons[1].l.O(a);
            this.Cn && (this.buttons[3].l.O(a),
            this.buttons[4].l.O(a))
        }
        update(a) {
            super.update(a);
            this.rh += a;
            switch (this.Km) {
            case 0:
                var b = Math.min(this.rh / .5, 1);
                1 == b && (this.Km = 1,
                this.rh = 0);
                this.Gd.aa(Aa.Jf()(b));
                break;
            case 1:
                1 < this.rh && (this.Km = 2,
                this.rh = 0);
                break;
            case 2:
                b = Math.min(this.rh / .5, 1),
                1 == b && (this.Km = 3,
                this.Gd.O(!1)),
                this.Gd.aa(Aa.Jf()(1 - b))
            }
            switch (this.state) {
            case 1:
                this.JJ();
                this.V.update(a);
                break;
            case 2:
                a = this.xb(.15);
                this.xn.aa(a);
                1 == a && (this.V.ua(),
                this.V = new na(this),
                this.V.show(),
                this.na(3));
                break;
            case 3:
                this.V.update(a);
                a = this.xb(.2);
                this.xn.aa(1 - a);
                1 == a && (this.node.removeChild(this.xn.B),
                this.na(1),
                this.buttons[2].selected = !1,
                this.kB());
                break;
            case 4:
                this.V.update(0);
                break;
            case 5:
                this.V.update(a),
                0 == this.Wa.state && (this.state = 6,
                this.jB())
            }
        }
        pe() {
            if (this.Hq && this.sb(1)) {
                if (1 != this.state) {
                    this.buttons[1].selected = !1;
                    return
                }
                z.Nh(z.Pg, 0);
                this.V.Wy();
                this.MA(!1);
                this.na(4);
                this.yM()
            }
            this.sb(2) && this.DM();
            this.Cn && (this.sb(3) && this.av(this.buttons[3]),
            this.sb(4) && this.bv(this.buttons[4]))
        }
        Yc(a, b) {
            b instanceof sb && (this.si.O(!0),
            1 == a && b instanceof sb && db.instance.ua());
            super.Yc(a, b)
        }
        Nb(a) {
            return a instanceof mc ? 0 : super.Nb(a)
        }
        Ec(a) {
            switch (this.state) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                let b = this.V;
                null != b && b.Ec(a)
            }
            super.Ec(a)
        }
        cb() {
            var a = this.Y.window.Cm()
              , b = this.Y.window.qn;
            let c = 1 < this.da.Td()
              , d = .05 * Math.min(a.w, a.G) * b;
            var e = 80;
            this.Y.Fi && (800 < Math.min(this.da.ta(), this.da.wa()) && (e = 100),
            c && (e = 110));
            d < e && (d = e);
            this.Y.Fi || 50 < d && (d = 50);
            d > .15 * a.G && (d = .15 * a.G);
            b *= 30;
            this.Y.Fi || (e = window.devicePixelRatio,
            3 < e && (e = 3),
            d *= e,
            b *= e);
            e = this.buttons[1];
            this.Hq && (e.l.J(d / e.Zb.y),
            e.fB(a.w - b),
            e.Eq(b));
            this.Hq || (e.o(a.w),
            e.l.O(!1));
            e = this.buttons[2];
            e.l.J(d / e.Zb.y);
            e.fB(this.buttons[1].$a() - 15);
            e.Eq(b);
            this.Cn && (e = this.buttons[3],
            e.l.J(d / e.Zb.y),
            e.o(b),
            e.Eq(b),
            e = this.buttons[4],
            e.l.J(d / e.Zb.y),
            e.o(this.buttons[3].$a() + this.buttons[3].l.ta() + 15),
            e.Eq(b));
            this.Hd.J(d / 100);
            1 < this.da.Td() && !this.Cn ? this.Hd.o(b) : this.Hd.o((a.w - this.Hd.ta()) / 2);
            this.Hd.s(b);
            this.Gd.J(d / 65);
            this.Gd.o(b);
            this.Gd.s(a.G - 1.1 * this.Gd.wa() - b);
            this.Y.Fi && c && (a = this.Gd,
            a.o(a.$a() + 20),
            a = this.Gd,
            a.s(a.Oa - 20))
        }
        yM() {
            this.lB()
        }
        av(a) {
            D.Vc = !D.Vc;
            D.flush();
            a.icon.O(!D.Vc);
            a.selected = !1;
            a.ce = 0;
            this.Y.Ea.ef(D.Vc ? 1 : 0)
        }
        bv(a) {
            D.ye = !D.ye;
            D.flush();
            a.icon.O(!D.ye);
            a.selected = !1;
            a.ce = 0
        }
        DM() {
            this.wn()
        }
        JJ() {
            let a = this.Y.Re()
              , b = this.Y.Em()
              , c = 0
              , d = si;
            for (; c < d.length; ) {
                let f = d[c];
                ++c;
                var e = a.position[f];
                e = new Qa(e.x,e.y);
                let g = b.FJ(f);
                a.Vf(f) && this.V.lO(e, g);
                a.EO(f) && this.V.mO(e, g);
                a.Xh(f) && this.V.nO(e, g)
            }
        }
        jB() {
            this.ad.stars = this.kn;
            this.Zi(Pc)
        }
        Na() {
            return "LevelScene"
        }
    }
    nb.g = !0;
    nb.u = ha;
    Object.assign(nb.prototype, {
        j: nb
    });
    class xd extends nb {
        constructor(a, b) {
            super(a, b)
        }
        lB() {
            this.Zi(Le)
        }
        jB() {
            this.ad.stars = this.kn;
            this.Zi(Me)
        }
        ph() {
            return 0
        }
        Na() {
            return "YouTubeLevelScene"
        }
    }
    xd.g = !0;
    xd.u = nb;
    Object.assign(xd.prototype, {
        j: xd
    });
    class mc extends ha {
        constructor() {
            super()
        }
        Ga() {
            super.Ga();
            this.rc = new ic(null,new E(0,0,0,1));
            this.rc.aa(.5);
            this.node.S(this.rc.B);
            this.eg(550, 550);
            var a = Ha.create(null, l.lw, l.mw, l.PG);
            this.buttons.push(a);
            a.o(133.5);
            a.s(200);
            this.Ca.appendChild(a.l);
            this.sa(a);
            a = Ha.create(null, l.lw, l.mw, l.YG);
            this.buttons.push(a);
            a.o(293.5);
            a.s(200);
            this.Ca.appendChild(a.l);
            this.sa(a);
            this.state = 0;
            this.Y.Ea.ef(0);
            z.stop(z.xj);
            z.stop(z.Pg)
        }
        Yc() {}
        Nb(a) {
            return a instanceof Nb ? super.Nb(a) : 0
        }
        pe() {
            0 == this.state && (this.sb(1) && this.AM(),
            this.sb(2) && this.FM())
        }
        AM() {
            this.hM()
        }
        FM() {
            this.LM()
        }
        LM() {
            this.Y.Ea.ef(D.Vc ? 1 : 0);
            z.Nh(z.Pg, 1);
            this.Xi()
        }
        hM() {
            z.stop(z.Pg);
            this.Wa = this.add(db);
            this.node.S(this.Wa.node);
            this.Wa.UA();
            this.Wa.Vx();
            this.state = 1
        }
        oB() {
            this.ia(Nb)
        }
        update(a) {
            super.update(a);
            switch (this.state) {
            case 1:
                0 == this.Wa.state && (this.Wa.Kw(),
                this.state = 2);
                break;
            case 2:
                0 == this.Wa.state && (this.state = 3,
                this.oB())
            }
        }
        rk() {
            return !1
        }
        Na() {
            return "PauseOverlay"
        }
    }
    mc.g = !0;
    mc.u = ha;
    Object.assign(mc.prototype, {
        j: mc
    });
    class Le extends mc {
        constructor() {
            super()
        }
        oB() {
            this.ia(Yb)
        }
        Na() {
            return "YouTubePauseOverlay"
        }
    }
    Le.g = !0;
    Le.u = mc;
    Object.assign(Le.prototype, {
        j: Le
    });
    class Pc extends ha {
        constructor() {
            super()
        }
        dc() {
            return [k.mf, k.Ad, k.Yf, k.Be, k.$f, k.Xf]
        }
        rk() {
            return !1
        }
        Ga() {
            super.Ga();
            this.fO = [.9, 1, .9];
            this.eg(600, 900);
            var a = this.caller.ad.stars
              , b = this.bp("LEVEL_CLEARED1", "LEVEL_CLEARED2", "LEVEL_CLEARED3", "LEVEL_CLEARED4")[a]
              , c = new wa(this.Ca,r.zc);
            c.Ib(600, 60);
            c.Xa(b);
            c.Xb(0);
            c.Qh();
            c.s(140);
            b = [];
            for (c = 0; 3 > c; )
                ++c,
                b.push(new B(this.Ca,r.Lb,l.hH));
            this.Pb = b;
            b = 0;
            for (c = this.Pb; b < c.length; )
                c[b++].F();
            this.Pb[0].o(180);
            this.Pb[0].s(291);
            this.Pb[1].o(300);
            this.Pb[1].s(273);
            this.Pb[2].o(420);
            this.Pb[2].s(291);
            for (b = 0; 3 > b; )
                c = b++,
                this.Pb[c].aa(0),
                this.Pb[c].J(0);
            for (b = 0; b < a; )
                this.Pb[b++].Yb(l.sw);
            a = new B(this.Ca,r.Lb,l.SG);
            a.o(190);
            a.s(400);
            a = Ha.create(null, l.Dr, l.Er, l.QG);
            a.o(139);
            a.s(640);
            this.Ca.appendChild(a.l);
            this.buttons.push(a);
            this.sa(a);
            a = Ha.create(null, l.Dr, l.Er, l.dH);
            a.o(299);
            a.s(640);
            this.Ca.appendChild(a.l);
            this.buttons.push(a);
            this.sa(a);
            a = Ha.create(null, l.Br, l.Cr, l.XG);
            a.o(188.5);
            a.s(750);
            this.Ca.appendChild(a.l);
            this.buttons.push(a);
            this.sa(a);
            this.state = 0;
            this.time = 1
        }
        Ta() {
            super.Ta();
            this.caller instanceof nb && z.play(z.mG);
            this.caller instanceof Qc && (D.lh = !0,
            D.flush(),
            this.na(5),
            this.time = 0)
        }
        cb() {
            super.cb();
            let a = db.instance;
            null != a && a.layout()
        }
        update(a) {
            super.update(a);
            a = this.state;
            if (3 > a)
                .25 < this.time && (this.Pb[this.state].Ub().alpha(1, .3),
                this.Pb[this.state].Ub().scale(this.fO[this.state], .3, Aa.IH()),
                this.time = 0,
                this.na(this.state + 1));
            else
                switch (a) {
                case 3:
                    if (1 > this.time)
                        break;
                    this.sa(new Nc(this.buttons[3].l,2));
                    this.na(4);
                    break;
                case 5:
                    a = this.xb(.3);
                    this.zm().Hg(1 - a);
                    1 == a && (this.Ox(),
                    db.instance.Kw(),
                    this.na(6));
                    break;
                case 6:
                    0 == db.instance.state && (this.na(7),
                    this.jc())
                }
        }
        Zd(a) {
            this.zm().Hg(a)
        }
        Yc(a) {
            this.zm().Hg(1 - a)
        }
        pe() {
            if (!(4 < this.state)) {
                if (this.sb(1)) {
                    if (!D.lh && F.Ow()) {
                        this.Zi(Qc);
                        return
                    }
                    this.zM()
                }
                this.sb(2) && this.CM();
                this.sb(3) && (!D.lh && F.Ow() ? this.Zi(Qc) : F.fs() ? (this.na(5),
                this.time = 0) : (F.AN(),
                this.fL()))
            }
        }
        fL() {
            this.Xi()
        }
        CM() {
            this.wn()
        }
        zM() {
            this.gM()
        }
        gM() {
            this.na(5);
            this.time = 0
        }
        wn() {
            this.ad.restart = !0;
            this.Xi()
        }
        na(a) {
            this.state = a
        }
        jc() {
            F.fs() ? (this.ad.boxComplete = !0,
            1 == F.Eb ? this.ia(Lb) : 2 == F.Eb ? this.ia(Eb) : 3 == F.Eb && this.ia(Mb)) : this.ia(Nb)
        }
        Na() {
            return "LevelClearedOverlay"
        }
    }
    Pc.g = !0;
    Pc.u = ha;
    Object.assign(Pc.prototype, {
        j: Pc
    });
    class Me extends Pc {
        constructor() {
            super()
        }
        Ga() {
            super.Ga();
            this.OJ()
        }
        na(a) {
            super.na(a);
            let b = this;
            4 == a && Dc.delay(function() {
                function c() {
                    qb.muted || b.Y.Ea.Lh(1);
                    b.MN()
                }
                b.Y.Ea.Lh(0);
                qb.xM(c, c)
            }, 1E3)
        }
        jc() {
            F.fs() ? (this.ad.boxComplete = !0,
            1 == F.Eb ? this.ia(Kc) : 2 == F.Eb ? this.ia(Lc) : 3 == F.Eb && this.ia(Mc)) : this.ia(Yb)
        }
        Na() {
            return "YouTubeLevelClearedOverlay"
        }
    }
    Me.g = !0;
    Me.u = Pc;
    Object.assign(Me.prototype, {
        j: Me
    });
    class jc extends ha {
        constructor() {
            super()
        }
        dc() {
            return [k.mf, k.Ad, k.Yf, k.Zf, k.Be, k.$f, k.ag, k.Xf, k.Wf]
        }
        Ga() {
            super.Ga();
            this.fi();
            this.Ej();
            this.eg(600, 900);
            this.Pl();
            var a = Ha.create(null, l.Br, l.Cr, l.gH);
            a.o(65);
            a.s(303);
            this.Ca.appendChild(a.l);
            this.buttons.push(a);
            this.sa(a);
            a = Ha.create(null, l.Br, l.Cr, l.TG);
            a.o(311.5);
            a.s(303);
            this.Ca.appendChild(a.l);
            this.buttons.push(a);
            this.sa(a);
            this.x = [];
            this.x[1] = new B(this.Ca,r.Lb,l.tw);
            this.x[1].o(65);
            this.x[1].s(303);
            this.x[1].O(!1);
            this.x[2] = new B(this.Ca,r.Lb,l.tw);
            this.x[2].o(311.5);
            this.x[2].s(303);
            this.x[2].O(!1);
            this.Xq(1, D.ye);
            this.Xq(2, D.Vc);
            a = Jb.gm(this.ec("LANGUAGE"));
            a.o(65);
            a.s(420);
            this.Ca.appendChild(a.l);
            this.buttons.push(a);
            this.sa(a);
            a = Jb.gm(this.ec("RESET"));
            a.o(65);
            a.s(537);
            this.Ca.appendChild(a.l);
            this.buttons.push(a);
            this.sa(a)
        }
        Ta() {
            super.Ta();
            this.rn();
            this.Do = D.language;
            this.vt = pg.indexOf(this.Do)
        }
        cb() {
            let a = this.da.Td()
              , b = 0;
            this.Rc.y = 900;
            1.25 < a && (this.Rc.y = 650,
            b = 1 / a * -350);
            super.cb();
            this.Ca.s(this.mg.C + b)
        }
        ae() {
            super.ae();
            if (this.Do != D.language) {
                this.Y.P.fa(r.kh);
                r.Bk[k.Ad] = null;
                r.kh = this.createTexture(k.Ad);
                let a = r.Us(D.language, D.language);
                r.zc = r.kh.children[a];
                r.tm = r.kh.children[a + 1];
                this.Y.uI()
            }
        }
        pe() {
            this.sb(0) && (D.flush(),
            this.jc());
            this.sb(1) && this.bv();
            this.sb(2) && this.av();
            if (this.sb(3)) {
                var a = this.vt + 1;
                let b = pg.length;
                a %= b;
                0 > a && (a += b);
                this.vt = a;
                D.language = pg[this.vt];
                k.Au(D.language);
                a = r.Us(this.Do, D.language);
                r.zc = r.kh.children[a];
                r.tm = r.kh.children[a + 1];
                this.buttons[3].UB();
                this.buttons[4].UB();
                this.buttons[3].selected = !1;
                this.buttons[3].ce = 0;
                this.buttons[3].RA(this.ec("LANGUAGE"));
                this.buttons[4].RA(this.ec("RESET"))
            }
            this.sb(4) && this.mB()
        }
        ia(a) {
            this.Do != D.language && (k.eq(k.Ad),
            k.eq(k.mf));
            super.ia(a)
        }
        mB() {
            this.ia(Rc)
        }
        bv() {
            D.ye = !D.ye;
            this.Xq(1, D.ye);
            this.buttons[1].selected = !1;
            this.buttons[1].ce = 0
        }
        av() {
            D.Vc = !D.Vc;
            D.Vc ? this.Y.Ea.ef(1) : this.Y.Ea.ef(0);
            this.Xq(2, D.Vc);
            this.buttons[2].selected = !1;
            this.buttons[2].ce = 0
        }
        jc() {
            this.ia(Cb)
        }
        Xq(a, b) {
            let c = this.buttons[a]
              , d = c.icon;
            b ? d.yn(null) : d.yn((new Xb).vu(-.5));
            c.icon.aa(b ? 1 : .5);
            this.x[a].O(!b)
        }
        Na() {
            return "OptionsScene"
        }
    }
    jc.g = !0;
    jc.u = ha;
    Object.assign(jc.prototype, {
        j: jc
    });
    class yd extends jc {
        constructor() {
            super()
        }
        jc() {
            this.ia(Ib)
        }
        mB() {
            this.ia(Ne)
        }
        Na() {
            return "YouTubeOptionsScene"
        }
    }
    yd.g = !0;
    yd.u = jc;
    Object.assign(yd.prototype, {
        j: yd
    });
    class Rc extends ha {
        constructor() {
            super()
        }
        dc() {
            return [k.mf, k.Ad, k.Yf, k.Zf, k.Be, k.$f, k.ag, k.Xf]
        }
        Ga() {
            super.Ga();
            this.fi();
            this.Ej();
            this.eg(600, 900);
            this.Pl();
            var a = new wa(this.Ca,r.zc);
            a.o(20);
            a.s(100);
            a.Fc(50);
            a.Mh(!0);
            a.Xb(0);
            a.Ib(560, 200);
            a.Xa(this.ec("RESET_TEXT"));
            a = new wa(this.Ca,r.tm);
            a.Xa(this.ec("RESET_HOLD_TEXT"));
            a.Fc(40);
            a.Mh(!0);
            a.Xb(0);
            a.Ib(560, 100);
            a.o(20);
            a.s(225);
            a = Jb.gm(this.ec("YES"));
            a.o(65);
            a.s(383);
            this.Ca.appendChild(a.l);
            this.buttons.push(a);
            this.sa(a);
            a = Jb.gm(this.ec("NO"));
            a.o(65);
            a.s(500);
            this.Ca.appendChild(a.l);
            this.buttons.push(a);
            this.sa(a);
            this.blink = this.state = 0
        }
        cb() {
            let a = this.da.Td()
              , b = 0;
            this.Rc.y = 900;
            1.25 < a && (this.Rc.y = 650,
            b = 1 / a * -100);
            super.cb();
            this.Ca.s(this.mg.C + b)
        }
        update(a) {
            super.update(a);
            if (2 == this.state)
                .1 > this.time || (this.buttons[1].yu(0 == (this.blink & 1)),
                this.blink++,
                this.time = 0,
                10 == this.blink && (this.state = 3));
            else if (this.Ac.dz(1) && this.Y.Re().up(0))
                switch (this.state) {
                case 0:
                    this.time = 0;
                    this.state = 1;
                    break;
                case 1:
                    3 < this.time && (a = D.language,
                    D.instance.reset(),
                    D.language = a,
                    D.flush(),
                    F.reset(),
                    this.state = 2,
                    this.blink = this.time = 0)
                }
        }
        pe() {
            this.sb(0) && this.jc();
            2 != this.state && this.sb(1) && (this.time = this.state = 0,
            this.buttons[1].selected = !1,
            this.buttons[1].ce = 0);
            this.sb(2) && this.jc()
        }
        jc() {
            this.ia(jc)
        }
        Na() {
            return "ResetScene"
        }
    }
    Rc.g = !0;
    Rc.u = ha;
    Object.assign(Rc.prototype, {
        j: Rc
    });
    class Ne extends Rc {
        constructor() {
            super()
        }
        jc() {
            this.ia(yd)
        }
        Na() {
            return "YouTubeResetScene"
        }
    }
    Ne.g = !0;
    Ne.u = Rc;
    Object.assign(Ne.prototype, {
        j: Ne
    });
    class vg {
        constructor(a) {
            let b = new ja("^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$","");
            if (b.match(a))
                this.TK = Ga.parseInt(b.Dc(1)),
                this.aL = Ga.parseInt(b.Dc(2)),
                this.Qp = Ga.parseInt(b.Dc(3)),
                this.mA = b.Dc(4),
                this.ix = b.Dc(5);
            else
                throw 23;
        }
        toString() {
            let a = this.TK + "." + this.aL + "." + this.Qp;
            null != this.mA && (a += "-" + this.mA);
            null != this.ix && (a += "+" + this.ix);
            return a
        }
    }
    vg.g = !0;
    Object.assign(vg.prototype, {
        j: vg
    });
    class od {
    }
    od.g = !0;
    class ng {
        constructor(a, b, c, d, e, f, g, h, m, n, q, p, v, u, y, A, x, H, C, Y, X, S) {
            this.Ey = !1;
            this.mz = !0;
            this.Xu = !1;
            this.Tx = this.Uw = this.audio = this.ZB = this.transition = this.Ty = !0;
            this.yB = !1;
            this.Tw = this.fu = null;
            this.ln = 4;
            this.os = null;
            this.Uy = 1;
            this.language = "en";
            this.title = a;
            this.Gm = b;
            null != c && (this.language = c);
            null != d && (this.Uy = d);
            null != e && (this.os = e);
            null != f && (this.ln = f);
            null != g && (this.Tw = g);
            null != h && (this.fu = h);
            null != m && (this.yB = m);
            null != n && (this.Tx = n);
            null != q && (this.Uw = q);
            null != p && (this.audio = p);
            null != v && (this.ZB = v);
            null != u && (this.transition = u);
            null != y && (this.Ty = y);
            null != C && (this.Xu = C);
            null != X && (this.mz = X);
            null != S && (this.Ey = S)
        }
    }
    ng.g = !0;
    Object.assign(ng.prototype, {
        j: ng
    });
    class hg {
        constructor() {
            this.current = 60;
            let a = []
              , b = 0;
            for (; 60 > b; )
                ++b,
                a.push(0);
            this.values = a;
            this.time = this.Ot = 0
        }
        update(a) {
            this.time += a;
            1 < this.time && (this.current = Math.min(this.Ot, 60),
            this.values[this.current - 1]++,
            this.Ot = 0,
            --this.time);
            this.Ot++
        }
    }
    hg.g = !0;
    Object.assign(hg.prototype, {
        j: hg
    });
    class jg {
        constructor(a, b) {
            this.bd = a;
            this.be = b
        }
        cp() {
            if (0 == this.be.length)
                return 100;
            let a = Math.round(100 * this.bd.Am(this.be));
            this.Di() && --a;
            0 > a && (a = 0);
            return a
        }
        $s() {
            return 0 != this.be.length ? 1 == this.bd.Am() ? !this.Di() : !1 : !0
        }
        Di() {
            let a = 0
              , b = this.be;
            for (; a < b.length; )
                if (!k.ab(k.zf(b[a++])))
                    return !0;
            return !1
        }
    }
    jg.g = !0;
    Object.assign(jg.prototype, {
        j: jg
    });
    class qe {
        constructor(a) {
            this.key = a
        }
        load(a) {
            try {
                let b = sh.ty().getItem(this.key);
                null != a && a(b);
                return b
            } catch (b) {
                return null != a && a(null),
                null
            }
        }
        save(a, b) {
            try {
                sh.ty().setItem(this.key, a),
                null != b && b(!0)
            } catch (c) {
                null != b && b(!1)
            }
        }
    }
    qe.g = !0;
    qe.ob = [ud];
    Object.assign(qe.prototype, {
        j: qe
    });
    class ug {
        constructor(a, b, c, d) {
            this.sender = a;
            this.type = b;
            this.$ = c;
            this.data = d
        }
    }
    ug.g = !0;
    Object.assign(ug.prototype, {
        j: ug
    });
    class th {
        constructor(a, b, c) {
            this.type = a;
            this.ng = b;
            this.once = c;
            this.next = null
        }
    }
    th.g = !0;
    Object.assign(th.prototype, {
        j: th
    });
    class tg {
        constructor(a) {
            this.top = 0;
            this.stack = [];
            this.push(a)
        }
        bb() {
            return 0 < this.top
        }
        next() {
            let a = this.stack[--this.top];
            this.push(a);
            return a
        }
        push(a) {
            for (a = a.od; null != a; )
                this.stack[this.top++] = a,
                a = a.U
        }
    }
    tg.g = !0;
    Object.assign(tg.prototype, {
        j: tg
    });
    class Ya {
        constructor(a, b, c, d) {
            this.r = a;
            this.Sd = b;
            this.b = c;
            this.a = d
        }
        rb() {
            return new Ya(this.r,this.Sd,this.b,this.a)
        }
    }
    Ya.g = !0;
    Object.assign(Ya.prototype, {
        j: Ya
    });
    class P {
        constructor(a, b, c, d) {
            this.x = a;
            this.y = b;
            this.w = c;
            this.G = d
        }
        static rb(a) {
            return new P(a.x,a.y,a.w,a.G)
        }
        static el(a) {
            return new P(.4 * a.x,.4 * a.y,.4 * a.w,.4 * a.G)
        }
        static cu(a, b, c, d, e, f, g, h) {
            return !(a > g || c < e || b > h || d < f)
        }
        static Vi(a, b, c, d, e, f) {
            return a >= c && a < c + e && b >= d ? b < d + f : !1
        }
        static ir(a, b, c, d, e) {
            return (e.x < a ? P.Fv : 0) + (e.x > c ? P.Gv : 0) + (e.y < b ? P.Ev : 0) + (e.y > d ? P.Hv : 0)
        }
        static Ji(a, b, c, d, e, f, g, h) {
            let m = new t(a,b), n = new t(c,d), q;
            g = e + g;
            let p = f + h
              , v = P.ir(e, f, g, p, m)
              , u = P.ir(e, f, g, p, n);
            for (; 0 != v || 0 != u; ) {
                if (0 != (v & u))
                    return !1;
                0 != v ? (h = v,
                q = m) : (h = u,
                q = n);
                0 < (h & P.Fv) ? (q.y += (b - d) * (e - q.x) / (a - c),
                q.x = e) : 0 != (h & P.Gv) && (q.y += (b - d) * (g - q.x) / (a - c),
                q.x = g);
                0 < (h & P.Ev) ? (q.x += (a - c) * (f - q.y) / (b - d),
                q.y = f) : 0 != (h & P.Hv) && (q.x += (a - c) * (p - q.y) / (b - d),
                q.y = p);
                h == v ? v = P.ir(e, f, g, p, m) : u = P.ir(e, f, g, p, n)
            }
            return !0
        }
    }
    P.g = !0;
    Object.assign(P.prototype, {
        j: P
    });
    class oe extends Gc {
        constructor() {
            super(null)
        }
        stringify() {
            return ""
        }
        parse() {}
        reset() {}
        xm() {
            return 1
        }
        Qp() {}
    }
    oe.g = !0;
    oe.u = Gc;
    Object.assign(oe.prototype, {
        j: oe
    });
    class fc extends fa {
        constructor(a) {
            super();
            this.Y = a;
            this.ad = {};
            this.back = new mb;
            this.xa = new mb;
            this.fb = new Bd
        }
        ta() {
            return this.Y.window.oh().x
        }
        wa() {
            return this.Y.window.oh().y
        }
        Dy() {
            return this.Y.window.oh()
        }
        Zs() {
            let a = this.Y.window.oh();
            return new W(0,0,a.x,a.y)
        }
        Td() {
            return this.Y.window.um()
        }
        update(a) {
            this.fb.kb(new E(this.ta(),this.wa(),0,1));
            this.Y.P.dj(this.fb);
            this.back.Kg(a);
            super.update(a);
            this.xa.Kg(a)
        }
        Ec(a) {
            let b = this.Y.P;
            this.fb.kb(new E(this.ta(),this.wa(),0,1));
            b.dj(this.fb);
            this.back.hd();
            this.back.nl();
            b.Ko(this.back);
            super.Ec(a);
            this.xa.hd();
            this.xa.nl();
            b.Ko(this.xa)
        }
        io(a, b, c) {
            function d() {
                if (c)
                    return b.Xc.sa(new Zb(e)),
                    g.sa(new Cd(b,e));
                let h = new Zb(e);
                g.sa(h);
                return null == f ? g.sa(new Dd(e)) : g.sa(new Oe(b,e))
            }
            let e = rh.Bx(a);
            e.da = this;
            e.Y = this.Y;
            e.caller = b;
            null == b && (e.ad = this.ad);
            let f = this.VI()
              , g = this;
            if (0 < e.wy().length) {
                a = e.qy(d);
                a.da = this;
                a.Y = this.Y;
                let h = new Zb(a);
                null == f ? (this.sa(h),
                this.sa(new Dd(a))) : (b.Xc.sa(h),
                this.sa(new Cd(b,a)))
            } else
                d()
        }
        Xi(a) {
            null == (a.Xc.parent instanceof fc ? null : a.Xc.parent) ? this.sa(new Pe(a)) : (a.Xc.parent.bf.caller = a,
            this.sa(new Ed(a)))
        }
        VI() {
            let a = this.od;
            for (; null != a; ) {
                if (a instanceof Zb)
                    return a;
                a = a.U
            }
            return null
        }
    }
    fc.g = !0;
    fc.u = fa;
    Object.assign(fc.prototype, {
        j: fc
    });
    class Bb {
        constructor() {
            this.Tg = Bb.vj;
            this.elapsedTime = 0;
            this.Yu = 1
        }
    }
    Bb.g = !0;
    Object.assign(Bb.prototype, {
        j: Bb
    });
    class ig {
        constructor() {
            this.elapsedTime = 0;
            this.oq = !1;
            this.handle = -1;
            this.now = 0;
            this.Is = !0;
            this.startTime = 0
        }
        Mf() {}
        start() {
            if (!this.oq) {
                this.stop();
                this.oq = !0;
                var a = null
                  , b = (lb = window,
                O(lb, lb.requestAnimationFrame))
                  , c = this;
                a = function(d) {
                    c.handle = b(a);
                    if (c.Is)
                        c.startTime = d,
                        c.now = d,
                        c.Is = !1;
                    else {
                        let e = d - c.now;
                        c.now = d;
                        c.elapsedTime = (d - c.startTime) / 1E3;
                        c.Mf(e / 1E3)
                    }
                }
                ;
                this.handle = b(a)
            }
        }
        stop() {
            this.oq && (this.Is = !0,
            0 > this.handle || (window.cancelAnimationFrame(this.handle),
            this.handle = -1,
            this.oq = !1))
        }
    }
    ig.g = !0;
    Object.assign(ig.prototype, {
        j: ig
    });
    class t {
        constructor(a, b) {
            this.x = a;
            this.y = b
        }
        add(a) {
            this.x += a.x;
            this.y += a.y
        }
        Su(a) {
            this.x -= a.x;
            this.y -= a.y
        }
        multiply(a) {
            this.x *= a;
            this.y *= a
        }
        Ix(a) {
            this.x /= a;
            this.y /= a
        }
        Le(a) {
            let b = this.x - a.x;
            a = this.y - a.y;
            return Math.sqrt(b * b + a * a)
        }
        pc() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }
        ym() {
            return this.x * this.x + this.y * this.y
        }
        lK() {
            return 0 == this.x ? 0 == this.y : !1
        }
        NI(a) {
            return this.x == a.x ? this.y == a.y : !1
        }
        normalize() {
            this.multiply(1 / this.pc())
        }
        angle() {
            return Math.atan(this.y / this.x)
        }
        Mk() {
            return Math.atan2(this.y, this.x)
        }
        rb() {
            return new t(this.x,this.y)
        }
        wb(a) {
            this.x = a.x;
            this.y = a.y
        }
        rotate(a) {
            let b = Math.cos(a);
            a = Math.sin(a);
            let c = this.x * a + this.y * b;
            this.x = this.x * b - this.y * a;
            this.y = c;
            return this
        }
        Sa(a, b, c) {
            this.x -= b;
            this.y -= c;
            this.rotate(a);
            this.x += b;
            this.y += c
        }
        static Wb() {
            return new t(0,0)
        }
        static dL() {
            return new t(2147483647,2147483647)
        }
        static zb(a, b) {
            return new t(a.x + b.x,a.y + b.y)
        }
        static Ua(a, b) {
            return new t(a.x - b.x,a.y - b.y)
        }
        static ld(a, b) {
            return new t(a.x * b,a.y * b)
        }
        static co(a, b) {
            return new t(a.x / b,a.y / b)
        }
        static kd(a, b, c, d) {
            a -= c;
            b -= d;
            return Math.sqrt(a * a + b * b)
        }
        static Bw(a, b) {
            return a.x * b.x + a.y * b.y
        }
        static Ew(a) {
            return new t(-a.y,a.x)
        }
        static rH(a) {
            return new t(a.y,-a.x)
        }
        static eo(a) {
            return t.ld(a, 1 / a.pc())
        }
        static SH(a, b) {
            let c = new t(0,0);
            t.IA(a, b, c);
            return c
        }
        static IA(a, b, c) {
            var d = a.length;
            if (1 >= d)
                c.x = c.y = 0;
            else {
                for (var e = t.sH, f = t.tH, g = 1 - b, h = 0; h < d; ) {
                    let m = h++
                      , n = a[m];
                    e[m] = n.x;
                    f[m] = n.y
                }
                for (a = d - 1; 0 < a; ) {
                    d = 0;
                    for (h = 1; d < a; )
                        e[d] = e[d] * g + e[h] * b,
                        f[d] = f[d] * g + f[h] * b,
                        ++d,
                        ++h;
                    --a
                }
                c.x = e[0];
                c.y = f[0]
            }
        }
        static $I(a) {
            return new t(Math.cos(a),Math.sin(a))
        }
    }
    t.g = !0;
    Object.assign(t.prototype, {
        j: t
    });
    class mg {
        constructor(a) {
            let b = window.document.createElement("div");
            window.document.body.appendChild(b);
            b.innerText = od.VERSION.toString();
            let c = b.style;
            c.fontFamily = "sans-serif";
            c.fontSize = "10px";
            c.color = a;
            c.position = "absolute";
            c.bottom = "0";
            c.padding = "1px";
            c.userSelect = "none";
            c.setProperty("-webkit-user-select", "none");
            setTimeout(function() {
                window.document.body.removeChild(b)
            }, 1E4)
        }
    }
    mg.g = !0;
    Object.assign(mg.prototype, {
        j: mg
    });
    class Ic extends hc {
        constructor(a, b) {
            super();
            this.Ok = b;
            this.bL = a.wy();
            this.zk = this.Y.load(this.bL)
        }
        cp() {
            return this.zk.cp()
        }
        update(a) {
            super.update(a);
            this.zk.$s() && "Running" == this.xe && this.Eu()
        }
        rk() {
            return !1
        }
        Eu() {
            this.da.sa(new Ed(this,!1,this.Ok))
        }
        Na() {
            return "LoadingOverlay"
        }
    }
    Ic.g = !0;
    Ic.u = hc;
    Object.assign(Ic.prototype, {
        j: Ic
    });
    class Zb extends fa {
        constructor(a) {
            super();
            this.bf = a;
            a.Xc = this;
            a.Kz = !0;
            a.Jz = !0;
            this.sa(a)
        }
        update(a) {
            switch (this.bf.xe) {
            case "Paused":
            case "Running":
            case "Started":
                break;
            default:
                return
            }
            this.Y.window.mu && this.bf.cb();
            this.bf.update(a);
            super.update(a)
        }
        Ec(a) {
            if (this.bf.lv)
                switch (this.bf.xe) {
                case "Paused":
                case "Running":
                case "Started":
                    this.bf.Ec(a)
                }
            super.Ec(a)
        }
        on(a) {
            if (a.$ && this.parent instanceof Zb)
                this.parent.bf.on(a)
        }
    }
    Zb.g = !0;
    Zb.u = fa;
    Object.assign(Zb.prototype, {
        j: Zb
    });
    class eb extends fa {
        constructor(a, b) {
            super();
            this.a = a;
            this.b = b;
            this.state = 0
        }
        aJ(a, b) {
            for (a = a.Xc.parent; null != a && !(a instanceof fc); )
                b(a.bf),
                a = a.parent
        }
        gk(a) {
            if (a.Xc.parent == a.da)
                return a;
            let b = a.Xc.parent;
            for (; null != b; ) {
                if (b.parent == a.da)
                    return b.bf;
                b = b.parent
            }
            return null
        }
        ph(a) {
            return a.Y.config.ZB ? a.ph() : 0
        }
        Nb(a, b) {
            return a.Y.config.transition ? a.Nb(b) : 0
        }
        na(a) {
            this.state = a;
            this.time = 0
        }
    }
    eb.g = !0;
    eb.u = fa;
    Object.assign(eb.prototype, {
        j: eb
    });
    class Oe extends eb {
        constructor(a, b) {
            super(a, b);
            "Running" == a.xe && (a.eb("Paused"),
            a.Ti());
            this.gk(a).Yc(0, b)
        }
        update(a) {
            super.update(a);
            switch (this.state) {
            case 0:
                a = this.xb(this.Nb(this.a, this.b) / 2);
                this.gk(this.a).Yc(a, this.b);
                1 == a && this.na(1);
                break;
            case 1:
                this.a.eb("Stopped");
                this.a.ae();
                this.aJ(this.a, function(b) {
                    "Stopped" != b.xe && (b.eb("Stopped"),
                    b.ae())
                });
                this.b.eb("Created");
                this.b.Ga();
                this.b.cb();
                this.na(2);
                break;
            case 2:
                if (this.time < this.ph(this.b))
                    break;
                this.b.eb("Started");
                this.b.Pk();
                this.b.Zd(0, this.a);
                this.na(3);
                break;
            case 3:
                a = this.xb(this.Nb(this.a, this.b) / 2),
                this.b.Zd(a, this.a),
                1 > a || (this.b.eb("Running"),
                this.b.Ta(),
                this.gk(this.a).Xc.ua(),
                this.ua())
            }
        }
    }
    Oe.g = !0;
    Oe.u = eb;
    Object.assign(Oe.prototype, {
        j: Oe
    });
    class wg extends eb {
        constructor(a, b) {
            super(a, b);
            b.eb("Created");
            b.Ga();
            b.cb()
        }
        update(a) {
            super.update(a);
            switch (this.state) {
            case 0:
                if (this.time < this.ph(this.b))
                    break;
                this.a.eb("Paused");
                this.a.Ti();
                for (a = this.a; null != a.parent && a.parent != this.a.da; )
                    a = a.parent;
                this.gk(this.a).Yc(1, this.b);
                this.b.eb("Started");
                this.b.Pk();
                this.b.Zd(0, this.a);
                this.time = 0;
                this.state = 1;
                break;
            case 1:
                if (a = this.xb(this.Nb(this.a, this.b)),
                this.gk(this.a).Yc(a, this.b),
                this.b.Zd(a, this.a),
                1 == a) {
                    this.a.eb("Stopped");
                    this.a.ae();
                    for (a = this.a; null != a.parent && a.parent != this.a.da; )
                        "Stopped" != a.xe && (a.eb("Stopped"),
                        a.ae()),
                        a = a.parent;
                    this.gk(this.a).ua();
                    this.b.eb("Running");
                    this.b.Ta();
                    this.ua()
                }
            }
        }
    }
    wg.g = !0;
    wg.u = eb;
    Object.assign(wg.prototype, {
        j: wg
    });
    class Pe extends eb {
        constructor(a) {
            super(a, null);
            a.eb("Paused");
            a.Ti();
            a.Yc(1, null)
        }
        update() {
            let a = this.xb(this.Nb(this.a, this.b));
            this.a.Yc(a, this.b);
            1 > a || (this.a.eb("Stopped"),
            this.a.ae(),
            this.a.ua(),
            this.ua())
        }
    }
    Pe.g = !0;
    Pe.u = eb;
    Object.assign(Pe.prototype, {
        j: Pe
    });
    class Ed extends eb {
        constructor(a, b, c) {
            null == b && (b = !0);
            let d = a.wJ();
            super(a, d);
            this.KM = b;
            this.zh = c;
            a.eb("Paused");
            a.Ti();
            a.Yc(0, d)
        }
        update(a) {
            super.update(a);
            a = this.xb(this.Nb(this.a, this.b));
            this.a.Yc(a, this.b);
            1 == a && (this.a.eb("Stopped"),
            this.a.ae(),
            this.a.Xc.ua(),
            this.KM && ("Stopped" == this.b.xe && this.b.eb("Restarted"),
            this.b.eb("Running"),
            this.b.Ta()),
            this.ua(),
            null != this.zh && (this.zh(),
            this.zh = null))
        }
    }
    Ed.g = !0;
    Ed.u = eb;
    Object.assign(Ed.prototype, {
        j: Ed
    });
    class Cd extends eb {
        constructor(a, b) {
            super(a, b);
            b.eb("Created");
            b.Ga();
            b.cb()
        }
        update(a) {
            super.update(a);
            switch (this.state) {
            case 0:
                if (this.time < this.ph(this.b))
                    break;
                "Running" == this.a.xe && (this.a.eb("Paused"),
                this.a.Ti());
                this.b.eb("Started");
                this.b.Pk();
                this.b.Zd(0, this.a);
                this.na(1);
                break;
            case 1:
                a = this.xb(this.Nb(this.a, this.b)),
                this.b.Zd(a, this.a),
                1 > a || (this.b.rk() && (this.a.eb("Stopped"),
                this.a.ae()),
                this.b.eb("Running"),
                this.b.Ta(),
                this.ua())
            }
        }
    }
    Cd.g = !0;
    Cd.u = eb;
    Object.assign(Cd.prototype, {
        j: Cd
    });
    class Dd extends eb {
        constructor(a) {
            super(null, a);
            a.eb("Created");
            a.Ga();
            a.cb()
        }
        update() {
            switch (this.state) {
            case 0:
                if (this.time < this.ph(this.b))
                    break;
                this.b.eb("Started");
                this.b.Pk();
                this.b.Zd(0, this.a);
                this.na(1);
                break;
            case 1:
                let a = this.xb(this.Nb(this.b, this.a));
                this.b.Zd(a, this.a);
                1 > a || (this.b.eb("Running"),
                this.b.Ta(),
                this.ua())
            }
        }
    }
    Dd.g = !0;
    Dd.u = eb;
    Object.assign(Dd.prototype, {
        j: Dd
    });
    class Ad {
        constructor(a, b, c) {
            this.Uc = null;
            this.bl = !1;
            if (null != c) {
                this.hc = a;
                this.Cc = b;
                a = this.K = Array(this.hc * this.Cc);
                b = 0;
                let d = this.hc * this.Cc;
                for (; b < d; ) {
                    let e = b++;
                    a[e] = c[e]
                }
            } else
                this.hc = a,
                this.Cc = b,
                this.K = Array(this.hc * this.Cc)
        }
        forEach(a) {
            let b = this.K
              , c = this.hc
              , d = 0
              , e = this.hc * this.Cc;
            for (; d < e; ) {
                let f = d++;
                b[f] = a(b[f], f % c, f / c | 0)
            }
            return this
        }
        uh(a) {
            let b = this.K
              , c = 0
              , d = this.hc * this.Cc;
            for (; c < d; )
                a(b[c++]);
            return this
        }
        resize(a, b) {
            if (a == this.hc && b == this.Cc)
                return this;
            let c = this.K;
            this.K = Array(a * b);
            if (a == this.hc)
                return Db.Wl(c, 0, this.K, this.hc * (b < this.Cc ? b : this.Cc)),
                this.hc = a,
                this.Cc = b,
                this;
            let d = a < this.hc ? a : this.hc, e;
            let f = this.K
              , g = 0
              , h = b < this.Cc ? b : this.Cc;
            for (; g < h; ) {
                var m = g++;
                e = m * a;
                m *= this.hc;
                let n = 0
                  , q = d;
                for (; n < q; ) {
                    let p = n++;
                    f[e + p] = c[m + p]
                }
            }
            this.hc = a;
            this.Cc = b;
            return this
        }
        iterator() {
            if (this.bl) {
                if (null == this.Uc)
                    this.Uc = new Fd(this);
                else {
                    let a = this.Uc;
                    a.K = a.Xd.K;
                    let b = a.Xd;
                    a.Ff = b.hc * b.Cc;
                    a.Wd = 0
                }
                return this.Uc
            }
            return new Fd(this)
        }
    }
    Ad.g = !0;
    Ad.ob = [Hc];
    Object.assign(Ad.prototype, {
        j: Ad
    });
    class Sc {
    }
    Sc.g = !0;
    Sc.ke = !0;
    Object.assign(Sc.prototype, {
        j: Sc
    });
    class Fd {
        constructor(a) {
            this.Xd = a;
            this.K = this.Xd.K;
            a = this.Xd;
            this.Ff = a.hc * a.Cc;
            this.Wd = 0
        }
        bb() {
            return this.Wd < this.Ff
        }
        next() {
            return this.K[this.Wd++]
        }
    }
    Fd.g = !0;
    Fd.ob = [Sc];
    Object.assign(Fd.prototype, {
        j: Fd
    });
    class vd {
        constructor(a) {
            this.Xd = a;
            this.K = this.Xd.K;
            this.Ff = this.Xd.Z;
            this.Wd = 0
        }
        Ms() {
            this.K = this.Xd = null
        }
        bb() {
            return this.Wd < this.Ff
        }
        next() {
            return this.K[this.Wd++]
        }
    }
    vd.g = !0;
    vd.ob = [Sc];
    Object.assign(vd.prototype, {
        j: vd
    });
    class xg {
    }
    xg.g = !0;
    xg.ke = !0;
    xg.ob = [Hc];
    class yg {
    }
    yg.g = !0;
    yg.ke = !0;
    yg.ob = [Hc];
    class $b {
        constructor(a, b, c) {
            null == a && (a = 16);
            this.za = 0;
            this.Ai = -2;
            this.Ka = this.Ck = 1 > a ? 1 : a;
            if (null != b) {
                a = this.za = b.length;
                var d = this.Ka;
                this.Ka = a > d ? a : d
            }
            this.K = Array(this.Ka);
            if (null != b) {
                a = this.K;
                d = 0;
                let e = this.za;
                for (; d < e; ) {
                    let f = d++;
                    a[f] = b[f]
                }
            }
            c && (this.Ai = 0)
        }
        af(a) {
            a > this.Ka && (this.Ka = a,
            this.Jh(a))
        }
        top() {
            return this.K[this.za - 1]
        }
        clear(a) {
            null == a && (a = !1);
            a && Db.Gp(this.K);
            this.za = 0
        }
        grow() {
            this.Ka = sg.em(this.Ai, this.Ka);
            this.Jh(this.Ka)
        }
        Jh(a) {
            a = Array(a);
            Db.Wl(this.K, 0, a, this.za);
            this.K = a
        }
    }
    $b.g = !0;
    $b.ob = [yg];
    Object.assign($b.prototype, {
        j: $b
    });
    class Qe {
        static next() {
            null == Qe.Aw && (Qe.Aw = 0);
            return Qe.Aw++
        }
    }
    Qe.g = !0;
    class Re {
    }
    Re.g = !0;
    Re.ke = !0;
    Object.assign(Re.prototype, {
        j: Re
    });
    class Se {
        constructor(a, b, c) {
            null == b && (b = !1);
            null == a && (a = 1);
            this.Uc = null;
            this.Z = 0;
            this.bl = !1;
            this.Ai = -2;
            this.Ck = 1 > a ? 1 : a;
            this.Ka = a;
            this.Ef = b;
            null != c && (a = this.Z = c.length,
            b = this.Ka,
            this.Ka = a > b ? a : b);
            this.K = Array(this.Ka + 1);
            this.K[0] = null;
            if (null != c) {
                a = this.K;
                b = 1;
                let d = this.Z + 1;
                for (; b < d; ) {
                    let e = b++;
                    a[e] = c[e - 1]
                }
                this.uM()
            }
        }
        enqueue(a) {
            this.Z == this.Ka && this.grow();
            this.K[++this.Z] = a;
            a = a.i = this.Z;
            let b = this.K
              , c = a >> 1
              , d = b[a]
              , e = d.priority;
            if (this.Ef)
                for (; 0 < c; ) {
                    var f = b[c];
                    if (0 > e - f.priority)
                        b[a] = f,
                        f.i = a,
                        a = c,
                        c >>= 1;
                    else
                        break
                }
            else
                for (; 0 < c; )
                    if (f = b[c],
                    0 < e - f.priority)
                        b[a] = f,
                        f.i = a,
                        a = c,
                        c >>= 1;
                    else
                        break;
            b[a] = d;
            d.i = a
        }
        qI() {
            var a = this.K;
            let b = a[1];
            b.i = -1;
            a[1] = a[this.Z];
            a = 1;
            let c = this.K, d = 2, e, f = c[1], g = f.priority;
            if (this.Ef)
                for (; d < this.Z; )
                    if (d < this.Z - 1 && 0 < c[d].priority - c[d + 1].priority && ++d,
                    e = c[d],
                    0 < g - e.priority)
                        c[a] = e,
                        e.i = a,
                        a = f.i = d,
                        d <<= 1;
                    else
                        break;
            else
                for (; d < this.Z; )
                    if (d < this.Z - 1 && 0 > c[d].priority - c[d + 1].priority && ++d,
                    e = c[d],
                    0 > g - e.priority)
                        c[a] = e,
                        e.i = a,
                        a = f.i = d,
                        d <<= 1;
                    else
                        break;
            c[a] = f;
            f.i = a;
            this.Z--;
            return b
        }
        wM(a, b) {
            var c = a.priority;
            if (c != b)
                if (a.priority = b,
                a = a.i,
                this.Ef)
                    if (b < c) {
                        b = a;
                        c = this.K;
                        var d = a >> 1;
                        a = c[a];
                        var e = a.priority;
                        if (this.Ef)
                            for (; 0 < d; ) {
                                var f = c[d];
                                if (0 > e - f.priority)
                                    c[b] = f,
                                    f.i = b,
                                    b = d,
                                    d >>= 1;
                                else
                                    break
                            }
                        else
                            for (; 0 < d; )
                                if (f = c[d],
                                0 < e - f.priority)
                                    c[b] = f,
                                    f.i = b,
                                    b = d,
                                    d >>= 1;
                                else
                                    break;
                        c[b] = a;
                        a.i = b
                    } else {
                        b = a;
                        c = this.K;
                        d = a << 1;
                        e = c[a];
                        f = e.priority;
                        if (this.Ef)
                            for (; d < this.Z; )
                                if (d < this.Z - 1 && 0 < c[d].priority - c[d + 1].priority && ++d,
                                a = c[d],
                                0 < f - a.priority)
                                    c[b] = a,
                                    a.i = b,
                                    b = e.i = d,
                                    d <<= 1;
                                else
                                    break;
                        else
                            for (; d < this.Z; )
                                if (d < this.Z - 1 && 0 > c[d].priority - c[d + 1].priority && ++d,
                                a = c[d],
                                0 > f - a.priority)
                                    c[b] = a,
                                    a.i = b,
                                    b = e.i = d,
                                    d <<= 1;
                                else
                                    break;
                        c[b] = e;
                        e.i = b;
                        a = this.Z;
                        b = this.K;
                        c = a >> 1;
                        d = b[a];
                        e = d.priority;
                        if (this.Ef)
                            for (; 0 < c; )
                                if (f = b[c],
                                0 > e - f.priority)
                                    b[a] = f,
                                    f.i = a,
                                    a = c,
                                    c >>= 1;
                                else
                                    break;
                        else
                            for (; 0 < c; )
                                if (f = b[c],
                                0 < e - f.priority)
                                    b[a] = f,
                                    f.i = a,
                                    a = c,
                                    c >>= 1;
                                else
                                    break;
                        b[a] = d;
                        d.i = a
                    }
                else if (b > c) {
                    b = a;
                    c = this.K;
                    d = a >> 1;
                    a = c[a];
                    e = a.priority;
                    if (this.Ef)
                        for (; 0 < d; )
                            if (f = c[d],
                            0 > e - f.priority)
                                c[b] = f,
                                f.i = b,
                                b = d,
                                d >>= 1;
                            else
                                break;
                    else
                        for (; 0 < d; )
                            if (f = c[d],
                            0 < e - f.priority)
                                c[b] = f,
                                f.i = b,
                                b = d,
                                d >>= 1;
                            else
                                break;
                    c[b] = a;
                    a.i = b
                } else {
                    b = a;
                    c = this.K;
                    d = a << 1;
                    e = c[a];
                    f = e.priority;
                    if (this.Ef)
                        for (; d < this.Z; )
                            if (d < this.Z - 1 && 0 < c[d].priority - c[d + 1].priority && ++d,
                            a = c[d],
                            0 < f - a.priority)
                                c[b] = a,
                                a.i = b,
                                b = e.i = d,
                                d <<= 1;
                            else
                                break;
                    else
                        for (; d < this.Z; )
                            if (d < this.Z - 1 && 0 > c[d].priority - c[d + 1].priority && ++d,
                            a = c[d],
                            0 > f - a.priority)
                                c[b] = a,
                                a.i = b,
                                b = e.i = d,
                                d <<= 1;
                            else
                                break;
                    c[b] = e;
                    e.i = b;
                    a = this.Z;
                    b = this.K;
                    c = a >> 1;
                    d = b[a];
                    e = d.priority;
                    if (this.Ef)
                        for (; 0 < c; )
                            if (f = b[c],
                            0 > e - f.priority)
                                b[a] = f,
                                f.i = a,
                                a = c,
                                c >>= 1;
                            else
                                break;
                    else
                        for (; 0 < c; )
                            if (f = b[c],
                            0 < e - f.priority)
                                b[a] = f,
                                f.i = a,
                                a = c,
                                c >>= 1;
                            else
                                break;
                    b[a] = d;
                    d.i = a
                }
        }
        clear(a) {
            null == a && (a = !1);
            a && Db.Gp(this.K);
            this.Z = 0
        }
        iterator() {
            if (this.bl) {
                if (null == this.Uc)
                    return new Gd(this);
                this.Uc.reset();
                return this.Uc
            }
            return new Gd(this)
        }
        uM() {
            let a = this.Z >> 1;
            for (; 1 <= a; )
                this.My(a, this.Z),
                --a
        }
        My(a, b) {
            let c = this.K;
            var d = a << 1
              , e = d + 1;
            let f = a;
            this.Ef ? (d <= b && 0 > c[d].priority - c[a].priority && (f = d),
            d + 1 <= b && 0 > c[d + 1].priority - c[f].priority && (f = e)) : (d <= b && 0 < c[d].priority - c[a].priority && (f = d),
            d + 1 <= b && 0 < c[d + 1].priority - c[f].priority && (f = e));
            f != a && (d = c[f],
            e = c[a],
            c[f] = e,
            c[a] = d,
            a = d.i,
            d.i = e.i,
            e.i = a,
            this.My(f, b))
        }
        grow() {
            this.Ka = sg.em(this.Ai, this.Ka);
            this.Jh(this.Ka)
        }
        Jh(a) {
            a = Array(a + 1);
            Db.Wl(this.K, 0, a, this.Z + 1);
            this.K = a
        }
    }
    Se.g = !0;
    Se.ob = [xg];
    Object.assign(Se.prototype, {
        j: Se
    });
    class Gd {
        constructor(a) {
            this.Xd = a;
            this.reset()
        }
        reset() {
            this.Wd = 0;
            this.Ff = this.Xd.Z;
            this.K = Array(this.Ff);
            Db.Wl(this.Xd.K, 1, this.K, this.Ff);
            return this
        }
        bb() {
            return this.Wd < this.Ff
        }
        next() {
            return this.K[this.Wd++]
        }
    }
    Gd.g = !0;
    Gd.ob = [Sc];
    Object.assign(Gd.prototype, {
        j: Gd
    });
    class Lh {
        static WH(a, b) {
            a = a.toLowerCase();
            b = b.toLowerCase();
            return a < b ? -1 : a > b ? 1 : 0
        }
    }
    Lh.g = !0;
    class sg {
        static em(a, b) {
            if (0 < a)
                b += a;
            else
                switch (a) {
                case -3:
                    b <<= 1;
                    break;
                case -2:
                    b = (3 * b >> 1) + 1;
                    break;
                case -1:
                    a = b + 1;
                    b = (a >> 3) + (9 > a ? 3 : 6);
                    b += a;
                    break;
                case 0:
                    throw 5;
                }
            return b
        }
    }
    sg.g = !0;
    class Db {
        static Wl(a, b, c, d) {
            if (0 < d)
                if (a == c)
                    if (0 > b) {
                        c = b + d;
                        b = 0 + d;
                        for (var e = 0; e < d; )
                            ++e,
                            --c,
                            --b,
                            a[b] = a[c]
                    } else {
                        if (0 < b)
                            for (c = b,
                            e = b = 0; e < d; )
                                ++e,
                                a[b] = a[c],
                                ++c,
                                ++b
                    }
                else if (0 == b)
                    for (b = 0; b < d; )
                        e = b++,
                        c[e] = a[e];
                else if (0 == b)
                    for (b = 0; b < d; )
                        e = b++,
                        c[0 + e] = a[e];
                else
                    for (e = 0; e < d; ) {
                        let f = e++;
                        c[f] = a[b + f]
                    }
        }
        static Gp(a) {
            var b, c;
            null == c && (c = 0);
            null == b && (b = 0);
            let d = b;
            for (b = 0 >= c ? a.length : b + c; d < b; )
                a[d++] = null
        }
        static JH(a, b, c) {
            let d = 0, e, f = c + 1;
            for (; d < f; )
                e = d + (f - d >> 1),
                a[e] < b ? d = e + 1 : f = e;
            return d <= c && a[d] == b ? d : ~d
        }
    }
    Db.g = !0;
    class zg {
        constructor(a) {
            this.V = a;
            this.l = new R;
            this.Aa = new B(this.l);
            a.ma(0).S(this.l.B);
            this.Js = !1
        }
        NN() {
            this.vf = new R;
            this.l.appendChild(this.vf);
            this.om = new B(this.vf,r.om);
            this.om.F()
        }
        ZI() {
            this.Js = !this.Js;
            this.om.Ub().rotation(this.Js ? 180 : 0, .3, Aa.sm(100))
        }
        update() {
            let a = za.instance.window.oh()
              , b = this.V.Ni
              , c = this.V.Mi;
            var d = (new W(0,0,a.x,a.y)).ih(this.V.Ni / this.V.Mi)
              , e = this.V.gb.fb.zoom;
            let f = (a.x - (d.A - d.m)) / e;
            d = (a.y - (d.D - d.C)) / e;
            this.Aa.ff(r.ds);
            this.Aa.F();
            e = !1;
            1.2 > a.x / a.y ? (this.Aa.ka(0),
            this.Aa.qa((b + f) / this.Aa.X.x),
            this.Aa.ub((c + d) / this.Aa.X.y)) : (this.Aa.ka(90),
            e = !0,
            this.Aa.qa((c + d) / this.Aa.X.x),
            this.Aa.ub((b + f) / this.Aa.X.y));
            this.Aa.o(b / 2);
            this.Aa.s(c / 2);
            null != this.om && (e ? (this.vf.qa(this.Aa.Mc),
            this.vf.ub(this.Aa.pb),
            this.vf.o(this.Aa.$a() + 55 * this.Aa.Mc),
            this.vf.s(this.Aa.Oa + 10 * this.Aa.pb)) : (this.vf.qa(this.Aa.pb),
            this.vf.ub(this.Aa.Mc),
            this.vf.o(this.Aa.$a() + 10 * this.Aa.pb),
            this.vf.s(this.Aa.Oa - 40 * this.Aa.Mc)))
        }
    }
    zg.g = !0;
    Object.assign(zg.prototype, {
        j: zg
    });
    class ua {
        constructor() {
            this.ti = 1;
            this.x = this.y = this.rotation = 0;
            this.visible = !0;
            this.ga = new W(pa,pa,qa,qa)
        }
        Nd() {
            this.ga.m = this.x + this.ca.m;
            this.ga.C = this.y + this.ca.C;
            this.ga.A = this.x + this.ca.A;
            this.ga.D = this.y + this.ca.D
        }
        M() {}
        TA(a) {
            this.jb = a
        }
        update(a) {
            null != this.jb && (this.jb.update(a),
            this.x = this.jb.i.x,
            this.y = this.jb.i.y,
            this.rotation = this.jb.angle)
        }
        VL(a, b) {
            let c = this.ga
              , d = this.ga;
            return P.Vi(a, b, this.ga.m, this.ga.C, c.A - c.m, d.D - d.C)
        }
        mM(a, b, c, d) {
            let e = this.ga.m
              , f = this.ga.C
              , g = this.ca
              , h = this.ca;
            return P.cu(a, b, c, d, e, f, e + (g.A - g.m), f + (h.D - h.C))
        }
        static Qm(a, b) {
            return Oh.test(a.ga, b.ga)
        }
    }
    ua.g = !0;
    Object.assign(ua.prototype, {
        j: ua
    });
    class Ob extends ua {
        constructor() {
            super();
            this.constraint = null;
            this.Cf = 0;
            this.cz = !1;
            this.tc = null;
            this.qu = 0;
            this.Yl = this.$ = null
        }
    }
    Ob.g = !0;
    Ob.u = ua;
    Object.assign(Ob.prototype, {
        j: Ob
    });
    class Ba extends ua {
        constructor() {
            super();
            this.NB = -1
        }
        Ju(a) {
            this.NB = a
        }
        tk() {
            return -1 != this.NB
        }
        xi() {
            return new t(this.x,this.y)
        }
        Of(a) {
            this.x = a.x;
            this.y = a.y
        }
        og() {
            return null
        }
        Rs() {
            let a = this.og();
            return (a.x + a.y) / 4
        }
        bN(a) {
            this.ti = a.x
        }
        Wz() {}
        Bh(a) {
            this.rotation = null != a.angle ? a.angle : 0;
            let b = a.path;
            if (null != b) {
                let c = Ma.Sv;
                "R" == b.charAt(0) && (c = Math.round(3 * Ga.parseInt(ta.substr(b, 2, null)) / 2 + 1));
                a = new Hd(c,a.moveSpeed * na.Il,a.rotateSpeed);
                a.angle = this.rotation;
                a.VA(b, this.x, this.y);
                this.TA(a);
                a.start()
            }
        }
    }
    Ba.g = !0;
    Ba.u = ua;
    Object.assign(Ba.prototype, {
        j: Ba
    });
    class Tc extends Ba {
        constructor(a, b, c, d, e) {
            super();
            this.angle = 0;
            this.Jb = t.Wb();
            this.Kb = t.Wb();
            this.Pc = t.Wb();
            this.Qc = t.Wb();
            this.Vq = -1;
            this.Pm = new t(0,0);
            this.Iq = !1;
            this.l = new R;
            a.ma(4).S(this.l.B);
            this.R = new B(this.l);
            this.R.ff(r.Hc, 1 == d ? l.sD : l.uD);
            this.R.J(.4);
            this.R.F();
            this.rotation = e;
            this.x = b;
            this.y = c;
            this.w = d;
            this.Vp = new t(b,c);
            a = .4 * (1 == d ? 194 : 302) / 2;
            d = .4 * (1 == d ? 127 : 123) / 2;
            d = this.ca = new W(0 - a,0 - d,a,d);
            this.ga = new W(d.m,d.C,d.A,d.D);
            this.jd()
        }
        zx() {
            this.Vp.x = this.x;
            this.Vp.y = this.y
        }
        IL() {
            let a = 1 == this.w ? ti : ui;
            this.R.ja().play(a)
        }
        jd() {
            var a = this.ca;
            a = a.A - a.m;
            this.Jb.x = this.x - a / 2;
            this.Kb.x = this.x + a / 2;
            this.Jb.y = this.Kb.y = this.y - Ph / 2;
            this.Pc.x = this.Jb.x;
            this.Qc.x = this.Kb.x;
            this.Pc.y = this.Qc.y = this.y + Ph / 2;
            this.angle = this.rotation * Ea;
            this.Jb.Sa(this.angle, this.x, this.y);
            this.Kb.Sa(this.angle, this.x, this.y);
            this.Pc.Sa(this.angle, this.x, this.y);
            this.Qc.Sa(this.angle, this.x, this.y)
        }
        update(a) {
            super.update(a);
            null != this.jb && this.jd()
        }
        M() {
            super.M();
            this.l.o(this.x);
            this.l.s(this.y);
            this.R.J(.4 * this.ti);
            this.l.ka(this.rotation)
        }
        og() {
            let a = this.ca
              , b = this.ca;
            return new t(a.A - a.m,b.D - b.C)
        }
        Of(a) {
            let b = new t(this.x,this.y);
            1E-6 > t.Ua(a, b).ym() || (.001 <= this.Vq && .1 >= this.Vq ? (this.Pm = t.co(t.Ua(a, b), this.Vq),
            4E4 < this.Pm.ym() && (this.Pm = t.ld(t.eo(this.Pm), 200))) : this.Pm = new t(0,0),
            this.Vq = 0,
            this.Vp = b.rb(),
            this.x = a.x,
            this.y = a.y,
            this.jd())
        }
        Wz() {
            this.zx()
        }
    }
    Tc.g = !0;
    Tc.u = Ba;
    Object.assign(Tc.prototype, {
        j: Tc
    });
    class bb {
        constructor(a) {
            this.T = a;
            this.controller = this.Ts()
        }
        Cy() {
            return this.controller.Kr ? this.controller.Gf - this.controller.Jd : -1
        }
        Bc(a) {
            return this.controller.Ia == a
        }
        play(a, b) {
            this.controller.Bg = 0;
            this.controller.gu = null != b ? b - 1 : 0;
            this.controller.play(a);
            return this
        }
        cA(a) {
            let b = this;
            this.play(a).$d(function() {
                b.T.H()
            })
        }
        loop(a, b) {
            null == b && (b = !1);
            this.controller.Bg = b ? 2 : 1;
            this.controller.play(a);
            return this
        }
        stop() {
            this.controller.stop();
            return this
        }
        $d(a) {
            this.controller.lN(a)
        }
        sA() {
            this.controller.Zc = V.pm(0, this.Cy())
        }
        setTime(a) {
            let b = this.Cy();
            this.controller.Zc = 0 > a ? 0 : a > b ? b : a;
            return this
        }
        Ts() {
            let a = this.T.B.UI()
              , b = this;
            null != a && a.Nw || (a = new Id,
            a.kN(function(c, d) {
                b.T.zn(d)
            }),
            this.T.B.no(a));
            return a
        }
        static create(a) {
            function b(v) {
                null != g.Dc(v) && (v = ta.substr(g.Dc(v), 1, null),
                e = -1 != v.indexOf(".") ? parseFloat(v) : 1 / Ga.parseInt(v))
            }
            function c(v) {
                return f + (10 > v ? "000" : 100 > v ? "00" : "0") + v
            }
            let d = []
              , e = .03333333333333333
              , f = ""
              , g = null
              , h = 0;
            for (a = a.split(","); h < a.length; ) {
                var m = a[h];
                ++h;
                g = new ja("^([a-z][\\w\\/]*)(@[\\d\\.]+)*","i");
                if (g.match(m))
                    f = g.Dc(1),
                    b(2);
                else if (g = new ja("^(\\d+)-(\\d+)(@[\\d\\.]+)*",""),
                g.match(m)) {
                    var n = Ga.parseInt(g.Dc(1))
                      , q = Ga.parseInt(g.Dc(2));
                    b(3);
                    m = [];
                    var p = n;
                    if (n > q)
                        for (; p >= q; )
                            m.push(p--);
                    else
                        for (; p <= q; )
                            m.push(p++);
                    n = [];
                    q = 0;
                    for (p = m.length; q < p; )
                        ++q,
                        n.push(e);
                    for (p = q = 0; p < m.length; )
                        d.push(new nc(c(m[p++]),n[q++]))
                } else if (g = new ja("^(\\d+)x(\\d+)(@[\\d\\.]+)*",""),
                g.match(m))
                    for (m = Ga.parseInt(g.Dc(1)),
                    n = Ga.parseInt(g.Dc(2)),
                    b(3),
                    q = 0; q < n; )
                        ++q,
                        d.push(new nc(c(m),e));
                else
                    g = new ja("^\\d+(@[\\d\\.]+)*(@[\\d\\.]+)*",""),
                    g.match(m) && (b(1),
                    d.push(new nc(c(Ga.parseInt(g.Dc(0))),e)))
            }
            return new Uc(d,0)
        }
    }
    bb.g = !0;
    Object.assign(bb.prototype, {
        j: bb
    });
    class nc {
        constructor(a, b) {
            this.data = a;
            this.time = b
        }
    }
    nc.g = !0;
    Object.assign(nc.prototype, {
        j: nc
    });
    class Uc {
        constructor(a, b) {
            this.Ae = a.length;
            this.data = Array(this.Ae);
            let c = 0;
            for (; c < this.Ae; )
                this.data[c] = a[c].data,
                ++c;
            switch (b) {
            case 0:
                this.nb = Array(this.Ae + 1);
                this.Th = 0;
                this.Bo = a[0].time;
                c = 2;
                for (b = a[1].time; c < this.Ae; )
                    if (a[c++].time != b) {
                        this.Bo = 0;
                        break
                    }
                for (c = 0; c < this.Ae; )
                    this.nb[c] = this.Th,
                    this.Th += a[c].time,
                    ++c;
                this.nb[c] = this.Th;
                break;
            case 1:
                for (this.nb = Array(this.Ae),
                this.Th = a[this.Ae - 1].time,
                this.Bo = null,
                c = 0; c < this.Ae; )
                    this.nb[c] = a[c].time,
                    ++c
            }
        }
    }
    Uc.g = !0;
    Object.assign(Uc.prototype, {
        j: Uc
    });
    class Te extends ua {
        constructor(a, b) {
            super();
            this.V = a;
            this.Cd = b;
            this.ue = [];
            this.Hk = []
        }
        ZJ(a, b, c, d) {
            function e(g, h) {
                return new nc(new t(g.x,g.y),h)
            }
            this.l = new R;
            this.V.ma(4).S(this.l.B);
            this.Im = new B(null,r.Oe,l.JD);
            this.Im.J(.4);
            this.Im.F();
            this.V.ma(0).S(this.Im.B);
            this.x = a.x;
            this.y = a.y;
            this.Cz = b;
            this.W = c;
            this.xH = d;
            this.elapsedTime = 0;
            this.isActive = !1;
            b = new t(0,0);
            a = this.Cz * Ea;
            c = new t(0,-27.200000000000003);
            d = new t(0,-33.6);
            let f = new t(0,-28);
            this.ue[0] = t.zb(b, (new t(0,-4.4)).rotate(a));
            this.ue[1] = t.zb(b, c.rotate(a));
            this.ue[2] = t.zb(b, d.rotate(a));
            this.ue[3] = t.zb(b, f.rotate(a));
            c = new t(0,-43.2);
            d = new t(0,-9.200000000000001);
            this.Hk[0] = t.zb(b, (new t(0,-36.4)).rotate(a));
            this.Hk[1] = t.zb(b, c.rotate(a));
            this.Hk[2] = t.zb(b, d.rotate(a));
            b = new t(0,0);
            d = new t(0,5.400000000000001);
            c = new t(0,-4.799999999999997);
            d.rotate(a);
            c.rotate(a);
            a = t.zb(b, d);
            b = t.zb(b, c);
            null == uh && (c = new Ia,
            c.setScale(.4, .4, 0, 100),
            c.Fg(0, 0, 0, 100),
            c.setScale(.45999999999999996, .34, .05),
            c.Fg(a.x, a.y, .05),
            c.setScale(.34, .45999999999999996, .1),
            c.Fg(b.x, b.y, .1),
            c.setScale(.4, .4, .15),
            c.Fg(0, 0, .15),
            uh = c);
            this.Pw = new Uc([e(this.ue[0], 0, 100), e(this.ue[1], .05, 100), e(this.ue[2], .1, 100), e(this.ue[3], .15)],1);
            this.EH = new Uc([e(this.Hk[0], 0, 100), e(this.Hk[1], .05, 100), e(this.Hk[2], .1, 100)],1)
        }
        qz(a, b) {
            this.l.appendChild(a);
            this.Pe = a;
            this.ba = b;
            this.Zo().O(!1);
            null != this.ba ? (this.ba.i.x = this.x + this.ue[3].x,
            this.ba.i.y = this.y + this.ue[3].y,
            this.ba.oa.x = this.ba.i.x,
            this.ba.oa.y = this.ba.i.y,
            this.bs(this.Pw),
            this.yi().ja().play(Qh).$d(O(this, this.Lp))) : this.yi().ja().play(Rh).$d(O(this, this.Lp));
            a.F();
            z.play(z.TF)
        }
        sz() {
            this.elapsedTime = 0;
            this.isActive = !1;
            this.Zo().O(!1);
            null != this.ba ? (this.yi().ja().play(Sh).$d(O(this, this.Lp)),
            this.bs(this.EH)) : this.yi().ja().play(Th).$d(O(this, this.Lp))
        }
        yi() {
            return this.Pe.Sc(0)
        }
        Zo() {
            return this.Pe.Sc(1)
        }
        bs(a) {
            this.vo = new Ue(this,this.ba);
            this.vo.play(a)
        }
        ks(a) {
            return t.kd(this.x, this.y, a.i.x, a.i.y) < this.W
        }
        ps(a) {
            this.ba = a;
            a.lm = !0;
            a.i.x = this.x + this.ue[3].x;
            a.i.y = this.y + this.ue[3].y;
            a.oa.x = a.i.x;
            a.oa.y = a.i.y;
            a.$c = new t(0,0);
            a.Ya = new t(0,0);
            this.yi().Yb(l.OD);
            this.en = new Ta(this.yi());
            this.en.play(uh);
            this.bs(this.Pw)
        }
        oM() {
            this.ba.lm = !1;
            this.ba = null;
            this.sz();
            z.play(z.UF)
        }
        th() {
            return null != this.ba
        }
        update(a) {
            super.update(a);
            null != this.vo && this.vo.Kg(a);
            this.isActive && (this.elapsedTime += a,
            this.elapsedTime >= this.xH && (null == this.en || !this.en.Bc()) && this.sz())
        }
        M() {
            super.M();
            this.l.o(this.x);
            this.l.s(this.y);
            this.Im.o(this.x);
            this.Im.s(this.y);
            null != this.Pe && this.Pe.ka(this.Cz)
        }
        Ui(a, b) {
            a = t.kd(this.x, this.y, a, b);
            b = null != this.en && this.en.Bc();
            return a < this.W ? !b : !1
        }
        Lp(a) {
            switch (a) {
            case Rh:
                this.elapsedTime = 0;
                this.isActive = !0;
                V.Yk() && (this.yi().Yb(l.MD),
                this.Zo().O(!0),
                this.Zo().ja().play(vi));
                break;
            case Qh:
                this.elapsedTime = 0;
                this.isActive = !0;
                break;
            case Th:
            case Sh:
                this.Pe.remove(),
                this.Pe = null,
                this.Cd.cJ()
            }
        }
    }
    Te.g = !0;
    Te.u = ua;
    Object.assign(Te.prototype, {
        j: Te
    });
    class Vc {
        constructor() {
            this.controllers = null;
            this.eI = !0
        }
        H() {
            let a = this.controllers, b;
            for (; null != a; )
                b = a.next,
                a.H(),
                a = b
        }
        no(a) {
            null != this.controllers && (a.next = this.controllers);
            this.controllers = a;
            a.object = this
        }
        detach(a) {
            if (this.controllers == a)
                this.controllers = this.controllers.next;
            else {
                let b = this.controllers;
                for (; b.next != a; )
                    b = b.next;
                b.next = a.next
            }
            a.next = null;
            a.object = null
        }
        UI() {
            let a = this.controllers;
            for (; null != a; ) {
                if (303 == a.type)
                    return a;
                a = a.next
            }
            return null
        }
        Kg(a) {
            if (null == this.controllers || !this.eI)
                return !1;
            let b = !1, c = this.controllers, d;
            for (; null != c; )
                d = c.next,
                c.update(a) && (b = !0),
                c = d;
            return b
        }
    }
    Vc.g = !0;
    Object.assign(Vc.prototype, {
        j: Vc
    });
    class Ue extends Vc {
        constructor(a, b) {
            super();
            this.c = new Wc;
            this.Oe = a;
            this.N = b
        }
        play(a) {
            let b = a.data[0];
            this.set(b.x, b.y);
            this.c.play(a);
            this.c.nn = O(this, this.kL);
            this.c.Si = O(this, this.Si);
            this.no(this.c)
        }
        Si() {
            this.H();
            this.Oe.vo = null
        }
        kL(a, b, c) {
            let d = a.x;
            a = a.y;
            this.set(d + (b.x - d) * c, a + (b.y - a) * c)
        }
        set(a, b) {
            this.N.i.x = this.Oe.x + a;
            this.N.i.y = this.Oe.y + b;
            this.N.oa.x = this.N.i.x;
            this.N.oa.y = this.N.i.y
        }
    }
    Ue.g = !0;
    Ue.u = Vc;
    Object.assign(Ue.prototype, {
        j: Ue
    });
    class Ag {
        constructor(a) {
            this.V = a;
            this.Dd = null;
            this.Co = -1;
            this.Bz = !1;
            this.bk = []
        }
        update(a) {
            let b = 0
              , c = this.bk;
            for (; b < c.length; )
                c[b++].update(a)
        }
        M() {
            let a = 0
              , b = this.bk;
            for (; a < b.length; )
                b[a++].M()
        }
        ks(a) {
            return null == this.Dd ? !1 : this.Dd.isActive ? this.Dd.ks(a) : !1
        }
        ps(a) {
            null != this.Dd && this.Dd.ps(a)
        }
        th() {
            return null == this.Dd ? !1 : this.Dd.th()
        }
        sa(a, b) {
            this.bk.push(a);
            if (1 == b) {
                this.Pe = new R;
                var c = new B(this.Pe,r.Oe,l.ND);
                c.J(.4);
                c.F();
                c = new B(this.Pe,r.Oe,l.KD);
                c.J(.4);
                c.F();
                a.qz(this.Pe, a.ba);
                this.Dd = a;
                this.Co = b
            }
        }
        Ui(a, b, c) {
            return null == this.Dd ? !1 : this.Dd.isActive && this.Dd.th() && this.Dd.Ui(a, b, c) ? (this.Dd.oM(),
            !0) : !1
        }
        cJ() {
            if (!this.Bz) {
                var a = this
                  , b = Fa.find(this.bk, function(e) {
                    return e.index == a.Co
                })
                  , c = this.Co + 1;
                c == this.bk.length + 1 && (c = 1);
                var d = Fa.find(this.bk, function(e) {
                    return e.index == c
                });
                d.qz(this.Pe, b.ba);
                b.ba = null;
                this.Co = c;
                this.Dd = d
            }
        }
        pK() {
            this.Bz = !0
        }
    }
    Ag.g = !0;
    Object.assign(Ag.prototype, {
        j: Ag
    });
    class fb extends Ba {
        constructor(a) {
            super();
            this.Sp = !1;
            this.l = new R;
            this.kl = new B(null,r.$,V.Yk() ? l.AD : l.BD);
            this.kl.F();
            this.kl.J(.4);
            this.l.appendChild(this.kl);
            this.$ = new B(null,r.$,l.Wv);
            this.$.J(.4);
            this.$.F();
            this.l.appendChild(this.$);
            a.ma(4).S(this.l.B);
            a = fb.zv.w / 2;
            let b = fb.zv.G / 2;
            a = this.ca = new W(0 - a,0 - b,a,b);
            this.ga = new W(a.m,a.C,a.A,a.D)
        }
        pop() {
            this.$.O(!1);
            this.Sp = !0
        }
        update(a) {
            super.update(a);
            this.Nd()
        }
        M() {
            this.kl.o(this.x);
            this.kl.s(this.y);
            this.$.o(this.x);
            this.$.s(this.y);
            this.$.J(.4 * this.ti);
            (this.$B || this.tk()) && this.kl.O(!1)
        }
        og() {
            let a = r.$.Mb.Qe(l.Wv).pd;
            return new t(.4 * a.w,.4 * a.G)
        }
    }
    fb.g = !0;
    fb.u = Ba;
    Object.assign(fb.prototype, {
        j: fb
    });
    class Ve {
        constructor() {
            this.yA = 1;
            this.va = []
        }
        Iw(a, b) {
            this.va.splice(b, 0, a)
        }
        Hw(a) {
            this.va.push(a)
        }
        tM(a) {
            this.va.splice(a, 1)
        }
    }
    Ve.g = !0;
    Object.assign(Ve.prototype, {
        j: Ve
    });
    class Jd extends Ve {
        constructor(a, b, c, d, e, f, g, h) {
            super();
            this.yI = new E(0,0,0,1);
            this.zI = new E(0,0,0,1);
            this.CI = new E(0,0,0,1);
            this.AI = new E(0,0,0,1);
            this.DI = new E(0,0,0,1);
            this.effect = new Kd;
            this.effect.W = 2;
            this.la = new Ra;
            this.la.df(this.effect);
            a.S(this.la);
            this.du = 0;
            this.yA = 30;
            this.ac = -1;
            this.jg = 0;
            this.Ny = !1;
            this.nc = 42;
            this.mc = null != b ? b : new xb;
            null != e ? this.vb = e : (this.vb = new xb,
            this.vb.Rf(1));
            this.mc.Rf(.02);
            this.mc.i.x = c;
            this.mc.i.y = d;
            this.vb.i.x = f;
            this.vb.i.y = g;
            this.Hw(this.mc);
            this.Hw(this.vb);
            this.vb.Cj(this.mc, this.nc, 0);
            a = t.Ua(this.vb.i, this.mc.i);
            a.Ix(Math.round(h / this.nc + 2));
            this.Hb(h, a);
            this.$j = !1;
            this.tg = -1;
            this.vI = this.et = this.dm = !1;
            this.Cs = [];
            this.jx = 3
        }
        H() {
            this.la.H();
            this.Cs = this.vb = this.mc = this.la = null
        }
        pc() {
            let a = 0
              , b = this.va.length;
            if (0 < b) {
                let c = this.va[0].i
                  , d = 1;
                for (; d < b; ) {
                    let e = this.va[d++];
                    a += c.Le(e.i);
                    c = e.i
                }
            }
            return a
        }
        Hb(a, b) {
            null == b && (b = t.Wb());
            let c = this.va[this.va.length - 2]
              , d = this.vb.Cg(c);
            for (var e; 0 < a; )
                a >= this.nc ? (c = this.va[this.va.length - 2],
                e = new xb,
                e.Rf(.02),
                e.i = t.zb(c.i, b),
                this.Iw(e, this.va.length - 1),
                this.vb.wx(c, e, d),
                e.Cj(c, this.nc, 0),
                a -= this.nc) : (e = a + d,
                e > this.nc ? (a = this.nc,
                d = e - this.nc) : (c = this.va[this.va.length - 2],
                this.vb.xo(c, e),
                a = 0))
        }
        M() {
            this.effect.cN();
            let a = this.va.length;
            var b;
            if (-1 == this.ac) {
                var c = Array(a);
                for (b = 0; b < a; ) {
                    var d = b++;
                    c[d] = this.va[d].i
                }
                this.Bs(c)
            } else {
                d = [];
                let e = []
                  , f = !1
                  , g = 0;
                for (; g < a; ) {
                    let h = g++;
                    c = this.va[h];
                    let m = !0;
                    0 < h && (b = this.va[h - 1],
                    c.MJ(b) || (m = !1));
                    -1 != c.yg.x || m || (f = !0);
                    f ? e.push(c.i) : d[h] = c.i
                }
                0 < d.length && this.Bs(d);
                0 < e.length && !this.et && this.Bs(e)
            }
        }
        Bs(a) {
            var b = a.length;
            let c = this.Cs;
            if (!(2 > b)) {
                var d = -1 == this.ac || this.$j ? 1 : this.jg / 1.95;
                if (!(0 >= d)) {
                    1 < d && (d = 1);
                    var e = a[0]
                      , f = a[1]
                      , g = e.x - f.x;
                    f = e.y - f.y;
                    var h = Math.sqrt(g * g + f * f);
                    this.du = h <= this.nc + .3 ? 0 : h <= this.nc + 1 ? 1 : h < this.nc + 4 ? 2 : 3;
                    if (!(3 > b)) {
                        var m = this.yI
                          , n = this.zI;
                        g = this.CI;
                        var q = this.AI;
                        f = this.DI;
                        m.x = 0;
                        m.y = 0;
                        m.z = 0;
                        m.w = d;
                        n.x = .475;
                        n.y = .305;
                        n.z = .185;
                        n.w = d;
                        g.x = .19;
                        g.y = .122;
                        g.z = .074;
                        g.w = d;
                        q.x = .6755555555555556;
                        q.y = .44;
                        q.z = .27555555555555555;
                        q.w = d;
                        f.x = .304;
                        f.y = .198;
                        f.z = .124;
                        f.w = d;
                        this.Ny && (n.x *= 3,
                        n.y *= 3,
                        n.z *= 3,
                        q.x *= 3,
                        q.y *= 3,
                        q.z *= 3,
                        g.x *= 3,
                        g.y *= 3,
                        g.z *= 3,
                        f.x *= 3,
                        f.y *= 3,
                        f.z *= 3,
                        1 < n.x && (n.x = 1),
                        1 < n.y && (n.y = 1),
                        1 < n.z && (n.z = 1),
                        1 < q.x && (q.x = 1),
                        1 < q.y && (q.y = 1),
                        1 < q.z && (q.z = 1),
                        1 < g.x && (g.x = 1),
                        1 < g.y && (g.y = 1),
                        1 < g.z && (g.z = 1),
                        1 < f.x && (f.x = 1),
                        1 < f.y && (f.y = 1),
                        1 < f.z && (f.z = 1));
                        h > this.nc + 7 && !this.vI && (h = h / this.nc * 2,
                        g.x *= h,
                        f.x *= h,
                        1 < g.x && (g.x = 1),
                        1 < f.x && (f.x = 1));
                        h = !1;
                        b = (b - 1) * this.jx;
                        var p = b - 1;
                        m = (n.x - g.x) / p;
                        var v = (n.y - g.y) / p;
                        n = (n.z - g.z) / p;
                        var u = (q.x - f.x) / p
                          , y = (q.y - f.y) / p;
                        q = (q.z - f.z) / p;
                        p = this.jx - 1;
                        var A = p - 1
                          , x = c[0];
                        null == x ? c[0] = e.rb() : (x.x = e.x,
                        x.y = e.y);
                        for (e = 1; e <= b; ) {
                            x = e / b;
                            var H = c[e];
                            null == H && (H = c[e] = new t(0,0));
                            t.IA(a, x, H);
                            x = (e - 1) % p;
                            if (x == A || e == b) {
                                var C = this.$j ? 16777215 : h ? ((255 * g.z | 0) & 255) << 16 | ((255 * g.y | 0) & 255) << 8 | (255 * g.x | 0) & 255 : ((255 * f.z | 0) & 255) << 16 | ((255 * f.y | 0) & 255) << 8 | (255 * f.x | 0) & 255;
                                H = [];
                                let Y = [];
                                this.effect.points.push(H);
                                this.effect.Zg.push(Y);
                                this.effect.Sl.push(d);
                                let X = e - x - 1
                                  , S = c[X++];
                                H.push(new E(S.x,S.y,0,1));
                                C = new E((C & 255) / 255,(C >> 8 & 255) / 255,(C >> 16 & 255) / 255,1);
                                for (Y.push(C); X <= e; )
                                    S = c[X],
                                    H.push(new E(S.x,S.y,0,1)),
                                    Y.push(C),
                                    ++X;
                                h = !h;
                                x += 1;
                                g.x += m * x;
                                g.y += v * x;
                                g.z += n * x;
                                f.x += u * x;
                                f.y += y * x;
                                f.z += q * x
                            }
                            ++e
                        }
                    }
                }
            }
        }
        MM(a) {
            for (var b = this.va.length, c = this.vb.Cg(this.va[b - 2]), d; 0 < a; )
                if (a >= this.nc) {
                    var e = b - 2;
                    d = this.va[e];
                    this.vb.wx(d, this.va[b - 3], c);
                    this.tM(e);
                    --b;
                    a -= this.nc
                } else
                    e = c - a,
                    1 > e ? (a = this.nc,
                    c = this.nc + e + 1) : (d = this.va[b - 2],
                    this.vb.xo(d, e),
                    a = 0);
            a = (b - 1) * (this.nc + 3);
            b = this.vb.sf;
            c = b.length;
            for (d = 0; d < c; )
                e = b[d++],
                1 == e.type && (e.Cg = a)
        }
        update(a) {
            0 < this.jg && (this.jg = Ma.Ik(this.jg, 0, 1, a),
            1.95 > this.jg && this.$j && this.eu(this.ac));
            let b = this.va.length;
            for (var c, d = 0; d < b; )
                c = this.va[d++],
                c != this.vb && c.update(a);
            a = 0;
            for (c = this.yA; a < c; )
                for (++a,
                d = 0; d < b; )
                    this.va[d++].pq()
        }
        eu(a) {
            this.$j = !1;
            var b = this.va[a]
              , c = this.va[a + 1];
            if (null == c)
                b.BA();
            else {
                var d = c.sf;
                let e = d.length
                  , f = 0;
                for (; f < e; ) {
                    let g = f++;
                    if (d[g].pi == b) {
                        c.qM(g);
                        d = new xb;
                        d.Rf(1E-5);
                        d.i.wb(c.i);
                        d.oa.wb(c.oa);
                        this.Iw(d, a + 1);
                        d.Cj(b, this.nc, 0);
                        break
                    }
                }
            }
            a = 0;
            for (b = this.va.length; a < b; )
                c = this.va[a],
                c != this.vb && c.Rf(1E-5),
                ++a
        }
        vq(a) {
            this.ac = a;
            this.jg = 2;
            this.$j = !0;
            this.Ny = !1
        }
    }
    Jd.g = !0;
    Jd.u = Ve;
    Object.assign(Jd.prototype, {
        j: Jd
    });
    class Bg {
        constructor() {
            this.tb = new E(.5,.5,0,1);
            this.i = new E(0,0,0,1);
            this.sj = new W(pa,pa,qa,qa);
            this.fb = new Bd
        }
        jK(a, b) {
            var c = za.instance.window
              , d = c.P.viewport
              , e = c.zd.x
              , f = c.zd.y;
            c = d.x * e | 0;
            let g = d.y * f | 0;
            e = d.w * e | 0;
            d = d.G * f | 0;
            let h = this.fb.Yi
              , m = 1 / (h.m41 * a + h.m42 * b + 0 * h.m43 + h.m44)
              , n = e / 2;
            f = d / 2;
            let q = (h.m11 * a + h.m12 * b + 0 * h.m13 + h.m14) * m;
            a = (h.m21 * a + h.m22 * b + 0 * h.m23 + h.m24) * m;
            b = n * q + 0 * a + (n + c);
            a = 0 * q + -f * a + (f + g);
            return 0 > b + 400 || 0 > a + 400 || b - 200 > c + e || a - 200 > g + d ? !1 : !0
        }
        sJ(a, b) {
            let c = za.instance.window.Cm();
            a = this.fb.aC(new E(a,b,0,1), c);
            return Math.min(a.y, c.y + c.G - a.y)
        }
        tJ(a, b) {
            let c = za.instance.window.Cm();
            a = this.fb.aC(new E(a,b,0,1), c);
            return Math.min(a.x, c.x + c.w - a.x)
        }
        update() {
            var a = za.instance.window.oh()
              , b = this.sj
              , c = this.sj;
            c = Math.min(a.x / (b.A - b.m), a.y / (c.D - c.C));
            this.fb.kb(new E(a.x,a.y,0,1));
            this.fb.DN(c);
            this.fb.bm();
            var d = b = this.sj;
            d = (new W(0,0,a.x,a.y)).ih((b.A - b.m) / (d.D - d.C));
            b = (a.x - (d.A - d.m)) / c / 2;
            a = (a.y - (d.D - d.C)) / c / 2;
            c = this.fb;
            d = c.position;
            d.x = this.i.x + (b + (-b - b) * this.tb.x);
            d.y = this.i.y + (a + (-a - a) * this.tb.y);
            c.Kp()
        }
    }
    Bg.g = !0;
    Object.assign(Bg.prototype, {
        j: Bg
    });
    class tb extends Ob {
        constructor(a) {
            super();
            this.V = a;
            var b = tb.Wn.w
              , c = b / 2;
            let d = tb.Wn.G / 2;
            c = this.ca = new W(0 - c,0 - d,c,d);
            this.ga = new W(c.m,c.C,c.A,c.D);
            this.l = new R;
            a.ma(8).S(this.l.B);
            a = new B(null,r.N,l.CD);
            a.F();
            this.l.appendChild(a);
            b /= a.X.x;
            b *= a.X.x / tb.xv.w;
            a.J(b);
            a = new B(null,r.N,l.DD);
            a.F();
            a.J(b);
            this.l.appendChild(a);
            a = new B(null,r.N,l.ED);
            a.F();
            a.J(b);
            this.l.appendChild(a);
            a = new B(null,r.N,Uh.data[0]);
            a.F();
            a.J(b);
            this.l.appendChild(a);
            this.l.J(.71);
            this.Uf = !0
        }
        JL() {
            if (null != this.l) {
                var a = this.l.Sc(3);
                a.O(!0);
                a.ja().play(Uh).$d(function() {
                    a.O(!1)
                })
            }
        }
        KL() {
            if (null != this.l) {
                var a = this.l.Sc(3);
                a.O(!0);
                a.aa(1);
                a.ja().play(wi);
                a.Ub().alpha(0, .2, null, null, function() {
                    a.O(!1)
                })
            }
        }
        H() {
            this.l.H();
            this.l = null
        }
        update(a) {
            super.update(a);
            this.ga.m = this.x + this.ca.m;
            this.ga.C = this.y + this.ca.C;
            this.ga.A = this.x + this.ca.A;
            this.ga.D = this.y + this.ca.D
        }
        M() {
            super.M();
            null != this.l && (this.Uf && (this.l.o(this.x),
            this.l.s(this.y)),
            this.l.ka(this.rotation),
            this.l.O(this.visible))
        }
    }
    tb.g = !0;
    tb.u = Ob;
    Object.assign(tb.prototype, {
        j: tb
    });
    class Xc {
        constructor() {
            this.rotation = 0;
            this.fl = this.gl = 1;
            this.x = this.y = 0
        }
        update() {}
    }
    Xc.g = !0;
    Object.assign(Xc.prototype, {
        j: Xc
    });
    class Pb extends Xc {
        constructor(a) {
            super();
            this.y = this.x = 0;
            this.gl = this.fl = 1;
            this.rotation = 0;
            this.Wh = [];
            this.Zg = [];
            this.cv = a;
            this.ic = [];
            this.active = !1;
            this.Mo = this.duration = 0;
            this.tb = new t(0,0);
            this.iA = new t(0,0);
            this.kz = this.Tc = this.Ou = this.size = this.rA = this.Wp = this.AB = this.Tq = this.Lq = this.speed = this.jo = this.angle = 0;
            this.Rh = new Ya(0,0,0,0);
            this.Qq = new Ya(0,0,0,0);
            this.eh = new Ya(0,0,0,0);
            this.Qo = new Ya(0,0,0,0);
            this.mq = this.dl = this.Xj = this.Oo = 0;
            this.Wh = [];
            this.Zg = [];
            this.Ch = 0;
            this.Rz = null
        }
        Jw() {
            if (this.ic.length != this.cv) {
                var a = new Cg;
                this.Ci(a);
                this.ic.push(a)
            }
        }
        Ci(a) {
            a.i.x = this.x + this.iA.x * V.bc();
            a.i.y = this.y + this.iA.y * V.bc();
            a.Sh.wb(a.i);
            var b = (this.angle + this.jo * V.bc()) * Ea;
            b = new t(Math.cos(b),Math.sin(b));
            b.multiply(this.speed + this.Lq * V.bc());
            a.dir = b;
            a.Wp = this.Wp + this.rA * V.bc();
            a.Tq = this.Tq + this.AB * V.bc();
            a.wt = a.Tc = this.Tc + this.kz * V.bc();
            b = new Ya(this.Rh.r + this.Qq.r * V.bc(),this.Rh.Sd + this.Qq.Sd * V.bc(),this.Rh.b + this.Qq.b * V.bc(),this.Rh.a + this.Qq.a * V.bc());
            let c = new Ya(this.eh.r + this.Qo.r * V.bc(),this.eh.Sd + this.Qo.Sd * V.bc(),this.eh.b + this.Qo.b * V.bc(),this.eh.a + this.Qo.a * V.bc());
            a.color = b;
            a.bh.r = (c.r - b.r) / a.Tc;
            a.bh.Sd = (c.Sd - b.Sd) / a.Tc;
            a.bh.b = (c.b - b.b) / a.Tc;
            a.bh.a = (c.a - b.a) / a.Tc;
            a.size = this.size + this.Ou * V.bc()
        }
        update(a) {
            super.update(a);
            if (null == this.Rz || 0 != this.ic.length || this.active) {
                if (this.active && 0 != this.Oo) {
                    var b = 1 / this.Oo;
                    for (this.Xj += a; this.ic.length < this.cv && this.Xj > b; )
                        this.Jw(),
                        this.Xj -= b;
                    this.Mo += a;
                    -1 != this.duration && this.duration < this.Mo && this.$N()
                }
                for (this.Ch = 0; this.Ch < this.ic.length; )
                    b = this.ic[this.Ch],
                    0 < b.Tc ? (this.xO(b, a),
                    b.color.r += b.bh.r * a,
                    b.color.Sd += b.bh.Sd * a,
                    b.color.b += b.bh.b * a,
                    b.color.a += b.bh.a * a,
                    b.Tc -= a,
                    this.qj(b, this.Ch, a),
                    this.Ch++) : this.Hh(this.Ch)
            } else
                this.Rz(this)
        }
        xO(a, b) {
            if (0 != a.i.x || 0 != a.i.y) {
                var c = a.i.rb();
                c.normalize()
            } else
                c = new t(0,0);
            let d = c.rb();
            c.multiply(a.Wp);
            let e = d.x;
            d.x = -d.y;
            d.y = e;
            d.multiply(a.Tq);
            c = t.zb(c, d);
            c.add(this.tb);
            c.multiply(b);
            a.dir.add(c);
            c.wb(a.dir);
            c.multiply(b);
            a.i.add(c)
        }
        qj(a) {
            this.Wh[this.Ch] = new Dg(a.i.x,a.i.y,a.size);
            this.Zg[this.Ch] = a.color
        }
        Hh(a) {
            this.ic.splice(a, 1)
        }
        Fn(a) {
            if (0 < this.ic.length)
                for (; 0 < this.ic.length; )
                    this.Hh(0);
            this.ic = [];
            let b = 0;
            for (; b < a; )
                ++b,
                this.Jw();
            this.active = !0
        }
        $N() {
            this.active = !1;
            this.Mo = this.duration;
            this.Xj = 0
        }
        M() {}
    }
    Pb.g = !0;
    Pb.u = Xc;
    Object.assign(Pb.prototype, {
        j: Pb
    });
    class We extends Pb {
        constructor(a, b) {
            super(b);
            this.V = a;
            this.duration = 2;
            this.tb.x = 0;
            this.tb.y = 500;
            this.angle = -90;
            this.jo = 50;
            this.speed = 150;
            this.Lq = 70;
            this.AB = this.rA = 1;
            this.Tc = 2;
            this.size = 1;
            this.Oo = 100;
            this.dl = 0;
            this.mq = 600;
            this.Kc = []
        }
        Ci(a) {
            super.Ci(a);
            a.Fo = Ea * (this.dl + this.mq * V.bc());
            a = new B(null,r.N,l.Yh("", V.Ag(3, 7)));
            a.F();
            a.J(.4 * this.size);
            this.V.ma(4).S(a.B);
            this.Kc.push(a)
        }
        qj(a, b, c) {
            a.angle += a.Fo * c;
            super.qj(a, b, c)
        }
        Hh(a) {
            super.Hh(a);
            this.Kc.splice(a, 1)
        }
        M() {
            super.M();
            let a = 0
              , b = this.ic.length;
            for (; a < b; ) {
                var c = a++;
                let d = this.ic[c];
                c = this.Kc[c];
                c.ka(d.angle * Yc);
                c.o(d.i.x);
                c.s(d.i.y)
            }
        }
    }
    We.g = !0;
    We.u = Pb;
    Object.assign(We.prototype, {
        j: We
    });
    class ac {
        constructor(a) {
            this.V = a;
            this.R = new B;
            this.R.O(!1)
        }
        o(a) {
            this.R.o(a);
            null != this.hb && this.hb.l.o(a);
            return a
        }
        s(a) {
            this.R.s(a);
            null != this.hb && this.hb.l.s(a)
        }
        rg() {
            this.R.remove();
            null != this.hb && this.hb.l.remove()
        }
        show() {
            this.R.ff(r.$, l.wD);
            this.R.F();
            this.R.J(.4);
            null == this.R.B.parent && this.V.ma(8).S(this.R.B);
            this.R.ja().loop(ac.dC);
            this.R.O(!0)
        }
        ON() {
            null != this.hb && null == this.hb.l.node.parent && this.V.ma(8).S(this.hb.l.B)
        }
    }
    ac.g = !0;
    Object.assign(ac.prototype, {
        j: ac
    });
    class bc extends Ob {
        constructor(a, b) {
            super();
            this.V = a;
            this.R = new B(null,r.N,b);
            this.R.F();
            this.R.J(.284);
            a.ma(8).S(this.R.B);
            a = bc.Bv.w / 2;
            b = bc.Bv.G / 2;
            a = this.ca = new W(0 - a,0 - b,a,b);
            this.ga = new W(a.m,a.C,a.A,a.D)
        }
        update(a) {
            super.update(a);
            this.ga.m = this.x + this.ca.m;
            this.ga.C = this.y + this.ca.C;
            this.ga.A = this.x + this.ca.A;
            this.ga.D = this.y + this.ca.D
        }
        M() {
            super.M();
            null != this.R && (this.R.o(this.x),
            this.R.s(this.y),
            this.R.ka(this.rotation))
        }
    }
    bc.g = !0;
    bc.u = Ob;
    Object.assign(bc.prototype, {
        j: bc
    });
    class Ma {
        constructor(a, b, c) {
            null == c && (c = 0);
            null == b && (b = 0);
            this.dl = c;
            this.path = [];
            if (0 < a)
                for (this.Ez = [],
                c = 0; c < a; )
                    this.Ez[c++] = b;
            this.i = new t(0,0);
            this.angle = 0;
            this.reverse = this.paused = !1;
            this.hf = this.Rk = 0
        }
        Vr(a) {
            this.path.push(a)
        }
        start() {
            0 < this.path.length && (this.i.wb(this.path[0]),
            this.hf = 1,
            this.nx())
        }
        nx() {
            this.offset = t.Ua(this.path[this.hf], this.i);
            this.offset.normalize();
            this.offset.multiply(this.Ez[this.hf])
        }
        update(a) {
            if (!this.paused) {
                if (0 < this.path.length) {
                    let b = this.path[this.hf]
                      , c = !1;
                    if (this.i.NI(b))
                        c = !0;
                    else {
                        let d = a;
                        0 != this.Rk && (d = a + this.Rk,
                        this.Rk = 0);
                        this.i.add(t.ld(this.offset, d));
                        yb.GA(this.offset.x, b.x - this.i.x) && yb.GA(this.offset.y, b.y - this.i.y) || (this.Rk = t.Ua(this.i, b).pc(),
                        this.Rk /= this.offset.pc(),
                        this.i.wb(b),
                        c = !0)
                    }
                    c && (this.reverse ? (this.hf--,
                    0 > this.hf && (this.hf = this.path.length - 1)) : (this.hf++,
                    this.hf >= this.path.length && (this.hf = 0)),
                    this.nx())
                }
                0 != this.dl && (this.angle += this.dl * a)
            }
        }
        static Ik(a, b, c, d) {
            b != a && (b > a ? (a += c * d,
            a > b && (a = b)) : (a -= c * d,
            a < b && (a = b)));
            return a
        }
        static Pi(a, b, c, d) {
            let e = !1;
            b != a && (b > a ? (a += c * d,
            a > b && (a = b)) : (a -= c * d,
            a < b && (a = b)),
            b == a && (e = !0));
            return new Eg(a,e)
        }
    }
    Ma.g = !0;
    Object.assign(Ma.prototype, {
        j: Ma
    });
    class Hd extends Ma {
        constructor(a, b, c) {
            super(a, b, c)
        }
        VA(a, b, c) {
            if ("R" == a.charAt(0)) {
                var d = Ga.parseInt(ta.substr(a, 2, null))
                  , e = Math.round(3 * d / 2)
                  , f = 2 * Math.PI / e;
                let g = 0;
                d *= na.Il;
                "C" != a.charAt(1) && (f = -f);
                for (a = 0; a < e; )
                    ++a,
                    this.Vr(new t(b + d * Math.cos(g),c + d * Math.sin(g))),
                    g += f
            } else
                for (this.Vr(new t(b,c)),
                "," == a.charAt(a.length - 1) && (a = ta.substr(a, 0, a.length - 1)),
                d = a.split(","),
                e = d.length,
                f = 0; f < e; )
                    this.Vr(new t(b + parseFloat(d[f]) * na.Il,c + parseFloat(d[f + 1]) * na.Il)),
                    f += 2
        }
    }
    Hd.g = !0;
    Hd.u = Ma;
    Object.assign(Hd.prototype, {
        j: Hd
    });
    class Xe extends fa {
        constructor(a, b) {
            super();
            this.f = a;
            this.t = b
        }
        update(a) {
            this.t -= a;
            0 < this.t || (this.f(),
            this.f = null,
            this.ua())
        }
    }
    Xe.g = !0;
    Xe.u = fa;
    Object.assign(Xe.prototype, {
        j: Xe
    });
    class Fg {
        constructor(a, b, c, d, e) {
            this.start = a;
            this.end = b;
            this.color = e
        }
    }
    Fg.g = !0;
    Object.assign(Fg.prototype, {
        j: Fg
    });
    class oc extends ua {
        constructor() {
            super();
            new P(-1,-1,-1,-1);
            this.QH = this.state = 0
        }
        fj(a) {
            this.state = a
        }
        Vt(a, b) {
            return 0 == this.state && this.sk(a, b) ? (this.fj(1),
            !0) : !1
        }
        zL(a, b) {
            return 1 == this.state && (this.fj(0),
            this.sk(a, b)) ? (null != this.Tt && this.Tt(this.QH),
            !0) : !1
        }
        sk(a, b) {
            return Gg.Uu(a, b, this.x, this.y, 20)
        }
    }
    oc.g = !0;
    oc.u = ua;
    Object.assign(oc.prototype, {
        j: oc
    });
    class Ye extends ua {
        constructor(a) {
            super();
            this.V = a;
            this.qt = this.tp = !1;
            this.ko = this.Ho = 0
        }
        $J(a, b, c, d, e, f, g) {
            this.LH = d;
            this.IJ = c;
            this.jA = b | 1;
            this.fp = 1;
            this.Gy = e;
            this.Hy = f;
            this.Fy = g;
            this.x = a.x;
            this.y = a.y;
            this.time = V.gh();
            this.Se = new R;
            this.Se.o(this.x);
            this.Se.s(this.y);
            this.V.ma(4).S(this.Se.B);
            this.dn = new Ze(this.V,7);
            this.dn.x = this.x;
            this.dn.y = this.y;
            this.bt = new B(this.Se,r.Fd,l.PD);
            this.bt.J(.4);
            this.bt.F();
            this.ct = new B(this.Se,r.Fd,l.QD);
            this.ct.F();
            this.ct.J(.4);
            this.Hc = this.Fb = this.$ = null;
            this.uf = !0
        }
        update(a) {
            super.update(a);
            if (this.tp) {
                this.Ho += a;
                var b = Math.min(1, this.Ho / .16);
                this.Se.aa(1 - b);
                1 == b && (this.Se.O(!1),
                this.tp = !1)
            }
            this.qt && (this.ko += a,
            b = Math.min(1, this.ko / .36),
            this.Se.aa(b),
            1 == b && (this.qt = !1));
            this.time += a;
            this.bt.s(ya(Math.sin(5 * this.time), -1, 1, 0, -5));
            this.ct.s(ya(Math.sin(5 * this.time + .05), -1, 1, 0, -3));
            null == this.Fb || null == this.Fb.Ra || -1 == this.Fb.Ra.ac || this.Fb.qk() || (this.uf = !0,
            this.Ih(1));
            this.dn.update(a)
        }
        M() {
            super.M();
            this.dn.M();
            this.Se.o(this.x);
            this.Se.o(this.x)
        }
        Ih(a) {
            if (0 != (a & this.jA)) {
                1 == this.fp && (this.tp = !0,
                this.Ho = 0);
                this.fp = a;
                null != this.$ && (this.$.qk() ? this.AA() : (this.$.Ym(),
                this.$.Sp = !0));
                null != this.Fb && (a = this.Fb.Ra,
                null != a && (a.jg = .36),
                this.Fb.qk() ? this.CA() : this.Fb.Ym());
                null != this.Hc && (this.Hc.qk() ? this.zA() : this.Hc.Ym());
                switch (this.fp) {
                case 1:
                    this.qt = !0;
                    this.tp = !1;
                    this.Se.O(!0);
                    this.ko = 0;
                    break;
                case 2:
                    this.$ = new $e(this);
                    this.$.x = this.x;
                    this.$.y = this.y;
                    this.$.Xm();
                    this.Gy.push(this.$);
                    break;
                case 4:
                    this.Fb = new pb(this);
                    this.Fb.x = this.x;
                    this.Fb.y = this.y;
                    this.Fb.Ng = !1;
                    this.Fb.lc = null;
                    this.Fb.setRadius(this.IJ);
                    this.Fb.Xm();
                    this.Fb.Yr();
                    this.Hy.push(this.Fb);
                    break;
                case 8:
                    this.Hc = new Za(this,this.x,this.y,1,this.LH),
                    this.Hc.Yr(),
                    this.Hc.Xm(),
                    this.Fy.push(this.Hc)
                }
                this.dn.Fn(7);
                z.play(z.LF)
            }
        }
        JM() {
            let a = this.fp;
            do
                a <<= 1,
                32 == a && (a = 2);
            while (0 == (a & this.jA));
            this.Ih(a)
        }
        Vt(a, b) {
            a -= this.x;
            b -= this.y;
            return this.uf && 40 > Math.sqrt(a * a + b * b) ? (this.JM(),
            !0) : !1
        }
        AA() {
            null != this.$ && (ta.remove(this.Gy, this.$),
            this.$.H(),
            this.$ = null)
        }
        CA() {
            null != this.Fb && (this.Fb.H(),
            ta.remove(this.Hy, this.Fb),
            this.Fb = null)
        }
        zA() {
            null != this.Hc && (ta.remove(this.Fy, this.Hc),
            this.Hc.H(),
            this.Hc = null)
        }
    }
    Ye.g = !0;
    Ye.u = ua;
    Object.assign(Ye.prototype, {
        j: Ye
    });
    class Za extends Tc {
        constructor(a, b, c, d, e) {
            super(a.V, b, c, d, e);
            this.Fd = a;
            this.alpha = 1;
            this.state = 0
        }
        Xm() {
            1 != this.state && (this.state = 1,
            this.time = 0)
        }
        Ym() {
            -1 != this.state && (this.state = -1,
            this.time = 0)
        }
        qk() {
            return 0 > this.state
        }
        Yr() {
            function a(c, d) {
                c = new B(d,r.Fd,l.Yh(l.Zn, c));
                c.F();
                return c
            }
            this.ts = new R(null,this.l);
            this.ts.WM();
            this.Ax = new R(null,this.l);
            this.Sb = [];
            null == Za.Vl && (Za.Vl = Ia.parse("0,s.27<x-34.<y7.33<,.35,s.22>x-35.>y6.33>,.7,s.16<x-36.<y5.33<,1.04,s.22>x-35.>y6.33>,1.4,s.27x-34.y7.33"));
            var b = new Ta(a(2, this.ts));
            b.loop(Za.Vl);
            this.Sb.push(b);
            null == Za.Ul && (Za.Ul = Ia.parse("0,s.36<x32.9<y6.61<,.39,s.32>x31.9>y5.61>,.78,s.27<x30.9<y4.61<,1.17,s.32>x31.9>y5.61>,1.56,s.36x32.9y6.61"));
            b = new Ta(a(2, this.ts));
            b.loop(Za.Ul);
            this.Sb.push(b);
            null == Za.Xg && (Za.Xg = Ia.parse("0,s.44<x23<y26<,.45,s.4>x22>y25>,.9,s.36<x21<y24<,1.35,s.4>x22>y25>,1.8,s.44x23y26"));
            b = new Ta(a(3, this.Ax));
            b.loop(Za.Xg);
            this.Sb.push(b);
            null == Za.Wg && (Za.Wg = Ia.parse("0,s.44<x-23<y28<,.5,s.4>x-22>y27>,1,s.36<x-21<y26<,1.5,s.4>x-22>y27>,2,s.44x-23y28"));
            b = new Ta(a(4, this.Ax));
            b.loop(Za.Wg);
            this.Sb.push(b)
        }
        H() {
            this.l.H();
            this.R = this.l = null
        }
        update(a) {
            super.update(a);
            if (0 < this.state) {
                this.time += a;
                let b = Math.min(1, this.time / .36);
                this.alpha = b;
                1 == b && (this.state = 0)
            }
            0 > this.state && (this.time += a,
            a = Math.min(1, this.time / .16),
            this.alpha = 1 - a,
            1 == a && (this.state = 0,
            this.Fd.zA()))
        }
        M() {
            super.M();
            this.l.aa(this.alpha)
        }
    }
    Za.g = !0;
    Za.u = Tc;
    Object.assign(Za.prototype, {
        j: Za
    });
    class $e extends fb {
        constructor(a) {
            super(a.V);
            this.Fd = a;
            this.alpha = 1;
            this.state = 0;
            this.hb = new Ja;
            this.l.appendChild(this.hb.l)
        }
        H() {
            this.l.H();
            this.l = null;
            this.hb.H();
            this.hb = null
        }
        qk() {
            return 0 > this.state
        }
        Xm() {
            1 != this.state && (this.state = 1,
            this.time = 0)
        }
        Ym() {
            -1 != this.state && (this.state = -1,
            this.time = 0)
        }
        pop() {
            super.pop();
            this.hb.l.O(!1)
        }
        update(a) {
            super.update(a);
            if (0 < this.state) {
                this.time += a;
                let b = Math.min(1, this.time / .36);
                this.alpha = b;
                1 == b && (this.state = 0)
            }
            0 > this.state && (this.time += a,
            a = Math.min(1, this.time / .16),
            this.alpha = 1 - a,
            1 == a && (this.state = 0,
            this.Fd.AA()))
        }
        M() {
            super.M();
            null != this.hb && (this.hb.l.o(this.x),
            this.hb.l.s(this.y));
            this.l.aa(this.alpha)
        }
    }
    $e.g = !0;
    $e.u = fb;
    Object.assign($e.prototype, {
        j: $e
    });
    class Ja {
        constructor() {
            function a(d) {
                d = new B(b.l,r.Fd,l.Yh(l.Zn, d));
                d.F();
                return d
            }
            this.l = new R;
            this.Sb = [];
            let b = this;
            null == Ja.Ul && (Ja.Ul = Ia.parse("0,s.32<x34<y9<,.48,s.31>x33>y8>,.96,s.30<x34<y7<,1.44,s.31>x34>y9>,1.92,s.32x33y8,2.4,x34y9"));
            var c = new Ta(a(0));
            c.loop(Ja.Ul);
            this.Sb.push(c);
            null == Ja.Vl && (Ja.Vl = Ia.parse("-100,s.38>,-99.,s.4<,-99.,s.38>,-98.,s.37,0,sx.37sy.4x26<y23<,.4,x25>y22>,.8,x24<y21<,1.20,x25>y22>,1.6,x26y23"));
            c = new Ta(a(1));
            c.loop(Ja.Vl);
            this.Sb.push(c);
            null == Ja.Vw && (Ja.Vw = Ia.parse("0,s.13<x-34<y4<,.43,s.14>x-35>y3>,.86,s.16<x-36<y2<,1.29,s.14>x-35>y3>,1.72,s.13x-34y4"));
            c = new Ta(a(1));
            c.loop(Ja.Vw);
            this.Sb.push(c);
            null == Ja.Xg && (Ja.Xg = Ia.parse("0,s.24<x-30<y17<,.42,s.22>x-29>y16>,.84,s.21<x-28<y15<,1.26,s.22>x-29>y16>,1.68,s.24x-30y17"));
            c = new Ta(a(0));
            c.loop(Ja.Xg);
            this.Sb.push(c);
            null == Ja.Wg && (Ja.Wg = Ia.parse("0,s.37<x-2<y31<,.47,s.38>x-3>y32>,.94,s.4<x-4<y33<,1.41,s.38>x-3>y32>,1.88,s.37x-2y31"));
            c = a(4);
            c.ka(350);
            c = new Ta(c);
            c.loop(Ja.Wg);
            this.Sb.push(c)
        }
        H() {
            this.l.H();
            this.l = null
        }
    }
    Ja.g = !0;
    Object.assign(Ja.prototype, {
        j: Ja
    });
    class Zc extends Ba {
        constructor(a) {
            super();
            this.V = a;
            this.Ra = null;
            this.Ng = !1;
            this.ql = -1;
            this.xp = t.Wb();
            this.Ye = 0;
            this.Lt = !1;
            this.gn = 0;
            this.qg = this.sd = null;
            this.Dk = this.Gk = this.Jk = 0;
            this.kj = this.Ve = !1;
            this.lc = null;
            this.lj = 0;
            this.Hm = this.sv = this.Fq = !1;
            this.Xp = .8;
            this.W = 0
        }
        AJ(a, b, c) {
            a = t.Ua(a, c);
            return (t.Ua(b, c).Mk() - a.Mk()) * Yc
        }
        LJ(a, b) {
            this.xp.x = a;
            this.xp.y = b
        }
        KJ(a) {
            z.play(z.lG);
            let b = this.AJ(this.xp, a, new t(this.x,this.y));
            180 < b ? b -= 360 : -180 > b && (b += 360);
            var c = this.lr;
            c.ka(c.Od + b);
            c = this.uv;
            c.ka(c.Od + b);
            c = this.tv;
            c.ka(c.Od + b);
            b = 0 < b ? Math.min(Math.max(1, b), 2.25) : Math.max(Math.min(-1, b), -2.25);
            null != this.Ra && (0 < b ? 660 > this.Ra.pc() && this.Ra.Hb(b) : 0 != b && 3 < this.Ra.va.length && this.Ra.MM(-b),
            this.sv = !0);
            this.xp.wb(a)
        }
        update(a) {
            super.update(a);
            this.Hm && (this.Xp -= 1.5 * a,
            0 >= this.Xp && (this.W = -1,
            this.Hm = !1));
            if (null != this.nd) {
                let b = t.Ua(this.jb.path[this.jb.hf], this.jb.i)
                  , c = 0;
                15 < Math.abs(b.x) && (c = 0 < b.x ? 10 : -10);
                this.nd.ka(Ma.Ik(this.nd.Od, c, 60, a))
            }
            this.Ng && this.sv && null != this.Ra && (a = .7 * this.Ra.pc(),
            0 == a ? this.lr.J(.001) : this.lr.J(.4 * Math.max(0, Math.min(1.2, 1 - a / 784))))
        }
        zO(a) {
            this.Ve && this.Fq && (this.Fq = !1,
            this.kj = !0,
            z.play(z.ZF),
            this.lc.start());
            if (this.Ve && this.kj) {
                0 != this.lc.state && (this.lj += 46.800000000000004 * a);
                a = 0;
                let c = !1;
                if (null != this.Ra) {
                    var b = this.Ra.Cs;
                    let d = b.length
                      , e = 0;
                    for (; e < d; ) {
                        let f = e++
                          , g = b[f]
                          , h = b[f + 1]
                          , m = Math.max(28, g.Le(h));
                        if (this.lj >= a && (this.lj < a + m || f > d - 3)) {
                            b = t.Ua(h, g);
                            b.multiply((this.lj - a) / m);
                            this.lc.T.o(g.x + b.x);
                            this.lc.T.s(g.y + b.y);
                            f > d - 3 && (c = !0);
                            0 != this.lc.state && this.lc.T.ka(b.Mk() * Yc + 270);
                            break
                        } else
                            a += m
                    }
                }
                c && (this.lj = -1)
            }
        }
        xI() {
            0 < this.Ye ? (this.back.O(!1),
            this.sd.O(!0)) : (this.back.o(this.x),
            this.back.s(this.y),
            this.back.O(!0),
            null != this.sd && this.sd.O(!1));
            (-1 != this.W || this.Hm) && this.EI(this.x, this.y, -1 != this.W ? this.W : this.nA)
        }
        EI(a, b, c) {
            this.Yg.color.x = .2;
            this.Yg.color.y = .5;
            this.Yg.color.z = .9;
            this.Yg.color.w = this.Xp;
            let d = this.Yg.F;
            d.x = a;
            d.y = b;
            this.Yg.W = c
        }
        M() {
            this.Ng && (this.tv.O(-1 != this.ql),
            this.uv.O(-1 == this.ql));
            null != this.nd && (this.nd.o(this.x),
            this.nd.s(this.y));
            null != this.Ra && this.Ra.M();
            0 >= this.Ye ? (this.xa.o(this.x),
            this.xa.s(this.y),
            this.xa.O(!0)) : (this.xa.O(!1),
            -1 != this.Jk ? this.qg.Yb(l.aE) : this.qg.Yb(l.Yv),
            this.qg.o(this.x),
            this.qg.s(this.y))
        }
        ZA(a) {
            this.Ra = a;
            this.nA = this.W;
            this.W = -1;
            this.Ve && (this.Fq = !0)
        }
        setRadius(a) {
            this.nA = this.W;
            this.W = a;
            var b = this.V.ma(2)
              , c = this.V.ma(7);
            -1 == a || -2 == a ? (a = V.Yk() ? [l.UD, l.VD] : [l.ZD, l.$D],
            this.back = new B(null,r.sg,a[0]),
            this.back.J(.4),
            this.back.F(),
            this.xa = new B(null,r.sg,a[1]),
            this.xa.F(),
            this.xa.J(.4),
            b.S(this.back.B),
            c.S(this.xa.B)) : (this.back = new B(null,r.sg,l.SD),
            this.back.F(),
            this.back.J(.4),
            this.xa = new B(null,r.sg,l.TD),
            this.xa.F(),
            this.xa.J(.5),
            b.S(this.back.B),
            c.S(this.xa.B),
            this.Hm = !1,
            this.Yg = new Ld,
            this.zo = new Ra,
            this.zo.df(this.Yg),
            c.S(this.zo));
            let d = this;
            this.Ng && (b = function(e) {
                e = new B(null,r.sg,e);
                e.F();
                e.o(d.x);
                e.s(d.y);
                e.J(.4);
                return e
            }
            ,
            c = b(l.cE),
            this.V.ma(2).S(c.B),
            this.lr = b(l.dE),
            this.V.ma(7).S(this.lr.B),
            this.tv = b(l.bE),
            this.V.ma(7).S(this.tv.B),
            this.uv = b(l.eE),
            this.V.ma(7).S(this.uv.B),
            this.sv = !0)
        }
        jN(a, b, c) {
            this.Ye = a;
            this.Lt = b;
            this.gn = c;
            0 < this.Ye && (this.sd = new R,
            a = new B(this.sd,r.sg,l.WD),
            a.o(-63),
            (new B(this.sd,r.sg,l.YD)).o(this.Ye / .4 - 13),
            b = new B(this.sd,r.sg,l.XD),
            b.o(-63 + a.ta()),
            b.Mu(this.Ye / .4 - 13),
            this.sd.J(.4),
            this.sd.F(),
            this.V.ma(4).S(this.sd.B),
            this.qg = new B(null,r.sg,l.Yv),
            this.qg.F(),
            this.qg.J(.4),
            this.V.ma(7).S(this.qg.B),
            this.Lt ? (this.Gk = this.y - this.gn,
            this.Dk = this.y + (this.Ye - this.gn),
            a = (this.Gk + this.Dk) / 2,
            this.sd.o(this.x),
            this.sd.s(a),
            this.sd.ka(90),
            this.qg.ka(90)) : (this.Gk = this.x - this.gn,
            this.Dk = this.x + (this.Ye - this.gn),
            this.sd.o((this.Gk + this.Dk) / 2),
            this.sd.s(this.y)));
            this.Jk = -1
        }
        ZM() {
            this.nd = new R;
            this.nd.J(.3076923076923077);
            var a = new B(this.nd,r.nd,l.gD);
            a.F();
            a.o(a.$a() - 6);
            a.s(a.Oa - 54);
            this.V.ma(7).S(this.nd.B);
            a = new B(this.nd,r.nd,l.hD);
            a.F();
            a.o(-6);
            a.s(-54);
            a.ja().loop(xi);
            a.ja().sA()
        }
        yN(a) {
            this.Ve = a;
            this.kj = this.Fq = !1;
            a && (this.lc = new af,
            this.lc.T.o(this.x),
            this.lc.T.s(this.y),
            this.V.sa(this.lc),
            this.V.ma(9).S(this.lc.T.B))
        }
        As() {
            this.Ra = null
        }
    }
    Zc.g = !0;
    Zc.u = Ba;
    Object.assign(Zc.prototype, {
        j: Zc
    });
    class pb extends Zc {
        constructor(a) {
            super(a.V);
            this.Fd = a;
            this.Sb = []
        }
        qk() {
            return 0 > this.state
        }
        Xm() {
            1 != this.state && (this.state = 1,
            this.time = 0)
        }
        Ym() {
            -1 != this.state && (this.state = -1,
            this.time = 0)
        }
        Yr() {
            function a(d) {
                d = new B(b.hb,r.Fd,l.Yh(l.Zn, d));
                d.F();
                return d
            }
            this.hb = new R;
            this.V.ma(4).S(this.hb.B);
            let b = this;
            null == pb.gx && (pb.gx = Ia.parse("0,s.17<x-26<y3<,.65,s.18>x-25>y2>,1.3,s.2<x-24<y1<,1.95,s.18>x-25>y2>,2.6,s.17x-26y3"));
            var c = new Ta(a(1));
            c.loop(pb.gx);
            this.Sb.push(c);
            null == pb.Xg && (pb.Xg = Ia.parse("0,s.36<x23<y14<,.45,s.32>x22>y13>,.9,s.27<x21<y12<,1.35,s.32>x22>y13>,1.8,s.36x23y14"));
            c = new Ta(a(2));
            c.loop(pb.Xg);
            this.Sb.push(c);
            null == pb.Wg && (pb.Wg = Ia.parse("0,s.44<x-3<y25<,.5,s.4>x-2>y24>,1,s.36<x-1<y23<,1.5,s.4>x-2>y24>,2,s.44x-3y25"));
            c = new Ta(a(4));
            c.loop(pb.Wg);
            this.Sb.push(c)
        }
        H() {
            null != this.Ra && (this.Ra.eu(0),
            this.Ra.H());
            this.As();
            this.hb.H();
            this.hb = null;
            this.back.H();
            this.xa.H();
            this.zo.H();
            this.xa = this.back = this.V = this.zo = null
        }
        update(a) {
            super.update(a);
            if (0 < this.state) {
                this.time += a;
                let b = Math.min(1, this.time / .36);
                this.alpha = b;
                1 == b && (this.state = 0)
            }
            0 > this.state && -2 != this.state && (this.time += a,
            a = Math.min(1, this.time / .16),
            this.alpha = 1 - a,
            1 == a && (this.state = -2,
            this.Fd.CA()))
        }
        M() {
            super.M();
            this.hb.o(this.x);
            this.hb.s(this.y);
            this.hb.aa(this.alpha);
            this.back.aa(this.alpha);
            this.xa.aa(this.alpha);
            this.Yg.color.w = this.alpha
        }
    }
    pb.g = !0;
    pb.u = Zc;
    Object.assign(pb.prototype, {
        j: pb
    });
    class Ze extends Pb {
        constructor(a, b) {
            super(b);
            this.V = a;
            this.Kc = [];
            this.size = .6;
            this.Ou = .2;
            this.angle = 360 * V.gh();
            this.jo = 15;
            this.mq = 30;
            this.Tc = .8;
            this.kz = .3;
            this.duration = 1.5;
            this.speed = 140;
            this.Lq = 35
        }
        Fn(a) {
            super.Fn(a)
        }
        Ci(a) {
            super.Ci(a);
            this.angle += 360 / this.cv;
            let b = this.size + V.bc() * this.Ou
              , c = l.Yh(l.Zn, V.Ag(0, 2))
              , d = r.Fd.Mb.Qe(c).Zb;
            a.width = d.x * b;
            a.height = d.y * b;
            a.Fo = this.dl + this.mq * V.bc();
            a = new B(null,r.Fd,c);
            a.F();
            this.V.ma(4).S(a.B);
            this.Kc.push(a)
        }
        qj(a, b, c) {
            a.angle += a.Fo * c;
            super.qj(a, b, c)
        }
        Hh(a) {
            super.Hh(a);
            let b = this.Kc[a];
            this.Kc.splice(a, 1);
            b.H()
        }
        M() {
            super.M();
            let a = 0
              , b = this.ic.length;
            for (; a < b; ) {
                var c = a++;
                let d = this.ic[c];
                c = this.Kc[c];
                c.ka(d.angle);
                c.J(d.width / c.X.x * .4);
                c.o(d.i.x);
                c.s(d.i.y);
                c.aa(d.alpha)
            }
        }
        update(a) {
            super.update(a);
            a = 0;
            let b = this.ic.length;
            for (; a < b; ) {
                let c = this.ic[a++];
                0 < c.Tc && (c.Tc < .7 * c.wt && (c.alpha = c.Tc / (.7 * c.wt)),
                c.dir.x *= .9,
                c.dir.y *= .9,
                c.width *= 1.015,
                c.height *= 1.015)
            }
        }
    }
    Ze.g = !0;
    Ze.u = Pb;
    Object.assign(Ze.prototype, {
        j: Ze
    });
    class bf extends oc {
        constructor(a, b, c) {
            super();
            this.x = b;
            this.y = c;
            this.T = new B(null,r.tb,l.Xv);
            this.T.J(.4);
            this.T.F();
            this.T.o(b);
            this.T.s(c);
            this.W = 40;
            a.ma(4).S(this.T.B);
            this.st = !1
        }
        sk(a, b) {
            return Gg.Uu(a, b, this.x, this.y, this.W)
        }
        toggle() {
            this.st = !this.st;
            this.T.Yb(this.st ? l.RD : l.Xv)
        }
        M() {
            super.M();
            this.T.o(this.x);
            this.T.s(this.y)
        }
    }
    bf.g = !0;
    bf.u = oc;
    Object.assign(bf.prototype, {
        j: bf
    });
    class ob extends Ba {
        constructor(a) {
            super();
            this.V = a;
            this.active = !1;
            this.vn = this.am = this.un = this.rm = 0;
            this.Hs = null
        }
        XJ(a, b) {
            ob.Ig = null;
            this.x = a;
            this.y = b;
            this.Gi = 0;
            null == vh && (a = vh = new Ia,
            a.setScale(.5599999999999999, .4, 0, 100),
            a.dd(.7, 0),
            a.setScale(.42000000000000004, .52, .5),
            a.dd(1, .5));
            this.l = new R;
            this.V.ma(4).S(this.l.B);
            this.vi = new B(this.l,r.vh,l.fE);
            this.vi.F();
            this.vi.aa(0);
            this.Hs = new Ta(this.vi);
            this.op = new B(this.l,r.vh,l.hE);
            this.op.F();
            this.op.J(.4);
            this.Bj = new B(this.l,r.vh,l.gE);
            this.Bj.F();
            this.Bj.J(.4);
            this.Bj.aa(0);
            this.Bj.s(1);
            this.N = new B(this.l,r.vh,[l.iE, l.jE, l.kE][D.gf]);
            this.N.F();
            this.N.J(.4);
            this.N.aa(0);
            null == wh && (a = wh = new Ia,
            a.dd(0, 0),
            a.dd(1, .2),
            a.ho(.4, .4, 0),
            a.ho(.4, .32000000000000006, .07),
            a.ho(.34, .42000000000000004, .05),
            a.ho(.4, .4, .05),
            a.Xr(-4, 0),
            a.Xr(0, .1),
            a.Xr(-1, .05),
            a = Vh = new Ia,
            a.Ql(.4, .35, -100),
            a.Ql(.37200000000000005, .35, 100),
            a.Ql(.34800000000000003, .35, -100),
            a.Ql(.37200000000000005, .35, 100),
            a.Ql(.4, 0),
            a = Wh = new Ia,
            a.dd(1, 0),
            a.dd(.6, .06),
            a.dd(0, .1),
            a.setScale(.4, .4, 0),
            a.setScale(.45999999999999996, .32000000000000006, .06),
            a.setScale(.4, .4, .1),
            a.Fg(0, 0, 0, 100),
            a.Fg(0, -4, .06, -100),
            a.Fg(0, 4, .1));
            this.ms = new Ta(this.N)
        }
        update(a) {
            this.oa = new t(this.x,this.y);
            super.update(a);
            null != ob.Ig && (ob.Ig.i = new t(this.x,this.y),
            ob.Ig.oa = new t(this.x,this.y),
            1 != this.Gi && (this.Gi = 1));
            0 < this.un && (this.un -= a,
            0 > this.un && (ob.Ig.lm = !1,
            ob.Ig.i = new t(this.x,this.y),
            ob.Ig.oa = this.oa.rb(),
            ob.Ig = null));
            0 < this.rm && (this.rm -= a,
            0 >= this.rm && this.Hs.loop(vh, !0));
            0 < this.am && (this.am -= a,
            0 >= this.am && this.ms.loop(Vh));
            0 < this.vn && (this.vn -= a,
            0 >= this.vn && (this.Gi = 0))
        }
        M() {
            super.M();
            this.l.o(this.x);
            this.l.s(this.y)
        }
        Ui(a, b) {
            return 1 == this.Gi && 35 > t.kd(a, b, this.x, this.y) && null != ob.Ig ? (this.aK(),
            !0) : !1
        }
        ux(a) {
            z.play(z.OF);
            ob.Ig = a;
            a.lm = !0;
            a.i = a.oa = new t(this.x,this.y);
            a = this.V.vk;
            let b = 0;
            for (; b < a.length; ) {
                let c = a[b];
                ++b;
                c.Gi = 1;
                c.op.Ub().alpha(0, .3);
                c.Bj.Ub().alpha(1, .3);
                c.ms.play(wh);
                c.vi.qa(.5599999999999999);
                c.vi.ub(.4);
                c.vi.aa(.7);
                c.rm = .4 * Math.random();
                c.am = .2
            }
        }
        aK() {
            z.play(z.PF);
            let a = this.V.vk
              , b = 0;
            for (; b < a.length; ) {
                let c = a[b];
                ++b;
                c.op.Ub().alpha(1, .3);
                c.Bj.Ub().alpha(0, .3);
                c.ms.play(Wh);
                c.Hs.stop();
                c.vi.aa(0);
                c.vn = .5;
                c.Gi = 0
            }
            this.un = .01
        }
    }
    ob.g = !0;
    ob.u = Ba;
    Object.assign(ob.prototype, {
        j: ob
    });
    class cf extends Ob {
        constructor(a, b) {
            super();
            this.oz = b;
            this.Cf = 0;
            var c = tb.Wn.w / 2;
            let d = tb.Wn.G / 2;
            c = this.ca = new W(0 - c,0 - d,c,d);
            this.ga = new W(c.m,c.C,c.A,c.D);
            this.l = new R;
            this.l.J(.4);
            a.ma(8).S(this.l.B);
            this.Vb = new B(this.l,r.Xe,l.nE);
            this.Vb.aa(.4);
            this.Vb.F();
            this.Vb.J(2 * b / this.Vb.X.x * 1.5 / .4);
            this.Vb.Oh(3);
            (new B(this.l,r.Xe,l.lE)).F();
            (new B(this.l,r.Xe,l.oE)).F();
            this.Ia = new B(this.l,r.Xe);
            this.Ia.ja().loop(yi);
            this.Ia.F();
            this.$ = null;
            this.Yl = new ac(a);
            this.tc = null
        }
        update(a) {
            super.update(a);
            this.ga.m = this.x + this.ca.m;
            this.ga.C = this.y + this.ca.C;
            this.ga.A = this.x + this.ca.A;
            this.ga.D = this.y + this.ca.D
        }
        M() {
            super.M();
            this.x = this.constraint.i.x;
            this.y = this.constraint.i.y;
            this.l.O(null == this.tc);
            this.l.o(this.x);
            this.l.s(this.y);
            this.l.ka(this.rotation);
            this.Yl.o(this.x);
            this.Yl.s(this.y)
        }
    }
    cf.g = !0;
    cf.u = Ob;
    Object.assign(cf.prototype, {
        j: cf
    });
    class Md {
        static get() {
            let a = F.box
              , b = F.level;
            if (null == Md.Ct[a]) {
                let c = k.ec([161, 156, 151, 146, 141, 136, 131, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80][a - 1]);
                Md.Ct[a] = JSON.parse(c)
            }
            return Md.Ct[a][b - 1]
        }
    }
    Md.g = !0;
    class yb {
        static GA(a, b) {
            return 0 > a == 0 > b
        }
        static Sx(a, b, c) {
            return Math.max(Math.min(a, c), b)
        }
        static tn(a, b) {
            return Math.floor(Math.random() * (b - a + 1) + a)
        }
        static iM() {
            return .5 < Math.random()
        }
        static rK(a, b, c, d, e, f, g, h) {
            let m = e - a + g - c
              , n = f - b + h - d;
            a = c - a;
            b = d - b;
            e = g - e;
            f = h - f;
            h = Math.abs(b * e - f * a);
            return Math.abs(e * n - f * m) <= h ? Math.abs(a * n - b * m) <= h : !1
        }
    }
    yb.g = !0;
    class Eg {
        constructor(a, b) {
            this.value = a;
            this.$i = b
        }
    }
    Eg.g = !0;
    Object.assign(Eg.prototype, {
        j: Eg
    });
    class Qb extends ua {
        constructor(a, b) {
            super();
            this.V = a;
            this.Ia = 0;
            this.We = !1;
            this.x = b.x * td.$n;
            this.y = b.y * td.$n;
            this.Sy = V.Ag(5, 20);
            this.$r = 3;
            this.ex = !1;
            this.time = 0;
            b = a.ma(0);
            this.Gn = new B(null,r.yo);
            this.Gn.F();
            this.Gn.J(.4);
            b.S(this.Gn.B);
            this.cm = new R;
            this.cm.J(.4);
            this.char = new B(this.cm,r.rs,l.nC);
            this.char.F();
            b.S(this.cm.B);
            this.blink = new B(null,r.rs,l.jC);
            this.blink.F();
            this.blink.J(.4);
            this.blink.O(!1);
            b.S(this.blink.B);
            var c = P.rb(Qb.oG);
            c.x -= 128;
            c.y -= 128;
            let d = c.x
              , e = c.y;
            c = this.ca = new W(d,e,d + c.w,e + c.G);
            this.ga = new W(c.m,c.C,c.A,c.D);
            this.Nd();
            this.Gn.o(this.x + Math.round(.4 * zi));
            this.Gn.s(this.y + Math.round(.4 * Ai));
            a.Wc && (this.kf = new B(null,r.Pj),
            this.kf.J(.4),
            this.kf.ja().loop(Xh),
            this.kf.F(),
            this.kf.o(this.x),
            this.kf.s(this.y),
            b.S(this.kf.B),
            this.lf = new B(null,r.Pj),
            this.lf.J(.4),
            this.lf.ja().loop(Yh),
            this.lf.F(),
            this.lf.o(this.x),
            this.lf.s(this.y),
            b.S(this.lf.B));
            this.Vd = null;
            this.jl = 0;
            this.Jq = -1;
            this.xd(0)
        }
        NL() {
            this.We || this.xd(10)
        }
        OL() {
            !this.We && this.$l() && this.xd(1)
        }
        PL() {
            !this.We && this.$l() && this.xd(2)
        }
        RL() {
            !this.We && this.$l() && this.xd(7)
        }
        QL() {
            !this.We && this.$l() && this.xd(8)
        }
        LL() {
            this.We || (this.xd(5),
            this.wB())
        }
        TL() {
            this.We || (this.xd(6),
            this.wB(),
            this.We = !0)
        }
        dA() {
            !this.We && this.$l() && this.xd(3)
        }
        fA() {
            this.We || this.xd(11)
        }
        fK() {
            switch (this.Ia) {
            case 0:
            case 1:
            case 2:
                return !0;
            default:
                return !1
            }
        }
        xq(a) {
            if (this.Vd != a) {
                let b = null == this.Vd;
                this.Vd = a;
                b ? this.fA() : a ? (this.dA(),
                this.kf.ja().stop(),
                this.kf.O(!1),
                this.lf.ja().stop(),
                this.lf.O(!1),
                z.stop(this.Jq),
                this.char.ub(1)) : this.We || (this.jl = 0,
                this.fA(),
                this.kf.ja().play(Xh),
                this.kf.O(!0),
                this.lf.ja().play(Yh),
                this.lf.O(!0))
            }
        }
        $l() {
            return this.V.Wc ? this.Vd : !0
        }
        wB() {
            this.V.Wc && (z.stop(this.Jq),
            this.kf.O(!1),
            this.lf.O(!1),
            this.jl = 0)
        }
        xd(a) {
            let b;
            switch (a) {
            case 3:
            case 4:
            case 6:
            case 7:
            case 8:
            case 10:
                b = r.TH;
                break;
            case 11:
                b = r.Pj;
                break;
            default:
                b = r.rs
            }
            this.char.ff(b);
            this.Ia = a;
            9 == a ? this.char.ja().loop(Zh[a]) : this.char.ja().play(Zh[a], 2 == a ? 2 : 1).$d(O(this, this.iL))
        }
        iL() {
            let a = this;
            switch (this.Ia) {
            case 0:
                this.$r--;
                0 == this.$r && (this.blink.O(!0),
                this.blink.ja().play(Bi).$d(function() {
                    a.blink.O(!1)
                }),
                this.$r = 3);
                0 == --this.Sy ? (V.Yk() ? this.OL() : this.PL(),
                this.Sy = V.Ag(5, 20)) : this.xd(0);
                break;
            case 1:
            case 2:
            case 3:
            case 4:
                this.xd(0);
                break;
            case 6:
                this.xd(9);
                break;
            case 8:
                this.xd(4);
                break;
            case 10:
                this.xd(0);
                break;
            case 11:
                this.ex = !0
            }
        }
        update(a) {
            super.update(a);
            this.Nd();
            if (this.V.Wc) {
                if (this.ex) {
                    let b = ya(Math.sin(2 * this.time), -1, 1, .95, 1.05);
                    this.char.de(0, 433);
                    this.char.ub(b);
                    this.time += a
                }
                this.Vd || (this.jl += a,
                4 < this.jl && (this.jl = 0,
                this.Jq = [1036, 1035, 1034][V.Ag(0, 2)],
                z.play(this.Jq)))
            }
        }
        M() {
            super.M();
            this.ga.m = this.x + this.ca.m;
            this.ga.C = this.y + this.ca.C;
            this.ga.A = this.x + this.ca.A;
            this.ga.D = this.y + this.ca.D;
            this.cm.o(this.x);
            this.cm.s(this.y);
            this.blink.o(this.x);
            this.blink.s(this.y)
        }
    }
    Qb.g = !0;
    Qb.u = ua;
    Object.assign(Qb.prototype, {
        j: Qb
    });
    class df extends Xc {
        constructor(a) {
            super();
            this.Zt = [];
            this.hA = new R;
            a.ma(0).S(this.hA.B)
        }
        CH(a, b) {
            var c = [.3, .3, .5, .5, .6];
            var d = c = c[yb.tn(0, c.length - 1)];
            yb.iM() ? c *= 1 + yb.tn(0, 1) / 10 : d *= 1 + yb.tn(0, 1) / 10;
            let e = Math.min(1 - c, 1 - d)
              , f = Math.random()
              , g = new Hg;
            this.hA.appendChild(g.T);
            g.FL = b;
            g.x = a.x;
            g.y = a.y;
            g.Rq = e + c;
            g.Sq = e + d;
            g.fl = g.Rq * f;
            g.gl = g.Sq * f;
            g.Ro = c;
            g.So = d;
            g.Po = .3;
            g.Ru = 1;
            g.alpha = .7 * f + .3;
            this.Zt.push(g)
        }
        Qx(a, b, c) {
            let d = c.jb.path[a];
            b = t.Ua(c.jb.path[b], d);
            c = b.pc();
            if (!(c < Ci)) {
                c = Math.floor(c / 17.6);
                b.normalize();
                for (var e = 0; e <= c; ) {
                    var f = t.zb(d, t.ld(b, 17.6 * e));
                    f.x += yb.tn(-1.6, 1.6);
                    f.y += yb.tn(-1.6, 1.6);
                    this.CH(f, a);
                    ++e
                }
            }
        }
        update(a) {
            super.update(a);
            let b = 0
              , c = this.Zt;
            for (; b < c.length; ) {
                let e = c[b];
                ++b;
                var d = Ma.Pi(e.fl, e.Ro, 1, a);
                e.fl = d.value;
                d.$i && (d = e.Rq,
                e.Rq = e.Ro,
                e.Ro = d);
                d = Ma.Pi(e.gl, e.So, 1, a);
                e.gl = d.value;
                d.$i && (d = e.Sq,
                e.Sq = e.So,
                e.So = d);
                d = Ma.Pi(e.alpha, e.Po, 1, a);
                e.alpha = d.value;
                d.$i && (d = e.Ru,
                e.Ru = e.Po,
                e.Po = d)
            }
        }
        M() {
            let a = 0
              , b = this.Zt;
            for (; a < b.length; ) {
                let c = b[a];
                ++a;
                c.T.tN(c.x, c.y, .4 * c.fl, .4 * c.gl);
                c.T.aa(c.alpha)
            }
        }
    }
    df.g = !0;
    df.u = Xc;
    Object.assign(df.prototype, {
        j: df
    });
    class Hg {
        constructor() {
            this.fl = this.Rq = this.Ro = this.gl = this.Sq = this.So = this.alpha = this.Ru = this.Po = 1;
            this.FL = this.x = this.y = 0;
            this.T = new B(null,r.nd,l.jD);
            this.T.F()
        }
    }
    Hg.g = !0;
    Object.assign(Hg.prototype, {
        j: Hg
    });
    class Rb extends Ba {
        constructor(a) {
            super();
            this.T = new B(null,r.Wk,l.pE);
            this.T.F();
            this.T.J(.4);
            a.ma(4).S(this.T.B);
            a = Rb.ew.w / 2;
            let b = Rb.ew.G / 2;
            this.ca = new W(0 - a,0 - b,a,b);
            this.angle = 0;
            this.Jb = t.Wb();
            this.Kb = t.Wb();
            this.KB = this.Jn = 0;
            this.Go = []
        }
        KI(a) {
            a = new ef(a,this.angle * Yc - 90);
            let b = new t(this.x + 40,this.y);
            b.Sa(this.angle - Math.PI / 2, this.x, this.y);
            a.x = b.x;
            a.y = b.y;
            a.Fn(5);
            this.Go.push(a)
        }
        jd() {
            var a = this.ca;
            a = (a.A - a.m) / 2;
            this.Jb.x = this.x - a;
            this.Kb.x = this.x + a;
            this.Jb.y = this.Kb.y = this.y;
            this.angle = this.rotation * Ea;
            this.Jb.Sa(this.angle, this.x, this.y);
            this.Kb.Sa(this.angle, this.x, this.y)
        }
        update(a) {
            super.update(a);
            this.Nd();
            let b = 0
              , c = this.Go;
            for (; b < c.length; ) {
                let d = c[b];
                ++b;
                if (0 == d.ic.length) {
                    ta.remove(this.Go, d);
                    break
                }
                d.update(a)
            }
        }
        M() {
            super.M();
            this.T.o(this.x);
            this.T.s(this.y);
            this.T.ka(this.rotation);
            this.T.J(.4 * this.ti);
            let a = 0
              , b = this.Go;
            for (; a < b.length; )
                b[a++].M()
        }
        og() {
            let a = this.ca
              , b = this.ca;
            return new t(1.2 * (a.A - a.m),1.2 * (b.D - b.C))
        }
        xi() {
            let a = new t(.8,-1.2000000000000002);
            a.rotate(this.rotation * Ea);
            return t.zb(new t(this.x,this.y), a)
        }
        Of(a) {
            super.Of(a);
            let b = new t(.8,-1.2000000000000002);
            b.rotate(this.rotation * Ea);
            super.Of(t.Ua(a, b))
        }
    }
    Rb.g = !0;
    Rb.u = Ba;
    Object.assign(Rb.prototype, {
        j: Rb
    });
    class ef extends Pb {
        constructor(a, b) {
            super(5);
            this.V = a;
            this.angle = b;
            this.jo = 10;
            this.speed = 500;
            this.Lq = 100;
            this.Tc = .6;
            this.size = 12;
            this.Oo = 100;
            this.Rh.r = 1;
            this.Rh.Sd = 1;
            this.Rh.b = 1;
            this.Rh.a = .6;
            this.eh.r = 1;
            this.eh.Sd = 1;
            this.eh.b = 1;
            this.eh.a = 0;
            this.Kc = []
        }
        Ci(a) {
            super.Ci(a);
            a = new B(null,r.Wk,l.bA(6 + V.Ag(0, 2)));
            a.J(.4);
            a.F();
            a.Oh(3);
            this.V.ma(4).S(a.B);
            this.Kc.push(a)
        }
        qj(a, b, c) {
            super.qj(a, b, c);
            a.dir.multiply(.9);
            b = t.ld(a.dir, c);
            b.add(this.tb);
            a.i.add(b)
        }
        Hh(a) {
            super.Hh(a);
            let b = this.Kc[a];
            this.Kc.splice(a, 1);
            b.H()
        }
        M() {
            super.M();
            let a = 0
              , b = this.ic.length;
            for (; a < b; ) {
                var c = a++;
                let d = this.ic[c];
                c = this.Kc[c];
                c.o(d.i.x);
                c.s(d.i.y);
                c.aa(d.color.a)
            }
        }
    }
    ef.g = !0;
    ef.u = Pb;
    Object.assign(ef.prototype, {
        j: ef
    });
    class Nd extends ua {
        constructor(a) {
            super();
            this.V = a;
            this.l = new R;
            a.ma(0).S(this.l.B);
            this.me = [];
            this.He = [];
            this.Pu = -1;
            this.Vm = t.dL();
            this.wc = new B(this.l,r.wc,l.$E);
            this.wc.F();
            this.Kq = new Ra;
            this.Kq.df(new $c);
            this.l.node.S(this.Kq);
            this.Dn = new Ra;
            this.Dn.df(new $c);
            a.ma(11).S(this.Dn);
            this.YB = new B(this.l,r.wc,l.cw);
            this.YB.F();
            this.ov = new B(this.l,r.wc,l.cw);
            this.ov.qa(-1);
            this.ov.F();
            this.nv = new B(this.l,r.wc,l.bw);
            this.nv.F();
            this.Un = new B(this.l,r.wc,l.bw);
            this.Un.qa(-1);
            this.Un.F();
            this.Mg = new B(this.l,r.wc,l.$v);
            this.Mg.F();
            this.Mg.ka(90);
            this.Tn = new B(this.l,r.wc,l.$v);
            this.Tn.F();
            this.Tn.ka(-90);
            this.tj = new B(this.l,r.wc,l.aw);
            this.tj.F();
            this.tj.ka(90);
            this.tj.O(!1);
            this.uj = new B(this.l,r.wc,l.aw);
            this.uj.F();
            this.uj.ka(-90);
            this.uj.O(!1);
            this.XB = new B(this.l,r.wc,l.ZE);
            this.XB.F()
        }
        H() {
            this.me = this.He = null;
            this.l.H();
            this.V = this.l = null
        }
        RI() {
            this.l.aa(0);
            this.l.Ub().alpha(1, .2);
            let a = this.V.ma(0);
            a.uq(this.l.node, a.fk() - 1)
        }
        kb(a) {
            this.size = a;
            var b = this.size / 216;
            this.l.J(.4);
            this.wc.J(b);
            this.nv.J(b);
            this.Un.qa(-b);
            this.Un.ub(b);
            a = .4 <= b ? b : .4;
            this.YB.J(a);
            this.ov.J(-a);
            b = .75 <= b ? b : .75;
            this.Mg.J(b);
            this.Tn.J(b);
            this.tj.J(b);
            this.uj.J(b);
            this.XB.J(1 - .5 * (1 - a));
            this.ee = this.size;
            a = this.Kq.effect;
            a.W = this.wc.ta() / 2;
            a.lineWidth = 10 * b;
            a = this.size / this.l.pb - this.Mg.ta() / 2 * .76;
            this.Mg.o(this.tj.o(-a));
            this.Tn.o(this.uj.o(a))
        }
        Ly() {
            return !this.Mg.Sg
        }
        LA(a) {
            this.Mg.O(!a)
        }
        PA(a) {
            this.tj.O(a)
        }
        QA(a) {
            this.uj.O(a)
        }
        cI() {
            let a = this.He.length, b, c = 0;
            for (; c < a; )
                if (b = this.He[c++],
                b != this && this.dI(b))
                    return !0;
            return !1
        }
        M() {
            super.M();
            this.l.o(this.x);
            this.l.s(this.y);
            this.l.ka(this.rotation);
            this.nv.ka(-this.rotation);
            this.Un.ka(-this.rotation);
            this.Kq.ne = this.uj.Sg || this.tj.Sg ? 2 : 1;
            let a = this.He.length;
            var b;
            let c = this.He.indexOf(this);
            for (b = 0; b < a; )
                this.He[b++].Dn.ne = 1;
            let d = 0;
            for (; d < a; )
                b = this.He[d++],
                b != this && b.cI() && this.He.indexOf(b) < c && b.BI(this.x, this.y, this.ee, b.x, b.y, b.ee)
        }
        BI(a, b, c, d, e, f) {
            this.Dn.ne = 1;
            let g = t.kd(a, b, d, e);
            g >= c + f || c >= g + f || ((new t(a - d,b - e)).angle(),
            a = this.Dn,
            a.ne = 2,
            b = a.ib,
            b.translate.x = this.x,
            b.translate.y = this.y,
            b.I = b.I & -2 | 496,
            b = a.ib,
            b.scale.x = b.scale.y = this.l.pb,
            b.I = b.I & -2 | 500,
            a = a.effect,
            a.W = this.wc.ta() / 2,
            a.yp = .2,
            a.lineWidth = 6 * this.Mg.pb)
        }
        dI(a) {
            if (this.x == a.x && this.y == a.y && this.size == a.size)
                return !1;
            let b = this.me.length
              , c = 0;
            for (; c < b; )
                if (0 <= a.me.indexOf(this.me[c++]))
                    return !0;
            return !1
        }
        rb() {
            let a = new Nd(this.V);
            a.Sm = this.Sm;
            a.x = this.x;
            a.y = this.y;
            a.rotation = this.rotation;
            a.He = this.He;
            a.me = this.me;
            a.pn = -1;
            let b = this.Sm
              , c = a.rotation * Ea;
            a.kk = new t(a.x - b,a.y);
            a.lk = new t(a.x + b,a.y);
            a.kk.Sa(c, a.x, a.y);
            a.lk.Sa(c, a.x, a.y);
            a.kb(this.size);
            a.LA(this.Ly());
            a.Mg.O(!1);
            a.Tn.O(!1);
            return a
        }
    }
    Nd.g = !0;
    Nd.u = ua;
    Object.assign(Nd.prototype, {
        j: Nd
    });
    class Ua extends Ba {
        constructor(a, b) {
            super();
            this.V = a;
            this.group = b;
            this.angle = 0;
            this.Jb = new t(0,0);
            this.Kb = new t(0,0);
            this.Pc = new t(0,0);
            this.Qc = new t(0,0);
            this.state = this.pp = 0;
            this.l = new R;
            a.ma(4).S(this.l.B);
            this.np = new B(this.l,r.hj,0 == b ? l.Zv : l.qE);
            this.np.J(.4);
            this.np.F();
            this.np.s(30);
            this.np.ka(this.angle);
            this.Vb = new B(this.l,r.hj,l.rE);
            this.Vb.J(.4);
            this.Vb.F();
            this.Vb.HN(new E(this.Vb.bg,this.Vb.cg + 15,0,1));
            this.Vb.O(!1)
        }
        jd() {
            this.Jb.x = this.x - Ua.hw / 2;
            this.Kb.x = this.x + Ua.hw / 2;
            this.Jb.y = this.Kb.y = this.y;
            this.Pc.x = this.Jb.x;
            this.Qc.x = this.Kb.x;
            this.Pc.y = this.Qc.y = this.y + Ua.EF;
            this.angle = this.rotation * Ea;
            this.Jb.Sa(this.angle, this.x, this.y);
            this.Kb.Sa(this.angle, this.x, this.y);
            this.Pc.Sa(this.angle, this.x, this.y);
            this.Qc.Sa(this.angle, this.x, this.y)
        }
        update(a) {
            super.update(a);
            null != this.jb && this.jd()
        }
        M() {
            this.Vb.Sg && (this.Vb.ja().Bc(Ig) || this.Vb.O(!1));
            super.M();
            this.l.o(this.x);
            this.l.s(this.y);
            this.l.J(this.ti);
            this.l.ka(this.rotation)
        }
        og() {
            let a = r.hj.Mb.Qe(l.Zv).pd;
            return new t(.27999999999999997 * a.w,.27999999999999997 * a.G)
        }
        xi() {
            let a = new t(-1.2000000000000002,10);
            a.rotate(this.rotation * Ea);
            return t.zb(new t(this.x,this.y), a)
        }
        Of(a) {
            let b = new t(-1.2000000000000002,10);
            b.rotate(this.rotation * Ea);
            super.Of(t.Ua(a, b))
        }
    }
    Ua.g = !0;
    Ua.u = Ba;
    Object.assign(Ua.prototype, {
        j: Ua
    });
    class af extends fa {
        constructor() {
            super();
            this.T = new B(null,r.lc,l.sE);
            this.T.J(.4);
            this.T.F();
            this.Gj = this.rl = this.vv = this.js = this.state = 0
        }
        start() {
            let a = this;
            this.T.ja().play(Di).$d(function() {
                a.T.ja().play(Ei);
                a.state = 1
            })
        }
        PH() {
            this.js = 1;
            this.y = this.T.Oa;
            this.T.ja().stop();
            this.T.Yb(l.tE);
            this.Gj = V.Nx(3);
            this.time = 0
        }
        Fb() {
            this.vv = 1;
            this.y = this.T.Oa;
            this.T.ja().stop();
            this.T.Yb(l.uE);
            this.T.ka(0);
            this.time = 0
        }
        update(a) {
            super.update(a);
            a = this.parent;
            switch (this.js) {
            case 1:
                var b = this.xb(.5);
                this.T.s(this.y - 50 * Aa.sm(100)(b));
                let c = this.T;
                c.ka(c.Od + this.Gj);
                1 == b && (this.js++,
                this.time = 0);
                break;
            case 2:
                b = this.T,
                b.s(b.Oa + this.rl),
                b = this.T,
                b.ka(b.Od + this.Gj),
                this.rl += .4,
                1.5 < this.time && (b = this.T,
                b.aa(.9 * b.xc)),
                2 < this.time && this.ua()
            }
            switch (this.vv) {
            case 1:
                b = this.xb(.5);
                this.T.s(this.y - 50 * Aa.sm(100)(b));
                a.N.x = this.T.$a();
                a.N.y = this.T.Oa - 15;
                a.N.M();
                1 == b && (this.vv++,
                this.time = 0);
                break;
            case 2:
                a = this.T,
                a.s(a.Oa + this.rl),
                this.rl += .4,
                a = this.parent,
                a.N.x = this.T.$a(),
                a.N.y = this.T.Oa - 15,
                a.N.M(),
                1.5 < this.time && (a = this.T,
                a.aa(.9 * a.xc)),
                2 < this.time && this.ua()
            }
        }
    }
    af.g = !0;
    af.u = fa;
    Object.assign(af.prototype, {
        j: af
    });
    class ff extends Ba {
        constructor(a, b, c, d, e, f) {
            super();
            this.width = d;
            this.R = -1 != f ? new B(null,r.Kj,[l.oD, l.pD, l.qD, l.rD][d - 1]) : new B(null,r.ze,[l.vE, l.wE, l.xE, l.yE][d - 1]);
            this.x = b;
            this.y = c;
            a.ma(4).S(this.R.B);
            this.R.J(.4);
            this.R.F();
            this.R.o(b);
            this.R.s(c);
            this.R.ka(e);
            this.Jb = t.Wb();
            this.Kb = t.Wb();
            this.Pc = t.Wb();
            this.Qc = t.Wb();
            this.Me = !1;
            this.Pz = this.$z = this.Yy = 0;
            this.No = !1;
            this.Ne = 0;
            0 < f && (this.Lf = new gf(a,b,c,f),
            this.Lf.Tt = O(this, this.Jp));
            this.Nq = !1;
            this.DL = this.rotation = e;
            this.BN(f);
            this.jd();
            this.Zq = -1;
            this.lq = null
        }
        jd() {
            let a = this.Me ? this.width - 160 : .4 * this.R.X.x;
            a /= 2;
            this.Jb.x = this.x - a;
            this.Kb.x = this.x + a;
            this.Jb.y = this.Kb.y = this.y - 5;
            this.Pc.x = this.Jb.x;
            this.Qc.x = this.Kb.x;
            this.Pc.y = this.Qc.y = this.y + 5;
            this.angle = this.rotation * Ea;
            this.Jb.Sa(this.angle, this.x, this.y);
            this.Kb.Sa(this.angle, this.x, this.y);
            this.Pc.Sa(this.angle, this.x, this.y);
            this.Qc.Sa(this.angle, this.x, this.y)
        }
        pO() {
            this.No = !0;
            this.R.ja().loop(Fi);
            this.Ne = this.$z;
            z.play(z.xj, !0);
            this.R.tq()
        }
        PB() {
            this.No = !1;
            this.Ne = this.Pz;
            this.R.ja().stop();
            this.R.ff(r.Me, l.ID);
            this.R.F();
            z.stop(z.xj)
        }
        update(a) {
            super.update(a);
            null != this.jb && this.jd();
            this.Me && (this.No ? (this.Ne = Ma.Ik(this.Ne, 0, 1, a),
            0 == this.Ne && this.PB()) : (this.Ne = Ma.Ik(this.Ne, 0, 1, a),
            0 == this.Ne && this.pO()));
            var b = this.Lf;
            null != b && b.update(a);
            if (null != this.lq) {
                this.ou += a;
                a = Math.min(1, this.ou / this.lq);
                b = Aa.sm(100)(a);
                let c = this.NM;
                this.rotation = c + (this.OM - c) * b;
                this.jd();
                1 == a && (this.lq = null)
            }
        }
        BN(a) {
            this.IB = a
        }
        QM() {
            this.Nq = !this.Nq;
            let a = this.DL + (this.Nq ? 90 : 0);
            this.ou = 0;
            this.lq = Math.abs(a - this.rotation) / 90 * .3;
            this.NM = this.rotation;
            this.OM = a;
            this.Lf.T.qa(-this.Lf.T.pb)
        }
        Jp(a) {
            0 == a && null != this.Xz && this.Xz(this.IB);
            this.Nq ? z.play(z.bG) : z.play(z.cG)
        }
        M() {
            super.M();
            this.R.o(this.x);
            this.R.s(this.y);
            this.R.ka(this.rotation);
            null != this.Lf && this.Lf.T.ka(this.rotation)
        }
    }
    ff.g = !0;
    ff.u = Ba;
    Object.assign(ff.prototype, {
        j: ff
    });
    class gf extends oc {
        constructor(a, b, c, d) {
            super();
            this.x = b;
            this.y = c;
            this.FB = d;
            this.T = new B(null,r.Kj,this.ly());
            this.T.J(.4);
            this.T.F();
            this.T.o(b);
            this.T.s(c);
            this.W = 20;
            a.ma(4).S(this.T.B)
        }
        fj(a) {
            super.fj(a);
            this.T.Yb(this.ly())
        }
        ly() {
            return 0 == this.state ? 1 == this.FB ? l.kD : l.mD : 1 == this.FB ? l.lD : l.nD
        }
        sk(a, b) {
            return Gg.Uu(a, b, this.x, this.y, this.W)
        }
    }
    gf.g = !0;
    gf.u = oc;
    Object.assign(gf.prototype, {
        j: gf
    });
    class Fb extends Ba {
        constructor(a) {
            super();
            this.V = a;
            this.Vd = null;
            var b = P.rb(Fb.nG)
              , c = b.w / 2;
            b = b.G / 2;
            c = this.ca = new W(0 - c,0 - b,c,b);
            this.ga = new W(c.m,c.C,c.A,c.D);
            this.timeout = 0;
            this.time = 2 * V.gh();
            this.Ks = 0;
            this.l = new R;
            this.Ud = new B(this.l,r.fd,l.BE);
            this.Ud.F();
            this.Ud.J(.4);
            a.Wc && (this.mj = new B(this.l,r.fd,l.EE),
            this.mj.F(),
            this.mj.J(.4));
            this.fd = new B(this.l,r.fd,l.CE);
            this.fd.F();
            this.fd.J(.4);
            this.fd.J(.4);
            this.fd.ja().loop(Gi);
            this.fd.ja().sA();
            a.Wc && (this.mj.ja().loop(Hi),
            this.mj.ja().setTime(0),
            this.mj.aa(0),
            this.xh = new B(this.l,r.fd,l.IE),
            this.xh.F(),
            this.xh.J(.4),
            this.xh.O(!1),
            this.xh.Oh(3),
            this.Ii = new B(this.l,r.fd,l.GE),
            this.Ii.F(),
            this.Ii.J(.4),
            this.Ii.O(!1));
            a.ma(10).S(this.l.B)
        }
        xq(a) {
            let b = null == this.Vd;
            this.Vd != a && (a ? b || (this.xh.O(!0),
            this.xh.ja().play(Ii),
            this.xh.ja().$d(O(this, this.rL)),
            z.play(V.Yk() ? z.eG : z.fG)) : b ? (this.Ud.aa(0),
            this.fd.aa(0)) : (this.Ii.O(!0),
            this.Ii.ja().play(Ji),
            this.Ii.ja().$d(O(this, this.qL))),
            this.Vd = a)
        }
        H() {
            this.l.H()
        }
        setTimeout() {
            this.time = this.timeout;
            this.In = new B(null,r.fd,l.KE);
            this.In.J(.4);
            this.In.F();
            this.l.appendChild(this.In);
            this.l.uq(this.In, 0)
        }
        qL() {
            this.Ii.O(!1)
        }
        rL() {
            this.xh.O(!1)
        }
        update(a) {
            super.update(a);
            this.Ks += a;
            if (this.V.Wc)
                if (this.Vd) {
                    var b = this.Ud;
                    b.aa(b.xc + .1);
                    b = this.mj;
                    b.aa(b.xc - .1);
                    b = this.fd;
                    b.aa(b.xc + .1)
                } else
                    b = this.Ud,
                    b.aa(b.xc - .1),
                    b = this.mj,
                    b.aa(b.xc + .1),
                    b = this.fd,
                    b.aa(b.xc - .1);
            b = 3 * Math.sin(3 * this.Ks);
            this.tk() && (b = 0);
            let c = 0
              , d = this.l.fk();
            for (; c < d; )
                this.l.Sc(c++).s(b);
            this.ga.m = this.x + this.ca.m;
            this.ga.C = this.y + this.ca.C;
            this.ga.A = this.x + this.ca.A;
            this.ga.D = this.y + this.ca.D;
            0 < this.timeout && 0 >= this.V.dh && (this.In.Yb(l.Yh(l.LE, 35 * (1 - this.time / this.timeout) | 0)),
            0 < this.time && (this.time = Ma.Ik(this.time, 0, 1, a)))
        }
        og() {
            let a = this.ca
              , b = this.ca;
            return new t(.9 * (a.A - a.m),.9 * (b.D - b.C))
        }
        Rs() {
            return 8
        }
        M() {
            super.M();
            this.l.o(this.x);
            this.l.s(this.y);
            this.l.J(this.ti)
        }
    }
    Fb.g = !0;
    Fb.u = Ba;
    Object.assign(Fb.prototype, {
        j: Fb
    });
    class hf extends Ba {
        constructor(a) {
            super();
            this.V = a;
            this.zg = []
        }
        YJ(a, b, c) {
            this.x = a;
            this.y = b;
            this.rotation = c;
            this.Tk = 0;
            this.Id = new cb;
            this.fe = 0;
            this.l = new R;
            this.V.ma(4).S(this.l.B);
            this.Mn = new B(this.l,r.oj,l.PE);
            this.Mn.F();
            this.Mn.s(27);
            this.Mn.J(.4);
            this.Rn = new B(this.l,r.oj,l.QE);
            this.Rn.J(.4);
            this.Rn.F();
            this.Rn.s(27);
            this.hr = this.gr = 0;
            this.tB = new R(null,this.l);
            this.uB = new R(null,this.l);
            this.Mw()
        }
        iy() {
            let a = 0;
            switch (this.fe) {
            case 0:
                a = 32.9;
                break;
            case 1:
                a = 94;
                break;
            case 2:
                a = 141
            }
            return 1.2 * a
        }
        iJ() {
            let a = this.iy();
            return a += Math.sin(6 * this.Tk)
        }
        M() {
            super.M();
            this.l.o(this.x);
            this.l.s(this.y);
            this.l.ka(this.rotation);
            this.Rn.ka(this.gr);
            this.l.J(this.ti)
        }
        update(a) {
            super.update(a);
            for (var b = 0, c = this.zg.length; b < c; )
                null == this.zg[b].R ? (--c,
                0 < c && (this.zg[b] = this.zg[this.zg.length - 1]),
                this.zg.pop()) : ++b;
            b = 0;
            for (c = this.zg; b < c.length; )
                c[b++].update(a);
            this.Tk += a;
            this.gr += .05 * (this.hr - this.gr);
            if (this.tk())
                for (b = this.Id.keys(); b.bb(); ) {
                    c = b.next();
                    let d = this.Id.G[c];
                    d.Uq += a;
                    .5 <= d.Uq && (1 > t.kd(d.qp.x, d.qp.y, d.jm.x, d.jm.y) && this.Wt(),
                    this.Id.remove(c))
                }
        }
        EJ() {
            let a = new t(this.x,this.y);
            if (this.tk())
                return a;
            let b = new t(0,27);
            b.rotate(this.rotation * Ea);
            return t.zb(a, b)
        }
        Ui(a, b, c) {
            let d = this.EJ();
            if (30 > t.Ua(new t(a,b), d).pc())
                if (this.tk())
                    this.Id.G[c] = new Jg(new t(a,b),new t(a,b),0);
                else
                    return this.Wt(),
                    !0;
            return !1
        }
        yL(a, b, c) {
            this.Id.G.hasOwnProperty(c) && (this.Id.G[c].jm = new t(a,b));
            return !1
        }
        AL(a) {
            if (this.Id.G.hasOwnProperty(a)) {
                let b = this.Id.G[a];
                .5 >= b.Uq && 1 >= t.kd(b.qp.x, b.qp.y, b.jm.x, b.jm.y) && this.Wt();
                this.Id.remove(a)
            }
            return !1
        }
        Wt() {
            let a = 0;
            switch (this.fe) {
            case 0:
                this.fe++;
                a = 0;
                z.play(z.iG);
                break;
            case 1:
                this.fe++;
                a = 0;
                z.play(z.hG);
                break;
            case 2:
                this.fe = 0,
                a = 1,
                z.play(z.gG)
            }
            this.Mw();
            switch (a) {
            case 0:
                this.hr += 180;
                break;
            case 1:
                this.hr = 0
            }
        }
        Mw() {
            for (var a = this.Tk = 0, b = this.zg; a < b.length; )
                b[a++].QI();
            if (3 != this.fe) {
                a = 7;
                1 == this.fe && (a = 14);
                2 == this.fe && (a = 20);
                b = 0;
                for (var c = a; b < c; ) {
                    let e = b++;
                    var d = null;
                    switch (e % 3) {
                    case 0:
                        d = Ki;
                        break;
                    case 1:
                        d = Li;
                        break;
                    case 2:
                        d = Mi
                    }
                    let f = -this.iy();
                    f *= 1 + .1 * V.bc();
                    1 != this.fe || 1 != e % 3 && 2 != e % 3 || (f *= .95);
                    2 != this.fe || 1 != e % 3 && 2 != e % 3 || (f *= .94);
                    let g = 1;
                    0 == e % 3 ? g = 0 : 1 == e % 3 ? g = this.fe : 2 == e % 3 && (g = -this.fe);
                    let h = new Ia;
                    h.Fg(5, 0, 0, 100);
                    h.Fg(5 + g, f, .6);
                    h.bB(.4, 0);
                    h.bB(.6000000000000001, .6);
                    d = new Kg(.6 * e / a,d,h);
                    this.zg.push(d);
                    (0 == e % 3 ? this.tB : this.uB).appendChild(d.R)
                }
            }
        }
        Of(a) {
            this.Mn.s(3);
            this.Rn.s(3);
            this.tB.s(-27);
            this.uB.s(-27);
            super.Of(a)
        }
        Rs() {
            return .3 * this.Mn.ta()
        }
        og() {
            return new t(40,56)
        }
    }
    hf.g = !0;
    hf.u = Ba;
    Object.assign(hf.prototype, {
        j: hf
    });
    class Jg {
        constructor(a, b, c) {
            this.qp = a;
            this.jm = b;
            this.Uq = c
        }
    }
    Jg.g = !0;
    Object.assign(Jg.prototype, {
        j: Jg
    });
    class Kg {
        constructor(a, b, c) {
            this.state = 0;
            this.time = a;
            this.Ia = b;
            this.track = c;
            this.R = new B(null,r.oj);
            this.R.O(!1);
            this.ut = new Ta(this.R)
        }
        QI() {
            2 != this.state && (this.state = 2)
        }
        update(a) {
            switch (this.state) {
            case 0:
                this.time -= a;
                if (0 < this.time)
                    break;
                this.R.Yb(this.Ia.data[0]);
                this.R.ja().play(this.Ia);
                this.R.O(!0);
                this.R.F();
                this.ut.loop(this.track);
                this.state = 1;
                this.time = 0;
                break;
            case 1:
                this.time += a;
                .6 <= this.time && (this.R.ja().stop(),
                this.ut.stop(),
                this.time = this.state = 0);
                break;
            case 2:
                a = this.R,
                a.aa(.95 * a.xc),
                .05 > this.R.xc && (this.R.H(),
                this.ut.ua(),
                this.R = this.track = this.Ia = null,
                this.state = 3)
            }
        }
    }
    Kg.g = !0;
    Object.assign(Kg.prototype, {
        j: Kg
    });
    class Od {
        constructor(a) {
            this.wi = !1;
            this.vx = !0;
            this.Gz = this.offset = a;
            this.index = Od.qH++
        }
    }
    Od.g = !0;
    Object.assign(Od.prototype, {
        j: Od
    });
    class Pd extends ua {
        constructor(a) {
            super();
            this.V = a;
            this.WB = 10;
            this.offset = 0;
            this.id = -1;
            this.Yd = !1;
            this.Hp = this.nq = this.oe = 0;
            this.dir = new t(0,0);
            this.active = !1;
            this.Kk = -1;
            this.oa = new t(0,0);
            this.Kn = null;
            this.Bd = new jf;
            this.ro = [];
            this.node = new R;
            a.ma(3).S(this.node.B);
            this.l = new R;
            this.node.appendChild(this.l)
        }
        update(a) {
            super.update(a);
            this.Yd || (this.oe = a * this.WB * 10,
            this.offset += this.oe,
            this.offset = this.At(this.offset, this.width));
            this.active = .001 < Math.abs(this.oe);
            this.Yd && this.active && (this.Hp += Math.abs(this.oe),
            15 <= this.Hp && (this.SL(),
            this.Hp = 0));
            this.OI();
            let b = null
              , c = null;
            for (var d = this.Bd, e = d.keys(); e.bb(); ) {
                var f = e.next()
                  , g = d.get(f);
                if (g.wi)
                    continue;
                let y = g.offset + this.oe
                  , A = !0;
                y >= this.width ? y -= this.width : 0 >= y ? y += this.width : A = !1;
                var h = f.og()
                  , m = f.xi()
                  , n = (new t(h.x * this.dir.x,h.y * this.dir.y)).pc() / 2
                  , q = 1
                  , p = y;
                y < n ? (q = .5 + .5 * y / n,
                b = f,
                p = n * q) : this.width - y < n && (q = .5 + .5 * (this.width - y) / n,
                c = f,
                p = this.width - n * q);
                n = this.Bd;
                let x = n.keys();
                for (; x.bb(); ) {
                    var v = x.next()
                      , u = n.get(v);
                    v == f || u.wi || 1 != q || (u = u.offset - g.offset,
                    .25 * t.zb(h, v.og()).ym() > u * u && (.001 > Math.abs(u) ? (v = this.ro.indexOf(v) - this.ro.indexOf(v),
                    u = 600 * (0 < v ? 1 : 0 > v ? -1 : 0)) : 600 > Math.abs(u) && (u = 600 * (0 < u ? 1 : 0 > u ? -1 : 0)),
                    y -= u * a))
                }
                f.bN(new t(q,q));
                h = new t(this.x + this.dir.x * p - m.x,this.y + this.dir.y * p - m.y);
                g.vx ? (p = new t(this.dir.y,-this.dir.x),
                m = t.Bw(h, p) / this.dir.pc(),
                p = new t(p.x * m,p.y * m),
                m = 800 * a,
                p.ym() >= m * m ? (q = p.pc(),
                p.multiply((q - m) / q)) : g.vx = !1,
                h.Su(p),
                f.Of(t.zb(f.xi(), h))) : f.Of(t.zb(new t(this.x,this.y), t.ld(this.dir, p)));
                g.Gz = y;
                A && (f.Wz(),
                z.play(z.jG))
            }
            this.Kn.move(this.oe);
            for (d = this.Bd.iterator(); d.bb(); )
                e = d.next(),
                e.offset = this.At(e.Gz, this.width);
            this.Yd && (this.oe = 0);
            if (-1 == this.Kk)
                if (null != b && null != c)
                    for (d = this.Bd,
                    e = d.keys(); e.bb(); )
                        f = e.next(),
                        g = d.get(f),
                        g.wi || (f == b && (g.offset += 1500 * a),
                        f == c && (g.offset -= 1500 * a));
                else
                    null != b ? this.oe = 1500 * a : null != c && (this.oe = -1500 * a)
        }
        M() {
            this.l.o(this.x);
            this.l.s(this.y);
            this.l.Qf(0, this.height / 2);
            this.l.de(0, this.height / 2);
            this.l.ka(this.rotation);
            this.Kn.M()
        }
        dv(a, b, c) {
            this.Yd && (a = this.jr(new t(a,b)),
            0 <= a.x && a.x <= this.width && .5 * -this.height <= a.y && a.y <= .5 * this.height && (this.Kk = c,
            this.oa.wb(a)))
        }
        fv(a, b, c) {
            a = !1;
            if (!this.Yd)
                return !1;
            if (this.Kk == c) {
                this.Kk = -1;
                this.oe = 0;
                for (c = this.Bd.keys(); c.bb(); )
                    a = c.next(),
                    this.Bd.G[a.Ce].wi && this.Bd.remove(a);
                a = !0
            }
            return a
        }
        ev(a, b, c) {
            let d = !1;
            if (-1 != this.V.hp || !za.instance.Re().up(0) || !this.Yd)
                return !1;
            this.Kk == c && (a = this.jr(new t(a,b)),
            this.oe = a.x - this.oa.x,
            this.offset += this.oe,
            this.offset = this.At(this.offset, this.width),
            this.oa.wb(a),
            d = !0);
            return d
        }
        contains(a) {
            a = this.jr(a);
            return 0 <= a.x && a.x <= this.width && .5 * -this.height <= a.y ? a.y <= .5 * this.height : !1
        }
        jr(a) {
            var b = this.nq - .5 * Math.PI;
            let c = new t(this.dir.x,this.dir.y);
            b = new t(Math.cos(b),Math.sin(b));
            return new t(c.x * (a.x - this.x) + c.y * (a.y - this.y),b.x * (a.x - this.x) + b.y * (a.y - this.y))
        }
        YH(a, b) {
            a = this.jr(a);
            return !(a.x < -b || a.x > this.width + b || a.y < .5 * -this.height - b || a.y > .5 * this.height + b)
        }
        bind(a) {
            this.KH(a)
        }
        sO(a) {
            let b = this.Bd
              , c = b.keys();
            for (; c.bb(); ) {
                let d = c.next()
                  , e = b.get(d);
                if (d == a) {
                    e.wi = !0;
                    d.Ju(-1);
                    break
                }
            }
            a.Ju(-1)
        }
        nt(a) {
            return null != this.Bd.G.yj[a.Ce]
        }
        remove(a) {
            this.Bd.remove(a)
        }
        dK(a) {
            a = this.Bd.G[a.Ce];
            return null != a ? a.wi : !1
        }
        isActive() {
            return this.active
        }
        At(a, b) {
            let c = b - 0;
            a > b && (a -= c);
            0 > a && (a += c);
            return a
        }
        KH(a) {
            var b = a.xi();
            b = new t(b.x - this.x,b.y - this.y);
            this.Bd.set(a, new Od(Math.max(Math.min(b.x * this.dir.x + b.y * this.dir.y, this.width), 0)));
            this.ro.push(a);
            a.Ju(this.id)
        }
        VJ(a, b, c, d, e, f, g, h) {
            this.Kk = -1;
            this.id = a;
            this.x = b;
            this.y = c;
            this.width = d;
            this.height = e;
            this.rotation = f;
            this.Yd = g;
            this.nq = f * Ea;
            this.dir = new t(Math.cos(this.nq),Math.sin(this.nq));
            this.WB = h;
            this.node = new R;
            a = new B(this.l,r.uc,Ni);
            a.qa(d / a.X.x);
            a.ub((e - 10) / a.wa());
            a = new B(this.l,r.uc,$h);
            a.qa(.4);
            a.ub((e - 10) / a.wa());
            a.o(-6);
            a.s(5);
            a = new B(this.l,r.uc,$h);
            a.qa(.4);
            a.ub((e - 10) / a.wa());
            a.o(d - a.ta() + 6);
            a.s(5);
            a = new B(this.l,r.uc,ai);
            a.qa(d / a.ta());
            a.ub(-.4);
            a.s(a.wa());
            a = new B(this.l,r.uc,ai);
            a.qa(d / a.ta());
            a.ub(.4);
            a.s(e - a.wa());
            a = new B(this.l,r.uc,Lg);
            a.J(.4);
            a.o(-6);
            a.s(e - a.wa());
            a = new B(this.l,r.uc,Lg);
            a.qa(.4);
            a.ub(-.4);
            a.o(-6);
            a.s(a.wa());
            a = new B(this.l,r.uc,Lg);
            a.J(-.4);
            a.o(d + 6);
            a.s(a.wa());
            a = new B(this.l,r.uc,Lg);
            a.qa(-.4);
            a.ub(.4);
            a.o(d + 6);
            a.s(e - a.wa());
            a = 0;
            g || (a = 0 < h ? 1 : -1);
            this.Kn = new kf(d - 2,e - 10,a);
            this.Kn.l.s(5);
            this.l.appendChild(this.Kn.l);
            g = new B(this.l,r.uc,bi);
            g.qa(.4);
            g.ub((e - 10) / g.X.y);
            g.s(5);
            g = new B(this.l,r.uc,bi);
            g.qa(-.4);
            g.ub((e - 10) / g.X.y);
            g.o(d);
            g.s(5)
        }
        OI() {
            let a = [];
            for (var b = this.Bd, c = b.keys(); c.bb(); ) {
                let d = c.next();
                b.get(d).wi && !this.contains(d.xi()) && a.push(d)
            }
            for (b = 0; b < a.length; )
                c = a[b],
                ++b,
                this.Bd.remove(c),
                ta.remove(this.ro, c)
        }
        SL() {
            z.play([1050, 1049, 1048, 1047][V.Ag(0, 3)])
        }
        static create(a, b, c, d, e, f, g, h, m) {
            a = new Pd(a);
            a.VJ(b, c, d, e, f, g, h, m);
            return a
        }
    }
    Pd.g = !0;
    Pd.u = ua;
    Object.assign(Pd.prototype, {
        j: Pd
    });
    class Mg {
        constructor(a) {
            this.Id = new cb;
            this.bu = !1;
            this.list = [];
            this.V = a
        }
        count() {
            return this.list.length
        }
        bind(a) {
            let b = 0
              , c = this.list;
            for (; b < c.length; ) {
                let d = c[b];
                ++b;
                d.contains(new t(a.x,a.y)) && d.bind(a)
            }
        }
        push(a) {
            this.list.push(a)
        }
        iterator() {
            return new Ac(this.list)
        }
        Jj(a) {
            let b = 0;
            for (; b < a.length; )
                this.bind(a[b++])
        }
        XH(a) {
            var b = null;
            let c = [];
            for (var d = this.iterator(); d.bb(); ) {
                var e = d.next();
                e.YH(a.xi(), a.Rs()) && c.push(e);
                e.nt(a) && (b = e)
            }
            if (null != b && b.Yd) {
                for (d = 0; d < c.length; )
                    if (e = c[d],
                    ++d,
                    e.Yd && e.isActive()) {
                        this.xA(e, a);
                        return
                    }
                if (b.Yd)
                    for (b = 0; b < c.length; )
                        d = c[b],
                        ++b,
                        d.Yd || this.xA(d, a)
            }
        }
        Qj(a) {
            let b = 0;
            for (; b < a.length; )
                this.XH(a[b++])
        }
        remove(a) {
            let b = 0
              , c = this.list;
            for (; b < c.length; )
                c[b++].remove(a)
        }
        wA() {
            var a = this.count() - 1;
            let b = a;
            for (; 0 <= a; ) {
                if (this.list[a].Yd && this.list[a].isActive()) {
                    let c = a;
                    for (; c < b; )
                        this.xB(c, c + 1),
                        ++c;
                    --b
                }
                --a
            }
            this.cL()
        }
        update(a) {
            let b = 0
              , c = this.list;
            for (; b < c.length; )
                c[b++].update(a);
            this.bu && (this.wA(),
            this.bu = !1)
        }
        BM() {
            this.bu = !0
        }
        dv(a, b, c) {
            this.Id.G[c] = new t(a,b)
        }
        fv(a, b, c) {
            let d = this.count() - 1;
            for (; 0 <= d; ) {
                let e = this.list[d];
                if (null != e && e.fv(a, b, c))
                    return this.Id.remove(c),
                    !0;
                --d
            }
            return !1
        }
        ev(a, b, c) {
            var d = this.Id.G[c];
            if (null != d) {
                var e = t.Ua(new t(a,b), d);
                if (4 > e.ym())
                    return !1;
                e = t.eo(e);
                let f = -1
                  , g = null
                  , h = 0
                  , m = this.list;
                for (; h < m.length; ) {
                    let n = m[h];
                    ++h;
                    if (n.contains(d)) {
                        let q = Math.abs(t.Bw(e, n.dir));
                        q >= f && (f = q,
                        g = n)
                    }
                }
                null != g && g.dv(d.x, d.y, c);
                this.Id.remove(c)
            }
            for (d = this.count() - 1; 0 <= d; ) {
                if (this.list[d].ev(a, b, c))
                    return this.BM(),
                    !0;
                --d
            }
            return !1
        }
        xA(a, b) {
            if (!a.nt(b) || a.dK(b)) {
                for (var c = 0, d = this.list; c < d.length; ) {
                    let e = d[c];
                    ++c;
                    e.nt(b) && e.sO(b)
                }
                a.bind(b);
                z.play(z.kG)
            }
        }
        cL() {
            var a = this.count() - 1;
            let b = a;
            for (; 0 <= a; ) {
                if (!this.list[a].Yd) {
                    let c = a;
                    for (; c < b; )
                        this.xB(c, c + 1),
                        ++c;
                    --b
                }
                --a
            }
        }
        xB(a, b) {
            let c = this.list[a];
            this.list[a] = this.list[b];
            this.list[b] = c;
            this.V.ma(3).cO(a, b)
        }
    }
    Mg.g = !0;
    Object.assign(Mg.prototype, {
        j: Mg
    });
    class kf extends ua {
        constructor(a, b, c) {
            super();
            this.width = a;
            this.height = b;
            this.l = new R;
            this.Ld = [];
            this.offset = 0;
            this.Rp = r.uc.Mb.Qe(ci).Zb.x;
            switch (c) {
            case -1:
                a = Oi;
                break;
            case 1:
                a = Pi;
                break;
            default:
                a = ci
            }
            this.Xt = a
        }
        M() {
            super.M();
            var a = .4 * this.Rp;
            null == this.Ld[0] && (this.Ld[0] = new B(this.l,r.uc,this.Xt));
            this.Ld[0].O(!0);
            var b = 1;
            var c = this.Ld[0]
              , d = Math.max(this.offset - (this.offset / a | 0) * a, 0);
            c.o(0);
            c.qa(d / this.Rp);
            for (c.ub(this.height / c.X.y); d + a <= this.width; )
                null == this.Ld[b] && (this.Ld[b] = new B(this.l,r.uc,this.Xt)),
                this.Ld[b].O(!0),
                c = this.Ld[b++],
                c.qa(.4),
                c.ub(this.height / c.X.y),
                c.o(d),
                d += c.ta();
            a = this.width - d;
            null == this.Ld[b] && (this.Ld[b] = new B(this.l,r.uc,this.Xt));
            this.Ld[b].O(!0);
            c = this.Ld[b++];
            c.o(this.width - a);
            c.qa(a / this.Rp);
            c.ub(this.height / c.X.y);
            for (c = this.Ld.length; b < c; )
                this.Ld[b++].O(!1)
        }
        move(a) {
            this.offset += a;
            for (a = .4 * this.Rp; this.offset > this.width; )
                this.offset -= a;
            for (; 0 > this.offset; )
                this.offset += a
        }
    }
    kf.g = !0;
    kf.u = ua;
    Object.assign(kf.prototype, {
        j: kf
    });
    class pc extends Ba {
        constructor(a) {
            super();
            this.R = a;
            a.aa(0);
            this.time = this.state = 0
        }
        show() {
            this.na(1)
        }
        rg() {
            this.time = 0;
            this.na(3)
        }
        update(a) {
            this.time += a;
            switch (this.state) {
            case 1:
                a = Math.min(this.time / 1, 1);
                this.R.aa(a);
                1 == a && this.na(2);
                break;
            case 2:
                1 == Math.min(this.time / (1 == F.box && 1 == F.level ? 10 : 5), 1) && this.na(3);
                break;
            case 3:
                a = Math.min(this.time / .5, 1),
                this.R.aa(1 - a),
                1 == a && (this.na(0),
                this.R.O(!1))
            }
        }
        M() {
            this.R.o(this.x);
            this.R.s(this.y);
            this.R.ka(this.rotation)
        }
        na(a) {
            this.time = 0;
            this.state = a
        }
    }
    pc.g = !0;
    pc.u = Ba;
    Object.assign(pc.prototype, {
        j: pc
    });
    class lf extends pc {
        constructor(a) {
            a = new B(null,r.qO,l.Yh(l.qG, a));
            a.J(.4);
            super(a);
            this.uh = 0
        }
        Bh(a) {
            this.rotation = null != a.angle ? a.angle : 0;
            let b = a.path
              , c = na.Il;
            if (null != b) {
                let d = Ma.Sv;
                "R" == b.charAt(0) && (d = Math.round(3 * Ga.parseInt(ta.substr(b, 2, null)) / 2 + 1));
                a = new Hd(d,a.moveSpeed * c,a.rotateSpeed);
                a.angle = this.rotation;
                a.VA(b, this.x, this.y);
                this.TA(a);
                a.start()
            }
        }
        update(a) {
            if (2 == this.ed)
                switch (this.time += a,
                this.state) {
                case 1:
                    a = Math.min(this.time / 1, 1);
                    this.R.aa(a);
                    1 == a && (this.je = this.x,
                    this.na(2));
                    break;
                case 2:
                    a = Math.min(this.time / 1, 1);
                    this.x = this.je + (this.je + (na.pG + 40) * td.$n) * a;
                    1 == a && this.na(3);
                    break;
                case 3:
                    a = Math.min(this.time / .5, 1),
                    this.R.aa(1 - a),
                    1 == a && (2 == ++this.uh ? (this.R.O(!1),
                    this.na(0)) : (this.x = this.je,
                    this.na(1)))
                }
            else
                null != this.jb && (this.jb.update(a),
                this.x = this.jb.i.x,
                this.y = this.jb.i.y,
                this.rotation = this.jb.angle),
                super.update(a)
        }
    }
    lf.g = !0;
    lf.u = pc;
    Object.assign(lf.prototype, {
        j: lf
    });
    class mf extends pc {
        constructor(a, b) {
            let c = new wa(null,r.tm);
            c.Xa(a);
            c.Ib(b, 512);
            c.Fc(26);
            c.Xb(0);
            c.Mh(!0);
            c.Oh(2);
            c.aa(.7);
            super(c)
        }
    }
    mf.g = !0;
    mf.u = pc;
    Object.assign(mf.prototype, {
        j: mf
    });
    class na extends fa {
        constructor(a) {
            super();
            this.Bt = a;
            this.Gx = this.sa(new fa);
            this.Ph = new mb;
            this.iz = [];
            for (a = 0; 12 > a; ) {
                let b = new mb;
                this.iz[a++] = b;
                this.Ph.S(b)
            }
            this.gb = new Bg;
            this.ea = td.$n;
            this.Pq = 0;
            this.RN = t.Wb();
            this.ui = [];
            for (a = 0; 5 > a; )
                this.ui[a++] = [];
            this.Fx = new Ra;
            this.Fx.df(new qc(this.ui));
            this.ma(11).S(this.Fx);
            this.uk = this.Hj = this.Um = this.Tm = 0;
            this.ns = [];
            this.Wy()
        }
        Wy() {
            for (var a = 0; 5 > a; )
                this.ui[a++] = [];
            this.mm = Array(5);
            this.Sh = Array(5);
            this.$t = Array(5);
            for (a = 0; 5 > a; ) {
                let b = a++;
                this.mm[b] = !1;
                this.Sh[b] = t.Wb();
                this.$t[b] = t.Wb()
            }
        }
        ma(a) {
            return this.iz[a]
        }
        ls() {
            let a = this.Gx.od;
            for (; null != a; ) {
                let b = a.U;
                a.ua();
                a = b
            }
        }
        delay(a, b) {
            a = new Xe(a,b);
            this.Gx.sa(a)
        }
        ua() {
            this.Ph.H();
            super.ua()
        }
        show() {
            this.uk = this.Hj = 0;
            this.ls();
            this.rd = null;
            this.hp = -1;
            this.Da = 2;
            this.Dh = 0;
            z.stop(z.xj);
            this.yc = [];
            this.ze = [];
            this.Pb = [];
            this.bubbles = [];
            this.Gh = [];
            this.Jg = [];
            this.Nn = [];
            this.On = [];
            this.ji = [];
            this.kc = [];
            this.Te = [];
            this.Uh = [];
            this.vk = [];
            this.Qb = new Mg(this);
            this.Pd = new Ag(this);
            this.fc = [];
            this.Uk = null;
            this.pk = !1;
            this.ba = new xb;
            this.ba.Rf(1);
            this.pa = new xb;
            this.pa.Rf(1);
            this.Ba = new xb;
            this.Ba.Rf(1);
            this.li = new ac(this);
            var a = Md.get();
            this.Zr = new zg(this);
            this.N = new tb(this);
            this.N.constraint = this.ba;
            this.FK(a);
            a = this.kc.length;
            let b, c = 0;
            for (; c < a; )
                b = this.kc[c++],
                b.pn = -1,
                b.He = this.kc;
            this.Pq = 0;
            this.Tb = this.$b = this.Ic = null;
            this.Kt = !1;
            this.qc = 2 != this.Da;
            this.pB = this.Fp = this.vd = this.ud = !1;
            this.time = 0;
            this.qh = !0;
            Va.reset();
            this.dh = 0 < this.Hj ? 0 : .3;
            this.Qb.Jj(this.Pb);
            this.Qb.Jj(this.Jg);
            this.Qb.Jj(this.bubbles);
            this.Qb.Jj(this.Uh);
            this.Qb.Jj(this.Gh);
            this.Qb.Jj(this.ji);
            this.Qb.wA();
            this.YN()
        }
        FK(a) {
            function b(g, h) {
                let m = 0
                  , n = g.length;
                for (; m < n; ) {
                    let q = g[m++]
                      , p = 0
                      , v = q.length;
                    for (; p < v; )
                        h(q[p++])
                }
            }
            let c = []
              , d = 0
              , e = gc.SI(a);
            for (; d < e.length; )
                c.push(gc.Zj(a, e[d++]));
            let f = this;
            b(c, function(g) {
                switch (g.name) {
                case 0:
                    f.GK(g);
                    break;
                case 1:
                    f.yK(g);
                    break;
                case 50:
                    f.wK(g);
                    break;
                case 51:
                    f.xK(g);
                    break;
                case 52:
                    f.vK(g);
                    break;
                case 134:
                    f.EK(g)
                }
            });
            b(c, function(g) {
                switch (g.name) {
                case 2:
                    f.Ma = new Qb(f,g);
                    f.tx = !1;
                    f.ip = na.wf ? 2 : -1;
                    f.uo = 1;
                    na.wf = !1;
                    break;
                case 3:
                    f.LK(g);
                    break;
                case 4:
                    f.PK(g);
                    break;
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                    f.OK(g);
                    break;
                case 53:
                    f.CK(g);
                    break;
                case 54:
                    f.uK(g);
                    break;
                case 55:
                    f.HK(g);
                    break;
                case 56:
                    f.JK(g);
                    break;
                case 57:
                case 58:
                case 59:
                case 60:
                case 80:
                    f.KK(g);
                    break;
                case 81:
                case 82:
                    f.tK(g);
                    break;
                case 100:
                    f.BK(g);
                    break;
                case 120:
                    f.IK(g);
                    break;
                case 130:
                    f.AK(g);
                    break;
                case 131:
                    f.MK(g);
                    break;
                case 132:
                    f.DK(g);
                    break;
                case 133:
                    f.zK(g);
                    break;
                case 135:
                    f.NK(g)
                }
            })
        }
        GK(a) {
            this.Ni = a.width * this.ea | 0;
            this.Mi = a.height * this.ea | 0;
            var b = a.view;
            if (null != b) {
                var c = b.x;
                let d = b.y;
                b = new W(c,d,c + b.width,d + b.height);
                b.scale(this.ea, !1);
                c = this.gb.sj;
                c.m = b.m;
                c.C = b.C;
                c.A = b.A;
                c.D = b.D;
                c = this.gb.i;
                c.x = (b.m + b.A) / 2;
                c.y = (b.C + b.D) / 2
            } else
                b = this.gb.sj,
                b.m = 0,
                b.C = 0,
                b.A = this.Ni,
                b.D = this.Mi,
                b = this.gb.i,
                b.x = this.Ni / 2,
                b.y = this.Mi / 2;
            this.Kd = new E(0,0,0,1);
            null != a.scrollX && (this.Kd.x = a.scrollX);
            null != a.scrollY && (this.Kd.y = a.scrollY);
            8 == F.box && this.Zr.NN()
        }
        yK(a) {
            this.ed = a.special;
            this.cl = a.ropePhysicsSpeed;
            this.Wc = a.nightLevel;
            this.Da = a.twoParts ? 0 : 2;
            this.cl *= na.dw;
            2 != this.Da && (this.mi = new ac(this),
            this.ni = new ac(this))
        }
        BK(a) {
            var b = a.x * this.ea;
            let c = a.y * this.ea
              , d = a.length * this.ea;
            var e = a.radius
              , f = a.wheel
              , g = null != a.moveLength ? a.moveLength * this.ea : -1;
            let h = a.moveVertical
              , m = null != a.moveOffset ? a.moveOffset * this.ea : 0;
            var n = a.spider
              , q = "L" == a.part;
            let p = a.hidePath;
            var v = a.bindBulb;
            let u = new Zc(this);
            u.x = b;
            u.y = c;
            u.Ng = f;
            u.yN(n);
            u.Bh(a);
            -1 != e && (e *= this.ea);
            if (-1 == e) {
                f = this.ba;
                if (v)
                    for (q = 0,
                    v = this.fc; q < v.length; )
                        n = v[q],
                        ++q,
                        null != n && (f = n.constraint);
                else
                    2 != this.Da && (f = q ? this.pa : this.Ba);
                b = new Jd(this.ma(5),null,b,c,f,f.i.x,f.i.y,d);
                b.mc.yg.wb(b.mc.i);
                u.ZA(b);
                this.Tl()
            }
            u.setRadius(e);
            u.jN(g, h, m);
            if (null != u.jb && (u.ZM(),
            !p)) {
                a = "R" == a.path[0];
                null == this.Uk && (this.Uk = new df(this));
                e = 0;
                for (g = u.jb.path.length - 1; e < g; )
                    a && 0 != e % 3 || this.Uk.Qx(e, e + 1, u),
                    ++e;
                2 < u.jb.path.length && this.Uk.Qx(0, u.jb.path.length - 1, u)
            }
            this.yc.push(u)
        }
        wK(a) {
            this.pa.i.x = a.x * this.ea;
            this.pa.i.y = a.y * this.ea;
            this.Bb = new bc(this,l.FD);
            this.Bb.x = this.pa.i.x;
            this.Bb.y = this.pa.i.y;
            this.Bb.constraint = this.pa
        }
        xK(a) {
            this.Ba.i.x = a.x * this.ea;
            this.Ba.i.y = a.y * this.ea;
            this.Cb = new bc(this,l.GD);
            this.Cb.x = this.Ba.i.x;
            this.Cb.y = this.Ba.i.y;
            this.Cb.constraint = this.Ba
        }
        vK(a) {
            this.ba.i.x = a.x * this.ea;
            this.ba.i.y = a.y * this.ea
        }
        EK(a) {
            let b = new xb;
            b.Rf(1);
            b.i.x = a.x * this.ea;
            b.i.y = a.y * this.ea;
            a = new cf(this,a.litRadius * this.ea);
            a.x = b.i.x;
            a.y = b.i.y;
            a.constraint = b;
            this.fc.push(a)
        }
        CK(a) {
            this.rd = new bf(this,a.x * this.ea,a.y * this.ea);
            this.rd.Tt = O(this, this.Jp)
        }
        LK(a) {
            let b = new Fb(this);
            b.x = a.x * this.ea;
            b.y = a.y * this.ea;
            b.timeout = a.timeout;
            -1 != a.timeout && b.setTimeout();
            b.Bh(a);
            b.update(0);
            this.Pb.push(b)
        }
        PK(a) {
            if (!this.iB(a) && null != a.text && "" != a.text) {
                var b = Math.ceil(a.width * this.ea);
                b = new mf(Vb.get(a.text),b);
                b.x = a.x * this.ea;
                b.y = a.y * this.ea;
                this.ma(1).S(b.R.B);
                a = a.special;
                b.ed = null != a ? a : 0;
                0 == b.ed && b.show();
                this.On.push(b)
            }
        }
        OK(a) {
            if (!this.iB(a)) {
                var b = new lf(a.name - 5);
                b.R.F();
                b.x = a.x * this.ea;
                b.y = a.y * this.ea;
                var c = a.angle;
                b.rotation = null != c ? c : 0;
                c = a.special;
                b.ed = null != c ? c : 0;
                b.Bh(a);
                a = 1;
                if (2 == b.ed || 5 == this.ed)
                    a = 11;
                this.ma(a).S(b.R.B);
                0 != b.ed && 2 != b.ed || b.show();
                this.Nn.push(b)
            }
        }
        uK(a) {
            let b = new fb(this);
            b.x = a.x * this.ea;
            b.y = a.y * this.ea;
            this.bubbles.push(b)
        }
        HK(a) {
            let b = new Rb(this);
            b.angle = a.angle;
            b.x = a.x * this.ea;
            b.y = a.y * this.ea;
            b.rotation = a.angle + 90;
            b.jd();
            this.Gh.push(b)
        }
        JK(a) {
            let b = new Ua(this,a.group);
            b.x = a.x * this.ea;
            b.y = a.y * this.ea;
            b.Bh(a);
            b.rotation += 90;
            null != b.jb && (b.jb.angle += 90);
            b.jd();
            this.Jg.push(b)
        }
        KK(a) {
            var b = a.x * this.ea;
            let c = a.y * this.ea
              , d = a.size
              , e = parseFloat(a.angle);
            if (0 == a.toggled)
                var f = -1;
            else
                f = a.toggled,
                f = null != f ? f : -1;
            b = new ff(this,b,c,d,null != e ? e : 0,f);
            b.Bh(a);
            -1 != f && (b.Xz = O(this, this.PM));
            80 == a.name ? (b.Me = !0,
            b.Yy = a.initialDelay,
            b.$z = a.onTime,
            b.Pz = a.offTime,
            b.Ne = 0,
            b.PB(),
            b.Ne += b.Yy,
            b.jd()) : b.Me = !1;
            this.ze.push(b)
        }
        IK(a) {
            let b = a.x * this.ea
              , c = a.y * this.ea
              , d = a.size * this.ea;
            var e = Ga.parseInt(a.handleAngle);
            e = null != e ? e : 0;
            let f = e * Ea
              , g = a.oneHandle
              , h = new Nd(this);
            h.Sm = a.size;
            h.x = b;
            h.y = c;
            h.rotation = e;
            h.kk = new t(h.x - h.Sm * this.ea,h.y);
            h.kk.Sa(f, h.x, h.y);
            h.lk = new t(h.x + h.Sm * this.ea,h.y);
            h.lk.Sa(f, h.x, h.y);
            h.kb(d);
            h.LA(g);
            this.kc.push(h)
        }
        tK(a) {
            let b = new Tc(this,a.x * this.ea,a.y * this.ea,a.size,a.angle);
            b.Bh(a);
            this.ji.push(b)
        }
        AK(a) {
            let b = a.x * this.ea
              , c = a.y * this.ea
              , d = a.radius
              , e = a.angle
              , f = a.grab
              , g = a.bubble;
            a = a.bouncer;
            let h = new Ye(this);
            h.$J(new t(b,c), (a ? 8 : 0) | (g ? 2 : 0) | (f ? 4 : 0), d, e, this.bubbles, this.yc, this.ji);
            this.Te.push(h);
            this.li.hb = new Ja;
            2 != this.Da && (this.mi.hb = new Ja,
            this.ni.hb = new Ja)
        }
        MK(a) {
            let b = a.x * this.ea
              , c = a.y * this.ea;
            a = a.angle;
            let d = new hf(this);
            d.YJ(b, c, a);
            this.Uh.push(d)
        }
        DK(a) {
            let b = a.x * this.ea
              , c = a.y * this.ea
              , d = a.candyCaptured
              , e = new ob(this);
            e.XJ(b, c);
            this.vk.push(e);
            e.Bh(a);
            d && (this.pk = !0,
            this.N.l.aa(0),
            e.ux(this.ba))
        }
        zK(a) {
            let b = a.x * this.ea
              , c = a.y * this.ea
              , d = a.angle
              , e = a.radius
              , f = a.activeTime;
            a = a.index;
            let g = new Te(this,this.Pd);
            g.index = a;
            g.ZJ(new t(b,c), d, e, f);
            this.Pd.sa(g, a)
        }
        NK(a) {
            var b = a.x * this.ea;
            let c = a.y * this.ea
              , d = a.angle
              , e = a.width * this.ea
              , f = a.length * this.ea
              , g = a.velocity * this.ea
              , h = "forward" == a.direction ? 1 : -1;
            a = "manual" == a.type;
            b = Pd.create(this, this.Qb.count(), b, c, f, e, -d, a, g * h);
            this.Qb.push(b)
        }
        Tl() {
            this.Hj += 1
        }
        ot(a, b, c, d) {
            if (P.Vi(b.x, b.y, a.x - 34, a.y - 34, 68, 68)) {
                if (null != c) {
                    this.Vk(a.x, a.y);
                    this.km();
                    b = 0;
                    for (var e = this.Te; b < e.length; ) {
                        var f = e[b];
                        ++b;
                        null != f && f.$ == c && (f.uf = !0,
                        f.Ih(1))
                    }
                }
                d.show();
                c = !1;
                b = 0;
                for (e = this.Te; b < e.length; )
                    f = e[b],
                    ++b,
                    null != f && f.$ == a && (f.uf = !1,
                    c = !0);
                c && d.ON();
                z.play(z.iw);
                a.pop();
                this.Tl();
                return !0
            }
            return !1
        }
        ll(a, b) {
            this.pB || (b.x = a.i.x,
            b.y = a.i.y,
            b.Nd())
        }
        II(a, b, c, d) {
            this.ll(this.ba, a);
            return ua.Qm(a, c) ? (c.TL(),
            z.play(z.Pg, !0),
            null != b && this.Wi(b, !1),
            this.aj(null != d),
            a.Uf = !1,
            a.l.Ub().cC(c.x, c.y + 10),
            a.l.Ub().alpha(0, .1),
            a.l.Ub().scale(0, .1, null, null, function() {
                a.H()
            }),
            !0) : !1
        }
        CB(a) {
            if (null != a && null != a.tc) {
                var b = a.constraint;
                a.tc.Vb.O(!0);
                a.tc.Vb.ja().play(Ig);
                var c = new t(0,Ua.FF);
                c.rotate(a.tc.rotation * Ea);
                b.i.x = a.tc.x;
                b.i.y = a.tc.y;
                b.i.add(c);
                b.oa.wb(b.i);
                b.Ya.x = 0;
                b.Ya.y = -1;
                b.Ya.rotate(a.tc.rotation * Ea);
                b.Ya.multiply(a.qu);
                b.$c.wb(b.Ya);
                b.$c.Ix(60);
                b.oa.wb(b.i);
                b.oa.Su(b.$c);
                a.tc = null
            }
        }
        aj(a) {
            let b = 0
              , c = this.yc.length;
            for (; b < c; ) {
                let d = this.yc[b++]
                  , e = d.Ra;
                null != e && (e.vb == this.ba || e.vb == this.pa && a || e.vb == this.Ba && !a) && (-1 == e.ac ? (e.vq(e.va.length - 2),
                this.km()) : e.et = !0,
                d.Ve && d.kj && this.Mq(d))
            }
        }
        nM(a) {
            if (null != a)
                for (var b = 0, c = this.yc; b < c.length; ) {
                    let d = c[b];
                    ++b;
                    if (null == d)
                        continue;
                    let e = d.Ra;
                    null != e && e.vb == a.constraint && (-1 == e.ac ? e.vq(e.va.length - 2) : e.et = !0,
                    d.Ve && d.kj && this.Mq(d))
                }
        }
        km() {
            --this.Hj;
            this.uk = 0
        }
        lh() {
            null != this.Ic && this.Wi(this.Ic, !1);
            this.aj(!1);
            this.ls();
            let a = z.xj;
            this.delay(function() {
                z.stop(a)
            }, 1.5);
            this.delay((lb = this.Bt,
            O(lb, lb.pL)), 1.8);
            this.Pd.pK()
        }
        Ns() {
            this.al || (this.Ma.LL(),
            z.play(z.SF),
            this.ls(),
            this.delay((lb = this.Bt,
            O(lb, lb.oL)), 1))
        }
        mp(a, b, c, d) {
            if (c.mM(a.x - 249.60000000000002, a.y - 249.60000000000002, a.x + 249.60000000000002, a.y + 249.60000000000002)) {
                var e = new t(0,0);
                let h = new t(0,0);
                c = new t(c.x,c.y);
                var f = a.ca;
                f = f.A - f.m;
                var g = a.ca;
                g = g.D - g.C;
                e.x = a.x - f / 2;
                h.x = a.x + f / 2;
                e.y = h.y = a.y;
                0 != a.angle && c.Sa(-a.angle, a.x, a.y);
                c.y < e.y && P.cu(c.x - f / 2, c.y - g / 2, c.x + f / 2, c.y + g / 2, e.x, e.y - 249.60000000000002, h.x, h.y) && (e = new t(0,-(499.20000000000005 * (249.60000000000002 - (e.y - c.y)) / 249.60000000000002)),
                e.rotate(a.angle),
                b.lo(e, d))
            }
        }
        kp(a, b, c) {
            if (!a.Iq && null != a.l) {
                var d = t.Ua(b.oa, b.i)
                  , e = b.oa.rb();
                e.Sa(-a.angle, a.x, a.y);
                d = Math.max(40 * d.pc(), 336) * (e.y < a.y ? -1 : 1);
                e = t.Ew(t.$I(a.angle));
                e.multiply(d);
                b.i.Sa(-a.angle, a.x, a.y);
                b.oa.Sa(-a.angle, a.x, a.y);
                b.oa.y = b.i.y;
                b.i.Sa(a.angle, a.x, a.y);
                b.oa.Sa(a.angle, a.x, a.y);
                b.lo(e, c);
                a.IL();
                z.play(z.GF)
            }
        }
        BL(a, b) {
            a.T.ja().play(Rb.eC);
            z.play([1030, 1029, 1028, 1027][V.Ag(0, 3)]);
            a.KI(this);
            this.qc || this.mp(a, this.ba, this.N, b);
            2 != this.Da && (this.ud || this.mp(a, this.pa, this.Bb, b),
            this.vd || this.mp(a, this.Ba, this.Cb, b));
            let c = 0
              , d = this.fc;
            for (; c < d.length; ) {
                let e = d[c];
                ++c;
                this.mp(a, e.constraint, e, b)
            }
        }
        CL(a, b) {
            function c(u, y, A) {
                var x = 0;
                if (0 == a.rotation && (null == q.rd || null != q.rd && q.qh) || 180 == a.rotation && null != q.rd && !q.qh)
                    x = a.x - y.x,
                    x = 2.5 < Math.abs(x) ? -A.x / f + .25 * x : 1 > Math.abs(A.x) ? -A.x : -A.x / f;
                let H = -34 / u.weight;
                if (0 != a.rotation && (null == q.rd || null != q.rd && q.qh) || 180 != a.rotation && null != q.rd && !q.qh)
                    f *= 15,
                    H = 90 == a.rotation || 270 == a.rotation ? H / 4 : H / 2;
                A = new t(x,-A.y / f + H);
                y = a.y - y.y;
                y > h + 17.5 && A.multiply(Math.exp(-2 * (y - (h + 17.5))));
                A.rotate(g);
                u.lo(A, b)
            }
            function d() {
                let u = 0
                  , y = q.ji;
                for (; u < y.length; ) {
                    let A = y[u];
                    ++u;
                    null != A && (A.Iq = !1)
                }
            }
            function e(u, y, A) {
                y.Sa(-g, a.x, a.y);
                A.rotate(-g);
                return P.cu(y.x - 17.5, y.y - 8.75, y.x + 17.5, y.y + 17.5, m.x, m.y, n.x, n.y)
            }
            let f = 5
              , g = a.rotation * Ea
              , h = a.iJ()
              , m = new t(a.x - 5,a.y - h - 1)
              , n = new t(a.x + 5,a.y - 17.5)
              , q = this;
            if (2 == this.Da) {
                var p = this.ba.i.rb()
                  , v = this.ba.Ya.rb();
                e(this.ba, p, v) && (d(),
                c(this.ba, p, v))
            } else
                p = this.pa.i.rb(),
                v = this.pa.Ya.rb(),
                e(this.pa, p, v) && (d(),
                c(this.pa, p, v)),
                p = this.Ba.i.rb(),
                v = this.Ba.Ya.rb(),
                e(this.Ba, p, v) && (d(),
                c(this.Ba, p, v));
            p = 0;
            for (v = this.fc; p < v.length; ) {
                let u = v[p];
                ++p;
                let y = u.constraint.i.rb()
                  , A = u.constraint.Ya.rb();
                e(u.constraint, y, A) && (d(),
                c(u.constraint, y, A))
            }
        }
        ac(a, b, c) {
            let d = 0
              , e = this.yc.length;
            for (; d < e; ) {
                let f = this.yc[d++]
                  , g = f.Ra;
                if (null == g || -1 != g.ac)
                    continue;
                let h = g.va.length - 1
                  , m = 0;
                for (; m < h; ) {
                    let n = m++
                      , q = g.va[n]
                      , p = g.va[n + 1];
                    if (f.Ng && P.Ji(a.x, a.y, b.x, b.y, f.x - 44, f.y - 44, 88, 88) ? 0 : yb.rK(a.x, a.y, b.x, b.y, q.i.x, q.i.y, p.i.x, p.i.y))
                        return f.Ve && f.kj && this.Mq(f),
                        z.play([1026, 1025, 1024, 1023][g.du]),
                        g.vq(n),
                        this.km(),
                        c && (g.jg = 0,
                        g.eu(n)),
                        1
                }
            }
            return 0
        }
        Mq(a) {
            z.play(z.$F);
            a.Ve = !1;
            a.lc.PH()
        }
        VN(a) {
            z.play(z.aG);
            let b = 0
              , c = this.yc;
            for (; b < c.length; ) {
                let d = c[b];
                ++b;
                let e = d.Ra;
                null != e && e.vb == this.ba && (-1 != e.ac ? d.As() : (e.vq(e.va.length - 2),
                this.km(),
                e.$j = !1),
                d.Ve && d.kj && a != d && this.Mq(d))
            }
            a.Ve = !1;
            this.qc = this.pB = !0;
            a.lc.Fb();
            this.al || this.delay(O(this, this.Ns), 2)
        }
        Wi(a, b) {
            for (var c = 0, d = this.Te; c < d.length; ) {
                var e = d[c];
                ++c;
                null != e && (e.$ == a && (e.uf = !0,
                e.Ih(1)),
                this.Ic == a && this.hB && e.$ == this.Tb && (e.uf = !0,
                e.Ih(1),
                this.Tb = null,
                this.hB = !1))
            }
            c = 0;
            for (d = this.fc; c < d.length; )
                if (e = d[c],
                ++c,
                null != e.$ && e.$ == a) {
                    e.$ = null;
                    e.Yl.rg();
                    this.Vk(e.x, e.y);
                    return
                }
            2 != this.Da ? b ? (this.$b = null,
            this.mi.rg(),
            this.Vk(this.Bb.x, this.Bb.y)) : (this.Tb = null,
            this.ni.rg(),
            this.Vk(this.Cb.x, this.Cb.y)) : (this.Ic = null,
            this.li.rg(),
            this.Vk(this.N.x, this.N.y));
            this.km()
        }
        Vk(a, b) {
            z.play(z.HF);
            let c = new B(null,r.$,l.yD);
            c.o(a);
            c.s(b);
            c.F();
            c.J(.4);
            this.Ph.S(c.B);
            c.ja().play(fb.bF).$d(function() {
                c.H()
            })
        }
        lp(a, b, c, d) {
            return P.Vi(c, d, b.i.x - 24, b.i.y - 24, 60, 60) ? (this.Wi(a, b == this.pa),
            !0) : !1
        }
        su(a) {
            var b = this.Y.window
              , c = b.P.viewport
              , d = b.zd.x;
            b = b.zd.y;
            d = -1 + 2 * (a.x - (c.x * d | 0)) / (c.w * d | 0);
            a = -1 + 2 * ((c.y * b | 0) - a.y) / (c.G * b | 0);
            c = this.gb.fb.lt;
            return new E(c.m11 * d + c.m12 * a + c.m14,c.m21 * d + c.m22 * a + c.m24,0,1)
        }
        lO(a, b) {
            var c = this.su(a);
            a = c.x;
            c = c.y;
            if (this.mk)
                this.Px = !0;
            else if (!(5 <= b))
                if (null != this.rd && this.rd.sk(a, c))
                    this.hp = b;
                else if (!(this.Pd.th() && this.Pd.Ui(a, c, b) || null != this.Ic && this.lp(this.Ic, this.ba, a, c) || 2 != this.Da && (null != this.$b && this.lp(this.$b, this.pa, a, c) || null != this.Tb && this.lp(this.Tb, this.Ba, a, c)))) {
                    for (var d = 0, e = this.fc; d < e.length; ) {
                        var f = e[d];
                        ++d;
                        if (null != f.$ && this.lp(f.$, f.constraint, a, c))
                            return
                    }
                    d = new t(a,c);
                    this.mm[b] || (this.mm[b] = !0,
                    this.Sh[b].wb(d),
                    this.$t[b].wb(d));
                    d = 0;
                    for (e = this.ze; d < e.length; )
                        if (f = e[d],
                        ++d,
                        null != f.Lf && -1 == f.Zq && f.Lf.Vt(a, c)) {
                            f.Zq = b;
                            return
                        }
                    d = !1;
                    e = 0;
                    for (f = this.Gh; e < f.length; ) {
                        var g = f[e];
                        ++e;
                        if (g.VL(a, c)) {
                            g.Jn = .05;
                            g.KB = b;
                            g.tk() || (d = !0);
                            break
                        }
                    }
                    if (!d) {
                        d = 0;
                        for (e = this.Uh; d < e.length; )
                            if (e[d++].Ui(a, c, b))
                                return;
                        var h = this;
                        d = 0;
                        for (e = this.vk; d < e.length; )
                            if (f = e[d],
                            ++d,
                            null != f && f.Ui(a, c, b)) {
                                this.delay(function() {
                                    h.pk = !1;
                                    h.N.Uf = !0;
                                    h.N.l.aa(1);
                                    h.N.l.J(.71)
                                }, .1);
                                return
                            }
                        var m = null;
                        e = d = !1;
                        var n = 0;
                        for (f = this.kc.length; n < f; ) {
                            g = this.kc[n];
                            let q = t.kd(a, c, g.kk.x, g.kk.y)
                              , p = t.kd(a, c, g.lk.x, g.lk.y);
                            if (q < na.ao && !g.Ly() || p < na.ao) {
                                for (m = n + 1; m < f; ) {
                                    n = this.kc[m];
                                    let v = t.kd(n.x, n.y, g.x, g.y);
                                    v + n.ee <= g.ee && (d = !0);
                                    v <= g.ee + n.ee && (e = !0);
                                    ++m
                                }
                                g.Vm.x = a;
                                g.Vm.y = c;
                                g.pn = b;
                                q < na.ao && g.PA(!0);
                                p < na.ao && g.QA(!0);
                                m = g;
                                break
                            }
                            ++n
                        }
                        f = this.kc.indexOf(m);
                        if (f != this.kc.length - 1 && e && !d) {
                            let q = m.rb();
                            q.l.Ub().alpha(0, .2, null, null, function() {
                                q.sM = !0
                            });
                            m.RI();
                            this.kc[f] = q;
                            this.kc.push(m)
                        }
                        d = 0;
                        for (e = this.yc; d < e.length; )
                            if (f = e[d],
                            ++d,
                            f.Ng && P.Vi(a, c, f.x - 44, f.y - 44, 88, 88) && (f.LJ(a, c),
                            f.ql = b),
                            0 < f.Ye && P.Vi(a, c, f.x - 26, f.y - 26, 52, 52)) {
                                f.Jk = b;
                                return
                            }
                        d = 0;
                        for (e = this.Te; d < e.length; )
                            if (f = e[d],
                            ++d,
                            null != f && f.Vt(a, c))
                                return;
                        this.Qb.dv(a, c, b)
                    }
                }
        }
        nO(a, b) {
            var c = this.su(a);
            a = c.x;
            c = c.y;
            if (!this.mk) {
                this.mm[b] = !1;
                null != this.rd && this.hp == b && (this.rd.sk(a, c) && (this.rd.toggle(),
                8 == F.box && this.Zr.ZI(),
                this.Jp(0)),
                this.hp = -1);
                for (var d = 0, e = this.ze; d < e.length; ) {
                    var f = e[d];
                    ++d;
                    if (null != f.Lf && f.Zq == b && (f.Zq = -1,
                    f.Lf.zL(a, c)))
                        return
                }
                d = 0;
                for (e = this.kc; d < e.length; )
                    f = e[d],
                    ++d,
                    f.pn == b && (f.pn = -1,
                    f.Pu = -1,
                    f.PA(!1),
                    f.QA(!1));
                d = 0;
                for (e = this.Uh; d < e.length; )
                    if (e[d++].AL(b))
                        return;
                d = 0;
                for (e = this.yc; d < e.length; )
                    f = e[d],
                    ++d,
                    f.Ng && f.ql == b && (f.ql = -1),
                    0 < f.Ye && f.Jk == b && (f.Jk = -1);
                this.Qb.fv(a, c, b)
            }
        }
        mO(a, b) {
            a = this.su(a);
            var c = a.x
              , d = a.y;
            if (!(this.mk || 5 <= b)) {
                a = new t(c,d);
                if (10 < this.Sh[b].Le(a))
                    for (var e = 0, f = this.Gh; e < f.length; ) {
                        var g = f[e];
                        ++e;
                        g.KB == b && 0 != g.Jn && (g.Jn = 0)
                    }
                this.RN.wb(a);
                f = 0;
                for (g = this.kc; f < g.length; )
                    if (e = g[f],
                    ++f,
                    e.pn == b) {
                        b = new t(e.x,e.y);
                        b.Le(a) < e.ee / 10 && e.Vm.wb(a);
                        c = t.Ua(e.Vm, b);
                        c = t.Ua(a, b).Mk() - c.Mk();
                        c > Math.PI ? c -= 2 * Math.PI : c < -Math.PI && (c += 2 * Math.PI);
                        e.kk.Sa(c, e.x, e.y);
                        e.lk.Sa(c, e.x, e.y);
                        e.rotation += c * Yc;
                        d = 0 < c ? z.XF : z.YF;
                        .07 > Math.abs(c) && (d = -1);
                        e.Pu != d && -1 != d && (z.play(d),
                        e.Pu = d);
                        d = 0;
                        for (f = this.yc; d < f.length; ) {
                            g = f[d];
                            ++d;
                            var h = new t(g.x,g.y);
                            h.Le(b) <= e.ee + 5 * this.ea && (h.Sa(c, e.x, e.y),
                            g.x = h.x,
                            g.y = h.y,
                            null != g.Ra && (g.Ra.mc.i.wb(h),
                            g.Ra.mc.yg.wb(h)))
                        }
                        d = 0;
                        for (f = this.Gh; d < f.length; )
                            g = f[d],
                            ++d,
                            h = new t(g.x,g.y),
                            h.Le(b) <= e.ee + 5 * this.ea && (h.Sa(c, e.x, e.y),
                            g.x = h.x,
                            g.y = h.y,
                            g.rotation += c * Yc,
                            g.jd());
                        d = 0;
                        for (f = this.bubbles; d < f.length; )
                            g = f[d],
                            ++d,
                            h = new t(g.x,g.y),
                            h.Le(b) <= e.ee + 10 * this.ea && g != this.Ic && g != this.Tb && g != this.$b && (h.Sa(c, e.x, e.y),
                            g.x = h.x,
                            g.y = h.y);
                        P.Vi(this.Ma.x, this.Ma.y, e.x - e.size, e.y - e.size, 2 * e.size, 2 * e.size) && (b = new t(this.Ma.x,this.Ma.y),
                        b.Sa(c, e.x, e.y),
                        this.Ma.x = b.x,
                        this.Ma.y = b.y);
                        e.Vm.wb(a);
                        return
                    }
                e = 0;
                for (f = this.Uh; e < f.length; )
                    if (f[e++].yL(c, d, b))
                        return;
                f = 0;
                for (g = this.yc; f < g.length; )
                    if (e = g[f],
                    ++f,
                    null != e) {
                        if (e.Ng && e.ql == b) {
                            e.KJ(a);
                            return
                        }
                        if (0 < e.Ye && e.Jk == b) {
                            e.Lt ? e.y = yb.Sx(a.y, e.Gk, e.Dk) : e.x = yb.Sx(a.x, e.Gk, e.Dk);
                            null != e.Ra && (a = e.Ra.mc,
                            a.i.x = a.yg.x = e.x,
                            a.i.y = a.yg.y = e.y);
                            return
                        }
                    }
                e = !1;
                this.Qb.ev(c, d, b) && (e = !0);
                if (this.mm[b]) {
                    c = new t(0,0);
                    f = new Fg(t.zb(this.Sh[b], c),t.zb(a, c),5,5,Ya.FO.rb());
                    c = this.ui[b];
                    d = 0;
                    if (!e)
                        for (c.push(f),
                        e = 0; e < c.length; )
                            f = c[e],
                            ++e,
                            d += this.ac(f.start, f.end, !1);
                    this.$t[b].wb(this.Sh[b]);
                    this.Sh[b].wb(a)
                }
            }
        }
        YN() {
            this.Dg = new E(0,0,0,1);
            this.cf = new E(0,0,0,1);
            this.oc = new E(0,0,0,1);
            this.Mj = 0;
            var a = this.gb.sj
              , b = this.Dg;
            b.x = (a.m + a.A) / 2;
            b.y = (a.C + a.D) / 2;
            if (0 != this.Kd.x || 0 != this.Kd.y)
                this.Mj = 1;
            0 < this.Kd.x ? (b = this.cf,
            b.x = (a.m + a.A) / 2 + (a.A - a.m),
            b.y = (a.C + a.D) / 2) : 0 > this.Kd.x && (b = this.cf,
            b.x = (a.m + a.A) / 2 - (a.A - a.m),
            b.y = (a.C + a.D) / 2);
            if (0 < this.Kd.y) {
                b = this.cf;
                var c = this.Dg;
                b.x = c.x + 0;
                b.y = c.y + (a.D - a.C)
            } else
                0 > this.Kd.y && (b = this.cf,
                c = this.Dg,
                b.x = c.x - 0,
                b.y = c.y - (a.D - a.C));
            1 == this.Mj && (this.sq = -.5,
            this.mk = !0,
            a = this.gb.i,
            b = this.Dg,
            a.x = b.x,
            a.y = b.y);
            this.gb.update();
            this.Np = 2 != this.Da ? this.Eh(this.pa) || this.Eh(this.Ba) : this.Eh(this.ba);
            if (this.Wc)
                for (a = 0,
                b = this.fc; a < b.length; )
                    if (this.Eh(b[a++].constraint)) {
                        this.Np = !0;
                        break
                    }
        }
        Eh(a) {
            return !this.gb.jK(a.i.x, a.i.y)
        }
        iB(a) {
            return D.language != a.locale
        }
        Jp() {
            Va.toggle();
            this.qh = Va.iK();
            z.play(this.qh ? z.MF : z.NF)
        }
        PM(a) {
            let b = 0
              , c = this.ze;
            for (; b < c.length; ) {
                let d = c[b];
                ++b;
                d.IB == a && d.QM()
            }
        }
        Jy(a, b, c) {
            let d = t.Ua(a.i, b.i).pc();
            if (d < c)
                if (c - d < 1E3 / (a.Ya.pc() + b.Ya.pc()) * 2) {
                    var e = Math.acos(t.eo(a.i.x > b.i.x ? t.Ua(a.i, b.i) : t.Ua(b.i, a.i)).x)
                      , f = Math.abs((c - d) / 2 * Math.cos(e));
                    c = Math.abs((c - d) / 2 * Math.sin(e));
                    a.i.x <= b.i.x ? (a.i.x -= f,
                    b.i.x += f) : (b.i.x -= f,
                    a.i.x += f);
                    a.i.y <= b.i.y ? (a.i.y -= c,
                    b.i.y += c) : (b.i.y -= c,
                    a.i.y += c)
                } else {
                    var g = t.Ua(b.i, a.i)
                      , h = -g.y
                      , m = g.x;
                    f = (a.Ya.x * g.x + a.Ya.y * g.y) / c;
                    e = (a.Ya.x * h + a.Ya.y * m) / c;
                    h = (b.Ya.x * h + a.Ya.x * m) / c;
                    m = f;
                    f = (b.Ya.x * g.x + a.Ya.x * g.y) / c;
                    let n = g.x / c;
                    g = g.y / c;
                    a.Ya = new t(f * n - e * g,f * g + e * n);
                    b.Ya = new t(m * n - h * g,m * g + h * n);
                    e = Math.acos(t.eo(a.i.x > b.i.x ? t.Ua(a.i, b.i) : t.Ua(b.i, a.i)).x);
                    f = Math.abs((c - d) / 2 * Math.cos(e));
                    c = Math.abs((c - d) / 2 * Math.sin(e));
                    a.i.x <= b.i.x ? (a.i.x -= f,
                    b.i.x += f) : (b.i.x -= f,
                    a.i.x += f);
                    a.i.y <= b.i.y ? (a.i.y -= c,
                    b.i.y += c) : (b.i.y -= c,
                    a.i.y += c);
                    a.$c = t.co(a.Ya, 60);
                    a.oa = t.Ua(a.i, a.$c);
                    b.$c = t.co(b.Ya, 60);
                    b.oa = t.Ua(b.i, b.$c)
                }
        }
        OB(a) {
            if (this.ed == a) {
                for (var b = this.ed = 0, c = this.On; b < c.length; ) {
                    var d = c[b];
                    ++b;
                    null != d && (d.ed == a ? d.show() : d.rg())
                }
                b = 0;
                for (c = this.Nn; b < c.length; )
                    d = c[b],
                    ++b,
                    null != d && (d.ed == a ? d.show() : d.rg())
            }
        }
        update(a) {
            function b(w) {
                w.lo(new t(-w.Ya.x / di,-w.Ya.y / di + Qi), a)
            }
            function c(w, I, K) {
                let L = I.x;
                I = I.y;
                let N = w.Jb
                  , U = w.Kb
                  , M = w.Pc;
                w = w.Qc;
                return P.Ji(N.x + L, N.y + I, U.x + L, U.y + I, K.i.x - 16, K.i.y - 16, 32, 32) ? !0 : P.Ji(M.x + L, M.y + I, w.x + L, w.y + I, K.i.x - 16, K.i.y - 16, 32, 32)
            }
            function d(w, I) {
                return P.Ji(w.Jb.x, w.Jb.y, w.Kb.x, w.Kb.y, I.i.x - 6, I.i.y - 6, 12, 12) ? !0 : P.Ji(w.Pc.x, w.Pc.y, w.Qc.x, w.Qc.y, I.i.x - 6, I.i.y - 6, 12, 12)
            }
            super.update(a);
            let e = 0
              , f = this.ns;
            for (; e < f.length; )
                f[e++].update(a);
            let g = this.Uk;
            null != g && g.update(a);
            let h = 0;
            for (; 5 > h; ) {
                let w = this.ui[h++]
                  , I = w.length
                  , K = 0;
                for (; K < I; ) {
                    let L = w[K]
                      , N = Ma.Pi(L.color.a, 0, 10, a);
                    L.color.a = N.value;
                    N.$i ? (w.splice(K, 1),
                    --I) : ++K
                }
            }
            0 == this.Hj && (this.uk += a,
            30 < this.uk && (this.uk = 0));
            let m = this.Ni / this.Mi
              , n = this.Y.window.Cm()
              , q = n.w / n.G
              , p = 1 < m && 1 < q && q > m;
            switch (this.Mj) {
            case 1:
                this.sq += a * (this.Px ? 3 : 1);
                let w = 0;
                0 <= this.sq && (w = Math.min(1, this.sq / 2));
                let I = Aa.$L()(w)
                  , K = this.Dg
                  , L = this.cf
                  , N = new E(K.x + (L.x - K.x) * I,K.y + (L.y - K.y) * I,0,1);
                p ? (N = new E(this.Ni / 2,this.Mi / 2,0,1),
                w = 1,
                this.gb.tb.x = .5,
                this.gb.tb.y = .5) : (0 < this.Kd.x && (this.gb.tb.x = I),
                0 > this.Kd.x && (this.gb.tb.x = 1 - I),
                0 < this.Kd.y && (this.gb.tb.y = I),
                0 > this.Kd.y && (this.gb.tb.y = 1 - I));
                let U = this.gb.i;
                U.x = N.x;
                U.y = N.y;
                if (1 == w) {
                    this.Px = this.mk = !1;
                    this.Mj = 2;
                    this.jh = 0;
                    let G = this.oc;
                    G.x = this.cf.x;
                    G.y = this.cf.y
                }
                break;
            case 2:
                let M = 2 != this.Da ? this.pa : this.ba;
                this.jh += .05;
                1 < this.jh && (this.jh = 1);
                if (p) {
                    let G = this.gb.tb;
                    G.x = .5;
                    G.y = .5;
                    let Q = this.gb.i;
                    Q.x = this.Ni / 2;
                    Q.y = this.Mi / 2
                } else {
                    if (0 != this.Kd.x) {
                        let G = this.gb.tJ(M.i.x, M.i.y);
                        100 > G ? G = 100 : 300 < G && (G = 300);
                        100 >= G && (this.jh = 1);
                        this.oc.x += (M.i.x - this.oc.x) * ya(G, 100, 300, .5, .1) * this.jh;
                        let Q = Math.min(this.Dg.x, this.cf.x)
                          , ka = Math.max(this.Dg.x, this.cf.x);
                        this.oc.x < Q && (this.oc.x = Q);
                        this.oc.x > ka && (this.oc.x = ka);
                        this.gb.i.x = this.oc.x;
                        this.gb.tb.x = ya(this.oc.x, Q, ka, 0, 1)
                    }
                    if (0 != this.Kd.y) {
                        let G = this.gb.sJ(M.i.x, M.i.y);
                        100 >= G && (this.jh = 1);
                        100 > G ? G = 100 : 300 < G && (G = 300);
                        this.oc.y += (M.i.y - this.oc.y) * ya(G, 100, 300, .5, .1) * this.jh;
                        let Q = Math.min(this.Dg.y, this.cf.y)
                          , ka = Math.max(this.Dg.y, this.cf.y);
                        this.oc.y < Q && (this.oc.y = Q);
                        this.oc.y > ka && (this.oc.y = ka);
                        this.gb.i.y = this.oc.y;
                        this.gb.tb.y = ya(this.oc.y, Q, ka, 0, 1)
                    }
                }
            }
            this.gb.update();
            let v = this.yc.length
              , u = this;
            if (0 < v) {
                let w = !1
                  , I = !1
                  , K = !1
                  , L = 0
                  , N = this.fc;
                for (; L < N.length; )
                    N[L++].cz = !0;
                let U = 0;
                for (; U < v; ) {
                    let M = this.yc[U++];
                    if (null == M)
                        continue;
                    M.update(a);
                    let G = M.Ra;
                    if (this.Pd.th() && null != G && -1 == G.ac)
                        this.aj(!0);
                    else {
                        null != M.jb && null != G && (G.mc.i.x = M.x,
                        G.mc.i.y = M.y,
                        G.mc.yg.wb(G.mc.i));
                        if (null != G) {
                            if (-1 != G.ac && 0 == G.jg) {
                                M.As();
                                continue
                            }
                            G.update(a * this.cl);
                            M.Ve && (1 == this.Mj || this.mk || M.zO(a),
                            -1 == M.lj && this.VN(M))
                        }
                        if (-1 != M.W && null == M.Ra) {
                            let Q = function(T, Z) {
                                return (new t(Z.x,Z.y)).Le(T.i) <= Z.W + Fb.Ar ? (T = new Jd(u.ma(5),null,Z.x,Z.y,T,T.i.x,T.i.y,Z.W + Fb.Ar),
                                T.mc.yg.wb(T.mc.i),
                                Z.Hm = !0,
                                Z.ZA(T),
                                z.play(z.VF),
                                null != Z.jb && z.play(z.IF),
                                !0) : !1
                            };
                            2 != this.Da ? (this.ud || Q(this.pa, M) && this.Tl(),
                            this.vd || null != M.Ra || Q(this.Ba, M) && this.Tl()) : Q(this.ba, M) && this.Tl();
                            let ka = 0
                              , xa = this.fc;
                            for (; ka < xa.length; )
                                Q(xa[ka++].constraint, M)
                        }
                        if (null != G) {
                            let Q = G.va[G.va.length - 1]
                              , ka = !1;
                            w || (2 != this.Da ? Q != this.pa || this.ud || I ? Q != this.Ba || this.vd || K || (ka = !0) : ka = !0 : this.qc || w || (ka = !0));
                            if (0 != G.du && -1 == G.ac && ka) {
                                let xa = t.Ua(G.mc.i, Q.i).Mk() * Yc;
                                if (2 != this.Da) {
                                    let T = Q == this.pa ? this.Bb : this.Cb;
                                    G.dm || (G.tg = T.rotation - xa);
                                    Q == this.pa ? (this.Tm = xa + G.tg - T.rotation,
                                    I = !0) : (this.Um = xa + G.tg - T.rotation,
                                    K = !0);
                                    this.N.rotation = xa + G.tg;
                                    T.rotation = xa + G.tg
                                } else
                                    G.dm || (G.tg = this.N.rotation - xa),
                                    this.N.Cf = xa + G.tg - this.N.rotation,
                                    this.N.rotation = xa + G.tg,
                                    w = !0;
                                G.dm = !0
                            } else
                                G.dm = !1
                        }
                    }
                }
                2 != this.Da ? (I || this.ud || (this.Bb.rotation += Math.min(5, this.Tm),
                this.Tm *= .98),
                K || this.vd || (this.Cb.rotation += Math.min(5, this.Um),
                this.Um *= .98)) : w || this.qc || (this.N.rotation += Math.min(5, this.N.Cf),
                this.N.Cf *= .98)
            }
            let y = 0
              , A = this.fc;
            for (; y < A.length; ) {
                let w = A[y];
                ++y;
                w.cz || (w.rotation += Math.min(5, w.Cf),
                w.Cf *= .98)
            }
            if (this.Wc) {
                let w = 0
                  , I = this.fc;
                for (; w < I.length; ) {
                    let N = I[w];
                    ++w;
                    let U = N.constraint;
                    t.kd(U.i.x, U.i.y, this.Ma.x, this.Ma.y) < N.oz ? this.Ma.xq(!0) : this.Ma.xq(!1);
                    let M = 0
                      , G = this.Pb;
                    for (; M < G.length; ) {
                        let Q = G[M];
                        ++M;
                        Q.xq(t.kd(U.i.x, U.i.y, Q.x, Q.y) < N.oz)
                    }
                }
                let K = 0
                  , L = this.fc;
                for (; K < L.length; ) {
                    let N = L[K];
                    ++K;
                    if (null != N.tc)
                        continue;
                    let U = 2 * Fb.Ar;
                    2 == this.Da && (this.qc || null != this.N.tc || this.Jy(N.constraint, this.ba, U));
                    let M = 0
                      , G = this.fc;
                    for (; M < G.length; ) {
                        let Q = G[M];
                        ++M;
                        N != Q && null == Q.tc && this.Jy(N.constraint, Q.constraint, U)
                    }
                }
            }
            if (0 < a) {
                let w = a;
                for (; 0 <= w; )
                    w -= .01,
                    this.Qb.update(Math.min(.01, w)),
                    this.Qb.Qj(this.bubbles),
                    this.Qb.Qj(this.Pb),
                    this.Qb.Qj(this.ji),
                    this.Qb.Qj(this.Jg),
                    this.Qb.Qj(this.Uh),
                    this.Qb.Qj(this.Gh)
            }
            this.qc || (this.N.update(a),
            this.dh -= a,
            0 >= this.dh && (this.Pd.th() || this.ba.update(a * this.cl)));
            if (2 != this.Da) {
                let w = a * this.cl;
                this.dh -= a;
                this.Bb.update(a);
                0 >= this.dh && this.pa.update(w);
                this.Cb.update(a);
                0 >= this.dh && this.Ba.update(w);
                if (1 == this.Da) {
                    let I = 0;
                    for (; 30 > I; )
                        ++I,
                        this.pa.pq(),
                        this.Ba.pq()
                }
                if (0 < this.Dh) {
                    let I = Ma.Pi(this.Dh, 0, 200, a);
                    this.Dh = I.value;
                    if (I.$i) {
                        z.play(z.KF);
                        this.Da = 2;
                        this.qc = !1;
                        this.vd = this.ud = !0;
                        let K = !1
                          , L = !1
                          , N = 0
                          , U = this.Te;
                        for (; N < U.length; ) {
                            let Z = U[N];
                            ++N;
                            null != Z && (null != this.$b && Z.$ == this.$b && (K = !0),
                            null != this.Tb && Z.$ == this.Tb && (L = !0))
                        }
                        if (null != this.$b && null != this.Tb && K && L)
                            this.hB = !0;
                        else if (null == this.$b || !K)
                            if (null == this.Tb || !L)
                                if (null != this.$b || null != this.Tb) {
                                    let Z = 0
                                      , Xa = this.Te;
                                    for (; Z < Xa.length; ) {
                                        let ub = Xa[Z];
                                        ++Z;
                                        null != ub && (null != this.$b && ub.$ == this.$b && (ub.uf = !0,
                                        ub.Ih(1)),
                                        null != this.Tb && ub.$ == this.Tb && (ub.uf = !0,
                                        ub.Ih(1)))
                                    }
                                }
                        if (null != this.$b || null != this.Tb)
                            this.Ic = null != this.$b ? this.$b : this.Tb,
                            this.li.show(),
                            this.mi.rg(),
                            this.ni.rg();
                        this.Um = this.Tm = this.N.Cf = 0;
                        this.ba.i.x = this.pa.i.x;
                        this.ba.i.y = this.pa.i.y;
                        this.N.x = this.ba.i.x;
                        this.N.y = this.ba.i.y;
                        let M = t.Ua(this.pa.i, this.pa.oa)
                          , G = t.Ua(this.Ba.i, this.Ba.oa)
                          , Q = new t((M.x + G.x) / 2,(M.y + G.y) / 2);
                        this.ba.oa.wb(this.ba.i);
                        this.ba.oa.Su(Q);
                        let ka = 0
                          , xa = this.yc;
                        for (; ka < xa.length; ) {
                            let Z = xa[ka++].Ra;
                            if (null != Z && Z.ac != Z.va.length - 3 && (Z.vb == this.pa || Z.vb == this.Ba)) {
                                let Xa = Z.va[Z.va.length - 2]
                                  , ub = Z.vb.Cg(Xa);
                                this.ba.Cj(Xa, ub, 0);
                                Z.vb = this.ba;
                                Z.va[Z.va.length - 1] = this.ba;
                                Z.tg = 0;
                                Z.dm = !1
                            }
                        }
                        this.Bb.R.H();
                        this.Cb.R.H();
                        let T = new B(null,r.N,l.HD);
                        this.ma(10).S(T.B);
                        T.o(this.N.x);
                        T.s(this.N.y);
                        T.F();
                        T.ja().cA(Ri)
                    } else
                        this.pa.xo(this.Ba, this.Dh),
                        this.Ba.xo(this.pa, this.Dh)
                }
                this.ud || this.vd || 0 != this.Da || (this.ll(this.pa, this.Bb),
                this.ll(this.Ba, this.Cb),
                ua.Qm(this.Bb, this.Cb) && (this.Da = 1,
                this.Dh = this.pa.i.Le(this.Ba.i),
                this.pa.Cj(this.Ba, this.Dh, 1),
                this.Ba.Cj(this.pa, this.Dh, 1)))
            }
            let x = 0
              , H = this.fc;
            for (; x < H.length; ) {
                let w = H[x];
                ++x;
                w.update(a);
                w.constraint.update(a * this.cl);
                let I = 0;
                for (; 30 > I; )
                    ++I,
                    w.constraint.pq()
            }
            this.Ma.update(a);
            0 <= this.ip && (this.ip -= a,
            0 > this.ip && !this.Wc && this.Ma.NL());
            0 <= this.uo && (this.uo -= a,
            0 > this.uo && this.N.JL());
            if (!this.mk) {
                let w = 0
                  , I = this.Pb;
                for (; w < I.length; ) {
                    let K = I[w];
                    ++w;
                    K.update(a);
                    if (0 < K.timeout && 0 == K.time) {
                        this.Qb.remove(K);
                        ta.remove(this.Pb, K);
                        let L = K.l;
                        L.Sc(0).Ub().alpha(0, .25);
                        L.Sc(1).Ub().scale(0, .25);
                        L.Sc(2).Ub().scale(0, .25, null, null, O(K, K.H));
                        break
                    } else {
                        let L = !1;
                        2 != this.Da ? (this.ll(this.pa, this.Bb),
                        this.ll(this.Ba, this.Cb),
                        L = ua.Qm(this.Bb, K) && !this.ud || ua.Qm(this.Cb, K) && !this.vd) : (this.ll(this.ba, this.N),
                        L = ua.Qm(this.N, K) && !this.qc);
                        this.Wc && K.Vd || !this.Wc || (L = !1);
                        if (L) {
                            this.N.KL();
                            this.Pq++;
                            this.Bt.xL(this.Pq);
                            let N = new B(null,r.fd,l.zE);
                            N.o(K.x);
                            N.s(K.y);
                            N.J(.4);
                            N.ja().cA(Si);
                            N.F();
                            this.Ph.S(N.B);
                            K.H();
                            this.Qb.remove(K);
                            ta.remove(this.Pb, K);
                            z.play([1013, 1012, 1011][this.Pq - 1]);
                            this.Ma.fK() && this.Ma.dA();
                            break
                        }
                    }
                }
            }
            let C = 0
              , Y = this.bubbles;
            for (; C < Y.length; ) {
                let w = Y[C];
                ++C;
                w.update(a);
                if (!w.Sp)
                    if (2 != this.Da) {
                        if (!this.ud && this.ot(w, this.Bb, this.$b, this.mi)) {
                            this.$b = w;
                            break
                        }
                        if (!this.vd && this.ot(w, this.Cb, this.Tb, this.ni)) {
                            this.Tb = w;
                            break
                        }
                    } else if (!this.qc && this.ot(w, this.N, this.Ic, this.li)) {
                        this.Ic = w;
                        break
                    }
                let I = 0
                  , K = this.fc;
                for (; I < K.length; ) {
                    let L = K[I];
                    ++I;
                    if (!w.Sp && P.Vi(L.x, L.y, w.x - 34, w.y - 34, 68, 68)) {
                        let N = !1
                          , U = 0
                          , M = this.Te;
                        for (; U < M.length; ) {
                            let G = M[U];
                            ++U;
                            G.$ == w && (G.uf = !1,
                            N = !0)
                        }
                        if (null == L.$ || !N) {
                            if (null != L.$) {
                                this.Vk(w.x, w.y);
                                let G = 0
                                  , Q = this.Te;
                                for (; G < Q.length; ) {
                                    let ka = Q[G];
                                    ++G;
                                    ka.$ == L.$ && (ka.uf = !0,
                                    ka.Ih(1))
                                }
                                L.$ = null
                            }
                            L.$ = w;
                            L.Yl.show();
                            z.play(z.iw);
                            w.pop()
                        }
                    }
                }
                if (!w.$B) {
                    let L = this.kc.length
                      , N = 0;
                    for (; N < L; ) {
                        let U = this.kc[N++];
                        t.kd(w.x, w.y, U.x, U.y) < U.ee && (w.$B = !0)
                    }
                }
            }
            let X = 0
              , S = this.On;
            for (; X < S.length; )
                S[X++].update(a);
            let aa = 0
              , ra = this.Nn;
            for (; aa < ra.length; )
                ra[aa++].update(a);
            let la = -1
              , ba = 0
              , oa = this.kc.length;
            for (; ba < oa; ) {
                let w = this.kc[ba]
                  , I = 0;
                for (; I < v; ) {
                    let N = this.yc[I++]
                      , U = w.me.indexOf(N);
                    t.kd(N.x, N.y, w.x, w.y) <= w.ee + 5 * this.ea ? 0 > U && w.me.push(N) : 0 <= U && ta.remove(w.me, N)
                }
                let K = this.bubbles.length
                  , L = 0;
                for (; L < K; ) {
                    let N = this.bubbles[L++]
                      , U = w.me.indexOf(N);
                    t.kd(N.x, N.y, w.x, w.y) <= w.ee + 10 * this.ea ? 0 > U && w.me.push(N) : 0 <= U && ta.remove(w.me, N)
                }
                w.sM && (la = ba);
                w.update(a);
                ++ba
            }
            0 <= la && (this.kc[la].H(),
            this.kc.splice(la, 1));
            let va = 0
              , ma = this.Jg;
            for (; va < ma.length; ) {
                let w = ma[va];
                ++va;
                w.update(a);
                let I = Ma.Pi(w.pp, 0, 1, a);
                w.pp = I.value;
                I.$i && (w.state = 0);
                let K = w.rotation;
                w.rotation = 0;
                w.jd();
                w.rotation = K;
                w.jd();
                let L = function(G) {
                    let Q = 2 * Ua.wj;
                    return P.Ji(w.Jb.x, w.Jb.y, w.Kb.x, w.Kb.y, G.i.x - Ua.wj, G.i.y - Ua.wj, Q, Q)
                }
                  , N = function(G) {
                    let Q = 2 * Ua.wj;
                    return P.Ji(w.Pc.x, w.Pc.y, w.Qc.x, w.Qc.y, G.i.x - Ua.wj, G.i.y - Ua.wj, Q, Q)
                };
                if (0 != w.state)
                    continue;
                if (2 == this.Da && null == this.N.tc) {
                    let G = this.ba.$c.rb();
                    G.rotate(-K * Ea);
                    if (0 <= G.y && (L(this.ba) || N(this.ba))) {
                        let Q = 0
                          , ka = this.Jg.length;
                        for (; Q < ka; ) {
                            let xa = this.Jg[Q++];
                            if (xa != w && xa.group == w.group) {
                                xa.state = 1;
                                xa.pp = .8;
                                this.aj(!1);
                                this.N.qu = .9 * this.ba.Ya.pc() * na.dw;
                                this.N.tc = xa;
                                w.Vb.O(!0);
                                w.Vb.ja().play(Ig);
                                z.play(z.jw);
                                let T = this
                                  , Z = this.N;
                                this.delay(function() {
                                    T.CB(Z)
                                }, .1);
                                break
                            }
                        }
                    }
                }
                let U = 0
                  , M = this.fc;
                for (; U < M.length; ) {
                    let G = M[U];
                    ++U;
                    if (null != G.tc)
                        continue;
                    let Q = G.constraint.$c.rb();
                    Q.rotate(-K * Ea);
                    if (0 <= Q.y && L(G.constraint) || N(G.constraint)) {
                        let ka = 0
                          , xa = this.Jg.length;
                        for (; ka < xa; ) {
                            let T = this.Jg[ka++];
                            if (T != w && T.group == w.group) {
                                T.state = 1;
                                T.pp = .8;
                                this.nM(G);
                                G.qu = .9 * G.constraint.Ya.pc();
                                G.tc = T;
                                w.Vb.O(!0);
                                w.Vb.ja().play(Ig);
                                z.play(z.jw);
                                let Z = this
                                  , Xa = G;
                                this.delay(function() {
                                    Z.CB(Xa)
                                }, .1);
                                break
                            }
                        }
                    }
                }
            }
            let da = 0
              , Wa = this.Te;
            for (; da < Wa.length; )
                Wa[da++].update(a);
            let gb = 0
              , Na = this.Gh;
            for (; gb < Na.length; ) {
                let w = Na[gb];
                ++gb;
                w.update(a);
                let I = Ma.Pi(w.Jn, 0, 1, a);
                w.Jn = I.value;
                I.$i && this.BL(w, a)
            }
            let hb = 0
              , Qd = this.Uh;
            for (; hb < Qd.length; ) {
                let w = Qd[hb];
                ++hb;
                null != w && (w.update(a),
                3 != w.fe && this.CL(w, a))
            }
            let ad = 0
              , Rd = this.vk;
            for (; ad < Rd.length; ) {
                let w = Rd[ad];
                ++ad;
                if (null != w && (w.update(a),
                !this.pk && 0 == w.Gi && 32 > t.kd(this.ba.i.x, this.ba.i.y, w.x, w.y))) {
                    this.pk = !0;
                    this.N.Uf = !1;
                    this.N.l.Ub().scale(.3, .1);
                    this.N.l.Ub().alpha(0, .1);
                    this.N.l.Ub().cC(w.x, w.y);
                    this.aj(!1);
                    null != this.Ic && this.Wi(this.Ic, !1);
                    let I = this.ba
                      , K = w;
                    this.delay(function() {
                        K.ux(I)
                    }, .05);
                    this.OB(3)
                }
            }
            let bd = 0
              , ei = this.ze;
            for (; bd < ei.length; ) {
                let w = ei[bd];
                ++bd;
                w.update(a);
                if ((!w.Me || w.No) && !this.pk) {
                    let I = !1
                      , K = !1;
                    2 != this.Da ? (I = !this.ud && d(w, this.pa)) ? K = !0 : I = !this.vd && d(w, this.Ba) : I = !this.qc && d(w, this.ba);
                    if (I) {
                        2 != this.Da ? K ? null != this.$b && this.Wi(this.$b, !0) : null != this.Tb && this.Wi(this.Tb, !1) : null != this.Ic && this.Wi(this.Ic, !1);
                        let L = new We(this,5);
                        this.ns.push(L);
                        null == this.rd || this.qh || (L.tb.y = -500,
                        L.angle = 90);
                        2 != this.Da ? K ? (L.x = this.Bb.x,
                        L.y = this.Bb.y,
                        this.ud = !0) : (L.x = this.Cb.x,
                        L.y = this.Cb.y,
                        this.vd = !0) : (L.x = this.N.x,
                        L.y = this.N.y,
                        this.qc = !0,
                        this.N.H());
                        L.Fn(5);
                        z.play(z.JF);
                        this.aj(K);
                        if (this.al)
                            return;
                        this.delay(O(this, this.Ns), .3);
                        return
                    }
                }
            }
            let xh = 0
              , fi = this.ji;
            for (; xh < fi.length; ) {
                let w = fi[xh];
                ++xh;
                w.update(a);
                let I = t.Ua(new t(w.x,w.y), w.Vp)
                  , K = I.pc()
                  , L = 1
                  , N = new t(0,0);
                1 <= K && (L = K | 0,
                N = t.co(I, L));
                let U = new t(0,0)
                  , M = !1
                  , G = !1;
                if (2 != this.Da) {
                    M = !1;
                    let T = 0
                      , Z = L;
                    for (; T < Z; ) {
                        let Xa = t.ld(N, T++);
                        if (M = M || c(w, Xa, this.pa)) {
                            U = Xa.rb();
                            break
                        }
                    }
                    if (M = M && !this.ud)
                        G = !0;
                    else {
                        M = !1;
                        let Xa = 0
                          , ub = L;
                        for (; Xa < ub; ) {
                            let gi = t.ld(N, Xa++);
                            if (M = M || c(w, gi, this.Ba)) {
                                U = gi.rb();
                                break
                            }
                        }
                        M = M && !this.vd
                    }
                } else {
                    M = !1;
                    let T = 0
                      , Z = L;
                    for (; T < Z; ) {
                        let Xa = t.ld(N, T++);
                        (M = M || c(w, Xa, this.ba)) && (U = Xa.rb())
                    }
                    M = M && !this.qc
                }
                let Q = function(T) {
                    T.i.x += I.x - U.x;
                    T.i.y += I.y - U.y;
                    T.oa.x += I.x - U.x;
                    T.oa.y += I.y - U.y
                };
                M ? 2 != this.Da ? G ? (Q(this.pa),
                this.kp(w, this.pa, a)) : (Q(this.Ba),
                this.kp(w, this.Ba, a)) : (Q(this.ba),
                this.kp(w, this.ba, a)) : w.Iq = !1;
                M = !1;
                let ka = 0
                  , xa = this.fc;
                for (; ka < xa.length; ) {
                    let T = xa[ka];
                    ++ka;
                    M = !1;
                    let Z = 0
                      , Xa = L;
                    for (; Z < Xa; ) {
                        let ub = Z++;
                        M = M || c(w, t.ld(N, ub), T.constraint)
                    }
                    M ? (Q(T.constraint),
                    this.kp(w, T.constraint, a)) : w.Iq = !1
                }
                w.zx()
            }
            this.Pd.update(a);
            !this.Pd.th() && this.Pd.ks(this.ba) && (this.Pd.ps(this.ba),
            this.aj(!0),
            this.N.Cf = 0,
            this.OB(4));
            let Qi = fb.gC * (null == this.rd || this.qh ? 1 : -1)
              , di = fb.fC;
            0 == this.Da && (null != this.$b && b(this.pa),
            null != this.Tb && b(this.Ba));
            if (1 == this.Da) {
                if (null != this.$b || null != this.Tb)
                    b(this.pa),
                    b(this.Ba)
            } else
                null == this.Ic || this.Pd.th() || b(this.ba);
            let yh = 0
              , hi = this.fc;
            for (; yh < hi.length; ) {
                let w = hi[yh];
                ++yh;
                null != w.$ && b(w.constraint)
            }
            let Ng;
            if (!this.qc && !this.Fp) {
                if (this.Kt)
                    0 < this.fn && (this.fn = Ma.Ik(this.fn, 0, 1, a),
                    0 >= this.fn && (Ng = new t(this.Ma.x,this.Ma.y),
                    this.ba.i.Le(Ng) > Qb.Vv ? (this.Kt = !1,
                    this.Ma.QL(),
                    z.play(z.QF)) : this.fn = 1));
                else {
                    let w = !0;
                    this.pk ? w = !1 : this.Wc && !this.Ma.Vd && (w = !1);
                    w && (Ng = new t(this.Ma.x,this.Ma.y),
                    this.ba.i.Le(Ng) < Qb.Vv && (this.Kt = !0,
                    this.Ma.RL(),
                    z.play(z.RF),
                    this.fn = 1))
                }
                if (!this.al && !this.tx && (!this.Wc || this.Wc && this.Ma.Vd) && this.II(this.N, this.Ic, this.Ma, this.ba)) {
                    this.qc = this.tx = !0;
                    this.lh();
                    return
                }
            }
            let zh = 2 == this.Da && this.Eh(this.ba) && !this.qc
              , Ah = 2 != this.Da && !this.ud && this.Eh(this.pa)
              , Bh = 2 != this.Da && !this.vd && this.Eh(this.Ba)
              , Og = this.Wc;
            if (!this.Fp) {
                let w = 0
                  , I = this.fc;
                for (; w < I.length; )
                    if (!this.Eh(I[w++].constraint)) {
                        Og = !1;
                        break
                    }
            }
            !this.Np || zh || Ah || Bh || Og || (this.Np = !1);
            if (1 != this.Mj && !this.Np && (zh || Ah || Bh || Og)) {
                let w = !1;
                if (2 == this.Da && this.qc || 2 != this.Da && (this.ud || this.vd) || this.Fp)
                    w = !0;
                zh && (this.qc = !0);
                Ah && (this.ud = !0);
                Bh && (this.vd = !0);
                Og && (this.Fp = !0);
                this.al || w || this.Ns()
            }
            if (1 == this.ed && !this.qc && null != this.Ic && this.N.y < na.iC && this.N.x > na.hC) {
                let w = this.ed = 0
                  , I = this.On;
                for (; w < I.length; ) {
                    let N = I[w];
                    ++w;
                    1 == N.ed && N.show()
                }
                let K = 0
                  , L = this.Nn;
                for (; K < L.length; ) {
                    let N = L[K];
                    ++K;
                    1 == N.ed && N.show()
                }
            }
            this.Zr.update();
            this.Ph.Kg(a)
        }
        Ec() {
            for (var a = 0, b = this.ns; a < b.length; )
                b[a++].M();
            a = this.Uk;
            null != a && a.M();
            this.Ma.M();
            a = 0;
            for (b = this.kc; a < b.length; )
                b[a++].M();
            a = 0;
            for (b = this.bubbles; a < b.length; )
                b[a++].M();
            a = 0;
            for (b = this.Gh; a < b.length; )
                b[a++].M();
            a = 0;
            for (b = this.ze; a < b.length; )
                b[a++].M();
            a = 0;
            for (b = this.ji; a < b.length; )
                b[a++].M();
            a = 0;
            for (b = this.Jg; a < b.length; )
                b[a++].M();
            a = 0;
            for (b = this.yc; a < b.length; )
                b[a++].xI();
            a = 0;
            for (b = this.yc; a < b.length; )
                b[a++].M();
            a = 0;
            for (b = this.Pb; a < b.length; )
                b[a++].M();
            a = 0;
            for (b = this.Te; a < b.length; )
                b[a++].M();
            a = 0;
            for (b = this.Uh; a < b.length; )
                b[a++].M();
            a = 0;
            for (b = this.vk; a < b.length; )
                b[a++].M();
            for (a = this.Qb.iterator(); a.bb(); )
                a.next().M();
            this.Pd.M();
            this.qc || (null == this.N.tc ? (this.N.x = this.ba.i.x,
            this.N.y = this.ba.i.y,
            this.N.visible = !0) : this.N.visible = !1);
            null != this.li && (this.li.o(this.N.x),
            this.li.s(this.N.y));
            2 != this.Da ? (this.ud ? this.Bb.R.O(!1) : (this.Bb.x = this.pa.i.x,
            this.Bb.y = this.pa.i.y,
            this.Bb.M()),
            null != this.mi && (this.mi.o(this.Bb.x),
            this.mi.s(this.Bb.y)),
            this.vd ? this.Cb.R.O(!1) : (this.Cb.x = this.Ba.i.x,
            this.Cb.y = this.Ba.i.y,
            this.Cb.M()),
            null != this.ni && (this.ni.o(this.Cb.x),
            this.ni.s(this.Cb.y)),
            this.N.visible = !1) : null == this.N.tc && (this.N.visible = !0);
            this.N.M();
            a = 0;
            for (b = this.fc; a < b.length; )
                b[a++].M();
            a = 0;
            for (b = this.On; a < b.length; )
                b[a++].M();
            a = 0;
            for (b = this.Nn; a < b.length; )
                b[a++].M();
            this.Ph.hd();
            this.Ph.nl();
            this.Y.P.eM(this.gb.fb);
            this.Y.P.Ko(this.Ph);
            this.Y.P.ZL()
        }
    }
    na.g = !0;
    na.u = fa;
    Object.assign(na.prototype, {
        j: na
    });
    class nf {
        constructor() {
            this.loaded = !1;
            this.size = new Qa(0,0);
            this.name = this.data = null
        }
    }
    nf.g = !0;
    Object.assign(nf.prototype, {
        j: nf
    });
    class of {
        constructor() {
            this.size = new Qa(0,0);
            this.P = null
        }
        YA(a) {
            this.P = a
        }
        $M(a, b) {
            let c = this.size;
            c.x = a;
            c.y = b
        }
    }
    of.g = !0;
    Object.assign(of.prototype, {
        j: of
    });
    class Sd extends of {
        constructor() {
            super();
            this.zd = new Qa(0,0);
            this.Ed = new Td;
            this.visible = !0;
            this.mu = this.Wo = !1
        }
        Hf(a, b) {
            return this.Ed.Hf(a, b)
        }
        Cm() {
            let a = this.P.viewport
              , b = this.zd.x
              , c = this.zd.y;
            return new zb(a.x * b | 0,a.y * c | 0,a.w * b | 0,a.G * c | 0)
        }
        oh() {
            let a = this.P.viewport;
            return new Qa(this.zd.x * a.w | 0,this.zd.y * a.G | 0)
        }
    }
    Sd.g = !0;
    Sd.u = of;
    Object.assign(Sd.prototype, {
        j: Sd
    });
    class cd {
        constructor(a) {
            this.name = a;
            this.info = new Pg(this);
            this.Je = null;
            this.XK = 256;
            this.oK = .001;
            this.fb = this.yb = null;
            this.px = [];
            this.clearColor = new E(0,0,0,1);
            this.Dx = new $a(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
            this.jI = new $a(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
            this.viewport = new zb(0,0,1,1);
            this.Lo = Array(1056);
            this.Wj = Array(1056);
            this.DO = !0;
            this.gq = Array(7);
            this.kg = Array(7);
            this.Rl = Ch.aD[7];
            this.Nc = 0;
            this.Wu = [];
            this.pv = new rb;
            this.kg[0] = new Ud(1,!0);
            this.kg[1] = new rc;
            this.kg[2] = new cc;
            this.kg[3] = new pf(!0,!0);
            this.kg[4] = new qf(!1,1);
            this.kg[5] = new Wb(1);
            this.kg[6] = new rf
        }
        Bn(a) {
            null != this.yb && this.yb.YA(null);
            this.yb = a;
            this.yb.YA(this)
        }
        aN(a) {
            let b = this.clearColor;
            b.x = a.x;
            b.y = a.y;
            b.z = a.z;
            b.w = a.w
        }
        dj(a) {
            this.fb = a
        }
        eM(a) {
            this.px.push(this.fb);
            this.dj(a)
        }
        ZL() {
            this.dj(this.px.pop())
        }
        $k() {
            this.gj(0, 0, 1, 1)
        }
        gj(a, b, c, d) {
            let e = this.viewport;
            e.x = a;
            e.y = b;
            e.w = c - a;
            e.G = d - b
        }
        yh() {
            if (null == this.yb || null == this.yb.getContext() || 0 == this.yb.size.x * this.yb.size.y)
                return !1;
            this.IM();
            return !0
        }
        fh() {}
        Ko(a) {
            let b = this.pv;
            b.clear();
            b.af(Ka.count);
            Ca.jJ(a, b);
            0 < b.Z && this.Ds(b)
        }
        clear() {}
        IM() {
            this.Nc = 0;
            let a = this.Rl
              , b = 0;
            for (; 7 > b; ) {
                let c = b++;
                this.gq[c] = this.kg[c];
                0 != (a & 1 << c) && this.gq[c].set(this)
            }
        }
        Ds(a) {
            let b = a.K
              , c = 0;
            for (a = a.Z; c < a; )
                this.Vj(b[c++])
        }
        Vj(a) {
            let b = a.effect;
            null != b && b.enabled && 1 != a.ne && (this.Je = a,
            this.Eg(a),
            this.nm(b))
        }
        DJ() {
            return this.Wu.slice()
        }
        createTexture(a, b, c, d) {
            null == b && (b = 0);
            b = this.jt(b);
            this.Wu.push(b);
            b.name = d;
            b.zu(a);
            null != c && b.XM(c);
            return b
        }
        Cx(a, b, c) {
            let d = this.jt(a.flags);
            d.name = null == c ? "-" : c;
            a.sa(d, b.clone());
            null != c && (a = a.Mb.Qe(c),
            d.Mb.offset(a.pd.x, a.pd.y))
        }
        fa(a) {
            a.H();
            ta.remove(this.Wu, a)
        }
        jy(a, b) {
            a = 32 * (b / 100 | 0) + (a / 100 | 0);
            b = this.Lo[a];
            null == b || this.Wj[a] || (this.Wj[a] = !0,
            b.Qa(this));
            return b
        }
        ky(a, b) {
            a = 512 + 32 * (b / 100 | 0) + (a / 100 | 0);
            b = this.Lo[a];
            null == b || this.Wj[a] || (this.Wj[a] = !0,
            b.Qa(this));
            return b
        }
        Lc(a) {
            var b;
            null == b && (b = !1);
            let c = a.Lx / 100 | 0;
            var d = a.qv / 100 | 0;
            d = 512 * (b ? 1 : 0) + 32 * d + c;
            this.Lo[d] = a;
            let e = 201 == a.qv;
            if (e) {
                let f = 0;
                for (; 16 > f; )
                    d = f++ + 1,
                    d = 512 * (b ? 1 : 0) + 32 * d + c,
                    this.Lo[d] = a
            }
            if (this.DO && (a.Qa(this),
            this.Wj[d] = !0,
            e))
                for (a = 0; 16 > a; )
                    d = a++ + 1,
                    d = 512 * (b ? 1 : 0) + 32 * d + c,
                    this.Wj[d] = !0
        }
        sI() {
            this.Rl &= -9
        }
        Bm(a) {
            let b = this.Dx
              , c = this.fb.Yi;
            0 < (a.I & 240) && a.cr();
            var d = a.te;
            a = d.m11;
            var e = d.m12
              , f = d.m13
              , g = d.m14;
            let h = d.m21
              , m = d.m22
              , n = d.m23
              , q = d.m24
              , p = d.m31
              , v = d.m32
              , u = d.m33
              , y = d.m34
              , A = d.m41
              , x = d.m42
              , H = d.m43
              , C = d.m44;
            d = c.m11 * e + c.m12 * m + c.m13 * v + c.m14 * x;
            let Y = c.m11 * f + c.m12 * n + c.m13 * u + c.m14 * H
              , X = c.m11 * g + c.m12 * q + c.m13 * y + c.m14 * C
              , S = c.m21 * e + c.m22 * m + c.m23 * v + c.m24 * x
              , aa = c.m21 * f + c.m22 * n + c.m23 * u + c.m24 * H
              , ra = c.m21 * g + c.m22 * q + c.m23 * y + c.m24 * C
              , la = c.m31 * e + c.m32 * m + c.m33 * v + c.m34 * x
              , ba = c.m31 * f + c.m32 * n + c.m33 * u + c.m34 * H
              , oa = c.m31 * g + c.m32 * q + c.m33 * y + c.m34 * C;
            e = c.m41 * e + c.m42 * m + c.m43 * v + c.m44 * x;
            f = c.m41 * f + c.m42 * n + c.m43 * u + c.m44 * H;
            g = c.m41 * g + c.m42 * q + c.m43 * y + c.m44 * C;
            b.m11 = c.m11 * a + c.m12 * h + c.m13 * p + c.m14 * A;
            b.m12 = d;
            b.m13 = Y;
            b.m14 = X;
            b.m21 = c.m21 * a + c.m22 * h + c.m23 * p + c.m24 * A;
            b.m22 = S;
            b.m23 = aa;
            b.m24 = ra;
            b.m31 = c.m31 * a + c.m32 * h + c.m33 * p + c.m34 * A;
            b.m32 = la;
            b.m33 = ba;
            b.m34 = oa;
            b.m41 = c.m41 * a + c.m42 * h + c.m43 * p + c.m44 * A;
            b.m42 = e;
            b.m43 = f;
            b.m44 = g;
            return b
        }
        nh(a) {
            0 < (a.I & 64) && a.ml();
            var b = a.te;
            a = b.m11;
            var c = b.m12
              , d = b.m14;
            let e = b.m21
              , f = b.m22
              , g = b.m24;
            b = new $a(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
            let h = this.fb.Yi
              , m = h.m11 * c + h.m12 * f
              , n = h.m11 * d + h.m12 * g + h.m14;
            c = h.m21 * c + h.m22 * f;
            d = h.m21 * d + h.m22 * g + h.m24;
            b.m11 = h.m11 * a + h.m12 * e;
            b.m12 = m;
            b.m14 = n;
            b.m21 = h.m21 * a + h.m22 * e;
            b.m22 = c;
            b.m24 = d;
            return b
        }
        nm(a) {
            a.update(this);
            let b = this.jy(a.type, this.Je.type);
            null != b && (this.info.effect = a,
            this.info.la = this.Je,
            b.M(this.info))
        }
        mh(a) {
            return this.gq[a]
        }
        Eg(a) {
            if (0 != this.Rl) {
                for (var b = this.gq, c = 0, d = this.Rl, e = this.Nc; 7 > c; ) {
                    if (0 == (d & 1 << c)) {
                        ++c;
                        continue
                    }
                    let f = a.nj[c];
                    null != f ? f.Ja != b[c].Ja && (b[c] = f,
                    e |= 1 << c,
                    f.set(this)) : 0 < (e & 1 << c) && (f = this.kg[c],
                    b[c] = f,
                    f.set(this),
                    e &= ~(1 << c));
                    ++c
                }
                this.Nc = e
            }
        }
        Hu() {}
        KA() {}
        JA() {}
        uu() {}
        wu() {}
        Fu() {}
        By(a) {
            return -.001 * a.ib.translate.z
        }
    }
    cd.g = !0;
    Object.assign(cd.prototype, {
        j: cd
    });
    class Pg {
        constructor(a) {
            this.P = a;
            this.Xw = this.la = this.effect = null
        }
    }
    Pg.g = !0;
    Object.assign(Pg.prototype, {
        j: Pg
    });
    class dd {
        constructor(a, b) {
            this.td = 0;
            this.we = 1;
            this.children = [];
            this.parent = null;
            this.name = "?";
            this.size = new Qa(0,0);
            this.image = this.Mb = null;
            this.id = dd.eL++;
            this.P = a;
            this.flags = b
        }
        ep() {
            return null != this.image ? this.image.loaded : !1
        }
        H() {
            if (null != this.P) {
                var a = this.Mb;
                null != a && a.H();
                a = 0;
                for (var b = this.children; a < b.length; )
                    b[a++].H();
                this.P = this.parent = this.Mb = this.image = this.children = null
            }
        }
        zu(a) {
            null != this.image && (this.image.gv(),
            this.td++);
            this.image = a;
            var b = this.size;
            a = a.size;
            b.x = a.x;
            b.y = a.y;
            b = 0;
            for (a = this.children; b < a.length; ) {
                let c = a[b];
                ++b;
                c.image = this.image;
                let d = c.size
                  , e = this.size;
                d.x = e.x;
                d.y = e.y;
                c.td = this.td
            }
        }
        XM(a) {
            this.Mb = a;
            this.we = 1 / a.scale
        }
        sa(a, b) {
            a.parent = this;
            this.children.push(a);
            a.Mb = b;
            a.image = this.image;
            b = a.size;
            let c = this.size;
            b.x = c.x;
            b.y = c.y;
            a.td = this.td;
            a.we = this.we
        }
    }
    dd.g = !0;
    Object.assign(dd.prototype, {
        j: dd
    });
    class Ub {
        constructor(a, b, c) {
            null == b && (b = 1);
            this.Ls = new ed;
            this.frames = a.slice();
            this.scale = b;
            this.Qn = c;
            b = [];
            for (c = 0; c < a.length; )
                b.push(a[c++].id);
            b.sort(function(d, e) {
                return d - e
            });
            b = b[b.length - 1];
            this.ak = Array(b);
            for (c = 0; c < b; )
                this.ak[c++] = null;
            for (b = 0; b < a.length; )
                c = a[b],
                ++b,
                this.ak[c.id] = c,
                this.Ls.G[c.name] = c
        }
        H() {
            this.Qn = this.frames = this.Ls = this.ak = null
        }
        kJ(a) {
            return this.ak[a]
        }
        Qe(a) {
            return this.Ls.G[a]
        }
        offset(a, b) {
            let c = 0
              , d = this.frames;
            for (; c < d.length; ) {
                let e = d[c];
                ++c;
                e.pd.x += a;
                e.pd.y += b
            }
        }
        clone() {
            let a = []
              , b = 0
              , c = this.frames;
            for (; b < c.length; )
                a.push(c[b++].clone());
            return new Ub(a,this.scale,this.Qn)
        }
    }
    Ub.g = !0;
    Object.assign(Ub.prototype, {
        j: Ub
    });
    class Vd {
        constructor(a, b, c, d, e, f) {
            this.id = a;
            this.name = b;
            this.Zb = c;
            this.pd = d;
            this.Ln = e;
            this.br = f
        }
        clone() {
            let a = this.Zb
              , b = this.pd;
            if (null != this.br) {
                var c = this.br;
                c = new Qa(c.x,c.y)
            } else
                c = null;
            return new Vd(this.id,this.name,new Qa(a.x,a.y),new zb(b.x,b.y,b.w,b.G),this.Ln,c)
        }
    }
    Vd.g = !0;
    Object.assign(Vd.prototype, {
        j: Vd
    });
    class fd {
    }
    fd.g = !0;
    fd.ke = !0;
    class ib {
        constructor() {
            this.Kr = !1;
            this.object = null;
            this.gz = !1;
            this.Nw = !0;
            this.Uj = !1;
            this.Zc = 0;
            this.Yu = 1;
            this.Jd = this.Gf = this.Tk = 0;
            this.Bg = 1;
            this.next = null;
            this.type = this.ra();
            ib.Iv++
        }
        il(a) {
            this.Kr = a
        }
        H() {
            null != this.object && (this.object.detach(this),
            this.object = null);
            this.Nw = !1;
            ib.Iv--
        }
        En() {
            this.gz || (this.il(!1),
            this.Uj = !0,
            this.Zc = 0)
        }
        update(a) {
            return this.Kr ? (this.Zc += a * this.Yu,
            null == this.object ? !1 : this.Qk(this.Zc)) : this.Uj ? (this.Zc += a,
            this.Zc > ib.CC && this.H(),
            !0) : !1
        }
        Ss() {
            var a = this.Zc + this.Tk;
            if (0 == this.Bg) {
                var b = this.Jd
                  , c = this.Gf;
                return a < b ? b : a > c ? c : a
            }
            b = this.Gf - this.Jd;
            return 0 < b ? (c = (a - this.Jd) / b,
            a = Math.floor(c),
            c -= a,
            1 == this.Bg ? this.Jd + c * b : 0 == (a & 1) ? this.Jd + c * b : this.Gf - c * b) : this.Jd
        }
        ra() {
            return 103
        }
    }
    ib.g = !0;
    ib.ob = [fd];
    Object.assign(ib.prototype, {
        j: ib
    });
    class Id extends ib {
        constructor() {
            super();
            this.Ia = null;
            this.frame = -1;
            this.cn = this.Fk = this.gu = 0;
            this.wh = -1;
            this.Vo = this.Uo = null
        }
        H() {
            this.Vo = this.Uo = this.Ia = null;
            super.H()
        }
        play(a, b, c) {
            null == b && (b = 0);
            this.Ia = a;
            null == c && (c = a.Ae - 1);
            this.Fk = b;
            this.cn = c;
            this.Jd = a.nb[this.Fk];
            this.Gf = a.nb[this.cn + 1];
            this.Zc = this.Jd;
            this.il(!0);
            this.Uj = !1;
            this.frame = -1;
            this.wh = this.Fk;
            this.Qk(this.Zc);
            return this
        }
        kN(a) {
            this.Uo = a
        }
        lN(a) {
            this.Vo = a
        }
        stop() {
            this.Ia = null;
            this.il(!1);
            this.gu = 0;
            this.En();
            return this
        }
        Qk() {
            var a = this.Ss();
            let b, c = this.Ia.Ae;
            if (1 == c)
                b = this.wh = 0;
            else if (a >= this.Ia.Th)
                b = this.wh = c - 1;
            else {
                if (0 < this.Ia.Bo)
                    b = a / this.Ia.Bo | 0;
                else {
                    b = 0;
                    let d = this.Ia.nb;
                    if (a >= d[this.wh] && a <= d[this.wh + 1])
                        b = this.wh;
                    else if (16 > c) {
                        let e = 0;
                        for (; e <= c; ) {
                            if (d[e] >= a) {
                                b = e - 1;
                                break
                            }
                            ++e
                        }
                    } else
                        b = Db.JH(d, a, c - 1),
                        0 > b && (b = ~b,
                        --b)
                }
                this.wh = b
            }
            b < this.Fk ? b = this.Fk : b > this.cn && (b = this.cn);
            b != this.frame && (this.frame = b,
            this.mL(this.Ia.data[b]),
            b >= this.cn && 0 == this.Bg && (0 < --this.gu ? (this.Zc = this.Jd,
            this.frame = -1,
            this.wh = this.Fk,
            this.Qk(this.Zc)) : (this.En(),
            a = this.Ia,
            this.Ia = null,
            this.nL(a))));
            return !0
        }
        mL(a) {
            null != this.Uo && this.Uo(this.Ia, a, this.frame)
        }
        nL(a) {
            null != this.Vo && this.Vo(a)
        }
        ra() {
            return 303
        }
    }
    Id.g = !0;
    Id.u = ib;
    Object.assign(Id.prototype, {
        j: Id
    });
    class Wc extends ib {
        constructor() {
            super();
            this.nn = this.Si = null;
            this.lastIndex = 0;
            this.Ia = null
        }
        H() {
            this.nn = this.Si = null;
            super.H()
        }
        play(a, b) {
            null == b && (b = 0);
            this.Ia = a;
            this.Bg = b;
            this.Jd = this.Zc = this.lastIndex = 0;
            this.Gf = a.Th;
            this.il(!0);
            this.Uj = !1;
            this.Qk(0)
        }
        stop() {
            this.Si = null;
            this.il(!1);
            this.Ia = null;
            this.En()
        }
        Qk(a) {
            var b = this.Ss();
            let c = this.Ia.nb, d;
            var e;
            if (b <= c[0])
                d = e = this.lastIndex = b = 0;
            else if (b >= c[this.Ia.Ae - 1])
                b = 0,
                d = e = this.lastIndex = this.Ia.Ae - 1;
            else if (b > c[this.lastIndex]) {
                for (e = this.lastIndex + 1; b >= c[e]; )
                    this.lastIndex = e,
                    ++e;
                d = this.lastIndex;
                b = (b - c[d]) / (c[e] - c[d])
            } else if (b < c[this.lastIndex]) {
                for (e = this.lastIndex - 1; b <= c[e]; )
                    this.lastIndex = e,
                    --e;
                d = e;
                e = this.lastIndex;
                b = (b - c[d]) / (c[e] - c[d])
            } else
                b = 0,
                d = e = this.lastIndex;
            null != this.nn && this.nn(this.Ia.data[d], this.Ia.data[e], b);
            a > this.Gf && 0 == this.Bg && (a = this.Si,
            this.stop(),
            null != a && a());
            return !0
        }
        ra() {
            return 403
        }
    }
    Wc.g = !0;
    Wc.u = ib;
    Object.assign(Wc.prototype, {
        j: Wc
    });
    class Wd extends ib {
        constructor() {
            super()
        }
        H() {
            this.xg = this.If = this.easing = null;
            super.H()
        }
        pj(a, b, c, d, e) {
            this.key = a;
            this.WN = b;
            this.Kx = c;
            this.easing = e;
            this.Jd = this.Zc = 0;
            this.Gf = d;
            this.il(!0);
            this.Uj = !1
        }
        stop() {
            this.If = this.xg = null;
            this.En()
        }
        Qk(a) {
            if (a >= this.Gf && 0 == this.Bg)
                return this.En(),
                this.If(this.key, this.Kx),
                this.xg(this.key),
                !1;
            a = this.WN;
            a += (this.Kx - a) * this.easing((this.Ss() - this.Jd) / (this.Gf - this.Jd));
            this.If(this.key, a);
            return !0
        }
        ra() {
            return 203
        }
    }
    Wd.g = !0;
    Wd.u = ib;
    Object.assign(Wd.prototype, {
        j: Wd
    });
    class sf {
        constructor(a, b, c) {
            this.BO = c;
            this.Mz = a;
            this.JI = b;
            this.Nk = a * b;
            this.ri = !0
        }
        resize(a) {
            return a > this.Mz ? (this.Mz = a,
            this.ri = !0,
            this.Nk = a * this.JI,
            !0) : !1
        }
    }
    sf.g = !0;
    Object.assign(sf.prototype, {
        j: sf
    });
    class Dh {
        constructor() {
            this.Rt = 0;
            this.Wh = Array(6);
            let a = 0;
            for (; 6 > a; )
                this.Wh[a++] = []
        }
        getData(a) {
            return this.Wh[a]
        }
    }
    Dh.g = !0;
    Object.assign(Dh.prototype, {
        j: Dh
    });
    class zb {
        constructor(a, b, c, d) {
            this.x = a;
            this.y = b;
            this.w = c;
            this.G = d
        }
    }
    zb.g = !0;
    Object.assign(zb.prototype, {
        j: zb
    });
    class ca {
        constructor() {
            this.type = this.ra();
            this.enabled = !0;
            this.la = null;
            this.Ja = 0
        }
        H() {
            this.la = null
        }
        update() {}
        Gg(a) {
            this.la = a
        }
        ra() {
            return 105
        }
    }
    ca.g = !0;
    ca.ob = [fd];
    Object.assign(ca.prototype, {
        j: ca
    });
    class gd extends ca {
        constructor(a) {
            super();
            this.mb = a;
            this.EB = a.we;
            this.charset = a.Mb.Qn;
            this.text = null;
            this.clip = !1;
            this.fontSize = this.charset.hq;
            this.zz = 4;
            this.YK = 512;
            this.size = new E(100,100,0,1);
            this.tt = !0;
            this.lz = !1;
            this.vM = 32;
            this.MB = this.jz = 0;
            this.Bi = 2;
            this.Fj = this.fg = null;
            this.xx = 0;
            this.ve = !0;
            this.overflow = !1;
            this.Sf = new Qg;
            this.multiline = !1;
            this.td = 0
        }
        Gg(a) {
            super.Gg(a);
            a.kb(this.size.x, this.size.y)
        }
        Xa(a) {
            this.text != a && (this.text = a,
            this.multiline && this.bx(),
            this.ve = !0)
        }
        $o() {
            return this.fontSize
        }
        jq() {
            this.fontSize = this.charset.hq
        }
        Fc(a) {
            var b;
            null != b && (4 > b && (b = 4),
            this.zz = b);
            b = this.zz;
            let c = this.YK;
            a = a < b ? b : a > c ? c : a;
            a != this.fontSize && (this.fontSize = a,
            this.ve = !0)
        }
        CJ() {
            let a = this.size;
            return new E(a.x,a.y,0,1)
        }
        Ib(a, b) {
            if (this.size.x != a || this.size.y != b)
                this.size.x = a,
                this.size.y = b,
                this.la.kb(this.size.x, this.size.y),
                this.ve = !0
        }
        Ws() {
            return this.Sf.Pt
        }
        yq(a) {
            this.jz = a;
            this.ve = !0
        }
        Iu(a) {
            this.MB = a;
            this.ve = !0
        }
        Xb(a, b) {
            this.fg = a;
            this.Fj = b;
            this.ve = !0
        }
        XI(a) {
            null == a && (a = !0);
            if (null != this.text) {
                var b = 2 * this.Bi
                  , c = this.size.x - b
                  , d = this.size.y - b;
                this.jq();
                b = d / this.charset.ii;
                this.Sf.shape(this, !0);
                var e = this.Sf.Pa;
                c = Math.min(c / (e.A - e.m), d / (e.D - e.C));
                a && (c = Math.min(b, c));
                this.fontSize *= c;
                this.shape()
            }
        }
        Mh(a) {
            (this.multiline = a) && null == this.so && this.hN(new tf)
        }
        hN(a) {
            this.so = a;
            null != this.text && this.bx();
            this.ve = !0
        }
        shape() {
            this.Sf.shape(this, !1);
            let a = this.Sf.Pa;
            this.overflow = a.A - a.m > this.size.x - 2 * this.Bi;
            this.ve = !1
        }
        update() {
            if (this.mb.td > this.td) {
                this.td = this.mb.td;
                this.charset = this.mb.Mb.Qn;
                let a = this.mb.we;
                this.fontSize *= this.EB / a;
                this.EB = a;
                null != this.la.mn && this.la.mn();
                this.ve = !0
            }
            this.ve && (this.ve = !1,
            this.shape())
        }
        H() {
            super.H();
            this.mb = null;
            this.Sf.H();
            this.Sf = null
        }
        bx() {
            this.so.zN(this.text);
            this.Vu = [];
            let a = 0
              , b = this.so.Hz();
            for (; null != b; )
                this.Vu.push(new Rg(this.text.substring(a, b.position),b.required)),
                a = b.position,
                b = this.so.Hz()
        }
        ra() {
            return 705
        }
    }
    gd.g = !0;
    gd.u = ca;
    Object.assign(gd.prototype, {
        j: gd
    });
    class Rg {
        constructor(a, b) {
            this.text = a;
            this.ax = b
        }
    }
    Rg.g = !0;
    Object.assign(Rg.prototype, {
        j: Rg
    });
    class Qg {
        constructor() {
            this.cursor = new E(0,0,0,1);
            this.ig = new rb(32);
            this.Pt = 1;
            this.Pa = new W(0,0,0,0);
            this.se = new rb(256)
        }
        H() {
            this.ig.Ms();
            this.ig = null
        }
        shape(a, b) {
            null == b && (b = !1);
            let c = this.Pa;
            c.m = c.C = pa;
            c.A = c.D = qa;
            var d = a.text;
            if (null != d) {
                var e = d.length;
                if (null != e) {
                    d = this.se;
                    b || (d.af(5 * e),
                    d.clear());
                    var f = a.charset;
                    e = a.fontSize / f.hq * a.mb.we;
                    f = f.lineHeight * e + a.jz * e;
                    var g = a.Bi
                      , h = a.size.x
                      , m = a.Bi
                      , n = this.cursor;
                    n.x = g;
                    n.y = g;
                    n = !b && null != a.fg;
                    var q = !b && null != a.Fj;
                    this.Pt = 1;
                    if (a.multiline) {
                        b = new W(pa,pa,qa,qa);
                        let v = 0
                          , u = a.Vu.length
                          , y = new W(pa,pa,qa,qa)
                          , A = 0
                          , x = 0;
                        for (; v < u; ) {
                            let H = a.Vu[v++];
                            var p = this.by(H.text, a);
                            this.cursor.x -= p.K[0].wv * e;
                            let C = d.Z;
                            this.print(p, a, b);
                            p = d.Z;
                            let Y = b.A > h - m;
                            Y && b.A - b.m < h - 2 * m ? (n && (this.fg(a, y, A, x),
                            c.add(y)),
                            d.trim(C),
                            A = x = C,
                            y.m = y.C = pa,
                            y.A = y.D = qa,
                            --v) : (y.add(b),
                            x = p,
                            H.ax && n && (this.fg(a, y, A, p),
                            c.add(y),
                            y.m = y.C = pa,
                            y.A = y.D = qa,
                            A = p));
                            if (Y || H.ax)
                                this.cursor.x = g,
                                this.cursor.y += f,
                                this.Pt++
                        }
                        n && (this.fg(a, y, A, x),
                        c.add(y))
                    } else {
                        f = this.by(a.text, a);
                        if (0 == f.Z)
                            return;
                        this.cursor.x -= f.K[0].wv * e;
                        this.print(f, a, c, b);
                        n && this.fg(a, c, 0, d.Z)
                    }
                    q && this.Fj(a, c, 0, d.Z)
                }
            }
        }
        fg(a, b, c, d) {
            let e = a.Bi
              , f = a.size.x - 2 * e;
            for (a = 0 > a.fg ? -b.m + e : 0 == a.fg ? f / 2 - (b.m + b.A) / 2 + e : f - b.A + e; c < d; )
                this.se.K[c + 1] += a,
                c += 5;
            d = b.m + a;
            c = b.A - b.m;
            b.m = d;
            b.A = d + c
        }
        Fj(a, b) {
            var c = a.Bi
              , d = a.size.y - 2 * c;
            a = 0 > a.Fj ? -b.C + c : 0 == a.Fj ? d / 2 - (b.C + b.D) / 2 + c : d - b.D + c;
            c = 0;
            for (d = this.se.Z / 5 | 0; c < d; )
                this.se.K[5 * c++ + 2] += a;
            a = b.C + a;
            c = b.D - b.C;
            b.C = a;
            b.D = a + c
        }
        print(a, b, c, d) {
            null == d && (d = !1);
            c.m = c.C = pa;
            c.A = c.D = qa;
            let e = b.charset
              , f = b.fontSize / e.hq * b.mb.we
              , g = b.MB * f
              , h = 0
              , m = a.Z;
            for (var n = 0; h < m; ) {
                var q = a.K[h++]
                  , p = this.cursor.x + q.wv * f
                  , v = this.cursor.y + q.HO * f;
                let y = q.width * f
                  , A = q.height * f
                  , x = 0;
                b.tt && (n = e.tt.G[q.id << 16 | n],
                null != n && (x = n),
                x *= f,
                n = q.id,
                p += x);
                if (!d) {
                    var u = this.se;
                    u.K[u.Z++] = q.id;
                    u = this.se;
                    u.K[u.Z++] = p;
                    u = this.se;
                    u.K[u.Z++] = v;
                    u = this.se;
                    u.K[u.Z++] = y;
                    u = this.se;
                    u.K[u.Z++] = A
                }
                32 < q.id && (u = p,
                u < c.m && (c.m = u),
                u > c.A && (c.A = u),
                v < c.C && (c.C = v),
                v > c.D && (c.D = v),
                p += y,
                v += A,
                p < c.m && (c.m = p),
                p > c.A && (c.A = p),
                v < c.C && (c.C = v),
                v > c.D && (c.D = v));
                q = q.bC;
                0 < b.xx && (q = b.xx);
                this.cursor.x += q * f + x + g
            }
        }
        by(a, b) {
            let c = a.length
              , d = this.ig;
            d.clear();
            d.af(c);
            var e = b.charset;
            let f = e.yx;
            e = e.lz;
            b = b.vM;
            let g;
            g = 1;
            var h = a.charCodeAt(0);
            if (32 <= h) {
                null == f[h] && (h = b);
                var m = f[h];
                d.K[d.Z++] = m
            }
            for (; g < c; )
                m = a.charCodeAt(g++),
                32 > m ? h = m : (null == f[m] && (m = b),
                null != e && (h = e.G[h << 16 | m],
                null != h && (--d.Z,
                m = h)),
                h = f[m],
                d.K[d.Z++] = h,
                h = m);
            return d
        }
    }
    Qg.g = !0;
    Object.assign(Qg.prototype, {
        j: Qg
    });
    class uf {
        constructor() {}
    }
    uf.g = !0;
    Object.assign(uf.prototype, {
        j: uf
    });
    class tf extends uf {
        constructor() {
            super()
        }
        zN(a) {
            this.ge = a;
            this.state = Bc.wp(this.ge, 0) ? 1 : 0;
            this.wk = this.i = 0;
            this.Es = 0 == this.ge.length
        }
        Hz() {
            if (this.Es)
                return null;
            let a = this.ge.length, b;
            for (; this.i < a; ) {
                if (b = "\n" == this.ge.charAt(this.i))
                    return this.i++,
                    this.wk = this.i,
                    this.state = Bc.wp(this.ge, 0) ? 1 : 0,
                    {
                        position: this.wk,
                        required: this.i != a
                    };
                switch (this.state) {
                case 0:
                    Bc.wp(this.ge, this.i) && (this.state = 1);
                    this.i++;
                    break;
                case 1:
                    if (Bc.wp(this.ge, this.i))
                        this.i++;
                    else
                        return this.wk = this.i,
                        this.state = 0,
                        {
                            position: this.wk,
                            required: !1
                        }
                }
                if (this.i == a)
                    return this.Es = !0,
                    this.wk = this.i,
                    {
                        position: this.wk,
                        required: !1
                    }
            }
            this.Es = !0;
            return null
        }
    }
    tf.g = !0;
    tf.u = uf;
    Object.assign(tf.prototype, {
        j: tf
    });
    class Kd extends ca {
        constructor() {
            super();
            this.points = [];
            this.Zg = [];
            this.Sl = [];
            this.W = 10
        }
        H() {
            super.H();
            this.Sl = this.Zg = this.points = null
        }
        cN() {
            this.points = [];
            this.Zg = [];
            this.Sl = []
        }
        ra() {
            return 605
        }
    }
    Kd.g = !0;
    Kd.u = ca;
    Object.assign(Kd.prototype, {
        j: Kd
    });
    class vf extends ca {
        constructor(a, b, c) {
            super();
            this.mb = a;
            this.charset = a.Mb.Qn;
            a = [9633, 65533, 63];
            let d = 0;
            for (; 3 > d; ) {
                let e = d++;
                if (null != this.charset.yx[a[e]])
                    break
            }
            this.grid = null;
            this.fillColor = -1;
            this.It = this.Ht = 0;
            this.kb(b, c, !1)
        }
        kb(a, b, c) {
            if (c)
                a = a / this.charset.Ux | 0,
                b = b / this.charset.lineHeight | 0,
                this.kb(a, b, !1);
            else if (0 < this.Ht && a > this.Ht && (a = this.Ht),
            0 < this.It && b > this.It && (b = this.It),
            null == this.grid || a != this.grid.hc || b != this.grid.Cc)
                null == this.grid ? this.grid = new Ad(a,b) : this.grid.resize(a, b),
                this.grid.forEach(function(d, e, f) {
                    return null == d ? new Sg(e,f) : d
                }),
                null != this.la && this.vc()
        }
        Gg(a) {
            super.Gg(a);
            this.vc()
        }
        vc() {
            this.la.kb(this.charset.Ux * this.grid.hc, this.charset.lineHeight * this.grid.Cc);
            this.la.vc()
        }
        ra() {
            return 1805
        }
    }
    vf.g = !0;
    vf.u = ca;
    Object.assign(vf.prototype, {
        j: vf
    });
    class Sg {
        constructor(a, b) {
            this.x = a;
            this.y = b;
            this.code = 0
        }
    }
    Sg.g = !0;
    Object.assign(Sg.prototype, {
        j: Sg
    });
    class Xd extends ca {
        constructor(a) {
            super();
            this.color = Ti.clone(a)
        }
        ra() {
            return 1205
        }
    }
    Xd.g = !0;
    Xd.u = ca;
    Object.assign(Xd.prototype, {
        j: Xd
    });
    class Yd extends ca {
        constructor(a) {
            super();
            this.color = a;
            this.Zp = null
        }
        ra() {
            return 305
        }
    }
    Yd.g = !0;
    Yd.u = ca;
    Object.assign(Yd.prototype, {
        j: Yd
    });
    class qc extends ca {
        constructor(a) {
            super();
            this.ui = a;
            this.ar = []
        }
        update(a) {
            super.update(a);
            this.ar = [];
            for (a = 0; 5 > a; ) {
                var b = this.ui[a++]
                  , c = b.length;
                if (0 == c)
                    continue;
                let q = 1;
                for (var d = void 0, e = [], f = 0, g = 0; g < c; ) {
                    var h = g++;
                    d = b[h];
                    0 == h && (e[f++] = d.start);
                    e[f++] = d.end
                }
                b = 2 * c;
                c = [];
                f = 1 / b;
                for (g = 0; ; ) {
                    1 < g && (g = 1);
                    d = t.SH(e, g);
                    c.push(d);
                    if (1 == g)
                        break;
                    g += f
                }
                e = qc.yC / b;
                d = [];
                f = 0;
                for (g = b - 1; f < g; ) {
                    var m = q;
                    h = f == b - 1 ? 1 : q + e;
                    let p = c[f]
                      , v = c[f + 1];
                    var n = t.Ua(v, p);
                    n.normalize();
                    let u = t.rH(n);
                    n = t.Ew(n);
                    let y = t.zb(p, t.ld(n, m));
                    d.push(t.zb(p, t.ld(u, m)));
                    d.push(y);
                    m = t.zb(v, t.ld(n, h));
                    d.push(t.zb(v, t.ld(u, h)));
                    d.push(m);
                    q += e;
                    ++f
                }
                this.ar.push(d)
            }
        }
        ra() {
            return 1105
        }
    }
    qc.g = !0;
    qc.u = ca;
    Object.assign(qc.prototype, {
        j: qc
    });
    class Ld extends ca {
        constructor() {
            super();
            this.F = new E(0,0,0,1);
            this.W = 0;
            this.color = new E(0,0,0,0);
            this.jn = 0;
            this.lineWidth = 1.5;
            this.update(null)
        }
        update() {
            this.jn = Math.max(16, Math.round(this.W / .8));
            0 != this.jn % 2 && this.jn++
        }
        ra() {
            return 505
        }
    }
    Ld.g = !0;
    Ld.u = ca;
    Object.assign(Ld.prototype, {
        j: Ld
    });
    class wf extends ca {
        constructor(a, b) {
            super();
            this.mb = a;
            this.shape = b;
            this.ic = []
        }
        ra() {
            return 1705
        }
    }
    wf.g = !0;
    wf.u = ca;
    Object.assign(wf.prototype, {
        j: wf
    });
    class dc extends ca {
        constructor() {
            super();
            this.precision = .2;
            this.HL = !1;
            new W(0,0,1024,1024);
            this.aI = !1;
            this.vs = 0;
            this.ZH = 256;
            this.us = Array(this.ZH);
            this.lI = 1024;
            this.data = Array(this.lI);
            this.lineWidth = this.yp = 1;
            this.fillColor = 0;
            this.cursor = new E(0,0,0,1);
            this.gd = [];
            this.Lm = new W(pa,pa,qa,qa);
            this.clear()
        }
        H() {
            this.gd = this.us = this.data = null;
            super.H()
        }
        Gg(a) {
            super.Gg(a);
            this.aI && this.bI()
        }
        clear() {
            this.vs = 0;
            let a = this.Lm;
            a.m = a.C = pa;
            a.A = a.D = qa
        }
        bI() {
            let a = pa
              , b = qa
              , c = pa
              , d = qa
              , e = this.Lm
              , f = this.data
              , g = this.us
              , h = 0
              , m = 0
              , n = this.vs;
            for (; h < n; ) {
                var q = g[h++];
                switch (q) {
                case 1:
                case 2:
                case 3:
                    q = f[m];
                    let p = f[m + 1];
                    q < a && (a = q);
                    q > b && (b = q);
                    p < c && (c = p);
                    p > d && (d = p);
                    m += 2;
                    break;
                case 4:
                    m += 3;
                    break;
                case 5:
                    m += 2;
                    break;
                case 6:
                case 7:
                case 8:
                    break;
                default:
                    e.m = a,
                    e.C = c,
                    e.A = b,
                    e.D = d,
                    m = this.Lw(q, m, f),
                    a = e.m,
                    c = e.C,
                    b = e.A,
                    d = e.D
                }
            }
            e.m = a;
            e.C = c;
            e.A = b;
            e.D = d;
            null != this.la && this.vc()
        }
        Lw() {
            return 0
        }
        vc() {
            let a = this.Lm;
            var b = this.la.ca;
            b.F.x = (a.m + a.A) / 2;
            b.F.y = (a.C + a.D) / 2;
            let c = (a.A - a.m) / 2
              , d = (a.D - a.C) / 2;
            b.W = Math.sqrt(c * c + d * d);
            302 == b.type && (b = b.Pa,
            b.m = a.m,
            b.C = a.C,
            b.A = a.A,
            b.D = a.D);
            this.la.vc()
        }
        ra() {
            return 1005
        }
    }
    dc.g = !0;
    dc.u = ca;
    Object.assign(dc.prototype, {
        j: dc
    });
    class $c extends ca {
        constructor() {
            super();
            this.W = 0;
            this.color = new E(1,1,1,1);
            this.lineWidth = 6;
            this.yp = 1
        }
        ra() {
            return 905
        }
    }
    $c.g = !0;
    $c.u = ca;
    Object.assign($c.prototype, {
        j: $c
    });
    class Zd extends ca {
        constructor(a, b) {
            super();
            this.mb = null;
            this.Hn = new zb(0,0,0,0);
            this.frame = null;
            this.JN();
            this.iu = this.hu = 1;
            this.td = this.I = this.offsetY = this.offsetX = 0;
            this.ff(a, b)
        }
        JN() {
            this.ru = null;
            this.I |= 4
        }
        ff(a, b) {
            this.mb = a;
            if (null != b)
                this.xu(b);
            else {
                b = this.Hn;
                let c = a.size.x
                  , d = a.size.y;
                b.x = 0;
                b.y = 0;
                b.w = c;
                b.G = d;
                this.frame = null
            }
            this.Ja = a.id
        }
        xu(a) {
            a = this.mb.Mb.Qe(a);
            if (null == this.frame || a.id != this.frame.id) {
                this.frame = a;
                a = this.Hn;
                let b = this.frame.pd;
                a.x = b.x;
                a.y = b.y;
                a.w = b.w;
                a.G = b.G
            }
            return this.frame
        }
        zn(a) {
            if (null == this.frame || this.frame.id != a) {
                this.frame = this.mb.Mb.kJ(a);
                a = this.Hn;
                let b = this.frame.pd;
                a.x = b.x;
                a.y = b.y;
                a.w = b.w;
                a.G = b.G
            }
        }
        update() {
            if (this.mb.td > this.td) {
                this.td = this.mb.td;
                if (null == this.frame)
                    this.ff(this.mb);
                else {
                    let a = this.frame;
                    this.frame = null;
                    this.zn(a.id)
                }
                null != this.la.mn && this.la.mn()
            }
        }
        H() {
            super.H();
            this.mb = null
        }
        ra() {
            return 205
        }
    }
    Zd.g = !0;
    Zd.u = ca;
    Object.assign(Zd.prototype, {
        j: Zd
    });
    class $d extends ca {
        constructor(a) {
            super();
            this.mb = a;
            this.Zp = null
        }
        H() {
            super.H();
            this.mb = null
        }
        ra() {
            return 405
        }
    }
    $d.g = !0;
    $d.u = ca;
    Object.assign($d.prototype, {
        j: $d
    });
    class xf extends ca {
        constructor(a, b) {
            super();
            this.Pp = new E(1,1,0,1);
            this.VM = new E(0,0,0,1);
            a.uh(function() {});
            this.Cp = new Qa(a.hc * b,a.Cc * b)
        }
        H() {
            super.H()
        }
        Gg(a) {
            super.Gg(a);
            a.kb(this.Cp.x, this.Cp.y);
            a.vc()
        }
        update(a) {
            var b = a.fb
              , c = b.position.y;
            b = b.position.x - a.Je.ya.translate.x;
            var d = c - a.Je.ya.translate.y;
            c = this.VM;
            c.x = b * (1 - this.Pp.x);
            c.y = d * (1 - this.Pp.y);
            b = a.Je;
            b.kb(this.Cp.x, this.Cp.y);
            d = (1 - this.Pp.x) * c.x * 2;
            a = (1 - this.Pp.y) * c.y * 2;
            b.ca.F.x = d;
            b.ca.F.y = a;
            c = b.ca.Pa;
            let e = c.A - c.m;
            c.m = d;
            c.A = d + e;
            c = b.ca.Pa;
            b = c.D - c.C;
            c.C = a;
            c.D = a + b
        }
        ra() {
            return 1605
        }
    }
    xf.g = !0;
    xf.u = ca;
    Object.assign(xf.prototype, {
        j: xf
    });
    class yf extends ca {
        constructor(a) {
            null == a && (a = 1);
            super();
            this.flags = a;
            this.color = new E(0,0,0,1)
        }
        ra() {
            return 1405
        }
    }
    yf.g = !0;
    yf.u = ca;
    Object.assign(yf.prototype, {
        j: yf
    });
    class zf extends dc {
        constructor() {
            super();
            let a = []
              , b = 0;
            for (; 4 > b; )
                ++b,
                a.push(new E(0,0,0,1));
            this.HA = []
        }
        ra() {
            return 1505
        }
    }
    zf.g = !0;
    zf.u = dc;
    Object.assign(zf.prototype, {
        j: zf
    });
    class Tg {
        constructor() {
            this.mK = [];
            this.ig = []
        }
    }
    Tg.g = !0;
    Object.assign(Tg.prototype, {
        j: Tg
    });
    class Ug {
        constructor(a, b, c, d, e, f, g, h) {
            this.id = a;
            this.x = b;
            this.y = c;
            this.width = d;
            this.height = e;
            this.wv = f;
            this.HO = g;
            this.bC = h
        }
    }
    Ug.g = !0;
    Object.assign(Ug.prototype, {
        j: Ug
    });
    class Vg {
        constructor(a, b, c) {
            this.first = a;
            this.second = b;
            this.amount = c
        }
    }
    Vg.g = !0;
    Object.assign(Vg.prototype, {
        j: Vg
    });
    class Wg {
        constructor(a, b, c, d) {
            this.vO = a;
            this.right = b;
            this.wI = c;
            this.left = d
        }
    }
    Wg.g = !0;
    Object.assign(Wg.prototype, {
        j: Wg
    });
    class Xg {
        constructor(a, b) {
            this.size = a;
            this.padding = b
        }
    }
    Xg.g = !0;
    Object.assign(Xg.prototype, {
        j: Xg
    });
    class Yg {
        constructor(a, b, c, d) {
            this.lineHeight = a;
            this.ii = b;
            this.TM = c;
            this.SM = d
        }
    }
    Yg.g = !0;
    Object.assign(Yg.prototype, {
        j: Yg
    });
    class le {
        constructor() {}
        Zk(a) {
            let b = new Tg;
            a = new ec(a);
            var c = a.ha()
              , d = a.ha()
              , e = a.ha();
            if (66 != c || 77 != d || 70 != e)
                throw 6;
            if (3 != a.ha())
                throw 7;
            a.ha();
            c = a.Kf();
            d = a.Ob();
            a.ha();
            a.ha();
            a.cd();
            a.ha();
            e = a.ha();
            var f = a.ha()
              , g = a.ha()
              , h = a.ha();
            a.ha();
            a.ha();
            a.ha();
            a.Yp(c - 14);
            b.info = new Xg(Math.abs(d),new Wg(e,f,g,h));
            a.ha();
            a.Kf();
            c = Math.max(a.cd(), b.info.size) | 0;
            d = a.cd();
            e = a.cd();
            f = a.cd();
            a.cd();
            a.ha();
            a.ha();
            a.ha();
            a.ha();
            a.ha();
            b.Ao = new Yg(c,d,e,f);
            a.ha();
            c = a.Kf();
            d = a.i;
            a.vA();
            d = a.i - d;
            for (c -= d; 0 < c; )
                a.vA(),
                c -= d;
            a.ha();
            c = a.Kf() / 20 | 0;
            for (d = 0; d < c; ) {
                ++d;
                e = a.Kf();
                f = a.cd();
                g = a.cd();
                h = a.cd();
                let m = a.cd()
                  , n = a.Ob()
                  , q = a.Ob()
                  , p = a.Ob();
                a.ha();
                a.ha();
                b.ig.push(new Ug(e,f,g,h,m,n,q,p))
            }
            if (a.i == a.JB)
                return b;
            a.ha();
            for (a.Kf(); a.i < a.JB; )
                c = a.Kf(),
                d = a.Kf(),
                e = a.Ob(),
                b.mK.push(new Vg(c,d,e));
            return b
        }
    }
    le.g = !0;
    Object.assign(le.prototype, {
        j: le
    });
    class me {
        static ey(a) {
            for (var b = 0, c = 0, d = a.ig; c < d.length; )
                b = Math.max(b, d[c++].id + 1);
            c = Array(b);
            for (d = 0; d < b; )
                c[d++] = null;
            b = 0;
            for (d = a.ig; b < d.length; ) {
                let e = d[b];
                ++b;
                c[e.id] = e
            }
            return new Zg(c,a.info.size,a.Ao.lineHeight,a.Ao.ii,a.ig[0].bC,a.Ao.TM,a.Ao.SM,[a.info.padding.vO, a.info.padding.right, a.info.padding.wI, a.info.padding.left])
        }
        static dk(a) {
            let b = []
              , c = 0;
            for (a = a.ig; c < a.length; ) {
                let d = a[c];
                ++c;
                let e = d.id;
                b.push(new Vd(e,String.fromCodePoint(e),new Qa(d.width,d.height),new zb(d.x,d.y,d.width,d.height),!1,null))
            }
            return b
        }
    }
    me.g = !0;
    class Zg {
        constructor(a, b, c, d, e, f, g, h) {
            this.yx = a;
            this.hq = b;
            this.lineHeight = c;
            this.ii = d;
            this.Ux = e;
            this.padding = h;
            this.tt = new cb;
            this.lz = new cb
        }
    }
    Zg.g = !0;
    Object.assign(Zg.prototype, {
        j: Zg
    });
    class Af {
        constructor(a, b) {
            this.frames = a;
            this.Ek = b
        }
    }
    Af.g = !0;
    Object.assign(Af.prototype, {
        j: Af
    });
    class Bf {
        constructor(a, b, c, d, e) {
            this.filename = a;
            this.frame = b;
            this.qB = c;
            this.Zb = d;
            this.Ln = e
        }
    }
    Bf.g = !0;
    Object.assign(Bf.prototype, {
        j: Bf
    });
    class Cf {
        constructor(a, b, c) {
            this.width = a;
            this.height = b;
            this.scale = c
        }
    }
    Cf.g = !0;
    Object.assign(Cf.prototype, {
        j: Cf
    });
    class qd {
        constructor() {}
        lM(a) {
            var b = JSON.parse(a);
            a = [];
            let c = 0
              , d = b.frames;
            for (; c < d.length; ) {
                let e = d[c];
                ++c;
                let f = e.frame
                  , g = e.spriteSourceSize
                  , h = e.sourceSize;
                a.push(new Bf(e.filename,new zb(f.x,f.y,f.w,f.h),new zb(g.x,g.y,g.w,g.h),new Qa(h.w,h.h),e.trimmed))
            }
            b = b.meta;
            return new Af(a,new Cf(b.size.w,b.size.h,parseFloat(b.scale)))
        }
        tA(a) {
            function b(h) {
                return new Bf(h,new zb(c.Ob(),c.Ob(),c.Ob(),c.Ob()),new zb(c.Ob(),c.Ob(),c.Ob(),c.Ob()),new Qa(c.Ob(),c.Ob()),1 == c.ha())
            }
            let c = new ec(a);
            c.ha();
            c.ha();
            c.ha();
            a = new Cf(c.Ob(),c.Ob(),c.jM());
            let d = []
              , e = c.Ob()
              , f = 0;
            for (; f < e; ) {
                var g = c.Yp(c.Ob());
                d.push(b(g));
                ++f
            }
            e = c.Ob();
            for (f = 0; f < e; ) {
                g = c.Ob();
                let h = c.Yp(c.Ob())
                  , m = 0;
                for (; m < g; ) {
                    let n = "" + (m + 1);
                    for (; 4 > n.length; )
                        n = "0" + n;
                    d.push(b(h + n));
                    ++m
                }
                ++f
            }
            return new Af(d,a)
        }
    }
    qd.g = !0;
    Object.assign(qd.prototype, {
        j: qd
    });
    class kg {
        static dk(a) {
            let b = 0
              , c = []
              , d = 0;
            for (a = a.frames; d < a.length; ) {
                let e = a[d];
                ++d;
                c.push(new Vd(b++,e.filename,e.Zb,e.frame,e.Ln,new Qa(e.qB.x,e.qB.y)))
            }
            return c
        }
    }
    kg.g = !0;
    class ie extends Sd {
        constructor(a) {
            super();
            this.os = a;
            this.context = null;
            this.Wo = !1;
            this.sK = [];
            this.Mm = (new ja("(iPad|iPhone)","g")).match(ia.navigator.platform);
            this.im = new Qa(-1,-1);
            this.lu = this.ys = null;
            this.KN();
            this.qn = 1;
            this.Ur();
            null != a ? (this.canvas = window.document.getElementById(a),
            null == this.canvas && (this.canvas = window.document.createElement("canvas"),
            this.canvas.id = a,
            window.document.body.appendChild(this.canvas))) : (this.canvas = window.document.createElement("canvas"),
            this.canvas.id = "gfx",
            this.canvas.style.position = "absolute",
            this.canvas.style.width = "100%",
            this.canvas.style.height = "100%",
            this.canvas.style.touchAction = "none",
            this.canvas.style.userSelect = "none",
            this.canvas.style.outline = "none",
            this.canvas.style.setProperty("-webkit-user-select", "none"),
            this.canvas.style.zIndex = "0",
            window.document.body.appendChild(this.canvas),
            this.canvas.tabIndex = 1,
            this.canvas.focus())
        }
        ik() {
            return window.devicePixelRatio
        }
        KN() {
            null != this.lu && (this.lu.disconnect(),
            this.lu = null);
            this.SN = !1
        }
        SJ(a) {
            null == a && (a = {
                willReadFrequently: !1
            });
            this.context = this.canvas.getContext("2d", a);
            this.canvas.addEventListener("contextlost", function() {});
            this.canvas.addEventListener("contextrestored", function() {})
        }
        WJ(a) {
            function b() {
                try {
                    e.Ed.qe(6)
                } catch (f) {}
            }
            function c(f) {
                f.preventDefault()
            }
            function d(f) {
                console.log(f.statusMessage || "Unknown error")
            }
            let e = this;
            this.addListener(this.canvas, "webglcontextcreationerror", d);
            this.addListener(this.canvas, "webglcontextlost", c);
            this.addListener(this.canvas, "webglcontextrestored", b);
            try {
                if (null == a && (a = {
                    stencil: !0
                }),
                (this.context = this.canvas.getContext("webgl", a)) && this.context instanceof WebGLRenderingContext)
                    return !0
            } catch (f) {
                this.context = null
            }
            this.canvas.removeEventListener("webglcontextcreationerror", d);
            this.canvas.removeEventListener("webglcontextlost", c);
            this.canvas.removeEventListener("webglcontextrestored", b);
            return !1
        }
        um() {
            let a = this.oh();
            return a.x / a.y
        }
        getContext() {
            return this.context
        }
        mN(a) {
            this.im = new Qa(-1,-1);
            this.qn = a;
            this.update()
        }
        update() {
            this.mu = !1;
            var a = this.canvas.clientWidth;
            var b = this.canvas.clientHeight;
            if (0 != a && 0 != b && (null != this.ys && (a = this.ys.x,
            b = this.ys.y),
            this.im.x != a || this.im.y != b)) {
                var c = this.im;
                c.x = a;
                c.y = b;
                this.zd.x = a * this.ik() | 0;
                this.zd.y = b * this.ik() | 0;
                b = 0 == this.qn ? this.ik() : this.qn;
                a = this.zd.x / b | 0;
                b = this.zd.y / b | 0;
                this.canvas.width = a;
                this.canvas.height = b;
                this.$M(a, b);
                this.mu = !0;
                this.Ed.qe(0)
            }
        }
        eK() {
            try {
                return this.Mm ? !1 : document.fullscreenEnabled
            } catch (a) {
                return !1
            }
        }
        Ur() {
            this.addListener(window, "contextmenu", function(b) {
                b.preventDefault()
            });
            window.oncontextmenu = function() {
                return !1
            }
            ;
            let a = this;
            this.addListener(window.document, "visibilitychange", function() {
                a.visible = "visible" == window.document.visibilityState;
                a.Ed.qe(a.visible ? 1 : 2)
            });
            this.eK() && this.addListener(window.document, "fullscreenchange", function() {
                a.Wo = document.Wo;
                a.Ed.qe(a.Wo ? 3 : 4)
            });
            if (this.Mm)
                this.addListener(window, "orientationchange", function() {
                    a.Ed.qe(5);
                    setInterval(function() {
                        window.scrollTo(0, 1)
                    }, 1)
                });
            else
                try {
                    window.screen.orientation.onchange = function() {
                        a.Ed.qe(5);
                        setTimeout(function() {
                            let b = a.im;
                            b.x = 0;
                            b.y = 0
                        }, 1E3)
                    }
                } catch (b) {}
        }
        addListener(a, b, c) {
            let d = {};
            d.target = a;
            d.type = b;
            d.listener = c;
            this.sK.push(d);
            a.addEventListener(b, c)
        }
    }
    ie.g = !0;
    ie.u = Sd;
    Object.assign(ie.prototype, {
        j: ie
    });
    class lg {
    }
    class ke extends nf {
        constructor(a, b) {
            null == b && (b = !1);
            null == a && (a = !0);
            super();
            this.CO = a;
            this.flipY = b
        }
        load(a, b, c) {
            let d = this;
            this.decode(a, c).then(function(e) {
                d.data = e;
                let f = d.size;
                f.x = e.width;
                f.y = e.height;
                d.loaded = !0;
                b()
            }).catch(function() {})
        }
        gv() {
            if (this.loaded) {
                try {
                    this.data instanceof HTMLImageElement ? this.data.src = "data:image/gif;base64,vmwareR0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" : this.data instanceof HTMLCanvasElement ? (this.data.width = 1,
                    this.data.height = 1) : this.data instanceof ImageBitmap && this.data.close()
                } catch (a) {}
                this.loaded = !1;
                this.data = null
            }
        }
        decode(a, b) {
            let c = this;
            return "string" == typeof a ? (null == b && (b = "image/png"),
            a = a.replace(RegExp("\\s+", "g"), ""),
            this.decode(new Blob([new Uint8Array(sc.decode(a).b.OH)],{
                type: b
            }))) : a instanceof HTMLImageElement ? Promise.resolve(a) : a instanceof HTMLCanvasElement ? Promise.resolve(a) : this.CO ? null == window.createImageBitmap ? this.Wq(a) : "string" == typeof a ? this.Wq(a).then(function(d) {
                return c.HB(d)
            }) : this.HB(a).then(null, function() {
                return c.Wq(a)
            }) : this.Wq(a)
        }
        Wq(a) {
            return new Promise(function(b, c) {
                let d = window.document.createElement("img");
                d.addEventListener("load", function() {
                    b(d)
                });
                d.addEventListener("error", function(e) {
                    c(e)
                });
                if ("string" == typeof a) {
                    debugger ;d.src = a
                } else
                    d.src = URL.createObjectURL(a)
            }
            )
        }
        HB(a) {
            return window.createImageBitmap(a, {
                imageOrientation: this.flipY ? "flipY" : "none",
                premultiplyAlpha: "default"
            })
        }
    }
    ke.g = !0;
    ke.u = nf;
    Object.assign(ke.prototype, {
        j: ke
    });
    class ae {
    }
    ae.g = !0;
    ae.ke = !0;
    Object.assign(ae.prototype, {
        j: ae
    });
    class La {
        constructor() {
            this.qv = this.pg();
            this.Lx = this.cc()
        }
        Qa() {}
        pg() {
            return 201
        }
        cc() {
            throw 8;
        }
    }
    La.g = !0;
    La.ob = [ae];
    Object.assign(La.prototype, {
        j: La
    });
    class je extends cd {
        constructor() {
            function a() {
                let c = window.document.createElement("canvas").getContext("2d", {
                    alpha: !0,
                    willReadFrequently: !0
                });
                c.canvas.width = 1024;
                c.canvas.height = 1024;
                return c
            }
            super("2d");
            this.FH = 0;
            this.Ha = this.context = null;
            this.ah = new Xb;
            this.globalAlpha = 1;
            this.Dp = this.hg = null;
            this.az = !1;
            this.oi = 0;
            this.mv = new $a(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
            this.globalCompositeOperation = null;
            var b = this.$H = Array(5);
            b[0] = "source-over";
            b[1] = "source-over";
            b[2] = "multiply";
            b[3] = "lighter";
            b[4] = "screen";
            this.ws = [null];
            for (b = 0; 3 > b; ) {
                ++b;
                let c = a();
                this.ws.push(c)
            }
            this.VK = a();
            new W(pa,pa,qa,qa)
        }
        Bn(a) {
            super.Bn(a);
            this.context = a.getContext();
            this.ws[0] = this.context
        }
        clear(a) {
            super.clear();
            null == a && (a = this.clearColor);
            var b = this.yb;
            let c = this.viewport
              , d = b.size.x * c.x | 0
              , e = b.size.y * c.y | 0
              , f = b.size.x * c.w | 0;
            b = b.size.y * c.G | 0;
            this.clearRect(d, e, f, b);
            0 != a.w && (this.Kh("rgba(" + ((255 * a.x | 0) & 255) + "," + ((255 * a.y | 0) & 255) + "," + ((255 * a.z | 0) & 255) + "," + a.w.toFixed(2) + ")"),
            this.fillRect(d, e, f, b))
        }
        yh() {
            if (!super.yh())
                return !1;
            this.Ha = this.context;
            try {
                this.context.reset()
            } catch (a) {}
            this.Ha.fillStyle = "#000000";
            this.globalAlpha = 1;
            this.$k();
            this.context.save();
            this.jv();
            return !0
        }
        fh() {
            for (super.fh(); 0 < this.oi; )
                this.Ha.restore(),
                this.oi--;
            this.context.restore()
        }
        gj(a, b, c, d) {
            super.gj(a, b, c, d);
            for (this.jv(); 0 < this.oi; )
                this.Ha.restore(),
                this.oi--;
            this.resetTransform();
            if (0 != a || 0 != b || 1 != c || 1 != d)
                a = new Path2D,
                b = this.yb,
                c = this.viewport,
                a.rect(b.size.x * c.x | 0, b.size.y * c.y | 0, b.size.x * c.w | 0, b.size.y * c.G | 0),
                this.Ha.save(),
                this.Ha.clip(a),
                this.oi++
        }
        dj(a) {
            super.dj(a);
            this.jv()
        }
        Vj(a) {
            var b = a.effect;
            if (null != b && b.enabled && 1 != a.ne)
                if (0 < (a.flags & 4))
                    this.Je = a,
                    a = this.globalAlpha,
                    this.globalAlpha = .75,
                    this.nm(b),
                    this.globalAlpha = a;
                else if (this.Je = a,
                this.Eg(a),
                null == this.Dp)
                    this.nm(b);
                else {
                    this.jy(a.effect.type, a.type);
                    a = this.yb.size.x;
                    var c = this.yb.size.y;
                    this.Ha = this.VK;
                    this.Cu(a, c);
                    this.nm(b);
                    this.hl(this.az ? "destination-out" : "destination-in");
                    b = this.Nc;
                    this.Nc = 0;
                    var d = this.Je;
                    this.Je = this.Dp;
                    this.nm(this.Dp.effect);
                    this.Nc = b;
                    this.Je = d;
                    b = this.Ha.canvas;
                    this.Ha = this.context;
                    this.hl("source-over");
                    this.resetTransform();
                    this.Ha.drawImage(b, 0, 0, a, c, 0, 0, a, c)
                }
        }
        Bm(a) {
            0 < (a.I & 240) && a.cr();
            var b = a.te;
            a = b.m11;
            let c = b.m12
              , d = b.m13
              , e = b.m14
              , f = b.m21
              , g = b.m22
              , h = b.m23
              , m = b.m24
              , n = b.m31
              , q = b.m32
              , p = b.m33
              , v = b.m34
              , u = b.m41
              , y = b.m42
              , A = b.m43;
            b = b.m44;
            var x = this.fb.Yi;
            let H = this.Dx
              , C = this.mv
              , Y = C.m11 * x.m11 + C.m12 * x.m21 + C.m13 * x.m31 + C.m14 * x.m41
              , X = C.m11 * x.m12 + C.m12 * x.m22 + C.m13 * x.m32 + C.m14 * x.m42
              , S = C.m11 * x.m13 + C.m12 * x.m23 + C.m13 * x.m33 + C.m14 * x.m43
              , aa = C.m11 * x.m14 + C.m12 * x.m24 + C.m13 * x.m34 + C.m14 * x.m44
              , ra = C.m21 * x.m11 + C.m22 * x.m21 + C.m23 * x.m31 + C.m24 * x.m41
              , la = C.m21 * x.m12 + C.m22 * x.m22 + C.m23 * x.m32 + C.m24 * x.m42
              , ba = C.m21 * x.m13 + C.m22 * x.m23 + C.m23 * x.m33 + C.m24 * x.m43
              , oa = C.m21 * x.m14 + C.m22 * x.m24 + C.m23 * x.m34 + C.m24 * x.m44
              , va = C.m31 * x.m11 + C.m32 * x.m21 + C.m33 * x.m31 + C.m34 * x.m41
              , ma = C.m31 * x.m12 + C.m32 * x.m22 + C.m33 * x.m32 + C.m34 * x.m42
              , da = C.m31 * x.m13 + C.m32 * x.m23 + C.m33 * x.m33 + C.m34 * x.m43
              , Wa = C.m31 * x.m14 + C.m32 * x.m24 + C.m33 * x.m34 + C.m34 * x.m44
              , gb = C.m41 * x.m11 + C.m42 * x.m21 + C.m43 * x.m31 + C.m44 * x.m41
              , Na = C.m41 * x.m12 + C.m42 * x.m22 + C.m43 * x.m32 + C.m44 * x.m42
              , hb = C.m41 * x.m13 + C.m42 * x.m23 + C.m43 * x.m33 + C.m44 * x.m43;
            x = C.m41 * x.m14 + C.m42 * x.m24 + C.m43 * x.m34 + C.m44 * x.m44;
            H.m11 = Y * a + X * f + S * n + aa * u;
            H.m12 = Y * c + X * g + S * q + aa * y;
            H.m13 = Y * d + X * h + S * p + aa * A;
            H.m14 = Y * e + X * m + S * v + aa * b;
            H.m21 = ra * a + la * f + ba * n + oa * u;
            H.m22 = ra * c + la * g + ba * q + oa * y;
            H.m23 = ra * d + la * h + ba * p + oa * A;
            H.m24 = ra * e + la * m + ba * v + oa * b;
            H.m31 = va * a + ma * f + da * n + Wa * u;
            H.m32 = va * c + ma * g + da * q + Wa * y;
            H.m33 = va * d + ma * h + da * p + Wa * A;
            H.m34 = va * e + ma * m + da * v + Wa * b;
            H.m41 = gb * a + Na * f + hb * n + x * u;
            H.m42 = gb * c + Na * g + hb * q + x * y;
            H.m43 = gb * d + Na * h + hb * p + x * A;
            H.m44 = gb * e + Na * m + hb * v + x * b;
            return H
        }
        nh(a) {
            0 < (a.I & 64) && a.ml();
            var b = a.te;
            a = b.m11;
            let c = b.m12;
            var d = b.m14;
            let e = b.m21
              , f = b.m22
              , g = b.m24;
            b = this.jI;
            let h = this.mv
              , m = this.fb.Yi
              , n = h.m11 * m.m11 + h.m12 * m.m21
              , q = h.m11 * m.m12 + h.m12 * m.m22
              , p = h.m21 * m.m11 + h.m22 * m.m21
              , v = h.m21 * m.m12 + h.m22 * m.m22
              , u = n * d + q * g + (h.m11 * m.m14 + h.m12 * m.m24 + h.m14);
            d = p * d + v * g + (h.m21 * m.m14 + h.m22 * m.m24 + h.m24);
            b.m11 = n * a + q * e;
            b.m12 = n * c + q * f;
            b.m14 = u;
            b.m21 = p * a + v * e;
            b.m22 = p * c + v * f;
            b.m24 = d;
            return b
        }
        Hu(a) {
            this.dd(a.zj)
        }
        uu(a) {
            this.hg = a.hg;
            this.context.globalCompositeOperation = this.$H[this.hg]
        }
        wu(a) {
            this.ah = a.transform
        }
        Fu(a) {
            this.Dp = a.la;
            this.az = a.bK;
            let b = a.ss;
            if (null != b) {
                this.Ha.save();
                this.resetTransform();
                this.oi++;
                a = this.nh(a.Op.ya);
                let e = new Path2D;
                var c = b[0]
                  , d = new E(a.m11 * c.x + a.m12 * c.y + a.m14,a.m21 * c.x + a.m22 * c.y + a.m24,0,1);
                e.moveTo(d.x, d.y);
                for (c = 1; c < b.length; ) {
                    d = b[c++];
                    let f = a;
                    d = new E(f.m11 * d.x + f.m12 * d.y + f.m14,f.m21 * d.x + f.m22 * d.y + f.m24,0,1);
                    e.lineTo(d.x, d.y)
                }
                e.closePath();
                this.Ha.clip(e)
            } else
                0 < this.oi && this.Ha.restore()
        }
        jv() {
            let a = this.yb
              , b = this.viewport
              , c = (a.size.x * b.w | 0) / 2
              , d = (a.size.y * b.G | 0) / 2;
            this.yb.SN && (c |= 0,
            d |= 0);
            let e = this.mv;
            e.m11 = c;
            e.m12 = 0;
            e.m13 = 0;
            e.m14 = c + (a.size.x * b.x | 0);
            e.m21 = 0;
            e.m22 = -d;
            e.m23 = 0;
            e.m24 = d + (a.size.y * b.y | 0)
        }
        jt(a) {
            return new hd(this,a)
        }
        dd(a) {
            this.globalAlpha = a;
            this.context.globalAlpha = a
        }
        An(a) {
            this.Ha = this.ws[a]
        }
        Cu(a, b) {
            let c = this.Ha.canvas
              , d = c.width
              , e = c.height
              , f = !1
              , g = this.yb.size;
            if (d > g.x || e > g.y)
                c.width = g.x,
                c.height = g.y;
            if (d < a || e < b)
                f = !0;
            else
                try {
                    this.Ha.reset()
                } catch (h) {
                    f = !0
                }
            f && (c.width = a,
            c.height = b)
        }
        drawImage(a, b, c, d, e, f, g, h, m) {
            this.Ha.drawImage(a, b, c, d, e, f, g, h, m)
        }
        Kh(a) {
            this.Ha.fillStyle = a
        }
        $A(a) {
            this.Ha.strokeStyle = a
        }
        hl(a) {
            let b = this.Ha;
            b.globalCompositeOperation != a && (b.globalCompositeOperation = a)
        }
        resetTransform() {
            this.Ha.setTransform(1, 0, 0, 1, 0, 0)
        }
        ej(a) {
            a = this.nh(a);
            this.Ha.setTransform(a.m11, a.m21, a.m12, a.m22, a.m14, a.m24)
        }
        clearRect(a, b, c, d) {
            this.Ha.clearRect(a, b, c, d)
        }
        fillRect(a, b, c, d) {
            this.Ha.fillRect(a, b, c, d)
        }
        Rw(a, b, c, d, e) {
            this.Ha.globalAlpha = 1;
            var f = this.mh(2);
            this.An(1);
            this.Cu(d, e);
            this.hl("copy");
            var g = f.transform;
            var h = g.Db;
            f = g.offset;
            switch (g.hint) {
            case 0:
                this.drawImage(a, b, c, d, e, 0, 0, d, e);
                this.DH(this.Ha, g, d, e);
                break;
            case 1:
                this.Ha.globalAlpha = g.Db.w;
                this.drawImage(a, b, c, d, e, 0, 0, d, e);
                break;
            case 2:
                var m = 1 - h.x;
                f = 0 == f.x ? h = g = 0 : h = g = 1;
                this.Kh("rgba(" + ((255 * g | 0) & 255) + "," + ((255 * h | 0) & 255) + "," + ((255 * f | 0) & 255) + "," + m.toFixed(2) + ")");
                this.fillRect(0, 0, d, e);
                this.hl("destination-atop");
                this.drawImage(a, b, c, d, e, 0, 0, d, e);
                break;
            case 3:
                m = 1 - h.x,
                g = f.x / m,
                h = f.y / m,
                f = f.z / m,
                this.Kh("rgba(" + ((255 * g | 0) & 255) + "," + ((255 * h | 0) & 255) + "," + ((255 * f | 0) & 255) + "," + m.toFixed(2) + ")"),
                this.fillRect(0, 0, d, e),
                this.hl("destination-atop"),
                this.drawImage(a, b, c, d, e, 0, 0, d, e)
            }
            a = this.Ha.canvas;
            this.An(0);
            return a
        }
        Qw(a, b, c, d, e) {
            this.An(2);
            this.Cu(d, e);
            this.Kh(Eh);
            this.fillRect(0, 0, d, e);
            this.Ha.globalAlpha = this.globalAlpha;
            this.hl("screen");
            this.drawImage(a, b, c, d, e, 0, 0, d, e);
            this.fillRect(0, 0, d, e);
            a = this.Ha.canvas;
            this.An(0);
            return a
        }
        DH(a, b, c, d) {
            c = a.getImageData(0, 0, c, d);
            d = c.data;
            let e = 0
              , f = d.length;
            var g = b.Db
              , h = b.offset;
            b = g.x;
            let m = g.y
              , n = g.z;
            g = g.w;
            let q = h.x
              , p = h.y
              , v = h.z;
            h = h.w;
            let u;
            for (; e < f; )
                u = d[e + 3],
                d[e] = 255 * (d[e] / u * b + q),
                ++e,
                d[e] = 255 * (d[e] / u * m + p),
                ++e,
                d[e] = 255 * (d[e] / u * n + v),
                ++e,
                d[e] = 255 * (u / 255 * g + h),
                ++e;
            a.putImageData(c, 0, 0)
        }
        OA(a) {
            this.Ha.imageSmoothingEnabled = a
        }
    }
    je.g = !0;
    je.u = cd;
    Object.assign(je.prototype, {
        j: je
    });
    class hd extends dd {
        constructor(a, b) {
            super(a, b)
        }
    }
    hd.g = !0;
    hd.u = dd;
    Object.assign(hd.prototype, {
        j: hd
    });
    class Df extends dc {
        constructor() {
            super()
        }
        Lw(a, b, c) {
            var d = this.Lm;
            let e = d.m
              , f = d.C
              , g = d.A;
            d = d.D;
            switch (a) {
            case 10:
                var h = c[b];
                a = c[b + 1];
                var m = c[b + 2];
                c = c[b + 3];
                h < e && (e = h);
                h > g && (g = h);
                a < f && (f = a);
                a > d && (d = a);
                h += m;
                c = a + c;
                h < e && (e = h);
                h > g && (g = h);
                c < f && (f = c);
                c > d && (d = c);
                b += 4;
                break;
            case 11:
                h = c[b];
                a = c[b + 1];
                m = c[b + 2];
                c = c[b + 3];
                h < e && (e = h);
                h > g && (g = h);
                a < f && (f = a);
                a > d && (d = a);
                h += m;
                c = a + c;
                h < e && (e = h);
                h > g && (g = h);
                c < f && (f = c);
                c > d && (d = c);
                b += 5;
                break;
            case 12:
                a = c[b];
                h = c[b + 1];
                a < e && (e = a);
                a > g && (g = a);
                h < f && (f = h);
                h > d && (d = h);
                a = c[b + 2];
                c = c[b + 3];
                a < e && (e = a);
                a > g && (g = a);
                c < f && (f = c);
                c > d && (d = c);
                b += 4;
                break;
            case 13:
                a = c[b];
                h = c[b + 1];
                a < e && (e = a);
                a > g && (g = a);
                h < f && (f = h);
                h > d && (d = h);
                a = c[b + 2];
                h = c[b + 3];
                a < e && (e = a);
                a > g && (g = a);
                h < f && (f = h);
                h > d && (d = h);
                a = c[b + 4];
                c = c[b + 5];
                a < e && (e = a);
                a > g && (g = a);
                c < f && (f = c);
                c > d && (d = c);
                b += 6;
                break;
            case 14:
                h = c[b];
                a = c[b + 1];
                c = c[b + 2];
                m = h - c;
                var n = a - c;
                m < e && (e = m);
                m > g && (g = m);
                n < f && (f = n);
                n > d && (d = n);
                h += c;
                c = a + c;
                h < e && (e = h);
                h > g && (g = h);
                c < f && (f = c);
                c > d && (d = c);
                b += 5;
                break;
            case 15:
                h = c[b];
                a = c[b + 1];
                c = Math.max(c[b + 2], c[b + 3]);
                m = h - c;
                n = a - c;
                m < e && (e = m);
                m > g && (g = m);
                n < f && (f = n);
                n > d && (d = n);
                h += c;
                c = a + c;
                h < e && (e = h);
                h > g && (g = h);
                c < f && (f = c);
                c > d && (d = c);
                b += 8;
                break;
            case 16:
                ++b;
                break;
            case 17:
                b += 1 + (c[b] | 0)
            }
            c = this.Lm;
            c.m = e;
            c.C = f;
            c.A = g;
            c.D = d;
            return b
        }
        ra() {
            return 1305
        }
    }
    Df.g = !0;
    Df.u = dc;
    Object.assign(Df.prototype, {
        j: Df
    });
    class ze extends La {
        constructor() {
            super()
        }
        M(a) {
            let b = a.P
              , c = a.effect;
            var d = c.mb;
            if (d.ep()) {
                var e = d.image.data
                  , f = d.size.x
                  , g = d.size.y
                  , h = b.globalAlpha;
                b.OA(0 < (d.flags & 8));
                0 < (b.Nc & 4) && (e = b.Rw(e, 0, 0, f, g));
                0 < (b.Nc & 1) && 0 == b.hg && (e = b.Qw(e, 0, 0, f, g),
                h = 1);
                b.dd(h);
                b.An(0);
                b.ej(a.la.ya);
                g = c.Sf.se;
                a = c.mb.Mb.ak;
                d = g.K;
                f = 0;
                g = 5 * (g.Z / 5 | 0);
                h = c.size;
                var m = h.x
                  , n = h.y;
                h = c.Bi;
                var q = m - h
                  , p = n - h
                  , v = null;
                c.clip && (v = b.Ha,
                v.save(),
                v.rect(h, h, m - 2 * h, n - 2 * h),
                v.clip());
                for (m = c.multiline; f < g; ) {
                    var u = d[f++];
                    n = d[f++];
                    let y = d[f++]
                      , A = d[f++]
                      , x = f++;
                    u = a[u].pd;
                    if (m) {
                        if (y > p)
                            break
                    } else if (n > q)
                        break;
                    n + A > h && b.drawImage(e, u.x, u.y, u.w, u.G, n, y, A, d[x])
                }
                c.clip && v.restore()
            }
        }
        cc() {
            return 705
        }
        pg() {
            return 401
        }
    }
    ze.g = !0;
    ze.u = La;
    Object.assign(ze.prototype, {
        j: ze
    });
    class Ee extends La {
        constructor() {
            super()
        }
        M(a) {
            var b = a.P;
            let c = a.effect;
            this.$g = a.P.yb.getContext();
            this.$g.lineWidth = 1;
            b.ej(a.la.ya);
            a = 0;
            for (b = c.points.length; a < b; ) {
                var d = a++;
                this.$g.globalAlpha = c.Sl[d];
                this.$g.lineWidth = 2 * c.W;
                let f = new Path2D
                  , g = c.points[d];
                d = c.Zg[d];
                let h = 0
                  , m = g.length;
                for (; h < m; ) {
                    let n = h++;
                    var e = d[n];
                    this.$g.strokeStyle = "rgba(" + ((255 * e.x | 0) & 255) + "," + ((255 * e.y | 0) & 255) + "," + ((255 * e.z | 0) & 255) + "," + e.w.toFixed(2) + ")";
                    e = g[n].x;
                    let q = g[n].y;
                    0 == n ? f.moveTo(e, q) : f.lineTo(e, q)
                }
                this.$g.stroke(f)
            }
        }
        cc() {
            return 605
        }
    }
    Ee.g = !0;
    Ee.u = La;
    Object.assign(Ee.prototype, {
        j: Ee
    });
    class Ae extends La {
        constructor() {
            super()
        }
        M(a) {
            let b = a.P;
            var c = a.effect
              , d = a.la;
            b.ej(a.la.ya);
            a = c.color;
            if (0 < (b.Nc & 4)) {
                var e = b.ah;
                c = c.color;
                a = e.Db;
                let f = e.offset;
                e = c.x * a.x + f.x;
                let g = c.y * a.y + f.y
                  , h = c.z * a.z + f.z;
                c = c.w * a.w + f.w;
                a = new E(0 > e ? 0 : 1 < e ? 1 : e,0 > g ? 0 : 1 < g ? 1 : g,0 > h ? 0 : 1 < h ? 1 : h,0 > c ? 0 : 1 < c ? 1 : c)
            }
            b.dd(b.globalAlpha);
            b.Kh("rgba(" + ((255 * a.x | 0) & 255) + "," + ((255 * a.y | 0) & 255) + "," + ((255 * a.z | 0) & 255) + "," + a.w.toFixed(2) + ")");
            d = d.size;
            b.fillRect(0, 0, d.x, d.y)
        }
        cc() {
            return 1205
        }
        pg() {
            return 401
        }
    }
    Ae.g = !0;
    Ae.u = La;
    Object.assign(Ae.prototype, {
        j: Ae
    });
    class Be extends La {
        constructor() {
            super()
        }
        M(a) {
            let b = a.P;
            var c = a.effect
              , d = b.yb.size;
            a = d.x;
            d = d.y;
            b.resetTransform();
            b.dd(b.globalAlpha);
            let e = 0
              , f = 0
              , g = c.Zp;
            null != g && (e = g.m,
            f = g.C,
            a = g.A - g.m,
            d = g.D - g.C);
            c = c.color;
            b.Kh("rgba(" + ((255 * c.x | 0) & 255) + "," + ((255 * c.y | 0) & 255) + "," + ((255 * c.z | 0) & 255) + "," + c.w.toFixed(2) + ")");
            b.fillRect(e, f, a, d)
        }
        cc() {
            return 305
        }
    }
    Be.g = !0;
    Be.u = La;
    Object.assign(Be.prototype, {
        j: Be
    });
    class De extends La {
        constructor() {
            super()
        }
        Qa(a) {
            super.Qa(a)
        }
        M(a) {
            let b = a.P;
            var c = a.effect;
            this.$g = a.P.yb.getContext();
            b.ej(a.la.ya);
            a = 0;
            for (c = c.ar; a < c.length; )
                this.TI(c[a++])
        }
        TI(a) {
            let b = a[0];
            if (0 != a.length) {
                var c = new Path2D;
                c.moveTo(b.x, b.y);
                for (var d = 1, e = a.length; d < e; )
                    b = a[d],
                    c.lineTo(b.x, b.y),
                    d += 2;
                for (d = a.length - 2; 0 <= d; )
                    b = a[d],
                    c.lineTo(b.x, b.y),
                    d -= 2;
                c.closePath();
                this.$g.fillStyle = "#ffffffff";
                this.$g.fill(c)
            }
        }
        cc() {
            return 1105
        }
    }
    De.g = !0;
    De.u = La;
    Object.assign(De.prototype, {
        j: De
    });
    class Fe extends La {
        constructor() {
            super()
        }
        M(a) {
            var b = a.effect;
            a.P.ej(a.la.ya);
            a = a.P.yb.getContext();
            a.lineWidth = b.lineWidth;
            a.globalAlpha = 1;
            var c = b.color;
            a.strokeStyle = "rgba(" + ((255 * c.x | 0) & 255) + "," + ((255 * c.y | 0) & 255) + "," + ((255 * c.z | 0) & 255) + "," + c.w.toFixed(2) + ")";
            c = b.jn;
            let d = 2 * Math.PI
              , e = d / c
              , f = b.F.x
              , g = b.F.y;
            b = b.W;
            let h = 0;
            for (; h < c; ) {
                var m = h++;
                1 != (m & 1) && (m = m / c * d,
                a.beginPath(),
                a.arc(f, g, b, m, m + e, !1),
                a.stroke(),
                a.closePath())
            }
        }
        cc() {
            return 505
        }
    }
    Fe.g = !0;
    Fe.u = La;
    Object.assign(Fe.prototype, {
        j: Fe
    });
    class Ce extends La {
        constructor() {
            super();
            this.UM = new E(0,0,0,0);
            this.QN = !1
        }
        M(a) {
            var b = a.effect;
            let c = a.P
              , d = 0 < (c.Nc & 1) && 0 == c.hg ? 1 : 0
              , e = 0 < (c.Nc & 4) ? c.ah : null
              , f = b.HL
              , g = !1
              , h = !1
              , m = !1
              , n = 0
              , q = b.us
              , p = b.data
              , v = 0
              , u = 0;
            let y;
            b = b.vs;
            if (0 != b) {
                var A = c.Ha;
                this.QN ? c.resetTransform() : (a = c.nh(a.la.ya),
                A.setTransform(a.m11, a.m21, a.m12, a.m22, a.m14, a.m24));
                a = !1;
                for (var x = new Path2D; v < b; )
                    switch (q[v++]) {
                    case 1:
                        var H = p[u++];
                        y = p[u++];
                        x.moveTo(H, y);
                        break;
                    case 2:
                        H = p[u++];
                        y = p[u++];
                        x.lineTo(H, y);
                        break;
                    case 3:
                        u++;
                        u++;
                        x.closePath();
                        break;
                    case 4:
                        c.$A(this.gy(p[u++], Math.min(p[u++] + d, 1), e));
                        n = p[u++] | 0;
                        A.lineWidth = n;
                        m = 0 == h;
                        g = !0;
                        break;
                    case 5:
                        c.Kh(this.gy(p[u++], Math.min(p[u++] + d, 1), e));
                        m = g;
                        h = !0;
                        break;
                    case 6:
                        g = !1;
                        c.$A(Eh);
                        A.lineWidth = 1;
                        break;
                    case 7:
                        h = !1;
                        c.Kh(Eh);
                        break;
                    case 8:
                        H = g && f && 1 == (n & 1);
                        a ? H || (A.translate(-.5, -.5),
                        a = !1) : H && (A.translate(.5, .5),
                        a = !0);
                        g && h ? m ? (A.stroke(x),
                        A.fill(x)) : (A.fill(x),
                        A.stroke(x)) : g ? A.stroke(x) : h && A.fill(x);
                        v < b - 1 && (x = new Path2D);
                        break;
                    default:
                        u = 0
                    }
            }
        }
        cc() {
            return 1005
        }
        gy(a, b, c) {
            if (null != c) {
                var d = this.UM;
                d.x = (a >> 16 & 255) / 255;
                d.y = (a >> 8 & 255) / 255;
                d.z = (a & 255) / 255;
                d.w = b;
                a = c.Db;
                c = c.offset;
                let e = d;
                d = e.x * a.x + c.x;
                b = e.y * a.y + c.y;
                let f = e.z * a.z + c.z;
                a = e.w * a.w + c.w;
                d = new E(0 > d ? 0 : 1 < d ? 1 : d,0 > b ? 0 : 1 < b ? 1 : b,0 > f ? 0 : 1 < f ? 1 : f,0 > a ? 0 : 1 < a ? 1 : a);
                return "rgba(" + ((255 * d.x | 0) & 255) + "," + ((255 * d.y | 0) & 255) + "," + ((255 * d.z | 0) & 255) + "," + d.w.toFixed(2) + ")"
            }
            a |= (255 * b | 0) << 24;
            c = lg.tr;
            return "#" + c[a >> 16 & 255] + c[a >> 8 & 255] + c[a & 255] + c[a >>> 24]
        }
    }
    Ce.g = !0;
    Ce.u = La;
    Object.assign(Ce.prototype, {
        j: Ce
    });
    class E {
        constructor(a, b, c, d) {
            this.x = a;
            this.y = b;
            this.z = c;
            this.w = d
        }
    }
    E.g = !0;
    Object.assign(E.prototype, {
        j: E
    });
    class Ge extends La {
        constructor() {
            super()
        }
        M(a) {
            let b = a.effect;
            a.P.ej(a.la.ya);
            a = a.P.yb.getContext();
            a.lineWidth = b.lineWidth;
            a.globalAlpha = b.yp;
            a.strokeStyle = "#ffffff";
            a.beginPath();
            a.arc(0, 0, b.W + b.lineWidth / 2, 0, 2 * Math.PI, !1);
            a.stroke();
            a.closePath()
        }
        cc() {
            return 905
        }
    }
    Ge.g = !0;
    Ge.u = La;
    Object.assign(Ge.prototype, {
        j: Ge
    });
    class ye extends La {
        constructor() {
            super()
        }
        M(a) {
            var b = a.effect;
            let c = a.P;
            var d = a.la
              , e = b.mb;
            if (e.ep()) {
                c.OA(0 < (e.flags & 8));
                a = e.image.data;
                var f = d.size
                  , g = f.x;
                f = f.y;
                c.ej(d.ya);
                d = b.Hn;
                var h = d.x;
                var m = d.y;
                var n = d.w
                  , q = d.G
                  , p = c.globalAlpha;
                0 < (c.Nc & 4) && (a = c.Rw(a, h, m, n, q),
                h = m = 0);
                0 < (c.Nc & 1) && 0 == c.hg && (a = c.Qw(a, h, m, n, q),
                h = m = 0,
                p = 1);
                d = 1 / c.fb.pl.m11 * c.FH;
                if (1 == b.hu && 1 == b.iu && 0 == b.offsetX && 0 == b.offsetY)
                    if (c.dd(p),
                    null != b.ru) {
                        var v = b.ru;
                        0 == v.C && v.D == q && (e = v.m,
                        b = v.A,
                        p = n - b,
                        g < e + p ? (v = g / (e + p),
                        g = e * v,
                        p *= v,
                        c.drawImage(a, h, m, e, q, 0, 0, g + d, f),
                        c.drawImage(a, h + b, m, n - b, q, g - d, 0, p, f)) : (c.drawImage(a, h, m, e, q, 0, 0, e, f),
                        c.drawImage(a, h + b, m, n - b, q, g - p, 0, p, f),
                        c.drawImage(a, h + e, m, v.A - v.m, q, e - d, 0, g - (e + p) + 2 * d, f)))
                    } else
                        c.drawImage(a, h, m, n, q, 0 - d, 0 - d, g + 2 * d, f + 2 * d);
                else {
                    c.dd(p);
                    h = e.size.x;
                    m = e.size.y;
                    f = b.hu;
                    var u = b.iu;
                    g = c.Ha;
                    g.save();
                    n = new Path2D;
                    n.rect(0, 0, h, m);
                    g.clip(n);
                    h = e.size.x;
                    m = e.size.y;
                    n = h / f;
                    q = m / u;
                    p = 1 / f;
                    v = 1 / u;
                    var y = b.offsetX
                      , A = b.offsetY;
                    b = y % 1;
                    0 > b && ++b;
                    b = -b;
                    var x = A % 1;
                    0 > x && ++x;
                    x = -x;
                    var H, C = n + 2 * d, Y = q + 2 * d;
                    if (0 < (e.flags & 4))
                        for (e = 1 == ((A | 0) & 1) ? 1 : -1,
                        0 <= A && (e *= -1),
                        A = x * q,
                        u = x / u; 1 > u; ) {
                            x = u + v;
                            let X = 1 == ((y | 0) & 1) ? -1 : 1;
                            0 <= y && (X *= -1);
                            u = b * n;
                            for (H = b / f; 1 > H; )
                                H += p,
                                g.save(),
                                g.scale(X, e),
                                0 < X ? 0 < e ? c.drawImage(a, 0, 0, h, m, u - d, A - d, C, Y) : c.drawImage(a, 0, 0, h, m, u - d, -A - q - d, C, Y) : 0 < e ? c.drawImage(a, 0, 0, h, m, -u - n - d, A - d, C, Y) : c.drawImage(a, 0, 0, h, m, -u - n - d, -A - q - d, C, Y),
                                g.restore(),
                                X = -X,
                                u += n;
                            e = -e;
                            A += q;
                            u = x
                        }
                    else
                        for (A = x * q,
                        u = x / u; 1 > u; ) {
                            x = u + v;
                            u = b * n;
                            for (H = b / f; 1 > H; )
                                H += p,
                                c.drawImage(a, 0, 0, h, m, u - d, A - d, n + 2 * d, q + 2 * d),
                                u += n;
                            A += q;
                            u = x
                        }
                    g.restore()
                }
            }
        }
        cc() {
            return 205
        }
        pg() {
            return 401
        }
    }
    ye.g = !0;
    ye.u = La;
    Object.assign(ye.prototype, {
        j: ye
    });
    class $a {
        constructor(a, b, c, d, e, f, g, h, m, n, q, p, v, u, y, A) {
            this.m11 = a;
            this.m12 = b;
            this.m13 = c;
            this.m14 = d;
            this.m21 = e;
            this.m22 = f;
            this.m23 = g;
            this.m24 = h;
            this.m31 = m;
            this.m32 = n;
            this.m33 = q;
            this.m34 = p;
            this.m41 = v;
            this.m42 = u;
            this.m43 = y;
            this.m44 = A
        }
    }
    $a.g = !0;
    Object.assign($a.prototype, {
        j: $a
    });
    class ii {
    }
    class Ef {
        static hy(a) {
            return Ef.mx[a >> 2]
        }
    }
    class Sb {
        constructor() {
            this.Fh = this.L = this.P = null;
            this.hx = [];
            this.Oc = []
        }
        Qa(a) {
            this.P = a;
            this.L = this.P.L;
            this.createProgram() && this.Pf()
        }
        use() {
            this.P.Ex != this && (this.P.Ex = this,
            this.L.useProgram(this.Fh))
        }
        drawArrays(a, b, c) {
            null == c && (c = 0);
            if (0 != a) {
                for (var d = 0, e = this.hx; d < e.length; )
                    e[d++].bind();
                this.L.drawArrays(b, c, a)
            }
        }
        Rd(a, b) {
            var c, d;
            null == d && (d = !1);
            null == c && (c = -1);
            if (-1 == a)
                this.Oc.push(new jb(a,null,!1,b,c));
            else {
                var e = Fa.find(this.Oc, function(f) {
                    return f.location == a
                });
                e.type = b;
                e.usage = c;
                e.normalize = d
            }
        }
        tf(a, b) {
            for (var c = 0, d = 0, e = this.Oc; d < e.length; ) {
                var f = e[d];
                ++d;
                f.location > c && (c = f.location)
            }
            c = new $g(c + 1);
            d = 0;
            for (e = this.Oc; d < e.length; )
                f = e[d],
                ++d,
                c.yH(f.location, f.type, f.usage, f.normalize);
            c.seal();
            a = new id(this.L,a,c,b);
            this.hx.push(a);
            return a
        }
        createProgram() {
            let a = this.L
              , b = this.pz(35633, this.Af())
              , c = this.pz(35632, this.yf());
            this.Fh = a.createProgram();
            a.attachShader(this.Fh, b);
            a.attachShader(this.Fh, c);
            a.linkProgram(this.Fh);
            return !0
        }
        pz(a, b) {
            let c = this.L;
            a = this.L.createShader(a);
            c.shaderSource(a, b);
            c.compileShader(a);
            return a
        }
        Af() {
            return null
        }
        yf() {
            return null
        }
        re(a) {
            return this.L.getAttribLocation(this.Fh, a)
        }
        getUniformLocation(a) {
            return this.L.getUniformLocation(this.Fh, a)
        }
        Vh(a, b) {
            let c = Sb.GB;
            c[0] = b.m11;
            c[4] = b.m12;
            c[8] = b.m13;
            c[12] = b.m14;
            c[1] = b.m21;
            c[5] = b.m22;
            c[9] = b.m23;
            c[13] = b.m24;
            c[2] = b.m31;
            c[6] = b.m32;
            c[10] = b.m33;
            c[14] = b.m34;
            c[3] = b.m41;
            c[7] = b.m42;
            c[11] = b.m43;
            c[15] = b.m44;
            this.L.uniformMatrix4fv(a, !1, Sb.GB)
        }
        QB(a, b) {
            this.L.activeTexture(33984);
            this.L.bindTexture(3553, b);
            this.L.uniform1i(a, 0)
        }
        Pf() {}
    }
    Sb.g = !0;
    Object.assign(Sb.prototype, {
        j: Sb
    });
    class jb {
        constructor(a, b, c, d, e) {
            this.location = a;
            this.name = b;
            this.normalize = c;
            this.type = d;
            this.usage = e
        }
    }
    jb.g = !0;
    Object.assign(jb.prototype, {
        j: jb
    });
    class Ff extends Sb {
        constructor(a) {
            super();
            this.Qa(a);
            this.Rd(this.fo, 17);
            this.Fa = this.tf(4, 2);
            this.Fa.setData(this.fo, [0, 1, 1, 1, 0, 0, 1, 0]);
            this.gd = []
        }
        FI(a) {
            this.use();
            var b = this.P.nh(this.P.mh(1).Op.ya);
            this.Vh(this.wH, b);
            for (this.L.uniform4f(this.vH, 0, 0, 0, 0); 0 < this.gd.length; )
                this.gd.pop();
            for (b = 0; b < a.length; ) {
                let c = a[b];
                ++b;
                this.gd.push(c.x);
                this.gd.push(c.y)
            }
            this.Fa.resize(this.gd.length);
            this.Fa.setData(this.fo, this.gd);
            this.P.L.stencilFunc(519, 1, 255);
            this.P.L.stencilOp(7680, 7680, 7681);
            this.drawArrays(a.length, 6);
            this.P.L.stencilFunc(514, 1, 255)
        }
        Af() {
            return "uniform mat4 u_m;attribute vec2 a_f;void main(){gl_Position=u_m*vec4(a_f,0,1);}"
        }
        yf() {
            return "precision mediump float;uniform vec4 u_c;void main(){gl_FragColor=u_c;}"
        }
        Pf() {
            this.fo = this.re("a_f");
            this.Oc.push(new jb(this.fo,"a_f",!1,-1,-1));
            this.wH = this.getUniformLocation("u_m");
            this.vH = this.getUniformLocation("u_c")
        }
    }
    Ff.g = !0;
    Ff.u = Sb;
    Object.assign(Ff.prototype, {
        j: Ff
    });
    class ah {
        constructor(a, b, c) {
            this.type = a;
            this.location = b;
            this.usage = c;
            this.Mt = a % 4 + 1;
            this.Nk = this.Mt * Ef.mx[a >> 2];
            this.offset = 0;
            this.Lz = !1
        }
    }
    ah.g = !0;
    Object.assign(ah.prototype, {
        j: ah
    });
    class id extends sf {
        constructor(a, b, c, d) {
            super(b, c.ol, d);
            this.format = c;
            this.L = a;
            this.hs = a.createBuffer();
            this.data = new ArrayBuffer(this.Nk);
            this.kr = [];
            this.Xy()
        }
        H() {
            this.L.deleteBuffer(this.hs);
            this.data = this.kr = this.L = this.hs = null
        }
        resize(a) {
            return super.resize(a) ? (this.data = new ArrayBuffer(this.Nk),
            this.Xy(),
            !0) : !1
        }
        Ay(a) {
            return this.kr[a >> 2]
        }
        bind() {
            let a = this.L;
            a.bindBuffer(34962, this.hs);
            let b = this.format.ol;
            var c = this.format.attributes;
            let d = c.K
              , e = 0;
            for (c = c.Z; e < c; ) {
                let f = d[e++];
                -1 != f.location && (a.enableVertexAttribArray(f.location),
                a.vertexAttribPointer(f.location, f.Mt, id.HJ[f.type >> 2], f.Lz, b, f.offset))
            }
            this.ri && (a.bufferData(34962, this.data, 35040 + 4 * this.BO),
            this.ri = !1)
        }
        dJ(a) {
            var b = 0;
            null == b && (b = 0);
            return new Gf(this,a,b)
        }
        Yx() {
            var a = [];
            let b = Array(this.format.Gt + 1);
            for (var c = 0, d = b.length; c < d; )
                b[c++] = null;
            if (0 == a.length)
                for (a = this.format.iterator(); a.bb(); )
                    c = a.next(),
                    -1 != c.location && (b[c.location] = this.dJ(c.location));
            else
                for (c = 0; c < a.length; )
                    d = a[c++],
                    b[d] = new Gf(this,d,0);
            return b
        }
        setData(a, b, c) {
            null == c && (c = 0);
            this.ri = !0;
            0 == c && (c = b.length);
            var d = this.format.get(a);
            a = d.Mt;
            var e = Ef.hy(d.type);
            let f = this.format.ol / e | 0;
            e = d.offset / e | 0;
            d = this.Ay(d.type);
            let g = 0;
            for (; g < c; )
                d[e + (g / a | 0) * f + g % a] = b[g],
                ++g
        }
        Xy() {
            let a = this.data;
            this.kr = [new Int8Array(a), new Uint8Array(a), new Int16Array(a), new Uint16Array(a), new Float32Array(a), new Uint32Array(a)]
        }
    }
    id.g = !0;
    id.u = sf;
    Object.assign(id.prototype, {
        j: id
    });
    class Gf {
        constructor(a, b, c) {
            this.Va = a;
            let d = a.format;
            b = d.get(b);
            this.view = a.Ay(b.type);
            a = Ef.hy(b.type);
            this.stride = d.ol / a | 0;
            this.start = this.i = (b.offset / a | 0) + c * this.stride;
            this.Va.ri = !0
        }
        aB(a, b) {
            let c = this.view
              , d = this.i
              , e = this.stride;
            c[d + 0 * e] = 0;
            c[d + 0 * e + 1] = 1;
            c[d + e] = 1;
            c[d + e + 1] = a;
            c[d + 2 * e] = b;
            c[d + 2 * e + 1] = 0;
            this.i = d + 3 * e
        }
    }
    Gf.g = !0;
    Object.assign(Gf.prototype, {
        j: Gf
    });
    class Fh {
        static nu(a) {
            let b = 0
              , c = a.length;
            for (; b < c; ) {
                let d = a[b++];
                null != d && (d.i = d.start,
                d.Va.ri = !0)
            }
        }
    }
    class $g {
        constructor(a) {
            this.ol = this.Gt = 0;
            this.attributes = new rb(a);
            this.attributes.Qa(a, null)
        }
        get(a) {
            return this.attributes.K[a]
        }
        iterator() {
            return this.attributes.iterator()
        }
        yH(a, b, c, d) {
            null == d && (d = !1);
            null == c && (c = -1);
            b = new ah(b,a,c);
            this.Gt = Math.max(this.Gt, a);
            b.Lz = d;
            -1 == a ? this.attributes.au(b) : this.attributes.K[a] = b;
            this.ol += b.Nk
        }
        seal() {
            this.attributes.EL();
            let a = this.attributes.Z
              , b = 1;
            for (; b < a; ) {
                let c = this.attributes.K[b - 1];
                this.attributes.K[b].offset = c.offset + c.Nk;
                ++b
            }
        }
    }
    $g.g = !0;
    Object.assign($g.prototype, {
        j: $g
    });
    class Oa extends Sb {
        constructor() {
            super();
            this.qv = this.pg();
            this.Lx = this.cc()
        }
        pg() {
            return 201
        }
        cc() {
            throw 9;
        }
    }
    Oa.g = !0;
    Oa.ob = [ae];
    Oa.u = Sb;
    Object.assign(Oa.prototype, {
        j: Oa
    });
    class wb extends cd {
        constructor() {
            super("webgl");
            this.L = null;
            this.Sj = 1;
            this.ah = new Xb;
            this.Tr = this.stencilMask = this.Ex = null;
            this.iI = new rb
        }
        Bn(a) {
            super.Bn(a);
            this.L = a.getContext();
            this.$k()
        }
        clear(a) {
            super.clear();
            null == a && (a = this.clearColor);
            this.L.clearColor(a.x, a.y, a.z, a.w);
            this.L.clear(17664)
        }
        yh() {
            if (!super.yh() || null == this.L)
                return !1;
            this.$k();
            return !0
        }
        fh() {
            super.fh()
        }
        gj(a, b, c, d) {
            super.gj(a, b, c, d);
            if (0 == a && 0 == b && 1 == c && 1 == d)
                this.L.viewport(0, 0, this.yb.size.x, this.yb.size.y),
                this.L.disable(3089);
            else {
                d = this.yb;
                var e = this.viewport;
                a = d.size.x * e.x | 0;
                b = d.size.x * e.w | 0;
                c = d.size.y * e.G | 0;
                d = (this.yb.size.y | 0) - c - (d.size.y * e.y | 0);
                this.L.viewport(a, d, b, c);
                this.L.enable(3089);
                this.L.scissor(a, d, b, c)
            }
        }
        Hu(a) {
            this.Sj = a.zj
        }
        KA(a) {
            a.Nl ? (this.L.enable(2884),
            this.L.frontFace(a.pH ? 2305 : 2304),
            this.L.cullFace(1029)) : this.L.disable(2884)
        }
        JA(a) {
            a.Nl ? (this.L.enable(2929),
            this.L.depthFunc(wb.pI[a.Cw])) : (this.L.disable(2929),
            this.L.depthFunc(513))
        }
        uu(a) {
            let b = 0
              , c = 0;
            if (a.UL)
                switch (a.hg) {
                case 0:
                    b = 1;
                    c = 0;
                    break;
                case 1:
                    b = 1;
                    c = 771;
                    break;
                case 2:
                    b = 774;
                    c = 771;
                    break;
                case 3:
                    b = 770;
                    c = 772;
                    break;
                case 4:
                    b = 1;
                    c = 769;
                    break;
                case 5:
                    b = wb.po[a.gB],
                    c = wb.po[a.Hx]
                }
            else
                switch (a.hg) {
                case 0:
                    b = 1;
                    c = 0;
                    break;
                case 1:
                    b = 770;
                    c = 771;
                    break;
                case 2:
                    b = 774;
                    c = 771;
                    break;
                case 3:
                    c = b = 1;
                    break;
                case 4:
                    b = 770;
                    c = 1;
                    break;
                case 5:
                    b = wb.po[a.gB],
                    c = wb.po[a.Hx]
                }
            this.L.enable(3042);
            this.L.blendFunc(b, c);
            let d;
            switch (a.blendEquation) {
            case 1:
                d = 32774;
                break;
            case 2:
                d = 32778;
                break;
            case 3:
                d = 32779
            }
            this.L.blendEquation(d)
        }
        wu(a) {
            this.ah = a.transform
        }
        Fu(a) {
            a = a.ss;
            null != this.Tr && null == a && this.L.disable(2960);
            null == this.Tr && null != a && (this.L.clearStencil(0),
            this.L.enable(2960),
            null == this.stencilMask && (this.stencilMask = new Ff(this)),
            this.stencilMask.FI(a));
            this.Tr = a
        }
        Ds(a) {
            if (0 == this.XK)
                super.Ds(a);
            else {
                var b = a.iterator()
                  , c = b.K[b.Wd++]
                  , d = this.iI;
                d.af(a.Z);
                d.clear();
                var e = d.K[d.Z++] = c;
                a = c.gp;
                var f = c.effect;
                f.update(this);
                this.info.effect = f;
                for (this.info.Xw = d; b.Wd < b.Ff; ) {
                    c = b.K[b.Wd++];
                    c.effect.update(this);
                    let g = f.type == c.effect.type;
                    if (g = (g = (g = (g = g && f.Ja == c.effect.Ja) && (a & 3) == (c.gp & 3)) && (0 < (a & 1) ? e.nj[0].Ja == c.nj[0].Ja : !0)) && (0 < (a & 2) ? e.nj[1].Ja == c.nj[1].Ja : !0))
                        d.K[d.Z++] = c;
                    else {
                        if (1 == d.Z)
                            this.Vj(d.xa());
                        else if (a = d.K[0],
                        a = this.ky(a.effect.type, a.type),
                        null != a)
                            a.M(this.info);
                        else
                            for (a = d.K,
                            f = 0,
                            e = d.Z; f < e; )
                                this.Vj(a[f++]);
                        d.clear();
                        e = d.K[d.Z++] = c;
                        a = c.gp;
                        f = c.effect;
                        f.update(this);
                        this.info.effect = f;
                        this.info.Xw = d
                    }
                }
                if (0 < d.Z)
                    if (1 == d.Z)
                        this.Vj(d.xa());
                    else if (b = d.K[0],
                    b = this.ky(b.effect.type, b.type),
                    null != b)
                        b.M(this.info);
                    else
                        for (b = d.K,
                        c = 0,
                        d = d.Z; c < d; )
                            this.Vj(b[c++])
            }
        }
        jt(a) {
            return new Hf(this,a)
        }
    }
    wb.g = !0;
    wb.u = cd;
    Object.assign(wb.prototype, {
        j: wb
    });
    class Hf extends hd {
        constructor(a, b) {
            super(a, b);
            this.handle = null;
            this.L = a.L
        }
        H() {
            null == this.parent && this.L.deleteTexture(this.handle);
            this.L = this.handle = null;
            super.H()
        }
        zu(a) {
            super.zu(a);
            null != this.handle && (null == this.parent && this.L.deleteTexture(this.handle),
            this.handle = null);
            null == this.handle && (this.handle = this.L.createTexture());
            this.L.bindTexture(3553, this.handle);
            try {
                var b = a.data instanceof ImageBitmap
            } catch (d) {
                b = !1
            }
            b || this.L.pixelStorei(37441, 1);
            this.L.pixelStorei(37440, 1);
            b = 0 < (this.flags & 2) ? 0 < (this.flags & 4) ? 33648 : 10497 : 33071;
            let c = 0 < (this.flags & 8) ? 9729 : 9728;
            this.L.texParameteri(3553, 10242, b);
            this.L.texParameteri(3553, 10243, b);
            this.L.texParameteri(3553, 10241, c);
            this.L.texParameteri(3553, 10240, c);
            this.L.texImage2D(3553, 0, 6408, 6408, 5121, a.data);
            0 < (this.flags & 240) && (a = 9984,
            0 < (this.flags & 32) && (a = 9985),
            0 < (this.flags & 64) && (a = 9986),
            0 < (this.flags & 128) && (a = 9987),
            this.L.texParameteri(3553, 10241, a),
            this.L.generateMipmap(3553));
            a = 0;
            for (b = this.children; a < b.length; )
                b[a++].handle = this.handle;
            this.L.bindTexture(3553, null)
        }
        sa(a, b) {
            super.sa(a, b);
            a.handle = this.handle
        }
    }
    Hf.g = !0;
    Hf.u = hd;
    Object.assign(Hf.prototype, {
        j: Hf
    });
    class If extends ca {
        constructor() {
            super()
        }
        ra() {
            return 2005
        }
    }
    If.g = !0;
    If.u = ca;
    Object.assign(If.prototype, {
        j: If
    });
    class Jf extends ca {
        constructor() {
            super();
            new bh(null,null,null,null);
            new ch(null,null,null,null,null);
            this.Os = new dh(null,null,null)
        }
        ra() {
            return 1905
        }
    }
    Jf.g = !0;
    Jf.u = ca;
    Object.assign(Jf.prototype, {
        j: Jf
    });
    class dh {
        constructor() {
            new E(0,0,0,1);
            new E(0,0,-1,1);
            new E(0,0,0,1)
        }
    }
    dh.g = !0;
    Object.assign(dh.prototype, {
        j: dh
    });
    class ch {
        constructor() {
            new E(1,0,0,1);
            new E(ji,0,1,1);
            new E(1,1,1,1);
            new E(1,1,1,1);
            new E(1,1,1,1)
        }
    }
    ch.g = !0;
    Object.assign(ch.prototype, {
        j: ch
    });
    class bh {
        constructor() {
            new E(0,0,0,1);
            new E(0,0,0,1);
            new E(0,0,0,1);
            new E(0,0,0,1)
        }
    }
    bh.g = !0;
    Object.assign(bh.prototype, {
        j: bh
    });
    class Kf extends ca {
        constructor(a) {
            super();
            this.Fh = a
        }
        H() {}
        ra() {
            return 805
        }
    }
    Kf.g = !0;
    Kf.u = ca;
    Object.assign(Kf.prototype, {
        j: Kf
    });
    class re extends Oa {
        constructor() {
            super();
            this.Lg = this.Fa = null;
            this.size = 0
        }
        Qa(a) {
            super.Qa(a);
            this.Rd(this.Ee, 17);
            this.Rd(this.Aj, 13);
            this.Rd(ii.aF, 7);
            this.Fa = this.tf(600, 2)
        }
        M(a) {
            this.use();
            var b = a.P;
            let c = a.effect;
            var d = c.mb;
            if (d.ep()) {
                var e = c.Sf.se
                  , f = e.Z / 5 | 0;
                if (0 != f) {
                    f > this.size && (this.size = f,
                    this.Fa.resize(6 * f),
                    this.Lg = this.Fa.Yx());
                    a = b.nh(a.la.ya);
                    this.Vh(this.Ol, a);
                    this.QB(this.Nr, d.handle);
                    a = d.size;
                    this.L.uniform2f(this.Pr, a.x, a.y);
                    a = this.Lg[this.Ee];
                    var g = this.Lg[this.Aj];
                    if (c.clip) {
                        this.L.uniform1f(this.De, 0);
                        this.L.uniform1i(this.Fw, !1);
                        Fh.nu(this.Lg);
                        this.L.enable(2960);
                        this.L.stencilFunc(519, 1, 255);
                        this.L.stencilOp(7680, 7680, 7681);
                        var h = c.CJ()
                          , m = h.x;
                        h = h.y;
                        var n = a.view
                          , q = a.i
                          , p = a.stride;
                        n[q] = 0;
                        n[q + 1] = h;
                        q += p;
                        n[q] = m;
                        n[q + 1] = 0;
                        q += p;
                        n[q] = 0;
                        n[q + 1] = 0;
                        a.i = q + p;
                        n = a.view;
                        q = a.i;
                        p = a.stride;
                        n[q] = 0;
                        n[q + 1] = h;
                        q += p;
                        n[q] = m;
                        n[q + 1] = h;
                        q += p;
                        n[q] = m;
                        n[q + 1] = 0;
                        a.i = q + p;
                        g.aB(0, 0);
                        g.aB(1, 1);
                        this.L.uniform1f(this.De, 0);
                        this.drawArrays(6, 4);
                        this.L.stencilFunc(514, 1, 255)
                    }
                    Fh.nu(this.Lg);
                    this.L.uniform1f(this.De, b.Sj);
                    b = 0 < (b.Nc & 4) ? b.ah : null;
                    this.L.uniform1i(this.Fw, null != b);
                    null != b ? (m = b.Db,
                    this.L.uniform4f(this.Qg, m.x, m.y, m.z, m.w),
                    b = b.offset,
                    this.L.uniform4f(this.Rg, b.x, b.y, b.z, b.w)) : (this.L.uniform4f(this.Qg, 1, 1, 1, 1),
                    b = new E(0,0,0,0),
                    this.L.uniform4f(this.Rg, b.x, b.y, b.z, b.w));
                    d = d.Mb.ak;
                    e = e.K;
                    b = 0;
                    for (m = 5 * f; b < m; ) {
                        var v = e[b++];
                        h = e[b++];
                        n = e[b++];
                        q = h + e[b++];
                        p = n + e[b++];
                        var u = a.view
                          , y = a.i
                          , A = a.stride;
                        u[y] = h;
                        u[y + 1] = p;
                        y += A;
                        u[y] = q;
                        u[y + 1] = n;
                        y += A;
                        u[y] = h;
                        u[y + 1] = n;
                        a.i = y + A;
                        u = a.view;
                        y = a.i;
                        A = a.stride;
                        u[y] = h;
                        u[y + 1] = p;
                        y += A;
                        u[y] = q;
                        u[y + 1] = p;
                        y += A;
                        u[y] = q;
                        u[y + 1] = n;
                        a.i = y + A;
                        p = d[v].pd;
                        h = p.x;
                        n = p.y;
                        q = h + p.w;
                        p = n + p.G;
                        v = g.view;
                        u = g.i;
                        y = g.stride;
                        v[u + 0 * y] = h;
                        v[u + 0 * y + 1] = p;
                        v[u + y] = q;
                        v[u + y + 1] = n;
                        v[u + 2 * y] = h;
                        v[u + 2 * y + 1] = n;
                        g.i = u + 3 * y;
                        v = g.view;
                        u = g.i;
                        y = g.stride;
                        v[u + 0 * y] = h;
                        v[u + 0 * y + 1] = p;
                        v[u + y] = q;
                        v[u + y + 1] = p;
                        v[u + 2 * y] = q;
                        v[u + 2 * y + 1] = n;
                        g.i = u + 3 * y
                    }
                    this.drawArrays(6 * f, 4);
                    c.clip && this.L.disable(2960)
                }
            }
        }
        cc() {
            return 705
        }
        pg() {
            return 401
        }
        Af() {
            return "attribute vec4 a_position;\nattribute vec2 a_tcoord;\n\nvarying vec2 v_tcoord;\n\nuniform vec2 u_textureSize;\nuniform mat4 u_matrix;\n\nvoid main()\n{\n\tgl_Position = u_matrix * a_position;\n\tv_tcoord = vec2(a_tcoord.x, u_textureSize.y - a_tcoord.y) / u_textureSize;  \n}"
        }
        yf() {
            return "precision mediump float;\n\nuniform sampler2D u_image;\nuniform bool u_transformColors;\nuniform vec4 u_colorMultiplier;\nuniform vec4 u_colorOffset;\nuniform float u_alpha;\n\nvarying vec2 v_tcoord;\n\nvoid main()\n{\n\tvec4 color = texture2D(u_image, v_tcoord);\n\tif (u_transformColors)\n\t{\n\t\tfloat a = color.a;\n\t\tfloat r = color.r / (a + 1e-6);\n\t\tfloat g = color.g / (a + 1e-6);\n\t\tfloat b = color.b / (a + 1e-6);\n\t\tr = r * u_colorMultiplier.r + u_colorOffset.r;\n\t\tg = g * u_colorMultiplier.g + u_colorOffset.g;\n\t\tb = b * u_colorMultiplier.b + u_colorOffset.b;\n\t\ta = a * u_colorMultiplier.a + u_colorOffset.a;\n\t\tcolor = vec4(r * a, g * a, b * a, a);\n\t}\n\tgl_FragColor = color * u_alpha;\n}"
        }
        Pf() {
            this.Ee = this.re("a_position");
            this.Oc.push(new jb(this.Ee,"a_position",!1,-1,-1));
            this.Aj = this.re("a_tcoord");
            this.Oc.push(new jb(this.Aj,"a_tcoord",!1,-1,-1));
            this.Pr = this.getUniformLocation("u_textureSize");
            this.Ol = this.getUniformLocation("u_matrix");
            this.Nr = this.getUniformLocation("u_image");
            this.Fw = this.getUniformLocation("u_transformColors");
            this.Qg = this.getUniformLocation("u_colorMultiplier");
            this.Rg = this.getUniformLocation("u_colorOffset");
            this.De = this.getUniformLocation("u_alpha")
        }
    }
    re.g = !0;
    re.u = Oa;
    Object.assign(re.prototype, {
        j: re
    });
    class ve extends Oa {
        constructor() {
            super();
            this.Fa = null
        }
        Qa(a) {
            super.Qa(a);
            this.Rd(this.md, 17);
            this.Rd(this.Rr, 18);
            this.Fa = this.tf(32, 2)
        }
        M(a) {
            this.use();
            let b = a.effect;
            a = a.P.Bm(a.la.ya);
            this.Vh(this.bi, a);
            this.L.uniform1f(this.di, 0);
            a = b.W;
            let c = 0
              , d = b.points.length;
            for (; c < d; ) {
                let e = c++;
                this.L.uniform1f(this.De, b.Sl[e]);
                this.GI(b.points[e], b.Zg[e], a)
            }
        }
        GI(a, b, c) {
            a = this.Zl(a, c, !1);
            for (var d = 0, e = a.length; d < e; )
                a[d] += c / 2,
                d += 2;
            this.Fa.resize(a.length);
            this.Fa.setData(this.md, a);
            c = [];
            for (d = 0; d < b.length; )
                e = b[d],
                ++d,
                c.push(e.x),
                c.push(e.y),
                c.push(e.z),
                c.push(e.x),
                c.push(e.y),
                c.push(e.z),
                c.push(e.x),
                c.push(e.y),
                c.push(e.z),
                c.push(e.x),
                c.push(e.y),
                c.push(e.z),
                c.push(e.x),
                c.push(e.y),
                c.push(e.z),
                c.push(e.x),
                c.push(e.y),
                c.push(e.z);
            this.Fa.setData(this.Rr, c);
            this.drawArrays(a.length, 4)
        }
        cc() {
            return 605
        }
        Zl(a, b, c) {
            let d = (new eh).em(a, c)
              , e = a.length;
            if (0 == e)
                return [];
            a = a.slice();
            c && (a.push(a[0]),
            d.push(d[0]),
            d.push(d[1]),
            d.push(d[2]),
            ++e);
            c = [];
            let f = 0
              , g = 1;
            for (; g < e; ) {
                var h = a[f]
                  , m = a[g]
                  , n = 3 * f
                  , q = d[n++];
                let p = d[n++];
                n = Math.min(2, d[n++]);
                n *= b;
                let v = h.x + q * n
                  , u = h.y + p * n
                  , y = h.x - q * n;
                h = h.y - p * n;
                n = 3 * g;
                q = d[n++];
                p = d[n++];
                n = Math.min(2, d[n++]);
                n *= b;
                let A = m.x + q * n
                  , x = m.y + p * n;
                q = m.x - q * n;
                m = m.y - p * n;
                c.push(A);
                c.push(x);
                c.push(y);
                c.push(h);
                c.push(v);
                c.push(u);
                c.push(A);
                c.push(x);
                c.push(q);
                c.push(m);
                c.push(y);
                c.push(h);
                ++f;
                ++g
            }
            return c
        }
        Af() {
            return "attribute vec2 a_vertexPosition;\nattribute vec3 a_vertexColor;\n\nvarying vec3 v_vertexColor;\n\nuniform float u_zNDC;\nuniform mat4 u_camera;\n\nvoid main()\n{\n\tv_vertexColor = a_vertexColor;\n\tgl_Position = u_camera * vec4(a_vertexPosition, u_zNDC, 1.0);\n}"
        }
        yf() {
            return "precision mediump float;\n\nvarying vec3 v_vertexColor;\n\nuniform float u_alpha;\n\nvoid main()\n{\n\tgl_FragColor = vec4(v_vertexColor * u_alpha, u_alpha);\n}"
        }
        Pf() {
            this.md = this.re("a_vertexPosition");
            this.Oc.push(new jb(this.md,"a_vertexPosition",!1,-1,-1));
            this.Rr = this.re("a_vertexColor");
            this.Oc.push(new jb(this.Rr,"a_vertexColor",!1,-1,-1));
            this.di = this.getUniformLocation("u_zNDC");
            this.bi = this.getUniformLocation("u_camera");
            this.De = this.getUniformLocation("u_alpha")
        }
    }
    ve.g = !0;
    ve.u = Oa;
    Object.assign(ve.prototype, {
        j: ve
    });
    class eh {
        constructor() {
            this.Oi = new E(0,0,0,1);
            this.zB = new E(0,0,0,1);
            this.zp = new E(0,0,0,1);
            this.xk = new E(0,0,0,1)
        }
        em(a, b) {
            function c(v, u) {
                f.push(v.x);
                f.push(v.y);
                f.push(u)
            }
            function d(v, u, y, A, x) {
                v.x = y.x + A.x;
                v.y = y.y + A.y;
                A = Math.sqrt(v.x * v.x + v.y * v.y);
                0 < A ? (v.x /= A,
                v.y /= A) : (v.x = 0,
                v.y = 0);
                A = v.x;
                u.x = -v.y;
                u.y = A;
                return x / (u.x * -y.y + u.y * y.x)
            }
            var e = null;
            let f = [];
            if (b) {
                a = a.slice();
                var g = a[0];
                a.push(new E(g.x,g.y,0,1))
            }
            g = a.length;
            for (var h = 1; h < g; ) {
                var m = h++
                  , n = a[m - 1]
                  , q = a[m]
                  , p = m < a.length - 1 ? a[m + 1] : null;
                let v = q.x - n.x;
                n = q.y - n.y;
                let u = Math.sqrt(v * v + n * n);
                this.xk = new E(v / u,n / u,0,1);
                null == e && (e = this.xk,
                e = new E(-e.y,e.x,0,1));
                1 == m && c(e, 1);
                null == p ? (e = this.xk,
                e = new E(-e.y,e.x,0,1),
                c(e, 1)) : (m = p.x - q.x,
                q = p.y - q.y,
                p = Math.sqrt(m * m + q * q),
                this.zp = new E(m / p,q / p,0,1),
                q = d(this.zB, this.Oi, this.xk, this.zp, 1),
                c(this.Oi, q))
            }
            b && 2 < a.length && (e = a[g - 2],
            b = a[0],
            a = a[1],
            h = b.x - e.x,
            e = b.y - e.y,
            q = Math.sqrt(h * h + e * e),
            this.xk = new E(h / q,e / q,0,1),
            h = a.x - b.x,
            a = a.y - b.y,
            b = Math.sqrt(h * h + a * a),
            this.zp = new E(h / b,a / b,0,1),
            a = d(this.zB, this.Oi, this.xk, this.zp, 1),
            f[0] = this.Oi.x,
            f[1] = this.Oi.y,
            f[2] = a,
            f[3 * g - 3] = this.Oi.x,
            f[3 * g - 2] = this.Oi.y,
            f[3 * g - 1] = a,
            f.pop(),
            f.pop(),
            f.pop());
            return f
        }
    }
    eh.g = !0;
    Object.assign(eh.prototype, {
        j: eh
    });
    class se extends Oa {
        constructor() {
            super();
            this.Fa = null
        }
        Qa(a) {
            super.Qa(a);
            this.Rd(this.Ee, 17);
            this.Fa = this.tf(600, 2);
            this.Fa = this.tf(4, 2);
            this.Fa.setData(this.Ee, [0, 1, 1, 1, 0, 0, 1, 0])
        }
        M(a) {
            this.use();
            var b = a.la
              , c = a.effect.color;
            let d = c.w;
            this.L.uniform4f(this.uH, c.x * d, c.y * d, c.z * d, d);
            a = a.P;
            c = a.nh(b.ya);
            this.Vh(this.Ol, c);
            this.L.uniform1f(this.De, a.Sj);
            c = b.size;
            this.L.uniform2f(this.Or, c.x, c.y);
            this.L.uniform1f(this.di, a.By(b));
            b = 0 < (a.Nc & 4) ? a.ah : null;
            null != b ? (a = b.Db,
            this.L.uniform4f(this.Qg, a.x, a.y, a.z, a.w),
            b = b.offset,
            this.L.uniform4f(this.Rg, b.x, b.y, b.z, b.w)) : (this.L.uniform4f(this.Qg, 1, 1, 1, 1),
            b = new E(0,0,0,0),
            this.L.uniform4f(this.Rg, b.x, b.y, b.z, b.w));
            this.drawArrays(4, 5)
        }
        cc() {
            return 1205
        }
        pg() {
            return 401
        }
        Af() {
            return "uniform mat4 u_matrix;\nuniform vec2 u_size;\nuniform float u_zNDC;\n\nattribute vec2 a_position;\n\nvoid main()\n{\n\tgl_Position = u_matrix * vec4(a_position * u_size, u_zNDC, 1.0);\n}"
        }
        yf() {
            return "precision mediump float;\n\nuniform float u_alpha;\nuniform vec4 u_Color;\nuniform vec4 u_colorMultiplier;\nuniform vec4 u_colorOffset;\n\nvoid main()\n{\n\tvec4 color = u_Color;\n\tfloat alpha = color.a;\n\tcolor = vec4(color.rgb / alpha, alpha) * u_colorMultiplier + u_colorOffset;\n\tcolor = vec4(color.rgb * color.a, color.a);\n\tgl_FragColor = color * u_alpha;\n}"
        }
        Pf() {
            this.Ee = this.re("a_position");
            this.Oc.push(new jb(this.Ee,"a_position",!1,-1,-1));
            this.Ol = this.getUniformLocation("u_matrix");
            this.Or = this.getUniformLocation("u_size");
            this.di = this.getUniformLocation("u_zNDC");
            this.De = this.getUniformLocation("u_alpha");
            this.uH = this.getUniformLocation("u_Color");
            this.Qg = this.getUniformLocation("u_colorMultiplier");
            this.Rg = this.getUniformLocation("u_colorOffset")
        }
    }
    se.g = !0;
    se.u = Oa;
    Object.assign(se.prototype, {
        j: se
    });
    class te extends Oa {
        constructor() {
            super();
            this.Lg = this.Fa = null
        }
        Qa(a) {
            super.Qa(a);
            this.Rd(this.Qr, 17);
            this.Fa = this.tf(4, 1);
            this.Lg = this.Fa.Yx()
        }
        M(a) {
            this.use();
            var b = a.P
              , c = a.effect;
            if (!(b.Sj < b.oK)) {
                this.L.uniform1f(this.di, 0);
                var d = 0
                  , e = 0
                  , f = 1
                  , g = 1
                  , h = c.color
                  , m = h.w;
                this.L.uniform4f(this.ci, h.x * m, h.y * m, h.z * m, m);
                this.L.uniform1f(this.De, b.Sj);
                null != c.Zp && (g = a.P.yb.size,
                c = c.Zp,
                d = c.m / g.x,
                e = c.C / g.y,
                f = (c.A - c.m) / g.x,
                g = (c.D - c.C) / g.y);
                e = 1 - g - e;
                Fh.nu(this.Lg);
                c = this.Lg[this.Qr];
                a = c.view;
                b = c.i;
                h = c.stride;
                a[b] = d;
                a[b + 1] = e;
                b += h;
                a[b] = d + f;
                a[b + 1] = e;
                b += h;
                a[b] = d;
                a[b + 1] = e + g;
                b += h;
                a[b] = d + f;
                a[b + 1] = e + g;
                c.i = b + h;
                this.drawArrays(4, 5)
            }
        }
        cc() {
            return 305
        }
        Af() {
            return "precision mediump float;\n\nuniform float u_zNDC;\n\nattribute vec2 a_modelPosition;\n\nvoid main()\n{\n\tgl_Position.xy = 2.0 * a_modelPosition - 1.0;\n\tgl_Position.z = u_zNDC;\n\tgl_Position.w = 1.0;\n}"
        }
        yf() {
            return "precision mediump float;\n\nuniform vec4 u_color;\nuniform float u_alpha;\n\nvoid main()\n{\n\tgl_FragColor = u_color * u_alpha;\n}"
        }
        Pf() {
            this.Qr = this.re("a_modelPosition");
            this.Oc.push(new jb(this.Qr,"a_modelPosition",!1,-1,-1));
            this.di = this.getUniformLocation("u_zNDC");
            this.ci = this.getUniformLocation("u_color");
            this.De = this.getUniformLocation("u_alpha")
        }
    }
    te.g = !0;
    te.u = Oa;
    Object.assign(te.prototype, {
        j: te
    });
    class ue extends Oa {
        constructor() {
            super();
            this.Fa = null;
            this.gd = []
        }
        Qa(a) {
            super.Qa(a);
            this.Rd(this.md, 17);
            this.Fa = this.tf(32, 2)
        }
        M(a) {
            this.use();
            var b = a.effect;
            a = a.P.Bm(a.la.ya);
            this.Vh(this.bi, a);
            this.L.uniform4f(this.ci, 1, 1, 1, 1);
            a = 0;
            for (b = b.ar; a < b.length; ) {
                let c = b[a];
                ++a;
                this.Fa.resize(c.length);
                let d = 0
                  , e = 0;
                for (; e < c.length; ) {
                    let f = c[e];
                    ++e;
                    this.gd[d++] = f.x;
                    this.gd[d++] = f.y
                }
                this.Fa.setData(this.md, this.gd, d);
                this.drawArrays(c.length, 5)
            }
        }
        cc() {
            return 1105
        }
        Af() {
            return "attribute vec2 a_vertexPosition;\n\nuniform mat4 u_camera;\n\nvoid main()\n{\n\tgl_Position = u_camera * vec4(a_vertexPosition, 0.0, 1.0);\n}"
        }
        yf() {
            return "precision mediump float;\n\nuniform vec4 u_color;\n\nvoid main()\n{\n\tgl_FragColor = vec4(u_color.rgb * u_color.a, u_color.a);\n}"
        }
        Pf() {
            this.md = this.re("a_vertexPosition");
            this.Oc.push(new jb(this.md,"a_vertexPosition",!1,-1,-1));
            this.bi = this.getUniformLocation("u_camera");
            this.ci = this.getUniformLocation("u_color")
        }
    }
    ue.g = !0;
    ue.u = Oa;
    Object.assign(ue.prototype, {
        j: ue
    });
    class we extends Oa {
        constructor() {
            super();
            this.Fa = null;
            this.Va = [];
            this.Fe = 0
        }
        Qa(a) {
            super.Qa(a);
            this.Rd(this.md, 17);
            this.Fa = this.tf(32, 1)
        }
        M(a) {
            this.use();
            var b = a.effect;
            a = a.P.Bm(a.la.ya);
            this.Vh(this.bi, a);
            a = b.color;
            this.L.uniform4f(this.ci, a.x, a.y, a.z, a.w);
            this.Zl(b);
            b = this.Fe >> 1;
            this.Fa.resize(b);
            this.Fa.setData(this.md, this.Va, this.Fe);
            this.drawArrays(b, 4)
        }
        Zl(a) {
            this.Fe = 0;
            let b = a.jn
              , c = 2 * Math.PI
              , d = c / b * a.W * .5
              , e = 0;
            for (; e < b; ) {
                var f = e++;
                if (1 == (f & 1))
                    continue;
                f = f / b * c;
                var g = a.F
                  , h = a.W
                  , m = a.lineWidth / 2
                  , n = Math.cos(f)
                  , q = Math.sin(f);
                f = g.x + n * h;
                g = g.y + q * h;
                h = -q * d;
                let p = n * d;
                n *= m;
                m *= q;
                q = f + h + n;
                let v = g + p + m
                  , u = f - h - n
                  , y = g - p - m
                  , A = this.Fe;
                this.Va[A++] = q;
                this.Va[A++] = v;
                this.Va[A++] = f - h + n;
                this.Va[A++] = g - p + m;
                this.Va[A++] = u;
                this.Va[A++] = y;
                this.Va[A++] = q;
                this.Va[A++] = v;
                this.Va[A++] = u;
                this.Va[A++] = y;
                this.Va[A++] = f + h - n;
                this.Va[A++] = g + p - m;
                this.Fe = A
            }
        }
        cc() {
            return 505
        }
        Af() {
            return "attribute vec2 a_vertexPosition;\n\nuniform mat4 u_camera;\n\nvoid main()\n{\n\tgl_Position = u_camera * vec4(a_vertexPosition, 0.0, 1.0);\n}"
        }
        yf() {
            return "precision mediump float;\n\nuniform vec4 u_color;\n\nvoid main()\n{\n\tgl_FragColor = vec4(u_color.rgb * u_color.a, u_color.a);\n}"
        }
        Pf() {
            this.md = this.re("a_vertexPosition");
            this.Oc.push(new jb(this.md,"a_vertexPosition",!1,-1,-1));
            this.bi = this.getUniformLocation("u_camera");
            this.ci = this.getUniformLocation("u_color")
        }
    }
    we.g = !0;
    we.u = Oa;
    Object.assign(we.prototype, {
        j: we
    });
    class xe extends Oa {
        constructor() {
            super();
            this.Fa = null;
            this.Va = [];
            this.Fe = 0;
            this.sh = Array(256);
            this.Ah = Array(256)
        }
        Qa(a) {
            super.Qa(a);
            this.Rd(this.md, 17);
            this.Fa = this.tf(32, 1)
        }
        M(a) {
            this.use();
            var b = a.effect;
            a = a.P.Bm(a.la.ya);
            this.Vh(this.bi, a);
            this.L.uniform4f(this.ci, b.color.x, b.color.y, b.color.z, b.yp);
            this.Zl(b);
            b = this.Fe >> 1;
            this.Fa.resize(b);
            this.Fa.setData(this.md, this.Va, this.Fe);
            this.drawArrays(b, 4)
        }
        Zl(a) {
            this.Fe = 0;
            var b = a.W;
            let c = (ji / (2 * Math.acos(1 - .25 / b)) - 1 | 0) << 2;
            128 < c && (c = 128);
            var d = 2 * Math.PI;
            let e = 0
              , f = 0
              , g = c;
            for (; f < g; ) {
                var h = f++ / c * d;
                let m = Math.cos(h);
                h = Math.sin(h);
                this.Ah[e] = m * b;
                this.Ah[e + 1] = h * b;
                this.sh[e] = m * (b + a.lineWidth);
                this.sh[e + 1] = h * (b + a.lineWidth);
                e += 2
            }
            a = 0;
            for (b = 1; a < c; )
                d = this.Fe,
                this.Va[d++] = this.Ah[2 * a],
                this.Va[d++] = this.Ah[2 * a + 1],
                this.Va[d++] = this.Ah[2 * b],
                this.Va[d++] = this.Ah[2 * b + 1],
                this.Va[d++] = this.sh[2 * b],
                this.Va[d++] = this.sh[2 * b + 1],
                this.Va[d++] = this.Ah[2 * a],
                this.Va[d++] = this.Ah[2 * a + 1],
                this.Va[d++] = this.sh[2 * b],
                this.Va[d++] = this.sh[2 * b + 1],
                this.Va[d++] = this.sh[2 * a],
                this.Va[d++] = this.sh[2 * a + 1],
                this.Fe = d,
                ++a,
                ++b,
                b == c && (b = 0)
        }
        cc() {
            return 905
        }
        Af() {
            return "attribute vec2 a_vertexPosition;\n\nuniform mat4 u_camera;\n\nvoid main()\n{\n\tgl_Position = u_camera * vec4(a_vertexPosition, 0.0, 1.0);\n}"
        }
        yf() {
            return "precision mediump float;\n\nuniform vec4 u_color;\n\nvoid main()\n{\n\tgl_FragColor = vec4(u_color.rgb * u_color.a, u_color.a);\n}"
        }
        Pf() {
            this.md = this.re("a_vertexPosition");
            this.Oc.push(new jb(this.md,"a_vertexPosition",!1,-1,-1));
            this.bi = this.getUniformLocation("u_camera");
            this.ci = this.getUniformLocation("u_color")
        }
    }
    xe.g = !0;
    xe.u = Oa;
    Object.assign(xe.prototype, {
        j: xe
    });
    class Fc extends Oa {
        constructor() {
            super();
            this.Fa = null
        }
        Qa(a) {
            super.Qa(a);
            this.Rd(this.Ee, 17);
            this.Rd(this.Aj, 17);
            this.Fa = this.tf(4, 2)
        }
        M(a) {
            this.use();
            var b = a.P
              , c = a.la
              , d = a.effect
              , e = d.mb;
            if (e.ep()) {
                var f = d.Hn;
                a = f.x + d.offsetX * f.w;
                var g = f.y + d.offsetY * f.G
                  , h = a + d.hu * f.w;
                d = g + d.iu * f.G;
                this.QB(this.Nr, e.handle);
                e = e.size;
                this.L.uniform2f(this.Pr, e.x, e.y);
                e = this.Fa.kr[4];
                e[2] = a;
                e[3] = d;
                e[6] = h;
                e[7] = d;
                e[10] = a;
                e[11] = g;
                e[14] = h;
                e[15] = g;
                this.Fa.ri = !0;
                this.Fa.setData(this.Ee, Fc.jH[0]);
                a = b.nh(c.ya);
                this.Vh(this.Ol, a);
                this.L.uniform1f(this.De, b.Sj);
                a = c.size;
                this.L.uniform2f(this.Or, a.x, a.y);
                this.L.uniform1f(this.di, b.By(c));
                b = 0 < (b.Nc & 4) ? b.ah : null;
                null != b ? (c = b.Db,
                this.L.uniform4f(this.Qg, c.x, c.y, c.z, c.w),
                b = b.offset,
                this.L.uniform4f(this.Rg, b.x, b.y, b.z, b.w)) : (this.L.uniform4f(this.Qg, 1, 1, 1, 1),
                b = new E(0,0,0,0),
                this.L.uniform4f(this.Rg, b.x, b.y, b.z, b.w));
                this.drawArrays(4, 5)
            }
        }
        cc() {
            return 205
        }
        pg() {
            return 401
        }
        Af() {
            return "attribute vec2 a_position;\nattribute vec2 a_tcoord;\n\nuniform mat4 u_matrix;\nuniform vec2 u_size;\nuniform vec2 u_textureSize;\nuniform float u_zNDC;\n\nvarying vec2 v_tcoord;\n\nvoid main()\n{\n\tgl_Position = u_matrix * vec4(a_position * u_size, u_zNDC, 1.0);\n\tv_tcoord = vec2(a_tcoord.x, u_textureSize.y - a_tcoord.y) / u_textureSize;  \n}"
        }
        yf() {
            return "precision mediump float;\n\nuniform sampler2D u_image;\nuniform float u_alpha;\nuniform vec4 u_colorMultiplier;\nuniform vec4 u_colorOffset;\n\nvarying vec2 v_tcoord;\n\nvoid main()\n{\n\tvec4 color = texture2D(u_image, v_tcoord);\n\tfloat alpha = color.a;\n\tcolor = vec4(color.rgb / (alpha + 0.001), alpha) * u_colorMultiplier + u_colorOffset;\n\tcolor = vec4(color.rgb * color.a, color.a);\n\tgl_FragColor = color * u_alpha;\n}"
        }
        Pf() {
            this.Ee = this.re("a_position");
            this.Oc.push(new jb(this.Ee,"a_position",!1,-1,-1));
            this.Aj = this.re("a_tcoord");
            this.Oc.push(new jb(this.Aj,"a_tcoord",!1,-1,-1));
            this.Ol = this.getUniformLocation("u_matrix");
            this.Or = this.getUniformLocation("u_size");
            this.Pr = this.getUniformLocation("u_textureSize");
            this.di = this.getUniformLocation("u_zNDC");
            this.Nr = this.getUniformLocation("u_image");
            this.De = this.getUniformLocation("u_alpha");
            this.Qg = this.getUniformLocation("u_colorMultiplier");
            this.Rg = this.getUniformLocation("u_colorOffset")
        }
    }
    Fc.g = !0;
    Fc.u = Oa;
    Object.assign(Fc.prototype, {
        j: Fc
    });
    class ab {
        constructor(a) {
            this.type = a;
            this.Ja = 0;
            this.Op = null
        }
        set() {}
        collapse() {
            return this
        }
    }
    ab.g = !0;
    Object.assign(ab.prototype, {
        j: ab
    });
    class Ud extends ab {
        constructor(a, b) {
            null == b && (b = !0);
            super(0);
            this.hg = a;
            this.Ja = this.Ja & -16 | a;
            this.UL = b;
            this.Ja &= -65537;
            b && (this.Ja |= 65536);
            this.blendEquation = 1;
            this.Ja = this.Ja & -61441 | 4096;
            this.Hx = this.gB = 0
        }
        set(a) {
            a.uu(this)
        }
    }
    Ud.g = !0;
    Ud.u = ab;
    Object.assign(Ud.prototype, {
        j: Ud
    });
    class vb {
        constructor() {
            this.type = this.ra();
            this.F = new E(0,0,0,1);
            this.W = 0
        }
        H() {
            this.F = null
        }
        fm() {}
        from() {}
        ra() {
            return 102
        }
    }
    vb.g = !0;
    vb.ob = [fd];
    Object.assign(vb.prototype, {
        j: vb
    });
    class tc extends vb {
        constructor() {
            super();
            this.Pa = new W(pa,pa,qa,qa)
        }
        H() {
            this.Pa = null;
            super.H()
        }
        fm(a) {
            var b = this.Pa;
            b.m = b.C = pa;
            b.A = b.D = qa;
            b = a.length >> 1;
            let c = 0;
            for (; c < b; ) {
                let d = c++;
                this.Pa.Wr(new E(a[d << 1],a[(d << 1) + 1],0,1))
            }
        }
        contains(a) {
            let b = this.Pa
              , c = a.x;
            a = a.y;
            return c >= b.m && c <= b.A && a >= b.C ? a <= b.D : !1
        }
        jp(a) {
            switch (a.type) {
            case 202:
                var b = a.F;
                a = a.W;
                this.Pa.Wr(new E(b.x - a,b.y - a,0,1));
                this.Pa.Wr(new E(b.x + a,b.y + a,0,1));
                break;
            case 302:
                this.Pa.add(a.Pa)
            }
            b = this.Pa;
            b = (b.A - b.m) / 2;
            a = this.Pa;
            a = (a.D - a.C) / 2;
            this.F.x = this.Pa.m + b;
            this.F.y = this.Pa.C + a;
            this.W = Math.sqrt(b * b + a * a)
        }
        from(a) {
            let b = a.F
              , c = a.W;
            switch (a.type) {
            case 202:
                this.Pa.m = b.x - c;
                this.Pa.C = b.y - c;
                this.Pa.A = b.x + c;
                this.Pa.D = b.y + c;
                break;
            case 302:
                var d = this.Pa;
                a = a.Pa;
                d.m = a.m;
                d.C = a.C;
                d.A = a.A;
                d.D = a.D
            }
            d = this.F;
            d.x = b.x;
            d.y = b.y;
            d.z = b.z;
            this.W = c
        }
        $q(a, b) {
            var c = this.F
              , d = b.F;
            0 < (a.I & 64) && a.ml();
            var e = a.te
              , f = e.m21 * c.x + e.m22 * c.y + e.m24;
            d.x = e.m11 * c.x + e.m12 * c.y + e.m14;
            d.y = f;
            b.W = (0 < (a.I & 8) ? Math.max(Math.abs(a.scale.x), Math.abs(a.scale.y)) : Math.max(Math.abs(a.matrix.m11) + Math.abs(a.matrix.m12), Math.abs(a.matrix.m21) + Math.abs(a.matrix.m22))) * this.W;
            b = b.Pa;
            c = this.Pa;
            d = c.A - c.m;
            c = this.Pa;
            c = c.D - c.C;
            f = e = tc.gd;
            var g = this.Pa
              , h = this.Pa;
            f.x = (g.m + g.A) / 2;
            f.y = (h.C + h.D) / 2;
            a.qb(e, e);
            b.m = e.x;
            b.C = e.y;
            b.A = e.x;
            b.D = e.y;
            0 < (a.I & 8) ? (h = a.matrix,
            e = h.m11,
            f = h.m12,
            g = h.m21,
            h = h.m22,
            a = a.scale,
            d = d * a.x * .5,
            a = c * a.y * .5,
            0 < e ? (b.m -= e * d,
            b.A += e * d) : (b.m += e * d,
            b.A -= e * d),
            0 < f ? (b.m -= f * a,
            b.A += f * a) : (b.m += f * a,
            b.A -= f * a),
            0 < g ? (b.C -= g * d,
            b.D += g * d) : (b.C += g * d,
            b.D -= g * d),
            0 < h ? (b.C -= h * a,
            b.D += h * a) : (b.C += h * a,
            b.D -= h * a)) : (g = a.matrix,
            e = g.m11,
            f = g.m12,
            h = Math.sqrt(e * e + f * f),
            a = h * d * .5,
            c = (e * g.m22 - f * g.m21) / h * c * .5,
            e = Math.atan2(f, e),
            d = Math.cos(e),
            e = Math.sin(e),
            0 < d ? (b.m -= d * a,
            b.A += d * a) : (b.m += d * a,
            b.A -= d * a),
            0 < e ? (b.m -= e * c,
            b.A += e * c) : (b.m += e * c,
            b.A -= e * c),
            0 < -e ? (b.C -= -e * a,
            b.D += -e * a) : (b.C += -e * a,
            b.D -= -e * a),
            0 < d ? (b.C -= d * c,
            b.D += d * c) : (b.C += d * c,
            b.D -= d * c))
        }
        ra() {
            return 302
        }
    }
    tc.g = !0;
    tc.u = vb;
    Object.assign(tc.prototype, {
        j: tc
    });
    class Lf extends vb {
        constructor() {
            super();
            this.box = new fh(pa,pa,qa,qa)
        }
        H() {
            this.box = null;
            super.H()
        }
        fm(a) {
            var b = this.box;
            b.m = b.C = pa;
            b.A = b.D = qa;
            a = a.length >> 1;
            for (b = 0; b < a; )
                ++b
        }
        contains() {
            return !1
        }
        jp() {}
        from() {}
        $q(a, b) {
            var c = this.F
              , d = b.F;
            0 < (a.I & 16) && a.cr();
            var e = a.te;
            let f = c.x
              , g = c.y;
            c = c.z;
            d.x = e.m11 * f + e.m12 * g + e.m13 * c + e.m14;
            d.y = e.m21 * f + e.m22 * g + e.m23 * c + e.m24;
            d.z = e.m31 * f + e.m32 * g + e.m33 * c + e.m34;
            0 < (a.I & 8) ? (d = Math.abs(a.scale.x),
            e = Math.abs(a.scale.y),
            a = Math.abs(a.scale.z)) : (a = a.matrix,
            d = Math.abs(a.m11) + Math.abs(a.m12) + Math.abs(a.m13),
            e = Math.abs(a.m21) + Math.abs(a.m22) + Math.abs(a.m23),
            a = Math.abs(a.m31) + Math.abs(a.m32) + Math.abs(a.m33));
            b.W = Math.max(Math.max(d, e), a) * this.W
        }
        ra() {
            return 402
        }
    }
    Lf.g = !0;
    Lf.u = vb;
    Object.assign(Lf.prototype, {
        j: Lf
    });
    class be extends vb {
        constructor() {
            super()
        }
        fm(a) {
            let b = a.length >> 1;
            for (var c = 0, d = 0, e = 0; e < b; ) {
                var f = e++;
                c += a[f << 1];
                d += a[(f << 1) + 1]
            }
            c = this.F.x = c / b;
            d = this.F.y = d / b;
            for (e = this.W = 0; e < b; ) {
                var g = e++;
                f = a[g << 1] - c;
                g = a[(g << 1) + 1] - d;
                this.W = Math.max(f * f + g * g, this.W)
            }
            this.W = Math.sqrt(this.W)
        }
        contains(a) {
            let b = a.x - this.F.x;
            a = a.y - this.F.y;
            return b * b + a * a <= this.W * this.W
        }
        jp(a) {
            if (0 != a.W)
                if (0 == this.W)
                    this.W = a.W,
                    this.F.x = a.F.x,
                    this.F.y = a.F.y;
                else {
                    var b = a.F.x - this.F.x
                      , c = a.F.y - this.F.y
                      , d = a.W - this.W
                      , e = b * b + c * c;
                    d * d >= e ? 0 <= d && this.from(a) : (d = Math.sqrt(e),
                    e = (d + a.W - this.W) / (2 * d),
                    this.F.x += e * b,
                    this.F.y += e * c,
                    this.W = (d + this.W + a.W) / 2)
                }
        }
        from(a) {
            this.F.x = a.F.x;
            this.F.y = a.F.y;
            this.W = a.W
        }
        $q(a, b) {
            var c = this.F
              , d = b.F;
            0 < (a.I & 64) && a.ml();
            let e = a.te
              , f = e.m21 * c.x + e.m22 * c.y + e.m24;
            d.x = e.m11 * c.x + e.m12 * c.y + e.m14;
            d.y = f;
            0 < (a.I & 8) ? (c = Math.abs(a.scale.x),
            d = Math.abs(a.scale.y),
            a = Math.abs(a.scale.z)) : (a = a.matrix,
            c = Math.abs(a.m11) + Math.abs(a.m12) + Math.abs(a.m13),
            d = Math.abs(a.m21) + Math.abs(a.m22) + Math.abs(a.m23),
            a = Math.abs(a.m31) + Math.abs(a.m32) + Math.abs(a.m33));
            b.W = Math.max(Math.max(c, d), a) * this.W
        }
        ra() {
            return 202
        }
    }
    be.g = !0;
    be.u = vb;
    Object.assign(be.prototype, {
        j: be
    });
    class ce extends vb {
        constructor() {
            super()
        }
        fm(a) {
            let b = 0
              , c = 0
              , d = 0
              , e = a.length;
            for (var f = 0; f < e; )
                b += a[f++],
                c += a[f++],
                d += a[f++];
            f = e / 3 | 0;
            b /= f;
            c /= f;
            d /= f;
            let g = 0;
            for (f = 0; f < e; ) {
                var h = a[f++] - b;
                let m = a[f++] - c
                  , n = a[f++] - d;
                h = h * h + m * m + n * n;
                h > g && (g = h)
            }
            this.W = Math.sqrt(g);
            a = this.F;
            a.x = b;
            a.y = c;
            a.z = d
        }
        contains(a) {
            let b = a.x - this.F.x
              , c = a.y - this.F.y;
            a = a.z - this.F.z;
            return b * b + c * c + a * a <= this.W * this.W
        }
        jp(a) {
            var b = a.W;
            if (0 != b) {
                var c = this.W;
                if (0 == c)
                    this.W = a.W,
                    b = this.F,
                    c = a.F,
                    b.x = c.x,
                    b.y = c.y,
                    b.z = c.z;
                else {
                    var d = this.F
                      , e = a.F
                      , f = e.x - d.x
                      , g = e.y - d.y;
                    e = e.z - d.z;
                    var h = f * f + g * g + e * e
                      , m = b - c;
                    m * m >= h ? 0 <= m && (this.W = a.W,
                    b = this.F,
                    c = a.F,
                    b.x = c.x,
                    b.y = c.y,
                    b.z = c.z) : (a = Math.sqrt(h),
                    0 < a && (m = (a + m) / (2 * a),
                    h = this.F,
                    h.x = d.x + f * m,
                    h.y = d.y + g * m,
                    h.z = d.z + e * m),
                    this.W = (a + c + b) / 2)
                }
            }
        }
        from(a) {
            this.F.x = a.F.x;
            this.F.y = a.F.y;
            this.W = a.W
        }
        $q(a, b) {
            b.F = a.GH(this.F, b.F);
            b.W = a.vJ() * this.W
        }
        ra() {
            return 502
        }
    }
    ce.g = !0;
    ce.u = vb;
    Object.assign(ce.prototype, {
        j: ce
    });
    class Mf {
        constructor() {
            this.pl = new $a(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
            this.oA = new $a(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
            this.Yi = new $a(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
        }
        yO() {
            let a = this.oA
              , b = this.pl;
            this.Yi = new $a(a.m11 * b.m11 + a.m12 * b.m21 + a.m13 * b.m31 + a.m14 * b.m41,a.m11 * b.m12 + a.m12 * b.m22 + a.m13 * b.m32 + a.m14 * b.m42,a.m11 * b.m13 + a.m12 * b.m23 + a.m13 * b.m33 + a.m14 * b.m43,a.m11 * b.m14 + a.m12 * b.m24 + a.m13 * b.m34 + a.m14 * b.m44,a.m21 * b.m11 + a.m22 * b.m21 + a.m23 * b.m31 + a.m24 * b.m41,a.m21 * b.m12 + a.m22 * b.m22 + a.m23 * b.m32 + a.m24 * b.m42,a.m21 * b.m13 + a.m22 * b.m23 + a.m23 * b.m33 + a.m24 * b.m43,a.m21 * b.m14 + a.m22 * b.m24 + a.m23 * b.m34 + a.m24 * b.m44,a.m31 * b.m11 + a.m32 * b.m21 + a.m33 * b.m31 + a.m34 * b.m41,a.m31 * b.m12 + a.m32 * b.m22 + a.m33 * b.m32 + a.m34 * b.m42,a.m31 * b.m13 + a.m32 * b.m23 + a.m33 * b.m33 + a.m34 * b.m43,a.m31 * b.m14 + a.m32 * b.m24 + a.m33 * b.m34 + a.m34 * b.m44,a.m41 * b.m11 + a.m42 * b.m21 + a.m43 * b.m31 + a.m44 * b.m41,a.m41 * b.m12 + a.m42 * b.m22 + a.m43 * b.m32 + a.m44 * b.m42,a.m41 * b.m13 + a.m42 * b.m23 + a.m43 * b.m33 + a.m44 * b.m43,a.m41 * b.m14 + a.m42 * b.m24 + a.m43 * b.m34 + a.m44 * b.m44)
        }
        aC(a, b) {
            var c = this.Yi;
            let d = a.x
              , e = a.y
              , f = a.z
              , g = a.w
              , h = 1 / (c.m41 * d + c.m42 * e + c.m43 * f + c.m44 * g);
            a = b.w / 2;
            let m = b.G / 2
              , n = (c.m11 * d + c.m12 * e + c.m13 * f + c.m14 * g) * h;
            c = (c.m21 * d + c.m22 * e + c.m23 * f + c.m24 * g) * h;
            return new E(a * n + 0 * c + (a + b.x),0 * n + -m * c + (m + b.y),0,1)
        }
    }
    Mf.g = !0;
    Object.assign(Mf.prototype, {
        j: Mf
    });
    class Bd extends Mf {
        constructor() {
            super();
            this.origin = new E(0,0,0,1);
            this.position = new E(0,0,0,1);
            this.rotation = 0;
            this.zoom = 1;
            this.$y = new $a(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
            this.Zy = new $a(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
            this.lt = new $a(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
            this.size = new E(0,0,0,1);
            this.kb(new E(1E3,1E3,0,1))
        }
        DN(a) {
            this.zoom != a && (this.zoom = a,
            this.Kp())
        }
        bm() {
            let a = this.origin
              , b = this.size;
            a.x = b.x / 2;
            a.y = b.y / 2;
            this.Kp()
        }
        kb(a) {
            let b = a.x
              , c = a.y;
            var d = this.size;
            d.x = a.x;
            d.y = a.y;
            d = this.oA;
            d.m11 = 2 / b;
            d.m12 = 0;
            d.m13 = 0;
            d.m14 = -1;
            d.m21 = 0;
            d.m22 = 2 / c * -1;
            d.m23 = 0;
            d.m24 = 1;
            d.m31 = 0;
            d.m32 = 0;
            d.m33 = -.001;
            d.m34 = 0;
            d.m41 = 0;
            d.m42 = 0;
            d.m43 = 0;
            d.m44 = 1;
            a = d.m14;
            d = d.m24;
            let e = this.Zy;
            e.m11 = b / 2;
            e.m12 = 0;
            e.m13 = 0;
            e.m14 = -e.m11 * a + e.m12 * d;
            e.m21 = 0;
            e.m22 = -c / 2;
            e.m23 = 0;
            e.m24 = -e.m21 * a + e.m22 * d;
            e.m31 = 0;
            e.m32 = 0;
            e.m33 = -1E3;
            e.m34 = 0;
            e.m41 = 0;
            e.m42 = 0;
            e.m43 = 0;
            e.m44 = 1;
            this.Kp()
        }
        Kp() {
            var a = this.pl;
            a.m11 = 1;
            a.m12 = 0;
            a.m13 = 0;
            a.m14 = 0;
            a.m21 = 0;
            a.m22 = 1;
            a.m23 = 0;
            a.m24 = 0;
            a.m31 = 0;
            a.m32 = 0;
            a.m33 = 1;
            a.m34 = 0;
            a.m41 = 0;
            a.m42 = 0;
            a.m43 = 0;
            a.m44 = 1;
            a = this.pl;
            var b = this.position
              , c = b.x;
            b = b.y;
            a.m14 += -c;
            a.m24 += -b;
            var d = this.zoom
              , e = this.zoom;
            a.m11 *= d;
            a.m12 *= d;
            a.m14 *= d;
            a.m21 *= e;
            a.m22 *= e;
            a.m24 *= e;
            e = this.rotation * Ea;
            d = Math.sin(e);
            e = Math.cos(e);
            var f = a.m11
              , g = a.m21;
            a.m11 = e * f - d * g;
            a.m21 = d * f + e * g;
            f = a.m12;
            g = a.m22;
            a.m12 = e * f - d * g;
            a.m22 = d * f + e * g;
            f = a.m14;
            g = a.m24;
            a.m14 = e * f - d * g;
            a.m24 = d * f + e * g;
            a.m14 += c;
            a.m24 += b;
            a.m14 += this.origin.x - this.position.x;
            a.m24 += this.origin.y - this.position.y;
            c = this.pl;
            c.m11 = a.m11;
            c.m12 = a.m12;
            c.m14 = a.m14;
            c.m21 = a.m21;
            c.m22 = a.m22;
            c.m24 = a.m24;
            this.yO();
            a = this.$y;
            var h = this.pl;
            c = h.m11;
            b = h.m12;
            d = h.m13;
            e = h.m14;
            f = h.m21;
            g = h.m22;
            var m = h.m23
              , n = h.m24
              , q = h.m31
              , p = h.m32
              , v = h.m33
              , u = h.m34
              , y = h.m41
              , A = h.m42
              , x = h.m43;
            h = h.m44;
            var H = c * g - b * f;
            let C = c * m - d * f
              , Y = c * n - e * f
              , X = b * m - d * g
              , S = b * n - e * g
              , aa = d * n - e * m
              , ra = q * A - p * y
              , la = q * x - v * y
              , ba = q * h - u * y
              , oa = p * x - v * A
              , va = p * h - u * A
              , ma = v * h - u * x
              , da = 1 / (H * ma - C * va + Y * oa + X * ba - S * la + aa * ra);
            a.m11 = (g * ma - m * va + n * oa) * da;
            a.m12 = (-b * ma + d * va - e * oa) * da;
            a.m13 = (A * aa - x * S + h * X) * da;
            a.m14 = (-p * aa + v * S - u * X) * da;
            a.m21 = (-f * ma + m * ba - n * la) * da;
            a.m22 = (c * ma - d * ba + e * la) * da;
            a.m23 = (-y * aa + x * Y - h * C) * da;
            a.m24 = (q * aa - v * Y + u * C) * da;
            a.m31 = (f * va - g * ba + n * ra) * da;
            a.m32 = (-c * va + b * ba - e * ra) * da;
            a.m33 = (y * S - A * Y + h * H) * da;
            a.m34 = (-q * S + p * Y - u * H) * da;
            a.m41 = (-f * oa + g * la - m * ra) * da;
            a.m42 = (c * oa - b * la + d * ra) * da;
            a.m43 = (-y * X + A * C - x * H) * da;
            a.m44 = (q * X - p * C + v * H) * da;
            a = this.lt;
            c = this.$y;
            b = this.Zy;
            d = c.m11 * b.m12 + c.m12 * b.m22 + c.m13 * b.m32 + c.m14 * b.m42;
            e = c.m11 * b.m13 + c.m12 * b.m23 + c.m13 * b.m33 + c.m14 * b.m43;
            f = c.m11 * b.m14 + c.m12 * b.m24 + c.m13 * b.m34 + c.m14 * b.m44;
            g = c.m21 * b.m11 + c.m22 * b.m21 + c.m23 * b.m31 + c.m24 * b.m41;
            m = c.m21 * b.m12 + c.m22 * b.m22 + c.m23 * b.m32 + c.m24 * b.m42;
            n = c.m21 * b.m13 + c.m22 * b.m23 + c.m23 * b.m33 + c.m24 * b.m43;
            q = c.m21 * b.m14 + c.m22 * b.m24 + c.m23 * b.m34 + c.m24 * b.m44;
            p = c.m31 * b.m11 + c.m32 * b.m21 + c.m33 * b.m31 + c.m34 * b.m41;
            v = c.m31 * b.m12 + c.m32 * b.m22 + c.m33 * b.m32 + c.m34 * b.m42;
            u = c.m31 * b.m13 + c.m32 * b.m23 + c.m33 * b.m33 + c.m34 * b.m43;
            y = c.m31 * b.m14 + c.m32 * b.m24 + c.m33 * b.m34 + c.m34 * b.m44;
            A = c.m41 * b.m11 + c.m42 * b.m21 + c.m43 * b.m31 + c.m44 * b.m41;
            x = c.m41 * b.m12 + c.m42 * b.m22 + c.m43 * b.m32 + c.m44 * b.m42;
            h = c.m41 * b.m13 + c.m42 * b.m23 + c.m43 * b.m33 + c.m44 * b.m43;
            H = c.m41 * b.m14 + c.m42 * b.m24 + c.m43 * b.m34 + c.m44 * b.m44;
            a.m11 = c.m11 * b.m11 + c.m12 * b.m21 + c.m13 * b.m31 + c.m14 * b.m41;
            a.m12 = d;
            a.m13 = e;
            a.m14 = f;
            a.m21 = g;
            a.m22 = m;
            a.m23 = n;
            a.m24 = q;
            a.m31 = p;
            a.m32 = v;
            a.m33 = u;
            a.m34 = y;
            a.m41 = A;
            a.m42 = x;
            a.m43 = h;
            a.m44 = H
        }
    }
    Bd.g = !0;
    Bd.u = Mf;
    Object.assign(Bd.prototype, {
        j: Bd
    });
    class Xb {
        constructor() {
            this.hint = 0;
            this.offset = new E(0,0,0,0);
            this.Db = new E(1,1,1,1)
        }
        set(a) {
            var b = this.Db
              , c = a.Db;
            b.x = c.x;
            b.y = c.y;
            b.z = c.z;
            b.w = c.w;
            b = this.offset;
            c = a.offset;
            b.x = c.x;
            b.y = c.y;
            b.z = c.z;
            b.w = c.w;
            this.hint = a.hint
        }
        vu(a) {
            0 <= a ? (this.Db.x = 1 - a,
            this.Db.y = 1 - a,
            this.Db.z = 1 - a,
            this.offset.x = a,
            this.offset.y = a,
            this.offset.z = a) : (this.Db.x = a + 1,
            this.Db.y = a + 1,
            this.Db.z = a + 1,
            this.offset.x = 0,
            this.offset.y = 0,
            this.offset.z = 0);
            this.Db.w = 1;
            this.offset.w = 0;
            this.hint = 2;
            return this
        }
        concat(a) {
            if (1 == this.hint && 1 == a.hint)
                return this.Db.w *= a.Db.w,
                this;
            let b = this.offset
              , c = this.Db
              , d = a.Db;
            a = a.offset;
            c.x *= d.x;
            c.y *= d.y;
            c.z *= d.z;
            c.w *= d.w;
            b.x = d.x * b.x + a.x;
            b.y = d.y * b.y + a.y;
            b.z = d.z * b.z + a.z;
            b.w = d.w * b.w + a.w;
            this.hint = 0;
            return this
        }
    }
    Xb.g = !0;
    Object.assign(Xb.prototype, {
        j: Xb
    });
    class cc extends ab {
        constructor(a) {
            super(2);
            this.transform = new Xb;
            null != a && this.transform.set(a);
            this.collapsed = null;
            this.Ja = cc.next++
        }
        set(a) {
            a.wu(this)
        }
        collapse(a) {
            if (1 == a.za)
                return this;
            null == this.collapsed && (this.collapsed = new cc);
            let b = this.collapsed.transform;
            b.set(a.top().transform);
            let c = a.za - 2;
            for (; -1 < c; )
                b.concat(a.K[c--].transform);
            return this.collapsed
        }
    }
    cc.g = !0;
    cc.u = ab;
    Object.assign(cc.prototype, {
        j: cc
    });
    class Gh {
        constructor() {
            this.fb = null;
            this.pv = new rb(1024);
            this.pv.bl = !0;
            this.stack = new $b;
            this.gd = new rb
        }
        dj(a) {
            this.fb = a
        }
    }
    Gh.g = !0;
    Object.assign(Gh.prototype, {
        j: Gh
    });
    class qf extends ab {
        constructor(a, b) {
            null == b && (b = 1);
            super(4);
            this.Cw = b;
            this.Nl = a;
            this.Ku(a);
            this.FN(b)
        }
        Ku(a) {
            this.Ja &= -257;
            a && (this.Ja |= 256);
            this.Nl = a
        }
        FN(a) {
            this.Ja = this.Ja & -256 | 1 << a;
            this.Cw = a
        }
        set(a) {
            a.JA(this)
        }
    }
    qf.g = !0;
    qf.u = ab;
    Object.assign(qf.prototype, {
        j: qf
    });
    class pf extends ab {
        constructor(a, b) {
            null == b && (b = !0);
            super(3);
            this.Nl = a;
            this.pH = b;
            this.Ku(a);
            this.EN(b)
        }
        EN(a) {
            this.Ja = (this.Ja &= -3) | (a ? 2 : 0)
        }
        Ku(a) {
            this.Ja = (this.Ja &= -2) | (a ? 1 : 0);
            this.Nl = a
        }
        set(a) {
            a.KA(this)
        }
    }
    pf.g = !0;
    pf.u = ab;
    Object.assign(pf.prototype, {
        j: pf
    });
    class Gb {
        static UH() {
            let a = 0;
            for (; 7 > a; )
                Gb.Oq[a++].za = 0
        }
        static dM(a) {
            null == Gb.Oq && Gb.TJ();
            let b = Gb.Oq
              , c = Gb.HA;
            var d = a;
            for (c.clear(); null != d.parent; ) {
                var e = d.parent;
                c.za == c.Ka && c.grow();
                c.K[c.za++] = e;
                d = d.parent
            }
            d = 0;
            for (e = c.za; d < e; )
                ++d,
                c.K[--c.za].fM(b);
            for (a = a.qd; null != a; )
                d = b[a.state.type],
                e = a.state,
                d.za == d.Ka && d.grow(),
                d.K[d.za++] = e,
                a = a.next;
            c.clear(!0);
            return b
        }
        static TJ() {
            Gb.Oq = Array(7);
            let a = 0;
            for (; 7 > a; )
                Gb.Oq[a++] = new $b;
            Gb.HA = new $b(16)
        }
    }
    Gb.g = !0;
    class Nf {
        constructor(a) {
            this.state = a
        }
    }
    Nf.g = !0;
    Object.assign(Nf.prototype, {
        j: Nf
    });
    class Ka extends Vc {
        constructor(a, b) {
            super();
            this.type = this.ra();
            this.flags = 32 | b | Ka.oI;
            this.U = this.parent = this.name = null;
            this.ib = new Of;
            this.ya = new Of;
            this.ne = 0;
            this.ga = this.xs(a);
            this.key = Qe.next();
            this.qd = this.Vg = null;
            Ka.count++
        }
        H() {
            if (!(0 < (this.flags & 16))) {
                super.H();
                null != this.parent && this.parent.removeChild(this);
                this.ga = this.ya = this.ib = null;
                for (var a = this.qd; null != a; )
                    a.state.Op = null,
                    a = a.next;
                this.pM();
                this.flags = 16;
                Ka.count--
            }
        }
        yy() {
            let a = this;
            for (; null != a.parent; )
                a = a.parent;
            return a
        }
        hd(a, b) {
            null == b && (b = !0);
            null == a && (a = !0);
            this.kv(b);
            b && (this.Nd(),
            a && this.pA())
        }
        kv() {
            0 < (this.flags & 64) || (0 < (this.flags & 512) ? null != this.parent ? this.ya.XA(this.parent.ya, this.ib) : this.ya.tu(this.ib) : null != this.parent ? this.ya.WA(this.parent.ya, this.ib) : this.ya.set(this.ib))
        }
        Nd() {}
        pA() {
            null != this.parent && (this.parent.Nd(),
            this.parent.pA())
        }
        nl(a) {
            var b = null == a;
            if (b)
                a = Gb.dM(this);
            else {
                let c = this.qd;
                for (; null != c; ) {
                    let d = a[c.state.type]
                      , e = c.state;
                    d.za == d.Ka && d.grow();
                    d.K[d.za++] = e;
                    c = c.next
                }
            }
            this.qA(a);
            if (b)
                Gb.UH();
            else
                for (b = this.qd; null != b; )
                    --a[b.state.type].za,
                    b = b.next;
            this.flags &= -33
        }
        mh(a) {
            let b = this.qd;
            for (; null != b; ) {
                if (b.state.type == a)
                    return b.state;
                b = b.next
            }
            return null
        }
        Eg(a) {
            a.Op = this;
            this.flags |= 32;
            if (null == this.qd)
                this.qd = new Nf(a);
            else {
                for (var b = this.qd; null != b; ) {
                    if (b.state.type == a.type) {
                        b.state = a;
                        return
                    }
                    b = b.next
                }
                b = new Nf(a);
                b.next = this.qd;
                this.qd = b
            }
        }
        fq(a) {
            let b = this.qd
              , c = null;
            for (; null != b; ) {
                if (b.state.type == a) {
                    null != c ? c.next = b.next : this.qd = b.next;
                    b.next = null;
                    this.flags |= 32;
                    break
                }
                c = b;
                b = b.next
            }
        }
        pM() {
            let a = this.qd, b;
            null != a && (this.flags |= 32);
            for (; null != a; )
                b = a.next,
                a.next = null,
                a = b;
            this.qd = null
        }
        fM(a) {
            let b = this.qd;
            for (; null != b; ) {
                let c = a[b.state.type]
                  , d = b.state;
                c.za == c.Ka && c.grow();
                c.K[c.za++] = d;
                b = b.next
            }
        }
        xs(a) {
            null == a && (a = Ka.nI);
            if (null == a)
                throw 10;
            switch (a) {
            case 202:
                return new be;
            case 302:
                return new tc;
            default:
                throw 11;
            }
        }
        ra() {
            return 101
        }
    }
    Ka.g = !0;
    Ka.ob = [fd, qg];
    Ka.u = Vc;
    Object.assign(Ka.prototype, {
        j: Ka
    });
    class Ra extends Ka {
        constructor(a, b) {
            super(b, 2);
            this.ca = this.xs(b);
            this.nj = Array(7);
            null != a && a.S(this);
            this.gp = 0;
            this.effect = this.mn = null;
            Ra.count++
        }
        H() {
            0 < (this.flags & 16) || (null != this.effect && this.effect.H(),
            this.effect = null,
            this.ca.H(),
            this.nj = this.ca = null,
            super.H(),
            Ra.count--)
        }
        df(a) {
            this.effect = a;
            this.effect.Gg(this)
        }
        vc() {}
        Gb(a, b) {
            if (!this.ga.contains(a))
                return !1;
            null != b && b.add(this);
            return !0
        }
        ck(a, b) {
            return b
        }
        Nd() {
            0 < (this.flags & 128) || (this.ca.$q(this.ya, this.ga),
            super.Nd())
        }
        qA(a) {
            let b = 0;
            let c = this.nj
              , d = 0
              , e = 0;
            for (; e < a.length; ) {
                var f = a[e];
                ++e;
                0 == f.za ? c[d] = null : (f = f.K[f.za - 1].collapse(f),
                c[d] = f,
                b |= 1 << f.type);
                ++d
            }
            this.gp = b
        }
        ra() {
            return 201
        }
    }
    Ra.g = !0;
    Ra.u = Ka;
    Object.assign(Ra.prototype, {
        j: Ra
    });
    class Pf extends Ra {
        constructor(a, b, c, d) {
            super(c, d);
            this.size = new E(1,1,0,1);
            this.min = new E(0,0,0,1);
            this.max = new E(1,1,0,1);
            this.cols = a;
            this.rows = b;
            this.UK();
            this.vc()
        }
        UK() {
            this.Rt = (this.cols + 1) * (this.rows + 1);
            this.Wh = new rb(this.Rt);
            for (var a = 0, b = this.Rt; a < b; )
                ++a,
                this.Wh.au(new E(0,0,0,1));
            a = this.cols + 1;
            b = this.rows + 1;
            let c = 0, d;
            for (; c < b; ) {
                for (d = 0; d < a; ) {
                    var e = this.Wh.K[c * a + d];
                    e.x = this.min.x + d / (a - 1) * this.max.x;
                    e.y = this.min.y + c / (b - 1) * this.max.y;
                    ++d
                }
                ++c
            }
            this.hL = (2 * this.cols + 2) * this.rows + 2 * (this.rows - 1);
            this.indices = new Uint8Array(this.hL);
            --b;
            for (c = e = 0; c < b; ) {
                for (d = 0; d < a; )
                    this.indices[e++] = c * a + d,
                    this.indices[e++] = c * a + a + d,
                    ++d;
                c < b - 1 && (this.indices[e++] = (c + 1) * a + (a - 1),
                this.indices[e++] = (c + 1) * a);
                ++c
            }
        }
        vc() {
            super.vc()
        }
        ra() {
            return 601
        }
    }
    Pf.g = !0;
    Pf.u = Ra;
    Object.assign(Pf.prototype, {
        j: Pf
    });
    class rc extends ab {
        constructor() {
            super(1);
            this.la = null;
            this.bK = !1;
            this.ss = null;
            this.Ja = rc.next++
        }
        set(a) {
            a.Fu(this)
        }
        qN(a) {
            let b = a.m
              , c = a.C
              , d = a.A - a.m;
            a = a.D - a.C;
            this.ss = [new E(b,c,0,1), new E(b,c + a,0,1), new E(b + d,c + a,0,1), new E(b + d,c,0,1)]
        }
    }
    rc.g = !0;
    rc.u = ab;
    Object.assign(rc.prototype, {
        j: rc
    });
    class Qf extends Ra {
        constructor(a, b) {
            super(a, 402);
            this.Os = b;
            this.vc();
            this.Ry = this.VB = null
        }
        H() {
            this.Os = null;
            var a = this.VB;
            null != a && a.H();
            a = this.Ry;
            null != a && a.H();
            this.Ry = this.VB = null;
            super.H()
        }
        xs() {
            return new ce
        }
        Gb() {
            return !1
        }
        vc() {
            let a = this.Os.getData(0);
            this.ca.fm(a)
        }
        ra() {
            return 501
        }
    }
    Qf.g = !0;
    Qf.u = Ra;
    Object.assign(Qf.prototype, {
        j: Qf
    });
    class mb extends Ka {
        constructor(a, b, c) {
            null == c && (c = 0);
            super(b, 1 | c);
            this.children = null;
            null != a && a.S(this);
            mb.count++
        }
        H() {
            if (!(0 < (this.flags & 16))) {
                for (var a = this.children; null != a; ) {
                    let b = a.U;
                    null != a.Vg ? a.Vg.H() : a.H();
                    a = b
                }
                super.H();
                mb.count--
            }
        }
        ck(a, b) {
            return Ca.ck(this, a, b)
        }
        Gb(a, b) {
            let c = !1;
            if (this.ga.contains(a)) {
                let d = this.children;
                for (; null != d; )
                    d.Gb(a, b) && (c = !0),
                    d = d.U
            }
            return c
        }
        Kg(a) {
            let b = super.Kg(a), c = this.children, d;
            for (; null != c; )
                d = c.U,
                c.Kg(a) && (b = !0),
                c = d;
            return b
        }
        S(a) {
            if (null == this.children)
                this.children = a,
                a.U = null;
            else {
                let b = this.children;
                for (; null != b.U; )
                    b = b.U;
                b.U = a
            }
            a.parent = this
        }
        fk() {
            let a = 0
              , b = this.children;
            for (; null != b; )
                ++a,
                b = b.U;
            return a
        }
        AH(a, b) {
            if (0 == b)
                a.U = this.children,
                this.children = a;
            else {
                let c = this.children
                  , d = 0;
                for (--b; d < b; )
                    ++d,
                    c = c.U;
                a.U = c.U;
                c.U = a
            }
            a.parent = this
        }
        removeChild(a) {
            if (this.children == a)
                this.children = a.U;
            else {
                let b = this.children;
                for (; b.U != a; )
                    b = b.U;
                b.U = a.U
            }
            a.U = null;
            a.parent = null;
            return this
        }
        Sc(a) {
            let b = this.children
              , c = 0;
            for (; c <= a; ) {
                if (c == a)
                    return b;
                b = b.U;
                ++c
            }
            return null
        }
        uq(a, b) {
            this.removeChild(a);
            this.AH(a, b)
        }
        Yo(a) {
            let b = this.children;
            for (; null != b; ) {
                if (b.name == a)
                    return b;
                b = b.U
            }
            return null
        }
        bO(a, b) {
            let c = null
              , d = null;
            for (var e = 0, f = this.children; 2 > e && null != f; )
                f.U == a ? (c = f,
                ++e) : f.U == b && (d = f,
                ++e),
                f = f.U;
            e = a.U;
            f = b.U;
            a.U = null;
            b.U = null;
            e == b ? (null != c ? c.U = b : this.children = b,
            b.U = a,
            a.U = f) : f == a ? (null != d ? d.U = a : this.children = a,
            a.U = b,
            b.U = e) : (null != c ? c.U = b : this.children = b,
            b.U = e,
            null != d ? d.U = a : this.children = a,
            a.U = f)
        }
        cO(a, b) {
            this.bO(this.Sc(a), this.Sc(b))
        }
        dN(a) {
            if (this.children != a) {
                for (var b = this.children; b.U != a; )
                    b = b.U;
                b.U = a.U;
                a.U = this.children;
                this.children = a
            }
        }
        Bu(a) {
            if (null != a.U) {
                var b = this.children;
                if (b == a) {
                    for (; null != b.U; )
                        b = b.U;
                    b.U = a;
                    this.children = a.U
                } else {
                    for (; b.U != a; )
                        b = b.U;
                    for (b = b.U = a.U; null != b.U; )
                        b = b.U;
                    b.U = a
                }
                a.U = null
            }
        }
        kv(a) {
            super.kv(a);
            let b = this.children;
            for (; null != b; )
                b.hd(!1, a),
                b = b.U
        }
        Nd() {
            if (!(0 < (this.flags & 128)) && null != this.children) {
                var a = this.children;
                this.ga.from(a.ga);
                for (a = a.U; null != a; )
                    this.ga.jp(a.ga),
                    a = a.U;
                super.Nd()
            }
        }
        qA(a) {
            let b = this.children;
            for (; null != b; )
                b.nl(a),
                b = b.U
        }
        ra() {
            return 301
        }
    }
    mb.g = !0;
    mb.u = Ka;
    Object.assign(mb.prototype, {
        j: mb
    });
    class Wb extends ab {
        constructor(a) {
            super(5);
            this.zj = 1;
            this.collapsed = null;
            this.Hg(a)
        }
        Hg(a) {
            this.zj = 0 > a ? 0 : 1 < a ? 1 : a;
            this.Ja = 65535 * this.zj | 0
        }
        set(a) {
            a.Hu(this)
        }
        collapse(a) {
            if (1 == a.za)
                return this;
            let b = a.top().zj
              , c = a.za - 2;
            for (; -1 < c; )
                b *= a.K[c--].zj;
            null == this.collapsed ? this.collapsed = new Wb(b) : this.collapsed.Hg(b);
            return this.collapsed
        }
    }
    Wb.g = !0;
    Wb.u = ab;
    Object.assign(Wb.prototype, {
        j: Wb
    });
    class Hh {
        constructor() {
            this.list = [];
            this.size = 0
        }
        add(a) {
            this.list[this.size++] = a
        }
    }
    Hh.g = !0;
    Object.assign(Hh.prototype, {
        j: Hh
    });
    class uc extends Ra {
        constructor(a) {
            super(a, 302);
            this.flags |= 512;
            this.size = new E(1,1,0,1);
            this.vc()
        }
        kb(a, b) {
            let c = this.size;
            c.x = a;
            c.y = b;
            this.vc()
        }
        Gb(a, b) {
            if (!this.ga.contains(a))
                return !1;
            a = this.ya.rf(a, new E(0,0,0,1));
            return ki.gO(a.x, a.y, this.size.x, this.size.y) ? (null != b && b.add(this),
            !0) : !1
        }
        ck(a, b) {
            let c = new E(0,0,0,1)
              , d = de
              , e = de
              , f = ee
              , g = ee
              , h = this.size.x
              , m = this.size.y;
            if (a == this)
                e = d = 0,
                f = h,
                g = m;
            else {
                if (a == this.parent) {
                    var n = this.ib;
                    c.x = 0;
                    c.y = 0;
                    n.qb(c, c);
                    c.x < d && (d = c.x);
                    c.x > f && (f = c.x);
                    c.y < e && (e = c.y);
                    c.y > g && (g = c.y);
                    c.x = h;
                    c.y = 0;
                    n.qb(c, c);
                    c.x < d && (d = c.x);
                    c.x > f && (f = c.x);
                    c.y < e && (e = c.y);
                    c.y > g && (g = c.y);
                    c.x = h;
                    c.y = m;
                    n.qb(c, c);
                    c.x < d && (d = c.x);
                    c.x > f && (f = c.x);
                    c.y < e && (e = c.y);
                    c.y > g && (g = c.y);
                    c.x = 0;
                    c.y = m;
                    n.qb(c, c)
                } else
                    null == a.parent ? (n = this.ya,
                    c.x = 0,
                    c.y = 0,
                    n.qb(c, c),
                    c.x < d && (d = c.x),
                    c.x > f && (f = c.x),
                    c.y < e && (e = c.y),
                    c.y > g && (g = c.y),
                    c.x = h,
                    c.y = 0,
                    n.qb(c, c),
                    c.x < d && (d = c.x),
                    c.x > f && (f = c.x),
                    c.y < e && (e = c.y),
                    c.y > g && (g = c.y),
                    c.x = h,
                    c.y = m,
                    n.qb(c, c),
                    c.x < d && (d = c.x),
                    c.x > f && (f = c.x),
                    c.y < e && (e = c.y),
                    c.y > g && (g = c.y),
                    c.x = 0,
                    c.y = m,
                    n.qb(c, c)) : (n = this.ya,
                    a = a.ya,
                    c.x = 0,
                    c.y = 0,
                    n.qb(c, c),
                    a.rf(c, c),
                    c.x < d && (d = c.x),
                    c.x > f && (f = c.x),
                    c.y < e && (e = c.y),
                    c.y > g && (g = c.y),
                    c.x = h,
                    c.y = 0,
                    n.qb(c, c),
                    a.rf(c, c),
                    c.x < d && (d = c.x),
                    c.x > f && (f = c.x),
                    c.y < e && (e = c.y),
                    c.y > g && (g = c.y),
                    c.x = h,
                    c.y = m,
                    n.qb(c, c),
                    a.rf(c, c),
                    c.x < d && (d = c.x),
                    c.x > f && (f = c.x),
                    c.y < e && (e = c.y),
                    c.y > g && (g = c.y),
                    c.x = 0,
                    c.y = m,
                    n.qb(c, c),
                    a.rf(c, c));
                c.x < d && (d = c.x);
                c.x > f && (f = c.x);
                c.y < e && (e = c.y);
                c.y > g && (g = c.y)
            }
            null == b ? b = new W(d,e,f,g) : (b.m = d,
            b.C = e,
            b.A = f,
            b.D = g);
            return b
        }
        vc() {
            super.vc();
            var a = this.size.x / 2;
            let b = this.size.y / 2;
            this.ca.F.x = a;
            this.ca.F.y = b;
            this.ca.W = Math.sqrt(a * a + b * b);
            302 == this.ca.type && (a = this.ca.Pa,
            a.m = 0,
            a.C = 0,
            a.A = this.size.x,
            a.D = this.size.y)
        }
        ra() {
            return 401
        }
    }
    uc.g = !0;
    uc.u = Ra;
    Object.assign(uc.prototype, {
        j: uc
    });
    class Ca {
        static pt(a, b) {
            for (a = a.parent; null != a; ) {
                if (a == b)
                    return !0;
                a = a.parent
            }
            return !1
        }
        static jf(a) {
            let b = Ca.Qu;
            b.clear();
            for (b.af(Ka.count); null != a; )
                b.K[b.za++] = a,
                a = a.parent;
            a = b.K[--b.za];
            for (a.ya.set(a.ib); 0 < b.za; ) {
                let c = b.K[--b.za];
                0 >= (c.flags & 64) && (0 < (c.flags & 512) ? c.ya.XA(a.ya, c.ib) : c.ya.WA(a.ya, c.ib));
                a = c
            }
        }
        static jJ(a, b) {
            let c = Ca.UN;
            c.af(Ka.count);
            var d = Ca.Qu;
            d.af(Ka.count);
            d.clear();
            for (d.K[d.za++] = a; 0 < d.za; )
                if (a = d.K[--d.za],
                1 != a.ne)
                    if (0 < (a.flags & 2))
                        null != a.effect && (c.K[c.za++] = a);
                    else if (0 < (a.flags & 1))
                        for (a = a.children; null != a; )
                            d.K[d.za++] = a,
                            a = a.U;
            b.clear();
            b.af(c.za);
            d = 0;
            for (a = c.za; d < a; ) {
                ++d;
                let e = c.K[--c.za];
                b.K[b.Z++] = e
            }
        }
        static ck(a, b, c) {
            let d = de
              , e = de
              , f = ee
              , g = ee
              , h = Ca.Qu;
            h.af(Ka.count);
            h.clear();
            for (h.K[h.za++] = a; 0 < h.za; )
                if (a = h.K[--h.za],
                0 < (a.flags & 2))
                    a.ck(b, c),
                    c.m < d && (d = c.m),
                    c.C < e && (e = c.C),
                    c.A > f && (f = c.A),
                    c.D > g && (g = c.D);
                else if (0 < (a.flags & 1))
                    for (a = a.children; null != a; )
                        h.K[h.za++] = a,
                        a = a.U;
            c.m = d;
            c.C = e;
            c.A = f;
            c.D = g;
            return c
        }
        static oO(a, b, c) {
            let d = c.m
              , e = c.C
              , f = c.A
              , g = c.D
              , h = de
              , m = de
              , n = ee
              , q = ee
              , p = new E(0,0,0,1);
            b == a ? (h = c.m,
            m = c.C,
            n = c.A,
            q = c.D) : (b == a.parent ? (b = a.ib,
            p.x = d,
            p.y = e,
            b.qb(p, p),
            p.x < h && (h = p.x),
            p.x > n && (n = p.x),
            p.y < m && (m = p.y),
            p.y > q && (q = p.y),
            p.x = f,
            p.y = e,
            b.qb(p, p),
            p.x < h && (h = p.x),
            p.x > n && (n = p.x),
            p.y < m && (m = p.y),
            p.y > q && (q = p.y),
            p.x = f,
            p.y = g,
            b.qb(p, p),
            p.x < h && (h = p.x),
            p.x > n && (n = p.x),
            p.y < m && (m = p.y),
            p.y > q && (q = p.y),
            p.x = d,
            p.y = g,
            b.qb(p, p)) : null == b.parent ? (b = a.ya,
            p.x = d,
            p.y = e,
            b.qb(p, p),
            p.x < h && (h = p.x),
            p.x > n && (n = p.x),
            p.y < m && (m = p.y),
            p.y > q && (q = p.y),
            p.x = f,
            p.y = e,
            b.qb(p, p),
            p.x < h && (h = p.x),
            p.x > n && (n = p.x),
            p.y < m && (m = p.y),
            p.y > q && (q = p.y),
            p.x = f,
            p.y = g,
            b.qb(p, p),
            p.x < h && (h = p.x),
            p.x > n && (n = p.x),
            p.y < m && (m = p.y),
            p.y > q && (q = p.y),
            p.x = d,
            p.y = g,
            b.qb(p, p)) : (a = a.ya,
            b = b.ya,
            p.x = d,
            p.y = e,
            a.qb(p, p),
            b.rf(p, p),
            p.x < h && (h = p.x),
            p.x > n && (n = p.x),
            p.y < m && (m = p.y),
            p.y > q && (q = p.y),
            p.x = f,
            p.y = e,
            a.qb(p, p),
            b.rf(p, p),
            p.x < h && (h = p.x),
            p.x > n && (n = p.x),
            p.y < m && (m = p.y),
            p.y > q && (q = p.y),
            p.x = f,
            p.y = g,
            a.qb(p, p),
            b.rf(p, p),
            p.x < h && (h = p.x),
            p.x > n && (n = p.x),
            p.y < m && (m = p.y),
            p.y > q && (q = p.y),
            p.x = d,
            p.y = g,
            a.qb(p, p),
            b.rf(p, p)),
            p.x < h && (h = p.x),
            p.x > n && (n = p.x),
            p.y < m && (m = p.y),
            p.y > q && (q = p.y));
            return new W(h,m,n,q)
        }
    }
    Ca.g = !0;
    class fe {
    }
    fe.g = !0;
    fe.ke = !0;
    Object.assign(fe.prototype, {
        j: fe
    });
    class Of {
        constructor() {
            this.Iy = new $a(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
            this.te = new $a(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
            this.I = 15;
            this.scale = new E(1,1,1,1);
            this.translate = new E(0,0,0,1);
            this.matrix = new $a(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
        }
        set(a) {
            var b = this.translate
              , c = a.translate;
            b.x = c.x;
            b.y = c.y;
            b.z = c.z;
            b = this.scale;
            c = a.scale;
            b.x = c.x;
            b.y = c.y;
            b.z = c.z;
            b = this.matrix;
            c = a.matrix;
            b.m11 = c.m11;
            b.m12 = c.m12;
            b.m13 = c.m13;
            b.m21 = c.m21;
            b.m22 = c.m22;
            b.m23 = c.m23;
            b.m31 = c.m31;
            b.m32 = c.m32;
            b.m33 = c.m33;
            this.I = a.I | 240
        }
        tu(a) {
            this.translate.x = a.translate.x;
            this.translate.y = a.translate.y;
            this.scale.x = a.scale.x;
            this.scale.y = a.scale.y;
            let b = this.matrix
              , c = a.matrix;
            b.m11 = c.m11;
            b.m12 = c.m12;
            b.m21 = c.m21;
            b.m22 = c.m22;
            this.I = a.I | 240
        }
        NA() {
            let a = this.matrix;
            a.m11 = 1;
            a.m12 = 0;
            a.m21 = 0;
            a.m22 = 1;
            this.I |= 506
        }
        vJ() {
            let a, b;
            if (0 < (this.I & 8)) {
                a = Math.abs(this.scale.x);
                b = Math.abs(this.scale.y);
                var c = Math.abs(this.scale.z)
            } else
                c = this.matrix,
                a = Math.abs(c.m11) + Math.abs(c.m12) + Math.abs(c.m13),
                b = Math.abs(c.m21) + Math.abs(c.m22) + Math.abs(c.m23),
                c = Math.abs(c.m31) + Math.abs(c.m32) + Math.abs(c.m33);
            return Math.max(Math.max(a, b), c)
        }
        WA(a, b) {
            let c = a.I
              , d = b.I;
            if (0 < (c & 1))
                this.set(b);
            else if (0 < (d & 1))
                this.set(a);
            else if (12 == (c & 12) && 0 < (d & 8)) {
                if (0 < (c & 2)) {
                    let f = b.matrix
                      , g = this.matrix;
                    g.m11 = f.m11;
                    g.m12 = f.m12;
                    g.m13 = f.m13;
                    g.m21 = f.m21;
                    g.m22 = f.m22;
                    g.m23 = f.m23;
                    g.m31 = f.m31;
                    g.m32 = f.m32;
                    g.m33 = f.m33
                } else if (0 < (d & 2)) {
                    let f = a.matrix
                      , g = this.matrix;
                    g.m11 = f.m11;
                    g.m12 = f.m12;
                    g.m13 = f.m13;
                    g.m21 = f.m21;
                    g.m22 = f.m22;
                    g.m23 = f.m23;
                    g.m31 = f.m31;
                    g.m32 = f.m32;
                    g.m33 = f.m33
                } else {
                    let f = a.matrix
                      , g = b.matrix
                      , h = g.m11
                      , m = g.m12
                      , n = g.m13
                      , q = g.m21
                      , p = g.m22
                      , v = g.m23
                      , u = g.m31
                      , y = g.m32
                      , A = g.m33
                      , x = f.m11 * m + f.m12 * p + f.m13 * y
                      , H = f.m11 * n + f.m12 * v + f.m13 * A
                      , C = f.m21 * m + f.m22 * p + f.m23 * y
                      , Y = f.m21 * n + f.m22 * v + f.m23 * A
                      , X = f.m31 * m + f.m32 * p + f.m33 * y
                      , S = f.m31 * n + f.m32 * v + f.m33 * A
                      , aa = this.matrix;
                    aa.m11 = f.m11 * h + f.m12 * q + f.m13 * u;
                    aa.m12 = x;
                    aa.m13 = H;
                    aa.m21 = f.m21 * h + f.m22 * q + f.m23 * u;
                    aa.m22 = C;
                    aa.m23 = Y;
                    aa.m31 = f.m31 * h + f.m32 * q + f.m33 * u;
                    aa.m32 = X;
                    aa.m33 = S
                }
                this.I = this.I & -4 | 248;
                let e = a.scale.x;
                if (0 < (c & 2)) {
                    let f = a.scale.x
                      , g = b.translate
                      , h = a.translate;
                    this.translate.x = g.x * f + h.x;
                    this.translate.y = g.y * f + h.y;
                    this.translate.z = g.z * f + h.z
                } else {
                    let f = a.scale.x
                      , g = a.matrix
                      , h = b.translate
                      , m = h.x
                      , n = h.y
                      , q = h.z
                      , p = a.translate;
                    this.translate.x = (g.m11 * m + g.m12 * n + g.m13 * q) * f + p.x;
                    this.translate.y = (g.m21 * m + g.m22 * n + g.m23 * q) * f + p.y;
                    this.translate.z = (g.m31 * m + g.m32 * n + g.m33 * q) * f + p.z
                }
                this.I = this.I & -2 | 240;
                if (0 < (d & 4))
                    this.scale.x = this.scale.y = this.scale.z = e * b.scale.x,
                    this.I = this.I & -2 | 244;
                else {
                    let f = b.scale;
                    this.scale.x = f.x * e;
                    this.scale.y = f.y * e;
                    this.scale.z = f.z * e;
                    this.I = this.I & -6 | 240
                }
            } else {
                if (0 < (c & 8) && 0 < (d & 8)) {
                    let e = a.matrix
                      , f = a.scale
                      , g = f.x
                      , h = f.y
                      , m = f.z
                      , n = e.m11 * g
                      , q = e.m12 * h
                      , p = e.m13 * m
                      , v = e.m21 * g
                      , u = e.m22 * h
                      , y = e.m23 * m
                      , A = e.m31 * g
                      , x = e.m32 * h
                      , H = e.m33 * m
                      , C = b.matrix
                      , Y = b.scale
                      , X = Y.x
                      , S = Y.y
                      , aa = Y.z
                      , ra = C.m11 * X
                      , la = C.m12 * S
                      , ba = C.m13 * aa
                      , oa = C.m21 * X
                      , va = C.m22 * S
                      , ma = C.m23 * aa
                      , da = C.m31 * X
                      , Wa = C.m32 * S
                      , gb = C.m33 * aa
                      , Na = this.matrix;
                    Na.m11 = n * ra + q * oa + p * da;
                    Na.m12 = n * la + q * va + p * Wa;
                    Na.m13 = n * ba + q * ma + p * gb;
                    Na.m21 = v * ra + u * oa + y * da;
                    Na.m22 = v * la + u * va + y * Wa;
                    Na.m23 = v * ba + u * ma + y * gb;
                    Na.m31 = A * ra + x * oa + H * da;
                    Na.m32 = A * la + x * va + H * Wa;
                    Na.m33 = A * ba + x * ma + H * gb;
                    this.I = 240;
                    let hb = b.translate
                      , Qd = hb.x
                      , ad = hb.y
                      , Rd = hb.z
                      , bd = a.translate;
                    this.translate.x = n * Qd + q * ad + p * Rd + bd.x;
                    this.translate.y = v * Qd + u * ad + y * Rd + bd.y;
                    this.translate.z = A * Qd + x * ad + H * Rd + bd.z
                } else if (0 < (c & 8)) {
                    let e = a.matrix
                      , f = a.scale
                      , g = f.x
                      , h = f.y
                      , m = f.z
                      , n = e.m11 * g
                      , q = e.m12 * h
                      , p = e.m13 * m
                      , v = e.m21 * g
                      , u = e.m22 * h
                      , y = e.m23 * m
                      , A = e.m31 * g
                      , x = e.m32 * h
                      , H = e.m33 * m
                      , C = b.matrix
                      , Y = C.m11
                      , X = C.m12
                      , S = C.m13
                      , aa = C.m21
                      , ra = C.m22
                      , la = C.m23
                      , ba = C.m31
                      , oa = C.m32
                      , va = C.m33
                      , ma = this.matrix;
                    ma.m11 = n * Y + q * aa + p * ba;
                    ma.m12 = n * X + q * ra + p * oa;
                    ma.m13 = n * S + q * la + p * va;
                    ma.m21 = v * Y + u * aa + y * ba;
                    ma.m22 = v * X + u * ra + y * oa;
                    ma.m23 = v * S + u * la + y * va;
                    ma.m31 = A * Y + x * aa + H * ba;
                    ma.m32 = A * X + x * ra + H * oa;
                    ma.m33 = A * S + x * la + H * va;
                    this.I = 240;
                    let da = b.translate
                      , Wa = da.x
                      , gb = da.y
                      , Na = da.z
                      , hb = a.translate;
                    this.translate.x = n * Wa + q * gb + p * Na + hb.x;
                    this.translate.y = v * Wa + u * gb + y * Na + hb.y;
                    this.translate.z = A * Wa + x * gb + H * Na + hb.z
                } else if (0 < (d & 8)) {
                    let e = a.matrix
                      , f = b.matrix
                      , g = b.scale
                      , h = g.x
                      , m = g.y
                      , n = g.z
                      , q = f.m11 * h
                      , p = f.m12 * m
                      , v = f.m13 * n
                      , u = f.m21 * h
                      , y = f.m22 * m
                      , A = f.m23 * n
                      , x = f.m31 * h
                      , H = f.m32 * m
                      , C = f.m33 * n
                      , Y = e.m11 * p + e.m12 * y + e.m13 * H
                      , X = e.m11 * v + e.m12 * A + e.m13 * C
                      , S = e.m21 * p + e.m22 * y + e.m23 * H
                      , aa = e.m21 * v + e.m22 * A + e.m23 * C
                      , ra = e.m31 * p + e.m32 * y + e.m33 * H
                      , la = e.m31 * v + e.m32 * A + e.m33 * C
                      , ba = this.matrix;
                    ba.m11 = e.m11 * q + e.m12 * u + e.m13 * x;
                    ba.m12 = Y;
                    ba.m13 = X;
                    ba.m21 = e.m21 * q + e.m22 * u + e.m23 * x;
                    ba.m22 = S;
                    ba.m23 = aa;
                    ba.m31 = e.m31 * q + e.m32 * u + e.m33 * x;
                    ba.m32 = ra;
                    ba.m33 = la;
                    this.I = 240;
                    let oa = b.translate
                      , va = oa.x
                      , ma = oa.y
                      , da = oa.z
                      , Wa = a.translate;
                    this.translate.x = e.m11 * va + e.m12 * ma + e.m13 * da + Wa.x;
                    this.translate.y = e.m21 * va + e.m22 * ma + e.m23 * da + Wa.y;
                    this.translate.z = e.m31 * va + e.m32 * ma + e.m33 * da + Wa.z
                } else {
                    let e = a.matrix
                      , f = b.matrix
                      , g = f.m11
                      , h = f.m12
                      , m = f.m13
                      , n = f.m21
                      , q = f.m22
                      , p = f.m23
                      , v = f.m31
                      , u = f.m32
                      , y = f.m33
                      , A = e.m11 * h + e.m12 * q + e.m13 * u
                      , x = e.m11 * m + e.m12 * p + e.m13 * y
                      , H = e.m21 * h + e.m22 * q + e.m23 * u
                      , C = e.m21 * m + e.m22 * p + e.m23 * y
                      , Y = e.m31 * h + e.m32 * q + e.m33 * u
                      , X = e.m31 * m + e.m32 * p + e.m33 * y
                      , S = this.matrix;
                    S.m11 = e.m11 * g + e.m12 * n + e.m13 * v;
                    S.m12 = A;
                    S.m13 = x;
                    S.m21 = e.m21 * g + e.m22 * n + e.m23 * v;
                    S.m22 = H;
                    S.m23 = C;
                    S.m31 = e.m31 * g + e.m32 * n + e.m33 * v;
                    S.m32 = Y;
                    S.m33 = X;
                    this.I = 240;
                    let aa = b.translate
                      , ra = aa.x
                      , la = aa.y
                      , ba = aa.z
                      , oa = a.translate;
                    this.translate.x = e.m11 * ra + e.m12 * la + e.m13 * ba + oa.x;
                    this.translate.y = e.m21 * ra + e.m22 * la + e.m23 * ba + oa.y;
                    this.translate.z = e.m31 * ra + e.m32 * la + e.m33 * ba + oa.z
                }
                this.I = this.I & -2 | 240
            }
        }
        XA(a, b) {
            var c = a.I
              , d = b.I;
            if (0 < (c & 1))
                this.tu(b);
            else if (0 < (d & 1))
                this.tu(a);
            else if (12 == (c & 12) && 0 < (d & 8)) {
                if (0 < (c & 2)) {
                    var e = b.matrix
                      , f = this.matrix;
                    f.m11 = e.m11;
                    f.m12 = e.m12;
                    f.m21 = e.m21;
                    f.m22 = e.m22
                } else if (0 < (d & 2))
                    e = a.matrix,
                    f = this.matrix,
                    f.m11 = e.m11,
                    f.m12 = e.m12,
                    f.m21 = e.m21,
                    f.m22 = e.m22;
                else {
                    e = a.matrix;
                    var g = b.matrix;
                    f = g.m11;
                    var h = g.m12
                      , m = g.m21
                      , n = g.m22;
                    g = e.m11 * h + e.m12 * n;
                    h = e.m21 * h + e.m22 * n;
                    n = this.matrix;
                    n.m11 = e.m11 * f + e.m12 * m;
                    n.m12 = g;
                    n.m21 = e.m21 * f + e.m22 * m;
                    n.m22 = h
                }
                this.I = this.I & -4 | 504;
                e = a.scale.x;
                0 < (c & 2) ? (c = a.scale.x,
                f = b.translate,
                a = a.translate,
                this.translate.x = f.x * c + a.x,
                this.translate.y = f.y * c + a.y) : (c = a.scale.x,
                f = a.matrix,
                g = b.translate,
                m = g.x,
                g = g.y,
                a = a.translate,
                this.translate.x = (f.m11 * m + f.m12 * g) * c + a.x,
                this.translate.y = (f.m21 * m + f.m22 * g) * c + a.y);
                this.I = this.I & -2 | 496;
                0 < (d & 4) ? (this.scale.x = this.scale.y = e * b.scale.x,
                this.I = this.I & -2 | 500) : (a = b.scale,
                this.scale.x = a.x * e,
                this.scale.y = a.y * e,
                this.I = this.I & -6 | 496)
            } else {
                if (0 < (c & 8) && 0 < (d & 8)) {
                    f = a.matrix;
                    d = a.scale;
                    e = d.x;
                    m = d.y;
                    d = f.m11 * e;
                    c = f.m12 * m;
                    e *= f.m21;
                    f = f.m22 * m;
                    h = b.matrix;
                    m = b.scale;
                    n = m.x;
                    var q = m.y;
                    m = h.m11 * n;
                    g = h.m12 * q;
                    n *= h.m21;
                    h = h.m22 * q;
                    q = this.matrix;
                    q.m11 = d * m + c * n;
                    q.m12 = d * g + c * h;
                    q.m21 = e * m + f * n;
                    q.m22 = e * g + f * h;
                    this.I = this.I & -16 | 496;
                    m = b.translate;
                    b = m.x;
                    m = m.y;
                    a = a.translate;
                    this.translate.x = d * b + c * m + a.x;
                    this.translate.y = e * b + f * m + a.y
                } else
                    0 < (c & 8) ? (f = a.matrix,
                    d = a.scale,
                    e = d.x,
                    m = d.y,
                    d = f.m11 * e,
                    c = f.m12 * m,
                    e *= f.m21,
                    f = f.m22 * m,
                    n = b.matrix,
                    m = n.m11,
                    g = n.m12,
                    h = n.m21,
                    n = n.m22,
                    q = this.matrix,
                    q.m11 = d * m + c * h,
                    q.m12 = d * g + c * n,
                    q.m21 = e * m + f * h,
                    q.m22 = e * g + f * n,
                    this.I = this.I & -16 | 496,
                    m = b.translate,
                    b = m.x,
                    m = m.y,
                    a = a.translate,
                    this.translate.x = d * b + c * m + a.x,
                    this.translate.y = e * b + f * m + a.y) : 0 < (d & 8) ? (d = a.matrix,
                    m = b.matrix,
                    c = b.scale,
                    e = c.x,
                    g = c.y,
                    c = m.m11 * e,
                    f = m.m12 * g,
                    e *= m.m21,
                    g *= m.m22,
                    m = d.m11 * f + d.m12 * g,
                    f = d.m21 * f + d.m22 * g,
                    g = this.matrix,
                    g.m11 = d.m11 * c + d.m12 * e,
                    g.m12 = m,
                    g.m21 = d.m21 * c + d.m22 * e,
                    g.m22 = f,
                    this.I = this.I & -16 | 496,
                    c = b.translate,
                    b = c.x,
                    c = c.y,
                    a = a.translate,
                    this.translate.x = d.m11 * b + d.m12 * c + a.x,
                    this.translate.y = d.m21 * b + d.m22 * c + a.y) : (d = a.matrix,
                    f = b.matrix,
                    c = f.m11,
                    m = f.m12,
                    e = f.m21,
                    g = f.m22,
                    f = d.m11 * m + d.m12 * g,
                    m = d.m21 * m + d.m22 * g,
                    g = this.matrix,
                    g.m11 = d.m11 * c + d.m12 * e,
                    g.m12 = f,
                    g.m21 = d.m21 * c + d.m22 * e,
                    g.m22 = m,
                    this.I = this.I & -16 | 496,
                    c = b.translate,
                    b = c.x,
                    c = c.y,
                    a = a.translate,
                    this.translate.x = d.m11 * b + d.m12 * c + a.x,
                    this.translate.y = d.m21 * b + d.m22 * c + a.y);
                this.I = this.I & -2 | 496
            }
        }
        GH(a, b) {
            0 < (this.I & 16) && this.cr();
            let c = this.te
              , d = a.x
              , e = a.y;
            a = a.z;
            b.x = c.m11 * d + c.m12 * e + c.m13 * a + c.m14;
            b.y = c.m21 * d + c.m22 * e + c.m23 * a + c.m24;
            b.z = c.m31 * d + c.m32 * e + c.m33 * a + c.m34;
            return b
        }
        qb(a, b) {
            0 < (this.I & 64) && this.ml();
            let c = this.te
              , d = c.m21 * a.x + c.m22 * a.y + c.m24;
            b.x = c.m11 * a.x + c.m12 * a.y + c.m14;
            b.y = d;
            return b
        }
        rf(a, b) {
            0 < (this.I & 128) && this.wO();
            let c = this.Iy
              , d = c.m21 * a.x + c.m22 * a.y + c.m24;
            b.x = c.m11 * a.x + c.m12 * a.y + c.m14;
            b.y = d;
            return b
        }
        cr() {
            let a = this.te;
            if (0 < (this.I & 1))
                a.m11 = 1,
                a.m12 = 0,
                a.m13 = 0,
                a.m21 = 0,
                a.m22 = 1,
                a.m23 = 0,
                a.m31 = 0,
                a.m32 = 0,
                a.m33 = 1,
                a.m14 = 0,
                a.m24 = 0,
                a.m34 = 0;
            else {
                var b = this.matrix;
                if (0 < (this.I & 8)) {
                    let c = this.scale.x
                      , d = this.scale.y
                      , e = this.scale.z;
                    a.m11 = b.m11 * c;
                    a.m12 = b.m12 * d;
                    a.m13 = b.m13 * e;
                    a.m21 = b.m21 * c;
                    a.m22 = b.m22 * d;
                    a.m23 = b.m23 * e;
                    a.m31 = b.m31 * c;
                    a.m32 = b.m32 * d;
                    a.m33 = b.m33 * e
                } else
                    a.m11 = b.m11,
                    a.m12 = b.m12,
                    a.m13 = b.m13,
                    a.m21 = b.m21,
                    a.m22 = b.m22,
                    a.m23 = b.m23,
                    a.m31 = b.m31,
                    a.m32 = b.m32,
                    a.m33 = b.m33;
                b = this.translate;
                a.m14 = b.x;
                a.m24 = b.y;
                a.m34 = b.z
            }
            this.I &= -81
        }
        ml() {
            let a = this.te;
            if (0 < (this.I & 1))
                a.m11 = 1,
                a.m12 = 0,
                a.m21 = 0,
                a.m22 = 1,
                a.m14 = 0,
                a.m24 = 0;
            else {
                let c = this.matrix;
                if (0 < (this.I & 8)) {
                    var b = this.scale;
                    let d = b.x;
                    b = b.y;
                    a.m11 = c.m11 * d;
                    a.m12 = c.m12 * b;
                    a.m21 = c.m21 * d;
                    a.m22 = c.m22 * b
                } else
                    a.m11 = c.m11,
                    a.m12 = c.m12,
                    a.m21 = c.m21,
                    a.m22 = c.m22;
                a.m14 = this.translate.x;
                a.m24 = this.translate.y
            }
            this.I &= -65
        }
        wO() {
            let a = this.Iy;
            var b = this.matrix;
            if (0 < (this.I & 1))
                a.m11 = 1,
                a.m12 = 0,
                a.m21 = 0,
                a.m22 = 1,
                a.m14 = 0,
                a.m24 = 0;
            else {
                if (0 < (this.I & 8))
                    if (12 == (this.I & 12)) {
                        var c = 1 / this.scale.x
                          , d = b.m12 * c;
                        a.m11 = b.m11 * c;
                        a.m12 = b.m21 * c;
                        a.m21 = d;
                        a.m22 = b.m22 * c
                    } else {
                        c = this.scale;
                        var e = c.x
                          , f = c.y;
                        c = b.m11 * e;
                        d = b.m12 * f;
                        e *= b.m21;
                        b = b.m22 * f;
                        f = 1 / (c * b - d * e);
                        a.m11 = b * f;
                        a.m12 = -d * f;
                        a.m21 = -e * f;
                        a.m22 = c * f
                    }
                else
                    0 < (this.I & 64) && this.ml(),
                    b = this.te,
                    c = 1 / (b.m11 * b.m22 - b.m12 * b.m21),
                    d = b.m11 * c,
                    a.m11 = b.m22 * c,
                    a.m12 = -b.m12 * c,
                    a.m21 = -b.m21 * c,
                    a.m22 = d;
                a.m14 = -(a.m11 * this.translate.x + a.m12 * this.translate.y);
                a.m24 = -(a.m21 * this.translate.x + a.m22 * this.translate.y)
            }
            this.I &= -129
        }
    }
    Of.g = !0;
    Object.assign(Of.prototype, {
        j: Of
    });
    class rf extends ab {
        constructor() {
            super(3)
        }
        set() {}
    }
    rf.g = !0;
    rf.u = ab;
    Object.assign(rf.prototype, {
        j: rf
    });
    class ic {
        constructor(a, b) {
            this.B = this.la = new Ra;
            this.B.Vg = this;
            this.la.Eg(new Wb(1));
            null != a ? this.la.df(new $d(a)) : this.la.df(new Yd(b))
        }
        aa(a) {
            this.la.mh(5).Hg(a)
        }
        O(a) {
            this.la.ne = a ? 2 : 1
        }
        H() {
            this.la.H();
            this.B = this.la = null
        }
    }
    ic.g = !0;
    ic.ob = [fe];
    Object.assign(ic.prototype, {
        j: ic
    });
    class kb {
        constructor(a) {
            kb.count++;
            this.B = a;
            a.Vg = this;
            this.HH = this.ra();
            this.flags = 6;
            this.qf = this.Mc = this.pf = this.pb = 1;
            this.Ml = this.Ll = this.cg = this.bg = this.Oa = this.dg = this.nf = this.Od = 0;
            this.xc = 1;
            this.Sg = !0
        }
        H() {
            this.B = null;
            kb.count--
        }
        remove() {
            let a = this.B.parent;
            null != a && a.removeChild(this.B)
        }
        jk() {
            var a = this.B.parent;
            return null != a && (a = a.Vg,
            null != a && 204 == a.HH) ? a : null
        }
        GN() {
            this.B.name = "lock"
        }
        aa(a) {
            a = 0 > a ? 0 : 1 < a ? 1 : a;
            if (this.xc != a) {
                this.xc = a;
                let b = this.B;
                if (1 > a) {
                    let c = b.mh(5);
                    null == c ? b.Eg(new Wb(this.xc)) : c.Hg(a)
                } else
                    b.fq(5);
                b.flags |= 32
            }
        }
        O(a) {
            this.Sg != a && (this.Sg = a,
            this.B.ne = a ? 0 : 1)
        }
        qa(a) {
            this.pb != a && (this.pf = this.pb = a,
            Da(a, .001) && (this.pf = .001 * (0 <= a ? 1 : -1)),
            1 == a && 1 == this.Mc ? (this.flags = this.flags & -3 | 4,
            a = this.B.ib,
            a.scale.x = 1,
            a.scale.y = 1,
            a.I |= 500) : this.flags &= -7,
            this.Rb())
        }
        ub(a) {
            this.Mc != a && (this.qf = this.Mc = a,
            Da(a, .001) && (this.qf = .001 * (0 <= a ? 1 : -1)),
            1 == a && 1 == this.pb ? (this.flags = this.flags & -3 | 4,
            a = this.B.ib,
            a.scale.x = 1,
            a.scale.y = 1,
            a.I |= 500) : this.flags &= -7,
            this.Rb())
        }
        J(a) {
            if (this.pb != a || this.Mc != a)
                this.pb = this.Mc = a,
                Da(a, .001) ? this.pf = this.qf = .001 * (0 <= a ? 1 : -1) : this.pf = this.qf = a,
                this.flags |= 2,
                1 == a ? (a = this.B.ib,
                a.scale.x = 1,
                a.scale.y = 1,
                a.I |= 500,
                this.flags |= 4) : this.flags &= -5,
                this.Rb()
        }
        setScale(a, b) {
            if (this.pb != a || this.Mc != b) {
                if (1 == a && 1 == b) {
                    this.flags = this.flags & -3 | 4;
                    let c = this.B.ib;
                    c.scale.x = 1;
                    c.scale.y = 1;
                    c.I |= 500
                } else
                    this.flags = a == b ? (this.flags &= -5) | 2 : this.flags & -7;
                this.pb = this.pf = a;
                this.Mc = this.qf = b;
                Da(a, .001) && (this.pf = .001 * (0 <= a ? 1 : -1));
                Da(b, .001) && (this.qf = .001 * (0 <= b ? 1 : -1));
                this.Rb()
            }
        }
        ka(a) {
            if (this.Od != a) {
                this.Od = a;
                let b;
                b = a % 360;
                0 > b && (b += 360);
                this.nf = b * Ea;
                0 == a ? (this.flags &= -2,
                this.B.ib.NA()) : this.flags |= 1;
                this.Rb()
            }
        }
        $a() {
            return this.dg
        }
        o(a) {
            this.dg != a && (this.dg = a,
            this.Rb());
            return a
        }
        s(a) {
            this.Oa != a && (this.Oa = a,
            this.Rb())
        }
        IN(a) {
            if (this.dg != a.x || this.Oa != a.y)
                this.dg = a.x,
                this.Oa = a.y,
                this.Rb()
        }
        tN(a, b, c, d) {
            let e = !1;
            if (this.dg != a || this.Oa != b)
                this.dg = a,
                this.Oa = b,
                e = !0;
            0 != this.Od && (a = this.Od = 0,
            0 > a && (a += 360),
            this.nf = a * Ea,
            this.flags &= -2,
            this.B.ib.NA(),
            e = !0);
            if (this.pb != c || this.Mc != d)
                this.pf = c,
                Da(c, .001) && (this.pf = .001 * (0 <= c ? 1 : -1)),
                this.qf = d,
                Da(d, .001) && (this.qf = .001 * (0 <= d ? 1 : -1)),
                c == d ? 1 == c ? (this.flags = this.flags & -3 | 4,
                c = this.B.ib,
                c.scale.x = 1,
                c.scale.y = 1,
                c.I |= 500) : this.flags = this.flags & -5 | 2 : this.flags &= -7,
                e = !0;
            e && this.Rb()
        }
        HN(a) {
            let b = a.x;
            a = a.y;
            null == b && (b = this.bg);
            null == a && (a = this.cg);
            if (this.bg != b || this.cg != a)
                this.bg = b,
                this.cg = a,
                this.Rb()
        }
        Qf(a, b) {
            null == a && (a = this.bg);
            null == b && (b = this.cg);
            if (this.bg != a || this.cg != b)
                this.bg = a,
                this.cg = b,
                this.Rb()
        }
        de(a, b) {
            null == a && (a = this.Ll);
            null == b && (b = this.Ml);
            if (this.Ll != a || this.Ml != b)
                this.Ll = a,
                this.Ml = b,
                this.Rb()
        }
        F() {
            this.bm();
            this.Nj()
        }
        update(a) {
            this.B.Kg(a);
            this.B.hd();
            this.B.nl()
        }
        $u(a) {
            Ca.jf(this.B);
            return this.B.ya.qb(a, new E(0,0,0,1))
        }
        Zu(a) {
            Ca.jf(this.B);
            return this.B.ya.rf(a, new E(0,0,0,1))
        }
        Ub() {
            return new gh(this)
        }
        Oh(a) {
            null == a ? this.B.fq(0) : this.B.Eg(new Ud(a,!1))
        }
        yn(a) {
            var b = this.B.mh(2);
            if (null != a) {
                null == b && (b = new cc,
                this.B.Eg(b));
                b = b.transform;
                var c = b.Db
                  , d = a.Db;
                c.x = d.x;
                c.y = d.y;
                c.z = d.z;
                c.w = d.w;
                c = b.offset;
                d = a.offset;
                c.x = d.x;
                c.y = d.y;
                c.z = d.z;
                c.w = d.w;
                b.hint = a.hint
            } else
                null != b && this.B.fq(2)
        }
        eB(a) {
            let b = this.B.mh(1);
            null != a ? (null == b && (b = new rc,
            this.B.Eg(b)),
            b.qN(a)) : null != b && this.B.fq(1)
        }
        Rb() {
            let a = this.B.ib
              , b = this.dg
              , c = this.Oa
              , d = this.bg
              , e = this.cg
              , f = this.Ll
              , g = this.Ml
              , h = this.pf;
            var m = this.qf
              , n = this.flags;
            if (0 < (n & 1)) {
                let p = Math.sin(this.nf)
                  , v = Math.cos(this.nf);
                var q = a.matrix;
                q.m11 = v;
                q.m12 = -p;
                q.m21 = p;
                q.m22 = v;
                a.I = a.I & -4 | 504;
                0 < (n & 4) ? (a.translate.x = -(f * v) + g * p + f + b - d,
                a.translate.y = -(f * p) - g * v + g + c - e) : 0 < (n & 2) ? (m = h * f,
                n = h * g,
                a.scale.x = a.scale.y = h,
                a.I = a.I & -2 | 500,
                a.translate.x = -(m * v) + n * p + f + b - d,
                a.translate.y = -(m * p) - n * v + g + c - e) : (n = h * f,
                q = m * g,
                a.scale.x = h,
                a.scale.y = m,
                a.I = a.I & -6 | 496,
                a.translate.x = -(n * v) + q * p + f + b - d,
                a.translate.y = -(n * p) - q * v + g + c - e)
            } else
                0 < (n & 4) ? (a.translate.x = b - d,
                a.translate.y = c - e) : 0 < (n & 2) ? (a.scale.x = a.scale.y = h,
                a.I = a.I & -2 | 500,
                a.translate.x = -(h * f) + f + b - d,
                a.translate.y = -(h * g) + g + c - e) : (a.scale.x = h,
                a.scale.y = m,
                a.I = a.I & -6 | 496,
                a.translate.x = -(h * f) + f + b - d,
                a.translate.y = -(m * g) + g + c - e);
            a.I = a.I & -2 | 496
        }
        ra() {
            return 104
        }
    }
    kb.g = !0;
    kb.ob = [fd, fe];
    Object.assign(kb.prototype, {
        j: kb
    });
    class B extends kb {
        constructor(a, b, c) {
            super(new uc(null != a ? a.node : null));
            this.ie = new W(0,0,0,0);
            this.Ie = this.Eo = null;
            this.X = new E(0,0,0,1);
            null != b && this.ff(b, c);
            kb.count++
        }
        H() {
            null != this.B && (this.B.H(),
            this.X = this.Ie = this.Eo = this.ie = null,
            super.H())
        }
        ta() {
            if (0 == (this.flags & 1))
                return this.X.x * Math.abs(this.pb);
            var a = this.X.x * Math.abs(this.pb) / 2;
            let b = this.X.y * Math.abs(this.Mc) / 2, c = -Math.sin(this.nf), d = Math.cos(this.nf), e;
            0 < d ? (e = -(d * a),
            a *= d) : (e = d * a,
            a = -(d * a));
            0 < c ? (e -= c * b,
            a += c * b) : (e += c * b,
            a -= c * b);
            return a - e
        }
        Mu(a) {
            this.qa(a / this.X.x)
        }
        wa() {
            if (0 == (this.flags & 1))
                return this.X.y * Math.abs(this.Mc);
            var a = this.X.x * Math.abs(this.pb) / 2;
            let b = this.X.y * Math.abs(this.Mc) / 2, c = Math.sin(this.nf), d = Math.cos(this.nf), e;
            0 < c ? (e = -(c * a),
            a *= c) : (e = c * a,
            a = -(c * a));
            0 < d ? (e -= d * b,
            a += d * b) : (e += d * b,
            a -= d * b);
            return a - e
        }
        Lu(a) {
            this.ub(a / this.X.y)
        }
        bm() {
            this.Qf(this.X.x / 2, this.X.y / 2)
        }
        Nj() {
            var a = this.B;
            205 == a.effect.type && null != a.effect.ru ? (a = this.B.size,
            this.de(a.x / 2, a.y / 2)) : this.de(this.X.x / 2, this.X.y / 2)
        }
        Qf(a, b) {
            null != a && 0 <= a && 1 >= a && (a *= this.X.x);
            null != b && 0 <= b && 1 >= b && (b *= this.X.y);
            super.Qf(a, b)
        }
        de(a, b) {
            null != a && 0 <= a && 1 >= a && (a *= this.X.x);
            null != b && 0 <= b && 1 >= b && (b *= this.X.y);
            super.de(a, b)
        }
        ff(a, b) {
            if (this.Eo != a) {
                this.Eo = a;
                this.Ie = null;
                var c = this.B;
                c.mn = O(this, this.Zz);
                c.df(new Zd(a));
                this.Zz();
                this.Rb()
            }
            null != b && this.zn(b)
        }
        Zz() {
            var a = this.Eo;
            let b = this.X;
            b.x = a.size.x * a.we;
            b.y = a.size.y * a.we;
            this.B.kb(this.X.x, this.X.y);
            a = this.Ie;
            null != a && (this.Ie = null,
            this.zn(a))
        }
        Yb(a) {
            if (this.Ie != a) {
                this.Ie = a;
                var b = this.B
                  , c = b.effect
                  , d = c.xu(a);
                c = c.mb.we;
                a = this.ie;
                var e = this.X;
                e.x = d.Zb.x * c;
                e.y = d.Zb.y * c;
                if (d.Ln) {
                    e = d.br;
                    d = d.pd;
                    let f = e.x * c;
                    e = e.y * c;
                    a.m = f;
                    a.C = e;
                    a.A = f + d.w;
                    a.D = e + d.G;
                    b.kb(d.w * c, d.G * c)
                } else
                    b.kb(this.X.x, this.X.y),
                    a.m = 0,
                    a.C = 0,
                    a.A = 0,
                    a.D = 0;
                this.Rb()
            }
        }
        zn(a) {
            if (this.Ie != a) {
                this.Ie = a;
                var b = this.B
                  , c = b.effect
                  , d = c.xu(a);
                c = c.mb.we;
                a = this.ie;
                var e = this.X;
                e.x = d.Zb.x * c;
                e.y = d.Zb.y * c;
                if (d.Ln) {
                    e = d.br;
                    d = d.pd;
                    let f = e.x * c;
                    e = e.y * c;
                    a.m = f;
                    a.C = e;
                    a.A = f + d.w;
                    a.D = e + d.G;
                    b.kb(d.w * c, d.G * c)
                } else
                    b.kb(this.X.x, this.X.y),
                    a.m = 0,
                    a.C = 0,
                    a.A = 0,
                    a.D = 0;
                this.Rb()
            }
        }
        ja() {
            return new bb(this)
        }
        setColor(a, b, c) {
            let d = this.X;
            d.x = b;
            d.y = c;
            b = this.B;
            b.kb(this.X.x, this.X.y);
            b.vc();
            this.B.df(new Xd(a));
            return this
        }
        Gb(a, b) {
            if (!this.Sg)
                return !1;
            Ca.jf(this.B);
            this.B.Nd();
            return this.B.Gb(a, b)
        }
        xf(a, b) {
            null == b && (b = !0);
            let c = new W(pa,pa,qa,qa);
            if (0 == this.X.x)
                return c;
            if (a == this)
                return c.m = 0,
                c.C = 0,
                c.A = this.X.x,
                c.D = this.X.y,
                c;
            var d = this.ie.m
              , e = this.ie.C;
            let f = this.B;
            var g = f.size;
            let h = g.x;
            g = g.y;
            var m = this.ie;
            if (m = 0 < m.A - m.m) {
                var n = this.ie
                  , q = n.A - n.m;
                n.m = 0;
                n.A = q;
                n = this.ie;
                q = n.D - n.C;
                n.C = 0;
                n.D = q;
                f.kb(this.X.x, this.X.y);
                this.Rb();
                this.B.hd(!1, !1)
            }
            b && (Ca.jf(this.B),
            null == a || Ca.pt(this.B.parent, a.B) || Ca.jf(a.B));
            this.B.ck(null == a ? this.B.yy() : a.B, c);
            m && (a = this.ie,
            b = a.A - a.m,
            a.m = d,
            a.A = d + b,
            d = this.ie,
            a = d.D - d.C,
            d.C = e,
            d.D = e + a,
            e = f.size,
            e.x = h,
            e.y = g,
            f.vc(),
            this.Rb(),
            this.B.hd(!1, !1));
            return c
        }
        $u(a) {
            let b = this.ie;
            var c = b.m;
            let d = b.C;
            var e = 0 < b.A - b.m;
            if (e) {
                var f = b.A - b.m;
                b.m = 0;
                b.A = f;
                f = b.D - b.C;
                b.C = 0;
                b.D = f;
                this.Rb();
                this.B.hd(!1, !1)
            }
            a = super.$u(a);
            e && (e = b.A - b.m,
            b.m = c,
            b.A = c + e,
            c = b.D - b.C,
            b.C = d,
            b.D = d + c,
            this.Rb(),
            this.B.hd(!1, !1));
            return a
        }
        Zu(a) {
            let b = this.ie;
            var c = b.m;
            let d = b.C;
            var e = 0 < b.A - b.m;
            if (e) {
                var f = b.A - b.m;
                b.m = 0;
                b.A = f;
                f = b.D - b.C;
                b.C = 0;
                b.D = f;
                this.Rb();
                this.B.hd(!1, !1)
            }
            a = super.Zu(a);
            e && (e = b.A - b.m,
            b.m = c,
            b.A = c + e,
            c = b.D - b.C,
            b.C = d,
            b.D = d + c,
            this.Rb(),
            this.B.hd(!1, !1));
            return a
        }
        tq() {
            null != this.jk() ? this.jk().tq(this) : null != this.B.parent && this.B.parent.Bu(this.B)
        }
        Rb() {
            let a = this.B.ib
              , b = this.dg
              , c = this.Oa;
            var d = this.ie;
            let e = d.m;
            d = d.C;
            let f = this.bg
              , g = this.cg
              , h = this.Ll - e
              , m = this.Ml - d
              , n = this.pf;
            var q = this.qf
              , p = this.flags;
            if (0 < (p & 1)) {
                let u = Math.sin(this.nf)
                  , y = Math.cos(this.nf);
                var v = a.matrix;
                let A = a.matrix;
                A.m11 = y;
                A.m12 = -u;
                A.m13 = v.m13;
                A.m21 = u;
                A.m22 = y;
                A.m23 = v.m23;
                A.m31 = v.m31;
                A.m32 = v.m32;
                A.m33 = v.m33;
                a.I = a.I & -4 | 248;
                0 < (p & 4) ? (a.scale.x = 1,
                a.scale.y = 1,
                a.I |= 500,
                a.translate.x = -(h * y) + m * u + h + b - f + e,
                a.translate.y = -(h * u) - m * y + m + c - g + d) : 0 < (p & 2) ? (q = n * h,
                p = n * m,
                a.scale.x = a.scale.y = n,
                a.I = a.I & -2 | 500,
                a.translate.x = -(q * y) + p * u + h + b - f + e,
                a.translate.y = -(q * u) - p * y + m + c - g + d) : (p = n * h,
                v = q * m,
                a.scale.x = n,
                a.scale.y = q,
                a.I = a.I & -6 | 496,
                a.translate.x = -(p * y) + v * u + h + b - f + e,
                a.translate.y = -(p * u) - v * y + m + c - g + d)
            } else
                0 < (p & 4) ? (a.scale.x = 1,
                a.scale.y = 1,
                a.I |= 500,
                a.translate.x = b - f + e,
                a.translate.y = c - g + d) : 0 < (p & 2) ? (a.scale.x = a.scale.y = n,
                a.I = a.I & -2 | 500,
                a.translate.x = -(n * h) + h + b - f + e,
                a.translate.y = -(n * m) + m + c - g + d) : (a.scale.x = n,
                a.scale.y = q,
                a.I = a.I & -6 | 496,
                a.translate.x = -(n * h) + h + b - f + e,
                a.translate.y = -(q * m) + m + c - g + d);
            a.I = a.I & -2 | 496
        }
        ra() {
            return 304
        }
    }
    B.g = !0;
    B.u = kb;
    Object.assign(B.prototype, {
        j: B
    });
    class R extends kb {
        constructor(a, b) {
            super(new mb(null != b ? b.node : null,null,512));
            this.node = this.B;
            this.B.name = a
        }
        H() {
            null != this.node && (this.node.H(),
            this.node = null,
            super.H())
        }
        appendChild(a) {
            this.node.S(a.B)
        }
        fk() {
            return this.node.fk()
        }
        Sc(a) {
            return this.node.Sc(a).Vg
        }
        uq(a, b) {
            this.node.uq(a.B, b)
        }
        Yo(a) {
            a = this.node.Yo(a);
            return null != a ? a.Vg : null
        }
        tq(a) {
            null == a ? null != this.jk() && this.node.parent.Bu(this.B) : this.node.Bu(a.B)
        }
        WM() {
            null != this.jk() && this.node.parent.dN(this.B)
        }
        Gb(a, b) {
            Ca.jf(this.B);
            this.B.hd(!1, !0);
            return this.node.Gb(a, b)
        }
        xf(a, b) {
            null == b && (b = !0);
            b && (this.B.hd(!1, !1),
            Ca.jf(this.B),
            null == a || Ca.pt(this.B, a.B) || Ca.jf(a.B),
            b = !1);
            let c = new W(pa,pa,qa,qa)
              , d = this.node.children;
            for (; null != d; ) {
                let e = d.Vg;
                null != e && e instanceof kb && c.add(e.xf(a, b));
                d = d.U
            }
            return c
        }
        ta() {
            let a = this.xf(this.jk());
            return a.A - a.m
        }
        wa() {
            let a = this.xf(this.jk());
            return a.D - a.C
        }
        Nj() {
            if (0 != this.fk()) {
                var a = this.xf(this);
                this.de((a.m + a.A) / 2, (a.C + a.D) / 2)
            }
        }
        bm() {
            if (0 != this.fk()) {
                var a = this.xf(this);
                this.Qf((a.m + a.A) / 2, (a.C + a.D) / 2)
            }
        }
        ra() {
            return 204
        }
    }
    R.g = !0;
    R.u = kb;
    Object.assign(R.prototype, {
        j: R
    });
    class Ta {
        constructor(a) {
            this.T = a;
            this.controllers = Array(6);
            for (a = 0; 6 > a; )
                this.controllers[a++] = null
        }
        ua() {
            if (null != this.controllers) {
                for (var a = 0, b = this.controllers; a < b.length; ) {
                    let c = b[a];
                    ++a;
                    null != c && c.H()
                }
                this.T = this.controllers = null
            }
        }
        play(a, b) {
            this.start(a, 0, b)
        }
        loop(a, b) {
            null == b && (b = !1);
            this.start(a, b ? 2 : 1)
        }
        Bc() {
            return null != this.current.Ia
        }
        stop() {
            let a = 0
              , b = this.controllers;
            for (; a < b.length; ) {
                let c = b[a];
                ++a;
                null != c && c.stop()
            }
        }
        start(a, b, c) {
            let d = 0;
            this.current = null;
            let e = 0;
            for (; 6 > e; ) {
                let f = e++
                  , g = a.zJ();
                if (null == g[f])
                    continue;
                let h = this.controllers[f];
                if (null == h) {
                    h = new Wc;
                    let n;
                    switch (f) {
                    case 0:
                        n = O(this, this.uN);
                        break;
                    case 1:
                        n = O(this, this.vN);
                        break;
                    case 2:
                        n = O(this, this.sN);
                        break;
                    case 3:
                        n = O(this, this.oN);
                        break;
                    case 4:
                        n = O(this, this.pN);
                        break;
                    case 5:
                        n = O(this, this.dd)
                    }
                    h.nn = n;
                    h.gz = !0;
                    this.T.B.no(h);
                    this.controllers[f] = h
                }
                let m = g[f].Th;
                m > d && (d = m,
                this.current = h);
                h.play(g[f], b)
            }
            null != c && (this.current.Si = function() {
                c(a)
            }
            )
        }
        uN(a, b, c) {
            this.T.qa(this.nk(a, b, c))
        }
        vN(a, b, c) {
            this.T.ub(this.nk(a, b, c))
        }
        sN(a, b, c) {
            this.T.ka(this.nk(a, b, c))
        }
        oN(a, b, c) {
            this.T.o(this.nk(a, b, c))
        }
        pN(a, b, c) {
            this.T.s(this.nk(a, b, c))
        }
        dd(a, b, c) {
            this.T.aa(this.nk(a, b, c))
        }
        nk(a, b, c) {
            c = Aa.sm(100 * a.HI)(c);
            a = a.value;
            return a + (b.value - a) * c
        }
    }
    Ta.g = !0;
    Object.assign(Ta.prototype, {
        j: Ta
    });
    class Rf {
        constructor(a, b) {
            this.value = a;
            this.HI = b
        }
    }
    Rf.g = !0;
    Object.assign(Rf.prototype, {
        j: Rf
    });
    class Ia {
        constructor() {
            this.Sb = null;
            let a = []
              , b = 0;
            for (; 6 > b; )
                ++b,
                a.push(0);
            this.nb = a;
            this.frames = []
        }
        Cq(a, b, c) {
            null == c && (c = 0);
            this.Dj(0, a, b, c)
        }
        Dq(a, b, c) {
            null == c && (c = 0);
            this.Dj(1, a, b, c)
        }
        setScale(a, b, c, d) {
            null == d && (d = 0);
            this.Cq(a, c, d);
            this.Dq(b, c, d)
        }
        bB(a, b) {
            var c;
            null == c && (c = 0);
            this.Cq(a, b, c);
            this.Dq(a, b, c)
        }
        cB(a, b, c) {
            null == c && (c = 0);
            this.Dj(3, a, b, c)
        }
        dB(a, b, c) {
            null == c && (c = 0);
            this.Dj(4, a, b, c)
        }
        Fg(a, b, c, d) {
            null == d && (d = 0);
            this.cB(a, c, d);
            this.dB(b, c, d)
        }
        dd(a, b, c) {
            null == c && (c = 0);
            this.Dj(5, a, b, c)
        }
        ho(a, b, c) {
            var d;
            null == d && (d = 0);
            let e = this.nb[0];
            this.Cq(a, e, d);
            this.nb[0] += c;
            e = this.nb[1];
            this.Dq(b, e, d);
            this.nb[1] += c
        }
        Ql(a, b, c) {
            null == c && (c = 0);
            let d = this.nb[0];
            this.Cq(a, d, c);
            this.nb[0] += b;
            d = this.nb[1];
            this.Dq(a, d, c);
            this.nb[1] += b
        }
        Xr(a, b) {
            var c;
            null == c && (c = 0);
            let d = this.nb[3];
            this.cB(0, d, c);
            this.nb[3] += b;
            d = this.nb[4];
            this.dB(a, d, c);
            this.nb[4] += b
        }
        Dj(a, b, c, d) {
            this.frames.push(new Sf(a,c,new Rf(b,d)));
            this.Sb = null
        }
        zJ() {
            if (null == this.Sb) {
                this.Sb = [];
                let d = 0;
                for (; 6 > d; ) {
                    let e = d++;
                    var a = this.frames;
                    let f = [];
                    for (var b = 0; b < a.length; ) {
                        var c = a[b];
                        ++b;
                        c.cM == e && f.push(c)
                    }
                    if (0 == f.length)
                        this.Sb[e] = null;
                    else {
                        f.sort(function(g, h) {
                            return 1E5 * g.time - 1E5 * h.time | 0
                        });
                        if (0 < f[0].time) {
                            switch (e) {
                            case 0:
                            case 1:
                            case 5:
                                a = 1;
                                break;
                            default:
                                a = 0
                            }
                            f.unshift(new Sf(e,0,new Rf(a,0)))
                        }
                        a = Array(f.length);
                        b = 0;
                        for (c = f.length; b < c; ) {
                            let g = b++
                              , h = f[g];
                            a[g] = new nc(h.nK,h.time)
                        }
                        this.Sb[e] = new Uc(a,1)
                    }
                }
            }
            return this.Sb
        }
        static parse(a) {
            a = a.replace(RegExp("\\s", "g"), "");
            let b = new Ia
              , c = Object.create(null);
            c.sx = 0;
            c.sy = 1;
            c.r = 2;
            c.x = 3;
            c.y = 4;
            c.a = 5;
            let d = new ja("(s|p|sx|sy|r|x|y|a)([\\-\\d\\.]+)([<>]*)","")
              , e = new ja("([\\d\\.]+)","");
            a = a.split(",");
            let f = 0
              , g = a.length
              , h = -1
              , m = [];
            for (; f < g; ) {
                var n = a[f++];
                let q = !1;
                for (; d.match(n); ) {
                    q = !0;
                    n = d.Dc(1);
                    let p = parseFloat(d.Dc(2))
                      , v = d.Dc(3);
                    switch (n) {
                    case "p":
                        m.push(4);
                        m.push(3);
                        break;
                    case "s":
                        m.push(1);
                        m.push(0);
                        break;
                    default:
                        m.push(c[n])
                    }
                    for (; 0 < m.length; )
                        b.Dj(m.pop(), p, h, "<" == v ? -100 : ">" == v ? 100 : 0);
                    n = d.WK()
                }
                q || (e.match(n),
                h = parseFloat(e.Dc(1)))
            }
            return b
        }
    }
    Ia.g = !0;
    Object.assign(Ia.prototype, {
        j: Ia
    });
    class Sf {
        constructor(a, b, c) {
            this.cM = a;
            this.time = b;
            this.nK = c
        }
    }
    Sf.g = !0;
    Object.assign(Sf.prototype, {
        j: Sf
    });
    class wa extends kb {
        constructor(a, b) {
            a = new uc(null != a ? a.node : null);
            super(a);
            this.effect = new gd(b);
            a.df(this.effect);
            b = this.effect.size;
            a.kb(b.x, b.y)
        }
        H() {
            null != this.B && (this.B.H(),
            this.mb = this.effect = null,
            super.H())
        }
        ff(a) {
            this.effect.H();
            this.effect = new gd(a);
            a = this.B;
            a.df(this.effect);
            let b = this.effect.size;
            a.kb(b.x, b.y)
        }
        Qh(a) {
            null == a && (a = !0);
            this.effect.ve && this.effect.shape();
            this.effect.XI(a)
        }
        shape() {
            this.effect.shape()
        }
        Ib(a, b) {
            this.effect.Ib(a, b);
            this.B.kb(a, b)
        }
        Xa(a) {
            this.effect.Xa(a)
        }
        Xb(a, b) {
            this.effect.Xb(a, b)
        }
        $o() {
            return this.effect.$o()
        }
        Fc(a) {
            this.effect.Fc(a)
        }
        Ws() {
            return this.effect.Ws()
        }
        jq() {
            this.effect.jq()
        }
        Iu(a) {
            this.effect.Iu(a)
        }
        yq(a) {
            this.effect.yq(a)
        }
        Mh(a) {
            this.effect.Mh(a)
        }
        xf(a, b) {
            null == b && (b = !0);
            this.shape();
            var c = this.effect.Sf.Pa;
            c = new W(c.m,c.C,c.A,c.D);
            if (c.m >= c.A || c.C >= c.D || a == this)
                return c;
            b && (Ca.jf(this.B),
            null == a || Ca.pt(this.B, a.B) || Ca.jf(a.B));
            return Ca.oO(this.B, null == a ? this.B.yy() : a.B, c)
        }
        Nj() {
            let a = this.xf(this);
            a.m >= a.A || a.C >= a.D ? this.de(0, 0) : this.de((a.m + a.A) / 2, (a.C + a.D) / 2)
        }
        bm() {
            let a = this.xf(this);
            a.m >= a.A || a.C >= a.D ? this.Qf(0, 0) : this.Qf((a.m + a.A) / 2, (a.C + a.D) / 2)
        }
        qa() {
            throw 24;
        }
        ub() {
            throw 25;
        }
        ra() {
            return 404
        }
    }
    wa.g = !0;
    wa.u = kb;
    Object.assign(wa.prototype, {
        j: wa
    });
    class gh {
        constructor(a) {
            this.T = a;
            this.channels = 0;
            this.Gs = [];
            this.repeat = 0;
            this.easing = Aa.nz()
        }
        cC(a, b) {
            this.pj(0, a, .1, void 0, null);
            this.pj(1, b, .1, void 0, null)
        }
        scale(a, b, c, d, e) {
            this.pj(4, a, b, c, d, e);
            return this
        }
        rotation(a, b, c, d, e) {
            this.pj(5, a, b, c, d, e);
            return this
        }
        alpha(a, b, c, d, e) {
            this.pj(6, a, b, c, d, e);
            return this
        }
        ZN() {
            let a = this.T.B.controllers;
            for (; null != a; ) {
                let b = a.next;
                203 == a.type && a.stop();
                a = b
            }
            this.channels = 0
        }
        pj(a, b, c, d, e, f) {
            let g;
            switch (a) {
            case 0:
                g = this.T.$a();
                break;
            case 1:
                g = this.T.Oa;
                break;
            case 2:
                g = this.T.pb;
                break;
            case 3:
                g = this.T.Mc;
                break;
            case 4:
                g = this.T.pb;
                break;
            case 5:
                g = this.T.Od;
                break;
            case 6:
                g = this.T.xc
            }
            let h = this.Ts(a);
            h.pj(a, g, b, c, null == d ? Aa.nz() : d);
            h.Bg = null == e ? 0 : e;
            this.Gs[a] = f;
            this.channels |= 1 << a
        }
        Ts(a) {
            let b, c = this.T.B.controllers;
            if (null != c)
                if (0 < (this.channels & 1 << a))
                    for (; null != c; ) {
                        if (203 == c.type && (b = c,
                        b.key == a))
                            return b.xg = O(this, this.xg),
                            b.If = O(this, this.If),
                            b;
                        c = c.next
                    }
                else
                    for (; null != c; ) {
                        if (203 == c.type && c.Uj)
                            return b = c,
                            b.xg = O(this, this.xg),
                            b.If = O(this, this.If),
                            b;
                        c = c.next
                    }
            b = new Wd;
            b.xg = O(this, this.xg);
            b.If = O(this, this.If);
            this.T.B.no(b);
            return b
        }
        If(a, b) {
            let c = this.T;
            switch (a) {
            case 0:
                c.o(b);
                break;
            case 1:
                c.s(b);
                break;
            case 2:
                c.qa(b);
                break;
            case 3:
                c.ub(b);
                break;
            case 4:
                c.J(b);
                break;
            case 5:
                c.ka(b);
                break;
            case 6:
                c.aa(b)
            }
        }
        xg(a) {
            let b = this.Gs[a];
            null != b && (this.Gs[a] = null,
            b())
        }
    }
    gh.g = !0;
    Object.assign(gh.prototype, {
        j: gh
    });
    class jd {
    }
    jd.g = !0;
    jd.ke = !0;
    Object.assign(jd.prototype, {
        j: jd
    });
    class Dc {
        constructor(a) {
            let b = this;
            this.id = setInterval(function() {
                b.Mf()
            }, a)
        }
        stop() {
            null != this.id && (clearInterval(this.id),
            this.id = null)
        }
        Mf() {}
        static delay(a, b) {
            let c = new Dc(b);
            c.Mf = function() {
                c.stop();
                a()
            }
            ;
            return c
        }
    }
    Dc.g = !0;
    Object.assign(Dc.prototype, {
        j: Dc
    });
    class Pa {
        constructor(a) {
            this.length = a.byteLength;
            this.b = new Uint8Array(a);
            this.b.OH = a;
            a.QJ = this;
            a.kx = this.b
        }
        ec(a, b, c) {
            if (0 > a || 0 > b || a + b > this.length)
                throw 12;
            null == c && (c = ge.Gr);
            let d = ""
              , e = this.b
              , f = a;
            a += b;
            switch (c.Mr) {
            case 0:
                for (; f < a; )
                    if (c = e[f++],
                    128 > c) {
                        if (0 == c)
                            break;
                        d += String.fromCodePoint(c)
                    } else
                        224 > c ? (c = (c & 63) << 6 | e[f++] & 127,
                        d += String.fromCodePoint(c)) : 240 > c ? (c = (c & 31) << 12 | (e[f++] & 127) << 6 | e[f++] & 127,
                        d += String.fromCodePoint(c)) : (c = (c & 15) << 18 | (e[f++] & 127) << 12 | (e[f++] & 127) << 6 | e[f++] & 127,
                        d += String.fromCodePoint(c));
                break;
            case 1:
                for (; f < a; )
                    c = e[f++] | e[f++] << 8,
                    d += String.fromCodePoint(c)
            }
            return d
        }
        toString() {
            return this.ec(0, this.length)
        }
        static Oz(a) {
            if (void 0 == ge.fw) {
                for (var b = new Uint8Array(a.length << 1), c = 0, d = a.length; c < d; ) {
                    let e = c++
                      , f = a.charCodeAt(e);
                    b[e << 1] = f & 255;
                    b[e << 1 | 1] = f >> 8
                }
                return new Pa(b.buffer)
            }
            b = [];
            for (c = 0; c < a.length; )
                d = a.charCodeAt(c++),
                55296 <= d && 56319 >= d && (d = d - 55232 << 10 | a.charCodeAt(c++) & 1023),
                127 >= d ? b.push(d) : (2047 >= d ? b.push(192 | d >> 6) : (65535 >= d ? b.push(224 | d >> 12) : (b.push(240 | d >> 18),
                b.push(128 | d >> 12 & 63)),
                b.push(128 | d >> 6 & 63)),
                b.push(128 | d & 63));
            return new Pa((new Uint8Array(b)).buffer)
        }
        static Ri(a) {
            let b = a.QJ;
            return null != b ? b : new Pa(a)
        }
    }
    Pa.g = !0;
    Object.assign(Pa.prototype, {
        j: Pa
    });
    var ge = gg["haxe.io.Encoding"] = {
        xw: !0,
        ww: null,
        Gr: {
            Dw: "UTF8",
            Mr: 0,
            Jl: "haxe.io.Encoding",
            toString: sa
        },
        fw: {
            Dw: "RawNative",
            Mr: 1,
            Jl: "haxe.io.Encoding",
            toString: sa
        }
    };
    ge.ww = [ge.Gr, ge.fw];
    class sc {
        static encode(a, b) {
            null == b && (b = !0);
            let c = (new Tf(sc.Av)).LI(a).toString();
            if (b)
                switch (a.length % 3) {
                case 1:
                    c += "==";
                    break;
                case 2:
                    c += "="
                }
            return c
        }
        static decode(a, b) {
            null == b && (b = !0);
            if (b)
                for (; 61 == ta.qs(a, a.length - 1); )
                    a = ta.substr(a, 0, -1);
            return (new Tf(sc.Av)).mI(Pa.Oz(a))
        }
    }
    sc.g = !0;
    class Tf {
        constructor(a) {
            let b = a.length
              , c = 1;
            for (; b > 1 << c; )
                ++c;
            if (8 < c || b != 1 << c)
                throw 13;
            this.ii = a;
            this.Fz = c
        }
        LI(a) {
            let b = this.Fz
              , c = this.ii
              , d = 8 * a.length / b | 0
              , e = new Pa(new ArrayBuffer(d + (0 == 8 * a.length % b ? 0 : 1)))
              , f = 0
              , g = 0
              , h = (1 << b) - 1
              , m = 0
              , n = 0;
            for (; n < d; ) {
                for (; g < b; )
                    g += 8,
                    f <<= 8,
                    f |= a.b[m++];
                g -= b;
                e.b[n++] = c.b[f >> g & h]
            }
            0 < g && (e.b[n++] = c.b[f << b - g & h]);
            return e
        }
        UJ() {
            let a = [];
            for (var b = 0; 256 > b; )
                a[b++] = -1;
            b = 0;
            let c = this.ii.length;
            for (; b < c; ) {
                let d = b++;
                a[this.ii.b[d]] = d
            }
            this.BB = a
        }
        mI(a) {
            let b = this.Fz;
            null == this.BB && this.UJ();
            let c = this.BB
              , d = a.length * b >> 3
              , e = new Pa(new ArrayBuffer(d))
              , f = 0
              , g = 0
              , h = 0
              , m = 0;
            for (; m < d; ) {
                for (; 8 > g; ) {
                    g += b;
                    f <<= b;
                    let n = c[a.b[h++]];
                    if (-1 == n)
                        throw 14;
                    f |= n
                }
                g -= 8;
                e.b[m++] = f >> g & 255
            }
            return e
        }
    }
    Tf.g = !0;
    Object.assign(Tf.prototype, {
        j: Tf
    });
    class cb {
        constructor() {
            this.G = {}
        }
        get(a) {
            return this.G[a]
        }
        remove(a) {
            if (!this.G.hasOwnProperty(a))
                return !1;
            delete this.G[a];
            return !0
        }
        keys() {
            let a = [];
            for (var b in this.G)
                this.G.hasOwnProperty(b) && a.push(+b);
            return new Ac(a)
        }
        iterator() {
            return {
                $p: this.G,
                Rm: this.keys(),
                bb: function() {
                    return this.Rm.bb()
                },
                next: function() {
                    let a = this.Rm.next();
                    return this.$p[a]
                }
            }
        }
    }
    cb.g = !0;
    cb.ob = [jd];
    Object.assign(cb.prototype, {
        j: cb
    });
    class jf {
        constructor() {
            this.G = {
                yj: {}
            }
        }
        set(a, b) {
            let c = a.Ce;
            null == c && (c = a.Ce = ia.mr++);
            this.G[c] = b;
            this.G.yj[c] = a
        }
        get(a) {
            return this.G[a.Ce]
        }
        remove(a) {
            a = a.Ce;
            if (null == this.G.yj[a])
                return !1;
            delete this.G[a];
            delete this.G.yj[a];
            return !0
        }
        keys() {
            let a = [];
            for (var b in this.G.yj)
                this.G.hasOwnProperty(b) && a.push(this.G.yj[b]);
            return new Ac(a)
        }
        iterator() {
            return {
                $p: this.G,
                Rm: this.keys(),
                bb: function() {
                    return this.Rm.bb()
                },
                next: function() {
                    let a = this.Rm.next();
                    return this.$p[a.Ce]
                }
            }
        }
    }
    jf.g = !0;
    jf.ob = [jd];
    Object.assign(jf.prototype, {
        j: jf
    });
    class ed {
        constructor() {
            this.G = Object.create(null)
        }
        get(a) {
            return this.G[a]
        }
        keys() {
            return new hh(this.G)
        }
    }
    ed.g = !0;
    ed.ob = [jd];
    Object.assign(ed.prototype, {
        j: ed
    });
    class hh {
        constructor(a) {
            this.G = a;
            this.keys = Object.keys(a);
            this.length = this.keys.length;
            this.current = 0
        }
        bb() {
            return this.current < this.length
        }
        next() {
            return this.keys[this.current++]
        }
    }
    hh.g = !0;
    Object.assign(hh.prototype, {
        j: hh
    });
    class ih {
        constructor() {
            this.size = this.i = 0
        }
        zH(a) {
            this.i == this.size && this.grow(1);
            this.view.setUint8(this.i++, a)
        }
        grow(a) {
            var b = this.i + a;
            for (a = 0 == this.size ? 16 : this.size; a < b; )
                a = 3 * a >> 1;
            b = new ArrayBuffer(a);
            let c = new Uint8Array(b);
            0 < this.size && c.set(this.rO);
            this.size = a;
            this.buffer = b;
            this.rO = c;
            this.view = new DataView(this.buffer)
        }
        wm() {
            if (0 == this.size)
                return new Pa(new ArrayBuffer(0));
            let a = new Pa(this.buffer);
            a.length = this.i;
            return a
        }
    }
    ih.g = !0;
    Object.assign(ih.prototype, {
        j: ih
    });
    class Uf {
        ha() {
            throw 26;
        }
        Zk(a, b, c) {
            let d = c
              , e = a.b;
            if (0 > b || 0 > c || b + c > a.length)
                throw 15;
            try {
                for (; 0 < d; )
                    e[b] = this.ha(),
                    ++b,
                    --d
            } catch (f) {
                if (!(haxe.Exception.JO(f).MO()instanceof haxe.KO.IO))
                    throw f;
            }
            return c - d
        }
        kM(a, b) {
            for (var c = 0; 0 < b; ) {
                let d = this.Zk(a, c, b);
                if (0 == d)
                    throw 16;
                c += d;
                b -= d
            }
        }
        vA() {
            let a = new ih, b;
            for (; ; ) {
                b = this.ha();
                if (0 == b)
                    break;
                a.zH(b)
            }
            a.wm()
        }
        jM() {
            let a = this.Kf()
              , b = this.Kf();
            return this.oo ? kd.Qy(b, a) : kd.Qy(a, b)
        }
        Ob() {
            var a = this.ha();
            let b = this.ha();
            a = this.oo ? b | a << 8 : a | b << 8;
            return 0 != (a & 32768) ? a - 65536 : a
        }
        cd() {
            let a = this.ha()
              , b = this.ha();
            return this.oo ? b | a << 8 : a | b << 8
        }
        uA() {
            let a = this.ha()
              , b = this.ha()
              , c = this.ha();
            return this.oo ? c | b << 8 | a << 16 : a | b << 8 | c << 16
        }
        Kf() {
            let a = this.ha()
              , b = this.ha()
              , c = this.ha()
              , d = this.ha();
            return this.oo ? d | c << 8 | b << 16 | a << 24 : a | b << 8 | c << 16 | d << 24
        }
        Yp(a, b) {
            let c = new Pa(new ArrayBuffer(a));
            this.kM(c, a);
            return c.ec(0, a, b)
        }
    }
    Uf.g = !0;
    Object.assign(Uf.prototype, {
        j: Uf
    });
    class ec extends Uf {
        constructor(a, b, c) {
            super();
            null == b && (b = 0);
            null == c && (c = a.length - b);
            if (0 > b || 0 > c || b + c > a.length)
                throw 17;
            this.b = a.b;
            this.i = b;
            this.JB = this.Hi = c
        }
        ha() {
            if (0 == this.Hi)
                throw 18;
            this.Hi--;
            return this.b[this.i++]
        }
        Zk(a, b, c) {
            if (0 > b || 0 > c || b + c > a.length)
                throw 19;
            if (0 == this.Hi && 0 < c)
                throw 20;
            this.Hi < c && (c = this.Hi);
            let d = this.b;
            a = a.b;
            let e = 0
              , f = c;
            for (; e < f; ) {
                let g = e++;
                a[b + g] = d[this.i + g]
            }
            this.i += c;
            this.Hi -= c;
            return c
        }
    }
    ec.g = !0;
    ec.u = Uf;
    Object.assign(ec.prototype, {
        j: ec
    });
    class kd {
        static Qy(a, b) {
            kd.dt.setInt32(0, a, !0);
            kd.dt.setInt32(4, b, !0);
            return kd.dt.getFloat64(0, !0)
        }
    }
    kd.g = !0;
    class Ac {
        constructor(a) {
            this.current = 0;
            this.Sw = a
        }
        bb() {
            return this.current < this.Sw.length
        }
        next() {
            return this.Sw[this.current++]
        }
    }
    Ac.g = !0;
    Object.assign(Ac.prototype, {
        j: Ac
    });
    class jh {
        constructor(a) {
            this.id = a;
            this.state = 0;
            this.Oj = !1
        }
        Vf() {
            return 1 == this.state
        }
        Xh() {
            return 3 == this.state
        }
        up() {
            return 1 != this.state ? 2 == this.state : !0
        }
        fj(a) {
            if (this.state != a)
                switch (this.state = a,
                a) {
                case 1:
                    this.Oj = !0;
                    break;
                case 3:
                    this.Oj = !0
                }
        }
        update() {
            switch (this.state) {
            case 1:
                this.Oj ? this.Oj = !1 : this.state = 2;
                break;
            case 3:
                this.Oj ? this.Oj = !1 : this.state = 0
            }
        }
    }
    jh.g = !0;
    Object.assign(jh.prototype, {
        j: jh
    });
    class Vf {
        constructor() {
            this.state = null;
            this.enabled = !0
        }
    }
    Vf.g = !0;
    Object.assign(Vf.prototype, {
        j: Vf
    });
    class Wf {
        constructor() {
            this.enabled = !0;
            this.buttons = []
        }
        update(a) {
            let b = 0
              , c = this.buttons;
            for (; b < c.length; )
                c[b++].update(a)
        }
        Vf(a) {
            if (!this.enabled)
                return !1;
            a = this.vm(a);
            return null == a ? !1 : a.Vf()
        }
        Xh(a) {
            if (!this.enabled)
                return !1;
            a = this.vm(a);
            return null == a ? !1 : a.Xh()
        }
        reset() {
            this.buttons = []
        }
        Up(a) {
            let b = this.vm(a);
            null == b && (b = new jh(a),
            this.buttons.push(b));
            b.fj(1)
        }
        release(a) {
            a = this.vm(a);
            null != a && a.fj(3)
        }
        vm(a) {
            let b = 0
              , c = this.buttons.length;
            for (; b < c; ) {
                let d = this.buttons[b];
                if (d.id == a)
                    return d;
                ++b
            }
            return null
        }
    }
    Wf.g = !0;
    Object.assign(Wf.prototype, {
        j: Wf
    });
    class pe extends Vf {
        constructor(a) {
            super();
            this.target = null != a ? a : window;
            this.yz = 0;
            this.SA(1);
            this.state = new Tb;
            this.Ed = new Td;
            this.Iz = 4;
            this.Qt = 0;
            this.touches = {};
            window.document.body.style.setProperty("touch-action", "none");
            this.Ur()
        }
        SA(a) {
            this.yz = Math.min(a, 5)
        }
        FJ(a) {
            return 4 > a ? 0 : a - 4
        }
        XL(a) {
            if (this.enabled)
                if ("mouse" == a.pointerType) {
                    var b = a.button + 1;
                    3 < b || (this.Uf(a, b),
                    this.state.Up(b),
                    this.state.Up(0),
                    a = this.state.position[b],
                    b = this.state.position[0],
                    b.x = a.x,
                    b.y = a.y)
                } else
                    this.Qt != this.yz && (b = this.Iz++,
                    this.touches["" + a.pointerId] = b,
                    this.Uf(a, b),
                    this.Qt++,
                    this.state.Up(b),
                    4 == b && (this.state.Up(0),
                    a = this.state.position[b],
                    b = this.state.position[0],
                    b.x = a.x,
                    b.y = a.y))
        }
        gA(a) {
            a.stopPropagation();
            if (this.enabled)
                if ("mouse" == a.pointerType)
                    a = a.button + 1,
                    3 < a || (this.state.release(a),
                    this.state.release(0));
                else {
                    var b = this.touches[a.pointerId];
                    null != b && (delete this.touches[a.pointerId],
                    this.Uf(a, b),
                    this.state.release(b),
                    0 == --this.Qt && (this.Iz = 4,
                    this.state.release(0),
                    a = this.state.position[b],
                    b = this.state.position[0],
                    b.x = a.x,
                    b.y = a.y))
                }
        }
        WL(a) {
            this.gA(a)
        }
        YL(a) {
            if (this.enabled)
                if ("mouse" == a.pointerType)
                    this.Uf(a, 0),
                    this.state.Qi[0][1] = !0;
                else {
                    var b = this.touches[a.pointerId];
                    null != b && (this.Uf(a, b),
                    this.state.Qi[b][1] = !0,
                    4 == b && (this.state.Qi[0][1] = !0,
                    a = this.state.position[b],
                    b = this.state.position[0],
                    b.x = a.x,
                    b.y = a.y))
                }
        }
        Uf(a, b) {
            let c = a.clientX;
            a = a.clientY;
            if (this.target instanceof Element) {
                var d = this.target.getBoundingClientRect();
                c -= d.left;
                a -= d.top
            }
            d = window.devicePixelRatio;
            b = this.state.position[b];
            b.x = c * d | 0;
            b.y = a * d | 0
        }
        addListener(a, b, c) {
            null == c && (c = !1);
            this.target.addEventListener(a, b, c);
            "pointerup" == a && window.addEventListener(a, b, c)
        }
        Ur() {
            this.addListener("pointerdown", O(this, this.XL));
            this.addListener("pointerup", O(this, this.gA));
            this.addListener("pointercancel", O(this, this.WL));
            this.addListener("pointermove", O(this, this.YL))
        }
    }
    pe.g = !0;
    pe.u = Vf;
    Object.assign(pe.prototype, {
        j: pe
    });
    class Tb extends Wf {
        constructor() {
            super();
            for (var a = [], b = 0; 9 > b; )
                ++b,
                a.push(new Qa(Tb.bo,Tb.bo));
            this.position = a;
            a = [];
            for (b = 0; 9 > b; )
                ++b,
                a.push([!1, !1]);
            this.Qi = a;
            a = [];
            for (b = 0; 9 > b; )
                ++b,
                a.push(0);
            this.cq = a
        }
        update(a) {
            super.update(a);
            for (a = 0; 9 > a; ) {
                var b = a++;
                this.Qi[b][0] = this.Qi[b][1];
                this.Qi[b][1] = !1;
                var c = this.cq[b];
                switch (c) {
                case 1:
                    this.cq[b] = 0;
                    c = this.position[b];
                    let d = Tb.bo;
                    c.x = d;
                    c.y = d;
                    4 == b && (b = this.position[0],
                    c = Tb.bo,
                    b.x = c,
                    b.y = c);
                    break;
                case 2:
                    this.cq[b] = c - 1
                }
            }
        }
        EO(a) {
            return this.Qi[a][0]
        }
        Vf(a) {
            return super.Vf(a)
        }
        Xh(a) {
            return super.Xh(a)
        }
        up(a) {
            let b = this.vm(a);
            return null == b ? !1 : this.Vf(a) ? !0 : b.up()
        }
        release(a) {
            super.release(a);
            4 <= a && (this.cq[a] = 2)
        }
    }
    Tb.g = !0;
    Tb.u = Wf;
    Object.assign(Tb.prototype, {
        j: Tb
    });
    class Sa {
        static hJ(a) {
            if (null == a)
                return null;
            if (a instanceof Array)
                return Array;
            let b = a.j;
            if (null != b)
                return b;
            a = Sa.zw(a);
            return null != a ? Sa.nH(a) : null
        }
        static Kl(a, b) {
            if (null == a)
                return "null";
            if (5 <= b.length)
                return "<...>";
            var c = typeof a;
            "function" == c && (a.g || a.xw) && (c = "object");
            switch (c) {
            case "function":
                return "<function>";
            case "object":
                if (a.Jl) {
                    var d = gg[a.Jl].ww[a.Mr];
                    c = d.Dw;
                    if (d.mH) {
                        b += "\t";
                        var e = []
                          , f = 0;
                        for (d = d.mH; f < d.length; ) {
                            let g = d[f];
                            f += 1;
                            e.push(Sa.Kl(a[g], b))
                        }
                        return c + "(" + e.join(",") + ")"
                    }
                    return c
                }
                if (a instanceof Array) {
                    c = "[";
                    b += "\t";
                    e = 0;
                    for (f = a.length; e < f; )
                        d = e++,
                        c += (0 < d ? "," : "") + Sa.Kl(a[d], b);
                    return c + "]"
                }
                try {
                    e = a.toString
                } catch (g) {
                    return "???"
                }
                if (null != e && e != Object.toString && "function" == typeof e && (c = a.toString(),
                "[object Object]" != c))
                    return c;
                c = "{\n";
                b += "\t";
                e = null != a.hasOwnProperty;
                f = null;
                for (f in a)
                    e && !a.hasOwnProperty(f) || "prototype" == f || "__class__" == f || "__super__" == f || "__interfaces__" == f || "__properties__" == f || (2 != c.length && (c += ", \n"),
                    c += b + f + " : " + Sa.Kl(a[f], b));
                b = b.substring(1);
                return c + ("\n" + b + "}");
            case "string":
                return a;
            default:
                return String(a)
            }
        }
        static yw(a, b) {
            for (; ; ) {
                if (null == a)
                    return !1;
                if (a == b)
                    return !0;
                let c = a.ob;
                if (null != c && (null == a.u || a.u.ob != c)) {
                    let d = 0
                      , e = c.length;
                    for (; d < e; ) {
                        let f = c[d++];
                        if (f == b || Sa.yw(f, b))
                            return !0
                    }
                }
                a = a.u
            }
        }
        static Jr(a, b) {
            if (null == b)
                return !1;
            switch (b) {
            case Array:
                return a instanceof Array;
            case Ui:
                return "boolean" == typeof a;
            case Vi:
                return null != a;
            case Wi:
                return "number" == typeof a;
            case Xi:
                return "number" == typeof a ? (a | 0) === a : !1;
            case String:
                return "string" == typeof a;
            default:
                if (null != a)
                    if ("function" == typeof b) {
                        if (Sa.kH(a, b))
                            return !0
                    } else {
                        if ("object" == typeof b && Sa.lH(b) && a instanceof b)
                            return !0
                    }
                else
                    return !1;
                return b == Yi && null != a.g || b == Zi && null != a.xw ? !0 : null != a.Jl ? gg[a.Jl] == b : !1
            }
        }
        static kH(a, b) {
            return a instanceof b ? !0 : b.ke ? Sa.yw(Sa.hJ(a), b) : !1
        }
        static zw(a) {
            a = Sa.oH.call(a).slice(8, -1);
            return "Object" == a || "Function" == a || "Math" == a || "JSON" == a ? null : a
        }
        static lH(a) {
            return null != Sa.zw(a)
        }
        static nH(a) {
            return ia[a]
        }
    }
    Sa.g = !0;
    class sh {
        static ty() {
            try {
                let a = window.localStorage;
                a.getItem("");
                if (0 == a.length) {
                    let b = "_hx_" + Math.random();
                    a.setItem(b, b);
                    a.removeItem(b)
                }
                return a
            } catch (a) {
                return null
            }
        }
    }
    sh.g = !0;
    class W {
        constructor(a, b, c, d) {
            this.m = a;
            this.C = b;
            this.A = c;
            this.D = d
        }
        add(a) {
            a.m < this.m && (this.m = a.m);
            a.A > this.A && (this.A = a.A);
            a.C < this.C && (this.C = a.C);
            a.D > this.D && (this.D = a.D)
        }
        Wr(a) {
            let b = a.x;
            b < this.m && (this.m = b);
            b > this.A && (this.A = b);
            a = a.y;
            a < this.C && (this.C = a);
            a > this.D && (this.D = a)
        }
        scale(a, b) {
            if (b) {
                b = (this.A - this.m) / 2;
                let c = this.m + b;
                this.m = c - b * a;
                this.A = c + b * a;
                b = (this.D - this.C) / 2;
                c = this.C + b;
                this.C = c - b * a;
                this.D = c + b * a
            } else
                this.m *= a,
                this.C *= a,
                this.A *= a,
                this.D *= a
        }
        ih(a) {
            var b = this.A - this.m;
            let c = this.D - this.C;
            var d = b / a;
            let e = c / 1;
            if (d <= e)
                return b = this.C + (c - d) / 2,
                new W(this.m,b,this.A,b + d);
            d = a * e;
            b = this.m + (b - d) / 2;
            return new W(b,this.C,b + d,this.D)
        }
    }
    W.g = !0;
    Object.assign(W.prototype, {
        j: W
    });
    class fh {
        constructor(a, b, c, d) {
            this.m = a;
            this.C = b;
            this.A = c;
            this.D = d
        }
    }
    fh.g = !0;
    Object.assign(fh.prototype, {
        j: fh
    });
    class Ti {
        static clone(a) {
            return new E(a.x,a.y,a.z,a.w)
        }
    }
    class Aa {
        static nz() {
            return function(a) {
                return a
            }
        }
        static sm(a) {
            let b = (-100 > a ? -100 : 100 < a ? 100 : a) / 100;
            return function(c) {
                return 0 == b ? c : 0 > b ? c * (c * -b + 1 + b) : c * ((2 - c) * b + (1 - b))
            }
        }
        static kA() {
            return function(a) {
                return Math.pow(a, 2)
            }
        }
        static $L() {
            return function(a) {
                return 1 > (a *= 2) ? .5 * Math.pow(a, 2) : 1 - .5 * Math.abs(Math.pow(2 - a, 2))
            }
        }
        static Jf() {
            return function(a) {
                return 1 - Math.pow(1 - a, 2)
            }
        }
        static IH() {
            var a = .1;
            null == a && (a = .1);
            let b = 17.0158 * a;
            return function(c) {
                --c;
                return c * c * ((b + 1) * c + b) + 1
            }
        }
        static Mx(a) {
            var b = .5;
            null == b && (b = .3);
            null == a && (a = 0);
            let c, d;
            1 > a ? (d = 1,
            c = .25 * b) : (d = a,
            c = b / li * Math.asin(1 / d));
            return function(e) {
                return d * Math.pow(2, -10 * e) * Math.sin((e - c) * li / b) + 1
            }
        }
    }
    Aa.g = !0;
    class Qa {
        constructor(a, b) {
            this.x = a;
            this.y = b
        }
    }
    Qa.g = !0;
    Object.assign(Qa.prototype, {
        j: Qa
    });
    class ki {
        static gO(a, b, c, d) {
            return 0 <= a && a <= c && 0 <= b ? b <= d : !1
        }
    }
    ki.g = !0;
    class Gg {
        static Uu(a, b, c, d, e) {
            a -= c;
            b -= d;
            return a * a + b * b < e * e
        }
    }
    Gg.g = !0;
    class Oh {
        static test(a, b) {
            return a.m >= b.A ? !1 : a.A <= b.m ? !1 : a.C >= b.D ? !1 : a.D <= b.C ? !1 : !0
        }
    }
    Oh.g = !0;
    class Xf {
        constructor(a) {
            this.wN(a)
        }
        wN(a) {
            this.seed = a
        }
        Yk() {
            return .5 > this.gh()
        }
        Ag(a, b) {
            a -= .4999;
            return Math.round(a + (b + .4999 - a) * this.gh())
        }
        pm(a, b) {
            return a + (b - a) * this.gh()
        }
        Nx(a) {
            return this.pm(-a, a)
        }
        bc() {
            return this.gh() - this.gh()
        }
    }
    Xf.g = !0;
    Object.assign(Xf.prototype, {
        j: Xf
    });
    class Yf extends Xf {
        constructor() {
            super(0)
        }
        gh() {
            return Math.random()
        }
    }
    Yf.g = !0;
    Yf.u = Xf;
    Object.assign(Yf.prototype, {
        j: Yf
    });
    class vc extends ha {
        constructor() {
            super();
            this.Mm = (new ja("(iPad|iPhone)","g")).match(ia.navigator.platform);
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (this.Mm = !0)
        }
        Nb() {
            return 0
        }
        Ta() {
            super.Ta();
            this.Y.window.canvas.style.visibility = "hidden";
            this.Y.Ea.ef(0);
            this.Cd = window.document.createElement("div");
            this.Cd.style.display = "flex";
            this.Cd.style.position = "fixed";
            this.Cd.style.left = "0px";
            this.Cd.style.top = "0px";
            this.Cd.style.width = "100%";
            this.Cd.style.height = "100%";
            this.Cd.style.justifyContent = "center";
            this.Cd.style.alignItems = "center";
            window.document.body.appendChild(this.Cd);
            try {
                this.video = window.document.createElement("video"),
                this.Cd.appendChild(this.video),
                this.video.muted = this.Mm,
                this.video.autoplay = !0,
                this.video.controls = !1,
                this.video.playsInline = !0,
                this.video.addEventListener("ended", O(this, this.ended)),
                this.video.addEventListener("mousedown", O(this, this.Dz)),
                this.video.addEventListener("touchend", O(this, this.LB)),
                this.url = URL.createObjectURL(this.getData()),
                this.video.src = this.url,
                this.video.style.width = "100%",
                this.video.style.height = "100%",
                this.video.style.bottom = "0",
                this.video.style.left = "0",
                this.video.style.objectFit = "contain",
                this.video.style.background = "black"
            } catch (a) {
                this.ended()
            }
        }
        Dz() {
            this.video.muted = !1
        }
        LB() {
            this.video.muted = !1
        }
        ended() {
            this.Cd.removeChild(this.video);
            window.document.body.removeChild(this.Cd);
            this.Y.window.canvas.style.visibility = "";
            this.video.removeEventListener("ended", O(this, this.ended));
            this.video.removeEventListener("mousedown", O(this, this.Dz));
            this.video.removeEventListener("touchend", O(this, this.LB));
            URL.revokeObjectURL(this.url);
            this.Y.Ea.ef(D.Vc ? 1 : 0);
            this.Uz()
        }
        Na() {
            return "VideoScene"
        }
    }
    vc.g = !0;
    vc.u = ha;
    Object.assign(vc.prototype, {
        j: vc
    });
    class Jc extends vc {
        constructor() {
            super()
        }
        dc() {
            return [1 < za.instance.window.um() ? k.Hr : k.Ir]
        }
        getData() {
            let a = k.data.G[k.Ir];
            return null != a ? a : k.data.G[k.Hr]
        }
        Uz() {
            F.Bq(1);
            F.cj(1);
            F.Du(1);
            this.Lk()
        }
        Lk() {
            this.ia(nb)
        }
        Ta() {
            super.Ta();
            this.Y.Ap(nb)
        }
        Na() {
            return "IntroVideoScene"
        }
    }
    Jc.g = !0;
    Jc.u = vc;
    Object.assign(Jc.prototype, {
        j: Jc
    });
    class Ie extends Ic {
        constructor(a, b) {
            super(a, b)
        }
        Ga() {
            super.Ga();
            r.yk = za.instance.createTexture(k.sr, 8);
            this.$ = new R;
            this.node.S(this.$.B);
            let a = new B(null,r.yk.children[0],"bubble")
              , b = Math.min(this.da.ta(), this.da.wa()) / a.X.x * .25;
            this.$.J(b);
            this.$.appendChild(a);
            a.F();
            this.text = new wa(this.$,r.yk.children[1]);
            this.text.Xa("100%");
            this.text.Ib(a.X.x, a.X.y);
            this.text.Xb(0, 0);
            this.text.Qh(!1);
            this.text.Xa("0%");
            this.text.o(-a.X.x / 2);
            this.text.s(-a.X.y / 2);
            this.text.Fc(.7 * this.text.$o());
            this.Ki = this.wd = 0;
            this.gi = Math.random() * wc * 2;
            this.hi = Math.random() * wc * 2;
            this.ij = .1 * Math.random() - .05;
            this.jj = .1 * Math.random() - .05
        }
        update(a) {
            super.update(a);
            this.time += a;
            this.$.o(this.da.ta() / 2);
            this.$.s(this.da.wa() / 2);
            var b = 50 * Math.cos(this.gi);
            a = 50 * Math.sin(this.hi);
            this.gi += this.ij;
            this.hi += this.jj;
            let c = this.$;
            c.o(c.$a() + b);
            b = this.$;
            b.s(b.Oa + a);
            switch (this.Ki) {
            case 0:
                this.wd < this.cp() && (this.wd += 5,
                100 < this.wd && (this.wd = 100));
                this.text.Xa("" + this.wd + "%");
                this.zk.$s() && 100 == this.wd && (this.Ki++,
                this.time = 0);
                break;
            case 1:
                .5 > this.time ? (this.ij *= .95,
                this.jj *= .95) : (this.Ki++,
                super.Eu())
            }
        }
        Eu() {}
        Nb() {
            return .25
        }
        Na() {
            return "LoadingOverlay"
        }
    }
    Ie.g = !0;
    Ie.u = Ic;
    Object.assign(Ie.prototype, {
        j: Ie
    });
    class sd extends ha {
        constructor() {
            super()
        }
        Ga() {
            super.Ga();
            this.wg = new B(null,this.createTexture(k.Rv));
            this.node.S(this.wg.B);
            this.eg(750, 750);
            var a = "logo";
            "ru" == k.oy() && (a = "logo_ru");
            this.Df = new B(this.Ca,r.yk.children[0],a);
            this.Df.F();
            this.Df.o(375);
            this.Df.s(200);
            this.$ = new R;
            this.$.o(375);
            this.$.s(400);
            this.Ca.appendChild(this.$);
            a = new B(this.$,r.yk.children[0],"bubble");
            a.F();
            this.text = new wa(this.$,r.yk.children[1]);
            this.text.Xa("100%");
            this.text.Ib(a.X.x, a.X.y);
            this.text.Xb(0, 0);
            this.text.Qh(!1);
            this.text.Xa("0%");
            this.text.o(-a.X.x / 2);
            this.text.s(-a.X.y / 2);
            this.text.Fc(.7 * this.text.$o());
            this.zk = this.Y.Ap(this.da.ad.sceneToLoad);
            this.Ki = this.wd = 0;
            this.gi = Math.random() * wc * 2;
            this.hi = Math.random() * wc * 2;
            this.ij = .1 * Math.random() - .05;
            this.jj = .1 * Math.random() - .05
        }
        cb() {
            super.cb();
            1 < this.da.Td() ? (this.wg.ka(0),
            this.wg.o(0),
            this.wg.Mu(this.da.ta()),
            this.wg.Lu(this.da.wa())) : (this.wg.ka(90),
            this.wg.o(this.da.ta()),
            this.wg.Mu(this.da.wa()),
            this.wg.Lu(this.da.ta()))
        }
        ua() {
            this.fa(k.Rv);
            super.ua()
        }
        update(a) {
            super.update(a);
            this.cb();
            this.$.o(375);
            this.$.s(400);
            var b = 50 * Math.cos(this.gi);
            a = 50 * Math.sin(this.hi);
            this.gi += this.ij;
            this.hi += this.jj;
            let c = this.$;
            c.o(c.$a() + b);
            b = this.$;
            b.s(b.Oa + a);
            switch (this.Ki) {
            case 0:
                this.wd < this.zk.cp() && (this.wd += 5,
                100 < this.wd && (this.wd = 100));
                this.text.Xa("" + this.wd + "%");
                this.zk.$s() && 100 == this.wd && (this.Ki++,
                this.time = 0);
                break;
            case 1:
                .5 > this.time ? (this.ij *= .95,
                this.jj *= .95) : (this.Ki++,
                this.Lk())
            }
        }
        Lk() {
            this.ia(this.da.ad.sceneToLoad)
        }
        Nb(a) {
            return null == a ? 0 : .5
        }
        Na() {
            return "LoadingScene"
        }
    }
    sd.g = !0;
    sd.u = ha;
    Object.assign(sd.prototype, {
        j: sd
    });
    class wd extends fa {
        constructor() {
            super();
            this.state = 0
        }
        Ip() {
            super.Ip();
            let a = this.parent;
            this.Ud = new B(a.Ca,r.Lb,l.eH);
            this.Ud.F();
            this.Ud.o(378);
            this.Ud.s(364);
            this.Ud.aa(0);
            this.Ue = new B(a.Ca,r.Lb,l.fH);
            this.Ue.o(368);
            this.Ue.s(354);
            this.Ue.aa(0)
        }
        update(a) {
            super.update(a);
            this.Ud.J(ya(Math.sin(10 * this.time), -1, 1, 1, 1.1));
            a = this.parent;
            switch (this.state) {
            case 0:
                if (1 > this.time)
                    break;
                this.time = 0;
                this.state = 1;
                break;
            case 1:
                a = this.xb(.5);
                this.Ud.aa(a);
                this.Ue.aa(a);
                this.Ue.o(428 + -60 * Aa.Jf()(a));
                this.Ue.s(414 + -60 * Aa.Jf()(a));
                1 == a && (this.time = 0,
                this.state = 2);
                break;
            case 2:
                var b = this.xb(.25);
                this.Ue.J(ya(b, 0, 1, 1, .9));
                1 == b && (this.time = 0,
                this.state = 3,
                a.N.Yb(a.N.Ie == l.ow ? l.nw : l.ow),
                a.rz());
                break;
            case 3:
                b = this.xb(.5);
                this.Ue.J(ya(Aa.Jf()(b), 0, 1, .9, 1));
                1 == b && (this.time = 0,
                this.state = a.N.Ie == l.nw ? 5 : 4);
                break;
            case 4:
                1 < this.time && (this.time = 0,
                this.state = 2);
                break;
            case 5:
                a = this.xb(.5),
                this.Ud.aa(1 - a),
                this.Ue.aa(1 - a),
                this.Ue.o(368 + 60 * Aa.kA()(a)),
                this.Ue.s(354 + 60 * Aa.kA()(a)),
                1 == a && this.ua()
            }
        }
    }
    wd.g = !0;
    wd.u = fa;
    Object.assign(wd.prototype, {
        j: wd
    });
    class zd extends ha {
        constructor() {
            super()
        }
        Ga() {
            super.Ga();
            this.yd = new R;
            var a = new B(this.yd,r.Lb,l.rw)
              , b = new B(this.yd,r.Lb,l.cH)
              , c = new B(this.yd,r.Lb,l.ZG);
            b.Lu(500);
            b.s(a.X.y - 1);
            c.s(b.Oa + 500 - 1);
            this.yd.F();
            a = Ha.create(null, l.$G, l.aH, l.bH);
            this.buttons.push(a);
            a.o(680);
            a.s(-20);
            this.yd.appendChild(a.l);
            this.sa(a);
            b = new wa(this.yd,r.zc);
            b.Xa(Vb.get("CANT_UNLOCK_TEXT1"));
            b.o(20);
            b.s(60);
            b.Xb(0);
            b.Ib(760, 100);
            b.Fc(80);
            a = new wa(this.yd,r.zc);
            a.Xa(Ga.ge(this.caller.ad.starCount));
            a.o(20);
            a.s(b.Oa + 90);
            a.Xb(0);
            a.Ib(760, 100);
            a.Fc(80);
            b = new B(this.yd,r.Lb,l.sw);
            c = a.xf();
            b.J(.8);
            b.o(c.A);
            b.s((c.C + c.D) / 2 - b.wa() / 2);
            b = new wa(this.yd,r.zc);
            b.Xa(Vb.get("CANT_UNLOCK_TEXT2"));
            b.o(20);
            b.s(a.Oa + 90);
            b.Xb(0);
            b.Ib(760, 100);
            b.Fc(80);
            a = new wa(this.yd,r.tm);
            a.Xa(Vb.get("CANT_UNLOCK_TEXT3"));
            a.o(20);
            a.s(b.Oa + 90 + 40);
            a.Xb(0);
            a.Mh(!0);
            a.Ib(760, 140);
            a.Fc(60);
            this.node.S(this.yd.B)
        }
        Nb() {
            return .5
        }
        Yc(a) {
            a = Aa.Jf()(1 - a);
            let b = this.node.ib;
            b.scale.x = b.scale.y = .001 + a;
            b.I = b.I & -2 | 500
        }
        Zd(a) {
            a = Aa.Mx(.5)(a);
            let b = this.node.ib;
            b.scale.x = b.scale.y = .001 + a;
            b.I = b.I & -2 | 500
        }
        pe() {
            this.sb(1) && this.Xi()
        }
        cb() {
            super.cb();
            let a = this.da.Zs().ih(1);
            var b = this.node.ib;
            b.translate.x = (a.m + a.A) / 2;
            b.translate.y = (a.C + a.D) / 2;
            b.I = b.I & -2 | 496;
            if (1 < this.da.Td())
                this.yd.J(1),
                b = this.yd.wa(),
                this.yd.J((a.D - a.C) / b * .75);
            else {
                b = 1.1;
                let c = 1 / this.da.Td();
                1 > c && (b = 1.1 * c);
                this.yd.J((a.A - a.m) / (r.Lb.Mb.Qe(l.rw).Zb.x * b))
            }
        }
        rk() {
            return !1
        }
        Na() {
            return "MissingStarsPopup"
        }
    }
    zd.g = !0;
    zd.u = ha;
    Object.assign(zd.prototype, {
        j: zd
    });
    class Qc extends vc {
        constructor() {
            super()
        }
        rk() {
            return !1
        }
        getData() {
            let a = k.data.G[k.vw];
            return null != a ? a : k.data.G[k.uw]
        }
        dc() {
            return [1 < this.Y.window.um() ? k.uw : k.vw]
        }
        Uz() {
            this.Xi()
        }
        Na() {
            return "OutroVideoScene"
        }
    }
    Qc.g = !0;
    Qc.u = vc;
    Object.assign(Qc.prototype, {
        j: Qc
    });
    class Ke extends fa {
        constructor() {
            super();
            this.l = new R;
            this.Kc = [];
            this.Sn = [];
            this.Gj = [];
            let a = 0;
            for (; 10 > a; ) {
                let c = a++;
                var b = V.pm(-wc / 2 - wc / 4, -wc / 2 + wc / 4);
                this.Sn[c] = new E(10 * Math.cos(b),10 * Math.sin(b),0,1);
                b = this.Kc[c] = new B(this.l,r.Ab,[l.iF, l.jF, l.kF][V.Ag(0, 2)]);
                b.F();
                b.J(V.pm(.75, 2));
                b.ka(360 * Math.random());
                this.Gj[c] = V.Nx(10)
            }
        }
        ua() {
            super.ua();
            this.l.H();
            this.Kc = null
        }
        update(a) {
            super.update(a);
            let b = a = 0;
            for (; 10 > b; ) {
                let c = b++;
                this.Sn[c].y += .25;
                let d = this.Kc[c];
                d.o(d.$a() + this.Sn[c].x);
                d.s(d.Oa + this.Sn[c].y);
                d.ka(d.Od + this.Gj[c]);
                3 < this.time && (d.aa(.95 * d.xc),
                .05 > d.xc && ++a)
            }
            10 == a && this.ua()
        }
    }
    Ke.g = !0;
    Ke.u = fa;
    Object.assign(Ke.prototype, {
        j: Ke
    });
    class xc extends fa {
        constructor() {
            super();
            this.Zb = null;
            this.ce = 0;
            this.l = new R
        }
        yu() {}
        setActive(a) {
            this.active = a
        }
        select() {
            this.selected = !0
        }
        $a() {
            return this.l.$a()
        }
        o(a) {
            this.l.o(a);
            return a
        }
        s(a) {
            this.l.s(a)
        }
        Eq(a) {
            this.l.s(a)
        }
        fB(a) {
            this.l.o(a - this.l.ta())
        }
    }
    xc.g = !0;
    xc.u = fa;
    Object.assign(xc.prototype, {
        j: xc
    });
    class Oc extends xc {
        constructor(a) {
            super();
            this.level = a;
            this.l = new R;
            this.icon = new B(this.l,r.Lb,l.IG);
            this.PJ = new Je(this.l.node,new W(20,10,170,160))
        }
        nN(a) {
            this.icon.Yb(l.Fr);
            let b = new wa(this.l,r.zc);
            b.Ib(this.icon.ta(), this.icon.wa());
            b.Xa(Ga.ge(this.level));
            b.Xb(0, 0);
            b.Fc(.5 * this.icon.wa());
            b.s(b.Oa - 20);
            this.Pb = new B(this.l,r.Lb,Oc.XN[a])
        }
        Gb(a) {
            return this.icon.Ie == l.Fr ? this.PJ.Gb(a) : !1
        }
    }
    Oc.g = !0;
    Oc.u = xc;
    Object.assign(Oc.prototype, {
        j: Oc
    });
    class kh {
        constructor(a, b, c) {
            this.pi = a;
            this.Cg = b;
            this.type = c
        }
    }
    kh.g = !0;
    Object.assign(kh.prototype, {
        j: kh
    });
    class Zf {
        constructor() {
            this.lm = !1;
            this.Rf(1);
            this.iq()
        }
        Rf(a) {
            this.weight = a;
            this.rp = 1 / a;
            this.tb = new t(0,Va.Lv * a)
        }
        iq() {
            this.Ya = t.Wb();
            this.a = t.Wb();
            this.i = t.Wb();
            this.$c = t.Wb();
            this.Yq = t.Wb()
        }
        lo(a, b) {
            a.lK() || this.i.add(t.ld(a, b / 1))
        }
    }
    Zf.g = !0;
    Object.assign(Zf.prototype, {
        j: Zf
    });
    class xb extends Zf {
        constructor() {
            super();
            this.oa = new t(ld,ld);
            this.yg = new t(-1,-1);
            this.sf = [];
            this.Yq = t.Wb();
            this.iq()
        }
        iq() {
            super.iq();
            this.oa = new t(ld,ld);
            this.oa.x = ld;
            this.oa.y = ld;
            this.BA()
        }
        BA() {
            this.sf = []
        }
        Cj(a, b, c) {
            this.sf.push(new kh(a,b,c))
        }
        qM(a) {
            this.sf.splice(a, 1)
        }
        MJ(a) {
            let b = this.sf
              , c = b.length
              , d = 0;
            for (; d < c; )
                if (b[d++].pi == a)
                    return !0;
            return !1
        }
        xo(a, b) {
            let c = this.sf
              , d = c.length
              , e = 0;
            for (; e < d; ) {
                let f = c[e++];
                if (f.pi == a) {
                    f.Cg = b;
                    break
                }
            }
        }
        wx(a, b, c) {
            let d = this.sf
              , e = d.length
              , f = 0;
            for (; f < e; ) {
                let g = d[f++];
                if (g.pi == a) {
                    g.pi = b;
                    g.Cg = c;
                    break
                }
            }
        }
        Cg(a) {
            let b = this.sf
              , c = b.length
              , d = 0;
            for (; d < c; ) {
                let e = b[d++];
                if (e.pi == a)
                    return e.Cg
            }
            return -1
        }
        update(a) {
            if (0 != a) {
                var b = this.Yq
                  , c = Va.current;
                this.lm ? (b.x = 0,
                b.y = 0) : 0 != c.y || 0 != c.x ? (b.x = c.x,
                b.y = c.y) : (b.x = this.tb.x * this.rp,
                b.y = this.tb.y * this.rp);
                b = a / 1 * a;
                this.a.x = this.Yq.x * b;
                this.a.y = this.Yq.y * b;
                this.oa.x == ld && (this.oa.x = this.i.x,
                this.oa.y = this.i.y);
                this.$c.x = this.i.x - this.oa.x + this.a.x;
                this.$c.y = this.i.y - this.oa.y + this.a.y;
                0 < a && (a = 1 / a,
                this.Ya.x = this.$c.x * a,
                this.Ya.y = this.$c.y * a);
                this.oa.x = this.i.x;
                this.oa.y = this.i.y;
                this.i.x += this.$c.x;
                this.i.y += this.$c.y
            }
        }
        pq() {
            var a = this.yg;
            let b = this.i
              , c = this.rp;
            let d, e = 0, f = 0;
            if (-1 != a.x)
                b.x = a.x,
                b.y = a.y;
            else {
                a = this.sf;
                for (var g = a.length, h = 0; h < g; ) {
                    var m = a[h++]
                      , n = m.pi;
                    let u = n.i;
                    var q = u.x - b.x;
                    d = u.y - b.y;
                    0 == q && 0 == d && (d = q = 1);
                    var p = Math.sqrt(q * q + d * d)
                      , v = m.Cg;
                    m = m.type;
                    if (1 == m) {
                        if (p <= v)
                            continue
                    } else if (2 == m && p >= v)
                        continue;
                    m = -1 == n.yg.x;
                    n = n.rp;
                    p = (p - v) / ((1 < p ? p : 1) * (c + n));
                    m && (e = q,
                    f = d);
                    v = c * p;
                    q *= v;
                    d *= v;
                    b.x += q;
                    b.y += d;
                    m && (q = n * p,
                    u.x -= e * q,
                    u.y -= f * q)
                }
            }
        }
    }
    xb.g = !0;
    xb.u = Zf;
    Object.assign(xb.prototype, {
        j: xb
    });
    class Va {
        static toggle() {
            Va.current.y = -Va.current.y
        }
        static iK() {
            return Va.current.y == Va.Lv ? 0 == Va.current.x : !1
        }
        static reset() {
            Va.current.x = 0;
            Va.current.y = Va.rr
        }
    }
    Va.g = !0;
    class Cc {
        constructor() {
            this.Az = this.xz = 0;
            this.Ak = [];
            this.bd = new Se;
            this.version = null;
            this.Nz = this.Nt = 0;
            this.ln = 1
        }
        load(a) {
            if (this.ez(a) || this.rt(a) || this.Di(a))
                return !1;
            this.Nt++;
            a = new $f(a,this);
            a.priority = this.Az--;
            if (this.Ak.length == this.ln)
                return this.bd.enqueue(a),
                !0;
            this.Ak.push(a);
            a.load();
            return !0
        }
        stop() {
            this.bd.clear()
        }
        bM(a) {
            if (this.ez(a) && !this.rt(a) && !this.Di(a)) {
                var b = Fa.find(this.bd, function(c) {
                    return -1 < c.rj.url.indexOf(a)
                });
                null != b && this.bd.wM(b, ++this.xz)
            }
        }
        Am(a) {
            if (0 == this.Nt)
                return 1;
            if (null == a)
                return this.Nz / this.Nt;
            let b = this;
            return Fa.count(a, function(c) {
                return b.rt(c)
            }) / a.length
        }
        ez(a) {
            function b(c) {
                return -1 < c.rj.url.indexOf(a)
            }
            return null == this.bd ? !1 : 0 < Fa.count(this.bd, b) + Fa.count(this.Ak, b)
        }
        tL(a) {
            ta.remove(this.Ak, a);
            this.Nz++;
            0 == this.bd.Z && 0 == this.Ak.length && (this.Az = this.xz = 0);
            let b = k.zf(a.rj.url);
            0 <= b && k.setData(b, a.rj.data);
            0 < this.bd.Z && (a = this.bd.qI(),
            this.Ak.push(a),
            a.load())
        }
        sL() {
            this.stop()
        }
        rt(a) {
            return k.ab(k.zf(a))
        }
        Di(a) {
            return k.Di(k.zf(a))
        }
    }
    Cc.g = !0;
    Object.assign(Cc.prototype, {
        j: Cc
    });
    class $f {
        constructor(a, b) {
            this.rj = new lh(a,b.version);
            this.bd = b
        }
        load() {
            let a = this;
            this.rj.load(function() {
                Cc.lx += k.gJ(a.rj.url);
                a.bd.tL(a);
                a.H()
            }, function() {
                a.bd.sL();
                a.H()
            })
        }
        H() {
            this.bd = null;
            this.rj.H()
        }
    }
    $f.g = !0;
    $f.ob = [Re];
    Object.assign($f.prototype, {
        j: $f
    });
    class md {
        static encode(a) {
            var b = a.length;
            let c = [1732584193, -271733879, -1732584194, 271733878]
              , d = 64
              , e = a.length;
            for (var f = []; d <= e; ) {
                var g = a.substring(d - 64, d);
                let h = 0;
                for (; 64 > h; )
                    f[h >> 2] = g.charCodeAt(h) + (g.charCodeAt(h + 1) << 8) + (g.charCodeAt(h + 2) << 16) + (g.charCodeAt(h + 3) << 24),
                    h += 4;
                md.Jt(c, f);
                d += 64
            }
            a = a.substring(d - 64);
            f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            d = 0;
            for (e = a.length; d < e; )
                f[d >> 2] |= a.charCodeAt(d) << (d % 4 << 3),
                ++d;
            f[d >> 2] |= 128 << (d % 4 << 3);
            if (55 < d)
                for (md.Jt(c, f),
                d = 0; 16 > d; )
                    f[d] = 0,
                    ++d;
            f[14] = 8 * b;
            md.Jt(c, f);
            b = md.$C;
            f = "";
            d = 0;
            for (e = c.length; d < e; )
                for (a = 0,
                g = c[d++]; 4 > a; )
                    f += b[g >> (a << 3) + 4 & 15] + b[g >> (a << 3) & 15],
                    ++a;
            return f
        }
        static Jt(a, b) {
            let c = a[0]
              , d = a[1]
              , e = a[2]
              , f = a[3]
              , g = (c + (d & e | ~d & f) & -1) + (b[0] + -680876936 & -1) & -1;
            c = (g << 7 | g >>> 25) + d & -1;
            g = (f + (c & d | ~c & e) & -1) + (b[1] + -389564586 & -1) & -1;
            f = (g << 12 | g >>> 20) + c & -1;
            g = (e + (f & c | ~f & d) & -1) + (b[2] + 606105819 & -1) & -1;
            e = (g << 17 | g >>> 15) + f & -1;
            g = (d + (e & f | ~e & c) & -1) + (b[3] + -1044525330 & -1) & -1;
            d = (g << 22 | g >>> 10) + e & -1;
            g = (c + (d & e | ~d & f) & -1) + (b[4] + -176418897 & -1) & -1;
            c = (g << 7 | g >>> 25) + d & -1;
            g = (f + (c & d | ~c & e) & -1) + (b[5] + 1200080426 & -1) & -1;
            f = (g << 12 | g >>> 20) + c & -1;
            g = (e + (f & c | ~f & d) & -1) + (b[6] + -1473231341 & -1) & -1;
            e = (g << 17 | g >>> 15) + f & -1;
            g = (d + (e & f | ~e & c) & -1) + (b[7] + -45705983 & -1) & -1;
            d = (g << 22 | g >>> 10) + e & -1;
            g = (c + (d & e | ~d & f) & -1) + (b[8] + 1770035416 & -1) & -1;
            c = (g << 7 | g >>> 25) + d & -1;
            g = (f + (c & d | ~c & e) & -1) + (b[9] + -1958414417 & -1) & -1;
            f = (g << 12 | g >>> 20) + c & -1;
            g = (e + (f & c | ~f & d) & -1) + (b[10] + -42063 & -1) & -1;
            e = (g << 17 | g >>> 15) + f & -1;
            g = (d + (e & f | ~e & c) & -1) + (b[11] + -1990404162 & -1) & -1;
            d = (g << 22 | g >>> 10) + e & -1;
            g = (c + (d & e | ~d & f) & -1) + (b[12] + 1804603682 & -1) & -1;
            c = (g << 7 | g >>> 25) + d & -1;
            g = (f + (c & d | ~c & e) & -1) + (b[13] + -40341101 & -1) & -1;
            f = (g << 12 | g >>> 20) + c & -1;
            g = (e + (f & c | ~f & d) & -1) + (b[14] + -1502002290 & -1) & -1;
            e = (g << 17 | g >>> 15) + f & -1;
            g = (d + (e & f | ~e & c) & -1) + (b[15] + 1236535329 & -1) & -1;
            d = (g << 22 | g >>> 10) + e & -1;
            g = (c + (d & f | e & ~f) & -1) + (b[1] + -165796510 & -1) & -1;
            c = (g << 5 | g >>> 27) + d & -1;
            g = (f + (c & e | d & ~e) & -1) + (b[6] + -1069501632 & -1) & -1;
            f = (g << 9 | g >>> 23) + c & -1;
            g = (e + (f & d | c & ~d) & -1) + (b[11] + 643717713 & -1) & -1;
            e = (g << 14 | g >>> 18) + f & -1;
            g = (d + (e & c | f & ~c) & -1) + (b[0] + -373897302 & -1) & -1;
            d = (g << 20 | g >>> 12) + e & -1;
            g = (c + (d & f | e & ~f) & -1) + (b[5] + -701558691 & -1) & -1;
            c = (g << 5 | g >>> 27) + d & -1;
            g = (f + (c & e | d & ~e) & -1) + (b[10] + 38016083 & -1) & -1;
            f = (g << 9 | g >>> 23) + c & -1;
            g = (e + (f & d | c & ~d) & -1) + (b[15] + -660478335 & -1) & -1;
            e = (g << 14 | g >>> 18) + f & -1;
            g = (d + (e & c | f & ~c) & -1) + (b[4] + -405537848 & -1) & -1;
            d = (g << 20 | g >>> 12) + e & -1;
            g = (c + (d & f | e & ~f) & -1) + (b[9] + 568446438 & -1) & -1;
            c = (g << 5 | g >>> 27) + d & -1;
            g = (f + (c & e | d & ~e) & -1) + (b[14] + -1019803690 & -1) & -1;
            f = (g << 9 | g >>> 23) + c & -1;
            g = (e + (f & d | c & ~d) & -1) + (b[3] + -187363961 & -1) & -1;
            e = (g << 14 | g >>> 18) + f & -1;
            g = (d + (e & c | f & ~c) & -1) + (b[8] + 1163531501 & -1) & -1;
            d = (g << 20 | g >>> 12) + e & -1;
            g = (c + (d & f | e & ~f) & -1) + (b[13] + -1444681467 & -1) & -1;
            c = (g << 5 | g >>> 27) + d & -1;
            g = (f + (c & e | d & ~e) & -1) + (b[2] + -51403784 & -1) & -1;
            f = (g << 9 | g >>> 23) + c & -1;
            g = (e + (f & d | c & ~d) & -1) + (b[7] + 1735328473 & -1) & -1;
            e = (g << 14 | g >>> 18) + f & -1;
            g = (d + (e & c | f & ~c) & -1) + (b[12] + -1926607734 & -1) & -1;
            d = (g << 20 | g >>> 12) + e & -1;
            g = (c + (d ^ e ^ f) & -1) + (b[5] + -378558 & -1) & -1;
            c = (g << 4 | g >>> 28) + d & -1;
            g = (f + (c ^ d ^ e) & -1) + (b[8] + -2022574463 & -1) & -1;
            f = (g << 11 | g >>> 21) + c & -1;
            g = (e + (f ^ c ^ d) & -1) + (b[11] + 1839030562 & -1) & -1;
            e = (g << 16 | g >>> 16) + f & -1;
            g = (d + (e ^ f ^ c) & -1) + (b[14] + -35309556 & -1) & -1;
            d = (g << 23 | g >>> 9) + e & -1;
            g = (c + (d ^ e ^ f) & -1) + (b[1] + -1530992060 & -1) & -1;
            c = (g << 4 | g >>> 28) + d & -1;
            g = (f + (c ^ d ^ e) & -1) + (b[4] + 1272893353 & -1) & -1;
            f = (g << 11 | g >>> 21) + c & -1;
            g = (e + (f ^ c ^ d) & -1) + (b[7] + -155497632 & -1) & -1;
            e = (g << 16 | g >>> 16) + f & -1;
            g = (d + (e ^ f ^ c) & -1) + (b[10] + -1094730640 & -1) & -1;
            d = (g << 23 | g >>> 9) + e & -1;
            g = (c + (d ^ e ^ f) & -1) + (b[13] + 681279174 & -1) & -1;
            c = (g << 4 | g >>> 28) + d & -1;
            g = (f + (c ^ d ^ e) & -1) + (b[0] + -358537222 & -1) & -1;
            f = (g << 11 | g >>> 21) + c & -1;
            g = (e + (f ^ c ^ d) & -1) + (b[3] + -722521979 & -1) & -1;
            e = (g << 16 | g >>> 16) + f & -1;
            g = (d + (e ^ f ^ c) & -1) + (b[6] + 76029189 & -1) & -1;
            d = (g << 23 | g >>> 9) + e & -1;
            g = (c + (d ^ e ^ f) & -1) + (b[9] + -640364487 & -1) & -1;
            c = (g << 4 | g >>> 28) + d & -1;
            g = (f + (c ^ d ^ e) & -1) + (b[12] + -421815835 & -1) & -1;
            f = (g << 11 | g >>> 21) + c & -1;
            g = (e + (f ^ c ^ d) & -1) + (b[15] + 530742520 & -1) & -1;
            e = (g << 16 | g >>> 16) + f & -1;
            g = (d + (e ^ f ^ c) & -1) + (b[2] + -995338651 & -1) & -1;
            d = (g << 23 | g >>> 9) + e & -1;
            g = (c + (e ^ (d | ~f)) & -1) + (b[0] + -198630844 & -1) & -1;
            c = (g << 6 | g >>> 26) + d & -1;
            g = (f + (d ^ (c | ~e)) & -1) + (b[7] + 1126891415 & -1) & -1;
            f = (g << 10 | g >>> 22) + c & -1;
            g = (e + (c ^ (f | ~d)) & -1) + (b[14] + -1416354905 & -1) & -1;
            e = (g << 15 | g >>> 17) + f & -1;
            g = (d + (f ^ (e | ~c)) & -1) + (b[5] + -57434055 & -1) & -1;
            d = (g << 21 | g >>> 11) + e & -1;
            g = (c + (e ^ (d | ~f)) & -1) + (b[12] + 1700485571 & -1) & -1;
            c = (g << 6 | g >>> 26) + d & -1;
            g = (f + (d ^ (c | ~e)) & -1) + (b[3] + -1894986606 & -1) & -1;
            f = (g << 10 | g >>> 22) + c & -1;
            g = (e + (c ^ (f | ~d)) & -1) + (b[10] + -1051523 & -1) & -1;
            e = (g << 15 | g >>> 17) + f & -1;
            g = (d + (f ^ (e | ~c)) & -1) + (b[1] + -2054922799 & -1) & -1;
            d = (g << 21 | g >>> 11) + e & -1;
            g = (c + (e ^ (d | ~f)) & -1) + (b[8] + 1873313359 & -1) & -1;
            c = (g << 6 | g >>> 26) + d & -1;
            g = (f + (d ^ (c | ~e)) & -1) + (b[15] + -30611744 & -1) & -1;
            f = (g << 10 | g >>> 22) + c & -1;
            g = (e + (c ^ (f | ~d)) & -1) + (b[6] + -1560198380 & -1) & -1;
            e = (g << 15 | g >>> 17) + f & -1;
            g = (d + (f ^ (e | ~c)) & -1) + (b[13] + 1309151649 & -1) & -1;
            d = (g << 21 | g >>> 11) + e & -1;
            g = (c + (e ^ (d | ~f)) & -1) + (b[4] + -145523070 & -1) & -1;
            c = (g << 6 | g >>> 26) + d & -1;
            g = (f + (d ^ (c | ~e)) & -1) + (b[11] + -1120210379 & -1) & -1;
            f = (g << 10 | g >>> 22) + c & -1;
            g = (e + (c ^ (f | ~d)) & -1) + (b[2] + 718787259 & -1) & -1;
            e = (g << 15 | g >>> 17) + f & -1;
            g = (d + (f ^ (e | ~c)) & -1) + (b[9] + -343485551 & -1) & -1;
            a[0] = c + a[0] & -1;
            a[1] = ((g << 21 | g >>> 11) + e & -1) + a[1] & -1;
            a[2] = e + a[2] & -1;
            a[3] = f + a[3] & -1
        }
    }
    md.g = !0;
    class pd {
        constructor(a) {
            this.qo = [];
            this.data = null;
            var b = new Uint8Array(a)
              , c = b.byteLength;
            if (69 == b[c - 1]) {
                var d = b[c - 6] | b[c - 5] << 8 | b[c - 4] << 16
                  , e = a.slice(c - (d + 6), c - 6);
                if (0 < (b[c - 3] & 1)) {
                    a = Pa.Ri(a.slice(0, a.byteLength - (d + 6)));
                    b = md.encode(sc.encode(a));
                    a = [];
                    for (c = 0; 32 > c; )
                        a.push(ta.qs(b, c++));
                    b = new Uint8Array(e);
                    c = 0;
                    for (d = e.byteLength; c < d; ) {
                        var f = c++;
                        b[f] ^= a[f & 31]
                    }
                }
                this.data = Pa.Ri(e);
                e = new ec(this.data);
                a = e.ha();
                for (b = 0; b < a; ) {
                    ++b;
                    d = e.ha();
                    f = e.ha();
                    c = null;
                    let g = e.cd();
                    0 < g && (c = e.Yp(g, ge.Gr));
                    0 == d ? (d = e.cd(),
                    f = new Pa(new ArrayBuffer(d)),
                    e.Zk(f, 0, d),
                    this.qo.push(new ag(c,f,null))) : this.qo.push(new ag(c,this.qo[f].data,f))
                }
            }
        }
    }
    pd.g = !0;
    Object.assign(pd.prototype, {
        j: pd
    });
    class ag {
        constructor(a, b, c) {
            this.name = a;
            this.data = b;
            this.$p = c
        }
    }
    ag.g = !0;
    Object.assign(ag.prototype, {
        j: ag
    });
    class k {
        static Qa() {
            k.data = new cb;
            k.Ek = new cb;
            k.ox = [];
            k.kq = 1;
            k.language = "en";
            k.Om = "png";
            k.Ij = null;
            k.pu = new ed;
            k.zs = new cb;
            k.decoding = new cb;
            k.to = null;
            k.lg = new cb;
            k.lg.G[0] = ["wav", "ogg", "aac"];
            k.lg.G[2] = ["png", "jpg", "avif"];
            k.lg.G[3] = ["txt", "json", "tmj", "tsj"];
            k.lg.G[1] = ["dat", "tps", "fnt", "zst"];
            k.lg.G[4] = ["mp4"]
        }
        static rN(a) {
            k.kq = a
        }
        static oy() {
            return k.language
        }
        static Au(a) {
            var b;
            null == b && (b = !1);
            null == a && (a = "en");
            a = a.toLowerCase();
            var c = k.$x();
            0 < c.length && !Fa.Yj(c, function(d) {
                return d == k.language
            }) && (a = "en");
            if (b && a != k.language)
                for (b = 0,
                c = k.be; b < c.length; ) {
                    let d = c[b];
                    ++b;
                    (new ja("{language}","")).match(d) && (k.zf(d),
                    k.eq(k.zf(d)))
                }
            k.language = a
        }
        static fN() {
            k.Om = "avif"
        }
        static nJ(a) {
            var b = new RegExp("^(" + k.Vn + "/)","");
            a = k.zi(a).replace(b, "");
            b = new ja("-(\\d)x","");
            return b.match(a) ? Ga.parseInt(b.Dc(1)) : 1
        }
        static qJ(a) {
            return k.ZK[a]
        }
        static Zx() {
            return k.Ij
        }
        static YM(a) {
            k.Ij = a
        }
        static getType(a) {
            let b = 0;
            for (; 5 > b; ) {
                let c = b++;
                if ((new ja("\\.(" + k.lg.G[c].join("|") + ")","mi")).match(a))
                    return c
            }
            throw 21;
        }
        static zi(a) {
            let b = k.be[a];
            if (null == b)
                return null;
            let c = new ja("{(?:language|image|audio|resolution)}","");
            c.match(b) && (c = new ja("{language}",""),
            c.match(b) && null != k.language && (b = b.replace(c.r, "-" + k.language)),
            c = new ja("{image}","g"),
            c.match(b) && null != k.Om && (b = b.replace(c.r, k.Om)),
            c = new ja("{audio}","g"),
            c.match(b) && null != k.Ij && (b = b.replace(c.r, k.Ij)),
            c = new ja("{resolution}","g"),
            c.match(b) && null != k.kq && (b = 1 == k.kq ? b.replace(c.r, "") : b.replace(c.r, "-" + Math.min(k.qJ(a), k.kq) + "x")));
            return "" + k.Vn + "/" + b
        }
        static xJ() {
            var a;
            null == a && (a = k.lJ());
            let b = []
              , c = 0;
            for (; c < a.length; ) {
                let d = k.zi(a[c++]);
                null != d && b.push(d)
            }
            return b
        }
        static lJ() {
            let a = []
              , b = 0
              , c = k.MAX;
            for (; b < c; )
                a.push(b++);
            return a
        }
        static iterator() {
            return new mh
        }
        static xy() {
            let a = k.aM
              , b = []
              , c = 0;
            for (; c < a.length; ) {
                let d = a[c];
                ++c;
                k.DB(d) && b.push(d)
            }
            return b
        }
        static mJ() {
            let a = k.RJ
              , b = []
              , c = 0;
            for (; c < a.length; ) {
                let d = a[c];
                ++c;
                k.DB(d) && b.push(d)
            }
            return b
        }
        static ek(a, b, c) {
            null == c && (c = !1);
            let d = RegExp("\\.(\\w+)$", "");
            a = k.zi(a).replace(d, "." + b);
            c && (a = a.replace(RegExp("\\.p\\.", ""), "."));
            return k.zf(a)
        }
        static zf(a) {
            function b(d, e) {
                a = a.replace(new RegExp(d,""), e)
            }
            if (Object.prototype.hasOwnProperty.call(k.pu.G, a))
                return Ga.parseInt(k.pu.G[a]);
            b("^(" + k.Vn + "/)(.*)", "$2");
            var c = k.be.indexOf(a);
            if (-1 != c)
                return c;
            c = k.$x();
            0 < c.length && b("-(" + c.join("|") + ")", "{language}");
            k.GL.includes(a) ? b("(\\.\\w+)$", "{resolution}$1") : b("[\\/-][124]x", "{resolution}");
            c = k.be.indexOf(a);
            if (-1 != c)
                return c;
            (new ja("(" + k.lg.G[2].join("|") + ")","g")).match(a) ? (c = k.fJ(),
            0 < c.length && (b("(.*?)\\.(" + c.join("|") + ")$", "$1.{image}"),
            b("((" + c.join("|") + ")\\/)", "{image}/"))) : (new ja("(" + k.lg.G[0].join("|") + ")","g")).match(a) && (c = k.Xo(),
            0 < c.length && (b("(.*?)\\.(" + c.join("|") + ")$", "$1.{audio}"),
            b("((" + c.join("|") + ")\\/)", "{audio}/")));
            return k.be.indexOf(a)
        }
        static ec(a) {
            a = k.data.G[a];
            if ("string" == typeof a)
                return a;
            if (a instanceof ArrayBuffer) {
                if ("TextDecoder"in window)
                    return a = new DataView(a),
                    (new TextDecoder("utf-8")).decode(a);
                a = Pa.Ri(a);
                return a.ec(0, a.length)
            }
            return null
        }
        static wm(a) {
            return Pa.Ri(k.data.G[a])
        }
        static gJ(a) {
            if (null == k.to) {
                k.to = new ed;
                let b = 0
                  , c = k.kx;
                for (; b < c.length; ) {
                    let d = c[b++].split(":");
                    k.to.G[k.Vn + "/" + d[0]] = Ga.parseInt(d[1])
                }
            }
            return k.to.G[a]
        }
        static DB(a) {
            return k.mt(a) ? null == k.Ij ? !1 : Fa.Yj(k.Xo(), function(b) {
                return b == k.Ij
            }) : !0
        }
        static setData(a, b) {
            if (k.zs.G.hasOwnProperty(a) && 0 == k.decoding.G[a])
                k.decoding.G[a] = 1,
                k.zs.G[a](a, b, function(c) {
                    k.decoding.G[a] = 2;
                    k.setData(a, c)
                });
            else {
                k.data.G[a] = b;
                b = k.ox;
                let c = b.length;
                for (; -1 < --c; )
                    if (b[c].id == a) {
                        let d = b[c];
                        b[c] = b[b.length - 1];
                        b.pop();
                        d.qe()
                    }
            }
        }
        static ab(a) {
            return null != k.data.G[a]
        }
        static eq(a) {
            k.data.G[a] = null;
            k.data.remove(a);
            k.decoding.G[a] = 0
        }
        static iN(a, b) {
            k.Ek.G[a] = b
        }
        static rJ(a) {
            return k.Ek.G[a]
        }
        static mt(a) {
            return 1E3 < a ? (a = k.pu.G[null == a ? "null" : "" + a],
            (new ja("(ogg|aac|mp3|wav)$","")).match(a)) : (new ja("{audio}","")).match(k.be[a])
        }
        static Bf(a) {
            return (new ja("music","")).match(k.be[a])
        }
        static gK(a) {
            a = k.be[a];
            let b = new ja("{image}","g");
            b.match(a) && null != k.Om && (a = a.replace(b.r, k.Om));
            return (new ja("\\.(" + k.lg.G[2].join("|") + ")$","")).match(a)
        }
        static Di(a) {
            return 1 == k.decoding.G[a]
        }
        static lL(a, b) {
            null != k.zi(a) && (k.ab(a) ? b(a) : k.ox.push(new nh(a,b)))
        }
        static Gw(a, b) {
            k.zs.G[a] = b;
            k.decoding.G[a] = 0
        }
        static Xo() {
            return ["ogg", "aac"].slice()
        }
        static fJ() {
            return ["png", "jpg", "avif"].slice()
        }
        static $x() {
            return "ru nl ko ja it fr es en de br".split(" ").slice()
        }
    }
    k.g = !0;
    class nh {
        constructor(a, b) {
            this.id = a;
            this.ng = b
        }
        qe() {
            this.ng(this.id);
            this.ng = null
        }
    }
    nh.g = !0;
    Object.assign(nh.prototype, {
        j: nh
    });
    class mh {
        constructor() {
            this.Py = 0
        }
        bb() {
            return this.Py < k.MAX
        }
        next() {
            return this.Py++
        }
    }
    mh.g = !0;
    Object.assign(mh.prototype, {
        j: mh
    });
    class lh {
        constructor(a, b) {
            this.Ok = this.$e = null;
            this.progress = 0;
            this.data = null;
            this.url = a;
            this.version = b
        }
        H() {
            this.$e = this.Ok = this.data = null
        }
        load(a, b) {
            this.Ok = a;
            this.$e = b;
            let c;
            switch (k.getType(this.url)) {
            case 0:
                c = "arraybuffer";
                break;
            case 1:
                c = "arraybuffer";
                break;
            case 2:
                c = "blob";
                break;
            case 3:
                c = "text";
                break;
            case 4:
                c = "blob"
            }
            let d = this;
            this.GO(this.url, c, function(e) {
                d.zh(e)
            })
        }
        GO(a, b, c) {
            let d = new XMLHttpRequest
              , e = this;
            d.onerror = function() {
                null != e.$e && e.$e();
                d.onerror = d.onload = d.onprogress = null
            }
            ;
            d.onload = function() {
                e.progress = 1;
                if (404 == d.status)
                    null != e.$e && e.$e();
                else {
                    var f = d.response;
                    d.onerror = d.onload = d.onprogress = null;
                    c(f)
                }
            }
            ;
            d.onprogress = function(f) {
                0 < f.total && (e.progress = f.loaded / f.total)
            }
            ;
            try {
                d.open("GET", null != this.version ? "" + a + "?v=" + this.version : a, !0),
                d.responseType = b,
                d.send()
            } catch (f) {}
        }
        zh(a) {
            this.data = a;
            this.Ok();
            this.Ok = null
        }
    }
    lh.g = !0;
    Object.assign(lh.prototype, {
        j: lh
    });
    class bg {
        constructor(a, b, c) {
            this.id = a;
            this.data = b;
            this.Bf = c;
            this.hz = -1
        }
    }
    bg.g = !0;
    Object.assign(bg.prototype, {
        j: bg
    });
    class nd {
        constructor() {
            this.iO = .05;
            this.enabled = !0;
            this.wz = 2;
            this.$K = 16;
            this.vz = this.Ug = 0;
            this.Et = this.Dt = this.Ft = 1;
            this.uz = 0;
            this.gL = 1E4;
            this.Gc = [];
            this.gg = new cb;
            this.jO = new cb;
            this.names = []
        }
        H() {
            1 != this.Dt && this.ef(1);
            1 != this.Et && this.Gu(1);
            1 != this.Ft && this.Lh(1);
            0 != this.uz && this.zq(0);
            let a = 0
              , b = this.Gc;
            for (; a < b.length; )
                b[a++].H();
            this.names = this.gg = this.Gc = null
        }
        aq() {}
        bq(a) {
            let b = 0;
            for (; b < a.length; ) {
                let c = a[b];
                ++b;
                this.names[c.id] = c.name
            }
        }
        play() {
            return -1
        }
        stop(a, b) {
            null == b && (b = 0);
            if (0 > a)
                return !1;
            if (1E4 > a) {
                var c = !1;
                let d = 0
                  , e = this.Gc
                  , f = []
                  , g = 0;
                for (; g < e.length; ) {
                    let h = e[g];
                    ++g;
                    h.le.id == a && f.push(h)
                }
                for (; d < f.length; )
                    c = !0,
                    f[d++].stop(b);
                return c
            }
            c = Fa.find(this.Gc, function(d) {
                return d.id == a
            });
            return null != c ? (c.stop(b),
            !0) : !1
        }
        Bc(a) {
            return 0 > a ? !1 : 1E4 > a ? Fa.Yj(this.Gc, function(b) {
                return b.le.id == a
            }) : Fa.Yj(this.Gc, function(b) {
                return b.id == a
            })
        }
        zf(a) {
            let b = Fa.find(this.Gc, function(c) {
                return c.le.id == a
            });
            return null != b ? b.id : -1
        }
        BJ(a) {
            return 1E4 > a ? Fa.find(this.Gc, function(b) {
                return b.le.id == a
            }) : Fa.find(this.Gc, function(b) {
                return b.id == a
            })
        }
        kK(a) {
            return null != this.gg.G[a]
        }
        xN(a, b) {
            null == a ? Fa.uh(this.Gc, function(c) {
                c.le.Bf || c.Nh(b)
            }) : Fa.uh(this.Gc, function(c) {
                c.le.Bf || (1E4 > a ? c.le.id : c.id) != a || c.Nh(b)
            })
        }
        Lh(a) {
            this.Ft = 0 > a ? 0 : 1 < a ? 1 : a;
            this.dr();
            this.fr()
        }
        Gu(a) {
            this.Et = 0 > a ? 0 : 1 < a ? 1 : a;
            this.fr()
        }
        ef(a) {
            this.Dt = 0 > a ? 0 : 1 < a ? 1 : a;
            this.dr()
        }
        zq(a) {
            this.uz = -1 > a ? -1 : 1 < a ? 1 : a
        }
        qm(a, b, c) {
            null == c && (c = !0);
            this.Xk(a, 0, b);
            c && this.stop(a, b)
        }
        Xk(a, b, c) {
            var d;
            null == d && (d = -1);
            let e = this.BJ(a);
            null != e && this.Bc(a) && (-1 != d && e.Nh(d),
            a = e.Dm() - b,
            (0 < a ? .01 > a : .01 > -a) || e.Xk(b, c))
        }
        HM(a, b, c) {
            if (!this.enabled || !this.kK(a))
                return -1;
            if (b && this.Bc(a))
                return this.zf(a);
            b && (c = !0);
            if (!c && this.Xu(a))
                return -1;
            a = this.uJ(this.gg.G[a].Bf, c);
            return 0 > a ? -1 : a
        }
        wL(a) {
            this.Gc.push(a);
            this.Gc.length > this.vz && (this.vz = this.Gc.length)
        }
        vL(a) {
            this.Ug &= ~(1 << a.channel);
            ta.remove(this.Gc, a);
            null != a.zh && (a.zh(),
            a.zh = null)
        }
        Xu(a) {
            let b = this.gg.G[a];
            if (b.Bf)
                return !1;
            let c = ta.now() / 1E3;
            a = this.jO.G[a];
            null == a && (a = this.iO);
            if (c - b.hz < a)
                return !0;
            b.hz = c;
            return !1
        }
        uJ(a, b) {
            if (a) {
                for (b = 0; b < this.wz; ) {
                    if (0 == (this.Ug & 1 << b))
                        return this.Ug |= 1 << b,
                        b;
                    ++b
                }
                return -1
            }
            a = -1;
            for (var c = this.wz, d = c + this.$K; c < d; ) {
                if (0 == (this.Ug & 1 << c)) {
                    this.Ug |= 1 << c;
                    a = c;
                    break
                }
                ++c
            }
            if (b && 0 > a) {
                b = null;
                c = a = 0;
                for (d = this.Gc; c < d.length; ) {
                    let e = d[c];
                    ++c;
                    !e.le.Bf && !e.loop && e.Am() > a && (a = e.Am(),
                    b = e)
                }
                if (null == b)
                    return -1;
                a = b.channel;
                b.stop()
            }
            return a
        }
        dr() {
            Fa.uh(this.Gc, function(a) {
                a.le.Bf && a.Nh(a.Dm())
            })
        }
        fr() {
            Fa.uh(this.Gc, function(a) {
                a.le.Bf || a.Nh(a.Dm())
            })
        }
    }
    nd.g = !0;
    Object.assign(nd.prototype, {
        j: nd
    });
    class oh {
        constructor(a, b, c, d) {
            this.name = a;
            this.id = b;
            this.min = c;
            this.max = d
        }
    }
    oh.g = !0;
    Object.assign(oh.prototype, {
        j: oh
    });
    class ne {
        static Ky(a) {
            a = Pa.Ri(a);
            return 83 == a.b[0] && 80 == a.b[1] ? 82 == a.b[2] : !1
        }
        static rM(a) {
            return a.slice(5 + (new ec(Pa.Ri(a),3)).cd())
        }
        static eJ(a) {
            if (!ne.Ky(a))
                throw 22;
            a = new ec(Pa.Ri(a),5);
            let b = []
              , c = 0
              , d = a.cd();
            for (; c < d; ) {
                c++;
                let e = ""
                  , f = 0
                  , g = a.cd();
                for (; f < g; ) {
                    f++;
                    let h = a.ha();
                    e += String.fromCodePoint(h)
                }
                b.push(new oh(e,a.cd(),a.uA(),a.uA()))
            }
            return b
        }
    }
    ne.g = !0;
    class he extends nd {
        constructor() {
            super()
        }
        aq() {}
        bq() {}
        play() {
            return -1
        }
        Lh() {}
        ef() {}
        Gu() {}
        zq() {}
        dr() {}
        fr() {}
    }
    he.g = !0;
    he.u = nd;
    Object.assign(he.prototype, {
        j: he
    });
    class cg {
        constructor(a, b) {
            this.volume = 1;
            this.offset = 0;
            this.loop = !1;
            this.Yt = a;
            this.le = b
        }
        H() {
            this.Yt = this.le = null;
            this.Ei = !0
        }
        Dm() {
            return this.Ei ? NaN : this.volume
        }
        Nh(a) {
            this.Ei || (this.volume = a,
            this.AO())
        }
        Am() {
            return this.Ei ? NaN : this.yJ() / this.data.duration
        }
    }
    cg.g = !0;
    Object.assign(cg.prototype, {
        j: cg
    });
    class Td {
        constructor() {
            this.xt = [];
            this.stack = [];
            this.sB = this.rB = 0
        }
        Hf(a, b) {
            this.xt.push(new ph(a,b));
            let c = this;
            return function() {
                c.removeListener(a, b)
            }
        }
        removeListener(a, b) {
            let c = this.xt
              , d = 0
              , e = c.length;
            for (; d < e; ) {
                let f = c[d];
                if (f.type == a && f.listener == b) {
                    f.flags = 0;
                    c[d] = c[e - 1];
                    c.pop();
                    break
                }
                ++d
            }
        }
        qe(a) {
            var b = this.xt;
            let c = b.length
              , d = this.stack
              , e = this.rB
              , f = 0
              , g = c;
            for (; f < g; )
                d[e++] = b[f++];
            e > this.sB && (this.sB = e);
            for (this.rB = e; 0 < c; )
                b = d[--e],
                d[e] = null,
                b.type == a && 0 < b.flags && (b.listener.apply(null, void 0),
                3 == b.flags && (b.flags = 0)),
                --c
        }
    }
    Td.g = !0;
    Object.assign(Td.prototype, {
        j: Td
    });
    class J {
        static Fm() {
            return null != J.context ? "running" == J.context.state : !1
        }
        static Hf(a, b) {
            return J.Ed.Hf(a, b)
        }
        static Qa() {
            if (null != J.context) {
                J.VH();
                var a = J.Tf;
                null != a && a.stop()
            }
            a = (new ja("(iPad|iPhone)","g")).match(ia.navigator.platform);
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (a = !0);
            a && (J.currentTime = null,
            J.Tf = new Dc(1E3),
            J.Tf.Mf = function() {
                null != J.context && J.Fm() && (null != J.currentTime && J.currentTime == J.context.currentTime && (J.Tf.stop(),
                J.Ed.qe("EContextBroken")),
                J.currentTime = J.context.currentTime)
            }
            );
            try {
                "undefined" !== typeof AudioContext ? J.context = new AudioContext : "undefined" !== typeof webkitAudioContext && (J.context = new webkitAudioContext),
                J.context.onstatechange = function() {
                    J.Ed.qe(J.Fm() ? "EContextResumed" : "EContextSuspended")
                }
                ,
                J.Ed.qe("EContextCreated"),
                J.Fm() || J.addListener()
            } catch (b) {
                J.context = null
            }
        }
        static bz() {
            for (; ; ) {
                if (null != J.rv)
                    return J.rv;
                try {
                    J.rv = !(!window.AudioContext && !window.webkitAudioContext)
                } catch (a) {
                    J.rv = !1
                }
            }
        }
        static rI() {
            function a(h, m) {
                e[h] = m
            }
            let b = null;
            try {
                b = "undefined" !== typeof Audio ? new Audio : null
            } catch (h) {
                return null
            }
            if (!b || "function" !== typeof b.canPlayType)
                return null;
            let c = {
                probably: 2,
                maybe: 1,
                "": 0
            }
              , d = null;
            d = function(h) {
                if (h instanceof Array) {
                    let m = 0
                      , n = 0;
                    for (; n < h.length; ) {
                        let q = d(h[n++]);
                        q > m && (m = q)
                    }
                    return m
                }
                return gc.Zj(c, b.canPlayType(h).replace(RegExp("^no$", ""), ""))
            }
            ;
            let e = {};
            a("mp3", d("audio/mp3;"));
            a("ogg", d('audio/ogg; codecs="vorbis"'));
            a("aac", d("audio/aac;"));
            var f = ia.navigator.userAgent;
            if (-1 < f.indexOf("OPR") || -1 < f.indexOf("YaBrowser"))
                e.aac = 0;
            f = 0;
            let g = ["aac", "ogg", "mp3"];
            for (; f < g.length; ) {
                let h = g[f];
                ++f;
                if (0 < gc.Zj(e, h))
                    return h
            }
            return null
        }
        static VH() {
            try {
                J.context.onstatechange = null,
                J.context.close()
            } catch (a) {}
            J.context = null
        }
        static aA(a) {
            a.preventDefault();
            null != J.context && "running" != J.context.state && J.context.resume().then(function() {}, function() {
                J.Ed.qe("EContextResumeRejected")
            })
        }
        static addListener() {
            window.addEventListener("mouseup", J.aA);
            window.addEventListener("touchend", J.aA)
        }
    }
    J.g = !0;
    class Ec extends nd {
        constructor() {
            super()
        }
        H() {
            super.H();
            this.an = this.$m = this.bn = this.Zm = null
        }
        aq(a, b, c, d, e) {
            null == c && (c = !1);
            super.aq(a, b, c, d, e);
            let f = this;
            this.decode(b, function(g) {
                null == g ? d(null) : (f.gg.G[a] = new bg(a,g,c),
                d(g))
            })
        }
        bq(a, b, c) {
            super.bq(a, b, c);
            let d = this;
            this.decode(b, function(e) {
                if (null == e)
                    c(null);
                else
                    try {
                        let f = d.split(e, a)
                          , g = 0
                          , h = a.length;
                        for (; g < h; ) {
                            let m = g++
                              , n = a[m].id;
                            d.names[n] = a[m].name;
                            d.gg.G[n] = new bg(n,f[m],!1)
                        }
                        c(e)
                    } catch (f) {}
            })
        }
        play(a, b, c, d) {
            null == d && (d = 0);
            null == c && (c = !1);
            null == b && (b = !1);
            if (null == J.context || !J.Fm())
                return -1;
            c = this.HM(a, b, c);
            if (0 > c)
                return -1;
            a = new yc(this,this.gg.G[a]);
            a.id = this.gL++;
            a.channel = c;
            a.loop = b;
            a.offset = d;
            a.play();
            this.wL(a);
            return a.id
        }
        Lh(a, b) {
            null == b && (b = 0);
            if (null != J.context) {
                this.Ft = 0 > a ? 0 : 1 < a ? 1 : a;
                var c = this.ap();
                0 < b ? c.Xk(a, b) : c.wq(a)
            }
        }
        ef(a) {
            null != J.context && (this.Dt = 0 > a ? 0 : 1 < a ? 1 : a,
            this.uy().wq(a))
        }
        Gu(a) {
            null != J.context && (this.Et = 0 > a ? 0 : 1 < a ? 1 : a,
            this.vy().wq(a))
        }
        zq(a) {
            null != J.context && (super.zq(a),
            this.pJ().CN(a))
        }
        dr() {}
        fr() {}
        decode(a, b) {
            (new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(2,1323E4,44100)).decodeAudioData(a, function(c) {
                b(c)
            }, function() {
                b(null)
            })
        }
        ap() {
            null == this.Zm && (this.Zm = new zc,
            this.Zm.type = 5,
            this.Zm.connect(new dg));
            return this.Zm
        }
        vy() {
            null == this.bn && (this.bn = new zc,
            this.bn.type = 3,
            this.bn.connect(this.ap()));
            return this.bn
        }
        uy() {
            null == this.$m && (this.$m = new zc,
            this.$m.type = 4,
            this.$m.connect(this.ap()));
            return this.$m
        }
        pJ() {
            null == this.an && (this.an = new eg,
            this.an.type = 6,
            this.ap().append(this.an));
            return this.an
        }
        gI(a) {
            let b = window.OfflineAudioContext;
            null == b && (b = window.webkitOfflineAudioContext);
            return new b(2,44100 * a,44100)
        }
        split(a, b) {
            let c = this.gI(Math.ceil(2 * b[b.length - 1].max / 1E3))
              , d = a.sampleRate
              , e = []
              , f = 0
              , g = b.length;
            if (1 == a.numberOfChannels)
                for (var h = a.getChannelData(0); f < g; ) {
                    var m = b[f++];
                    a = d / 1E3 * m.min | 0;
                    var n = d / 1E3 * m.max | 0;
                    m = c.createBuffer(1, n - a, d);
                    a = h.subarray(a, n);
                    try {
                        m.copyToChannel(a, 0)
                    } catch (q) {
                        m.getChannelData(0).set(a)
                    }
                    e.push(m)
                }
            else
                for (h = a.getChannelData(0),
                a = a.getChannelData(1); f < g; ) {
                    n = b[f++];
                    m = d / 1E3 * n.min | 0;
                    let q = d / 1E3 * n.max | 0;
                    n = c.createBuffer(2, q - m, d);
                    let p = h.subarray(m, q);
                    m = a.subarray(m, q);
                    try {
                        n.copyToChannel(p, 0),
                        n.copyToChannel(m, 1)
                    } catch (v) {
                        n.getChannelData(0).set(p),
                        n.getChannelData(1).set(m)
                    }
                    e.push(n)
                }
            return e
        }
    }
    Ec.g = !0;
    Ec.u = nd;
    Object.assign(Ec.prototype, {
        j: Ec
    });
    class yc extends cg {
        constructor(a, b) {
            super(a, b);
            this.data = b.data;
            this.Ep = null
        }
        H() {
            if (!this.Ei) {
                var a = this.Ge;
                a: for (; null != a; ) {
                    let b = a.output;
                    switch (a.type) {
                    case 0:
                        this.Bc && (this.Bc = !1,
                        this.Ge.stop(0));
                        break;
                    case 1:
                    case 2:
                        break;
                    default:
                        break a
                    }
                    ta.remove(a.output.inputs, a);
                    a.n.disconnect();
                    a.H();
                    a = b
                }
                this.Ge = this.data = null;
                a = this.Yt;
                super.H();
                a.vL(this)
            }
        }
        play() {
            if (!this.Ei) {
                this.Bc = !0;
                this.Ge = new fg;
                var a = this.Yt;
                this.Ge.connect(this.le.Bf ? a.uy() : a.vy());
                this.startTime = J.context.currentTime;
                this.Ge.play(this.data, this.loop, this.offset, O(this, this.onended))
            }
        }
        Xk(a, b) {
            if (!this.Ei) {
                var c = this.my();
                null != c && c.Xk(a, b);
                this.volume = a;
                this.Ep = J.context.currentTime + b
            }
        }
        stop(a) {
            null == a && (a = 0);
            this.Ei || this.stopped || !this.Bc || (this.stopped = !0,
            this.Ge.stop(J.context.currentTime + a))
        }
        yJ() {
            return (this.offset + (J.context.currentTime - this.startTime)) % this.data.duration
        }
        Dm() {
            if (null != this.Ep) {
                if (J.context.currentTime < this.Ep)
                    return this.Ge.get(2).n.gain.value;
                this.Ep = null
            }
            return this.volume
        }
        AO() {
            let a = this.my();
            null != a && a.wq(this.Dm())
        }
        onended() {
            this.Bc && (this.Bc = !1,
            this.H())
        }
        my() {
            if (!yc.Xx || null == this.Ge)
                return null;
            try {
                let a = this.Ge.get(2);
                if (null == a) {
                    a = new zc;
                    let b = this.Ge.get(1);
                    null == b ? this.Ge.append(a) : b.append(a)
                }
                return a
            } catch (a) {
                return yc.Xx = !1,
                null
            }
        }
    }
    yc.g = !0;
    yc.u = cg;
    Object.assign(yc.prototype, {
        j: yc
    });
    class Hb {
        constructor(a, b) {
            this.n = a;
            this.type = b;
            this.inputs = [];
            this.output = null
        }
        get(a) {
            let b = this;
            for (; null != b; ) {
                if (b.type == a)
                    return b;
                b = b.output
            }
            return null
        }
        H() {
            this.n = this.output = this.inputs = null
        }
        connect(a) {
            this.output = a;
            a.inputs.push(this);
            this.n.disconnect();
            this.n.connect(a.n)
        }
        append(a) {
            ta.remove(this.output.inputs, this);
            a.connect(this.output);
            this.connect(a)
        }
    }
    Hb.g = !0;
    Object.assign(Hb.prototype, {
        j: Hb
    });
    class dg extends Hb {
        constructor() {
            super(J.context.destination, 8)
        }
    }
    dg.g = !0;
    dg.u = Hb;
    Object.assign(dg.prototype, {
        j: dg
    });
    class fg extends Hb {
        constructor() {
            super(J.context.createBufferSource(), 0)
        }
        H() {
            this.n.onended = null;
            super.H()
        }
        play(a, b, c, d) {
            let e = this.n;
            e.buffer = a;
            e.loop = b;
            e.start(0, c);
            e.onended = d
        }
        stop(a) {
            null == a && (a = 0);
            this.n.stop(a)
        }
    }
    fg.g = !0;
    fg.u = Hb;
    Object.assign(fg.prototype, {
        j: fg
    });
    class zc extends Hb {
        constructor() {
            super(J.context.createGain(), 2)
        }
        wq(a) {
            this.n.gain.value = a
        }
        Xk(a, b) {
            let c = J.context.currentTime
              , d = this.n;
            d.gain.cancelScheduledValues(0);
            d.gain.linearRampToValueAtTime(a, c + b)
        }
    }
    zc.g = !0;
    zc.u = Hb;
    Object.assign(zc.prototype, {
        j: zc
    });
    class eg extends Hb {
        constructor() {
            super(J.context.createStereoPanner(), 1)
        }
        CN(a) {
            let b = this.n;
            b.pan.cancelScheduledValues(0);
            b.pan.setTargetAtTime(a, J.context.currentTime, .005)
        }
    }
    eg.g = !0;
    eg.u = Hb;
    Object.assign(eg.prototype, {
        j: eg
    });
    class Nc extends fa {
        constructor(a, b, c) {
            null == c && (c = !1);
            null == b && (b = 1);
            super();
            this.R = a;
            this.scale = b;
            this.loop = c;
            this.time = 0;
            a.setScale(1, 1);
            a.Nj();
            this.i = new E(a.$a(),a.Oa,0,1)
        }
        ua() {
            this.R.setScale(1, 1);
            this.R.o(this.i.x);
            this.R.s(this.i.y);
            super.ua()
        }
        update(a) {
            super.update(a);
            a = this.time;
            if (.1 > a) {
                a = .05 * Math.sin(a / .1 * (Math.PI / 2)) * this.scale;
                var b = 1 - a;
                a = 1 + a
            } else if (.3 > a)
                b = a - .1,
                a = (1 > (b /= .09999999999999999) ? .055 * b * b * b : .055 * ((b -= 2) * b * b + 2)) * this.scale,
                b = .95 + a,
                a = 1.05 - a;
            else if (.6 > a)
                a = (a - .3) / .3 - 1,
                a = .05 * (a * a * a + 1) * this.scale,
                b = 1.06 - a,
                a = .94 + a;
            else {
                this.loop ? 4 < a && (this.time = 0) : this.ua();
                return
            }
            this.R.o(this.i.x + b);
            this.R.s(this.i.y + a);
            this.R.qa(b);
            this.R.ub(a)
        }
    }
    Nc.g = !0;
    Nc.u = fa;
    Object.assign(Nc.prototype, {
        j: Nc
    });
    class db extends fa {
        constructor() {
            super();
            db.instance = this;
            this.state = 0;
            this.l = new R;
            this.node = new mb;
            this.node.S(this.l.B);
            this.node.name = "cover";
            this.rc = new ic(null,new E(0,0,0,1));
            this.rc.aa(.5);
            this.l.node.S(this.rc.B);
            this.Tp = [];
            this.qq = [1, 1];
            this.Md = [new B(this.l,r.ki,l.Kv), new B(this.l,r.ki,l.Kv)];
            this.xa = [new B(this.l,r.ki,l.Jv), new B(this.l,r.ki,l.Jv)];
            this.lb = [new B(this.l,r.ac,l.AC), new B(this.l,r.ac,l.BC)];
            this.hm = null;
            za.instance.config.Gm && (this.hm = new Xb,
            this.xa[1].yn(this.hm));
            this.Ke = new B(null,r.ac,l.xC);
            this.node.S(this.Ke.B);
            this.Ke.Qf(652, 577);
            this.Tj = new E(0,0,0,1);
            this.Ke.O(!1);
            this.Ke.aa(0);
            this.Hb = new B(null,r.ac,l.zC);
            this.Hb.O(!1);
            this.Hb.aa(0);
            this.node.S(this.Hb.B);
            this.Hb.de(this.Hb.X.x / 2, 0);
            this.Hb.Qf(this.Hb.X.x / 2, 0);
            this.bj = new E(0,0,0,1);
            this.Md[0].qa(.001);
            this.Md[1].qa(.001);
            this.xa[0].o(-this.xa[0].X.x);
            this.xa[1].qa(-1);
            this.lb[0].Qf(this.lb[0].X.x, 0);
            this.lb[0].de(this.lb[0].X.x, 0);
            this.node.hd();
            this.vp = !1;
            this.layout()
        }
        UA() {
            this.vp = !0;
            this.layout()
        }
        ua() {
            super.ua();
            this.node.H();
            this.Mp = null;
            db.instance = null
        }
        RB(a) {
            this.Mp = a;
            this.time = 0;
            this.state = 5
        }
        Vx() {
            this.time = 0;
            this.Md[0].qa(1);
            this.Md[1].qa(1);
            this.lb[0].O(!1);
            this.lb[1].O(!1);
            this.layout();
            this.animate(1);
            this.state = 6;
            z.stop(z.xj);
            z.stop(z.Pg)
        }
        kI() {
            this.Ke.O(!0);
            this.state = 1;
            this.time = 0
        }
        Kw() {
            this.Hb.O(!0);
            this.state = 3;
            this.time = 0
        }
        update(a) {
            super.update(a);
            switch (this.state) {
            case 1:
                a = this.xb(1.5);
                this.Ke.o(this.Tj.x);
                this.Ke.s(this.Tj.y);
                this.Ke.aa(Aa.Jf()(a));
                1 == a && (this.state = 2,
                this.time = 0);
                break;
            case 2:
                a = this.xb(2);
                this.Ke.o(this.Tj.x);
                this.Ke.s(this.Tj.y * (1 - a));
                1 == a && (this.state = 0,
                this.Ke.O(!1));
                break;
            case 3:
                a = this.xb(1);
                this.Hb.aa(Aa.Jf()(a));
                this.Hb.o(this.bj.x);
                this.Hb.s(0 * this.bj.y);
                this.lb[0].O(!0);
                this.lb[1].O(!0);
                this.lb[0].aa(this.Hb.xc);
                this.lb[1].aa(this.Hb.xc);
                this.lb[0].s(.9 * -this.lb[0].wa());
                this.lb[1].s(.9 * -this.lb[1].wa());
                1 == a && (this.state = 4,
                this.time = 0);
                break;
            case 4:
                a = this.xb(2);
                this.Hb.o(this.bj.x);
                this.Hb.s(this.bj.y * a);
                var b = this.Hb.$u(new E(0,0,0,1));
                b = this.l.Zu(b);
                this.lb[0].s(Math.min(0, b.y - .9 * this.lb[0].wa()));
                this.lb[1].s(Math.min(0, b.y - .9 * this.lb[1].wa()));
                1 == a && (this.state = 0,
                this.Hb.O(!1));
                break;
            case 5:
                a = this.xb(2);
                this.animate(a);
                1 == a && (this.vp = !0,
                this.state = 0,
                null != this.Mp && (this.Mp(),
                this.Mp = null));
                break;
            case 6:
                a = this.xb(2),
                this.animate(1 - a),
                1 == a && (this.vp = !1,
                this.state = 0)
            }
        }
        layout() {
            var a = za.instance.window.oh();
            this.l.update(.016666666666666666);
            var b = a.x
              , c = a.y
              , d = b;
            let e = c;
            2 < za.instance.window.ik() && (d = b / 2,
            e = c / 2,
            b = this.node.ib,
            b.scale.x = b.scale.y = b.scale.z = 2,
            b.I = b.I & -2 | 244);
            d /= 2;
            this.l.o(d);
            b = this.xa[0];
            b.qa(d / b.X.x);
            b.o(-b.ta());
            this.qq[0] = b.pb;
            this.Tp[0] = b.$a();
            c = this.xa[1];
            c.qa(-d / c.X.x);
            c.o(c.ta());
            this.qq[1] = -c.pb;
            this.Tp[1] = c.$a();
            this.Tj.x = d;
            this.Tj.y = e;
            this.bj.x = d;
            this.bj.y = e;
            this.l.ub(e / b.X.y);
            this.node.hd();
            this.Hb.o(this.bj.x);
            this.animate(this.vp ? 1 : 0);
            this.lb[1].qa(1);
            a = 1 / (a.x / a.y);
            this.Hb.J(1);
            1 > a && (this.Hb.J(a),
            this.lb[0].qa(a),
            this.lb[1].qa(a))
        }
        animate(a) {
            this.xa[0].qa((1 - a) * this.qq[0]);
            this.xa[1].qa((-1 + a) * this.qq[1]);
            this.xa[0].o(this.Tp[0] - a * this.Md[0].ta());
            this.xa[1].o(this.Tp[1] + a * this.Md[1].ta());
            null != this.hm && (this.hm.vu(-a),
            this.xa[1].yn(this.hm));
            this.Md[0].qa(a);
            this.Md[0].o(this.xa[0].$a() + this.xa[0].ta());
            this.Md[1].qa(a);
            this.Md[1].o(this.xa[1].$a() - this.xa[1].ta() - this.Md[1].ta());
            this.lb[0].qa(1 - a);
            this.lb[0].o(this.Md[0].$a());
            this.lb[0].aa(1 - a);
            this.lb[1].qa(1 - a);
            this.lb[1].o(this.Md[1].$a() + this.Md[1].ta());
            this.lb[1].aa(1 - a);
            this.rc.aa(.5 * (1 - a))
        }
    }
    db.g = !0;
    db.u = fa;
    Object.assign(db.prototype, {
        j: db
    });
    class Je {
        constructor(a, b) {
            this.rect = new uc(a);
            this.rect.kb(b.A - b.m, b.D - b.C);
            a = this.rect.ib;
            a.translate.x = b.m;
            a.translate.y = b.C;
            a.I = a.I & -2 | 496
        }
        Gb(a) {
            Ca.jf(this.rect);
            this.rect.Nd();
            return this.rect.Gb(a)
        }
    }
    Je.g = !0;
    Object.assign(Je.prototype, {
        j: Je
    });
    class lc extends fa {
        constructor() {
            super();
            this.icon = new B(null,r.Lb,l.pw);
            this.label = new wa(null,r.zc)
        }
        Xa(a) {
            this.label.Xa(a);
            this.layout()
        }
        Ip() {
            let a = this.parent;
            a.node.S(this.icon.B);
            a.node.S(this.label.B)
        }
        layout() {
            var a = this.parent
              , b = a.da.ta();
            a = Math.min(.12 * a.da.Dy().x, .12 * a.da.Dy().y);
            this.icon.J(a / this.icon.X.x);
            this.icon.o(b - this.icon.ta() - 10);
            this.icon.s(10);
            b = .1 * this.icon.wa();
            this.label.Ib(300, this.icon.wa() - 2 * b);
            this.label.Xb(1, 0);
            this.label.o(this.icon.$a() - 300);
            this.label.s(this.icon.Oa + b);
            this.label.Qh()
        }
    }
    lc.g = !0;
    lc.u = fa;
    Object.assign(lc.prototype, {
        j: lc
    });
    class Ha extends xc {
        constructor(a, b, c, d) {
            super();
            this.frame = b;
            this.Oy = c;
            null == a && (a = r.Lb);
            this.R = new B(null,a,this.frame = b);
            this.l.appendChild(this.R);
            this.icon = null;
            null != d && (this.icon = new B(null,a,d),
            this.icon.Nj(),
            this.l.appendChild(this.icon));
            a = this.R.X;
            this.Zb = new E(a.x,a.y,0,1);
            this.ce = 0
        }
        yu(a) {
            null != this.Oy && this.l.Sc(0).Yb(a ? this.Oy : this.frame)
        }
        update(a) {
            super.update(a);
            0 < this.ce && (this.ce -= a,
            0 > this.ce && (this.R.Yb(this.frame),
            this.ce = 0))
        }
        select() {
            super.select();
            this.ce = .2
        }
        Gb(a) {
            return this.l.Gb(a)
        }
        static create(a, b, c, d) {
            return new Ha(a,b,c,d)
        }
    }
    Ha.g = !0;
    Ha.u = xc;
    Object.assign(Ha.prototype, {
        j: Ha
    });
    class Jb extends Ha {
        constructor(a, b, c) {
            super(null, a, b);
            this.he = new wa(null,r.zc);
            this.he.Ib(this.R.X.x - 80, this.R.X.y - 50);
            this.he.o(40);
            this.he.s(25);
            this.he.Xa(c);
            this.he.Xb(0, 0);
            this.he.Qh(!1);
            this.l.appendChild(this.he)
        }
        UB() {
            this.he.ff(r.zc);
            this.he.Ib(this.R.X.x - 80, this.R.X.y - 50);
            this.he.Xb(0, 0)
        }
        RA(a) {
            this.he.jq();
            this.he.Xa(a);
            this.he.Qh()
        }
        static gm(a) {
            return new Jb(l.BG,l.CG,a)
        }
    }
    Jb.g = !0;
    Jb.u = Ha;
    Object.assign(Jb.prototype, {
        j: Jb
    });
    class Ch {
    }
    Ch.g = !0;
    class ph {
        constructor(a, b) {
            this.type = a;
            this.listener = b;
            this.flags = 1
        }
    }
    ph.g = !0;
    Object.assign(ph.prototype, {
        j: ph
    });
    class Cg {
        constructor() {
            this.Sh = new t(0,0);
            this.i = new t(0,0);
            this.dir = new t(0,0);
            this.Tq = this.Wp = 0;
            this.color = new Ya(0,0,0,0);
            this.bh = new Ya(0,0,0,0);
            this.angle = this.Fo = this.wt = this.Tc = this.size = 0;
            this.scale = this.alpha = 1;
            this.height = this.width = 0
        }
    }
    Cg.g = !0;
    Object.assign(Cg.prototype, {
        j: Cg
    });
    class Dg {
        constructor(a, b, c) {
            this.x = a;
            this.y = b;
            this.size = c
        }
    }
    Dg.g = !0;
    Object.assign(Dg.prototype, {
        j: Dg
    });
    ia.mr |= 0;
    "undefined" != typeof performance && "function" == typeof performance.now && (ta.now = performance.now.bind(performance));
    null == String.fromCodePoint && (String.fromCodePoint = function(a) {
        return 65536 > a ? String.fromCharCode(a) : String.fromCharCode((a >> 10) + 55232) + String.fromCharCode((a & 1023) + 56320)
    }
    );
    Object.defineProperty(String.prototype, "__class__", {
        value: String,
        enumerable: !1,
        writable: !0
    });
    String.g = !0;
    Array.g = !0;
    Date.prototype.j = Date;
    Date.g = "Date";
    var Xi = {}
      , Vi = {}
      , Wi = Number
      , Ui = Boolean
      , Yi = {}
      , Zi = {};
    Sa.oH = {}.toString;
    var qi = 3
      , pg = "en de fr ru nl br it es ko ja".split(" ")
      , Kh = [0, 30, 80, 170, 230, 0, 40, 90, 150, 200, 0, 40, 90, 150, 200, 270, 350]
      , Mh = [3, 31, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 19351, 64407, 123823, 260791, 375463, 633511, 1117095];
    l.jC = "blink/0000";
    l.kC = "blink/";
    l.lC = "chew/";
    l.mC = "fail/";
    l.qC = "idle/";
    l.nC = "idle2/0000";
    l.oC = "idle2/";
    l.pC = "idle3/";
    l.rC = "excited/";
    l.sC = "greeting/";
    l.Cv = "mouth_close/";
    l.tC = "mouth_open/";
    l.uC = "puzzled/";
    l.vC = "sleeping/";
    l.Dv = "zzz/";
    l.CD = "0000";
    l.DD = "0001";
    l.ED = "0002";
    l.FD = "0019";
    l.GD = "0020";
    l.HD = "0021";
    l.zE = "disappear/0000";
    l.AE = "disappear/";
    l.BE = "glow";
    l.DE = "idle/";
    l.CE = "idle/0001";
    l.FE = "idle_off/";
    l.EE = "idle_off/0001";
    l.GE = "light_down/0000";
    l.HE = "light_down/";
    l.IE = "light_up/0000";
    l.JE = "light_up/";
    l.KE = "timer/0000";
    l.LE = "timer/";
    l.UD = "a_01";
    l.VD = "a_02";
    l.SD = "auto_01";
    l.TD = "auto_02";
    l.ZD = "b_01";
    l.$D = "b_02";
    l.WD = "bar_0";
    l.XD = "bar_1";
    l.YD = "bar_2";
    l.Yv = "drag_button";
    l.aE = "drag_button_hot";
    l.bE = "wheel_active";
    l.cE = "wheel_bottom";
    l.dE = "wheel_rope";
    l.eE = "wheel_top";
    l.wD = "flight/0000";
    l.xD = "flight/";
    l.Wv = "idle";
    l.yD = "pop/0000";
    l.zD = "pop/";
    l.AD = "stain_01";
    l.BD = "stain_03";
    l.vE = "x1";
    l.wE = "x2";
    l.xE = "x3";
    l.yE = "x4";
    l.pE = "0000";
    l.sE = "0000";
    l.tE = "0011";
    l.uE = "0012";
    l.ID = "0000";
    l.Zv = "0000";
    l.qE = "0001";
    l.rE = "0002";
    l.sD = "x1/0000";
    l.tD = "x1/";
    l.uD = "x2/0000";
    l.vD = "x2/";
    l.Xv = "button0";
    l.RD = "button1";
    l.kD = "button0";
    l.lD = "button1";
    l.mD = "button2";
    l.nD = "button3";
    l.oD = "x1";
    l.pD = "x2";
    l.qD = "x3";
    l.rD = "x4";
    l.gD = "bee0000";
    l.iD = "bee";
    l.hD = "bee0001";
    l.jD = "pollen";
    l.ZE = "center";
    l.$v = "handle";
    l.aw = "handle_hot";
    l.bw = "highlight";
    l.$E = "record";
    l.cw = "sticker";
    l.PD = "body";
    l.Zn = "bubbles/";
    l.QD = "face";
    l.ME = "particle_1/";
    l.NE = "particle_2/";
    l.OE = "particle_3/";
    l.PE = "pipe";
    l.QE = "valve";
    l.fE = "fire";
    l.gE = "lantern_end";
    l.hE = "lantern_start";
    l.iE = "particle_1";
    l.jE = "particle_2";
    l.kE = "particle_3";
    l.JD = "cheese_hole";
    l.KD = "eyes/0000";
    l.LD = "eyes/";
    l.MD = "idle";
    l.ND = "mouse/0000";
    l.Yn = "mouse/";
    l.OD = "mouse/0008";
    l.lE = "bottle";
    l.mE = "firefly/";
    l.nE = "light";
    l.oE = "top";
    l.RE = "0000";
    l.SE = "0001";
    l.TE = "0002";
    l.UE = "0003";
    l.VE = "0004";
    l.WE = "0005";
    l.XE = "0006";
    l.YE = "0007";
    l.qG = "sign/";
    l.kw = "button_audio_x";
    l.rG = "button_back";
    l.sG = "button_back_hot";
    l.tG = "button_music_hot";
    l.uG = "button_music_on";
    l.vG = "button_pause";
    l.wG = "button_pause_hot";
    l.xG = "button_restart";
    l.yG = "button_restart_hot";
    l.lw = "button_round";
    l.mw = "button_round_hot";
    l.Br = "button_short";
    l.Cr = "button_short_hot";
    l.zG = "button_sound_hot";
    l.AG = "button_sound_on";
    l.Dr = "button_tiny";
    l.Er = "button_tiny_hot";
    l.BG = "button_wide";
    l.CG = "button_wide_hot";
    l.nw = "candy/0000";
    l.DG = "candy/";
    l.ow = "candy/0002";
    l.EG = "famobi";
    l.FG = "gear_icon";
    l.GG = "hud_star/0000";
    l.HG = "hud_star/";
    l.IG = "level/locked";
    l.Fr = "level/playable";
    l.pw = "level/star_result_small";
    l.JG = "level/stars0";
    l.KG = "level/stars1";
    l.LG = "level/stars2";
    l.MG = "level/stars3";
    l.NG = "logo";
    l.OG = "logo_ru";
    l.PG = "menu_icon_round";
    l.QG = "menu_icon_tiny";
    l.SG = "monster_results";
    l.TG = "music_icon";
    l.UG = "nav_next0";
    l.VG = "nav_next1";
    l.WG = "nav_prev0";
    l.qw = "nav_prev1";
    l.XG = "next_icon_tiny";
    l.YG = "play_icon_round";
    l.ZG = "popup_bottom";
    l.$G = "popup_button";
    l.aH = "popup_button_hot";
    l.bH = "popup_button_x";
    l.cH = "popup_middle";
    l.rw = "popup_top";
    l.dH = "restart_icon_tiny";
    l.eH = "skin_glow";
    l.fH = "skin_hand";
    l.gH = "sound_icon";
    l.sw = "star";
    l.hH = "star_empty";
    l.tw = "x_icon";
    l.iH = "zeptolab";
    l.AC = "tape0";
    l.BC = "tape1";
    l.zC = "roll";
    l.xC = "cutter";
    l.zF = "season1";
    l.AF = "season2";
    l.BF = "season3";
    l.zr = "shelf";
    l.CF = "shelf_button";
    l.DF = "shelf_button_hot";
    l.cF = "cover1";
    l.dF = "cover2";
    l.eF = "cover3";
    l.fF = "cover4";
    l.gF = "cover5";
    l.yr = "lock";
    l.hF = "monster";
    l.gw = "next";
    l.iF = "particle0";
    l.jF = "particle1";
    l.kF = "particle2";
    l.lF = "perfect";
    l.nF = "cover6";
    l.oF = "cover7";
    l.pF = "cover8";
    l.qF = "cover9";
    l.mF = "cover10";
    l.rF = "cover11";
    l.sF = "cover12";
    l.tF = "cover13";
    l.uF = "cover14";
    l.vF = "cover15";
    l.wF = "cover16";
    l.xF = "cover17";
    l.yF = "label";
    l.Jv = "front";
    l.Kv = "side";
    F.Eb = 1;
    F.box = 1;
    F.level = 1;
    td.$n = 1.2;
    z.mG = 1001;
    z.lG = 1002;
    z.kG = 1003;
    z.jG = 1004;
    z.jw = 1005;
    z.iG = 1006;
    z.hG = 1007;
    z.gG = 1008;
    z.fG = 1009;
    z.eG = 1010;
    z.dG = 1013;
    z.cG = 1014;
    z.bG = 1015;
    z.aG = 1016;
    z.$F = 1017;
    z.ZF = 1018;
    z.YF = 1019;
    z.XF = 1020;
    z.WF = 1021;
    z.VF = 1022;
    z.UF = 1031;
    z.TF = 1032;
    z.SF = 1037;
    z.RF = 1038;
    z.QF = 1039;
    z.Pg = 1040;
    z.PF = 1041;
    z.OF = 1042;
    z.NF = 1043;
    z.MF = 1044;
    z.LF = 1045;
    z.xj = 1046;
    z.KF = 1051;
    z.JF = 1052;
    z.IF = 1053;
    z.Og = 1054;
    z.HF = 1055;
    z.iw = 1056;
    z.GF = 1057;
    r.Bk = [];
    qb.muted = !qb.cK();
    qb.paused = !1;
    fa.St = new rb(4096,null,!0);
    ha.FA = !1;
    Cb.wf = !0;
    Ib.wf = !0;
    nb.wf = !0;
    od.VERSION = new vg("1.3.27");
    od.fD = "v1.3.27 2024-10-31 17:33:22 Generated by Haxe 4.3.6 polygonal";
    Ya.TN = new Ya(1,1,1,1);
    Ya.FO = Ya.TN;
    P.Fv = 1;
    P.Gv = 2;
    P.Ev = 4;
    P.Hv = 8;
    Bb.vj = .016666666666666666;
    t.sH = [];
    t.tH = [];
    var Ph = 10
      , ti = l.La(l.tD, 0, 4, 25)
      , ui = l.La(l.vD, 0, 4, 25)
      , Rh = bb.create("" + l.Yn + "@20,0-2")
      , Qh = bb.create("" + l.Yn + "@20,3,4,8")
      , Th = bb.create("" + l.Yn + "@20,2,6,7,11")
      , Sh = bb.create("" + l.Yn + "@20,8,9,10,11")
      , uh = null
      , vi = bb.create("" + l.LD + "@20,0-8");
    fb.bF = l.La(l.zD, 0, 11, 20);
    fb.zv = P.el(new P(48,48,152,152));
    fb.gC = -17;
    fb.fC = 20;
    tb.xv = new P(142,157,112,104);
    tb.Wn = P.el(tb.xv);
    var Uh = l.La(null, 8, 17, 15)
      , wi = bb.create("18@3,18")
      , Ri = l.La(null, 21, 25, 20);
    ac.dC = l.La(l.xD, 0, 13, 20);
    bc.Bv = P.el(new P(155,176,88,76));
    Ma.Sv = 100;
    var xi = l.La(l.iD, 1, 3, 33)
      , vh = null
      , wh = null
      , Vh = null
      , Wh = null
      , yi = l.La(l.mE, 0, 39, 20);
    Md.Ct = [];
    Qb.oG = P.el(new P(264,350,108,2));
    Qb.Vv = 80;
    var Zh = [l.La(l.qC, 0, 18, 20), l.La(l.oC, 0, 24, 20), l.La(l.pC, 0, 15, 20), l.La(l.rC, 0, 19, 20), l.La(l.uC, 0, 26, 20), l.La(l.mC, 0, 12, 20), l.La(l.Cv, 0, 3, 20), l.La(l.tC, 0, 8, 20), l.La(l.Cv, 0, 3, 20), l.La(l.lC, 0, 8, 20), l.La(l.sC, 0, 29, 20), l.La(l.vC, 0, 6, 20)]
      , Bi = bb.create("" + l.kC + "@20,0,1,0,1")
      , Xh = bb.create("" + l.Dv + "@30,0-36,0x15")
      , Yh = bb.create("" + l.Dv + "@30,0x15,0-36");
    Rb.eC = l.La(null, 1, 5, 20);
    Rb.ew = P.el(new P(300,300,175,175));
    Ua.hw = 56;
    Ua.EF = 6;
    Ua.wj = 16;
    Ua.FF = -6.4;
    var Ig = bb.create("@20,2,3,3,4")
      , Di = bb.create("0-4@20,5@0.4,6@20")
      , Ei = l.La(null, 7, 10, 10)
      , Fi = l.La(null, 1, 4, 20);
    Fb.Ar = 16.8;
    Fb.nG = P.el(new P(70,64,82,82));
    var Gi = l.La(l.DE, 0, 17, 20)
      , Hi = l.La(l.FE, 0, 17, 20)
      , Ii = l.La(l.JE, 0, 5, 20)
      , Ji = l.La(l.HE, 0, 5, 20)
      , Si = l.La(l.AE, 0, 12, 20)
      , Ki = l.La(l.ME, 0, 10, 20)
      , Li = l.La(l.NE, 0, 10, 20)
      , Mi = l.La(l.OE, 0, 10, 20);
    Od.qH = 0;
    var $h = l.RE
      , Lg = l.SE
      , Ni = l.TE
      , ai = l.UE
      , ci = l.VE
      , Pi = l.WE
      , Oi = l.XE
      , bi = l.YE;
    na.ao = 36;
    na.iC = 120;
    na.hC = 240;
    na.pG = 110;
    na.Il = 1.2000000000000002;
    na.dw = .9;
    na.wf = !0;
    var zi = 0
      , Ai = 0;
    dd.eL = 1;
    ib.Iv = 0;
    ib.CC = 3;
    ib.TYPE = 103;
    Id.TYPE = 303;
    Wc.TYPE = 403;
    Wd.TYPE = 203;
    ca.TYPE = 105;
    gd.TYPE = 705;
    Kd.TYPE = 605;
    vf.TYPE = 1805;
    Xd.TYPE = 1205;
    Yd.TYPE = 305;
    qc.yC = 4.800000000000001;
    qc.TYPE = 1105;
    Ld.TYPE = 505;
    wf.TYPE = 1705;
    dc.TYPE = 1005;
    $c.TYPE = 905;
    Zd.TYPE = 205;
    $d.TYPE = 405;
    xf.TYPE = 1605;
    yf.TYPE = 1405;
    zf.TYPE = 1505;
    (function() {
        lg.tr = Array(256);
        let a = 0;
        for (; 256 > a; ) {
            let b = a++;
            lg.tr[b] = Bc.NJ(b)
        }
        return null
    }
    )(this);
    var Eh = "#000000";
    Df.TYPE = 1305;
    ii.aF = -1;
    Ef.mx = [1, 1, 2, 2, 4];
    Sb.GB = new Float32Array(16);
    id.HJ = [5120, 5121, 5122, 5123, 5126];
    wb.po = [0, 1, 774, 775, 770, 771, 772, 773];
    wb.pI = [512, 513, 514, 515, 516, 517, 518, 519];
    If.TYPE = 2005;
    Jf.TYPE = 1905;
    Kf.TYPE = 805;
    Fc.jH = [[0, 1, 1, 1, 0, 0, 1, 0], [1, 1, 0, 1, 1, 0, 0, 0]];
    vb.TYPE = 102;
    tc.gd = new E(0,0,0,1);
    tc.TYPE = 302;
    Lf.TYPE = 402;
    be.TYPE = 202;
    ce.TYPE = 502;
    cc.next = 0;
    Ka.count = 0;
    Ka.nI = 202;
    Ka.oI = 0;
    Ka.TYPE = 101;
    Ra.count = 0;
    Ra.TYPE = 201;
    Pf.TYPE = 601;
    rc.next = 0;
    Qf.TYPE = 501;
    mb.count = 0;
    mb.TYPE = 301;
    uc.TYPE = 401;
    Ca.Qu = new $b;
    Ca.UN = new $b;
    kb.count = 0;
    kb.TYPE = 104;
    B.TYPE = 304;
    R.TYPE = 204;
    wa.TYPE = 404;
    sc.wC = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    sc.Av = Pa.Oz(sc.wC);
    kd.dt = new DataView(new ArrayBuffer(8));
    var Ci = 1E-6
      , Yc = 57.29577951308232
      , Ea = .0174532925199432
      , wc = 3.141592653589793
      , ji = 1.5707963267948966
      , li = 6.283185307179586
      , pa = Infinity
      , qa = -Infinity
      , ld = 2147483647
      , de = 3.4E38
      , ee = -3.4E38;
    Tb.bo = -32768;
    var V = new Yf
      , ri = l.La(l.HG, 0, 10, 25)
      , Nh = l.GG
      , si = [0, 5, 6, 7, 8];
    Oc.XN = [l.JG, l.KG, l.LG, l.MG];
    Va.rr = 784;
    Va.Lv = Va.rr;
    Va.current = new t(0,Va.rr);
    Cc.lx = 0;
    md.$C = "0123456789abcdef".split("");
    k.Qa();
    k.kx = "video/outro_portrait.mp4:606240 video/outro_landscape.mp4:707037 video/intro_portrait.mp4:254354 video/intro_landscape.mp4:364300 strings.json:41951 menu/ui.png:277048 menu/ui.json:14533 menu/ui.avif:93427 menu/shadow.png:15280 menu/shadow.avif:2633 menu/seasons.png:153688 menu/seasons.json:1527 menu/seasons.avif:34025 menu/season3.png:231313 menu/season3.json:3097 menu/season3.avif:39252 menu/season2.png:231231 menu/season2.json:2700 menu/season2.avif:35274 menu/season1.png:250245 menu/season1.json:2699 menu/season1.avif:35761 menu/salute.png:89882 menu/salute.json:11190 menu/salute.avif:78563 menu/cut.png:63004 menu/cut.json:1104 menu/cut.avif:14932 menu/bg2.png:247796 menu/bg2.avif:83887 menu/bg.jpg:90340 loader_bg.jpg:22263 loader.png:16984 loader.dat:440 loader.avif:13186 lang/font-ru.png:66118 lang/font-ru.dat:5849 lang/font-ru.avif:50788 lang/font-nl.png:48803 lang/font-nl.dat:5569 lang/font-nl.avif:35766 lang/font-ko.png:153552 lang/font-ko.dat:13729 lang/font-ko.avif:114703 lang/font-ja.png:199065 lang/font-ja.dat:20119 lang/font-ja.avif:156944 lang/font-it.png:48543 lang/font-it.dat:5509 lang/font-it.avif:36329 lang/font-fr.png:49522 lang/font-fr.dat:5649 lang/font-fr.avif:37314 lang/font-es.png:50066 lang/font-es.dat:5669 lang/font-es.avif:37763 lang/font-en.png:48150 lang/font-en.dat:5589 lang/font-en.avif:35953 lang/font-de.png:50755 lang/font-de.dat:5649 lang/font-de.avif:38113 lang/font-br.png:52805 lang/font-br.dat:5849 lang/font-br.avif:40694 game/tut.png:27759 game/tut.json:2291 game/tut.avif:8244 game/obj_vinyl.png:105044 game/obj_vinyl.json:1520 game/obj_vinyl.avif:14661 game/obj_transporter.png:1535 game/obj_transporter.json:1841 game/obj_transporter.avif:1159 game/obj_steam.png:21885 game/obj_steam.json:7377 game/obj_steam.avif:13073 game/obj_star.png:347425 game/obj_star.json:20213 game/obj_star.avif:140409 game/obj_spikes.png:17960 game/obj_spikes.json:1080 game/obj_spikes.avif:10490 game/obj_spider.png:24082 game/obj_spider.json:2865 game/obj_spider.avif:12205 game/obj_sock.png:35190 game/obj_sock.json:1296 game/obj_sock.avif:7669 game/obj_pump.png:29141 game/obj_pump.json:2082 game/obj_pump.avif:9587 game/obj_lighter.png:56932 game/obj_lighter.json:8864 game/obj_lighter.avif:17301 game/obj_lantern.png:35359 game/obj_lantern.json:1538 game/obj_lantern.avif:10633 game/obj_hook.png:37297 game/obj_hook.json:3470 game/obj_hook.avif:15050 game/obj_gravity.png:14510 game/obj_gravity.json:728 game/obj_gravity.avif:4457 game/obj_ghost.png:12807 game/obj_ghost.json:1708 game/obj_ghost.avif:5544 game/obj_gap.png:47790 game/obj_gap.json:4895 game/obj_gap.avif:11868 game/obj_electro.png:30475 game/obj_electro.json:1296 game/obj_electro.avif:19955 game/obj_candy2.png:220109 game/obj_candy2.json:5411 game/obj_candy2.avif:38778 game/obj_candy1.png:242851 game/obj_candy1.json:5423 game/obj_candy1.avif:43390 game/obj_candy0.png:211894 game/obj_candy0.json:5408 game/obj_candy0.avif:39572 game/obj_bubble.png:104972 game/obj_bubble.json:6346 game/obj_bubble.avif:52076 game/obj_bouncer.png:42679 game/obj_bouncer.json:2308 game/obj_bouncer.avif:11241 game/obj_blades.png:26077 game/obj_blades.json:1871 game/obj_blades.avif:14498 game/obj_bee.png:8439 game/obj_bee.json:1294 game/obj_bee.avif:4060 game/char3.png:57662 game/char3.json:9011 game/char3.avif:27355 game/char2.png:364841 game/char2.json:18905 game/char2.avif:238826 game/char1.png:325294 game/char1.json:17377 game/char1.avif:222007 box17/support.png:20935 box17/support.avif:3584 box17/maps.json:31738 box17/cover.png:94067 box17/cover.json:721 box17/cover.avif:11863 box17/bg.jpg:192584 box16/support.png:20889 box16/support.avif:4603 box16/maps.json:33960 box16/cover.png:111821 box16/cover.json:721 box16/cover.avif:8733 box16/bg.jpg:166366 box15/support.png:19248 box15/support.avif:2873 box15/maps.json:26577 box15/cover.png:121680 box15/cover.json:721 box15/cover.avif:3647 box15/bg.jpg:80627 box14/support.png:22796 box14/support.avif:4530 box14/maps.json:22048 box14/cover.png:117995 box14/cover.json:721 box14/cover.avif:17531 box14/bg.jpg:193042 box13/support.png:14277 box13/support.avif:3572 box13/maps.json:22055 box13/cover.png:102039 box13/cover.json:721 box13/cover.avif:10244 box13/bg.jpg:130490 box12/support.png:27855 box12/support.avif:3644 box12/maps.json:26390 box12/cover.png:163397 box12/cover.json:721 box12/cover.avif:12415 box12/bg.jpg:161968 box11/support.png:20124 box11/support.avif:5281 box11/maps.json:27676 box11/cover.png:147733 box11/cover.json:721 box11/cover.avif:35474 box11/bg.jpg:318137 box10/support.png:10900 box10/support.avif:3824 box10/maps.json:28064 box10/cover.png:142967 box10/cover.json:721 box10/cover.avif:33681 box10/bg.jpg:291192 box09/support.png:18151 box09/support.avif:4523 box09/maps.json:26658 box09/cover.png:127769 box09/cover.json:721 box09/cover.avif:28967 box09/bg.jpg:290591 box08/support.png:17382 box08/support.avif:4089 box08/maps.json:29818 box08/earth.png:37193 box08/earth.avif:4882 box08/cover.png:154083 box08/cover.json:721 box08/cover.avif:31701 box08/bg.jpg:261876 box07/support.png:17646 box07/support.avif:4297 box07/maps.json:28052 box07/cover.png:176165 box07/cover.json:721 box07/cover.avif:39919 box07/bg.jpg:276708 box06/support.png:24856 box06/support.avif:3389 box06/maps.json:23078 box06/cover.png:191492 box06/cover.json:721 box06/cover.avif:45432 box06/bg.jpg:302842 box05/support.png:19451 box05/support.avif:5872 box05/maps.json:27415 box05/cover.png:112297 box05/cover.json:721 box05/cover.avif:57943 box05/bg.jpg:327075 box04/support.png:23898 box04/support.avif:5691 box04/maps.json:28162 box04/cover.png:174462 box04/cover.json:721 box04/cover.avif:37968 box04/bg.jpg:297536 box03/support.png:21077 box03/support.avif:4881 box03/maps.json:27927 box03/cover.png:144475 box03/cover.json:721 box03/cover.avif:32034 box03/bg.jpg:271789 box02/support.png:23502 box02/support.avif:5663 box02/maps.json:27937 box02/cover.png:141431 box02/cover.json:721 box02/cover.avif:26487 box02/bg.jpg:292429 box01/support.png:12953 box01/support.avif:4676 box01/maps.json:53148 box01/cover.png:178457 box01/cover.json:721 box01/cover.avif:40419 box01/bg.jpg:224627 audio/ogg/sound.ogg:202490 audio/ogg/menu_music.ogg:431450 audio/ogg/game_music.ogg:509573 audio/aac/sound.aac:262358 audio/aac/menu_music.aac:264130 audio/aac/game_music.aac:286172".split(" ");
    k.Vn = "res";
    k.MAX = 168;
    k.aM = [22, 23, 24];
    k.be = "video/outro_portrait.mp4 video/outro_landscape.mp4 video/intro_portrait.mp4 video/intro_landscape.mp4 strings.json menu/ui.{image} menu/ui.json menu/shadow.{image} menu/seasons.{image} menu/seasons.json menu/season3.{image} menu/season3.json menu/season2.{image} menu/season2.json menu/season1.{image} menu/season1.json menu/salute.{image} menu/salute.json menu/cut.{image} menu/cut.json menu/bg2.{image} menu/bg.jpg loader_bg.jpg loader.{image} loader.dat lang/font{language}.{image} lang/font{language}.dat game/tut.{image} game/tut.json game/obj_vinyl.{image} game/obj_vinyl.json game/obj_transporter.{image} game/obj_transporter.json game/obj_steam.{image} game/obj_steam.json game/obj_star.{image} game/obj_star.json game/obj_spikes.{image} game/obj_spikes.json game/obj_spider.{image} game/obj_spider.json game/obj_sock.{image} game/obj_sock.json game/obj_pump.{image} game/obj_pump.json game/obj_lighter.{image} game/obj_lighter.json game/obj_lantern.{image} game/obj_lantern.json game/obj_hook.{image} game/obj_hook.json game/obj_gravity.{image} game/obj_gravity.json game/obj_ghost.{image} game/obj_ghost.json game/obj_gap.{image} game/obj_gap.json game/obj_electro.{image} game/obj_electro.json game/obj_candy2.{image} game/obj_candy2.json game/obj_candy1.{image} game/obj_candy1.json game/obj_candy0.{image} game/obj_candy0.json game/obj_bubble.{image} game/obj_bubble.json game/obj_bouncer.{image} game/obj_bouncer.json game/obj_blades.{image} game/obj_blades.json game/obj_bee.{image} game/obj_bee.json game/char3.{image} game/char3.json game/char2.{image} game/char2.json game/char1.{image} game/char1.json box17/support.{image} box17/maps.json box17/cover.{image} box17/cover.json box17/bg.jpg box16/support.{image} box16/maps.json box16/cover.{image} box16/cover.json box16/bg.jpg box15/support.{image} box15/maps.json box15/cover.{image} box15/cover.json box15/bg.jpg box14/support.{image} box14/maps.json box14/cover.{image} box14/cover.json box14/bg.jpg box13/support.{image} box13/maps.json box13/cover.{image} box13/cover.json box13/bg.jpg box12/support.{image} box12/maps.json box12/cover.{image} box12/cover.json box12/bg.jpg box11/support.{image} box11/maps.json box11/cover.{image} box11/cover.json box11/bg.jpg box10/support.{image} box10/maps.json box10/cover.{image} box10/cover.json box10/bg.jpg box09/support.{image} box09/maps.json box09/cover.{image} box09/cover.json box09/bg.jpg box08/support.{image} box08/maps.json box08/earth.{image} box08/cover.{image} box08/cover.json box08/bg.jpg box07/support.{image} box07/maps.json box07/cover.{image} box07/cover.json box07/bg.jpg box06/support.{image} box06/maps.json box06/cover.{image} box06/cover.json box06/bg.jpg box05/support.{image} box05/maps.json box05/cover.{image} box05/cover.json box05/bg.jpg box04/support.{image} box04/maps.json box04/cover.{image} box04/cover.json box04/bg.jpg box03/support.{image} box03/maps.json box03/cover.{image} box03/cover.json box03/bg.jpg box02/support.{image} box02/maps.json box02/cover.{image} box02/cover.json box02/bg.jpg box01/support.{image} box01/maps.json box01/cover.{image} box01/cover.json box01/bg.jpg audio/{audio}/sound.{audio} audio/{audio}/menu_music.{audio} audio/{audio}/game_music.{audio}".split(" ");
    k.GL = [];
    k.RJ = [];
    k.ZK = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    k.vw = 0;
    k.uw = 1;
    k.Ir = 2;
    k.Hr = 3;
    k.ag = 4;
    k.Be = 5;
    k.$f = 6;
    k.Zf = 7;
    k.xr = 8;
    k.eD = 9;
    k.wr = 10;
    k.dD = 11;
    k.vr = 12;
    k.cD = 13;
    k.ur = 14;
    k.bD = 15;
    k.Hl = 16;
    k.Uv = 17;
    k.Xn = 18;
    k.Tv = 19;
    k.Gl = 20;
    k.Yf = 21;
    k.Rv = 22;
    k.sr = 23;
    k.Ad = 25;
    k.mf = 26;
    k.Qv = 27;
    k.ZC = 28;
    k.Fl = 29;
    k.YC = 30;
    k.El = 31;
    k.XC = 32;
    k.Dl = 33;
    k.WC = 34;
    k.Pv = 35;
    k.VC = 36;
    k.Cl = 37;
    k.UC = 38;
    k.Bl = 39;
    k.TC = 40;
    k.Al = 41;
    k.SC = 42;
    k.zl = 43;
    k.RC = 44;
    k.ai = 45;
    k.QC = 46;
    k.yl = 47;
    k.PC = 48;
    k.Ov = 49;
    k.OC = 50;
    k.$h = 51;
    k.NC = 52;
    k.qr = 53;
    k.MC = 54;
    k.xl = 55;
    k.LC = 56;
    k.wl = 57;
    k.KC = 58;
    k.vl = 65;
    k.JC = 66;
    k.ul = 67;
    k.IC = 68;
    k.pr = 69;
    k.HC = 70;
    k.nr = 71;
    k.GC = 72;
    k.tl = 73;
    k.FC = 74;
    k.Nv = 75;
    k.EC = 76;
    k.Mv = 77;
    k.DC = 78;
    k.yv = 126;
    k.Xf = 165;
    k.Wf = 166;
    k.sl = 167;
    J.Ed = new Td;
    yc.Xx = !0;
    Ch.aD = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215, 33554431, 67108863, 134217727, 268435455, 536870911, 1073741823, 2147483647, -1]
}
)("undefined" != typeof exports ? exports : "undefined" != typeof window ? window : "undefined" != typeof self ? self : this, "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);
//# sourceMappingURL=ctrr.js.map
