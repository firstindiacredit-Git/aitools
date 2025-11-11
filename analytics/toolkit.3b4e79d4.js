//# allFunctionsCalledOnLoad
try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}
      , t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {},
    e._sentryDebugIds[t] = "9d4a764c-ead5-4c5f-8188-b0e3d54a93fd",
    e._sentryDebugIdIdentifier = "sentry-dbid-9d4a764c-ead5-4c5f-8188-b0e3d54a93fd")
} catch (e) {}
("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
    id: "5530394"
};
(globalThis.webpackChunksemrush2 = globalThis.webpackChunksemrush2 || []).push([[5851], {
    1028: (e, t, o) => {
        o.d(t, {
            d: () => l
        });
        var n = o(2663);
        class r extends Error {
            constructor(e) {
                super(e),
                this.name = "GetFoldersApiError"
            }
        }
        const i = "project_selector/public-api"
          , s = new WeakSet;
        async function a(e, t) {
            if (function(e) {
                if (!e)
                    throw new r("No params provided");
                if (1 !== e.version)
                    throw new r("Only version 1 is supported")
            }(t),
            function(e) {
                if ("object" != typeof e || null === e)
                    throw new r("Folders API config is not an object")
            }(e),
            !e.enable)
                throw new r("Remote module is not activated");
            const o = await (0,
            n.loadRemote)(i);
            !function(e) {
                if (!e)
                    throw new r("No remote module provided");
                if ("object" != typeof e)
                    throw new r("Remote module is not an object");
                if (!("getApi"in e))
                    throw new r("Remote module has no getApi field");
                if ("function" != typeof e.getApi)
                    throw new r("Remote module getApi is not a function")
            }(o);
            const a = await o.getApi({
                version: t.version,
                config: e
            });
            return function(e) {
                if (!e)
                    throw new r("Remote module returned no API object");
                if ("object" != typeof e)
                    throw new r("Remote module returned non-object API");
                if (!("version"in e))
                    throw new r("Remote module returned API without version field");
                if ("number" != typeof e.version)
                    throw new r("Remote module returned API with non-number version")
            }(a),
            function(e) {
                if (1 !== e.version)
                    throw new r("Remote module returned API with wrong version")
            }(a),
            function(e) {
                if (s.has(e))
                    throw new r("Remote module returned the same API object, but it should be a new one");
                s.add(e)
            }(a),
            a
        }
        function l(e, t) {
            e.getFoldersApi = a.bind(null, t),
            function(e) {
                const t = Symbol.for("sm2.getFoldersApi.pending")
                  , o = window[t] || [];
                for (; o.length > 0; ) {
                    const {args: t, resolve: n, reject: r} = o.shift();
                    e.getFoldersApi(...t).then(n, r)
                }
            }(e)
        }
    }
    ,
    1043: (e, t, o) => {
        var n = o(9646)
          , r = o(1028)
          , i = o(8444);
        window.__sm2init_toolkit__ = e => {
            (0,
            n.s)(e.base),
            (0,
            i.l)(window.sm2, e.searchbarApiV1Config),
            (0,
            r.d)(window.sm2, e.foldersApiV1Config)
        }
    }
    ,
    2149: (e, t, o) => {
        var n = o(8170);
        Object.prototype.hasOwnProperty.call(n, "__proto__") && !Object.prototype.hasOwnProperty.call(t, "__proto__") && Object.defineProperty(t, "__proto__", {
            enumerable: !0,
            value: n.__proto__
        }),
        Object.keys(n).forEach((function(e) {
            "default" === e || Object.prototype.hasOwnProperty.call(t, e) || (t[e] = n[e])
        }
        ))
    }
    ,
    2337: (e, t, o) => {
        var n = new Error;
        e.exports = new Promise(( (e, t) => {
            if ("undefined" != typeof multi_invite)
                return e();
            o.l("sm2mfp://multi-invite-mf-V4/mf-manifest.json", (o => {
                if ("undefined" != typeof multi_invite)
                    return e();
                var r = o && ("load" === o.type ? "missing" : o.type)
                  , i = o && o.target && o.target.src;
                n.message = "Loading script failed.\n(" + r + ": " + i + ")",
                n.name = "ScriptExternalLoadError",
                n.type = r,
                n.request = i,
                t(n)
            }
            ), "multi_invite")
        }
        )).then(( () => multi_invite))
    }
    ,
    2579: (e, t, o) => {
        var n = o(6045)
          , r = o.n(n)
          , i = o(230)
          , s = o.n(i)
          , a = new (r())({
            id: "srf-icon-close",
            use: "srf-icon-close-usage",
            viewBox: "0 0 22 22",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" id="srf-icon-close"><path d="M11 1C5.5 1 1 5.5 1 11s4.5 10 10 10 10-4.5 10-10S16.5 1 11 1m0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8m2.5-12L11 9.5 8.5 7 7 8.5 9.5 11 7 13.5 8.5 15l2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5L15 8.5z" /></symbol>'
        });
        s().add(a)
    }
    ,
    3438: (e, t, o) => {
        o.r(t),
        o.d(t, {
            Component: () => U,
            cloneElement: () => u,
            createElement: () => a,
            createRef: () => R,
            default: () => z,
            h: () => a,
            options: () => r,
            render: () => I,
            rerender: () => m
        });
        var n = function() {}
          , r = {}
          , i = []
          , s = [];
        function a(e, t) {
            var o, a, l, c, p = s;
            for (c = arguments.length; c-- > 2; )
                i.push(arguments[c]);
            for (t && null != t.children && (i.length || i.push(t.children),
            delete t.children); i.length; )
                if ((a = i.pop()) && void 0 !== a.pop)
                    for (c = a.length; c--; )
                        i.push(a[c]);
                else
                    "boolean" == typeof a && (a = null),
                    (l = "function" != typeof e) && (null == a ? a = "" : "number" == typeof a ? a = String(a) : "string" != typeof a && (l = !1)),
                    l && o ? p[p.length - 1] += a : p === s ? p = [a] : p.push(a),
                    o = l;
            var u = new n;
            return u.nodeName = e,
            u.children = p,
            u.attributes = null == t ? void 0 : t,
            u.key = null == t ? void 0 : t.key,
            void 0 !== r.vnode && r.vnode(u),
            u
        }
        function l(e, t) {
            for (var o in t)
                e[o] = t[o];
            return e
        }
        function c(e, t) {
            e && ("function" == typeof e ? e(t) : e.current = t)
        }
        var p = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
        function u(e, t) {
            return a(e.nodeName, l(l({}, e.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children)
        }
        var d = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i
          , f = [];
        function h(e) {
            !e._dirty && (e._dirty = !0) && 1 == f.push(e) && (r.debounceRendering || p)(m)
        }
        function m() {
            for (var e; e = f.pop(); )
                e._dirty && O(e)
        }
        function v(e, t, o) {
            return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && w(e, t.nodeName) : o || e._componentConstructor === t.nodeName
        }
        function w(e, t) {
            return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase()
        }
        function b(e) {
            var t = l({}, e.attributes);
            t.children = e.children;
            var o = e.nodeName.defaultProps;
            if (void 0 !== o)
                for (var n in o)
                    void 0 === t[n] && (t[n] = o[n]);
            return t
        }
        function y(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }
        function g(e, t, o, n, r) {
            if ("className" === t && (t = "class"),
            "key" === t)
                ;
            else if ("ref" === t)
                c(o, null),
                c(n, e);
            else if ("class" !== t || r)
                if ("style" === t) {
                    if (n && "string" != typeof n && "string" != typeof o || (e.style.cssText = n || ""),
                    n && "object" == typeof n) {
                        if ("string" != typeof o)
                            for (var i in o)
                                i in n || (e.style[i] = "");
                        for (var i in n)
                            e.style[i] = "number" == typeof n[i] && !1 === d.test(i) ? n[i] + "px" : n[i]
                    }
                } else if ("dangerouslySetInnerHTML" === t)
                    n && (e.innerHTML = n.__html || "");
                else if ("o" == t[0] && "n" == t[1]) {
                    var s = t !== (t = t.replace(/Capture$/, ""));
                    t = t.toLowerCase().substring(2),
                    n ? o || e.addEventListener(t, _, s) : e.removeEventListener(t, _, s),
                    (e._listeners || (e._listeners = {}))[t] = n
                } else if ("list" !== t && "type" !== t && !r && t in e) {
                    try {
                        e[t] = null == n ? "" : n
                    } catch (e) {}
                    null != n && !1 !== n || "spellcheck" == t || e.removeAttribute(t)
                } else {
                    var a = r && t !== (t = t.replace(/^xlink:?/, ""));
                    null == n || !1 === n ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof n && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), n) : e.setAttribute(t, n))
                }
            else
                e.className = n || ""
        }
        function _(e) {
            return this._listeners[e.type](r.event && r.event(e) || e)
        }
        var C = []
          , k = 0
          , P = !1
          , S = !1;
        function A() {
            for (var e; e = C.shift(); )
                r.afterMount && r.afterMount(e),
                e.componentDidMount && e.componentDidMount()
        }
        function x(e, t, o, n, r, i) {
            k++ || (P = null != r && void 0 !== r.ownerSVGElement,
            S = null != e && !("__preactattr_"in e));
            var s = j(e, t, o, n, i);
            return r && s.parentNode !== r && r.appendChild(s),
            --k || (S = !1,
            i || A()),
            s
        }
        function j(e, t, o, n, r) {
            var i = e
              , s = P;
            if (null != t && "boolean" != typeof t || (t = ""),
            "string" == typeof t || "number" == typeof t)
                return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t),
                e && (e.parentNode && e.parentNode.replaceChild(i, e),
                E(e, !0))),
                i.__preactattr_ = !0,
                i;
            var a, l, c = t.nodeName;
            if ("function" == typeof c)
                return function(e, t, o, n) {
                    var r = e && e._component
                      , i = r
                      , s = e
                      , a = r && e._componentConstructor === t.nodeName
                      , l = a
                      , c = b(t);
                    for (; r && !l && (r = r._parentComponent); )
                        l = r.constructor === t.nodeName;
                    r && l && (!n || r._component) ? (T(r, c, 3, o, n),
                    e = r.base) : (i && !a && (B(i),
                    e = s = null),
                    r = D(t.nodeName, c, o),
                    e && !r.nextBase && (r.nextBase = e,
                    s = null),
                    T(r, c, 1, o, n),
                    e = r.base,
                    s && e !== s && (s._component = null,
                    E(s, !1)));
                    return e
                }(e, t, o, n);
            if (P = "svg" === c || "foreignObject" !== c && P,
            c = String(c),
            (!e || !w(e, c)) && (a = c,
            (l = P ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a)).normalizedNodeName = a,
            i = l,
            e)) {
                for (; e.firstChild; )
                    i.appendChild(e.firstChild);
                e.parentNode && e.parentNode.replaceChild(i, e),
                E(e, !0)
            }
            var p = i.firstChild
              , u = i.__preactattr_
              , d = t.children;
            if (null == u) {
                u = i.__preactattr_ = {};
                for (var f = i.attributes, h = f.length; h--; )
                    u[f[h].name] = f[h].value
            }
            return !S && d && 1 === d.length && "string" == typeof d[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != d[0] && (p.nodeValue = d[0]) : (d && d.length || null != p) && function(e, t, o, n, r) {
                var i, s, a, l, c, p = e.childNodes, u = [], d = {}, f = 0, h = 0, m = p.length, w = 0, b = t ? t.length : 0;
                if (0 !== m)
                    for (var g = 0; g < m; g++) {
                        var _ = p[g]
                          , C = _.__preactattr_;
                        null != (k = b && C ? _._component ? _._component.__key : C.key : null) ? (f++,
                        d[k] = _) : (C || (void 0 !== _.splitText ? !r || _.nodeValue.trim() : r)) && (u[w++] = _)
                    }
                if (0 !== b)
                    for (g = 0; g < b; g++) {
                        var k;
                        if (c = null,
                        null != (k = (l = t[g]).key))
                            f && void 0 !== d[k] && (c = d[k],
                            d[k] = void 0,
                            f--);
                        else if (h < w)
                            for (i = h; i < w; i++)
                                if (void 0 !== u[i] && v(s = u[i], l, r)) {
                                    c = s,
                                    u[i] = void 0,
                                    i === w - 1 && w--,
                                    i === h && h++;
                                    break
                                }
                        c = j(c, l, o, n),
                        a = p[g],
                        c && c !== e && c !== a && (null == a ? e.appendChild(c) : c === a.nextSibling ? y(a) : e.insertBefore(c, a))
                    }
                if (f)
                    for (var g in d)
                        void 0 !== d[g] && E(d[g], !1);
                for (; h <= w; )
                    void 0 !== (c = u[w--]) && E(c, !1)
            }(i, d, o, n, S || null != u.dangerouslySetInnerHTML),
            function(e, t, o) {
                var n;
                for (n in o)
                    t && null != t[n] || null == o[n] || g(e, n, o[n], o[n] = void 0, P);
                for (n in t)
                    "children" === n || "innerHTML" === n || n in o && t[n] === ("value" === n || "checked" === n ? e[n] : o[n]) || g(e, n, o[n], o[n] = t[n], P)
            }(i, t.attributes, u),
            P = s,
            i
        }
        function E(e, t) {
            var o = e._component;
            o ? B(o) : (null != e.__preactattr_ && c(e.__preactattr_.ref, null),
            !1 !== t && null != e.__preactattr_ || y(e),
            M(e))
        }
        function M(e) {
            for (e = e.lastChild; e; ) {
                var t = e.previousSibling;
                E(e, !0),
                e = t
            }
        }
        var N = [];
        function D(e, t, o) {
            var n, r = N.length;
            for (e.prototype && e.prototype.render ? (n = new e(t,o),
            U.call(n, t, o)) : ((n = new U(t,o)).constructor = e,
            n.render = L); r--; )
                if (N[r].constructor === e)
                    return n.nextBase = N[r].nextBase,
                    N.splice(r, 1),
                    n;
            return n
        }
        function L(e, t, o) {
            return this.constructor(e, o)
        }
        function T(e, t, o, n, i) {
            e._disable || (e._disable = !0,
            e.__ref = t.ref,
            e.__key = t.key,
            delete t.ref,
            delete t.key,
            void 0 === e.constructor.getDerivedStateFromProps && (!e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, n)),
            n && n !== e.context && (e.prevContext || (e.prevContext = e.context),
            e.context = n),
            e.prevProps || (e.prevProps = e.props),
            e.props = t,
            e._disable = !1,
            0 !== o && (1 !== o && !1 === r.syncComponentUpdates && e.base ? h(e) : O(e, 1, i)),
            c(e.__ref, e))
        }
        function O(e, t, o, n) {
            if (!e._disable) {
                var i, s, a, c = e.props, p = e.state, u = e.context, d = e.prevProps || c, f = e.prevState || p, h = e.prevContext || u, m = e.base, v = e.nextBase, w = m || v, y = e._component, g = !1, _ = h;
                if (e.constructor.getDerivedStateFromProps && (p = l(l({}, p), e.constructor.getDerivedStateFromProps(c, p)),
                e.state = p),
                m && (e.props = d,
                e.state = f,
                e.context = h,
                2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(c, p, u) ? g = !0 : e.componentWillUpdate && e.componentWillUpdate(c, p, u),
                e.props = c,
                e.state = p,
                e.context = u),
                e.prevProps = e.prevState = e.prevContext = e.nextBase = null,
                e._dirty = !1,
                !g) {
                    i = e.render(c, p, u),
                    e.getChildContext && (u = l(l({}, u), e.getChildContext())),
                    m && e.getSnapshotBeforeUpdate && (_ = e.getSnapshotBeforeUpdate(d, f));
                    var P, S, j = i && i.nodeName;
                    if ("function" == typeof j) {
                        var M = b(i);
                        (s = y) && s.constructor === j && M.key == s.__key ? T(s, M, 1, u, !1) : (P = s,
                        e._component = s = D(j, M, u),
                        s.nextBase = s.nextBase || v,
                        s._parentComponent = e,
                        T(s, M, 0, u, !1),
                        O(s, 1, o, !0)),
                        S = s.base
                    } else
                        a = w,
                        (P = y) && (a = e._component = null),
                        (w || 1 === t) && (a && (a._component = null),
                        S = x(a, i, u, o || !m, w && w.parentNode, !0));
                    if (w && S !== w && s !== y) {
                        var N = w.parentNode;
                        N && S !== N && (N.replaceChild(S, w),
                        P || (w._component = null,
                        E(w, !1)))
                    }
                    if (P && B(P),
                    e.base = S,
                    S && !n) {
                        for (var L = e, U = e; U = U._parentComponent; )
                            (L = U).base = S;
                        S._component = L,
                        S._componentConstructor = L.constructor
                    }
                }
                for (!m || o ? C.push(e) : g || (e.componentDidUpdate && e.componentDidUpdate(d, f, _),
                r.afterUpdate && r.afterUpdate(e)); e._renderCallbacks.length; )
                    e._renderCallbacks.pop().call(e);
                k || n || A()
            }
        }
        function B(e) {
            r.beforeUnmount && r.beforeUnmount(e);
            var t = e.base;
            e._disable = !0,
            e.componentWillUnmount && e.componentWillUnmount(),
            e.base = null;
            var o = e._component;
            o ? B(o) : t && (null != t.__preactattr_ && c(t.__preactattr_.ref, null),
            e.nextBase = t,
            y(t),
            N.push(e),
            M(t)),
            c(e.__ref, null)
        }
        function U(e, t) {
            this._dirty = !0,
            this.context = t,
            this.props = e,
            this.state = this.state || {},
            this._renderCallbacks = []
        }
        function I(e, t, o) {
            return x(o, e, {}, !1, t, !1)
        }
        function R() {
            return {}
        }
        l(U.prototype, {
            setState: function(e, t) {
                this.prevState || (this.prevState = this.state),
                this.state = l(l({}, this.state), "function" == typeof e ? e(this.state, this.props) : e),
                t && this._renderCallbacks.push(t),
                h(this)
            },
            forceUpdate: function(e) {
                e && this._renderCallbacks.push(e),
                O(this, 2)
            },
            render: function() {}
        });
        const z = {
            h: a,
            createElement: a,
            cloneElement: u,
            createRef: R,
            Component: U,
            render: I,
            rerender: m,
            options: r
        }
    }
    ,
    3882: (e, t, o) => {
        var n = new Error;
        e.exports = new Promise(( (e, t) => {
            if ("undefined" != typeof trial_limit_popup)
                return e();
            o.l("sm2mfp://trial-limit-popup-V1/mf-manifest.json", (o => {
                if ("undefined" != typeof trial_limit_popup)
                    return e();
                var r = o && ("load" === o.type ? "missing" : o.type)
                  , i = o && o.target && o.target.src;
                n.message = "Loading script failed.\n(" + r + ": " + i + ")",
                n.name = "ScriptExternalLoadError",
                n.type = r,
                n.request = i,
                t(n)
            }
            ), "trial_limit_popup")
        }
        )).then(( () => trial_limit_popup))
    }
    ,
    6071: (e, t, o) => {
        o.d(t, {
            z: () => c
        });
        var n = o(3438)
          , r = o(5923)
          , i = o(1633)
          , s = o.n(i)
          , a = (o(2579),
        o(8657))
          , l = o(9752);
        class c extends n.Component {
            componentDidMount() {
                document.body && (document.body.style.overflow = "hidden"),
                window.document.addEventListener("keydown", this.onKeyDownDocument.bind(this));
                const {onMount: e} = this.props;
                e && e()
            }
            componentWillUnmount() {
                document.body && (document.body.style.overflow = ""),
                window.document.removeEventListener("keydown", this.onKeyDownDocument.bind(this))
            }
            onKeyDownDocument(e) {
                this.props.disableCloseByEsc || e.keyCode === l.ok && this.props.onClickClose && this.props.onClickClose(e)
            }
            onClickOverlay(e) {
                this.props.disableCloseByOverlay || e.target === e.currentTarget && this.props.onClickClose && this.props.onClickClose(e)
            }
            render() {
                return (0,
                n.h)("div", null, (0,
                n.h)("div", {
                    className: s()(r.A.overlay, this.props.classNameOverlay),
                    onClick: this.onClickOverlay.bind(this)
                }, (0,
                n.h)("div", {
                    className: s()(r.A.popup, this.props.className)
                }, this.props.onClickClose && (0,
                n.h)(a.$, {
                    className: s()(r.A.closeButton, this.props.classNameCloseButton),
                    "data-test": this.props.closeButtonDataTest || "close-popup",
                    onClick: this.props.onClickClose
                }, (0,
                n.h)("svg", {
                    className: "srf-icon -m"
                }, (0,
                n.h)("use", {
                    href: "#srf-icon-close"
                }))), (0,
                n.h)("div", null, this.props.children))))
            }
        }
    }
    ,
    6730: (e, t, o) => {
        var n = new Error;
        e.exports = new Promise(( (e, t) => {
            if ("undefined" != typeof paysol_widgets)
                return e();
            o.l("sm2mfp://paysol-widgets-V3/mf-manifest.json", (o => {
                if ("undefined" != typeof paysol_widgets)
                    return e();
                var r = o && ("load" === o.type ? "missing" : o.type)
                  , i = o && o.target && o.target.src;
                n.message = "Loading script failed.\n(" + r + ": " + i + ")",
                n.name = "ScriptExternalLoadError",
                n.type = r,
                n.request = i,
                t(n)
            }
            ), "paysol_widgets")
        }
        )).then(( () => paysol_widgets))
    }
    ,
    7375: (e, t, o) => {
        let n;
        o.d(t, {
            S: () => r,
            U: () => i
        });
        const r = e => n = e
          , i = () => {
            if (!n)
                throw new Error('"cookies" is not initialized. Call "setCookies" first.');
            return n
        }
    }
    ,
    8444: (e, t, o) => {
        o.d(t, {
            l: () => l
        });
        var n = o(2663);
        class r extends Error {
            constructor(e) {
                super(e),
                this.name = "GetSearchbarApiError"
            }
        }
        const i = "search-bar-V1/client-api"
          , s = new WeakSet;
        async function a(e, t) {
            !function(e) {
                if (!e)
                    throw new r("No params provided");
                if (1 !== e.version)
                    throw new r("Only version 1 is supported")
            }(t),
            function(e) {
                if ("object" != typeof e || null === e)
                    throw new r("Searchbar API config is not an object")
            }(e);
            const o = await (0,
            n.loadRemote)(i);
            !function(e) {
                if (!e)
                    throw new r("No remote module provided");
                if ("object" != typeof e)
                    throw new r("Remote module is not an object");
                if (!("getApi"in e))
                    throw new r("Remote module has no getApi field");
                if ("function" != typeof e.getApi)
                    throw new r("Remote module getApi is not a function")
            }(o);
            const a = await o.getApi({
                version: t.version,
                config: e
            });
            return function(e) {
                if (!e)
                    throw new r("Remote module returned no API object");
                if ("object" != typeof e)
                    throw new r("Remote module returned non-object API");
                if (!("version"in e))
                    throw new r("Remote module returned API without version field");
                if ("number" != typeof e.version)
                    throw new r("Remote module returned API with non-number version")
            }(a),
            function(e) {
                if (1 !== e.version)
                    throw new r("Remote module returned API with wrong version")
            }(a),
            function(e) {
                if (s.has(e))
                    throw new r("Remote module returned the same API object, but it should be a new one");
                s.add(e)
            }(a),
            a
        }
        function l(e, t) {
            e.getSearchbarApi = a.bind(null, t),
            function(e) {
                const t = Symbol.for("sm2.getSearchbarApi.pending")
                  , o = window[t] || [];
                for (; o.length > 0; ) {
                    const {args: t, resolve: n, reject: r} = o.shift();
                    e.getSearchbarApi(...t).then(n, r)
                }
            }(e)
        }
    }
    ,
    8657: (e, t, o) => {
        o.d(t, {
            $: () => s
        });
        var n = o(3438)
          , r = o(9752);
        function i() {
            return i = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var n in o)
                        ({}).hasOwnProperty.call(o, n) && (e[n] = o[n])
                }
                return e
            }
            ,
            i.apply(null, arguments)
        }
        class s extends n.Component {
            onKeyPress(e) {
                e.charCode !== r.Fm && e.charCode !== r.t6 || this.props.onKeyPress && this.props.onKeyPress(e)
            }
            render() {
                return (0,
                n.h)("button", i({
                    type: "button"
                }, this.props, {
                    onKeyPress: this.onKeyPress.bind(this)
                }))
            }
        }
    }
    ,
    9479: (e, t, o) => {
        var n = new Error;
        e.exports = new Promise(( (e, t) => {
            if ("undefined" != typeof sharing)
                return e();
            o.l("sm2mfp://sharing-mf-V6/mf-manifest.json", (o => {
                if ("undefined" != typeof sharing)
                    return e();
                var r = o && ("load" === o.type ? "missing" : o.type)
                  , i = o && o.target && o.target.src;
                n.message = "Loading script failed.\n(" + r + ": " + i + ")",
                n.name = "ScriptExternalLoadError",
                n.type = r,
                n.request = i,
                t(n)
            }
            ), "sharing")
        }
        )).then(( () => sharing))
    }
    ,
    9646: (e, t, o) => {
        o.d(t, {
            s: () => pe
        });
        o(1912),
        o(381),
        o(1918);
        var n = o(3438)
          , r = o(9327)
          , i = o(6045)
          , s = o.n(i)
          , a = o(230)
          , l = o.n(a)
          , c = new (s())({
            id: "srf-icon-dropdown",
            use: "srf-icon-dropdown-usage",
            viewBox: "0 0 16 16",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="srf-icon-dropdown"><path fill-rule="evenodd" d="M3.293 6.293a1 1 0 0 1 1.414 0L8 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414" clip-rule="evenodd" /></symbol>'
        });
        l().add(c);
        var p = new (s())({
            id: "srf-icon-dropup",
            use: "srf-icon-dropup-usage",
            viewBox: "0 0 16 16",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="srf-icon-dropup"><path d="M2.8 12 8 6.8l5.2 5.2 1.8-2-7-7-7 7z" /></symbol>'
        });
        l().add(p);
        o(2579);
        var u = new (s())({
            id: "srf-icon-close3",
            use: "srf-icon-close3-usage",
            viewBox: "0 0 16 16",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="srf-icon-close3"><path d="M3.323 3.323c-.43.43-.43 1.128 0 1.559L6.44 8l-3.118 3.118a1.102 1.102 0 1 0 1.559 1.56L8 9.558l3.118 3.118a1.102 1.102 0 0 0 1.56-1.559L9.558 8l3.118-3.118a1.102 1.102 0 0 0-1.559-1.56L8 6.442 4.882 3.323a1.1 1.1 0 0 0-1.56 0Z" /></symbol>'
        });
        l().add(u);
        var d = new (s())({
            id: "srf-icon-search",
            use: "srf-icon-search-usage",
            viewBox: "0 0 16 16",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="srf-icon-search"><path d="m14.704 13.285-4.537-4.537a4.997 4.997 0 1 0-1.419 1.42l4.537 4.536a1 1 0 0 0 1.638-.325 1 1 0 0 0-.219-1.094M3.002 6a2.998 2.998 0 1 1 5.996 0 2.998 2.998 0 0 1-5.996 0" /></symbol>'
        });
        l().add(d);
        var f = o(7052)
          , h = o(6071)
          , m = o(2999)
          , v = o(7353)
          , w = o(1633)
          , b = o.n(w)
          , y = o(7375);
        var g = new (s())({
            id: "srf-confirm-email-image",
            use: "srf-confirm-email-image-usage",
            viewBox: "0 0 195 138",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 195 138" id="srf-confirm-email-image"><path fill="#CBD1D3" fill-rule="evenodd" d="m83.119 21.894-1.168 3.838-3.837 1.157 3.826 1.18 1.168 3.838 1.168-3.838 3.838-1.169-3.827-1.168zm90.496 5.64 2.143 7.04 7.037 2.123-7.018 2.162-2.142 7.04-2.143-7.04-7.057-2.123 7.037-2.163zm-2.432 29.43.935-3.07.934 3.07 3.062.935-3.07.935-.935 3.07-.934-3.07-3.061-.944zM7.951 38.732l1.168-3.838 1.168 3.838 3.826 1.168-3.837 1.169-1.168 3.837L7.94 41.07l-3.826-1.18z" clip-rule="evenodd" /><path fill="#EEF0F1" fill-rule="evenodd" d="M72.479 87.479c15.035-15.036 17.093-37.355 4.596-49.851s-34.816-10.44-49.851 4.596-17.093 37.354-4.596 49.85c12.496 12.498 34.816 10.44 49.85-4.595" clip-rule="evenodd" /><path fill="#CBD1D3" fill-rule="evenodd" d="M22.628 92.074c12.496 12.497 34.816 10.439 49.85-4.596 15.036-15.035 17.094-37.354 4.597-49.851s-34.816-10.439-49.851 4.596-17.093 37.355-4.596 49.851M75.66 39.041c11.652 11.652 9.71 32.717-4.597 47.023-14.305 14.306-35.37 16.248-47.022 4.596s-9.71-32.717 4.596-47.023 35.37-16.248 47.023-4.596" clip-rule="evenodd" /><rect width="9" height="9" x="85.415" y="98.778" fill="#fff" stroke="#CBD1D3" stroke-width="2" rx="4.5" transform="rotate(-45 85.415 98.778)" /><rect width="11" height="11" x="84" y="98.778" fill="#fff" rx="5.5" transform="rotate(-45 84 98.778)" /><path fill="#CBD1D3" fill-rule="evenodd" d="M95.668 94.889a5.5 5.5 0 1 0-7.779 7.778 5.5 5.5 0 0 0 7.779-7.778m-6.365 6.364a3.5 3.5 0 1 1 4.951-4.95 3.5 3.5 0 0 1-4.95 4.95" clip-rule="evenodd" /><path fill="#fff" fill-rule="evenodd" d="M79.89 102.889c2.147-2.148 5.02-2.758 6.416-1.361l2.723 2.722c1.396 1.396.786 4.269-1.361 6.417s-5.021 2.757-6.418 1.361l-2.722-2.722c-1.396-1.396-.787-4.269 1.361-6.417" clip-rule="evenodd" /><path fill="#CBD1D3" fill-rule="evenodd" d="M86.306 101.528c-1.396-1.397-4.269-.787-6.417 1.361s-2.757 5.021-1.36 6.417l2.722 2.722c1.396 1.396 4.269.787 6.416-1.361s2.758-5.021 1.362-6.417zm-6.364 6.363c-.455-.455-.1-2.126 1.362-3.588s3.133-1.817 3.588-1.361l2.723 2.722c.455.455.1 2.127-1.362 3.589s-3.133 1.816-3.588 1.361z" clip-rule="evenodd" /><path fill="#EEF0F1" fill-rule="evenodd" d="M88.256 104.255c6.053-6.053 4.628-17.291-3.182-25.102-7.81-7.81-19.05-9.235-25.103-3.182s-4.628 17.292 3.182 25.102c7.81 7.811 19.05 9.236 25.103 3.182" clip-rule="evenodd" /><path fill="#CBD1D3" fill-rule="evenodd" d="M63.154 101.073c7.81 7.811 19.049 9.235 25.102 3.182s4.628-17.291-3.182-25.102c-7.81-7.81-19.05-9.235-25.102-3.182-6.053 6.053-4.629 17.292 3.182 25.102M83.66 80.567c7.097 7.097 8.364 17.092 3.182 22.274s-15.177 3.915-22.274-3.182-8.364-17.092-3.182-22.274 15.177-3.915 22.274 3.182" clip-rule="evenodd" /><path fill="#fff" fill-rule="evenodd" stroke="#CBD1D3" stroke-width="2" d="M70.548 85.548c8.982-8.983 10.248-22.279 2.828-29.699s-20.716-6.154-29.699 2.829c-8.981 8.981-10.248 22.278-2.828 29.698s20.717 6.154 29.699-2.829Z" clip-rule="evenodd" /><path fill="#CBD1D3" fill-rule="evenodd" d="M64.242 79.242a2 2 0 1 0-2.828-2.828 2 2 0 0 0 2.828 2.828" clip-rule="evenodd" /><g fill="#CBD1D3" fill-rule="evenodd" clip-rule="evenodd"><path d="M46.95 82.849a7 7 0 1 0 9.899-9.9 7 7 0 0 0-9.9 9.9m8.485-8.485a5 5 0 1 1-7.071 7.07 5 5 0 0 1 7.07-7.07" /><path d="M57.07 81.07c1.172-1.17 1.014-3.228-.353-4.595s-3.424-1.525-4.596-.354c-1.172 1.172-1.013 3.23.354 4.596s3.424 1.525 4.596.354" /></g><g fill="#CBD1D3" fill-rule="evenodd" clip-rule="evenodd"><path d="M56.95 71.849a7 7 0 1 0 9.9-9.9 7 7 0 0 0-9.9 9.9m8.485-8.486a5 5 0 1 1-7.07 7.071 5 5 0 0 1 7.07-7.07" /><path d="M64.071 72.07c1.172-1.17 1.014-3.229-.353-4.595-1.367-1.367-3.425-1.526-4.597-.354-1.171 1.172-1.013 3.23.354 4.596s3.425 1.525 4.596.354" /></g><path fill="#EEF0F1" fill-rule="evenodd" d="M23 73.084c3.552-2.163 8.32-4.312 14.013-5.084-.564 5.588-.217 10.974.987 16-7.493-2.407-12.259-7.183-15-10.916" clip-rule="evenodd" /><path fill="#CBD1D3" fill-rule="evenodd" d="M36.89 68.198c-5.693.771-10.46 2.92-14.013 5.083 2.742 3.733 7.507 8.51 15 10.917-1.204-5.027-1.551-10.413-.987-16m-2.19 2.414a50.2 50.2 0 0 0 .511 10.398c-3.717-1.736-6.806-4.199-9.32-7.144 2.767-1.468 5.71-2.584 8.808-3.254" clip-rule="evenodd" /><path fill="#EEF0F1" fill-rule="evenodd" d="M54 52.076c.719-5.315 2.736-9.764 4.766-13.076C62.268 41.556 66.75 46.003 69 53c-4.792-1.138-9.863-1.438-15-.924" clip-rule="evenodd" /><path fill="#CBD1D3" fill-rule="evenodd" d="M58.704 39.173c-2.03 3.312-4.047 7.761-4.765 13.076 5.136-.514 10.208-.214 15 .924-2.25-6.997-6.732-11.444-10.235-14m.585 3.011c2.64 2.266 4.858 5.03 6.445 8.335a47.7 47.7 0 0 0-9.375-.454c.616-2.766 1.619-5.399 2.93-7.881M37 94.485l9.577-7.394 1.03 1.03-9.577 7.393zM43.37 96.026 48.657 90l1.045 1.045-5.288 6.025zM71.586 63.364l7.192-8.365.829.829-7.193 8.364zM74.37 66.026 79.657 60l1.045 1.045-5.288 6.026z" clip-rule="evenodd" /><path fill="#fff" fill-rule="evenodd" d="M30.336 54.367a2 2 0 0 1-2.32-3.26c.022-.014.463-.485 1.081-1.206a2 2 0 0 1 3.038 2.602c-.877 1.024-1.395 1.577-1.799 1.864M22.819 72.605a2 2 0 0 1-3.965-.532c.848-6.315 2.375-11.35 4.618-15.113a2 2 0 1 1 3.435 2.048c-1.932 3.242-3.307 7.776-4.088 13.596M61.505 92.885c-2.047 0-3.5 1.136-3.5 2.334v4.333c0 1.198 1.453 2.333 3.5 2.333s3.5-1.135 3.5-2.333V95.22c0-1.198-1.452-2.334-3.5-2.334" clip-rule="evenodd" /><path fill="#CBD1D3" fill-rule="evenodd" d="M67.005 95.219c0-2.442-2.462-4.334-5.5-4.334s-5.5 1.892-5.5 4.334v4.333c0 2.442 2.463 4.333 5.5 4.333s5.5-1.891 5.5-4.333zm-9 0c0-1.198 1.453-2.334 3.5-2.334s3.5 1.136 3.5 2.334v4.333c0 1.198-1.452 2.333-3.5 2.333s-3.5-1.135-3.5-2.333z" clip-rule="evenodd" /><g fill-rule="evenodd" clip-rule="evenodd"><path fill="#EEF0F1" d="M163.901 97.128V50.737a1.85 1.85 0 0 0-1.854-1.854H87.819a1.85 1.85 0 0 0-1.854 1.854v46.391a1.85 1.85 0 0 0 1.853 1.854h74.229a1.853 1.853 0 0 0 1.854-1.854" /><path fill="#CBD1D3" d="M162.047 98.982a1.853 1.853 0 0 0 1.854-1.854V50.737a1.85 1.85 0 0 0-1.854-1.854H87.819a1.85 1.85 0 0 0-1.854 1.854v46.391a1.85 1.85 0 0 0 1.853 1.854zM87.965 50.883H161.9v46.099H87.964z" /><path fill="#EEF0F1" d="m165.077 97.234-.428-46.928a1.91 1.91 0 0 0-1.095-1.708 1.86 1.86 0 0 0-1.995.24l-31.121 25.847c-.45.376-.694.946-.657 1.538a1.9 1.9 0 0 0 .849 1.464l31.549 21.083a1.88 1.88 0 0 0 1.924.108 1.83 1.83 0 0 0 .974-1.644" /><path fill="#CBD1D3" d="M164.103 98.878a1.83 1.83 0 0 0 .974-1.644l-.428-46.928a1.91 1.91 0 0 0-1.095-1.708 1.86 1.86 0 0 0-1.995.24l-31.121 25.847c-.45.376-.694.946-.657 1.538a1.9 1.9 0 0 0 .849 1.464l31.549 21.083a1.88 1.88 0 0 0 1.924.108M131.86 76.104l30.791-25.574.423 46.433z" /><path fill="#EEF0F1" d="M121.324 76.223a1.85 1.85 0 0 0-.657-1.538L89.545 48.837a1.86 1.86 0 0 0-1.995-.24c-.66.315-1.088.981-1.095 1.708l-.428 46.929A1.84 1.84 0 0 0 87 98.882c.606.319 1.345.28 1.924-.108l31.55-21.084c.497-.332.812-.876.85-1.468" /><path fill="#CBD1D3" d="M120.474 77.69c.497-.332.812-.876.85-1.468a1.85 1.85 0 0 0-.657-1.537L89.545 48.837a1.86 1.86 0 0 0-1.995-.24c-.66.315-1.088.981-1.095 1.708l-.428 46.929A1.84 1.84 0 0 0 87 98.882c.606.319 1.345.28 1.924-.108zm-32.02-27.16 30.792 25.575-31.216 20.86z" /><path fill="#fff" d="M164.321 49.967a1.85 1.85 0 0 0-1.737-1.218l-73.97.002a1.848 1.848 0 0 0-1.308 3.152q.059.059.122.113l36.986 30.821a1.85 1.85 0 0 0 2.368 0l36.985-30.821a1.85 1.85 0 0 0 .554-2.049" /><path fill="#CBD1D3" d="M163.767 52.016a1.849 1.849 0 0 0-1.183-3.267l-73.97.002c-.78 0-1.473.487-1.738 1.217-.246.68-.074 1.432.552 2.048l36.986 30.821a1.85 1.85 0 0 0 2.368 0zM89.034 50.75l73.129-.002-36.565 30.471z" /><path fill="#fff" d="M100 28h52a2 2 0 0 1 2 2v29.839a2 2 0 0 1-.736 1.55l-26 21.21a2 2 0 0 1-2.528 0l-26-21.21a2 2 0 0 1-.736-1.55V30a2 2 0 0 1 2-2" /><path fill="#CBD1D3" d="M152 28h-52a2 2 0 0 0-2 2v29.839a2 2 0 0 0 .736 1.55l26 21.21a2 2 0 0 0 2.528 0l26-21.21a2 2 0 0 0 .736-1.55V30a2 2 0 0 0-2-2m-52 31.839V30h52v29.839l-26 21.21z" /></g><path fill="#CBD1D3" fill-rule="evenodd" d="M110 44h24a1 1 0 1 1 0 2h-24a1 1 0 0 1 0-2m0 6h16a1 1 0 1 1 0 2h-16a1 1 0 0 1 0-2m33 7a1 1 0 0 0-1-1h-32a1 1 0 0 0 0 2h32a1 1 0 0 0 1-1" clip-rule="evenodd" /><path fill="#fff" fill-rule="evenodd" d="M80.074 76.427c0 1.94 1.536 3.5 3.416 3.5h2.167c1.88 0 3.416-1.56 3.416-3.5s-1.536-3.5-3.416-3.5H83.49c-1.88 0-3.416 1.56-3.416 3.5" clip-rule="evenodd" /><path fill="#CBD1D3" fill-rule="evenodd" d="M83.49 70.927c-2.991 0-5.416 2.462-5.416 5.5s2.425 5.5 5.416 5.5h2.167c2.991 0 5.416-2.463 5.416-5.5s-2.425-5.5-5.416-5.5zm0 9c-1.88 0-3.416-1.56-3.416-3.5s1.536-3.5 3.416-3.5h2.167c1.88 0 3.416 1.56 3.416 3.5s-1.536 3.5-3.416 3.5zM94.671 118.206a1 1 0 0 0-1.414 1.415l1.242 1.242a1 1 0 1 0 1.415-1.414zm4.172 4.172a1 1 0 1 0-1.415 1.414l3.9 3.9a1 1 0 0 0 1.414-1.415zm2.949-7.849a1 1 0 0 1 1.415 0l7.384 7.385a.999.999 0 1 1-1.414 1.414l-7.385-7.385a1 1 0 0 1 0-1.414m4.929-8.272a.999.999 0 1 0-1.414 1.414l4.142 4.142a.999.999 0 1 0 1.414-1.414z" clip-rule="evenodd" /></symbol>'
        });
        l().add(g);
        var _ = o(95);
        const C = e => (0,
        n.h)(h.z, {
            onClickClose: t => {
                (0,
                y.U)().remove("error_popup"),
                e.onClickClose && e.onClickClose(t)
            }
            ,
            onMount: e.onMount,
            className: _.A.popup
        }, (0,
        n.h)("h1", {
            className: _.A.title
        }, e.title), (0,
        n.h)("div", null, e.paragraphs.map(( (e, t) => (0,
        n.h)("p", {
            key: t,
            className: _.A.paragraph,
            dangerouslySetInnerHTML: e.html ? {
                __html: e.text
            } : void 0,
            onClick: e.onClick
        }, !e.html && e.text)))));
        var k = o(9588)
          , P = o(8825);
        const S = () => (0,
        n.h)(h.z, null, (0,
        n.h)("div", {
            className: P.A.body
        }, (0,
        n.h)(k.Spin, {
            size: "xxl"
        })));
        function A() {
            return A = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var n in o)
                        ({}).hasOwnProperty.call(o, n) && (e[n] = o[n])
                }
                return e
            }
            ,
            A.apply(null, arguments)
        }
        function x(e, t, o) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var o = e[Symbol.toPrimitive];
                    if (void 0 !== o) {
                        var n = o.call(e, t || "default");
                        if ("object" != typeof n)
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o,
            e
        }
        class j extends n.Component {
            constructor(e) {
                super(),
                x(this, "_promise", void 0),
                this.props = e,
                this.state = {
                    isLoading: !0,
                    popup: null,
                    trialUsed: !1
                }
            }
            async componentDidMount() {
                if (!this._promise) {
                    const {FreePlanUpgradeInner: e} = await this._getPopup();
                    e && (await this._checkTrial(),
                    this.setState({
                        popup: e,
                        isLoading: !1
                    }))
                }
            }
            async _getPopup() {
                return this._promise || (this._promise = o.e(4551).then(o.bind(o, 5926))),
                await this._promise
            }
            async _checkTrial() {
                try {
                    const e = await fetch("/signup/i/trial_used/");
                    if (!e.ok)
                        return void this.setState({
                            trialUsed: !1
                        });
                    const t = await e.json();
                    this.setState({
                        trialUsed: null == t ? void 0 : t.trial_used
                    })
                } catch (e) {
                    this.setState({
                        trialUsed: !1
                    })
                }
            }
            render() {
                const {isLoading: e, popup: t, trialUsed: o} = this.state
                  , r = t;
                return e && !t ? (0,
                n.h)(S, null) : (0,
                n.h)(r, A({
                    trialUsed: o
                }, this.props))
            }
        }
        var E = o(7829);
        const M = {
            loading: S,
            need_confirm_email: e => {
                const t = e.button;
                var o, r;
                return o = "show",
                r = "popup",
                window.ga("send", {
                    hitType: "event",
                    eventCategory: "confirm_email_popup",
                    eventAction: o,
                    eventLabel: r
                }),
                (0,
                n.h)(h.z, {
                    className: m.A.popup,
                    closeButtonDataTest: "close-confirm-email-popup",
                    onClickClose: t => {
                        (0,
                        y.U)().set("confirmEmailPopupWasShown", Date.now(), {
                            expires: 1
                        }),
                        e.onClickClose && e.onClickClose(t)
                    }
                }, (0,
                n.h)("div", {
                    onClick: e => {
                        "A" === e.target.tagName && (0,
                        y.U)().set("confirmEmailPopupWasShown", Date.now(), {
                            expires: 1
                        })
                    }
                }, (0,
                n.h)("svg", {
                    className: m.A.image
                }, (0,
                n.h)("use", {
                    href: "#srf-confirm-email-image"
                })), (0,
                n.h)("h1", {
                    className: m.A.title
                }, (0,
                v.AP)("Confirm your email")), (0,
                n.h)("div", {
                    className: m.A.content
                }, (0,
                n.h)("p", {
                    className: m.A.paragraph
                }, (0,
                v.GW)((0,
                v.AP)("To continue working with %s please confirm your email. We’ve sent a verification link to your email address. "), [e.companyName]), t && (0,
                n.h)("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    href: t.url
                }, (0,
                v.GW)((0,
                v.AP)("Go to %s"), [t.domain]))), (0,
                n.h)("p", {
                    className: m.A.paragraph,
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        v.GW)((0,
                        v.AP)("Didn’t receive your confirmation email? %(link_start)sResend it%(link_end)s"), {
                            link_start: '<a href="/users/resend_email.html">',
                            link_end: "</a>"
                        }, !0)
                    }
                })), (0,
                n.h)("div", {
                    className: b()(m.A.content, m.A.highlight)
                }, (0,
                n.h)("p", {
                    className: m.A.paragraph,
                    dangerouslySetInnerHTML: {
                        __html: (0,
                        v.GW)((0,
                        v.AP)("If you don’t see an email in your inbox, check a spam folder. If you’re experiencing any issues with email confirmation, contact us at %(email_link_start)s mail@semrush.com %(email_link_end)s"), {
                            email_link_start: '<a href="mailto:mail@semrush.com">',
                            email_link_end: "</a>"
                        }, !0)
                    }
                }))))
            }
            ,
            disabled_user: e => (0,
            n.h)(C, {
                onClickClose: e.onClickClose,
                title: (0,
                v.AP)("Your account has been disabled"),
                paragraphs: [{
                    html: !0,
                    text: (0,
                    v.GW)((0,
                    v.AP)("Generally, we disable an account for violating our Terms of Use. Please review our %(terms_link_start)sTerms of Use%(terms_link_end)s and %(contact_link_start)scontact our Support Team%(contact_link_end)s if you have any questions."), {
                        terms_link_start: '<a href="/company/legal/terms-of-use/">',
                        terms_link_end: "</a>",
                        contact_link_start: '<a href="mailto:mail@semrush.com">',
                        contact_link_end: "</a>"
                    }, !0)
                }, {
                    text: (0,
                    v.AP)("We apologize for any inconvenience this may have caused. Thank you for your cooperation.")
                }]
            }),
            reset_password: e => (0,
            n.h)(C, {
                onClickClose: e.onClickClose,
                title: (0,
                v.AP)("We have detected unusual activity on your account"),
                paragraphs: [{
                    html: !0,
                    text: (0,
                    v.GW)((0,
                    v.AP)("To secure your data, we have temporarily disabled your account. A link to reset your password has been sent to your email address. Please %(link_start)scontact our Support Team%(link_end)s if you have any questions."), {
                        link_start: '<a href="mailto:mail@semrush.com">',
                        link_end: "</a>"
                    }, !0)
                }, {
                    text: (0,
                    v.AP)("We apologize for any inconvenience this may have caused. Thank you for your cooperation.")
                }]
            }),
            free_plan_upgrade: j,
            paysol_loading: () => (0,
            n.h)(h.z, {
                className: E.A.popup,
                classNameOverlay: E.A.classNameOverlay
            }, (0,
            n.h)(k.Spin, {
                size: "xxl",
                className: E.A.spin
            }))
        }
          , N = {
            disabled_user: "#disabled_user",
            reset_password: "#reset_password"
        };
        var D = o(1591);
        const L = ( () => {
            const e = new D.b({
                warn: !0
            });
            return {
                open(t, ...o) {
                    e.trigger("open", t, ...o)
                },
                addOnOpen: e.add.bind(e, "open"),
                removeOnOpen: e.remove.bind(e, "open"),
                closeLast: e.trigger.bind(e, "closeLast"),
                addOnCloseLast: e.add.bind(e, "closeLast"),
                removeOnCloseLast: e.remove.bind(e, "closeLast")
            }
        }
        )();
        function T() {
            return T = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var n in o)
                        ({}).hasOwnProperty.call(o, n) && (e[n] = o[n])
                }
                return e
            }
            ,
            T.apply(null, arguments)
        }
        class O extends n.Component {
            constructor(...e) {
                super(...e),
                this.state = {
                    popupStack: Object.keys(this.props.popups).filter((e => {
                        if (!M[e])
                            return console.warn(`Can't show popup with id: '${e}'. Available ids: ${Object.keys(M).join(", ")}`),
                            !1;
                        const t = this.props.popups[e]
                          , o = N[e];
                        return window.location.hash === o || t && !t.hide
                    }
                    ))
                }
            }
            componentDidMount() {
                L.addOnOpen(this.showPopup.bind(this)),
                L.addOnCloseLast(this.onClickClosePopup.bind(this))
            }
            componentWillUnmount() {
                L.removeOnOpen(this.showPopup.bind(this)),
                L.removeOnCloseLast(this.onClickClosePopup.bind(this))
            }
            showPopup(e, t) {
                M[e] ? this.setState({
                    popupStack: [...this.state.popupStack, e],
                    popupProps: t
                }) : console.warn(`Can't show popup with id: '${e}'. Available ids: ${Object.keys(M).join(", ")}`)
            }
            onClickClosePopup() {
                this.setState({
                    popupStack: this.state.popupStack.slice(0, -1)
                })
            }
            render() {
                const e = (0,
                f.H)(this.state.popupStack);
                if (!e)
                    return null;
                const t = M[e];
                if (!t)
                    throw new Error(`Can't show popup with id: ${e}`);
                const o = N[e];
                return "" !== window.location.hash && window.location.hash === o && (location.hash = ""),
                (0,
                n.h)(t, T({}, this.props.popups[e], this.state.popupProps, {
                    showPopup: this.showPopup.bind(this),
                    onClickClose: this.onClickClosePopup.bind(this)
                }))
            }
        }
        async function B(e, t, o) {
            if (!o || "string" != typeof o)
                throw new Error("setLanguage langCode is not supported");
            const {location: n} = window
              , r = new FormData;
            r.append("csrfmiddlewaretoken", e),
            r.append("language", o),
            r.append("location", `${n.pathname}${n.search}${n.hash}`);
            const i = await fetch(t, {
                method: "POST",
                mode: "same-origin",
                cache: "no-cache",
                body: r
            });
            if (!i.ok)
                throw new Error(await i.text());
            const s = await i.json();
            n.assign(s.redirectUrl),
            n.reload()
        }
        function U(e) {
            const {csrfToken: t, switchLanguageApiEndpoint: o} = e;
            return B.bind(null, t, o)
        }
        function I(e, t, o) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var o = e[Symbol.toPrimitive];
                    if (void 0 !== o) {
                        var n = o.call(e, t || "default");
                        if ("object" != typeof n)
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o,
            e
        }
        const R = class {
            constructor(e) {
                I(this, "props", void 0),
                I(this, "_promise", void 0),
                this.props = e,
                document.getElementById(this.props.formId) || console.warn(`Element #${this.props.formId} not found. 'LimitPopup' will not work`),
                this.props.preload && this.preload()
            }
            async open() {
                L.open("loading");
                const e = await this._getLimitPopup();
                return L.closeLast(),
                e.openModal()
            }
            async close() {
                (await this._getLimitPopup()).closeModal()
            }
            preload() {
                return this._getLimitPopup()
            }
            onSuccessCallback() {
                var e, t;
                e = "Registration",
                window.ga("send", {
                    hitType: "event",
                    eventCategory: "UserLimits",
                    eventAction: e,
                    eventLabel: t
                }),
                window.location.reload()
            }
            async _getLimitPopup() {
                this._promise || (this._promise = o.e(2550).then(o.t.bind(o, 7779, 23)));
                const e = new (0,
                (await this._promise).default)({
                    formView: "limit",
                    root: this.props.ssoRootUrl,
                    semrushRoot: this.props.ssoRootSemrushUrl,
                    captchaId: this.props.captchaId || "limit-popup-recaptcha",
                    regForm: {
                        onSuccessCallback: this.onSuccessCallback,
                        showGoogleAuth: !0
                    },
                    loginForm: {
                        showGoogleAuth: !0
                    }
                },this.props.env);
                return e.createForm(this.props.formId),
                e
            }
        }
          , z = e => {
            const t = (null == e ? void 0 : e.src) || "tool"
              , o = (null == e ? void 0 : e.redirectTo) || `${window.location.pathname}${window.location.search}`;
            if ("string" != typeof t || "string" != typeof o)
                throw new Error("options 'src' and 'redirectTo' must be a string");
            const n = `/signup?custom=limit&src=${encodeURIComponent(t)}&redirect_to=${encodeURIComponent(o)}`;
            window.location.assign(n)
        }
        ;
        function F(e, t, o) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var o = e[Symbol.toPrimitive];
                    if (void 0 !== o) {
                        var n = o.call(e, t || "default");
                        if ("object" != typeof n)
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o,
            e
        }
        const V = class {
            constructor(e) {
                F(this, "props", void 0),
                F(this, "_promise", void 0),
                F(this, "_isVisible", void 0),
                this.props = e,
                this._isVisible = !1,
                document.getElementById(this.props.formId) || console.warn(`Element #${this.props.formId} not found. 'Authentication' will not work`),
                this.props.preload && this.preload()
            }
            async open(e={}) {
                e.tab || (e.tab = "login"),
                e.fields || (e.fields = ["email", "password"]),
                e.required || (e.required = {
                    email: !0,
                    password: !0
                }),
                e.callback_url && (console.warn("options.callback_url is deprecated. Please use options.registration_callback or options.login_callback"),
                e.registration_callback = e.callback_url,
                e.login_callback = e.callback_url),
                void 0 === e.registration_callback && (e.registration_callback = "/register_success/"),
                void 0 === e.registration_source && (e.registration_source = "semrush");
                const t = await this.getSso();
                return this._isVisible = !0,
                t.changeProperties({
                    defaultActiveForm: e.tab,
                    loginForm: {
                        onSuccessCallback: this.createSuccessCallback(e.login_callback)
                    },
                    regForm: {
                        onSuccessCallback: this.createSuccessCallback(e.registration_callback),
                        data: {
                            source: e.registration_source
                        },
                        fields: e.fields,
                        required: e.required
                    }
                }),
                t.openModal()
            }
            createSuccessCallback(e="") {
                return e ? () => {
                    window.location.href = e
                }
                : () => {
                    window.location.reload()
                }
            }
            async close() {
                const e = await this.getSso();
                return this._isVisible = !1,
                e.closeModal()
            }
            isVisible() {
                return this._isVisible
            }
            preload() {
                return this.getSso()
            }
            async getSso() {
                this._promise || (this._promise = o.e(2550).then(o.t.bind(o, 7779, 23)));
                const e = new (0,
                (await this._promise).default)({
                    root: this.props.ssoRootUrl,
                    semrushRoot: this.props.ssoRootSemrushUrl,
                    popup: !0,
                    buttonId: !1,
                    defaultActiveForm: "login",
                    onClosePopup: () => {
                        this._isVisible = !1
                    }
                    ,
                    loginForm: {
                        fieldsDataTest: {
                            email: "auth-popup__email",
                            password: "auth-popup__password",
                            remember_me: "auth-popup__remember"
                        },
                        button: {
                            dataTest: "auth-popup__submit"
                        },
                        showGoogleAuth: !0
                    },
                    regForm: {
                        fields: ["email", "password"],
                        fieldsDataTest: {
                            email: "auth-popup__email",
                            password: "auth-popup__password"
                        },
                        button: {
                            dataTest: "auth-popup__submit"
                        },
                        showGoogleAuth: !0
                    }
                },this.props.env);
                return e.createForm(this.props.formId),
                e
            }
        }
        ;
        function W(e, t, o) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var o = e[Symbol.toPrimitive];
                    if (void 0 !== o) {
                        var n = o.call(e, t || "default");
                        if ("object" != typeof n)
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o,
            e
        }
        class $ {
            constructor(e) {
                W(this, "el", void 0),
                W(this, "_promise", void 0),
                this.el = e
            }
            async open(e={}) {
                L.open("paysol_loading");
                const t = await this.load();
                await L.closeLast();
                const o = t.init(this.el, {
                    ...e,
                    isVisible: !0,
                    onClose: () => {
                        var t;
                        o(),
                        null === (t = e.onClose) || void 0 === t || t.call(e)
                    }
                });
                return o
            }
            async load() {
                return this._promise || (this._promise = o.e(9223).then(o.t.bind(o, 9223, 23))),
                this._promise
            }
        }
        function G(e, t, o) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var o = e[Symbol.toPrimitive];
                    if (void 0 !== o) {
                        var n = o.call(e, t || "default");
                        if ("object" != typeof n)
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o,
            e
        }
        class q {
            constructor(e) {
                G(this, "el", void 0),
                G(this, "_promise", void 0),
                this.el = e
            }
            async open(e) {
                L.open("paysol_loading");
                const t = await this.load();
                await L.closeLast();
                const o = e.limitCode ? [e.limitCode] : e.limitCodes
                  , n = t.init(this.el, {
                    ...e,
                    limitCodes: o,
                    isVisible: !0,
                    onClose: () => {
                        var t;
                        n(),
                        null === (t = e.onClose) || void 0 === t || t.call(e)
                    }
                });
                return n
            }
            async load() {
                return this._promise || (this._promise = o.e(6116).then(o.t.bind(o, 6116, 23))),
                this._promise
            }
        }
        function H(e, t, o) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var o = e[Symbol.toPrimitive];
                    if (void 0 !== o) {
                        var n = o.call(e, t || "default");
                        if ("object" != typeof n)
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o,
            e
        }
        class K {
            constructor(e) {
                H(this, "el", void 0),
                H(this, "_promise", void 0),
                this.el = e
            }
            async open(e={}) {
                L.open("paysol_loading");
                const t = await this.load();
                await L.closeLast();
                const o = t.init(this.el, {
                    ...e,
                    isVisible: !0,
                    onClose: () => {
                        var t;
                        o(),
                        null === (t = e.onClose) || void 0 === t || t.call(e)
                    }
                });
                return o
            }
            async load() {
                return this._promise || (this._promise = o.e(577).then(o.t.bind(o, 577, 23))),
                this._promise
            }
        }
        function Y(e, t, o) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var o = e[Symbol.toPrimitive];
                    if (void 0 !== o) {
                        var n = o.call(e, t || "default");
                        if ("object" != typeof n)
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o,
            e
        }
        class Z {
            constructor(e) {
                Y(this, "el", void 0),
                Y(this, "_promise", void 0),
                this.el = e
            }
            async open(e={}) {
                L.open("paysol_loading");
                const t = await this.load();
                await L.closeLast();
                const o = t.init(this.el, {
                    ...e,
                    isVisible: !0,
                    onClose: () => {
                        var t;
                        o(),
                        null === (t = e.onClose) || void 0 === t || t.call(e)
                    }
                });
                return o
            }
            async load() {
                return this._promise || (this._promise = o.e(8752).then(o.t.bind(o, 8752, 23))),
                this._promise
            }
        }
        function J(e, t, o) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var o = e[Symbol.toPrimitive];
                    if (void 0 !== o) {
                        var n = o.call(e, t || "default");
                        if ("object" != typeof n)
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o,
            e
        }
        class Q {
            constructor(e) {
                J(this, "el", void 0),
                J(this, "_promise", void 0),
                this.el = e
            }
            async open(e) {
                L.open("paysol_loading");
                const t = await this.load();
                await L.closeLast();
                const o = t.init(this.el, {
                    ...e,
                    isVisible: !0,
                    onClose: () => {
                        var t;
                        o(),
                        null == e || null === (t = e.onClose) || void 0 === t || t.call(e)
                    }
                });
                return o
            }
            async load() {
                return this._promise || (this._promise = o.e(8984).then(o.t.bind(o, 8984, 23))),
                this._promise
            }
        }
        function X(e, t, o) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var o = e[Symbol.toPrimitive];
                    if (void 0 !== o) {
                        var n = o.call(e, t || "default");
                        if ("object" != typeof n)
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o,
            e
        }
        class ee {
            constructor() {
                X(this, "_promise", void 0)
            }
            async render(e, t) {
                return (await this.load()).init(e, t)
            }
            async load() {
                return this._promise || (this._promise = o.e(4548).then(o.t.bind(o, 4548, 23))),
                this._promise
            }
        }
        var te = o(3486);
        async function oe() {
            return (await o.e(8629).then(o.t.bind(o, 8629, 23))).default()
        }
        var ne = o(4258);
        function re(e, t, o) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var o = e[Symbol.toPrimitive];
                    if (void 0 !== o) {
                        var n = o.call(e, t || "default");
                        if ("object" != typeof n)
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o,
            e
        }
        class ie {
            constructor(e) {
                re(this, "_el", void 0),
                re(this, "_opened", void 0),
                this._el = e,
                this._opened = !1
            }
            async open(e) {
                if (this._opened)
                    return;
                this._opened = !0;
                const t = (await this.load()).renderSharingModal(this._el, {
                    ...e,
                    visible: !0,
                    onClose: () => {
                        var o;
                        t(),
                        null == e || null === (o = e.onClose) || void 0 === o || o.call(e),
                        this._opened = !1
                    }
                })
            }
            async load() {
                return o.e(7144).then(o.t.bind(o, 7144, 23))
            }
        }
        function se(e, t, o) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var o = e[Symbol.toPrimitive];
                    if (void 0 !== o) {
                        var n = o.call(e, t || "default");
                        if ("object" != typeof n)
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o,
            e
        }
        class ae {
            constructor(e) {
                se(this, "_el", void 0),
                se(this, "_promise", void 0),
                se(this, "_opened", void 0),
                this._el = e,
                this._opened = !1
            }
            async open(e) {
                if (this._opened)
                    return;
                this._opened = !0;
                const t = (await this.load()).renderInviteUsersModal(this._el, {
                    ...e,
                    visible: !0,
                    onClose: () => {
                        var o;
                        t(),
                        null == e || null === (o = e.onClose) || void 0 === o || o.call(e),
                        this._opened = !1
                    }
                })
            }
            async load() {
                return this._promise || (this._promise = o.e(7898).then(o.t.bind(o, 7898, 23))),
                this._promise
            }
        }
        function le(e, t, o) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var o = e[Symbol.toPrimitive];
                    if (void 0 !== o) {
                        var n = o.call(e, t || "default");
                        if ("object" != typeof n)
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o,
            e
        }
        class ce {
            constructor() {
                le(this, "_promise", void 0),
                le(this, "_opened", void 0),
                this._opened = !1
            }
            async open() {
                if (!this._opened) {
                    this._opened = !0;
                    try {
                        (await this.load()).init(),
                        this._opened = !1
                    } catch (e) {
                        console.error("Failed to load trial limit popup:", e),
                        this._opened = !1
                    }
                }
            }
            async load() {
                return this._promise || (this._promise = o.e(6173).then(o.t.bind(o, 6173, 23))),
                this._promise
            }
        }
        function pe(e) {
            (0,
            y.S)((0,
            r.G)(e.cookie_domain));
            const t = window.sm2;
            t.getNoticeBubbleContainer = () => document.getElementById("srf-notice-bubble-container"),
            t.switchLanguage = U({
                csrfToken: e.csrfToken,
                switchLanguageApiEndpoint: e.switchLanguageApiEndpoint
            }),
            t.trialLimitPopup = new ce,
            t.freePlanUpgradePopup = {
                open: e => L.open("free_plan_upgrade", {
                    popupType: e
                })
            },
            t.authentication = new V({
                formId: "srf-sso-login-form",
                env: e.sso.env,
                ssoRootUrl: e.sso.root_url,
                ssoRootSemrushUrl: e.sso.root_semrush_url,
                preload: Boolean(!t.user && e.sso.enable_preload)
            }),
            Object.defineProperty(window, "authentication", {
                get: function() {
                    return console.error("window.authentication is deprecated. It will be removed after December 2025. Use window.sm2.authentication instead."),
                    t.authentication
                },
                set: function(e) {
                    console.error("window.authentication is deprecated. It will be removed after December 2025. Use window.sm2.authentication instead."),
                    t.authentication = e
                },
                configurable: !0,
                enumerable: !0
            }),
            t.limitPopup = new R({
                formId: "srf-limit-popup",
                env: e.sso.env,
                ssoRootUrl: e.sso.root_url,
                ssoRootSemrushUrl: e.sso.root_semrush_url,
                preload: Boolean(!t.user && e.sso.enable_preload)
            }),
            t.redirectToSignupWithLimits = z,
            window.WTE = ne.f,
            (0,
            te.findElements)(document, {
                ".srf-popup-manager": t => {
                    (0,
                    n.render)((0,
                    n.h)(O, e.PopupManager), t)
                }
                ,
                "#srf-billing-popup": e => {
                    t.billingUI = {
                        quickUpgrade: new $(e),
                        quickPurchase: new q(e),
                        upgrade: new K(e),
                        customPlanRequest: new Z(e),
                        contact: new Q(e),
                        limitCode: {
                            get: oe
                        },
                        subscribe: new ee
                    }
                }
                ,
                "#srf-sharing-popup": e => {
                    t.sharingWidget = new ie(e)
                }
                ,
                "#srf-multi-invite-popup": e => {
                    t.multiInviteWidget = new ae(e)
                }
            })
        }
    }
}, e => {
    e.O(0, [2063, 3486, 9752, 258, 9327, 1633, 7353, 1069, 9331, 2663], ( () => {
        return t = 1043,
        e(e.s = t);
        var t
    }
    ));
    e.O()
}
]);
