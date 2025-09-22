System.register("chunks:///_virtual/AdsManager.ts", ["cc", "./BGMManager.ts", "./SFXManager.ts"], (function(e) {
    "use strict";
    var t, n, s, a;
    return {
        setters: [function(e) {
            t = e.cclegacy,
            n = e._decorator
        }
        , function(e) {
            s = e.BGMManager
        }
        , function(e) {
            a = e.SFXManager
        }
        ],
        execute: function() {
            var c;
            t._RF.push({}, "01241sb7RFFxL8+WxYIp3ms", "AdsManager", void 0);
            var u = n.ccclass;
            n.property,
            e("AdsManager", u("AdsManager")(c = function() {
                function e() {}
                return e.showInterstitialAds = function(e) {
                    a.getInstance().setVolume(0),
                    s.getInstance().setVolume(0),
                    a.getInstance().setVolume(a.isMuted ? 0 : 1),
                    s.getInstance().setVolume(s.isMuted ? 0 : 1),
                    e()
                }
                ,
                e.showRewardedAds = function(e, t) {
                    a.getInstance().setVolume(0),
                    s.getInstance().setVolume(0),
                    a.getInstance().setVolume(a.isMuted ? 0 : 1),
                    s.getInstance().setVolume(s.isMuted ? 0 : 1),
                    t()
                }
                ,
                e
            }()) || c);
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ArcadeBonusBoardController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameController.ts", "./ResourcesManager.ts"], (function(t) {
    "use strict";
    var o, n, e, i, r, a, u, s, _;
    return {
        setters: [function(t) {
            o = t.inheritsLoose
        }
        , function(t) {
            n = t.cclegacy,
            e = t._decorator,
            i = t.Vec2,
            r = t.SpriteFrame,
            a = t.randomRangeInt,
            u = t.Component
        }
        , function(t) {
            s = t.GameController
        }
        , function(t) {
            _ = t.ResourcesManager
        }
        ],
        execute: function() {
            var p, c;
            n._RF.push({}, "a8fa7BOQaVHLLkO6EYCTcWA", "ArcadeBonusBoardController", void 0);
            var b = e.ccclass;
            e.property,
            t("ArcadeBonusBoardController", b("ArcadeBonusBoardController")(((c = function(t) {
                function n() {
                    for (var o, n = arguments.length, e = new Array(n), r = 0; r < n; r++)
                        e[r] = arguments[r];
                    return (o = t.call.apply(t, [this].concat(e)) || this).comboCounter = 0,
                    o.anyFruitDropped = !1,
                    o.bombHitCounter = 0,
                    o.bananaFrenzyHitCounter = 0,
                    o.bananaFreezeHitCounter = 0,
                    o.bananaDoubleHitCounter = 0,
                    o.firstSlashFruit = "",
                    o.lastSlashFruit = "",
                    o.onlySliceBerry = !0,
                    o.dataBonus = [[{
                        type: "DEFAULT",
                        point: 5,
                        text: "Fruit salad",
                        path: "bonus_icon_no_fruit_dropped"
                    }, {
                        type: "DEFAULT",
                        point: 5,
                        text: "Juicy slicing",
                        path: "bonus_icon_no_fruit_dropped"
                    }, {
                        type: "DEFAULT",
                        point: 5,
                        text: "Tasty fruit",
                        path: "bonus_icon_no_fruit_dropped"
                    }, {
                        type: "DEFAULT",
                        point: 5,
                        text: "Delicious fruit",
                        path: "bonus_icon_no_fruit_dropped"
                    }, {
                        type: "DEFAULT",
                        point: 5,
                        text: "Fruit mix",
                        path: "bonus_icon_no_fruit_dropped"
                    }], [{
                        type: "BONUS_COMBO",
                        combo: 15,
                        point: 10,
                        text: "Combo rookie",
                        path: "bonus_icon_total_combo"
                    }, {
                        type: "BONUS_COMBO",
                        combo: 30,
                        point: 15,
                        text: "Combo apprentice!",
                        path: "bonus_icon_total_combo"
                    }, {
                        type: "BONUS_COMBO",
                        combo: 40,
                        point: 25,
                        text: "Combo assassin!!",
                        path: "bonus_icon_total_combo"
                    }, {
                        type: "BONUS_COMBO",
                        combo: 55,
                        point: 35,
                        text: "Combo master!!!",
                        path: "bonus_icon_total_combo"
                    }, {
                        type: "BONUS_COMBO",
                        combo: 70,
                        point: 50,
                        text: "Combo god!!!!",
                        path: "bonus_icon_total_combo"
                    }], [{
                        type: "BEST_BONUS_COMBO",
                        combo: 3,
                        point: 5,
                        text: "{0} fruit combo",
                        path: "bonus_icon_max_combo"
                    }, {
                        type: "BEST_BONUS_COMBO",
                        combo: 5,
                        point: 10,
                        text: "{0} fruit combo",
                        path: "bonus_icon_max_combo"
                    }, {
                        type: "BEST_BONUS_COMBO",
                        combo: 6,
                        point: 20,
                        text: "Great {0} fruit combo",
                        path: "bonus_icon_max_combo"
                    }, {
                        type: "BEST_BONUS_COMBO",
                        combo: 7,
                        point: 30,
                        text: "Mega {0} fruit combo",
                        path: "bonus_icon_max_combo"
                    }, {
                        type: "BEST_BONUS_COMBO",
                        combo: 8,
                        point: 40,
                        text: "Glorious {0} fruit combo",
                        path: "bonus_icon_max_combo"
                    }, {
                        type: "BEST_BONUS_COMBO",
                        combo: 9,
                        point: 50,
                        text: "Impossible {0} fruit combo",
                        path: "bonus_icon_max_combo"
                    }, {
                        type: "BEST_BONUS_COMBO",
                        combo: 10,
                        point: 55,
                        text: "{0} fruit combo?!?!",
                        path: "bonus_icon_max_combo"
                    }], [{
                        type: "NO_FRUIT_DROPPED",
                        count: 0,
                        point: 50,
                        text: "No fruit dropped!",
                        path: "bonus_icon_no_fruit_dropped"
                    }], [{
                        type: "BOMB_HIT",
                        count: new i(-1,0),
                        point: 10,
                        text: "No bombs hit!",
                        path: "bonus_icon_no_bombs"
                    }, {
                        type: "BOMB_HIT",
                        count: new i(3,-1),
                        point: 50,
                        text: "Bomb lover",
                        path: "bonus_icon_hit_5_bombs"
                    }], [{
                        type: "BANANA_HIT",
                        count_frenzy: new i(-1,0),
                        count_freeze: new i(-1,0),
                        count_double: new i(-1,0),
                        point: 50,
                        text: "No bananas sliced!",
                        path: "bonus_icon_no_banana"
                    }, {
                        type: "BANANA_HIT",
                        count_frenzy: new i(1,-1),
                        count_freeze: new i(1,-1),
                        count_double: new i(1,-1),
                        point: 10,
                        text: "All three bananas",
                        path: "bonus_icon_set_of_three"
                    }, {
                        type: "BANANA_HIT",
                        count_frenzy: new i(1,-1),
                        count_freeze: new i(-1,0),
                        count_double: new i(-1,0),
                        point: 30,
                        text: "Nothin but frenzy",
                        path: "bonus_icon_one_banana"
                    }, {
                        type: "BANANA_HIT",
                        count_frenzy: new i(-1,0),
                        count_freeze: new i(1,-1),
                        count_double: new i(-1,0),
                        point: 30,
                        text: "Nothin but freeze",
                        path: "bonus_icon_one_banana"
                    }, {
                        type: "BANANA_HIT",
                        count_frenzy: new i(-1,0),
                        count_freeze: new i(-1,0),
                        count_double: new i(1,-1),
                        point: 30,
                        text: "Nothin but double",
                        path: "bonus_icon_one_banana"
                    }], [{
                        type: "SAME_SLASH_FIRST_AND_LAST",
                        point: 25,
                        text: "First and last fruit",
                        path: "bonus_icon_first_last_fruit"
                    }], [{
                        type: "SCORE_MULTIPLE",
                        multiple: 111,
                        max: 999,
                        point: 50,
                        text: "Triple digits",
                        path: "bonus_icon_multiple_111"
                    }, {
                        type: "SCORE_MULTIPLE",
                        multiple: 5,
                        max: -1,
                        point: 10,
                        text: "Multiple of five",
                        path: "bonus_icon_multiple_5"
                    }, {
                        type: "SCORE_MULTIPLE",
                        multiple: 10,
                        max: -1,
                        point: 20,
                        text: "Multiple of ten",
                        path: "bonus_icon_multiple_10"
                    }, {
                        type: "SCORE_MULTIPLE",
                        multiple: 100,
                        max: -1,
                        point: 40,
                        text: "Right on a hundred",
                        path: "bonus_icon_multiple_100"
                    }], [{
                        type: "SLICE_BERRY_ONLY",
                        point: 100,
                        text: "Nothing but berry",
                        path: "bonus_icon_no_fruit_dropped"
                    }]],
                    o
                }
                o(n, t),
                n.getInstance = function() {
                    return n.Instance
                }
                ;
                var e = n.prototype;
                return e.onLoad = function() {
                    n.Instance = this;
                    for (var t = 0; t < this.dataBonus.length; t++)
                        for (var o = 0; o < this.dataBonus[t].length; o++)
                            _.getInstance().loadResources("UI/InGameBonuses/" + this.dataBonus[t][o].path + "/spriteFrame", r, (function(t) {}
                            ))
                }
                ,
                e.start = function() {}
                ,
                e.reset = function() {
                    this.comboCounter = 0,
                    this.anyFruitDropped = !1,
                    this.bombHitCounter = 0,
                    this.bananaFrenzyHitCounter = 0,
                    this.bananaFreezeHitCounter = 0,
                    this.bananaDoubleHitCounter = 0,
                    this.firstSlashFruit = "",
                    this.lastSlashFruit = "",
                    this.onlySliceBerry = !0
                }
                ,
                e.getBestPointFrom = function(t) {
                    for (var o = t[0].type, n = [], e = 0; e < t.length; e++)
                        if ("BOMUS_COMBO" == o)
                            this.comboCounter >= t.combo && n.push(t[e]);
                        else if ("BEST_BONUS_COMBO" == o)
                            this.comboCounter >= t.combo && n.push(t[e]);
                        else if ("NO_FRUIT_DROPPED" == o)
                            this.anyFruitDropped || n.push(t[e]);
                        else if ("BOMB_HIT" == o) {
                            this.bombHitCounter;
                            var i = t[e].count.x
                              , r = t[e].count.y
                              , a = !0;
                            -1 != i && this.bombHitCounter < i && (a = !1),
                            -1 != r && this.bombHitCounter > r && (a = !1),
                            a && n.push(t[e])
                        } else if ("BANANA_HIT" == o) {
                            var u = !0
                              , _ = t[e].count_frenzy.x
                              , p = t[e].count_frenzy.y;
                            -1 != _ && this.bananaFrenzyHitCounter < _ && (u = !1),
                            -1 != p && this.bananaFrenzyHitCounter > p && (u = !1);
                            var c = t[e].count_freeze.x
                              , b = t[e].count_freeze.y;
                            -1 != c && this.bananaFreezeHitCounter < c && (u = !1),
                            -1 != b && this.bananaFreezeHitCounter > b && (u = !1);
                            var l = t[e].count_double.x
                              , h = t[e].count_double.y;
                            -1 != l && this.bananaDoubleHitCounter < l && (u = !1),
                            -1 != h && this.bananaDoubleHitCounter > h && (u = !1),
                            u && n.push(t[e])
                        } else if ("SAME_SLASH_FIRST_AND_LAST" == o)
                            this.firstSlashFruit == this.lastSlashFruit && "" != this.firstSlashFruit && "" != this.lastSlashFruit && n.push(t[e]);
                        else if ("SCORE_MULTIPLE" == o) {
                            var m = t[e].multiple
                              , f = t[e].max;
                            s.getInstance().score > 0 && (-1 == f || s.getInstance().score <= f) && s.getInstance().score % m == 0 && n.push(t[e])
                        } else
                            "SLICE_BERRY_ONLY" == o && this.onlySliceBerry && s.getInstance().score > 0 && n.push(t[e]);
                    for (var B = null, y = 0; y < n.length; y++)
                        (null == B || B.point < n[y].point) && (B = n[y]);
                    return B
                }
                ,
                e.getTopThreeBonus = function() {
                    for (var t = [], o = [], n = 1; n < this.dataBonus.length; n++) {
                        var e = this.getBestPointFrom(this.dataBonus[n]);
                        null != e && o.push(e)
                    }
                    for (var i = 0; i < o.length; i++)
                        for (var r = i + 1; r < o.length; r++)
                            if (o[i].point < o[r].point) {
                                var u = o[i];
                                o[i] = o[r],
                                o[r] = u
                            }
                    for (var s = 0; s < o.length && 3 != t.length; s++)
                        t.push(o[s]);
                    for (var _ = [0, 1, 2, 3, 4]; t.length < 3; ) {
                        var p = a(0, _.length)
                          , c = _.splice(p, 1)[0];
                        t.push(this.dataBonus[0][c])
                    }
                    for (var b = 0; b < t.length; b++)
                        for (r = b + 1; r < t.length; r++)
                            if (t[b].point > t[r].point) {
                                u = t[b];
                                t[b] = t[r],
                                t[r] = u
                            }
                    return t
                }
                ,
                n
            }(u)).Instance = null,
            p = c)) || p);
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/BGMManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SFXManager.ts"], (function(o) {
    "use strict";
    var i, t, e, u, n, s, r, a, c, d;
    return {
        setters: [function(o) {
            i = o.applyDecoratedDescriptor,
            t = o.inheritsLoose,
            e = o.initializerDefineProperty,
            u = o.assertThisInitialized
        }
        , function(o) {
            n = o.cclegacy,
            s = o._decorator,
            r = o.AudioClip,
            a = o.AudioSource,
            c = o.Component
        }
        , function(o) {
            d = o.SFXManager
        }
        ],
        execute: function() {
            var m, l, h, B, S, M;
            n._RF.push({}, "f26442EaRBEEaxopYmLZeNE", "BGMManager", void 0);
            var p = s.ccclass
              , f = s.property;
            o("BGMManager", (m = p("BGMManager"),
            l = f({
                type: [r]
            }),
            m(((M = function(o) {
                function i() {
                    for (var i, t = arguments.length, n = new Array(t), s = 0; s < t; s++)
                        n[s] = arguments[s];
                    return i = o.call.apply(o, [this].concat(n)) || this,
                    e(i, "listBGM", S, u(i)),
                    i.activeSound = -1,
                    i.audioSource = void 0,
                    i.audioSourceForBomb = void 0,
                    i
                }
                t(i, o),
                i.getInstance = function() {
                    return i.Instance
                }
                ;
                var n = i.prototype;
                return n.onLoad = function() {
                    i.Instance = this,
                    i.isMuted = !window.fast.gameAudio,
                    i.mutedBeforeBGM = i.isMuted,
                    i.mutedBeforeSFX = d.isMuted
                }
                ,
                n.start = function() {
                    window.fastPause = window.fastGamePause = function() {
                        setTimeout(function() {
                            this.muteBGM(!0),
                            d.getInstance().muteSFX(!0)
                        }
                        .bind(this), window.fast.info.ios ? 300 : 0)
                    }
                    .bind(this),
                    window.fastResume = window.fastGameResume = function() {
                        "visible" == document.visibilityState && window.innerWidth > window.innerHeight && (this.muteBGM(i.mutedBeforeBGM),
                        d.getInstance().muteSFX(i.mutedBeforeSFX))
                    }
                    .bind(this),
                    this.audioSource = this.getComponent(a),
                    this.audioSourceForBomb = this.addComponent(a),
                    this.audioSourceForBomb.clip = this.listBGM[i.BGM_BOMB_FUSE],
                    this.audioSourceForBomb.loop = !0,
                    this.audioSourceForBomb.stop()
                }
                ,
                n.playBombBGM = function() {
                    this.audioSourceForBomb.playing || this.audioSourceForBomb.play(),
                    i.isMuted ? this.audioSourceForBomb.volume = 0 : i.isMuted || (this.audioSourceForBomb.volume = 1)
                }
                ,
                n.stopBombBGM = function() {
                    this.audioSourceForBomb.stop()
                }
                ,
                n.play = function(o) {
                    this.activeSound != o && (-1 != this.activeSound && this.audioSource.stop(),
                    this.activeSound = o,
                    this.audioSource.clip = this.listBGM[o],
                    this.audioSource.loop = !0,
                    this.audioSource.play(),
                    i.isMuted ? this.audioSource.volume = 0 : i.isMuted || (this.audioSource.volume = 1))
                }
                ,
                n.pause = function() {
                    this.audioSource.pause()
                }
                ,
                n.resume = function() {
                    this.audioSource.play()
                }
                ,
                n.stop = function() {
                    this.audioSource.stop(),
                    this.activeSound = -1
                }
                ,
                n.muteBGM = function(o) {
                    i.isMuted = o,
                    i.isMuted ? (this.audioSource.volume = 0,
                    this.audioSourceForBomb.volume = 0) : (this.audioSource.volume = 1,
                    this.audioSourceForBomb.volume = 1)
                }
                ,
                n.setVolume = function(o) {
                    this.audioSource.volume = o,
                    this.audioSourceForBomb.volume = o
                }
                ,
                i
            }(c)).BGM_AMB_ARENA = 0,
            M.BGM_BOMB_FUSE = 1,
            M.BGM_MUSIC_MENU = 2,
            M.Instance = null,
            M.isMuted = !1,
            M.mutedBeforeBGM = !1,
            M.mutedBeforeSFX = !1,
            S = i((B = M).prototype, "listBGM", [l], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            h = B)) || h));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/BladeData.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, r, i, a, n, l, o, c, u;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            i = e.initializerDefineProperty,
            a = e.assertThisInitialized
        }
        , function(e) {
            n = e.cclegacy,
            l = e._decorator,
            o = e.Prefab,
            c = e.AudioClip,
            u = e.Component
        }
        ],
        execute: function() {
            var p, s, b, f, y, d, g, v, h, D, P;
            n._RF.push({}, "3bda4vN6YZNR6VR8krEOY8O", "BladeData", void 0);
            var m = l.ccclass
              , z = l.property;
            e("BladeData", (p = m("BladeData"),
            s = z({
                type: o
            }),
            b = z({
                type: [o]
            }),
            f = z({
                type: [c]
            }),
            y = z({
                type: [c]
            }),
            p((v = t((g = function(e) {
                function t() {
                    for (var t, r = arguments.length, n = new Array(r), l = 0; l < r; l++)
                        n[l] = arguments[l];
                    return t = e.call.apply(e, [this].concat(n)) || this,
                    i(t, "trailPrefab", v, a(t)),
                    i(t, "particlesPrefab", h, a(t)),
                    i(t, "bladeSFX", D, a(t)),
                    i(t, "sliceSFX", P, a(t)),
                    t.trailObject = void 0,
                    t.particlesObject = [],
                    t
                }
                return r(t, e),
                t.prototype.start = function() {}
                ,
                t
            }(u)).prototype, "trailPrefab", [s], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            h = t(g.prototype, "particlesPrefab", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            D = t(g.prototype, "bladeSFX", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            P = t(g.prototype, "sliceSFX", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            d = g)) || d));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/BladeTipWithLineRenderer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, r, n, i;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }
        , function(e) {
            r = e.cclegacy,
            n = e._decorator,
            i = e.Component
        }
        ],
        execute: function() {
            var o;
            r._RF.push({}, "374d173SU1O5ZRreZj2ihLR", "BladeTipWithLineRenderer", void 0);
            var c = n.ccclass;
            n.property,
            e("BladeTipWithLineRenderer", c("BladeTipWithLineRenderer")(o = function(e) {
                function r() {
                    return e.apply(this, arguments) || this
                }
                t(r, e);
                var n = r.prototype;
                return n.start = function() {}
                ,
                n.update = function(e) {}
                ,
                r
            }(i)) || o);
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/BlitzManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameController.ts", "./SFXManager.ts"], (function(e) {
    "use strict";
    var t, i, n, r, a, l, s, o, c, u, h, p, m, g, v;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            n = e.initializerDefineProperty,
            r = e.assertThisInitialized
        }
        , function(e) {
            a = e.cclegacy,
            l = e._decorator,
            s = e.Prefab,
            o = e.UIOpacity,
            c = e.lerp,
            u = e.instantiate,
            h = e.Vec3,
            p = e.Animation,
            m = e.Component
        }
        , function(e) {
            g = e.GameController
        }
        , function(e) {
            v = e.SFXManager
        }
        ],
        execute: function() {
            var y, d, I, f, B, S;
            a._RF.push({}, "545d9ME/PlENZ3gIRzYmQaX", "BlitzManager", void 0);
            var z = l.ccclass
              , C = l.property;
            e("BlitzManager", (y = z("BlitzManager"),
            d = C({
                type: [s],
                displayName: "List Prefab Blitz Text"
            }),
            y(((S = function(e) {
                function t() {
                    for (var t, i = arguments.length, a = new Array(i), l = 0; l < i; l++)
                        a[l] = arguments[l];
                    return t = e.call.apply(e, [this].concat(a)) || this,
                    n(t, "listPrefabBlitzText", B, r(t)),
                    t.timerWindow = 0,
                    t.comboTimeWindow = 4,
                    t.timeWindowIncreasePerSlice = .3,
                    t.level = 0,
                    t.levelCap = 6,
                    t.levelIncreaseFruitRequirement = 8,
                    t.nextLevelFruitRequirement = 0,
                    t.fruitSliceCounter = 0,
                    t.pointPerBlitzLevel = 5,
                    t.startTimer = !1,
                    t.dtMultiplier = 1,
                    t
                }
                i(t, e),
                t.getInstance = function() {
                    return t.Instance
                }
                ;
                var a = t.prototype;
                return a.onLoad = function() {
                    t.Instance = this
                }
                ,
                a.start = function() {}
                ,
                a.isActive = function() {
                    return this.startTimer
                }
                ,
                a.reset = function() {
                    v.getInstance().stopLoopSFX(v.SFX_BLITZ_DRUM),
                    g.Instance.gameplayScreen.getChildByPath("BlitzOverlay").active = !1,
                    g.Instance.gameplayScreen.getChildByPath("BlitzOverlay").getComponent(o).opacity = 0,
                    this.startTimer = !1,
                    this.dtMultiplier = 1,
                    this.timerWindow = 0,
                    this.level = 0,
                    this.fruitSliceCounter = 0,
                    this.nextLevelFruitRequirement = this.levelIncreaseFruitRequirement
                }
                ,
                a.update = function(e) {
                    g.getInstance().getGameState() == g.STATE_GAME_PLAYING && this.startTimer && (this.timerWindow += e * this.dtMultiplier,
                    g.Instance.gameplayScreen.getChildByPath("BlitzOverlay").getComponent(o).opacity = c(0, 10, (this.comboTimeWindow - this.timerWindow) / 2),
                    this.timerWindow >= this.comboTimeWindow && (v.getInstance().play(v.SFX_BLITZ_DRUM_END),
                    this.reset()))
                }
                ,
                a.showBlitzText = function() {
                    g.getInstance().blitzCount += 1;
                    var e = u(this.listPrefabBlitzText[this.level - 1]);
                    e.active = !0;
                    g.getInstance().getLastFruitSlashedPosition();
                    g.getInstance().updateScore(g.getInstance().score + this.level * this.pointPerBlitzLevel),
                    e.setPosition(new h(0,0,0)),
                    e.setParent(g.Instance.canvasForGameplayText),
                    e.getComponent(p).play("blitzText_in"),
                    e.getComponent(p).on(p.EventType.FINISHED, (function() {
                        e.destroy()
                    }
                    ), this, !0)
                }
                ,
                a.onFruitSliced = function() {
                    this.timerWindow = Math.max(0, this.timerWindow - this.timeWindowIncreasePerSlice)
                }
                ,
                a.addFruitSliceCounter = function(e) {
                    this.startTimer = !0,
                    this.fruitSliceCounter += e,
                    this.fruitSliceCounter >= this.nextLevelFruitRequirement && (this.fruitSliceCounter = this.nextLevelFruitRequirement,
                    this.level = Math.min(this.level + 1, this.levelCap),
                    this.timerWindow = 0,
                    this.nextLevelFruitRequirement += this.levelIncreaseFruitRequirement,
                    this.showBlitzText(),
                    v.getInstance().play(v.SFX_BLITZ_1 + (this.level - 1)),
                    1 == this.level && (g.Instance.gameplayScreen.getChildByPath("BlitzOverlay").active = !0,
                    g.Instance.gameplayScreen.getChildByPath("BlitzOverlay").getComponent(p).play("overlay_idle"),
                    v.getInstance().playLoopSFX(v.SFX_BLITZ_DRUM)),
                    g.Instance.gameplayScreen.getChildByPath("BlitzOverlay").getComponent(o).opacity = 10)
                }
                ,
                t
            }(m)).Instance = void 0,
            B = t((f = S).prototype, "listPrefabBlitzText", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            I = f)) || I));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Bomb.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ArcadeBonusBoardController.ts", "./FruitManager.ts", "./FruitPhysics.ts", "./GameController.ts", "./ScenePause.ts", "./SFXManager.ts", "./ShakeNode.ts"], (function(n) {
    "use strict";
    var o, t, e, i, s, a, p, c, r, h, l, y, d, u, g, b, w, f, m, z;
    return {
        setters: [function(n) {
            o = n.applyDecoratedDescriptor,
            t = n.inheritsLoose,
            e = n.initializerDefineProperty,
            i = n.assertThisInitialized,
            s = n.createClass
        }
        , function(n) {
            a = n.cclegacy,
            p = n._decorator,
            c = n.RigidBody,
            r = n.Vec3,
            h = n.randomRangeInt,
            l = n.tween,
            y = n.Animation,
            d = n.Component
        }
        , function(n) {
            u = n.ArcadeBonusBoardController
        }
        , function(n) {
            g = n.FruitManager
        }
        , function(n) {
            b = n.FruitPhysics
        }
        , function(n) {
            w = n.GameController
        }
        , function(n) {
            f = n.ScenePause
        }
        , function(n) {
            m = n.SFXManager
        }
        , function(n) {
            z = n.ShakeNode
        }
        ],
        execute: function() {
            var I, v, C, E, S, _, P;
            a._RF.push({}, "87cfbCMeURIPqqySIXa4ZV2", "Bomb", void 0);
            var B = p.ccclass
              , R = p.property;
            n("Bomb", (I = B("Bomb"),
            v = R({
                type: Number,
                displayName: "Collider radius"
            }),
            C = R({
                type: String,
                displayName: "bomb type"
            }),
            I((_ = o((S = function(n) {
                function o() {
                    for (var o, t = arguments.length, s = new Array(t), a = 0; a < t; a++)
                        s[a] = arguments[a];
                    return o = n.call.apply(n, [this].concat(s)) || this,
                    e(o, "colliderRadius", _, i(o)),
                    e(o, "bombType", P, i(o)),
                    o.waveId = 0,
                    o.lastLinearVelocity = null,
                    o.lastAngularVelocity = null,
                    o.slashed = !1,
                    o._isDeflected = !1,
                    o
                }
                t(o, n);
                var a = o.prototype;
                return a.start = function() {}
                ,
                a.isBombType = function(n) {
                    return this.bombType == n
                }
                ,
                a.onEnable = function() {
                    this.getComponent(c).setAngularVelocity(new r(h(-3, 3),h(-3, 3),h(-3, 3))),
                    this.getComponent(c).angularDamping = 0
                }
                ,
                a.reset = function() {
                    this.node.getComponent(b).reset(),
                    this.slashed = !1,
                    this.isDeflected = !1,
                    this.getComponent(c).setAngularVelocity(new r(h(-3, 3),h(-3, 3),h(-3, 3))),
                    this.getComponent(c).angularDamping = 0
                }
                ,
                a.getSlashed = function() {
                    return !w.IMMUNE && (!this.slashed && (w.gameMode == w.MODE_ARCADE && (u.getInstance().onlySliceBerry = !1),
                    this.slashed = !0,
                    !0))
                }
                ,
                a.deflected = function(n) {
                    this.isDeflected = !0;
                    var o = new r;
                    this.getComponent(c).getLinearVelocity(o);
                    this.getComponent(c).applyForce(new r(-5e3 * Math.cos(n * (Math.PI / 180)),3e3 * Math.sin((n + 180) * (Math.PI / 180)),100))
                }
                ,
                a.pauseVelocityOnly = function() {
                    this.node.getComponent(b).pausePhysics = !0
                }
                ,
                a.resumeVelocityOnly = function() {
                    this.node.getComponent(b).pausePhysics = !1
                }
                ,
                a.pausePhysic = function() {
                    this.node.getComponent(b).pausePhysics = !0,
                    this.lastAngularVelocity = new r(0,0,0),
                    this.getComponent(c).getAngularVelocity(this.lastAngularVelocity),
                    this.getComponent(c).setAngularVelocity(new r(0,0,0))
                }
                ,
                a.resumePhysic = function() {
                    this.node.getComponent(b).pausePhysics = !1,
                    this.getComponent(c).setAngularVelocity(this.lastAngularVelocity)
                }
                ,
                a.shakeBomb = function(n) {
                    l(this.node).by(.05 / 3, {
                        position: new r(-.4,-.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(.4,.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(-.4,.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(.4,-.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(-.4,-.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(.4,.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(-.4,.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(.4,-.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(-.4,-.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(.4,.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(-.4,.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(.4,-.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(-.4,-.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(.4,.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(-.4,.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(.4,-.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(-.4,-.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(.4,.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(-.4,.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(.4,-.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(-.4,-.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(.4,.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(-.4,.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(.4,-.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(-.4,-.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(.4,.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(-.4,.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(.4,-.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(-.4,-.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(.4,.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(-.4,.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(.4,-.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(-.4,-.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(.4,.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(-.4,.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(.4,-.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(-.4,-.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(.4,.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(-.4,.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(.4,-.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(-.4,-.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(.4,.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(-.4,.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(.4,-.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(-.4,-.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(.4,.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(-.4,.4,this.node.position.z)
                    }).by(.05 / 3, {
                        position: new r(.4,-.4,this.node.position.z)
                    }).call((function() {
                        n()
                    }
                    )).start()
                }
                ,
                a.animateExplodeTimer = function() {
                    var n = this;
                    w.getInstance().camera.getComponent(z).shakeEffect();
                    var t = this.node.position.clone()
                      , e = w.Instance.gameplayScreen.getChildByPath("white_background").getComponent(y);
                    e.play("white_background_show"),
                    e.on(y.EventType.FINISHED, (function() {
                        t.y = -200,
                        n.node.setPosition(t),
                        e.play("white_background_hide");
                        for (var i = 0; i < g.getInstance().activeObject.length; i++) {
                            var s = g.getInstance().activeObject[i];
                            if (null != s.getComponent(o)) {
                                var a = s.position.clone();
                                a.y = -200,
                                s.setPosition(a)
                            }
                        }
                    }
                    ), this, !0)
                }
                ,
                a.animateExplode = function() {
                    var n = this;
                    g.getInstance().stopAllObject(),
                    f.getInstance().hideButtonPause(),
                    m.getInstance().play(m.SFX_BOMB_EXPLODE_GAMEOVER);
                    var o = this.getComponent(c);
                    o.setLinearVelocity(new r(0,0,0)),
                    o.useGravity = !1;
                    for (var t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], e = function(o) {
                        var e = o;
                        console.log("setting: " + e);
                        var i = t.splice(h(0, t.length), 1)[0];
                        n.scheduleOnce((function() {
                            console.log(e),
                            w.getInstance().camera.getComponent(z).shakeEffect();
                            var o = g.getInstance().poolBombRay[e];
                            o.active = !0;
                            var t = n.node.position.clone()
                              , s = n.node.position.clone();
                            if (t.z = 5,
                            s.z = t.z - 1,
                            n.node.setPosition(t),
                            o.setPosition(s),
                            o.setRotationFromEuler(new r(-90,0,30 * i)),
                            o.setParent(n.node.parent),
                            e == g.getInstance().poolBombRay.length - 1) {
                                var a = w.Instance.gameplayScreen.getChildByPath("white_background").getComponent(y);
                                a.play("white_background_show"),
                                a.on(y.EventType.FINISHED, (function() {
                                    t.y = 200,
                                    n.node.setPosition(t);
                                    for (var o = 0; o < g.getInstance().poolBombRay.length; o++) {
                                        g.getInstance().poolBombRay[o].active = !1
                                    }
                                    g.getInstance().clearActiveObject(),
                                    n.scheduleOnce((function() {
                                        a.play("white_background_hide"),
                                        a.on(y.EventType.FINISHED, (function() {
                                            w.getInstance().canRevive ? (w.getInstance().showOfferContinue(),
                                            f.getInstance().hideButtonPause()) : w.getInstance().showGameOver((function() {
                                                w.getInstance().getScreenState() != w.SCREEN_STATE_RESULT_REWARD && w.getInstance().setScreenState(w.SCREEN_STATE_RESULT_REWARD)
                                            }
                                            ))
                                        }
                                        ), n, !0)
                                    }
                                    ), .5)
                                }
                                ), n, !0)
                            }
                        }
                        ), .166 * o)
                    }, i = 0; i < g.getInstance().poolBombRay.length; i++)
                        e(i)
                }
                ,
                s(o, [{
                    key: "isDeflected",
                    get: function() {
                        return this._isDeflected
                    },
                    set: function(n) {
                        this._isDeflected = n
                    }
                }]),
                o
            }(d)).prototype, "colliderRadius", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            P = o(S.prototype, "bombType", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            E = S)) || E));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ColorAssembler2D.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(o) {
    "use strict";
    var e, r, t, l, i, n, a, c, s, p;
    return {
        setters: [function(o) {
            e = o.applyDecoratedDescriptor,
            r = o.inheritsLoose,
            t = o.initializerDefineProperty,
            l = o.assertThisInitialized
        }
        , function(o) {
            i = o.cclegacy,
            n = o._decorator,
            a = o.Color,
            c = o.director,
            s = o.Director,
            p = o.Component
        }
        ],
        execute: function() {
            var u, y, b, f, m, d, h, C, g, R, D;
            i._RF.push({}, "5ed4cW/5v1F7pgF6o9lUgrE", "ColorAssembler2D", void 0);
            var T = n.ccclass
              , _ = n.property;
            o("ColorAssembler2D", (u = T("ColorAssembler2D"),
            y = _({
                type: [a],
                displayName: "Color Top Left"
            }),
            b = _({
                type: [a],
                displayName: "Color Top Right"
            }),
            f = _({
                type: [a],
                displayName: "Color Bottom Left"
            }),
            m = _({
                type: [a],
                displayName: "Color Bottom Right"
            }),
            u((C = e((h = function(o) {
                function e() {
                    for (var e, r = arguments.length, i = new Array(r), n = 0; n < r; n++)
                        i[n] = arguments[n];
                    return e = o.call.apply(o, [this].concat(i)) || this,
                    t(e, "colorTL", C, l(e)),
                    t(e, "colorTR", g, l(e)),
                    t(e, "colorBL", R, l(e)),
                    t(e, "colorBR", D, l(e)),
                    e
                }
                r(e, o);
                var i = e.prototype;
                return i.onEnable = function() {
                    c.once(s.EVENT_AFTER_DRAW, this._updateColors, this)
                }
                ,
                i.onDisable = function() {
                    c.off(s.EVENT_AFTER_DRAW, this._updateColors, this)
                }
                ,
                i._updateColors = function() {}
                ,
                e
            }(p)).prototype, "colorTL", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            g = e(h.prototype, "colorTR", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            R = e(h.prototype, "colorBL", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            D = e(h.prototype, "colorBR", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            d = h)) || d));
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ContMissionSelectMode.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./MissionLabel.ts", "./MissionManager.ts"], (function(t) {
    "use strict";
    var i, o, e, n, s, r, l, c, a, h, d;
    return {
        setters: [function(t) {
            i = t.applyDecoratedDescriptor,
            o = t.inheritsLoose,
            e = t.initializerDefineProperty,
            n = t.assertThisInitialized
        }
        , function(t) {
            s = t.cclegacy,
            r = t._decorator,
            l = t.Node,
            c = t.tween,
            a = t.Component
        }
        , function(t) {
            h = t.MissionLabel
        }
        , function(t) {
            d = t.MissionManager
        }
        ],
        execute: function() {
            var u, v, M, g, C;
            s._RF.push({}, "c5c0bKW6FJNoou1Rd581B3f", "ContMissionSelectMode", void 0);
            var S = r.ccclass
              , p = r.property;
            t("ContMissionSelectMode", (u = S("ContMissionSelectMode"),
            v = p({
                type: l
            }),
            u((C = i((g = function(t) {
                function i() {
                    for (var i, o = arguments.length, s = new Array(o), r = 0; r < o; r++)
                        s[r] = arguments[r];
                    return i = t.call.apply(t, [this].concat(s)) || this,
                    e(i, "containerLabelVersus", C, n(i)),
                    i.idxMission = 0,
                    i.holdInput = !1,
                    i.idxMenu = 0,
                    i
                }
                o(i, t);
                var s = i.prototype;
                return s.refreshContMission = function() {
                    var t = this;
                    this.idxMenu = 0,
                    this.idxMission = 0,
                    this.holdInput = !1;
                    var i = this.node.getChildByPath("HorScroll/view/content/HorScroll/view/content")
                      , o = i.position.clone();
                    o.x = -216.494,
                    i.setPosition(o);
                    var e = this.node.getChildByPath("HorScroll/view/content")
                      , n = e.position.clone();
                    n.x = -232.523,
                    e.setPosition(n),
                    this.node.getChildByPath("HorScroll/view/content/HorScroll/dot_1/CarouselDot").active = 0 == this.idxMission,
                    this.node.getChildByPath("HorScroll/view/content/HorScroll/dot_2/CarouselDot").active = 1 == this.idxMission,
                    this.node.getChildByPath("HorScroll/view/content/HorScroll/dot_3/CarouselDot").active = 2 == this.idxMission;
                    for (var s = 0; s < d.getInstance().activeMission.length; s++) {
                        var r = d.getInstance().activeMission[s];
                        this.node.getChildByPath("HorScroll/view/content/HorScroll/view/content/missionEntry_" + (s + 1)).getComponent(h).refresh(r, "select_mode"),
                        this.node.getChildByPath("HorScroll/view/content/HorScroll/view/content/missionEntry_" + (s + 1)).getComponent(h).setOnClaimed((function() {
                            t.refreshContMission()
                        }
                        ))
                    }
                    this.refreshArrowButton(),
                    this.refreshMissionBackground()
                }
                ,
                s.setHoldInput = function(t) {
                    this.holdInput = t;
                    for (var i = 0; i < d.getInstance().activeMission.length; i++)
                        this.node.getChildByPath("HorScroll/view/content/HorScroll/view/content/missionEntry_" + (i + 1)).getComponent(h).setHoldInput(t)
                }
                ,
                s.tryMoveMenu = function(t) {
                    if (this.idxMenu += t,
                    this.idxMenu > 1)
                        return this.idxMenu = 1,
                        !1;
                    var i = this
                      , o = this.node.getChildByPath("HorScroll/view/content")
                      , e = o.position.clone();
                    1 == this.idxMenu ? e.x = -699.823 : e.x = -232.523,
                    this.idxMission = 0;
                    var n = this.node.getChildByPath("HorScroll/view/content/HorScroll/view/content")
                      , s = n.position.clone();
                    return s.x = -216.494,
                    n.setPosition(s),
                    c(o).to(.1, {
                        position: e
                    }).call((function() {
                        i.node.getChildByPath("HorScroll/view/content/HorScroll/dot_1/CarouselDot").active = 0 == i.idxMission,
                        i.node.getChildByPath("HorScroll/view/content/HorScroll/dot_2/CarouselDot").active = 1 == i.idxMission,
                        i.node.getChildByPath("HorScroll/view/content/HorScroll/dot_3/CarouselDot").active = 2 == i.idxMission,
                        i.holdInput = !1,
                        i.refreshMissionBackground()
                    }
                    )).start(),
                    !0
                }
                ,
                s.tryMoveMission = function(t) {
                    if (this.idxMission += t,
                    this.idxMission > 2)
                        return this.idxMission = 2,
                        !1;
                    var i = this
                      , o = this.node.getChildByPath("HorScroll/view/content/HorScroll/view/content")
                      , e = o.position.clone();
                    return e.x = -216.494 - 435 * this.idxMission,
                    c(o).to(.1, {
                        position: e
                    }).call((function() {
                        i.node.getChildByPath("HorScroll/view/content/HorScroll/dot_1/CarouselDot").active = 0 == i.idxMission,
                        i.node.getChildByPath("HorScroll/view/content/HorScroll/dot_2/CarouselDot").active = 1 == i.idxMission,
                        i.node.getChildByPath("HorScroll/view/content/HorScroll/dot_3/CarouselDot").active = 2 == i.idxMission,
                        i.holdInput = !1,
                        i.refreshMissionBackground()
                    }
                    )).start(),
                    !0
                }
                ,
                s.btnNextClicked = function() {
                    this.holdInput || (this.holdInput = !0,
                    null != this.containerLabelVersus && this.containerLabelVersus.active && this.tryMoveMenu(1) || this.tryMoveMission(1),
                    this.refreshArrowButton())
                }
                ,
                s.btnPrevClicked = function() {
                    this.holdInput || (this.holdInput = !0,
                    null != this.containerLabelVersus && this.containerLabelVersus.active ? this.idxMission > 0 ? this.tryMoveMission(-1) : this.tryMoveMenu(-1) : this.tryMoveMission(-1),
                    this.refreshArrowButton())
                }
                ,
                s.refreshArrowButton = function() {
                    var t = this.node.getChildByPath("ArrowMissionRight")
                      , i = this.node.getChildByPath("ArrowMissionLeft");
                    null != this.containerLabelVersus && this.containerLabelVersus.active ? (i.active = this.idxMenu > 0,
                    t.active = this.idxMission < d.getInstance().activeMission.length - 1) : (t.active = this.idxMission < d.getInstance().activeMission.length - 1,
                    i.active = this.idxMission > 0)
                }
                ,
                s.refreshMissionBackground = function() {
                    var t = d.getInstance().activeMission[this.idxMission];
                    this.node.getChildByPath("HorScroll/view/content/HorScroll/MissionGrad/MissionGradient").active = t.current < t.target || t.claimed,
                    this.node.getChildByPath("HorScroll/view/content/HorScroll/MissionGrad/MissionCompleteGradientStroke").active = t.current >= t.target && !t.claimed,
                    this.node.getChildByPath("HorScroll/view/content/HorScroll/MissionGrad/MissionCompleteGradient").active = t.current >= t.target && !t.claimed
                }
                ,
                s.start = function() {}
                ,
                i
            }(a)).prototype, "containerLabelVersus", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            M = g)) || M));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ControllerBlade.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AdsManager.ts", "./ArcadeBonusBoardController.ts", "./BGMManager.ts", "./BladeData.ts", "./BlitzManager.ts", "./Bomb.ts", "./Data.ts", "./Fruit.ts", "./FruitManager.ts", "./GameController.ts", "./SceneGameplay.ts", "./ScenePause.ts", "./SceneSelectMode.ts", "./SceneTutorialDeflect.ts", "./SenseiSwagScene.ts", "./SFXManager.ts", "./ShakeNode.ts", "./UIMissionTutorial.ts", "./SceneDeflectOffer.ts"], (function(e) {
    "use strict";
    var t, n, a, i, o, s, l, r, c, p, h, g, d, u, m, S, I, y, C, f, T, E, _, v, P, M, w, F, b, D, A, B, x, R, O, L, N, G, k, X, U, H, z, W, Y, Z, V, K;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            n = e.inheritsLoose,
            a = e.initializerDefineProperty,
            i = e.assertThisInitialized
        }
        , function(e) {
            o = e.cclegacy,
            s = e._decorator,
            l = e.Node,
            r = e.Camera,
            c = e.Line,
            p = e.Prefab,
            h = e.SpriteFrame,
            g = e.Vec3,
            d = e.find,
            u = e.Input,
            m = e.Graphics,
            S = e.instantiate,
            I = e.CurveRange,
            y = e.ParticleSystem,
            C = e.view,
            f = e.Vec2,
            T = e.randomRangeInt,
            E = e.Intersection2D,
            _ = e.Sprite,
            v = e.Color,
            P = e.AnimationComponent,
            M = e.Animation,
            w = e.Component,
            F = e.MeshRenderer,
            b = e.tween
        }
        , function(e) {
            D = e.AdsManager
        }
        , function(e) {
            A = e.ArcadeBonusBoardController
        }
        , function(e) {
            B = e.BGMManager
        }
        , function(e) {
            x = e.BladeData
        }
        , function(e) {
            R = e.BlitzManager
        }
        , function(e) {
            O = e.Bomb
        }
        , function(e) {
            L = e.Data
        }
        , function(e) {
            N = e.Fruit
        }
        , function(e) {
            G = e.FruitManager
        }
        , function(e) {
            k = e.GameController
        }
        , function(e) {
            X = e.SceneGameplay
        }
        , function(e) {
            U = e.ScenePause
        }
        , function(e) {
            H = e.SceneSelectMode
        }
        , function(e) {
            z = e.SceneTutorialDeflect
        }
        , function(e) {
            W = e.SenseiSwagScene
        }
        , function(e) {
            Y = e.SFXManager
        }
        , function(e) {
            Z = e.ShakeNode
        }
        , function(e) {
            V = e.UIMissionTutorial
        }
        , function(e) {
            K = e.SceneDeflectOffer
        }
        ],
        execute: function() {
            var q, j, Q, J, $, ee, te, ne, ae, ie, oe, se, le, re, ce, pe, he, ge, de, ue, me, Se, Ie, ye;
            o._RF.push({}, "d7347eZappP+qQRvW00cqin", "ControllerBlade", void 0);
            var Ce = s.ccclass
              , fe = s.property;
            e("ControllerBlade", (q = Ce("ControllerBlade"),
            j = fe({
                type: [l],
                displayName: "Blade Tip"
            }),
            Q = fe({
                type: [r],
                displayName: "Camera"
            }),
            J = fe({
                type: [c],
                displayName: "Line Trail"
            }),
            $ = fe({
                type: [l],
                displayName: "TrailV2"
            }),
            ee = fe({
                type: [l],
                displayName: "TrailV3"
            }),
            te = fe({
                type: [p],
                displayName: "Splash"
            }),
            ne = fe({
                type: [p],
                displayName: "SliceDiamond"
            }),
            ae = fe({
                type: [p],
                displayName: "Splat"
            }),
            ie = fe({
                type: [p],
                displayName: "SliceDiamondCritical"
            }),
            oe = fe({
                type: [h],
                displayName: "SplatSpriteFrame"
            }),
            q(((ye = function(e) {
                function t() {
                    for (var t, n = arguments.length, o = new Array(n), s = 0; s < n; s++)
                        o[s] = arguments[s];
                    return t = e.call.apply(e, [this].concat(o)) || this,
                    a(t, "bladeTip", re, i(t)),
                    a(t, "camera", ce, i(t)),
                    a(t, "line", pe, i(t)),
                    a(t, "trail", he, i(t)),
                    a(t, "trailGraphics", ge, i(t)),
                    a(t, "prefabSplash", de, i(t)),
                    a(t, "prefabSliceDiamond", ue, i(t)),
                    a(t, "prefabSplat", me, i(t)),
                    a(t, "prefabSliceDiamondCritical", Se, i(t)),
                    t.poolSplash = [],
                    t.poolSlice = [],
                    t.poolSliceCritical = [],
                    t.poolSplat = [],
                    a(t, "splatSpriteFrame", Ie, i(t)),
                    t.timerToShiftLine = 0,
                    t.touching = !1,
                    t.maxPosition = 15,
                    t.input = {
                        x: 0,
                        y: 0
                    },
                    t.linePosition = [],
                    t.pointTimer = [],
                    t.trailDistance = 0,
                    t.currentTouchID = -1,
                    t.distanceMove = 0,
                    t.firstPosition = new g(0,0,0),
                    t.lastSFXSound = 0,
                    t.spawnRateParticleData = [],
                    t.sfxBlades = [],
                    t.sfxSlices = [],
                    t.lastRandCrit = 0,
                    t
                }
                n(t, e),
                t.getInstance = function() {
                    return t.Instance
                }
                ;
                var o = t.prototype;
                return o.onLoad = function() {
                    t.Instance = this
                }
                ,
                o.start = function() {
                    d("Canvas").on(u.EventType.TOUCH_START, this.touchStart, this, !0),
                    d("Canvas").on(u.EventType.TOUCH_MOVE, this.touchMove, this, !0),
                    d("Canvas").on(u.EventType.TOUCH_END, this.touchEnd, this, !0),
                    this.trailGraphics.getComponent(m).clear(),
                    this.resetBladeData()
                }
                ,
                o.getSplash = function() {
                    return this.poolSplash.length > 0 ? this.poolSplash.pop() : S(this.prefabSplash)
                }
                ,
                o.getSplat = function() {
                    return this.poolSplat.length > 0 ? this.poolSplat.pop() : S(this.prefabSplat)
                }
                ,
                o.getSliceDiamond = function() {
                    return this.poolSlice.length > 0 ? this.poolSlice.pop() : S(this.prefabSliceDiamond)
                }
                ,
                o.getSliceDiamondCritical = function() {
                    return this.poolSliceCritical.length > 0 ? this.poolSliceCritical.pop() : S(this.prefabSliceDiamondCritical)
                }
                ,
                o.update = function(e) {
                    this.checkFruits(!0),
                    k.getInstance().getScreenState() == k.SCREEN_STATE_GAMEPLAY && this.checkFruits(!1),
                    this.trail.position = this.bladeTip.position;
                    for (var t = 0; t < this.linePosition.length; t++)
                        this.pointTimer[t] += e,
                        this.pointTimer[t] >= .2 && (this.linePosition.splice(t, 1),
                        this.pointTimer.splice(t, 1),
                        t -= 1);
                    if (this.lastSFXSound -= e,
                    0 == this.linePosition.length) {
                        if (this.trailGraphics.getComponent(m).clear(),
                        !this.touching && (this.bladeTip.getChildByPath("BladeTip").active = !1,
                        this.bladeTip.getChildByPath("Particle0"))) {
                            var n = new I;
                            n.constant = 0,
                            this.bladeTip.getChildByPath("Particle0").getComponent(y).rateOverTime = n;
                            for (var a = this.bladeTip.getChildByPath("Particle0").getComponentsInChildren(y), i = 0; i < a.length; i++)
                                a[i].rateOverTime = n
                        }
                    } else {
                        var o = this.trailGraphics.getComponent(m);
                        if (o.clear(),
                        this.linePosition.length > 0) {
                            var s = new g;
                            this.camera.worldToScreen(this.linePosition[0], s);
                            var l = 1 / C.getScaleY()
                              , r = 1 / C.getScaleX();
                            s.x *= r,
                            s.y *= l,
                            o.moveTo(s.x, s.y),
                            o.lineWidth = 32;
                            for (var c = s.clone(), p = 1; p < this.linePosition.length; p++) {
                                this.camera.worldToScreen(this.linePosition[p], s),
                                s.x *= r,
                                s.y *= l,
                                o.lineTo(s.x, s.y);
                                var h = f.distance(c, s);
                                this.lastSFXSound <= 0 && h >= 50 && (this.lastSFXSound = .3,
                                this.sfxBlades.length > 0 && Y.getInstance().playClip(this.sfxBlades[T(0, this.sfxBlades.length)])),
                                c = s.clone()
                            }
                            o.stroke()
                        }
                    }
                }
                ,
                o.tryPutPoolSplash = function(e) {
                    this.poolSplash.push(e)
                }
                ,
                o.tryPutPoolSplat = function(e) {
                    this.poolSplat.push(e)
                }
                ,
                o.checkFruits = function(e) {
                    for (var t = this, n = this, a = this.linePosition, i = e ? k.getInstance().listUIFruit : G.getInstance().getActiveFruit(), o = function(e) {
                        i.forEach((function(i, o, s) {
                            if (i.active) {
                                var l = i.worldPosition
                                  , r = (i.getComponentInChildren(F).mesh.struct.maxPosition.x - i.getComponentInChildren(F).mesh.struct.minPosition.x) * i.worldScale.x
                                  , c = (i.getComponentInChildren(F).mesh.struct.maxPosition.y - i.getComponentInChildren(F).mesh.struct.minPosition.y) * i.worldScale.y
                                  , p = {
                                    x: l.x,
                                    y: l.y,
                                    width: r,
                                    height: c
                                }
                                  , h = null != i.getComponent(N)
                                  , u = null != i.getComponent(O);
                                if (n.checkIntersects(p, new f(a[e].x,a[e].y), new f(a[e - 1].x,a[e - 1].y), h))
                                    if (h) {
                                        var m = i.getComponent(N)
                                          , S = a[e].y - a[e - 1].y
                                          , I = a[e].x - a[e - 1].x
                                          , E = Math.atan2(S, I) / Math.PI * 180;
                                        if (!m.slashed) {
                                            if ("invalid" != m.keyMenu) {
                                                var w = !1;
                                                "" == m.keyMenu && (t.lastRandCrit += T(1, 101),
                                                t.lastRandCrit %= 100,
                                                w = !m.isPomegranate() && !m.isBerryBlast() && t.lastRandCrit <= 7,
                                                k.TUTORIAL_STATE >= 1 && k.TUTORIAL_STATE <= 3 && (V.getInstance().updateCountFruits(V.getInstance().counterFruits + 1, (function() {
                                                    var e = k.Instance.gameplayScreen.getChildByPath("container_tutorial_finger");
                                                    e.active && (e.getComponent(M).stop(),
                                                    e.active = !1),
                                                    3 == k.TUTORIAL_STATE ? (k.TUTORIAL_STATE = 4,
                                                    V.getInstance().showComplete((function() {
                                                        n.scheduleOnce((function() {
                                                            V.getInstance().hide()
                                                        }
                                                        ), 3)
                                                    }
                                                    )),
                                                    U.getInstance().showButtonPause(),
                                                    k.saveData()) : (k.TUTORIAL_STATE += 1,
                                                    k.saveData()),
                                                    V.getInstance().counterFruits = 0,
                                                    G.getInstance().startTimer = 0
                                                }
                                                )),
                                                w = !1),
                                                w ? k.getInstance().gameData.g.push({
                                                    a: "sfc",
                                                    t: k.getInstance().timerGameplay.toFixed(4),
                                                    n: m.waveId
                                                }) : m.isBerryBlast() ? k.getInstance().gameData.g.push({
                                                    a: "sfb",
                                                    t: k.getInstance().timerGameplay.toFixed(4),
                                                    n: m.waveId
                                                }) : k.getInstance().gameData.g.push({
                                                    a: "sf",
                                                    t: k.getInstance().timerGameplay.toFixed(4),
                                                    n: m.waveId
                                                })),
                                                t.sfxSlices.length > 0 && Y.getInstance().playClip(t.sfxSlices[T(0, t.sfxSlices.length)]),
                                                m.getSlashed(E, w);
                                                var x, q = m.getComponent(N).getFruitDetail();
                                                if ("none" != q.splashTex) {
                                                    var j = t.getSplash();
                                                    j.setParent(d("BladeCanvas"));
                                                    var Q = new g(0,0,0);
                                                    t.camera.worldToScreen(new g(p.x,p.y,0), Q),
                                                    Q.x /= C.getScaleX(),
                                                    Q.y /= C.getScaleY();
                                                    var J = k.getInstance().mainCanvas2.getChildByPath("Camera");
                                                    j.setRotationFromEuler(0, 0, E + 90),
                                                    j.getComponentInChildren(_).color = new v(w ? "#1A5F90" : m.getComponent(N).getFruitDetail().splashColor),
                                                    j.setWorldPosition(Q),
                                                    j.active = !0,
                                                    j.getComponent(P).play("fruitSplash_spriteAnim"),
                                                    j.getComponent(P).once(M.EventType.FINISHED, (function() {
                                                        j.getComponent(P).stop(),
                                                        j.active = !1,
                                                        t.poolSplash.push(j)
                                                    }
                                                    )),
                                                    Q.x += J.position.x,
                                                    Q.y += J.position.y;
                                                    var $ = Q
                                                      , ee = !1
                                                      , te = T(q.minSplash, q.maxSplash + 1);
                                                    w && (te *= 2);
                                                    for (var ne = function(e) {
                                                        if (m.getComponent(N).isPomegranate() && m.getComponent(N).counter % 2 != 0)
                                                            return "break";
                                                        var n = t.getSplat();
                                                        n.setParent(d("CanvasBG/DojoBG/splatEffect"));
                                                        var a = $.clone();
                                                        "slice12" != q.splashTex ? (a.x += 10 * T(-10, 10),
                                                        a.y += 10 * T(-10, 10)) : (a.x += 1 * T(-10, 10),
                                                        a.y += 1 * T(-10, 10));
                                                        var i = T(18, 25) / 10
                                                          , o = 0;
                                                        "slice12" == q.splashTex ? (o = m.getComponent(N).timerSlicing,
                                                        ee = !0,
                                                        a = $.clone(),
                                                        T(0, 100) <= 25 ? n.getComponentInChildren(_).spriteFrame = t.splatSpriteFrame[1] : (n.getComponentInChildren(_).spriteFrame = t.splatSpriteFrame[T(4, 6)],
                                                        a.x -= 200 * Math.cos(E * Math.PI / 180),
                                                        a.y -= 100 * Math.sin(E * Math.PI / 180)),
                                                        n.scale = new g(-.7,.7,1),
                                                        n.setRotationFromEuler(0, 0, E)) : "splash2" == q.splashTex ? (n.getComponentInChildren(_).spriteFrame = t.splatSpriteFrame[T(3, 4)],
                                                        n.scale = new g(.7,.7,1),
                                                        n.setRotationFromEuler(0, 0, 0)) : T(0, 100) % 2 == 0 || ee ? (n.getComponentInChildren(_).spriteFrame = t.splatSpriteFrame[T(1, 2)],
                                                        n.scale = new g(.7,.7,1),
                                                        n.setRotationFromEuler(0, 0, 0),
                                                        b(n.getChildByPath("assets")).delay(i).by(1, {
                                                            scale: new g(0,.12,0)
                                                        }).start()) : (ee = !0,
                                                        n.getComponentInChildren(_).spriteFrame = t.splatSpriteFrame[T(5, 6)],
                                                        n.scale = new g(-.7,.7,1),
                                                        (a = $.clone()).x -= 200 * Math.cos(E * Math.PI / 180),
                                                        a.y -= 100 * Math.sin(E * Math.PI / 180),
                                                        n.setRotationFromEuler(0, 0, E)),
                                                        n.getChildByPath("assets").scale = new g(1,1,1),
                                                        n.getComponentInChildren(_).color = new v(w ? "#1A5F90" : m.getComponent(N).getFruitDetail().splashColor),
                                                        n.setWorldPosition(a),
                                                        n.active = !0,
                                                        n.getComponent(_).color = new v(255,255,255,255),
                                                        b(n).delay(i + o).by(1, {
                                                            position: new g(0,2 * T(-10, -5),0)
                                                        }).start(),
                                                        b(n.getComponent(_)).delay(i + o).to(1, {
                                                            color: new v(255,255,255,0)
                                                        }).call((function() {
                                                            n.active = !1,
                                                            t.poolSplat.push(n)
                                                        }
                                                        )).start()
                                                    }, ae = 0; ae < te; ae++) {
                                                        if ("break" === ne())
                                                            break
                                                    }
                                                }
                                                w ? (k.Instance.showCritical(),
                                                x = t.getSliceDiamondCritical()) : x = t.getSliceDiamond(),
                                                x.setParent(d("BladeCanvas"));
                                                var ie = new g(0,0,0);
                                                t.camera.worldToScreen(new g(p.x,p.y,0), ie),
                                                ie.x /= C.getScaleX(),
                                                ie.y /= C.getScaleY(),
                                                x.active = !0,
                                                x.setRotationFromEuler(0, 0, E + 90),
                                                x.setWorldPosition(ie),
                                                w ? (x.getComponent(M).play("fruitSlice_diamond_critical"),
                                                N.CAMERA_ZOOMED ? (x.getChildByPath("assets").setScale(new g(2,2,2)),
                                                x.getChildByPath("assets-001").setScale(new g(2,2,2))) : (x.getChildByPath("assets").setScale(new g(1,1,1)),
                                                x.getChildByPath("assets-001").setScale(new g(1,1,1)))) : (x.getComponent(M).play("fruitSlice_diamond"),
                                                N.CAMERA_ZOOMED ? x.getChildByPath("assets").setScale(new g(2,2,2)) : x.getChildByPath("assets").setScale(new g(1,1,1))),
                                                x.getComponent(M).once(M.EventType.FINISHED, (function() {
                                                    x.getComponent(M).stop(),
                                                    x.active = !1,
                                                    w ? t.poolSliceCritical.push(x) : t.poolSlice.push(x)
                                                }
                                                ))
                                            }
                                            if ("" == m.keyMenu)
                                                if (m.isPomegranate())
                                                    ;
                                                else if (m.isPeachyTime())
                                                    k.getInstance().peachyCount += 1,
                                                    m.stopParticlePeachyTime(),
                                                    k.getInstance().showPeachTimeText(m.node.position),
                                                    G.getInstance().showPeachyTimeBurst(m.node.position),
                                                    k.gameMode == k.MODE_ZEN ? k.getInstance().updateZenTimer(k.getInstance().getZenTimer() + 2) : k.gameMode == k.MODE_ARCADE && k.getInstance().updateArcadeTimer(k.getInstance().arcadeTimer + 2);
                                                else if (m.isBerryBlast())
                                                    k.getInstance().berryBlastCount += 1,
                                                    k.getInstance().updateScore(k.getInstance().score + 5),
                                                    k.getInstance().camera.getComponent(Z).shakeEffect(),
                                                    G.getInstance().showShockwave(m.node.position),
                                                    k.getInstance().showBerryBlastText(m.node.position);
                                                else {
                                                    k.getInstance().updateScore(k.getInstance().score + 1),
                                                    k.getInstance().setLastFruitSlashedPosition(m.node.position);
                                                    var oe = "";
                                                    "greenapple" == k.fruitMode && m.isFruitSameType("AppleGreen") ? oe = "APPLE" : "watermelon" == k.fruitMode && m.isFruitSameType("Watermelon") ? oe = "WATERMELON" : "pineapple" == k.fruitMode && m.isFruitSameType("Pineapple") ? oe = "PINEAPPLE" : "orange" == k.fruitMode && m.isFruitSameType("Orange") ? oe = "ORANGE" : "coconut" == k.fruitMode && m.isFruitSameType("Coconut") && (oe = "COCONUT"),
                                                    "" != oe && (Y.getInstance().play(Y.SFX_COMBO_10_FRUIT_PLUS),
                                                    k.getInstance().updateScore(k.getInstance().score + 1),
                                                    k.getInstance().showSpecificFruitText(oe, m.node.position)),
                                                    k.getInstance().updateCombo(k.getInstance().getCombo() + 1),
                                                    1 == k.getInstance().getCombo() ? (k.getInstance().breakCombo = !1,
                                                    k.getInstance().updateTimerCombo(.3)) : k.gameMode == k.MODE_ARCADE && G.getInstance().frenzyDuration >= 0 || k.getInstance().updateTimerCombo(k.getInstance().getTimerCombo() + .1)
                                                }
                                            else if ("get_random_powerup" == m.keyMenu)
                                                k.getInstance().setHoldInput(!0),
                                                D.showRewardedAds((function() {
                                                    k.counterWithoutWatchFreePowerup = 0,
                                                    H.getInstance().showBtnAds(!1);
                                                    var e = [0, 1, 2];
                                                    H.game_mode.includes("zen") ? e = [0, 2] : H.game_mode.includes("classic") && (e = [0, 1]);
                                                    var t = e[T(0, e.length)];
                                                    0 == t ? (L.getInstance().inventoryPUBerryBlast += 1,
                                                    k.saveData(),
                                                    K.FROM_SELECT_MODE_SCREEN = !0,
                                                    H.getInstance().showClaimBerryBlast()) : 1 == t ? (L.getInstance().inventoryPUDeflect += 1,
                                                    k.saveData(),
                                                    K.FROM_SELECT_MODE_SCREEN = !0,
                                                    H.getInstance().showClaimDeflect()) : 2 == t && (L.getInstance().inventoryPUPeachyTime += 1,
                                                    k.saveData(),
                                                    K.FROM_SELECT_MODE_SCREEN = !0,
                                                    H.getInstance().showClaimPeachyTime()),
                                                    k.Instance.selectModeScreen.getComponent(H).refreshPowerUp()
                                                }
                                                ), (function() {
                                                    k.getInstance().resetScreen(H.getInstance().node),
                                                    k.getInstance().setHoldInput(!1);
                                                    var e = [0, 1, 2];
                                                    T(0, e.length)
                                                }
                                                ));
                                            else if ("pilih_state_classic" == m.keyMenu || "pilih_state_zen" == m.keyMenu || "pilih_state_arcade" == m.keyMenu) {
                                                var se = "classic"
                                                  , le = "";
                                                "pilih_state_classic" == m.keyMenu ? (k.gameMode = k.MODE_CLASSIC,
                                                se = "classic",
                                                le = "Classic Mode",
                                                H.game_mode = "classic") : "pilih_state_zen" == m.keyMenu ? (k.gameMode = k.MODE_ZEN,
                                                se = "zen",
                                                le = "Zen Mode",
                                                H.game_mode = "zen") : "pilih_state_arcade" == m.keyMenu && (k.gameMode = k.MODE_ARCADE,
                                                se = "arcade",
                                                le = "Arcade Mode",
                                                H.game_mode = "arcade"),
                                                k.getInstance().setHoldInput(!0),
                                                k.getInstance().exitScreen((function() {
                                                    k.getInstance().setHoldInput(!1),
                                                    H.setFrom("homescreen", se, []),
                                                    H.setTitle(le),
                                                    k.context_type = "solo",
                                                    k.getInstance().setScreenState(k.SCREEN_STATE_SELECT_MODE)
                                                }
                                                ))
                                            } else
                                                "pilih_state_startplay" == m.keyMenu ? (k.getInstance().setHoldInput(!0),
                                                k.context_type = "solo",
                                                k.getInstance().exitScreen((function() {
                                                    k.getInstance().setHoldInput(!1),
                                                    k.getInstance().setScreenState(k.SCREEN_STATE_GAMEPLAY)
                                                }
                                                ))) : "solo_mode_slash" == m.keyMenu ? (k.getInstance().setHoldInput(!0),
                                                k.getInstance().exitScreen((function() {
                                                    k.getInstance().setHoldInput(!1),
                                                    H.setFrom("homescreen", "", []),
                                                    H.setTitle("Solo Play"),
                                                    k.context_type = "solo",
                                                    k.getInstance().setScreenState(k.SCREEN_STATE_SELECT_MODE)
                                                }
                                                ))) : "result_move_to_homescreen" == m.keyMenu ? D.showInterstitialAds((function() {
                                                    k.getInstance().moveToHomescreen()
                                                }
                                                )) : "move_to_senseiswag" == m.keyMenu ? (k.getInstance().setHoldInput(!0),
                                                k.getInstance().exitScreen((function() {
                                                    k.getInstance().setHoldInput(!1),
                                                    k.getInstance().setScreenState(k.SCREEN_STATE_SENSEI_SWAG)
                                                }
                                                ))) : "move_to_setting" == m.keyMenu ? (k.getInstance().setHoldInput(!0),
                                                k.getInstance().exitScreen((function() {
                                                    k.getInstance().setHoldInput(!1),
                                                    k.getInstance().setScreenState(k.SCREEN_STATE_SETTING)
                                                }
                                                ))) : "select_sensei_swag" == m.keyMenu ? (W.Instance.selectCurrent(),
                                                t.showSplat(p, E, m)) : "try_purchase_sensei_swag" == m.keyMenu ? (W.Instance.tryPurchase(),
                                                t.showSplat(p, E, m)) : "move_to_language" == m.keyMenu ? (k.Instance.settingScreen.getComponent(M).play("settings_out"),
                                                k.Instance.settingScreen.getComponent(M).once(M.EventType.FINISHED, (function() {
                                                    k.getInstance().setScreenState(k.SCREEN_STATE_LANGUAGE)
                                                }
                                                ))) : "result_move_to_homescreen" == m.keyMenu && k.getInstance().setScreenState(k.SCREEN_STATE_HOMESCREEN)
                                        }
                                    } else if (u) {
                                        var re = i.getComponent(O);
                                        if (re.getSlashed())
                                            if (re.isBombType("gameover") && k.getInstance().gameData.g.push({
                                                a: "sb",
                                                t: k.getInstance().timerGameplay.toFixed(4),
                                                n: re.waveId
                                            }),
                                            4 == k.TUTORIAL_STATE) {
                                                k.getInstance().setHoldInput(!0),
                                                k.TUTORIAL_STATE = 5,
                                                G.getInstance().tryPauseAllFruit(),
                                                B.getInstance().stopBombBGM(),
                                                U.getInstance().holdButtonPause = !0,
                                                re.shakeBomb((function() {
                                                    var e = k.getInstance().mainCanvasOverlay.getChildByPath("container_tutorialDeflect");
                                                    e.active = !0;
                                                    var t = e.getComponent(M);
                                                    t.play("tutDeflect_in"),
                                                    t.on(M.EventType.FINISHED, (function() {
                                                        t.play("tutDeflect_idle")
                                                    }
                                                    ), this, !0)
                                                }
                                                ));
                                                var ce = a[e].y - a[e - 1].y
                                                  , pe = a[e].x - a[e - 1].x
                                                  , he = k.rad2deg(Math.atan2(ce, pe));
                                                z.onClaimRewardCallback = function() {
                                                    U.getInstance().holdButtonPause = !1,
                                                    k.getInstance().useDeflectPowerUp(),
                                                    Y.getInstance().play(Y.SFX_POWERUP_DEFLECT),
                                                    re.deflected(he);
                                                    var e = G.getInstance().getParticleBombDeflect();
                                                    e.setParent(G.getInstance().node),
                                                    e.active = !0,
                                                    e.setPosition(re.node.position),
                                                    e.setRotationFromEuler(0, 0, he + 270);
                                                    var t = e.getComponent(y);
                                                    t.startRotationZ.constant = k.deg2rad(he - 90),
                                                    t.velocityOvertimeModule.x.constant = 7 * Math.sin(k.deg2rad(he + 90)),
                                                    t.velocityOvertimeModule.y.constant = -7 * Math.cos(k.deg2rad(he + 90)),
                                                    t.play(),
                                                    e.getChildByName("particle_spark").getComponent(y).play()
                                                }
                                            } else if (k.getInstance().deflectCounter <= 0)
                                                k.gameMode == k.MODE_ARCADE && (A.getInstance().bombHitCounter += 1),
                                                re.isBombType("gameover") ? (B.getInstance().stopBombBGM(),
                                                re.animateExplode(),
                                                k.getInstance().dieFromBomb = !0,
                                                k.getInstance().setGameState(k.STATE_GAME_LOSE)) : re.isBombType("reduce_timer") && (k.getInstance().arcadeBombCount += 1,
                                                G.getInstance().destroyFruitInRadius(re.node.position, -1, !1),
                                                Y.getInstance().play(Y.SFX_BOMB_EXPLODE_ARCADE),
                                                re.animateExplodeTimer(),
                                                k.getInstance().showReduceScoreText(re.node.position),
                                                k.getInstance().updateScore(k.getInstance().score - 10),
                                                R.getInstance().isActive() && (R.getInstance().reset(),
                                                Y.getInstance().play(Y.SFX_BLITZ_DRUM_END)));
                                            else {
                                                Y.getInstance().play(Y.SFX_POWERUP_DEFLECT);
                                                var ge = a[e].y - a[e - 1].y
                                                  , de = a[e].x - a[e - 1].x
                                                  , ue = k.rad2deg(Math.atan2(ge, de));
                                                re.deflected(ue);
                                                var me = G.getInstance().getParticleBombDeflect();
                                                me.setParent(G.getInstance().node),
                                                me.active = !0,
                                                me.setPosition(re.node.position),
                                                me.setRotationFromEuler(0, 0, ue + 270);
                                                var Se = me.getComponent(y);
                                                Se.startRotationZ.constant = k.deg2rad(ue - 90),
                                                Se.velocityOvertimeModule.x.constant = 7 * Math.sin(k.deg2rad(ue + 90)),
                                                Se.velocityOvertimeModule.y.constant = -7 * Math.cos(k.deg2rad(ue + 90)),
                                                Se.play(),
                                                me.getChildByName("particle_spark").getComponent(y).play(),
                                                console.log("bomb deflect: " + ue),
                                                console.log("bomb deflect: " + Se.startRotationZ.constant + " " + Se.velocityOvertimeModule.x.constant + " " + Se.velocityOvertimeModule.y.constant),
                                                t.scheduleOnce((function() {
                                                    G.getInstance().putBombDeflect(me)
                                                }
                                                ), 1),
                                                k.getInstance().deflectCounter -= 1,
                                                k.getInstance().showDeflectText(re.node.position),
                                                k.getInstance().deflectCounter <= 0 && X.getInstance().showIconDeflect(!1)
                                            }
                                    }
                            }
                        }
                        ))
                    }, s = 1; s < a.length; s++)
                        o(s)
                }
                ,
                o.checkIntersects = function(e, t, n, a) {
                    if (k.getInstance().getScreenState() != k.SCREEN_STATE_GAMEPLAY || k.getInstance().getGameState() != k.STATE_GAME_LOSE) {
                        var i = new f(e.x - e.width / 2,e.y - e.height / 2)
                          , o = new f(e.x + e.width / 2,e.y + e.height / 2)
                          , s = new f(e.x - e.width / 2,e.y + e.height / 2)
                          , l = new f(e.x + e.width / 2,e.y - e.height / 2)
                          , r = E.lineLine(i, o, t, n)
                          , c = E.lineLine(s, l, t, n);
                        if (r || c) {
                            if (a)
                                return !0;
                            if (E.pointLineDistance(new f(e.x,e.y), t, n, !0) <= 1)
                                return !0
                        }
                        return !1
                    }
                }
                ,
                o.tryMoveTip = function(e) {
                    if (k.getInstance().getScreenState() != k.SCREEN_STATE_GAMEPLAY || k.getInstance().getGameState() != k.STATE_GAME_LOSE) {
                        var t = this.bladeTip.position.clone()
                          , n = e;
                        this.linePosition.length >= this.maxPosition && this.linePosition.pop();
                        var a = Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2));
                        if (this.trailDistance += a,
                        this.trailDistance >= .15) {
                            var i = 180 * Math.atan2(n.y - t.y, n.x - t.x) / Math.PI;
                            this.bladeTip.setRotationFromEuler(new g(this.bladeTip.rotation.x,this.bladeTip.rotation.y,i));
                            var o = e.clone();
                            this.trailDistance = 0,
                            this.linePosition.unshift(o),
                            this.pointTimer.unshift(0),
                            this.line.positions = this.linePosition,
                            this.line.node.active = !1,
                            this.line.node.active = !0
                        }
                        this.bladeTip.setPosition(e)
                    }
                }
                ,
                o.resetBladeData = function() {
                    if (this.spawnRateParticleData = [],
                    this.bladeTip.getChildByPath("Particle0")) {
                        this.spawnRateParticleData.push(this.bladeTip.getChildByPath("Particle0").getComponent(y).rateOverTime);
                        for (var e = this.bladeTip.getChildByPath("Particle0").getComponentsInChildren(y), t = 0; t < e.length; t++)
                            this.spawnRateParticleData.push(e[t].rateOverTime)
                    }
                    this.sfxBlades = this.bladeTip.getChildByPath("BladeTip").getComponent(x).bladeSFX,
                    this.sfxSlices = this.bladeTip.getChildByPath("BladeTip").getComponent(x).sliceSFX
                }
                ,
                o.touchStart = function(e) {
                    if (k.getInstance().holdInput)
                        return this.stopAllBladeSFX(),
                        void (this.distanceMove = 0);
                    if (k.getInstance().getScreenState() == k.SCREEN_STATE_GAMEPLAY && k.getInstance().getGameState() == k.STATE_GAME_LOSE)
                        return this.stopAllBladeSFX(),
                        void (this.distanceMove = 0);
                    11 == L.getInstance().bladeUsed && Y.getInstance().playLoopSFX(Y.SFX_BLADEFIRE_CRACKER_LOOP);
                    var t = e.getAllTouches();
                    if (-1 == this.currentTouchID)
                        e = t[0],
                        this.currentTouchID = e.getID();
                    else
                        for (var n = 0; n < t.length; n++)
                            if (t[n].getID() == this.currentTouchID) {
                                e = t[n];
                                break
                            }
                    if (this.touching = !0,
                    this.bladeTip.getChildByPath("BladeTip").active = !0,
                    this.bladeTip.getChildByPath("Particle0")) {
                        this.bladeTip.getChildByPath("Particle0").getComponent(y).rateOverTime = this.spawnRateParticleData[0];
                        for (var a = this.bladeTip.getChildByPath("Particle0").getComponentsInChildren(y), i = 0; i < a.length; i++)
                            a[i].rateOverTime = this.spawnRateParticleData[i + 1]
                    }
                    var o = new g(e.getLocation().x,e.getLocation().y,0)
                      , s = this.camera.screenToWorld(o);
                    this.input.x = s.x,
                    this.input.y = s.y;
                    var l = new g(new g(s.x,s.y,this.bladeTip.position.z));
                    this.tryMoveTip(l),
                    this.distanceMove = 0,
                    this.firstPosition = this.bladeTip.position.clone()
                }
                ,
                o.touchMove = function(e) {
                    if (k.getInstance().holdInput)
                        this.stopAllBladeSFX();
                    else if (k.getInstance().getScreenState() != k.SCREEN_STATE_GAMEPLAY || k.getInstance().getGameState() != k.STATE_GAME_LOSE)
                        if (this.touching) {
                            var t = e.getAllTouches();
                            if (-1 == this.currentTouchID)
                                e = t[0],
                                this.currentTouchID = e.getID();
                            else
                                for (var n = 0; n < t.length; n++)
                                    if (t[n].getID() == this.currentTouchID) {
                                        e = t[n];
                                        break
                                    }
                            var a = new g(e.getLocation().x,e.getLocation().y,0)
                              , i = this.camera.screenToWorld(a);
                            this.input.x = i.x,
                            this.input.y = i.y;
                            var o = new g(new g(i.x,i.y,this.bladeTip.position.z));
                            this.tryMoveTip(o),
                            this.distanceMove += g.distance(this.bladeTip.position, this.firstPosition),
                            this.firstPosition = this.bladeTip.position.clone(),
                            this.distanceMove >= 10 && (9 == L.getInstance().bladeUsed ? Y.getInstance().play(T(Y.SFX_HOLLY_SWIPE_1, Y.SFX_HOLLY_SWIPE_3 + 1)) : 10 == L.getInstance().bladeUsed ? Y.getInstance().play(T(Y.SFX_PARTY_SWIPE_1, Y.SFX_PARTY_SWIPE_4 + 1)) : 11 == L.getInstance().bladeUsed && Y.getInstance().play(T(Y.SFX_BLADEFIRE_CRACKER_SWIPE_1, Y.SFX_BLADEFIRE_CRACKER_SWIPE_5 + 1)),
                            this.distanceMove = 0)
                        } else
                            this.stopAllBladeSFX();
                    else
                        this.stopAllBladeSFX()
                }
                ,
                o.stopAllBladeSFX = function() {
                    11 == L.getInstance().bladeUsed && Y.getInstance().stopLoopSFX(Y.SFX_BLADEFIRE_CRACKER_LOOP)
                }
                ,
                o.touchEnd = function(e) {
                    this.currentTouchID = -1,
                    this.trailDistance = 0,
                    this.touching = !1,
                    this.stopAllBladeSFX(),
                    this.distanceMove = 0
                }
                ,
                o.forceTouchEnd = function() {
                    this.stopAllBladeSFX(),
                    this.distanceMove = 0,
                    this.currentTouchID = -1,
                    this.trailDistance = 0,
                    this.touching = !1
                }
                ,
                o.showSplat = function(e, t, n) {
                    var a = this
                      , i = this.getSplash();
                    i.setParent(d("BladeCanvas"));
                    var o = new g(0,0,0);
                    this.camera.worldToScreen(new g(e.x,e.y,0), o),
                    o.x /= C.getScaleX(),
                    o.y /= C.getScaleY(),
                    i.setRotationFromEuler(0, 0, t + 90),
                    i.getComponentInChildren(_).color = new v(n.getComponent(N).getFruitDetail().splashColor),
                    i.setWorldPosition(o),
                    i.active = !0,
                    i.getComponent(P).play("fruitSplash_spriteAnim"),
                    i.getComponent(P).once(M.EventType.FINISHED, (function() {
                        i.getComponent(P).stop(),
                        i.active = !1,
                        a.poolSplash.push(i)
                    }
                    ));
                    for (var s = n.getComponent(N).getFruitDetail(), l = o, r = !1, c = T(s.minSplash, s.maxSplash + 1), p = function(e) {
                        var i = a.getSplat();
                        i.setParent(k.Instance.senseiSwagScreen.getChildByPath("BG"));
                        var o = l.clone();
                        o.x += 10 * T(-10, 10),
                        o.y += 10 * T(-10, 10);
                        var c = T(18, 25) / 10;
                        "splash2" == s.splashTex ? (i.getComponentInChildren(_).spriteFrame = a.splatSpriteFrame[T(3, 4)],
                        i.scale = new g(.7,.7,1),
                        i.setRotationFromEuler(0, 0, 0)) : T(0, 100) % 2 == 0 || r ? (i.getComponentInChildren(_).spriteFrame = a.splatSpriteFrame[T(1, 2)],
                        i.scale = new g(.7,.7,1),
                        i.setRotationFromEuler(0, 0, 0),
                        b(i.getChildByPath("assets")).delay(c).by(1, {
                            scale: new g(0,.12,0)
                        }).start()) : (r = !0,
                        i.getComponentInChildren(_).spriteFrame = a.splatSpriteFrame[T(5, 6)],
                        i.scale = new g(-.7,.7,1),
                        (o = l.clone()).x -= 200 * Math.cos(t * Math.PI / 180),
                        o.y -= 100 * Math.sin(t * Math.PI / 180),
                        i.setRotationFromEuler(0, 0, t)),
                        i.getChildByPath("assets").scale = new g(1,1,1),
                        i.getComponentInChildren(_).color = new v(n.getComponent(N).getFruitDetail().splashColor),
                        i.setWorldPosition(o),
                        i.active = !0,
                        i.getComponent(_).color = new v(255,255,255,255),
                        b(i).delay(c).by(1, {
                            position: new g(0,2 * T(-10, -5),0)
                        }).start(),
                        b(i.getComponent(_)).delay(c).to(1, {
                            color: new v(255,255,255,0)
                        }).call((function() {
                            i.active = !1,
                            a.poolSplat.push(i)
                        }
                        )).start()
                    }, h = 0; h < c; h++)
                        p()
                }
                ,
                t
            }(w)).Instance = null,
            re = t((le = ye).prototype, "bladeTip", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            ce = t(le.prototype, "camera", [Q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            pe = t(le.prototype, "line", [J], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            he = t(le.prototype, "trail", [$], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            ge = t(le.prototype, "trailGraphics", [ee], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            de = t(le.prototype, "prefabSplash", [te], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            ue = t(le.prototype, "prefabSliceDiamond", [ne], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            me = t(le.prototype, "prefabSplat", [ae], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Se = t(le.prototype, "prefabSliceDiamondCritical", [ie], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Ie = t(le.prototype, "splatSpriteFrame", [oe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            se = le)) || se));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/CustomLabelShadow.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, r, o, n, a, i, u, l, c, s;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            o = e.initializerDefineProperty,
            n = e.assertThisInitialized
        }
        , function(e) {
            a = e.cclegacy,
            i = e._decorator,
            u = e.Color,
            l = e.Vec2,
            c = e.Label,
            s = e.Component
        }
        ],
        execute: function() {
            var p, f, b, d, y, h, m, w;
            a._RF.push({}, "96c41znOatAZbf6QFu0yEI3", "CustomLabelShadow", void 0);
            var g = i.ccclass
              , v = i.property;
            e("CustomLabelShadow", (p = g("CustomLabelShadow"),
            f = v({
                type: u
            }),
            b = v({
                type: l
            }),
            p((h = t((y = function(e) {
                function t() {
                    for (var t, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
                        a[i] = arguments[i];
                    return t = e.call.apply(e, [this].concat(a)) || this,
                    o(t, "color", h, n(t)),
                    o(t, "offset", m, n(t)),
                    o(t, "blur", w, n(t)),
                    t
                }
                r(t, e);
                var a = t.prototype;
                return a.start = function() {}
                ,
                a._updateRenderData = function() {
                    var e = this.node.getComponent(c);
                    e && e.updateRenderData(!0)
                }
                ,
                t
            }(s)).prototype, "color", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new u(0,0,0,255)
                }
            }),
            m = t(y.prototype, "offset", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return new l(2,2)
                }
            }),
            w = t(y.prototype, "blur", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 2
                }
            }),
            d = y)) || d));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Data.ts", ["cc", "./GameController.ts", "./SFXManager.ts", "./BGMManager.ts", "./MissionManager.ts"], (function(e) {
    "use strict";
    var t, a, n, o, i, r, s, l, c, d, u;
    return {
        setters: [function(e) {
            t = e.cclegacy,
            a = e._decorator,
            n = e.view,
            o = e.find,
            i = e.Vec3,
            r = e.Camera,
            s = e.UITransform
        }
        , function(e) {
            l = e.GameController
        }
        , function(e) {
            c = e.SFXManager
        }
        , function(e) {
            d = e.BGMManager
        }
        , function(e) {
            u = e.MissionManager
        }
        ],
        execute: function() {
            var p, h;
            t._RF.push({}, "17c31mgGDFCOo91QCcLPrZF", "Data", void 0);
            var g = a.ccclass;
            a.property,
            e("Data", g("Data")(((h = function() {
                function e() {
                    this.lastPlayedWithFriends = 0,
                    this.totalExp = 0,
                    this.starFruit = l.RIG_STARFRUIT ? 4e6 : 0,
                    this.dataGlobal = [],
                    this.weeklyEndsIn = 0,
                    this.weeklyTotalUser = 0,
                    this.inventoryPUDeflect = 0,
                    this.inventoryPUBerryBlast = 0,
                    this.inventoryPUPeachyTime = 0,
                    this.needGenerateNewMission = !1,
                    this.bladeUsed = 0,
                    this.bgUsed = 0,
                    this.unlockedBlade = [!0, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1],
                    this.unlockedBG = [!0, !1, !1, !1, !1]
                }
                e.getInstance = function() {
                    return null == e.Instance && (e.Instance = new e),
                    e.Instance
                }
                ;
                var t = e.prototype;
                return t.getBestScore = function() {
                    return "" + l.getInstance().getBestScore()
                }
                ,
                t.convertScoreToStarFruit = function(e) {
                    return Math.max(0, Math.round(2.25 * this.logBase(1 * e, 1.1)))
                }
                ,
                t.convert2DPosTo3D = function(e) {
                    var t = e.clone();
                    t.x = t.x * n.getScaleX(),
                    t.y = t.y * n.getScaleY();
                    var a = o("Main Camera")
                      , s = new i(0,0,0);
                    return a.getComponent(r).screenToWorld(t, s),
                    s
                }
                ,
                t.convert3DPosTo2D = function(e, t) {
                    var a = e.clone();
                    a.x = a.x * n.getScaleX(),
                    a.y = a.y * n.getScaleY();
                    o("Main Camera");
                    var r = new i(0,0,0);
                    return t.getComponent(s).convertToNodeSpaceAR(a, r),
                    r
                }
                ,
                t.logBase = function(e, t) {
                    return Math.log(e) / Math.log(t)
                }
                ,
                t.doLoad = function() {
                  var t = null;
                  let saved = localStorage.getItem("FruitNinjaSave");
              
                  if (saved && saved !== "") {
                      // decode it using the same protect function
                      t = JSON.parse((saved));
                  }
              
                  console.log("loaded data: " + JSON.stringify(t));
              
                  if (t == null) t = {};
              
                  l.haveCreatedShortcut = null != t.have_created_shortcut && t.have_created_shortcut;
                  null != t.sfx_muted && (c.isMuted = t.sfx_muted);
                  null != t.bgm_muted && (d.isMuted = t.bgm_muted);
                  l.TUTORIAL_STATE = null == t.tutorial_state ? 1 : t.tutorial_state;
                  l.FORCE_TUTORIAL && (l.TUTORIAL_STATE = 1);
                  null != t.solo_best_score && (l.bestScore = t.solo_best_score);
                  null != t.star_fruit && (e.getInstance().starFruit = t.star_fruit);
                  l.RIG_STARFRUIT && (e.getInstance().starFruit = 4e6);
                  null != t.inventory_pu_deflect && (e.getInstance().inventoryPUDeflect = t.inventory_pu_deflect);
                  null != t.inventory_pu_berryblast && (e.getInstance().inventoryPUBerryBlast = t.inventory_pu_berryblast);
                  null != t.inventory_pu_peachytime && (e.getInstance().inventoryPUPeachyTime = t.inventory_pu_peachytime);
                  null != t.total_exp ? e.getInstance().totalExp = t.total_exp : e.getInstance().totalExp = 0;
                  d.isMuted = !window.fast.gameAudio;
                  c.isMuted = !window.fast.gameAudio;
              
                  if (null != t.last_played) {
                      var a = new Date(t.last_played);
                      a.setHours(0);
                      a.setMinutes(0);
                      a.setSeconds(0);
                      a.setMilliseconds(0);
                      var n = new Date;
                      n.setHours(0);
                      n.setMinutes(0);
                      n.setSeconds(0);
                      n.setMilliseconds(0);
                      this.needGenerateNewMission = a < n;
                      l.last_played = (new Date).getTime();
                  } else {
                      l.last_played = (new Date).getTime();
                  }
              
                  if (null != t.list_mission
                      ? this.needGenerateNewMission
                          ? u.getInstance().generateMission()
                          : u.getInstance().loadMission(t.list_mission)
                      : u.getInstance().generateMission(),
                      l.RIG_ALWAYS_GENERATE_NEW_MISSION && u.getInstance().generateMission(),
                      1 == l.TUTORIAL_STATE
                  ) {
                      e.getInstance().bladeUsed = 0;
                      e.getInstance().bgUsed = 0;
                  } else {
                      null != t.blade_used && (e.getInstance().bladeUsed = t.blade_used);
                      null != t.bg_used && (e.getInstance().bgUsed = t.bg_used);
                  }
              
                  if (null != t.blade_unlocked) {
                      for (var o = 0; o < t.blade_unlocked.length; o++) {
                          o < e.getInstance().unlockedBlade.length
                              ? e.getInstance().unlockedBlade[o] = t.blade_unlocked[o]
                              : e.getInstance().unlockedBlade.push(t.blade_unlocked[o]);
                      }
                  }
              
                  if (null != t.bg_unlocked) {
                      for (var i = 0; i < t.bg_unlocked.length; i++) {
                          i < e.getInstance().unlockedBG.length
                              ? e.getInstance().unlockedBG[i] = t.bg_unlocked[i]
                              : e.getInstance().unlockedBG.push(t.bg_unlocked[i]);
                      }
                  }
              }
                ,
                e
            }()).Instance = void 0,
            h.DATA_FRUIT_FACT = [{
                ID: "FF001",
                icon: 0,
                text: "There are approximately 10,000 varieties of apples grown around the world."
            }, {
                ID: "FF002",
                icon: 0,
                text: "25% of an apple's volume is air. That's why they float!"
            }, {
                ID: "FF003",
                icon: 0,
                text: "Over 60 million tons of apples are grown worldwide annually."
            }, {
                ID: "FF004",
                icon: 1,
                text: "Bananas are one of the few fruits that ripen best off the plant."
            }, {
                ID: "FF005",
                icon: 1,
                text: "Bananas have no fat, cholesterol or sodium."
            }, {
                ID: "FF006",
                icon: 1,
                text: "Reindeer like to eat bananas."
            }, {
                ID: "FF007",
                icon: 2,
                text: "Fresh cherries become glazed cherries by replacing their water content with sugar."
            }, {
                ID: "FF008",
                icon: 2,
                text: "Apples, pears, cherries and strawberries are all members of the rose family."
            }, {
                ID: "FF009",
                icon: 3,
                text: "The coconut palm is sometimes called the 'tree of life'."
            }, {
                ID: "FF010",
                icon: 3,
                text: "There are more than 20 billion coconuts harvested each year!"
            }, {
                ID: "FF011",
                icon: 3,
                text: "The coconut is wrapped inside a hard brown shell called a husk."
            }, {
                ID: "FF012",
                icon: 4,
                text: "Dragon fruit can also be made into wine, fruit juice or jam."
            }, {
                ID: "FF013",
                icon: 4,
                text: "The dragon fruit plant only blooms at night."
            }, {
                ID: "FF014",
                icon: 4,
                text: "The dragon fruit is the leading fruit export of Vietnam."
            }, {
                ID: "FF015",
                icon: 5,
                text: "If you warm a lemon before squeezing, it will yield much more juice!"
            }, {
                ID: "FF016",
                icon: 5,
                text: "Lemons contain more sugar than strawberries."
            }, {
                ID: "FF017",
                icon: 5,
                text: "Lemon and salt can be used to treat rust spots, and to clean copper pots."
            }, {
                ID: "FF018",
                icon: 6,
                text: "Limes were fed to british sailors to prevent scurvy."
            }, {
                ID: "FF019",
                icon: 6,
                text: "Limes are free of fat, saturated fat, sodium and cholesterol."
            }, {
                ID: "FF020",
                icon: 6,
                text: "Like most citrus, limes do not freeze well."
            }, {
                ID: "FF021",
                icon: 7,
                text: "Mangoes have as much vitamin c as oranges."
            }, {
                ID: "FF022",
                icon: 7,
                text: "The mango tree grows only in sub-tropical climates."
            }, {
                ID: "FF023",
                icon: 7,
                text: "Chinese medical practitioners use mango to treat dysentery."
            }, {
                ID: "FF024",
                icon: 8,
                text: "Brazil is the largest producer of oranges in the world!"
            }, {
                ID: "FF025",
                icon: 8,
                text: "Orange trees were first grown in China."
            }, {
                ID: "FF026",
                icon: 8,
                text: "One orange supplies a full days vitamin c requirement."
            }, {
                ID: "FF027",
                icon: 9,
                text: "Passion fruit is sweetest when slightly wrinkled."
            }, {
                ID: "FF028",
                icon: 9,
                text: "Passion fruits were first grown in Brazil."
            }, {
                ID: "FF029",
                icon: 9,
                text: "Passion fruit is great for people with high blood pressure!"
            }, {
                ID: "FF030",
                icon: 10,
                text: "Peaches were once known as persian apples."
            }, {
                ID: "FF031",
                icon: 10,
                text: "In China, the peach is a symbol of longevity and good luck."
            }, {
                ID: "FF032",
                icon: 10,
                text: "The peach is a member of the rose family."
            }, {
                ID: "FF033",
                icon: 11,
                text: "Pear wood is hard and can be used to make furniture."
            }, {
                ID: "FF034",
                icon: 11,
                text: "Pears cause the fewest allergic reactions of all fruits."
            }, {
                ID: "FF035",
                icon: 11,
                text: "Most of the vitamin c in pears is found in the skin of the fruit."
            }, {
                ID: "FF036",
                icon: 12,
                text: "Unripe pineapples are toxic."
            }, {
                ID: "FF037",
                icon: 12,
                text: "Pineapples can weigh up to 20 pounds."
            }, {
                ID: "FF038",
                icon: 12,
                text: "The pineapple is originally native to brazil and paraguay."
            }, {
                ID: "FF039",
                icon: 13,
                text: "A plum's skin is well known for having a laxative effect."
            }, {
                ID: "FF040",
                icon: 13,
                text: "Plums are grown on every continent on earth (except antarctica)."
            }, {
                ID: "FF041",
                icon: 13,
                text: "Eating plums helps increase the absorption of iron into the body."
            }, {
                ID: "FF042",
                icon: 14,
                text: "Star fruits average only 30 calories! Eat up!"
            }, {
                ID: "FF043",
                icon: 14,
                text: "Star fruits are an excellent source of fiber!"
            }, {
                ID: "FF044",
                icon: 15,
                text: "The average strawberry has around 200 seeds."
            }, {
                ID: "FF045",
                icon: 15,
                text: "Strawberries were cultivated in ancient rome!"
            }, {
                ID: "FF046",
                icon: 16,
                text: "Watermelons are 92% water!"
            }, {
                ID: "FF047",
                icon: 16,
                text: "The largest watermelon ever grown was 350.5 pounds, or 159 kg!"
            }, {
                ID: "FF048",
                icon: 17,
                text: "Kiwi fruit contains actinidin which can be used to tenderize meat!"
            }, {
                ID: "FF049",
                icon: 17,
                text: "There are over 400 varieties of kiwi fruit in China."
            }, {
                ID: "FF050",
                icon: 17,
                text: "Kiwi fruit has almost twice the vitamin c of an orange."
            }],
            h.DATA_COSTUME_BLADE = [{
                id: "BL001",
                icon: "Blade/BladeIconBasic/spriteFrame",
                name: "Basic Blade",
                prefab: "Blade/prefabs/TipBasicBlade",
                description: "The original, classic silver blade.",
                how_to_get: {
                    type: "default"
                }
            }, {
                id: "BL002",
                icon: "Blade/BladeIconShinyRed/spriteFrame",
                name: "Shiny Red",
                description: "A shiny, red blade.",
                prefab: "Blade/prefabs/TipShinyRed",
                how_to_get: {
                    type: "starfruit",
                    value: 500
                }
            }, {
                id: "BL003",
                icon: "Blade/BladeIconViking/spriteFrame",
                name: "Viking Blade",
                description: "A mighty viking's blade, a hefty weapon for satisfying slicing.",
                prefab: "Blade/prefabs/TipVikingBlade",
                how_to_get: {
                    type: "starfruit",
                    value: 800
                }
            }, {
                id: "BL004",
                icon: "Blade/BladeIconPiano/spriteFrame",
                name: "Piano Blade",
                prefab: "Blade/prefabs/TipPianoBlade",
                description: "Get in the groove with this harmonious blade!",
                how_to_get: {
                    type: "starfruit",
                    value: 1e3
                }
            }, {
                id: "BL005",
                icon: "Blade/BladeIconWater/spriteFrame",
                name: "Water Blade",
                prefab: "Blade/prefabs/TipWaterBlade",
                description: "Burst fruit open with this powerful water blade.",
                how_to_get: {
                    type: "starfruit",
                    value: 2500
                }
            }, {
                id: "BL006",
                icon: "Blade/BladeIconBamboo/spriteFrame",
                name: "Bamboo Shoot",
                prefab: "Blade/prefabs/TipBambooBlade",
                description: "Made from the forest that Sensei grew up in!",
                how_to_get: {
                    type: "starfruit",
                    value: 3e3
                }
            }, {
                id: "BL007",
                icon: "Blade/BladeIconBondedRoses/spriteFrame",
                name: "Bonded Roses Blade",
                prefab: "Blade/prefabs/TipBondedRose",
                description: "Be a thorn in a side to fruit everywhere!",
                how_to_get: {
                    type: "starfruit",
                    value: 5e3
                }
            }, {
                id: "BL008",
                icon: "Blade/BladeIconCandyCane/spriteFrame",
                name: "Candy Cane Blade",
                prefab: "Blade/prefabs/TipCandyCaneBlade",
                description: "This cane isn't just for jolly old men.",
                how_to_get: {
                    type: "starfruit",
                    value: 7500
                }
            }, {
                id: "BL009",
                icon: "Blade/BladeIconRainbow/spriteFrame",
                name: "Rainbow Blade",
                prefab: "Blade/prefabs/TipRainbowBlade",
                description: "It's so beautiful.",
                how_to_get: {
                    type: "starfruit",
                    value: 1e4
                }
            }, {
                id: "BL010",
                icon: "Blade/BladeIconHolly/spriteFrame",
                name: "Holly Blade",
                prefab: "Blade/prefabs/TipHollyBlade",
                description: "Deck the Dojo with boughs of Holly.",
                how_to_get: {
                    type: "starfruit",
                    value: 12500
                }
            }, {
                id: "BL011",
                icon: "Blade/BladeIconPartyTime/spriteFrame",
                name: "Party Time",
                prefab: "Blade/prefabs/TipPartyTime",
                description: "It's not 1999, but we can party anyway.",
                how_to_get: {
                    type: "starfruit",
                    value: 12500
                }
            }, {
                id: "BL012",
                icon: "Blade/BladeIconFirecracker/spriteFrame",
                name: "Firecracker Blade",
                prefab: "Blade/prefabs/TipFirecrackerBlade",
                description: "Be careful with this blade. It goes off with a bang!",
                how_to_get: {
                    type: "starfruit",
                    value: 12500
                }
            }],
            h.DATA_COSTUME_BACKGROUND = [{
                id: "DJ001",
                icon: "background/DojoIconBasic/spriteFrame",
                background: "background/Dojo_Basic/spriteFrame",
                name: "Basic Dojo",
                description: "A humble dojo but Sensei started here.",
                how_to_get: {
                    type: "default"
                }
            }, {
                id: "DJ002",
                icon: "background/DojoIconGreatWave/spriteFrame",
                background: "background/Dojo_GreatWave/spriteFrame",
                name: "Great Wave",
                description: "The famous great wave. A perfect backdrop for slicing fruit!",
                how_to_get: {
                    type: "starfruit",
                    value: 2500
                }
            }, {
                id: "DJ003",
                icon: "background/DojoIconYinYang/spriteFrame",
                background: "background/Dojo_YinYang/spriteFrame",
                name: "Yin Yang",
                description: "Balance your body, soul and ninja spirit with yin yang!",
                how_to_get: {
                    type: "starfruit",
                    value: 5e3
                }
            }, {
                id: "DJ004",
                icon: "background/DojoIconCherryBlossom/spriteFrame",
                background: "background/Dojo_CherryBlossom/spriteFrame",
                name: "Cherry Blossom",
                description: "Let the flower viewing festival begin!",
                how_to_get: {
                    type: "starfruit",
                    value: 7500
                }
            }, {
                id: "DJ005",
                icon: "background/DojoIconCloudySkies/spriteFrame",
                background: "background/Dojo_CloudySkies/spriteFrame",
                name: "Cloudy Skies",
                description: "Get some fresh air.",
                how_to_get: {
                    type: "starfruit",
                    value: 1e4
                }
            }],
            p = h)) || p);
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/FollowTarget.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, o, i, r, l, n, a, u, f;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            o = e.inheritsLoose,
            i = e.initializerDefineProperty,
            r = e.assertThisInitialized
        }
        , function(e) {
            l = e.cclegacy,
            n = e._decorator,
            a = e.Node,
            u = e.Vec3,
            f = e.Component
        }
        ],
        execute: function() {
            var s, p, c, b, w, y, g, h, m, z, d, F, v, T, x, X, Y;
            l._RF.push({}, "a9b30jub6lG24pxvNe9a7xc", "FollowTarget", void 0);
            var Z = n.ccclass
              , N = n.property;
            e("FollowTarget", (s = Z("FollowTarget"),
            p = N({
                type: Boolean
            }),
            c = N({
                type: Boolean
            }),
            b = N({
                type: Boolean
            }),
            w = N({
                type: Number
            }),
            y = N({
                type: Number
            }),
            g = N({
                type: Number
            }),
            h = N({
                type: a
            }),
            s((d = t((z = function(e) {
                function t() {
                    for (var t, o = arguments.length, l = new Array(o), n = 0; n < o; n++)
                        l[n] = arguments[n];
                    return t = e.call.apply(e, [this].concat(l)) || this,
                    i(t, "followX", d, r(t)),
                    i(t, "followY", F, r(t)),
                    i(t, "followZ", v, r(t)),
                    i(t, "offsetX", T, r(t)),
                    i(t, "offsetY", x, r(t)),
                    i(t, "offsetZ", X, r(t)),
                    i(t, "targetToFollow", Y, r(t)),
                    t
                }
                o(t, e);
                var l = t.prototype;
                return l.start = function() {}
                ,
                l.update = function(e) {
                    if (null != this.targetToFollow && null != this.targetToFollow.position) {
                        var t = this.targetToFollow.position.clone();
                        t.x += this.offsetX,
                        t.y += this.offsetY,
                        t.z += this.offsetZ;
                        var o = this.followX ? t.x : this.node.position.x
                          , i = this.followY ? t.y : this.node.position.y
                          , r = this.followZ ? t.z : this.node.position.z;
                        this.node.setPosition(new u(o,i,r))
                    }
                }
                ,
                t
            }(f)).prototype, "followX", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }),
            F = t(z.prototype, "followY", [c], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }),
            v = t(z.prototype, "followZ", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }),
            T = t(z.prototype, "offsetX", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            x = t(z.prototype, "offsetY", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            X = t(z.prototype, "offsetZ", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            Y = t(z.prototype, "targetToFollow", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            m = z)) || m));
            l._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Fruit.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ArcadeBonusBoardController.ts", "./BlitzManager.ts", "./ControllerBlade.ts", "./Data.ts", "./FruitManager.ts", "./FruitPhysics.ts", "./GameController.ts", "./HalfFruit.ts", "./SFXManager.ts", "./ShakeNode.ts"], (function(e) {
    "use strict";
    var t, n, a, i, s, o, l, r, h, c, g, p, u, d, m, y, C, I, f, P, _, S, T, v, A, B, E, F, L, w, M;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            n = e.inheritsLoose,
            a = e.initializerDefineProperty,
            i = e.assertThisInitialized,
            s = e.createClass
        }
        , function(e) {
            o = e.cclegacy,
            l = e._decorator,
            r = e.RigidBody,
            h = e.Vec3,
            c = e.randomRangeInt,
            g = e.Camera,
            p = e.Animation,
            u = e.tween,
            d = e.Quat,
            m = e.ParticleSystem,
            y = e.director,
            C = e.Label,
            I = e.view,
            f = e.UITransform,
            P = e.easing,
            _ = e.Component
        }
        , function(e) {
            S = e.ArcadeBonusBoardController
        }
        , function(e) {
            T = e.BlitzManager
        }
        , function(e) {
            v = e.ControllerBlade
        }
        , function(e) {
            A = e.Data
        }
        , function(e) {
            B = e.FruitManager
        }
        , function(e) {
            E = e.FruitPhysics
        }
        , function(e) {
            F = e.GameController
        }
        , function(e) {
            L = e.HalfFruit
        }
        , function(e) {
            w = e.SFXManager
        }
        , function(e) {
            M = e.ShakeNode
        }
        ],
        execute: function() {
            var R, b, V, D, x, O, H, X, N, z;
            o._RF.push({}, "531d0ROmLNAd7d9J2jXBkD6", "Fruit", void 0);
            var G = l.ccclass
              , U = l.property;
            e("Fruit", (R = G("Fruit"),
            b = U({
                type: String,
                displayName: "Key menu"
            }),
            V = U({
                type: String,
                displayName: "Fruit name"
            }),
            D = U({
                type: Number,
                displayName: "Collider radius"
            }),
            R(((z = function(e) {
                function t() {
                    for (var t, n = arguments.length, s = new Array(n), o = 0; o < n; o++)
                        s[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(s)) || this,
                    a(t, "keyMenu", H, i(t)),
                    a(t, "fruitName", X, i(t)),
                    a(t, "colliderRadius", N, i(t)),
                    t.jiblet = [],
                    t.pomegranatePieces = [],
                    t.particleBurst = null,
                    t.vRotation = 0,
                    t.timerSlicing = 0,
                    t.delaySlash = 0,
                    t.state = -1,
                    t.counter = 0,
                    t.lastLinearVelocity = null,
                    t.lastAngularVelocity = null,
                    t.lastHalfLinearVelocity = null,
                    t.lastHalfAngularVelocity = null,
                    t.waveId = 0,
                    t.slashed = !1,
                    t.half1 = null,
                    t.half2 = null,
                    t.isCritical = !1,
                    t.paused = !1,
                    t.fruitIndex = void 0,
                    t._particleShadow = null,
                    t.tempPosTargetCam = void 0,
                    t.holdMe = void 0,
                    t
                }
                n(t, e);
                var o = t.prototype;
                return o.start = function() {
                    if (this.fruitIndex = B.getInstance().getFruitIndexFromName(this.fruitName),
                    "" == this.keyMenu)
                        for (var e = 0; e < B.fruitList.length; e++) {
                            var t = B.fruitList[e];
                            t.id == this.node.name && this.node.setScale(3 * t.scale, 3 * t.scale, 3 * t.scale)
                        }
                    this.getComponent(r).applyTorque(new h(c(-100, 100),c(-100, 100),c(-100, 100))),
                    this.getComponent(r).angularDamping = 0
                }
                ,
                o.getFruitDetail = function() {
                    return B.fruitList[this.fruitIndex]
                }
                ,
                o.onLoad = function() {
                    if (this.isPomegranate()) {
                        t.POMEGRANATE_ACTIVE = !0,
                        this.delaySlash = 0,
                        this.counter = 0,
                        this.state = t.STATE_SHOW,
                        "" == this.fruitName && (this.fruitName = this.node.name);
                        for (var e = 1; e <= 8; e++)
                            this.jiblet.push(this.node.getChildByPath("pomegranate_jiblet_" + e)),
                            this.pomegranatePieces.push(this.node.getChildByPath("pomegranate_p_piece_" + e));
                        this.particleBurst = this.node.getChildByPath("particle_juicePomeBurst"),
                        console.log("fruit onload")
                    } else
                        this.isBerryBlast() && (t.BERRYBLAST_ACTIVE = !0),
                        "" == this.fruitName && (this.fruitName = this.node.name),
                        this.half1 = this.node.getChildByName(this.fruitName + "Half1"),
                        this.half2 = this.node.getChildByName(this.fruitName + "Half2"),
                        console.log("fruit onload")
                }
                ,
                o.onDisable = function() {
                    (this.isBananaDouble() || this.isBananaFreeze() || this.isBananaFrenzy()) && (B.getInstance().specialBananaOnScreen = ""),
                    this.isPomegranate() ? (w.getInstance().stopLoopSFX(w.SFX_POME_SPARKLE__LP),
                    t.POMEGRANATE_ACTIVE = !1,
                    B.getInstance().nextScoreSpawnPomegranate = F.getInstance().score + c(50, 151)) : this.isBerryBlast() ? (t.BERRYBLAST_ACTIVE = !1,
                    w.getInstance().stopLoopSFX(w.SFX_STRAWBERRY_LOOP)) : this.isPeachyTime() && w.getInstance().stopLoopSFX(w.SFX_PEACH_LOOP)
                }
                ,
                o.forceBurst = function(e) {
                    this.slashed = !1,
                    this.timerSlicing = 0,
                    this.delaySlash = 0;
                    var n = B.getInstance().getTextPomegranateSlice()
                      , a = B.getInstance().getTextPomegranateScore();
                    n.active = !1,
                    a.active = !1,
                    t.CAMERA_ZOOMED = !1,
                    B.getInstance().trySlowAllFruit(1);
                    F.getInstance().canvasBlade.getChildByPath("Camera");
                    var i = F.getInstance().mainCanvas2.getChildByPath("Camera")
                      , s = F.getInstance().canvasForGameplayText.getChildByPath("Camera")
                      , o = F.getInstance().canvasForTextBehind3D.getChildByPath("Camera")
                      , l = F.getInstance().camera;
                    l.setPosition(new h(0,0,10)),
                    l.setRotationFromEuler(new h(0,0,0)),
                    l.getComponent(g).orthoHeight = 10,
                    s.setPosition(new h(0,0,1e3)),
                    s.setRotationFromEuler(new h(0,0,0)),
                    o.setPosition(new h(0,0,1e3)),
                    o.setRotationFromEuler(new h(0,0,0)),
                    i.setPosition(new h(0,0,1e3)),
                    i.setRotationFromEuler(new h(0,0,0)),
                    i.getComponent(g).orthoHeight = 384,
                    F.IMMUNE = !1,
                    B.PAUSE_SPAWNING = !1,
                    B.HOLD_ALL_HALF_SCHEDULER = !1,
                    E.PomegranateDtMultiplier = 1,
                    this.burst(e);
                    for (var r = B.getInstance().activePomegranateRay.length - 1; r >= 0; r--) {
                        var c = B.getInstance().activePomegranateRay.splice(r, 1)[0];
                        c.active = !1,
                        B.getInstance().poolPomegranateRay.push(c)
                    }
                }
                ,
                o.burst = function(e) {
                    var t = this;
                    F.getInstance().mainCanvasOverlay.getChildByPath("flash_pomegranate").getComponent(p).play("pomegranate_background_out"),
                    B.getInstance().destroyFruitInRadius(this.node.position, -1),
                    w.getInstance().play(w.SFX_POME_BURST),
                    w.getInstance().play(w.SFX_POME_ZOOM_OUT);
                    var n = new h(1e-4,0,0);
                    u(n).to(1, {
                        x: 1
                    }, {
                        onUpdate: function() {
                            B.getInstance().trySlowAllFruit(n.x)
                        }
                    }).start(),
                    this.slashed = !0;
                    var a = new h(0,0,0);
                    a.x = -90,
                    a.y = 0,
                    a.z = e;
                    var i = d.IDENTITY.clone();
                    d.fromEuler(i, -90, 0, e);
                    var s = 12 * Math.sin(e * Math.PI / -180)
                      , o = 12 * Math.cos(e * Math.PI / -180);
                    this.particleBurst.active = !0,
                    this.particleBurst.setParent(this.node.parent),
                    this.particleBurst.setPosition(this.node.position);
                    for (var l = 0; l < this.jiblet.length; l++)
                        this.jiblet[l].getChildByPath("particle_pomeGibTrail").active = !1;
                    F.getInstance().scheduleOnce((function() {
                        for (var e = 0; e < t.jiblet.length; e++)
                            t.jiblet[e].getChildByPath("particle_pomeGibTrail").active = !0
                    }
                    ), 1.5);
                    for (var c = 0; c < this.pomegranatePieces.length; c++)
                        this.jiblet[c].active = !0,
                        this.jiblet[c].setParent(this.node.parent),
                        this.jiblet[c].setPosition(this.node.position),
                        this.jiblet[c].setScale(this.node.scale),
                        this.jiblet[c].setWorldRotation(this.node.worldRotation),
                        this.pomegranatePieces[c].active = !0,
                        this.pomegranatePieces[c].setParent(this.node.parent),
                        this.pomegranatePieces[c].setPosition(this.node.position),
                        this.pomegranatePieces[c].setScale(this.node.scale),
                        this.pomegranatePieces[c].setWorldRotation(this.node.worldRotation),
                        s = 12 * Math.sin(F.deg2rad(e + 45 * (c + 1))),
                        o = 12 * Math.cos(F.deg2rad(e + 45 * (c + 1))),
                        this.pomegranatePieces[c].getComponent(E).setVelocity(new h(s,o,0)),
                        this.pomegranatePieces[c].getComponent(E).acceleration = 0,
                        this.jiblet[c].getComponent(E).setVelocity(new h(s,o,0)),
                        this.jiblet[c].getComponent(E).acceleration = 0;
                    this.getComponent(r).setLinearVelocity(new h(0,0,0)),
                    this.node.active = !1,
                    null != this.particleShadow && this.particleShadow.getComponent(m).stop()
                }
                ,
                o.isBananaDouble = function() {
                    return this.node.name.includes("BananaSP_double")
                }
                ,
                o.isBananaFreeze = function() {
                    return this.node.name.includes("BananaSP_freeze")
                }
                ,
                o.isBananaFrenzy = function() {
                    return this.node.name.includes("BananaSP_frenzy")
                }
                ,
                o.isPomegranate = function() {
                    return this.node.name.includes("Pomegranate")
                }
                ,
                o.isPeachyTime = function() {
                    return this.node.name.includes("Peachy")
                }
                ,
                o.isBerryBlast = function() {
                    return this.node.name.includes("BerryBlast")
                }
                ,
                o.isFruitSameType = function(e) {
                    return this.node.name.includes(e)
                }
                ,
                o.stopParticlePeachyTime = function() {
                    this.node.getChildByPath("particle_peachyTrail").getComponent(m).stop(),
                    this.node.getChildByPath("particle_peachyTrail").getComponent(m).clear(),
                    this.node.getChildByPath("particle_peachyTrail/star").getComponent(m).stop(),
                    this.node.getChildByPath("particle_peachyTrail/star").getComponent(m).clear(),
                    this.node.getChildByPath("particle_peachyTrail/star").active = !1,
                    this.node.getChildByPath("particle_peachyTrail").active = !1
                }
                ,
                o.startParticlePeachyTime = function() {
                    this.node.getChildByPath("particle_peachyTrail/star").active = !0,
                    this.node.getChildByPath("particle_peachyTrail").active = !0,
                    this.node.getChildByPath("particle_peachyTrail").getComponent(m).play(),
                    this.node.getChildByPath("particle_peachyTrail/star").getComponent(m).play()
                }
                ,
                o.pauseVelocityOnly = function() {
                    this.paused || (y.getScheduler().pauseTarget(this),
                    this.paused = !0,
                    this.slashed ? null != this.half1 && null != this.half2 && (this.lastHalfLinearVelocity = [new h(0,0,0), new h(0,0,0)],
                    this.half1.getComponent(r).getLinearVelocity(this.lastHalfLinearVelocity[0]),
                    this.half2.getComponent(r).getLinearVelocity(this.lastHalfLinearVelocity[1]),
                    this.half1.getComponent(r).useGravity = !1,
                    this.half2.getComponent(r).useGravity = !1,
                    this.half1.getComponent(r).setLinearVelocity(new h(0,0,0)),
                    this.half2.getComponent(r).setLinearVelocity(new h(0,0,0))) : this.node.getComponent(E).pausePhysics = !0)
                }
                ,
                o.resumeVelocityOnly = function() {
                    this.paused && (y.getScheduler().resumeTarget(this),
                    this.paused = !1,
                    this.slashed ? null != this.half1 && null != this.half2 && (this.half1.getComponent(r).setLinearVelocity(this.lastHalfLinearVelocity[0]),
                    this.half2.getComponent(r).setLinearVelocity(this.lastHalfLinearVelocity[1]),
                    this.half1.getComponent(r).useGravity = !0,
                    this.half2.getComponent(r).useGravity = !0) : this.node.getComponent(E).pausePhysics = !1)
                }
                ,
                o.pausePhysic = function() {
                    this.paused || (y.getScheduler().pauseTarget(this),
                    this.paused = !0,
                    this.slashed ? null != this.half1 && null != this.half2 && (this.lastHalfLinearVelocity = [new h(0,0,0), new h(0,0,0)],
                    this.half1.getComponent(r).getLinearVelocity(this.lastHalfLinearVelocity[0]),
                    this.half2.getComponent(r).getLinearVelocity(this.lastHalfLinearVelocity[1]),
                    this.lastHalfAngularVelocity = [new h(0,0,0), new h(0,0,0)],
                    this.half1.getComponent(r).getAngularVelocity(this.lastHalfAngularVelocity[0]),
                    this.half2.getComponent(r).getAngularVelocity(this.lastHalfAngularVelocity[1]),
                    this.half1.getComponent(r).useGravity = !1,
                    this.half2.getComponent(r).useGravity = !1,
                    this.half1.getComponent(r).setLinearVelocity(new h(0,0,0)),
                    this.half1.getComponent(r).setAngularVelocity(new h(0,0,0)),
                    this.half2.getComponent(r).setLinearVelocity(new h(0,0,0)),
                    this.half2.getComponent(r).setAngularVelocity(new h(0,0,0))) : (this.lastLinearVelocity = new h(0,0,0),
                    this.lastAngularVelocity = new h(0,0,0),
                    this.node.getComponent(E).pausePhysics = !0,
                    this.getComponent(r).getAngularVelocity(this.lastAngularVelocity),
                    this.getComponent(r).setAngularVelocity(new h(0,0,0))))
                }
                ,
                o.resumePhysic = function() {
                    if (this.paused)
                        if (y.getScheduler().resumeTarget(this),
                        this.paused = !1,
                        this.slashed)
                            null != this.half1 && null != this.half2 && (null == this.lastHalfLinearVelocity.length && (this.lastHalfLinearVelocity = [new h(0,0,0), new h(0,0,0)]),
                            this.half1.getComponent(r).setLinearVelocity(this.lastHalfLinearVelocity[0]),
                            this.half2.getComponent(r).setLinearVelocity(this.lastHalfLinearVelocity[1]),
                            this.half1.getComponent(r).setAngularVelocity(this.lastHalfAngularVelocity[0]),
                            this.half2.getComponent(r).setAngularVelocity(this.lastHalfAngularVelocity[1]),
                            this.half1.getComponent(r).useGravity = !0,
                            this.half2.getComponent(r).useGravity = !0);
                        else {
                            if (this.node.getComponent(E).pausePhysics = !1,
                            null == this.getComponent(r) || null == this.lastAngularVelocity)
                                return;
                            this.getComponent(r).setAngularVelocity(this.lastAngularVelocity)
                        }
                }
                ,
                o.getSlashed = function(e, n, a) {
                    var i = this;
                    void 0 === a && (a = !0),
                    9 == A.getInstance().bladeUsed ? w.getInstance().play(c(w.SFX_HOLLY_IMPACT_1, w.SFX_HOLLY_IMPACT_4 + 1)) : 11 == A.getInstance().bladeUsed && w.getInstance().play(c(w.SFX_BLADEFIRE_CRACKER_IMPACT_1, w.SFX_BLADEFIRE_CRACKER_IMPACT_3 + 1));
                    var s = this;
                    (this.isPeachyTime() && w.getInstance().play(w.SFX_PEACH_SLICE),
                    F.gameMode == F.MODE_ARCADE) && (this.isPeachyTime() || this.isPomegranate() || this.isBerryBlast() || this.isBananaFreeze() || this.isBananaFrenzy() || this.isBananaDouble() || !a || (T.getInstance().onFruitSliced(),
                    "" == S.getInstance().firstSlashFruit && (S.getInstance().firstSlashFruit = this.node.name),
                    S.getInstance().lastSlashFruit = this.node.name),
                    this.node.name.includes("BerryBlast") || (S.getInstance().onlySliceBerry = !1));
                    if ((this.isBananaDouble() || this.isBananaFreeze() || this.isBananaFrenzy()) && (F.getInstance().bananaSpecialCount += 1,
                    a)) {
                        B.getInstance().specialBananaOnScreen = "";
                        var o = null;
                        if (this.isBananaFreeze() ? (w.getInstance().play(w.SFX_BANANA_FREEZE_SLICE),
                        F.gameMode == F.MODE_ARCADE && (S.getInstance().bananaFreezeHitCounter += 1),
                        o = F.getInstance().freezeArcadeTopLabel,
                        B.getInstance().freezeDuration = 7,
                        T.getInstance().dtMultiplier = .5,
                        B.getInstance().trySlowAllFruit(.5),
                        E.BlitzDtMultiplier = .5,
                        F.Instance.gameplayScreen.getChildByPath("container_time/container/Freeze").getComponent(p).play("ui_freeze_in"),
                        F.Instance.gameplayScreen.getChildByPath("FreezeOverlay").getComponent(p).play("ui_freeze_overlay_in")) : this.isBananaFrenzy() ? (w.getInstance().play(w.SFX_BANANA_FRENZY_SLICE),
                        F.gameMode == F.MODE_ARCADE && (S.getInstance().bananaFrenzyHitCounter += 1),
                        o = F.getInstance().frenzyArcadeTopLabel,
                        B.getInstance().frenzyDuration = 7,
                        B.getInstance().node.getChildByPath("particle_frenzySideLeft").active = !0,
                        B.getInstance().node.getChildByPath("particle_frenzySideRight").active = !0,
                        B.getInstance().startTimer = 0) : this.isBananaDouble() && (w.getInstance().play(w.SFX_BANANA_DOUBLE_SLICE),
                        F.gameMode == F.MODE_ARCADE && (S.getInstance().bananaDoubleHitCounter += 1),
                        o = F.getInstance().doubleArcadeTopLabel,
                        B.getInstance().doublePointDuration = 7,
                        F.Instance.gameplayScreen.getChildByPath("doublePoints_topLabel").getComponent(p).play("doublePointLabel_in"),
                        F.getInstance().scoreArcadeToDouble = 0,
                        F.Instance.gameplayScreen.getChildByPath("doublePoints_topLabel/ArcadeDoublePointsBacking/text_doubleIncrement").getComponent(C).string = "0",
                        F.Instance.gameplayScreen.getChildByPath("doublePoints_topLabel/ArcadeDoublePointsBacking/text_doubleFinalScore").getComponent(C).string = "0",
                        F.Instance.gameplayScreen.getChildByPath("DoublePointOverlay").getComponent(p).play("ui_overlay_double_in")),
                        B.getInstance().freezeDuration = B.getInstance().freezeDuration > 0 ? 7 : 0,
                        B.getInstance().frenzyDuration = B.getInstance().frenzyDuration > 0 ? 7 : 0,
                        B.getInstance().doublePointDuration = B.getInstance().doublePointDuration > 0 ? 7 : 0,
                        null != o) {
                            o.getChildByPath("BananaFrenzyTabBacking").active = this.isBananaFrenzy(),
                            o.getChildByPath("BananaFreezeTabBacking").active = this.isBananaFreeze(),
                            o.getChildByPath("BananaDoublePointsTabBacking").active = this.isBananaDouble(),
                            o.active = !0,
                            o.setParent(F.Instance.gameplayScreen.getChildByPath("arcade_top_label"));
                            var l = o.position.clone();
                            l.y = 62,
                            o.setPosition(l),
                            o.getComponent(p).play("show")
                        }
                    }
                    if (this.isPomegranate()) {
                        if (this.slashed)
                            return;
                        if (this.delaySlash > 0)
                            return;
                        if (this.state == t.STATE_BURST)
                            return;
                        if (this.holdMe)
                            return;
                        this.slashed = !0,
                        this.getComponent(r).setAngularVelocity(new h(0,0,0));
                        var y = (Math.abs(e) + 90) % 90;
                        if (y > 45 && (y = 45),
                        this.counter += 1,
                        1 == this.counter ? (F.getInstance().showPomegranateTextSlice(this.node.position, this.counter, y),
                        F.getInstance().showPomegranateTextScore(this.node.position, this.counter, y)) : (F.getInstance().changePomergranateTextSlice(this.counter),
                        F.getInstance().changePomergranateTextScore(this.counter)),
                        this.counter % 2 == 0) {
                            var _ = B.getInstance().getPomegranateRayFromPool();
                            _.active = !0;
                            var R = this.node.position.clone()
                              , b = this.node.position.clone()
                              , V = 15 * c(0, 26);
                            b.z = R.z - 1,
                            _.setPosition(b),
                            _.setRotationFromEuler(new h(-90,0,V)),
                            _.setParent(this.node.parent),
                            B.getInstance().activePomegranateRay.push(_),
                            _.setScale(new h(c(5, 21) / 10,1,c(10, 21) / 10)),
                            _.getComponent(p).play("pomergranate_ray_idle")
                        }
                        this.delaySlash = .125,
                        this.vRotation = e,
                        w.getInstance().play(c(w.SFX_POME_SLICE_1, w.SFX_POME_SLICE_3 + 1));
                        var D = B.getInstance().getSliceParticle(this.fruitIndex);
                        if (null != D && (D.setRotationFromEuler(0, 0, e + 90),
                        D.active = !0,
                        D.setPosition(this.node.position),
                        D.setParent(B.getInstance().node),
                        setTimeout((function() {
                            D.active = !1,
                            B.getInstance().putSlicedParticle(i.fruitIndex, D)
                        }
                        ), 2e3)),
                        this.getComponent(r).setLinearVelocity(new h(0,0,0)),
                        this.state == t.STATE_SHOW) {
                            F.IMMUNE = !0,
                            v.getInstance().bladeTip.setScale(new h(5,5,5)),
                            F.getInstance().pomegranateCount += 1,
                            console.log("rotation pome: " + e),
                            this.node.getChildByPath("pomegranate_single/particle_pomeTrailGlow").active = !1,
                            this.node.getChildByPath("pomegranate_single/particle_pomeTrail").active = !1,
                            B.getInstance().trySlowAllFruit(1e-4),
                            w.getInstance().play(w.SFX_POME_RAMPDOWN),
                            w.getInstance().stopLoopSFX(w.SFX_POME_SPARKLE__LP),
                            E.PomegranateDtMultiplier = .01,
                            B.PAUSE_SPAWNING = !0,
                            B.HOLD_ALL_HALF_SCHEDULER = !0,
                            this.timerSlicing = 5;
                            F.getInstance().canvasBlade.getChildByPath("Camera");
                            var x = F.getInstance().canvasForGameplayText.getChildByPath("Camera")
                              , O = F.getInstance().canvasForTextBehind3D.getChildByPath("Camera")
                              , H = F.getInstance().mainCanvas2.getChildByPath("Camera")
                              , X = F.getInstance().camera
                              , N = d.IDENTITY.clone();
                            d.fromEuler(N, 0, 0, y);
                            var z = new h(0,0,0);
                            X.getComponent(g).worldToScreen(new h(this.node.position.x,this.node.position.y,0), z),
                            z.divide3f(I.getScaleX(), I.getScaleY(), 1),
                            z.subtract(new h(H.parent.getComponent(f).width / 2,H.parent.getComponent(f).height / 2,0)),
                            this.tempPosTargetCam = z,
                            console.log("cam pome 1: " + z),
                            console.log("cam pome 2: " + this.node.position),
                            u(X).to(.3, {
                                position: new h(this.node.position.x,this.node.position.y,10)
                            }, {
                                easing: P.expoIn
                            }).start(),
                            u(X).to(.3, {
                                rotation: N
                            }, {
                                easing: P.expoIn
                            }).start(),
                            u(X.getComponent(g)).to(.15, {
                                orthoHeight: 5
                            }, {
                                easing: P.expoIn
                            }).start(),
                            u(x).to(.3, {
                                position: new h(z.x,z.y,1e3)
                            }, {
                                easing: P.expoIn
                            }).start(),
                            u(x).to(.3, {
                                rotation: N
                            }, {
                                easing: P.expoIn
                            }).start(),
                            u(O).to(.3, {
                                position: new h(z.x,z.y,1e3)
                            }, {
                                easing: P.expoIn
                            }).start(),
                            u(O).to(.3, {
                                rotation: N
                            }, {
                                easing: P.expoIn
                            }).start(),
                            this.holdMe = !1,
                            u(H).to(.3, {
                                position: new h(z.x,z.y,1e3)
                            }, {
                                easing: P.expoIn
                            }).start(),
                            u(H).to(.3, {
                                rotation: N
                            }, {
                                easing: P.expoIn
                            }).start(),
                            u(H.getComponent(g)).to(.3, {
                                orthoHeight: 200
                            }, {
                                easing: P.expoIn
                            }).call((function() {
                                s.holdMe = !1,
                                F.getInstance().setHoldInput(!1)
                            }
                            )).start(),
                            this.state = t.STATE_SLICING,
                            t.CAMERA_ZOOMED = !0
                        } else if (this.state == t.STATE_SLICING && !this.holdMe) {
                            F.getInstance().camera.setPosition(new h(this.node.position.x,this.node.position.y,10)),
                            F.getInstance().camera.getComponent(M).shakeEffect2(1, new h(this.node.position.x,this.node.position.y,10));
                            var G = this.tempPosTargetCam;
                            F.getInstance().mainCanvas2.getChildByPath("Camera").setPosition(new h(G.x,G.y,1e3)),
                            F.getInstance().mainCanvas2.getChildByPath("Camera").getComponent(M).shakeEffect2(25, new h(G.x,G.y,1e3))
                        }
                    } else {
                        if (this.slashed)
                            return;
                        this.isBerryBlast() && (w.getInstance().play(w.SFX_STRAWBERRY_SLICE),
                        B.getInstance().destroyFruitInRadius(this.node.position, 6));
                        for (var U = 0; U < B.fruitList.length; U++) {
                            var W = B.fruitList[U];
                            if (W.id == this.node.name) {
                                if (W.impactSFX.includes("Wet")) {
                                    var j = c(1, 4);
                                    "FruitImpactBigWet0" == W.impactSFX ? 1 == j ? w.getInstance().play(w.SFX_IMPACT_BIG_WET_1) : 2 == j ? w.getInstance().play(w.SFX_IMPACT_BIG_WET_2) : 3 == j && w.getInstance().play(w.SFX_IMPACT_BIG_WET_3) : "FruitImpactSmallWet0" == W.impactSFX ? 1 == j ? w.getInstance().play(w.SFX_IMPACT_SMALL_WET_1) : 2 == j ? w.getInstance().play(w.SFX_IMPACT_SMALL_WET_2) : 3 == j && w.getInstance().play(w.SFX_IMPACT_SMALL_WET_3) : "FruitImpactMediumWet0" == W.impactSFX && (1 == j ? w.getInstance().play(w.SFX_IMPACT_MEDIUM_WET_1) : 2 == j ? w.getInstance().play(w.SFX_IMPACT_MEDIUM_WET_2) : 3 == j && w.getInstance().play(w.SFX_IMPACT_MEDIUM_WET_3))
                                } else
                                    "FruitImpactBigHollow" == W.impactSFX ? w.getInstance().play(w.SFX_FRUIT_IMPACT_BIG_HOLLOW) : "FruitImpactApple" == W.impactSFX ? w.getInstance().play(w.SFX_FRUIT_IMPACT_APPLE) : "FruitImpactMediumDry" == W.impactSFX && w.getInstance().play(w.SFX_IMPACT_MEDIUM_DRY);
                                break
                            }
                        }
                        var k;
                        if (null != (k = n ? B.getInstance().getCriticalParticle() : B.getInstance().getSliceParticle(this.fruitIndex)) && (k.setRotationFromEuler(0, 0, e + 90),
                        k.active = !0,
                        k.setPosition(this.node.position),
                        k.setParent(B.getInstance().node),
                        setTimeout((function() {
                            k.active = !1,
                            n ? B.getInstance().putCriticalParticle(k) : B.getInstance().putSlicedParticle(i.fruitIndex, k)
                        }
                        ), 2e3)),
                        this.slashed = !0,
                        null != this.half1 && null != this.half2) {
                            this.isCritical = n;
                            var Y = this.half1
                              , Z = this.half2;
                            Y.active = !0,
                            Z.active = !0,
                            Y.setParent(this.node.parent),
                            Z.setParent(this.node.parent),
                            Y.setPosition(this.node.position),
                            Z.setPosition(this.node.position),
                            Y.setScale(this.node.scale),
                            Z.setScale(this.node.scale);
                            var K = new h(0,0,0);
                            K.x = -90,
                            K.y = 0,
                            K.z = e;
                            var q = d.IDENTITY.clone();
                            d.fromEuler(q, -90, 0, e),
                            Y.setWorldRotation(q),
                            Y.setRotationFromEuler(K),
                            (K = new h(0,0,0)).x = -90,
                            K.y = 0,
                            K.z = e,
                            q = d.IDENTITY.clone(),
                            d.fromEuler(q, -90, 0, e),
                            Z.setWorldRotation(q),
                            console.log("rotation: " + e);
                            var J = 300;
                            n && (J = 3e3);
                            var Q, $, ee = Math.sin(e * Math.PI / -180) * J, te = Math.cos(e * Math.PI / -180) * J;
                            if (Y.getComponent(r).setLinearVelocity(new h(0,0,0)),
                            Y.getComponent(r).applyForce(new h(ee,te,0)),
                            Y.getComponent(r).setAngularVelocity(new h(0,0,0)),
                            Y.getComponent(r).applyLocalTorque(new h(-200,0,0)),
                            ee = Math.sin((e + 180) * Math.PI / -180) * J,
                            te = Math.cos((e + 180) * Math.PI / -180) * J,
                            console.log(ee + " " + te + " " + e),
                            Z.getComponent(r).setLinearVelocity(new h(0,0,0)),
                            Z.getComponent(r).applyForce(new h(ee,te,0)),
                            Z.getComponent(r).setAngularVelocity(new h(0,0,0)),
                            Z.getComponent(r).applyLocalTorque(new h(200,0,0)),
                            n) {
                                Q = B.getInstance().getCriticaTrail(),
                                $ = B.getInstance().getCriticaTrail(),
                                Q.active = !0,
                                $.active = !0,
                                Q.parent = Y,
                                $.parent = Z,
                                null == Y.getComponent(L) && Y.addComponent(L),
                                null == Z.getComponent(L) && Z.addComponent(L);
                                var ne = Y.getComponent(L)
                                  , ae = Z.getComponent(L);
                                ne.reset(Q),
                                ae.reset($)
                            }
                            this.getComponent(r).setLinearVelocity(new h(0,0,0)),
                            this.node.active = !1,
                            null != this.particleShadow && this.particleShadow.getComponent(m).stop(),
                            this.half1.getComponent(r).useGravity = !0,
                            this.half2.getComponent(r).useGravity = !0
                        } else
                            this.getComponent(r).setLinearVelocity(new h(0,0,0)),
                            this.node.active = !1
                    }
                }
                ,
                o.onEnable = function() {
                    if (this.isPeachyTime() && (w.getInstance().playLoopSFX(w.SFX_PEACH_LOOP),
                    this.startParticlePeachyTime()),
                    this.isPomegranate()) {
                        if (this.node.getChildByPath("pomegranate_single/particle_pomeTrailGlow").active = !0,
                        this.node.getChildByPath("pomegranate_single/particle_pomeTrail").active = !0,
                        t.POMEGRANATE_ACTIVE = !0,
                        this.counter = 0,
                        this.delaySlash = 0,
                        this.jiblet.length > 0 && this.pomegranatePieces.length > 0) {
                            w.getInstance().playLoopSFX(w.SFX_POME_SPARKLE__LP),
                            this.state = t.STATE_SHOW;
                            for (var e = 0; e < this.pomegranatePieces.length; e++)
                                this.jiblet[e].getComponent(E).setVelocity(new h(0,0,0)),
                                this.jiblet[e].active = !1,
                                this.pomegranatePieces[e].getComponent(E).setVelocity(new h(0,0,0)),
                                this.pomegranatePieces[e].active = !1;
                            this.particleBurst.active = !1
                        }
                    } else
                        this.isBerryBlast() && w.getInstance().playLoopSFX(w.SFX_STRAWBERRY_LOOP),
                        null != this.half1 && null != this.half2 && this.half1.active && this.half2.active && (null != this.half1.getComponent(L) && this.half1.getComponent(L).hideEverything(),
                        null != this.half2.getComponent(L) && this.half2.getComponent(L).hideEverything(),
                        this.half1 && this.half1.getComponent(r) && (this.half1.getComponent(r).setLinearVelocity(h.zero),
                        this.half2.getComponent(r).setLinearVelocity(h.zero),
                        this.half1.active = !1,
                        this.half2.active = !1))
                }
                ,
                o.reset = function(e) {
                    void 0 === e && (e = !0),
                    null != this.node.getComponent(E) && this.node.getComponent(E).reset(),
                    this.paused = !1,
                    this.node.active = !0,
                    this.slashed = !1;
                    var t = this.getComponent(r);
                    t.setLinearVelocity(new h(0,0,0)),
                    t.setAngularVelocity(new h(0,0,0)),
                    t.useGravity = "" == this.keyMenu,
                    e && this.getComponent(r).applyTorque(new h(c(-100, 100),c(-100, 100),c(-100, 100))),
                    this.getComponent(r).angularDamping = 0,
                    null != this.particleShadow && this.particleShadow.getComponent(m).stop()
                }
                ,
                o.update = function(e) {
                    if (F.getInstance().getGameState() != F.STATE_GAME_PAUSE)
                        if (this.isPomegranate()) {
                            if (this.state == t.STATE_SLICING && (this.delaySlash -= e,
                            this.delaySlash <= 0 && (this.slashed = !1),
                            this.timerSlicing -= e,
                            this.timerSlicing <= 0)) {
                                var n = this;
                                this.state = t.STATE_BURST;
                                var a = this.counter;
                                F.getInstance().updateScore(F.getInstance().score + a);
                                var i = B.getInstance().getTextPomegranateSlice()
                                  , s = B.getInstance().getTextPomegranateScore();
                                this.scheduleOnce((function() {
                                    t.CAMERA_ZOOMED = !1;
                                    F.getInstance().canvasBlade.getChildByPath("Camera");
                                    var e = F.getInstance().mainCanvas2.getChildByPath("Camera")
                                      , a = F.getInstance().canvasForGameplayText.getChildByPath("Camera")
                                      , o = F.getInstance().canvasForTextBehind3D.getChildByPath("Camera")
                                      , l = F.getInstance().camera
                                      , r = d.IDENTITY.clone();
                                    d.fromEuler(r, 0, 0, 0);
                                    var c = .3;
                                    u(l).to(c, {
                                        position: new h(0,0,10)
                                    }, {
                                        easing: P.expoIn
                                    }).start(),
                                    u(l).to(c, {
                                        rotation: r
                                    }, {
                                        easing: P.expoIn
                                    }).start(),
                                    u(l.getComponent(g)).to(.3, {
                                        orthoHeight: 10
                                    }, {
                                        easing: P.expoIn
                                    }).start(),
                                    u(a).to(c, {
                                        position: new h(0,0,1e3)
                                    }, {
                                        easing: P.expoIn
                                    }).start(),
                                    u(a).to(c, {
                                        rotation: r
                                    }, {
                                        easing: P.expoIn
                                    }).start(),
                                    u(o).to(c, {
                                        position: new h(0,0,1e3)
                                    }, {
                                        easing: P.expoIn
                                    }).start(),
                                    u(o).to(c, {
                                        rotation: r
                                    }, {
                                        easing: P.expoIn
                                    }).start(),
                                    u(e).to(c, {
                                        position: new h(0,0,1e3)
                                    }, {
                                        easing: P.expoIn
                                    }).start(),
                                    u(e).to(c, {
                                        rotation: r
                                    }, {
                                        easing: P.expoIn
                                    }).start(),
                                    u(e.getComponent(g)).to(c, {
                                        orthoHeight: 384
                                    }, {
                                        easing: P.expoIn
                                    }).call((function() {
                                        n.scheduleOnce((function() {
                                            F.IMMUNE = !1,
                                            v.getInstance().bladeTip.setScale(new h(5,5,5)),
                                            B.PAUSE_SPAWNING = !1,
                                            B.HOLD_ALL_HALF_SCHEDULER = !1;
                                            var e = new h(1e-4,0,0);
                                            u(e).to(1, {
                                                x: 1
                                            }, {
                                                easing: P.expoIn,
                                                onUpdate: function() {
                                                    E.PomegranateDtMultiplier = e.x
                                                }
                                            }).start(),
                                            F.getInstance().camera.getComponent(M).shakeEffect(),
                                            u(s).to(.5, {
                                                scale: new h(1.5,1.5,1.5)
                                            }).call((function() {
                                                u(s).to(.75, {
                                                    scale: new h(0,0,0)
                                                }).call((function() {
                                                    s.active = !1
                                                }
                                                )).start()
                                            }
                                            )).start(),
                                            u(i).to(.5, {
                                                scale: new h(1.5,1.5,1.5)
                                            }).call((function() {
                                                u(i).to(.75, {
                                                    scale: new h(0,0,0)
                                                }).call((function() {
                                                    i.active = !1
                                                }
                                                )).start()
                                            }
                                            )).start(),
                                            n.burst(n.vRotation),
                                            B.getInstance().scheduleOnce((function() {
                                                for (var e = B.getInstance().activePomegranateRay.length - 1; e >= 0; e--) {
                                                    var t = B.getInstance().activePomegranateRay.splice(e, 1)[0];
                                                    t.active = !1,
                                                    B.getInstance().poolPomegranateRay.push(t)
                                                }
                                            }
                                            ), 1.5)
                                        }
                                        ), .5)
                                    }
                                    )).start()
                                }
                                ), .25)
                            }
                        } else if ("" == this.keyMenu && F.TUTORIAL_STATE >= 1 && F.TUTORIAL_STATE <= 3) {
                            var o = this.node.position.clone()
                              , l = this.node.getComponent(E);
                            o.y <= 0 && l.velocity.y < 0 && (o.y = 0,
                            l.pausePhysics = !0),
                            this.node.setPosition(o)
                        }
                }
                ,
                s(t, [{
                    key: "particleShadow",
                    get: function() {
                        return this._particleShadow
                    },
                    set: function(e) {
                        this._particleShadow = e
                    }
                }]),
                t
            }(_)).CAMERA_ZOOMED = !1,
            z.POMEGRANATE_ACTIVE = !1,
            z.BERRYBLAST_ACTIVE = !1,
            z.STATE_SHOW = 0,
            z.STATE_SLICING = 1,
            z.STATE_BURST = 2,
            H = t((O = z).prototype, "keyMenu", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            X = t(O.prototype, "fruitName", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            N = t(O.prototype, "colliderRadius", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            x = O)) || x));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/FruitManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ArcadeBonusBoardController.ts", "./BGMManager.ts", "./BlitzManager.ts", "./Bomb.ts", "./ControllerBlade.ts", "./FollowTarget.ts", "./Fruit.ts", "./FruitPhysics.ts", "./GameController.ts", "./ScenePause.ts", "./SFXManager.ts"], (function(e) {
    "use strict";
    var t, a, n, i, r, o, c, s, l, p, u, h, m, g, f, d, y, b, S, C, v, w, P, x, I, F, B, R, T, _, A, D, E, L, W, O, z, M, N, j, X;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            a = e.inheritsLoose,
            n = e.initializerDefineProperty,
            i = e.assertThisInitialized,
            r = e.createClass
        }
        , function(e) {
            o = e.cclegacy,
            c = e._decorator,
            s = e.Prefab,
            l = e.Label,
            p = e.Camera,
            u = e.instantiate,
            h = e.randomRangeInt,
            m = e.Vec3,
            g = e.setDisplayStats,
            f = e.PhysicsSystem,
            d = e.Animation,
            y = e.ParticleSystem,
            b = e.randomRange,
            S = e.RigidBody,
            C = e.Quat,
            v = e.BoxCollider,
            w = e.MeshRenderer,
            P = e.find,
            x = e.view,
            I = e.Sprite,
            F = e.Color,
            B = e.AnimationComponent,
            R = e.UITransform,
            T = e.Component,
            _ = e.tween
        }
        , function(e) {
            A = e.ArcadeBonusBoardController
        }
        , function(e) {
            D = e.BGMManager
        }
        , function(e) {
            E = e.BlitzManager
        }
        , function(e) {
            L = e.Bomb
        }
        , function(e) {
            W = e.ControllerBlade
        }
        , function(e) {
            O = e.FollowTarget
        }
        , function(e) {
            z = e.Fruit
        }
        , function(e) {
            M = e.FruitPhysics
        }
        , function(e) {
            N = e.GameController
        }
        , function(e) {
            j = e.ScenePause
        }
        , function(e) {
            X = e.SFXManager
        }
        ],
        execute: function() {
            var G, k, H, U, J, V, Z, Y, K, Q, q, $, ee, te, ae, ne, ie, re, oe, ce, se, le, pe, ue, he, me, ge, fe, de, ye, be, Se, Ce, ve, we, Pe, xe, Ie, Fe, Be, Re, Te, _e, Ae, De, Ee, Le, We, Oe, ze, Me, Ne, je, Xe, Ge, ke;
            o._RF.push({}, "d5c3cQbdXFEeJj9fFHZTltE", "FruitManager", void 0);
            var He = c.ccclass
              , Ue = c.property;
            e("FruitManager", (G = He("FruitManager"),
            k = Ue({
                type: [s]
            }),
            H = Ue({
                type: [s]
            }),
            U = Ue({
                type: s
            }),
            J = Ue({
                type: s
            }),
            V = Ue({
                type: s
            }),
            Z = Ue({
                type: s
            }),
            Y = Ue({
                type: s
            }),
            K = Ue({
                type: s
            }),
            Q = Ue({
                type: s
            }),
            q = Ue({
                type: s
            }),
            $ = Ue({
                type: s
            }),
            ee = Ue({
                type: s
            }),
            te = Ue({
                type: s
            }),
            ae = Ue({
                type: s
            }),
            ne = Ue({
                type: s
            }),
            ie = Ue({
                type: s
            }),
            re = Ue({
                type: s
            }),
            oe = Ue({
                type: s
            }),
            ce = Ue({
                type: s
            }),
            se = Ue({
                type: s
            }),
            le = Ue({
                type: s,
                displayName: "Prefab specific fruit"
            }),
            pe = Ue({
                type: s
            }),
            ue = Ue({
                type: s
            }),
            he = Ue({
                type: l
            }),
            me = Ue({
                type: p,
                displayName: "Main Camera"
            }),
            ge = Ue({
                type: Number
            }),
            G(((ke = function(e) {
                function t() {
                    for (var t, a = arguments.length, r = new Array(a), o = 0; o < a; o++)
                        r[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(r)) || this,
                    n(t, "fruitFBXList", ye, i(t)),
                    n(t, "juiceParticle", be, i(t)),
                    n(t, "prefabCriticalParticle", Se, i(t)),
                    n(t, "prefabTrailParticle", Ce, i(t)),
                    n(t, "prefabBombRay", ve, i(t)),
                    n(t, "prefabCross", we, i(t)),
                    n(t, "prefabParticleFront", Pe, i(t)),
                    n(t, "prefabParticleBack", xe, i(t)),
                    n(t, "prefabParticleShadow", Ie, i(t)),
                    n(t, "textFruitCombo", Fe, i(t)),
                    n(t, "textFruitCritical", Be, i(t)),
                    n(t, "textBerryBlast", Re, i(t)),
                    n(t, "prefabBerryBlastShockwave", Te, i(t)),
                    n(t, "prefabTextPomegranateScore", _e, i(t)),
                    n(t, "prefabTextPomegranateSlice", Ae, i(t)),
                    n(t, "prefabPomegranateRay", De, i(t)),
                    n(t, "prefabPomegranateRay2D", Ee, i(t)),
                    n(t, "prefabBombPurpleText", Le, i(t)),
                    n(t, "prefabTextPeachyTime", We, i(t)),
                    n(t, "prefabPeachyBurst", Oe, i(t)),
                    n(t, "prefabSpecificFruit", ze, i(t)),
                    n(t, "textBombDeflect", Me, i(t)),
                    n(t, "particleBombDeflect", Ne, i(t)),
                    n(t, "textFruitCount", je, i(t)),
                    n(t, "mainCamera", Xe, i(t)),
                    n(t, "forceFreezeSpawnBeforeEndGame", Ge, i(t)),
                    t.lastBananaSpawn = 0,
                    t.potentialBananas = [],
                    t.poolTextBerryBlast = [],
                    t.poolBerryBlastShockwave = [],
                    t._startTimer = 0,
                    t.nextScoreSpawnPomegranate = 50,
                    t.activeObject = [],
                    t.poolObject = [],
                    t._poolPurpleBombText = [],
                    t.textPomegranateScore = null,
                    t.textPomegranateSlice = null,
                    t.textPeachyTime = null,
                    t._poolPomegranateRay = [],
                    t._activePomegranateRay = [],
                    t._poolPomegranateRay2D = [],
                    t._activePomegranateRay2D = [],
                    t.textFruitCombos = [],
                    t.textFruitCriticals = [],
                    t.poolSlicedParticle = [],
                    t.textBombDeflects = [],
                    t.particleDeflects = [],
                    t.poolJuiceParticle = [],
                    t.poolCriticalParticle = [],
                    t.poolTrailCritical = [],
                    t.poolBackParticle = [],
                    t.fruitToSpawnList = [],
                    t.poolCrosses = [],
                    t.poolShadowParticle = [],
                    t._poolBombRay = [],
                    t._countdown = 3,
                    t._bombCounter = 0,
                    t.specialBananaOnScreen = "",
                    t.spawnCount = 0,
                    t.waveList = [{
                        id: 1,
                        minWave: 0,
                        chance: 90,
                        chanceRegrowth: .33,
                        delay: 1,
                        dtScale: .9,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["Watermelon"],
                            min: 1,
                            max: 1,
                            between: 0
                        }]
                    }, {
                        id: 2,
                        minWave: 1,
                        chance: 90,
                        chanceRegrowth: .33,
                        delay: 1,
                        dtScale: .9,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 1,
                            max: 1,
                            between: 0
                        }]
                    }, {
                        id: 3,
                        minWave: 2,
                        chance: 90,
                        chanceRegrowth: .33,
                        delay: 1,
                        dtScale: .9,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 2,
                            max: 3,
                            between: 0
                        }]
                    }, {
                        id: 4,
                        minWave: 4,
                        chance: 90,
                        chanceRegrowth: .33,
                        delay: .8,
                        dtScale: .9,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["Bomb"],
                            min: 1,
                            max: 2,
                            between: 0
                        }]
                    }, {
                        id: 5,
                        minWave: 5,
                        chance: 90,
                        chanceRegrowth: .33,
                        delay: .8,
                        dtScale: .9,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["Bomb"],
                            min: 1,
                            max: 1,
                            between: 0
                        }, {
                            fruits: ["R"],
                            min: 1,
                            max: 2,
                            between: 0
                        }]
                    }, {
                        id: 6,
                        minWave: 5,
                        chance: 90,
                        chanceRegrowth: .33,
                        delay: .8,
                        dtScale: .9,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 7,
                            max: 7,
                            between: .7
                        }]
                    }, {
                        id: 7,
                        minWave: 9,
                        chance: 90,
                        chanceRegrowth: .33,
                        delay: .8,
                        dtScale: .95,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R", "R", "B"],
                            min: 4,
                            max: 6,
                            between: .6
                        }]
                    }, {
                        id: 8,
                        minWave: 9,
                        chance: 90,
                        chanceRegrowth: .33,
                        delay: .8,
                        dtScale: .95,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 4,
                            max: 6,
                            between: 0
                        }]
                    }, {
                        id: 9,
                        minWave: 9,
                        chance: 90,
                        chanceRegrowth: .33,
                        delay: .8,
                        dtScale: .95,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R", "R", "R", "B"],
                            min: 3,
                            max: 4,
                            between: 0
                        }]
                    }, {
                        id: 10,
                        minWave: 14,
                        chance: 90,
                        chanceRegrowth: .33,
                        delay: .8,
                        dtScale: .95,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["Bomb"],
                            min: 1,
                            max: 2,
                            between: 0
                        }, {
                            fruits: ["R"],
                            min: 2,
                            max: 3,
                            between: 0
                        }]
                    }, {
                        id: 11,
                        minWave: 14,
                        chance: 90,
                        chanceRegrowth: .33,
                        delay: .8,
                        dtScale: 1,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R", "R", "B"],
                            min: 16,
                            max: 16,
                            between: .4
                        }]
                    }, {
                        id: 12,
                        minWave: 14,
                        chance: 90,
                        chanceRegrowth: .33,
                        delay: .8,
                        dtScale: 1,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 10,
                            max: 10,
                            between: .3
                        }]
                    }, {
                        id: 13,
                        minWave: 19,
                        chance: 90,
                        chanceRegrowth: .33,
                        delay: .8,
                        dtScale: 1,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R", "R", "B"],
                            min: 8,
                            max: 8,
                            between: .5,
                            delayInc: -.2
                        }]
                    }, {
                        id: 14,
                        minWave: 19,
                        chance: 90,
                        chanceRegrowth: .33,
                        delay: .8,
                        dtScale: 1,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R", "R", "R", "R", "R", "B"],
                            min: 4,
                            max: 6,
                            between: 0
                        }]
                    }, {
                        id: 15,
                        minWave: 22,
                        chance: 67,
                        chanceRegrowth: .33,
                        delay: .8,
                        dtScale: 1,
                        dtScaleIncrease: .02,
                        fruitChance: [{
                            fruits: ["R", "R", "R", "B"],
                            min: 5,
                            max: 10,
                            between: .4
                        }]
                    }, {
                        id: 16,
                        minWave: 22,
                        chance: 67,
                        chanceRegrowth: .33,
                        delay: .8,
                        dtScale: 1,
                        dtScaleIncrease: .02,
                        fruitChance: [{
                            fruits: ["R", "R", "R", "B"],
                            min: 3,
                            max: 5,
                            between: .4
                        }]
                    }, {
                        id: 17,
                        minWave: 22,
                        chance: 67,
                        chanceRegrowth: .33,
                        delay: .8,
                        dtScale: .9,
                        dtScaleIncrease: .02,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 4,
                            max: 7,
                            between: .25
                        }]
                    }, {
                        id: 18,
                        minWave: 22,
                        chance: 68,
                        chanceRegrowth: .33,
                        delay: .8,
                        dtScale: 1,
                        dtScaleIncrease: .02,
                        fruitChance: [{
                            fruits: ["R", "R", "B"],
                            min: 5,
                            max: 7,
                            between: .4
                        }]
                    }],
                    t.waveListZen = [{
                        id: 1,
                        minWave: 0,
                        maxWave: 2,
                        chance: 10,
                        chanceRegrowth: .25,
                        delay: .2,
                        dtScale: .95,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 4,
                            max: 6,
                            between: .4
                        }]
                    }, {
                        id: 2,
                        minWave: 0,
                        chance: 10,
                        chanceRegrowth: .25,
                        delay: .2,
                        dtScale: .95,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 4,
                            max: 8,
                            between: .3
                        }]
                    }, {
                        id: 3,
                        minWave: 1,
                        chance: 5,
                        chanceRegrowth: .25,
                        delay: .2,
                        dtScale: .95,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["1F"],
                            min: 4,
                            max: 10,
                            between: .4
                        }]
                    }, {
                        id: 4,
                        minWave: 1,
                        chance: 8,
                        chanceRegrowth: .25,
                        delay: .2,
                        dtScale: .95,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 4,
                            max: 10,
                            between: .4
                        }]
                    }, {
                        id: 5,
                        minWave: 1,
                        chance: 7,
                        chanceRegrowth: .25,
                        delay: .2,
                        dtScale: .95,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 4,
                            max: 14,
                            between: .2
                        }]
                    }, {
                        id: 6,
                        minWave: 1,
                        chance: 20,
                        chanceRegrowth: .25,
                        delay: .2,
                        dtScale: .95,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 3,
                            max: 7,
                            between: .2
                        }]
                    }, {
                        id: 7,
                        minWave: 1,
                        chance: 10,
                        chanceRegrowth: .25,
                        delay: .2,
                        dtScale: .95,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["1F"],
                            min: 3,
                            max: 7,
                            between: .2
                        }]
                    }, {
                        id: 8,
                        minWave: 1,
                        chance: 10,
                        chanceRegrowth: .25,
                        delay: .2,
                        dtScale: .95,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["1F"],
                            min: 3,
                            max: 7,
                            between: .2
                        }]
                    }, {
                        id: 9,
                        minWave: 1,
                        chance: 15,
                        chanceRegrowth: .25,
                        delay: .2,
                        dtScale: .95,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 4,
                            max: 7,
                            between: .8
                        }, {
                            fruits: ["R"],
                            min: 3,
                            max: 7,
                            between: .75
                        }]
                    }, {
                        id: 10,
                        minWave: 1,
                        chance: 15,
                        chanceRegrowth: .25,
                        delay: .2,
                        dtScale: .95,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 2,
                            max: 2,
                            between: .5
                        }, {
                            fruits: ["R"],
                            min: 2,
                            max: 2,
                            between: .5
                        }, {
                            fruits: ["R"],
                            min: 1,
                            max: 1,
                            between: 1.2
                        }]
                    }, {
                        id: 11,
                        minWave: 1,
                        chance: 15,
                        chanceRegrowth: .25,
                        delay: .2,
                        dtScale: .95,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 3,
                            max: 3,
                            between: .5
                        }, {
                            fruits: ["R"],
                            min: 1,
                            max: 1,
                            between: .5
                        }, {
                            fruits: ["R"],
                            min: 1,
                            max: 1,
                            between: .9
                        }]
                    }, {
                        id: 12,
                        minWave: 1,
                        chance: 18,
                        chanceRegrowth: .25,
                        delay: .2,
                        dtScale: .95,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 1,
                            max: 1,
                            between: 0
                        }, {
                            fruits: ["R"],
                            min: 1,
                            max: 1,
                            between: .45
                        }, {
                            fruits: ["R"],
                            min: 1,
                            max: 1,
                            between: .9
                        }, {
                            fruits: ["R"],
                            min: 1,
                            max: 1,
                            between: .9
                        }]
                    }],
                    t.waveListArcade = [{
                        id: 1,
                        minWave: 0,
                        maxWave: 2,
                        chance: 50,
                        chanceRegrowth: 0,
                        delay: .4,
                        dtScale: 1,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["1F"],
                            min: 4,
                            max: 7,
                            between: .35
                        }]
                    }, {
                        id: 2,
                        minWave: 0,
                        maxWave: 2,
                        chance: 30,
                        chanceRegrowth: 0,
                        delay: .4,
                        dtScale: 1,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 3,
                            max: 5,
                            between: 0
                        }]
                    }, {
                        id: 3,
                        minWave: 0,
                        maxWave: 2,
                        chance: 100,
                        chanceRegrowth: 0,
                        delay: .4,
                        dtScale: 1,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 4,
                            max: 7,
                            between: .25
                        }]
                    }, {
                        id: 4,
                        minWave: 0,
                        maxWave: 2,
                        chance: 100,
                        chanceRegrowth: 0,
                        delay: .4,
                        dtScale: 1,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 4,
                            max: 7,
                            between: .15
                        }]
                    }, {
                        id: 5,
                        minWave: 2,
                        chance: 50,
                        chanceRegrowth: 0,
                        delay: .4,
                        dtScale: 1,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["1F"],
                            min: 4,
                            max: 7,
                            between: .35
                        }]
                    }, {
                        id: 6,
                        minWave: 2,
                        chance: 30,
                        chanceRegrowth: 0,
                        delay: .4,
                        dtScale: 1,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["1F"],
                            min: 3,
                            max: 5,
                            between: 0
                        }]
                    }, {
                        id: 7,
                        minWave: 2,
                        chance: 80,
                        chanceRegrowth: 0,
                        delay: .4,
                        dtScale: 1,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 4,
                            max: 6,
                            between: .375
                        }]
                    }, {
                        id: 8,
                        minWave: 2,
                        chance: 100,
                        chanceRegrowth: 0,
                        delay: .4,
                        dtScale: 1,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 3,
                            max: 4,
                            between: 0
                        }, {
                            fruits: ["Bomb_purple"],
                            min: 1,
                            max: 2,
                            between: 0
                        }]
                    }, {
                        id: 9,
                        minWave: 2,
                        chance: 80,
                        chanceRegrowth: 0,
                        delay: .4,
                        dtScale: 1,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 3,
                            max: 5,
                            between: 0
                        }]
                    }, {
                        id: 10,
                        minWave: 2,
                        chance: 100,
                        chanceRegrowth: 0,
                        delay: .4,
                        dtScale: 1,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 4,
                            max: 7,
                            between: .25
                        }]
                    }, {
                        id: 11,
                        minWave: 2,
                        chance: 100,
                        chanceRegrowth: 0,
                        delay: .4,
                        dtScale: 1,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 5,
                            max: 7,
                            between: .3
                        }]
                    }, {
                        id: 12,
                        minWave: 2,
                        chance: 100,
                        chanceRegrowth: 0,
                        delay: .4,
                        dtScale: 1,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 4,
                            max: 6,
                            between: .8
                        }, {
                            fruits: ["R"],
                            min: 4,
                            max: 6,
                            between: .6
                        }]
                    }, {
                        id: 13,
                        minWave: 2,
                        chance: 100,
                        chanceRegrowth: 0,
                        delay: .4,
                        dtScale: 1,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 4,
                            max: 7,
                            between: .15
                        }]
                    }],
                    t.waveListArcadeFrenzy = [{
                        id: 1,
                        minWave: 0,
                        chance: 15,
                        chanceRegrowth: 0,
                        delay: .2,
                        dtScale: 1,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 1,
                            max: 2,
                            between: .3,
                            forcePosition: "left"
                        }, {
                            fruits: ["R"],
                            min: 1,
                            max: 2,
                            between: .3,
                            forcePosition: "right"
                        }]
                    }, {
                        id: 2,
                        minWave: 0,
                        chance: 10,
                        chanceRegrowth: 0,
                        delay: .003,
                        dtScale: 1,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 1,
                            max: 2,
                            between: .35,
                            forcePosition: "left"
                        }, {
                            fruits: ["R"],
                            min: 1,
                            max: 2,
                            between: .35,
                            forcePosition: "right"
                        }]
                    }, {
                        id: 3,
                        minWave: 0,
                        chance: 5,
                        chanceRegrowth: 0,
                        delay: .2,
                        dtScale: 1,
                        dtScaleIncrease: 0,
                        fruitChance: [{
                            fruits: ["R"],
                            min: 3,
                            max: 3,
                            between: .05,
                            forcePosition: "left"
                        }, {
                            fruits: ["R"],
                            min: 3,
                            max: 3,
                            between: .05,
                            forcePosition: "right"
                        }]
                    }],
                    t.frenzyDuration = 0,
                    t.freezeDuration = 0,
                    t.doublePointDuration = 0,
                    t._waveCounter = 0,
                    t.timerToSpawnBananaArcade = 0,
                    t.lastNumber = 0,
                    t
                }
                a(t, e),
                t.getInstance = function() {
                    return t.Instance
                }
                ;
                var o = t.prototype;
                return o.onLoad = function() {
                    this.poolObject = [];
                    for (var e = 0; e < this.fruitFBXList.length; e++)
                        this.poolObject.push([]);
                    this.poolJuiceParticle = [];
                    for (var a = 0; a < this.juiceParticle.length; a++)
                        this.poolJuiceParticle.push([]);
                    t.Instance = this;
                    for (var n = 0; n < 3; n++) {
                        var i = u(this.textBombDeflect);
                        i.active = !1,
                        this.textBombDeflects.push(i);
                        var r = u(this.particleBombDeflect);
                        r.active = !1,
                        this.particleDeflects.push(r)
                    }
                    for (var o = 0; o < 20; o++) {
                        for (var c = u(this.textFruitCombo), s = 0; s < this.juiceParticle.length; s++)
                            if (null != this.juiceParticle[s]) {
                                var l = u(this.juiceParticle[s]);
                                l.active = !1,
                                this.poolJuiceParticle[s].push(l)
                            }
                        c.active = !1,
                        this.textFruitCombos.push(c);
                        var p = u(this.prefabParticleShadow);
                        p.active = !1,
                        this.poolShadowParticle.push(p)
                    }
                    for (var f = 0; f < 3; f++) {
                        var d = u(this.prefabCross);
                        this.poolCrosses.push(d)
                    }
                    for (var y = 30 * h(1, 13), b = 0; b < 8; b++) {
                        var S = u(this.prefabBombRay);
                        S.active = !1,
                        S.setRotationFromEuler(new m(-90,0,y + 30 * b)),
                        this._poolBombRay.push(S)
                    }
                    g(!1)
                }
                ,
                o.showPeachyTimeBurst = function(e) {
                    var t;
                    (t = u(this.prefabPeachyBurst)).active = !0,
                    t.setPosition(e),
                    t.setParent(this.node.parent),
                    this.scheduleOnce((function() {
                        t.active = !1,
                        t.destroy()
                    }
                    ), 5)
                }
                ,
                o.showShockwave = function(e) {
                    var t;
                    (t = u(this.prefabBerryBlastShockwave)).active = !0,
                    t.setPosition(e),
                    t.setParent(this.node.parent),
                    this.scheduleOnce((function() {
                        t.active = !1,
                        t.destroy()
                    }
                    ), 5)
                }
                ,
                o.trySlowAllFruit = function(e) {
                    f.instance.gravity = new m(0,-45 * e,0)
                }
                ,
                o.destroyFruitInRadius = function(e, t, a) {
                    void 0 === a && (a = !0);
                    var n = e.clone();
                    n.z = 0;
                    for (var i = 0; i < this.activeObject.length; i++) {
                        var r = this.activeObject[i];
                        if (null == r.getComponent(L) && null != r.getComponent(z)) {
                            var o = r.getComponent(z);
                            if (!o.isPomegranate() && !o.isBerryBlast()) {
                                var c = r.getPosition().clone();
                                if (c.z = 0,
                                Math.abs(m.distance(n, c)) <= t || t < 0) {
                                    var s = h(0, 360);
                                    o.getSlashed(s, !1, a),
                                    N.getInstance().gameData.g.push({
                                        a: "sf",
                                        t: N.getInstance().timerGameplay.toFixed(4),
                                        n: o.waveId
                                    }),
                                    a && (N.getInstance().updateScore(N.getInstance().score + 1),
                                    N.getInstance().setLastFruitSlashedPosition(o.node.position),
                                    N.getInstance().updateCombo(N.getInstance().getCombo() + 1),
                                    1 == N.getInstance().getCombo() ? (N.getInstance().breakCombo = !1,
                                    N.getInstance().updateTimerCombo(.3)) : N.getInstance().updateTimerCombo(N.getInstance().getTimerCombo() + .1))
                                }
                            }
                        }
                    }
                }
                ,
                o.getPurpleBombTextFromPool = function() {
                    return 0 == this.poolPurpleBombText.length ? u(this.prefabBombPurpleText) : this.poolPurpleBombText.pop()
                }
                ,
                o.getPomegranateRayFromPool = function() {
                    return 0 == this.poolPomegranateRay.length ? u(this.prefabPomegranateRay) : this.poolPomegranateRay.pop()
                }
                ,
                o.getPomegranateRay2DFromPool = function() {
                    return 0 == this.poolPomegranateRay2D.length ? u(this.prefabPomegranateRay2D) : this.poolPomegranateRay2D.pop()
                }
                ,
                o.resetWave = function() {
                    this.fruitToSpawnList = [],
                    this.startTimer = 1
                }
                ,
                o.deactivateArcadeDouble = function() {
                    N.getInstance().scoreArcadeToDouble = 2 * N.getInstance().scoreArcadeToDouble,
                    N.Instance.gameplayScreen.getChildByPath("doublePoints_topLabel/ArcadeDoublePointsBacking/text_doubleFinalScore").getComponent(l).string = N.getInstance().scoreArcadeToDouble + "",
                    N.Instance.gameplayScreen.getChildByPath("DoublePointOverlay").getComponent(d).play("ui_overlay_double_out"),
                    N.Instance.gameplayScreen.getChildByPath("doublePoints_topLabel").getComponent(d).play("doublePointLabel_out"),
                    N.Instance.gameplayScreen.getChildByPath("doublePoints_topLabel").getComponent(d).on(d.EventType.FINISHED, (function() {
                        N.getInstance().updateScore(N.getInstance().score + N.getInstance().scoreArcadeToDouble)
                    }
                    ), this, !0),
                    this.doublePointDuration = 0,
                    N.getInstance().doubleArcadeTopLabel.getComponent(d).play("hide"),
                    N.getInstance().doubleArcadeTopLabel.getComponent(d).on(d.EventType.FINISHED, (function() {
                        N.getInstance().doubleArcadeTopLabel.setParent(null),
                        N.getInstance().doubleArcadeTopLabel.active = !1
                    }
                    ), this, !0)
                }
                ,
                o.deactivateArcadeFrenzy = function() {
                    t.getInstance().node.getChildByPath("particle_frenzySideLeft").active = !1,
                    t.getInstance().node.getChildByPath("particle_frenzySideRight").active = !1,
                    this.frenzyDuration = 0,
                    N.getInstance().frenzyArcadeTopLabel.getComponent(d).play("hide"),
                    N.getInstance().frenzyArcadeTopLabel.getComponent(d).on(d.EventType.FINISHED, (function() {
                        N.getInstance().frenzyArcadeTopLabel.setParent(null),
                        N.getInstance().frenzyArcadeTopLabel.active = !1
                    }
                    ), this, !0)
                }
                ,
                o.deactivateArcadeFreeze = function() {
                    t.getInstance().trySlowAllFruit(1),
                    M.BlitzDtMultiplier = 1,
                    N.Instance.gameplayScreen.getChildByPath("container_time/container/Freeze").getComponent(d).play("ui_freeze_out"),
                    N.Instance.gameplayScreen.getChildByPath("FreezeOverlay").getComponent(d).play("ui_freeze_overlay_out"),
                    E.getInstance().dtMultiplier = 1,
                    this.freezeDuration = 0,
                    N.getInstance().freezeArcadeTopLabel.getComponent(d).play("hide"),
                    N.getInstance().freezeArcadeTopLabel.getComponent(d).on(d.EventType.FINISHED, (function() {
                        N.getInstance().freezeArcadeTopLabel.setParent(null),
                        N.getInstance().freezeArcadeTopLabel.active = !1
                    }
                    ), this, !0)
                }
                ,
                o.update = function(e) {
                    if (!t.PAUSE_SPAWNING) {
                        if (N.getInstance().getScreenState() == N.SCREEN_STATE_GAMEPLAY)
                            if (N.getInstance().getGameState() == N.STATE_GAME_COUNTDOWN)
                                ;
                            else if (N.getInstance().getGameState() == N.STATE_GAME_PLAYING)
                                if (0 == N.TUTORIAL_STATE || 4 == N.TUTORIAL_STATE) {
                                    N.gameMode == N.MODE_ARCADE && (this.frenzyDuration > 0 && (this.frenzyDuration -= e,
                                    this.frenzyDuration <= 0 && t.getInstance().deactivateArcadeFrenzy()),
                                    this.freezeDuration > 0 && (this.freezeDuration -= e,
                                    this.freezeDuration <= 0 && t.getInstance().deactivateArcadeFreeze()),
                                    this.doublePointDuration > 0 && (this.doublePointDuration -= e,
                                    this.doublePointDuration <= 0 && t.getInstance().deactivateArcadeDouble())),
                                    this.startTimer -= e,
                                    this.startTimer <= 0 && (N.gameMode == N.MODE_ARCADE ? N.getInstance().arcadeTimer > 0 && this.getWave() : this.getWave());
                                    for (var a = 0; a < this.fruitToSpawnList.length; a++) {
                                        var n = this.fruitToSpawnList[a];
                                        n.delay -= e;
                                        var i = null;
                                        n.velocity && (i = n.velocity);
                                        var r = null;
                                        n.position && (r = n.position),
                                        n.delay <= 0 && this.spawnFruit(n.toSpawn, n.x, i, n.waveId, r)
                                    }
                                    for (var o = [], c = 0; c < this.fruitToSpawnList.length; c++) {
                                        var s = this.fruitToSpawnList[c];
                                        s.delay > 0 && o.push(s)
                                    }
                                    this.fruitToSpawnList = o
                                } else {
                                    for (var l = 0; l < this.activeObject.length; l++) {
                                        var p = this.activeObject[l];
                                        if (p.getComponent(M).getVelocity().y < 0 && (p.getComponent(z).pauseVelocityOnly(),
                                        N.TUTORIAL_STATE >= 1 && N.TUTORIAL_STATE <= 3)) {
                                            var u = N.Instance.gameplayScreen.getChildByPath("container_tutorial_finger");
                                            u.active || (u.active = !0,
                                            u.getComponent(d).play("animation_swipe_hand"))
                                        }
                                    }
                                    if (this.startTimer <= 0) {
                                        this.startTimer = 1,
                                        this.fruitToSpawnList = [];
                                        var m = 0;
                                        1 == N.TUTORIAL_STATE ? (m = -1,
                                        this.fruitToSpawnList.push({
                                            toSpawn: "Watermelon",
                                            x: 0,
                                            vx: 0
                                        }),
                                        N.getInstance().gameData.g.push({
                                            a: "w",
                                            t: N.getInstance().timerGameplay.toFixed(4),
                                            i: -1,
                                            n: [1]
                                        })) : 2 == N.TUTORIAL_STATE ? (m = -2,
                                        this.fruitToSpawnList.push({
                                            toSpawn: "R",
                                            x: -5,
                                            vx: 0
                                        }),
                                        this.fruitToSpawnList.push({
                                            toSpawn: "Watermelon",
                                            x: 0,
                                            vx: 0
                                        }),
                                        this.fruitToSpawnList.push({
                                            toSpawn: "R",
                                            x: 5,
                                            vx: 0
                                        }),
                                        N.getInstance().gameData.g.push({
                                            a: "w",
                                            t: N.getInstance().timerGameplay.toFixed(4),
                                            i: -2,
                                            n: [3]
                                        })) : 3 == N.TUTORIAL_STATE && (m = -3,
                                        this.fruitToSpawnList.push({
                                            toSpawn: "R",
                                            x: -10,
                                            vx: 0
                                        }),
                                        this.fruitToSpawnList.push({
                                            toSpawn: "R",
                                            x: -5,
                                            vx: 0
                                        }),
                                        this.fruitToSpawnList.push({
                                            toSpawn: "Watermelon",
                                            x: 0,
                                            vx: 0
                                        }),
                                        this.fruitToSpawnList.push({
                                            toSpawn: "R",
                                            x: 5,
                                            vx: 0
                                        }),
                                        this.fruitToSpawnList.push({
                                            toSpawn: "R",
                                            x: 10,
                                            vx: 0
                                        }),
                                        N.getInstance().gameData.g.push({
                                            a: "w",
                                            t: N.getInstance().timerGameplay.toFixed(4),
                                            i: -3,
                                            n: [5]
                                        }));
                                        for (var g = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], f = g[h(0, g.length)], y = 0; y < this.fruitToSpawnList.length; y++) {
                                            var b = this.fruitToSpawnList[y]
                                              , S = b.toSpawn;
                                            "1F" == b.toSpawn && (S = this.getFruitNameFromIndex(f)),
                                            this.spawnFruit(S, b.x, {
                                                vx: b.vx,
                                                vy: 9.5
                                            }, m)
                                        }
                                    }
                                }
                            else
                                N.getInstance().getGameState(),
                                N.STATE_GAME_LOSE;
                        for (var C = this.activeObject.length - 1; C >= 0; C--) {
                            var v = this.activeObject[C]
                              , w = null != v.getComponent(z)
                              , P = null != v.getComponent(L);
                            if (v.active) {
                                var x = v.position;
                                if (w && x.y <= -12)
                                    v.getComponent(z).isPomegranate() ? X.getInstance().stopLoopSFX(X.SFX_POME_SPARKLE__LP) : v.getComponent(z).isBerryBlast() ? X.getInstance().stopLoopSFX(X.SFX_STRAWBERRY_LOOP) : v.getComponent(z).isPeachyTime() && X.getInstance().stopLoopSFX(X.SFX_PEACH_LOOP),
                                    v.active = !1,
                                    this.poolObject[this.getFruitIndexFromName(v.name)].push(v),
                                    this.activeObject.splice(C, 1),
                                    N.gameMode == N.MODE_ARCADE && (A.getInstance().anyFruitDropped = !0),
                                    N.gameMode != N.MODE_CLASSIC || v.getComponent(z).isPomegranate() || v.getComponent(z).isBerryBlast() || (N.getInstance().gameData.g.push({
                                        a: "lf",
                                        t: N.getInstance().timerGameplay.toFixed(4),
                                        n: v.getComponent(z).waveId
                                    }),
                                    N.getInstance().getHealth() > 0 && (N.IMMUNE || (N.getInstance().updateHealth(N.getInstance().getHealth() - 1),
                                    N.getInstance().missedFruitCount += 1,
                                    N.getInstance().getHealth() <= 0 && N.getInstance().setGameState(N.STATE_GAME_LOSE))),
                                    this.showCross(x),
                                    X.getInstance().play(X.SFX_GANK));
                                else if (P && (x.x < -20 || x.x > 20 || x.y <= -14 || x.y >= 14)) {
                                    if (v.getComponent(L).isDeflected) {
                                        X.getInstance().play(X.SFX_POWERUP_DEFLECT_EXPLODE);
                                        var I = N.getInstance().mainCanvas.getChildByPath("Camera").getComponent(d);
                                        I.getState("camera_shake").isPlaying && I.stop(),
                                        I.play("camera_shake");
                                        var F = N.Instance.gameplayScreen.getChildByPath("bg_container_bomb_deflected").getComponent(d);
                                        F.getState("bg_container_bomb_deflected_show").isPlaying && F.stop(),
                                        F.play("bg_container_bomb_deflected_show")
                                    }
                                    this.poolObject[this.getFruitIndexFromName(v.name)].push(v),
                                    this.activeObject.splice(C, 1),
                                    this.bombCounter -= 1,
                                    this.bombCounter <= 0 && (this.bombCounter = 0,
                                    D.getInstance().stopBombBGM())
                                }
                            } else
                                w && (v.getComponent(z).isPomegranate() ? (this.poolObject[this.getFruitIndexFromName("Pomegranate")].push(v),
                                this.activeObject.splice(C, 1)) : v.getComponent(z).isBerryBlast() ? (this.poolObject[this.getFruitIndexFromName("BerryBlast")].push(v),
                                this.activeObject.splice(C, 1)) : (v.getComponent(z).half1.position.y <= -12 || v.getComponent(z).half1.position.y >= 9) && (this.poolObject[this.getFruitIndexFromName(v.name)].push(v),
                                this.activeObject.splice(C, 1)));
                            N.getInstance().getGameState() != N.STATE_GAME_LOSE || N.getInstance().dieFromBomb || 0 == this.activeObject.length && (N.getInstance().canRevive ? (N.getInstance().showOfferContinue(),
                            j.getInstance().hideButtonPause()) : N.getInstance().showGameOver((function() {
                                N.getInstance().getScreenState() != N.SCREEN_STATE_RESULT_REWARD && N.getInstance().setScreenState(N.SCREEN_STATE_RESULT_REWARD)
                            }
                            )))
                        }
                    }
                }
                ,
                o.getFruitNameFromIndex = function(e) {
                    switch (e) {
                    case 0:
                        return "AppleGreen";
                    case 1:
                        return "Banana";
                    case 2:
                        return "Coconut";
                    case 3:
                        return "Kiwifruit";
                    case 4:
                        return "Lemon";
                    case 5:
                        return "Mango";
                    case 6:
                        return "Orange";
                    case 7:
                        return "Peach";
                    case 8:
                        return "Pineapple";
                    case 9:
                        return "Watermelon";
                    case 10:
                        return "Starfruit";
                    case 11:
                        return "Starfruit_half_top";
                    case 12:
                        return "Starfruit_half_top_gray";
                    case 13:
                        return "Bomb";
                    case 14:
                        return "AppleRed";
                    case 15:
                        return "Pomegranate";
                    case 16:
                        return "MysteryBoxRV";
                    case 17:
                        return "BerryBlast";
                    case 18:
                        return "Peachy";
                    case 19:
                        return "Bomb_purple";
                    case 20:
                        return "BananaSP_freeze";
                    case 21:
                        return "BananaSP_double";
                    case 22:
                        return "BananaSP_frenzy"
                    }
                    return "AppleGreen"
                }
                ,
                o.getFruitIndexFromName = function(e) {
                    switch (e) {
                    case "AppleGreen":
                        return 0;
                    case "Banana":
                        return 1;
                    case "Coconut":
                        return 2;
                    case "Kiwifruit":
                        return 3;
                    case "Lemon":
                        return 4;
                    case "Mango":
                        return 5;
                    case "Orange":
                        return 6;
                    case "Peach":
                        return 7;
                    case "Pineapple":
                        return 8;
                    case "Watermelon":
                        return 9;
                    case "Starfruit":
                        return 10;
                    case "Starfruit_half_top":
                        return 11;
                    case "Starfruit_half_top_gray":
                        return 12;
                    case "Bomb":
                        return 13;
                    case "AppleRed":
                        return 14;
                    case "Pomegranate":
                        return 15;
                    case "MysteryBoxRV":
                        return 16;
                    case "BerryBlast":
                        return 17;
                    case "Peachy":
                        return 18;
                    case "Bomb_purple":
                        return 19;
                    case "BananaSP_freeze":
                        return 20;
                    case "BananaSP_double":
                        return 21;
                    case "BananaSP_frenzy":
                        return 22
                    }
                    return 0
                }
                ,
                o.getSliceParticle = function(e) {
                    return this.poolJuiceParticle[e].length > 0 ? this.poolJuiceParticle[e].pop() : null == this.juiceParticle[e] ? null : u(this.juiceParticle[e])
                }
                ,
                o.putSlicedParticle = function(e, t) {
                    this.poolJuiceParticle[e].push(t)
                }
                ,
                o.getCriticaTrail = function() {
                    if (this.poolTrailCritical.length > 0) {
                        var e = this.poolTrailCritical.pop();
                        return e.getComponent(y).clear(),
                        e
                    }
                    return u(this.prefabTrailParticle)
                }
                ,
                o.putCriticalTrail = function(e) {
                    this.poolTrailCritical.push(e)
                }
                ,
                o.getCriticalParticle = function() {
                    if (this.poolCriticalParticle.length > 0) {
                        var e = this.poolCriticalParticle.pop();
                        return e.getChildByPath("particle_juiceSmall").getComponent(y).clear(),
                        e.getComponent(y).clear(),
                        e
                    }
                    return u(this.prefabCriticalParticle)
                }
                ,
                o.putCriticalParticle = function(e) {
                    this.poolCriticalParticle.push(e)
                }
                ,
                o.getBackParticle = function() {
                    return this.poolBackParticle.length > 0 ? this.poolBackParticle.pop() : u(this.prefabParticleBack)
                }
                ,
                o.getShadowParticle = function() {
                    return this.poolShadowParticle.length > 0 ? this.poolShadowParticle.pop() : u(this.prefabParticleShadow)
                }
                ,
                o.putBackParticle = function(e) {
                    this.poolBackParticle.push(e)
                }
                ,
                o.putShadowParticle = function(e) {
                    this.poolShadowParticle.push(e)
                }
                ,
                o.getTextFruitCombo = function() {
                    return this.textFruitCombos.length > 0 ? this.textFruitCombos.pop() : u(this.textFruitCombo)
                }
                ,
                o.putTextFruitcombo = function(e) {
                    this.textFruitCombos.push(e)
                }
                ,
                o.getParticleBombDeflect = function() {
                    return this.particleDeflects.length > 0 ? this.particleDeflects.pop() : u(this.particleBombDeflect)
                }
                ,
                o.putBombDeflect = function(e) {
                    this.particleDeflects.push(e)
                }
                ,
                o.getTextBerryBlast = function() {
                    return this.poolTextBerryBlast.length > 0 ? this.poolTextBerryBlast.pop() : u(this.textBerryBlast)
                }
                ,
                o.putTextBerryBlast = function(e) {
                    this.poolTextBerryBlast.push(e)
                }
                ,
                o.getTextDeflect = function() {
                    return this.textBombDeflects.length > 0 ? this.textBombDeflects.pop() : u(this.textBombDeflect)
                }
                ,
                o.putTextDeflect = function(e) {
                    this.textBombDeflects.push(e)
                }
                ,
                o.getTextCritical = function() {
                    return this.textFruitCriticals.length > 0 ? this.textFruitCriticals.pop() : u(this.textFruitCritical)
                }
                ,
                o.putTextCritical = function(e) {
                    this.textFruitCriticals.push(e)
                }
                ,
                o.convertWorldToUI = function(e) {
                    return this.mainCamera.convertToUINode(e, N.Instance.mainCanvas)
                }
                ,
                o.convertWorldToCanvas = function(e, t) {
                    return this.mainCamera.convertToUINode(e, t)
                }
                ,
                o.getWave = function() {
                    this.waveCounter >= 15 && (M.WaveDtMultiplier += .02);
                    var e = []
                      , a = 0
                      , n = [];
                    if (N.gameMode == N.MODE_CLASSIC)
                        n = this.waveList;
                    else if (N.gameMode == N.MODE_ZEN)
                        n = this.waveListZen;
                    else if (N.gameMode == N.MODE_ARCADE) {
                        if (this.waveCounter >= 2 && "" == this.specialBananaOnScreen) {
                            this.potentialBananas = ["BananaSP_freeze", "BananaSP_double", "BananaSP_frenzy"];
                            for (var i = this.potentialBananas.length - 1; i >= 0; i--) {
                                var r = this.potentialBananas[i];
                                ("BananaSP_freeze" == r && this.freezeDuration > 0 || "BananaSP_double" == r && this.doublePointDuration > 0 || "BananaSP_frenzy" == r && this.frenzyDuration > 0) && this.potentialBananas.splice(i, 1)
                            }
                            if (this.potentialBananas.length > 0) {
                                var o = (h(0, 2500) + this.lastNumber) % 2500;
                                this.lastNumber = o;
                                var c = 0 == this.potentialBananas.length ? 1e3 : 2 == this.potentialBananas.length ? 375 : 225;
                                if (N.RIG_BANANA_ARCADE_EASY_SPAWN && (o = 0),
                                o <= c) {
                                    var s = {
                                        vx: 0,
                                        vy: 9.5
                                    }
                                      , l = new m(0,0,-5 * this.spawnCount)
                                      , p = ["top", "left", "right"]
                                      , u = p[h(0, p.length)];
                                    "top" == u ? (s = {
                                        vx: 0,
                                        vy: -5
                                    },
                                    l.x = 0,
                                    l.y = 14) : "left" == u ? (s = {
                                        vx: 7.2,
                                        vy: 5.6
                                    },
                                    l.x = -18,
                                    l.y = 0) : "right" == u && (s = {
                                        vx: -7.2,
                                        vy: 5.6
                                    },
                                    l.x = 18,
                                    l.y = 0);
                                    var g = this.potentialBananas[h(0, this.potentialBananas.length)];
                                    this.specialBananaOnScreen = g,
                                    this.spawnFruit(g, 0, s, 0, l)
                                }
                            }
                        }
                        n = t.getInstance().frenzyDuration > 0 ? this.waveListArcadeFrenzy : this.waveListArcade
                    }
                    for (var f = 0; f < n.length; f++) {
                        var d = Number.MAX_VALUE;
                        n[f].maxWave && (d = n[f].maxWave),
                        this.waveCounter >= n[f].minWave && this.waveCounter < d && (a == n[f].minWave ? e.push(n[f]) : (a = n[f].minWave,
                        (e = []).push(n[f])))
                    }
                    var y = e[h(0, e.length)]
                      , S = {
                        a: "w",
                        t: N.getInstance().timerGameplay.toFixed(4),
                        i: y.id,
                        n: []
                    }
                      , C = 0;
                    this.spawnCount = 0;
                    for (var v = 0; v < y.fruitChance.length; v++) {
                        var w = "";
                        y.fruitChance[v].forcePosition && (w = y.fruitChance[v].forcePosition);
                        var P = y.fruitChance[v].fruits
                          , x = h(y.fruitChance[v].min, y.fruitChance[v].max + 1)
                          , I = y.fruitChance[v].between;
                        console.log("spawning wave: " + y.id + " on index: " + v + " for " + x + " fruits, interval: " + I),
                        S.n.push(x);
                        for (var F = [], B = [], R = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], T = R[h(0, R.length)], _ = 0; _ < x; _++) {
                            var A = P[_ % P.length];
                            "1F" == A && (A = this.getFruitNameFromIndex(T));
                            var D = _ * I;
                            0 == F.length && (F = [11, 9, 7, 5, 3, -3, -5, -7, -9, -11]),
                            0 == B.length && (B = [250, 300]);
                            h(0, F.length);
                            var E = b(-9, 9)
                              , L = h(0, B.length)
                              , W = B.splice(L, 1)[0];
                            if (E > 0 && (W *= -1),
                            0 == D)
                                if ("" == w)
                                    this.spawnFruit(A, E, null, y.id);
                                else {
                                    var O = {
                                        vx: 0,
                                        vy: 9.5
                                    }
                                      , z = new m(0,0,-5 * this.spawnCount);
                                    "left" == w ? (O = {
                                        vx: h(75, 90) / 10,
                                        vy: h(60, 75) / 10
                                    },
                                    z.x = -1 * h(18, 21),
                                    z.y = h(0, 25) / 10 * (h(0, 100) < 50 ? -1 : 1)) : "right" == w && (O = {
                                        vx: h(75, 90) / -10,
                                        vy: h(60, 75) / 10
                                    },
                                    z.x = h(18, 21),
                                    z.y = h(0, 25) / 10 * (h(0, 100) < 50 ? -1 : 1)),
                                    this.spawnFruit(A, 0, O, y.id, z)
                                }
                            else if ("" == w)
                                this.scheduleSpawnFruit(A, E, W, D, y.id);
                            else {
                                var j = {
                                    vx: 0,
                                    vy: 9.5
                                }
                                  , X = new m(0,0,-5 * this.spawnCount);
                                "left" == w ? (j = {
                                    vx: 9,
                                    vy: 7
                                },
                                X.x = -18,
                                X.y = 0) : "right" == w && (j = {
                                    vx: -9,
                                    vy: 7
                                },
                                X.x = 18,
                                X.y = 0),
                                this.scheduleSpawnFruit(A, E, W, D, y.id, X, j)
                            }
                        }
                        C < x * I && (C = x * I)
                    }
                    N.getInstance().gameData.g.push(S),
                    this.startTimer = y.delay + C + 2,
                    N.gameMode == N.MODE_ARCADE && (t.getInstance().frenzyDuration > 0 ? this.startTimer = y.delay + C : this.startTimer = y.delay + C + 1),
                    this.waveCounter++
                }
                ,
                o.getActiveFruit = function() {
                    return this.activeObject
                }
                ,
                o.reset = function() {
                    t.DATA_PEACH_ZEN.current = t.DATA_PEACH_ZEN.base,
                    this.freezeDuration = 0,
                    this.frenzyDuration = 0,
                    this.doublePointDuration = 0,
                    N.Instance.gameplayScreen.getChildByPath("doublePoints_topLabel").getComponent(d).play("doublePointLabel_out_insant"),
                    this.node.getChildByPath("particle_frenzySideLeft").active = !1,
                    this.node.getChildByPath("particle_frenzySideRight").active = !1,
                    t.getInstance().trySlowAllFruit(1),
                    M.BlitzDtMultiplier = 1,
                    this.timerToSpawnBananaArcade = 0,
                    this.specialBananaOnScreen = "",
                    this.fruitToSpawnList = [],
                    this.countdown = 3,
                    this.waveCounter = 0,
                    this.bombCounter = 0,
                    this.startTimer = 0,
                    this.nextScoreSpawnPomegranate = h(50, 151),
                    this.lastBananaSpawn = 0
                }
                ,
                o.scheduleSpawnFruit = function(e, t, a, n, i, r, o) {
                    void 0 === r && (r = null),
                    void 0 === o && (o = null),
                    this.fruitToSpawnList.push({
                        toSpawn: e,
                        x: t,
                        vx: a,
                        delay: n,
                        waveId: i,
                        position: r,
                        velocity: o
                    })
                }
                ,
                o.getFruitUI = function(e, t) {
                    var a = this.getFruitIndexFromName(e)
                      , n = this.getFruitFromPool(a);
                    return n.getComponent(z).fruitName = e,
                    n.getComponent(z).keyMenu = t,
                    n.getComponent(S).setLinearVelocity(new m(0,0,0)),
                    n.getComponent(S).useGravity = !1,
                    null != n.getComponent(M) && (n.getComponent(M).pausePhysics = !0),
                    n.scale = new m(3,3,3),
                    n
                }
                ,
                o.spawnFruit = function(e, a, n, i, r) {
                    void 0 === n && (n = null),
                    void 0 === i && (i = 0),
                    void 0 === r && (r = null);
                    var o = "R" == e;
                    "B" == e && (e = "Bomb");
                    var c = 0
                      , s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                    N.BERRYBLAST_POWERUP && !z.BERRYBLAST_ACTIVE && s.push(17),
                    c = o ? s[h(0, s.length)] : this.getFruitIndexFromName(e),
                    N.PEACHY_TIME && 13 != c && 15 != c && 17 != c && 18 != c && (N.gameMode == N.MODE_ZEN && N.getInstance().getZenTimer() > 4 || N.gameMode == N.MODE_ARCADE && N.getInstance().arcadeTimer > 4) && (t.DATA_PEACH_ZEN.current > h(0, 100) ? (t.DATA_PEACH_ZEN.current = Math.max(0, t.DATA_PEACH_ZEN.chance_decrease),
                    c = this.getFruitIndexFromName("Peachy")) : t.DATA_PEACH_ZEN.current += t.DATA_PEACH_ZEN.per_fruit_increase);
                    var l = this.getFruitFromPool(c);
                    if (this.activeObject.push(l),
                    l.getComponent(S).setLinearVelocity(new m(0,0,0)),
                    null != r ? l.setPosition(r) : l.setPosition(new m(a,-11,-5 * this.spawnCount)),
                    null != l.getComponent(z) && (l.getComponent(z).waveId = i),
                    null != l.getComponent(L) && (l.getComponent(L).waveId = i),
                    "Bomb" == e || "Bomb_purple" == e) {
                        if (null == n) {
                            var p = {
                                min: t.m_directionAngleVariation.min,
                                max: t.m_directionAngleVariation.max
                            }
                              , u = new C
                              , g = b(p.min, p.max);
                            a < 0 && (g *= -1),
                            C.fromAxisAngle(u, new m(0,0,-1), N.deg2rad(g));
                            var f = b(t.m_velocity.min, t.m_velocity.max)
                              , d = new m;
                            d = (d = m.transformQuat(d, m.UP, u)).multiplyScalar(f),
                            l.getComponent(M).setVelocity(d)
                        } else
                            l.getComponent(M).setVelocity(new m(n.vx,n.vy,0));
                        this.spawnCount++,
                        this.bombCounter += 1,
                        D.getInstance().playBombBGM(),
                        X.getInstance().play(X.SFX_BOMB_LAUNCH)
                    } else {
                        if (null == l.getComponent(z).particleShadow) {
                            var v = this.getShadowParticle();
                            v.setParent(l.getParent()),
                            v.active = !0,
                            v.setPosition(l.position),
                            v.getComponent(O).targetToFollow = l,
                            v.getComponent(y).play(),
                            l.getComponent(z).particleShadow = v
                        } else
                            l.getComponent(z).particleShadow.getComponent(y).play();
                        if (X.getInstance().play(X.SFX_FRUIT_LAUNCH),
                        null == l.getComponent(M) && l.addComponent(M),
                        null == n) {
                            var w = {
                                min: t.m_directionAngleVariation.min,
                                max: t.m_directionAngleVariation.max
                            }
                              , P = new C
                              , x = new m;
                            x = m.negate(x, m.FORWARD);
                            var I = b(w.min, w.max);
                            a < 0 && (I *= -1),
                            C.fromAxisAngle(P, x, N.deg2rad(I));
                            var F = b(t.m_velocity.min, t.m_velocity.max)
                              , B = new m;
                            B = (B = m.transformQuat(B, m.UP, P)).multiplyScalar(F),
                            l.getComponent(M).setVelocity(B)
                        } else
                            l.getComponent(M).setVelocity(new m(n.vx,n.vy,0));
                        this.spawnCount++
                    }
                }
                ,
                o.getFruitFromPool = function(e) {
                    var t;
                    return 0 == this.poolObject[e].length ? ((t = u(this.fruitFBXList[e])).setParent(this.node),
                    t.setScale(new m(3,3,3)),
                    t.addComponent(v)) : t = this.poolObject[e].pop(),
                    null != t.getComponent(z) ? t.getComponent(z).reset() : null != t.getComponent(L) && t.getComponent(L).reset(),
                    null != t.getComponent(M) && (t.getComponent(M).pausePhysics = !1),
                    t.getComponent(S).setLinearVelocity(new m(0,0,0)),
                    t.active = !0,
                    t
                }
                ,
                o.stopAllObject = function() {
                    this.tryPauseAllFruit()
                }
                ,
                o.tryPauseAllFruit = function() {
                    for (var e = this.activeObject.length - 1; e >= 0; e--) {
                        var t = this.activeObject[e];
                        null != t.getComponent(z) && t.getComponent(z).pausePhysic(),
                        null != t.getComponent(L) && t.getComponent(L).pausePhysic()
                    }
                }
                ,
                o.tryResumeAllPhysic = function() {
                    for (var e = this.activeObject.length - 1; e >= 0; e--) {
                        var t = this.activeObject[e];
                        null != t.getComponent(z) ? t.getComponent(z).resumePhysic() : null != t.getComponent(L) && t.getComponent(L).resumePhysic()
                    }
                }
                ,
                o.trySlashAllFruit = function() {
                    for (var e = this.activeObject.length - 1; e >= 0; e--) {
                        var t = this.activeObject[e];
                        if (null != t.getComponent(z)) {
                            var a = t.worldPosition
                              , n = (t.getComponentInChildren(w).mesh.struct.maxPosition.x - t.getComponentInChildren(w).mesh.struct.minPosition.x) * t.worldScale.x
                              , i = (t.getComponentInChildren(w).mesh.struct.maxPosition.y - t.getComponentInChildren(w).mesh.struct.minPosition.y) * t.worldScale.y
                              , r = {
                                x: a.x,
                                y: a.y,
                                width: n,
                                height: i
                            }
                              , o = h(0, 360);
                            t.getComponent(z).isPomegranate() ? t.getComponent(z).forceBurst(o) : t.getComponent(z).getSlashed(o, !1);
                            var c = t.getComponent(z).getFruitDetail();
                            "none" != c.splashTex && function() {
                                var e = W.getInstance().getSplash();
                                e.setParent(P("BladeCanvas"));
                                var a = new m(0,0,0);
                                W.getInstance().camera.worldToScreen(new m(r.x,r.y,0), a),
                                a.x /= x.getScaleX(),
                                a.y /= x.getScaleY(),
                                e.setRotationFromEuler(0, 0, o + 90),
                                e.getComponentInChildren(I).color = new F(t.getComponent(z).getFruitDetail().splashColor),
                                e.setWorldPosition(a),
                                e.active = !0,
                                e.getComponent(B).play("fruitSplash_spriteAnim"),
                                e.getComponent(B).once(d.EventType.FINISHED, (function() {
                                    e.getComponent(B).stop(),
                                    e.active = !1,
                                    W.getInstance().tryPutPoolSplash(e)
                                }
                                ));
                                for (var n = a, i = !1, s = h(c.minSplash, c.maxSplash + 1), l = function(e) {
                                    var a = W.getInstance().getSplat();
                                    a.setParent(P("CanvasBG/DojoBG/splatEffect"));
                                    var r = n.clone();
                                    r.x += 10 * h(-10, 10),
                                    r.y += 10 * h(-10, 10);
                                    var s = h(18, 25) / 10;
                                    "splash2" == c.splashTex ? (a.getComponentInChildren(I).spriteFrame = W.getInstance().splatSpriteFrame[h(3, 4)],
                                    a.scale = new m(.7,.7,1),
                                    a.setRotationFromEuler(0, 0, 0)) : h(0, 100) % 2 == 0 || i ? (a.getComponentInChildren(I).spriteFrame = W.getInstance().splatSpriteFrame[h(1, 2)],
                                    a.scale = new m(.7,.7,1),
                                    a.setRotationFromEuler(0, 0, 0),
                                    _(a.getChildByPath("assets")).delay(s).by(1, {
                                        scale: new m(0,.12,0)
                                    }).start()) : (i = !0,
                                    a.getComponentInChildren(I).spriteFrame = W.getInstance().splatSpriteFrame[h(5, 6)],
                                    a.scale = new m(-.7,.7,1),
                                    (r = n.clone()).x -= 200 * Math.cos(o * Math.PI / 180),
                                    r.y -= 100 * Math.sin(o * Math.PI / 180),
                                    a.setRotationFromEuler(0, 0, o)),
                                    a.getChildByPath("assets").scale = new m(1,1,1),
                                    a.getComponentInChildren(I).color = new F(t.getComponent(z).getFruitDetail().splashColor),
                                    a.setWorldPosition(r),
                                    a.active = !0,
                                    a.getComponent(I).color = new F(255,255,255,255),
                                    _(a).delay(s).by(1, {
                                        position: new m(0,2 * h(-10, -5),0)
                                    }).start(),
                                    _(a.getComponent(I)).delay(s).to(1, {
                                        color: new F(255,255,255,0)
                                    }).call((function() {
                                        a.active = !1,
                                        W.getInstance().tryPutPoolSplat(a)
                                    }
                                    )).start()
                                }, p = 0; p < s; p++)
                                    l()
                            }()
                        }
                    }
                }
                ,
                o.getTextPomegranateSlice = function() {
                    return null == this.textPomegranateSlice && (this.textPomegranateSlice = u(this.prefabTextPomegranateSlice)),
                    this.textPomegranateSlice
                }
                ,
                o.getTextPomegranateScore = function() {
                    return null == this.textPomegranateScore && (this.textPomegranateScore = u(this.prefabTextPomegranateScore)),
                    this.textPomegranateScore
                }
                ,
                o.getTextPeachyTime = function() {
                    return null == this.textPeachyTime && (this.textPeachyTime = u(this.prefabTextPeachyTime)),
                    this.textPeachyTime
                }
                ,
                o.getTextSpecificFruit = function() {
                    return u(this.prefabSpecificFruit)
                }
                ,
                o.clearActiveObject = function() {
                    for (var e = this.activeObject.length - 1; e >= 0; e--) {
                        var t = this.activeObject[e]
                          , a = t.getComponent(z);
                        null != a && a.reset(),
                        this.poolObject[this.getFruitIndexFromName(t.name)].push(t),
                        this.activeObject.splice(e, 1);
                        var n = t.position.clone();
                        n.y = -200,
                        t.setPosition(n)
                    }
                }
                ,
                o.getCrossFromPool = function() {
                    return 0 == this.poolCrosses.length ? u(this.prefabCross) : this.poolCrosses.pop()
                }
                ,
                o.showCross = function(e) {
                    var t = this
                      , a = this.getCrossFromPool();
                    a.active = !0,
                    a.setParent(N.Instance.gameplayScreen);
                    var n = this.convertWorldToUI(e)
                      , i = N.Instance.mainCanvas.getComponent(R).height;
                    n.y = -i / 2 + 25 + 32,
                    a.setPosition(n);
                    var r = a.getComponent(d);
                    r.play("cross_gameplay_show"),
                    r.on(d.EventType.FINISHED, (function() {
                        t.poolCrosses.push(a),
                        a.removeFromParent(),
                        a.active = !1
                    }
                    ), this, !0)
                }
                ,
                r(t, [{
                    key: "startTimer",
                    get: function() {
                        return this._startTimer
                    },
                    set: function(e) {
                        this._startTimer = e
                    }
                }, {
                    key: "poolPurpleBombText",
                    get: function() {
                        return this._poolPurpleBombText
                    },
                    set: function(e) {
                        this._poolPurpleBombText = e
                    }
                }, {
                    key: "poolPomegranateRay",
                    get: function() {
                        return this._poolPomegranateRay
                    },
                    set: function(e) {
                        this._poolPomegranateRay = e
                    }
                }, {
                    key: "activePomegranateRay",
                    get: function() {
                        return this._activePomegranateRay
                    },
                    set: function(e) {
                        this._activePomegranateRay = e
                    }
                }, {
                    key: "poolPomegranateRay2D",
                    get: function() {
                        return this._poolPomegranateRay2D
                    },
                    set: function(e) {
                        this._poolPomegranateRay2D = e
                    }
                }, {
                    key: "activePomegranateRay2D",
                    get: function() {
                        return this._activePomegranateRay2D
                    },
                    set: function(e) {
                        this._activePomegranateRay2D = e
                    }
                }, {
                    key: "poolBombRay",
                    get: function() {
                        return this._poolBombRay
                    },
                    set: function(e) {
                        this._poolBombRay = e
                    }
                }, {
                    key: "countdown",
                    get: function() {
                        return this._countdown
                    },
                    set: function(e) {
                        this._countdown = e
                    }
                }, {
                    key: "bombCounter",
                    get: function() {
                        return this._bombCounter
                    },
                    set: function(e) {
                        this._bombCounter = e
                    }
                }, {
                    key: "waveCounter",
                    get: function() {
                        return this._waveCounter
                    },
                    set: function(e) {
                        this._waveCounter = e
                    }
                }]),
                t
            }(T)).m_velocity = {
                min: 10.1,
                max: 11.5
            },
            ke.m_directionAngleVariation = {
                min: 0,
                max: 10
            },
            ke.fruitList = [{
                id: "AppleGreen",
                scale: 1.064,
                splashColor: "#FEDC35",
                alpha: 179,
                splashTex: "splash2",
                droplets: "JuicePineapple",
                impactSFX: "FruitImpactApple",
                minSplash: 2,
                maxSplash: 2
            }, {
                id: "Banana",
                scale: .95,
                splashTex: "none",
                droplets: "none",
                impactSFX: "FruitImpactMediumDry"
            }, {
                id: "Coconut",
                scale: 1.2413,
                splashColor: "#F9FFFF",
                alpha: 179,
                splashTex: "splash",
                droplets: "JuiceDragonFruit",
                impactSFX: "FruitImpactBigHollow",
                minSplash: 2,
                maxSplash: 4
            }, {
                id: "Kiwifruit",
                scale: .8866,
                splashColor: "#54AD10",
                alpha: 180,
                splashTex: "splash",
                droplets: "JuiceGreen",
                impactSFX: "FruitImpactSmallWet0",
                minSplash: 1,
                maxSplash: 4
            }, {
                id: "Lemon",
                scale: .9753,
                splashColor: "#FFEF3F",
                alpha: 180,
                splashTex: "splash",
                droplets: "JuicePineapple",
                impactSFX: "FruitImpactMediumWet0",
                minSplash: 3,
                maxSplash: 4
            }, {
                id: "Mango",
                scale: 1.1526,
                splashColor: "#FFB720",
                alpha: 180,
                splashTex: "splash",
                droplets: "JuiceMango",
                impactSFX: "FruitImpactMediumWet0",
                minSplash: 2,
                maxSplash: 4
            }, {
                id: "Orange",
                scale: 1.034,
                splashColor: "#FC7804",
                alpha: 180,
                splashTex: "splash",
                droplets: "JuiceOrange",
                impactSFX: "FruitImpactBigWet0",
                minSplash: 3,
                maxSplash: 4
            }, {
                id: "Peach",
                scale: 1.0108,
                splashColor: "#FFC51B",
                alpha: 180,
                splashTex: "splash",
                droplets: "JuiceMango",
                impactSFX: "FruitImpactMediumWet0",
                minSplash: 4,
                maxSplash: 4
            }, {
                id: "Pineapple",
                scale: 1.1526,
                splashColor: "#FFEF3F",
                alpha: 180,
                splashTex: "splash",
                droplets: "JuicePineapple",
                impactSFX: "FruitImpactBigWet0",
                minSplash: 2,
                maxSplash: 3
            }, {
                id: "Watermelon",
                scale: 1.33,
                splashColor: "#FB2618",
                alpha: 255,
                splashTex: "splash",
                droplets: "JuiceRed",
                impactSFX: "FruitImpactBigWet0",
                minSplash: 3,
                maxSplash: 4
            }, {
                id: "Starfruit",
                scale: .85,
                splashColor: "#fbff9e",
                alpha: 180,
                splashTex: "splash",
                droplets: "JuicePineapple",
                impactSFX: "FruitImpactBigWet0",
                minSplash: 2,
                maxSplash: 3
            }, {
                id: "Starfruit_half_top",
                scale: .85,
                splashColor: "#fbff9e",
                alpha: 180,
                splashTex: "splash",
                droplets: "JuicePineapple",
                impactSFX: "FruitImpactBigWet0",
                minSplash: 2,
                maxSplash: 3
            }, {
                id: "Starfruit_half_top_gray",
                scale: .85,
                splashTex: "none",
                droplets: "none",
                impactSFX: "FruitImpactBigWet0"
            }, {
                id: "Bomb",
                scale: 1,
                splashTex: "none",
                droplets: "none",
                impactSFX: "BombExplodeGameOver"
            }, {
                id: "AppleRed",
                scale: 1.064,
                splashColor: "#FEDC35",
                alpha: 179,
                splashTex: "splash2",
                droplets: "JuicePineapple",
                impactSFX: "FruitImpactApple",
                minSplash: 2,
                maxSplash: 2
            }, {
                id: "Pomegranate",
                scale: 1.38,
                splashColor: "#c80025",
                alpha: 179,
                splashTex: "slice12",
                droplets: "JuiceRed",
                impactSFX: "FruitImpactApple",
                minSplash: 1,
                maxSplash: 1
            }, {
                id: "MysteryBoxRV",
                scale: 1,
                splashTex: "none",
                droplets: "none",
                impactSFX: "FruitImpactMediumDry"
            }, {
                id: "BerryBlast",
                scale: 1.15,
                splashColor: "#FB2819",
                alpha: 179,
                splashTex: "splash2",
                droplets: "JuiceRed",
                impactSFX: "FruitImpactApple",
                minSplash: 1,
                maxSplash: 4
            }, {
                id: "Peachy",
                scale: 1.15,
                splashColor: "#FFC51B",
                alpha: 179,
                splashTex: "splash2",
                droplets: "JuiceRed",
                impactSFX: "FruitImpactApple",
                minSplash: 5,
                maxSplash: 4
            }, {
                id: "Bomb_purple",
                scale: 1,
                splashTex: "none",
                droplets: "none",
                impactSFX: "BombExplodeGameOver"
            }, {
                id: "BananaSP_freeze",
                scale: .95,
                splashTex: "none",
                droplets: "none",
                impactSFX: "FruitImpactMediumDry"
            }, {
                id: "BananaSP_double",
                scale: .95,
                splashTex: "none",
                droplets: "none",
                impactSFX: "FruitImpactMediumDry"
            }, {
                id: "BananaSP_frenzy",
                scale: .95,
                splashTex: "none",
                droplets: "none",
                impactSFX: "FruitImpactMediumDry"
            }],
            ke.PAUSE_SPAWNING = !1,
            ke.HOLD_ALL_HALF_SCHEDULER = !1,
            ke.DATA_PEACH_ZEN = {
                current: 0,
                base: 0,
                per_fruit_increase: .15,
                chance_decrease: -.35
            },
            ke.Instance = void 0,
            ye = t((de = ke).prototype, "fruitFBXList", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            be = t(de.prototype, "juiceParticle", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            Se = t(de.prototype, "prefabCriticalParticle", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Ce = t(de.prototype, "prefabTrailParticle", [J], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            ve = t(de.prototype, "prefabBombRay", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            we = t(de.prototype, "prefabCross", [Z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Pe = t(de.prototype, "prefabParticleFront", [Y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            xe = t(de.prototype, "prefabParticleBack", [K], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Ie = t(de.prototype, "prefabParticleShadow", [Q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Fe = t(de.prototype, "textFruitCombo", [q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Be = t(de.prototype, "textFruitCritical", [$], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Re = t(de.prototype, "textBerryBlast", [ee], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Te = t(de.prototype, "prefabBerryBlastShockwave", [te], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            _e = t(de.prototype, "prefabTextPomegranateScore", [ae], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Ae = t(de.prototype, "prefabTextPomegranateSlice", [ne], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            De = t(de.prototype, "prefabPomegranateRay", [ie], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Ee = t(de.prototype, "prefabPomegranateRay2D", [re], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Le = t(de.prototype, "prefabBombPurpleText", [oe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            We = t(de.prototype, "prefabTextPeachyTime", [ce], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Oe = t(de.prototype, "prefabPeachyBurst", [se], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            ze = t(de.prototype, "prefabSpecificFruit", [le], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Me = t(de.prototype, "textBombDeflect", [pe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Ne = t(de.prototype, "particleBombDeflect", [ue], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            je = t(de.prototype, "textFruitCount", [he], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Xe = t(de.prototype, "mainCamera", [me], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Ge = t(de.prototype, "forceFreezeSpawnBeforeEndGame", [ge], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 10
                }
            }),
            fe = de)) || fe));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/FruitPhysics.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Bomb.ts", "./Fruit.ts", "./FruitManager.ts"], (function(t) {
    "use strict";
    var i, e, o, n, r, l, s, c, u, a;
    return {
        setters: [function(t) {
            i = t.inheritsLoose
        }
        , function(t) {
            e = t.cclegacy,
            o = t._decorator,
            n = t.Vec3,
            r = t.Vec2,
            l = t.RigidBody,
            s = t.Component
        }
        , function(t) {
            c = t.Bomb
        }
        , function(t) {
            u = t.Fruit
        }
        , function(t) {
            a = t.FruitManager
        }
        ],
        execute: function() {
            var p, h;
            e._RF.push({}, "44361gMlj1Kjqm0hGPiPvAj", "FruitPhysics", void 0);
            var y = o.ccclass;
            o.property,
            t("FruitPhysics", y("FruitPhysics")(((h = function(t) {
                function e() {
                    for (var i, o = arguments.length, n = new Array(o), r = 0; r < o; r++)
                        n[r] = arguments[r];
                    return (i = t.call.apply(t, [this].concat(n)) || this).velocity = void 0,
                    i.isGameplay = !1,
                    i.pausePhysics = !1,
                    i.acceleration = 9.5 * e.OrthographicMutiplier,
                    i.m_repelForceFromOtherFruit = 10,
                    i
                }
                i(e, t);
                var o = e.prototype;
                return o.onLoad = function() {
                    this.velocity = new n(0,0,0)
                }
                ,
                o.start = function() {}
                ,
                e.resetMultiplier = function() {
                    e.DtMultiplier = 1,
                    e.BlitzDtMultiplier = 1,
                    e.ExtraDtMultiplier = 1,
                    e.WaveDtMultiplier = 1
                }
                ,
                o.update = function(t) {
                    if (!this.pausePhysics && this.isGameplay && this.node.active) {
                        if (t *= e.DtMultiplier * e.BlitzDtMultiplier * e.ExtraDtMultiplier * e.WaveDtMultiplier * e.PomegranateDtMultiplier,
                        this.velocity.y -= this.acceleration * t,
                        null != this.getComponent(c))
                            for (var i = 0; i < a.getInstance().getActiveFruit().length; i++) {
                                var o = a.getInstance().getActiveFruit()[i];
                                if (o.getComponent(e) != this && o.active && this.isTouching(o)) {
                                    var l = new r(o.position.x,o.position.y)
                                      , s = new r(this.node.position.x,this.node.position.y)
                                      , u = new r;
                                    (u = r.subtract(u, s, l)).normalize();
                                    var p = u.multiplyScalar(this.m_repelForceFromOtherFruit).multiplyScalar(t)
                                      , h = new n(p.x,p.y,0);
                                    this.velocity = this.velocity.add(h),
                                    console.log(this.velocity)
                                }
                            }
                        var y = new n(this.velocity.x * t,this.velocity.y * t,this.velocity.z * t);
                        y.x += this.node.worldPosition.x,
                        y.y += this.node.worldPosition.y,
                        y.z += this.node.worldPosition.z,
                        this.node.worldPosition = y.clone()
                    }
                }
                ,
                o.isTouching = function(t) {
                    if (null == this.getComponent(c) && null == this.getComponent(u))
                        return !1;
                    if (null == t.getComponent(c) && null == t.getComponent(u))
                        return !1;
                    var i = null == this.getComponent(c) ? this.getComponent(u).colliderRadius : this.getComponent(c).colliderRadius
                      , o = (null == t.getComponent(c) ? t.getComponent(u).colliderRadius : t.getComponent(c).colliderRadius) * e.OrthographicMutiplier + i * e.OrthographicMutiplier;
                    o *= o;
                    var n = new r(t.position.x,t.position.y)
                      , l = new r(this.node.position.x,this.node.position.y);
                    return r.squaredDistance(n, l) < o
                }
                ,
                o.reset = function() {
                    this.pausePhysics = !1
                }
                ,
                o.getVelocity = function() {
                    return this.velocity
                }
                ,
                o.setVelocity = function(t) {
                    this.isGameplay = !0,
                    this.velocity = t.clone(),
                    this.velocity = this.velocity.multiplyScalar(e.OrthographicMutiplier),
                    null != this.getComponent(l) && (this.getComponent(l).useGravity = !1)
                }
                ,
                e
            }(s)).DtMultiplier = 1,
            h.BlitzDtMultiplier = 1,
            h.ExtraDtMultiplier = 1,
            h.WaveDtMultiplier = 1,
            h.OrthographicMutiplier = 2.5,
            h.PomegranateDtMultiplier = 1,
            p = h)) || p);
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GameController.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ArcadeBonusBoardController.ts", "./BGMManager.ts", "./BladeData.ts", "./BlitzManager.ts", "./ControllerBlade.ts", "./Data.ts", "./Fruit.ts", "./FruitManager.ts", "./FruitPhysics.ts", "./LevelManager.ts", "./MissionManager.ts", "./PreloadScreen.ts", "./PopupLevelUp.ts", "./PopupMission.ts", "./SceneDeflectOffer.ts", "./SceneGameplay.ts", "./ScenePause.ts", "./ScenePopupBonusArcade.ts", "./ScenePopupPurchasePU.ts", "./SceneSelectMode.ts", "./SenseiSwagScene.ts", "./SFXManager.ts", "./TextCombo.ts", "./TextCritical.ts", "./TextDeflect.ts", "./UIMissionTutorial.ts", "./UIRing.ts", "./SceneHomescreen.ts", "./SceneResultScore.ts"], (function(e) {
    "use strict";
    var t, n, a, o, i, r, s, c, l, g, p, u, h, m, S, d, _, E, C, I, T, y, f, P, v, A, M, b, B, w, R, F, D, N, U, O, L, x, G, k, H, z, W, X, Y, Q, Z, K, V, j, J, q, $, ee, te, ne, ae, oe;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            n = e.inheritsLoose,
            a = e.initializerDefineProperty,
            o = e.assertThisInitialized,
            i = e.createClass
        }
        , function(e) {
            r = e.cclegacy,
            s = e._decorator,
            c = e.SpriteFrame,
            l = e.Node,
            g = e.Prefab,
            p = e.Material,
            u = e.Label,
            h = e.Vec3,
            m = e.resources,
            S = e.instantiate,
            d = e.Sprite,
            _ = e.Animation,
            E = e.ParticleSystem,
            C = e.UITransform,
            I = e.tween,
            T = e.randomRangeInt,
            y = e.UIOpacity,
            f = e.lerp,
            P = e.Vec4,
            v = e.Color,
            A = e.LabelOutline,
            M = e.Button,
            b = e.assetManager,
            B = e.Texture2D,
            w = e.Component
        }
        , function(e) {
            R = e.ArcadeBonusBoardController
        }
        , function(e) {
            F = e.BGMManager
        }
        , function(e) {
            D = e.BladeData
        }
        , function(e) {
            N = e.BlitzManager
        }
        , function(e) {
            U = e.ControllerBlade
        }
        , function(e) {
            O = e.Data
        }
        , function(e) {
            L = e.Fruit
        }
        , function(e) {
            x = e.FruitManager
        }
        , function(e) {
            G = e.FruitPhysics
        }
        , function(e) {
            k = e.LevelManager
        }
        , function(e) {
            H = e.MissionManager
        }
        , function(e) {
            z = e.PreloadScreen
        }
        , function(e) {
            W = e.PopupLevelUp
        }
        , function(e) {
            X = e.PopupMission
        }
        , function(e) {
            e.SceneDeflectOffer
        }
        , function(e) {
            Y = e.SceneGameplay
        }
        , function(e) {
            Q = e.ScenePause
        }
        , function(e) {
            Z = e.ScenePopupBonusArcade
        }
        , function(e) {
            K = e.ScenePopupPurchasePU
        }
        , function(e) {
            V = e.SceneSelectMode
        }
        , function(e) {
            j = e.SenseiSwagScene
        }
        , function(e) {
            J = e.SFXManager
        }
        , function(e) {
            q = e.TextCombo
        }
        , function(e) {
            $ = e.TextCritical
        }
        , function(e) {
            ee = e.TextDeflect
        }
        , function(e) {
            te = e.UIMissionTutorial
        }
        , function(e) {
            ne = e.UIRing
        }
        , function(e) {
            ae = e.SceneHomescreen
        }
        , function(e) {
            oe = e.SceneResultScore
        }
        ],
        execute: function() {
            var ie, re, se, ce, le, ge, pe, ue, he, me, Se, de, _e, Ee, Ce, Ie, Te, ye, fe, Pe, ve, Ae, Me, be, Be, we, Re, Fe, De, Ne, Ue, Oe, Le, xe, Ge, ke, He, ze, We, Xe;
            r._RF.push({}, "cc64cOlEZxLkafi0Pm+9Hpt", "GameController", void 0);
            var Ye = s.ccclass
              , Qe = s.property;
            e("GameController", (ie = Ye("GameController"),
            re = Qe({
                type: [c]
            }),
            se = Qe({
                type: l,
                displayName: "Blade Canvas"
            }),
            ce = Qe({
                type: l,
                displayName: "Main Canvas for text gameplay behind 3D"
            }),
            le = Qe({
                type: l,
                displayName: "Main Canvas for text gameplay"
            }),
            ge = Qe({
                type: l,
                displayName: "Main Canvas2"
            }),
            pe = Qe({
                type: l,
                displayName: "Main Canvas"
            }),
            ue = Qe({
                type: l,
                displayName: "Main Canvas Overlay"
            }),
            he = Qe({
                type: l,
                displayName: "Canvas Screenshot"
            }),
            me = Qe({
                type: l,
                displayName: "Main Screen 3D"
            }),
            Se = Qe({
                type: l,
                displayName: "Camera"
            }),
            de = Qe({
                type: l
            }),
            _e = Qe({
                type: l
            }),
            Ee = Qe({
                type: g,
                displayName: "Arcade top label"
            }),
            Ce = Qe({
                type: p
            }),
            Ie = Qe({
                type: p
            }),
            Te = Qe({
                type: p
            }),
            ye = Qe({
                type: p
            }),
            fe = Qe({
                type: u
            }),
            ie(((Xe = function(e) {
                function t() {
                    for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++)
                        i[r] = arguments[r];
                    return t = e.call.apply(e, [this].concat(i)) || this,
                    a(t, "iconFruitFact", Ae, o(t)),
                    a(t, "canvasBlade", Me, o(t)),
                    a(t, "canvasForTextBehind3D", be, o(t)),
                    a(t, "canvasForGameplayText", Be, o(t)),
                    a(t, "mainCanvas2", we, o(t)),
                    a(t, "mainCanvas", Re, o(t)),
                    a(t, "mainCanvasOverlay", Fe, o(t)),
                    a(t, "canvasScreenshot", De, o(t)),
                    a(t, "mainScreen", Ne, o(t)),
                    a(t, "camera", Ue, o(t)),
                    a(t, "loadingScreen", Oe, o(t)),
                    a(t, "homescreen", Le, o(t)),
                    a(t, "prefabArcadeTopLabel", xe, o(t)),
                    a(t, "matBestScoreBiasa", Ge, o(t)),
                    a(t, "matBestScoreNew", ke, o(t)),
                    a(t, "matZenTimerNormal", He, o(t)),
                    a(t, "matZenTimerTimeOut", ze, o(t)),
                    a(t, "labelLog", We, o(t)),
                    t.pomegranateTween = null,
                    t.screenState = 0,
                    t.gameState = 0,
                    t.freezeArcadeTopLabel = null,
                    t.frenzyArcadeTopLabel = null,
                    t.doubleArcadeTopLabel = null,
                    t.zenTimer = 0,
                    t.arcadeTimer = 0,
                    t.gameData = {},
                    t.timerGameplay = 0,
                    t.criticalCount = 0,
                    t.comboCount = 0,
                    t.missedFruitCount = 0,
                    t.berryBlastCount = 0,
                    t.peachyCount = 0,
                    t.pomegranateCount = 0,
                    t.useDeflect = !1,
                    t.useContinue = !1,
                    t.bananaSpecialCount = 0,
                    t.blitzCount = 0,
                    t.arcadeBombCount = 0,
                    t.spawnedPomegranateForArcade = !1,
                    t.targetRevive = 100,
                    t.havePlayRingOutArcade = !1,
                    t._countNotSendCustomUpdate = 0,
                    t._sessionRank = -1,
                    t._sessionBestScore = 0,
                    t._scoreArcadeToDouble = 0,
                    t._score = 0,
                    t._holdInput = !1,
                    t.lastFruitSlashedPosition = new h(0,0,0),
                    t._dieFromBomb = !1,
                    t._canRevive = !0,
                    t.breakCombo = !1,
                    t.combo = 0,
                    t.timerCombo = 0,
                    t.health = 3,
                    t.listUIFruit = [],
                    t._deflectCounter = 0,
                    t.counterSFXTickTock = 0,
                    t.timerSFXTickTock = 0,
                    t.backgroundChanged = !1,
                    t.startCalled = !1,
                    t.gameplayTimer = 0,
                    t.senseiSwagScreen = null,
                    t.settingScreen = null,
                    t.languageScreen = null,
                    t.finishRoundScreen = null,
                    t.selectRoundScreen = null,
                    t.selectModeScreen = null,
                    t.resultScreen = null,
                    t.gameplayScreen = null,
                    t.resultScore = null,
                    t.contPeachy = null,
                    t.contDeflect = null,
                    t.contBerryBlast = null,
                    t.particleExpUp = null,
                    t.particleJuiceStarfruit = null,
                    t.particleLifeUp = null,
                    t.particlePUGain = null,
                    t.particleTrailExpGain = null,
                    t.particleTrailStarfruit = null,
                    t.particleUnlockItem = null,
                    t.listPlayerGameplay = [],
                    t.totalPlayerInContext = 0,
                    t.totalPlayerFetchPerCalled = 100,
                    t.canPopulateListPlayerGameplay = !0,
                    t.isAnimFinished = !0,
                    t
                }
                n(t, e);
                var r = t.prototype;
                return r.getLastFruitSlashedPosition = function() {
                    return this.lastFruitSlashedPosition
                }
                ,
                r.setLastFruitSlashedPosition = function(e) {
                    if (0 != this.lastFruitSlashedPosition.x || 0 != this.lastFruitSlashedPosition.y || 0 != this.lastFruitSlashedPosition.z) {
                        var n = t.rad2deg(h.angle(this.lastFruitSlashedPosition, e));
                        this.breakCombo = n > 60 || n < -60
                    }
                    this.lastFruitSlashedPosition = e
                }
                ,
                t.getInstance = function() {
                    return t.Instance
                }
                ,
                r.onLoad = function() {
                    var e = this;
                    window.isPlaying = 0,
                    window.fastEnableAudio = function(e) {
                        J.getInstance().muteSFX(!e),
                        F.getInstance().muteBGM(!e)
                    }
                    .bind(this),
                    window.stopGameBGM = function() {
                        console.log("stopping music..."),
                        F.getInstance().stop()
                    }
                    ,
                    window.pauseGameBGM = function() {
                        console.log("pausing music..."),
                        F.getInstance().pause()
                    }
                    .bind(this),
                    window.playGameBGM = function(e) {
                        F.getInstance().stop(),
                        console.log("resuming [" + e + "] music"),
                        "gameplay" == e ? F.getInstance().play(F.BGM_AMB_ARENA) : "homescreen" == e && F.getInstance().play(F.BGM_MUSIC_MENU)
                    }
                    ,
                    t.Instance = this,
                    m.load("prefab screen/SFXManager", g, (function(t, n) {
                        S(n).setParent(e.node.parent)
                    }
                    )),
                    this.changeBackground(O.DATA_COSTUME_BACKGROUND[O.getInstance().bgUsed].background, (function() {
                        e.loadingScreen.active = !1,
                        e.backgroundChanged = !0,
                        e.startCalled && e.onStarted()
                    }
                    )),
                    this.changeBlade(O.DATA_COSTUME_BLADE[O.getInstance().bladeUsed].prefab)
                }
                ,
                r.start = function() {
                    ytgame.game.gameReady(),
                    this.freezeArcadeTopLabel = S(this.prefabArcadeTopLabel),
                    this.frenzyArcadeTopLabel = S(this.prefabArcadeTopLabel),
                    this.doubleArcadeTopLabel = S(this.prefabArcadeTopLabel),
                    this.preloadIconSenseiSwag(),
                    this.startCalled = !0,
                    this.loadParticle(),
                    t.saveData(),
                    this.backgroundChanged && this.onStarted()
                }
                ,
                r.getRankDegree = function(e) {
                    var t = parseInt(e) % 100;
                    if (t < 10 || t > 20) {
                        var n = t % 10;
                        if (1 == n)
                            return "st";
                        if (2 == n)
                            return "nd";
                        if (3 == n)
                            return "rd"
                    }
                    return "th"
                }
                ,
                r.changeBackground = function(e, t) {
                    var n = this;
                    void 0 === t && (t = function() {}
                    ),
                    m.load(e, c, (function(e, a) {
                        n.mainCanvas2.getChildByPath("DojoBG").getComponent(d).spriteFrame = a,
                        t()
                    }
                    ))
                }
                ,
                r.changeBlade = function(e) {
                    m.load(e, g, (function(e, t) {
                        var n = U.Instance.bladeTip.getChildByName("BladeTip")
                          , a = U.Instance.bladeTip.getChildByName("Particle0")
                          , o = U.Instance.trailGraphics
                          , i = S(t);
                        i.setParent(n.parent, !1),
                        i.name = "BladeTip",
                        n.name = "RemovedBlade",
                        n.destroy(),
                        a && (a.name = "RemovedParticle",
                        a.destroy());
                        var r = S(i.getComponent(D).trailPrefab);
                        U.Instance.trailGraphics = r,
                        r.parent = o.parent,
                        r.position = o.position,
                        o.destroy();
                        for (var s = i.getComponent(D).particlesPrefab, c = 0; c < s.length; c++) {
                            var l = S(s[c]);
                            l.parent = i.parent,
                            l.name = "Particle" + c
                        }
                        U.Instance.resetBladeData()
                    }
                    ))
                }
                ,
                r.preloadIconSenseiSwag = function() {
                    for (var e = 0; e < O.DATA_COSTUME_BLADE.length; e++) {
                        var t = O.DATA_COSTUME_BLADE[e];
                        m.preload(t.icon, c)
                    }
                    for (var n = 0; n < O.DATA_COSTUME_BACKGROUND.length; n++) {
                        var a = O.DATA_COSTUME_BACKGROUND[n];
                        m.preload(a.icon, c)
                    }
                }
                ,
                r.loadParticle = function() {
                    var e = this;
                    m.load("particle/particle_EXPUp", g, (function(t, n) {
                        var a = S(n);
                        a.setParent(e.node.parent),
                        e.particleExpUp = a
                    }
                    )),
                    m.load("particle/particle_trailEXPGain", g, (function(t, n) {
                        var a = S(n);
                        a.setParent(e.node.parent),
                        e.particleTrailExpGain = a
                    }
                    )),
                    m.load("particle/particle_lifeUp", g, (function(t, n) {
                        var a = S(n);
                        a.setParent(e.node.parent),
                        e.particleLifeUp = a
                    }
                    )),
                    m.load("particle/particle_PUgain", g, (function(t, n) {
                        var a = S(n);
                        a.setParent(e.node.parent),
                        e.particlePUGain = a
                    }
                    )),
                    m.load("particle/particle_trailStarfruit", g, (function(t, n) {
                        var a = S(n);
                        a.setParent(e.node.parent),
                        e.particleTrailStarfruit = a
                    }
                    ))
                }
                ,
                r.onStarted = function() {
                    1 == t.TUTORIAL_STATE ? (window.fast && (window.fast.gmg.create(),
                    window.fast.gmg.hide(),
                    window.fast.trackScreen("SCREEN_HOME"),
                    window.fast.info.qfun && (clearInterval(window.fastIvFs),
                    setTimeout(window.parent.showFsOverlay, 2e3))),
                    this.setScreenState(t.SCREEN_STATE_GAMEPLAY)) : (window.fast && (window.isPlaying = 0,
                    window.fast.gmg.create(),
                    window.fast.trackScreen("SCREEN_HOME"),
                    window.fast.info.qfun && (clearInterval(window.fastIvFs),
                    setTimeout(window.parent.showFsOverlay, 2e3))),
                    this.setScreenState(t.SCREEN_STATE_HOMESCREEN))
                }
                ,
                r.update = function(e) {
                    if (this.haveChangeDay())
                        if (t.last_played = (new Date).getTime(),
                        H.getInstance().generateMission(),
                        t.saveData(),
                        this.gameState == t.STATE_GAME_PAUSE)
                            Q.getInstance().refreshLabelMisi();
                        else if (t.getInstance().mainCanvasOverlay.getChildByPath("container_missionsPopup").active) {
                            t.getInstance().mainCanvasOverlay.getChildByPath("container_missionsPopup").getComponent(X).refreshMissionUI()
                        }
                    this.screenState == t.SCREEN_STATE_GAMEPLAY && (this.timerGameplay += e,
                    this.gameState == t.STATE_GAME_PLAYING && (this.timerSFXTickTock > 0 && (this.timerSFXTickTock -= e,
                    this.timerSFXTickTock <= 0 && (this.timerSFXTickTock = 0,
                    this.tryPlaySFXTickTock(this.counterSFXTickTock + 1))),
                    this.gameplayTimer += e,
                    t.gameMode == t.MODE_ZEN ? (t.getInstance().updateZenTimer(this.zenTimer - e),
                    this.zenTimer < 0 && (J.getInstance().play(J.SFX_TIME_RING_OUT),
                    t.getInstance().setGameState(t.STATE_GAME_LOSE),
                    0 == x.getInstance().activeObject.length && (t.getInstance().canRevive ? (t.getInstance().showOfferContinue(),
                    Q.getInstance().hideButtonPause()) : t.getInstance().showGameOver((function() {
                        t.getInstance().getScreenState() != t.SCREEN_STATE_RESULT_REWARD && t.getInstance().setScreenState(t.SCREEN_STATE_RESULT_REWARD)
                    }
                    ))))) : t.gameMode == t.MODE_ARCADE && (x.getInstance().freezeDuration <= 0 && t.getInstance().updateArcadeTimer(this.arcadeTimer - e),
                    this.arcadeTimer <= 0 && (this.havePlayRingOutArcade || (J.getInstance().play(J.SFX_TIME_RING_OUT),
                    this.havePlayRingOutArcade = !0),
                    0 == x.getInstance().activeObject.length && (x.getInstance().freezeDuration > 0 && x.getInstance().deactivateArcadeFreeze(),
                    x.getInstance().frenzyDuration > 0 && x.getInstance().deactivateArcadeFrenzy(),
                    x.getInstance().doublePointDuration > 0 && x.getInstance().deactivateArcadeDouble(),
                    this.spawnedPomegranateForArcade ? (Q.getInstance().holdButtonPause = !0,
                    Q.getInstance().hideButtonPause(),
                    t.getInstance().setGameState(t.STATE_GAME_LOSE),
                    t.getInstance().scheduleOnce((function() {
                        window.fast && (window.isPlaying = 0,
                        window.fast.trackEvent("EVENT_LEVELFAIL"));
                        var e = t.Instance.gameplayScreen.getChildByPath("cont_inGameBonusPopup").getComponent(Z);
                        e.show((function() {
                            e.tryShowBonus(1)
                        }
                        ), (function() {
                            t.getInstance().exitScreen((function() {
                                t.getInstance().getScreenState() != t.SCREEN_STATE_RESULT_REWARD && t.getInstance().setScreenState(t.SCREEN_STATE_RESULT_REWARD)
                            }
                            ))
                        }
                        ))
                    }
                    ), 2)) : (this.spawnedPomegranateForArcade = !0,
                    x.getInstance().spawnFruit("Pomegranate", 0, {
                        vx: 0,
                        vy: 10
                    }))))),
                    this.timerCombo > 0 && (this.timerCombo -= e,
                    (this.timerCombo <= 0 || this.breakCombo) && (this.breakCombo = !1,
                    this.timerCombo = 0,
                    this.combo >= 3 && this.showCombo(),
                    this.combo = 0))))
                }
                ,
                r.showPopUpLevelUp = function(e, n) {
                    t.getInstance().setHoldInput(!0),
                    J.getInstance().play(J.SFX_LEVEL_UP_BURST),
                    this.mainCanvasOverlay.getChildByPath("cont_LevelUpPopup").active = !0,
                    this.mainCanvasOverlay.getChildByPath("cont_LevelUpPopup").getComponent(_).play("popupLevelUp_in"),
                    this.mainCanvasOverlay.getChildByPath("cont_LevelUpPopup").getComponent(W).refresh(e, n),
                    this.scheduleOnce((function() {
                        J.getInstance().play(J.SFX_LEVEL_UP_UNLOCK)
                    }
                    ), 2.58)
                }
                ,
                r.playParticleAndChild = function(e) {
                    e.getComponent(E).play();
                    for (var t = 0; t < e.children.length; t++)
                        e.children[t].getComponent(E).play()
                }
                ,
                r.stopParticleAndChild = function(e) {
                    e.getComponent(E).stop();
                    for (var t = 0; t < e.children.length; t++)
                        e.children[t].getComponent(E).stop()
                }
                ,
                r.playExpIncrease = function(e, n, a, o, i, r, s, c, l, g) {
                    void 0 === l && (l = ""),
                    void 0 === g && (g = function() {}
                    ),
                    t.getInstance().setAnimXpFinished(!1),
                    t.getInstance().setHoldInput(!0);
                    var p = a.getComponent(C).width;
                    o.getComponent(C).width = p * r.curExp / r.totalExpToLevelUp,
                    i.getComponent(C).width = p * r.curExp / r.totalExpToLevelUp,
                    c.getComponent(u).string = "" + r.level;
                    var h = r.totalExpToLevelUp - r.curExp
                      , m = r.curExp + s
                      , S = Math.min(1, m / r.totalExpToLevelUp)
                      , d = t.Instance.particleTrailExpGain
                      , E = t.Instance.particleExpUp;
                    t.getInstance().stopParticleAndChild(d),
                    t.getInstance().stopParticleAndChild(E);
                    var T = a.getComponent(C).height;
                    t.getInstance().playParticleAndChild(d),
                    d.setWorldPosition(O.getInstance().convert2DPosTo3D(e.worldPosition));
                    var y = n.worldPosition;
                    I(d).to(1, {
                        worldPosition: O.getInstance().convert2DPosTo3D(y)
                    }).call((function() {
                        t.getInstance().stopParticleAndChild(d),
                        I(a.getComponent(C)).delay(.25).to(.25, {
                            height: 40
                        }).start(),
                        I(o.getComponent(C)).delay(.25).to(.25, {
                            height: 40
                        }).start(),
                        I(i.getComponent(C)).delay(.25).to(.25, {
                            height: 40
                        }).call((function() {
                            I(i.getComponent(C)).to(.5, {
                                width: p * S
                            }).call((function() {
                                S >= 1 && J.getInstance().play(J.SFX_XP_LAUNCH),
                                t.getInstance().stopParticleAndChild(E);
                                var m = function() {
                                    I(o.getComponent(C)).to("" != l ? 1.5 : .5, {
                                        width: p * S
                                    }).call((function() {
                                        I(a.getComponent(C)).to(.25, {
                                            height: T
                                        }).start(),
                                        I(o.getComponent(C)).to(.25, {
                                            height: T
                                        }).start(),
                                        I(i.getComponent(C)).to(.25, {
                                            height: T
                                        }).call((function() {
                                            S >= 1 ? (s -= h,
                                            O.getInstance().totalExp += h,
                                            r = k.getInstance().getDataLevelFromTotalExp(),
                                            t.getInstance().showPopUpLevelUp(r.level, (function() {
                                                r.level < k.getInstance().levelCap && s > 0 ? t.getInstance().playExpIncrease(e, n, a, o, i, r, s, c, l, g) : (t.getInstance().setHoldInput(!1),
                                                r.level >= k.getInstance().levelCap && (o.getComponent(C).width = p * r.curExp / r.totalExpToLevelUp,
                                                i.getComponent(C).width = p * r.curExp / r.totalExpToLevelUp,
                                                c.getComponent(u).string = "" + r.level))
                                            }
                                            ))) : (t.getInstance().setHoldInput(!1),
                                            O.getInstance().totalExp += s,
                                            r = k.getInstance().getDataLevelFromTotalExp(),
                                            o.getComponent(C).width = p * r.curExp / r.totalExpToLevelUp,
                                            i.getComponent(C).width = p * r.curExp / r.totalExpToLevelUp,
                                            c.getComponent(u).string = "" + r.level,
                                            t.getInstance().setAnimXpFinished(!0),
                                            g()),
                                            t.saveData()
                                        }
                                        )).start()
                                    }
                                    )).start()
                                };
                                if ("" != l) {
                                    if ("popup_mission" == l)
                                        t.getInstance().mainCanvasOverlay.getChildByPath("container_missionsPopup").getChildByPath("cont_Exp_Starfruit").getComponent(_).play("shurikenExp_anim"),
                                        t.getInstance().scheduleOnce((function() {
                                            m()
                                        }
                                        ), .25);
                                    else if ("select_mode" == l) {
                                        t.Instance.selectModeScreen.getChildByPath("cont_Exp_Starfruit").getComponent(_).play("shurikenExp_anim"),
                                        t.getInstance().scheduleOnce((function() {
                                            m()
                                        }
                                        ), .25)
                                    }
                                } else
                                    m()
                            }
                            )).start()
                        }
                        )).start();
                        var m = c.worldPosition.clone();
                        m.x += 30,
                        E.setWorldPosition(O.getInstance().convert2DPosTo3D(m)),
                        t.getInstance().playParticleAndChild(E)
                    }
                    )).start(),
                    this.scheduleOnce((function() {
                        J.getInstance().play(J.SFX_XP_INCREASE)
                    }
                    ), .25)
                }
                ,
                r.getAnimXpFinished = function() {
                    return this.isAnimFinished
                }
                ,
                r.setAnimXpFinished = function(e) {
                    this.isAnimFinished = e
                }
                ,
                r.moveToHomescreen = function() {
                    var e = this;
                    J.getInstance().play(J.SFX_SELECT),
                    this.exitScreen((function() {
                        e.setScreenState(t.SCREEN_STATE_HOMESCREEN)
                    }
                    ))
                }
                ,
                r.formatNumber = function(e) {
                    return e.toLocaleString("en-US")
                }
                ,
                r.rerandomFruitFact = function(e, n, a) {
                    void 0 === a && (a = -1),
                    -1 == a && (a = T(0, O.DATA_FRUIT_FACT.length));
                    var o = O.DATA_FRUIT_FACT[a];
                    return e.spriteFrame = t.getInstance().iconFruitFact[o.icon],
                    n.string = o.text,
                    a
                }
                ,
                r.showCritical = function() {
                    H.getInstance().tryAddProgress("GETCRITICAL", 1),
                    this.criticalCount += 1;
                    var e = x.getInstance().getTextCritical();
                    e.getComponent($).resetTimer(1),
                    e.active = !0;
                    var n = this.lastFruitSlashedPosition;
                    this.updateScore(this.score + 10),
                    J.getInstance().play(30),
                    e.getComponent(_).play("combo_in_out"),
                    e.setPosition(x.getInstance().convertWorldToCanvas(n, t.getInstance().canvasForGameplayText)),
                    e.setParent(t.Instance.canvasForGameplayText)
                }
                ,
                r.showSpecificFruitText = function(e, n) {
                    var a = x.getInstance().getTextSpecificFruit();
                    a.active = !0,
                    a.setScale(new h(0,0,0)),
                    a.getChildByPath("top_text").getComponent(u).string = e;
                    var o = x.getInstance().convertWorldToCanvas(n, t.getInstance().canvasForGameplayText);
                    t.getInstance().scheduleOnce((function() {
                        a.getComponent(_).play("combo_in_out_specific"),
                        a.getComponent(_).on(_.EventType.FINISHED, (function() {
                            a.active = !1,
                            a.destroy()
                        }
                        ), this, !0)
                    }
                    ), .1),
                    a.setPosition(o),
                    a.setParent(t.Instance.canvasForGameplayText)
                }
                ,
                r.showPeachTimeText = function(e) {
                    var n = x.getInstance().getTextPeachyTime();
                    n.active = !0,
                    n.setScale(new h(0,0,0)),
                    t.getInstance().scheduleOnce((function() {
                        n.getComponent(_).play("combo_in_out")
                    }
                    ), .1),
                    n.setPosition(x.getInstance().convertWorldToCanvas(e, t.getInstance().canvasForGameplayText)),
                    n.setParent(t.Instance.canvasForGameplayText)
                }
                ,
                r.showPomegranateTextScore = function(e, n, a) {
                    var o = x.getInstance().getTextPomegranateScore();
                    o.active = !0,
                    o.setRotationFromEuler(new h(0,0,a));
                    var i = x.getInstance().getTextPomegranateSlice().position.clone();
                    i.x += 120 * Math.sin(t.deg2rad(a)),
                    i.y -= 120 * Math.cos(t.deg2rad(a)),
                    o.setPosition(i),
                    o.setParent(t.Instance.canvasForTextBehind3D),
                    o.getChildByPath("text_score_1").getComponent(y).opacity = 255,
                    o.getChildByPath("text_score_2").getComponent(y).opacity = 255,
                    o.getChildByPath("text_score_3").getComponent(y).opacity = 255,
                    o.setScale(new h(0,0,0)),
                    o.getChildByPath("text_score_1").getComponent(u).string = "+ " + n,
                    o.getChildByPath("text_score_2").getComponent(u).string = "+ " + n,
                    o.getChildByPath("text_score_3").getComponent(u).string = "+ " + n
                }
                ,
                r.changePomergranateTextScore = function(e) {
                    var t = x.getInstance().getTextPomegranateScore();
                    t.active = !0,
                    t.setScale(new h(0,0,0));
                    var n = t.getChildByPath("text_score_1").getComponent(u).getMaterial(0);
                    if (e <= 17) {
                        var a = f(255, 255, e / 17) / 255
                          , o = f(219, 104, e / 17) / 255
                          , i = f(50, 31, e / 17) / 255
                          , r = 1;
                        n.setProperty("mainColor", new P(a,o,i,r)),
                        a = f(255, 255, e / 17) / 255,
                        o = f(244, 213, e / 17) / 255,
                        i = f(196, 194, e / 17) / 255,
                        r = 1,
                        n.setProperty("secondColor", new P(a,o,i,r)),
                        a = f(211, 211, e / 17) / 255,
                        o = f(150, 86, e / 17) / 255,
                        i = f(6, 59, e / 17) / 255,
                        r = 1,
                        n.setProperty("thirdColor", new P(a,o,i,r)),
                        a = f(255, 255, e / 17) / 255,
                        o = f(218, 118, e / 17) / 255,
                        i = f(46, 53, e / 17) / 255,
                        r = 1,
                        n.setProperty("fourthColor", new P(a,o,i,r)),
                        v.lerp(t.getChildByPath("text_score_1").getComponent(A).color, new v("#A97800"), new v("#AA2201"), e / 17)
                    } else {
                        var s = 18
                          , c = e - 17;
                        c > s && (c = s);
                        var l = f(255, 138, c / s) / 255
                          , g = f(104, 47, c / s) / 255
                          , p = f(31, 255, c / s) / 255
                          , m = 1;
                        n.setProperty("mainColor", new P(l,g,p,m)),
                        l = f(255, 220, c / s) / 255,
                        g = f(213, 194, c / s) / 255,
                        p = f(194, 255, c / s) / 255,
                        m = 1,
                        n.setProperty("secondColor", new P(l,g,p,m)),
                        l = f(211, 109, c / s) / 255,
                        g = f(86, 46, c / s) / 255,
                        p = f(59, 239, c / s) / 255,
                        m = 1,
                        n.setProperty("thirdColor", new P(l,g,p,m)),
                        l = f(255, 109, c / s) / 255,
                        g = f(118, 46, c / s) / 255,
                        p = f(53, 239, c / s) / 255,
                        m = 1,
                        n.setProperty("fourthColor", new P(l,g,p,m)),
                        v.lerp(t.getChildByPath("text_score_1").getComponent(A).color, new v("#AA2201"), new v("#3700AA"), c / s)
                    }
                    t.getChildByPath("text_score_1").getComponent(u).string = "+ " + e,
                    t.getChildByPath("text_score_2").getComponent(u).string = "+ " + e,
                    t.getChildByPath("text_score_3").getComponent(u).string = "+ " + e
                }
                ,
                r.showPomegranateTextSlice = function(e, n, a) {
                    var o = x.getInstance().getTextPomegranateSlice();
                    o.active = !0,
                    o.setRotationFromEuler(new h(0,0,a));
                    var i = x.getInstance().convertWorldToCanvas(e, t.getInstance().canvasForGameplayText)
                      , r = 250 * Math.cos(a)
                      , s = 250 * Math.sin(a);
                    i.y += Math.abs(s),
                    i.x -= Math.abs(r),
                    o.setPosition(i),
                    o.setParent(t.Instance.canvasForGameplayText),
                    o.getChildByPath("text_1").getComponent(y).opacity = 255,
                    o.getChildByPath("text_2").getComponent(y).opacity = 255,
                    o.getChildByPath("text_3").getComponent(y).opacity = 255,
                    o.setScale(new h(0,0,0)),
                    null != this.pomegranateTween && this.pomegranateTween.stop(),
                    this.pomegranateTween = I(o).to(.1, {
                        scale: new h(1,1,1)
                    }).start();
                    var c = "";
                    c = 1 == n ? "Slice!" : n + " Hits",
                    o.getChildByPath("text_1").getComponent(u).string = c,
                    o.getChildByPath("text_2").getComponent(u).string = c,
                    o.getChildByPath("text_3").getComponent(u).string = c
                }
                ,
                r.changePomergranateTextSlice = function(e) {
                    var t = x.getInstance().getTextPomegranateSlice();
                    t.setScale(new h(0,0,0)),
                    null != this.pomegranateTween && this.pomegranateTween.stop(),
                    this.pomegranateTween = I(t).to(.1, {
                        scale: new h(1,1,1)
                    }).start();
                    var n = "";
                    n = 0 == e ? "Slice!" : e + " Hits";
                    var a = t.getChildByPath("text_1").getComponent(u).getMaterial(0);
                    if (e <= 17) {
                        var o = f(255, 255, e / 17) / 255
                          , i = f(219, 104, e / 17) / 255
                          , r = f(50, 31, e / 17) / 255
                          , s = 1;
                        a.setProperty("mainColor", new P(o,i,r,s)),
                        o = f(255, 255, e / 17) / 255,
                        i = f(244, 213, e / 17) / 255,
                        r = f(196, 194, e / 17) / 255,
                        s = 1,
                        a.setProperty("secondColor", new P(o,i,r,s)),
                        o = f(211, 211, e / 17) / 255,
                        i = f(150, 86, e / 17) / 255,
                        r = f(6, 59, e / 17) / 255,
                        s = 1,
                        a.setProperty("thirdColor", new P(o,i,r,s)),
                        o = f(255, 255, e / 17) / 255,
                        i = f(218, 118, e / 17) / 255,
                        r = f(46, 53, e / 17) / 255,
                        s = 1,
                        a.setProperty("fourthColor", new P(o,i,r,s)),
                        v.lerp(t.getChildByPath("text_1").getComponent(A).color, new v("#A97800"), new v("#AA2201"), e / 17)
                    } else {
                        var c = 18
                          , l = e - 17;
                        l > c && (l = c);
                        var g = f(255, 138, l / c) / 255
                          , p = f(104, 47, l / c) / 255
                          , m = f(31, 255, l / c) / 255
                          , S = 1;
                        a.setProperty("mainColor", new P(g,p,m,S)),
                        g = f(255, 220, l / c) / 255,
                        p = f(213, 194, l / c) / 255,
                        m = f(194, 255, l / c) / 255,
                        S = 1,
                        a.setProperty("secondColor", new P(g,p,m,S)),
                        g = f(211, 109, l / c) / 255,
                        p = f(86, 46, l / c) / 255,
                        m = f(59, 239, l / c) / 255,
                        S = 1,
                        a.setProperty("thirdColor", new P(g,p,m,S)),
                        g = f(255, 109, l / c) / 255,
                        p = f(118, 46, l / c) / 255,
                        m = f(53, 239, l / c) / 255,
                        S = 1,
                        a.setProperty("fourthColor", new P(g,p,m,S)),
                        v.lerp(t.getChildByPath("text_1").getComponent(A).color, new v("#AA2201"), new v("#3700AA"), l / c)
                    }
                    t.getChildByPath("text_1").getComponent(u).string = n,
                    t.getChildByPath("text_2").getComponent(u).string = n,
                    t.getChildByPath("text_3").getComponent(u).string = n
                }
                ,
                r.showCombo = function() {
                    t.gameMode == t.MODE_ARCADE && (R.getInstance().comboCounter += 1,
                    N.getInstance().addFruitSliceCounter(this.combo)),
                    H.getInstance().tryAddProgress("COMBOTOTAL", 1),
                    H.getInstance().trySetProgress("FRUITCOMBO", this.combo),
                    this.comboCount += 1;
                    var e = x.getInstance().getTextFruitCombo();
                    e.getComponent(q).resetTimer(1),
                    e.active = !0;
                    var n = this.lastFruitSlashedPosition;
                    this.updateScore(this.score + this.combo),
                    e.setPosition(x.getInstance().convertWorldToCanvas(n, t.getInstance().canvasForGameplayText)),
                    e.setParent(t.Instance.canvasForGameplayText),
                    e.getComponent(q).updateText(this.combo)
                }
                ,
                r.showReduceScoreText = function(e) {
                    var n = x.getInstance().getPurpleBombTextFromPool();
                    n.active = !0,
                    n.setScale(new h(0,0,0)),
                    n.setPosition(x.getInstance().convertWorldToCanvas(e, t.getInstance().canvasForGameplayText)),
                    n.setParent(t.Instance.canvasForGameplayText),
                    n.getComponent(_).play("combo_in_out"),
                    n.getComponent(_).on(_.EventType.FINISHED, (function() {
                        x.getInstance().poolPurpleBombText.push(n)
                    }
                    ), this, !0)
                }
                ,
                r.showBerryBlastText = function(e) {
                    var n = x.getInstance().getTextBerryBlast();
                    n.active = !0,
                    n.setPosition(x.getInstance().convertWorldToCanvas(e, t.getInstance().canvasForGameplayText)),
                    n.setParent(t.Instance.canvasForGameplayText),
                    n.getComponent(_).play("combo_in_out"),
                    n.getComponent(_).on(_.EventType.FINISHED, (function() {
                        n.active = !1,
                        x.getInstance().putTextBerryBlast(n)
                    }
                    ), this, !0)
                }
                ,
                r.showDeflectText = function(e) {
                    var n = x.getInstance().getTextDeflect();
                    n.getComponent(ee).resetTimer(1),
                    n.active = !0,
                    n.setPosition(x.getInstance().convertWorldToCanvas(e, t.getInstance().canvasForGameplayText)),
                    n.setParent(t.Instance.canvasForGameplayText),
                    n.getChildByPath("text_none_left").active = !1,
                    n.getChildByPath("text_left").active = !1,
                    t.getInstance().deflectCounter <= 0 ? (n.getChildByPath("text_none_left").active = !0,
                    n.getChildByPath("text_none_left").getComponent(u).string = "NONE LEFT!") : (n.getChildByPath("text_left").active = !0,
                    n.getChildByPath("text_left").getComponent(u).string = t.getInstance().deflectCounter + " LEFT!"),
                    n.getComponent(_).play("deflect_text_in")
                }
                ,
                r.updateTimerCombo = function(e) {
                    this.timerCombo = e
                }
                ,
                r.getTimerCombo = function() {
                    return this.timerCombo
                }
                ,
                r.updateCombo = function(e) {
                    this.combo = e
                }
                ,
                r.getCombo = function() {
                    return this.combo
                }
                ,
                r.setGameState = function(e) {
                    this.gameState = e,
                    this.gameState == t.STATE_GAME_LOSE ? this.unscheduleAllCallbacks() : this.gameState == t.STATE_GAME_PAUSE ? x.getInstance().tryPauseAllFruit() : this.gameState == t.STATE_GAME_PLAYING && this.gameplayScreen.getComponent(Y).gameplayLeaderboard.getComponent(_).play("gameplayLeaderboards_in")
                }
                ,
                r.getGameState = function() {
                    return this.gameState
                }
                ,
                r.exitScreen = function(e) {
                    this.screenState == t.SCREEN_STATE_SELECT_MODE ? (t.Instance.selectModeScreen.getComponent(_).play("selectMode_out"),
                    t.Instance.selectModeScreen.getComponent(_).once(_.EventType.FINISHED, e)) : this.screenState == t.SCREEN_STATE_HOMESCREEN ? (this.homescreen.getComponent(_).play("homescreenP1_out"),
                    this.homescreen.getComponent(_).once(_.EventType.FINISHED, e)) : this.screenState == t.SCREEN_STATE_GAMEPLAY ? (t.Instance.gameplayScreen.getComponent(_).play("animation_hide_ui"),
                    t.Instance.gameplayScreen.getComponent(_).once(_.EventType.FINISHED, e)) : this.screenState == t.SCREEN_STATE_RESULT_REWARD ? (t.Instance.resultScore.getComponent(_).play("resultScoreEXP_out"),
                    t.Instance.resultScore.getComponent(_).once(_.EventType.FINISHED, e)) : this.screenState == t.SCREEN_STATE_SENSEI_SWAG ? null != t.Instance.senseiSwagScreen && (t.Instance.senseiSwagScreen.getComponent(_).play("sensei_out"),
                    t.Instance.senseiSwagScreen.getComponent(_).once(_.EventType.FINISHED, e)) : this.screenState == t.SCREEN_STATE_SETTING ? (t.Instance.settingScreen.getComponent(_).play("settings_out"),
                    t.Instance.settingScreen.getComponent(_).once(_.EventType.FINISHED, e)) : this.screenState == t.SCREEN_STATE_LANGUAGE && (t.Instance.languageScreen.getComponent(_).play("language_out"),
                    t.Instance.languageScreen.getComponent(_).once(_.EventType.FINISHED, e))
                }
                ,
                r.showBasePopUp = function(e, t, n) {
                    this.mainCanvasOverlay.getChildByPath("container_basePopup").active = !0,
                    this.mainCanvasOverlay.getChildByPath("container_basePopup").getComponent(_).play("popup_in");
                    var a = ""
                      , o = ""
                      , i = "";
                    "nudge_signal" == e ? (a = "SENDING SIGNAL",
                    o = "Your fruit ninja friends\nwill soon receive your signal and start challenging you!\n\nLet's get a head start and collect more scores!",
                    i = "PLAY NOW!") : "maximum_tournament" == e && (a = "INFORMATION",
                    o = "Maximum tournament\ncount reached!\n\nLet's complete existing\ntournaments first and collect\nthe prizes!",
                    i = "OK"),
                    this.mainCanvasOverlay.getChildByPath("container_basePopup/cont_Popup/popup/headerPopupWood/text_headerWood").getComponent(u).string = a,
                    this.mainCanvasOverlay.getChildByPath("container_basePopup/cont_Popup/popup/text_info").getComponent(u).string = o,
                    this.mainCanvasOverlay.getChildByPath("container_basePopup/cont_Popup/popup/ButtonOK/text_OK").getComponent(u).string = i;
                    var r = this.mainCanvasOverlay.getChildByPath("container_basePopup/cont_Popup/popup/headerPopupWood/TabCrossFolded")
                      , s = this.mainCanvasOverlay.getChildByPath("container_basePopup/cont_Popup/popup/ButtonOK");
                    r.hasEventListener(M.EventType.CLICK) && r.off(M.EventType.CLICK),
                    s.hasEventListener(M.EventType.CLICK) && s.off(M.EventType.CLICK),
                    r.on(M.EventType.CLICK, (function() {
                        J.getInstance().play(J.SFX_SELECT),
                        r.getComponent(M).interactable = !0,
                        n()
                    }
                    )),
                    s.on(M.EventType.CLICK, (function() {
                        J.getInstance().play(J.SFX_SELECT),
                        s.getComponent(M).interactable = !0,
                        t()
                    }
                    ))
                }
                ,
                r.hideBasePopUp = function(e) {
                    var t = this;
                    this.mainCanvasOverlay.getChildByPath("container_basePopup").active = !0,
                    this.mainCanvasOverlay.getChildByPath("container_basePopup").getComponent(_).play("popup_out"),
                    this.mainCanvasOverlay.getChildByPath("container_basePopup").getComponent(_).once(_.EventType.FINISHED, (function() {
                        t.mainCanvasOverlay.getChildByPath("container_basePopup").active = !1,
                        e()
                    }
                    ), this)
                }
                ,
                r.showPopUpInfoPowerUp = function(e) {
                    var n = this.mainCanvasOverlay.getChildByPath("popup_infoPU");
                    e && (n.active = !0),
                    n.getComponent(_).play(e ? "popup_infoPU_in" : "popup_infoPU_out"),
                    n.getComponent(_).on(_.EventType.FINISHED, (function() {
                        e || (n.active = !1,
                        t.getInstance().setHoldInput(!1))
                    }
                    ), this, !0)
                }
                ,
                r.showPopupPurchasePowerUp = function(e, n, a) {
                    void 0 === n && (n = ""),
                    void 0 === a && (a = function() {}
                    );
                    var o = this.mainCanvasOverlay.getChildByPath("popup_purchasePU");
                    e && (o.getComponent(K).setPowerUp(n),
                    o.active = !0),
                    o.getComponent(K).setOnBuy(a),
                    o.getComponent(_).play(e ? "popup_purchasePU_in" : "popup_purchasePU_out"),
                    o.getComponent(_).on(_.EventType.FINISHED, (function() {
                        e || (o.active = !1,
                        t.getInstance().setHoldInput(!1))
                    }
                    ), this, !0)
                }
                ,
                r.resetScreen = function(e) {
                    this.listUIFruit = [];
                    var t = e.getComponentsInChildren(ne);
                    console.log("set fruit"),
                    console.log(t.length);
                    for (var n = 0; n < t.length; n++)
                        t[n].node.active && this.listUIFruit.push(t[n].getFruit());
                    for (var a = 0; a < this.listUIFruit.length; a++) {
                        this.listUIFruit[a].getComponent(L).reset();
                        var o = this.listUIFruit[a].getComponent(G);
                        null != o && (o.pausePhysics = !0)
                    }
                }
                ,
                r.setScreenStateOnly = function(e) {
                    this.screenState = e
                }
                ,
                r.loadScreen = function(e, n) {
                    var a = this;
                    t.getInstance().setHoldInput(!0),
                    this.loadingScreen.active = !0,
                    e.loadPrefab((function() {
                        t.getInstance().setHoldInput(!1),
                        a.loadingScreen.active = !1,
                        n()
                    }
                    ))
                }
                ,
                r.loadAllManualEntriesProfpic = function(e, n) {
                    for (var a = 0, o = 0; o < e.length; o++)
                        t.loadImageWithoutExt(e[o].photo, (function() {
                            (a += 1) == e.length && n()
                        }
                        ))
                }
                ,
                r.setScreenState = function(e, n) {
                    var a = this;
                    if (void 0 === n && (n = function() {}
                    ),
                    e == t.SCREEN_STATE_HOMESCREEN ? window.isHomeScreen = !0 : window.isHomeScreen = !1,
                    this.screenState = e,
                    this.listUIFruit = [],
                    this.screenState != t.SCREEN_STATE_GAMEPLAY && F.getInstance().play(F.BGM_MUSIC_MENU),
                    this.homescreen.active = this.screenState == t.SCREEN_STATE_HOMESCREEN,
                    this.screenState == t.SCREEN_STATE_HOMESCREEN) {
                        this.homescreen.getComponent(ae).refresh(),
                        this.homescreen.getComponent(_).play("homescreenP1_in"),
                        F.getInstance().play(F.BGM_MUSIC_MENU),
                        this.dieFromBomb = !1;
                        for (var o = this.homescreen.getComponentsInChildren(ne), i = 0; i < o.length; i++)
                            this.listUIFruit.push(o[i].getFruit())
                    }
                    if (null != t.Instance.selectModeScreen) {
                        if (t.Instance.selectModeScreen.active = this.screenState == t.SCREEN_STATE_SELECT_MODE,
                        this.screenState == t.SCREEN_STATE_SELECT_MODE) {
                            var r = t.Instance.selectModeScreen.getComponent(V);
                            r.setFrom(V.from, V.mode, V.entries),
                            r.setTitle(V.title),
                            t.Instance.selectModeScreen.getComponent(_).play("selectMode_in");
                            var s = t.Instance.selectModeScreen.getComponentsInChildren(ne);
                            console.log("set fruit"),
                            console.log(s.length);
                            for (var c = 0; c < s.length; c++)
                                this.listUIFruit.push(s[c].getFruit())
                        }
                    } else
                        this.screenState == t.SCREEN_STATE_SELECT_MODE && this.loadScreen(z.dataPath.select_mode, (function() {
                            a.setScreenState(t.SCREEN_STATE_SELECT_MODE)
                        }
                        ));
                    if (null != t.Instance.settingScreen) {
                        if (t.Instance.settingScreen.active = this.screenState == t.SCREEN_STATE_SETTING,
                        this.screenState == t.SCREEN_STATE_SETTING) {
                            t.Instance.settingScreen.getComponent(_).play("settings_in");
                            var l = t.Instance.settingScreen.getComponentsInChildren(ne);
                            console.log("set fruit"),
                            console.log(l.length);
                            for (var g = 0; g < l.length; g++)
                                this.listUIFruit.push(l[g].getFruit())
                        }
                    } else
                        this.screenState == t.SCREEN_STATE_SETTING && this.loadScreen(z.dataPath.settings, (function() {
                            t.getInstance().setScreenState(t.SCREEN_STATE_SETTING)
                        }
                        ));
                    if (null != t.Instance.languageScreen ? (t.Instance.languageScreen.active = this.screenState == t.SCREEN_STATE_LANGUAGE,
                    this.screenState == t.SCREEN_STATE_LANGUAGE && t.Instance.languageScreen.getComponent(_).play("language_in")) : this.screenState == t.SCREEN_STATE_LANGUAGE && this.loadScreen(z.dataPath.language, (function() {
                        a.setScreenState(t.SCREEN_STATE_LANGUAGE)
                    }
                    )),
                    null != t.Instance.senseiSwagScreen) {
                        if (t.Instance.senseiSwagScreen.active = this.screenState == t.SCREEN_STATE_SENSEI_SWAG,
                        this.screenState == t.SCREEN_STATE_SENSEI_SWAG) {
                            j.Instance.playAnimation("sensei_in", (function() {
                                j.Instance.trySetFruit()
                            }
                            )),
                            t.Instance.senseiSwagScreen.getChildByPath("UI_atasSensei/StarfruitLabel/text_starfruitTop").getComponent(u).string = t.getInstance().formatNumber(parseInt(O.getInstance().starFruit.toFixed(0)));
                            var p = t.Instance.senseiSwagScreen.getComponentsInChildren(ne);
                            console.log("set fruit"),
                            console.log(p.length);
                            for (var h = 0; h < p.length; h++)
                                this.listUIFruit.push(p[h].getFruit())
                        }
                    } else
                        this.screenState == t.SCREEN_STATE_SENSEI_SWAG && this.loadScreen(z.dataPath.senseiswag, (function() {
                            t.getInstance().setScreenState(t.SCREEN_STATE_SENSEI_SWAG)
                        }
                        ));
                    if (null != t.Instance.gameplayScreen) {
                        if (t.Instance.gameplayScreen.active = this.screenState == t.SCREEN_STATE_GAMEPLAY,
                        this.screenState == t.SCREEN_STATE_GAMEPLAY) {
                            window.fast && (window.isPlaying = 1,
                            window.fast.gmg.hide(),
                            window.fast.trackEvent("EVENT_LEVELSTART")),
                            this.listPlayerGameplay = [],
                            this.canPopulateListPlayerGameplay = !0,
                            this.gameplayScreen.getComponent(Y).gameplayLeaderboard.resetForGameplay();
                            this.loadingScreen.active = !0,
                            this.gameplayScreen.getComponent(Y).gameplayLeaderboard.refresh(),
                            function() {
                                n(),
                                Y.getInstance().showIconBerry(!1),
                                Y.getInstance().showIconDeflect(!1),
                                Y.getInstance().showIconPeachTime(!1),
                                a.score = 0,
                                a.timerGameplay = 0,
                                t.getInstance().gameData = {
                                    d: 0,
                                    g: [],
                                    s: 0
                                },
                                t.prevBestScore = t.bestScore,
                                t.fruitMode = "normal";
                                t.getInstance().updateScore(0),
                                function() {
                                    a.loadingScreen.active = !1,
                                    "" != t.FORCE_FRUIT_MODE && (t.fruitMode = t.FORCE_FRUIT_MODE);
                                    var e = "READY";
                                    if (t.gameMode == t.MODE_ZEN ? (e = "",
                                    "greenapple" == t.fruitMode ? e = "Apple Party!\n" : "watermelon" == t.fruitMode ? e = "Watermelon Party!\n" : "pineapple" == t.fruitMode ? e = "Pineapple Party\n" : "orange" == t.fruitMode ? e = "Orange Party\n" : "coconut" == t.fruitMode && (e = "Coconut Party\n"),
                                    e += "90 seconds") : t.gameMode == t.MODE_ARCADE && (e = "60 seconds"),
                                    t.Instance.gameplayScreen.getChildByPath("text_game_start").getComponent(u).string = e,
                                    t.Instance.gameplayScreen.getChildByPath("text_game_start/text_filler").getComponent(u).string = e,
                                    t.Instance.gameplayScreen.getChildByPath("container_cross").active = t.gameMode == t.MODE_CLASSIC,
                                    t.Instance.gameplayScreen.getChildByPath("container_time").active = t.gameMode == t.MODE_ZEN || t.gameMode == t.MODE_ARCADE,
                                    "" != t.fruitMode && "normal" != t.fruitMode || (t.gameMode == t.MODE_CLASSIC ? H.getInstance().tryAddProgress("PLAYGAMESCLASSIC", 1) : t.gameMode == t.MODE_ZEN ? H.getInstance().tryAddProgress("PLAYGAMESZEN", 1) : t.gameMode == t.MODE_ARCADE && H.getInstance().tryAddProgress("PLAYGAMESARCADE", 1)),
                                    t.TUTORIAL_STATE >= 1 && t.TUTORIAL_STATE <= 3 ? (t.TUTORIAL_STATE = 1,
                                    t.getInstance().gameData = {
                                        d: 1,
                                        g: [],
                                        s: 0
                                    }) : t.TUTORIAL_STATE = 0,
                                    G.resetMultiplier(),
                                    a.havePlayRingOutArcade = !1,
                                    a.useDeflect = !1,
                                    a.useContinue = !1,
                                    a.criticalCount = 0,
                                    a.combo = 0,
                                    a.comboCount = 0,
                                    a.missedFruitCount = 0,
                                    a.berryBlastCount = 0,
                                    a.peachyCount = 0,
                                    a.pomegranateCount = 0,
                                    a.zenTimer = 90,
                                    a.gameplayTimer = 0,
                                    a.arcadeTimer = 60,
                                    a.bananaSpecialCount = 0,
                                    a.blitzCount = 0,
                                    a.arcadeBombCount = 0,
                                    a.timerSFXTickTock = 0,
                                    a.counterSFXTickTock = 0,
                                    a.spawnedPomegranateForArcade = !1,
                                    a.freezeArcadeTopLabel.setParent(null),
                                    a.freezeArcadeTopLabel.active = !1,
                                    a.frenzyArcadeTopLabel.setParent(null),
                                    a.frenzyArcadeTopLabel.active = !1,
                                    a.doubleArcadeTopLabel.setParent(null),
                                    a.doubleArcadeTopLabel.active = !1,
                                    a.canRevive = !1,
                                    a.dieFromBomb = !1,
                                    F.getInstance().play(F.BGM_AMB_ARENA),
                                    a.targetRevive = 100,
                                    t.getInstance().updateScore(0),
                                    t.getInstance().updateHealth(3),
                                    t.gameMode == t.MODE_ZEN ? t.getInstance().updateZenTimer(a.zenTimer) : t.gameMode == t.MODE_ARCADE && t.getInstance().updateZenTimer(a.arcadeTimer),
                                    t.Instance.gameplayScreen.getChildByPath("container_time/container/Freeze").getComponent(y).opacity = 0,
                                    t.Instance.gameplayScreen.getChildByPath("FreezeOverlay").getComponent(y).opacity = 0,
                                    t.Instance.gameplayScreen.getChildByPath("DoublePointOverlay").getComponent(y).opacity = 0,
                                    a.breakCombo = !1,
                                    R.getInstance().reset(),
                                    N.getInstance().reset(),
                                    x.getInstance().reset(),
                                    a.setGameState(t.STATE_GAME_COUNTDOWN),
                                    a.deflectCounter = 0,
                                    t.PEACHY_TIME = !1,
                                    t.BERRYBLAST_POWERUP = !1,
                                    V.EQUIP_BB && (O.getInstance().inventoryPUBerryBlast -= 1,
                                    t.getInstance().useBerryBlastPowerUp()),
                                    t.gameMode == t.MODE_CLASSIC) {
                                        t.counterWithoutWatchFreePowerup >= 2 && (0 == t.TUTORIAL_STATE || 4 == t.TUTORIAL_STATE) && !V.EQUIP_DB && V.EQUIP_BB,
                                        V.EQUIP_DB && (O.getInstance().inventoryPUDeflect -= 1,
                                        t.getInstance().useDeflectPowerUp()),
                                        V.EQUIP_DB || V.EQUIP_BB || (t.counterWithoutWatchFreePowerup += 1),
                                        J.getInstance().play(J.SFX_GAMESTART);
                                        var n = t.Instance.gameplayScreen.getComponent(_);
                                        n.play("animation_ready_go"),
                                        n.on(_.EventType.FINISHED, (function() {
                                            t.getInstance().setGameState(t.STATE_GAME_PLAYING),
                                            0 == t.TUTORIAL_STATE && Q.getInstance().showButtonPause()
                                        }
                                        ), a, !0),
                                        1 == t.TUTORIAL_STATE && (te.getInstance().show(),
                                        te.getInstance().resetLabel(1))
                                    } else if (t.gameMode == t.MODE_ZEN) {
                                        t.counterWithoutWatchFreePowerup >= 2 && (0 == t.TUTORIAL_STATE || 4 == t.TUTORIAL_STATE) && !V.EQUIP_BB && V.EQUIP_PT,
                                        V.EQUIP_PT || V.EQUIP_BB || (t.counterWithoutWatchFreePowerup += 1),
                                        V.EQUIP_PT && (O.getInstance().inventoryPUPeachyTime -= 1,
                                        t.getInstance().usePeachTimePowerUp()),
                                        J.getInstance().play(J.SFX_GAMESTART);
                                        var o = t.Instance.gameplayScreen.getComponent(_);
                                        o.play("animation_ready_go"),
                                        o.on(_.EventType.FINISHED, (function() {
                                            t.getInstance().setGameState(t.STATE_GAME_PLAYING),
                                            Q.getInstance().showButtonPause()
                                        }
                                        ), a, !0)
                                    } else if (t.gameMode == t.MODE_ARCADE) {
                                        t.counterWithoutWatchFreePowerup >= 2 && (0 == t.TUTORIAL_STATE || 4 == t.TUTORIAL_STATE) && !V.EQUIP_BB && !V.EQUIP_PT && V.EQUIP_DB,
                                        V.EQUIP_PT || V.EQUIP_BB || V.EQUIP_DB || (t.counterWithoutWatchFreePowerup += 1),
                                        V.EQUIP_DB && (O.getInstance().inventoryPUDeflect -= 1,
                                        t.getInstance().useDeflectPowerUp()),
                                        V.EQUIP_PT && (O.getInstance().inventoryPUPeachyTime -= 1,
                                        t.getInstance().usePeachTimePowerUp()),
                                        J.getInstance().play(J.SFX_GAMESTART);
                                        var i = t.Instance.gameplayScreen.getComponent(_);
                                        i.play("animation_ready_go"),
                                        i.on(_.EventType.FINISHED, (function() {
                                            t.getInstance().setGameState(t.STATE_GAME_PLAYING),
                                            Q.getInstance().showButtonPause()
                                        }
                                        ), a, !0)
                                    }
                                    V.EQUIP_BB = !1,
                                    V.EQUIP_DB = !1,
                                    V.EQUIP_PT = !1,
                                    t.saveData()
                                }()
                            }()
                        }
                    } else
                        this.screenState == t.SCREEN_STATE_GAMEPLAY && this.loadScreen(z.dataPath.gameplay, (function() {
                            t.Instance.setScreenState(t.SCREEN_STATE_GAMEPLAY)
                        }
                        ));
                    if (null != this.resultScore && (this.resultScore.active = this.screenState == t.SCREEN_STATE_RESULT_REWARD),
                    this.screenState == t.SCREEN_STATE_RESULT_REWARD && (this.resultScore.getComponent(_).play("resultScoreEXP_in"),
                    this.resultScore.getComponent(_).once(_.EventType.FINISHED, (function() {
                        a.resultScore.getComponent(oe).doPlayStartAnimation()
                    }
                    ))),
                    this.screenState != t.SCREEN_STATE_SENSEI_SWAG)
                        for (var m = 0; m < this.listUIFruit.length; m++) {
                            this.listUIFruit[m].getComponent(L).reset();
                            var S = this.listUIFruit[m].getComponent(G);
                            null != S && (S.pausePhysics = !0)
                        }
                }
                ,
                r.shuffle = function(e) {
                    for (var t, n = e.length; 0 != n; ) {
                        t = Math.floor(Math.random() * n),
                        n--;
                        var a = [e[t], e[n]];
                        e[n] = a[0],
                        e[t] = a[1]
                    }
                    return e
                }
                ,
                r.useBerryBlastPowerUp = function() {
                    t.BERRYBLAST_POWERUP = !0,
                    Y.getInstance().showIconBerry(!0)
                }
                ,
                r.useDeflectPowerUp = function() {
                    t.getInstance().deflectCounter = 3,
                    Y.getInstance().showIconDeflect(!0)
                }
                ,
                r.usePeachTimePowerUp = function() {
                    t.PEACHY_TIME = !0,
                    Y.getInstance().showIconPeachTime(!0)
                }
                ,
                r.isPwfRoundEnded = function(e) {
                    var n = 0 == e.length;
                    if (e.length > 0) {
                        var a = "{}" != e[0].getExtraData();
                        if (1 == e.length)
                            if (a) {
                                var o = JSON.parse(e[0].getExtraData());
                                if (null == o.roundStarted)
                                    n = !0;
                                else {
                                    var i = o.roundStarted;
                                    n = (new Date).getTime() - i >= t.ROUND_DURATION_IN_MILLIS
                                }
                            } else
                                n = !0;
                        else if (2 == e.length) {
                            var r = "{}" != e[1].getExtraData();
                            if (a || r) {
                                var s = 0;
                                if (a) {
                                    var c = JSON.parse(e[0].getExtraData());
                                    null != c.roundStarted && (s = c.roundStarted)
                                }
                                if (r) {
                                    var l = JSON.parse(e[1].getExtraData());
                                    null != l.roundStarted && (s = Math.max(l.roundStarted, s))
                                }
                                if (0 == s)
                                    n = !0;
                                else {
                                    var g = s;
                                    n = (new Date).getTime() - g >= t.ROUND_DURATION_IN_MILLIS
                                }
                            } else
                                n = !0
                        }
                    }
                    return n
                }
                ,
                r.getScreenState = function() {
                    return this.screenState
                }
                ,
                r.getHealth = function() {
                    return this.health
                }
                ,
                r.getBestScore = function() {
                    return "solo" == t.context_type ? t.bestScore : this.sessionBestScore
                }
                ,
                r.setBestScore = function(e) {
                    "solo" == t.context_type ? t.bestScore = e : this.sessionBestScore = e
                }
                ,
                r.updateScore = function(e) {
                    if (t.gameMode == t.MODE_ARCADE && x.getInstance().doublePointDuration > 0)
                        return this.scoreArcadeToDouble += e - this.score,
                        this.scoreArcadeToDouble = Math.max(0, this.scoreArcadeToDouble),
                        void (t.Instance.gameplayScreen.getChildByPath("doublePoints_topLabel/ArcadeDoublePointsBacking/text_doubleIncrement").getComponent(u).string = this.scoreArcadeToDouble + "");
                    this.score = Math.max(0, e),
                    this.gameplayScreen.getComponent(Y).gameplayLeaderboard.refresh(),
                    -1 != x.getInstance().nextScoreSpawnPomegranate && this.score >= x.getInstance().nextScoreSpawnPomegranate && t.gameMode == t.MODE_CLASSIC && !L.POMEGRANATE_ACTIVE && x.getInstance().spawnFruit("Pomegranate", 9 * (T(0, 100) < 50 ? -1 : 1)),
                    t.bestScore = Math.max(t.bestScore, this.score),
                    this.score >= this.targetRevive && (this.targetRevive += 100,
                    t.gameMode == t.MODE_CLASSIC && this.getHealth() < 3 && this.updateHealth(this.getHealth() + 1, !0))
                }
                ,
                r.getZenTimer = function() {
                    return this.zenTimer
                }
                ,
                r.updateZenTimer = function(e) {
                    this.zenTimer = e,
                    e = Math.ceil(e);
                    var n = Math.floor(e % 3600 / 60)
                      , a = Math.floor(e % 60);
                    t.Instance.gameplayScreen.getChildByPath("container_time/container/text_time").getComponent(u).string = n + ":" + (a < 10 ? "0" : "") + a,
                    e > 10 && (t.Instance.gameplayScreen.getChildByPath("container_time/container/text_time").getComponent(u).material = this.matZenTimerNormal),
                    e > 10 ? (t.Instance.gameplayScreen.getChildByPath("container_time").getComponent(_).stop(),
                    t.Instance.gameplayScreen.getChildByPath("container_time").getComponent(y).opacity = 255) : e <= 10 && e > 3 ? t.Instance.gameplayScreen.getChildByPath("container_time").getComponent(_).getState("timer_zen_timeout").isPlaying || (t.Instance.gameplayScreen.getChildByPath("container_time").getComponent(_).play("timer_zen_timeout"),
                    this.tryPlaySFXTickTock(1)) : e > 0 && e <= 3 ? t.Instance.gameplayScreen.getChildByPath("container_time").getComponent(_).getState("timer_zen_timeout_x2").isPlaying || t.Instance.gameplayScreen.getChildByPath("container_time").getComponent(_).play("timer_zen_timeout_x2") : (t.Instance.gameplayScreen.getChildByPath("container_time").getComponent(_).stop(),
                    t.Instance.gameplayScreen.getChildByPath("container_time").getComponent(y).opacity = 255)
                }
                ,
                r.updateArcadeTimer = function(e) {
                    this.arcadeTimer = e,
                    e = Math.max(0, Math.ceil(e));
                    var n = Math.floor(e % 3600 / 60)
                      , a = Math.floor(e % 60);
                    t.Instance.gameplayScreen.getChildByPath("container_time/container/text_time").getComponent(u).string = n + ":" + (a < 10 ? "0" : "") + a,
                    e > 10 && (t.Instance.gameplayScreen.getChildByPath("container_time/container/text_time").getComponent(u).material = this.matZenTimerNormal),
                    e > 10 ? (t.Instance.gameplayScreen.getChildByPath("container_time").getComponent(_).stop(),
                    t.Instance.gameplayScreen.getChildByPath("container_time").getComponent(y).opacity = 255) : e <= 10 && e > 3 ? t.Instance.gameplayScreen.getChildByPath("container_time").getComponent(_).getState("timer_zen_timeout").isPlaying || (t.Instance.gameplayScreen.getChildByPath("container_time").getComponent(_).play("timer_zen_timeout"),
                    this.tryPlaySFXTickTock(1)) : e > 0 && e <= 3 ? t.Instance.gameplayScreen.getChildByPath("container_time").getComponent(_).getState("timer_zen_timeout_x2").isPlaying || t.Instance.gameplayScreen.getChildByPath("container_time").getComponent(_).play("timer_zen_timeout_x2") : (t.Instance.gameplayScreen.getChildByPath("container_time").getComponent(_).stop(),
                    t.Instance.gameplayScreen.getChildByPath("container_time").getComponent(y).opacity = 255)
                }
                ,
                r.tryPlaySFXTickTock = function(e) {
                    this.counterSFXTickTock = e;
                    var n = null;
                    if (t.gameMode == t.MODE_ZEN)
                        n = this.zenTimer;
                    else {
                        if (t.gameMode != t.MODE_ARCADE)
                            return;
                        n = this.arcadeTimer
                    }
                    n > 10 || n <= 0 || (e % 2 == 1 ? J.getInstance().play(J.SFX_TIME_TICK) : J.getInstance().play(J.SFX_TIME_TOCK),
                    this.timerSFXTickTock = .25)
                }
                ,
                r.updateHealth = function(e, n) {
                    void 0 === n && (n = !1),
                    this.health = e;
                    for (var a = 1; a <= 3; a++) {
                        var o = t.Instance.gameplayScreen.getChildByPath("container_cross/crosses/cross_" + a + "/cross_red")
                          , i = t.Instance.particleLifeUp
                          , r = t.Instance.gameplayScreen.getChildByPath("container_cross/crosses/cross_" + a).getComponent(_);
                        !o.active && a > this.health ? (o.active = !0,
                        r.play("cross_show")) : a <= this.health && (r.play("cross_recovered"),
                        n && (J.Instance.play(J.SFX_EXTRA_LIFE),
                        i.active = !0,
                        i.position = O.getInstance().convert2DPosTo3D(o.worldPosition),
                        i.getComponent(E).play(),
                        i.getChildByPath("p_impact").getComponent(E).play(),
                        i.getChildByPath("p_ring").getComponent(E).play()))
                    }
                }
                ,
                r.showOfferContinue = function() {
                    t.getInstance().canRevive = !1,
                    t.Instance.gameplayScreen.getChildByPath("bg_container_continue").active = !0,
                    t.Instance.gameplayScreen.getChildByPath("bg_container_continue").getComponent(_).play("bg_container_continue_show"),
                    t.Instance.gameplayScreen.getChildByPath("container_continue").active = !0,
                    t.Instance.gameplayScreen.getChildByPath("container_continue").getComponent(_).play("continue_in")
                }
                ,
                r.showGameOver = function(e) {
                    this.gameplayScreen.getComponent(Y).gameplayLeaderboard.getComponent(_).play("gameplayLeaderboards_out"),
                    F.getInstance().stop(),
                    J.getInstance().play(J.SFX_GAMEOVER),
                    Q.getInstance().holdButtonPause = !0;
                    var n = t.Instance.gameplayScreen.getComponent(_);
                    n.play("animation_game_over"),
                    n.on(_.EventType.FINISHED, (function() {
                        Q.getInstance().hideButtonPause(),
                        t.getInstance().gameData.s = t.getInstance().score,
                        console.log(t.getInstance().gameData),
                        e()
                    }
                    ), this, !0),
                    window.fast && (window.isPlaying = 0,
                    window.fast.gmg.unhide(),
                    window.fast.trackEvent("EVENT_LEVELFAIL"))
                }
                ,
                r.setHoldInput = function(e) {
                    this.holdInput = e,
                    this.holdInput && U.getInstance().forceTouchEnd()
                }
                ,
                r.playAgainSolo = function() {
                    t.getInstance().setHoldInput(!1),
                    V.setFrom("result", "", []),
                    V.setTitle("Solo Play"),
                    t.context_type = "solo",
                    V.setOnSlash((function() {
                        t.getInstance().setHoldInput(!0),
                        t.context_type = "solo",
                        t.getInstance().exitScreen((function() {
                            t.getInstance().setHoldInput(!1),
                            t.getInstance().setScreenState(t.SCREEN_STATE_GAMEPLAY)
                        }
                        ))
                    }
                    )),
                    t.getInstance().setScreenState(t.SCREEN_STATE_SELECT_MODE)
                }
                ,
                r.showBlackBG = function(e) {
                    var n = t.getInstance().mainCanvasOverlay.getChildByPath("black_background").getComponent(_);
                    n.stop(),
                    e ? n.play("black_background_in") : n.play("black_background_out")
                }
                ,
                r.ImageToDataURL = function(e) {
                    var t = document.createElement("canvas")
                      , n = t.getContext("2d");
                    return t.width = e.width,
                    t.height = e.height,
                    null == n || n.drawImage(e.data, 0, 0, e.width, e.height),
                    t.toDataURL()
                }
                ,
                t.protect = function(e) {
                    for (var t = "", n = 0; n < e.length; n++)
                        t += String.fromCharCode(170 ^ e.charCodeAt(n));
                    return t
                }
                ,
                t.saveData = function() {
                    var e = {}
                      , n = 0;
                    t.TUTORIAL_STATE >= 1 && t.TUTORIAL_STATE <= 3 && (n = 1),
                    e = {
                        tutorial_state: n,
                        solo_best_score: t.bestScore,
                        star_fruit: O.getInstance().starFruit,
                        bg_used: O.getInstance().bgUsed,
                        blade_used: O.getInstance().bladeUsed,
                        bg_unlocked: O.getInstance().unlockedBG,
                        blade_unlocked: O.getInstance().unlockedBlade,
                        have_created_shortcut: t.haveCreatedShortcut,
                        inventory_pu_deflect: O.getInstance().inventoryPUDeflect,
                        inventory_pu_berryblast: O.getInstance().inventoryPUBerryBlast,
                        inventory_pu_peachytime: O.getInstance().inventoryPUPeachyTime,
                        list_mission: H.getInstance().generateMissionDataToSave(),
                        last_played: t.last_played,
                        total_exp: O.getInstance().totalExp,
                        sfx_muted: J.isMuted,
                        bgm_muted: F.isMuted
                    };
                    var a = t.protect(JSON.stringify(e));
                    ytgame.game.saveData(a).then(function() {
                        console.log("progress saved"),
                        console.log(t.protect(a)),
                        localStorage.setItem("FruitNinjaSave", (t.protect(a)))
                    }
                    .bind(this))
                }
                ,
                r.haveChangeDay = function() {
                    var e = new Date(t.last_played);
                    e.setHours(0),
                    e.setMinutes(0),
                    e.setSeconds(0),
                    e.setMilliseconds(0);
                    var n = new Date;
                    return n.setHours(0),
                    n.setMinutes(0),
                    n.setSeconds(0),
                    n.setMilliseconds(0),
                    e < n
                }
                ,
                t.loadImage = function(e, n) {
                    t.loadImageWithoutExt(e, n)
                }
                ,
                t.loadImageWithoutExt = function(e, n) {
                    "" == e ? m.load("AvatarWatermelonSliced/spriteFrame", c, (function(e, t) {
                        n(t)
                    }
                    )) : null == t.jsonProfilePicture[e] ? b.loadRemote(e, {
                        ext: ".png"
                    }, (function(a, o) {
                        var i = new c
                          , r = new B;
                        r.image = o,
                        i.texture = r,
                        t.jsonProfilePicture[e] = i,
                        n(i)
                    }
                    )) : n(t.jsonProfilePicture[e])
                }
                ,
                r.sortEntries = function(e, t) {
                    void 0 === t && (t = !1);
                    var n = [];
                    if (t) {
                        for (var a = 0; a < e.length; a++) {
                            var o = e[a].getPlayer().getName()
                              , i = e[a].getPlayer().getPhoto()
                              , r = e[a].getPlayer().getID()
                              , s = e[a].getScore()
                              , c = e[a].getRank();
                            n.push({
                                id: r,
                                name: o,
                                photo: i,
                                score: s,
                                rank: c
                            })
                        }
                        return n
                    }
                    if (e.length <= 2) {
                        for (var l = 0, g = 0; g < e.length; g++) {
                            var p = JSON.parse(e[g].getExtraData());
                            p.roundStarted && (l = Math.max(l, p.roundStarted))
                        }
                        for (var u = 0; u < e.length; u++) {
                            var h = e[u].getPlayer().getName()
                              , m = e[u].getPlayer().getPhoto()
                              , S = e[u].getPlayer().getID()
                              , d = 0
                              , _ = JSON.parse(e[u].getExtraData());
                            _.lastUpdated && _.bestScore && l > 0 && _.lastUpdated >= l && (d = _.bestScore),
                            n.push({
                                id: S,
                                name: h,
                                photo: m,
                                score: d,
                                rank: 0
                            })
                        }
                    } else
                        for (var E = 0; E < e.length; E++) {
                            var C = e[E].getPlayer().getName()
                              , I = e[E].getPlayer().getPhoto()
                              , T = e[E].getPlayer().getID()
                              , y = e[E].getScore();
                            n.push({
                                id: T,
                                name: C,
                                photo: I,
                                score: y,
                                rank: 0
                            })
                        }
                    for (var f = 0; f < n.length; f++)
                        for (var P = f + 1; P < n.length; P++)
                            if (n[P].score > n[f].score) {
                                var v = n[P];
                                n[P] = n[f],
                                n[f] = v
                            }
                    for (var A = 0; A < n.length; A++)
                        n[A].rank = A + 1;
                    return n
                }
                ,
                r.playStarfruitIncrement = function(e) {
                    if (e < 10)
                        this.scheduleOnce((function() {
                            J.getInstance().play(J.SFX_UI_STARFRUIT_INCREMENT)
                        }
                        ), .1);
                    else
                        for (var t = Math.min(Math.floor(e / 10), 10), n = .3 / t, a = .1, o = 0; o < t; o++)
                            this.scheduleOnce((function() {
                                J.getInstance().play(J.SFX_UI_STARFRUIT_INCREMENT)
                            }
                            ), a),
                            a += n
                }
                ,
                r.playStarfruitSpend = function(e) {
                    if (e < 10)
                        this.scheduleOnce((function() {
                            J.getInstance().play(J.SFX_UI_STARFRUIT_SPEND)
                        }
                        ), .1);
                    else
                        for (var t = Math.min(Math.floor(e / 10), 10), n = .4 / t, a = 0, o = 0; o < t; o++)
                            this.scheduleOnce((function() {
                                J.getInstance().play(J.SFX_UI_STARFRUIT_SPEND)
                            }
                            ), a),
                            a += n
                }
                ,
                r.getSecondToNextDay = function() {
                    var e = new Date
                      , t = new Date;
                    return t.setDate(t.getDate() + 1),
                    t.setHours(0),
                    t.setMinutes(0),
                    t.setSeconds(0),
                    (t.getTime() - e.getTime()) / 1e3
                }
                ,
                r.secondToString = function(e) {
                    var t = Math.floor(e / 86400)
                      , n = Math.floor(e % 86400 / 3600)
                      , a = Math.floor(e % 3600 / 60)
                      , o = Math.floor(e % 60)
                      , i = "";
                    return t > 0 ? i = t + "D " + n + "H" : n > 0 ? i = n + "H " + a + "M" : a > 0 ? i = a + "M " + o + "S" : o > 0 && (i = o + "S"),
                    i
                }
                ,
                t.deg2rad = function(e) {
                    return e * (Math.PI / 180)
                }
                ,
                t.rad2deg = function(e) {
                    return e * (180 / Math.PI)
                }
                ,
                t.stringFormat = function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                        n[a - 1] = arguments[a];
                    return e.replace(/{(\d+)}/g, (function(e, t) {
                        return void 0 !== n[t] ? n[t] : e
                    }
                    ))
                }
                ,
                i(t, [{
                    key: "countNotSendCustomUpdate",
                    get: function() {
                        return this._countNotSendCustomUpdate
                    },
                    set: function(e) {
                        this._countNotSendCustomUpdate = e
                    }
                }, {
                    key: "sessionRank",
                    get: function() {
                        return this._sessionRank
                    },
                    set: function(e) {
                        this._sessionRank = e
                    }
                }, {
                    key: "sessionBestScore",
                    get: function() {
                        return this._sessionBestScore
                    },
                    set: function(e) {
                        this._sessionBestScore = e
                    }
                }, {
                    key: "scoreArcadeToDouble",
                    get: function() {
                        return this._scoreArcadeToDouble
                    },
                    set: function(e) {
                        this._scoreArcadeToDouble = e
                    }
                }, {
                    key: "score",
                    get: function() {
                        return this._score
                    },
                    set: function(e) {
                        this._score = e
                    }
                }, {
                    key: "holdInput",
                    get: function() {
                        return this._holdInput
                    },
                    set: function(e) {
                        this._holdInput = e
                    }
                }, {
                    key: "dieFromBomb",
                    get: function() {
                        return this._dieFromBomb
                    },
                    set: function(e) {
                        this._dieFromBomb = e
                    }
                }, {
                    key: "canRevive",
                    get: function() {
                        return this._canRevive
                    },
                    set: function(e) {
                        this._canRevive = e
                    }
                }, {
                    key: "deflectCounter",
                    get: function() {
                        return this._deflectCounter
                    },
                    set: function(e) {
                        this._deflectCounter = e
                    }
                }]),
                t
            }(w)).FORCE_TUTORIAL = !1,
            Xe.FORCE_NO_CONNECTED_FRIENDS = !1,
            Xe.FORCE_FRUIT_MODE = "",
            Xe.isServerLocal = !1,
            Xe.RIG_STARFRUIT = !1,
            Xe.RIG_NO_SAVE_DATA = !1,
            Xe.RIG_NO_LOAD_DATA = !1,
            Xe.RIG_ALWAYS_GENERATE_NEW_MISSION = !1,
            Xe.RIG_BANANA_ARCADE_EASY_SPAWN = !1,
            Xe.RIG_MISSION_SPECIFIC = !1,
            Xe.RIG_MISSION_AUTO_COMPLETE = !1,
            Xe.ROUND_DURATION_IN_MILLIS = 2592e5,
            Xe.RIG_EXP_RECEIVED = 0,
            Xe.entryPoint = null,
            Xe.counterWithoutWatchFreePowerup = 0,
            Xe.BERRYBLAST_POWERUP = !1,
            Xe.PEACHY_TIME = !1,
            Xe.MODE_CLASSIC = 0,
            Xe.MODE_ZEN = 1,
            Xe.MODE_ARCADE = 2,
            Xe.gameMode = 0,
            Xe.fruitMode = "",
            Xe.loadedImage = {},
            Xe.Instance = null,
            Xe.haveCreatedShortcut = !1,
            Xe.context_type = "solo",
            Xe.start_context_on_solo = !1,
            Xe.connectedPlayer = [],
            Xe.TUTORIAL_STATE = 0,
            Xe.last_played = 0,
            Xe.IMMUNE = !1,
            Xe.SCREEN_STATE_HOMESCREEN = 0,
            Xe.SCREEN_STATE_GAMEPLAY = 1,
            Xe.SCREEN_STATE_SENSEI_SWAG = 3,
            Xe.SCREEN_STATE_SETTING = 4,
            Xe.SCREEN_STATE_LANGUAGE = 5,
            Xe.SCREEN_STATE_SELECT_MODE = 6,
            Xe.SCREEN_STATE_RESULT_REWARD = 7,
            Xe.STATE_GAME_COUNTDOWN = 0,
            Xe.STATE_GAME_PLAYING = 1,
            Xe.STATE_GAME_LOSE = 2,
            Xe.STATE_GAME_PAUSE = 3,
            Xe.countSeenResult = 0,
            Xe.bestScore = 0,
            Xe.prevBestScore = 0,
            Xe.jsonProfilePicture = {},
            Ae = t((ve = Xe).prototype, "iconFruitFact", [re], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            Me = t(ve.prototype, "canvasBlade", [se], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            be = t(ve.prototype, "canvasForTextBehind3D", [ce], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Be = t(ve.prototype, "canvasForGameplayText", [le], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            we = t(ve.prototype, "mainCanvas2", [ge], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Re = t(ve.prototype, "mainCanvas", [pe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Fe = t(ve.prototype, "mainCanvasOverlay", [ue], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            De = t(ve.prototype, "canvasScreenshot", [he], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Ne = t(ve.prototype, "mainScreen", [me], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Ue = t(ve.prototype, "camera", [Se], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Oe = t(ve.prototype, "loadingScreen", [de], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Le = t(ve.prototype, "homescreen", [_e], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            xe = t(ve.prototype, "prefabArcadeTopLabel", [Ee], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Ge = t(ve.prototype, "matBestScoreBiasa", [Ce], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            ke = t(ve.prototype, "matBestScoreNew", [Ie], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            He = t(ve.prototype, "matZenTimerNormal", [Te], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            ze = t(ve.prototype, "matZenTimerTimeOut", [ye], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            We = t(ve.prototype, "labelLog", [fe], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Pe = ve)) || Pe));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GameplayLeaderboard.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameController.ts", "./GameplayLeaderboardLabel.ts"], (function(e) {
    "use strict";
    var r, t, a, o, n, i, l, s, c, p;
    return {
        setters: [function(e) {
            r = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            a = e.initializerDefineProperty,
            o = e.assertThisInitialized
        }
        , function(e) {
            n = e.cclegacy,
            i = e._decorator,
            l = e.Node,
            s = e.Component
        }
        , function(e) {
            c = e.GameController
        }
        , function(e) {
            p = e.GameplayLeaderboardLabel
        }
        ],
        execute: function() {
            var u, d, f, y, b;
            n._RF.push({}, "37ef5WoF5dC9oZA/ECHwG5h", "GameplayLeaderboard", void 0);
            var m = i.ccclass
              , h = i.property;
            e("GameplayLeaderboard", (u = m("GameplayLeaderboard"),
            d = h({
                type: [l]
            }),
            u((b = r((y = function(e) {
                function r() {
                    for (var r, t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                        n[i] = arguments[i];
                    return r = e.call.apply(e, [this].concat(n)) || this,
                    a(r, "labelRank", b, o(r)),
                    r
                }
                t(r, e);
                var n = r.prototype;
                return n.start = function() {}
                ,
                n.resetForGameplay = function() {
                    this.refresh()
                }
                ,
                n.refresh = function() {
                    var e = this.labelRank[0].getComponent(p);
                    e.setAsPlayer(),
                    e.setBestScore(c.getInstance().getBestScore()),
                    e.setScore(c.getInstance().score)
                }
                ,
                r
            }(s)).prototype, "labelRank", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            f = y)) || f));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/GameplayLeaderboardLabel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var r, t, a, i, o, n, l, c;
    return {
        setters: [function(e) {
            r = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            a = e.initializerDefineProperty,
            i = e.assertThisInitialized
        }
        , function(e) {
            o = e.cclegacy,
            n = e._decorator,
            l = e.Label,
            c = e.Component
        }
        ],
        execute: function() {
            var s, p, y, u, b, d, f, h, S;
            o._RF.push({}, "f770c98ah1IZJzia0BNr6Da", "GameplayLeaderboardLabel", void 0);
            var m = n.ccclass
              , v = n.property;
            e("GameplayLeaderboardLabel", (s = m("GameplayLeaderboardLabel"),
            p = v({
                type: l
            }),
            y = v({
                type: l
            }),
            u = v({
                type: l
            }),
            s((f = r((d = function(e) {
                function r() {
                    for (var r, t = arguments.length, o = new Array(t), n = 0; n < t; n++)
                        o[n] = arguments[n];
                    return r = e.call.apply(e, [this].concat(o)) || this,
                    a(r, "playerName", f, i(r)),
                    a(r, "playerScore", h, i(r)),
                    a(r, "playerBestScore", S, i(r)),
                    r
                }
                t(r, e);
                var o = r.prototype;
                return o.start = function() {}
                ,
                o.setAsPlayer = function() {
                    this.playerScore.node.active = !0,
                    this.playerBestScore.node.active = !0
                }
                ,
                o.setAsFirstRank = function() {
                    this.playerScore.node.active = !0,
                    this.playerBestScore.node.active = !1
                }
                ,
                o.setAsOtherPlayer = function() {
                    this.playerScore.node.active = !0,
                    this.playerBestScore.node.active = !1
                }
                ,
                o.setScore = function(e) {
                    this.playerScore.string = "" + e
                }
                ,
                o.setBestScore = function(e) {
                    this.playerBestScore.string = "Best: " + e
                }
                ,
                o.setName = function(e) {
                    this.playerName.string = e
                }
                ,
                r
            }(c)).prototype, "playerName", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            h = r(d.prototype, "playerScore", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            S = r(d.prototype, "playerBestScore", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            b = d)) || b));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/HalfFruit.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./FruitManager.ts"], (function(t) {
    "use strict";
    var i, r, e, n, a, l;
    return {
        setters: [function(t) {
            i = t.inheritsLoose
        }
        , function(t) {
            r = t.cclegacy,
            e = t._decorator,
            n = t.Vec3,
            a = t.Component
        }
        , function(t) {
            l = t.FruitManager
        }
        ],
        execute: function() {
            var c;
            r._RF.push({}, "2905aHYljFEkaWSnI7TcP1+", "HalfFruit", void 0);
            var s = e.ccclass;
            e.property,
            t("HalfFruit", s("HalfFruit")(c = function(t) {
                function r() {
                    for (var i, r = arguments.length, e = new Array(r), n = 0; n < r; n++)
                        e[n] = arguments[n];
                    return (i = t.call.apply(t, [this].concat(e)) || this).particleTrail = null,
                    i.timer = 0,
                    i
                }
                i(r, t);
                var e = r.prototype;
                return e.start = function() {}
                ,
                e.update = function(t) {
                    this.timer > 0 && !l.HOLD_ALL_HALF_SCHEDULER && (this.timer -= t,
                    this.timer < 0 && (this.timer = 0,
                    this.hideEverything()))
                }
                ,
                e.hideEverything = function() {
                    this.node.setPosition(new n(0,-200,0)),
                    null != this.particleTrail && (this.particleTrail.parent = null,
                    this.particleTrail.active = !1,
                    l.getInstance().putCriticalTrail(this.particleTrail),
                    this.particleTrail = null)
                }
                ,
                e.reset = function(t) {
                    this.particleTrail = t,
                    this.timer = 2
                }
                ,
                r
            }(a)) || c);
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ItemDetails.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameController.ts"], (function(t) {
    "use strict";
    var e, n, i, o, a, r, c, s;
    return {
        setters: [function(t) {
            e = t.inheritsLoose,
            n = t.createClass
        }
        , function(t) {
            i = t.cclegacy,
            o = t._decorator,
            a = t.Label,
            r = t.Sprite,
            c = t.Component
        }
        , function(t) {
            s = t.GameController
        }
        ],
        execute: function() {
            var h;
            i._RF.push({}, "dadedJrRzNGHoNaXxzlj3ER", "ItemDetails", void 0);
            var u = o.ccclass;
            o.property,
            t("ItemDetails", u("ItemDetails")(h = function(t) {
                function i() {
                    for (var e, n = arguments.length, i = new Array(n), o = 0; o < n; o++)
                        i[o] = arguments[o];
                    return (e = t.call.apply(t, [this].concat(i)) || this)._description = "",
                    e
                }
                e(i, t);
                var o = i.prototype;
                return o.start = function() {}
                ,
                o.update = function(t) {}
                ,
                o.updateName = function(t) {
                    this.node.getChildByPath("text_itemName").getComponent(a).string = t
                }
                ,
                o.updateIcon = function(t) {
                    this.node.getChildByPath("container_icon/icon").getComponent(r).spriteFrame = t
                }
                ,
                o.updateHowToGet = function(t, e) {
                    this.node.getChildByPath("cont_purchase_with").active = !1,
                    this.node.getChildByPath("text_purchased").active = !1,
                    this.node.getChildByPath("container_icon/LockedBladeDojo").active = !e,
                    "default" == t.type || e ? this.node.getChildByPath("text_purchased").active = !0 : "starfruit" == t.type && (this.node.getChildByPath("cont_purchase_with").active = !0,
                    this.node.getChildByPath("cont_purchase_with/text_starfruit").getComponent(a).string = "" + s.getInstance().formatNumber(t.value))
                }
                ,
                n(i, [{
                    key: "description",
                    get: function() {
                        return this._description
                    },
                    set: function(t) {
                        this._description = t
                    }
                }]),
                i
            }(c)) || h);
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/Jiblet.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./FruitManager.ts"], (function(t) {
    "use strict";
    var e, a, n, i, r, o, l, p, s, c, u, h, S, f, m, y, d;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            a = t.inheritsLoose,
            n = t.initializerDefineProperty,
            i = t.assertThisInitialized
        }
        , function(t) {
            r = t.cclegacy,
            o = t._decorator,
            l = t.Prefab,
            p = t.SpriteFrame,
            s = t.instantiate,
            c = t.find,
            u = t.randomRangeInt,
            h = t.Sprite,
            S = t.Vec3,
            f = t.tween,
            m = t.Color,
            y = t.Component
        }
        , function(t) {
            d = t.FruitManager
        }
        ],
        execute: function() {
            var g, b, w, v, C, F, B;
            r._RF.push({}, "34e7egMYmBBQrIUNzB/xGOK", "Jiblet", void 0);
            var I = o.ccclass
              , P = o.property;
            t("Jiblet", (g = I("Jiblet"),
            b = P({
                type: l,
                displayName: "Splat"
            }),
            w = P({
                type: p,
                displayName: "SplatSpriteFrame"
            }),
            g((F = e((C = function(t) {
                function e() {
                    for (var e, a = arguments.length, r = new Array(a), o = 0; o < a; o++)
                        r[o] = arguments[o];
                    return e = t.call.apply(t, [this].concat(r)) || this,
                    n(e, "prefabSplat", F, i(e)),
                    n(e, "splatSpriteFrame", B, i(e)),
                    e.poolSplat = [],
                    e.timerToSpawn = 0,
                    e
                }
                a(e, t);
                var r = e.prototype;
                return r.onEnable = function() {
                    this.timerToSpawn = 0
                }
                ,
                r.start = function() {}
                ,
                r.update = function(t) {
                    this.node.active && (this.timerToSpawn -= t,
                    this.timerToSpawn <= 0 && (this.spawnSplat(),
                    this.timerToSpawn += .07))
                }
                ,
                r.getSplat = function() {
                    return this.poolSplat.length > 0 ? this.poolSplat.pop() : s(this.prefabSplat)
                }
                ,
                r.spawnSplat = function() {
                    var t = this
                      , e = this.getSplat();
                    e.setParent(c("CanvasBG/DojoBG/splatEffect"));
                    var a = d.getInstance().convertWorldToUI(this.node.position.clone())
                      , n = u(18, 25) / 10;
                    e.getComponentInChildren(h).spriteFrame = this.splatSpriteFrame,
                    e.setScale(new S(.7,.7,1)),
                    e.setRotationFromEuler(0, 0, u(0, 361)),
                    f(e.getChildByPath("assets")).delay(n).by(1, {
                        scale: new S(0,.12,0)
                    }).start();
                    var i = u(6, 11) / 10;
                    e.getChildByPath("assets").scale = new S(i,i,i),
                    e.getComponentInChildren(h).color = new m("#c80025"),
                    a.x += u(-15, 16),
                    a.y += u(-15, 16),
                    e.setPosition(a),
                    e.active = !0,
                    e.getComponent(h).color = new m(255,255,255,255),
                    f(e).delay(n).by(1, {
                        position: new S(0,2 * u(-10, -5),0)
                    }).start(),
                    f(e.getComponent(h)).delay(n).to(1, {
                        color: new m(255,255,255,0)
                    }).call((function() {
                        e.active = !1,
                        t.poolSplat.push(e)
                    }
                    )).start()
                }
                ,
                e
            }(y)).prototype, "prefabSplat", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            B = e(C.prototype, "splatSpriteFrame", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            v = C)) || v));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LevelManager.ts", ["cc", "./Data.ts", "./GameController.ts"], (function(e) {
    "use strict";
    var a, t, r, l;
    return {
        setters: [function(e) {
            a = e.cclegacy,
            t = e._decorator
        }
        , function(e) {
            r = e.Data
        }
        , function(e) {
            l = e.GameController
        }
        ],
        execute: function() {
            var n, o;
            a._RF.push({}, "3a079XZw7tCv4MMwku3WT5F", "LevelManager", void 0);
            var u = t.ccclass;
            t.property,
            e("LevelManager", u("LevelManager")(((o = function() {
                function e() {
                    this.levelCap = 25,
                    this.dataExp = [0, 50, 180, 200, 230, 280, 380, 480, 580, 680, 780, 880, 980, 1080, 1180, 1280, 1380, 1480, 1580, 1680, 1780, 1880, 1980, 2080, 2180, 2280, 2380, 2480, 2580, 2680, 2780, 2880, 2980, 3080, 3180, 3280, 3380, 3480, 3580, 3680, 3780, 3880, 3980, 4080, 4180, 4280, 4380, 4480, 4580, 4680, 4780, 4880, 4980, 5080, 5180, 5280, 5380, 5480, 5580, 5680, 5780, 5880, 5980, 6080, 6180, 6280, 6380, 6480, 6580, 6680, 6780, 6880, 6980, 7080, 7180, 7280, 7380, 7480, 7580, 7680, 7780, 7880, 7980, 8080, 8180, 8280, 8380, 8480, 8580, 8680, 8780, 8980, 9080, 9180, 9280, 9380, 9480, 9580, 9680, 1e4],
                    this.levelReward = [{
                        level: 1,
                        reward: null,
                        amount: 0
                    }, {
                        level: 2,
                        reward: "Bomb Deflect",
                        amount: 1
                    }, {
                        level: 3,
                        reward: "Berry Blast",
                        amount: 1
                    }, {
                        level: 4,
                        reward: "Peachy Time",
                        amount: 1
                    }, {
                        level: 5,
                        reward: "Bomb Deflect",
                        amount: 2
                    }, {
                        level: 6,
                        reward: "Berry Blast",
                        amount: 2
                    }, {
                        level: 7,
                        reward: "Peachy Time",
                        amount: 2
                    }, {
                        level: 8,
                        reward: "Bomb Deflect",
                        amount: 2
                    }, {
                        level: 9,
                        reward: "Berry Blast",
                        amount: 2
                    }, {
                        level: 10,
                        reward: "Peachy Time",
                        amount: 2
                    }, {
                        level: 11,
                        reward: "Bomb Deflect",
                        amount: 2
                    }, {
                        level: 12,
                        reward: "Berry Blast",
                        amount: 2
                    }, {
                        level: 13,
                        reward: "Peachy Time",
                        amount: 2
                    }, {
                        level: 14,
                        reward: "Bomb Deflect",
                        amount: 3
                    }, {
                        level: 15,
                        reward: "Berry Blast",
                        amount: 3
                    }, {
                        level: 16,
                        reward: "Peachy Time",
                        amount: 3
                    }, {
                        level: 17,
                        reward: "Bomb Deflect",
                        amount: 3
                    }, {
                        level: 18,
                        reward: "Berry Blast",
                        amount: 3
                    }, {
                        level: 19,
                        reward: "Peachy Time",
                        amount: 3
                    }, {
                        level: 20,
                        reward: "Bomb Deflect",
                        amount: 3
                    }, {
                        level: 21,
                        reward: "Berry Blast",
                        amount: 3
                    }, {
                        level: 22,
                        reward: "Peachy Time",
                        amount: 3
                    }, {
                        level: 23,
                        reward: "Bomb Deflect",
                        amount: 3
                    }, {
                        level: 24,
                        reward: "Berry Blast",
                        amount: 3
                    }, {
                        level: 25,
                        reward: "Peachy Time",
                        amount: 3
                    }]
                }
                e.getInstance = function() {
                    return null == e.Instance && (e.Instance = new e),
                    e.Instance
                }
                ;
                var a = e.prototype;
                return a.getLevelReward = function(e) {
                    return this.levelReward[e - 1]
                }
                ,
                a.calculateExp = function(e, a) {
                    if (l.RIG_EXP_RECEIVED > 0)
                        return l.RIG_EXP_RECEIVED;
                    var t = a.curve
                      , n = a.base
                      , o = a.yShift;
                    return Math.max(0, Math.round(r.getInstance().logBase(e * t, n) * o))
                }
                ,
                a.getDataLevelFromTotalExp = function() {
                    for (var e = 1, a = 0, t = 0; t < this.dataExp.length && (a += this.dataExp[t],
                    r.getInstance().totalExp >= a); t++)
                        e = t + 1;
                    var l = r.getInstance().totalExp
                      , n = -1;
                    return e < this.dataExp.length ? l = (n = this.dataExp[e]) - (a - r.getInstance().totalExp) : (e = this.levelCap,
                    n = 1,
                    l = 1),
                    {
                        level: e,
                        curExp: l,
                        totalExpToLevelUp: n
                    }
                }
                ,
                e
            }()).Instance = null,
            o.ARCADE_EXP_CALC_RULE = {
                base: 1.1,
                yShift: 1.6,
                curve: .9
            },
            o.CLASSIC_EXP_CALC_RULE = {
                base: 1.1,
                yShift: 2.25,
                curve: 1.01
            },
            o.ZEN_EXP_CALC_RULE = {
                base: 1.1,
                yShift: 2,
                curve: .8
            },
            n = o)) || n);
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/LoadingHandler.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Data.ts", "./MissionManager.ts", "./SceneLoading.ts"], (function(n) {
    "use strict";
    var e, t, o, i, a, c, r, s;
    return {
        setters: [function(n) {
            e = n.inheritsLoose
        }
        , function(n) {
            t = n.cclegacy,
            o = n._decorator,
            i = n.director,
            a = n.Component
        }
        , function(n) {
            c = n.Data
        }
        , function(n) {
            r = n.MissionManager
        }
        , function(n) {
            s = n.SceneLoading
        }
        ],
        execute: function() {
            var u;
            t._RF.push({}, "0ea0b+BYWtB+pekVUpE9ly9", "LoadingHandler", void 0);
            var l = o.ccclass;
            o.property,
            n("LoadingHandler", l("LoadingHandler")(u = function(n) {
                function t() {
                    for (var e, t = arguments.length, o = new Array(t), i = 0; i < t; i++)
                        o[i] = arguments[i];
                    return (e = n.call.apply(n, [this].concat(o)) || this).curProgress = 0,
                    e.lastProgress = 0,
                    e.finish = !1,
                    e.totalCount = 0,
                    e.completedCount = 0,
                    e.isInitialized = !1,
                    e.isFinishLoad = !1,
                    e.percentAsset = 0,
                    e.preloadSceneFinish = !1,
                    e
                }
                e(t, n);
                var o = t.prototype;
                return o.start = function() {
                    window.fast = window.fast || {
                        trackEvent: function() {
                            console.log(arguments)
                        },
                        trackScreen: function() {
                            console.log(arguments)
                        },
                        gmg: {
                            create: function() {
                                console.log("GMG CREATE")
                            },
                            hide: function() {
                                console.log("GMG HIDE")
                            },
                            unhide: function() {
                                console.log("GMG UNHIDE")
                            }
                        },
                        info: {
                            qfun: 0,
                            mobile: 1
                        }
                    },
                    window.ytgame = window.ytgame || {
                        IN_PLAYABLES_ENV: !1,
                        SDK_VERSION: "1.20240909.0000",
                        game: {
                            firstFrameReady: function() {},
                            gameReady: function() {},
                            loadData: function() {
                                return new Promise((function(n, e) {
                                    n()
                                }
                                ))
                            },
                            saveData: function() {
                                return new Promise((function(n, e) {
                                    n()
                                }
                                ))
                            }
                        },
                        system: {
                            isAudioEnabled: function() {
                                return !0
                            },
                            getLanguage: function() {
                                return new Promise((function(n, e) {
                                    n("en")
                                }
                                ))
                            },
                            onAudioEnabledChange: function() {},
                            onPause: function() {},
                            onResume: function() {}
                        },
                        health: {}
                    },
                    r.getInstance().loadAllIcon(),
                    this.percentAsset = 0;
                    var n = this;
                    c.getInstance().doLoad(),
                    window.fastResizeCanvas(),
                    window.orientationCatcher(),
                    i.preloadScene("gameplay", (function(e, t, o) {
                        n.totalCount = t,
                        n.completedCount = e,
                        t > 0 && (n.percentAsset = e / t),
                        s.getInstance().updateLoadingBar(n.percentAsset)
                    }
                    ), (function(e) {
                        var t = setInterval((function() {
                            console.log(window.innerWidth, window.innerHeight),
                            window.fast.info.mobile,
                            clearInterval(t),
                            n.preloadSceneFinish = !0,
                            n.checkFinish()
                        }
                        ), 1e3)
                    }
                    ))
                }
                ,
                o.update = function(n) {}
                ,
                o.checkFinish = function() {
                    this.preloadSceneFinish && i.loadScene("gameplay")
                }
                ,
                t
            }(a)) || u);
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/main", ["./CustomLabelShadow.ts", "./PolygonSprite.ts", "./SuperGraphics.ts", "./SuperGraphicsStretch.ts", "./AdsManager.ts", "./ArcadeBonusBoardController.ts", "./BGMManager.ts", "./BladeData.ts", "./BladeTipWithLineRenderer.ts", "./BlitzManager.ts", "./Bomb.ts", "./ColorAssembler2D.ts", "./ContMissionSelectMode.ts", "./ControllerBlade.ts", "./Data.ts", "./FollowTarget.ts", "./Fruit.ts", "./FruitManager.ts", "./FruitPhysics.ts", "./GameController.ts", "./HalfFruit.ts", "./ItemDetails.ts", "./Jiblet.ts", "./LevelManager.ts", "./LoadingHandler.ts", "./MissionLabel.ts", "./MissionManager.ts", "./PreloadScreen.ts", "./ResourcesManager.ts", "./SFXManager.ts", "./PopupLevelUp.ts", "./PopupMission.ts", "./SceneContinue.ts", "./SceneDeflectOffer.ts", "./SceneGameplay.ts", "./SceneHomescreen.ts", "./SceneLanguage.ts", "./SceneLoading.ts", "./ScenePause.ts", "./ScenePopupBonusArcade.ts", "./ScenePopupInfoPowerup.ts", "./ScenePopupPurchasePU.ts", "./SceneResultScore.ts", "./SceneSelectMode.ts", "./SceneSetting.ts", "./SceneTutorialDeflect.ts", "./SenseiSwagScene.ts", "./ServerManager.ts", "./ShakeNode.ts", "./ShareManager.ts", "./TextCombo.ts", "./TextCritical.ts", "./TextDeflect.ts", "./UIMissionTutorial.ts", "./UIPowerUpButton.ts", "./UIRing.ts", "./UIToWorldNode.ts", "./GameplayLeaderboard.ts", "./GameplayLeaderboardLabel.ts", "./preloadSize.ts"], (function() {
    "use strict";
    return {
        setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
        execute: function() {}
    }
}
));

System.register("chunks:///_virtual/MissionLabel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Data.ts", "./GameController.ts", "./MissionManager.ts", "./ResourcesManager.ts", "./PopupMission.ts", "./SceneSelectMode.ts", "./SFXManager.ts"], (function(e) {
    "use strict";
    var t, i, a, o, n, s, r, l, m, c, d, p, u, h, y, g, C, f, w, P, M;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            a = e.initializerDefineProperty,
            o = e.assertThisInitialized
        }
        , function(e) {
            n = e.cclegacy,
            s = e._decorator,
            r = e.Material,
            l = e.ParticleSystem,
            m = e.Label,
            c = e.Color,
            d = e.SpriteFrame,
            p = e.Sprite,
            u = e.LabelOutline,
            h = e.Component
        }
        , function(e) {
            y = e.Data
        }
        , function(e) {
            g = e.GameController
        }
        , function(e) {
            C = e.MissionManager
        }
        , function(e) {
            f = e.ResourcesManager
        }
        , function(e) {
            w = e.PopupMission
        }
        , function(e) {
            P = e.SceneSelectMode
        }
        , function(e) {
            M = e.SFXManager
        }
        ],
        execute: function() {
            var I, v, b, B, S, _, T, R, x;
            n._RF.push({}, "e76acDkfy9Coq4yyvH5geNL", "MissionLabel", void 0);
            var z = s.ccclass
              , D = s.property;
            e("MissionLabel", (I = z("MissionLabel"),
            v = D({
                type: r,
                displayName: "Mat exp"
            }),
            b = D({
                type: r,
                displayName: "Mat starfruit"
            }),
            B = D({
                type: r,
                displayName: "Mat power up"
            }),
            I((T = t((_ = function(e) {
                function t() {
                    for (var t, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                        n[s] = arguments[s];
                    return t = e.call.apply(e, [this].concat(n)) || this,
                    a(t, "matExp", T, o(t)),
                    a(t, "matStarfruit", R, o(t)),
                    a(t, "matPowerup", x, o(t)),
                    t.from = "",
                    t.data = void 0,
                    t.callbackOnClaimed = function() {}
                    ,
                    t.holdInput = !1,
                    t
                }
                i(t, e);
                var n = t.prototype;
                return n.start = function() {}
                ,
                n.setHoldInput = function(e) {
                    this.holdInput = e
                }
                ,
                n.onClaimClicked = function() {
                    if (!this.holdInput) {
                        if (M.getInstance().play(M.SFX_UI_POSITIVE),
                        "starfruit" == this.data.rewardType || "xp" == this.data.rewardType) {
                            if ("starfruit" == this.data.rewardType) {
                                if ("popup_mission" == P.from)
                                    g.getInstance().mainCanvasOverlay.getChildByPath("container_missionsPopup").getComponent(w).showAnimationClaimed(this.data, this.node.getChildByPath("layoutMissionClaim/layoutMissionReward/Icon"));
                                else if ("select_mode" == P.from) {
                                    g.Instance.selectModeScreen.getComponent(P).showAnimationClaimed(this.data, this.node.getChildByPath("layoutMissionClaim/layoutMissionReward/Icon"))
                                }
                            } else if ("xp" == this.data.rewardType) {
                                if ("popup_mission" == P.from)
                                    g.getInstance().mainCanvasOverlay.getChildByPath("container_missionsPopup").getComponent(w).showAnimationClaimed(this.data, this.node.getChildByPath("layoutMissionClaim/layoutMissionReward/Icon"));
                                else if ("select_mode" == P.from) {
                                    g.Instance.selectModeScreen.getComponent(P).showAnimationClaimed(this.data, this.node.getChildByPath("layoutMissionClaim/layoutMissionReward/Icon"))
                                }
                            }
                        } else if ("berry_blast" == this.data.rewardType || "bomb_deflect" == this.data.rewardType || "peachy_time" == this.data.rewardType) {
                            if ("berry_blast" == this.data.rewardType) {
                                var e = 0;
                                "small" == this.data.rewardSize ? e = 1 : "medium" == this.data.rewardSize ? e = 2 : "large" == this.data.rewardSize && (e = 3),
                                y.getInstance().inventoryPUBerryBlast += e;
                                var t = g.Instance.particlePUGain;
                                t.setWorldPosition(y.getInstance().convert2DPosTo3D(this.node.getChildByPath("layoutMissionClaim/ButtonClaim").worldPosition)),
                                t.getComponent(l).play()
                            } else if ("bomb_deflect" == this.data.rewardType) {
                                var i = 0;
                                "small" == this.data.rewardSize ? i = 1 : "medium" == this.data.rewardSize ? i = 2 : "large" == this.data.rewardSize && (i = 3),
                                y.getInstance().inventoryPUDeflect += i;
                                var a = g.Instance.particlePUGain;
                                a.setWorldPosition(y.getInstance().convert2DPosTo3D(this.node.getChildByPath("layoutMissionClaim/ButtonClaim").worldPosition)),
                                a.getComponent(l).play()
                            } else if ("peachy_time" == this.data.rewardType) {
                                var o = 0;
                                "small" == this.data.rewardSize ? o = 1 : "medium" == this.data.rewardSize ? o = 2 : "large" == this.data.rewardSize && (o = 3),
                                y.getInstance().inventoryPUPeachyTime += o;
                                var n = g.Instance.particlePUGain;
                                n.setWorldPosition(y.getInstance().convert2DPosTo3D(this.node.getChildByPath("layoutMissionClaim/ButtonClaim").worldPosition)),
                                n.getComponent(l).play()
                            }
                            "select_mode" == P.from && g.Instance.selectModeScreen.getComponent(P).refreshPowerUp()
                        }
                        C.getInstance().setClaimed(this.data.type),
                        g.saveData(),
                        this.callbackOnClaimed()
                    }
                }
                ,
                n.setOnClaimed = function(e) {
                    this.callbackOnClaimed = e
                }
                ,
                n.refresh = function(e, t, i) {
                    void 0 === t && (t = ""),
                    void 0 === i && (i = !0),
                    this.from = t,
                    P.from = t,
                    this.data = e;
                    var a = this.node.getChildByPath("MissionIconBacking/MissionIconBackingGreen")
                      , o = this.node.getChildByPath("MissionIconBacking/MissionIcon")
                      , n = this.node.getChildByPath("mission_textLayout/missions_text")
                      , s = this.node.getChildByPath("mission_textLayout/missions_textProgress")
                      , r = this.node.getChildByPath("layoutMissionClaim/layoutMissionReward")
                      , l = this.node.getChildByPath("layoutMissionClaim/ButtonClaim")
                      , h = this.node.getChildByPath("layoutMissionClaim/TickGreenClaimed")
                      , y = this.node.getChildByPath("layoutMissionClaim/layoutMissionReward/text_point")
                      , g = this.node.getChildByPath("layoutMissionClaim/layoutMissionReward/Icon");
                    r.active = !e.claimed,
                    l.active = !e.claimed && e.current >= e.target && i,
                    h.active = e.claimed,
                    s.active = e.togotext && e.current < e.target,
                    n.getComponent(m).string = e.text,
                    e.current < e.target ? n.getComponent(m).color = new c(154,97,39) : n.getComponent(m).color = new c(27,128,27),
                    s.active && (s.getComponent(m).string = e.target - e.current + " to go!"),
                    a.active = e.current >= e.target,
                    o.active = !1,
                    f.getInstance().loadResources("UI/missionIcon/" + e.icon + "/spriteFrame", d, (function(e) {
                        o.active = !0,
                        o.getComponent(p).spriteFrame = e
                    }
                    ));
                    var C = e.rewardType
                      , w = e.rewardSize
                      , M = ""
                      , I = 0;
                    "starfruit" == C ? (y.getComponent(m).customMaterial = this.matStarfruit,
                    y.getComponent(u).color = new c(51,78,0),
                    "small" == w ? I = 50 : "medium" == w ? I = 100 : "large" == w && (I = 150),
                    M = "UI/missionReward/CurrencyStarfruitIcon/spriteFrame") : "berry_blast" == C ? (y.getComponent(m).customMaterial = this.matPowerup,
                    y.getComponent(u).color = new c(69,69,69),
                    "small" == w ? I = 1 : "medium" == w ? I = 2 : "large" == w && (I = 3),
                    M = "UI/missionReward/IconHudPowerupBerryBlast/spriteFrame") : "bomb_deflect" == C ? (y.getComponent(m).customMaterial = this.matPowerup,
                    y.getComponent(u).color = new c(69,69,69),
                    "small" == w ? I = 1 : "medium" == w ? I = 2 : "large" == w && (I = 3),
                    M = "UI/missionReward/IconHudPowerupBombDeflect/spriteFrame") : "peachy_time" == C ? (y.getComponent(m).customMaterial = this.matPowerup,
                    y.getComponent(u).color = new c(69,69,69),
                    "small" == w ? I = 1 : "medium" == w ? I = 2 : "large" == w && (I = 3),
                    M = "UI/missionReward/IconHudPowerupPeachyTime/spriteFrame") : "xp" == C && (y.getComponent(m).customMaterial = this.matExp,
                    y.getComponent(u).color = new c(117,38,104),
                    "small" == w ? I = 75 : "medium" == w ? I = 100 : "large" == w && (I = 125),
                    M = "UI/missionReward/IconXPShuriken/spriteFrame"),
                    g.active = !1,
                    f.getInstance().loadResources(M, d, (function(e) {
                        g.active = !0,
                        g.getComponent(p).spriteFrame = e
                    }
                    )),
                    y.getComponent(m).string = "" + I
                }
                ,
                t
            }(h)).prototype, "matExp", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            R = t(_.prototype, "matStarfruit", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            x = t(_.prototype, "matPowerup", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            S = _)) || S));
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/MissionManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameController.ts", "./ResourcesManager.ts"], (function(e) {
    "use strict";
    var t, i, r, a, n, o, s, c;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }
        , function(e) {
            i = e.cclegacy,
            r = e._decorator,
            a = e.SpriteFrame,
            n = e.randomRangeInt,
            o = e.Component
        }
        , function(e) {
            s = e.GameController
        }
        , function(e) {
            c = e.ResourcesManager
        }
        ],
        execute: function() {
            var d, l;
            i._RF.push({}, "e40aax39YJDmZk2d8qjbrZU", "MissionManager", void 0);
            var p = r.ccclass;
            r.property,
            e("MissionManager", p("MissionManager")(((l = function(e) {
                function i() {
                    for (var t, i = arguments.length, r = new Array(i), a = 0; a < i; a++)
                        r[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(r)) || this).gemMissionWeight = 7,
                    t.powerUpMissionWeight = 25,
                    t.starfruitMissionWeight = 34,
                    t.expMissionWeight = 34,
                    t.maxMission = 3,
                    t.data_mission = [[{
                        analytic_id: "MIS001",
                        type: "COMBOTOTAL20",
                        target: 20,
                        current: 0,
                        text: "Get 20 combos",
                        claimed: !1,
                        icon: "Score",
                        rewardType: "starfruit",
                        rewardSize: "small",
                        togotext: !0
                    }, {
                        analytic_id: "MIS002",
                        type: "COMBOTOTAL30",
                        target: 30,
                        current: 0,
                        text: "Get 30 combos",
                        claimed: !1,
                        icon: "BladeStars02",
                        rewardType: "starfruit",
                        rewardSize: "medium",
                        togotext: !0
                    }, {
                        analytic_id: "MIS003",
                        type: "COMBOTOTAL40",
                        target: 40,
                        current: 0,
                        text: "Get 40 combos",
                        claimed: !1,
                        icon: "BladeStars01",
                        rewardType: "starfruit",
                        rewardSize: "large",
                        togotext: !0
                    }], [{
                        analytic_id: "MIS004",
                        type: "FRUITCOMBO05",
                        target: 5,
                        current: 0,
                        text: "Get a 5 Fruit Combo!",
                        claimed: !1,
                        icon: "AppleGreenSlice",
                        rewardType: "starfruit",
                        rewardSize: "small",
                        togotext: !1
                    }, {
                        analytic_id: "MIS005",
                        type: "FRUITCOMBO06",
                        target: 6,
                        current: 0,
                        text: "Get a 6 Fruit Combo!",
                        claimed: !1,
                        icon: "AppleRedSlice",
                        rewardType: "starfruit",
                        rewardSize: "small",
                        togotext: !1
                    }, {
                        analytic_id: "MIS006",
                        type: "FRUITCOMBO07",
                        target: 7,
                        current: 0,
                        text: "Get a 7 Fruit Combo!",
                        claimed: !1,
                        icon: "LimeSlice",
                        rewardType: "starfruit",
                        rewardSize: "small",
                        togotext: !1
                    }, {
                        analytic_id: "MIS007",
                        type: "FRUITCOMBO08",
                        target: 8,
                        current: 0,
                        text: "Get a 8 Fruit Combo!",
                        claimed: !1,
                        icon: "CoconutSlice",
                        rewardType: "starfruit",
                        rewardSize: "medium",
                        togotext: !1
                    }, {
                        analytic_id: "MIS008",
                        type: "FRUITCOMBO09",
                        target: 9,
                        current: 0,
                        text: "Get a 9 Fruit Combo!",
                        claimed: !1,
                        icon: "PineappleSlice",
                        rewardType: "starfruit",
                        rewardSize: "medium",
                        togotext: !1
                    }, {
                        analytic_id: "MIS009",
                        type: "FRUITCOMBO10",
                        target: 10,
                        current: 0,
                        text: "Get a 10 Fruit Combo!",
                        claimed: !1,
                        icon: "PassionSlice",
                        rewardType: "starfruit",
                        rewardSize: "large",
                        togotext: !1
                    }, {
                        analytic_id: "MIS010",
                        type: "FRUITCOMBO13",
                        target: 13,
                        current: 0,
                        text: "Get a 13 Fruit Combo!",
                        claimed: !1,
                        icon: "MangoSlice",
                        rewardType: "starfruit",
                        rewardSize: "large",
                        togotext: !1
                    }, {
                        analytic_id: "MIS011",
                        type: "FRUITCOMBO15",
                        target: 15,
                        current: 0,
                        text: "Get a 15 Fruit Combo!",
                        claimed: !1,
                        icon: "CherrySlice",
                        rewardType: "starfruit",
                        rewardSize: "large",
                        togotext: !1
                    }], [{
                        analytic_id: "MIS012",
                        type: "GETCRITICAL10",
                        target: 10,
                        current: 0,
                        text: "Get 10 Criticals!",
                        claimed: !1,
                        icon: "BladeStars03",
                        rewardType: "starfruit",
                        rewardSize: "small",
                        togotext: !0
                    }, {
                        analytic_id: "MIS013",
                        type: "GETCRITICAL30",
                        target: 30,
                        current: 0,
                        text: "Get 30 Criticals!",
                        claimed: !1,
                        icon: "CriticalSlice",
                        rewardType: "starfruit",
                        rewardSize: "small",
                        togotext: !0
                    }, {
                        analytic_id: "MIS014",
                        type: "GETCRITICAL40",
                        target: 40,
                        current: 0,
                        text: "Get 40 Criticals!",
                        claimed: !1,
                        icon: "BladeStars03",
                        rewardType: "starfruit",
                        rewardSize: "medium",
                        togotext: !0
                    }, {
                        analytic_id: "MIS015",
                        type: "GETCRITICAL50",
                        target: 50,
                        current: 0,
                        text: "Get 50 Criticals!",
                        claimed: !1,
                        icon: "CriticalSlice",
                        rewardType: "starfruit",
                        rewardSize: "large",
                        togotext: !0
                    }], [{
                        analytic_id: "MIS016",
                        type: "PLAYGAMESARCADE3",
                        target: 3,
                        current: 0,
                        text: "Play a game of Arcade",
                        claimed: !1,
                        icon: "Pomegranate",
                        rewardType: "powerup",
                        rewardSize: "small",
                        togotext: !0
                    }, {
                        analytic_id: "MIS017",
                        type: "PLAYGAMESARCADE4",
                        target: 4,
                        current: 0,
                        text: "Play 4 games of Arcade",
                        claimed: !1,
                        icon: "FrenzyBanana",
                        rewardType: "powerup",
                        rewardSize: "medium",
                        togotext: !0
                    }, {
                        analytic_id: "MIS018",
                        type: "PLAYGAMESARCADE5",
                        target: 5,
                        current: 0,
                        text: "Play 5 games of Arcade",
                        claimed: !1,
                        icon: "BananaSlice",
                        rewardType: "powerup",
                        rewardSize: "large",
                        togotext: !0
                    }], [{
                        analytic_id: "MIS019",
                        type: "PLAYGAMESCLASSIC3",
                        target: 3,
                        current: 0,
                        text: "Play 3 games of Classic",
                        claimed: !1,
                        icon: "Classic",
                        rewardType: "powerup",
                        rewardSize: "small",
                        togotext: !0
                    }, {
                        analytic_id: "MIS020",
                        type: "PLAYGAMESCLASSIC4",
                        target: 4,
                        current: 0,
                        text: "Play 4 games of Classic",
                        claimed: !1,
                        icon: "Bomb",
                        rewardType: "powerup",
                        rewardSize: "medium",
                        togotext: !0
                    }, {
                        analytic_id: "MIS021",
                        type: "PLAYGAMESCLASSIC5",
                        target: 5,
                        current: 0,
                        text: "Play 5 games of Classic",
                        claimed: !1,
                        icon: "WatermelonSliced",
                        rewardType: "powerup",
                        rewardSize: "large",
                        togotext: !0
                    }], [{
                        analytic_id: "MIS022",
                        type: "PLAYGAMESZEN3",
                        target: 3,
                        current: 0,
                        text: "Play 3 games of Zen",
                        claimed: !1,
                        icon: "Zen",
                        rewardType: "powerup",
                        rewardSize: "small",
                        togotext: !0
                    }, {
                        analytic_id: "MIS023",
                        type: "PLAYGAMESZEN4",
                        target: 4,
                        current: 0,
                        text: "Play 4 games of Zen",
                        claimed: !1,
                        icon: "Zen",
                        rewardType: "powerup",
                        rewardSize: "medium",
                        togotext: !0
                    }, {
                        analytic_id: "MIS024",
                        type: "PLAYGAMESZEN5",
                        target: 5,
                        current: 0,
                        text: "Play 5 games of Zen",
                        claimed: !1,
                        icon: "Zen",
                        rewardType: "powerup",
                        rewardSize: "large",
                        togotext: !0
                    }], [{
                        analytic_id: "MIS030",
                        type: "POINTSSINGLEARCADE800",
                        target: 800,
                        current: 0,
                        text: "Score 800+ points in Arcade mode",
                        claimed: !1,
                        icon: "BananaSlice",
                        rewardType: "xp",
                        rewardSize: "small",
                        togotext: !1
                    }, {
                        analytic_id: "MIS025",
                        type: "POINTSSINGLEARCADE1000",
                        target: 1e3,
                        current: 0,
                        text: "Score 1000+ points in Arcade mode",
                        claimed: !1,
                        icon: "FreezeBanana",
                        rewardType: "xp",
                        rewardSize: "small",
                        togotext: !1
                    }, {
                        analytic_id: "MIS026",
                        type: "POINTSSINGLEARCADE1200",
                        target: 1200,
                        current: 0,
                        text: "Score 1200+ points in Arcade mode",
                        claimed: !1,
                        icon: "DoublePointBanana",
                        rewardType: "xp",
                        rewardSize: "medium",
                        togotext: !1
                    }, {
                        analytic_id: "MIS027",
                        type: "POINTSSINGLEARCADE1400",
                        target: 1400,
                        current: 0,
                        text: "Score 1400+ points in Arcade mode",
                        claimed: !1,
                        icon: "Score",
                        rewardType: "xp",
                        rewardSize: "medium",
                        togotext: !1
                    }, {
                        analytic_id: "MIS028",
                        type: "POINTSSINGLEARCADE1600",
                        target: 1600,
                        current: 0,
                        text: "Score 1600+ points in Arcade mode",
                        claimed: !1,
                        icon: "FrenzyBanana",
                        rewardType: "xp",
                        rewardSize: "large",
                        togotext: !1
                    }, {
                        analytic_id: "MIS029",
                        type: "POINTSSINGLEARCADE1800",
                        target: 1800,
                        current: 0,
                        text: "Score 1800+ points in Arcade mode",
                        claimed: !1,
                        icon: "Bonus",
                        rewardType: "xp",
                        rewardSize: "large",
                        togotext: !1
                    }], [{
                        analytic_id: "MIS033",
                        type: "POINTSSINGLECLASSIC50",
                        target: 50,
                        current: 0,
                        text: "Score 50+ points in Classic mode",
                        claimed: !1,
                        icon: "PearSlice",
                        rewardType: "xp",
                        rewardSize: "small",
                        togotext: !1
                    }, {
                        analytic_id: "MIS031",
                        type: "POINTSSINGLECLASSIC100",
                        target: 100,
                        current: 0,
                        text: "Score 100+ points in Classic mode",
                        claimed: !1,
                        icon: "PineappleSlice",
                        rewardType: "xp",
                        rewardSize: "medium",
                        togotext: !1
                    }, {
                        analytic_id: "MIS032",
                        type: "POINTSSINGLECLASSIC250",
                        target: 250,
                        current: 0,
                        text: "Score 250+ points in Classic mode",
                        claimed: !1,
                        icon: "LimeSlice",
                        rewardType: "xp",
                        rewardSize: "large",
                        togotext: !1
                    }], [{
                        analytic_id: "MIS034",
                        type: "POINTSSINGLEZEN200",
                        target: 200,
                        current: 0,
                        text: "Score 200+ points in Zen mode",
                        claimed: !1,
                        icon: "AppleGreenSlice",
                        rewardType: "xp",
                        rewardSize: "small",
                        togotext: !1
                    }, {
                        analytic_id: "MIS035",
                        type: "POINTSSINGLEZEN250",
                        target: 250,
                        current: 0,
                        text: "Score 250+ points in Zen mode",
                        claimed: !1,
                        icon: "AppleRedSlice",
                        rewardType: "xp",
                        rewardSize: "medium",
                        togotext: !1
                    }, {
                        analytic_id: "MIS036",
                        type: "POINTSSINGLEZEN280",
                        target: 280,
                        current: 0,
                        text: "Score 280+ points in Zen mode",
                        claimed: !1,
                        icon: "AppleRedSlice",
                        rewardType: "xp",
                        rewardSize: "large",
                        togotext: !1
                    }]],
                    t.activeMission = [],
                    t
                }
                t(i, e),
                i.getInstance = function() {
                    return null == i.Instance && (i.Instance = new i),
                    i.Instance
                }
                ;
                var r = i.prototype;
                return r.isAnyMissionClaimable = function() {
                    for (var e = 0; e < this.activeMission.length; e++) {
                        var t = i.getInstance().activeMission[e];
                        if (!t.claimed && t.current >= t.target)
                            return !0
                    }
                    return !1
                }
                ,
                r.loadAllIcon = function() {
                    for (var e = 0; e < this.data_mission.length; e++)
                        for (var t = 0; t < this.data_mission[e].length; t++)
                            c.getInstance().loadResources("UI/missionIcon/" + this.data_mission[e][t].icon + "/spriteFrame", a, (function(e) {}
                            ));
                    for (var i = ["UI/missionReward/CurrencyStarfruitIcon/spriteFrame", "UI/missionReward/IconHudPowerupBerryBlast/spriteFrame", "UI/missionReward/IconHudPowerupBombDeflect/spriteFrame", "UI/missionReward/IconHudPowerupPeachyTime/spriteFrame", "UI/missionReward/IconXPShuriken/spriteFrame"], r = 0; r < i.length; r++)
                        c.getInstance().loadResources(i[r], a, (function(e) {}
                        ))
                }
                ,
                r.setClaimed = function(e) {
                    for (var t = 0; t < this.activeMission.length; t++)
                        this.activeMission[t].type == e && (this.activeMission[t].claimed = !0)
                }
                ,
                r.generateMissionDataToSave = function() {
                    for (var e = [], t = 0; t < this.activeMission.length; t++)
                        e.push({
                            type: this.activeMission[t].type,
                            current: this.activeMission[t].current,
                            claimed: this.activeMission[t].claimed,
                            rewardType: this.activeMission[t].rewardType
                        });
                    return e
                }
                ,
                r.loadMission = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var i = this.findMission(e[t].type);
                        null != i && (i.current = e[t].current,
                        i.claimed = e[t].claimed,
                        i.rewardType = e[t].rewardType,
                        this.activeMission.push(i))
                    }
                }
                ,
                r.findMission = function(e) {
                    for (var t = 0; t < this.data_mission.length; t++)
                        for (var i = 0; i < this.data_mission[t].length; i++)
                            if (this.data_mission[t][i].type == e)
                                return this.data_mission[t][i];
                    return null
                }
                ,
                r.generateMission = function() {
                    if (s.RIG_MISSION_SPECIFIC)
                        this.activeMission = [this.data_mission[3][0], this.data_mission[0][0], this.data_mission[7][0]],
                        this.activeMission[0].rewardType = "bomb_deflect";
                    else {
                        this.activeMission = [];
                        for (var e = [], t = [], i = [], r = 0; r < this.data_mission.length; r++) {
                            var a = this.data_mission[r][0].rewardType;
                            "starfruit" == a ? t.push(r) : "powerup" == a ? e.push(r) : "xp" == a && i.push(r)
                        }
                        for (var o = this.powerUpMissionWeight + this.starfruitMissionWeight + this.expMissionWeight, c = 0; c < this.maxMission; c++) {
                            var d = n(0, o)
                              , l = -1;
                            d < this.powerUpMissionWeight ? l = e.splice(n(0, e.length), 1)[0] : d < this.powerUpMissionWeight + this.starfruitMissionWeight ? l = t.splice(n(0, t.length), 1)[0] : d < this.powerUpMissionWeight + this.starfruitMissionWeight + this.expMissionWeight && (l = i.splice(n(0, i.length), 1)[0]);
                            var p = this.data_mission[l]
                              , S = p[n(0, p.length)];
                            if ("powerup" == S.rewardType) {
                                var u = ["berry_blast", "bomb_deflect", "peachy_time"];
                                S.rewardType = u[n(0, u.length)]
                            }
                            this.activeMission.push(S)
                        }
                    }
                    if (s.RIG_MISSION_AUTO_COMPLETE)
                        for (var m = 0; m < this.activeMission.length; m++)
                            this.activeMission[m].current = 999999
                }
                ,
                r.trySetProgress = function(e, t) {
                    for (var i = 0; i < this.activeMission.length; i++) {
                        var r = this.activeMission[i];
                        r.type.includes(e) && r.current < r.target && (r.current = t,
                        s.getInstance().getScreenState() != s.SCREEN_STATE_GAMEPLAY && s.saveData())
                    }
                }
                ,
                r.tryAddProgress = function(e, t) {
                    for (var i = 0; i < this.activeMission.length; i++) {
                        var r = this.activeMission[i];
                        r.type.includes(e) && r.current < r.target && (r.current += t,
                        s.getInstance().getScreenState() != s.SCREEN_STATE_GAMEPLAY && s.saveData())
                    }
                }
                ,
                r.trySinglePointsAchievement = function(e, t) {
                    for (var i = 0; i < this.activeMission.length; i++) {
                        var r = this.activeMission[i];
                        r.type.includes(e) && !this.activeMission[i].claimed && t >= r.target && (r.current = t,
                        s.getInstance().getScreenState() != s.SCREEN_STATE_GAMEPLAY && s.saveData())
                    }
                }
                ,
                i
            }(o)).Instance = null,
            d = l)) || d);
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PolygonSprite.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, r, a, i, n, s, o, u, c, p, v;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            r = e.inheritsLoose,
            a = e.initializerDefineProperty,
            i = e.assertThisInitialized,
            n = e.createClass
        }
        , function(e) {
            s = e.cclegacy,
            o = e._decorator,
            u = e.Vec2,
            c = e.Sprite,
            p = e.dynamicAtlasManager,
            v = e.Color
        }
        ],
        execute: function() {
            var l, f, y, d, h, D, m, _, g;
            s._RF.push({}, "908f9z60kJMEo/fulpkwVQq", "PolygonSprite", void 0);
            var b = o.ccclass
              , w = o.property
              , x = {
                createData: function(e) {
                    return e.requestRenderData()
                },
                updateRenderData: function(e) {
                    var t = e.spriteFrame;
                    p.packToDynamicAtlas(e, t);
                    var r = e.renderData;
                    r && t && (r.vertDirty && this.updateVertexData(e),
                    r.uvDirty && this.updateUvs(e))
                },
                fillBuffers: function(e, t) {
                    if (null !== e) {
                        var r = e.node
                          , a = t.acquireBufferBatch()
                          , i = a.byteOffset >> 2
                          , n = a.indicesOffset
                          , s = a.vertexOffset
                          , o = e.renderData;
                        a.request(o.vertexCount, o.indicesCount) || (a = t.currBufferBatch,
                        i = 0,
                        n = 0,
                        s = 0);
                        for (var u = a.vData, c = a.iData, p = r.worldMatrix, l = p.m00, f = p.m01, y = p.m04, d = p.m05, h = p.m12, D = p.m13, m = 0; m < o.vertexCount; ++m) {
                            var _ = o.data[m];
                            u[i++] = l * _.x + y * _.y + h,
                            u[i++] = f * _.x + d * _.y + D,
                            u[i++] = _.z,
                            u[i++] = _.u,
                            u[i++] = _.v,
                            v.toArray(u, e.color, i),
                            i += 4
                        }
                        for (var g = 0; g < e.vertices.length - 2; ++g) {
                            var b = g;
                            c[n++] = s,
                            c[n++] = b + 1 + s,
                            c[n++] = b + 2 + s
                        }
                    }
                },
                updateVertexData: function(e) {
                    var t = e.renderData;
                    if (t) {
                        t.vertexCount = t.dataLength = e.vertices.length,
                        t.indicesCount = 3 * (t.vertexCount - 2),
                        t.vertDirty = !1;
                        for (var r = 0; r < e.vertices.length; ++r) {
                            var a = e.vertices[r];
                            t.data[r].x = a.x,
                            t.data[r].y = a.y
                        }
                    }
                },
                updateUvs: function(e) {
                    for (var t = e.renderData, r = e.spriteFrame.uv, a = r[0], i = r[1], n = r[7], s = r[6], o = 0; o < e.uvs.length; ++o) {
                        var u = e.uvs[o];
                        t.data[o].u = a + (s - a) * u.x,
                        t.data[o].v = i + (n - i) * u.y
                    }
                    t.uvDirty = !1
                }
            };
            e("PolygonSprite", (l = b("PolygonSprite"),
            f = w({
                type: [u]
            }),
            y = w({
                type: [u]
            }),
            d = w({
                type: [u]
            }),
            h = w({
                type: [u]
            }),
            l((_ = t((m = function(e) {
                function t() {
                    for (var t, r = arguments.length, n = new Array(r), s = 0; s < r; s++)
                        n[s] = arguments[s];
                    return t = e.call.apply(e, [this].concat(n)) || this,
                    a(t, "_vertices", _, i(t)),
                    a(t, "_uvs", g, i(t)),
                    t
                }
                return r(t, e),
                t.prototype._flushAssembler = function() {
                    var e = x;
                    this._assembler !== e && (this.destroyRenderData(),
                    this._assembler = e),
                    this._renderData || this._assembler && this._assembler.createData && (this._renderData = this._assembler.createData(this),
                    this._renderData.material = this.getRenderMaterial(0),
                    this.markForUpdateRenderData(),
                    this._updateColor())
                }
                ,
                n(t, [{
                    key: "vertices",
                    get: function() {
                        return this._vertices
                    },
                    set: function(e) {
                        this._vertices = e,
                        this.markForUpdateRenderData()
                    }
                }, {
                    key: "uvs",
                    get: function() {
                        return this._uvs
                    },
                    set: function(e) {
                        this._uvs = e,
                        this._markForUpdateUvDirty(),
                        this.markForUpdateRenderData()
                    }
                }]),
                t
            }(c)).prototype, "_vertices", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [new u(-100,-100), new u(100,-100), new u(100,100), new u(-100,100)]
                }
            }),
            t(m.prototype, "vertices", [y], Object.getOwnPropertyDescriptor(m.prototype, "vertices"), m.prototype),
            g = t(m.prototype, "_uvs", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return [new u(0,0), new u(1,0), new u(1,1), new u(0,1)]
                }
            }),
            t(m.prototype, "uvs", [h], Object.getOwnPropertyDescriptor(m.prototype, "uvs"), m.prototype),
            D = m)) || D));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PopupLevelUp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Data.ts", "./GameController.ts", "./LevelManager.ts", "./SFXManager.ts"], (function(e) {
    "use strict";
    var t, n, o, i, r, a, l, c, s, p, u, g, h, m, y;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            n = e.inheritsLoose,
            o = e.initializerDefineProperty,
            i = e.assertThisInitialized
        }
        , function(e) {
            r = e.cclegacy,
            a = e._decorator,
            l = e.SpriteFrame,
            c = e.Label,
            s = e.Sprite,
            p = e.Animation,
            u = e.Component
        }
        , function(e) {
            g = e.Data
        }
        , function(e) {
            h = e.GameController
        }
        , function(e) {
            m = e.LevelManager
        }
        , function(e) {
            y = e.SFXManager
        }
        ],
        execute: function() {
            var d, f, v, B, P, C, b, S, I;
            r._RF.push({}, "9058cfxX5RIArbndRVivXV8", "PopupLevelUp", void 0);
            var D = a.ccclass
              , L = a.property;
            e("PopupLevelUp", (d = D("PopupLevelUp"),
            f = L({
                type: l
            }),
            v = L({
                type: l
            }),
            B = L({
                type: l
            }),
            d((b = t((C = function(e) {
                function t() {
                    for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
                        r[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(r)) || this,
                    o(t, "iconBombDeflect", b, i(t)),
                    o(t, "iconBerryBlast", S, i(t)),
                    o(t, "iconPeachTime", I, i(t)),
                    t.onClosed = function() {}
                    ,
                    t
                }
                n(t, e);
                var r = t.prototype;
                return r.start = function() {}
                ,
                r.refresh = function(e, t) {
                    var n = m.getInstance().getLevelReward(e)
                      , o = n.reward
                      , i = n.amount;
                    this.node.getChildByPath("Scroll/mask/textPU").getComponent(c).string = o;
                    var r = this.iconBombDeflect;
                    "Bomb Deflect" == o ? (r = this.iconBombDeflect,
                    g.getInstance().inventoryPUDeflect += i) : "Berry Blast" == o ? (r = this.iconBerryBlast,
                    g.getInstance().inventoryPUBerryBlast += i) : "Peachy Time" == o && (r = this.iconPeachTime,
                    g.getInstance().inventoryPUPeachyTime += i),
                    h.saveData(),
                    this.node.getChildByPath("Scroll/mask/iconPU").getComponent(s).spriteFrame = r,
                    this.node.getChildByPath("Scroll/mask/textPU_amount").getComponent(c).string = "x" + i,
                    this.node.getChildByPath("Scroll/ScrollHeader/Badge/text_LevelAngka").getComponent(c).string = "" + (e - 1),
                    this.node.getChildByPath("Scroll/ScrollHeader/Badge/text_LevelAngkaNew").getComponent(c).string = "" + e,
                    this.onClosed = t
                }
                ,
                r.btnClaimClicked = function() {
                    y.getInstance().play(y.SFX_UI_POSITIVE);
                    var e = this;
                    this.node.getComponent(p).play("popupLevelUp_out"),
                    this.node.getComponent(p).on(p.EventType.FINISHED, (function() {
                        h.getInstance().setHoldInput(!1),
                        e.node.active = !1,
                        e.onClosed()
                    }
                    ), this, !0)
                }
                ,
                t
            }(u)).prototype, "iconBombDeflect", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            S = t(C.prototype, "iconBerryBlast", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            I = t(C.prototype, "iconPeachTime", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            P = C)) || P));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PopupMission.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Data.ts", "./GameController.ts", "./LevelManager.ts", "./MissionLabel.ts", "./MissionManager.ts", "./SFXManager.ts", "./SceneHomescreen.ts"], (function(t) {
    "use strict";
    var e, n, o, i, a, s, r, l, c, p, u, d, g, h, f;
    return {
        setters: [function(t) {
            e = t.inheritsLoose
        }
        , function(t) {
            n = t.cclegacy,
            o = t._decorator,
            i = t.Label,
            a = t.Animation,
            s = t.Vec3,
            r = t.tween,
            l = t.Component
        }
        , function(t) {
            c = t.Data
        }
        , function(t) {
            p = t.GameController
        }
        , function(t) {
            u = t.LevelManager
        }
        , function(t) {
            d = t.MissionLabel
        }
        , function(t) {
            g = t.MissionManager
        }
        , function(t) {
            h = t.SFXManager
        }
        , function(t) {
            f = t.SceneHomescreen
        }
        ],
        execute: function() {
            var _;
            n._RF.push({}, "625d6JQb5RMcpritewxLviL", "PopupMission", void 0);
            var m = o.ccclass;
            o.property,
            t("PopupMission", m("PopupMission")(_ = function(t) {
                function n() {
                    for (var e, n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                        o[i] = arguments[i];
                    return (e = t.call.apply(t, [this].concat(o)) || this).holdInput = !1,
                    e
                }
                e(n, t);
                var o = n.prototype;
                return o.onEnable = function() {
                    this.refreshMissionUI(),
                    this.setHoldInput(!1);
                    for (var t = [], e = 0; e < g.getInstance().activeMission.length; e++)
                        t.push(g.getInstance().activeMission[e].analytic_id)
                }
                ,
                o.refreshMissionUI = function() {
                    for (var t = this, e = 0; e < g.getInstance().activeMission.length; e++) {
                        var n = g.getInstance().activeMission[e];
                        this.node.getChildByPath("cont_Popup/popup/cont_mission/cont_missionEntry" + (e + 1) + "/cont_backingComplete").active = n.current >= n.target && !n.claimed,
                        this.node.getChildByPath("cont_Popup/popup/cont_mission/cont_missionEntry" + (e + 1) + "/missionEntry").getComponent(d).refresh(n, "popup_mission"),
                        this.node.getChildByPath("cont_Popup/popup/cont_mission/cont_missionEntry" + (e + 1) + "/missionEntry").getComponent(d).setOnClaimed((function() {
                            t.refreshMissionUI(),
                            p.getInstance().mainCanvas.getChildByPath("homescreen").getComponent(f).checkUnclaimedMissionReward()
                        }
                        ))
                    }
                }
                ,
                o.setHoldInput = function(t) {
                    this.holdInput = t;
                    for (var e = 0; e < g.getInstance().activeMission.length; e++)
                        this.node.getChildByPath("cont_Popup/popup/cont_mission/cont_missionEntry" + (e + 1) + "/missionEntry").getComponent(d).setHoldInput(this.holdInput)
                }
                ,
                o.showAnimationClaimed = function(t, e) {
                    var n = this;
                    if (p.getInstance().setHoldInput(!0),
                    this.setHoldInput(!0),
                    this.node.getChildByPath("cont_Exp_Starfruit/StarfruitLabel/text_starfruitTop").getComponent(i).string = p.getInstance().formatNumber(parseInt(c.getInstance().starFruit.toFixed(0))),
                    "xp" == t.rewardType) {
                        var o = 0;
                        "small" == t.rewardSize ? o = 75 : "medium" == t.rewardSize ? o = 100 : "large" == t.rewardSize && (o = 125),
                        this.node.getChildByPath("cont_Exp_Starfruit").getComponent(a).play("expStarfruit_label_in"),
                        this.node.getChildByPath("cont_Exp_Starfruit").getComponent(a).on(a.EventType.FINISHED, (function() {
                            var t = u.getInstance().getDataLevelFromTotalExp();
                            if (t.level < u.getInstance().levelCap) {
                                var i = n.node.getChildByPath("cont_Exp_Starfruit/levelLabel/text_LevelAngka")
                                  , s = n.node.getChildByPath("cont_Exp_Starfruit/levelLabel/XPBarBack")
                                  , r = n.node.getChildByPath("cont_Exp_Starfruit/levelLabel/XPBarFill")
                                  , l = n.node.getChildByPath("cont_Exp_Starfruit/levelLabel/XPBarFill_transparant")
                                  , c = n.node.getChildByPath("cont_Exp_Starfruit/levelLabel/text_LevelAngka");
                                p.getInstance().playExpIncrease(e, i, s, r, l, t, o, c, "popup_mission", (function() {
                                    n.node.getChildByPath("cont_Exp_Starfruit").getComponent(a).play("expStarfruit_label_out"),
                                    p.getInstance().setHoldInput(!1),
                                    n.setHoldInput(!1),
                                    p.getInstance().mainCanvas.getChildByPath("homescreen").getComponent(f).updateLevelBar()
                                }
                                ))
                            } else
                                p.getInstance().setHoldInput(!1),
                                n.setHoldInput(!1)
                        }
                        ), this, !0)
                    } else if ("starfruit" == t.rewardType) {
                        var l = 0;
                        "small" == t.rewardSize ? l = 50 : "medium" == t.rewardSize ? l = 100 : "large" == t.rewardSize && (l = 150),
                        this.node.getChildByPath("cont_Exp_Starfruit").getComponent(a).play("expStarfruit_label_in"),
                        this.node.getChildByPath("cont_Exp_Starfruit").getComponent(a).on(a.EventType.FINISHED, (function() {
                            var t = p.Instance.particleTrailStarfruit
                              , o = n.node.getChildByPath("cont_Exp_Starfruit/StarfruitLabel/text_starfruitTop");
                            o.getComponent(i).string = p.getInstance().formatNumber(parseInt(c.getInstance().starFruit.toFixed(0)));
                            var u = new s(c.getInstance().starFruit,0,0);
                            c.getInstance().starFruit += l,
                            p.getInstance().playStarfruitIncrement(l),
                            r(u).delay(.5).to(.5, {
                                x: c.getInstance().starFruit
                            }, {
                                onUpdate: function() {
                                    o.getComponent(i).string = p.getInstance().formatNumber(parseInt(u.x.toFixed(0)))
                                }
                            }).call((function() {
                                n.node.getChildByPath("cont_Exp_Starfruit").getComponent(a).play("expStarfruit_label_out"),
                                p.getInstance().setHoldInput(!1),
                                n.setHoldInput(!1)
                            }
                            )).start(),
                            t.setWorldPosition(c.getInstance().convert2DPosTo3D(e.worldPosition));
                            var d = n.node.getChildByPath("cont_Exp_Starfruit/StarfruitLabel/starfruitLabelIcon").worldPosition;
                            r(t).to(.5, {
                                worldPosition: c.getInstance().convert2DPosTo3D(d)
                            }).start(),
                            p.saveData()
                        }
                        ), this, !0)
                    }
                }
                ,
                o.start = function() {}
                ,
                o.update = function(t) {
                    this.node.getChildByPath("cont_Popup/popup/cont_mission/headerWood/text_Timer").getComponent(i).string = p.getInstance().secondToString(p.getInstance().getSecondToNextDay())
                }
                ,
                o.btnCloseClicked = function() {
                    if (!this.holdInput) {
                        h.getInstance().play(h.SFX_SELECT);
                        var t = this
                          , e = this.node.getComponent(a);
                        e.play("popupMissions_out"),
                        e.on(a.EventType.FINISHED, (function() {
                            t.node.active = !1,
                            p.getInstance().setHoldInput(!1)
                        }
                        ), this, !0)
                    }
                }
                ,
                n
            }(l)) || _);
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/PreloadScreen.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameController.ts"], (function(e) {
    "use strict";
    var t, n, a, r, c, o, i, s, l, p, u;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            n = e.inheritsLoose,
            a = e.initializerDefineProperty,
            r = e.assertThisInitialized
        }
        , function(e) {
            c = e.cclegacy,
            o = e._decorator,
            i = e.resources,
            s = e.Prefab,
            l = e.instantiate,
            p = e.Component
        }
        , function(e) {
            u = e.GameController
        }
        ],
        execute: function() {
            var f, y, d, h, P, b, g, I;
            c._RF.push({}, "0b079ZlGLxMPoqEt1zDI/O4", "PreloadScreen", void 0);
            var S = o.ccclass
              , _ = o.property;
            e("PreloadScreen", (f = S("PreloadScreen"),
            y = _({
                type: String
            }),
            d = _({
                type: String
            }),
            f(((I = function(e) {
                function t() {
                    for (var t, n = arguments.length, c = new Array(n), o = 0; o < n; o++)
                        c[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(c)) || this,
                    a(t, "prefabPath", b, r(t)),
                    a(t, "type", g, r(t)),
                    t
                }
                n(t, e);
                var c = t.prototype;
                return c.start = function() {
                    t.dataPath[this.type] = this,
                    i.preload(this.prefabPath, s, (function(e, t) {}
                    ))
                }
                ,
                c.loadPrefab = function(e) {
                    var n = this;
                    i.load(this.prefabPath, s, (function(a, r) {
                        var c = l(r);
                        if (c.setParent(n.node),
                        "senseiswag" == n.type ? u.Instance.senseiSwagScreen = c : "settings" == n.type ? u.Instance.settingScreen = c : "language" == n.type ? u.Instance.languageScreen = c : "round_point" == n.type ? u.Instance.selectRoundScreen = c : "round_finish" == n.type ? u.Instance.finishRoundScreen = c : "select_mode" == n.type ? u.Instance.selectModeScreen = c : "result" == n.type ? u.Instance.resultScreen = c : "gameplay" == n.type ? u.Instance.gameplayScreen = c : "cont_peachy" == n.type ? u.Instance.contPeachy = c : "cont_deflect" == n.type ? u.Instance.contDeflect = c : "cont_berryblast" == n.type ? u.Instance.contBerryBlast = c : "result_score" == n.type && (u.Instance.resultScore = c),
                        c.active = !1,
                        "round_finish" == n.type || "result" == n.type)
                            e();
                        else if ("senseiswag" == n.type) {
                            var o = 0;
                            i.load("particle/particle_juiceStarfruit", s, (function(t, n) {
                                var a = l(n);
                                a.setParent(u.Instance.node.parent),
                                u.Instance.particleJuiceStarfruit = a,
                                2 == (o += 1) && e()
                            }
                            )),
                            i.load("particle/particle_unlockItem", s, (function(t, n) {
                                var a = l(n);
                                a.setParent(u.Instance.node.parent),
                                u.Instance.particleUnlockItem = a,
                                2 == (o += 1) && e()
                            }
                            ))
                        } else if ("gameplay" == n.type || "select_mode" == n.type) {
                            var p = 0;
                            t.dataPath.cont_peachy.loadPrefab((function() {
                                4 == (p += 1) && e()
                            }
                            )),
                            t.dataPath.cont_deflect.loadPrefab((function() {
                                4 == (p += 1) && e()
                            }
                            )),
                            t.dataPath.cont_berryblast.loadPrefab((function() {
                                4 == (p += 1) && e()
                            }
                            )),
                            t.dataPath.result_score.loadPrefab((function() {
                                4 == (p += 1) && e()
                            }
                            ))
                        } else
                            e()
                    }
                    ))
                }
                ,
                t
            }(p)).dataPath = {},
            b = t((P = I).prototype, "prefabPath", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            g = t(P.prototype, "type", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            h = P)) || h));
            c._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/preloadSize.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, n, r, i, o;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }
        , function(e) {
            n = e.cclegacy,
            r = e._decorator,
            i = e.director,
            o = e.Component
        }
        ],
        execute: function() {
            var c;
            n._RF.push({}, "0c172ndj71P+7E8BmP3v+bU", "preloadSize", void 0);
            var a = r.ccclass;
            r.property,
            e("testSize", a("testSize")(c = function(e) {
                function n() {
                    for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                        r[i] = arguments[i];
                    return (t = e.call.apply(e, [this].concat(r)) || this).launched = !1,
                    t
                }
                t(n, e);
                var r = n.prototype;
                return r.start = function() {
                    ytgame.game.firstFrameReady()
                }
                ,
                r.update = function(e) {
                    !this.launched && window.innerWidth > 0 && window.innerHeight > 0 && (this.launched = !0,
                    i.loadScene("loading"))
                }
                ,
                n
            }(o)) || c);
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ResourcesManager.ts", ["cc"], (function(e) {
    "use strict";
    var s, t, n;
    return {
        setters: [function(e) {
            s = e.cclegacy,
            t = e._decorator,
            n = e.resources
        }
        ],
        execute: function() {
            var r, c;
            s._RF.push({}, "9256a5K6DBAr7ODOe7zi1SD", "ResourcesManager", void 0);
            var u = t.ccclass;
            t.property,
            e("ResourcesManager", u("ResourcesManager")(((c = function() {
                function e() {
                    this.listResources = {}
                }
                e.getInstance = function() {
                    return null == e.Instance && (e.Instance = new e),
                    e.Instance
                }
                ;
                var s = e.prototype;
                return s.update = function(e) {}
                ,
                s.getResource = function(e, s) {
                    return n.get(e, s)
                }
                ,
                s.loadResources = function(e, s, t) {
                    var r = this;
                    null != this.listResources[e] && null != this.listResources[e] ? t(n.get(e, s)) : n.load(e, s, (function(s, n) {
                        r.listResources[e] = n,
                        t(r.listResources[e])
                    }
                    ))
                }
                ,
                e
            }()).Instance = null,
            r = c)) || r);
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SceneContinue.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AdsManager.ts", "./FruitManager.ts", "./GameController.ts", "./ScenePause.ts"], (function(e) {
    "use strict";
    var t, n, a, o, i, c, s, r, u, g;
    return {
        setters: [function(e) {
            t = e.inheritsLoose
        }
        , function(e) {
            n = e.cclegacy,
            a = e._decorator,
            o = e.Label,
            i = e.Animation,
            c = e.Component
        }
        , function(e) {
            s = e.AdsManager
        }
        , function(e) {
            r = e.FruitManager
        }
        , function(e) {
            u = e.GameController
        }
        , function(e) {
            g = e.ScenePause
        }
        ],
        execute: function() {
            var h;
            n._RF.push({}, "a6bb9rk+1hGDYgVThmTj0Ci", "SceneContinue", void 0);
            var l = a.ccclass;
            a.property,
            e("SceneContinue", l("SceneContinue")(h = function(e) {
                function n() {
                    for (var t, n = arguments.length, a = new Array(n), o = 0; o < n; o++)
                        a[o] = arguments[o];
                    return (t = e.call.apply(e, [this].concat(a)) || this).holdInput = !1,
                    t
                }
                t(n, e);
                var a = n.prototype;
                return a.onEnable = function() {
                    this.holdInput = !1,
                    this.node.getChildByPath("CrossContinue").active = u.gameMode == u.MODE_CLASSIC,
                    this.node.getChildByPath("text_time").active = u.gameMode == u.MODE_ZEN;
                    var e = "";
                    u.gameMode == u.MODE_CLASSIC ? e = "+1 Extra Lives!" : u.gameMode == u.MODE_ZEN && (e = "+10 Seconds!"),
                    this.node.getChildByPath("text_extraLives").getComponent(o).string = e
                }
                ,
                a.start = function() {}
                ,
                a.btnContinueClicked = function() {
                    if (!this.holdInput) {
                        this.holdInput = !0;
                        var e = this;
                        s.showRewardedAds((function() {
                            u.getInstance().useContinue = !0;
                            var t = u.Instance.gameplayScreen.getChildByPath("bg_container_continue").getComponent(i);
                            t.play("bg_container_continue_hide"),
                            t.on(i.EventType.FINISHED, (function() {
                                u.Instance.gameplayScreen.getChildByPath("bg_container_continue").active = !1
                            }
                            ), this, !0);
                            var n = e.getComponent(i);
                            n.play("continue_out"),
                            n.on(i.EventType.FINISHED, (function() {
                                e.node.active = !1,
                                e.holdInput = !1,
                                g.getInstance().showButtonPause(),
                                u.gameMode == u.MODE_CLASSIC ? u.getInstance().scheduleOnce((function() {
                                    u.getInstance().getHealth() < 3 && u.getInstance().updateHealth(u.getInstance().getHealth() + 1, !0)
                                }
                                ), .1) : u.gameMode == u.MODE_ZEN && u.getInstance().updateZenTimer(10),
                                r.getInstance().bombCounter = 0,
                                r.getInstance().resetWave(),
                                u.getInstance().setGameState(u.STATE_GAME_PLAYING),
                                u.getInstance().dieFromBomb = !1,
                                u.getInstance().setHoldInput(!1),
                                u.getInstance().gameData.g.push({
                                    a: "rv",
                                    t: u.getInstance().timerGameplay.toFixed(4)
                                })
                            }
                            ), this, !0)
                        }
                        ), (function() {
                            var t = u.Instance.gameplayScreen.getChildByPath("bg_container_continue").getComponent(i);
                            t.play("bg_container_continue_hide"),
                            t.on(i.EventType.FINISHED, (function() {
                                u.Instance.gameplayScreen.getChildByPath("bg_container_continue").active = !1
                            }
                            ), this, !0);
                            var n = e.getComponent(i);
                            n.play("continue_out"),
                            n.on(i.EventType.FINISHED, (function() {
                                e.node.active = !1,
                                e.holdInput = !1,
                                u.getInstance().showGameOver((function() {
                                    u.getInstance().getScreenState() != u.SCREEN_STATE_RESULT_REWARD && u.getInstance().setScreenState(u.SCREEN_STATE_RESULT_REWARD)
                                }
                                ))
                            }
                            ), this, !0)
                        }
                        ))
                    }
                }
                ,
                a.btnSkipClicked = function() {
                    if (!this.holdInput) {
                        this.holdInput = !0;
                        var e = this
                          , t = u.Instance.gameplayScreen.getChildByPath("bg_container_continue").getComponent(i);
                        t.play("bg_container_continue_hide"),
                        t.on(i.EventType.FINISHED, (function() {
                            u.Instance.gameplayScreen.getChildByPath("bg_container_continue").active = !1
                        }
                        ), this, !0);
                        var n = this.getComponent(i);
                        n.play("continue_out"),
                        n.on(i.EventType.FINISHED, (function() {
                            e.node.active = !1,
                            e.holdInput = !1,
                            u.getInstance().showGameOver((function() {
                                u.getInstance().getScreenState() != u.SCREEN_STATE_RESULT_REWARD && u.getInstance().setScreenState(u.SCREEN_STATE_RESULT_REWARD)
                            }
                            ))
                        }
                        ), this, !0)
                    }
                }
                ,
                n
            }(c)) || h);
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SceneDeflectOffer.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AdsManager.ts", "./GameController.ts", "./SFXManager.ts", "./SceneGameplay.ts", "./ScenePause.ts"], (function(e) {
    "use strict";
    var t, n, o, a, c, i, p, r, s, l, u, f, h, y;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            n = e.inheritsLoose,
            o = e.initializerDefineProperty,
            a = e.assertThisInitialized,
            c = e.createClass
        }
        , function(e) {
            i = e.cclegacy,
            p = e._decorator,
            r = e.Animation,
            s = e.Component
        }
        , function(e) {
            l = e.AdsManager
        }
        , function(e) {
            u = e.GameController
        }
        , function(e) {
            f = e.SFXManager
        }
        , function(e) {
            h = e.SceneGameplay
        }
        , function(e) {
            y = e.ScenePause
        }
        ],
        execute: function() {
            var I, d, g, E, S, T;
            i._RF.push({}, "cbc993uy0RGNZvVly9bTotR", "SceneDeflectOffer", void 0);
            var _ = p.ccclass
              , m = p.property;
            e("SceneDeflectOffer", (I = _("SceneDeflectOffer"),
            d = m({
                type: String,
                displayName: "Power up type"
            }),
            I(((T = function(e) {
                function t() {
                    for (var t, n = arguments.length, c = new Array(n), i = 0; i < n; i++)
                        c[i] = arguments[i];
                    return t = e.call.apply(e, [this].concat(c)) || this,
                    o(t, "powerUpType", S, a(t)),
                    t._holdInput = !1,
                    t
                }
                n(t, e);
                var i = t.prototype;
                return i.onEnable = function() {
                    this.holdInput = !1
                }
                ,
                i.start = function() {}
                ,
                i.btnClaimRewardClicked = function() {
                    var e = this;
                    if (!this.holdInput)
                        if (this.holdInput = !0,
                        t.FROM_SELECT_MODE_SCREEN) {
                            t.FROM_SELECT_MODE_SCREEN = !1;
                            var n = this.getComponent(r);
                            n.play("deflectClaim_out"),
                            n.on(r.EventType.FINISHED, (function() {
                                e.holdInput = !1,
                                e.node.active = !1,
                                u.getInstance().setHoldInput(!1)
                            }
                            ), this, !0)
                        } else {
                            var o = this
                              , a = this.getComponent(r);
                            a.play("deflectClaim_out"),
                            a.on(r.EventType.FINISHED, (function() {
                                o.holdInput = !1,
                                f.getInstance().play(f.SFX_GAMESTART),
                                "deflect" == o.powerUpType ? u.getInstance().useDeflectPowerUp() : "berryblast" == o.powerUpType ? u.getInstance().useBerryBlastPowerUp() : "peachtime" == o.powerUpType && u.getInstance().usePeachTimePowerUp();
                                var t = u.Instance.gameplayScreen.getComponent(r);
                                t.play("animation_ready_go"),
                                t.on(r.EventType.FINISHED, (function() {
                                    u.getInstance().setGameState(u.STATE_GAME_PLAYING),
                                    y.getInstance().showButtonPause()
                                }
                                ), e, !0),
                                e.node.active = !1
                            }
                            ), this, !0)
                        }
                }
                ,
                i.btnFreeWatchAdClicked = function() {
                    if (!this.holdInput) {
                        this.holdInput = !0;
                        var e = this;
                        l.showRewardedAds((function() {
                            var t = this;
                            "deflect" == e.powerUpType ? (u.getInstance().gameData.d = 1,
                            u.getInstance().useDeflect = !0) : "berryblast" == e.powerUpType || e.powerUpType;
                            var n = e.getComponent(r);
                            n.play("deflectOffer_out"),
                            n.on(r.EventType.FINISHED, (function() {
                                n.play("deflectClaim_in"),
                                n.on(r.EventType.FINISHED, (function() {
                                    e.holdInput = !1,
                                    n.play("deflectClaim_idle")
                                }
                                ), t, !0)
                            }
                            ), this, !0)
                        }
                        ), (function() {
                            e.skipDeflect()
                        }
                        ))
                    }
                }
                ,
                i.btnSkipClicked = function() {
                    this.holdInput || this.skipDeflect()
                }
                ,
                i.skipDeflect = function() {
                    var e = this;
                    this.holdInput = !0;
                    var t = this
                      , n = this.getComponent(r);
                    n.play("deflectOffer_out"),
                    n.on(r.EventType.FINISHED, (function() {
                        t.holdInput = !1,
                        f.getInstance().play(f.SFX_GAMESTART),
                        "deflect" == t.powerUpType ? h.getInstance().showIconDeflect(!1) : "berryblast" == t.powerUpType ? h.getInstance().showIconBerry(!1) : "peachtime" == t.powerUpType && h.getInstance().showIconPeachTime(!1);
                        var n = u.Instance.gameplayScreen.getComponent(r);
                        n.play("animation_ready_go"),
                        n.on(r.EventType.FINISHED, (function() {
                            u.getInstance().setGameState(u.STATE_GAME_PLAYING),
                            y.getInstance().showButtonPause()
                        }
                        ), e, !0)
                    }
                    ), this, !0)
                }
                ,
                c(t, [{
                    key: "holdInput",
                    get: function() {
                        return this._holdInput
                    },
                    set: function(e) {
                        this._holdInput = e
                    }
                }]),
                t
            }(s)).FROM_SELECT_MODE_SCREEN = !1,
            S = t((E = T).prototype, "powerUpType", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            g = E)) || g));
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SceneGameplay.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameplayLeaderboard.ts"], (function(e) {
    "use strict";
    var t, n, a, o, c, i, r, l, u;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            n = e.inheritsLoose,
            a = e.initializerDefineProperty,
            o = e.assertThisInitialized
        }
        , function(e) {
            c = e.cclegacy,
            i = e._decorator,
            r = e.SpriteFrame,
            l = e.Component
        }
        , function(e) {
            u = e.GameplayLeaderboard
        }
        ],
        execute: function() {
            var s, p, y, d, f, h, m, b;
            c._RF.push({}, "7863cbzjrlNZqqR9WbURuqb", "SceneGameplay", void 0);
            var g = i.ccclass
              , v = i.property;
            e("SceneGameplay", (s = g("SceneGameplay"),
            p = v({
                type: r,
                displayName: "default icon score"
            }),
            y = v({
                type: u
            }),
            s(((b = function(e) {
                function t() {
                    for (var t, n = arguments.length, c = new Array(n), i = 0; i < n; i++)
                        c[i] = arguments[i];
                    return t = e.call.apply(e, [this].concat(c)) || this,
                    a(t, "defaultIconScore", h, o(t)),
                    a(t, "gameplayLeaderboard", m, o(t)),
                    t
                }
                n(t, e),
                t.getInstance = function() {
                    return t.Instance
                }
                ;
                var c = t.prototype;
                return c.onLoad = function() {
                    t.Instance = this
                }
                ,
                c.start = function() {}
                ,
                c.showIconDeflect = function(e) {
                    this.node.getChildByPath("container_icon_deflect/layoutPU/iconDeflect").active = e
                }
                ,
                c.showIconBerry = function(e) {
                    this.node.getChildByPath("container_icon_deflect/layoutPU/iconBerry").active = e
                }
                ,
                c.showIconPeachTime = function(e) {
                    this.node.getChildByPath("container_icon_deflect/layoutPU/iconPeachy").active = e
                }
                ,
                t
            }(l)).Instance = void 0,
            h = t((f = b).prototype, "defaultIconScore", [p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            m = t(f.prototype, "gameplayLeaderboard", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            d = f)) || d));
            c._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SceneHomescreen.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Data.ts", "./GameController.ts", "./LevelManager.ts", "./MissionManager.ts", "./SFXManager.ts"], (function(e) {
    "use strict";
    var n, t, i, a, o, r, l, s, c, p, u, g, f, d, h, m;
    return {
        setters: [function(e) {
            n = e.applyDecoratedDescriptor,
            t = e.inheritsLoose,
            i = e.initializerDefineProperty,
            a = e.assertThisInitialized
        }
        , function(e) {
            o = e.cclegacy,
            r = e._decorator,
            l = e.Node,
            s = e.Label,
            c = e.UITransform,
            p = e.Animation,
            u = e.Component
        }
        , function(e) {
            g = e.Data
        }
        , function(e) {
            f = e.GameController
        }
        , function(e) {
            d = e.LevelManager
        }
        , function(e) {
            h = e.MissionManager
        }
        , function(e) {
            m = e.SFXManager
        }
        ],
        execute: function() {
            var v, b, y, M, I, w, C, x, E, L, F, N, B, S, z, T, D, k;
            o._RF.push({}, "19cfeEkEAtPR4ufZJYYgPzW", "SceneHomescreen", void 0);
            var A = r.ccclass
              , G = r.property;
            e("SceneHomescreen", (v = A("SceneHomescreen"),
            b = G({
                type: l
            }),
            y = G({
                type: l
            }),
            M = G({
                type: l
            }),
            I = G({
                type: l
            }),
            w = G({
                type: s
            }),
            C = G({
                type: l
            }),
            x = G({
                type: l
            }),
            v(((k = function(e) {
                function n() {
                    for (var n, t = arguments.length, o = new Array(t), r = 0; r < t; r++)
                        o[r] = arguments[r];
                    return n = e.call.apply(e, [this].concat(o)) || this,
                    i(n, "textLevelAngka", F, a(n)),
                    i(n, "xpBarFillTransparant", N, a(n)),
                    i(n, "xpBarFill", B, a(n)),
                    i(n, "tagGreenClaim", S, a(n)),
                    i(n, "textWithFriends", z, a(n)),
                    i(n, "nodeNotificationNewMission", T, a(n)),
                    i(n, "nodeClaimableMission", D, a(n)),
                    n.holdInput = !1,
                    n.index = 0,
                    n
                }
                t(n, e);
                var o = n.prototype;
                return o.onLoad = function() {
                    console.log("HOMESCREEN LOADED")
                }
                ,
                o.onEnable = function() {
                    this.refresh()
                }
                ,
                o.refresh = function() {
                    this.nodeNotificationNewMission.active = !1,
                    this.nodeClaimableMission.active = !1,
                    h.getInstance().isAnyMissionClaimable() ? this.nodeClaimableMission.active = !0 : g.getInstance().needGenerateNewMission && (this.nodeNotificationNewMission.active = !0),
                    this.updateLevelBar(),
                    n.listUserId = [],
                    this.checkUnclaimedMissionReward()
                }
                ,
                o.updateLevelBar = function() {
                    var e = d.getInstance().getDataLevelFromTotalExp();
                    this.textLevelAngka.getComponent(s).string = "" + e.level,
                    this.xpBarFillTransparant.getComponent(c).width = e.curExp / e.totalExpToLevelUp * 400,
                    this.xpBarFill.getComponent(c).width = e.curExp / e.totalExpToLevelUp * 400
                }
                ,
                o.start = function() {}
                ,
                o.update = function(e) {}
                ,
                o.checkUnclaimedMissionReward = function() {
                    for (var e = !1, n = 0; n < h.getInstance().activeMission.length; n++) {
                        var t = h.getInstance().activeMission[n];
                        t.current >= t.target && !t.claimed && (e = !0)
                    }
                    this.tagGreenClaim.active = e
                }
                ,
                o.clickButton = function(e, n) {
                    var t = this;
                    if (m.getInstance().play(m.SFX_SELECT),
                    !this.holdInput) {
                        this.holdInput = !0;
                        if ("mission" == n) {
                            f.getInstance().setHoldInput(!0),
                            g.getInstance().needGenerateNewMission && (g.getInstance().needGenerateNewMission = !1);
                            var i = f.getInstance().mainCanvasOverlay.getChildByPath("container_missionsPopup");
                            i.active = !0;
                            var a = i.getComponent(p);
                            a.play("popupMissions_in"),
                            a.once(p.EventType.FINISHED, (function() {
                                t.holdInput = !1
                            }
                            ))
                        }
                    }
                }
                ,
                n
            }(u)).listUserId = [],
            F = n((L = k).prototype, "textLevelAngka", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            N = n(L.prototype, "xpBarFillTransparant", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            B = n(L.prototype, "xpBarFill", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            S = n(L.prototype, "tagGreenClaim", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            z = n(L.prototype, "textWithFriends", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            T = n(L.prototype, "nodeNotificationNewMission", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            D = n(L.prototype, "nodeClaimableMission", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            E = L)) || E));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SceneLanguage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameController.ts", "./SFXManager.ts"], (function(n) {
    "use strict";
    var t, e, o, c, a, r;
    return {
        setters: [function(n) {
            t = n.inheritsLoose
        }
        , function(n) {
            e = n.cclegacy,
            o = n._decorator,
            c = n.Component
        }
        , function(n) {
            a = n.GameController
        }
        , function(n) {
            r = n.SFXManager
        }
        ],
        execute: function() {
            var u;
            e._RF.push({}, "47b18oI1+xKpbv/7R/8J7BL", "SceneLanguage", void 0);
            var s = o.ccclass;
            o.property,
            n("SceneLanguage", s("SceneLanguage")(u = function(n) {
                function e() {
                    for (var t, e = arguments.length, o = new Array(e), c = 0; c < e; c++)
                        o[c] = arguments[c];
                    return (t = n.call.apply(n, [this].concat(o)) || this).holdInput = !1,
                    t
                }
                t(e, n);
                var o = e.prototype;
                return o.onEnable = function() {
                    this.holdInput = !1
                }
                ,
                o.start = function() {}
                ,
                o.backButtonClicked = function() {
                    this.holdInput || (this.holdInput = !0,
                    r.getInstance().play(r.SFX_SELECT),
                    a.getInstance().exitScreen((function() {
                        a.getInstance().setScreenState(a.SCREEN_STATE_SETTING)
                    }
                    )))
                }
                ,
                e
            }(c)) || u);
            e._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SceneLoading.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    "use strict";
    var e, n, o, i, a, r, s, c;
    return {
        setters: [function(t) {
            e = t.inheritsLoose
        }
        , function(t) {
            n = t.cclegacy,
            o = t._decorator,
            i = t.UITransform,
            a = t.Vec3,
            r = t.setDisplayStats,
            s = t.ProgressBar,
            c = t.Component
        }
        ],
        execute: function() {
            var d, h;
            n._RF.push({}, "c94299uflFBvpaB1IqBJqol", "SceneLoading", void 0);
            var g = o.ccclass;
            o.property,
            t("SceneLoading", g("SceneLoading")(((h = function(t) {
                function n() {
                    return t.apply(this, arguments) || this
                }
                e(n, t),
                n.getInstance = function() {
                    return n.Instance
                }
                ;
                var o = n.prototype;
                return o.onLoad = function() {
                    n.Instance = this;
                    var t = this.node.getChildByPath("Background").getComponent(i).width
                      , e = this.node.getChildByPath("Background").getComponent(i).height
                      , o = this.node.getComponent(i).width
                      , s = this.node.getComponent(i).height
                      , c = t / o
                      , d = e / s;
                    if (c < 1 || d < 1) {
                        var h = Math.min(c, d);
                        if (c < 1 && h == c) {
                            var g = o / t;
                            this.node.getChildByPath("Background").setScale(new a(g,g,g))
                        } else if (d < 1 && h == d) {
                            var u = s / e;
                            this.node.getChildByPath("Background").setScale(new a(u,u,u))
                        }
                    }
                    r(!1)
                }
                ,
                o.start = function() {}
                ,
                o.updateLoadingBar = function(t) {
                    this.node.getChildByPath("LoadingBar").getComponent(s).progress = t
                }
                ,
                n
            }(c)).Instance = void 0,
            d = h)) || d);
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ScenePause.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BGMManager.ts", "./BlitzManager.ts", "./ControllerBlade.ts", "./FruitManager.ts", "./GameController.ts", "./MissionLabel.ts", "./MissionManager.ts", "./SFXManager.ts", "./SceneGameplay.ts"], (function(t) {
    "use strict";
    var e, n, s, a, o, i, u, c, d, g, h, l, r, p, y, I;
    return {
        setters: [function(t) {
            e = t.inheritsLoose,
            n = t.createClass
        }
        , function(t) {
            s = t.cclegacy,
            a = t._decorator,
            o = t.Label,
            i = t.Animation,
            u = t.Component
        }
        , function(t) {
            c = t.BGMManager
        }
        , function(t) {
            d = t.BlitzManager
        }
        , function(t) {
            g = t.ControllerBlade
        }
        , function(t) {
            h = t.FruitManager
        }
        , function(t) {
            l = t.GameController
        }
        , function(t) {
            r = t.MissionLabel
        }
        , function(t) {
            p = t.MissionManager
        }
        , function(t) {
            y = t.SFXManager
        }
        , function(t) {
            I = t.SceneGameplay
        }
        ],
        execute: function() {
            var m, _;
            s._RF.push({}, "76f71VENV5CL6CIxvHjGTZ+", "ScenePause", void 0);
            var P = a.ccclass;
            a.property,
            t("ScenePause", P("ScenePause")(((_ = function(t) {
                function s() {
                    for (var e, n = arguments.length, s = new Array(n), a = 0; a < n; a++)
                        s[a] = arguments[a];
                    return (e = t.call.apply(t, [this].concat(s)) || this).isBtnPauseHidden = !0,
                    e._holdButtonPause = !1,
                    e.holdButtonsPaused = !1,
                    e
                }
                e(s, t),
                s.getInstance = function() {
                    return s.Instance
                }
                ;
                var a = s.prototype;
                return a.onLoad = function() {
                    s.Instance = this,
                    window.pauseMeSoftly = function() {
                        window.isPlaying && (window.gameisPaused = !0,
                        this.btnPauseClicked())
                    }
                    .bind(this),
                    ytgame.system.onPause(function() {
                        window.isPlaying && (window.gameisPaused = !0,
                        this.btnPauseClicked())
                    }
                    .bind(this)),
                    ytgame.system.onResume(function() {
                        window.fastManageAudioContext()
                    }
                    .bind(this))
                }
                ,
                a.start = function() {}
                ,
                a.update = function() {
                    this.node.getChildByPath("text_paused/cont_Popup/popup/cont_mission/headerWood/text_Timer").getComponent(o).string = l.getInstance().secondToString(l.getInstance().getSecondToNextDay())
                }
                ,
                a.showButtonPause = function() {
                    if (this.isBtnPauseHidden) {
                        this.holdButtonPause = !0,
                        this.isBtnPauseHidden = !1;
                        var t = this.node.getChildByPath("ButtonPause").getComponent(i);
                        t.play("pause_in"),
                        t.on(i.EventType.FINISHED, (function() {
                            l.getInstance().getGameState() == l.STATE_GAME_PLAYING && (this.holdButtonPause = !1)
                        }
                        ), this, !0)
                    }
                }
                ,
                a.hideButtonPause = function() {
                    if (!this.isBtnPauseHidden) {
                        this.holdButtonPause = !0,
                        this.isBtnPauseHidden = !0;
                        var t = this.node.getChildByPath("ButtonPause").getComponent(i);
                        t.play("pause_out"),
                        t.on(i.EventType.FINISHED, (function() {
                            l.getInstance().getGameState() == l.STATE_GAME_PLAYING && (this.holdButtonPause = !1)
                        }
                        ), this, !0)
                    }
                }
                ,
                a.btnPauseClicked = function() {
                    if (!this.holdButtonPause) {
                        window.fast && window.fast.gmg.unhide(),
                        this.holdButtonsPaused = !0,
                        this.hideButtonPause(),
                        l.Instance.gameplayScreen.getChildByPath("bg_container_pause").active = !0,
                        l.Instance.gameplayScreen.getChildByPath("bg_container_pause").getComponent(i).play("bg_container_continue_show");
                        var t = this.node.getComponent(i);
                        t.play("pauseOthers_in"),
                        t.on(i.EventType.FINISHED, (function() {
                            this.holdButtonsPaused = !1
                        }
                        ), this, !0),
                        l.getInstance().setHoldInput(!0),
                        l.getInstance().setGameState(l.STATE_GAME_PAUSE),
                        this.node.getChildByPath("ButtonSFX/ButtonSFXOn").active = !y.isMuted,
                        this.node.getChildByPath("ButtonMusic/ButtonMusicOn").active = !c.isMuted,
                        y.getInstance().setVolume(0),
                        this.refreshLabelMisi()
                    }
                }
                ,
                a.refreshLabelMisi = function() {
                    for (var t = this, e = 0; e < p.getInstance().activeMission.length; e++) {
                        var n = p.getInstance().activeMission[e];
                        this.node.getChildByPath("text_paused/cont_Popup/popup/cont_mission/cont_missionEntry" + (e + 1) + "/cont_backingComplete").active = n.current >= n.target && !n.claimed,
                        this.node.getChildByPath("text_paused/cont_Popup/popup/cont_mission/cont_missionEntry" + (e + 1) + "/missionEntry").getComponent(r).refresh(n, "pause", !1),
                        this.node.getChildByPath("text_paused/cont_Popup/popup/cont_mission/cont_missionEntry" + (e + 1) + "/missionEntry").getComponent(r).setOnClaimed((function() {
                            t.refreshLabelMisi()
                        }
                        ))
                    }
                }
                ,
                a.btnExitClicked = function() {
                    if (!this.holdButtonsPaused) {
                        window.fast && (window.isPlaying = 0,
                        window.fast.trackEvent("EVENT_LEVELFAIL")),
                        this.holdButtonsPaused = !0,
                        c.getInstance().stopBombBGM(),
                        d.getInstance().reset(),
                        g.getInstance().stopAllBladeSFX(),
                        h.getInstance().reset();
                        var t = l.Instance.gameplayScreen.getChildByPath("bg_container_pause").getComponent(i);
                        t.play("bg_container_continue_hide"),
                        t.on(i.EventType.FINISHED, (function() {
                            l.Instance.gameplayScreen.getChildByPath("bg_container_pause").active = !1
                        }
                        ), this, !0);
                        var e = this.node.getComponent(i);
                        e.play("pauseOthers_out"),
                        e.on(i.EventType.FINISHED, (function() {
                            this.holdButtonsPaused = !1,
                            l.getInstance().gameplayScreen.getComponent(I).gameplayLeaderboard.getComponent(i).play("gameplayLeaderboards_out"),
                            h.getInstance().tryResumeAllPhysic(),
                            h.getInstance().trySlashAllFruit(),
                            this.scheduleOnce((function() {
                                l.getInstance().exitScreen((function() {
                                    l.getInstance().setScreenState(l.SCREEN_STATE_HOMESCREEN),
                                    l.getInstance().setHoldInput(!1),
                                    l.bestScore = l.prevBestScore,
                                    l.saveData()
                                }
                                ))
                            }
                            ), 1)
                        }
                        ), this, !0)
                    }
                }
                ,
                a.btnRetryClicked = function() {
                    if (!this.holdButtonsPaused) {
                        window.fast && (window.fast.gmg.hide(),
                        window.fast.info.qfun || (window.isPlaying = 0,
                        window.fast.trackEvent("EVENT_LEVELFAIL"))),
                        this.holdButtonsPaused = !0,
                        y.getInstance().play(y.SFX_SELECT),
                        c.getInstance().stopBombBGM(),
                        d.getInstance().reset(),
                        g.getInstance().stopAllBladeSFX(),
                        h.getInstance().reset();
                        var t = l.Instance.gameplayScreen.getChildByPath("bg_container_pause").getComponent(i);
                        t.play("bg_container_continue_hide"),
                        t.on(i.EventType.FINISHED, (function() {
                            l.Instance.gameplayScreen.getChildByPath("bg_container_pause").active = !1
                        }
                        ), this, !0);
                        var e = this.node.getComponent(i);
                        e.play("pauseOthers_out"),
                        e.on(i.EventType.FINISHED, (function() {
                            this.holdButtonsPaused = !1,
                            l.getInstance().setHoldInput(!1),
                            l.getInstance().gameplayScreen.getComponent(I).gameplayLeaderboard.getComponent(i).play("gameplayLeaderboards_out"),
                            h.getInstance().tryResumeAllPhysic(),
                            h.getInstance().trySlashAllFruit(),
                            this.scheduleOnce((function() {
                                l.getInstance().exitScreen((function() {
                                    l.bestScore = l.prevBestScore,
                                    l.getInstance().setScreenState(l.SCREEN_STATE_GAMEPLAY),
                                    l.getInstance().setHoldInput(!1),
                                    l.saveData()
                                }
                                ))
                            }
                            ), 1)
                        }
                        ), this, !0)
                    }
                }
                ,
                a.btnResumeClicked = function() {
                    if (window.fast && window.fast.gmg.hide(),
                    window.gameisPaused = !1,
                    !this.holdButtonsPaused) {
                        this.holdButtonsPaused = !0,
                        y.getInstance().play(y.SFX_SELECT);
                        var t = this
                          , e = l.Instance.gameplayScreen.getChildByPath("bg_container_pause").getComponent(i);
                        e.play("bg_container_continue_hide"),
                        e.on(i.EventType.FINISHED, (function() {
                            l.Instance.gameplayScreen.getChildByPath("bg_container_pause").active = !1
                        }
                        ), this, !0);
                        var n = this.node.getComponent(i);
                        n.play("pauseOthers_out"),
                        n.on(i.EventType.FINISHED, (function() {
                            this.holdButtonsPaused = !1,
                            h.getInstance().tryResumeAllPhysic(),
                            l.getInstance().setHoldInput(!1),
                            t.showButtonPause(),
                            l.getInstance().getHealth() <= 0 ? l.getInstance().setGameState(l.STATE_GAME_LOSE) : l.getInstance().setGameState(l.STATE_GAME_PLAYING)
                        }
                        ), this, !0),
                        y.getInstance().setVolume(y.isMuted ? 0 : 1)
                    }
                }
                ,
                a.btnToggleSFX = function() {
                    y.getInstance().muteSFX(!y.isMuted),
                    this.node.getChildByPath("ButtonSFX/ButtonSFXOn").active = !y.isMuted,
                    y.getInstance().setVolume(0),
                    y.getInstance().play(y.SFX_SELECT),
                    l.saveData(),
                    c.mutedBeforeSFX = y.isMuted
                }
                ,
                a.btnToggleMusic = function() {
                    y.getInstance().play(y.SFX_SELECT),
                    c.getInstance().muteBGM(!c.isMuted),
                    this.node.getChildByPath("ButtonMusic/ButtonMusicOn").active = !c.isMuted,
                    l.saveData(),
                    c.mutedBeforeBGM = c.isMuted
                }
                ,
                n(s, [{
                    key: "holdButtonPause",
                    get: function() {
                        return this._holdButtonPause
                    },
                    set: function(t) {
                        this._holdButtonPause = t
                    }
                }]),
                s
            }(u)).Instance = void 0,
            m = _)) || m);
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ScenePopupBonusArcade.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ArcadeBonusBoardController.ts", "./GameController.ts", "./ResourcesManager.ts", "./SFXManager.ts", "./SceneGameplay.ts"], (function(t) {
    "use strict";
    var e, n, o, a, i, s, r, c, u, p, l, h, B, d, g, y, _, v, P, C, f, b, m, I;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            n = t.inheritsLoose,
            o = t.initializerDefineProperty,
            a = t.assertThisInitialized
        }
        , function(t) {
            i = t.cclegacy,
            s = t._decorator,
            r = t.Prefab,
            c = t.instantiate,
            u = t.Vec3,
            p = t.UITransform,
            l = t.Animation,
            h = t.Label,
            B = t.SpriteFrame,
            d = t.Sprite,
            g = t.ParticleSystem,
            y = t.Component,
            _ = t.easing,
            v = t.Vec2,
            P = t.tween
        }
        , function(t) {
            C = t.ArcadeBonusBoardController
        }
        , function(t) {
            f = t.GameController
        }
        , function(t) {
            b = t.ResourcesManager
        }
        , function(t) {
            m = t.SFXManager
        }
        , function(t) {
            I = t.SceneGameplay
        }
        ],
        execute: function() {
            var S, T, O, E, w, x, F;
            i._RF.push({}, "66edfEJnShE24ga7+i9qznR", "ScenePopupBonusArcade", void 0);
            var R = s.ccclass
              , A = s.property;
            t("ScenePopupBonusArcade", (S = R("ScenePopupBonusArcade"),
            T = A({
                type: r,
                displayName: "Prefab bonus trail"
            }),
            O = A({
                type: r,
                displayName: "Prefab bonus increment"
            }),
            S((x = e((w = function(t) {
                function e() {
                    for (var e, n = arguments.length, i = new Array(n), s = 0; s < n; s++)
                        i[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(i)) || this,
                    o(e, "prefabBonusTrail", x, a(e)),
                    o(e, "prefabBonusIncrement", F, a(e)),
                    e.onExit = null,
                    e.topThreeData = [],
                    e.activeBonusTrail = [],
                    e.activeBonusIncrement = [],
                    e
                }
                n(e, t);
                var i = e.prototype;
                return i.start = function() {}
                ,
                i.update = function(t) {}
                ,
                i.show = function(t, e) {
                    var n = this;
                    if (0 == this.activeBonusTrail.length)
                        for (var o = 0; o < 6; o++) {
                            var a = c(this.prefabBonusTrail);
                            a.setParent(this.node),
                            this.activeBonusTrail.push(a),
                            a.setPosition(new u(0,0,0))
                        }
                    if (0 == this.activeBonusIncrement.length)
                        for (var i = 0; i < 5; i++) {
                            var s = c(this.prefabBonusIncrement);
                            s.setParent(this.node),
                            this.activeBonusIncrement.push(s),
                            s.setPosition(new u(0,0,0))
                        }
                    for (var r = this.node.getComponent(p).width, h = this.node.getComponent(p).height, B = 0; B < this.activeBonusTrail.length; B++)
                        this.activeBonusTrail[B].setPosition(new u(-r,h,0));
                    for (var d = 0; d < this.activeBonusIncrement.length; d++)
                        this.activeBonusIncrement[d].setPosition(new u(-r,h,0));
                    this.onExit = e,
                    this.node.getChildByPath("popup/text_score").active = !1,
                    this.node.getChildByPath("popup/layoutBonus/ArcadeBonusEntry_1").active = !1,
                    this.node.getChildByPath("popup/layoutBonus/ArcadeBonusEntry_2").active = !1,
                    this.node.getChildByPath("popup/layoutBonus/ArcadeBonusEntry_3").active = !1,
                    this.node.getChildByPath("popup/particle_bonusBrownBurst_1").active = !1,
                    this.node.getChildByPath("popup/particle_bonusBrownBurst_2").active = !1,
                    this.node.getChildByPath("popup/particle_bonusRedBurst_1").active = !1,
                    this.node.getChildByPath("popup/particle_bonusRedBurst_2").active = !1,
                    this.node.getChildByPath("popup/particle_bonusBlueBurst_1").active = !1,
                    this.node.getChildByPath("popup/particle_bonusBlueBurst_2").active = !1,
                    this.node.getChildByPath("popup/particle_bonusTotalBurst").active = !1,
                    this.node.getChildByPath("cont_particle_bonusConfetti").active = !1,
                    this.topThreeData = C.getInstance().getTopThreeBonus();
                    var g = this.node.getComponent(l);
                    g.play("inGameBonusPopup_in"),
                    g.on(l.EventType.FINISHED, (function() {
                        m.getInstance().playLoopSFX(m.SFX_BONUS_DRUM_ROLL_LOOP),
                        n.scheduleOnce((function() {
                            t()
                        }
                        ), 1)
                    }
                    ), this, !0)
                }
                ,
                i.tryShowBonus = function(t) {
                    for (var e = this, n = this, o = 0, a = 0; a < this.topThreeData.length; a++)
                        o += this.topThreeData[a].point;
                    if (4 == t)
                        this.node.getChildByPath("popup/text_score").active = !0,
                        this.node.getChildByPath("popup/particle_bonusTotalBurst").active = !0,
                        this.node.getChildByPath("popup/text_score").getComponent(h).string = "" + o,
                        m.getInstance().play(m.SFX_BONUS_APPLAUSE),
                        m.getInstance().stopLoopSFX(m.SFX_BONUS_DRUM_ROLL_LOOP);
                    else if (t >= 1 && t <= 3) {
                        this.node.getChildByPath("popup/layoutBonus/ArcadeBonusEntry_" + t).active = !0;
                        var i = this.topThreeData[t - 1]
                          , s = i.text;
                        "BEST_BONUS_COMBO" == i.type && (s = f.stringFormat(s, C.getInstance().comboCounter)),
                        n.node.getChildByPath("popup/layoutBonus/ArcadeBonusEntry_" + t + "/bonus_icon_backing/bonus_icon").active = !1,
                        b.getInstance().loadResources("UI/InGameBonuses/" + i.path + "/spriteFrame", B, (function(e) {
                            n.node.getChildByPath("popup/layoutBonus/ArcadeBonusEntry_" + t + "/bonus_icon_backing/bonus_icon").getComponent(d).spriteFrame = e,
                            n.node.getChildByPath("popup/layoutBonus/ArcadeBonusEntry_" + t + "/bonus_icon_backing/bonus_icon").active = !0
                        }
                        )),
                        this.node.getChildByPath("popup/layoutBonus/ArcadeBonusEntry_" + t + "/text_bonusOutline/text_bonus").getComponent(h).string = s,
                        this.node.getChildByPath("popup/layoutBonus/ArcadeBonusEntry_" + t + "/text_bonusScoreOutline").getComponent(h).string = i.point,
                        this.node.getChildByPath("popup/layoutBonus/ArcadeBonusEntry_" + t + "/text_bonusScoreOutline/text_bonusScore").getComponent(h).string = i.point,
                        1 == t ? (m.getInstance().play(m.SFX_BONUS_EXPLOSION_1),
                        this.node.getChildByPath("popup/particle_bonusBrownBurst_1").active = !0,
                        this.node.getChildByPath("popup/particle_bonusBrownBurst_2").active = !0) : 2 == t ? (m.getInstance().play(m.SFX_BONUS_EXPLOSION_2),
                        this.node.getChildByPath("popup/particle_bonusRedBurst_1").active = !0,
                        this.node.getChildByPath("popup/particle_bonusRedBurst_2").active = !0) : 3 == t && (m.getInstance().play(m.SFX_BONUS_EXPLOSION_3),
                        this.node.getChildByPath("popup/particle_bonusBlueBurst_1").active = !0,
                        this.node.getChildByPath("popup/particle_bonusBlueBurst_2").active = !0)
                    }
                    var r = this.node.getComponent(l);
                    t <= 4 ? (r.play("inGameBonusPopup_shake"),
                    r.on(l.EventType.FINISHED, (function() {
                        n.tryShowBonus(t + 1)
                    }
                    ), this, !0)) : 5 == t && function() {
                        for (var t = e, n = (e.node.getComponent(p).width,
                        e.node.getComponent(p).height,
                        function(n) {
                            var a = n;
                            e.activeBonusTrail[n].getComponent(g).play(),
                            e.activeBonusTrail[n].getChildByPath("trail").getComponent(g).play(),
                            e.activeBonusTrail[n].setWorldPosition(e.node.getChildByPath("popup/text_score").worldPosition.clone());
                            var i = _.expoIn;
                            i = n % 3 == 0 ? _.expoOut : n % 2 == 0 ? _.linear : _.expoIn;
                            var s = f.getInstance().gameplayScreen.getComponent(I).gameplayLeaderboard.labelRank[0].worldPosition.clone()
                              , r = new v(e.activeBonusTrail[n].worldPosition.x,e.activeBonusTrail[n].worldPosition.y);
                            P(r).delay(.15 * n).to(1.5, {
                                y: s.y
                            }, {
                                easing: i,
                                onUpdate: function() {
                                    var t = e.activeBonusTrail[n].worldPosition.clone();
                                    t.y = r.y,
                                    e.activeBonusTrail[n].setWorldPosition(t)
                                }
                            }).start(),
                            P(r).delay(.15 * n).to(1.5, {
                                x: s.x
                            }, {
                                onUpdate: function() {
                                    var t = e.activeBonusTrail[n].worldPosition.clone();
                                    t.x = r.x,
                                    e.activeBonusTrail[n].setWorldPosition(t)
                                }
                            }).call((function() {
                                if (t.activeBonusTrail[a].getComponent(g).stop(),
                                t.activeBonusTrail[a].getChildByPath("trail").getComponent(g).stop(),
                                0 == a) {
                                    var e = new u(f.getInstance().score,0,0)
                                      , n = f.getInstance().score + o;
                                    f.getInstance().score += o,
                                    f.bestScore = Math.max(f.bestScore, f.getInstance().score),
                                    "solo" != f.context_type && f.getInstance().score > f.getInstance().sessionBestScore && (f.getInstance().sessionBestScore = Math.max(f.getInstance().sessionBestScore, f.getInstance().score)),
                                    f.getInstance().playStarfruitIncrement(o);
                                    for (var i = .1, r = 0; r < 19; r++)
                                        t.scheduleOnce((function() {
                                            m.getInstance().play(m.SFX_UI_STARFRUIT_INCREMENT)
                                        }
                                        ), i),
                                        i += .1;
                                    P(e).to(2, {
                                        x: n
                                    }, {
                                        onUpdate: function() {
                                            f.getInstance().updateScore(Math.round(e.x))
                                        }
                                    }).start()
                                }
                                if (a < t.activeBonusIncrement.length) {
                                    t.activeBonusIncrement[a].setWorldPosition(s),
                                    t.activeBonusIncrement[a].getComponent(g).play();
                                    for (var c = 0; c < t.activeBonusIncrement[a].children.length; c++) {
                                        var p = t.activeBonusIncrement[a].children[c].getComponent(g);
                                        null != p && p.play()
                                    }
                                }
                            }
                            )).start()
                        }
                        ), a = 0; a < e.activeBonusTrail.length; a++)
                            n(a);
                        e.scheduleOnce((function() {
                            m.getInstance().play(m.SFX_BONUS_FIREWORK_EXPLODE),
                            t.node.getChildByPath("cont_particle_bonusConfetti").active = !0;
                            for (var e = 1; e <= 5; e++) {
                                var n = t.node.getChildByPath("cont_particle_bonusConfetti/particle_bonusConfetti_" + e);
                                n.getComponent(g).play();
                                for (var o = 0; o < n.children.length; o++) {
                                    var a = n.children[o].getComponent(g);
                                    null != a && a.play()
                                }
                            }
                        }
                        ), 2),
                        e.scheduleOnce((function() {
                            r.play("inGameBonusPopup_out"),
                            r.on(l.EventType.FINISHED, (function() {
                                t.deactivateParticle(),
                                t.onExit()
                            }
                            ), this, !0)
                        }
                        ), 5)
                    }()
                }
                ,
                i.deactivateParticle = function() {
                    this.node.getChildByPath("popup/particle_bonusBrownBurst_1").active = !1,
                    this.node.getChildByPath("popup/particle_bonusBrownBurst_2").active = !1,
                    this.node.getChildByPath("popup/particle_bonusRedBurst_1").active = !1,
                    this.node.getChildByPath("popup/particle_bonusRedBurst_2").active = !1,
                    this.node.getChildByPath("popup/particle_bonusBlueBurst_1").active = !1,
                    this.node.getChildByPath("popup/particle_bonusBlueBurst_2").active = !1
                }
                ,
                e
            }(y)).prototype, "prefabBonusTrail", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            F = e(w.prototype, "prefabBonusIncrement", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            E = w)) || E));
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ScenePopupInfoPowerup.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameController.ts", "./SFXManager.ts"], (function(n) {
    "use strict";
    var o, t, e, r, c, u;
    return {
        setters: [function(n) {
            o = n.inheritsLoose
        }
        , function(n) {
            t = n.cclegacy,
            e = n._decorator,
            r = n.Component
        }
        , function(n) {
            c = n.GameController
        }
        , function(n) {
            u = n.SFXManager
        }
        ],
        execute: function() {
            var p;
            t._RF.push({}, "3f3a4a0/cVFwZvy0Nw/9MrA", "ScenePopupInfoPowerup", void 0);
            var a = e.ccclass;
            e.property,
            n("ScenePopupInfoPowerup", a("ScenePopupInfoPowerup")(p = function(n) {
                function t() {
                    for (var o, t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                        e[r] = arguments[r];
                    return (o = n.call.apply(n, [this].concat(e)) || this).holdInput = !1,
                    o
                }
                o(t, n);
                var e = t.prototype;
                return e.onEnable = function() {
                    this.holdInput = !1
                }
                ,
                e.start = function() {}
                ,
                e.buttonCloseClicked = function() {
                    this.holdInput || (u.getInstance().play(u.SFX_SELECT),
                    this.holdInput = !0,
                    c.getInstance().showPopUpInfoPowerUp(!1))
                }
                ,
                t
            }(r)) || p);
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ScenePopupPurchasePU.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Data.ts", "./GameController.ts", "./SFXManager.ts"], (function(t) {
    "use strict";
    var e, r, a, n, o, s, i, l, u, c, p, h, y, P, d, g;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            r = t.inheritsLoose,
            a = t.initializerDefineProperty,
            n = t.assertThisInitialized
        }
        , function(t) {
            o = t.cclegacy,
            s = t._decorator,
            i = t.Material,
            l = t.Label,
            u = t.Sprite,
            c = t.Button,
            p = t.LabelOutline,
            h = t.Color,
            y = t.Component
        }
        , function(t) {
            P = t.Data
        }
        , function(t) {
            d = t.GameController
        }
        , function(t) {
            g = t.SFXManager
        }
        ],
        execute: function() {
            var f, B, b, m, C, S, w;
            o._RF.push({}, "3f1d5S6BcFPt47lc32Lcgq0", "ScenePopupPurchasePU", void 0);
            var I = s.ccclass
              , U = s.property;
            t("ScenePopupPurchasePU", (f = I("ScenePopupPurchasePU"),
            B = U({
                type: i
            }),
            b = U({
                type: i
            }),
            f((S = e((C = function(t) {
                function e() {
                    for (var e, r = arguments.length, o = new Array(r), s = 0; s < r; s++)
                        o[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(o)) || this,
                    a(e, "labellGreenMaterial", S, n(e)),
                    a(e, "labellGreyMaterial", w, n(e)),
                    e.powerUpType = "",
                    e.holdInput = !1,
                    e.onBuy = function() {}
                    ,
                    e
                }
                r(e, t);
                var o = e.prototype;
                return o.onEnable = function() {
                    this.holdInput = !1,
                    this.node.getChildByPath("StarfruitLabel/text_starfruitTop").getComponent(l).string = d.getInstance().formatNumber(parseInt(P.getInstance().starFruit.toFixed(0)));
                    var t = P.getInstance().starFruit >= 150;
                    this.node.getChildByPath("ScrollPurchase/mask/ButtonPurchase").getComponent(u).grayscale = !t,
                    this.node.getChildByPath("ScrollPurchase/mask/ButtonPurchase").getComponent(c).interactable = t,
                    this.node.getChildByPath("ScrollPurchase/mask/ButtonPurchase/starfruitBonusLayout/starfruitBonus").getComponent(u).grayscale = !t,
                    this.node.getChildByPath("ScrollPurchase/mask/ButtonPurchase/starfruitBonusLayout/text_starfruitBonus").getComponent(l).material = t ? this.labellGreenMaterial : this.labellGreyMaterial,
                    this.node.getChildByPath("ScrollPurchase/mask/ButtonPurchase/starfruitBonusLayout/text_starfruitBonus").getComponent(p).color = t ? new h(51,78,0) : new h(104,104,104)
                }
                ,
                o.start = function() {}
                ,
                o.setPowerUp = function(t) {
                    this.powerUpType = t,
                    this.node.getChildByPath("ScrollPurchase/mask/IconPowerup/BeryBlast").active = "berryblast" == t,
                    this.node.getChildByPath("ScrollPurchase/mask/IconPowerup/BombDeflect").active = "deflect" == t,
                    this.node.getChildByPath("ScrollPurchase/mask/IconPowerup/PeachyTime").active = "peachtime" == t
                }
                ,
                o.buttonCloseClicked = function() {
                    this.holdInput || (g.getInstance().play(g.SFX_SELECT),
                    this.holdInput = !0,
                    d.getInstance().showPopupPurchasePowerUp(!1),
                    "berryblast" == this.powerUpType || "deflect" == this.powerUpType || this.powerUpType)
                }
                ,
                o.buttonBuyClicked = function() {
                    this.holdInput || (g.getInstance().play(g.SFX_SELECT),
                    this.holdInput = !0,
                    P.getInstance().starFruit -= 150,
                    this.onBuy(),
                    d.getInstance().showPopupPurchasePowerUp(!1),
                    "berryblast" == this.powerUpType || "deflect" == this.powerUpType || this.powerUpType)
                }
                ,
                o.setOnBuy = function(t) {
                    this.onBuy = t
                }
                ,
                e
            }(y)).prototype, "labellGreenMaterial", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            w = e(C.prototype, "labellGreyMaterial", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            m = C)) || m));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SceneResultScore.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./LevelManager.ts", "./GameController.ts", "./Data.ts", "./SFXManager.ts", "./AdsManager.ts", "./MissionManager.ts"], (function(e) {
    "use strict";
    var t, a, r, n, i, l, o, s, c, u, p, d, g, b, f, I, S, v;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            a = e.inheritsLoose,
            r = e.initializerDefineProperty,
            n = e.assertThisInitialized
        }
        , function(e) {
            i = e.cclegacy,
            l = e._decorator,
            o = e.Label,
            s = e.Node,
            c = e.UITransform,
            u = e.Vec3,
            p = e.tween,
            d = e.Component
        }
        , function(e) {
            g = e.LevelManager
        }
        , function(e) {
            b = e.GameController
        }
        , function(e) {
            f = e.Data
        }
        , function(e) {
            I = e.SFXManager
        }
        , function(e) {
            S = e.AdsManager
        }
        , function(e) {
            v = e.MissionManager
        }
        ],
        execute: function() {
            var h, y, m, E, C, x, B, L, R, A, F, w, _, P, D, T, M, X, z, N, U, O, k, Z, G, H, j, W, K, Q, V, q, J, Y, $, ee, te;
            i._RF.push({}, "9b344aavNRAiKjHCicQFzy2", "SceneResultScore", void 0);
            var ae = l.ccclass
              , re = l.property;
            e("SceneResultScore", (h = ae("SceneResultScore"),
            y = re({
                type: o
            }),
            m = re({
                type: s
            }),
            E = re({
                type: s
            }),
            C = re({
                type: s
            }),
            x = re({
                type: o
            }),
            B = re({
                type: o
            }),
            L = re({
                type: o
            }),
            R = re({
                type: s
            }),
            A = re({
                type: o
            }),
            F = re({
                type: o
            }),
            w = re({
                type: s
            }),
            _ = re({
                type: o
            }),
            P = re({
                type: o
            }),
            D = re({
                type: s
            }),
            T = re({
                type: s
            }),
            M = re({
                type: o
            }),
            X = re({
                type: o
            }),
            h((U = t((N = function(e) {
                function t() {
                    for (var t, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
                        i[l] = arguments[l];
                    return t = e.call.apply(e, [this].concat(i)) || this,
                    r(t, "labelTextLevel", U, n(t)),
                    r(t, "xpBarFillTransparant", O, n(t)),
                    r(t, "xpBarFill", k, n(t)),
                    r(t, "xpBarBack", Z, n(t)),
                    r(t, "labelStarfruit", G, n(t)),
                    r(t, "labelScore", H, n(t)),
                    r(t, "labelBestScore", j, n(t)),
                    r(t, "xpLayout", W, n(t)),
                    r(t, "labelXpReceived", K, n(t)),
                    r(t, "labelStarfruitReceived", Q, n(t)),
                    r(t, "contButtonBonus", V, n(t)),
                    r(t, "labelXpBonusAds", q, n(t)),
                    r(t, "labelStarfruitBonusAds", J, n(t)),
                    r(t, "contClaimed", Y, n(t)),
                    r(t, "nodeStarfruitIconClaimed", $, n(t)),
                    r(t, "labelXpBonusAdsClaimed", ee, n(t)),
                    r(t, "labelStarfruitBonusAdsClaimed", te, n(t)),
                    t.totalExpReceived = 0,
                    t.starFruitReward = 0,
                    t.holdInput = !1,
                    t
                }
                a(t, e);
                var i = t.prototype;
                return i.onEnable = function() {
                    this.reset(),
                    this.labelStarfruit.string = b.getInstance().formatNumber(parseInt(f.getInstance().starFruit.toFixed(0))),
                    this.labelScore.string = "" + b.Instance.score,
                    this.labelBestScore.string = "Best: " + b.getInstance().getBestScore();
                    var e = g.getInstance().getDataLevelFromTotalExp();
                    if (e.level < g.getInstance().levelCap) {
                        var t = null;
                        b.gameMode == b.MODE_ARCADE ? t = g.ARCADE_EXP_CALC_RULE : b.gameMode == b.MODE_CLASSIC ? t = g.CLASSIC_EXP_CALC_RULE : b.gameMode == b.MODE_ZEN && (t = g.ZEN_EXP_CALC_RULE),
                        this.totalExpReceived = g.getInstance().calculateExp(b.getInstance().score, t)
                    }
                    this.labelXpReceived.string = "+ " + this.totalExpReceived,
                    this.labelXpBonusAds.string = "+ " + this.totalExpReceived,
                    this.labelXpBonusAdsClaimed.string = "+ " + this.totalExpReceived,
                    this.starFruitReward = f.getInstance().convertScoreToStarFruit(b.getInstance().score),
                    this.labelStarfruitReceived.string = "+ " + this.starFruitReward,
                    this.labelStarfruitBonusAds.string = "+ " + this.starFruitReward,
                    this.labelStarfruitBonusAdsClaimed.string = "+ " + this.starFruitReward;
                    var a = this.xpBarBack.getComponent(c).width;
                    this.labelTextLevel.string = "" + e.level,
                    this.xpBarFill.getComponent(c).width = a * e.curExp / e.totalExpToLevelUp,
                    this.xpBarFillTransparant.getComponent(c).width = a * e.curExp / e.totalExpToLevelUp
                }
                ,
                i.start = function() {}
                ,
                i.doPlayStartAnimation = function() {
                    var e = this
                      , t = g.getInstance().getDataLevelFromTotalExp();
                    this.totalExpReceived > 0 && b.getInstance().playExpIncrease(this.node.getChildByPath("cont_results/StarFruitEXPLayout/EXPLayout"), this.labelTextLevel.node, this.xpBarBack, this.xpBarFill, this.xpBarFillTransparant, t, this.totalExpReceived, this.labelTextLevel.node);
                    var a = b.Instance.particleTrailStarfruit;
                    if (this.starFruitReward > 0) {
                        var r = new u(f.getInstance().starFruit,0,0);
                        f.getInstance().starFruit += this.starFruitReward,
                        b.getInstance().playStarfruitIncrement(this.starFruitReward),
                        p(r).delay(.5).to(.5, {
                            x: f.getInstance().starFruit
                        }, {
                            onUpdate: function() {
                                e.labelStarfruit.string = b.getInstance().formatNumber(parseInt(r.x.toFixed(0)))
                            }
                        }).start(),
                        a.setWorldPosition(f.getInstance().convert2DPosTo3D(this.node.getChildByPath("cont_results/StarFruitEXPLayout/starfruitLayout").worldPosition));
                        var n = this.node.getChildByPath("UI_atasResultSolo/StarfruitLabel/starfruitLabelIcon/CurrencyStarfruitIcon").worldPosition;
                        p(a).to(.5, {
                            worldPosition: f.getInstance().convert2DPosTo3D(n)
                        }).start(),
                        b.saveData()
                    }
                    b.gameMode == b.MODE_ARCADE ? v.getInstance().trySinglePointsAchievement("POINTSSINGLEARCADE", b.Instance.score) : b.gameMode == b.MODE_CLASSIC ? v.getInstance().trySinglePointsAchievement("POINTSSINGLECLASSIC", b.Instance.score) : b.gameMode == b.MODE_ZEN && v.getInstance().trySinglePointsAchievement("POINTSSINGLEZEN", b.Instance.score)
                }
                ,
                i.reset = function() {
                    this.holdInput = !1,
                    this.contButtonBonus.active = !1,
                    this.contClaimed.active = !1,
                    this.totalExpReceived = 0
                }
                ,
                i.clickButton = function(e, t) {
                    var a = this;
                    if (!this.holdInput && 0 != b.getInstance().getAnimXpFinished()) {
                        this.holdInput = !0;
                        var r = function() {
                            a.holdInput = !1
                        };
                        if (I.getInstance().play(I.SFX_SELECT),
                        "continue" == t)
                            b.getInstance().moveToHomescreen();
                        else if ("double_reward" == t) {
                            var n = f.getInstance().convertScoreToStarFruit(b.getInstance().score);
                            S.showRewardedAds((function() {
                                var e = g.getInstance().getDataLevelFromTotalExp();
                                e.level < g.getInstance().levelCap && a.totalExpReceived > 0 && (b.gameMode == b.MODE_ARCADE ? g.ARCADE_EXP_CALC_RULE : b.gameMode == b.MODE_CLASSIC ? g.CLASSIC_EXP_CALC_RULE : b.gameMode == b.MODE_ZEN && g.ZEN_EXP_CALC_RULE,
                                b.getInstance().playExpIncrease(a.xpLayout, a.labelTextLevel.node, a.xpBarBack, a.xpBarFill, a.xpBarFillTransparant, e, a.totalExpReceived, a.labelTextLevel.node)),
                                a.contButtonBonus.active = !1,
                                a.contClaimed.active = !0,
                                a.labelStarfruitReceived.string = "+ " + n;
                                var t = b.Instance.particleTrailStarfruit;
                                if (a.starFruitReward > 0) {
                                    var i = new u(f.getInstance().starFruit,0,0);
                                    f.getInstance().starFruit += a.starFruitReward,
                                    b.getInstance().playStarfruitIncrement(a.starFruitReward),
                                    p(i).delay(.5).to(.5, {
                                        x: f.getInstance().starFruit
                                    }, {
                                        onUpdate: function() {
                                            a.labelStarfruit.string = b.getInstance().formatNumber(parseInt(i.x.toFixed(0)))
                                        }
                                    }).start(),
                                    t.setWorldPosition(f.getInstance().convert2DPosTo3D(a.node.getChildByPath("cont_results/RewardClaimed/StarFruitEXPLayout/starfruitClaimLayout").worldPosition));
                                    var l = a.node.getChildByPath("UI_atasResultSolo/StarfruitLabel/starfruitLabelIcon/CurrencyStarfruitIcon").worldPosition;
                                    p(t).to(.5, {
                                        worldPosition: f.getInstance().convert2DPosTo3D(l)
                                    }).start(),
                                    b.saveData()
                                }
                                r()
                            }
                            ), (function() {
                                r()
                            }
                            ))
                        }
                    }
                }
                ,
                t
            }(d)).prototype, "labelTextLevel", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            O = t(N.prototype, "xpBarFillTransparant", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            k = t(N.prototype, "xpBarFill", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Z = t(N.prototype, "xpBarBack", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            G = t(N.prototype, "labelStarfruit", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            H = t(N.prototype, "labelScore", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            j = t(N.prototype, "labelBestScore", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            W = t(N.prototype, "xpLayout", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            K = t(N.prototype, "labelXpReceived", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Q = t(N.prototype, "labelStarfruitReceived", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            V = t(N.prototype, "contButtonBonus", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            q = t(N.prototype, "labelXpBonusAds", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            J = t(N.prototype, "labelStarfruitBonusAds", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Y = t(N.prototype, "contClaimed", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            $ = t(N.prototype, "nodeStarfruitIconClaimed", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            ee = t(N.prototype, "labelXpBonusAdsClaimed", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            te = t(N.prototype, "labelStarfruitBonusAdsClaimed", [X], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            z = N)) || z));
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SceneSelectMode.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ContMissionSelectMode.ts", "./Data.ts", "./GameController.ts", "./LevelManager.ts", "./SFXManager.ts", "./UIPowerUpButton.ts", "./UIRing.ts"], (function(t) {
    "use strict";
    var e, n, a, i, o, r, l, s, c, p, u, h, m, d, y, f, g, b, I, B, C;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            n = t.inheritsLoose,
            a = t.initializerDefineProperty,
            i = t.assertThisInitialized
        }
        , function(t) {
            o = t.cclegacy,
            r = t._decorator,
            l = t.SpriteFrame,
            s = t.Node,
            c = t.Label,
            p = t.Animation,
            u = t.Vec3,
            h = t.tween,
            m = t.Sprite,
            d = t.Component
        }
        , function(t) {
            y = t.ContMissionSelectMode
        }
        , function(t) {
            f = t.Data
        }
        , function(t) {
            g = t.GameController
        }
        , function(t) {
            b = t.LevelManager
        }
        , function(t) {
            I = t.SFXManager
        }
        , function(t) {
            B = t.UIPowerUpButton
        }
        , function(t) {
            C = t.UIRing
        }
        ],
        execute: function() {
            var P, S, v, _, w, E, T, D, F, x, U, M, H, z, L, N, A, O, Z, k, R, X, q, Q, W, G;
            o._RF.push({}, "de107JTSr1L16aYZ4TAYFtf", "SceneSelectMode", void 0);
            var Y = r.ccclass
              , j = r.property;
            t("SceneSelectMode", (P = Y("SceneSelectMode"),
            S = j({
                type: l,
                displayName: "Frame start play classic mode"
            }),
            v = j({
                type: l,
                displayName: "Frame start play zen mode"
            }),
            _ = j({
                type: l,
                displayName: "Frame start play arcade mode"
            }),
            w = j({
                type: s
            }),
            E = j({
                type: s
            }),
            T = j({
                type: s
            }),
            D = j({
                type: s
            }),
            F = j({
                type: s
            }),
            x = j({
                type: s
            }),
            U = j({
                type: s
            }),
            M = j({
                type: s
            }),
            P(((G = function(t) {
                function e() {
                    for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                        o[r] = arguments[r];
                    return e = t.call.apply(t, [this].concat(o)) || this,
                    a(e, "frameSPClassicMode", L, i(e)),
                    a(e, "frameSPZenMode", N, i(e)),
                    a(e, "frameSPArcadeMode", A, i(e)),
                    a(e, "btnBerryBlast", O, i(e)),
                    a(e, "btnDeflectBomb", Z, i(e)),
                    a(e, "btnPeachyTime", k, i(e)),
                    a(e, "contMissionNotTournament", R, i(e)),
                    a(e, "buttonClassic", X, i(e)),
                    a(e, "buttonZen", q, i(e)),
                    a(e, "buttonArcade", Q, i(e)),
                    a(e, "buttonStartPlay", W, i(e)),
                    e.holdInput = !1,
                    e
                }
                n(e, t),
                e.getInstance = function() {
                    return e.Instance
                }
                ;
                var o = e.prototype;
                return o.onLoad = function() {
                    e.Instance = this,
                    this.node.active = !1
                }
                ,
                o.onEnable = function() {
                    e.EQUIP_BB = !1,
                    e.EQUIP_DB = !1,
                    e.EQUIP_PT = !1,
                    this.holdInput = !1,
                    f.getInstance().inventoryPUBerryBlast > 0 ? this.btnBerryBlast.getComponent(B).setOwned(f.getInstance().inventoryPUBerryBlast) : this.btnBerryBlast.getComponent(B).setBuyable(),
                    f.getInstance().inventoryPUDeflect > 0 ? this.btnDeflectBomb.getComponent(B).setOwned(f.getInstance().inventoryPUDeflect) : this.btnDeflectBomb.getComponent(B).setBuyable(),
                    f.getInstance().inventoryPUPeachyTime > 0 ? this.btnPeachyTime.getComponent(B).setOwned(f.getInstance().inventoryPUPeachyTime) : this.btnPeachyTime.getComponent(B).setBuyable(),
                    this.showBtnAds(!1),
                    this.node.getChildByPath("UI_bawah/cont_missions").getComponent(y).refreshContMission()
                }
                ,
                o.refreshPowerUp = function() {
                    var t = this.btnBerryBlast.getComponent(B)
                      , e = this.btnDeflectBomb.getComponent(B)
                      , n = this.btnPeachyTime.getComponent(B);
                    f.getInstance().inventoryPUBerryBlast > 0 && !t.isEquipped && this.btnBerryBlast.getComponent(B).setOwned(f.getInstance().inventoryPUBerryBlast),
                    f.getInstance().inventoryPUDeflect > 0 && !e.isEquipped && this.btnDeflectBomb.getComponent(B).setOwned(f.getInstance().inventoryPUDeflect),
                    f.getInstance().inventoryPUPeachyTime > 0 && !n.isEquipped && this.btnPeachyTime.getComponent(B).setOwned(f.getInstance().inventoryPUPeachyTime)
                }
                ,
                o.setHoldInput = function(t) {
                    this.holdInput = t,
                    this.node.getChildByPath("UI_bawah/cont_missions").getComponent(y).setHoldInput(t)
                }
                ,
                o.showAnimationClaimed = function(t, e) {
                    var n = this;
                    if (g.getInstance().setHoldInput(!0),
                    this.setHoldInput(!0),
                    this.node.getChildByPath("cont_Exp_Starfruit/StarfruitLabel/text_starfruitTop").getComponent(c).string = g.getInstance().formatNumber(parseInt(f.getInstance().starFruit.toFixed(0))),
                    "xp" == t.rewardType) {
                        var a = 0;
                        "small" == t.rewardSize ? a = 75 : "medium" == t.rewardSize ? a = 100 : "large" == t.rewardSize && (a = 125),
                        this.node.getChildByPath("cont_Exp_Starfruit").getComponent(p).play("expStarfruit_label_in"),
                        this.node.getChildByPath("cont_Exp_Starfruit").getComponent(p).on(p.EventType.FINISHED, (function() {
                            var t = b.getInstance().getDataLevelFromTotalExp();
                            if (t.level < b.getInstance().levelCap) {
                                var i = n.node.getChildByPath("cont_Exp_Starfruit/levelLabel/text_LevelAngka")
                                  , o = n.node.getChildByPath("cont_Exp_Starfruit/levelLabel/XPBarBack")
                                  , r = n.node.getChildByPath("cont_Exp_Starfruit/levelLabel/XPBarFill")
                                  , l = n.node.getChildByPath("cont_Exp_Starfruit/levelLabel/XPBarFill_transparant")
                                  , s = n.node.getChildByPath("cont_Exp_Starfruit/levelLabel/text_LevelAngka");
                                g.getInstance().playExpIncrease(e, i, o, r, l, t, a, s, "select_mode", (function() {
                                    n.node.getChildByPath("cont_Exp_Starfruit").getComponent(p).play("expStarfruit_label_out"),
                                    g.getInstance().setHoldInput(!1),
                                    n.setHoldInput(!1)
                                }
                                ))
                            } else
                                g.getInstance().setHoldInput(!1),
                                n.setHoldInput(!1)
                        }
                        ), this, !0)
                    } else if ("starfruit" == t.rewardType) {
                        var i = 0;
                        "small" == t.rewardSize ? i = 50 : "medium" == t.rewardSize ? i = 100 : "large" == t.rewardSize && (i = 150),
                        this.node.getChildByPath("cont_Exp_Starfruit").getComponent(p).play("expStarfruit_label_in"),
                        this.node.getChildByPath("cont_Exp_Starfruit").getComponent(p).on(p.EventType.FINISHED, (function() {
                            var t = g.Instance.particleTrailStarfruit
                              , a = n.node.getChildByPath("cont_Exp_Starfruit/StarfruitLabel/text_starfruitTop");
                            a.getComponent(c).string = g.getInstance().formatNumber(parseInt(f.getInstance().starFruit.toFixed(0)));
                            var o = new u(f.getInstance().starFruit,0,0);
                            f.getInstance().starFruit += i,
                            g.getInstance().playStarfruitIncrement(i),
                            h(o).delay(.5).to(.5, {
                                x: f.getInstance().starFruit
                            }, {
                                onUpdate: function() {
                                    a.getComponent(c).string = g.getInstance().formatNumber(parseInt(o.x.toFixed(0)))
                                }
                            }).call((function() {
                                n.node.getChildByPath("cont_Exp_Starfruit").getComponent(p).play("expStarfruit_label_out"),
                                g.getInstance().setHoldInput(!1),
                                n.setHoldInput(!1)
                            }
                            )).start(),
                            t.setWorldPosition(f.getInstance().convert2DPosTo3D(e.worldPosition));
                            var r = n.node.getChildByPath("cont_Exp_Starfruit/StarfruitLabel/starfruitLabelIcon").worldPosition;
                            h(t).to(.5, {
                                worldPosition: f.getInstance().convert2DPosTo3D(r)
                            }).start(),
                            g.saveData()
                        }
                        ), this, !0)
                    }
                }
                ,
                o.start = function() {}
                ,
                o.update = function(t) {}
                ,
                o.showBtnAds = function(t) {
                    this.node.getChildByPath("UI_bawah/button_Ad").active = t
                }
                ,
                o.showClaimBerryBlast = function() {
                    g.Instance.contBerryBlast.active = !0,
                    g.Instance.contBerryBlast.getComponent(p).play("deflectClaim_in"),
                    g.Instance.contBerryBlast.getComponent(p).on(p.EventType.FINISHED, (function() {
                        g.Instance.contBerryBlast.getComponent(p).play("deflectClaim_idle")
                    }
                    ), this, !0)
                }
                ,
                o.showClaimDeflect = function() {
                    g.Instance.contDeflect.active = !0,
                    g.Instance.contDeflect.getComponent(p).play("deflectClaim_in"),
                    g.Instance.contDeflect.getComponent(p).on(p.EventType.FINISHED, (function() {
                        g.Instance.contDeflect.getComponent(p).play("deflectClaim_idle")
                    }
                    ), this, !0)
                }
                ,
                o.showClaimPeachyTime = function() {
                    g.Instance.contPeachy.active = !0,
                    g.Instance.contPeachy.getComponent(p).play("deflectClaim_in"),
                    g.Instance.contPeachy.getComponent(p).on(p.EventType.FINISHED, (function() {
                        g.Instance.contPeachy.getComponent(p).play("deflectClaim_idle")
                    }
                    ), this, !0)
                }
                ,
                o.closeClaimBerryBlast = function() {
                    g.getInstance().setHoldInput(!1),
                    g.Instance.contBerryBlast.getComponent(p).play("deflectClaim_out"),
                    g.Instance.contBerryBlast.getComponent(p).once(p.EventType.FINISHED, (function() {
                        g.Instance.contBerryBlast.active = !1
                    }
                    )),
                    this.btnBerryBlast.getComponent(B).setEquipped()
                }
                ,
                o.closeClaimDeflect = function() {
                    g.getInstance().setHoldInput(!1),
                    g.Instance.contDeflect.getComponent(p).play("deflectClaim_out"),
                    g.Instance.contDeflect.getComponent(p).once(p.EventType.FINISHED, (function() {
                        g.Instance.contDeflect.active = !1
                    }
                    )),
                    this.btnDeflectBomb.getComponent(B).setEquipped()
                }
                ,
                o.closeClaimPeachyTime = function() {
                    g.getInstance().setHoldInput(!1),
                    g.Instance.contPeachy.getComponent(p).play("deflectClaim_out"),
                    g.Instance.contPeachy.getComponent(p).once(p.EventType.FINISHED, (function() {
                        g.Instance.contPeachy.active = !1
                    }
                    )),
                    this.btnPeachyTime.getComponent(B).setEquipped()
                }
                ,
                e.setOnSlash = function(t) {
                    e.onSlash = t
                }
                ,
                e.setTitle = function(t) {
                    e.title = t
                }
                ,
                o.setTitle = function(t) {
                    this.node.getChildByPath("UI_atas/text_title").getComponent(c).string = t
                }
                ,
                e.setFrom = function(t, n, a) {
                    e.from = t,
                    e.mode = n,
                    e.entries = a
                }
                ,
                o.setFrom = function(t, n, a) {
                    void 0 === n && (n = ""),
                    e.from = t,
                    e.mode = n,
                    this.contMissionNotTournament.active = !0,
                    this.buttonClassic.active = !1,
                    this.buttonZen.active = !1,
                    this.buttonArcade.active = !1,
                    this.buttonStartPlay.active = !1,
                    this.buttonClassic.active = "" == n,
                    this.buttonZen.active = "" == n,
                    this.buttonArcade.active = "" == n,
                    this.buttonStartPlay.active = n.includes("arcade") || n.includes("zen") || "classic" == n;
                    var i = null;
                    if (this.buttonStartPlay.active && (i = this.buttonStartPlay),
                    this.btnBerryBlast.active = !1,
                    this.btnDeflectBomb.active = !1,
                    this.btnPeachyTime.active = !1,
                    "" == n ? (this.btnBerryBlast.active = !0,
                    this.btnDeflectBomb.active = !0,
                    this.btnPeachyTime.active = !0,
                    this.btnBerryBlast.setScale(new u(1,1,1)),
                    this.btnDeflectBomb.setScale(new u(1,1,1)),
                    this.btnPeachyTime.setScale(new u(1,1,1))) : n.includes("classic") ? (this.btnBerryBlast.active = !0,
                    this.btnDeflectBomb.active = !0,
                    this.btnBerryBlast.setScale(new u(1.3,1.3,1.3)),
                    this.btnDeflectBomb.setScale(new u(1.3,1.3,1.3))) : n.includes("zen") ? (this.btnBerryBlast.active = !0,
                    this.btnPeachyTime.active = !0,
                    this.btnBerryBlast.setScale(new u(1.3,1.3,1.3)),
                    this.btnPeachyTime.setScale(new u(1.3,1.3,1.3))) : n.includes("arcade") && (this.btnBerryBlast.active = !0,
                    this.btnDeflectBomb.active = !0,
                    this.btnPeachyTime.active = !0,
                    this.btnBerryBlast.setScale(new u(1,1,1)),
                    this.btnDeflectBomb.setScale(new u(1,1,1)),
                    this.btnPeachyTime.setScale(new u(1,1,1))),
                    null != i) {
                        var o = "Watermelon";
                        "classic" == n ? (o = "Watermelon",
                        i.getChildByPath("ring").getComponent(m).spriteFrame = this.frameSPClassicMode) : n.includes("zen") ? (o = "AppleRed",
                        i.getChildByPath("ring").getComponent(m).spriteFrame = this.frameSPZenMode) : n.includes("arcade") && (o = "Banana",
                        i.getChildByPath("ring").getComponent(m).spriteFrame = this.frameSPArcadeMode),
                        i.getComponent(C).setFruitName(o)
                    }
                }
                ,
                o.backButtonClicked = function() {
                    this.holdInput || (this.holdInput = !0,
                    I.getInstance().play(I.SFX_SELECT),
                    g.getInstance().setHoldInput(!0),
                    g.getInstance().exitScreen((function() {
                        g.getInstance().setHoldInput(!1),
                        "homescreen" == e.from || e.from,
                        g.getInstance().setScreenState(g.SCREEN_STATE_HOMESCREEN)
                    }
                    )))
                }
                ,
                o.buttonInfoClicked = function() {
                    I.getInstance().play(I.SFX_SELECT),
                    g.getInstance().setHoldInput(!0),
                    g.getInstance().showPopUpInfoPowerUp(!0)
                }
                ,
                e
            }(d)).onSlash = void 0,
            G.from = void 0,
            G.title = void 0,
            G.mode = void 0,
            G.entries = [],
            G.game_mode = "",
            G.Instance = void 0,
            G.EQUIP_BB = !1,
            G.EQUIP_DB = !1,
            G.EQUIP_PT = !1,
            L = e((z = G).prototype, "frameSPClassicMode", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            N = e(z.prototype, "frameSPZenMode", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            A = e(z.prototype, "frameSPArcadeMode", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            O = e(z.prototype, "btnBerryBlast", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Z = e(z.prototype, "btnDeflectBomb", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            k = e(z.prototype, "btnPeachyTime", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            R = e(z.prototype, "contMissionNotTournament", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            X = e(z.prototype, "buttonClassic", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            q = e(z.prototype, "buttonZen", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            Q = e(z.prototype, "buttonArcade", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            W = e(z.prototype, "buttonStartPlay", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            H = z)) || H));
            o._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SceneSetting.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BGMManager.ts", "./GameController.ts", "./SFXManager.ts"], (function(t) {
    "use strict";
    var e, n, o, i, c, s, a, l, r, u, d, h, p;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            n = t.inheritsLoose,
            o = t.initializerDefineProperty,
            i = t.assertThisInitialized
        }
        , function(t) {
            c = t.cclegacy,
            s = t._decorator,
            a = t.Node,
            l = t.ScrollView,
            r = t.Vec3,
            u = t.Component
        }
        , function(t) {
            d = t.BGMManager
        }
        , function(t) {
            h = t.GameController
        }
        , function(t) {
            p = t.SFXManager
        }
        ],
        execute: function() {
            var y, S, f, B, g, C, M, v, I;
            c._RF.push({}, "4e499hRXvpKR7v2YjNytVLx", "SceneSetting", void 0);
            var b = s.ccclass
              , F = s.property;
            t("SceneSetting", (y = b("SceneSetting"),
            S = F({
                type: a
            }),
            f = F({
                type: a
            }),
            B = F({
                type: a
            }),
            y((M = e((C = function(t) {
                function e() {
                    for (var e, n = arguments.length, c = new Array(n), s = 0; s < n; s++)
                        c[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(c)) || this,
                    o(e, "cont1", M, i(e)),
                    o(e, "cont2", v, i(e)),
                    o(e, "content", I, i(e)),
                    e.holdInput = !1,
                    e.delayAuto = 0,
                    e.canScroll = !1,
                    e.speedScroll = 100,
                    e
                }
                n(e, t);
                var c = e.prototype;
                return c.onLoad = function() {
                    var t = this;
                    this.node.getChildByPath("creditsBox/ScrollVIewCredits").on(l.EventType.SCROLL_BEGAN, (function() {
                        t.canScroll = !1
                    }
                    )),
                    this.node.getChildByPath("creditsBox/ScrollVIewCredits").on(l.EventType.SCROLL_ENDED, (function() {
                        t.delayAuto = 1,
                        t.canScroll = !0
                    }
                    ))
                }
                ,
                c.start = function() {}
                ,
                c.update = function(t) {
                    if (this.canScroll) {
                        if (this.delayAuto -= t,
                        this.delayAuto <= 0) {
                            var e = this.content.position.clone();
                            e.y += this.speedScroll * t,
                            this.refreshContentPosition(e)
                        }
                    } else {
                        var n = this.content.position.clone();
                        this.refreshContentPosition(n)
                    }
                }
                ,
                c.refreshContentPosition = function(t) {
                    t.y < 0 ? t.y += 5250 : t.y > 9800 && (t.y -= 5250),
                    this.content.setPosition(t)
                }
                ,
                c.onEnable = function() {
                    this.delayAuto = 1,
                    this.canScroll = !0,
                    this.holdInput = !1,
                    this.node.getChildByPath("audioBox/ButtonSFX/ButtonSFXOn").active = !p.isMuted,
                    this.node.getChildByPath("audioBox/ButtonMusic/ButtonMusicOn").active = !d.isMuted,
                    this.content.setPosition(new r(0,5250,0)),
                    this.cont2.setPosition(new r(0,-5250,0))
                }
                ,
                c.btnMusicClicked = function() {
                    this.holdInput || (p.getInstance().play(p.SFX_SELECT),
                    d.getInstance().muteBGM(!d.isMuted),
                    this.node.getChildByPath("audioBox/ButtonMusic/ButtonMusicOn").active = !d.isMuted,
                    h.saveData(),
                    d.mutedBeforeBGM = d.isMuted)
                }
                ,
                c.btnSFXClicked = function() {
                    this.holdInput || (p.getInstance().muteSFX(!p.isMuted),
                    this.node.getChildByPath("audioBox/ButtonSFX/ButtonSFXOn").active = !p.isMuted,
                    p.getInstance().play(p.SFX_SELECT),
                    h.saveData(),
                    d.mutedBeforeSFX = p.isMuted)
                }
                ,
                c.btnBackClicked = function() {
                    this.holdInput || (this.holdInput = !0,
                    p.getInstance().play(p.SFX_SELECT),
                    h.getInstance().moveToHomescreen())
                }
                ,
                e
            }(u)).prototype, "cont1", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            v = e(C.prototype, "cont2", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            I = e(C.prototype, "content", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            g = C)) || g));
            c._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SceneTutorialDeflect.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./FruitManager.ts", "./GameController.ts"], (function(t) {
    "use strict";
    var e, n, o, r, c, i, a;
    return {
        setters: [function(t) {
            e = t.inheritsLoose
        }
        , function(t) {
            n = t.cclegacy,
            o = t._decorator,
            r = t.Animation,
            c = t.Component
        }
        , function(t) {
            i = t.FruitManager
        }
        , function(t) {
            a = t.GameController
        }
        ],
        execute: function() {
            var l, u;
            n._RF.push({}, "99544WoHgdBwri9fjCkjOnB", "SceneTutorialDeflect", void 0);
            var s = o.ccclass;
            o.property,
            t("SceneTutorialDeflect", s("SceneTutorialDeflect")(((u = function(t) {
                function n() {
                    return t.apply(this, arguments) || this
                }
                e(n, t);
                var o = n.prototype;
                return o.start = function() {}
                ,
                o.btnClaimRewardClicked = function() {
                    var t = this.node.getComponent(r);
                    t.play("tutDeflect_out"),
                    t.on(r.EventType.FINISHED, (function() {
                        a.TUTORIAL_STATE = 0,
                        a.getInstance().setHoldInput(!1),
                        i.getInstance().tryResumeAllPhysic(),
                        n.onClaimRewardCallback()
                    }
                    ), this, !0)
                }
                ,
                n
            }(c)).onClaimRewardCallback = function() {}
            ,
            l = u)) || l);
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SenseiSwagScene.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AdsManager.ts", "./ControllerBlade.ts", "./Data.ts", "./Fruit.ts", "./FruitPhysics.ts", "./GameController.ts", "./ItemDetails.ts", "./SFXManager.ts", "./UIRing.ts"], (function(t) {
    "use strict";
    var e, n, a, i, s, c, o, l, r, u, h, d, I, g, _, p, A, m, y, C, f, B, v, S, T, x, D, O, P, U;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            n = t.inheritsLoose,
            a = t.initializerDefineProperty,
            i = t.assertThisInitialized
        }
        , function(t) {
            s = t.cclegacy,
            c = t._decorator,
            o = t.Prefab,
            l = t.UITransform,
            r = t.Size,
            u = t.instantiate,
            h = t.ScrollView,
            d = t.tween,
            I = t.Label,
            g = t.Vec3,
            _ = t.ParticleSystem,
            p = t.RigidBody,
            A = t.randomRangeInt,
            m = t.Animation,
            y = t.Component,
            C = t.resources,
            f = t.SpriteFrame
        }
        , function(t) {
            B = t.AdsManager
        }
        , function(t) {
            v = t.ControllerBlade
        }
        , function(t) {
            S = t.Data
        }
        , function(t) {
            T = t.Fruit
        }
        , function(t) {
            x = t.FruitPhysics
        }
        , function(t) {
            D = t.GameController
        }
        , function(t) {
            O = t.ItemDetails
        }
        , function(t) {
            P = t.SFXManager
        }
        , function(t) {
            U = t.UIRing
        }
        ],
        execute: function() {
            var E, k, w, L, b, F;
            s._RF.push({}, "7f22fJ4s2dNArsTjqtyV6Fi", "SenseiSwagScene", void 0);
            var M = c.ccclass
              , R = c.property;
            t("SenseiSwagScene", (E = M("SenseiSwagScene"),
            k = R({
                type: o,
                displayName: "Detail Item"
            }),
            E(((F = function(t) {
                function e() {
                    for (var e, n = arguments.length, s = new Array(n), c = 0; c < n; c++)
                        s[c] = arguments[c];
                    return e = t.call.apply(t, [this].concat(s)) || this,
                    a(e, "prefabDetailItem", b, i(e)),
                    e.listItem = [],
                    e.poolItem = [],
                    e.defaultPosY = 476.15,
                    e.currentIndex = 0,
                    e.holdInput = !1,
                    e.nextAnimationOut = "",
                    e.lastSelect = !1,
                    e
                }
                n(e, t);
                var s = e.prototype;
                return s.onEnable = function() {
                    var t = this;
                    if (e.FIRST_INIT)
                        e.FIRST_INIT = !1;
                    else {
                        this.holdInput = !1;
                        for (var n = 0; n < this.listItem.length; n++) {
                            var a = this.listItem[n];
                            a.active = !1,
                            a.parent = null,
                            this.poolItem.push(a)
                        }
                        this.listItem = [];
                        for (var i = 0, s = function(e) {
                            var n = S.DATA_COSTUME_BLADE[e]
                              , a = t.getItemFromPool();
                            a.setPosition(new g(0,-477.5 + i,0)),
                            t.listItem.push(a),
                            i -= a.getComponent(l).contentSize.height;
                            var s = a.getComponent(O);
                            s.updateName(n.name),
                            s.updateHowToGet(n.how_to_get, S.getInstance().unlockedBlade[e]),
                            s.description = n.description,
                            a.active = !1,
                            S.getInstance().unlockedBlade[e] ? (a.getChildByPath("cont_purchase_with").active = !1,
                            a.getChildByPath("text_purchased").active = !0) : (a.getChildByPath("cont_purchase_with").active = !0,
                            a.getChildByPath("text_purchased").active = !1),
                            e == S.getInstance().bladeUsed ? a.getChildByPath("TickSelectedItem").active = !0 : a.getChildByPath("TickSelectedItem").active = !1,
                            C.load(n.icon, f, (function(t, e) {
                                a.active = !0,
                                s.updateIcon(e)
                            }
                            ))
                        }, c = 0; c < S.DATA_COSTUME_BLADE.length; c++)
                            s(c);
                        for (var o = function(e) {
                            var n = S.DATA_COSTUME_BACKGROUND[e]
                              , a = t.getItemFromPool();
                            a.setPosition(new g(0,-477.5 + i,0)),
                            t.listItem.push(a),
                            i -= a.getComponent(l).contentSize.height;
                            var s = a.getComponent(O);
                            s.updateName(n.name),
                            s.updateHowToGet(n.how_to_get, S.getInstance().unlockedBG[e]),
                            s.description = n.description,
                            a.active = !1,
                            S.getInstance().unlockedBG[e] ? (a.getChildByPath("cont_purchase_with").active = !1,
                            a.getChildByPath("text_purchased").active = !0) : (a.getChildByPath("cont_purchase_with").active = !0,
                            a.getChildByPath("text_purchased").active = !1),
                            e == S.getInstance().bgUsed ? a.getChildByPath("TickSelectedItem").active = !0 : a.getChildByPath("TickSelectedItem").active = !1,
                            C.load(n.icon, f, (function(t, e) {
                                a.active = !0,
                                s.updateIcon(e)
                            }
                            ))
                        }, u = 0; u < S.DATA_COSTUME_BACKGROUND.length; u++)
                            o(u);
                        this.node.getChildByPath("verScrollview/view/content").getComponent(l).setContentSize(new r(700,Math.abs(i) + 477.5 + 130))
                    }
                }
                ,
                s.trySetFruit = function() {
                    this.holdInput = !0,
                    this.setFruit()
                }
                ,
                s.setFruit = function() {
                    if (e.Instance.currentIndex == S.getInstance().bladeUsed || e.Instance.currentIndex == S.getInstance().bgUsed + S.DATA_COSTUME_BLADE.length)
                        e.Instance.playAnimation("sensei_selected_in", (function() {
                            e.Instance.holdInput = !1
                        }
                        )),
                        e.Instance.nextAnimationOut = "sensei_selected_out";
                    else if (e.Instance.node.getChildByPath("RightUI/Selected").active = !1,
                    e.Instance.currentIndex < S.getInstance().unlockedBlade.length)
                        if (S.getInstance().unlockedBlade[e.Instance.currentIndex])
                            e.Instance.nextAnimationOut = "sensei_select_out",
                            e.Instance.playAnimation("sensei_select_in", (function() {
                                e.Instance.holdInput = !1
                            }
                            ));
                        else {
                            var t = S.DATA_COSTUME_BLADE[e.Instance.currentIndex].how_to_get;
                            "starfruit" == t.type && (S.getInstance().starFruit >= t.value ? (e.Instance.nextAnimationOut = "sensei_purchase_out",
                            e.Instance.playAnimation("sensei_purchase_in", (function() {
                                e.Instance.holdInput = !1
                            }
                            ))) : (e.Instance.nextAnimationOut = "sensei_purchLock_out",
                            e.Instance.playAnimation("sensei_purchLock_in", (function() {
                                e.Instance.holdInput = !1
                            }
                            ))))
                        }
                    else if (e.Instance.currentIndex < S.getInstance().unlockedBlade.length + S.getInstance().unlockedBG.length)
                        if (S.getInstance().unlockedBG[e.Instance.currentIndex - S.getInstance().unlockedBlade.length])
                            e.Instance.nextAnimationOut = "sensei_select_out",
                            e.Instance.playAnimation("sensei_select_in", (function() {
                                e.Instance.holdInput = !1
                            }
                            ));
                        else {
                            var n = S.DATA_COSTUME_BACKGROUND[e.Instance.currentIndex - S.getInstance().unlockedBlade.length].how_to_get;
                            "starfruit" == n.type && (S.getInstance().starFruit >= n.value ? (e.Instance.nextAnimationOut = "sensei_purchase_out",
                            e.Instance.playAnimation("sensei_purchase_in", (function() {
                                e.Instance.holdInput = !1
                            }
                            ))) : (e.Instance.nextAnimationOut = "sensei_purchLock_out",
                            e.Instance.playAnimation("sensei_purchLock_in", (function() {
                                e.Instance.holdInput = !1
                            }
                            ))))
                        }
                }
                ,
                s.getItemFromPool = function() {
                    if (0 == this.poolItem.length) {
                        var t = u(this.prefabDetailItem);
                        return t.setParent(this.node.getChildByPath("verScrollview/view/content")),
                        t
                    }
                    var e = this.poolItem.pop();
                    return e.active = !0,
                    e.setParent(this.node.getChildByPath("verScrollview/view/content")),
                    e
                }
                ,
                s.selectCurrent = function(t) {
                    this.currentIndex < S.DATA_COSTUME_BLADE.length ? (P.getInstance().play(P.SFX_UI_BLADE_EQUIP),
                    11 == S.getInstance().bladeUsed && P.getInstance().stopLoopSFX(P.SFX_BLADEFIRE_CRACKER_LOOP),
                    this.listItem[S.getInstance().bladeUsed].getChildByPath("TickSelectedItem").active = !1,
                    S.getInstance().bladeUsed = this.currentIndex,
                    this.listItem[S.getInstance().bladeUsed].getChildByPath("TickSelectedItem").active = !0,
                    v.getInstance().stopAllBladeSFX(),
                    D.getInstance().changeBlade(S.DATA_COSTUME_BLADE[S.getInstance().bladeUsed].prefab)) : (P.getInstance().play(P.SFX_UI_DOJO_EQUIP),
                    this.listItem[S.getInstance().bgUsed + S.DATA_COSTUME_BLADE.length].getChildByPath("TickSelectedItem").active = !1,
                    S.getInstance().bgUsed = this.currentIndex - S.DATA_COSTUME_BLADE.length,
                    this.listItem[S.getInstance().bgUsed + S.DATA_COSTUME_BLADE.length].getChildByPath("TickSelectedItem").active = !0,
                    D.getInstance().changeBackground(S.DATA_COSTUME_BACKGROUND[S.getInstance().bgUsed].background)),
                    this.currentIndex == S.getInstance().bladeUsed || this.currentIndex == S.getInstance().bgUsed + S.DATA_COSTUME_BLADE.length ? "sensei_selected_out" != e.Instance.nextAnimationOut && e.Instance.playAnimation(e.Instance.nextAnimationOut, (function() {
                        e.Instance.playAnimation("sensei_selected_in"),
                        e.Instance.nextAnimationOut = "sensei_selected_out"
                    }
                    )) : e.Instance.playAnimation(e.Instance.nextAnimationOut, (function() {
                        e.Instance.playAnimation("sensei_select_in"),
                        e.Instance.nextAnimationOut = "sensei_select_out"
                    }
                    )),
                    D.saveData()
                }
                ,
                s.onLoad = function() {
                    e.Instance = this,
                    this.node.getChildByPath("verScrollview").on(h.EventType.SCROLL_BEGAN, (function() {}
                    ), this),
                    this.node.getChildByPath("verScrollview").on(h.EventType.SCROLL_ENDED, (function() {
                        var t = this
                          , n = this.node.getChildByPath("verScrollview/view/content").position.clone();
                        if (n.y < this.defaultPosY)
                            n.y = this.defaultPosY,
                            this.node.getChildByPath("verScrollview/view/content").position = n;
                        else {
                            for (var a = n.y - this.defaultPosY; a > 0; )
                                a -= 155;
                            var i = 0;
                            (a = Math.abs(a)) >= 77.5 ? (n.y -= 155 - a,
                            i = Math.abs(155 - a) / 300) : (n.y += a,
                            i = Math.abs(a) / 300),
                            d(this.node.getChildByPath("verScrollview/view/content")).to(i, {
                                position: n
                            }).call((function() {
                                var a = ""
                                  , i = Math.floor(Math.abs(t.defaultPosY - n.y) / 155);
                                if (i < S.DATA_COSTUME_BLADE.length ? a = S.DATA_COSTUME_BLADE[i].description : (i >= S.DATA_COSTUME_BACKGROUND.length + S.DATA_COSTUME_BLADE.length && (i = S.DATA_COSTUME_BACKGROUND.length + S.DATA_COSTUME_BLADE.length - 1),
                                a = S.DATA_COSTUME_BACKGROUND[i - S.DATA_COSTUME_BLADE.length].description),
                                t.currentIndex = i,
                                t.node.getChildByPath("RightUI/ParchmentBoardSenseiSwag/text_description").getComponent(I).string = a,
                                t.currentIndex == S.getInstance().bladeUsed || t.currentIndex == S.getInstance().bgUsed + S.DATA_COSTUME_BLADE.length)
                                    "sensei_selected_out" != e.Instance.nextAnimationOut && e.Instance.playAnimation(e.Instance.nextAnimationOut, (function() {
                                        e.Instance.playAnimation("sensei_selected_in"),
                                        e.Instance.nextAnimationOut = "sensei_selected_out"
                                    }
                                    ));
                                else if (t.currentIndex < S.getInstance().unlockedBlade.length)
                                    if (S.getInstance().unlockedBlade[t.currentIndex])
                                        "sensei_select_out" != e.Instance.nextAnimationOut && e.Instance.playAnimation(e.Instance.nextAnimationOut, (function() {
                                            e.Instance.playAnimation("sensei_select_in"),
                                            e.Instance.nextAnimationOut = "sensei_select_out"
                                        }
                                        ));
                                    else {
                                        var s = S.DATA_COSTUME_BLADE[e.Instance.currentIndex].how_to_get;
                                        "starfruit" == s.type && (S.getInstance().starFruit >= s.value ? "sensei_purchase_out" != e.Instance.nextAnimationOut && e.Instance.playAnimation(e.Instance.nextAnimationOut, (function() {
                                            e.Instance.playAnimation("sensei_purchase_in"),
                                            e.Instance.nextAnimationOut = "sensei_purchase_out"
                                        }
                                        )) : "sensei_purchLock_out" != e.Instance.nextAnimationOut && e.Instance.playAnimation(e.Instance.nextAnimationOut, (function() {
                                            e.Instance.playAnimation("sensei_purchLock_in"),
                                            e.Instance.nextAnimationOut = "sensei_purchLock_out"
                                        }
                                        )))
                                    }
                                else if (t.currentIndex < S.getInstance().unlockedBlade.length + S.getInstance().unlockedBG.length)
                                    if (S.getInstance().unlockedBG[t.currentIndex - S.getInstance().unlockedBlade.length])
                                        "sensei_select_out" != e.Instance.nextAnimationOut && e.Instance.playAnimation(e.Instance.nextAnimationOut, (function() {
                                            e.Instance.playAnimation("sensei_select_in"),
                                            e.Instance.nextAnimationOut = "sensei_select_out"
                                        }
                                        ));
                                    else {
                                        var c = S.DATA_COSTUME_BACKGROUND[e.Instance.currentIndex - S.getInstance().unlockedBlade.length].how_to_get;
                                        "starfruit" == c.type && (S.getInstance().starFruit >= c.value ? "sensei_purchase_out" != e.Instance.nextAnimationOut && e.Instance.playAnimation(e.Instance.nextAnimationOut, (function() {
                                            e.Instance.playAnimation("sensei_purchase_in"),
                                            e.Instance.nextAnimationOut = "sensei_purchase_out"
                                        }
                                        )) : "sensei_purchLock_out" != e.Instance.nextAnimationOut && e.Instance.playAnimation(e.Instance.nextAnimationOut, (function() {
                                            e.Instance.playAnimation("sensei_purchLock_in"),
                                            e.Instance.nextAnimationOut = "sensei_purchLock_out"
                                        }
                                        )))
                                    }
                            }
                            )).start()
                        }
                    }
                    ), this)
                }
                ,
                s.start = function() {}
                ,
                s.update = function(t) {}
                ,
                s.btnBackClicked = function() {
                    this.holdInput || (this.holdInput = !0,
                    P.getInstance().play(P.SFX_SELECT),
                    D.getInstance().moveToHomescreen())
                }
                ,
                s.hideNode = function(t, e) {
                    d(t).to(.2, {
                        scale: new g(0,0,0)
                    }).call((function() {
                        e()
                    }
                    )).start()
                }
                ,
                s.showNode = function(t, e, n) {
                    t.getScale().equals(e) ? n() : (t.setScale(0, 0, 0),
                    d(t).to(.2, {
                        scale: e
                    }).call((function() {
                        n()
                    }
                    )).start())
                }
                ,
                s.tryPurchase = function() {
                    var t = this
                      , n = !1
                      , a = null;
                    if (this.currentIndex < S.getInstance().unlockedBlade.length) {
                        if (!S.getInstance().unlockedBlade[this.currentIndex] && "starfruit" == (a = S.DATA_COSTUME_BLADE[this.currentIndex].how_to_get).type) {
                            var i = a.value;
                            S.getInstance().starFruit >= i && (S.getInstance().unlockedBlade[this.currentIndex] = !0,
                            D.saveData(),
                            n = !0,
                            this.listItem[this.currentIndex].getComponent(O).updateHowToGet(a, S.getInstance().unlockedBlade[this.currentIndex]))
                        }
                    } else if (this.currentIndex < S.getInstance().unlockedBlade.length + S.getInstance().unlockedBG.length) {
                        if (!S.getInstance().unlockedBG[this.currentIndex - S.getInstance().unlockedBlade.length])
                            if ("starfruit" == (a = S.DATA_COSTUME_BACKGROUND[this.currentIndex - S.getInstance().unlockedBlade.length].how_to_get).type) {
                                var s = a.value;
                                S.getInstance().starFruit >= s && (S.getInstance().unlockedBG[this.currentIndex - S.getInstance().unlockedBlade.length] = !0,
                                n = !0,
                                this.listItem[this.currentIndex].getComponent(O).updateHowToGet(a, S.getInstance().unlockedBG[this.currentIndex - S.getInstance().unlockedBlade.length]))
                            }
                    }
                    if (n) {
                        if (this.enableVerticalScroll(!1),
                        P.getInstance().play(P.SFX_UI_BUY),
                        "starfruit" == a.type) {
                            var c = a.value
                              , o = new g(S.getInstance().starFruit,0,0);
                            S.getInstance().starFruit -= c,
                            D.getInstance().playStarfruitSpend(c),
                            d(o).to(.5, {
                                x: S.getInstance().starFruit
                            }, {
                                onUpdate: function() {
                                    t.node.getChildByPath("UI_atasSensei/StarfruitLabel/text_starfruitTop").getComponent(I).string = D.getInstance().formatNumber(parseInt(o.x.toFixed(0)))
                                }
                            }).start(),
                            D.saveData()
                        }
                        var l = D.Instance.particleJuiceStarfruit;
                        l.active = !0,
                        l.position = S.getInstance().convert2DPosTo3D(this.node.getChildByPath("RightUI/button_purchase").worldPosition),
                        l.getComponent(_).play(),
                        l.getChildByPath("light3").getComponent(_).play(),
                        l.getChildByPath("light").getComponent(_).play(),
                        l.getChildByPath("light2").getComponent(_).play(),
                        l.getChildByPath("sparkle").getComponent(_).play(),
                        l.getChildByPath("juice").getComponent(_).play(),
                        l.getChildByPath("sparkle2").getComponent(_).play();
                        var r = D.Instance.particleUnlockItem;
                        r.active = !0,
                        r.position = S.getInstance().convert2DPosTo3D(this.listItem[this.currentIndex].getChildByPath("container_icon").worldPosition),
                        r.getComponent(_).play(),
                        r.getChildByPath("p_impact").getComponent(_).play(),
                        r.getChildByPath("p_ring").getComponent(_).play(),
                        e.Instance.playAnimation(e.Instance.nextAnimationOut, (function() {
                            e.Instance.playAnimation("sensei_selected_in"),
                            e.Instance.nextAnimationOut = "sensei_selected_out"
                        }
                        )),
                        this.scheduleOnce((function() {
                            e.Instance.selectCurrent(!0),
                            this.enableVerticalScroll(!0)
                        }
                        ), .4)
                    } else {
                        var u = this.node.getChildByPath("RightUI/button_purchase").getComponent(U).getFruit().getComponent(T);
                        this.scheduleOnce((function() {
                            u.reset(!1);
                            var t = u.node.getComponent(x);
                            null != t && (t.pausePhysics = !0),
                            u.getComponent(p).setAngularVelocity(new g(A(-3, 3),A(-3, 3),A(-3, 3)))
                        }
                        ), .4)
                    }
                }
                ,
                s.btnAdsClicked = function() {
                    if (!this.holdInput) {
                        this.holdInput = !0,
                        P.getInstance().play(P.SFX_SELECT);
                        var t = this;
                        B.showRewardedAds((function() {
                            var n = D.Instance.particleTrailStarfruit;
                            n.setWorldPosition(S.getInstance().convert2DPosTo3D(t.node.getChildByPath("RightUI/Locked_ad/ButtonBonus/starfruitBonusLayout/text_starfruitBonus").worldPosition));
                            var a = t.node.getChildByPath("UI_atasSensei/StarfruitLabel/starfruitLabelIcon/CurrencyStarfruitIcon").worldPosition;
                            d(n).to(.5, {
                                worldPosition: S.getInstance().convert2DPosTo3D(a)
                            }).start();
                            var i = new g(S.getInstance().starFruit,0,0);
                            if (S.getInstance().starFruit += 50,
                            D.getInstance().playStarfruitIncrement(50),
                            d(i).delay(.5).to(.5, {
                                x: S.getInstance().starFruit
                            }, {
                                onUpdate: function() {
                                    t.node.getChildByPath("UI_atasSensei/StarfruitLabel/text_starfruitTop").getComponent(I).string = D.getInstance().formatNumber(parseInt(i.x.toFixed(0)))
                                }
                            }).start(),
                            D.saveData(),
                            t.node.getChildByPath("RightUI/Selected").active = !1,
                            t.currentIndex < S.getInstance().unlockedBlade.length)
                                S.DATA_COSTUME_BLADE[e.Instance.currentIndex].how_to_get.type;
                            else if (t.currentIndex < S.getInstance().unlockedBlade.length + S.getInstance().unlockedBG.length) {
                                S.DATA_COSTUME_BACKGROUND[e.Instance.currentIndex - S.getInstance().unlockedBlade.length].how_to_get.type
                            }
                            t.holdInput = !1
                        }
                        ), (function() {
                            t.holdInput = !1
                        }
                        ))
                    }
                }
                ,
                s.enableVerticalScroll = function(t) {
                    this.node.getChildByPath("verScrollview").getComponent(h).vertical = t
                }
                ,
                s.playAnimation = function(t, e) {
                    void 0 === e && (e = function() {}
                    );
                    var n = null;
                    if ("sensei_purchase_in" == t ? n = this.node.getChildByPath("RightUI/button_purchase").getComponent(U).getFruit() : "sensei_purchLock_in" == t ? n = this.node.getChildByPath("RightUI/button_purchaseLock").getComponent(U).getFruit() : "sensei_select_in" == t && (n = this.node.getChildByPath("RightUI/button_select").getComponent(U).getFruit()),
                    null != n) {
                        n.getComponent(T).reset(!1);
                        var a = n.getComponent(x);
                        null != a && (a.pausePhysics = !0),
                        n.getComponent(p).setAngularVelocity(new g(A(-3, 3),A(-3, 3),A(-3, 3)))
                    }
                    var i = this.node.getComponent(m);
                    i.play(t),
                    i.on(m.EventType.FINISHED, e, this, !0)
                }
                ,
                e
            }(y)).FIRST_INIT = !0,
            F.Instance = void 0,
            b = e((L = F).prototype, "prefabDetailItem", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            w = L)) || w));
            s._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ServerManager.ts", ["cc"], (function(e) {
    "use strict";
    var n, r;
    return {
        setters: [function(e) {
            n = e.cclegacy,
            r = e._decorator
        }
        ],
        execute: function() {
            var t, c;
            n._RF.push({}, "62155hpLgtN3qNfmJs68NKY", "ServerManager", void 0);
            var a = r.ccclass;
            r.property;
            globalThis.id_user = "",
            globalThis.isLocal = !1;
            e("ServerManager", a("ServerManager")(((c = function() {
                function e() {}
                return e.getInstance = function() {
                    return null == this.Instance && (e.Instance = new e),
                    e.Instance
                }
                ,
                e
            }()).Instance = null,
            t = c)) || t);
            n._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SFXManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(_) {
    "use strict";
    var o, S, i, t, F, e, u, E, L;
    return {
        setters: [function(_) {
            o = _.applyDecoratedDescriptor,
            S = _.inheritsLoose,
            i = _.initializerDefineProperty,
            t = _.assertThisInitialized
        }
        , function(_) {
            F = _.cclegacy,
            e = _._decorator,
            u = _.AudioClip,
            E = _.AudioSource,
            L = _.Component
        }
        ],
        execute: function() {
            var r, X, I, a, R, A;
            F._RF.push({}, "f86a9cRdghLa7oGhooUzlH9", "SFXManager", void 0);
            var n = e.ccclass
              , s = e.property;
            _("SFXManager", (r = n("SFXManager"),
            X = s({
                type: [u]
            }),
            r(((A = function(_) {
                function o() {
                    for (var o, S = arguments.length, F = new Array(S), e = 0; e < S; e++)
                        F[e] = arguments[e];
                    return o = _.call.apply(_, [this].concat(F)) || this,
                    i(o, "listSFX", R, t(o)),
                    o.audioSource = void 0,
                    o.audioSourcePomeSparkleLoop = void 0,
                    o.audioSourceStrawberryLoop = void 0,
                    o.audioPeachLoop = void 0,
                    o.audioSourceFireCrackerLoop = void 0,
                    o.audioSourceBlitzDrum = void 0,
                    o.audioSourceDrumRoll = void 0,
                    o.notInit = !0,
                    o.listLoopAudioSource = [],
                    o
                }
                S(o, _),
                o.getInstance = function() {
                    return o.Instance
                }
                ;
                var F = o.prototype;
                return F.onLoad = function() {
                    o.Instance = this,
                    o.Instance.notInit = !1,
                    o.isMuted = !window.fast.gameAudio
                }
                ,
                F.start = function() {
                    this.audioSource = this.getComponent(E),
                    this.audioSourcePomeSparkleLoop = this.addComponent(E),
                    this.audioSourceStrawberryLoop = this.addComponent(E),
                    this.audioPeachLoop = this.addComponent(E),
                    this.audioSourceFireCrackerLoop = this.addComponent(E),
                    this.audioSourceBlitzDrum = this.addComponent(E),
                    this.audioSourceDrumRoll = this.addComponent(E),
                    this.listLoopAudioSource = [this.audioSourcePomeSparkleLoop, this.audioSourceStrawberryLoop, this.audioPeachLoop, this.audioSourceFireCrackerLoop, this.audioSourceBlitzDrum, this.audioSourceDrumRoll]
                }
                ,
                F.playLoopSFX = function(_) {
                    var S = null;
                    _ == o.SFX_POME_SPARKLE__LP ? S = this.audioSourcePomeSparkleLoop : _ == o.SFX_STRAWBERRY_LOOP ? S = this.audioSourceStrawberryLoop : _ == o.SFX_PEACH_LOOP ? S = this.audioPeachLoop : _ == o.SFX_BLADEFIRE_CRACKER_LOOP ? S = this.audioSourceFireCrackerLoop : _ == o.SFX_BLITZ_DRUM ? S = this.audioSourceBlitzDrum : _ == o.SFX_BONUS_DRUM_ROLL_LOOP && (S = this.audioSourceDrumRoll),
                    S.clip = this.listSFX[_],
                    S.loop = !0,
                    S.play(),
                    o.isMuted ? S.volume = 0 : o.isMuted || (S.volume = 1)
                }
                ,
                F.stopLoopSFX = function(_) {
                    _ == o.SFX_POME_SPARKLE__LP ? this.audioSourcePomeSparkleLoop.stop() : _ == o.SFX_STRAWBERRY_LOOP ? this.audioSourceStrawberryLoop.stop() : _ == o.SFX_PEACH_LOOP ? this.audioPeachLoop.stop() : _ == o.SFX_BLADEFIRE_CRACKER_LOOP ? this.audioSourceFireCrackerLoop.stop() : _ == o.SFX_BLITZ_DRUM ? this.audioSourceBlitzDrum.stop() : _ == o.SFX_BONUS_DRUM_ROLL_LOOP && this.audioSourceDrumRoll.stop()
                }
                ,
                F.play = function(_) {
                    o.Instance.notInit || o.isMuted || (this.audioSource.playOneShot(this.listSFX[_]),
                    o.isMuted ? this.audioSource.volume = 0 : this.audioSource.volume = 1)
                }
                ,
                F.playClip = function(_) {
                    o.Instance.notInit || o.isMuted || this.audioSource.playOneShot(_)
                }
                ,
                F.muteSFX = function(_) {
                    if (o.isMuted = _,
                    o.isMuted) {
                        this.audioSource.volume = 0;
                        for (var S = 0; S < this.listLoopAudioSource.length; S++)
                            this.listLoopAudioSource[S].volume = 0
                    } else {
                        this.audioSource.volume = 1;
                        for (var i = 0; i < this.listLoopAudioSource.length; i++)
                            this.listLoopAudioSource[i].volume = 1
                    }
                }
                ,
                F.setVolume = function(_) {
                    this.audioSource.volume = _;
                    for (var o = 0; o < this.listLoopAudioSource.length; o++)
                        this.listLoopAudioSource[o].volume = _
                }
                ,
                o
            }(L)).SFX_BLADE_REGULAR_1 = 0,
            A.SFX_BLADE_REGULAR_2 = 1,
            A.SFX_BLADE_REGULAR_3 = 2,
            A.SFX_BLADE_REGULAR_4 = 3,
            A.SFX_BLADE_REGULAR_5 = 4,
            A.SFX_BLADE_REGULAR_6 = 5,
            A.SFX_BLADE_REGULAR_7 = 6,
            A.SFX_BOMB_EXPLODE_GAMEOVER = 7,
            A.SFX_BOMB_LAUNCH = 8,
            A.SFX_FRUIT_IMPACT_APPLE = 9,
            A.SFX_FRUIT_IMPACT_BIG_HOLLOW = 10,
            A.SFX_IMPACT_BIG_WET_1 = 11,
            A.SFX_IMPACT_BIG_WET_2 = 12,
            A.SFX_IMPACT_BIG_WET_3 = 13,
            A.SFX_IMPACT_MEDIUM_DRY = 14,
            A.SFX_IMPACT_MEDIUM_WET_1 = 15,
            A.SFX_IMPACT_MEDIUM_WET_2 = 16,
            A.SFX_IMPACT_MEDIUM_WET_3 = 17,
            A.SFX_IMPACT_SMALL_WET_1 = 18,
            A.SFX_IMPACT_SMALL_WET_2 = 19,
            A.SFX_IMPACT_SMALL_WET_3 = 20,
            A.SFX_FRUIT_LAUNCH = 21,
            A.SFX_COMBO_FRUIT_3 = 22,
            A.SFX_COMBO_FRUIT_4 = 23,
            A.SFX_COMBO_FRUIT_5 = 24,
            A.SFX_COMBO_FRUIT_6 = 25,
            A.SFX_COMBO_FRUIT_7 = 26,
            A.SFX_COMBO_FRUIT_8 = 27,
            A.SFX_COMBO_FRUIT_9 = 28,
            A.SFX_COMBO_FRUIT_10 = 29,
            A.SFX_CRITICAL = 30,
            A.SFX_EXTRA_LIFE = 31,
            A.SFX_GAMEOVER = 32,
            A.SFX_GAMESTART = 33,
            A.SFX_GANK = 34,
            A.SFX_SELECT = 35,
            A.SFX_POWERUP_DEFLECT = 36,
            A.SFX_POWERUP_DEFLECT_EXPLODE = 37,
            A.SFX_UI_BACK = 38,
            A.SFX_UI_BLADE_EQUIP = 39,
            A.SFX_UI_BUY = 40,
            A.SFX_UI_DOJO_EQUIP = 41,
            A.SFX_UI_STARFRUIT_INCREMENT = 42,
            A.SFX_UI_STARFRUIT_SPEND = 43,
            A.SFX_UI_ACHIEVEMENT = 44,
            A.SFX_POME_SLICE_1 = 45,
            A.SFX_POME_SLICE_2 = 46,
            A.SFX_POME_SLICE_3 = 47,
            A.SFX_POME_BURST = 48,
            A.SFX_POME_RAMPDOWN = 49,
            A.SFX_POME_SPARKLE__LP = 50,
            A.SFX_POME_ZOOM_OUT = 51,
            A.SFX_TIME_TICK = 52,
            A.SFX_TIME_TOCK = 53,
            A.SFX_TIME_RING_OUT = 54,
            A.SFX_UIPOWER_ENABLE = 55,
            A.SFX_UIPOWER_DISABLE = 56,
            A.SFX_STRAWBERRY_SLICE = 57,
            A.SFX_STRAWBERRY_LOOP = 58,
            A.SFX_COMBO_10_FRUIT_PLUS = 59,
            A.SFX_PEACH_LOOP = 60,
            A.SFX_PEACH_SLICE = 61,
            A.SFX_BLADEFIRE_CRACKER_IMPACT_1 = 62,
            A.SFX_BLADEFIRE_CRACKER_IMPACT_2 = 63,
            A.SFX_BLADEFIRE_CRACKER_IMPACT_3 = 64,
            A.SFX_BLADEFIRE_CRACKER_LOOP = 65,
            A.SFX_BLADEFIRE_CRACKER_SWIPE_1 = 66,
            A.SFX_BLADEFIRE_CRACKER_SWIPE_2 = 67,
            A.SFX_BLADEFIRE_CRACKER_SWIPE_3 = 68,
            A.SFX_BLADEFIRE_CRACKER_SWIPE_4 = 69,
            A.SFX_BLADEFIRE_CRACKER_SWIPE_5 = 70,
            A.SFX_HOLLY_IMPACT_1 = 71,
            A.SFX_HOLLY_IMPACT_2 = 72,
            A.SFX_HOLLY_IMPACT_3 = 73,
            A.SFX_HOLLY_IMPACT_4 = 74,
            A.SFX_HOLLY_SWIPE_1 = 75,
            A.SFX_HOLLY_SWIPE_2 = 76,
            A.SFX_HOLLY_SWIPE_3 = 77,
            A.SFX_PARTY_SWIPE_1 = 78,
            A.SFX_PARTY_SWIPE_2 = 79,
            A.SFX_PARTY_SWIPE_3 = 80,
            A.SFX_PARTY_SWIPE_4 = 81,
            A.SFX_BANANA_FREEZE_SLICE = 82,
            A.SFX_BANANA_FRENZY_SLICE = 83,
            A.SFX_BANANA_DOUBLE_SLICE = 84,
            A.SFX_BLITZ_DRUM_LIGHT = 85,
            A.SFX_BLITZ_DRUM = 86,
            A.SFX_BLITZ_DRUM_END = 87,
            A.SFX_BLITZ_1 = 88,
            A.SFX_BLITZ_2 = 89,
            A.SFX_BLITZ_3 = 90,
            A.SFX_BLITZ_4 = 91,
            A.SFX_BLITZ_5 = 92,
            A.SFX_BLITZ_6 = 93,
            A.SFX_BONUS_DRUM_ROLL_LOOP = 94,
            A.SFX_BONUS_EXPLOSION_1 = 95,
            A.SFX_BONUS_EXPLOSION_2 = 96,
            A.SFX_BONUS_EXPLOSION_3 = 97,
            A.SFX_BONUS_FIREWORK_EXPLODE = 98,
            A.SFX_BONUS_APPLAUSE = 99,
            A.SFX_BOMB_EXPLODE_ARCADE = 100,
            A.SFX_UI_POSITIVE = 101,
            A.SFX_LEVEL_UP_BURST = 102,
            A.SFX_LEVEL_UP_UNLOCK = 103,
            A.SFX_XP_INCREASE = 104,
            A.SFX_XP_LAUNCH = 105,
            A.Instance = {
                playLoopSFX: function(_) {},
                stopLoopSFX: function(_) {},
                play: function(_) {},
                playClip: function(_) {},
                muteSFX: function(_) {},
                setVolume: function(_) {}
            },
            A.isMuted = !1,
            R = o((a = A).prototype, "listSFX", [X], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            I = a)) || I));
            F._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ShakeNode.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(o) {
    "use strict";
    var n, i, t, e, s, p;
    return {
        setters: [function(o) {
            n = o.inheritsLoose
        }
        , function(o) {
            i = o.cclegacy,
            t = o._decorator,
            e = o.tween,
            s = o.Vec3,
            p = o.Component
        }
        ],
        execute: function() {
            var h;
            i._RF.push({}, "1d9f79OMKhJuLrGSkhSzGGB", "ShakeNode", void 0);
            var w = t.ccclass;
            t.property,
            o("ShakeNode", w("ShakeNode")(h = function(o) {
                function i() {
                    for (var n, i = arguments.length, t = new Array(i), e = 0; e < i; e++)
                        t[e] = arguments[e];
                    return (n = o.call.apply(o, [this].concat(t)) || this).defaultPosition = new s(0,0,0),
                    n.shakeTween = null,
                    n
                }
                n(i, o);
                var t = i.prototype;
                return t.onLoad = function() {
                    this.defaultPosition = this.node.position.clone()
                }
                ,
                t.start = function() {}
                ,
                t.shakeEffect = function() {
                    null != this.shakeTween && this.shakeTween.stop(),
                    this.shakeTween = e(this.node).to(.02, {
                        position: new s(.5,.7,this.node.position.z)
                    }).to(.02, {
                        position: new s(-.6,.7,this.node.position.z)
                    }).to(.02, {
                        position: new s(-1.3,.3,this.node.position.z)
                    }).to(.02, {
                        position: new s(.3,-.6,this.node.position.z)
                    }).to(.02, {
                        position: new s(-.5,.5,this.node.position.z)
                    }).to(.02, {
                        position: new s(.2,-.8,this.node.position.z)
                    }).to(.02, {
                        position: new s(-.8,-1,this.node.position.z)
                    }).to(.02, {
                        position: new s(.3,1,this.node.position.z)
                    }).to(.02, {
                        position: new s(0,0,this.node.position.z)
                    }).start()
                }
                ,
                t.shakeEffect2 = function(o, n) {
                    null != this.shakeTween && this.shakeTween.stop(),
                    this.shakeTween = e(this.node).by(.01, {
                        position: new s(.5 * o,.7 * o,0)
                    }).by(.01, {
                        position: new s(-.5 * o,-.7 * o,0)
                    }).by(.01, {
                        position: new s(.6 * o,.7 * o,0)
                    }).by(.01, {
                        position: new s(-.6 * o,-.7 * o,0)
                    }).by(.01, {
                        position: new s(-.3 * o,.3 * o,0)
                    }).by(.01, {
                        position: new s(.3 * o,-.3 * o,0)
                    }).by(.01, {
                        position: new s(.3 * o,-.6 * o,0)
                    }).by(.01, {
                        position: new s(-.3 * o,.6 * o,0)
                    }).by(.01, {
                        position: new s(-.5 * o,.5 * o,0)
                    }).by(.01, {
                        position: new s(.5 * o,-.5 * o,0)
                    }).by(.01, {
                        position: new s(.2 * o,-.8 * o,0)
                    }).by(.01, {
                        position: new s(-.2 * o,.8 * o,0)
                    }).by(.01, {
                        position: new s(-.8 * o,-.1 * o,0)
                    }).by(.01, {
                        position: new s(.8 * o,.1 * o,0)
                    }).by(.01, {
                        position: new s(.3 * o,.1 * o,0)
                    }).by(.01, {
                        position: new s(-.1 * o,-.1 * o,0)
                    }).to(.01, {
                        position: n
                    }).start()
                }
                ,
                i
            }(p)) || h);
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/ShareManager.ts", ["cc", "./GameController.ts"], (function(e) {
    "use strict";
    var t, a, r, n, o, c, i;
    return {
        setters: [function(e) {
            t = e.cclegacy,
            a = e._decorator,
            r = e.instantiate,
            n = e.Camera,
            o = e.RenderTexture,
            c = e.screen
        }
        , function(e) {
            i = e.GameController
        }
        ],
        execute: function() {
            var u, g;
            t._RF.push({}, "4e38clz1q9L4LJL2HiyfxpW", "ShareManager", void 0);
            var h = a.ccclass;
            a.property,
            e("ShareManager", h("ShareManager")(((g = function() {
                function e() {}
                return e.createCaptureCamera = function(t, a) {
                    void 0 === t && (t = -1),
                    void 0 === a && (a = -1);
                    var o = i.getInstance().canvasScreenshot.getChildByPath("Camera")
                      , c = r(o);
                    c.parent = o.parent;
                    var u = c.getComponent(n);
                    e.createRenderTexture(u, t, a),
                    e.captureCamera = u
                }
                ,
                e.createRenderTexture = function(e, t, a) {
                    console.log(e.targetTexture);
                    var r = new o
                      , n = c.windowSize
                      , i = n.width
                      , u = n.height;
                    -1 != t && -1 != a && (i = t,
                    u = a),
                    r.initialize({
                        width: i,
                        height: u
                    }),
                    e.targetTexture = r,
                    console.log(e.targetTexture)
                }
                ,
                e.getRenderData = function(t) {
                    var a = t.targetTexture;
                    return e.toB64(a.readPixels(), a)
                }
                ,
                e.toB64 = function(e, t) {
                    for (var a = document.createElement("canvas"), r = a.getContext("2d"), n = a.width = Math.floor(t.width), o = a.height = Math.floor(t.height), c = 4 * n, i = 0; i < o; i++) {
                        for (var u = o - 1 - i, g = r.createImageData(n, 1), h = u * n * 4, l = 0; l < c; l++)
                            g.data[l] = e[h + l];
                        r.putImageData(g, 0, i)
                    }
                    return a.toDataURL()
                }
                ,
                e.removeCamera = function() {
                    null != e.captureCamera && e.captureCamera.node.destroy()
                }
                ,
                e
            }()).captureCamera = null,
            u = g)) || u);
            t._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SuperGraphics.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    "use strict";
    var e, i, n, r, a, s, h, l, o, u, v, f, d, g, p, c, x, S, _;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            n = t.initializerDefineProperty,
            r = t.assertThisInitialized
        }
        , function(t) {
            a = t.cclegacy,
            s = t._decorator,
            h = t.UIVertexFormat,
            l = t.gfx,
            o = t.v2,
            u = t.Color,
            v = t.Vec3,
            f = t.Texture2D,
            d = t.Material,
            g = t.Graphics,
            p = t.warnID,
            c = t.director,
            x = t.RenderingSubMesh,
            S = t.Vec2,
            _ = t.earcut
        }
        ],
        execute: function() {
            var y, L, m, b, M, D, E, T;
            a._RF.push({}, "b82feFO50NE0JlDwPOUJ+Gm", "SuperGraphics", void 0);
            for (var B = s.ccclass, C = s.property, w = h.vfmtPosColor.concat([new l.Attribute("a_dist",l.Format.R32F), new l.Attribute("a_line",l.Format.R32F)]), R = h.getComponentPerVertex(w), A = h.getAttributeStride(w), F = function(t) {
                function e(e, i) {
                    var n;
                    return (n = t.call(this, e, i) || this).dx = 0,
                    n.dy = 0,
                    n.dmx = 0,
                    n.dmy = 0,
                    n.flags = 0,
                    n.len = 0,
                    n.lineLength = 0,
                    n.reset(),
                    n
                }
                return i(e, t),
                e.prototype.reset = function() {
                    this.dx = 0,
                    this.dy = 0,
                    this.dmx = 0,
                    this.dmy = 0,
                    this.flags = 0,
                    this.len = 0,
                    this.lineLength = 0
                }
                ,
                e
            }(S), P = null, I = Math.PI, O = Math.max, U = Math.ceil, V = Math.acos, z = Math.cos, J = Math.sin, N = Math.atan2, W = o(), G = null, k = new u, q = [], X = 0; X < 4; X++)
                q.push(new v);
            function Y(t, e, i) {
                return t < e ? e : t > i ? i : t
            }
            var j = 1;
            t("SuperGraphics", (y = B("SuperGraphics"),
            L = C(f),
            m = C(d),
            y((D = e((M = function(t) {
                function e() {
                    for (var e, i = arguments.length, a = new Array(i), s = 0; s < i; s++)
                        a[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(a)) || this,
                    n(e, "lineTexture", D, r(e)),
                    n(e, "myMat", E, r(e)),
                    n(e, "myLineWidth", T, r(e)),
                    e
                }
                i(e, t);
                var a = e.prototype;
                return a.onLoad = function() {
                    this.lineTexture && (this.lineWidth = this.lineTexture.height,
                    j = this.lineWidth / (2 * this.lineTexture.height * this.lineTexture.width),
                    console.log(this.lineWidth + " " + j)),
                    this.myMat && (this.setMaterial(this.myMat, 0),
                    this.lineTexture && this.getMaterial(0).setProperty("texture1", this.lineTexture)),
                    t.prototype.onLoad.call(this)
                }
                ,
                a.updateTexture = function() {
                    this.onLoad()
                }
                ,
                a.onEnable = function() {
                    this.myMat && (this.setMaterial(this.myMat, 0),
                    this.lineTexture && this.getMaterial(0).setProperty("texture1", this.lineTexture))
                }
                ,
                a.start = function() {}
                ,
                a._flushAssembler = function() {
                    var t = g.Assembler.getAssembler(this)
                      , e = {};
                    for (var i in t)
                        e[i] = t[i];
                    e.stroke = function(t) {
                        u.copy(k, t.strokeColor),
                        t.impl && (this._flattenPaths(t.impl),
                        this._expandStroke(t),
                        t.impl.updatePathOffset = !0,
                        this.end(t))
                    }
                    ,
                    e.fill = function(t) {
                        u.copy(k, t.fillColor),
                        this._expandFill(t),
                        t.impl && (t.impl.updatePathOffset = !0),
                        this.end(t)
                    }
                    ,
                    e._flattenPaths = function(t) {
                        for (var e = t.paths, i = t.pathOffset, n = t.pathLength; i < n; i++) {
                            var r = e[i].points
                              , a = r[r.length - 1]
                              , s = r[0]
                              , h = 0;
                            r[0].lineLength = h;
                            for (var l = null, u = r[0], v = o(), f = 0, d = r.length; f < d; f++) {
                                var g = new F(s.x,s.y);
                                g.subtract(a),
                                a.len = g.length(),
                                (g.x || g.y) && g.normalize(),
                                a.dx = g.x,
                                a.dy = g.y,
                                u = r[f],
                                0 != f && (S.subtract(v, u, l),
                                h += v.length() * j,
                                u.lineLength = h),
                                l = r[f],
                                a = s,
                                s = r[f + 1]
                            }
                        }
                    }
                    ,
                    e.getRenderData = function(t, e) {
                        if (!P)
                            return null;
                        var i = P.getRenderDataList()
                          , n = i[P.dataOffset];
                        if (!n)
                            return null;
                        var r = n
                          , a = r ? r.vertexStart + e : 0;
                        return (a > 65535 || 3 * a > 131070) && (++P.dataOffset,
                        P.dataOffset < i.length ? n = i[P.dataOffset] : (n = P.requestRenderData(),
                        i[P.dataOffset] = n),
                        r = n),
                        r && r.vertexCount < a && r.request(e, 3 * e),
                        n
                    }
                    ;
                    var n = this;
                    e._expandStroke = function(t) {
                        t.lineWidth = n.myLineWidth;
                        var e = .5 * t.lineWidth
                          , i = t.lineCap
                          , r = t.lineJoin
                          , a = t.miterLimit;
                        if (P = t.impl) {
                            var s, h, l, o, u = (s = e,
                            h = I,
                            l = P.tessTol,
                            o = 2 * V(s / (s + l)),
                            O(2, U(h / o)));
                            this._calculateJoins(P, e, r, a);
                            for (var v = P.paths, f = 0, d = P.pathOffset, g = P.pathLength; d < g; d++) {
                                var p = v[d]
                                  , c = p.points.length;
                                f += 1 == r ? 2 * (c + p.bevel * (u + 2) + 1) : 2 * (c + 5 * p.bevel + 1),
                                p.closed || (f += 1 == i ? 2 * (2 * u + 2) : 12)
                            }
                            var x = G = this.getRenderData(t, f);
                            if (x) {
                                for (var _ = x.vData, y = x.iData, L = P.pathOffset, m = P.pathLength; L < m; L++) {
                                    var b = v[L]
                                      , M = b.points
                                      , D = M.length
                                      , E = x.vertexStart
                                      , T = void 0
                                      , B = void 0
                                      , C = 0
                                      , w = 0
                                      , R = b.closed
                                      , A = 0;
                                    if (R ? (T = M[D - 1],
                                    B = M[0],
                                    C = 0,
                                    w = D,
                                    S.subtract(W, B, T),
                                    A = W.length()) : (T = M[0],
                                    B = M[1],
                                    C = 1,
                                    w = D - 1),
                                    B = B || T,
                                    !R) {
                                        var z = new F(B.x,B.y);
                                        z.subtract(T),
                                        z.normalize();
                                        var J = z.x
                                          , N = z.y;
                                        0 == i ? this._buttCapStart(T, J, N, e, 0) : 2 == i ? this._buttCapStart(T, J, N, e, e) : 1 == i && this._roundCapStart(T, J, N, e, u)
                                    }
                                    for (var k = 0, q = C; q < w; q++)
                                        k += M[q + 1].lineLength;
                                    for (var X = 0, Y = C; Y < w; ++Y) {
                                        var j = (k - X) / k;
                                        1 == r ? this._roundJoin(T, B, e * j, e * j, u) : 0 != (12 & B.flags) ? this._bevelJoin(T, B, e * j, e * j) : (this._vSet(B.x + B.dmx * e * j, B.y + B.dmy * e * j, 1, B.lineLength),
                                        this._vSet(B.x - B.dmx * e * j, B.y - B.dmy * e * j, -1, B.lineLength)),
                                        X += B.lineLength,
                                        T = B,
                                        B = M[Y + 1]
                                    }
                                    if (R) {
                                        var H = 9 * E;
                                        this._vSet(_[H], _[H + 1], 1, A),
                                        this._vSet(_[H + 9], _[H + 9 + 1], -1, A)
                                    } else {
                                        var K = new F(B.x,B.y);
                                        K.subtract(T),
                                        K.normalize();
                                        var Q = K.x
                                          , Z = K.y;
                                        0 == i || 2 == i ? this._buttCapEnd(B, Q, Z, .5, .5) : 1 == i && this._roundCapEnd(B, Q, Z, e, u)
                                    }
                                    for (var $ = x.indexStart, tt = E + 2, et = x.vertexStart; tt < et; tt++)
                                        y[$++] = tt - 2,
                                        y[$++] = tt - 1,
                                        y[$++] = tt;
                                    x.indexStart = $
                                }
                                G = null,
                                P = null
                            }
                        }
                    }
                    ,
                    e._expandFill = function(t) {
                        if (P = t.impl) {
                            for (var e = P.paths, i = 0, n = P.pathOffset, r = P.pathLength; n < r; n++) {
                                i += e[n].points.length
                            }
                            var a = G = this.getRenderData(t, i);
                            if (a) {
                                for (var s = a, h = s.vData, l = s.iData, o = P.pathOffset, u = P.pathLength; o < u; o++) {
                                    var v = e[o]
                                      , f = v.points
                                      , d = f.length;
                                    if (0 !== d) {
                                        for (var g = a.vertexStart, p = 0; p < d; ++p)
                                            f[p].y > 0 ? this._vSet(f[p].x, f[p].y, 0, f[p].lineLength) : this._vSet(f[p].x, f[p].y, 60, f[p].lineLength);
                                        var c = a.indexStart;
                                        if (v.complex) {
                                            for (var x = [], S = g, y = a.vertexStart; S < y; S++) {
                                                var L = 9 * S;
                                                x.push(h[L++]),
                                                x.push(h[L++]),
                                                x.push(h[L++])
                                            }
                                            var m = _(x, null, 3);
                                            if (!m || 0 === m.length)
                                                continue;
                                            for (var b = 0, M = m.length; b < M; b++)
                                                l[c++] = m[b] + g
                                        } else
                                            for (var D = g, E = g + 2, T = s.vertexStart; E < T; E++)
                                                l[c++] = D,
                                                l[c++] = E - 1,
                                                l[c++] = E;
                                        s.indexStart = c
                                    }
                                }
                                G = null,
                                P = null
                            }
                        }
                    }
                    ,
                    e._buttCapStart = function(t, e, i, n, r) {
                        var a = t.x - e * r
                          , s = t.y - i * r
                          , h = i
                          , l = -e;
                        this._vSet(a + h * n, s + l * n, 1, t.lineLength),
                        this._vSet(a - h * n, s - l * n, -1, t.lineLength)
                    }
                    ,
                    e._buttCapEnd = function(t, e, i, n, r) {
                        var a = t.x + e * r
                          , s = t.y + i * r
                          , h = i
                          , l = -e;
                        this._vSet(a + h * n, s + l * n, 1, t.lineLength),
                        this._vSet(a - h * n, s - l * n, -1, t.lineLength)
                    }
                    ,
                    e._roundCapStart = function(t, e, i, n, r) {
                        for (var a = t.x, s = t.y, h = i, l = -e, o = 0; o < r; o++) {
                            var u = o / (r - 1) * I
                              , v = z(u) * n
                              , f = J(u) * n;
                            this._vSet(a - h * v - e * f, s - l * v - i * f, 1, t.lineLength),
                            this._vSet(a, s, 0, t.lineLength)
                        }
                        this._vSet(a + h * n, s + l * n, 1, t.lineLength),
                        this._vSet(a - h * n, s - l * n, -1, t.lineLength)
                    }
                    ,
                    e._roundCapEnd = function(t, e, i, n, r) {
                        var a = t.x
                          , s = t.y
                          , h = i
                          , l = -e;
                        this._vSet(a + h * n, s + l * n, 1, t.lineLength),
                        this._vSet(a - h * n, s - l * n, -1, t.lineLength);
                        for (var o = 0; o < r; o++) {
                            var u = o / (r - 1) * I
                              , v = z(u) * n
                              , f = J(u) * n;
                            this._vSet(a, s, 0, t.lineLength),
                            this._vSet(a - h * v + e * f, s - l * v + i * f, 1, t.lineLength)
                        }
                    }
                    ,
                    e._roundJoin = function(t, e, i, n, r) {
                        var a = t.dy
                          , s = -t.dx
                          , h = e.dy
                          , l = -e.dx
                          , o = e.x
                          , u = e.y;
                        if (0 != (2 & e.flags)) {
                            var v = this._chooseBevel(8 & e.flags, t, e, i)
                              , f = v[0]
                              , d = v[1]
                              , g = v[2]
                              , p = v[3]
                              , c = N(-s, -a)
                              , x = N(-l, -h);
                            x > c && (x -= 2 * I),
                            this._vSet(f, d, 1, e.lineLength),
                            this._vSet(o - a * n, e.y - s * n, -1, e.lineLength);
                            for (var S = Y(U((c - x) / I) * r, 2, r), _ = 0; _ < S; _++) {
                                var y = c + _ / (S - 1) * (x - c)
                                  , L = o + z(y) * n
                                  , m = u + J(y) * n;
                                this._vSet(o, u, 0, e.lineLength),
                                this._vSet(L, m, -1, e.lineLength)
                            }
                            this._vSet(g, p, 1, e.lineLength),
                            this._vSet(o - h * n, u - l * n, -1, e.lineLength)
                        } else {
                            var b = this._chooseBevel(8 & e.flags, t, e, -n)
                              , M = b[0]
                              , D = b[1]
                              , E = b[2]
                              , T = b[3]
                              , B = N(s, a)
                              , C = N(l, h);
                            C < B && (C += 2 * I),
                            this._vSet(o + a * n, u + s * n, 1, e.lineLength),
                            this._vSet(M, D, -1, e.lineLength);
                            for (var w = Y(U((C - B) / I) * r, 2, r), R = 0; R < w; R++) {
                                var A = B + R / (w - 1) * (C - B)
                                  , F = o + z(A) * i
                                  , P = u + J(A) * i;
                                this._vSet(F, P, 1, e.lineLength),
                                this._vSet(o, u, 0, e.lineLength)
                            }
                            this._vSet(o + h * n, u + l * n, 1, e.lineLength),
                            this._vSet(E, T, -1, e.lineLength)
                        }
                    }
                    ,
                    e._bevelJoin = function(t, e, i, n) {
                        var r = 0
                          , a = 0
                          , s = 0
                          , h = 0
                          , l = 0
                          , o = 0
                          , u = 0
                          , v = 0
                          , f = t.dy
                          , d = -t.dx
                          , g = e.dy
                          , p = -e.dx;
                        if (2 & e.flags) {
                            var c = this._chooseBevel(8 & e.flags, t, e, i);
                            l = c[0],
                            o = c[1],
                            u = c[2],
                            v = c[3],
                            this._vSet(l, o, 1, e.lineLength),
                            this._vSet(e.x - f * n, e.y - d * n, -1, e.lineLength),
                            this._vSet(u, v, 1, e.lineLength),
                            this._vSet(e.x - g * n, e.y - p * n, -1, e.lineLength)
                        } else {
                            var x = this._chooseBevel(8 & e.flags, t, e, -n);
                            r = x[0],
                            a = x[1],
                            s = x[2],
                            h = x[3],
                            this._vSet(e.x + f * i, e.y + d * i, 1, e.lineLength),
                            this._vSet(r, a, -1, e.lineLength),
                            this._vSet(e.x + g * i, e.y + p * i, 1, e.lineLength),
                            this._vSet(s, h, -1, e.lineLength)
                        }
                    }
                    ,
                    e._vSet = function(t, e, i, n) {
                        if (void 0 === i && (i = 0),
                        void 0 === n && (n = 0),
                        G) {
                            var r = G
                              , a = 9 * r.vertexStart
                              , s = r.vData;
                            s[a++] = t,
                            s[a++] = e,
                            s[a++] = 0,
                            u.toArray(s, k, a),
                            a += 4,
                            s[a++] = i,
                            s[a++] = n,
                            r.vertexStart++
                        }
                    }
                    ,
                    this._assembler !== e && (this._assembler = e)
                }
                ,
                a.activeSubModel = function(t) {
                    if (this.model) {
                        if (this.model.subModels.length <= t) {
                            var e = c.root.device
                              , i = e.createBuffer(new l.BufferInfo(l.BufferUsageBit.VERTEX | l.BufferUsageBit.TRANSFER_DST,l.MemoryUsageBit.DEVICE,65535 * A,A))
                              , n = e.createBuffer(new l.BufferInfo(l.BufferUsageBit.INDEX | l.BufferUsageBit.TRANSFER_DST,l.MemoryUsageBit.DEVICE,65535 * Uint16Array.BYTES_PER_ELEMENT * 2,Uint16Array.BYTES_PER_ELEMENT))
                              , r = new x([i],w,l.PrimitiveMode.TRIANGLE_LIST,n);
                            r.subMeshIdx = 0,
                            this.model.initSubModel(t, r, this.getMaterialInstance(0)),
                            this._graphicsUseSubMeshes.push(r)
                        }
                    } else
                        p(4500, this.node.name)
                }
                ,
                a._uploadData = function() {
                    var t = this.impl;
                    if (t) {
                        var e = t && t.getRenderDataList();
                        if (!(e.length <= 0) && this.model) {
                            for (var i = this.model.subModels, n = 0; n < e.length; n++) {
                                var r = e[n]
                                  , a = i[n].inputAssembler;
                                if (r.lastFilledVertex !== r.vertexStart) {
                                    var s = new Float32Array(r.vData.buffer,0,r.vertexStart * R);
                                    a.vertexBuffers[0].update(s),
                                    a.vertexCount = r.vertexStart;
                                    var h = new Uint16Array(r.iData.buffer,0,r.indexStart);
                                    a.indexBuffer.update(h),
                                    a.indexCount = r.indexStart,
                                    r.lastFilledVertex = r.vertexStart,
                                    r.lastFilledIndex = r.indexStart
                                }
                            }
                            this._isNeedUploadData = !1
                        }
                    }
                }
                ,
                e
            }(g)).prototype, "lineTexture", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            E = e(M.prototype, "myMat", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            T = e(M.prototype, "myLineWidth", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            b = M)) || b));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/SuperGraphicsStretch.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    "use strict";
    var e, i, n, r, a, h, s, l, o, u, v, f, g, d, c, p, S, x, _;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            n = t.initializerDefineProperty,
            r = t.assertThisInitialized
        }
        , function(t) {
            a = t.cclegacy,
            h = t._decorator,
            s = t.UIVertexFormat,
            l = t.gfx,
            o = t.v2,
            u = t.Color,
            v = t.Vec3,
            f = t.Texture2D,
            g = t.Material,
            d = t.Graphics,
            c = t.warnID,
            p = t.director,
            S = t.RenderingSubMesh,
            x = t.Vec2,
            _ = t.earcut
        }
        ],
        execute: function() {
            var y, L, m, b, M, D, E, T;
            a._RF.push({}, "7ee77fHCIFPWaMiOgsN5IKA", "SuperGraphicsStretch", void 0);
            for (var B = h.ccclass, C = h.property, R = s.vfmtPosColor.concat([new l.Attribute("a_dist",l.Format.R32F), new l.Attribute("a_line",l.Format.R32F)]), w = s.getComponentPerVertex(R), A = s.getAttributeStride(R), F = function(t) {
                function e(e, i) {
                    var n;
                    return (n = t.call(this, e, i) || this).dx = 0,
                    n.dy = 0,
                    n.dmx = 0,
                    n.dmy = 0,
                    n.flags = 0,
                    n.len = 0,
                    n.lineLength = 0,
                    n.trueLength = 0,
                    n.reset(),
                    n
                }
                return i(e, t),
                e.prototype.reset = function() {
                    this.dx = 0,
                    this.dy = 0,
                    this.dmx = 0,
                    this.dmy = 0,
                    this.flags = 0,
                    this.len = 0,
                    this.lineLength = 0,
                    this.trueLength = 0
                }
                ,
                e
            }(x), I = null, P = Math.PI, O = Math.max, U = Math.ceil, V = Math.acos, W = Math.cos, z = Math.sin, N = Math.atan2, G = o(), J = null, k = new u, q = [], H = 0; H < 4; H++)
                q.push(new v);
            function X(t, e, i) {
                return t < e ? e : t > i ? i : t
            }
            var Y = 1;
            t("SuperGraphicsStretch", (y = B("SuperGraphicsStretch"),
            L = C(f),
            m = C(g),
            y((D = e((M = function(t) {
                function e() {
                    for (var e, i = arguments.length, a = new Array(i), h = 0; h < i; h++)
                        a[h] = arguments[h];
                    return e = t.call.apply(t, [this].concat(a)) || this,
                    n(e, "lineTexture", D, r(e)),
                    n(e, "myMat", E, r(e)),
                    n(e, "myLineWidth", T, r(e)),
                    e
                }
                i(e, t);
                var a = e.prototype;
                return a.onLoad = function() {
                    this.lineTexture && (this.lineWidth = this.lineTexture.height,
                    Y = this.lineWidth / (2 * this.lineTexture.height * this.lineTexture.width),
                    console.log(this.lineWidth + " " + Y)),
                    this.myMat && (this.setMaterial(this.myMat, 0),
                    this.lineTexture && this.getMaterial(0).setProperty("texture1", this.lineTexture)),
                    t.prototype.onLoad.call(this)
                }
                ,
                a.updateTexture = function() {
                    this.onLoad()
                }
                ,
                a.onEnable = function() {
                    this.myMat && (this.setMaterial(this.myMat, 0),
                    this.lineTexture && this.getMaterial(0).setProperty("texture1", this.lineTexture))
                }
                ,
                a.start = function() {}
                ,
                a._flushAssembler = function() {
                    var t = d.Assembler.getAssembler(this)
                      , e = {};
                    for (var i in t)
                        e[i] = t[i];
                    e.stroke = function(t) {
                        u.copy(k, t.strokeColor),
                        t.impl && (this._flattenPaths(t.impl),
                        this._expandStroke(t),
                        t.impl.updatePathOffset = !0,
                        this.end(t))
                    }
                    ,
                    e.fill = function(t) {
                        u.copy(k, t.fillColor),
                        this._expandFill(t),
                        t.impl && (t.impl.updatePathOffset = !0),
                        this.end(t)
                    }
                    ,
                    e._flattenPaths = function(t) {
                        for (var e = t.paths, i = t.pathOffset, n = t.pathLength; i < n; i++) {
                            var r = e[i].points
                              , a = r[r.length - 1]
                              , h = r[0]
                              , s = 0;
                            r[0].lineLength = s;
                            for (var l = null, u = r[0], v = o(), f = 0, g = r.length; f < g; f++) {
                                var d = new F(h.x,h.y);
                                d.subtract(a),
                                a.len = d.length(),
                                (d.x || d.y) && d.normalize(),
                                a.dx = d.x,
                                a.dy = d.y,
                                u = r[f],
                                0 != f && (x.subtract(v, u, l),
                                s += v.length() * Y,
                                u.lineLength = s),
                                l = r[f],
                                a = h,
                                h = r[f + 1]
                            }
                            for (var c = 0; c < r.length; c++)
                                r[c].lineLength /= s;
                            r.length > 3 && r[r.length - 1].len != r[r.length - 2].len && (r[r.length - 1].len = r[r.length - 2].len)
                        }
                    }
                    ,
                    e.getRenderData = function(t, e) {
                        if (!I)
                            return null;
                        var i = I.getRenderDataList()
                          , n = i[I.dataOffset];
                        if (!n)
                            return null;
                        var r = n
                          , a = r ? r.vertexStart + e : 0;
                        return (a > 65535 || 3 * a > 131070) && (++I.dataOffset,
                        I.dataOffset < i.length ? n = i[I.dataOffset] : (n = I.requestRenderData(),
                        i[I.dataOffset] = n),
                        r = n),
                        r && r.vertexCount < a && r.request(e, 3 * e),
                        n
                    }
                    ;
                    var n = this;
                    e._expandStroke = function(t) {
                        t.lineWidth = n.myLineWidth;
                        var e = .5 * t.lineWidth
                          , i = t.lineCap
                          , r = t.lineJoin
                          , a = t.miterLimit;
                        if (I = t.impl) {
                            var h, s, l, o, u = (h = e,
                            s = P,
                            l = I.tessTol,
                            o = 2 * V(h / (h + l)),
                            O(2, U(s / o)));
                            this._calculateJoins(I, e, r, a);
                            for (var v = I.paths, f = 0, g = I.pathOffset, d = I.pathLength; g < d; g++) {
                                var c = v[g]
                                  , p = c.points.length;
                                f += 1 == r ? 2 * (p + c.bevel * (u + 2) + 1) : 2 * (p + 5 * c.bevel + 1),
                                c.closed || (f += 1 == i ? 2 * (2 * u + 2) : 12)
                            }
                            var S = J = this.getRenderData(t, f);
                            if (S) {
                                for (var _ = S.vData, y = S.iData, L = I.pathOffset, m = I.pathLength; L < m; L++) {
                                    var b = v[L]
                                      , M = b.points
                                      , D = M.length
                                      , E = S.vertexStart
                                      , T = void 0
                                      , B = void 0
                                      , C = 0
                                      , R = 0
                                      , w = b.closed
                                      , A = 0;
                                    if (w ? (T = M[D - 1],
                                    B = M[0],
                                    C = 0,
                                    R = D,
                                    x.subtract(G, B, T),
                                    A = G.length()) : (T = M[0],
                                    B = M[1],
                                    C = 1,
                                    R = D - 1),
                                    B = B || T,
                                    !w) {
                                        var W = new F(B.x,B.y);
                                        W.subtract(T),
                                        W.normalize();
                                        var z = W.x
                                          , N = W.y;
                                        0 == i ? this._buttCapStart(T, z, N, e, 0) : 2 == i ? this._buttCapStart(T, z, N, e, e) : 1 == i && this._roundCapStart(T, z, N, e, u)
                                    }
                                    for (var k = 0, q = C; q < R; q++)
                                        k += M[q + 1].lineLength;
                                    for (var H = 0, X = C; X < R; ++X) {
                                        var Y = (k - H) / k;
                                        1 == r ? this._roundJoin(T, B, e * Y, e * Y, u) : 0 != (12 & B.flags) ? this._bevelJoin(T, B, e * Y, e * Y) : (console.log("ll: " + H / k),
                                        this._vSet(B.x + B.dmx * e * Y, B.y + B.dmy * e * Y, 1, B.lineLength),
                                        this._vSet(B.x - B.dmx * e * Y, B.y - B.dmy * e * Y, -1, B.lineLength)),
                                        H += B.lineLength,
                                        T = B,
                                        B = M[X + 1]
                                    }
                                    if (w) {
                                        var j = 9 * E;
                                        this._vSet(_[j], _[j + 1], 1, A),
                                        this._vSet(_[j + 9], _[j + 9 + 1], -1, A)
                                    } else {
                                        var K = new F(B.x,B.y);
                                        K.subtract(T),
                                        K.normalize();
                                        var Q = K.x
                                          , Z = K.y;
                                        0 == i || 2 == i ? this._buttCapEnd(B, Q, Z, .5, .5) : 1 == i && this._roundCapEnd(B, Q, Z, e, u)
                                    }
                                    for (var $ = S.indexStart, tt = E + 2, et = S.vertexStart; tt < et; tt++)
                                        y[$++] = tt - 2,
                                        y[$++] = tt - 1,
                                        y[$++] = tt;
                                    S.indexStart = $
                                }
                                J = null,
                                I = null
                            }
                        }
                    }
                    ,
                    e._expandFill = function(t) {
                        if (I = t.impl) {
                            for (var e = I.paths, i = 0, n = I.pathOffset, r = I.pathLength; n < r; n++) {
                                i += e[n].points.length
                            }
                            var a = J = this.getRenderData(t, i);
                            if (a) {
                                for (var h = a, s = h.vData, l = h.iData, o = I.pathOffset, u = I.pathLength; o < u; o++) {
                                    var v = e[o]
                                      , f = v.points
                                      , g = f.length;
                                    if (0 !== g) {
                                        for (var d = a.vertexStart, c = 0; c < g; ++c)
                                            f[c].y > 0 ? this._vSet(f[c].x, f[c].y, 0, f[c].lineLength) : this._vSet(f[c].x, f[c].y, 60, f[c].lineLength);
                                        var p = a.indexStart;
                                        if (v.complex) {
                                            for (var S = [], x = d, y = a.vertexStart; x < y; x++) {
                                                var L = 9 * x;
                                                S.push(s[L++]),
                                                S.push(s[L++]),
                                                S.push(s[L++])
                                            }
                                            var m = _(S, null, 3);
                                            if (!m || 0 === m.length)
                                                continue;
                                            for (var b = 0, M = m.length; b < M; b++)
                                                l[p++] = m[b] + d
                                        } else
                                            for (var D = d, E = d + 2, T = h.vertexStart; E < T; E++)
                                                l[p++] = D,
                                                l[p++] = E - 1,
                                                l[p++] = E;
                                        h.indexStart = p
                                    }
                                }
                                J = null,
                                I = null
                            }
                        }
                    }
                    ,
                    e._buttCapStart = function(t, e, i, n, r) {
                        var a = t.x - e * r
                          , h = t.y - i * r
                          , s = i
                          , l = -e;
                        this._vSet(a + s * n, h + l * n, 1, t.lineLength),
                        this._vSet(a - s * n, h - l * n, -1, t.lineLength)
                    }
                    ,
                    e._buttCapEnd = function(t, e, i, n, r) {
                        var a = t.x + e * r
                          , h = t.y + i * r
                          , s = i
                          , l = -e;
                        this._vSet(a + s * n, h + l * n, 1, t.lineLength),
                        this._vSet(a - s * n, h - l * n, -1, t.lineLength)
                    }
                    ,
                    e._roundCapStart = function(t, e, i, n, r) {
                        for (var a = t.x, h = t.y, s = i, l = -e, o = 0; o < r; o++) {
                            var u = o / (r - 1) * P
                              , v = W(u) * n
                              , f = z(u) * n;
                            this._vSet(a - s * v - e * f, h - l * v - i * f, 1, t.lineLength),
                            this._vSet(a, h, 0, t.lineLength)
                        }
                        this._vSet(a + s * n, h + l * n, 1, t.lineLength),
                        this._vSet(a - s * n, h - l * n, -1, t.lineLength)
                    }
                    ,
                    e._roundCapEnd = function(t, e, i, n, r) {
                        var a = t.x
                          , h = t.y
                          , s = i
                          , l = -e;
                        this._vSet(a + s * n, h + l * n, 1, t.lineLength),
                        this._vSet(a - s * n, h - l * n, -1, t.lineLength);
                        for (var o = 0; o < r; o++) {
                            var u = o / (r - 1) * P
                              , v = W(u) * n
                              , f = z(u) * n;
                            this._vSet(a, h, 0, t.lineLength),
                            this._vSet(a - s * v + e * f, h - l * v + i * f, 1, t.lineLength)
                        }
                    }
                    ,
                    e._roundJoin = function(t, e, i, n, r) {
                        var a = t.dy
                          , h = -t.dx
                          , s = e.dy
                          , l = -e.dx
                          , o = e.x
                          , u = e.y;
                        if (0 != (2 & e.flags)) {
                            var v = this._chooseBevel(8 & e.flags, t, e, i)
                              , f = v[0]
                              , g = v[1]
                              , d = v[2]
                              , c = v[3]
                              , p = N(-h, -a)
                              , S = N(-l, -s);
                            S > p && (S -= 2 * P),
                            this._vSet(f, g, 1, e.lineLength),
                            this._vSet(o - a * n, e.y - h * n, -1, e.lineLength);
                            for (var x = X(U((p - S) / P) * r, 2, r), _ = 0; _ < x; _++) {
                                var y = p + _ / (x - 1) * (S - p)
                                  , L = o + W(y) * n
                                  , m = u + z(y) * n;
                                this._vSet(o, u, 0, e.lineLength),
                                this._vSet(L, m, -1, e.lineLength)
                            }
                            this._vSet(d, c, 1, e.lineLength),
                            this._vSet(o - s * n, u - l * n, -1, e.lineLength)
                        } else {
                            var b = this._chooseBevel(8 & e.flags, t, e, -n)
                              , M = b[0]
                              , D = b[1]
                              , E = b[2]
                              , T = b[3]
                              , B = N(h, a)
                              , C = N(l, s);
                            C < B && (C += 2 * P),
                            this._vSet(o + a * n, u + h * n, 1, e.lineLength),
                            this._vSet(M, D, -1, e.lineLength);
                            for (var R = X(U((C - B) / P) * r, 2, r), w = 0; w < R; w++) {
                                var A = B + w / (R - 1) * (C - B)
                                  , F = o + W(A) * i
                                  , I = u + z(A) * i;
                                this._vSet(F, I, 1, e.lineLength),
                                this._vSet(o, u, 0, e.lineLength)
                            }
                            this._vSet(o + s * n, u + l * n, 1, e.lineLength),
                            this._vSet(E, T, -1, e.lineLength)
                        }
                    }
                    ,
                    e._bevelJoin = function(t, e, i, n) {
                        var r = 0
                          , a = 0
                          , h = 0
                          , s = 0
                          , l = 0
                          , o = 0
                          , u = 0
                          , v = 0
                          , f = t.dy
                          , g = -t.dx
                          , d = e.dy
                          , c = -e.dx;
                        if (2 & e.flags) {
                            var p = this._chooseBevel(8 & e.flags, t, e, i);
                            l = p[0],
                            o = p[1],
                            u = p[2],
                            v = p[3],
                            this._vSet(l, o, 1, e.lineLength),
                            this._vSet(e.x - f * n, e.y - g * n, -1, e.lineLength),
                            this._vSet(u, v, 1, e.lineLength),
                            this._vSet(e.x - d * n, e.y - c * n, -1, e.lineLength)
                        } else {
                            var S = this._chooseBevel(8 & e.flags, t, e, -n);
                            r = S[0],
                            a = S[1],
                            h = S[2],
                            s = S[3],
                            this._vSet(e.x + f * i, e.y + g * i, 1, e.lineLength),
                            this._vSet(r, a, -1, e.lineLength),
                            this._vSet(e.x + d * i, e.y + c * i, 1, e.lineLength),
                            this._vSet(h, s, -1, e.lineLength)
                        }
                    }
                    ,
                    e._vSet = function(t, e, i, n) {
                        if (void 0 === i && (i = 0),
                        void 0 === n && (n = 0),
                        J) {
                            var r = J
                              , a = 9 * r.vertexStart
                              , h = r.vData;
                            h[a++] = t,
                            h[a++] = e,
                            h[a++] = 0,
                            u.toArray(h, k, a),
                            a += 4,
                            h[a++] = i,
                            h[a++] = n,
                            r.vertexStart++
                        }
                    }
                    ,
                    this._assembler !== e && (this._assembler = e)
                }
                ,
                a.activeSubModel = function(t) {
                    if (this.model) {
                        if (this.model.subModels.length <= t) {
                            var e = p.root.device
                              , i = e.createBuffer(new l.BufferInfo(l.BufferUsageBit.VERTEX | l.BufferUsageBit.TRANSFER_DST,l.MemoryUsageBit.DEVICE,65535 * A,A))
                              , n = e.createBuffer(new l.BufferInfo(l.BufferUsageBit.INDEX | l.BufferUsageBit.TRANSFER_DST,l.MemoryUsageBit.DEVICE,65535 * Uint16Array.BYTES_PER_ELEMENT * 2,Uint16Array.BYTES_PER_ELEMENT))
                              , r = new S([i],R,l.PrimitiveMode.TRIANGLE_LIST,n);
                            r.subMeshIdx = 0,
                            this.model.initSubModel(t, r, this.getMaterialInstance(0)),
                            this._graphicsUseSubMeshes.push(r)
                        }
                    } else
                        c(4500, this.node.name)
                }
                ,
                a._uploadData = function() {
                    var t = this.impl;
                    if (t) {
                        var e = t && t.getRenderDataList();
                        if (!(e.length <= 0) && this.model) {
                            for (var i = this.model.subModels, n = 0; n < e.length; n++) {
                                var r = e[n]
                                  , a = i[n].inputAssembler;
                                if (r.lastFilledVertex !== r.vertexStart) {
                                    var h = new Float32Array(r.vData.buffer,0,r.vertexStart * w);
                                    a.vertexBuffers[0].update(h),
                                    a.vertexCount = r.vertexStart;
                                    var s = new Uint16Array(r.iData.buffer,0,r.indexStart);
                                    a.indexBuffer.update(s),
                                    a.indexCount = r.indexStart,
                                    r.lastFilledVertex = r.vertexStart,
                                    r.lastFilledIndex = r.indexStart
                                }
                            }
                            this._isNeedUploadData = !1
                        }
                    }
                }
                ,
                e
            }(d)).prototype, "lineTexture", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            E = e(M.prototype, "myMat", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            T = e(M.prototype, "myLineWidth", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            b = M)) || b));
            a._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TextCombo.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./FruitManager.ts", "./SFXManager.ts"], (function(t) {
    "use strict";
    var e, o, i, a, n, r, l, s, h, m, c, d, p, u, b;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            o = t.inheritsLoose,
            i = t.initializerDefineProperty,
            a = t.assertThisInitialized,
            n = t.createClass
        }
        , function(t) {
            r = t.cclegacy,
            l = t._decorator,
            s = t.Material,
            h = t.Label,
            m = t.LabelOutline,
            c = t.Color,
            d = t.Animation,
            p = t.Component
        }
        , function(t) {
            u = t.FruitManager
        }
        , function(t) {
            b = t.SFXManager
        }
        ],
        execute: function() {
            var g, C, M, y, f, _, L, x, B;
            r._RF.push({}, "1ce0eccLXdI8rzpVS2bTHgE", "TextCombo", void 0);
            var P = l.ccclass
              , w = l.property;
            t("TextCombo", (g = P("TextCombo"),
            C = w({
                type: [s]
            }),
            M = w({
                type: [s]
            }),
            y = w({
                type: [s]
            }),
            g((L = e((_ = function(t) {
                function e() {
                    for (var e, o = arguments.length, n = new Array(o), r = 0; r < o; r++)
                        n[r] = arguments[r];
                    return e = t.call.apply(t, [this].concat(n)) || this,
                    i(e, "topMaterial", L, a(e)),
                    i(e, "middleMaterial", x, a(e)),
                    i(e, "bottomMaterial", B, a(e)),
                    e._timer = 0,
                    e
                }
                o(e, t);
                var r = e.prototype;
                return r.onLoad = function() {}
                ,
                r.start = function() {}
                ,
                r.update = function(t) {
                    this.node.active && (this.timer -= t,
                    this.timer < 0 && (this.node.active = !1,
                    u.getInstance().putTextFruitcombo(this.node)))
                }
                ,
                r.resetTimer = function(t) {
                    this.timer = t
                }
                ,
                r.updateText = function(t) {
                    this.topLabel = this.node.getChildByPath("top_text").getComponent(h),
                    this.middleLabel = this.node.getChildByPath("middle_text").getComponent(h),
                    this.bottomLabel = this.node.getChildByPath("bottom_text").getComponent(h),
                    this.topLabel.string = t + " FRUIT",
                    this.bottomLabel.string = "+ " + t;
                    var e = t - 3 + 22;
                    e > 29 && (e = 29),
                    b.getInstance().play(e),
                    3 == t ? (this.topLabel.customMaterial = this.topMaterial[0],
                    this.middleLabel.customMaterial = this.middleMaterial[0],
                    this.bottomLabel.customMaterial = this.bottomMaterial[0],
                    this.node.getChildByPath("top_text").getComponent(m).color = new c("#A88700"),
                    this.node.getChildByPath("middle_text").getComponent(m).color = new c("#A88700"),
                    this.node.getChildByPath("bottom_text").getComponent(m).color = new c("#A88700")) : 4 == t ? (this.topLabel.customMaterial = this.topMaterial[1],
                    this.middleLabel.customMaterial = this.middleMaterial[1],
                    this.bottomLabel.customMaterial = this.bottomMaterial[1],
                    this.node.getChildByPath("top_text").getComponent(m).color = new c("#B96800"),
                    this.node.getChildByPath("middle_text").getComponent(m).color = new c("#B96800"),
                    this.node.getChildByPath("bottom_text").getComponent(m).color = new c("#B96800")) : t >= 5 && (this.topLabel.customMaterial = this.topMaterial[2],
                    this.middleLabel.customMaterial = this.middleMaterial[2],
                    this.bottomLabel.customMaterial = this.bottomMaterial[2],
                    this.node.getChildByPath("top_text").getComponent(m).color = new c("#A82806"),
                    this.node.getChildByPath("middle_text").getComponent(m).color = new c("#A82806"),
                    this.node.getChildByPath("bottom_text").getComponent(m).color = new c("#A82806")),
                    this.node.getComponent(d).play("combo_in_out")
                }
                ,
                n(e, [{
                    key: "timer",
                    get: function() {
                        return this._timer
                    },
                    set: function(t) {
                        this._timer = t
                    }
                }]),
                e
            }(p)).prototype, "topMaterial", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            x = e(_.prototype, "middleMaterial", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            B = e(_.prototype, "bottomMaterial", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            f = _)) || f));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TextCritical.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./FruitManager.ts"], (function(t) {
    "use strict";
    var e, i, r, n, c, o;
    return {
        setters: [function(t) {
            e = t.inheritsLoose,
            i = t.createClass
        }
        , function(t) {
            r = t.cclegacy,
            n = t._decorator,
            c = t.Component
        }
        , function(t) {
            o = t.FruitManager
        }
        ],
        execute: function() {
            var a;
            r._RF.push({}, "4a143Fh2HlI5oV1juP5TRF2", "TextCritical", void 0);
            var s = n.ccclass;
            n.property,
            t("TextCritical", s("TextCritical")(a = function(t) {
                function r() {
                    for (var e, i = arguments.length, r = new Array(i), n = 0; n < i; n++)
                        r[n] = arguments[n];
                    return (e = t.call.apply(t, [this].concat(r)) || this)._timer = 0,
                    e
                }
                e(r, t);
                var n = r.prototype;
                return n.onLoad = function() {}
                ,
                n.start = function() {}
                ,
                n.update = function(t) {
                    this.node.active && (this.timer -= t,
                    this.timer < 0 && (this.node.active = !1,
                    o.getInstance().putTextCritical(this.node)))
                }
                ,
                n.resetTimer = function(t) {
                    this.timer = t
                }
                ,
                i(r, [{
                    key: "timer",
                    get: function() {
                        return this._timer
                    },
                    set: function(t) {
                        this._timer = t
                    }
                }]),
                r
            }(c)) || a);
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/TextDeflect.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./FruitManager.ts"], (function(t) {
    "use strict";
    var e, n, i, r, o, c, s;
    return {
        setters: [function(t) {
            e = t.inheritsLoose,
            n = t.createClass
        }
        , function(t) {
            i = t.cclegacy,
            r = t._decorator,
            o = t.Animation,
            c = t.Component
        }
        , function(t) {
            s = t.FruitManager
        }
        ],
        execute: function() {
            var a;
            i._RF.push({}, "5655axo/X9AlZ9a7wV8E7av", "TextDeflect", void 0);
            var u = r.ccclass;
            r.property,
            t("TextDeflect", u("TextDeflect")(a = function(t) {
                function i() {
                    for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++)
                        i[r] = arguments[r];
                    return (e = t.call.apply(t, [this].concat(i)) || this).flagTimer = !1,
                    e._timer = 0,
                    e
                }
                e(i, t);
                var r = i.prototype;
                return r.onLoad = function() {}
                ,
                r.start = function() {}
                ,
                r.update = function(t) {
                    var e = this;
                    this.node.active && (this.timer -= t,
                    this.timer < 0 && !this.flagTimer && (this.flagTimer = !0,
                    this.node.getComponent(o).play("deflect_text_out"),
                    this.node.getComponent(o).once(o.EventType.FINISHED, (function() {
                        s.getInstance().putTextDeflect(e.node)
                    }
                    ))))
                }
                ,
                r.resetTimer = function(t) {
                    this.timer = t,
                    this.flagTimer = !1
                }
                ,
                n(i, [{
                    key: "timer",
                    get: function() {
                        return this._timer
                    },
                    set: function(t) {
                        this._timer = t
                    }
                }]),
                i
            }(c)) || a);
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/UIMissionTutorial.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameController.ts", "./SFXManager.ts"], (function(t) {
    "use strict";
    var n, e, i, o, s, c, r, a, h;
    return {
        setters: [function(t) {
            n = t.inheritsLoose,
            e = t.createClass
        }
        , function(t) {
            i = t.cclegacy,
            o = t._decorator,
            s = t.Animation,
            c = t.Label,
            r = t.Component
        }
        , function(t) {
            a = t.GameController
        }
        , function(t) {
            h = t.SFXManager
        }
        ],
        execute: function() {
            var l, u;
            i._RF.push({}, "a95e8drUGhDC7ZHCCkD8Lht", "UIMissionTutorial", void 0);
            var _ = o.ccclass;
            o.property,
            t("UIMissionTutorial", _("UIMissionTutorial")(((u = function(t) {
                function i() {
                    for (var n, e = arguments.length, i = new Array(e), o = 0; o < e; o++)
                        i[o] = arguments[o];
                    return (n = t.call.apply(t, [this].concat(i)) || this).maxFruits = 1,
                    n._counterFruits = 0,
                    n
                }
                n(i, t),
                i.getInstance = function() {
                    return i.Instance
                }
                ;
                var o = i.prototype;
                return o.onLoad = function() {
                    i.Instance = this
                }
                ,
                o.start = function() {}
                ,
                o.show = function(t) {
                    void 0 === t && (t = function() {}
                    ),
                    this.node.getChildByPath("cont_scroll/text_middle").active = !1,
                    this.node.getChildByPath("cont_scroll/text_right").active = !0,
                    this.node.getChildByPath("cont_scroll/text_left").active = !0,
                    this.node.getChildByPath("cont_scroll/tick_tutorial").active = !0,
                    this.node.getChildByPath("cont_scroll/backgound_icon").active = !0,
                    this.getComponent(s).play("othersScore_in"),
                    this.getComponent(s).once(s.EventType.FINISHED, (function() {
                        t()
                    }
                    ))
                }
                ,
                o.showComplete = function(t) {
                    this.node.getChildByPath("cont_scroll/text_middle").active = !0,
                    this.node.getChildByPath("cont_scroll/text_right").active = !1,
                    this.node.getChildByPath("cont_scroll/text_left").active = !1,
                    this.node.getChildByPath("cont_scroll/tick_tutorial").active = !1,
                    this.node.getChildByPath("cont_scroll/backgound_icon").active = !1,
                    t()
                }
                ,
                o.hide = function(t) {
                    void 0 === t && (t = function() {}
                    ),
                    this.getComponent(s).play("othersScore_out"),
                    this.getComponent(s).once(s.EventType.FINISHED, (function() {
                        t()
                    }
                    ))
                }
                ,
                o.resetLabel = function(t) {
                    this.maxFruits = t,
                    this.counterFruits = 0,
                    this.node.getChildByPath("cont_scroll/text_right").getComponent(c).string = this.counterFruits + "/" + this.maxFruits
                }
                ,
                o.updateCountFruits = function(t, n) {
                    void 0 === n && (n = function() {}
                    );
                    var e = this;
                    this.counterFruits = t,
                    this.node.getChildByPath("cont_scroll/text_right").getComponent(c).string = this.counterFruits + "/" + this.maxFruits,
                    this.counterFruits == this.maxFruits && this.scheduleOnce((function() {
                        var t = this.node.getComponent(s);
                        h.getInstance().play(h.SFX_UI_ACHIEVEMENT),
                        t.play("show_tutorial_tick_mission"),
                        t.on(s.EventType.FINISHED, (function() {
                            e.scheduleOnce((function() {
                                1 == a.TUTORIAL_STATE ? i.getInstance().resetLabel(3) : 2 == a.TUTORIAL_STATE && i.getInstance().resetLabel(5),
                                a.TUTORIAL_STATE < 3 ? (t.play("hide_tutorial_tick_mission"),
                                t.on(s.EventType.FINISHED, (function() {
                                    n()
                                }
                                ), this, !0)) : n()
                            }
                            ), .5)
                        }
                        ), this, !0)
                    }
                    ), .5)
                }
                ,
                o.showTickMission = function() {
                    var t = this.node.getComponent(s);
                    h.getInstance().play(h.SFX_UI_ACHIEVEMENT),
                    t.play("show_tutorial_tick_mission")
                }
                ,
                e(i, [{
                    key: "counterFruits",
                    get: function() {
                        return this._counterFruits
                    },
                    set: function(t) {
                        this._counterFruits = t
                    }
                }]),
                i
            }(r)).Instance = void 0,
            l = u)) || l);
            i._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/UIPowerUpButton.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Data.ts", "./GameController.ts", "./SceneSelectMode.ts", "./SFXManager.ts"], (function(e) {
    "use strict";
    var t, i, n, p, r, s, o, a, c, l, h, y, B, d;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            i = e.inheritsLoose,
            n = e.initializerDefineProperty,
            p = e.assertThisInitialized
        }
        , function(e) {
            r = e.cclegacy,
            s = e._decorator,
            o = e.SpriteFrame,
            a = e.Sprite,
            c = e.Label,
            l = e.Component
        }
        , function(e) {
            h = e.Data
        }
        , function(e) {
            y = e.GameController
        }
        , function(e) {
            B = e.SceneSelectMode
        }
        , function(e) {
            d = e.SFXManager
        }
        ],
        execute: function() {
            var P, u, g, U, m, w, I, b, f;
            r._RF.push({}, "af7ccajk/pMxLyiOantCAM5", "UIPowerUpButton", void 0);
            var C = s.ccclass
              , T = s.property;
            e("UIPowerUpButton", (P = C("UIPowerUpButton"),
            u = T({
                type: String,
                displayName: "Power up type"
            }),
            g = T({
                type: o,
                displayName: "Sprite button unselected"
            }),
            U = T({
                type: o,
                displayName: "Sprite button selected"
            }),
            P((I = t((w = function(e) {
                function t() {
                    for (var t, i = arguments.length, r = new Array(i), s = 0; s < i; s++)
                        r[s] = arguments[s];
                    return t = e.call.apply(e, [this].concat(r)) || this,
                    n(t, "powerUpType", I, p(t)),
                    n(t, "spriteBtnUnselected", b, p(t)),
                    n(t, "spriteBtnSelected", f, p(t)),
                    t.isEquipped = !1,
                    t
                }
                i(t, e);
                var r = t.prototype;
                return r.start = function() {}
                ,
                r.onBuy = function() {
                    var e = this;
                    d.getInstance().play(d.SFX_SELECT),
                    y.getInstance().setHoldInput(!0),
                    y.getInstance().showPopupPurchasePowerUp(!0, this.powerUpType, (function() {
                        "berryblast" == e.powerUpType ? h.getInstance().inventoryPUBerryBlast += 3 : "deflect" == e.powerUpType ? h.getInstance().inventoryPUDeflect += 3 : "peachtime" == e.powerUpType && (h.getInstance().inventoryPUPeachyTime += 3),
                        y.saveData(),
                        e.setEquipped()
                    }
                    )),
                    "berryblast" == this.powerUpType || "deflect" == this.powerUpType || e.powerUpType
                }
                ,
                r.overallClicked = function() {
                    var e = 0;
                    "berryblast" == this.powerUpType ? e = h.getInstance().inventoryPUBerryBlast : "deflect" == this.powerUpType ? e = h.getInstance().inventoryPUDeflect : "peachtime" == this.powerUpType && (e = h.getInstance().inventoryPUPeachyTime),
                    this.isEquipped ? this.setUnequipped() : e <= 0 ? this.onBuy() : this.setEquipped()
                }
                ,
                r.setBuyable = function() {
                    this.isEquipped = !1,
                    "berryblast" == this.powerUpType ? (B.EQUIP_BB = !1,
                    this.node.getChildByPath("IconPowerup/BeryBlast/BerryBlastBacking").getComponent(a).spriteFrame = this.spriteBtnUnselected) : "deflect" == this.powerUpType ? (B.EQUIP_DB = !1,
                    this.node.getChildByPath("IconPowerup/BombDeflect/BombDeflectBacking").getComponent(a).spriteFrame = this.spriteBtnUnselected) : "peachtime" == this.powerUpType && (B.EQUIP_PT = !1,
                    this.node.getChildByPath("IconPowerup/PeachyTime/PeachyTimeBacking").getComponent(a).spriteFrame = this.spriteBtnUnselected),
                    this.node.getChildByPath("LabelAngka").active = !1,
                    this.node.getChildByPath("GreenEquipped").active = !1,
                    this.node.getChildByPath("YellowPlus").active = !0
                }
                ,
                r.setEquipped = function() {
                    d.getInstance().play(d.SFX_UIPOWER_ENABLE),
                    this.isEquipped = !0,
                    "berryblast" == this.powerUpType ? (B.EQUIP_BB = !0,
                    this.node.getChildByPath("IconPowerup/BeryBlast/BerryBlastBacking").getComponent(a).spriteFrame = this.spriteBtnSelected) : "deflect" == this.powerUpType ? (B.EQUIP_DB = !0,
                    this.node.getChildByPath("IconPowerup/BombDeflect/BombDeflectBacking").getComponent(a).spriteFrame = this.spriteBtnSelected) : "peachtime" == this.powerUpType && (B.EQUIP_PT = !0,
                    this.node.getChildByPath("IconPowerup/PeachyTime/PeachyTimeBacking").getComponent(a).spriteFrame = this.spriteBtnSelected),
                    this.node.getChildByPath("LabelAngka").active = !1,
                    this.node.getChildByPath("GreenEquipped").active = !0,
                    this.node.getChildByPath("YellowPlus").active = !1
                }
                ,
                r.setUnequipped = function() {
                    d.getInstance().play(d.SFX_UIPOWER_DISABLE),
                    this.isEquipped = !1,
                    "berryblast" == this.powerUpType ? (B.EQUIP_BB = !1,
                    this.node.getChildByPath("IconPowerup/BeryBlast/BerryBlastBacking").getComponent(a).spriteFrame = this.spriteBtnUnselected) : "deflect" == this.powerUpType ? (B.EQUIP_DB = !1,
                    this.node.getChildByPath("IconPowerup/BombDeflect/BombDeflectBacking").getComponent(a).spriteFrame = this.spriteBtnUnselected) : "peachtime" == this.powerUpType && (B.EQUIP_PT = !1,
                    this.node.getChildByPath("IconPowerup/PeachyTime/PeachyTimeBacking").getComponent(a).spriteFrame = this.spriteBtnUnselected),
                    this.node.getChildByPath("LabelAngka").active = !1,
                    this.node.getChildByPath("GreenEquipped").active = !1,
                    this.node.getChildByPath("YellowPlus").active = !1;
                    var e = 0;
                    "berryblast" == this.powerUpType ? e = h.getInstance().inventoryPUBerryBlast : "deflect" == this.powerUpType ? e = h.getInstance().inventoryPUDeflect : "peachtime" == this.powerUpType && (e = h.getInstance().inventoryPUPeachyTime),
                    e > 0 ? this.setOwned(e) : this.setBuyable()
                }
                ,
                r.setOwned = function(e) {
                    this.isEquipped = !1,
                    "berryblast" == this.powerUpType ? (B.EQUIP_BB = !1,
                    this.node.getChildByPath("IconPowerup/BeryBlast/BerryBlastBacking").getComponent(a).spriteFrame = this.spriteBtnUnselected) : "deflect" == this.powerUpType ? (B.EQUIP_DB = !1,
                    this.node.getChildByPath("IconPowerup/BombDeflect/BombDeflectBacking").getComponent(a).spriteFrame = this.spriteBtnUnselected) : "peachtime" == this.powerUpType && (B.EQUIP_PT = !1,
                    this.node.getChildByPath("IconPowerup/PeachyTime/PeachyTimeBacking").getComponent(a).spriteFrame = this.spriteBtnUnselected),
                    this.node.getChildByPath("LabelAngka").active = !0,
                    this.node.getChildByPath("GreenEquipped").active = !1,
                    this.node.getChildByPath("YellowPlus").active = !1,
                    this.node.getChildByPath("LabelAngka/text_PU").getComponent(c).string = "" + e
                }
                ,
                t
            }(l)).prototype, "powerUpType", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            b = t(w.prototype, "spriteBtnUnselected", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            f = t(w.prototype, "spriteBtnSelected", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            m = w)) || m));
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/UIRing.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./FruitManager.ts"], (function(t) {
    "use strict";
    var e, i, n, a, r, o, s, l, u, c, h, g, d;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor,
            i = t.inheritsLoose,
            n = t.initializerDefineProperty,
            a = t.assertThisInitialized
        }
        , function(t) {
            r = t.cclegacy,
            o = t._decorator,
            s = t.find,
            l = t.Vec3,
            u = t.view,
            c = t.Camera,
            h = t.RigidBody,
            g = t.Component
        }
        , function(t) {
            d = t.FruitManager
        }
        ],
        execute: function() {
            var f, m, y, p;
            r._RF.push({}, "8d34ekFjbNM5q/X0vM02c7i", "UIRing", void 0);
            var C = o.ccclass
              , b = o.property;
            t("UIRing", C("UIRing")((y = e((m = function(t) {
                function e() {
                    for (var e, i = arguments.length, r = new Array(i), o = 0; o < i; o++)
                        r[o] = arguments[o];
                    return e = t.call.apply(t, [this].concat(r)) || this,
                    n(e, "fruitName", y, a(e)),
                    n(e, "action", p, a(e)),
                    e.fruit = null,
                    e.MainCamera = void 0,
                    e.baseScale = void 0,
                    e.calledGetFruit = !1,
                    e
                }
                i(e, t);
                var r = e.prototype;
                return r.getFruit = function() {
                    if (this.calledGetFruit = !0,
                    null == this.fruit) {
                        console.log("load ring ui"),
                        this.MainCamera = s("Main Camera"),
                        console.log(this.fruitName + " , " + this.action);
                        var t = d.getInstance().getFruitUI(this.fruitName, this.action);
                        this.fruit = t;
                        var e = new l(0,0,0)
                          , i = this.node.getChildByPath("buttonFruit").worldPosition.clone();
                        i.x = i.x * u.getScaleX(),
                        i.y = i.y * u.getScaleY(),
                        this.MainCamera.getComponent(c).screenToWorld(i, e),
                        t.setPosition(e),
                        t.getComponent(h).angularDamping = 0,
                        this.baseScale = t.scale.x,
                        t.scale = new l(0,0,0)
                    }
                    return this.fruit
                }
                ,
                r.setFruitName = function(t) {
                    this.fruitName = t,
                    null != this.fruit && (this.fruit.destroy(),
                    this.fruit = null)
                }
                ,
                r.onLoad = function() {
                    if (!this.calledGetFruit) {
                        console.log("load ring ui"),
                        this.MainCamera = s("Main Camera"),
                        console.log(this.fruitName + " , " + this.action);
                        var t = d.getInstance().getFruitUI(this.fruitName, this.action);
                        this.fruit = t;
                        var e = new l(0,0,0)
                          , i = this.node.getChildByPath("buttonFruit").worldPosition.clone();
                        i.x = i.x * u.getScaleX(),
                        i.y = i.y * u.getScaleY(),
                        this.MainCamera.getComponent(c).screenToWorld(i, e),
                        t.setPosition(e),
                        t.getComponent(h).angularDamping = 0,
                        this.baseScale = t.scale.x,
                        t.scale = new l(0,0,0)
                    }
                }
                ,
                r.update = function(t) {
                    var e = new l(0,0,0)
                      , i = this.node.getChildByPath("buttonFruit").worldPosition.clone();
                    i.x = i.x * u.getScaleX(),
                    i.y = i.y * u.getScaleY(),
                    this.MainCamera.getComponent(c).screenToWorld(i, e),
                    e.z = -5,
                    this.fruit.setPosition(e);
                    var n = this.fruit.scale.clone();
                    n.x = this.baseScale * this.node.getChildByPath("buttonFruit").scale.x,
                    n.y = this.baseScale * this.node.getChildByPath("buttonFruit").scale.y,
                    n.z = this.baseScale * this.node.getChildByPath("buttonFruit").scale.z,
                    this.fruit.scale = n;
                    var a = this.node.getChildByPath("ring").eulerAngles;
                    this.node.getChildByPath("ring").setRotationFromEuler(a.x, a.y, a.z + 10 * t)
                }
                ,
                e
            }(g)).prototype, "fruitName", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            p = e(m.prototype, "action", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            f = m)) || f);
            r._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/UIToWorldNode.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
    "use strict";
    var t, o, r, i, a, n, l, s, c, p;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor,
            o = e.inheritsLoose,
            r = e.initializerDefineProperty,
            i = e.assertThisInitialized
        }
        , function(e) {
            a = e.cclegacy,
            n = e._decorator,
            l = e.Camera,
            s = e.Node,
            c = e.Vec3,
            p = e.Component
        }
        ],
        execute: function() {
            var u, d, y, g, m, h, f;
            a._RF.push({}, "91ac1WPrjhGZoTWzyp/q+/N", "UIToWorldNode", void 0);
            var v = n.ccclass
              , N = n.property;
            e("UIToWorldNode", (u = v("UIToWorldNode"),
            d = N({
                type: l,
                displayName: "Main Camera"
            }),
            y = N({
                type: s,
                displayName: "Target"
            }),
            u((h = t((m = function(e) {
                function t() {
                    for (var t, o = arguments.length, a = new Array(o), n = 0; n < o; n++)
                        a[n] = arguments[n];
                    return t = e.call.apply(e, [this].concat(a)) || this,
                    r(t, "mainCamera", h, i(t)),
                    r(t, "target", f, i(t)),
                    t
                }
                o(t, e);
                var a = t.prototype;
                return a.start = function() {}
                ,
                a.update = function(e) {
                    var t = this.node.position
                      , o = this.mainCamera.convertToUINode(this.target.worldPosition, this.node.getParent());
                    0 != c.distance(t, o) && (console.log(t.toString() + " -> " + o.toString()),
                    this.node.setPosition(o))
                }
                ,
                t
            }(p)).prototype, "mainCamera", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            f = t(m.prototype, "target", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            g = m)) || g));
            a._RF.pop()
        }
    }
}
));

(function(r) {
    r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main');
}
)(function(mid, cid) {
    System.register(mid, [cid], function(_export, _context) {
        return {
            setters: [function(_m) {
                var _exportObj = {};

                for (var _key in _m) {
                    if (_key !== "default" && _key !== "__esModule")
                        _exportObj[_key] = _m[_key];
                }

                _export(_exportObj);
            }
            ],
            execute: function() {}
        };
    });
});
