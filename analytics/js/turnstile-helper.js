"use strict";

(function() {

    function Ht(e, t, a, o, c, u, g) {

        try {

            var y = e[u](g)

              , f = y.value

        } catch (d) {

            a(d);

            return

        }

        y.done ? t(f) : Promise.resolve(f).then(o, c)

    }

    function Bt(e) {

        return function() {

            var t = this

              , a = arguments;

            return new Promise(function(o, c) {

                var u = e.apply(t, a);

                function g(f) {

                    Ht(u, o, c, g, y, "next", f)

                }

                function y(f) {

                    Ht(u, o, c, g, y, "throw", f)

                }

                g(void 0)

            }

            )

        }

    }

    function V(e, t) {

        return t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : V(e, t)

    }

    function De(e, t, a) {

        return t in e ? Object.defineProperty(e, t, {

            value: a,

            enumerable: !0,

            configurable: !0,

            writable: !0

        }) : e[t] = a,

        e

    }

    function Pe(e) {

        for (var t = 1; t < arguments.length; t++) {

            var a = arguments[t] != null ? arguments[t] : {}

              , o = Object.keys(a);

            typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(a).filter(function(c) {

                return Object.getOwnPropertyDescriptor(a, c).enumerable

            }))),

            o.forEach(function(c) {

                De(e, c, a[c])

            })

        }

        return e

    }

    function Mr(e, t) {

        var a = Object.keys(e);

        if (Object.getOwnPropertySymbols) {

            var o = Object.getOwnPropertySymbols(e);

            t && (o = o.filter(function(c) {

                return Object.getOwnPropertyDescriptor(e, c).enumerable

            })),

            a.push.apply(a, o)

        }

        return a

    }

    function ot(e, t) {

        return t = t != null ? t : {},

        Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Mr(Object(t)).forEach(function(a) {

            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))

        }),

        e

    }

    function Gt(e) {

        if (Array.isArray(e))

            return e

    }

    function Xt(e, t) {

        var a = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];

        if (a != null) {

            var o = [], c = !0, u = !1, g, y;

            try {

                for (a = a.call(e); !(c = (g = a.next()).done) && (o.push(g.value),

                !(t && o.length === t)); c = !0)

                    ;

            } catch (f) {

                u = !0,

                y = f

            } finally {

                try {

                    !c && a.return != null && a.return()

                } finally {

                    if (u)

                        throw y

                }

            }

            return o

        }

    }

    function Yt() {

        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")

    }

    function ct(e, t) {

        (t == null || t > e.length) && (t = e.length);

        for (var a = 0, o = new Array(t); a < t; a++)

            o[a] = e[a];

        return o

    }

    function Qt(e, t) {

        if (e) {

            if (typeof e == "string")

                return ct(e, t);

            var a = Object.prototype.toString.call(e).slice(8, -1);

            if (a === "Object" && e.constructor && (a = e.constructor.name),

            a === "Map" || a === "Set")

                return Array.from(a);

            if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))

                return ct(e, t)

        }

    }

    function Ce(e, t) {

        return Gt(e) || Xt(e, t) || Qt(e, t) || Yt()

    }

    function D(e) {

        "@swc/helpers - typeof";

        return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e

    }

    function Ve(e, t) {

        var a = {

            label: 0,

            sent: function() {

                if (u[0] & 1)

                    throw u[1];

                return u[1]

            },

            trys: [],

            ops: []

        }, o, c, u, g;

        return g = {

            next: y(0),

            throw: y(1),

            return: y(2)

        },

        typeof Symbol == "function" && (g[Symbol.iterator] = function() {

            return this

        }

        ),

        g;

        function y(d) {

            return function(w) {

                return f([d, w])

            }

        }

        function f(d) {

            if (o)

                throw new TypeError("Generator is already executing.");

            for (; g && (g = 0,

            d[0] && (a = 0)),

            a; )

                try {

                    if (o = 1,

                    c && (u = d[0] & 2 ? c.return : d[0] ? c.throw || ((u = c.return) && u.call(c),

                    0) : c.next) && !(u = u.call(c, d[1])).done)

                        return u;

                    switch (c = 0,

                    u && (d = [d[0] & 2, u.value]),

                    d[0]) {

                    case 0:

                    case 1:

                        u = d;

                        break;

                    case 4:

                        return a.label++,

                        {

                            value: d[1],

                            done: !1

                        };

                    case 5:

                        a.label++,

                        c = d[1],

                        d = [0];

                        continue;

                    case 7:

                        d = a.ops.pop(),

                        a.trys.pop();

                        continue;

                    default:

                        if (u = a.trys,

                        !(u = u.length > 0 && u[u.length - 1]) && (d[0] === 6 || d[0] === 2)) {

                            a = 0;

                            continue

                        }

                        if (d[0] === 3 && (!u || d[1] > u[0] && d[1] < u[3])) {

                            a.label = d[1];

                            break

                        }

                        if (d[0] === 6 && a.label < u[1]) {

                            a.label = u[1],

                            u = d;

                            break

                        }

                        if (u && a.label < u[2]) {

                            a.label = u[2],

                            a.ops.push(d);

                            break

                        }

                        u[2] && a.ops.pop(),

                        a.trys.pop();

                        continue

                    }

                    d = t.call(e, a)

                } catch (w) {

                    d = [6, w],

                    c = 0

                } finally {

                    o = u = 0

                }

            if (d[0] & 5)

                throw d[1];

            return {

                value: d[0] ? d[1] : void 0,

                done: !0

            }

        }

    }

    var $t = 300

      , Jt = 10;

    var Kt = {

        code: 200500,

        description: "Turnstile's api.js was loaded, but the iframe under challenges.cloudflare.com (or challenges.fed.cloudflare.com) could not be loaded. Has the visitor blocked some parts of challenges.cloudflare.com or are they self-hosting api.js?",

        internalRepr: "iframe_load_err",

        public: !0,

        retryable: !1

    };

    var Zt = 300020;

    var We = 300030;

    var Ue = 300031;

    function ut(e) {

        var t = new URLSearchParams;

        if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && t.set("offlabel", e.params._debugSitekeyOverrides.offlabel),

        e.params._debugSitekeyOverrides.clearanceLevel !== "default" && t.set("clearance_level", e.params._debugSitekeyOverrides.clearanceLevel)),

        window.__cfDebugTurnstileOutcome && t.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome)),

        !(t.size === 0 || t.toString() === ""))

            return t.toString()

    }

    var je = "cf-chl-widget-"

      , U = "cloudflare-challenge"

      , er = ".cf-turnstile"

      , tr = ".cf-challenge"

      , rr = ".g-recaptcha"

      , lt = "cf_challenge_response"

      , st = "cf-turnstile-response"

      , dt = "g-recaptcha-response"

      , ar = 8e3

      , ft = "private-token"

      , nr = 3

      , ir = 500

      , or = 500

      , Q = "";

    var H;

    (function(e) {

        e.Managed = "managed",

        e.NonInteractive = "non-interactive",

        e.Invisible = "invisible"

    }

    )(H || (H = {}));

    var L;

    (function(e) {

        e.Normal = "normal",

        e.Compact = "compact",

        e.Invisible = "invisible",

        e.Flexible = "flexible"

    }

    )(L || (L = {}));

    var qe;

    (function(e) {

        e.Auto = "auto",

        e.Light = "light",

        e.Dark = "dark"

    }

    )(qe || (qe = {}));

    var me;

    (function(e) {

        e.Verifying = "verifying",

        e.VerifyingHavingTroubles = "verifying-having-troubles",

        e.VerifyingOverrun = "verifying-overrun",

        e.FailureWoHavingTroubles = "failure-wo-having-troubles",

        e.FailureHavingTroubles = "failure-having-troubles",

        e.FailureFeedback = "failure-feedback",

        e.FailureFeedbackCode = "failure-feedback-code",

        e.ExpiredNeverRefresh = "expired-never-refresh",

        e.ExpiredManualRefresh = "expired-manual-refresh",

        e.TimeoutNeverRefresh = "timeout-never-refresh",

        e.TimeoutManualRefresh = "timeout-manual-refresh",

        e.InteractivityRequired = "interactivity-required",

        e.UnsupportedBrowser = "unsupported-browser",

        e.TimeCheckCachedWarning = "time-check-cached-warning",

        e.InvalidDomain = "invalid-domain"

    }

    )(me || (me = {}));

    var ge;

    (function(e) {

        e.Never = "never",

        e.Auto = "auto"

    }

    )(ge || (ge = {}));

    var K;

    (function(e) {

        e.Never = "never",

        e.Manual = "manual",

        e.Auto = "auto"

    }

    )(K || (K = {}));

    var oe;

    (function(e) {

        e.Never = "never",

        e.Manual = "manual",

        e.Auto = "auto"

    }

    )(oe || (oe = {}));

    var $;

    (function(e) {

        e.Always = "always",

        e.Execute = "execute",

        e.InteractionOnly = "interaction-only"

    }

    )($ || ($ = {}));

    var he;

    (function(e) {

        e.Render = "render",

        e.Execute = "execute"

    }

    )(he || (he = {}));

    var ce;

    (function(e) {

        e.Execute = "execute"

    }

    )(ce || (ce = {}));

    var B;

    (function(e) {

        e.New = "new",

        e.CrashedRetry = "crashed_retry",

        e.FailureRetry = "failure_retry",

        e.StaleExecute = "stale_execute",

        e.AutoExpire = "auto_expire",

        e.AutoTimeout = "auto_timeout",

        e.ManualRefresh = "manual_refresh",

        e.Api = "api",

        e.CheckDelays = "check_delays",

        e.TimeCheckCachedWarningAux = "time_check_cached_warning_aux",

        e.JsCookiesMissingAux = "js_cookies_missing_aux",

        e.RedirectingTextOverrun = "redirecting_text_overrun"

    }

    )(B || (B = {}));

    function F(e, t) {

        return e.indexOf(t) !== -1

    }

    var Nr = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"]

      , Lr = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lt-lt", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"]

      , cr = ["https://challenges.cloudflare.com", "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];

    function pt(e, t, a) {

        var o = "https://challenges.cloudflare.com", c, u = (c = a == null ? void 0 : a.origin) !== null && c !== void 0 ? c : o;

        if (t) {

            var g;

            return (g = e["base-url"]) !== null && g !== void 0 ? g : u

        }

        return u

    }

    function vt(e, t, a, o, c, u, g, y, f) {

        var d = pt(a, c, y)

          , w = u ? "h/".concat(u, "/") : ""

          , R = f ? "&".concat(f) : ""

          , C = a["feedback-enabled"] === !1 ? "fbD" : "fbE";

        return "".concat(d, "/cdn-cgi/challenge-platform/").concat(w, "turnstile/f/ov2/av0/rch").concat(o, "/").concat(e, "/").concat(t, "/").concat(a.theme, "/").concat(C, "/").concat(g, "/").concat(a.size, "?lang=").concat(a.language).concat(R)

    }

    var mt = function(e) {

        var t, a, o = window.innerWidth < 400, c = e.state !== me.FailureFeedbackCode && (e.state === me.FailureFeedback || e.state === me.FailureHavingTroubles || !e.errorCode), u, g = F(Nr, (u = (t = e.displayLanguage) === null || t === void 0 ? void 0 : t.toLowerCase()) !== null && u !== void 0 ? u : "nonexistent"), y, f = F(Lr, (y = (a = e.displayLanguage) === null || a === void 0 ? void 0 : a.toLowerCase()) !== null && y !== void 0 ? y : "nonexistent");

        return o ? Fr({

            isModeratelyVerbose: f,

            isSmallerFeedback: c,

            isVerboseLanguage: g

        }) : c && g ? "630px" : c && f ? "620px" : c ? "600px" : g ? "690px" : "680px"

    }

      , Fr = function(e) {

        var t = e.isVerboseLanguage

          , a = e.isSmallerFeedback

          , o = e.isModeratelyVerbose;

        return a && t ? "660px" : a && o ? "620px" : a ? "600px" : t ? "770px" : o ? "740px" : "730px"

    };

    function ze(e) {

        if (e === void 0)

            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");

        return e

    }

    function ur(e, t) {

        if (!V(e, t))

            throw new TypeError("Cannot call a class as a function")

    }

    function Z(e, t) {

        return Z = Object.setPrototypeOf || function(o, c) {

            return o.__proto__ = c,

            o

        }

        ,

        Z(e, t)

    }

    function lr(e, t) {

        if (typeof t != "function" && t !== null)

            throw new TypeError("Super expression must either be null or a function");

        e.prototype = Object.create(t && t.prototype, {

            constructor: {

                value: e,

                writable: !0,

                configurable: !0

            }

        }),

        t && Z(e, t)

    }

    function He() {

        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)

            return !1;

        if (typeof Proxy == "function")

            return !0;

        try {

            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),

            !0

        } catch (e) {

            return !1

        }

    }

    function Oe(e, t, a) {

        return He() ? Oe = Reflect.construct : Oe = function(c, u, g) {

            var y = [null];

            y.push.apply(y, u);

            var f = Function.bind.apply(c, y)

              , d = new f;

            return g && Z(d, g.prototype),

            d

        }

        ,

        Oe.apply(null, arguments)

    }

    function ue(e) {

        return ue = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {

            return a.__proto__ || Object.getPrototypeOf(a)

        }

        ,

        ue(e)

    }

    function sr(e) {

        return Function.toString.call(e).indexOf("[native code]") !== -1

    }

    function Be(e) {

        var t = typeof Map == "function" ? new Map : void 0;

        return Be = function(o) {

            if (o === null || !sr(o))

                return o;

            if (typeof o != "function")

                throw new TypeError("Super expression must either be null or a function");

            if (typeof t != "undefined") {

                if (t.has(o))

                    return t.get(o);

                t.set(o, c)

            }

            function c() {

                return Oe(o, arguments, ue(this).constructor)

            }

            return c.prototype = Object.create(o.prototype, {

                constructor: {

                    value: c,

                    enumerable: !1,

                    writable: !0,

                    configurable: !0

                }

            }),

            Z(c, o)

        }

        ,

        Be(e)

    }

    function dr(e, t) {

        return t && (D(t) === "object" || typeof t == "function") ? t : ze(e)

    }

    function fr(e) {

        var t = He();

        return function() {

            var o = ue(e), c;

            if (t) {

                var u = ue(this).constructor;

                c = Reflect.construct(o, arguments, u)

            } else

                c = o.apply(this, arguments);

            return dr(this, c)

        }

    }

    var pr = function(e) {

        "use strict";

        lr(a, e);

        var t = fr(a);

        function a(o, c) {

            ur(this, a);

            var u;

            return u = t.call(this, o),

            De(ze(u), "code", void 0),

            u.name = "TurnstileError",

            u.code = c,

            u

        }

        return a

    }(Be(Error));

    function v(e, t) {

        var a = "[Cloudflare Turnstile] ".concat(e, ".");

        throw new pr(a,t)

    }

    function b(e) {

        console.warn("[Cloudflare Turnstile] ".concat(e))

    }

    function Ge(e) {

        return e.startsWith(je) ? e.substring(je.length) : null

    }

    function J(e) {

        return "".concat(je).concat(e)

    }

    function gt() {

        var e = /^https:\/\/challenges(?:\.fed)?\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/

          , t = document.currentScript;

        if (V(t, HTMLScriptElement) && e.test(t.src))

            return t;

        for (var a = document.querySelectorAll("script"), o = 0, c; c = a[o]; o++)

            if (V(c, HTMLScriptElement) && e.test(c.src))

                return c

    }

    function vr() {

        var e = gt();

        e || v("Could not find Turnstile valid script tag, some features may not be available", 43777);

        var t = e.src, a;

        try {

            a = new URL(t)

        } catch (u) {

            v("Could not parse Turnstile script tag URL", 43777)

        }

        var o = {

            loadedAsync: !1,

            params: new URLSearchParams,

            src: t,

            url: a

        };

        (e.async || e.defer) && (o.loadedAsync = !0);

        var c = t.split("?");

        return c.length > 1 && (o.params = new URLSearchParams(c[1])),

        o

    }

    function j() {

        return Date.now()

    }

    var ht = function(e, t, a, o) {

        var c = pt(t.params, !1, o), u = "h/".concat("g", "/"), g, y, f = "".concat(c, "/cdn-cgi/challenge-platform/").concat(u, "feedback-reports/").concat(Ge(e), "/").concat(t.displayLanguage, "/").concat((y = t.params.theme) !== null && y !== void 0 ? y : t.theme, "/").concat(a);

        if (window.top !== window.self) {

            window.open(f, "_blank", "noopener,noreferrer");

            return

        }

        t.wrapper.parentNode || v("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);

        var d = document.createElement("div");

        d.style.position = "fixed",

        d.style.zIndex = "2147483646",

        d.style.width = "100vw",

        d.style.height = "100vh",

        d.style.top = "0",

        d.style.left = "0",

        d.style.transformOrigin = "center center",

        d.style.overflowX = "hidden",

        d.style.overflowY = "auto",

        d.style.background = "rgba(0,0,0,0.4)";

        var w = document.createElement("div");

        w.style.display = "table-cell",

        w.style.verticalAlign = "middle",

        w.style.width = "100vw",

        w.style.height = "100vh";

        var R = document.createElement("div");

        R.className = "cf-turnstile-feedback",

        R.id = "cf-fr-id",

        R.style.width = "100vw",

        R.style.maxWidth = "450px",

        R.style.height = mt(t),

        R.style.position = "relative",

        R.style.zIndex = "2147483647",

        R.style.backgroundColor = "#ffffff",

        R.style.borderRadius = "5px",

        R.style.left = "0px",

        R.style.top = "0px",

        R.style.overflow = "hidden",

        R.style.margin = "0px auto";

        var C = document.createElement("iframe");

        C.id = "".concat(e, "-fr"),

        C.setAttribute("src", f),

        C.setAttribute("allow", "cross-origin-isolated; fullscreen"),

        C.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"),

        C.setAttribute("scrolling", "no"),

        C.style.borderWidth = "0px",

        C.style.width = "100%",

        C.style.height = "100%",

        C.style.overflow = "hidden";

        var T = document.createElementNS("http://www.w3.org/2000/svg", "svg");

        T.setAttribute("tabindex", "0"),

        T.setAttribute("role", "img"),

        T.setAttribute("aria-label", "Close button icon"),

        T.style.position = "absolute",

        T.style.width = "26px",

        T.style.height = "26px",

        T.style.zIndex = "2147483647",

        T.style.cursor = "pointer",

        t.displayRtl ? T.style.left = "2px" : T.style.right = "6px",

        T.style.top = "5px",

        T.setAttribute("width", "20"),

        T.setAttribute("height", "20"),

        T.addEventListener("click", function() {

            var N;

            (N = d.parentNode) === null || N === void 0 || N.removeChild(d)

        }),

        T.addEventListener("keydown", function(N) {

            if (N.key === "Enter" || N.key === " ") {

                var _;

                (_ = d.parentNode) === null || _ === void 0 || _.removeChild(d)

            }

        });

        var k = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");

        k.setAttribute("ry", "12"),

        k.setAttribute("rx", "12"),

        k.setAttribute("cy", "12"),

        k.setAttribute("cx", "12"),

        k.setAttribute("fill", "none"),

        k.setAttribute("stroke-width", "0"),

        T.appendChild(k);

        var M = document.createElementNS("http://www.w3.org/2000/svg", "line");

        M.setAttribute("stroke-width", "1"),

        M.setAttribute("stroke", "#999"),

        M.setAttribute("fill", "none"),

        M.setAttribute("x1", "6"),

        M.setAttribute("x2", "18"),

        M.setAttribute("y1", "18"),

        M.setAttribute("y2", "5"),

        T.appendChild(M);

        var S = document.createElementNS("http://www.w3.org/2000/svg", "line");

        S.setAttribute("stroke-width", "1"),

        S.setAttribute("stroke", "#999"),

        S.setAttribute("fill", "none"),

        S.setAttribute("x1", "6"),

        S.setAttribute("x2", "18"),

        S.setAttribute("y1", "5"),

        S.setAttribute("y2", "18"),

        T.appendChild(S),

        R.appendChild(C),

        R.appendChild(T),

        w.appendChild(R),

        d.appendChild(w),

        d.addEventListener("click", function() {

            var N;

            (N = d.parentNode) === null || N === void 0 || N.removeChild(d)

        }),

        t.wrapper.parentNode.appendChild(d),

        window.addEventListener("resize", function() {

            R.style.height = mt(t)

        })

    }

      , mr = function(e) {

        var t, a, o;

        (o = document.getElementById(e)) === null || o === void 0 || (a = o.parentElement) === null || a === void 0 || (t = a.parentElement) === null || t === void 0 || t.remove()

    };

    var Xe;

    (function(e) {

        e.Failure = "failure",

        e.Verifying = "verifying",

        e.Overruning = "overrunning",

        e.Custom = "custom"

    }

    )(Xe || (Xe = {}));

    var yt = function(e) {

        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;

        return e.length > t ? e.substring(0, t) : e

    };

    function gr(e) {

        if (!e)

            return "-";

        var t = function(a, o) {

            if (!a || a.tagName === "BODY")

                return o;

            for (var c = 1, u = a.previousElementSibling; u; )

                u.tagName === a.tagName && c++,

                u = u.previousElementSibling;

            var g = yt(a.tagName.toLowerCase())

              , y = "".concat(g, "[").concat(c, "]");

            return t(a.parentNode, "/".concat(y).concat(o))

        };

        return t(e, "")

    }

    function hr(e) {

        if (!e)

            return "";

        var t = e.getBoundingClientRect();

        return "".concat(t.top, "|").concat(t.right)

    }

    var Dr = {

        button: "b",

        checkbox: "c",

        email: "e",

        hidden: "h",

        number: "n",

        password: "p",

        radio: "r",

        select: "sl",

        submit: "s",

        text: "t",

        textarea: "ta"

    };

    function yr(e) {

        if (!e)

            return "";

        var t = e.closest("form");

        if (!t)

            return "nf";

        var a = Array.from(t.querySelectorAll("input, select, textarea, button"))

          , o = a.slice(0, 20).map(function(u) {

            return Dr[u.type] || "-"

        }).join("")

          , c = ["m:".concat(t.method || ""), "f:".concat(a.length), o].join("|");

        return c

    }

    function _r(e, t, a) {

        for (var o = "", c = 0, u = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {

            acceptNode: function(R) {

                return c > t || o.length > a ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT

            }

        }), g; (g = u.nextNode()) !== null && o.length < a; ) {

            if (g.nodeType === Node.ELEMENT_NODE) {

                var y = g;

                o += "".concat(yt(y.tagName.toLowerCase()));

                for (var f = 0; f < y.attributes.length; f++) {

                    var d = y.attributes[f];

                    o += "_".concat(yt(d.name, 2))

                }

                o += ">"

            } else

                g.nodeType === Node.TEXT_NODE && (o += "-t");

            var w = g.parentNode;

            for (c = 0; w !== e && w !== null; )

                c++,

                w = w.parentNode

        }

        return o.substring(0, a)

    }

    function br(e) {

        if (typeof e != "string")

            throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : D(e)));

        for (var t = 5381, a = 0; a < e.length; a++) {

            var o = e.charCodeAt(a);

            t = t * 33 ^ o

        }

        return t >>> 0

    }

    function xr(e, t) {

        var a;

        t.upgradeAttempts++;

        var o = gt();

        if (!(!o || !o.parentNode)) {

            var c = o == null ? void 0 : o.nonce;

            e._pState = t;

            var u = new URL(o.src)

              , g = document.createElement("script");

            u.searchParams.set("_upgrade", "true"),

            u.searchParams.set("_cb", String(Date.now())),

            g.async = !0,

            c && (g.nonce = c),

            g.setAttribute("crossorigin", "anonymous"),

            g.src = u.toString(),

            o == null || (a = o.parentNode) === null || a === void 0 || a.replaceChild(g, o)

        }

    }
continued huge...







