var YaGamesLoader;
(() => {
  "use strict";
  var e = {
    r: (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    },
  };
  (() => {
    if (void 0 !== e) {
      var r = e.u,
        o = e.e,
        t = {},
        a = {};
      (e.u = function (e) {
        return r(e) + (t.hasOwnProperty(e) ? "?" + t[e] : "");
      }),
        (e.e = function (t) {
          return o(t).catch(function (o) {
            var n = a.hasOwnProperty(t) ? a[t] : 3;
            if (n < 1) {
              var s = r(t);
              throw (
                ((o.message =
                  "Loading chunk " +
                  t +
                  " failed after 3 retries.\n(" +
                  s +
                  ")"),
                (o.request = s),
                o)
              );
            }
            return new Promise(function (r) {
              setTimeout(function () {
                (a[t] = n - 1), r(e.e(t));
              }, 0);
            });
          });
        });
    }
  })();
  var r = {};
  e.r(r);
  var o,
    t = Object.defineProperty,
    a = Object.getOwnPropertySymbols,
    n = Object.prototype.hasOwnProperty,
    s = Object.prototype.propertyIsEnumerable,
    i = (e, r, o) =>
      r in e
        ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o })
        : (e[r] = o),
    d = (e, r) => {
      for (var o in r || (r = {})) n.call(r, o) && i(e, o, r[o]);
      if (a) for (var o of a(r)) s.call(r, o) && i(e, o, r[o]);
      return e;
    };
  if (window === window.top || window.sdkLoaderWasInited) {
    const e = window.sdkLoaderWasInited
      ? "The SDK Loader was loaded more than once"
      : "SDK initialization outside of frame";
    console.warn(e);
  } else {
    let e, r, t, a;
    window.sdkLoaderWasInited = !0;
    let n = !1,
      s = !1,
      i = !1;
    (window.isSdkLoader = !0),
      (window.YaGames = {
        init: (o) => {
          var d;
          return s
            ? null == (d = window.YaGames)
              ? void 0
              : d.init(o)
            : i
            ? Promise.reject(v)
            : a
            ? (console.warn("YaGames was initialized"), a)
            : ((a = new Promise((a, s) => {
                (e = a), (r = s), (t = o), (n = !0);
              })),
              a);
        },
      });
    const c = {
        type: "unknown",
        isMobile: () => !1,
        isTablet: () => !1,
        isDesktop: () => !1,
        isTV: () => !1,
      },
      l = (e, r = {}) => {
        var o, t;
        window.parent.postMessage(
          {
            source: "YandexGamesSDK",
            messageId: `${Date.now()}-${Math.random()}`,
            type: "error",
            data: {
              block: "ErrorCounter/common: sdk-loader",
              error: { message: `[SDK LOADER]: ${e}` },
              additional: d(
                d(
                  d({}, r),
                  (null == (o = r.error) ? void 0 : o.message)
                    ? {
                        originalMessage:
                          null == (t = r.error) ? void 0 : t.message,
                      }
                    : {}
                ),
                r.source ? { originalSource: r.source } : {}
              ),
              level: "error",
              source: "sdk-loader",
              type: "error",
            },
          },
          "*"
        );
      };
    Object.defineProperty(window.YaGames, "deviceInfo", {
      get: () => (l("accessing deviceInfo in YaGames"), c),
    });
    const u = (e) => {
        const r = document.querySelectorAll(`script[src="${e}"]`);
        for (let e of Array.from(r)) e.remove();
      },
      m = /^(https|yandexgames):\/\/[^\/][^.][\w.\/\-]+\/sdk\/v2(\?|$)/,
      w = /(^|yandex\.net)\/sdk\/(v\d+|_)\/v2(\.[0-9a-f]*)?\.js/,
      f = "url sdk not valid",
      v = "load sdk file error",
      p = 3,
      g = (o, a) => {
        const d = document.createElement("script");
        (d.src = o),
          (d.onload = () => {
            var o;
            (s = !0),
              n &&
                (null == (o = window.YaGames) ||
                  o
                    .init(t)
                    .then((r) => {
                      e(r);
                    })
                    .catch((e) => {
                      l("Error while init sdk", { error: e }), r(e);
                    }));
          }),
          (d.onerror = (e, t, s, d, c) => {
            u(o),
              a > 0
                ? g(o, --a)
                : ((i = !0),
                  l(v, { event: e, error: c, source: t }),
                  n && r(v));
          }),
          (document.head || document.documentElement).append(d);
      },
      h = (e, o = "") => {
        if (e && (m.test(e) || w.test(e))) {
          const r = new URL(e, location.origin);
          o && r.searchParams.set("dvh", o), g(r.toString(), p);
        } else (i = !0), n && r(f), l(f);
      },
      y = new URLSearchParams(location.search).get("sdk");
    y
      ? h(y)
      : ((o = function* () {
          return new Promise((e, r) => {
            const o = `${Date.now()}-${Math.random()}`,
              t = setTimeout(() => {
                r(new Error("Get external iframe timeout"));
              }, 500);
            window.addEventListener("message", function r(a) {
              const { data: n } = (function (e) {
                try {
                  return { data: JSON.parse(e), error: null };
                } catch (e) {
                  return { data: null, error: e };
                }
              })(a.data);
              n &&
                n.messageId === o &&
                (window.removeEventListener("message", r),
                clearTimeout(t),
                e(n.payload));
            }),
              window.parent.postMessage(
                JSON.stringify({
                  source: "YandexGamesSDK",
                  actionName: "GET_IFRAME_ORIGIN_SRC",
                  channel: "EARLY_SDK_EVENT",
                  messageId: o,
                }),
                "*"
              );
          });
        }),
        new Promise((e, r) => {
          var t = (e) => {
              try {
                n(o.next(e));
              } catch (e) {
                r(e);
              }
            },
            a = (e) => {
              try {
                n(o.throw(e));
              } catch (e) {
                r(e);
              }
            },
            n = (r) =>
              r.done ? e(r.value) : Promise.resolve(r.value).then(t, a);
          n((o = o.apply(void 0, null)).next());
        }))
          .then((e) => {
            const r = new URL(e),
              o = r.searchParams,
              t = o.get("sdk"),
              a = o.get("dvh") || "";
            if (t) h(t, a);
            else {
              const e = new URLSearchParams(r.search).get("sdk");
              h(e);
            }
          })
          .catch((e) => {
            l("Error while get iframe src", { error: e }),
              console.error("SDK initialization failed", e);
          });
  }
  YaGamesLoader = r;
})();
//# sourceMappingURL=https://s3.mdst.yandex.net/games/source-maps/_/sdk/sdk-loader/sdk.js.map
