(function() {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
	new MutationObserver((i) => {
		for (const o of i)
			if (o.type === "childList")
				for (const a of o.addedNodes)
					a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(i) {
		const o = {};
		return (
			i.integrity && (o.integrity = i.integrity),
			i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === "use-credentials"
				? (o.credentials = "include")
				: i.crossOrigin === "anonymous"
				? (o.credentials = "omit")
				: (o.credentials = "same-origin"),
			o
		);
	}
	function r(i) {
		if (i.ep) return;
		i.ep = !0;
		const o = n(i);
		fetch(i.href, o);
	}
})();
function os(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
		? e.default
		: e;
}
var Ku = { exports: {} },
	to = {},
	Yu = { exports: {} },
	L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zr = Symbol.for("react.element"),
	dp = Symbol.for("react.portal"),
	pp = Symbol.for("react.fragment"),
	hp = Symbol.for("react.strict_mode"),
	mp = Symbol.for("react.profiler"),
	vp = Symbol.for("react.provider"),
	gp = Symbol.for("react.context"),
	yp = Symbol.for("react.forward_ref"),
	Sp = Symbol.for("react.suspense"),
	Cp = Symbol.for("react.memo"),
	kp = Symbol.for("react.lazy"),
	ll = Symbol.iterator;
function _p(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (ll && e[ll]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var Xu = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {},
	},
	Zu = Object.assign,
	qu = {};
function zn(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = qu),
		(this.updater = n || Xu);
}
zn.prototype.isReactComponent = {};
zn.prototype.setState = function(e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null)
		throw Error(
			"setState(...): takes an object of state variables to update or a function which returns an object of state variables."
		);
	this.updater.enqueueSetState(this, e, t, "setState");
};
zn.prototype.forceUpdate = function(e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ec() {}
ec.prototype = zn.prototype;
function as(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = qu),
		(this.updater = n || Xu);
}
var ss = (as.prototype = new ec());
ss.constructor = as;
Zu(ss, zn.prototype);
ss.isPureReactComponent = !0;
var ul = Array.isArray,
	tc = Object.prototype.hasOwnProperty,
	ls = { current: null },
	nc = { key: !0, ref: !0, __self: !0, __source: !0 };
function rc(e, t, n) {
	var r,
		i = {},
		o = null,
		a = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (a = t.ref),
		t.key !== void 0 && (o = "" + t.key),
		t))
			tc.call(t, r) && !nc.hasOwnProperty(r) && (i[r] = t[r]);
	var l = arguments.length - 2;
	if (l === 1) i.children = n;
	else if (1 < l) {
		for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
		i.children = s;
	}
	if (e && e.defaultProps)
		for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
	return {
		$$typeof: zr,
		type: e,
		key: o,
		ref: a,
		props: i,
		_owner: ls.current,
	};
}
function Ep(e, t) {
	return {
		$$typeof: zr,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function us(e) {
	return typeof e == "object" && e !== null && e.$$typeof === zr;
}
function Tp(e) {
	var t = { "=": "=0", ":": "=2" };
	return (
		"$" +
		e.replace(/[=:]/g, function(n) {
			return t[n];
		})
	);
}
var cl = /\/+/g;
function _o(e, t) {
	return typeof e == "object" && e !== null && e.key != null
		? Tp("" + e.key)
		: t.toString(36);
}
function ci(e, t, n, r, i) {
	var o = typeof e;
	(o === "undefined" || o === "boolean") && (e = null);
	var a = !1;
	if (e === null) a = !0;
	else
		switch (o) {
			case "string":
			case "number":
				a = !0;
				break;
			case "object":
				switch (e.$$typeof) {
					case zr:
					case dp:
						a = !0;
				}
		}
	if (a)
		return (
			(a = e),
			(i = i(a)),
			(e = r === "" ? "." + _o(a, 0) : r),
			ul(i)
				? ((n = ""),
				  e != null && (n = e.replace(cl, "$&/") + "/"),
				  ci(i, t, n, "", function(u) {
						return u;
				  }))
				: i != null &&
				  (us(i) &&
						(i = Ep(
							i,
							n +
								(!i.key || (a && a.key === i.key)
									? ""
									: ("" + i.key).replace(cl, "$&/") + "/") +
								e
						)),
				  t.push(i)),
			1
		);
	if (((a = 0), (r = r === "" ? "." : r + ":"), ul(e)))
		for (var l = 0; l < e.length; l++) {
			o = e[l];
			var s = r + _o(o, l);
			a += ci(o, t, n, s, i);
		}
	else if (((s = _p(e)), typeof s == "function"))
		for (e = s.call(e), l = 0; !(o = e.next()).done; )
			(o = o.value), (s = r + _o(o, l++)), (a += ci(o, t, n, s, i));
	else if (o === "object")
		throw ((t = String(e)),
		Error(
			"Objects are not valid as a React child (found: " +
				(t === "[object Object]"
					? "object with keys {" + Object.keys(e).join(", ") + "}"
					: t) +
				"). If you meant to render a collection of children, use an array instead."
		));
	return a;
}
function Vr(e, t, n) {
	if (e == null) return e;
	var r = [],
		i = 0;
	return (
		ci(e, r, "", "", function(o) {
			return t.call(n, o, i++);
		}),
		r
	);
}
function xp(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function(n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n));
				},
				function(n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n));
				}
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var ke = { current: null },
	fi = { transition: null },
	Pp = {
		ReactCurrentDispatcher: ke,
		ReactCurrentBatchConfig: fi,
		ReactCurrentOwner: ls,
	};
L.Children = {
	map: Vr,
	forEach: function(e, t, n) {
		Vr(
			e,
			function() {
				t.apply(this, arguments);
			},
			n
		);
	},
	count: function(e) {
		var t = 0;
		return (
			Vr(e, function() {
				t++;
			}),
			t
		);
	},
	toArray: function(e) {
		return (
			Vr(e, function(t) {
				return t;
			}) || []
		);
	},
	only: function(e) {
		if (!us(e))
			throw Error(
				"React.Children.only expected to receive a single React element child."
			);
		return e;
	},
};
L.Component = zn;
L.Fragment = pp;
L.Profiler = mp;
L.PureComponent = as;
L.StrictMode = hp;
L.Suspense = Sp;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pp;
L.cloneElement = function(e, t, n) {
	if (e == null)
		throw Error(
			"React.cloneElement(...): The argument must be a React element, but you passed " +
				e +
				"."
		);
	var r = Zu({}, e.props),
		i = e.key,
		o = e.ref,
		a = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((o = t.ref), (a = ls.current)),
			t.key !== void 0 && (i = "" + t.key),
			e.type && e.type.defaultProps)
		)
			var l = e.type.defaultProps;
		for (s in t)
			tc.call(t, s) &&
				!nc.hasOwnProperty(s) &&
				(r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
	}
	var s = arguments.length - 2;
	if (s === 1) r.children = n;
	else if (1 < s) {
		l = Array(s);
		for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
		r.children = l;
	}
	return { $$typeof: zr, type: e.type, key: i, ref: o, props: r, _owner: a };
};
L.createContext = function(e) {
	return (
		(e = {
			$$typeof: gp,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: vp, _context: e }),
		(e.Consumer = e)
	);
};
L.createElement = rc;
L.createFactory = function(e) {
	var t = rc.bind(null, e);
	return (t.type = e), t;
};
L.createRef = function() {
	return { current: null };
};
L.forwardRef = function(e) {
	return { $$typeof: yp, render: e };
};
L.isValidElement = us;
L.lazy = function(e) {
	return { $$typeof: kp, _payload: { _status: -1, _result: e }, _init: xp };
};
L.memo = function(e, t) {
	return { $$typeof: Cp, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function(e) {
	var t = fi.transition;
	fi.transition = {};
	try {
		e();
	} finally {
		fi.transition = t;
	}
};
L.unstable_act = function() {
	throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function(e, t) {
	return ke.current.useCallback(e, t);
};
L.useContext = function(e) {
	return ke.current.useContext(e);
};
L.useDebugValue = function() {};
L.useDeferredValue = function(e) {
	return ke.current.useDeferredValue(e);
};
L.useEffect = function(e, t) {
	return ke.current.useEffect(e, t);
};
L.useId = function() {
	return ke.current.useId();
};
L.useImperativeHandle = function(e, t, n) {
	return ke.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function(e, t) {
	return ke.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function(e, t) {
	return ke.current.useLayoutEffect(e, t);
};
L.useMemo = function(e, t) {
	return ke.current.useMemo(e, t);
};
L.useReducer = function(e, t, n) {
	return ke.current.useReducer(e, t, n);
};
L.useRef = function(e) {
	return ke.current.useRef(e);
};
L.useState = function(e) {
	return ke.current.useState(e);
};
L.useSyncExternalStore = function(e, t, n) {
	return ke.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function() {
	return ke.current.useTransition();
};
L.version = "18.2.0";
Yu.exports = L;
var D = Yu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rp = D,
	wp = Symbol.for("react.element"),
	Op = Symbol.for("react.fragment"),
	Dp = Object.prototype.hasOwnProperty,
	Mp = Rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Ip = { key: !0, ref: !0, __self: !0, __source: !0 };
function ic(e, t, n) {
	var r,
		i = {},
		o = null,
		a = null;
	n !== void 0 && (o = "" + n),
		t.key !== void 0 && (o = "" + t.key),
		t.ref !== void 0 && (a = t.ref);
	for (r in t) Dp.call(t, r) && !Ip.hasOwnProperty(r) && (i[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
	return {
		$$typeof: wp,
		type: e,
		key: o,
		ref: a,
		props: i,
		_owner: Mp.current,
	};
}
to.Fragment = Op;
to.jsx = ic;
to.jsxs = ic;
Ku.exports = to;
var F = Ku.exports,
	ta = {},
	oc = { exports: {} },
	Ne = {},
	ac = { exports: {} },
	sc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function(e) {
	function t(R, j) {
		var b = R.length;
		R.push(j);
		e: for (; 0 < b; ) {
			var U = (b - 1) >>> 1,
				K = R[U];
			if (0 < i(K, j)) (R[U] = j), (R[b] = K), (b = U);
			else break e;
		}
	}
	function n(R) {
		return R.length === 0 ? null : R[0];
	}
	function r(R) {
		if (R.length === 0) return null;
		var j = R[0],
			b = R.pop();
		if (b !== j) {
			R[0] = b;
			e: for (var U = 0, K = R.length, $t = K >>> 1; U < $t; ) {
				var Ee = 2 * (U + 1) - 1,
					Vt = R[Ee],
					Te = Ee + 1,
					cn = R[Te];
				if (0 > i(Vt, b))
					Te < K && 0 > i(cn, Vt)
						? ((R[U] = cn), (R[Te] = b), (U = Te))
						: ((R[U] = Vt), (R[Ee] = b), (U = Ee));
				else if (Te < K && 0 > i(cn, b)) (R[U] = cn), (R[Te] = b), (U = Te);
				else break e;
			}
		}
		return j;
	}
	function i(R, j) {
		var b = R.sortIndex - j.sortIndex;
		return b !== 0 ? b : R.id - j.id;
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var o = performance;
		e.unstable_now = function() {
			return o.now();
		};
	} else {
		var a = Date,
			l = a.now();
		e.unstable_now = function() {
			return a.now() - l;
		};
	}
	var s = [],
		u = [],
		c = 1,
		f = null,
		d = 3,
		g = !1,
		m = !1,
		y = !1,
		P = typeof setTimeout == "function" ? setTimeout : null,
		h = typeof clearTimeout == "function" ? clearTimeout : null,
		p = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function v(R) {
		for (var j = n(u); j !== null; ) {
			if (j.callback === null) r(u);
			else if (j.startTime <= R)
				r(u), (j.sortIndex = j.expirationTime), t(s, j);
			else break;
			j = n(u);
		}
	}
	function C(R) {
		if (((y = !1), v(R), !m))
			if (n(s) !== null) (m = !0), Ut(S);
			else {
				var j = n(u);
				j !== null && st(C, j.startTime - R);
			}
	}
	function S(R, j) {
		(m = !1), y && ((y = !1), h(_), (_ = -1)), (g = !0);
		var b = d;
		try {
			for (
				v(j), f = n(s);
				f !== null && (!(f.expirationTime > j) || (R && !ne()));

			) {
				var U = f.callback;
				if (typeof U == "function") {
					(f.callback = null), (d = f.priorityLevel);
					var K = U(f.expirationTime <= j);
					(j = e.unstable_now()),
						typeof K == "function" ? (f.callback = K) : f === n(s) && r(s),
						v(j);
				} else r(s);
				f = n(s);
			}
			if (f !== null) var $t = !0;
			else {
				var Ee = n(u);
				Ee !== null && st(C, Ee.startTime - j), ($t = !1);
			}
			return $t;
		} finally {
			(f = null), (d = b), (g = !1);
		}
	}
	var k = !1,
		E = null,
		_ = -1,
		M = 5,
		x = -1;
	function ne() {
		return !(e.unstable_now() - x < M);
	}
	function We() {
		if (E !== null) {
			var R = e.unstable_now();
			x = R;
			var j = !0;
			try {
				j = E(!0, R);
			} finally {
				j ? at() : ((k = !1), (E = null));
			}
		} else k = !1;
	}
	var at;
	if (typeof p == "function")
		at = function() {
			p(We);
		};
	else if (typeof MessageChannel < "u") {
		var Be = new MessageChannel(),
			$n = Be.port2;
		(Be.port1.onmessage = We),
			(at = function() {
				$n.postMessage(null);
			});
	} else
		at = function() {
			P(We, 0);
		};
	function Ut(R) {
		(E = R), k || ((k = !0), at());
	}
	function st(R, j) {
		_ = P(function() {
			R(e.unstable_now());
		}, j);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function(R) {
			R.callback = null;
		}),
		(e.unstable_continueExecution = function() {
			m || g || ((m = !0), Ut(S));
		}),
		(e.unstable_forceFrameRate = function(R) {
			0 > R || 125 < R
				? console.error(
						"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
				  )
				: (M = 0 < R ? Math.floor(1e3 / R) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function() {
			return d;
		}),
		(e.unstable_getFirstCallbackNode = function() {
			return n(s);
		}),
		(e.unstable_next = function(R) {
			switch (d) {
				case 1:
				case 2:
				case 3:
					var j = 3;
					break;
				default:
					j = d;
			}
			var b = d;
			d = j;
			try {
				return R();
			} finally {
				d = b;
			}
		}),
		(e.unstable_pauseExecution = function() {}),
		(e.unstable_requestPaint = function() {}),
		(e.unstable_runWithPriority = function(R, j) {
			switch (R) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					R = 3;
			}
			var b = d;
			d = R;
			try {
				return j();
			} finally {
				d = b;
			}
		}),
		(e.unstable_scheduleCallback = function(R, j, b) {
			var U = e.unstable_now();
			switch (
				(typeof b == "object" && b !== null
					? ((b = b.delay), (b = typeof b == "number" && 0 < b ? U + b : U))
					: (b = U),
				R)
			) {
				case 1:
					var K = -1;
					break;
				case 2:
					K = 250;
					break;
				case 5:
					K = 1073741823;
					break;
				case 4:
					K = 1e4;
					break;
				default:
					K = 5e3;
			}
			return (
				(K = b + K),
				(R = {
					id: c++,
					callback: j,
					priorityLevel: R,
					startTime: b,
					expirationTime: K,
					sortIndex: -1,
				}),
				b > U
					? ((R.sortIndex = b),
					  t(u, R),
					  n(s) === null &&
							R === n(u) &&
							(y ? (h(_), (_ = -1)) : (y = !0), st(C, b - U)))
					: ((R.sortIndex = K), t(s, R), m || g || ((m = !0), Ut(S))),
				R
			);
		}),
		(e.unstable_shouldYield = ne),
		(e.unstable_wrapCallback = function(R) {
			var j = d;
			return function() {
				var b = d;
				d = j;
				try {
					return R.apply(this, arguments);
				} finally {
					d = b;
				}
			};
		});
})(sc);
ac.exports = sc;
var jp = ac.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lc = D,
	Le = jp;
function T(e) {
	for (
		var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
		n < arguments.length;
		n++
	)
		t += "&args[]=" + encodeURIComponent(arguments[n]);
	return (
		"Minified React error #" +
		e +
		"; visit " +
		t +
		" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	);
}
var uc = new Set(),
	vr = {};
function sn(e, t) {
	Dn(e, t), Dn(e + "Capture", t);
}
function Dn(e, t) {
	for (vr[e] = t, e = 0; e < t.length; e++) uc.add(t[e]);
}
var mt = !(
		typeof window > "u" ||
		typeof window.document > "u" ||
		typeof window.document.createElement > "u"
	),
	na = Object.prototype.hasOwnProperty,
	bp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	fl = {},
	dl = {};
function Lp(e) {
	return na.call(dl, e)
		? !0
		: na.call(fl, e)
		? !1
		: bp.test(e)
		? (dl[e] = !0)
		: ((fl[e] = !0), !1);
}
function Np(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
		default:
			return !1;
	}
}
function zp(e, t, n, r) {
	if (t === null || typeof t > "u" || Np(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function _e(e, t, n, r, i, o, a) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = i),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = o),
		(this.removeEmptyString = a);
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
	.split(" ")
	.forEach(function(e) {
		ue[e] = new _e(e, 0, !1, e, null, !1, !1);
	});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"],
].forEach(function(e) {
	var t = e[0];
	ue[t] = new _e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
	ue[e] = new _e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	"autoReverse",
	"externalResourcesRequired",
	"focusable",
	"preserveAlpha",
].forEach(function(e) {
	ue[e] = new _e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
	.split(" ")
	.forEach(function(e) {
		ue[e] = new _e(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
	ue[e] = new _e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
	ue[e] = new _e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
	ue[e] = new _e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
	ue[e] = new _e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var cs = /[\-:]([a-z])/g;
function fs(e) {
	return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
	.split(" ")
	.forEach(function(e) {
		var t = e.replace(cs, fs);
		ue[t] = new _e(t, 1, !1, e, null, !1, !1);
	});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
	.split(" ")
	.forEach(function(e) {
		var t = e.replace(cs, fs);
		ue[t] = new _e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
	var t = e.replace(cs, fs);
	ue[t] = new _e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
	ue[e] = new _e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new _e(
	"xlinkHref",
	1,
	!1,
	"xlink:href",
	"http://www.w3.org/1999/xlink",
	!0,
	!1
);
["src", "href", "action", "formAction"].forEach(function(e) {
	ue[e] = new _e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ds(e, t, n, r) {
	var i = ue.hasOwnProperty(t) ? ue[t] : null;
	(i !== null
		? i.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== "o" && t[0] !== "O") ||
		  (t[1] !== "n" && t[1] !== "N")) &&
		(zp(t, n, i, r) && (n = null),
		r || i === null
			? Lp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
			: i.mustUseProperty
			? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
			: ((t = i.attributeName),
			  (r = i.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((i = i.type),
					  (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var St = lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Gr = Symbol.for("react.element"),
	dn = Symbol.for("react.portal"),
	pn = Symbol.for("react.fragment"),
	ps = Symbol.for("react.strict_mode"),
	ra = Symbol.for("react.profiler"),
	cc = Symbol.for("react.provider"),
	fc = Symbol.for("react.context"),
	hs = Symbol.for("react.forward_ref"),
	ia = Symbol.for("react.suspense"),
	oa = Symbol.for("react.suspense_list"),
	ms = Symbol.for("react.memo"),
	kt = Symbol.for("react.lazy"),
	dc = Symbol.for("react.offscreen"),
	pl = Symbol.iterator;
function Vn(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (pl && e[pl]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var Q = Object.assign,
	Eo;
function qn(e) {
	if (Eo === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			Eo = (t && t[1]) || "";
		}
	return (
		`
` +
		Eo +
		e
	);
}
var To = !1;
function xo(e, t) {
	if (!e || To) return "";
	To = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function() {
					throw Error();
				}),
				Object.defineProperty(t.prototype, "props", {
					set: function() {
						throw Error();
					},
				}),
				typeof Reflect == "object" && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (u) {
					var r = u;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (u) {
					r = u;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (u) {
				r = u;
			}
			e();
		}
	} catch (u) {
		if (u && r && typeof u.stack == "string") {
			for (
				var i = u.stack.split(`
`),
					o = r.stack.split(`
`),
					a = i.length - 1,
					l = o.length - 1;
				1 <= a && 0 <= l && i[a] !== o[l];

			)
				l--;
			for (; 1 <= a && 0 <= l; a--, l--)
				if (i[a] !== o[l]) {
					if (a !== 1 || l !== 1)
						do
							if ((a--, l--, 0 > l || i[a] !== o[l])) {
								var s =
									`
` + i[a].replace(" at new ", " at ");
								return (
									e.displayName &&
										s.includes("<anonymous>") &&
										(s = s.replace("<anonymous>", e.displayName)),
									s
								);
							}
						while (1 <= a && 0 <= l);
					break;
				}
		}
	} finally {
		(To = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : "") ? qn(e) : "";
}
function Bp(e) {
	switch (e.tag) {
		case 5:
			return qn(e.type);
		case 16:
			return qn("Lazy");
		case 13:
			return qn("Suspense");
		case 19:
			return qn("SuspenseList");
		case 0:
		case 2:
		case 15:
			return (e = xo(e.type, !1)), e;
		case 11:
			return (e = xo(e.type.render, !1)), e;
		case 1:
			return (e = xo(e.type, !0)), e;
		default:
			return "";
	}
}
function aa(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case pn:
			return "Fragment";
		case dn:
			return "Portal";
		case ra:
			return "Profiler";
		case ps:
			return "StrictMode";
		case ia:
			return "Suspense";
		case oa:
			return "SuspenseList";
	}
	if (typeof e == "object")
		switch (e.$$typeof) {
			case fc:
				return (e.displayName || "Context") + ".Consumer";
			case cc:
				return (e._context.displayName || "Context") + ".Provider";
			case hs:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ""),
						(e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
					e
				);
			case ms:
				return (
					(t = e.displayName || null), t !== null ? t : aa(e.type) || "Memo"
				);
			case kt:
				(t = e._payload), (e = e._init);
				try {
					return aa(e(t));
				} catch {}
		}
	return null;
}
function Fp(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return "Cache";
		case 9:
			return (t.displayName || "Context") + ".Consumer";
		case 10:
			return (t._context.displayName || "Context") + ".Provider";
		case 18:
			return "DehydratedFragment";
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ""),
				t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
			);
		case 7:
			return "Fragment";
		case 5:
			return t;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return aa(t);
		case 8:
			return t === ps ? "StrictMode" : "Mode";
		case 22:
			return "Offscreen";
		case 12:
			return "Profiler";
		case 21:
			return "Scope";
		case 13:
			return "Suspense";
		case 19:
			return "SuspenseList";
		case 25:
			return "TracingMarker";
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == "function") return t.displayName || t.name || null;
			if (typeof t == "string") return t;
	}
	return null;
}
function Nt(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return "";
	}
}
function pc(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === "input" &&
		(t === "checkbox" || t === "radio")
	);
}
function Ap(e) {
	var t = pc(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = "" + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < "u" &&
		typeof n.get == "function" &&
		typeof n.set == "function"
	) {
		var i = n.get,
			o = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(a) {
					(r = "" + a), o.call(this, a);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function() {
					return r;
				},
				setValue: function(a) {
					r = "" + a;
				},
				stopTracking: function() {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function Wr(e) {
	e._valueTracker || (e._valueTracker = Ap(e));
}
function hc(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return (
		e && (r = pc(e) ? (e.checked ? "true" : "false") : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function Ri(e) {
	if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function sa(e, t) {
	var n = t.checked;
	return Q({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function hl(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = Nt(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === "checkbox" || t.type === "radio"
					? t.checked != null
					: t.value != null,
		});
}
function mc(e, t) {
	(t = t.checked), t != null && ds(e, "checked", t, !1);
}
function la(e, t) {
	mc(e, t);
	var n = Nt(t.value),
		r = t.type;
	if (n != null)
		r === "number"
			? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
			: e.value !== "" + n && (e.value = "" + n);
	else if (r === "submit" || r === "reset") {
		e.removeAttribute("value");
		return;
	}
	t.hasOwnProperty("value")
		? ua(e, t.type, n)
		: t.hasOwnProperty("defaultValue") && ua(e, t.type, Nt(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function ml(e, t, n) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var r = t.type;
		if (
			!(
				(r !== "submit" && r !== "reset") ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		(t = "" + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== "" && (e.name = ""),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== "" && (e.name = n);
}
function ua(e, t, n) {
	(t !== "number" || Ri(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = "" + e._wrapperState.initialValue)
			: e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var er = Array.isArray;
function Tn(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
		for (n = 0; n < e.length; n++)
			(i = t.hasOwnProperty("$" + e[n].value)),
				e[n].selected !== i && (e[n].selected = i),
				i && r && (e[n].defaultSelected = !0);
	} else {
		for (n = "" + Nt(n), t = null, i = 0; i < e.length; i++) {
			if (e[i].value === n) {
				(e[i].selected = !0), r && (e[i].defaultSelected = !0);
				return;
			}
			t !== null || e[i].disabled || (t = e[i]);
		}
		t !== null && (t.selected = !0);
	}
}
function ca(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
	return Q({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue,
	});
}
function vl(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(T(92));
			if (er(n)) {
				if (1 < n.length) throw Error(T(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ""), (n = t);
	}
	e._wrapperState = { initialValue: Nt(n) };
}
function vc(e, t) {
	var n = Nt(t.value),
		r = Nt(t.defaultValue);
	n != null &&
		((n = "" + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = "" + r);
}
function gl(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function gc(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml";
	}
}
function fa(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml"
		? gc(t)
		: e === "http://www.w3.org/2000/svg" && t === "foreignObject"
		? "http://www.w3.org/1999/xhtml"
		: e;
}
var Hr,
	yc = (function(e) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
			? function(t, n, r, i) {
					MSApp.execUnsafeLocalFunction(function() {
						return e(t, n, r, i);
					});
			  }
			: e;
	})(function(e, t) {
		if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
			e.innerHTML = t;
		else {
			for (
				Hr = Hr || document.createElement("div"),
					Hr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
					t = Hr.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function gr(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var ar = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	Up = ["Webkit", "ms", "Moz", "O"];
Object.keys(ar).forEach(function(e) {
	Up.forEach(function(t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ar[t] = ar[e]);
	});
});
function Sc(e, t, n) {
	return t == null || typeof t == "boolean" || t === ""
		? ""
		: n || typeof t != "number" || t === 0 || (ar.hasOwnProperty(e) && ar[e])
		? ("" + t).trim()
		: t + "px";
}
function Cc(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				i = Sc(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
		}
}
var $p = Q(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	}
);
function da(e, t) {
	if (t) {
		if ($p[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(T(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(T(60));
			if (
				typeof t.dangerouslySetInnerHTML != "object" ||
				!("__html" in t.dangerouslySetInnerHTML)
			)
				throw Error(T(61));
		}
		if (t.style != null && typeof t.style != "object") throw Error(T(62));
	}
}
function pa(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string";
	switch (e) {
		case "annotation-xml":
		case "color-profile":
		case "font-face":
		case "font-face-src":
		case "font-face-uri":
		case "font-face-format":
		case "font-face-name":
		case "missing-glyph":
			return !1;
		default:
			return !0;
	}
}
var ha = null;
function vs(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var ma = null,
	xn = null,
	Pn = null;
function yl(e) {
	if ((e = Ar(e))) {
		if (typeof ma != "function") throw Error(T(280));
		var t = e.stateNode;
		t && ((t = ao(t)), ma(e.stateNode, e.type, t));
	}
}
function kc(e) {
	xn ? (Pn ? Pn.push(e) : (Pn = [e])) : (xn = e);
}
function _c() {
	if (xn) {
		var e = xn,
			t = Pn;
		if (((Pn = xn = null), yl(e), t)) for (e = 0; e < t.length; e++) yl(t[e]);
	}
}
function Ec(e, t) {
	return e(t);
}
function Tc() {}
var Po = !1;
function xc(e, t, n) {
	if (Po) return e(t, n);
	Po = !0;
	try {
		return Ec(e, t, n);
	} finally {
		(Po = !1), (xn !== null || Pn !== null) && (Tc(), _c());
	}
}
function yr(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = ao(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case "onClick":
		case "onClickCapture":
		case "onDoubleClick":
		case "onDoubleClickCapture":
		case "onMouseDown":
		case "onMouseDownCapture":
		case "onMouseMove":
		case "onMouseMoveCapture":
		case "onMouseUp":
		case "onMouseUpCapture":
		case "onMouseEnter":
			(r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === "button" ||
					e === "input" ||
					e === "select" ||
					e === "textarea"
				))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != "function") throw Error(T(231, t, typeof n));
	return n;
}
var va = !1;
if (mt)
	try {
		var Gn = {};
		Object.defineProperty(Gn, "passive", {
			get: function() {
				va = !0;
			},
		}),
			window.addEventListener("test", Gn, Gn),
			window.removeEventListener("test", Gn, Gn);
	} catch {
		va = !1;
	}
function Vp(e, t, n, r, i, o, a, l, s) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, u);
	} catch (c) {
		this.onError(c);
	}
}
var sr = !1,
	wi = null,
	Oi = !1,
	ga = null,
	Gp = {
		onError: function(e) {
			(sr = !0), (wi = e);
		},
	};
function Wp(e, t, n, r, i, o, a, l, s) {
	(sr = !1), (wi = null), Vp.apply(Gp, arguments);
}
function Hp(e, t, n, r, i, o, a, l, s) {
	if ((Wp.apply(this, arguments), sr)) {
		if (sr) {
			var u = wi;
			(sr = !1), (wi = null);
		} else throw Error(T(198));
		Oi || ((Oi = !0), (ga = u));
	}
}
function ln(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function Pc(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (
			(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated;
	}
	return null;
}
function Sl(e) {
	if (ln(e) !== e) throw Error(T(188));
}
function Qp(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = ln(e)), t === null)) throw Error(T(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var i = n.return;
		if (i === null) break;
		var o = i.alternate;
		if (o === null) {
			if (((r = i.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (i.child === o.child) {
			for (o = i.child; o; ) {
				if (o === n) return Sl(i), e;
				if (o === r) return Sl(i), t;
				o = o.sibling;
			}
			throw Error(T(188));
		}
		if (n.return !== r.return) (n = i), (r = o);
		else {
			for (var a = !1, l = i.child; l; ) {
				if (l === n) {
					(a = !0), (n = i), (r = o);
					break;
				}
				if (l === r) {
					(a = !0), (r = i), (n = o);
					break;
				}
				l = l.sibling;
			}
			if (!a) {
				for (l = o.child; l; ) {
					if (l === n) {
						(a = !0), (n = o), (r = i);
						break;
					}
					if (l === r) {
						(a = !0), (r = o), (n = i);
						break;
					}
					l = l.sibling;
				}
				if (!a) throw Error(T(189));
			}
		}
		if (n.alternate !== r) throw Error(T(190));
	}
	if (n.tag !== 3) throw Error(T(188));
	return n.stateNode.current === n ? e : t;
}
function Rc(e) {
	return (e = Qp(e)), e !== null ? wc(e) : null;
}
function wc(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = wc(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var Oc = Le.unstable_scheduleCallback,
	Cl = Le.unstable_cancelCallback,
	Jp = Le.unstable_shouldYield,
	Kp = Le.unstable_requestPaint,
	X = Le.unstable_now,
	Yp = Le.unstable_getCurrentPriorityLevel,
	gs = Le.unstable_ImmediatePriority,
	Dc = Le.unstable_UserBlockingPriority,
	Di = Le.unstable_NormalPriority,
	Xp = Le.unstable_LowPriority,
	Mc = Le.unstable_IdlePriority,
	no = null,
	rt = null;
function Zp(e) {
	if (rt && typeof rt.onCommitFiberRoot == "function")
		try {
			rt.onCommitFiberRoot(no, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var Xe = Math.clz32 ? Math.clz32 : th,
	qp = Math.log,
	eh = Math.LN2;
function th(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((qp(e) / eh) | 0)) | 0;
}
var Qr = 64,
	Jr = 4194304;
function tr(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e;
	}
}
function Mi(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		i = e.suspendedLanes,
		o = e.pingedLanes,
		a = n & 268435455;
	if (a !== 0) {
		var l = a & ~i;
		l !== 0 ? (r = tr(l)) : ((o &= a), o !== 0 && (r = tr(o)));
	} else (a = n & ~i), a !== 0 ? (r = tr(a)) : o !== 0 && (r = tr(o));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & i) &&
		((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - Xe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
	return r;
}
function nh(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function rh(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			i = e.expirationTimes,
			o = e.pendingLanes;
		0 < o;

	) {
		var a = 31 - Xe(o),
			l = 1 << a,
			s = i[a];
		s === -1
			? (!(l & n) || l & r) && (i[a] = nh(l, t))
			: s <= t && (e.expiredLanes |= l),
			(o &= ~l);
	}
}
function ya(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function Ic() {
	var e = Qr;
	return (Qr <<= 1), !(Qr & 4194240) && (Qr = 64), e;
}
function Ro(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function Br(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Xe(t)),
		(e[t] = n);
}
function ih(e, t) {
	var n = e.pendingLanes & ~t;
	(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements);
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n; ) {
		var i = 31 - Xe(n),
			o = 1 << i;
		(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
	}
}
function ys(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - Xe(n),
			i = 1 << r;
		(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
	}
}
var B = 0;
function jc(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var bc,
	Ss,
	Lc,
	Nc,
	zc,
	Sa = !1,
	Kr = [],
	wt = null,
	Ot = null,
	Dt = null,
	Sr = new Map(),
	Cr = new Map(),
	Et = [],
	oh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
		" "
	);
function kl(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			wt = null;
			break;
		case "dragenter":
		case "dragleave":
			Ot = null;
			break;
		case "mouseover":
		case "mouseout":
			Dt = null;
			break;
		case "pointerover":
		case "pointerout":
			Sr.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			Cr.delete(t.pointerId);
	}
}
function Wn(e, t, n, r, i, o) {
	return e === null || e.nativeEvent !== o
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: o,
				targetContainers: [i],
		  }),
		  t !== null && ((t = Ar(t)), t !== null && Ss(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  i !== null && t.indexOf(i) === -1 && t.push(i),
		  e);
}
function ah(e, t, n, r, i) {
	switch (t) {
		case "focusin":
			return (wt = Wn(wt, e, t, n, r, i)), !0;
		case "dragenter":
			return (Ot = Wn(Ot, e, t, n, r, i)), !0;
		case "mouseover":
			return (Dt = Wn(Dt, e, t, n, r, i)), !0;
		case "pointerover":
			var o = i.pointerId;
			return Sr.set(o, Wn(Sr.get(o) || null, e, t, n, r, i)), !0;
		case "gotpointercapture":
			return (
				(o = i.pointerId), Cr.set(o, Wn(Cr.get(o) || null, e, t, n, r, i)), !0
			);
	}
	return !1;
}
function Bc(e) {
	var t = Kt(e.target);
	if (t !== null) {
		var n = ln(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = Pc(n)), t !== null)) {
					(e.blockedOn = t),
						zc(e.priority, function() {
							Lc(n);
						});
					return;
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function di(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = Ca(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(ha = r), n.target.dispatchEvent(r), (ha = null);
		} else return (t = Ar(n)), t !== null && Ss(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function _l(e, t, n) {
	di(e) && n.delete(t);
}
function sh() {
	(Sa = !1),
		wt !== null && di(wt) && (wt = null),
		Ot !== null && di(Ot) && (Ot = null),
		Dt !== null && di(Dt) && (Dt = null),
		Sr.forEach(_l),
		Cr.forEach(_l);
}
function Hn(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		Sa ||
			((Sa = !0),
			Le.unstable_scheduleCallback(Le.unstable_NormalPriority, sh)));
}
function kr(e) {
	function t(i) {
		return Hn(i, e);
	}
	if (0 < Kr.length) {
		Hn(Kr[0], e);
		for (var n = 1; n < Kr.length; n++) {
			var r = Kr[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		wt !== null && Hn(wt, e),
			Ot !== null && Hn(Ot, e),
			Dt !== null && Hn(Dt, e),
			Sr.forEach(t),
			Cr.forEach(t),
			n = 0;
		n < Et.length;
		n++
	)
		(r = Et[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < Et.length && ((n = Et[0]), n.blockedOn === null); )
		Bc(n), n.blockedOn === null && Et.shift();
}
var Rn = St.ReactCurrentBatchConfig,
	Ii = !0;
function lh(e, t, n, r) {
	var i = B,
		o = Rn.transition;
	Rn.transition = null;
	try {
		(B = 1), Cs(e, t, n, r);
	} finally {
		(B = i), (Rn.transition = o);
	}
}
function uh(e, t, n, r) {
	var i = B,
		o = Rn.transition;
	Rn.transition = null;
	try {
		(B = 4), Cs(e, t, n, r);
	} finally {
		(B = i), (Rn.transition = o);
	}
}
function Cs(e, t, n, r) {
	if (Ii) {
		var i = Ca(e, t, n, r);
		if (i === null) zo(e, t, r, ji, n), kl(e, r);
		else if (ah(i, e, t, n, r)) r.stopPropagation();
		else if ((kl(e, r), t & 4 && -1 < oh.indexOf(e))) {
			for (; i !== null; ) {
				var o = Ar(i);
				if (
					(o !== null && bc(o),
					(o = Ca(e, t, n, r)),
					o === null && zo(e, t, r, ji, n),
					o === i)
				)
					break;
				i = o;
			}
			i !== null && r.stopPropagation();
		} else zo(e, t, r, null, n);
	}
}
var ji = null;
function Ca(e, t, n, r) {
	if (((ji = null), (e = vs(r)), (e = Kt(e)), e !== null))
		if (((t = ln(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = Pc(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (ji = e), null;
}
function Fc(e) {
	switch (e) {
		case "cancel":
		case "click":
		case "close":
		case "contextmenu":
		case "copy":
		case "cut":
		case "auxclick":
		case "dblclick":
		case "dragend":
		case "dragstart":
		case "drop":
		case "focusin":
		case "focusout":
		case "input":
		case "invalid":
		case "keydown":
		case "keypress":
		case "keyup":
		case "mousedown":
		case "mouseup":
		case "paste":
		case "pause":
		case "play":
		case "pointercancel":
		case "pointerdown":
		case "pointerup":
		case "ratechange":
		case "reset":
		case "resize":
		case "seeked":
		case "submit":
		case "touchcancel":
		case "touchend":
		case "touchstart":
		case "volumechange":
		case "change":
		case "selectionchange":
		case "textInput":
		case "compositionstart":
		case "compositionend":
		case "compositionupdate":
		case "beforeblur":
		case "afterblur":
		case "beforeinput":
		case "blur":
		case "fullscreenchange":
		case "focus":
		case "hashchange":
		case "popstate":
		case "select":
		case "selectstart":
			return 1;
		case "drag":
		case "dragenter":
		case "dragexit":
		case "dragleave":
		case "dragover":
		case "mousemove":
		case "mouseout":
		case "mouseover":
		case "pointermove":
		case "pointerout":
		case "pointerover":
		case "scroll":
		case "toggle":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave":
			return 4;
		case "message":
			switch (Yp()) {
				case gs:
					return 1;
				case Dc:
					return 4;
				case Di:
				case Xp:
					return 16;
				case Mc:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var xt = null,
	ks = null,
	pi = null;
function Ac() {
	if (pi) return pi;
	var e,
		t = ks,
		n = t.length,
		r,
		i = "value" in xt ? xt.value : xt.textContent,
		o = i.length;
	for (e = 0; e < n && t[e] === i[e]; e++);
	var a = n - e;
	for (r = 1; r <= a && t[n - r] === i[o - r]; r++);
	return (pi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function hi(e) {
	var t = e.keyCode;
	return (
		"charCode" in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function Yr() {
	return !0;
}
function El() {
	return !1;
}
function ze(e) {
	function t(n, r, i, o, a) {
		(this._reactName = n),
			(this._targetInst = i),
			(this.type = r),
			(this.nativeEvent = o),
			(this.target = a),
			(this.currentTarget = null);
		for (var l in e)
			e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
		return (
			(this.isDefaultPrevented = (o.defaultPrevented != null
			? o.defaultPrevented
			: o.returnValue === !1)
				? Yr
				: El),
			(this.isPropagationStopped = El),
			this
		);
	}
	return (
		Q(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != "unknown" && (n.returnValue = !1),
					(this.isDefaultPrevented = Yr));
			},
			stopPropagation: function() {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
					(this.isPropagationStopped = Yr));
			},
			persist: function() {},
			isPersistent: Yr,
		}),
		t
	);
}
var Bn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	_s = ze(Bn),
	Fr = Q({}, Bn, { view: 0, detail: 0 }),
	ch = ze(Fr),
	wo,
	Oo,
	Qn,
	ro = Q({}, Fr, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Es,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e
				? e.movementX
				: (e !== Qn &&
						(Qn && e.type === "mousemove"
							? ((wo = e.screenX - Qn.screenX), (Oo = e.screenY - Qn.screenY))
							: (Oo = wo = 0),
						(Qn = e)),
				  wo);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Oo;
		},
	}),
	Tl = ze(ro),
	fh = Q({}, ro, { dataTransfer: 0 }),
	dh = ze(fh),
	ph = Q({}, Fr, { relatedTarget: 0 }),
	Do = ze(ph),
	hh = Q({}, Bn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	mh = ze(hh),
	vh = Q({}, Bn, {
		clipboardData: function(e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData;
		},
	}),
	gh = ze(vh),
	yh = Q({}, Bn, { data: 0 }),
	xl = ze(yh),
	Sh = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified",
	},
	Ch = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta",
	},
	kh = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey",
	};
function _h(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = kh[e]) ? !!t[e] : !1;
}
function Es() {
	return _h;
}
var Eh = Q({}, Fr, {
		key: function(e) {
			if (e.key) {
				var t = Sh[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress"
				? ((e = hi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
				: e.type === "keydown" || e.type === "keyup"
				? Ch[e.keyCode] || "Unidentified"
				: "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Es,
		charCode: function(e) {
			return e.type === "keypress" ? hi(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress"
				? hi(e)
				: e.type === "keydown" || e.type === "keyup"
				? e.keyCode
				: 0;
		},
	}),
	Th = ze(Eh),
	xh = Q({}, ro, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	Pl = ze(xh),
	Ph = Q({}, Fr, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Es,
	}),
	Rh = ze(Ph),
	wh = Q({}, Bn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Oh = ze(wh),
	Dh = Q({}, ro, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e
				? e.deltaY
				: "wheelDeltaY" in e
				? -e.wheelDeltaY
				: "wheelDelta" in e
				? -e.wheelDelta
				: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	Mh = ze(Dh),
	Ih = [9, 13, 27, 32],
	Ts = mt && "CompositionEvent" in window,
	lr = null;
mt && "documentMode" in document && (lr = document.documentMode);
var jh = mt && "TextEvent" in window && !lr,
	Uc = mt && (!Ts || (lr && 8 < lr && 11 >= lr)),
	Rl = String.fromCharCode(32),
	wl = !1;
function $c(e, t) {
	switch (e) {
		case "keyup":
			return Ih.indexOf(t.keyCode) !== -1;
		case "keydown":
			return t.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1;
	}
}
function Vc(e) {
	return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var hn = !1;
function bh(e, t) {
	switch (e) {
		case "compositionend":
			return Vc(t);
		case "keypress":
			return t.which !== 32 ? null : ((wl = !0), Rl);
		case "textInput":
			return (e = t.data), e === Rl && wl ? null : e;
		default:
			return null;
	}
}
function Lh(e, t) {
	if (hn)
		return e === "compositionend" || (!Ts && $c(e, t))
			? ((e = Ac()), (pi = ks = xt = null), (hn = !1), e)
			: null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case "compositionend":
			return Uc && t.locale !== "ko" ? null : t.data;
		default:
			return null;
	}
}
var Nh = {
	color: !0,
	date: !0,
	datetime: !0,
	"datetime-local": !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
};
function Ol(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!Nh[e.type] : t === "textarea";
}
function Gc(e, t, n, r) {
	kc(r),
		(t = bi(t, "onChange")),
		0 < t.length &&
			((n = new _s("onChange", "change", null, n, r)),
			e.push({ event: n, listeners: t }));
}
var ur = null,
	_r = null;
function zh(e) {
	tf(e, 0);
}
function io(e) {
	var t = gn(e);
	if (hc(t)) return e;
}
function Bh(e, t) {
	if (e === "change") return t;
}
var Wc = !1;
if (mt) {
	var Mo;
	if (mt) {
		var Io = "oninput" in document;
		if (!Io) {
			var Dl = document.createElement("div");
			Dl.setAttribute("oninput", "return;"),
				(Io = typeof Dl.oninput == "function");
		}
		Mo = Io;
	} else Mo = !1;
	Wc = Mo && (!document.documentMode || 9 < document.documentMode);
}
function Ml() {
	ur && (ur.detachEvent("onpropertychange", Hc), (_r = ur = null));
}
function Hc(e) {
	if (e.propertyName === "value" && io(_r)) {
		var t = [];
		Gc(t, _r, e, vs(e)), xc(zh, t);
	}
}
function Fh(e, t, n) {
	e === "focusin"
		? (Ml(), (ur = t), (_r = n), ur.attachEvent("onpropertychange", Hc))
		: e === "focusout" && Ml();
}
function Ah(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown")
		return io(_r);
}
function Uh(e, t) {
	if (e === "click") return io(t);
}
function $h(e, t) {
	if (e === "input" || e === "change") return io(t);
}
function Vh(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var qe = typeof Object.is == "function" ? Object.is : Vh;
function Er(e, t) {
	if (qe(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var i = n[r];
		if (!na.call(t, i) || !qe(e[i], t[i])) return !1;
	}
	return !0;
}
function Il(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function jl(e, t) {
	var n = Il(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e };
			e = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = Il(n);
	}
}
function Qc(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? Qc(e, t.parentNode)
			: "contains" in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function Jc() {
	for (var e = window, t = Ri(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == "string";
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = Ri(e.document);
	}
	return t;
}
function xs(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === "input" &&
			(e.type === "text" ||
				e.type === "search" ||
				e.type === "tel" ||
				e.type === "url" ||
				e.type === "password")) ||
			t === "textarea" ||
			e.contentEditable === "true")
	);
}
function Gh(e) {
	var t = Jc(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		Qc(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && xs(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				"selectionStart" in n)
			)
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
				e.getSelection)
			) {
				e = e.getSelection();
				var i = n.textContent.length,
					o = Math.min(r.start, i);
				(r = r.end === void 0 ? o : Math.min(r.end, i)),
					!e.extend && o > r && ((i = r), (r = o), (o = i)),
					(i = jl(n, o));
				var a = jl(n, r);
				i &&
					a &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== i.node ||
						e.anchorOffset !== i.offset ||
						e.focusNode !== a.node ||
						e.focusOffset !== a.offset) &&
					((t = t.createRange()),
					t.setStart(i.node, i.offset),
					e.removeAllRanges(),
					o > r
						? (e.addRange(t), e.extend(a.node, a.offset))
						: (t.setEnd(a.node, a.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top);
	}
}
var Wh = mt && "documentMode" in document && 11 >= document.documentMode,
	mn = null,
	ka = null,
	cr = null,
	_a = !1;
function bl(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	_a ||
		mn == null ||
		mn !== Ri(r) ||
		((r = mn),
		"selectionStart" in r && xs(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
			  ).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(cr && Er(cr, r)) ||
			((cr = r),
			(r = bi(ka, "onSelect")),
			0 < r.length &&
				((t = new _s("onSelect", "select", null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = mn))));
}
function Xr(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n["Webkit" + e] = "webkit" + t),
		(n["Moz" + e] = "moz" + t),
		n
	);
}
var vn = {
		animationend: Xr("Animation", "AnimationEnd"),
		animationiteration: Xr("Animation", "AnimationIteration"),
		animationstart: Xr("Animation", "AnimationStart"),
		transitionend: Xr("Transition", "TransitionEnd"),
	},
	jo = {},
	Kc = {};
mt &&
	((Kc = document.createElement("div").style),
	"AnimationEvent" in window ||
		(delete vn.animationend.animation,
		delete vn.animationiteration.animation,
		delete vn.animationstart.animation),
	"TransitionEvent" in window || delete vn.transitionend.transition);
function oo(e) {
	if (jo[e]) return jo[e];
	if (!vn[e]) return e;
	var t = vn[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in Kc) return (jo[e] = t[n]);
	return e;
}
var Yc = oo("animationend"),
	Xc = oo("animationiteration"),
	Zc = oo("animationstart"),
	qc = oo("transitionend"),
	ef = new Map(),
	Ll = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
		" "
	);
function Bt(e, t) {
	ef.set(e, t), sn(t, [e]);
}
for (var bo = 0; bo < Ll.length; bo++) {
	var Lo = Ll[bo],
		Hh = Lo.toLowerCase(),
		Qh = Lo[0].toUpperCase() + Lo.slice(1);
	Bt(Hh, "on" + Qh);
}
Bt(Yc, "onAnimationEnd");
Bt(Xc, "onAnimationIteration");
Bt(Zc, "onAnimationStart");
Bt("dblclick", "onDoubleClick");
Bt("focusin", "onFocus");
Bt("focusout", "onBlur");
Bt(qc, "onTransitionEnd");
Dn("onMouseEnter", ["mouseout", "mouseover"]);
Dn("onMouseLeave", ["mouseout", "mouseover"]);
Dn("onPointerEnter", ["pointerout", "pointerover"]);
Dn("onPointerLeave", ["pointerout", "pointerover"]);
sn(
	"onChange",
	"change click focusin focusout input keydown keyup selectionchange".split(" ")
);
sn(
	"onSelect",
	"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
		" "
	)
);
sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sn(
	"onCompositionEnd",
	"compositionend focusout keydown keypress keyup mousedown".split(" ")
);
sn(
	"onCompositionStart",
	"compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
sn(
	"onCompositionUpdate",
	"compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
		" "
	),
	Jh = new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));
function Nl(e, t, n) {
	var r = e.type || "unknown-event";
	(e.currentTarget = n), Hp(r, t, void 0, e), (e.currentTarget = null);
}
function tf(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			i = r.event;
		r = r.listeners;
		e: {
			var o = void 0;
			if (t)
				for (var a = r.length - 1; 0 <= a; a--) {
					var l = r[a],
						s = l.instance,
						u = l.currentTarget;
					if (((l = l.listener), s !== o && i.isPropagationStopped())) break e;
					Nl(i, l, u), (o = s);
				}
			else
				for (a = 0; a < r.length; a++) {
					if (
						((l = r[a]),
						(s = l.instance),
						(u = l.currentTarget),
						(l = l.listener),
						s !== o && i.isPropagationStopped())
					)
						break e;
					Nl(i, l, u), (o = s);
				}
		}
	}
	if (Oi) throw ((e = ga), (Oi = !1), (ga = null), e);
}
function $(e, t) {
	var n = t[Ra];
	n === void 0 && (n = t[Ra] = new Set());
	var r = e + "__bubble";
	n.has(r) || (nf(t, e, 2, !1), n.add(r));
}
function No(e, t, n) {
	var r = 0;
	t && (r |= 4), nf(n, e, r, t);
}
var Zr =
	"_reactListening" +
	Math.random()
		.toString(36)
		.slice(2);
function Tr(e) {
	if (!e[Zr]) {
		(e[Zr] = !0),
			uc.forEach(function(n) {
				n !== "selectionchange" && (Jh.has(n) || No(n, !1, e), No(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[Zr] || ((t[Zr] = !0), No("selectionchange", !1, t));
	}
}
function nf(e, t, n, r) {
	switch (Fc(t)) {
		case 1:
			var i = lh;
			break;
		case 4:
			i = uh;
			break;
		default:
			i = Cs;
	}
	(n = i.bind(null, t, n, e)),
		(i = void 0),
		!va ||
			(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
			(i = !0),
		r
			? i !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: i })
				: e.addEventListener(t, n, !0)
			: i !== void 0
			? e.addEventListener(t, n, { passive: i })
			: e.addEventListener(t, n, !1);
}
function zo(e, t, n, r, i) {
	var o = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var a = r.tag;
			if (a === 3 || a === 4) {
				var l = r.stateNode.containerInfo;
				if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
				if (a === 4)
					for (a = r.return; a !== null; ) {
						var s = a.tag;
						if (
							(s === 3 || s === 4) &&
							((s = a.stateNode.containerInfo),
							s === i || (s.nodeType === 8 && s.parentNode === i))
						)
							return;
						a = a.return;
					}
				for (; l !== null; ) {
					if (((a = Kt(l)), a === null)) return;
					if (((s = a.tag), s === 5 || s === 6)) {
						r = o = a;
						continue e;
					}
					l = l.parentNode;
				}
			}
			r = r.return;
		}
	xc(function() {
		var u = o,
			c = vs(n),
			f = [];
		e: {
			var d = ef.get(e);
			if (d !== void 0) {
				var g = _s,
					m = e;
				switch (e) {
					case "keypress":
						if (hi(n) === 0) break e;
					case "keydown":
					case "keyup":
						g = Th;
						break;
					case "focusin":
						(m = "focus"), (g = Do);
						break;
					case "focusout":
						(m = "blur"), (g = Do);
						break;
					case "beforeblur":
					case "afterblur":
						g = Do;
						break;
					case "click":
						if (n.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						g = Tl;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						g = dh;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						g = Rh;
						break;
					case Yc:
					case Xc:
					case Zc:
						g = mh;
						break;
					case qc:
						g = Oh;
						break;
					case "scroll":
						g = ch;
						break;
					case "wheel":
						g = Mh;
						break;
					case "copy":
					case "cut":
					case "paste":
						g = gh;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						g = Pl;
				}
				var y = (t & 4) !== 0,
					P = !y && e === "scroll",
					h = y ? (d !== null ? d + "Capture" : null) : d;
				y = [];
				for (var p = u, v; p !== null; ) {
					v = p;
					var C = v.stateNode;
					if (
						(v.tag === 5 &&
							C !== null &&
							((v = C),
							h !== null && ((C = yr(p, h)), C != null && y.push(xr(p, C, v)))),
						P)
					)
						break;
					p = p.return;
				}
				0 < y.length &&
					((d = new g(d, m, null, n, c)), f.push({ event: d, listeners: y }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((d = e === "mouseover" || e === "pointerover"),
					(g = e === "mouseout" || e === "pointerout"),
					d &&
						n !== ha &&
						(m = n.relatedTarget || n.fromElement) &&
						(Kt(m) || m[vt]))
				)
					break e;
				if (
					(g || d) &&
					((d =
						c.window === c
							? c
							: (d = c.ownerDocument)
							? d.defaultView || d.parentWindow
							: window),
					g
						? ((m = n.relatedTarget || n.toElement),
						  (g = u),
						  (m = m ? Kt(m) : null),
						  m !== null &&
								((P = ln(m)), m !== P || (m.tag !== 5 && m.tag !== 6)) &&
								(m = null))
						: ((g = null), (m = u)),
					g !== m)
				) {
					if (
						((y = Tl),
						(C = "onMouseLeave"),
						(h = "onMouseEnter"),
						(p = "mouse"),
						(e === "pointerout" || e === "pointerover") &&
							((y = Pl),
							(C = "onPointerLeave"),
							(h = "onPointerEnter"),
							(p = "pointer")),
						(P = g == null ? d : gn(g)),
						(v = m == null ? d : gn(m)),
						(d = new y(C, p + "leave", g, n, c)),
						(d.target = P),
						(d.relatedTarget = v),
						(C = null),
						Kt(c) === u &&
							((y = new y(h, p + "enter", m, n, c)),
							(y.target = v),
							(y.relatedTarget = P),
							(C = y)),
						(P = C),
						g && m)
					)
						t: {
							for (y = g, h = m, p = 0, v = y; v; v = fn(v)) p++;
							for (v = 0, C = h; C; C = fn(C)) v++;
							for (; 0 < p - v; ) (y = fn(y)), p--;
							for (; 0 < v - p; ) (h = fn(h)), v--;
							for (; p--; ) {
								if (y === h || (h !== null && y === h.alternate)) break t;
								(y = fn(y)), (h = fn(h));
							}
							y = null;
						}
					else y = null;
					g !== null && zl(f, d, g, y, !1),
						m !== null && P !== null && zl(f, P, m, y, !0);
				}
			}
			e: {
				if (
					((d = u ? gn(u) : window),
					(g = d.nodeName && d.nodeName.toLowerCase()),
					g === "select" || (g === "input" && d.type === "file"))
				)
					var S = Bh;
				else if (Ol(d))
					if (Wc) S = $h;
					else {
						S = Ah;
						var k = Fh;
					}
				else
					(g = d.nodeName) &&
						g.toLowerCase() === "input" &&
						(d.type === "checkbox" || d.type === "radio") &&
						(S = Uh);
				if (S && (S = S(e, u))) {
					Gc(f, S, n, c);
					break e;
				}
				k && k(e, d, u),
					e === "focusout" &&
						(k = d._wrapperState) &&
						k.controlled &&
						d.type === "number" &&
						ua(d, "number", d.value);
			}
			switch (((k = u ? gn(u) : window), e)) {
				case "focusin":
					(Ol(k) || k.contentEditable === "true") &&
						((mn = k), (ka = u), (cr = null));
					break;
				case "focusout":
					cr = ka = mn = null;
					break;
				case "mousedown":
					_a = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					(_a = !1), bl(f, n, c);
					break;
				case "selectionchange":
					if (Wh) break;
				case "keydown":
				case "keyup":
					bl(f, n, c);
			}
			var E;
			if (Ts)
				e: {
					switch (e) {
						case "compositionstart":
							var _ = "onCompositionStart";
							break e;
						case "compositionend":
							_ = "onCompositionEnd";
							break e;
						case "compositionupdate":
							_ = "onCompositionUpdate";
							break e;
					}
					_ = void 0;
				}
			else
				hn
					? $c(e, n) && (_ = "onCompositionEnd")
					: e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
			_ &&
				(Uc &&
					n.locale !== "ko" &&
					(hn || _ !== "onCompositionStart"
						? _ === "onCompositionEnd" && hn && (E = Ac())
						: ((xt = c),
						  (ks = "value" in xt ? xt.value : xt.textContent),
						  (hn = !0))),
				(k = bi(u, _)),
				0 < k.length &&
					((_ = new xl(_, e, null, n, c)),
					f.push({ event: _, listeners: k }),
					E ? (_.data = E) : ((E = Vc(n)), E !== null && (_.data = E)))),
				(E = jh ? bh(e, n) : Lh(e, n)) &&
					((u = bi(u, "onBeforeInput")),
					0 < u.length &&
						((c = new xl("onBeforeInput", "beforeinput", null, n, c)),
						f.push({ event: c, listeners: u }),
						(c.data = E)));
		}
		tf(f, t);
	});
}
function xr(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function bi(e, t) {
	for (var n = t + "Capture", r = []; e !== null; ) {
		var i = e,
			o = i.stateNode;
		i.tag === 5 &&
			o !== null &&
			((i = o),
			(o = yr(e, n)),
			o != null && r.unshift(xr(e, o, i)),
			(o = yr(e, t)),
			o != null && r.push(xr(e, o, i))),
			(e = e.return);
	}
	return r;
}
function fn(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function zl(e, t, n, r, i) {
	for (var o = t._reactName, a = []; n !== null && n !== r; ) {
		var l = n,
			s = l.alternate,
			u = l.stateNode;
		if (s !== null && s === r) break;
		l.tag === 5 &&
			u !== null &&
			((l = u),
			i
				? ((s = yr(n, o)), s != null && a.unshift(xr(n, s, l)))
				: i || ((s = yr(n, o)), s != null && a.push(xr(n, s, l)))),
			(n = n.return);
	}
	a.length !== 0 && e.push({ event: t, listeners: a });
}
var Kh = /\r\n?/g,
	Yh = /\u0000|\uFFFD/g;
function Bl(e) {
	return (typeof e == "string" ? e : "" + e)
		.replace(
			Kh,
			`
`
		)
		.replace(Yh, "");
}
function qr(e, t, n) {
	if (((t = Bl(t)), Bl(e) !== t && n)) throw Error(T(425));
}
function Li() {}
var Ea = null,
	Ta = null;
function xa(e, t) {
	return (
		e === "textarea" ||
		e === "noscript" ||
		typeof t.children == "string" ||
		typeof t.children == "number" ||
		(typeof t.dangerouslySetInnerHTML == "object" &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var Pa = typeof setTimeout == "function" ? setTimeout : void 0,
	Xh = typeof clearTimeout == "function" ? clearTimeout : void 0,
	Fl = typeof Promise == "function" ? Promise : void 0,
	Zh =
		typeof queueMicrotask == "function"
			? queueMicrotask
			: typeof Fl < "u"
			? function(e) {
					return Fl.resolve(null)
						.then(e)
						.catch(qh);
			  }
			: Pa;
function qh(e) {
	setTimeout(function() {
		throw e;
	});
}
function Bo(e, t) {
	var n = t,
		r = 0;
	do {
		var i = n.nextSibling;
		if ((e.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === "/$")) {
				if (r === 0) {
					e.removeChild(i), kr(t);
					return;
				}
				r--;
			} else (n !== "$" && n !== "$?" && n !== "$!") || r++;
		n = i;
	} while (n);
	kr(t);
}
function Mt(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
			if (t === "/$") return null;
		}
	}
	return e;
}
function Al(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e;
				t--;
			} else n === "/$" && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var Fn = Math.random()
		.toString(36)
		.slice(2),
	nt = "__reactFiber$" + Fn,
	Pr = "__reactProps$" + Fn,
	vt = "__reactContainer$" + Fn,
	Ra = "__reactEvents$" + Fn,
	em = "__reactListeners$" + Fn,
	tm = "__reactHandles$" + Fn;
function Kt(e) {
	var t = e[nt];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[vt] || n[nt])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = Al(e); e !== null; ) {
					if ((n = e[nt])) return n;
					e = Al(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function Ar(e) {
	return (
		(e = e[nt] || e[vt]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function gn(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(T(33));
}
function ao(e) {
	return e[Pr] || null;
}
var wa = [],
	yn = -1;
function Ft(e) {
	return { current: e };
}
function V(e) {
	0 > yn || ((e.current = wa[yn]), (wa[yn] = null), yn--);
}
function A(e, t) {
	yn++, (wa[yn] = e.current), (e.current = t);
}
var zt = {},
	ve = Ft(zt),
	Oe = Ft(!1),
	tn = zt;
function Mn(e, t) {
	var n = e.type.contextTypes;
	if (!n) return zt;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var i = {},
		o;
	for (o in n) i[o] = t[o];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		i
	);
}
function De(e) {
	return (e = e.childContextTypes), e != null;
}
function Ni() {
	V(Oe), V(ve);
}
function Ul(e, t, n) {
	if (ve.current !== zt) throw Error(T(168));
	A(ve, t), A(Oe, n);
}
function rf(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
		return n;
	r = r.getChildContext();
	for (var i in r) if (!(i in t)) throw Error(T(108, Fp(e) || "Unknown", i));
	return Q({}, n, r);
}
function zi(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || zt),
		(tn = ve.current),
		A(ve, e),
		A(Oe, Oe.current),
		!0
	);
}
function $l(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(T(169));
	n
		? ((e = rf(e, t, tn)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  V(Oe),
		  V(ve),
		  A(ve, e))
		: V(Oe),
		A(Oe, n);
}
var ct = null,
	so = !1,
	Fo = !1;
function of(e) {
	ct === null ? (ct = [e]) : ct.push(e);
}
function nm(e) {
	(so = !0), of(e);
}
function At() {
	if (!Fo && ct !== null) {
		Fo = !0;
		var e = 0,
			t = B;
		try {
			var n = ct;
			for (B = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(ct = null), (so = !1);
		} catch (i) {
			throw (ct !== null && (ct = ct.slice(e + 1)), Oc(gs, At), i);
		} finally {
			(B = t), (Fo = !1);
		}
	}
	return null;
}
var Sn = [],
	Cn = 0,
	Bi = null,
	Fi = 0,
	Fe = [],
	Ae = 0,
	nn = null,
	ft = 1,
	dt = "";
function Ht(e, t) {
	(Sn[Cn++] = Fi), (Sn[Cn++] = Bi), (Bi = e), (Fi = t);
}
function af(e, t, n) {
	(Fe[Ae++] = ft), (Fe[Ae++] = dt), (Fe[Ae++] = nn), (nn = e);
	var r = ft;
	e = dt;
	var i = 32 - Xe(r) - 1;
	(r &= ~(1 << i)), (n += 1);
	var o = 32 - Xe(t) + i;
	if (30 < o) {
		var a = i - (i % 5);
		(o = (r & ((1 << a) - 1)).toString(32)),
			(r >>= a),
			(i -= a),
			(ft = (1 << (32 - Xe(t) + i)) | (n << i) | r),
			(dt = o + e);
	} else (ft = (1 << o) | (n << i) | r), (dt = e);
}
function Ps(e) {
	e.return !== null && (Ht(e, 1), af(e, 1, 0));
}
function Rs(e) {
	for (; e === Bi; )
		(Bi = Sn[--Cn]), (Sn[Cn] = null), (Fi = Sn[--Cn]), (Sn[Cn] = null);
	for (; e === nn; )
		(nn = Fe[--Ae]),
			(Fe[Ae] = null),
			(dt = Fe[--Ae]),
			(Fe[Ae] = null),
			(ft = Fe[--Ae]),
			(Fe[Ae] = null);
}
var be = null,
	je = null,
	G = !1,
	Ke = null;
function sf(e, t) {
	var n = Ue(5, null, null, 0);
	(n.elementType = "DELETED"),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Vl(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (be = e), (je = Mt(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (be = e), (je = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = nn !== null ? { id: ft, overflow: dt } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = Ue(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (be = e),
					  (je = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function Oa(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Da(e) {
	if (G) {
		var t = je;
		if (t) {
			var n = t;
			if (!Vl(e, t)) {
				if (Oa(e)) throw Error(T(418));
				t = Mt(n.nextSibling);
				var r = be;
				t && Vl(e, t)
					? sf(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (G = !1), (be = e));
			}
		} else {
			if (Oa(e)) throw Error(T(418));
			(e.flags = (e.flags & -4097) | 2), (G = !1), (be = e);
		}
	}
}
function Gl(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	be = e;
}
function ei(e) {
	if (e !== be) return !1;
	if (!G) return Gl(e), (G = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== "head" && t !== "body" && !xa(e.type, e.memoizedProps))),
		t && (t = je))
	) {
		if (Oa(e)) throw (lf(), Error(T(418)));
		for (; t; ) sf(e, t), (t = Mt(t.nextSibling));
	}
	if ((Gl(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(T(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							je = Mt(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== "$" && n !== "$!" && n !== "$?") || t++;
				}
				e = e.nextSibling;
			}
			je = null;
		}
	} else je = be ? Mt(e.stateNode.nextSibling) : null;
	return !0;
}
function lf() {
	for (var e = je; e; ) e = Mt(e.nextSibling);
}
function In() {
	(je = be = null), (G = !1);
}
function ws(e) {
	Ke === null ? (Ke = [e]) : Ke.push(e);
}
var rm = St.ReactCurrentBatchConfig;
function Qe(e, t) {
	if (e && e.defaultProps) {
		(t = Q({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
var Ai = Ft(null),
	Ui = null,
	kn = null,
	Os = null;
function Ds() {
	Os = kn = Ui = null;
}
function Ms(e) {
	var t = Ai.current;
	V(Ai), (e._currentValue = t);
}
function Ma(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break;
		e = e.return;
	}
}
function wn(e, t) {
	(Ui = e),
		(Os = kn = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (we = !0), (e.firstContext = null));
}
function Ve(e) {
	var t = e._currentValue;
	if (Os !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), kn === null)) {
			if (Ui === null) throw Error(T(308));
			(kn = e), (Ui.dependencies = { lanes: 0, firstContext: e });
		} else kn = kn.next = e;
	return t;
}
var Yt = null;
function Is(e) {
	Yt === null ? (Yt = [e]) : Yt.push(e);
}
function uf(e, t, n, r) {
	var i = t.interleaved;
	return (
		i === null ? ((n.next = n), Is(t)) : ((n.next = i.next), (i.next = n)),
		(t.interleaved = n),
		gt(e, r)
	);
}
function gt(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var _t = !1;
function js(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function cf(e, t) {
	(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			});
}
function ht(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function It(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), N & 2)) {
		var i = r.pending;
		return (
			i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
			(r.pending = t),
			gt(e, n)
		);
	}
	return (
		(i = r.interleaved),
		i === null ? ((t.next = t), Is(r)) : ((t.next = i.next), (i.next = t)),
		(r.interleaved = t),
		gt(e, n)
	);
}
function mi(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), ys(e, n);
	}
}
function Wl(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var i = null,
			o = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var a = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				o === null ? (i = o = a) : (o = o.next = a), (n = n.next);
			} while (n !== null);
			o === null ? (i = o = t) : (o = o.next = t);
		} else i = o = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
			lastBaseUpdate: o,
			shared: r.shared,
			effects: r.effects,
		}),
			(e.updateQueue = n);
		return;
	}
	(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t);
}
function $i(e, t, n, r) {
	var i = e.updateQueue;
	_t = !1;
	var o = i.firstBaseUpdate,
		a = i.lastBaseUpdate,
		l = i.shared.pending;
	if (l !== null) {
		i.shared.pending = null;
		var s = l,
			u = s.next;
		(s.next = null), a === null ? (o = u) : (a.next = u), (a = s);
		var c = e.alternate;
		c !== null &&
			((c = c.updateQueue),
			(l = c.lastBaseUpdate),
			l !== a &&
				(l === null ? (c.firstBaseUpdate = u) : (l.next = u),
				(c.lastBaseUpdate = s)));
	}
	if (o !== null) {
		var f = i.baseState;
		(a = 0), (c = u = s = null), (l = o);
		do {
			var d = l.lane,
				g = l.eventTime;
			if ((r & d) === d) {
				c !== null &&
					(c = c.next = {
						eventTime: g,
						lane: 0,
						tag: l.tag,
						payload: l.payload,
						callback: l.callback,
						next: null,
					});
				e: {
					var m = e,
						y = l;
					switch (((d = t), (g = n), y.tag)) {
						case 1:
							if (((m = y.payload), typeof m == "function")) {
								f = m.call(g, f, d);
								break e;
							}
							f = m;
							break e;
						case 3:
							m.flags = (m.flags & -65537) | 128;
						case 0:
							if (
								((m = y.payload),
								(d = typeof m == "function" ? m.call(g, f, d) : m),
								d == null)
							)
								break e;
							f = Q({}, f, d);
							break e;
						case 2:
							_t = !0;
					}
				}
				l.callback !== null &&
					l.lane !== 0 &&
					((e.flags |= 64),
					(d = i.effects),
					d === null ? (i.effects = [l]) : d.push(l));
			} else
				(g = {
					eventTime: g,
					lane: d,
					tag: l.tag,
					payload: l.payload,
					callback: l.callback,
					next: null,
				}),
					c === null ? ((u = c = g), (s = f)) : (c = c.next = g),
					(a |= d);
			if (((l = l.next), l === null)) {
				if (((l = i.shared.pending), l === null)) break;
				(d = l),
					(l = d.next),
					(d.next = null),
					(i.lastBaseUpdate = d),
					(i.shared.pending = null);
			}
		} while (1);
		if (
			(c === null && (s = f),
			(i.baseState = s),
			(i.firstBaseUpdate = u),
			(i.lastBaseUpdate = c),
			(t = i.shared.interleaved),
			t !== null)
		) {
			i = t;
			do (a |= i.lane), (i = i.next);
			while (i !== t);
		} else o === null && (i.shared.lanes = 0);
		(on |= a), (e.lanes = a), (e.memoizedState = f);
	}
}
function Hl(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				i = r.callback;
			if (i !== null) {
				if (((r.callback = null), (r = n), typeof i != "function"))
					throw Error(T(191, i));
				i.call(r);
			}
		}
}
var ff = new lc.Component().refs;
function Ia(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : Q({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var lo = {
	isMounted: function(e) {
		return (e = e._reactInternals) ? ln(e) === e : !1;
	},
	enqueueSetState: function(e, t, n) {
		e = e._reactInternals;
		var r = Se(),
			i = bt(e),
			o = ht(r, i);
		(o.payload = t),
			n != null && (o.callback = n),
			(t = It(e, o, i)),
			t !== null && (Ze(t, e, i, r), mi(t, e, i));
	},
	enqueueReplaceState: function(e, t, n) {
		e = e._reactInternals;
		var r = Se(),
			i = bt(e),
			o = ht(r, i);
		(o.tag = 1),
			(o.payload = t),
			n != null && (o.callback = n),
			(t = It(e, o, i)),
			t !== null && (Ze(t, e, i, r), mi(t, e, i));
	},
	enqueueForceUpdate: function(e, t) {
		e = e._reactInternals;
		var n = Se(),
			r = bt(e),
			i = ht(n, r);
		(i.tag = 2),
			t != null && (i.callback = t),
			(t = It(e, i, r)),
			t !== null && (Ze(t, e, r, n), mi(t, e, r));
	},
};
function Ql(e, t, n, r, i, o, a) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == "function"
			? e.shouldComponentUpdate(r, o, a)
			: t.prototype && t.prototype.isPureReactComponent
			? !Er(n, r) || !Er(i, o)
			: !0
	);
}
function df(e, t, n) {
	var r = !1,
		i = zt,
		o = t.contextType;
	return (
		typeof o == "object" && o !== null
			? (o = Ve(o))
			: ((i = De(t) ? tn : ve.current),
			  (r = t.contextTypes),
			  (o = (r = r != null) ? Mn(e, i) : zt)),
		(t = new t(n, o)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = lo),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = i),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		t
	);
}
function Jl(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == "function" &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == "function" &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && lo.enqueueReplaceState(t, t.state, null);
}
function ja(e, t, n, r) {
	var i = e.stateNode;
	(i.props = n), (i.state = e.memoizedState), (i.refs = ff), js(e);
	var o = t.contextType;
	typeof o == "object" && o !== null
		? (i.context = Ve(o))
		: ((o = De(t) ? tn : ve.current), (i.context = Mn(e, o))),
		(i.state = e.memoizedState),
		(o = t.getDerivedStateFromProps),
		typeof o == "function" && (Ia(e, t, o, n), (i.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == "function" ||
			typeof i.getSnapshotBeforeUpdate == "function" ||
			(typeof i.UNSAFE_componentWillMount != "function" &&
				typeof i.componentWillMount != "function") ||
			((t = i.state),
			typeof i.componentWillMount == "function" && i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == "function" &&
				i.UNSAFE_componentWillMount(),
			t !== i.state && lo.enqueueReplaceState(i, i.state, null),
			$i(e, n, i, r),
			(i.state = e.memoizedState)),
		typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Jn(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(T(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(T(147, e));
			var i = r,
				o = "" + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == "function" &&
				t.ref._stringRef === o
				? t.ref
				: ((t = function(a) {
						var l = i.refs;
						l === ff && (l = i.refs = {}),
							a === null ? delete l[o] : (l[o] = a);
				  }),
				  (t._stringRef = o),
				  t);
		}
		if (typeof e != "string") throw Error(T(284));
		if (!n._owner) throw Error(T(290, e));
	}
	return e;
}
function ti(e, t) {
	throw ((e = Object.prototype.toString.call(t)),
	Error(
		T(
			31,
			e === "[object Object]"
				? "object with keys {" + Object.keys(t).join(", ") + "}"
				: e
		)
	));
}
function Kl(e) {
	var t = e._init;
	return t(e._payload);
}
function pf(e) {
	function t(h, p) {
		if (e) {
			var v = h.deletions;
			v === null ? ((h.deletions = [p]), (h.flags |= 16)) : v.push(p);
		}
	}
	function n(h, p) {
		if (!e) return null;
		for (; p !== null; ) t(h, p), (p = p.sibling);
		return null;
	}
	function r(h, p) {
		for (h = new Map(); p !== null; )
			p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
		return h;
	}
	function i(h, p) {
		return (h = Lt(h, p)), (h.index = 0), (h.sibling = null), h;
	}
	function o(h, p, v) {
		return (
			(h.index = v),
			e
				? ((v = h.alternate),
				  v !== null
						? ((v = v.index), v < p ? ((h.flags |= 2), p) : v)
						: ((h.flags |= 2), p))
				: ((h.flags |= 1048576), p)
		);
	}
	function a(h) {
		return e && h.alternate === null && (h.flags |= 2), h;
	}
	function l(h, p, v, C) {
		return p === null || p.tag !== 6
			? ((p = Ho(v, h.mode, C)), (p.return = h), p)
			: ((p = i(p, v)), (p.return = h), p);
	}
	function s(h, p, v, C) {
		var S = v.type;
		return S === pn
			? c(h, p, v.props.children, C, v.key)
			: p !== null &&
			  (p.elementType === S ||
					(typeof S == "object" &&
						S !== null &&
						S.$$typeof === kt &&
						Kl(S) === p.type))
			? ((C = i(p, v.props)), (C.ref = Jn(h, p, v)), (C.return = h), C)
			: ((C = ki(v.type, v.key, v.props, null, h.mode, C)),
			  (C.ref = Jn(h, p, v)),
			  (C.return = h),
			  C);
	}
	function u(h, p, v, C) {
		return p === null ||
			p.tag !== 4 ||
			p.stateNode.containerInfo !== v.containerInfo ||
			p.stateNode.implementation !== v.implementation
			? ((p = Qo(v, h.mode, C)), (p.return = h), p)
			: ((p = i(p, v.children || [])), (p.return = h), p);
	}
	function c(h, p, v, C, S) {
		return p === null || p.tag !== 7
			? ((p = qt(v, h.mode, C, S)), (p.return = h), p)
			: ((p = i(p, v)), (p.return = h), p);
	}
	function f(h, p, v) {
		if ((typeof p == "string" && p !== "") || typeof p == "number")
			return (p = Ho("" + p, h.mode, v)), (p.return = h), p;
		if (typeof p == "object" && p !== null) {
			switch (p.$$typeof) {
				case Gr:
					return (
						(v = ki(p.type, p.key, p.props, null, h.mode, v)),
						(v.ref = Jn(h, null, p)),
						(v.return = h),
						v
					);
				case dn:
					return (p = Qo(p, h.mode, v)), (p.return = h), p;
				case kt:
					var C = p._init;
					return f(h, C(p._payload), v);
			}
			if (er(p) || Vn(p))
				return (p = qt(p, h.mode, v, null)), (p.return = h), p;
			ti(h, p);
		}
		return null;
	}
	function d(h, p, v, C) {
		var S = p !== null ? p.key : null;
		if ((typeof v == "string" && v !== "") || typeof v == "number")
			return S !== null ? null : l(h, p, "" + v, C);
		if (typeof v == "object" && v !== null) {
			switch (v.$$typeof) {
				case Gr:
					return v.key === S ? s(h, p, v, C) : null;
				case dn:
					return v.key === S ? u(h, p, v, C) : null;
				case kt:
					return (S = v._init), d(h, p, S(v._payload), C);
			}
			if (er(v) || Vn(v)) return S !== null ? null : c(h, p, v, C, null);
			ti(h, v);
		}
		return null;
	}
	function g(h, p, v, C, S) {
		if ((typeof C == "string" && C !== "") || typeof C == "number")
			return (h = h.get(v) || null), l(p, h, "" + C, S);
		if (typeof C == "object" && C !== null) {
			switch (C.$$typeof) {
				case Gr:
					return (h = h.get(C.key === null ? v : C.key) || null), s(p, h, C, S);
				case dn:
					return (h = h.get(C.key === null ? v : C.key) || null), u(p, h, C, S);
				case kt:
					var k = C._init;
					return g(h, p, v, k(C._payload), S);
			}
			if (er(C) || Vn(C)) return (h = h.get(v) || null), c(p, h, C, S, null);
			ti(p, C);
		}
		return null;
	}
	function m(h, p, v, C) {
		for (
			var S = null, k = null, E = p, _ = (p = 0), M = null;
			E !== null && _ < v.length;
			_++
		) {
			E.index > _ ? ((M = E), (E = null)) : (M = E.sibling);
			var x = d(h, E, v[_], C);
			if (x === null) {
				E === null && (E = M);
				break;
			}
			e && E && x.alternate === null && t(h, E),
				(p = o(x, p, _)),
				k === null ? (S = x) : (k.sibling = x),
				(k = x),
				(E = M);
		}
		if (_ === v.length) return n(h, E), G && Ht(h, _), S;
		if (E === null) {
			for (; _ < v.length; _++)
				(E = f(h, v[_], C)),
					E !== null &&
						((p = o(E, p, _)), k === null ? (S = E) : (k.sibling = E), (k = E));
			return G && Ht(h, _), S;
		}
		for (E = r(h, E); _ < v.length; _++)
			(M = g(E, h, _, v[_], C)),
				M !== null &&
					(e && M.alternate !== null && E.delete(M.key === null ? _ : M.key),
					(p = o(M, p, _)),
					k === null ? (S = M) : (k.sibling = M),
					(k = M));
		return (
			e &&
				E.forEach(function(ne) {
					return t(h, ne);
				}),
			G && Ht(h, _),
			S
		);
	}
	function y(h, p, v, C) {
		var S = Vn(v);
		if (typeof S != "function") throw Error(T(150));
		if (((v = S.call(v)), v == null)) throw Error(T(151));
		for (
			var k = (S = null), E = p, _ = (p = 0), M = null, x = v.next();
			E !== null && !x.done;
			_++, x = v.next()
		) {
			E.index > _ ? ((M = E), (E = null)) : (M = E.sibling);
			var ne = d(h, E, x.value, C);
			if (ne === null) {
				E === null && (E = M);
				break;
			}
			e && E && ne.alternate === null && t(h, E),
				(p = o(ne, p, _)),
				k === null ? (S = ne) : (k.sibling = ne),
				(k = ne),
				(E = M);
		}
		if (x.done) return n(h, E), G && Ht(h, _), S;
		if (E === null) {
			for (; !x.done; _++, x = v.next())
				(x = f(h, x.value, C)),
					x !== null &&
						((p = o(x, p, _)), k === null ? (S = x) : (k.sibling = x), (k = x));
			return G && Ht(h, _), S;
		}
		for (E = r(h, E); !x.done; _++, x = v.next())
			(x = g(E, h, _, x.value, C)),
				x !== null &&
					(e && x.alternate !== null && E.delete(x.key === null ? _ : x.key),
					(p = o(x, p, _)),
					k === null ? (S = x) : (k.sibling = x),
					(k = x));
		return (
			e &&
				E.forEach(function(We) {
					return t(h, We);
				}),
			G && Ht(h, _),
			S
		);
	}
	function P(h, p, v, C) {
		if (
			(typeof v == "object" &&
				v !== null &&
				v.type === pn &&
				v.key === null &&
				(v = v.props.children),
			typeof v == "object" && v !== null)
		) {
			switch (v.$$typeof) {
				case Gr:
					e: {
						for (var S = v.key, k = p; k !== null; ) {
							if (k.key === S) {
								if (((S = v.type), S === pn)) {
									if (k.tag === 7) {
										n(h, k.sibling),
											(p = i(k, v.props.children)),
											(p.return = h),
											(h = p);
										break e;
									}
								} else if (
									k.elementType === S ||
									(typeof S == "object" &&
										S !== null &&
										S.$$typeof === kt &&
										Kl(S) === k.type)
								) {
									n(h, k.sibling),
										(p = i(k, v.props)),
										(p.ref = Jn(h, k, v)),
										(p.return = h),
										(h = p);
									break e;
								}
								n(h, k);
								break;
							} else t(h, k);
							k = k.sibling;
						}
						v.type === pn
							? ((p = qt(v.props.children, h.mode, C, v.key)),
							  (p.return = h),
							  (h = p))
							: ((C = ki(v.type, v.key, v.props, null, h.mode, C)),
							  (C.ref = Jn(h, p, v)),
							  (C.return = h),
							  (h = C));
					}
					return a(h);
				case dn:
					e: {
						for (k = v.key; p !== null; ) {
							if (p.key === k)
								if (
									p.tag === 4 &&
									p.stateNode.containerInfo === v.containerInfo &&
									p.stateNode.implementation === v.implementation
								) {
									n(h, p.sibling),
										(p = i(p, v.children || [])),
										(p.return = h),
										(h = p);
									break e;
								} else {
									n(h, p);
									break;
								}
							else t(h, p);
							p = p.sibling;
						}
						(p = Qo(v, h.mode, C)), (p.return = h), (h = p);
					}
					return a(h);
				case kt:
					return (k = v._init), P(h, p, k(v._payload), C);
			}
			if (er(v)) return m(h, p, v, C);
			if (Vn(v)) return y(h, p, v, C);
			ti(h, v);
		}
		return (typeof v == "string" && v !== "") || typeof v == "number"
			? ((v = "" + v),
			  p !== null && p.tag === 6
					? (n(h, p.sibling), (p = i(p, v)), (p.return = h), (h = p))
					: (n(h, p), (p = Ho(v, h.mode, C)), (p.return = h), (h = p)),
			  a(h))
			: n(h, p);
	}
	return P;
}
var jn = pf(!0),
	hf = pf(!1),
	Ur = {},
	it = Ft(Ur),
	Rr = Ft(Ur),
	wr = Ft(Ur);
function Xt(e) {
	if (e === Ur) throw Error(T(174));
	return e;
}
function bs(e, t) {
	switch ((A(wr, t), A(Rr, e), A(it, Ur), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : fa(null, "");
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = fa(t, e));
	}
	V(it), A(it, t);
}
function bn() {
	V(it), V(Rr), V(wr);
}
function mf(e) {
	Xt(wr.current);
	var t = Xt(it.current),
		n = fa(t, e.type);
	t !== n && (A(Rr, e), A(it, n));
}
function Ls(e) {
	Rr.current === e && (V(it), V(Rr));
}
var W = Ft(0);
function Vi(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
			)
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var Ao = [];
function Ns() {
	for (var e = 0; e < Ao.length; e++)
		Ao[e]._workInProgressVersionPrimary = null;
	Ao.length = 0;
}
var vi = St.ReactCurrentDispatcher,
	Uo = St.ReactCurrentBatchConfig,
	rn = 0,
	H = null,
	q = null,
	re = null,
	Gi = !1,
	fr = !1,
	Or = 0,
	im = 0;
function de() {
	throw Error(T(321));
}
function zs(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!qe(e[n], t[n])) return !1;
	return !0;
}
function Bs(e, t, n, r, i, o) {
	if (
		((rn = o),
		(H = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(vi.current = e === null || e.memoizedState === null ? lm : um),
		(e = n(r, i)),
		fr)
	) {
		o = 0;
		do {
			if (((fr = !1), (Or = 0), 25 <= o)) throw Error(T(301));
			(o += 1),
				(re = q = null),
				(t.updateQueue = null),
				(vi.current = cm),
				(e = n(r, i));
		} while (fr);
	}
	if (
		((vi.current = Wi),
		(t = q !== null && q.next !== null),
		(rn = 0),
		(re = q = H = null),
		(Gi = !1),
		t)
	)
		throw Error(T(300));
	return e;
}
function Fs() {
	var e = Or !== 0;
	return (Or = 0), e;
}
function tt() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return re === null ? (H.memoizedState = re = e) : (re = re.next = e), re;
}
function Ge() {
	if (q === null) {
		var e = H.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = q.next;
	var t = re === null ? H.memoizedState : re.next;
	if (t !== null) (re = t), (q = e);
	else {
		if (e === null) throw Error(T(310));
		(q = e),
			(e = {
				memoizedState: q.memoizedState,
				baseState: q.baseState,
				baseQueue: q.baseQueue,
				queue: q.queue,
				next: null,
			}),
			re === null ? (H.memoizedState = re = e) : (re = re.next = e);
	}
	return re;
}
function Dr(e, t) {
	return typeof t == "function" ? t(e) : t;
}
function $o(e) {
	var t = Ge(),
		n = t.queue;
	if (n === null) throw Error(T(311));
	n.lastRenderedReducer = e;
	var r = q,
		i = r.baseQueue,
		o = n.pending;
	if (o !== null) {
		if (i !== null) {
			var a = i.next;
			(i.next = o.next), (o.next = a);
		}
		(r.baseQueue = i = o), (n.pending = null);
	}
	if (i !== null) {
		(o = i.next), (r = r.baseState);
		var l = (a = null),
			s = null,
			u = o;
		do {
			var c = u.lane;
			if ((rn & c) === c)
				s !== null &&
					(s = s.next = {
						lane: 0,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null,
					}),
					(r = u.hasEagerState ? u.eagerState : e(r, u.action));
			else {
				var f = {
					lane: c,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null,
				};
				s === null ? ((l = s = f), (a = r)) : (s = s.next = f),
					(H.lanes |= c),
					(on |= c);
			}
			u = u.next;
		} while (u !== null && u !== o);
		s === null ? (a = r) : (s.next = l),
			qe(r, t.memoizedState) || (we = !0),
			(t.memoizedState = r),
			(t.baseState = a),
			(t.baseQueue = s),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		i = e;
		do (o = i.lane), (H.lanes |= o), (on |= o), (i = i.next);
		while (i !== e);
	} else i === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function Vo(e) {
	var t = Ge(),
		n = t.queue;
	if (n === null) throw Error(T(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		i = n.pending,
		o = t.memoizedState;
	if (i !== null) {
		n.pending = null;
		var a = (i = i.next);
		do (o = e(o, a.action)), (a = a.next);
		while (a !== i);
		qe(o, t.memoizedState) || (we = !0),
			(t.memoizedState = o),
			t.baseQueue === null && (t.baseState = o),
			(n.lastRenderedState = o);
	}
	return [o, r];
}
function vf() {}
function gf(e, t) {
	var n = H,
		r = Ge(),
		i = t(),
		o = !qe(r.memoizedState, i);
	if (
		(o && ((r.memoizedState = i), (we = !0)),
		(r = r.queue),
		As(Cf.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || o || (re !== null && re.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			Mr(9, Sf.bind(null, n, r, i, t), void 0, null),
			ie === null)
		)
			throw Error(T(349));
		rn & 30 || yf(n, t, i);
	}
	return i;
}
function yf(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = H.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (H.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Sf(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), kf(t) && _f(e);
}
function Cf(e, t, n) {
	return n(function() {
		kf(t) && _f(e);
	});
}
function kf(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !qe(e, n);
	} catch {
		return !0;
	}
}
function _f(e) {
	var t = gt(e, 1);
	t !== null && Ze(t, e, 1, -1);
}
function Yl(e) {
	var t = tt();
	return (
		typeof e == "function" && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Dr,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = sm.bind(null, H, e)),
		[t.memoizedState, e]
	);
}
function Mr(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = H.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (H.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function Ef() {
	return Ge().memoizedState;
}
function gi(e, t, n, r) {
	var i = tt();
	(H.flags |= e),
		(i.memoizedState = Mr(1 | t, n, void 0, r === void 0 ? null : r));
}
function uo(e, t, n, r) {
	var i = Ge();
	r = r === void 0 ? null : r;
	var o = void 0;
	if (q !== null) {
		var a = q.memoizedState;
		if (((o = a.destroy), r !== null && zs(r, a.deps))) {
			i.memoizedState = Mr(t, n, o, r);
			return;
		}
	}
	(H.flags |= e), (i.memoizedState = Mr(1 | t, n, o, r));
}
function Xl(e, t) {
	return gi(8390656, 8, e, t);
}
function As(e, t) {
	return uo(2048, 8, e, t);
}
function Tf(e, t) {
	return uo(4, 2, e, t);
}
function xf(e, t) {
	return uo(4, 4, e, t);
}
function Pf(e, t) {
	if (typeof t == "function")
		return (
			(e = e()),
			t(e),
			function() {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function() {
				t.current = null;
			}
		);
}
function Rf(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), uo(4, 4, Pf.bind(null, t, e), n)
	);
}
function Us() {}
function wf(e, t) {
	var n = Ge();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && zs(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function Of(e, t) {
	var n = Ge();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && zs(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function Df(e, t, n) {
	return rn & 21
		? (qe(n, t) || ((n = Ic()), (H.lanes |= n), (on |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (we = !0)), (e.memoizedState = n));
}
function om(e, t) {
	var n = B;
	(B = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = Uo.transition;
	Uo.transition = {};
	try {
		e(!1), t();
	} finally {
		(B = n), (Uo.transition = r);
	}
}
function Mf() {
	return Ge().memoizedState;
}
function am(e, t, n) {
	var r = bt(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		If(e))
	)
		jf(t, n);
	else if (((n = uf(e, t, n, r)), n !== null)) {
		var i = Se();
		Ze(n, e, r, i), bf(n, t, r);
	}
}
function sm(e, t, n) {
	var r = bt(e),
		i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (If(e)) jf(t, i);
	else {
		var o = e.alternate;
		if (
			e.lanes === 0 &&
			(o === null || o.lanes === 0) &&
			((o = t.lastRenderedReducer), o !== null)
		)
			try {
				var a = t.lastRenderedState,
					l = o(a, n);
				if (((i.hasEagerState = !0), (i.eagerState = l), qe(l, a))) {
					var s = t.interleaved;
					s === null
						? ((i.next = i), Is(t))
						: ((i.next = s.next), (s.next = i)),
						(t.interleaved = i);
					return;
				}
			} catch {
			} finally {
			}
		(n = uf(e, t, i, r)),
			n !== null && ((i = Se()), Ze(n, e, r, i), bf(n, t, r));
	}
}
function If(e) {
	var t = e.alternate;
	return e === H || (t !== null && t === H);
}
function jf(e, t) {
	fr = Gi = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function bf(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), ys(e, n);
	}
}
var Wi = {
		readContext: Ve,
		useCallback: de,
		useContext: de,
		useEffect: de,
		useImperativeHandle: de,
		useInsertionEffect: de,
		useLayoutEffect: de,
		useMemo: de,
		useReducer: de,
		useRef: de,
		useState: de,
		useDebugValue: de,
		useDeferredValue: de,
		useTransition: de,
		useMutableSource: de,
		useSyncExternalStore: de,
		useId: de,
		unstable_isNewReconciler: !1,
	},
	lm = {
		readContext: Ve,
		useCallback: function(e, t) {
			return (tt().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: Ve,
		useEffect: Xl,
		useImperativeHandle: function(e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				gi(4194308, 4, Pf.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function(e, t) {
			return gi(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			return gi(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = tt();
			return (
				(t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
			);
		},
		useReducer: function(e, t, n) {
			var r = tt();
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = am.bind(null, H, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function(e) {
			var t = tt();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: Yl,
		useDebugValue: Us,
		useDeferredValue: function(e) {
			return (tt().memoizedState = e);
		},
		useTransition: function() {
			var e = Yl(!1),
				t = e[0];
			return (e = om.bind(null, e[1])), (tt().memoizedState = e), [t, e];
		},
		useMutableSource: function() {},
		useSyncExternalStore: function(e, t, n) {
			var r = H,
				i = tt();
			if (G) {
				if (n === void 0) throw Error(T(407));
				n = n();
			} else {
				if (((n = t()), ie === null)) throw Error(T(349));
				rn & 30 || yf(r, t, n);
			}
			i.memoizedState = n;
			var o = { value: n, getSnapshot: t };
			return (
				(i.queue = o),
				Xl(Cf.bind(null, r, o, e), [e]),
				(r.flags |= 2048),
				Mr(9, Sf.bind(null, r, o, n, t), void 0, null),
				n
			);
		},
		useId: function() {
			var e = tt(),
				t = ie.identifierPrefix;
			if (G) {
				var n = dt,
					r = ft;
				(n = (r & ~(1 << (32 - Xe(r) - 1))).toString(32) + n),
					(t = ":" + t + "R" + n),
					(n = Or++),
					0 < n && (t += "H" + n.toString(32)),
					(t += ":");
			} else (n = im++), (t = ":" + t + "r" + n.toString(32) + ":");
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	um = {
		readContext: Ve,
		useCallback: wf,
		useContext: Ve,
		useEffect: As,
		useImperativeHandle: Rf,
		useInsertionEffect: Tf,
		useLayoutEffect: xf,
		useMemo: Of,
		useReducer: $o,
		useRef: Ef,
		useState: function() {
			return $o(Dr);
		},
		useDebugValue: Us,
		useDeferredValue: function(e) {
			var t = Ge();
			return Df(t, q.memoizedState, e);
		},
		useTransition: function() {
			var e = $o(Dr)[0],
				t = Ge().memoizedState;
			return [e, t];
		},
		useMutableSource: vf,
		useSyncExternalStore: gf,
		useId: Mf,
		unstable_isNewReconciler: !1,
	},
	cm = {
		readContext: Ve,
		useCallback: wf,
		useContext: Ve,
		useEffect: As,
		useImperativeHandle: Rf,
		useInsertionEffect: Tf,
		useLayoutEffect: xf,
		useMemo: Of,
		useReducer: Vo,
		useRef: Ef,
		useState: function() {
			return Vo(Dr);
		},
		useDebugValue: Us,
		useDeferredValue: function(e) {
			var t = Ge();
			return q === null ? (t.memoizedState = e) : Df(t, q.memoizedState, e);
		},
		useTransition: function() {
			var e = Vo(Dr)[0],
				t = Ge().memoizedState;
			return [e, t];
		},
		useMutableSource: vf,
		useSyncExternalStore: gf,
		useId: Mf,
		unstable_isNewReconciler: !1,
	};
function Ln(e, t) {
	try {
		var n = "",
			r = t;
		do (n += Bp(r)), (r = r.return);
		while (r);
		var i = n;
	} catch (o) {
		i =
			`
Error generating stack: ` +
			o.message +
			`
` +
			o.stack;
	}
	return { value: e, source: t, stack: i, digest: null };
}
function Go(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ba(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function() {
			throw n;
		});
	}
}
var fm = typeof WeakMap == "function" ? WeakMap : Map;
function Lf(e, t, n) {
	(n = ht(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function() {
			Qi || ((Qi = !0), (Ga = r)), ba(e, t);
		}),
		n
	);
}
function Nf(e, t, n) {
	(n = ht(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var i = t.value;
		(n.payload = function() {
			return r(i);
		}),
			(n.callback = function() {
				ba(e, t);
			});
	}
	var o = e.stateNode;
	return (
		o !== null &&
			typeof o.componentDidCatch == "function" &&
			(n.callback = function() {
				ba(e, t),
					typeof r != "function" &&
						(jt === null ? (jt = new Set([this])) : jt.add(this));
				var a = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: a !== null ? a : "",
				});
			}),
		n
	);
}
function Zl(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new fm();
		var i = new Set();
		r.set(t, i);
	} else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
	i.has(n) || (i.add(n), (e = xm.bind(null, e, t, n)), t.then(e, e));
}
function ql(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function eu(e, t, n, r, i) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = i), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = ht(-1, 1)), (t.tag = 2), It(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var dm = St.ReactCurrentOwner,
	we = !1;
function ye(e, t, n, r) {
	t.child = e === null ? hf(t, null, n, r) : jn(t, e.child, n, r);
}
function tu(e, t, n, r, i) {
	n = n.render;
	var o = t.ref;
	return (
		wn(t, i),
		(r = Bs(e, t, n, r, o, i)),
		(n = Fs()),
		e !== null && !we
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~i),
			  yt(e, t, i))
			: (G && n && Ps(t), (t.flags |= 1), ye(e, t, r, i), t.child)
	);
}
function nu(e, t, n, r, i) {
	if (e === null) {
		var o = n.type;
		return typeof o == "function" &&
			!Ks(o) &&
			o.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = o), zf(e, t, o, r, i))
			: ((e = ki(n.type, null, r, t, t.mode, i)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((o = e.child), !(e.lanes & i))) {
		var a = o.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : Er), n(a, r) && e.ref === t.ref)
		)
			return yt(e, t, i);
	}
	return (
		(t.flags |= 1),
		(e = Lt(o, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function zf(e, t, n, r, i) {
	if (e !== null) {
		var o = e.memoizedProps;
		if (Er(o, r) && e.ref === t.ref)
			if (((we = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
				e.flags & 131072 && (we = !0);
			else return (t.lanes = e.lanes), yt(e, t, i);
	}
	return La(e, t, n, r, i);
}
function Bf(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		o = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				A(En, Ie),
				(Ie |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = o !== null ? o.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					A(En, Ie),
					(Ie |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = o !== null ? o.baseLanes : n),
				A(En, Ie),
				(Ie |= r);
		}
	else
		o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
			A(En, Ie),
			(Ie |= r);
	return ye(e, t, i, n), t.child;
}
function Ff(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function La(e, t, n, r, i) {
	var o = De(n) ? tn : ve.current;
	return (
		(o = Mn(t, o)),
		wn(t, i),
		(n = Bs(e, t, n, r, o, i)),
		(r = Fs()),
		e !== null && !we
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~i),
			  yt(e, t, i))
			: (G && r && Ps(t), (t.flags |= 1), ye(e, t, n, i), t.child)
	);
}
function ru(e, t, n, r, i) {
	if (De(n)) {
		var o = !0;
		zi(t);
	} else o = !1;
	if ((wn(t, i), t.stateNode === null))
		yi(e, t), df(t, n, r), ja(t, n, r, i), (r = !0);
	else if (e === null) {
		var a = t.stateNode,
			l = t.memoizedProps;
		a.props = l;
		var s = a.context,
			u = n.contextType;
		typeof u == "object" && u !== null
			? (u = Ve(u))
			: ((u = De(n) ? tn : ve.current), (u = Mn(t, u)));
		var c = n.getDerivedStateFromProps,
			f =
				typeof c == "function" ||
				typeof a.getSnapshotBeforeUpdate == "function";
		f ||
			(typeof a.UNSAFE_componentWillReceiveProps != "function" &&
				typeof a.componentWillReceiveProps != "function") ||
			((l !== r || s !== u) && Jl(t, a, r, u)),
			(_t = !1);
		var d = t.memoizedState;
		(a.state = d),
			$i(t, r, a, i),
			(s = t.memoizedState),
			l !== r || d !== s || Oe.current || _t
				? (typeof c == "function" && (Ia(t, n, c, r), (s = t.memoizedState)),
				  (l = _t || Ql(t, n, l, r, d, s, u))
						? (f ||
								(typeof a.UNSAFE_componentWillMount != "function" &&
									typeof a.componentWillMount != "function") ||
								(typeof a.componentWillMount == "function" &&
									a.componentWillMount(),
								typeof a.UNSAFE_componentWillMount == "function" &&
									a.UNSAFE_componentWillMount()),
						  typeof a.componentDidMount == "function" && (t.flags |= 4194308))
						: (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = s)),
				  (a.props = r),
				  (a.state = s),
				  (a.context = u),
				  (r = l))
				: (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
				  (r = !1));
	} else {
		(a = t.stateNode),
			cf(e, t),
			(l = t.memoizedProps),
			(u = t.type === t.elementType ? l : Qe(t.type, l)),
			(a.props = u),
			(f = t.pendingProps),
			(d = a.context),
			(s = n.contextType),
			typeof s == "object" && s !== null
				? (s = Ve(s))
				: ((s = De(n) ? tn : ve.current), (s = Mn(t, s)));
		var g = n.getDerivedStateFromProps;
		(c =
			typeof g == "function" ||
			typeof a.getSnapshotBeforeUpdate == "function") ||
			(typeof a.UNSAFE_componentWillReceiveProps != "function" &&
				typeof a.componentWillReceiveProps != "function") ||
			((l !== f || d !== s) && Jl(t, a, r, s)),
			(_t = !1),
			(d = t.memoizedState),
			(a.state = d),
			$i(t, r, a, i);
		var m = t.memoizedState;
		l !== f || d !== m || Oe.current || _t
			? (typeof g == "function" && (Ia(t, n, g, r), (m = t.memoizedState)),
			  (u = _t || Ql(t, n, u, r, d, m, s) || !1)
					? (c ||
							(typeof a.UNSAFE_componentWillUpdate != "function" &&
								typeof a.componentWillUpdate != "function") ||
							(typeof a.componentWillUpdate == "function" &&
								a.componentWillUpdate(r, m, s),
							typeof a.UNSAFE_componentWillUpdate == "function" &&
								a.UNSAFE_componentWillUpdate(r, m, s)),
					  typeof a.componentDidUpdate == "function" && (t.flags |= 4),
					  typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
					: (typeof a.componentDidUpdate != "function" ||
							(l === e.memoizedProps && d === e.memoizedState) ||
							(t.flags |= 4),
					  typeof a.getSnapshotBeforeUpdate != "function" ||
							(l === e.memoizedProps && d === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = m)),
			  (a.props = r),
			  (a.state = m),
			  (a.context = s),
			  (r = u))
			: (typeof a.componentDidUpdate != "function" ||
					(l === e.memoizedProps && d === e.memoizedState) ||
					(t.flags |= 4),
			  typeof a.getSnapshotBeforeUpdate != "function" ||
					(l === e.memoizedProps && d === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return Na(e, t, n, r, o, i);
}
function Na(e, t, n, r, i, o) {
	Ff(e, t);
	var a = (t.flags & 128) !== 0;
	if (!r && !a) return i && $l(t, n, !1), yt(e, t, o);
	(r = t.stateNode), (dm.current = t);
	var l =
		a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && a
			? ((t.child = jn(t, e.child, null, o)), (t.child = jn(t, null, l, o)))
			: ye(e, t, l, o),
		(t.memoizedState = r.state),
		i && $l(t, n, !0),
		t.child
	);
}
function Af(e) {
	var t = e.stateNode;
	t.pendingContext
		? Ul(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && Ul(e, t.context, !1),
		bs(e, t.containerInfo);
}
function iu(e, t, n, r, i) {
	return In(), ws(i), (t.flags |= 256), ye(e, t, n, r), t.child;
}
var za = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ba(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function Uf(e, t, n) {
	var r = t.pendingProps,
		i = W.current,
		o = !1,
		a = (t.flags & 128) !== 0,
		l;
	if (
		((l = a) ||
			(l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
		l
			? ((o = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (i |= 1),
		A(W, i & 1),
		e === null)
	)
		return (
			Da(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === "$!"
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((a = r.children),
				  (e = r.fallback),
				  o
						? ((r = t.mode),
						  (o = t.child),
						  (a = { mode: "hidden", children: a }),
						  !(r & 1) && o !== null
								? ((o.childLanes = 0), (o.pendingProps = a))
								: (o = po(a, r, 0, null)),
						  (e = qt(e, r, n, null)),
						  (o.return = t),
						  (e.return = t),
						  (o.sibling = e),
						  (t.child = o),
						  (t.child.memoizedState = Ba(n)),
						  (t.memoizedState = za),
						  e)
						: $s(t, a))
		);
	if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
		return pm(e, t, a, r, l, i, n);
	if (o) {
		(o = r.fallback), (a = t.mode), (i = e.child), (l = i.sibling);
		var s = { mode: "hidden", children: r.children };
		return (
			!(a & 1) && t.child !== i
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = s),
				  (t.deletions = null))
				: ((r = Lt(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
			l !== null ? (o = Lt(l, o)) : ((o = qt(o, a, n, null)), (o.flags |= 2)),
			(o.return = t),
			(r.return = t),
			(r.sibling = o),
			(t.child = r),
			(r = o),
			(o = t.child),
			(a = e.child.memoizedState),
			(a =
				a === null
					? Ba(n)
					: {
							baseLanes: a.baseLanes | n,
							cachePool: null,
							transitions: a.transitions,
					  }),
			(o.memoizedState = a),
			(o.childLanes = e.childLanes & ~n),
			(t.memoizedState = za),
			r
		);
	}
	return (
		(o = e.child),
		(e = o.sibling),
		(r = Lt(o, { mode: "visible", children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	);
}
function $s(e, t) {
	return (
		(t = po({ mode: "visible", children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function ni(e, t, n, r) {
	return (
		r !== null && ws(r),
		jn(t, e.child, null, n),
		(e = $s(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function pm(e, t, n, r, i, o, a) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = Go(Error(T(422)))), ni(e, t, a, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((o = r.fallback),
			  (i = t.mode),
			  (r = po({ mode: "visible", children: r.children }, i, 0, null)),
			  (o = qt(o, i, a, null)),
			  (o.flags |= 2),
			  (r.return = t),
			  (o.return = t),
			  (r.sibling = o),
			  (t.child = r),
			  t.mode & 1 && jn(t, e.child, null, a),
			  (t.child.memoizedState = Ba(a)),
			  (t.memoizedState = za),
			  o);
	if (!(t.mode & 1)) return ni(e, t, a, null);
	if (i.data === "$!") {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
		return (r = l), (o = Error(T(419))), (r = Go(o, r, void 0)), ni(e, t, a, r);
	}
	if (((l = (a & e.childLanes) !== 0), we || l)) {
		if (((r = ie), r !== null)) {
			switch (a & -a) {
				case 4:
					i = 2;
					break;
				case 16:
					i = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					i = 32;
					break;
				case 536870912:
					i = 268435456;
					break;
				default:
					i = 0;
			}
			(i = i & (r.suspendedLanes | a) ? 0 : i),
				i !== 0 &&
					i !== o.retryLane &&
					((o.retryLane = i), gt(e, i), Ze(r, e, i, -1));
		}
		return Js(), (r = Go(Error(T(421)))), ni(e, t, a, r);
	}
	return i.data === "$?"
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = Pm.bind(null, e)),
		  (i._reactRetry = t),
		  null)
		: ((e = o.treeContext),
		  (je = Mt(i.nextSibling)),
		  (be = t),
		  (G = !0),
		  (Ke = null),
		  e !== null &&
				((Fe[Ae++] = ft),
				(Fe[Ae++] = dt),
				(Fe[Ae++] = nn),
				(ft = e.id),
				(dt = e.overflow),
				(nn = t)),
		  (t = $s(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function ou(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), Ma(e.return, t, n);
}
function Wo(e, t, n, r, i) {
	var o = e.memoizedState;
	o === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: i,
		  })
		: ((o.isBackwards = t),
		  (o.rendering = null),
		  (o.renderingStartTime = 0),
		  (o.last = r),
		  (o.tail = n),
		  (o.tailMode = i));
}
function $f(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		o = r.tail;
	if ((ye(e, t, r.children, n), (r = W.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && ou(e, n, t);
				else if (e.tag === 19) ou(e, n, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		r &= 1;
	}
	if ((A(W, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null; )
					(e = n.alternate),
						e !== null && Vi(e) === null && (i = n),
						(n = n.sibling);
				(n = i),
					n === null
						? ((i = t.child), (t.child = null))
						: ((i = n.sibling), (n.sibling = null)),
					Wo(t, !1, i, n, o);
				break;
			case "backwards":
				for (n = null, i = t.child, t.child = null; i !== null; ) {
					if (((e = i.alternate), e !== null && Vi(e) === null)) {
						t.child = i;
						break;
					}
					(e = i.sibling), (i.sibling = n), (n = i), (i = e);
				}
				Wo(t, !0, n, null, o);
				break;
			case "together":
				Wo(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function yi(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function yt(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(on |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(T(153));
	if (t.child !== null) {
		for (
			e = t.child, n = Lt(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = Lt(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function hm(e, t, n) {
	switch (t.tag) {
		case 3:
			Af(t), In();
			break;
		case 5:
			mf(t);
			break;
		case 1:
			De(t.type) && zi(t);
			break;
		case 4:
			bs(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value;
			A(Ai, r._currentValue), (r._currentValue = i);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (A(W, W.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? Uf(e, t, n)
					: (A(W, W.current & 1),
					  (e = yt(e, t, n)),
					  e !== null ? e.sibling : null);
			A(W, W.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return $f(e, t, n);
				t.flags |= 128;
			}
			if (
				((i = t.memoizedState),
				i !== null &&
					((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
				A(W, W.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), Bf(e, t, n);
	}
	return yt(e, t, n);
}
var Vf, Fa, Gf, Wf;
Vf = function(e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
Fa = function() {};
Gf = function(e, t, n, r) {
	var i = e.memoizedProps;
	if (i !== r) {
		(e = t.stateNode), Xt(it.current);
		var o = null;
		switch (n) {
			case "input":
				(i = sa(e, i)), (r = sa(e, r)), (o = []);
				break;
			case "select":
				(i = Q({}, i, { value: void 0 })),
					(r = Q({}, r, { value: void 0 })),
					(o = []);
				break;
			case "textarea":
				(i = ca(e, i)), (r = ca(e, r)), (o = []);
				break;
			default:
				typeof i.onClick != "function" &&
					typeof r.onClick == "function" &&
					(e.onclick = Li);
		}
		da(n, r);
		var a;
		n = null;
		for (u in i)
			if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
				if (u === "style") {
					var l = i[u];
					for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
				} else
					u !== "dangerouslySetInnerHTML" &&
						u !== "children" &&
						u !== "suppressContentEditableWarning" &&
						u !== "suppressHydrationWarning" &&
						u !== "autoFocus" &&
						(vr.hasOwnProperty(u)
							? o || (o = [])
							: (o = o || []).push(u, null));
		for (u in r) {
			var s = r[u];
			if (
				((l = i != null ? i[u] : void 0),
				r.hasOwnProperty(u) && s !== l && (s != null || l != null))
			)
				if (u === "style")
					if (l) {
						for (a in l)
							!l.hasOwnProperty(a) ||
								(s && s.hasOwnProperty(a)) ||
								(n || (n = {}), (n[a] = ""));
						for (a in s)
							s.hasOwnProperty(a) &&
								l[a] !== s[a] &&
								(n || (n = {}), (n[a] = s[a]));
					} else n || (o || (o = []), o.push(u, n)), (n = s);
				else
					u === "dangerouslySetInnerHTML"
						? ((s = s ? s.__html : void 0),
						  (l = l ? l.__html : void 0),
						  s != null && l !== s && (o = o || []).push(u, s))
						: u === "children"
						? (typeof s != "string" && typeof s != "number") ||
						  (o = o || []).push(u, "" + s)
						: u !== "suppressContentEditableWarning" &&
						  u !== "suppressHydrationWarning" &&
						  (vr.hasOwnProperty(u)
								? (s != null && u === "onScroll" && $("scroll", e),
								  o || l === s || (o = []))
								: (o = o || []).push(u, s));
		}
		n && (o = o || []).push("style", n);
		var u = o;
		(t.updateQueue = u) && (t.flags |= 4);
	}
};
Wf = function(e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function Kn(e, t) {
	if (!G)
		switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function pe(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags & 14680064),
				(r |= i.flags & 14680064),
				(i.return = e),
				(i = i.sibling);
	else
		for (i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags),
				(r |= i.flags),
				(i.return = e),
				(i = i.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function mm(e, t, n) {
	var r = t.pendingProps;
	switch ((Rs(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return pe(t), null;
		case 1:
			return De(t.type) && Ni(), pe(t), null;
		case 3:
			return (
				(r = t.stateNode),
				bn(),
				V(Oe),
				V(ve),
				Ns(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(ei(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), Ke !== null && (Qa(Ke), (Ke = null)))),
				Fa(e, t),
				pe(t),
				null
			);
		case 5:
			Ls(t);
			var i = Xt(wr.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				Gf(e, t, n, r, i),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(T(166));
					return pe(t), null;
				}
				if (((e = Xt(it.current)), ei(t))) {
					(r = t.stateNode), (n = t.type);
					var o = t.memoizedProps;
					switch (((r[nt] = t), (r[Pr] = o), (e = (t.mode & 1) !== 0), n)) {
						case "dialog":
							$("cancel", r), $("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							$("load", r);
							break;
						case "video":
						case "audio":
							for (i = 0; i < nr.length; i++) $(nr[i], r);
							break;
						case "source":
							$("error", r);
							break;
						case "img":
						case "image":
						case "link":
							$("error", r), $("load", r);
							break;
						case "details":
							$("toggle", r);
							break;
						case "input":
							hl(r, o), $("invalid", r);
							break;
						case "select":
							(r._wrapperState = { wasMultiple: !!o.multiple }),
								$("invalid", r);
							break;
						case "textarea":
							vl(r, o), $("invalid", r);
					}
					da(n, o), (i = null);
					for (var a in o)
						if (o.hasOwnProperty(a)) {
							var l = o[a];
							a === "children"
								? typeof l == "string"
									? r.textContent !== l &&
									  (o.suppressHydrationWarning !== !0 &&
											qr(r.textContent, l, e),
									  (i = ["children", l]))
									: typeof l == "number" &&
									  r.textContent !== "" + l &&
									  (o.suppressHydrationWarning !== !0 &&
											qr(r.textContent, l, e),
									  (i = ["children", "" + l]))
								: vr.hasOwnProperty(a) &&
								  l != null &&
								  a === "onScroll" &&
								  $("scroll", r);
						}
					switch (n) {
						case "input":
							Wr(r), ml(r, o, !0);
							break;
						case "textarea":
							Wr(r), gl(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof o.onClick == "function" && (r.onclick = Li);
					}
					(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(a = i.nodeType === 9 ? i : i.ownerDocument),
						e === "http://www.w3.org/1999/xhtml" && (e = gc(n)),
						e === "http://www.w3.org/1999/xhtml"
							? n === "script"
								? ((e = a.createElement("div")),
								  (e.innerHTML = "<script></script>"),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == "string"
								? (e = a.createElement(n, { is: r.is }))
								: ((e = a.createElement(n)),
								  n === "select" &&
										((a = e),
										r.multiple
											? (a.multiple = !0)
											: r.size && (a.size = r.size)))
							: (e = a.createElementNS(e, n)),
						(e[nt] = t),
						(e[Pr] = r),
						Vf(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((a = pa(n, r)), n)) {
							case "dialog":
								$("cancel", e), $("close", e), (i = r);
								break;
							case "iframe":
							case "object":
							case "embed":
								$("load", e), (i = r);
								break;
							case "video":
							case "audio":
								for (i = 0; i < nr.length; i++) $(nr[i], e);
								i = r;
								break;
							case "source":
								$("error", e), (i = r);
								break;
							case "img":
							case "image":
							case "link":
								$("error", e), $("load", e), (i = r);
								break;
							case "details":
								$("toggle", e), (i = r);
								break;
							case "input":
								hl(e, r), (i = sa(e, r)), $("invalid", e);
								break;
							case "option":
								i = r;
								break;
							case "select":
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(i = Q({}, r, { value: void 0 })),
									$("invalid", e);
								break;
							case "textarea":
								vl(e, r), (i = ca(e, r)), $("invalid", e);
								break;
							default:
								i = r;
						}
						da(n, i), (l = i);
						for (o in l)
							if (l.hasOwnProperty(o)) {
								var s = l[o];
								o === "style"
									? Cc(e, s)
									: o === "dangerouslySetInnerHTML"
									? ((s = s ? s.__html : void 0), s != null && yc(e, s))
									: o === "children"
									? typeof s == "string"
										? (n !== "textarea" || s !== "") && gr(e, s)
										: typeof s == "number" && gr(e, "" + s)
									: o !== "suppressContentEditableWarning" &&
									  o !== "suppressHydrationWarning" &&
									  o !== "autoFocus" &&
									  (vr.hasOwnProperty(o)
											? s != null && o === "onScroll" && $("scroll", e)
											: s != null && ds(e, o, s, a));
							}
						switch (n) {
							case "input":
								Wr(e), ml(e, r, !1);
								break;
							case "textarea":
								Wr(e), gl(e);
								break;
							case "option":
								r.value != null && e.setAttribute("value", "" + Nt(r.value));
								break;
							case "select":
								(e.multiple = !!r.multiple),
									(o = r.value),
									o != null
										? Tn(e, !!r.multiple, o, !1)
										: r.defaultValue != null &&
										  Tn(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof i.onClick == "function" && (e.onclick = Li);
						}
						switch (n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break e;
							case "img":
								r = !0;
								break e;
							default:
								r = !1;
						}
					}
					r && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return pe(t), null;
		case 6:
			if (e && t.stateNode != null) Wf(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
				if (((n = Xt(wr.current)), Xt(it.current), ei(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[nt] = t),
						(o = r.nodeValue !== n) && ((e = be), e !== null))
					)
						switch (e.tag) {
							case 3:
								qr(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									qr(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					o && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[nt] = t),
						(t.stateNode = r);
			}
			return pe(t), null;
		case 13:
			if (
				(V(W),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (G && je !== null && t.mode & 1 && !(t.flags & 128))
					lf(), In(), (t.flags |= 98560), (o = !1);
				else if (((o = ei(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!o) throw Error(T(318));
						if (
							((o = t.memoizedState),
							(o = o !== null ? o.dehydrated : null),
							!o)
						)
							throw Error(T(317));
						o[nt] = t;
					} else
						In(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					pe(t), (o = !1);
				} else Ke !== null && (Qa(Ke), (Ke = null)), (o = !0);
				if (!o) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || W.current & 1 ? ee === 0 && (ee = 3) : Js())),
				  t.updateQueue !== null && (t.flags |= 4),
				  pe(t),
				  null);
		case 4:
			return (
				bn(), Fa(e, t), e === null && Tr(t.stateNode.containerInfo), pe(t), null
			);
		case 10:
			return Ms(t.type._context), pe(t), null;
		case 17:
			return De(t.type) && Ni(), pe(t), null;
		case 19:
			if ((V(W), (o = t.memoizedState), o === null)) return pe(t), null;
			if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
				if (r) Kn(o, !1);
				else {
					if (ee !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((a = Vi(e)), a !== null)) {
								for (
									t.flags |= 128,
										Kn(o, !1),
										r = a.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(o = n),
										(e = r),
										(o.flags &= 14680066),
										(a = o.alternate),
										a === null
											? ((o.childLanes = 0),
											  (o.lanes = e),
											  (o.child = null),
											  (o.subtreeFlags = 0),
											  (o.memoizedProps = null),
											  (o.memoizedState = null),
											  (o.updateQueue = null),
											  (o.dependencies = null),
											  (o.stateNode = null))
											: ((o.childLanes = a.childLanes),
											  (o.lanes = a.lanes),
											  (o.child = a.child),
											  (o.subtreeFlags = 0),
											  (o.deletions = null),
											  (o.memoizedProps = a.memoizedProps),
											  (o.memoizedState = a.memoizedState),
											  (o.updateQueue = a.updateQueue),
											  (o.type = a.type),
											  (e = a.dependencies),
											  (o.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext,
														  })),
										(n = n.sibling);
								return A(W, (W.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					o.tail !== null &&
						X() > Nn &&
						((t.flags |= 128), (r = !0), Kn(o, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = Vi(a)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							Kn(o, !0),
							o.tail === null && o.tailMode === "hidden" && !a.alternate && !G)
						)
							return pe(t), null;
					} else
						2 * X() - o.renderingStartTime > Nn &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), Kn(o, !1), (t.lanes = 4194304));
				o.isBackwards
					? ((a.sibling = t.child), (t.child = a))
					: ((n = o.last),
					  n !== null ? (n.sibling = a) : (t.child = a),
					  (o.last = a));
			}
			return o.tail !== null
				? ((t = o.tail),
				  (o.rendering = t),
				  (o.tail = t.sibling),
				  (o.renderingStartTime = X()),
				  (t.sibling = null),
				  (n = W.current),
				  A(W, r ? (n & 1) | 2 : n & 1),
				  t)
				: (pe(t), null);
		case 22:
		case 23:
			return (
				Qs(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? Ie & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: pe(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(T(156, t.tag));
}
function vm(e, t) {
	switch ((Rs(t), t.tag)) {
		case 1:
			return (
				De(t.type) && Ni(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				bn(),
				V(Oe),
				V(ve),
				Ns(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return Ls(t), null;
		case 13:
			if ((V(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(T(340));
				In();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return V(W), null;
		case 4:
			return bn(), null;
		case 10:
			return Ms(t.type._context), null;
		case 22:
		case 23:
			return Qs(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var ri = !1,
	me = !1,
	gm = typeof WeakSet == "function" ? WeakSet : Set,
	w = null;
function _n(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function")
			try {
				n(null);
			} catch (r) {
				J(e, t, r);
			}
		else n.current = null;
}
function Aa(e, t, n) {
	try {
		n();
	} catch (r) {
		J(e, t, r);
	}
}
var au = !1;
function ym(e, t) {
	if (((Ea = Ii), (e = Jc()), xs(e))) {
		if ("selectionStart" in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var i = r.anchorOffset,
						o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break e;
					}
					var a = 0,
						l = -1,
						s = -1,
						u = 0,
						c = 0,
						f = e,
						d = null;
					t: for (;;) {
						for (
							var g;
							f !== n || (i !== 0 && f.nodeType !== 3) || (l = a + i),
								f !== o || (r !== 0 && f.nodeType !== 3) || (s = a + r),
								f.nodeType === 3 && (a += f.nodeValue.length),
								(g = f.firstChild) !== null;

						)
							(d = f), (f = g);
						for (;;) {
							if (f === e) break t;
							if (
								(d === n && ++u === i && (l = a),
								d === o && ++c === r && (s = a),
								(g = f.nextSibling) !== null)
							)
								break;
							(f = d), (d = f.parentNode);
						}
						f = g;
					}
					n = l === -1 || s === -1 ? null : { start: l, end: s };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (Ta = { focusedElem: e, selectionRange: n }, Ii = !1, w = t; w !== null; )
		if (((t = w), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (w = e);
		else
			for (; w !== null; ) {
				t = w;
				try {
					var m = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (m !== null) {
									var y = m.memoizedProps,
										P = m.memoizedState,
										h = t.stateNode,
										p = h.getSnapshotBeforeUpdate(
											t.elementType === t.type ? y : Qe(t.type, y),
											P
										);
									h.__reactInternalSnapshotBeforeUpdate = p;
								}
								break;
							case 3:
								var v = t.stateNode.containerInfo;
								v.nodeType === 1
									? (v.textContent = "")
									: v.nodeType === 9 &&
									  v.documentElement &&
									  v.removeChild(v.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(T(163));
						}
				} catch (C) {
					J(t, t.return, C);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (w = e);
					break;
				}
				w = t.return;
			}
	return (m = au), (au = !1), m;
}
function dr(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next);
		do {
			if ((i.tag & e) === e) {
				var o = i.destroy;
				(i.destroy = void 0), o !== void 0 && Aa(t, n, o);
			}
			i = i.next;
		} while (i !== r);
	}
}
function co(e, t) {
	if (
		((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
	) {
		var n = (t = t.next);
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== t);
	}
}
function Ua(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == "function" ? t(e) : (t.current = e);
	}
}
function Hf(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), Hf(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[nt], delete t[Pr], delete t[Ra], delete t[em], delete t[tm])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function Qf(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function su(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || Qf(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function $a(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
				  (n = n._reactRootContainer),
				  n != null || t.onclick !== null || (t.onclick = Li));
	else if (r !== 4 && ((e = e.child), e !== null))
		for ($a(e, t, n), e = e.sibling; e !== null; ) $a(e, t, n), (e = e.sibling);
}
function Va(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Va(e, t, n), e = e.sibling; e !== null; ) Va(e, t, n), (e = e.sibling);
}
var ae = null,
	Je = !1;
function Ct(e, t, n) {
	for (n = n.child; n !== null; ) Jf(e, t, n), (n = n.sibling);
}
function Jf(e, t, n) {
	if (rt && typeof rt.onCommitFiberUnmount == "function")
		try {
			rt.onCommitFiberUnmount(no, n);
		} catch {}
	switch (n.tag) {
		case 5:
			me || _n(n, t);
		case 6:
			var r = ae,
				i = Je;
			(ae = null),
				Ct(e, t, n),
				(ae = r),
				(Je = i),
				ae !== null &&
					(Je
						? ((e = ae),
						  (n = n.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: ae.removeChild(n.stateNode));
			break;
		case 18:
			ae !== null &&
				(Je
					? ((e = ae),
					  (n = n.stateNode),
					  e.nodeType === 8
							? Bo(e.parentNode, n)
							: e.nodeType === 1 && Bo(e, n),
					  kr(e))
					: Bo(ae, n.stateNode));
			break;
		case 4:
			(r = ae),
				(i = Je),
				(ae = n.stateNode.containerInfo),
				(Je = !0),
				Ct(e, t, n),
				(ae = r),
				(Je = i);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!me &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				i = r = r.next;
				do {
					var o = i,
						a = o.destroy;
					(o = o.tag),
						a !== void 0 && (o & 2 || o & 4) && Aa(n, t, a),
						(i = i.next);
				} while (i !== r);
			}
			Ct(e, t, n);
			break;
		case 1:
			if (
				!me &&
				(_n(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == "function")
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (l) {
					J(n, t, l);
				}
			Ct(e, t, n);
			break;
		case 21:
			Ct(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((me = (r = me) || n.memoizedState !== null), Ct(e, t, n), (me = r))
				: Ct(e, t, n);
			break;
		default:
			Ct(e, t, n);
	}
}
function lu(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new gm()),
			t.forEach(function(r) {
				var i = Rm.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(i, i));
			});
	}
}
function He(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r];
			try {
				var o = e,
					a = t,
					l = a;
				e: for (; l !== null; ) {
					switch (l.tag) {
						case 5:
							(ae = l.stateNode), (Je = !1);
							break e;
						case 3:
							(ae = l.stateNode.containerInfo), (Je = !0);
							break e;
						case 4:
							(ae = l.stateNode.containerInfo), (Je = !0);
							break e;
					}
					l = l.return;
				}
				if (ae === null) throw Error(T(160));
				Jf(o, a, i), (ae = null), (Je = !1);
				var s = i.alternate;
				s !== null && (s.return = null), (i.return = null);
			} catch (u) {
				J(i, t, u);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) Kf(t, e), (t = t.sibling);
}
function Kf(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((He(t, e), et(e), r & 4)) {
				try {
					dr(3, e, e.return), co(3, e);
				} catch (y) {
					J(e, e.return, y);
				}
				try {
					dr(5, e, e.return);
				} catch (y) {
					J(e, e.return, y);
				}
			}
			break;
		case 1:
			He(t, e), et(e), r & 512 && n !== null && _n(n, n.return);
			break;
		case 5:
			if (
				(He(t, e),
				et(e),
				r & 512 && n !== null && _n(n, n.return),
				e.flags & 32)
			) {
				var i = e.stateNode;
				try {
					gr(i, "");
				} catch (y) {
					J(e, e.return, y);
				}
			}
			if (r & 4 && ((i = e.stateNode), i != null)) {
				var o = e.memoizedProps,
					a = n !== null ? n.memoizedProps : o,
					l = e.type,
					s = e.updateQueue;
				if (((e.updateQueue = null), s !== null))
					try {
						l === "input" && o.type === "radio" && o.name != null && mc(i, o),
							pa(l, a);
						var u = pa(l, o);
						for (a = 0; a < s.length; a += 2) {
							var c = s[a],
								f = s[a + 1];
							c === "style"
								? Cc(i, f)
								: c === "dangerouslySetInnerHTML"
								? yc(i, f)
								: c === "children"
								? gr(i, f)
								: ds(i, c, f, u);
						}
						switch (l) {
							case "input":
								la(i, o);
								break;
							case "textarea":
								vc(i, o);
								break;
							case "select":
								var d = i._wrapperState.wasMultiple;
								i._wrapperState.wasMultiple = !!o.multiple;
								var g = o.value;
								g != null
									? Tn(i, !!o.multiple, g, !1)
									: d !== !!o.multiple &&
									  (o.defaultValue != null
											? Tn(i, !!o.multiple, o.defaultValue, !0)
											: Tn(i, !!o.multiple, o.multiple ? [] : "", !1));
						}
						i[Pr] = o;
					} catch (y) {
						J(e, e.return, y);
					}
			}
			break;
		case 6:
			if ((He(t, e), et(e), r & 4)) {
				if (e.stateNode === null) throw Error(T(162));
				(i = e.stateNode), (o = e.memoizedProps);
				try {
					i.nodeValue = o;
				} catch (y) {
					J(e, e.return, y);
				}
			}
			break;
		case 3:
			if (
				(He(t, e), et(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					kr(t.containerInfo);
				} catch (y) {
					J(e, e.return, y);
				}
			break;
		case 4:
			He(t, e), et(e);
			break;
		case 13:
			He(t, e),
				et(e),
				(i = e.child),
				i.flags & 8192 &&
					((o = i.memoizedState !== null),
					(i.stateNode.isHidden = o),
					!o ||
						(i.alternate !== null && i.alternate.memoizedState !== null) ||
						(Ws = X())),
				r & 4 && lu(e);
			break;
		case 22:
			if (
				((c = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((me = (u = me) || c), He(t, e), (me = u)) : He(t, e),
				et(e),
				r & 8192)
			) {
				if (
					((u = e.memoizedState !== null),
					(e.stateNode.isHidden = u) && !c && e.mode & 1)
				)
					for (w = e, c = e.child; c !== null; ) {
						for (f = w = c; w !== null; ) {
							switch (((d = w), (g = d.child), d.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									dr(4, d, d.return);
									break;
								case 1:
									_n(d, d.return);
									var m = d.stateNode;
									if (typeof m.componentWillUnmount == "function") {
										(r = d), (n = d.return);
										try {
											(t = r),
												(m.props = t.memoizedProps),
												(m.state = t.memoizedState),
												m.componentWillUnmount();
										} catch (y) {
											J(r, n, y);
										}
									}
									break;
								case 5:
									_n(d, d.return);
									break;
								case 22:
									if (d.memoizedState !== null) {
										cu(f);
										continue;
									}
							}
							g !== null ? ((g.return = d), (w = g)) : cu(f);
						}
						c = c.sibling;
					}
				e: for (c = null, f = e; ; ) {
					if (f.tag === 5) {
						if (c === null) {
							c = f;
							try {
								(i = f.stateNode),
									u
										? ((o = i.style),
										  typeof o.setProperty == "function"
												? o.setProperty("display", "none", "important")
												: (o.display = "none"))
										: ((l = f.stateNode),
										  (s = f.memoizedProps.style),
										  (a =
												s != null && s.hasOwnProperty("display")
													? s.display
													: null),
										  (l.style.display = Sc("display", a)));
							} catch (y) {
								J(e, e.return, y);
							}
						}
					} else if (f.tag === 6) {
						if (c === null)
							try {
								f.stateNode.nodeValue = u ? "" : f.memoizedProps;
							} catch (y) {
								J(e, e.return, y);
							}
					} else if (
						((f.tag !== 22 && f.tag !== 23) ||
							f.memoizedState === null ||
							f === e) &&
						f.child !== null
					) {
						(f.child.return = f), (f = f.child);
						continue;
					}
					if (f === e) break e;
					for (; f.sibling === null; ) {
						if (f.return === null || f.return === e) break e;
						c === f && (c = null), (f = f.return);
					}
					c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
				}
			}
			break;
		case 19:
			He(t, e), et(e), r & 4 && lu(e);
			break;
		case 21:
			break;
		default:
			He(t, e), et(e);
	}
}
function et(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (Qf(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(T(160));
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode;
					r.flags & 32 && (gr(i, ""), (r.flags &= -33));
					var o = su(e);
					Va(e, o, i);
					break;
				case 3:
				case 4:
					var a = r.stateNode.containerInfo,
						l = su(e);
					$a(e, l, a);
					break;
				default:
					throw Error(T(161));
			}
		} catch (s) {
			J(e, e.return, s);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function Sm(e, t, n) {
	(w = e), Yf(e);
}
function Yf(e, t, n) {
	for (var r = (e.mode & 1) !== 0; w !== null; ) {
		var i = w,
			o = i.child;
		if (i.tag === 22 && r) {
			var a = i.memoizedState !== null || ri;
			if (!a) {
				var l = i.alternate,
					s = (l !== null && l.memoizedState !== null) || me;
				l = ri;
				var u = me;
				if (((ri = a), (me = s) && !u))
					for (w = i; w !== null; )
						(a = w),
							(s = a.child),
							a.tag === 22 && a.memoizedState !== null
								? fu(i)
								: s !== null
								? ((s.return = a), (w = s))
								: fu(i);
				for (; o !== null; ) (w = o), Yf(o), (o = o.sibling);
				(w = i), (ri = l), (me = u);
			}
			uu(e);
		} else
			i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (w = o)) : uu(e);
	}
}
function uu(e) {
	for (; w !== null; ) {
		var t = w;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							me || co(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !me)
								if (n === null) r.componentDidMount();
								else {
									var i =
										t.elementType === t.type
											? n.memoizedProps
											: Qe(t.type, n.memoizedProps);
									r.componentDidUpdate(
										i,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									);
								}
							var o = t.updateQueue;
							o !== null && Hl(t, o, r);
							break;
						case 3:
							var a = t.updateQueue;
							if (a !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								Hl(t, a, n);
							}
							break;
						case 5:
							var l = t.stateNode;
							if (n === null && t.flags & 4) {
								n = l;
								var s = t.memoizedProps;
								switch (t.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										s.autoFocus && n.focus();
										break;
									case "img":
										s.src && (n.src = s.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (t.memoizedState === null) {
								var u = t.alternate;
								if (u !== null) {
									var c = u.memoizedState;
									if (c !== null) {
										var f = c.dehydrated;
										f !== null && kr(f);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(T(163));
					}
				me || (t.flags & 512 && Ua(t));
			} catch (d) {
				J(t, t.return, d);
			}
		}
		if (t === e) {
			w = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (w = n);
			break;
		}
		w = t.return;
	}
}
function cu(e) {
	for (; w !== null; ) {
		var t = w;
		if (t === e) {
			w = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (w = n);
			break;
		}
		w = t.return;
	}
}
function fu(e) {
	for (; w !== null; ) {
		var t = w;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						co(4, t);
					} catch (s) {
						J(t, n, s);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var i = t.return;
						try {
							r.componentDidMount();
						} catch (s) {
							J(t, i, s);
						}
					}
					var o = t.return;
					try {
						Ua(t);
					} catch (s) {
						J(t, o, s);
					}
					break;
				case 5:
					var a = t.return;
					try {
						Ua(t);
					} catch (s) {
						J(t, a, s);
					}
			}
		} catch (s) {
			J(t, t.return, s);
		}
		if (t === e) {
			w = null;
			break;
		}
		var l = t.sibling;
		if (l !== null) {
			(l.return = t.return), (w = l);
			break;
		}
		w = t.return;
	}
}
var Cm = Math.ceil,
	Hi = St.ReactCurrentDispatcher,
	Vs = St.ReactCurrentOwner,
	$e = St.ReactCurrentBatchConfig,
	N = 0,
	ie = null,
	Z = null,
	le = 0,
	Ie = 0,
	En = Ft(0),
	ee = 0,
	Ir = null,
	on = 0,
	fo = 0,
	Gs = 0,
	pr = null,
	Re = null,
	Ws = 0,
	Nn = 1 / 0,
	lt = null,
	Qi = !1,
	Ga = null,
	jt = null,
	ii = !1,
	Pt = null,
	Ji = 0,
	hr = 0,
	Wa = null,
	Si = -1,
	Ci = 0;
function Se() {
	return N & 6 ? X() : Si !== -1 ? Si : (Si = X());
}
function bt(e) {
	return e.mode & 1
		? N & 2 && le !== 0
			? le & -le
			: rm.transition !== null
			? (Ci === 0 && (Ci = Ic()), Ci)
			: ((e = B),
			  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Fc(e.type))),
			  e)
		: 1;
}
function Ze(e, t, n, r) {
	if (50 < hr) throw ((hr = 0), (Wa = null), Error(T(185)));
	Br(e, n, r),
		(!(N & 2) || e !== ie) &&
			(e === ie && (!(N & 2) && (fo |= n), ee === 4 && Tt(e, le)),
			Me(e, r),
			n === 1 && N === 0 && !(t.mode & 1) && ((Nn = X() + 500), so && At()));
}
function Me(e, t) {
	var n = e.callbackNode;
	rh(e, t);
	var r = Mi(e, e === ie ? le : 0);
	if (r === 0)
		n !== null && Cl(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && Cl(n), t === 1))
			e.tag === 0 ? nm(du.bind(null, e)) : of(du.bind(null, e)),
				Zh(function() {
					!(N & 6) && At();
				}),
				(n = null);
		else {
			switch (jc(r)) {
				case 1:
					n = gs;
					break;
				case 4:
					n = Dc;
					break;
				case 16:
					n = Di;
					break;
				case 536870912:
					n = Mc;
					break;
				default:
					n = Di;
			}
			n = id(n, Xf.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function Xf(e, t) {
	if (((Si = -1), (Ci = 0), N & 6)) throw Error(T(327));
	var n = e.callbackNode;
	if (On() && e.callbackNode !== n) return null;
	var r = Mi(e, e === ie ? le : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = Ki(e, r);
	else {
		t = r;
		var i = N;
		N |= 2;
		var o = qf();
		(ie !== e || le !== t) && ((lt = null), (Nn = X() + 500), Zt(e, t));
		do
			try {
				Em();
				break;
			} catch (l) {
				Zf(e, l);
			}
		while (1);
		Ds(),
			(Hi.current = o),
			(N = i),
			Z !== null ? (t = 0) : ((ie = null), (le = 0), (t = ee));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((i = ya(e)), i !== 0 && ((r = i), (t = Ha(e, i)))), t === 1)
		)
			throw ((n = Ir), Zt(e, 0), Tt(e, r), Me(e, X()), n);
		if (t === 6) Tt(e, r);
		else {
			if (
				((i = e.current.alternate),
				!(r & 30) &&
					!km(i) &&
					((t = Ki(e, r)),
					t === 2 && ((o = ya(e)), o !== 0 && ((r = o), (t = Ha(e, o)))),
					t === 1))
			)
				throw ((n = Ir), Zt(e, 0), Tt(e, r), Me(e, X()), n);
			switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(T(345));
				case 2:
					Qt(e, Re, lt);
					break;
				case 3:
					if (
						(Tt(e, r), (r & 130023424) === r && ((t = Ws + 500 - X()), 10 < t))
					) {
						if (Mi(e, 0) !== 0) break;
						if (((i = e.suspendedLanes), (i & r) !== r)) {
							Se(), (e.pingedLanes |= e.suspendedLanes & i);
							break;
						}
						e.timeoutHandle = Pa(Qt.bind(null, e, Re, lt), t);
						break;
					}
					Qt(e, Re, lt);
					break;
				case 4:
					if ((Tt(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, i = -1; 0 < r; ) {
						var a = 31 - Xe(r);
						(o = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~o);
					}
					if (
						((r = i),
						(r = X() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								? 480
								: 1080 > r
								? 1080
								: 1920 > r
								? 1920
								: 3e3 > r
								? 3e3
								: 4320 > r
								? 4320
								: 1960 * Cm(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = Pa(Qt.bind(null, e, Re, lt), r);
						break;
					}
					Qt(e, Re, lt);
					break;
				case 5:
					Qt(e, Re, lt);
					break;
				default:
					throw Error(T(329));
			}
		}
	}
	return Me(e, X()), e.callbackNode === n ? Xf.bind(null, e) : null;
}
function Ha(e, t) {
	var n = pr;
	return (
		e.current.memoizedState.isDehydrated && (Zt(e, t).flags |= 256),
		(e = Ki(e, t)),
		e !== 2 && ((t = Re), (Re = n), t !== null && Qa(t)),
		e
	);
}
function Qa(e) {
	Re === null ? (Re = e) : Re.push.apply(Re, e);
}
function km(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						o = i.getSnapshot;
					i = i.value;
					try {
						if (!qe(o(), i)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			(n.return = t), (t = n);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function Tt(e, t) {
	for (
		t &= ~Gs,
			t &= ~fo,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - Xe(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function du(e) {
	if (N & 6) throw Error(T(327));
	On();
	var t = Mi(e, 0);
	if (!(t & 1)) return Me(e, X()), null;
	var n = Ki(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = ya(e);
		r !== 0 && ((t = r), (n = Ha(e, r)));
	}
	if (n === 1) throw ((n = Ir), Zt(e, 0), Tt(e, t), Me(e, X()), n);
	if (n === 6) throw Error(T(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		Qt(e, Re, lt),
		Me(e, X()),
		null
	);
}
function Hs(e, t) {
	var n = N;
	N |= 1;
	try {
		return e(t);
	} finally {
		(N = n), N === 0 && ((Nn = X() + 500), so && At());
	}
}
function an(e) {
	Pt !== null && Pt.tag === 0 && !(N & 6) && On();
	var t = N;
	N |= 1;
	var n = $e.transition,
		r = B;
	try {
		if ((($e.transition = null), (B = 1), e)) return e();
	} finally {
		(B = r), ($e.transition = n), (N = t), !(N & 6) && At();
	}
}
function Qs() {
	(Ie = En.current), V(En);
}
function Zt(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), Xh(n)), Z !== null))
		for (n = Z.return; n !== null; ) {
			var r = n;
			switch ((Rs(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && Ni();
					break;
				case 3:
					bn(), V(Oe), V(ve), Ns();
					break;
				case 5:
					Ls(r);
					break;
				case 4:
					bn();
					break;
				case 13:
					V(W);
					break;
				case 19:
					V(W);
					break;
				case 10:
					Ms(r.type._context);
					break;
				case 22:
				case 23:
					Qs();
			}
			n = n.return;
		}
	if (
		((ie = e),
		(Z = e = Lt(e.current, null)),
		(le = Ie = t),
		(ee = 0),
		(Ir = null),
		(Gs = fo = on = 0),
		(Re = pr = null),
		Yt !== null)
	) {
		for (t = 0; t < Yt.length; t++)
			if (((n = Yt[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var i = r.next,
					o = n.pending;
				if (o !== null) {
					var a = o.next;
					(o.next = i), (r.next = a);
				}
				n.pending = r;
			}
		Yt = null;
	}
	return e;
}
function Zf(e, t) {
	do {
		var n = Z;
		try {
			if ((Ds(), (vi.current = Wi), Gi)) {
				for (var r = H.memoizedState; r !== null; ) {
					var i = r.queue;
					i !== null && (i.pending = null), (r = r.next);
				}
				Gi = !1;
			}
			if (
				((rn = 0),
				(re = q = H = null),
				(fr = !1),
				(Or = 0),
				(Vs.current = null),
				n === null || n.return === null)
			) {
				(ee = 1), (Ir = t), (Z = null);
				break;
			}
			e: {
				var o = e,
					a = n.return,
					l = n,
					s = t;
				if (
					((t = le),
					(l.flags |= 32768),
					s !== null && typeof s == "object" && typeof s.then == "function")
				) {
					var u = s,
						c = l,
						f = c.tag;
					if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
						var d = c.alternate;
						d
							? ((c.updateQueue = d.updateQueue),
							  (c.memoizedState = d.memoizedState),
							  (c.lanes = d.lanes))
							: ((c.updateQueue = null), (c.memoizedState = null));
					}
					var g = ql(a);
					if (g !== null) {
						(g.flags &= -257),
							eu(g, a, l, o, t),
							g.mode & 1 && Zl(o, u, t),
							(t = g),
							(s = u);
						var m = t.updateQueue;
						if (m === null) {
							var y = new Set();
							y.add(s), (t.updateQueue = y);
						} else m.add(s);
						break e;
					} else {
						if (!(t & 1)) {
							Zl(o, u, t), Js();
							break e;
						}
						s = Error(T(426));
					}
				} else if (G && l.mode & 1) {
					var P = ql(a);
					if (P !== null) {
						!(P.flags & 65536) && (P.flags |= 256),
							eu(P, a, l, o, t),
							ws(Ln(s, l));
						break e;
					}
				}
				(o = s = Ln(s, l)),
					ee !== 4 && (ee = 2),
					pr === null ? (pr = [o]) : pr.push(o),
					(o = a);
				do {
					switch (o.tag) {
						case 3:
							(o.flags |= 65536), (t &= -t), (o.lanes |= t);
							var h = Lf(o, s, t);
							Wl(o, h);
							break e;
						case 1:
							l = s;
							var p = o.type,
								v = o.stateNode;
							if (
								!(o.flags & 128) &&
								(typeof p.getDerivedStateFromError == "function" ||
									(v !== null &&
										typeof v.componentDidCatch == "function" &&
										(jt === null || !jt.has(v))))
							) {
								(o.flags |= 65536), (t &= -t), (o.lanes |= t);
								var C = Nf(o, l, t);
								Wl(o, C);
								break e;
							}
					}
					o = o.return;
				} while (o !== null);
			}
			td(n);
		} catch (S) {
			(t = S), Z === n && n !== null && (Z = n = n.return);
			continue;
		}
		break;
	} while (1);
}
function qf() {
	var e = Hi.current;
	return (Hi.current = Wi), e === null ? Wi : e;
}
function Js() {
	(ee === 0 || ee === 3 || ee === 2) && (ee = 4),
		ie === null || (!(on & 268435455) && !(fo & 268435455)) || Tt(ie, le);
}
function Ki(e, t) {
	var n = N;
	N |= 2;
	var r = qf();
	(ie !== e || le !== t) && ((lt = null), Zt(e, t));
	do
		try {
			_m();
			break;
		} catch (i) {
			Zf(e, i);
		}
	while (1);
	if ((Ds(), (N = n), (Hi.current = r), Z !== null)) throw Error(T(261));
	return (ie = null), (le = 0), ee;
}
function _m() {
	for (; Z !== null; ) ed(Z);
}
function Em() {
	for (; Z !== null && !Jp(); ) ed(Z);
}
function ed(e) {
	var t = rd(e.alternate, e, Ie);
	(e.memoizedProps = e.pendingProps),
		t === null ? td(e) : (Z = t),
		(Vs.current = null);
}
function td(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = vm(n, t)), n !== null)) {
				(n.flags &= 32767), (Z = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(ee = 6), (Z = null);
				return;
			}
		} else if (((n = mm(n, t, Ie)), n !== null)) {
			Z = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			Z = t;
			return;
		}
		Z = t = e;
	} while (t !== null);
	ee === 0 && (ee = 5);
}
function Qt(e, t, n) {
	var r = B,
		i = $e.transition;
	try {
		($e.transition = null), (B = 1), Tm(e, t, n, r);
	} finally {
		($e.transition = i), (B = r);
	}
	return null;
}
function Tm(e, t, n, r) {
	do On();
	while (Pt !== null);
	if (N & 6) throw Error(T(327));
	n = e.finishedWork;
	var i = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(T(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var o = n.lanes | n.childLanes;
	if (
		(ih(e, o),
		e === ie && ((Z = ie = null), (le = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			ii ||
			((ii = !0),
			id(Di, function() {
				return On(), null;
			})),
		(o = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || o)
	) {
		(o = $e.transition), ($e.transition = null);
		var a = B;
		B = 1;
		var l = N;
		(N |= 4),
			(Vs.current = null),
			ym(e, n),
			Kf(n, e),
			Gh(Ta),
			(Ii = !!Ea),
			(Ta = Ea = null),
			(e.current = n),
			Sm(n),
			Kp(),
			(N = l),
			(B = a),
			($e.transition = o);
	} else e.current = n;
	if (
		(ii && ((ii = !1), (Pt = e), (Ji = i)),
		(o = e.pendingLanes),
		o === 0 && (jt = null),
		Zp(n.stateNode),
		Me(e, X()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
	if (Qi) throw ((Qi = !1), (e = Ga), (Ga = null), e);
	return (
		Ji & 1 && e.tag !== 0 && On(),
		(o = e.pendingLanes),
		o & 1 ? (e === Wa ? hr++ : ((hr = 0), (Wa = e))) : (hr = 0),
		At(),
		null
	);
}
function On() {
	if (Pt !== null) {
		var e = jc(Ji),
			t = $e.transition,
			n = B;
		try {
			if ((($e.transition = null), (B = 16 > e ? 16 : e), Pt === null))
				var r = !1;
			else {
				if (((e = Pt), (Pt = null), (Ji = 0), N & 6)) throw Error(T(331));
				var i = N;
				for (N |= 4, w = e.current; w !== null; ) {
					var o = w,
						a = o.child;
					if (w.flags & 16) {
						var l = o.deletions;
						if (l !== null) {
							for (var s = 0; s < l.length; s++) {
								var u = l[s];
								for (w = u; w !== null; ) {
									var c = w;
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											dr(8, c, o);
									}
									var f = c.child;
									if (f !== null) (f.return = c), (w = f);
									else
										for (; w !== null; ) {
											c = w;
											var d = c.sibling,
												g = c.return;
											if ((Hf(c), c === u)) {
												w = null;
												break;
											}
											if (d !== null) {
												(d.return = g), (w = d);
												break;
											}
											w = g;
										}
								}
							}
							var m = o.alternate;
							if (m !== null) {
								var y = m.child;
								if (y !== null) {
									m.child = null;
									do {
										var P = y.sibling;
										(y.sibling = null), (y = P);
									} while (y !== null);
								}
							}
							w = o;
						}
					}
					if (o.subtreeFlags & 2064 && a !== null) (a.return = o), (w = a);
					else
						e: for (; w !== null; ) {
							if (((o = w), o.flags & 2048))
								switch (o.tag) {
									case 0:
									case 11:
									case 15:
										dr(9, o, o.return);
								}
							var h = o.sibling;
							if (h !== null) {
								(h.return = o.return), (w = h);
								break e;
							}
							w = o.return;
						}
				}
				var p = e.current;
				for (w = p; w !== null; ) {
					a = w;
					var v = a.child;
					if (a.subtreeFlags & 2064 && v !== null) (v.return = a), (w = v);
					else
						e: for (a = p; w !== null; ) {
							if (((l = w), l.flags & 2048))
								try {
									switch (l.tag) {
										case 0:
										case 11:
										case 15:
											co(9, l);
									}
								} catch (S) {
									J(l, l.return, S);
								}
							if (l === a) {
								w = null;
								break e;
							}
							var C = l.sibling;
							if (C !== null) {
								(C.return = l.return), (w = C);
								break e;
							}
							w = l.return;
						}
				}
				if (
					((N = i), At(), rt && typeof rt.onPostCommitFiberRoot == "function")
				)
					try {
						rt.onPostCommitFiberRoot(no, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(B = n), ($e.transition = t);
		}
	}
	return !1;
}
function pu(e, t, n) {
	(t = Ln(n, t)),
		(t = Lf(e, t, 1)),
		(e = It(e, t, 1)),
		(t = Se()),
		e !== null && (Br(e, 1, t), Me(e, t));
}
function J(e, t, n) {
	if (e.tag === 3) pu(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				pu(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == "function" ||
					(typeof r.componentDidCatch == "function" &&
						(jt === null || !jt.has(r)))
				) {
					(e = Ln(n, e)),
						(e = Nf(t, e, 1)),
						(t = It(t, e, 1)),
						(e = Se()),
						t !== null && (Br(t, 1, e), Me(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function xm(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = Se()),
		(e.pingedLanes |= e.suspendedLanes & n),
		ie === e &&
			(le & n) === n &&
			(ee === 4 || (ee === 3 && (le & 130023424) === le && 500 > X() - Ws)
				? Zt(e, 0)
				: (Gs |= n)),
		Me(e, t);
}
function nd(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = Jr), (Jr <<= 1), !(Jr & 130023424) && (Jr = 4194304))
			: (t = 1));
	var n = Se();
	(e = gt(e, t)), e !== null && (Br(e, t, n), Me(e, n));
}
function Pm(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), nd(e, n);
}
function Rm(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				i = e.memoizedState;
			i !== null && (n = i.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(T(314));
	}
	r !== null && r.delete(t), nd(e, n);
}
var rd;
rd = function(e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || Oe.current) we = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (we = !1), hm(e, t, n);
			we = !!(e.flags & 131072);
		}
	else (we = !1), G && t.flags & 1048576 && af(t, Fi, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			yi(e, t), (e = t.pendingProps);
			var i = Mn(t, ve.current);
			wn(t, n), (i = Bs(null, t, r, e, i, n));
			var o = Fs();
			return (
				(t.flags |= 1),
				typeof i == "object" &&
				i !== null &&
				typeof i.render == "function" &&
				i.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  De(r) ? ((o = !0), zi(t)) : (o = !1),
					  (t.memoizedState =
							i.state !== null && i.state !== void 0 ? i.state : null),
					  js(t),
					  (i.updater = lo),
					  (t.stateNode = i),
					  (i._reactInternals = t),
					  ja(t, r, e, n),
					  (t = Na(null, t, r, !0, o, n)))
					: ((t.tag = 0), G && o && Ps(t), ye(null, t, i, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(yi(e, t),
					(e = t.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(t.type = r),
					(i = t.tag = Om(r)),
					(e = Qe(r, e)),
					i)
				) {
					case 0:
						t = La(null, t, r, e, n);
						break e;
					case 1:
						t = ru(null, t, r, e, n);
						break e;
					case 11:
						t = tu(null, t, r, e, n);
						break e;
					case 14:
						t = nu(null, t, r, Qe(r.type, e), n);
						break e;
				}
				throw Error(T(306, r, ""));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Qe(r, i)),
				La(e, t, r, i, n)
			);
		case 1:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Qe(r, i)),
				ru(e, t, r, i, n)
			);
		case 3:
			e: {
				if ((Af(t), e === null)) throw Error(T(387));
				(r = t.pendingProps),
					(o = t.memoizedState),
					(i = o.element),
					cf(e, t),
					$i(t, r, null, n);
				var a = t.memoizedState;
				if (((r = a.element), o.isDehydrated))
					if (
						((o = {
							element: r,
							isDehydrated: !1,
							cache: a.cache,
							pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
							transitions: a.transitions,
						}),
						(t.updateQueue.baseState = o),
						(t.memoizedState = o),
						t.flags & 256)
					) {
						(i = Ln(Error(T(423)), t)), (t = iu(e, t, r, n, i));
						break e;
					} else if (r !== i) {
						(i = Ln(Error(T(424)), t)), (t = iu(e, t, r, n, i));
						break e;
					} else
						for (
							je = Mt(t.stateNode.containerInfo.firstChild),
								be = t,
								G = !0,
								Ke = null,
								n = hf(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((In(), r === i)) {
						t = yt(e, t, n);
						break e;
					}
					ye(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				mf(t),
				e === null && Da(t),
				(r = t.type),
				(i = t.pendingProps),
				(o = e !== null ? e.memoizedProps : null),
				(a = i.children),
				xa(r, i) ? (a = null) : o !== null && xa(r, o) && (t.flags |= 32),
				Ff(e, t),
				ye(e, t, a, n),
				t.child
			);
		case 6:
			return e === null && Da(t), null;
		case 13:
			return Uf(e, t, n);
		case 4:
			return (
				bs(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = jn(t, null, r, n)) : ye(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Qe(r, i)),
				tu(e, t, r, i, n)
			);
		case 7:
			return ye(e, t, t.pendingProps, n), t.child;
		case 8:
			return ye(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return ye(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(i = t.pendingProps),
					(o = t.memoizedProps),
					(a = i.value),
					A(Ai, r._currentValue),
					(r._currentValue = a),
					o !== null)
				)
					if (qe(o.value, a)) {
						if (o.children === i.children && !Oe.current) {
							t = yt(e, t, n);
							break e;
						}
					} else
						for (o = t.child, o !== null && (o.return = t); o !== null; ) {
							var l = o.dependencies;
							if (l !== null) {
								a = o.child;
								for (var s = l.firstContext; s !== null; ) {
									if (s.context === r) {
										if (o.tag === 1) {
											(s = ht(-1, n & -n)), (s.tag = 2);
											var u = o.updateQueue;
											if (u !== null) {
												u = u.shared;
												var c = u.pending;
												c === null
													? (s.next = s)
													: ((s.next = c.next), (c.next = s)),
													(u.pending = s);
											}
										}
										(o.lanes |= n),
											(s = o.alternate),
											s !== null && (s.lanes |= n),
											Ma(o.return, n, t),
											(l.lanes |= n);
										break;
									}
									s = s.next;
								}
							} else if (o.tag === 10) a = o.type === t.type ? null : o.child;
							else if (o.tag === 18) {
								if (((a = o.return), a === null)) throw Error(T(341));
								(a.lanes |= n),
									(l = a.alternate),
									l !== null && (l.lanes |= n),
									Ma(a, n, t),
									(a = o.sibling);
							} else a = o.child;
							if (a !== null) a.return = o;
							else
								for (a = o; a !== null; ) {
									if (a === t) {
										a = null;
										break;
									}
									if (((o = a.sibling), o !== null)) {
										(o.return = a.return), (a = o);
										break;
									}
									a = a.return;
								}
							o = a;
						}
				ye(e, t, i.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(i = t.type),
				(r = t.pendingProps.children),
				wn(t, n),
				(i = Ve(i)),
				(r = r(i)),
				(t.flags |= 1),
				ye(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(i = Qe(r, t.pendingProps)),
				(i = Qe(r.type, i)),
				nu(e, t, r, i, n)
			);
		case 15:
			return zf(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Qe(r, i)),
				yi(e, t),
				(t.tag = 1),
				De(r) ? ((e = !0), zi(t)) : (e = !1),
				wn(t, n),
				df(t, r, i),
				ja(t, r, i, n),
				Na(null, t, r, !0, e, n)
			);
		case 19:
			return $f(e, t, n);
		case 22:
			return Bf(e, t, n);
	}
	throw Error(T(156, t.tag));
};
function id(e, t) {
	return Oc(e, t);
}
function wm(e, t, n, r) {
	(this.tag = e),
		(this.key = n),
		(this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function Ue(e, t, n, r) {
	return new wm(e, t, n, r);
}
function Ks(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Om(e) {
	if (typeof e == "function") return Ks(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === hs)) return 11;
		if (e === ms) return 14;
	}
	return 2;
}
function Lt(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = Ue(e.tag, t, e.key, e.mode)),
			  (n.elementType = e.elementType),
			  (n.type = e.type),
			  (n.stateNode = e.stateNode),
			  (n.alternate = e),
			  (e.alternate = n))
			: ((n.pendingProps = t),
			  (n.type = e.type),
			  (n.flags = 0),
			  (n.subtreeFlags = 0),
			  (n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function ki(e, t, n, r, i, o) {
	var a = 2;
	if (((r = e), typeof e == "function")) Ks(e) && (a = 1);
	else if (typeof e == "string") a = 5;
	else
		e: switch (e) {
			case pn:
				return qt(n.children, i, o, t);
			case ps:
				(a = 8), (i |= 8);
				break;
			case ra:
				return (
					(e = Ue(12, n, t, i | 2)), (e.elementType = ra), (e.lanes = o), e
				);
			case ia:
				return (e = Ue(13, n, t, i)), (e.elementType = ia), (e.lanes = o), e;
			case oa:
				return (e = Ue(19, n, t, i)), (e.elementType = oa), (e.lanes = o), e;
			case dc:
				return po(n, i, o, t);
			default:
				if (typeof e == "object" && e !== null)
					switch (e.$$typeof) {
						case cc:
							a = 10;
							break e;
						case fc:
							a = 9;
							break e;
						case hs:
							a = 11;
							break e;
						case ms:
							a = 14;
							break e;
						case kt:
							(a = 16), (r = null);
							break e;
					}
				throw Error(T(130, e == null ? e : typeof e, ""));
		}
	return (
		(t = Ue(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
	);
}
function qt(e, t, n, r) {
	return (e = Ue(7, e, r, t)), (e.lanes = n), e;
}
function po(e, t, n, r) {
	return (
		(e = Ue(22, e, r, t)),
		(e.elementType = dc),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function Ho(e, t, n) {
	return (e = Ue(6, e, null, t)), (e.lanes = n), e;
}
function Qo(e, t, n) {
	return (
		(t = Ue(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function Dm(e, t, n, r, i) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = Ro(0)),
		(this.expirationTimes = Ro(-1)),
		(this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
		(this.entanglements = Ro(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null);
}
function Ys(e, t, n, r, i, o, a, l, s) {
	return (
		(e = new Dm(e, t, n, l, s)),
		t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
		(o = Ue(3, null, null, t)),
		(e.current = o),
		(o.stateNode = e),
		(o.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		js(o),
		e
	);
}
function Mm(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: dn,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function od(e) {
	if (!e) return zt;
	e = e._reactInternals;
	e: {
		if (ln(e) !== e || e.tag !== 1) throw Error(T(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (De(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(T(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (De(n)) return rf(e, n, t);
	}
	return t;
}
function ad(e, t, n, r, i, o, a, l, s) {
	return (
		(e = Ys(n, r, !0, e, i, o, a, l, s)),
		(e.context = od(null)),
		(n = e.current),
		(r = Se()),
		(i = bt(n)),
		(o = ht(r, i)),
		(o.callback = t ?? null),
		It(n, o, i),
		(e.current.lanes = i),
		Br(e, i, r),
		Me(e, r),
		e
	);
}
function ho(e, t, n, r) {
	var i = t.current,
		o = Se(),
		a = bt(i);
	return (
		(n = od(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = ht(o, a)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = It(i, t, a)),
		e !== null && (Ze(e, i, a, o), mi(e, i, a)),
		a
	);
}
function Yi(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function hu(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Xs(e, t) {
	hu(e, t), (e = e.alternate) && hu(e, t);
}
function Im() {
	return null;
}
var sd =
	typeof reportError == "function"
		? reportError
		: function(e) {
				console.error(e);
		  };
function Zs(e) {
	this._internalRoot = e;
}
mo.prototype.render = Zs.prototype.render = function(e) {
	var t = this._internalRoot;
	if (t === null) throw Error(T(409));
	ho(e, t, null, null);
};
mo.prototype.unmount = Zs.prototype.unmount = function() {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		an(function() {
			ho(null, e, null, null);
		}),
			(t[vt] = null);
	}
};
function mo(e) {
	this._internalRoot = e;
}
mo.prototype.unstable_scheduleHydration = function(e) {
	if (e) {
		var t = Nc();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < Et.length && t !== 0 && t < Et[n].priority; n++);
		Et.splice(n, 0, e), n === 0 && Bc(e);
	}
};
function qs(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function vo(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
	);
}
function mu() {}
function jm(e, t, n, r, i) {
	if (i) {
		if (typeof r == "function") {
			var o = r;
			r = function() {
				var u = Yi(a);
				o.call(u);
			};
		}
		var a = ad(t, r, e, 0, null, !1, !1, "", mu);
		return (
			(e._reactRootContainer = a),
			(e[vt] = a.current),
			Tr(e.nodeType === 8 ? e.parentNode : e),
			an(),
			a
		);
	}
	for (; (i = e.lastChild); ) e.removeChild(i);
	if (typeof r == "function") {
		var l = r;
		r = function() {
			var u = Yi(s);
			l.call(u);
		};
	}
	var s = Ys(e, 0, !1, null, null, !1, !1, "", mu);
	return (
		(e._reactRootContainer = s),
		(e[vt] = s.current),
		Tr(e.nodeType === 8 ? e.parentNode : e),
		an(function() {
			ho(t, s, n, r);
		}),
		s
	);
}
function go(e, t, n, r, i) {
	var o = n._reactRootContainer;
	if (o) {
		var a = o;
		if (typeof i == "function") {
			var l = i;
			i = function() {
				var s = Yi(a);
				l.call(s);
			};
		}
		ho(t, a, e, i);
	} else a = jm(n, t, e, i, r);
	return Yi(a);
}
bc = function(e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = tr(t.pendingLanes);
				n !== 0 &&
					(ys(t, n | 1), Me(t, X()), !(N & 6) && ((Nn = X() + 500), At()));
			}
			break;
		case 13:
			an(function() {
				var r = gt(e, 1);
				if (r !== null) {
					var i = Se();
					Ze(r, e, 1, i);
				}
			}),
				Xs(e, 1);
	}
};
Ss = function(e) {
	if (e.tag === 13) {
		var t = gt(e, 134217728);
		if (t !== null) {
			var n = Se();
			Ze(t, e, 134217728, n);
		}
		Xs(e, 134217728);
	}
};
Lc = function(e) {
	if (e.tag === 13) {
		var t = bt(e),
			n = gt(e, t);
		if (n !== null) {
			var r = Se();
			Ze(n, e, t, r);
		}
		Xs(e, t);
	}
};
Nc = function() {
	return B;
};
zc = function(e, t) {
	var n = B;
	try {
		return (B = e), t();
	} finally {
		B = n;
	}
};
ma = function(e, t, n) {
	switch (t) {
		case "input":
			if ((la(e, n), (t = n.name), n.type === "radio" && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						"input[name=" + JSON.stringify("" + t) + '][type="radio"]'
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var i = ao(r);
						if (!i) throw Error(T(90));
						hc(r), la(r, i);
					}
				}
			}
			break;
		case "textarea":
			vc(e, n);
			break;
		case "select":
			(t = n.value), t != null && Tn(e, !!n.multiple, t, !1);
	}
};
Ec = Hs;
Tc = an;
var bm = { usingClientEntryPoint: !1, Events: [Ar, gn, ao, kc, _c, Hs] },
	Yn = {
		findFiberByHostInstance: Kt,
		bundleType: 0,
		version: "18.2.0",
		rendererPackageName: "react-dom",
	},
	Lm = {
		bundleType: Yn.bundleType,
		version: Yn.version,
		rendererPackageName: Yn.rendererPackageName,
		rendererConfig: Yn.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: St.ReactCurrentDispatcher,
		findHostInstanceByFiber: function(e) {
			return (e = Rc(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: Yn.findFiberByHostInstance || Im,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var oi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!oi.isDisabled && oi.supportsFiber)
		try {
			(no = oi.inject(Lm)), (rt = oi);
		} catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bm;
Ne.createPortal = function(e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!qs(t)) throw Error(T(200));
	return Mm(e, t, null, n);
};
Ne.createRoot = function(e, t) {
	if (!qs(e)) throw Error(T(299));
	var n = !1,
		r = "",
		i = sd;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
		(t = Ys(e, 1, !1, null, null, n, !1, r, i)),
		(e[vt] = t.current),
		Tr(e.nodeType === 8 ? e.parentNode : e),
		new Zs(t)
	);
};
Ne.findDOMNode = function(e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == "function"
			? Error(T(188))
			: ((e = Object.keys(e).join(",")), Error(T(268, e)));
	return (e = Rc(t)), (e = e === null ? null : e.stateNode), e;
};
Ne.flushSync = function(e) {
	return an(e);
};
Ne.hydrate = function(e, t, n) {
	if (!vo(t)) throw Error(T(200));
	return go(null, e, t, !0, n);
};
Ne.hydrateRoot = function(e, t, n) {
	if (!qs(e)) throw Error(T(405));
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		o = "",
		a = sd;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
		(t = ad(t, null, e, 1, n ?? null, i, !1, o, a)),
		(e[vt] = t.current),
		Tr(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(i = n._getVersion),
				(i = i(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, i])
					: t.mutableSourceEagerHydrationData.push(n, i);
	return new mo(t);
};
Ne.render = function(e, t, n) {
	if (!vo(t)) throw Error(T(200));
	return go(null, e, t, !1, n);
};
Ne.unmountComponentAtNode = function(e) {
	if (!vo(e)) throw Error(T(40));
	return e._reactRootContainer
		? (an(function() {
				go(null, null, e, !1, function() {
					(e._reactRootContainer = null), (e[vt] = null);
				});
		  }),
		  !0)
		: !1;
};
Ne.unstable_batchedUpdates = Hs;
Ne.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
	if (!vo(n)) throw Error(T(200));
	if (e == null || e._reactInternals === void 0) throw Error(T(38));
	return go(e, t, n, !1, r);
};
Ne.version = "18.2.0-next-9e3b772b8-20220608";
function ld() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ld);
		} catch (e) {
			console.error(e);
		}
}
ld(), (oc.exports = Ne);
var Nm = oc.exports,
	vu = Nm;
(ta.createRoot = vu.createRoot), (ta.hydrateRoot = vu.hydrateRoot);
/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function jr() {
	return (
		(jr = Object.assign
			? Object.assign.bind()
			: function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		jr.apply(this, arguments)
	);
}
var Rt;
(function(e) {
	(e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Rt || (Rt = {}));
const gu = "popstate";
function zm(e) {
	e === void 0 && (e = {});
	function t(r, i) {
		let { pathname: o, search: a, hash: l } = r.location;
		return Ja(
			"",
			{ pathname: o, search: a, hash: l },
			(i.state && i.state.usr) || null,
			(i.state && i.state.key) || "default"
		);
	}
	function n(r, i) {
		return typeof i == "string" ? i : ud(i);
	}
	return Fm(t, n, null, e);
}
function te(e, t) {
	if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function el(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function Bm() {
	return Math.random()
		.toString(36)
		.substr(2, 8);
}
function yu(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function Ja(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		jr(
			{ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
			typeof t == "string" ? An(t) : t,
			{ state: n, key: (t && t.key) || r || Bm() }
		)
	);
}
function ud(e) {
	let { pathname: t = "/", search: n = "", hash: r = "" } = e;
	return (
		n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
		r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
		t
	);
}
function An(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
		let r = e.indexOf("?");
		r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
			e && (t.pathname = e);
	}
	return t;
}
function Fm(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: i = document.defaultView, v5Compat: o = !1 } = r,
		a = i.history,
		l = Rt.Pop,
		s = null,
		u = c();
	u == null && ((u = 0), a.replaceState(jr({}, a.state, { idx: u }), ""));
	function c() {
		return (a.state || { idx: null }).idx;
	}
	function f() {
		l = Rt.Pop;
		let P = c(),
			h = P == null ? null : P - u;
		(u = P), s && s({ action: l, location: y.location, delta: h });
	}
	function d(P, h) {
		l = Rt.Push;
		let p = Ja(y.location, P, h);
		n && n(p, P), (u = c() + 1);
		let v = yu(p, u),
			C = y.createHref(p);
		try {
			a.pushState(v, "", C);
		} catch {
			i.location.assign(C);
		}
		o && s && s({ action: l, location: y.location, delta: 1 });
	}
	function g(P, h) {
		l = Rt.Replace;
		let p = Ja(y.location, P, h);
		n && n(p, P), (u = c());
		let v = yu(p, u),
			C = y.createHref(p);
		a.replaceState(v, "", C),
			o && s && s({ action: l, location: y.location, delta: 0 });
	}
	function m(P) {
		let h = i.location.origin !== "null" ? i.location.origin : i.location.href,
			p = typeof P == "string" ? P : ud(P);
		return (
			te(
				h,
				"No window.location.(origin|href) available to create URL for href: " +
					p
			),
			new URL(p, h)
		);
	}
	let y = {
		get action() {
			return l;
		},
		get location() {
			return e(i, a);
		},
		listen(P) {
			if (s) throw new Error("A history only accepts one active listener");
			return (
				i.addEventListener(gu, f),
				(s = P),
				() => {
					i.removeEventListener(gu, f), (s = null);
				}
			);
		},
		createHref(P) {
			return t(i, P);
		},
		createURL: m,
		encodeLocation(P) {
			let h = m(P);
			return { pathname: h.pathname, search: h.search, hash: h.hash };
		},
		push: d,
		replace: g,
		go(P) {
			return a.go(P);
		},
	};
	return y;
}
var Su;
(function(e) {
	(e.data = "data"),
		(e.deferred = "deferred"),
		(e.redirect = "redirect"),
		(e.error = "error");
})(Su || (Su = {}));
function Am(e, t, n) {
	n === void 0 && (n = "/");
	let r = typeof t == "string" ? An(t) : t,
		i = dd(r.pathname || "/", n);
	if (i == null) return null;
	let o = cd(e);
	Um(o);
	let a = null;
	for (let l = 0; a == null && l < o.length; ++l) a = Ym(o[l], qm(i));
	return a;
}
function cd(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
	let i = (o, a, l) => {
		let s = {
			relativePath: l === void 0 ? o.path || "" : l,
			caseSensitive: o.caseSensitive === !0,
			childrenIndex: a,
			route: o,
		};
		s.relativePath.startsWith("/") &&
			(te(
				s.relativePath.startsWith(r),
				'Absolute route path "' +
					s.relativePath +
					'" nested under path ' +
					('"' + r + '" is not valid. An absolute child route path ') +
					"must start with the combined path of all its parent routes."
			),
			(s.relativePath = s.relativePath.slice(r.length)));
		let u = en([r, s.relativePath]),
			c = n.concat(s);
		o.children &&
			o.children.length > 0 &&
			(te(
				o.index !== !0,
				"Index routes must not have child routes. Please remove " +
					('all child routes from route path "' + u + '".')
			),
			cd(o.children, t, c, u)),
			!(o.path == null && !o.index) &&
				t.push({ path: u, score: Jm(u, o.index), routesMeta: c });
	};
	return (
		e.forEach((o, a) => {
			var l;
			if (o.path === "" || !((l = o.path) != null && l.includes("?"))) i(o, a);
			else for (let s of fd(o.path)) i(o, a, s);
		}),
		t
	);
}
function fd(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t,
		i = n.endsWith("?"),
		o = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [o, ""] : [o];
	let a = fd(r.join("/")),
		l = [];
	return (
		l.push(...a.map((s) => (s === "" ? o : [o, s].join("/")))),
		i && l.push(...a),
		l.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
	);
}
function Um(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: Km(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex)
			  )
	);
}
const $m = /^:\w+$/,
	Vm = 3,
	Gm = 2,
	Wm = 1,
	Hm = 10,
	Qm = -2,
	Cu = (e) => e === "*";
function Jm(e, t) {
	let n = e.split("/"),
		r = n.length;
	return (
		n.some(Cu) && (r += Qm),
		t && (r += Gm),
		n
			.filter((i) => !Cu(i))
			.reduce((i, o) => i + ($m.test(o) ? Vm : o === "" ? Wm : Hm), r)
	);
}
function Km(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function Ym(e, t) {
	let { routesMeta: n } = e,
		r = {},
		i = "/",
		o = [];
	for (let a = 0; a < n.length; ++a) {
		let l = n[a],
			s = a === n.length - 1,
			u = i === "/" ? t : t.slice(i.length) || "/",
			c = Xm(
				{ path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
				u
			);
		if (!c) return null;
		Object.assign(r, c.params);
		let f = l.route;
		o.push({
			params: r,
			pathname: en([i, c.pathname]),
			pathnameBase: ov(en([i, c.pathnameBase])),
			route: f,
		}),
			c.pathnameBase !== "/" && (i = en([i, c.pathnameBase]));
	}
	return o;
}
function Xm(e, t) {
	typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = Zm(e.path, e.caseSensitive, e.end),
		i = t.match(n);
	if (!i) return null;
	let o = i[0],
		a = o.replace(/(.)\/+$/, "$1"),
		l = i.slice(1);
	return {
		params: r.reduce((u, c, f) => {
			if (c === "*") {
				let d = l[f] || "";
				a = o.slice(0, o.length - d.length).replace(/(.)\/+$/, "$1");
			}
			return (u[c] = ev(l[f] || "", c)), u;
		}, {}),
		pathname: o,
		pathnameBase: a,
		pattern: e,
	};
}
function Zm(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		el(
			e === "*" || !e.endsWith("*") || e.endsWith("/*"),
			'Route path "' +
				e +
				'" will be treated as if it were ' +
				('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
				"always follow a `/` in the pattern. To get rid of this warning, " +
				('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
		);
	let r = [],
		i =
			"^" +
			e
				.replace(/\/*\*?$/, "")
				.replace(/^\/*/, "/")
				.replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
				.replace(/\/:(\w+)/g, (a, l) => (r.push(l), "/([^\\/]+)"));
	return (
		e.endsWith("*")
			? (r.push("*"),
			  (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
			: n
			? (i += "\\/*$")
			: e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
		[new RegExp(i, t ? void 0 : "i"), r]
	);
}
function qm(e) {
	try {
		return decodeURI(e);
	} catch (t) {
		return (
			el(
				!1,
				'The URL path "' +
					e +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					("encoding (" + t + ").")
			),
			e
		);
	}
}
function ev(e, t) {
	try {
		return decodeURIComponent(e);
	} catch (n) {
		return (
			el(
				!1,
				'The value for the URL param "' +
					t +
					'" will not be decoded because' +
					(' the string "' +
						e +
						'" is a malformed URL segment. This is probably') +
					(" due to a bad percent encoding (" + n + ").")
			),
			e
		);
	}
}
function dd(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
function tv(e, t) {
	t === void 0 && (t = "/");
	let { pathname: n, search: r = "", hash: i = "" } =
		typeof e == "string" ? An(e) : e;
	return {
		pathname: n ? (n.startsWith("/") ? n : nv(n, t)) : t,
		search: av(r),
		hash: sv(i),
	};
}
function nv(e, t) {
	let n = t.replace(/\/+$/, "").split("/");
	return (
		e.split("/").forEach((i) => {
			i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
		}),
		n.length > 1 ? n.join("/") : "/"
	);
}
function Jo(e, t, n, r) {
	return (
		"Cannot include a '" +
		e +
		"' character in a manually specified " +
		("`to." +
			t +
			"` field [" +
			JSON.stringify(r) +
			"].  Please separate it out to the ") +
		("`to." + n + "` field. Alternatively you may provide the full path as ") +
		'a string in <Link to="..."> and the router will parse it for you.'
	);
}
function rv(e) {
	return e.filter(
		(t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
	);
}
function iv(e, t, n, r) {
	r === void 0 && (r = !1);
	let i;
	typeof e == "string"
		? (i = An(e))
		: ((i = jr({}, e)),
		  te(
				!i.pathname || !i.pathname.includes("?"),
				Jo("?", "pathname", "search", i)
		  ),
		  te(
				!i.pathname || !i.pathname.includes("#"),
				Jo("#", "pathname", "hash", i)
		  ),
		  te(!i.search || !i.search.includes("#"), Jo("#", "search", "hash", i)));
	let o = e === "" || i.pathname === "",
		a = o ? "/" : i.pathname,
		l;
	if (r || a == null) l = n;
	else {
		let f = t.length - 1;
		if (a.startsWith("..")) {
			let d = a.split("/");
			for (; d[0] === ".."; ) d.shift(), (f -= 1);
			i.pathname = d.join("/");
		}
		l = f >= 0 ? t[f] : "/";
	}
	let s = tv(i, l),
		u = a && a !== "/" && a.endsWith("/"),
		c = (o || a === ".") && n.endsWith("/");
	return !s.pathname.endsWith("/") && (u || c) && (s.pathname += "/"), s;
}
const en = (e) => e.join("/").replace(/\/\/+/g, "/"),
	ov = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
	av = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
	sv = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function lv(e) {
	return (
		e != null &&
		typeof e.status == "number" &&
		typeof e.statusText == "string" &&
		typeof e.internal == "boolean" &&
		"data" in e
	);
}
const pd = ["post", "put", "patch", "delete"];
new Set(pd);
const uv = ["get", ...pd];
new Set(uv);
/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Xi() {
	return (
		(Xi = Object.assign
			? Object.assign.bind()
			: function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		Xi.apply(this, arguments)
	);
}
const tl = D.createContext(null),
	cv = D.createContext(null),
	yo = D.createContext(null),
	So = D.createContext(null),
	un = D.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	hd = D.createContext(null);
function Co() {
	return D.useContext(So) != null;
}
function md() {
	return Co() || te(!1), D.useContext(So).location;
}
function vd(e) {
	D.useContext(yo).static || D.useLayoutEffect(e);
}
function nl() {
	let { isDataRoute: e } = D.useContext(un);
	return e ? Ev() : fv();
}
function fv() {
	Co() || te(!1);
	let e = D.useContext(tl),
		{ basename: t, navigator: n } = D.useContext(yo),
		{ matches: r } = D.useContext(un),
		{ pathname: i } = md(),
		o = JSON.stringify(rv(r).map((s) => s.pathnameBase)),
		a = D.useRef(!1);
	return (
		vd(() => {
			a.current = !0;
		}),
		D.useCallback(
			function(s, u) {
				if ((u === void 0 && (u = {}), !a.current)) return;
				if (typeof s == "number") {
					n.go(s);
					return;
				}
				let c = iv(s, JSON.parse(o), i, u.relative === "path");
				e == null &&
					t !== "/" &&
					(c.pathname = c.pathname === "/" ? t : en([t, c.pathname])),
					(u.replace ? n.replace : n.push)(c, u.state, u);
			},
			[t, n, o, i, e]
		)
	);
}
function gd() {
	let { matches: e } = D.useContext(un),
		t = e[e.length - 1];
	return t ? t.params : {};
}
function dv(e, t) {
	return pv(e, t);
}
function pv(e, t, n) {
	Co() || te(!1);
	let { navigator: r } = D.useContext(yo),
		{ matches: i } = D.useContext(un),
		o = i[i.length - 1],
		a = o ? o.params : {};
	o && o.pathname;
	let l = o ? o.pathnameBase : "/";
	o && o.route;
	let s = md(),
		u;
	if (t) {
		var c;
		let y = typeof t == "string" ? An(t) : t;
		l === "/" || ((c = y.pathname) != null && c.startsWith(l)) || te(!1),
			(u = y);
	} else u = s;
	let f = u.pathname || "/",
		d = l === "/" ? f : f.slice(l.length) || "/",
		g = Am(e, { pathname: d }),
		m = yv(
			g &&
				g.map((y) =>
					Object.assign({}, y, {
						params: Object.assign({}, a, y.params),
						pathname: en([
							l,
							r.encodeLocation
								? r.encodeLocation(y.pathname).pathname
								: y.pathname,
						]),
						pathnameBase:
							y.pathnameBase === "/"
								? l
								: en([
										l,
										r.encodeLocation
											? r.encodeLocation(y.pathnameBase).pathname
											: y.pathnameBase,
								  ]),
					})
				),
			i,
			n
		);
	return t && m
		? D.createElement(
				So.Provider,
				{
					value: {
						location: Xi(
							{
								pathname: "/",
								search: "",
								hash: "",
								state: null,
								key: "default",
							},
							u
						),
						navigationType: Rt.Pop,
					},
				},
				m
		  )
		: m;
}
function hv() {
	let e = _v(),
		t = lv(e)
			? e.status + " " + e.statusText
			: e instanceof Error
			? e.message
			: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
		o = null;
	return D.createElement(
		D.Fragment,
		null,
		D.createElement("h2", null, "Unexpected Application Error!"),
		D.createElement("h3", { style: { fontStyle: "italic" } }, t),
		n ? D.createElement("pre", { style: i }, n) : null,
		o
	);
}
const mv = D.createElement(hv, null);
class vv extends D.Component {
	constructor(t) {
		super(t),
			(this.state = {
				location: t.location,
				revalidation: t.revalidation,
				error: t.error,
			});
	}
	static getDerivedStateFromError(t) {
		return { error: t };
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location ||
			(n.revalidation !== "idle" && t.revalidation === "idle")
			? { error: t.error, location: t.location, revalidation: t.revalidation }
			: {
					error: t.error || n.error,
					location: n.location,
					revalidation: t.revalidation || n.revalidation,
			  };
	}
	componentDidCatch(t, n) {
		console.error(
			"React Router caught the following error during render",
			t,
			n
		);
	}
	render() {
		return this.state.error
			? D.createElement(
					un.Provider,
					{ value: this.props.routeContext },
					D.createElement(hd.Provider, {
						value: this.state.error,
						children: this.props.component,
					})
			  )
			: this.props.children;
	}
}
function gv(e) {
	let { routeContext: t, match: n, children: r } = e,
		i = D.useContext(tl);
	return (
		i &&
			i.static &&
			i.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(i.staticContext._deepestRenderedBoundaryId = n.route.id),
		D.createElement(un.Provider, { value: t }, r)
	);
}
function yv(e, t, n) {
	var r;
	if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
		var i;
		if ((i = n) != null && i.errors) e = n.matches;
		else return null;
	}
	let o = e,
		a = (r = n) == null ? void 0 : r.errors;
	if (a != null) {
		let l = o.findIndex(
			(s) => s.route.id && (a == null ? void 0 : a[s.route.id])
		);
		l >= 0 || te(!1), (o = o.slice(0, Math.min(o.length, l + 1)));
	}
	return o.reduceRight((l, s, u) => {
		let c = s.route.id ? (a == null ? void 0 : a[s.route.id]) : null,
			f = null;
		n && (f = s.route.errorElement || mv);
		let d = t.concat(o.slice(0, u + 1)),
			g = () => {
				let m;
				return (
					c
						? (m = f)
						: s.route.Component
						? (m = D.createElement(s.route.Component, null))
						: s.route.element
						? (m = s.route.element)
						: (m = l),
					D.createElement(gv, {
						match: s,
						routeContext: { outlet: l, matches: d, isDataRoute: n != null },
						children: m,
					})
				);
			};
		return n && (s.route.ErrorBoundary || s.route.errorElement || u === 0)
			? D.createElement(vv, {
					location: n.location,
					revalidation: n.revalidation,
					component: f,
					error: c,
					children: g(),
					routeContext: { outlet: null, matches: d, isDataRoute: !0 },
			  })
			: g();
	}, null);
}
var Ka;
(function(e) {
	(e.UseBlocker = "useBlocker"),
		(e.UseRevalidator = "useRevalidator"),
		(e.UseNavigateStable = "useNavigate");
})(Ka || (Ka = {}));
var br;
(function(e) {
	(e.UseBlocker = "useBlocker"),
		(e.UseLoaderData = "useLoaderData"),
		(e.UseActionData = "useActionData"),
		(e.UseRouteError = "useRouteError"),
		(e.UseNavigation = "useNavigation"),
		(e.UseRouteLoaderData = "useRouteLoaderData"),
		(e.UseMatches = "useMatches"),
		(e.UseRevalidator = "useRevalidator"),
		(e.UseNavigateStable = "useNavigate"),
		(e.UseRouteId = "useRouteId");
})(br || (br = {}));
function Sv(e) {
	let t = D.useContext(tl);
	return t || te(!1), t;
}
function Cv(e) {
	let t = D.useContext(cv);
	return t || te(!1), t;
}
function kv(e) {
	let t = D.useContext(un);
	return t || te(!1), t;
}
function yd(e) {
	let t = kv(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || te(!1), n.route.id;
}
function _v() {
	var e;
	let t = D.useContext(hd),
		n = Cv(br.UseRouteError),
		r = yd(br.UseRouteError);
	return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Ev() {
	let { router: e } = Sv(Ka.UseNavigateStable),
		t = yd(br.UseNavigateStable),
		n = D.useRef(!1);
	return (
		vd(() => {
			n.current = !0;
		}),
		D.useCallback(
			function(i, o) {
				o === void 0 && (o = {}),
					n.current &&
						(typeof i == "number"
							? e.navigate(i)
							: e.navigate(i, Xi({ fromRouteId: t }, o)));
			},
			[e, t]
		)
	);
}
function _i(e) {
	te(!1);
}
function Tv(e) {
	let {
		basename: t = "/",
		children: n = null,
		location: r,
		navigationType: i = Rt.Pop,
		navigator: o,
		static: a = !1,
	} = e;
	Co() && te(!1);
	let l = t.replace(/^\/*/, "/"),
		s = D.useMemo(() => ({ basename: l, navigator: o, static: a }), [l, o, a]);
	typeof r == "string" && (r = An(r));
	let {
			pathname: u = "/",
			search: c = "",
			hash: f = "",
			state: d = null,
			key: g = "default",
		} = r,
		m = D.useMemo(() => {
			let y = dd(u, l);
			return y == null
				? null
				: {
						location: { pathname: y, search: c, hash: f, state: d, key: g },
						navigationType: i,
				  };
		}, [l, u, c, f, d, g, i]);
	return m == null
		? null
		: D.createElement(
				yo.Provider,
				{ value: s },
				D.createElement(So.Provider, { children: n, value: m })
		  );
}
function xv(e) {
	let { children: t, location: n } = e;
	return dv(Ya(t), n);
}
var ku;
(function(e) {
	(e[(e.pending = 0)] = "pending"),
		(e[(e.success = 1)] = "success"),
		(e[(e.error = 2)] = "error");
})(ku || (ku = {}));
new Promise(() => {});
function Ya(e, t) {
	t === void 0 && (t = []);
	let n = [];
	return (
		D.Children.forEach(e, (r, i) => {
			if (!D.isValidElement(r)) return;
			let o = [...t, i];
			if (r.type === D.Fragment) {
				n.push.apply(n, Ya(r.props.children, o));
				return;
			}
			r.type !== _i && te(!1), !r.props.index || !r.props.children || te(!1);
			let a = {
				id: r.props.id || o.join("-"),
				caseSensitive: r.props.caseSensitive,
				element: r.props.element,
				Component: r.props.Component,
				index: r.props.index,
				path: r.props.path,
				loader: r.props.loader,
				action: r.props.action,
				errorElement: r.props.errorElement,
				ErrorBoundary: r.props.ErrorBoundary,
				hasErrorBoundary:
					r.props.ErrorBoundary != null || r.props.errorElement != null,
				shouldRevalidate: r.props.shouldRevalidate,
				handle: r.props.handle,
				lazy: r.props.lazy,
			};
			r.props.children && (a.children = Ya(r.props.children, o)), n.push(a);
		}),
		n
	);
}
/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Pv(e) {
	let { basename: t, children: n, window: r } = e,
		i = D.useRef();
	i.current == null && (i.current = zm({ window: r, v5Compat: !0 }));
	let o = i.current,
		[a, l] = D.useState({ action: o.action, location: o.location });
	return (
		D.useLayoutEffect(() => o.listen(l), [o]),
		D.createElement(Tv, {
			basename: t,
			children: n,
			location: a.location,
			navigationType: a.action,
			navigator: o,
		})
	);
}
var _u;
(function(e) {
	(e.UseScrollRestoration = "useScrollRestoration"),
		(e.UseSubmitImpl = "useSubmitImpl"),
		(e.UseFetcher = "useFetcher");
})(_u || (_u = {}));
var Eu;
(function(e) {
	(e.UseFetchers = "useFetchers"),
		(e.UseScrollRestoration = "useScrollRestoration");
})(Eu || (Eu = {}));
let ai;
const Rv = new Uint8Array(16);
function wv() {
	if (
		!ai &&
		((ai =
			typeof crypto < "u" &&
			crypto.getRandomValues &&
			crypto.getRandomValues.bind(crypto)),
		!ai)
	)
		throw new Error(
			"crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
		);
	return ai(Rv);
}
const oe = [];
for (let e = 0; e < 256; ++e) oe.push((e + 256).toString(16).slice(1));
function Ov(e, t = 0) {
	return (
		oe[e[t + 0]] +
		oe[e[t + 1]] +
		oe[e[t + 2]] +
		oe[e[t + 3]] +
		"-" +
		oe[e[t + 4]] +
		oe[e[t + 5]] +
		"-" +
		oe[e[t + 6]] +
		oe[e[t + 7]] +
		"-" +
		oe[e[t + 8]] +
		oe[e[t + 9]] +
		"-" +
		oe[e[t + 10]] +
		oe[e[t + 11]] +
		oe[e[t + 12]] +
		oe[e[t + 13]] +
		oe[e[t + 14]] +
		oe[e[t + 15]]
	).toLowerCase();
}
let Tu,
	Ko,
	Yo = 0,
	Xo = 0;
function Dv(e, t, n) {
	let r = (t && n) || 0;
	const i = t || new Array(16);
	e = e || {};
	let o = e.node || Tu,
		a = e.clockseq !== void 0 ? e.clockseq : Ko;
	if (o == null || a == null) {
		const d = e.random || (e.rng || wv)();
		o == null && (o = Tu = [d[0] | 1, d[1], d[2], d[3], d[4], d[5]]),
			a == null && (a = Ko = ((d[6] << 8) | d[7]) & 16383);
	}
	let l = e.msecs !== void 0 ? e.msecs : Date.now(),
		s = e.nsecs !== void 0 ? e.nsecs : Xo + 1;
	const u = l - Yo + (s - Xo) / 1e4;
	if (
		(u < 0 && e.clockseq === void 0 && (a = (a + 1) & 16383),
		(u < 0 || l > Yo) && e.nsecs === void 0 && (s = 0),
		s >= 1e4)
	)
		throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
	(Yo = l), (Xo = s), (Ko = a), (l += 122192928e5);
	const c = ((l & 268435455) * 1e4 + s) % 4294967296;
	(i[r++] = (c >>> 24) & 255),
		(i[r++] = (c >>> 16) & 255),
		(i[r++] = (c >>> 8) & 255),
		(i[r++] = c & 255);
	const f = ((l / 4294967296) * 1e4) & 268435455;
	(i[r++] = (f >>> 8) & 255),
		(i[r++] = f & 255),
		(i[r++] = ((f >>> 24) & 15) | 16),
		(i[r++] = (f >>> 16) & 255),
		(i[r++] = (a >>> 8) | 128),
		(i[r++] = a & 255);
	for (let d = 0; d < 6; ++d) i[r + d] = o[d];
	return t || Ov(i);
}
const Mv = () => {
	const e = nl();
	function t() {
		const n = Dv();
		e(`/room/${n}`);
	}
	return F.jsx("button", { onClick: t, children: "Create room" });
};
var Sd = { exports: {} };
(function(e) {
	var t = {};
	(t.useBlobBuilder = (function() {
		try {
			return new Blob([]), !1;
		} catch {
			return !0;
		}
	})()),
		(t.useArrayBufferView =
			!t.useBlobBuilder &&
			(function() {
				try {
					return new Blob([new Uint8Array([])]).size === 0;
				} catch {
					return !0;
				}
			})()),
		(e.exports.binaryFeatures = t);
	var n = e.exports.BlobBuilder;
	typeof window < "u" &&
		(n = e.exports.BlobBuilder =
			window.WebKitBlobBuilder ||
			window.MozBlobBuilder ||
			window.MSBlobBuilder ||
			window.BlobBuilder);
	function r() {
		(this._pieces = []), (this._parts = []);
	}
	(r.prototype.append = function(i) {
		typeof i == "number"
			? this._pieces.push(i)
			: (this.flush(), this._parts.push(i));
	}),
		(r.prototype.flush = function() {
			if (this._pieces.length > 0) {
				var i = new Uint8Array(this._pieces);
				t.useArrayBufferView || (i = i.buffer),
					this._parts.push(i),
					(this._pieces = []);
			}
		}),
		(r.prototype.getBuffer = function() {
			if ((this.flush(), t.useBlobBuilder)) {
				for (var i = new n(), o = 0, a = this._parts.length; o < a; o++)
					i.append(this._parts[o]);
				return i.getBlob();
			} else return new Blob(this._parts);
		}),
		(e.exports.BufferBuilder = r);
})(Sd);
var Cd = Sd.exports,
	Iv = Cd.BufferBuilder,
	xu = Cd.binaryFeatures,
	jv = {
		unpack: function(e) {
			var t = new ce(e);
			return t.unpack();
		},
		pack: function(e) {
			var t = new fe();
			t.pack(e);
			var n = t.getBuffer();
			return n;
		},
	},
	bv = jv;
function ce(e) {
	(this.index = 0),
		(this.dataBuffer = e),
		(this.dataView = new Uint8Array(this.dataBuffer)),
		(this.length = this.dataBuffer.byteLength);
}
ce.prototype.unpack = function() {
	var e = this.unpack_uint8();
	if (e < 128) return e;
	if ((e ^ 224) < 32) return (e ^ 224) - 32;
	var t;
	if ((t = e ^ 160) <= 15) return this.unpack_raw(t);
	if ((t = e ^ 176) <= 15) return this.unpack_string(t);
	if ((t = e ^ 144) <= 15) return this.unpack_array(t);
	if ((t = e ^ 128) <= 15) return this.unpack_map(t);
	switch (e) {
		case 192:
			return null;
		case 193:
			return;
		case 194:
			return !1;
		case 195:
			return !0;
		case 202:
			return this.unpack_float();
		case 203:
			return this.unpack_double();
		case 204:
			return this.unpack_uint8();
		case 205:
			return this.unpack_uint16();
		case 206:
			return this.unpack_uint32();
		case 207:
			return this.unpack_uint64();
		case 208:
			return this.unpack_int8();
		case 209:
			return this.unpack_int16();
		case 210:
			return this.unpack_int32();
		case 211:
			return this.unpack_int64();
		case 212:
			return;
		case 213:
			return;
		case 214:
			return;
		case 215:
			return;
		case 216:
			return (t = this.unpack_uint16()), this.unpack_string(t);
		case 217:
			return (t = this.unpack_uint32()), this.unpack_string(t);
		case 218:
			return (t = this.unpack_uint16()), this.unpack_raw(t);
		case 219:
			return (t = this.unpack_uint32()), this.unpack_raw(t);
		case 220:
			return (t = this.unpack_uint16()), this.unpack_array(t);
		case 221:
			return (t = this.unpack_uint32()), this.unpack_array(t);
		case 222:
			return (t = this.unpack_uint16()), this.unpack_map(t);
		case 223:
			return (t = this.unpack_uint32()), this.unpack_map(t);
	}
};
ce.prototype.unpack_uint8 = function() {
	var e = this.dataView[this.index] & 255;
	return this.index++, e;
};
ce.prototype.unpack_uint16 = function() {
	var e = this.read(2),
		t = (e[0] & 255) * 256 + (e[1] & 255);
	return (this.index += 2), t;
};
ce.prototype.unpack_uint32 = function() {
	var e = this.read(4),
		t = ((e[0] * 256 + e[1]) * 256 + e[2]) * 256 + e[3];
	return (this.index += 4), t;
};
ce.prototype.unpack_uint64 = function() {
	var e = this.read(8),
		t =
			((((((e[0] * 256 + e[1]) * 256 + e[2]) * 256 + e[3]) * 256 + e[4]) * 256 +
				e[5]) *
				256 +
				e[6]) *
				256 +
			e[7];
	return (this.index += 8), t;
};
ce.prototype.unpack_int8 = function() {
	var e = this.unpack_uint8();
	return e < 128 ? e : e - 256;
};
ce.prototype.unpack_int16 = function() {
	var e = this.unpack_uint16();
	return e < 32768 ? e : e - 65536;
};
ce.prototype.unpack_int32 = function() {
	var e = this.unpack_uint32();
	return e < Math.pow(2, 31) ? e : e - Math.pow(2, 32);
};
ce.prototype.unpack_int64 = function() {
	var e = this.unpack_uint64();
	return e < Math.pow(2, 63) ? e : e - Math.pow(2, 64);
};
ce.prototype.unpack_raw = function(e) {
	if (this.length < this.index + e)
		throw new Error(
			"BinaryPackFailure: index is out of range " +
				this.index +
				" " +
				e +
				" " +
				this.length
		);
	var t = this.dataBuffer.slice(this.index, this.index + e);
	return (this.index += e), t;
};
ce.prototype.unpack_string = function(e) {
	for (var t = this.read(e), n = 0, r = "", i, o; n < e; )
		(i = t[n]),
			i < 128
				? ((r += String.fromCharCode(i)), n++)
				: (i ^ 192) < 32
				? ((o = ((i ^ 192) << 6) | (t[n + 1] & 63)),
				  (r += String.fromCharCode(o)),
				  (n += 2))
				: ((o = ((i & 15) << 12) | ((t[n + 1] & 63) << 6) | (t[n + 2] & 63)),
				  (r += String.fromCharCode(o)),
				  (n += 3));
	return (this.index += e), r;
};
ce.prototype.unpack_array = function(e) {
	for (var t = new Array(e), n = 0; n < e; n++) t[n] = this.unpack();
	return t;
};
ce.prototype.unpack_map = function(e) {
	for (var t = {}, n = 0; n < e; n++) {
		var r = this.unpack(),
			i = this.unpack();
		t[r] = i;
	}
	return t;
};
ce.prototype.unpack_float = function() {
	var e = this.unpack_uint32(),
		t = e >> 31,
		n = ((e >> 23) & 255) - 127,
		r = (e & 8388607) | 8388608;
	return (t === 0 ? 1 : -1) * r * Math.pow(2, n - 23);
};
ce.prototype.unpack_double = function() {
	var e = this.unpack_uint32(),
		t = this.unpack_uint32(),
		n = e >> 31,
		r = ((e >> 20) & 2047) - 1023,
		i = (e & 1048575) | 1048576,
		o = i * Math.pow(2, r - 20) + t * Math.pow(2, r - 52);
	return (n === 0 ? 1 : -1) * o;
};
ce.prototype.read = function(e) {
	var t = this.index;
	if (t + e <= this.length) return this.dataView.subarray(t, t + e);
	throw new Error("BinaryPackFailure: read index out of range");
};
function fe() {
	this.bufferBuilder = new Iv();
}
fe.prototype.getBuffer = function() {
	return this.bufferBuilder.getBuffer();
};
fe.prototype.pack = function(e) {
	var t = typeof e;
	if (t === "string") this.pack_string(e);
	else if (t === "number")
		Math.floor(e) === e ? this.pack_integer(e) : this.pack_double(e);
	else if (t === "boolean")
		e === !0
			? this.bufferBuilder.append(195)
			: e === !1 && this.bufferBuilder.append(194);
	else if (t === "undefined") this.bufferBuilder.append(192);
	else if (t === "object")
		if (e === null) this.bufferBuilder.append(192);
		else {
			var n = e.constructor;
			if (n == Array) this.pack_array(e);
			else if (n == Blob || n == File || e instanceof Blob || e instanceof File)
				this.pack_bin(e);
			else if (n == ArrayBuffer)
				xu.useArrayBufferView
					? this.pack_bin(new Uint8Array(e))
					: this.pack_bin(e);
			else if ("BYTES_PER_ELEMENT" in e)
				xu.useArrayBufferView
					? this.pack_bin(new Uint8Array(e.buffer))
					: this.pack_bin(e.buffer);
			else if (n == Object || n.toString().startsWith("class"))
				this.pack_object(e);
			else if (n == Date) this.pack_string(e.toString());
			else if (typeof e.toBinaryPack == "function")
				this.bufferBuilder.append(e.toBinaryPack());
			else throw new Error('Type "' + n.toString() + '" not yet supported');
		}
	else throw new Error('Type "' + t + '" not yet supported');
	this.bufferBuilder.flush();
};
fe.prototype.pack_bin = function(e) {
	var t = e.length || e.byteLength || e.size;
	if (t <= 15) this.pack_uint8(160 + t);
	else if (t <= 65535) this.bufferBuilder.append(218), this.pack_uint16(t);
	else if (t <= 4294967295) this.bufferBuilder.append(219), this.pack_uint32(t);
	else throw new Error("Invalid length");
	this.bufferBuilder.append(e);
};
fe.prototype.pack_string = function(e) {
	var t = Nv(e);
	if (t <= 15) this.pack_uint8(176 + t);
	else if (t <= 65535) this.bufferBuilder.append(216), this.pack_uint16(t);
	else if (t <= 4294967295) this.bufferBuilder.append(217), this.pack_uint32(t);
	else throw new Error("Invalid length");
	this.bufferBuilder.append(e);
};
fe.prototype.pack_array = function(e) {
	var t = e.length;
	if (t <= 15) this.pack_uint8(144 + t);
	else if (t <= 65535) this.bufferBuilder.append(220), this.pack_uint16(t);
	else if (t <= 4294967295) this.bufferBuilder.append(221), this.pack_uint32(t);
	else throw new Error("Invalid length");
	for (var n = 0; n < t; n++) this.pack(e[n]);
};
fe.prototype.pack_integer = function(e) {
	if (e >= -32 && e <= 127) this.bufferBuilder.append(e & 255);
	else if (e >= 0 && e <= 255)
		this.bufferBuilder.append(204), this.pack_uint8(e);
	else if (e >= -128 && e <= 127)
		this.bufferBuilder.append(208), this.pack_int8(e);
	else if (e >= 0 && e <= 65535)
		this.bufferBuilder.append(205), this.pack_uint16(e);
	else if (e >= -32768 && e <= 32767)
		this.bufferBuilder.append(209), this.pack_int16(e);
	else if (e >= 0 && e <= 4294967295)
		this.bufferBuilder.append(206), this.pack_uint32(e);
	else if (e >= -2147483648 && e <= 2147483647)
		this.bufferBuilder.append(210), this.pack_int32(e);
	else if (e >= -9223372036854776e3 && e <= 9223372036854776e3)
		this.bufferBuilder.append(211), this.pack_int64(e);
	else if (e >= 0 && e <= 18446744073709552e3)
		this.bufferBuilder.append(207), this.pack_uint64(e);
	else throw new Error("Invalid integer");
};
fe.prototype.pack_double = function(e) {
	var t = 0;
	e < 0 && ((t = 1), (e = -e));
	var n = Math.floor(Math.log(e) / Math.LN2),
		r = e / Math.pow(2, n) - 1,
		i = Math.floor(r * Math.pow(2, 52)),
		o = Math.pow(2, 32),
		a = (t << 31) | ((n + 1023) << 20) | ((i / o) & 1048575),
		l = i % o;
	this.bufferBuilder.append(203), this.pack_int32(a), this.pack_int32(l);
};
fe.prototype.pack_object = function(e) {
	var t = Object.keys(e),
		n = t.length;
	if (n <= 15) this.pack_uint8(128 + n);
	else if (n <= 65535) this.bufferBuilder.append(222), this.pack_uint16(n);
	else if (n <= 4294967295) this.bufferBuilder.append(223), this.pack_uint32(n);
	else throw new Error("Invalid length");
	for (var r in e) e.hasOwnProperty(r) && (this.pack(r), this.pack(e[r]));
};
fe.prototype.pack_uint8 = function(e) {
	this.bufferBuilder.append(e);
};
fe.prototype.pack_uint16 = function(e) {
	this.bufferBuilder.append(e >> 8), this.bufferBuilder.append(e & 255);
};
fe.prototype.pack_uint32 = function(e) {
	var t = e & 4294967295;
	this.bufferBuilder.append((t & 4278190080) >>> 24),
		this.bufferBuilder.append((t & 16711680) >>> 16),
		this.bufferBuilder.append((t & 65280) >>> 8),
		this.bufferBuilder.append(t & 255);
};
fe.prototype.pack_uint64 = function(e) {
	var t = e / Math.pow(2, 32),
		n = e % Math.pow(2, 32);
	this.bufferBuilder.append((t & 4278190080) >>> 24),
		this.bufferBuilder.append((t & 16711680) >>> 16),
		this.bufferBuilder.append((t & 65280) >>> 8),
		this.bufferBuilder.append(t & 255),
		this.bufferBuilder.append((n & 4278190080) >>> 24),
		this.bufferBuilder.append((n & 16711680) >>> 16),
		this.bufferBuilder.append((n & 65280) >>> 8),
		this.bufferBuilder.append(n & 255);
};
fe.prototype.pack_int8 = function(e) {
	this.bufferBuilder.append(e & 255);
};
fe.prototype.pack_int16 = function(e) {
	this.bufferBuilder.append((e & 65280) >> 8),
		this.bufferBuilder.append(e & 255);
};
fe.prototype.pack_int32 = function(e) {
	this.bufferBuilder.append((e >>> 24) & 255),
		this.bufferBuilder.append((e & 16711680) >>> 16),
		this.bufferBuilder.append((e & 65280) >>> 8),
		this.bufferBuilder.append(e & 255);
};
fe.prototype.pack_int64 = function(e) {
	var t = Math.floor(e / Math.pow(2, 32)),
		n = e % Math.pow(2, 32);
	this.bufferBuilder.append((t & 4278190080) >>> 24),
		this.bufferBuilder.append((t & 16711680) >>> 16),
		this.bufferBuilder.append((t & 65280) >>> 8),
		this.bufferBuilder.append(t & 255),
		this.bufferBuilder.append((n & 4278190080) >>> 24),
		this.bufferBuilder.append((n & 16711680) >>> 16),
		this.bufferBuilder.append((n & 65280) >>> 8),
		this.bufferBuilder.append(n & 255);
};
function Lv(e) {
	var t = e.charCodeAt(0);
	return t <= 2047
		? "00"
		: t <= 65535
		? "000"
		: t <= 2097151
		? "0000"
		: t <= 67108863
		? "00000"
		: "000000";
}
function Nv(e) {
	return e.length > 600
		? new Blob([e]).size
		: e.replace(/[^\u0000-\u007F]/g, Lv).length;
}
const Pu = os(bv);
let kd = !0,
	_d = !0;
function rr(e, t, n) {
	const r = e.match(t);
	return r && r.length >= n && parseInt(r[n], 10);
}
function Un(e, t, n) {
	if (!e.RTCPeerConnection) return;
	const r = e.RTCPeerConnection.prototype,
		i = r.addEventListener;
	r.addEventListener = function(a, l) {
		if (a !== t) return i.apply(this, arguments);
		const s = (u) => {
			const c = n(u);
			c && (l.handleEvent ? l.handleEvent(c) : l(c));
		};
		return (
			(this._eventMap = this._eventMap || {}),
			this._eventMap[t] || (this._eventMap[t] = new Map()),
			this._eventMap[t].set(l, s),
			i.apply(this, [a, s])
		);
	};
	const o = r.removeEventListener;
	(r.removeEventListener = function(a, l) {
		if (a !== t || !this._eventMap || !this._eventMap[t])
			return o.apply(this, arguments);
		if (!this._eventMap[t].has(l)) return o.apply(this, arguments);
		const s = this._eventMap[t].get(l);
		return (
			this._eventMap[t].delete(l),
			this._eventMap[t].size === 0 && delete this._eventMap[t],
			Object.keys(this._eventMap).length === 0 && delete this._eventMap,
			o.apply(this, [a, s])
		);
	}),
		Object.defineProperty(r, "on" + t, {
			get() {
				return this["_on" + t];
			},
			set(a) {
				this["_on" + t] &&
					(this.removeEventListener(t, this["_on" + t]),
					delete this["_on" + t]),
					a && this.addEventListener(t, (this["_on" + t] = a));
			},
			enumerable: !0,
			configurable: !0,
		});
}
function zv(e) {
	return typeof e != "boolean"
		? new Error("Argument type: " + typeof e + ". Please use a boolean.")
		: ((kd = e),
		  e ? "adapter.js logging disabled" : "adapter.js logging enabled");
}
function Bv(e) {
	return typeof e != "boolean"
		? new Error("Argument type: " + typeof e + ". Please use a boolean.")
		: ((_d = !e),
		  "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"));
}
function rl() {
	if (typeof window == "object") {
		if (kd) return;
		typeof console < "u" &&
			typeof console.log == "function" &&
			console.log.apply(console, arguments);
	}
}
function ko(e, t) {
	_d && console.warn(e + " is deprecated, please use " + t + " instead.");
}
function Fv(e) {
	const t = { browser: null, version: null };
	if (typeof e > "u" || !e.navigator) return (t.browser = "Not a browser."), t;
	const { navigator: n } = e;
	if (n.mozGetUserMedia)
		(t.browser = "firefox"),
			(t.version = rr(n.userAgent, /Firefox\/(\d+)\./, 1));
	else if (
		n.webkitGetUserMedia ||
		(e.isSecureContext === !1 && e.webkitRTCPeerConnection && !e.RTCIceGatherer)
	)
		(t.browser = "chrome"),
			(t.version = rr(n.userAgent, /Chrom(e|ium)\/(\d+)\./, 2));
	else if (n.mediaDevices && n.userAgent.match(/Edge\/(\d+).(\d+)$/))
		(t.browser = "edge"),
			(t.version = rr(n.userAgent, /Edge\/(\d+).(\d+)$/, 2));
	else if (e.RTCPeerConnection && n.userAgent.match(/AppleWebKit\/(\d+)\./))
		(t.browser = "safari"),
			(t.version = rr(n.userAgent, /AppleWebKit\/(\d+)\./, 1)),
			(t.supportsUnifiedPlan =
				e.RTCRtpTransceiver &&
				"currentDirection" in e.RTCRtpTransceiver.prototype);
	else return (t.browser = "Not a supported browser."), t;
	return t;
}
function Ru(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function Ed(e) {
	return Ru(e)
		? Object.keys(e).reduce(function(t, n) {
				const r = Ru(e[n]),
					i = r ? Ed(e[n]) : e[n],
					o = r && !Object.keys(i).length;
				return i === void 0 || o ? t : Object.assign(t, { [n]: i });
		  }, {})
		: e;
}
function Xa(e, t, n) {
	!t ||
		n.has(t.id) ||
		(n.set(t.id, t),
		Object.keys(t).forEach((r) => {
			r.endsWith("Id")
				? Xa(e, e.get(t[r]), n)
				: r.endsWith("Ids") &&
				  t[r].forEach((i) => {
						Xa(e, e.get(i), n);
				  });
		}));
}
function wu(e, t, n) {
	const r = n ? "outbound-rtp" : "inbound-rtp",
		i = new Map();
	if (t === null) return i;
	const o = [];
	return (
		e.forEach((a) => {
			a.type === "track" && a.trackIdentifier === t.id && o.push(a);
		}),
		o.forEach((a) => {
			e.forEach((l) => {
				l.type === r && l.trackId === a.id && Xa(e, l, i);
			});
		}),
		i
	);
}
const Ou = rl;
function Td(e, t) {
	const n = e && e.navigator;
	if (!n.mediaDevices) return;
	const r = function(l) {
			if (typeof l != "object" || l.mandatory || l.optional) return l;
			const s = {};
			return (
				Object.keys(l).forEach((u) => {
					if (u === "require" || u === "advanced" || u === "mediaSource")
						return;
					const c = typeof l[u] == "object" ? l[u] : { ideal: l[u] };
					c.exact !== void 0 &&
						typeof c.exact == "number" &&
						(c.min = c.max = c.exact);
					const f = function(d, g) {
						return d
							? d + g.charAt(0).toUpperCase() + g.slice(1)
							: g === "deviceId"
							? "sourceId"
							: g;
					};
					if (c.ideal !== void 0) {
						s.optional = s.optional || [];
						let d = {};
						typeof c.ideal == "number"
							? ((d[f("min", u)] = c.ideal),
							  s.optional.push(d),
							  (d = {}),
							  (d[f("max", u)] = c.ideal),
							  s.optional.push(d))
							: ((d[f("", u)] = c.ideal), s.optional.push(d));
					}
					c.exact !== void 0 && typeof c.exact != "number"
						? ((s.mandatory = s.mandatory || {}),
						  (s.mandatory[f("", u)] = c.exact))
						: ["min", "max"].forEach((d) => {
								c[d] !== void 0 &&
									((s.mandatory = s.mandatory || {}),
									(s.mandatory[f(d, u)] = c[d]));
						  });
				}),
				l.advanced && (s.optional = (s.optional || []).concat(l.advanced)),
				s
			);
		},
		i = function(l, s) {
			if (t.version >= 61) return s(l);
			if (
				((l = JSON.parse(JSON.stringify(l))), l && typeof l.audio == "object")
			) {
				const u = function(c, f, d) {
					f in c && !(d in c) && ((c[d] = c[f]), delete c[f]);
				};
				(l = JSON.parse(JSON.stringify(l))),
					u(l.audio, "autoGainControl", "googAutoGainControl"),
					u(l.audio, "noiseSuppression", "googNoiseSuppression"),
					(l.audio = r(l.audio));
			}
			if (l && typeof l.video == "object") {
				let u = l.video.facingMode;
				u = u && (typeof u == "object" ? u : { ideal: u });
				const c = t.version < 66;
				if (
					u &&
					(u.exact === "user" ||
						u.exact === "environment" ||
						u.ideal === "user" ||
						u.ideal === "environment") &&
					!(
						n.mediaDevices.getSupportedConstraints &&
						n.mediaDevices.getSupportedConstraints().facingMode &&
						!c
					)
				) {
					delete l.video.facingMode;
					let f;
					if (
						(u.exact === "environment" || u.ideal === "environment"
							? (f = ["back", "rear"])
							: (u.exact === "user" || u.ideal === "user") && (f = ["front"]),
						f)
					)
						return n.mediaDevices.enumerateDevices().then((d) => {
							d = d.filter((m) => m.kind === "videoinput");
							let g = d.find((m) =>
								f.some((y) => m.label.toLowerCase().includes(y))
							);
							return (
								!g && d.length && f.includes("back") && (g = d[d.length - 1]),
								g &&
									(l.video.deviceId = u.exact
										? { exact: g.deviceId }
										: { ideal: g.deviceId }),
								(l.video = r(l.video)),
								Ou("chrome: " + JSON.stringify(l)),
								s(l)
							);
						});
				}
				l.video = r(l.video);
			}
			return Ou("chrome: " + JSON.stringify(l)), s(l);
		},
		o = function(l) {
			return t.version >= 64
				? l
				: {
						name:
							{
								PermissionDeniedError: "NotAllowedError",
								PermissionDismissedError: "NotAllowedError",
								InvalidStateError: "NotAllowedError",
								DevicesNotFoundError: "NotFoundError",
								ConstraintNotSatisfiedError: "OverconstrainedError",
								TrackStartError: "NotReadableError",
								MediaDeviceFailedDueToShutdown: "NotAllowedError",
								MediaDeviceKillSwitchOn: "NotAllowedError",
								TabCaptureError: "AbortError",
								ScreenCaptureError: "AbortError",
								DeviceCaptureError: "AbortError",
							}[l.name] || l.name,
						message: l.message,
						constraint: l.constraint || l.constraintName,
						toString() {
							return this.name + (this.message && ": ") + this.message;
						},
				  };
		},
		a = function(l, s, u) {
			i(l, (c) => {
				n.webkitGetUserMedia(c, s, (f) => {
					u && u(o(f));
				});
			});
		};
	if (((n.getUserMedia = a.bind(n)), n.mediaDevices.getUserMedia)) {
		const l = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
		n.mediaDevices.getUserMedia = function(s) {
			return i(s, (u) =>
				l(u).then(
					(c) => {
						if (
							(u.audio && !c.getAudioTracks().length) ||
							(u.video && !c.getVideoTracks().length)
						)
							throw (c.getTracks().forEach((f) => {
								f.stop();
							}),
							new DOMException("", "NotFoundError"));
						return c;
					},
					(c) => Promise.reject(o(c))
				)
			);
		};
	}
}
function Av(e, t) {
	if (
		!(
			e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices
		) &&
		e.navigator.mediaDevices
	) {
		if (typeof t != "function") {
			console.error(
				"shimGetDisplayMedia: getSourceId argument is not a function"
			);
			return;
		}
		e.navigator.mediaDevices.getDisplayMedia = function(r) {
			return t(r).then((i) => {
				const o = r.video && r.video.width,
					a = r.video && r.video.height,
					l = r.video && r.video.frameRate;
				return (
					(r.video = {
						mandatory: {
							chromeMediaSource: "desktop",
							chromeMediaSourceId: i,
							maxFrameRate: l || 3,
						},
					}),
					o && (r.video.mandatory.maxWidth = o),
					a && (r.video.mandatory.maxHeight = a),
					e.navigator.mediaDevices.getUserMedia(r)
				);
			});
		};
	}
}
function xd(e) {
	e.MediaStream = e.MediaStream || e.webkitMediaStream;
}
function Pd(e) {
	if (
		typeof e == "object" &&
		e.RTCPeerConnection &&
		!("ontrack" in e.RTCPeerConnection.prototype)
	) {
		Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
			get() {
				return this._ontrack;
			},
			set(n) {
				this._ontrack && this.removeEventListener("track", this._ontrack),
					this.addEventListener("track", (this._ontrack = n));
			},
			enumerable: !0,
			configurable: !0,
		});
		const t = e.RTCPeerConnection.prototype.setRemoteDescription;
		e.RTCPeerConnection.prototype.setRemoteDescription = function() {
			return (
				this._ontrackpoly ||
					((this._ontrackpoly = (r) => {
						r.stream.addEventListener("addtrack", (i) => {
							let o;
							e.RTCPeerConnection.prototype.getReceivers
								? (o = this.getReceivers().find(
										(l) => l.track && l.track.id === i.track.id
								  ))
								: (o = { track: i.track });
							const a = new Event("track");
							(a.track = i.track),
								(a.receiver = o),
								(a.transceiver = { receiver: o }),
								(a.streams = [r.stream]),
								this.dispatchEvent(a);
						}),
							r.stream.getTracks().forEach((i) => {
								let o;
								e.RTCPeerConnection.prototype.getReceivers
									? (o = this.getReceivers().find(
											(l) => l.track && l.track.id === i.id
									  ))
									: (o = { track: i });
								const a = new Event("track");
								(a.track = i),
									(a.receiver = o),
									(a.transceiver = { receiver: o }),
									(a.streams = [r.stream]),
									this.dispatchEvent(a);
							});
					}),
					this.addEventListener("addstream", this._ontrackpoly)),
				t.apply(this, arguments)
			);
		};
	} else
		Un(
			e,
			"track",
			(t) => (
				t.transceiver ||
					Object.defineProperty(t, "transceiver", {
						value: { receiver: t.receiver },
					}),
				t
			)
		);
}
function Rd(e) {
	if (
		typeof e == "object" &&
		e.RTCPeerConnection &&
		!("getSenders" in e.RTCPeerConnection.prototype) &&
		"createDTMFSender" in e.RTCPeerConnection.prototype
	) {
		const t = function(i, o) {
			return {
				track: o,
				get dtmf() {
					return (
						this._dtmf === void 0 &&
							(o.kind === "audio"
								? (this._dtmf = i.createDTMFSender(o))
								: (this._dtmf = null)),
						this._dtmf
					);
				},
				_pc: i,
			};
		};
		if (!e.RTCPeerConnection.prototype.getSenders) {
			e.RTCPeerConnection.prototype.getSenders = function() {
				return (this._senders = this._senders || []), this._senders.slice();
			};
			const i = e.RTCPeerConnection.prototype.addTrack;
			e.RTCPeerConnection.prototype.addTrack = function(l, s) {
				let u = i.apply(this, arguments);
				return u || ((u = t(this, l)), this._senders.push(u)), u;
			};
			const o = e.RTCPeerConnection.prototype.removeTrack;
			e.RTCPeerConnection.prototype.removeTrack = function(l) {
				o.apply(this, arguments);
				const s = this._senders.indexOf(l);
				s !== -1 && this._senders.splice(s, 1);
			};
		}
		const n = e.RTCPeerConnection.prototype.addStream;
		e.RTCPeerConnection.prototype.addStream = function(o) {
			(this._senders = this._senders || []),
				n.apply(this, [o]),
				o.getTracks().forEach((a) => {
					this._senders.push(t(this, a));
				});
		};
		const r = e.RTCPeerConnection.prototype.removeStream;
		e.RTCPeerConnection.prototype.removeStream = function(o) {
			(this._senders = this._senders || []),
				r.apply(this, [o]),
				o.getTracks().forEach((a) => {
					const l = this._senders.find((s) => s.track === a);
					l && this._senders.splice(this._senders.indexOf(l), 1);
				});
		};
	} else if (
		typeof e == "object" &&
		e.RTCPeerConnection &&
		"getSenders" in e.RTCPeerConnection.prototype &&
		"createDTMFSender" in e.RTCPeerConnection.prototype &&
		e.RTCRtpSender &&
		!("dtmf" in e.RTCRtpSender.prototype)
	) {
		const t = e.RTCPeerConnection.prototype.getSenders;
		(e.RTCPeerConnection.prototype.getSenders = function() {
			const r = t.apply(this, []);
			return r.forEach((i) => (i._pc = this)), r;
		}),
			Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
				get() {
					return (
						this._dtmf === void 0 &&
							(this.track.kind === "audio"
								? (this._dtmf = this._pc.createDTMFSender(this.track))
								: (this._dtmf = null)),
						this._dtmf
					);
				},
			});
	}
}
function wd(e) {
	if (!e.RTCPeerConnection) return;
	const t = e.RTCPeerConnection.prototype.getStats;
	e.RTCPeerConnection.prototype.getStats = function() {
		const [r, i, o] = arguments;
		if (arguments.length > 0 && typeof r == "function")
			return t.apply(this, arguments);
		if (t.length === 0 && (arguments.length === 0 || typeof r != "function"))
			return t.apply(this, []);
		const a = function(s) {
				const u = {};
				return (
					s.result().forEach((f) => {
						const d = {
							id: f.id,
							timestamp: f.timestamp,
							type:
								{
									localcandidate: "local-candidate",
									remotecandidate: "remote-candidate",
								}[f.type] || f.type,
						};
						f.names().forEach((g) => {
							d[g] = f.stat(g);
						}),
							(u[d.id] = d);
					}),
					u
				);
			},
			l = function(s) {
				return new Map(Object.keys(s).map((u) => [u, s[u]]));
			};
		if (arguments.length >= 2) {
			const s = function(u) {
				i(l(a(u)));
			};
			return t.apply(this, [s, r]);
		}
		return new Promise((s, u) => {
			t.apply(this, [
				function(c) {
					s(l(a(c)));
				},
				u,
			]);
		}).then(i, o);
	};
}
function Od(e) {
	if (
		!(
			typeof e == "object" &&
			e.RTCPeerConnection &&
			e.RTCRtpSender &&
			e.RTCRtpReceiver
		)
	)
		return;
	if (!("getStats" in e.RTCRtpSender.prototype)) {
		const n = e.RTCPeerConnection.prototype.getSenders;
		n &&
			(e.RTCPeerConnection.prototype.getSenders = function() {
				const o = n.apply(this, []);
				return o.forEach((a) => (a._pc = this)), o;
			});
		const r = e.RTCPeerConnection.prototype.addTrack;
		r &&
			(e.RTCPeerConnection.prototype.addTrack = function() {
				const o = r.apply(this, arguments);
				return (o._pc = this), o;
			}),
			(e.RTCRtpSender.prototype.getStats = function() {
				const o = this;
				return this._pc.getStats().then((a) => wu(a, o.track, !0));
			});
	}
	if (!("getStats" in e.RTCRtpReceiver.prototype)) {
		const n = e.RTCPeerConnection.prototype.getReceivers;
		n &&
			(e.RTCPeerConnection.prototype.getReceivers = function() {
				const i = n.apply(this, []);
				return i.forEach((o) => (o._pc = this)), i;
			}),
			Un(e, "track", (r) => ((r.receiver._pc = r.srcElement), r)),
			(e.RTCRtpReceiver.prototype.getStats = function() {
				const i = this;
				return this._pc.getStats().then((o) => wu(o, i.track, !1));
			});
	}
	if (
		!(
			"getStats" in e.RTCRtpSender.prototype &&
			"getStats" in e.RTCRtpReceiver.prototype
		)
	)
		return;
	const t = e.RTCPeerConnection.prototype.getStats;
	e.RTCPeerConnection.prototype.getStats = function() {
		if (arguments.length > 0 && arguments[0] instanceof e.MediaStreamTrack) {
			const r = arguments[0];
			let i, o, a;
			return (
				this.getSenders().forEach((l) => {
					l.track === r && (i ? (a = !0) : (i = l));
				}),
				this.getReceivers().forEach(
					(l) => (l.track === r && (o ? (a = !0) : (o = l)), l.track === r)
				),
				a || (i && o)
					? Promise.reject(
							new DOMException(
								"There are more than one sender or receiver for the track.",
								"InvalidAccessError"
							)
					  )
					: i
					? i.getStats()
					: o
					? o.getStats()
					: Promise.reject(
							new DOMException(
								"There is no sender or receiver for the track.",
								"InvalidAccessError"
							)
					  )
			);
		}
		return t.apply(this, arguments);
	};
}
function Dd(e) {
	e.RTCPeerConnection.prototype.getLocalStreams = function() {
		return (
			(this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
			Object.keys(this._shimmedLocalStreams).map(
				(a) => this._shimmedLocalStreams[a][0]
			)
		);
	};
	const t = e.RTCPeerConnection.prototype.addTrack;
	e.RTCPeerConnection.prototype.addTrack = function(a, l) {
		if (!l) return t.apply(this, arguments);
		this._shimmedLocalStreams = this._shimmedLocalStreams || {};
		const s = t.apply(this, arguments);
		return (
			this._shimmedLocalStreams[l.id]
				? this._shimmedLocalStreams[l.id].indexOf(s) === -1 &&
				  this._shimmedLocalStreams[l.id].push(s)
				: (this._shimmedLocalStreams[l.id] = [l, s]),
			s
		);
	};
	const n = e.RTCPeerConnection.prototype.addStream;
	e.RTCPeerConnection.prototype.addStream = function(a) {
		(this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
			a.getTracks().forEach((u) => {
				if (this.getSenders().find((f) => f.track === u))
					throw new DOMException("Track already exists.", "InvalidAccessError");
			});
		const l = this.getSenders();
		n.apply(this, arguments);
		const s = this.getSenders().filter((u) => l.indexOf(u) === -1);
		this._shimmedLocalStreams[a.id] = [a].concat(s);
	};
	const r = e.RTCPeerConnection.prototype.removeStream;
	e.RTCPeerConnection.prototype.removeStream = function(a) {
		return (
			(this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
			delete this._shimmedLocalStreams[a.id],
			r.apply(this, arguments)
		);
	};
	const i = e.RTCPeerConnection.prototype.removeTrack;
	e.RTCPeerConnection.prototype.removeTrack = function(a) {
		return (
			(this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
			a &&
				Object.keys(this._shimmedLocalStreams).forEach((l) => {
					const s = this._shimmedLocalStreams[l].indexOf(a);
					s !== -1 && this._shimmedLocalStreams[l].splice(s, 1),
						this._shimmedLocalStreams[l].length === 1 &&
							delete this._shimmedLocalStreams[l];
				}),
			i.apply(this, arguments)
		);
	};
}
function Md(e, t) {
	if (!e.RTCPeerConnection) return;
	if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65) return Dd(e);
	const n = e.RTCPeerConnection.prototype.getLocalStreams;
	e.RTCPeerConnection.prototype.getLocalStreams = function() {
		const c = n.apply(this);
		return (
			(this._reverseStreams = this._reverseStreams || {}),
			c.map((f) => this._reverseStreams[f.id])
		);
	};
	const r = e.RTCPeerConnection.prototype.addStream;
	e.RTCPeerConnection.prototype.addStream = function(c) {
		if (
			((this._streams = this._streams || {}),
			(this._reverseStreams = this._reverseStreams || {}),
			c.getTracks().forEach((f) => {
				if (this.getSenders().find((g) => g.track === f))
					throw new DOMException("Track already exists.", "InvalidAccessError");
			}),
			!this._reverseStreams[c.id])
		) {
			const f = new e.MediaStream(c.getTracks());
			(this._streams[c.id] = f), (this._reverseStreams[f.id] = c), (c = f);
		}
		r.apply(this, [c]);
	};
	const i = e.RTCPeerConnection.prototype.removeStream;
	(e.RTCPeerConnection.prototype.removeStream = function(c) {
		(this._streams = this._streams || {}),
			(this._reverseStreams = this._reverseStreams || {}),
			i.apply(this, [this._streams[c.id] || c]),
			delete this._reverseStreams[
				this._streams[c.id] ? this._streams[c.id].id : c.id
			],
			delete this._streams[c.id];
	}),
		(e.RTCPeerConnection.prototype.addTrack = function(c, f) {
			if (this.signalingState === "closed")
				throw new DOMException(
					"The RTCPeerConnection's signalingState is 'closed'.",
					"InvalidStateError"
				);
			const d = [].slice.call(arguments, 1);
			if (d.length !== 1 || !d[0].getTracks().find((y) => y === c))
				throw new DOMException(
					"The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.",
					"NotSupportedError"
				);
			if (this.getSenders().find((y) => y.track === c))
				throw new DOMException("Track already exists.", "InvalidAccessError");
			(this._streams = this._streams || {}),
				(this._reverseStreams = this._reverseStreams || {});
			const m = this._streams[f.id];
			if (m)
				m.addTrack(c),
					Promise.resolve().then(() => {
						this.dispatchEvent(new Event("negotiationneeded"));
					});
			else {
				const y = new e.MediaStream([c]);
				(this._streams[f.id] = y),
					(this._reverseStreams[y.id] = f),
					this.addStream(y);
			}
			return this.getSenders().find((y) => y.track === c);
		});
	function o(u, c) {
		let f = c.sdp;
		return (
			Object.keys(u._reverseStreams || []).forEach((d) => {
				const g = u._reverseStreams[d],
					m = u._streams[g.id];
				f = f.replace(new RegExp(m.id, "g"), g.id);
			}),
			new RTCSessionDescription({ type: c.type, sdp: f })
		);
	}
	function a(u, c) {
		let f = c.sdp;
		return (
			Object.keys(u._reverseStreams || []).forEach((d) => {
				const g = u._reverseStreams[d],
					m = u._streams[g.id];
				f = f.replace(new RegExp(g.id, "g"), m.id);
			}),
			new RTCSessionDescription({ type: c.type, sdp: f })
		);
	}
	["createOffer", "createAnswer"].forEach(function(u) {
		const c = e.RTCPeerConnection.prototype[u],
			f = {
				[u]() {
					const d = arguments;
					return arguments.length && typeof arguments[0] == "function"
						? c.apply(this, [
								(m) => {
									const y = o(this, m);
									d[0].apply(null, [y]);
								},
								(m) => {
									d[1] && d[1].apply(null, m);
								},
								arguments[2],
						  ])
						: c.apply(this, arguments).then((m) => o(this, m));
				},
			};
		e.RTCPeerConnection.prototype[u] = f[u];
	});
	const l = e.RTCPeerConnection.prototype.setLocalDescription;
	e.RTCPeerConnection.prototype.setLocalDescription = function() {
		return !arguments.length || !arguments[0].type
			? l.apply(this, arguments)
			: ((arguments[0] = a(this, arguments[0])), l.apply(this, arguments));
	};
	const s = Object.getOwnPropertyDescriptor(
		e.RTCPeerConnection.prototype,
		"localDescription"
	);
	Object.defineProperty(e.RTCPeerConnection.prototype, "localDescription", {
		get() {
			const u = s.get.apply(this);
			return u.type === "" ? u : o(this, u);
		},
	}),
		(e.RTCPeerConnection.prototype.removeTrack = function(c) {
			if (this.signalingState === "closed")
				throw new DOMException(
					"The RTCPeerConnection's signalingState is 'closed'.",
					"InvalidStateError"
				);
			if (!c._pc)
				throw new DOMException(
					"Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.",
					"TypeError"
				);
			if (!(c._pc === this))
				throw new DOMException(
					"Sender was not created by this connection.",
					"InvalidAccessError"
				);
			this._streams = this._streams || {};
			let d;
			Object.keys(this._streams).forEach((g) => {
				this._streams[g].getTracks().find((y) => c.track === y) &&
					(d = this._streams[g]);
			}),
				d &&
					(d.getTracks().length === 1
						? this.removeStream(this._reverseStreams[d.id])
						: d.removeTrack(c.track),
					this.dispatchEvent(new Event("negotiationneeded")));
		});
}
function Za(e, t) {
	!e.RTCPeerConnection &&
		e.webkitRTCPeerConnection &&
		(e.RTCPeerConnection = e.webkitRTCPeerConnection),
		e.RTCPeerConnection &&
			t.version < 53 &&
			[
				"setLocalDescription",
				"setRemoteDescription",
				"addIceCandidate",
			].forEach(function(n) {
				const r = e.RTCPeerConnection.prototype[n],
					i = {
						[n]() {
							return (
								(arguments[0] = new (n === "addIceCandidate"
									? e.RTCIceCandidate
									: e.RTCSessionDescription)(arguments[0])),
								r.apply(this, arguments)
							);
						},
					};
				e.RTCPeerConnection.prototype[n] = i[n];
			});
}
function Id(e, t) {
	Un(e, "negotiationneeded", (n) => {
		const r = n.target;
		if (
			!(
				(t.version < 72 ||
					(r.getConfiguration &&
						r.getConfiguration().sdpSemantics === "plan-b")) &&
				r.signalingState !== "stable"
			)
		)
			return n;
	});
}
const Du = Object.freeze(
	Object.defineProperty(
		{
			__proto__: null,
			fixNegotiationNeeded: Id,
			shimAddTrackRemoveTrack: Md,
			shimAddTrackRemoveTrackWithNative: Dd,
			shimGetDisplayMedia: Av,
			shimGetSendersWithDtmf: Rd,
			shimGetStats: wd,
			shimGetUserMedia: Td,
			shimMediaStream: xd,
			shimOnTrack: Pd,
			shimPeerConnection: Za,
			shimSenderReceiverGetStats: Od,
		},
		Symbol.toStringTag,
		{ value: "Module" }
	)
);
function Uv(e, t) {
	let n = !1;
	return (
		(e = JSON.parse(JSON.stringify(e))),
		e.filter((r) => {
			if (r && (r.urls || r.url)) {
				let i = r.urls || r.url;
				r.url && !r.urls && ko("RTCIceServer.url", "RTCIceServer.urls");
				const o = typeof i == "string";
				return (
					o && (i = [i]),
					(i = i.filter((a) => {
						if (a.indexOf("stun:") === 0) return !1;
						const l =
							a.startsWith("turn") &&
							!a.startsWith("turn:[") &&
							a.includes("transport=udp");
						return l && !n ? ((n = !0), !0) : l && !n;
					})),
					delete r.url,
					(r.urls = o ? i[0] : i),
					!!i.length
				);
			}
		})
	);
}
var jd = { exports: {} };
(function(e) {
	var t = {};
	(t.generateIdentifier = function() {
		return Math.random()
			.toString(36)
			.substr(2, 10);
	}),
		(t.localCName = t.generateIdentifier()),
		(t.splitLines = function(n) {
			return n
				.trim()
				.split(
					`
`
				)
				.map(function(r) {
					return r.trim();
				});
		}),
		(t.splitSections = function(n) {
			var r = n.split(`
m=`);
			return r.map(function(i, o) {
				return (
					(o > 0 ? "m=" + i : i).trim() +
					`\r
`
				);
			});
		}),
		(t.getDescription = function(n) {
			var r = t.splitSections(n);
			return r && r[0];
		}),
		(t.getMediaSections = function(n) {
			var r = t.splitSections(n);
			return r.shift(), r;
		}),
		(t.matchPrefix = function(n, r) {
			return t.splitLines(n).filter(function(i) {
				return i.indexOf(r) === 0;
			});
		}),
		(t.parseCandidate = function(n) {
			var r;
			n.indexOf("a=candidate:") === 0
				? (r = n.substring(12).split(" "))
				: (r = n.substring(10).split(" "));
			for (
				var i = {
						foundation: r[0],
						component: parseInt(r[1], 10),
						protocol: r[2].toLowerCase(),
						priority: parseInt(r[3], 10),
						ip: r[4],
						address: r[4],
						port: parseInt(r[5], 10),
						type: r[7],
					},
					o = 8;
				o < r.length;
				o += 2
			)
				switch (r[o]) {
					case "raddr":
						i.relatedAddress = r[o + 1];
						break;
					case "rport":
						i.relatedPort = parseInt(r[o + 1], 10);
						break;
					case "tcptype":
						i.tcpType = r[o + 1];
						break;
					case "ufrag":
						(i.ufrag = r[o + 1]), (i.usernameFragment = r[o + 1]);
						break;
					default:
						i[r[o]] = r[o + 1];
						break;
				}
			return i;
		}),
		(t.writeCandidate = function(n) {
			var r = [];
			r.push(n.foundation),
				r.push(n.component),
				r.push(n.protocol.toUpperCase()),
				r.push(n.priority),
				r.push(n.address || n.ip),
				r.push(n.port);
			var i = n.type;
			return (
				r.push("typ"),
				r.push(i),
				i !== "host" &&
					n.relatedAddress &&
					n.relatedPort &&
					(r.push("raddr"),
					r.push(n.relatedAddress),
					r.push("rport"),
					r.push(n.relatedPort)),
				n.tcpType &&
					n.protocol.toLowerCase() === "tcp" &&
					(r.push("tcptype"), r.push(n.tcpType)),
				(n.usernameFragment || n.ufrag) &&
					(r.push("ufrag"), r.push(n.usernameFragment || n.ufrag)),
				"candidate:" + r.join(" ")
			);
		}),
		(t.parseIceOptions = function(n) {
			return n.substr(14).split(" ");
		}),
		(t.parseRtpMap = function(n) {
			var r = n.substr(9).split(" "),
				i = { payloadType: parseInt(r.shift(), 10) };
			return (
				(r = r[0].split("/")),
				(i.name = r[0]),
				(i.clockRate = parseInt(r[1], 10)),
				(i.channels = r.length === 3 ? parseInt(r[2], 10) : 1),
				(i.numChannels = i.channels),
				i
			);
		}),
		(t.writeRtpMap = function(n) {
			var r = n.payloadType;
			n.preferredPayloadType !== void 0 && (r = n.preferredPayloadType);
			var i = n.channels || n.numChannels || 1;
			return (
				"a=rtpmap:" +
				r +
				" " +
				n.name +
				"/" +
				n.clockRate +
				(i !== 1 ? "/" + i : "") +
				`\r
`
			);
		}),
		(t.parseExtmap = function(n) {
			var r = n.substr(9).split(" ");
			return {
				id: parseInt(r[0], 10),
				direction: r[0].indexOf("/") > 0 ? r[0].split("/")[1] : "sendrecv",
				uri: r[1],
			};
		}),
		(t.writeExtmap = function(n) {
			return (
				"a=extmap:" +
				(n.id || n.preferredId) +
				(n.direction && n.direction !== "sendrecv" ? "/" + n.direction : "") +
				" " +
				n.uri +
				`\r
`
			);
		}),
		(t.parseFmtp = function(n) {
			for (
				var r = {}, i, o = n.substr(n.indexOf(" ") + 1).split(";"), a = 0;
				a < o.length;
				a++
			)
				(i = o[a].trim().split("=")), (r[i[0].trim()] = i[1]);
			return r;
		}),
		(t.writeFmtp = function(n) {
			var r = "",
				i = n.payloadType;
			if (
				(n.preferredPayloadType !== void 0 && (i = n.preferredPayloadType),
				n.parameters && Object.keys(n.parameters).length)
			) {
				var o = [];
				Object.keys(n.parameters).forEach(function(a) {
					n.parameters[a] ? o.push(a + "=" + n.parameters[a]) : o.push(a);
				}),
					(r +=
						"a=fmtp:" +
						i +
						" " +
						o.join(";") +
						`\r
`);
			}
			return r;
		}),
		(t.parseRtcpFb = function(n) {
			var r = n.substr(n.indexOf(" ") + 1).split(" ");
			return { type: r.shift(), parameter: r.join(" ") };
		}),
		(t.writeRtcpFb = function(n) {
			var r = "",
				i = n.payloadType;
			return (
				n.preferredPayloadType !== void 0 && (i = n.preferredPayloadType),
				n.rtcpFeedback &&
					n.rtcpFeedback.length &&
					n.rtcpFeedback.forEach(function(o) {
						r +=
							"a=rtcp-fb:" +
							i +
							" " +
							o.type +
							(o.parameter && o.parameter.length ? " " + o.parameter : "") +
							`\r
`;
					}),
				r
			);
		}),
		(t.parseSsrcMedia = function(n) {
			var r = n.indexOf(" "),
				i = { ssrc: parseInt(n.substr(7, r - 7), 10) },
				o = n.indexOf(":", r);
			return (
				o > -1
					? ((i.attribute = n.substr(r + 1, o - r - 1)),
					  (i.value = n.substr(o + 1)))
					: (i.attribute = n.substr(r + 1)),
				i
			);
		}),
		(t.parseSsrcGroup = function(n) {
			var r = n.substr(13).split(" ");
			return {
				semantics: r.shift(),
				ssrcs: r.map(function(i) {
					return parseInt(i, 10);
				}),
			};
		}),
		(t.getMid = function(n) {
			var r = t.matchPrefix(n, "a=mid:")[0];
			if (r) return r.substr(6);
		}),
		(t.parseFingerprint = function(n) {
			var r = n.substr(14).split(" ");
			return { algorithm: r[0].toLowerCase(), value: r[1] };
		}),
		(t.getDtlsParameters = function(n, r) {
			var i = t.matchPrefix(n + r, "a=fingerprint:");
			return { role: "auto", fingerprints: i.map(t.parseFingerprint) };
		}),
		(t.writeDtlsParameters = function(n, r) {
			var i =
				"a=setup:" +
				r +
				`\r
`;
			return (
				n.fingerprints.forEach(function(o) {
					i +=
						"a=fingerprint:" +
						o.algorithm +
						" " +
						o.value +
						`\r
`;
				}),
				i
			);
		}),
		(t.parseCryptoLine = function(n) {
			var r = n.substr(9).split(" ");
			return {
				tag: parseInt(r[0], 10),
				cryptoSuite: r[1],
				keyParams: r[2],
				sessionParams: r.slice(3),
			};
		}),
		(t.writeCryptoLine = function(n) {
			return (
				"a=crypto:" +
				n.tag +
				" " +
				n.cryptoSuite +
				" " +
				(typeof n.keyParams == "object"
					? t.writeCryptoKeyParams(n.keyParams)
					: n.keyParams) +
				(n.sessionParams ? " " + n.sessionParams.join(" ") : "") +
				`\r
`
			);
		}),
		(t.parseCryptoKeyParams = function(n) {
			if (n.indexOf("inline:") !== 0) return null;
			var r = n.substr(7).split("|");
			return {
				keyMethod: "inline",
				keySalt: r[0],
				lifeTime: r[1],
				mkiValue: r[2] ? r[2].split(":")[0] : void 0,
				mkiLength: r[2] ? r[2].split(":")[1] : void 0,
			};
		}),
		(t.writeCryptoKeyParams = function(n) {
			return (
				n.keyMethod +
				":" +
				n.keySalt +
				(n.lifeTime ? "|" + n.lifeTime : "") +
				(n.mkiValue && n.mkiLength ? "|" + n.mkiValue + ":" + n.mkiLength : "")
			);
		}),
		(t.getCryptoParameters = function(n, r) {
			var i = t.matchPrefix(n + r, "a=crypto:");
			return i.map(t.parseCryptoLine);
		}),
		(t.getIceParameters = function(n, r) {
			var i = t.matchPrefix(n + r, "a=ice-ufrag:")[0],
				o = t.matchPrefix(n + r, "a=ice-pwd:")[0];
			return i && o
				? { usernameFragment: i.substr(12), password: o.substr(10) }
				: null;
		}),
		(t.writeIceParameters = function(n) {
			return (
				"a=ice-ufrag:" +
				n.usernameFragment +
				`\r
a=ice-pwd:` +
				n.password +
				`\r
`
			);
		}),
		(t.parseRtpParameters = function(n) {
			for (
				var r = {
						codecs: [],
						headerExtensions: [],
						fecMechanisms: [],
						rtcp: [],
					},
					i = t.splitLines(n),
					o = i[0].split(" "),
					a = 3;
				a < o.length;
				a++
			) {
				var l = o[a],
					s = t.matchPrefix(n, "a=rtpmap:" + l + " ")[0];
				if (s) {
					var u = t.parseRtpMap(s),
						c = t.matchPrefix(n, "a=fmtp:" + l + " ");
					switch (
						((u.parameters = c.length ? t.parseFmtp(c[0]) : {}),
						(u.rtcpFeedback = t
							.matchPrefix(n, "a=rtcp-fb:" + l + " ")
							.map(t.parseRtcpFb)),
						r.codecs.push(u),
						u.name.toUpperCase())
					) {
						case "RED":
						case "ULPFEC":
							r.fecMechanisms.push(u.name.toUpperCase());
							break;
					}
				}
			}
			return (
				t.matchPrefix(n, "a=extmap:").forEach(function(f) {
					r.headerExtensions.push(t.parseExtmap(f));
				}),
				r
			);
		}),
		(t.writeRtpDescription = function(n, r) {
			var i = "";
			(i += "m=" + n + " "),
				(i += r.codecs.length > 0 ? "9" : "0"),
				(i += " UDP/TLS/RTP/SAVPF "),
				(i +=
					r.codecs
						.map(function(a) {
							return a.preferredPayloadType !== void 0
								? a.preferredPayloadType
								: a.payloadType;
						})
						.join(" ") +
					`\r
`),
				(i += `c=IN IP4 0.0.0.0\r
`),
				(i += `a=rtcp:9 IN IP4 0.0.0.0\r
`),
				r.codecs.forEach(function(a) {
					(i += t.writeRtpMap(a)),
						(i += t.writeFmtp(a)),
						(i += t.writeRtcpFb(a));
				});
			var o = 0;
			return (
				r.codecs.forEach(function(a) {
					a.maxptime > o && (o = a.maxptime);
				}),
				o > 0 &&
					(i +=
						"a=maxptime:" +
						o +
						`\r
`),
				(i += `a=rtcp-mux\r
`),
				r.headerExtensions &&
					r.headerExtensions.forEach(function(a) {
						i += t.writeExtmap(a);
					}),
				i
			);
		}),
		(t.parseRtpEncodingParameters = function(n) {
			var r = [],
				i = t.parseRtpParameters(n),
				o = i.fecMechanisms.indexOf("RED") !== -1,
				a = i.fecMechanisms.indexOf("ULPFEC") !== -1,
				l = t
					.matchPrefix(n, "a=ssrc:")
					.map(function(d) {
						return t.parseSsrcMedia(d);
					})
					.filter(function(d) {
						return d.attribute === "cname";
					}),
				s = l.length > 0 && l[0].ssrc,
				u,
				c = t.matchPrefix(n, "a=ssrc-group:FID").map(function(d) {
					var g = d.substr(17).split(" ");
					return g.map(function(m) {
						return parseInt(m, 10);
					});
				});
			c.length > 0 && c[0].length > 1 && c[0][0] === s && (u = c[0][1]),
				i.codecs.forEach(function(d) {
					if (d.name.toUpperCase() === "RTX" && d.parameters.apt) {
						var g = {
							ssrc: s,
							codecPayloadType: parseInt(d.parameters.apt, 10),
						};
						s && u && (g.rtx = { ssrc: u }),
							r.push(g),
							o &&
								((g = JSON.parse(JSON.stringify(g))),
								(g.fec = { ssrc: s, mechanism: a ? "red+ulpfec" : "red" }),
								r.push(g));
					}
				}),
				r.length === 0 && s && r.push({ ssrc: s });
			var f = t.matchPrefix(n, "b=");
			return (
				f.length &&
					(f[0].indexOf("b=TIAS:") === 0
						? (f = parseInt(f[0].substr(7), 10))
						: f[0].indexOf("b=AS:") === 0
						? (f = parseInt(f[0].substr(5), 10) * 1e3 * 0.95 - 50 * 40 * 8)
						: (f = void 0),
					r.forEach(function(d) {
						d.maxBitrate = f;
					})),
				r
			);
		}),
		(t.parseRtcpParameters = function(n) {
			var r = {},
				i = t
					.matchPrefix(n, "a=ssrc:")
					.map(function(l) {
						return t.parseSsrcMedia(l);
					})
					.filter(function(l) {
						return l.attribute === "cname";
					})[0];
			i && ((r.cname = i.value), (r.ssrc = i.ssrc));
			var o = t.matchPrefix(n, "a=rtcp-rsize");
			(r.reducedSize = o.length > 0), (r.compound = o.length === 0);
			var a = t.matchPrefix(n, "a=rtcp-mux");
			return (r.mux = a.length > 0), r;
		}),
		(t.parseMsid = function(n) {
			var r,
				i = t.matchPrefix(n, "a=msid:");
			if (i.length === 1)
				return (r = i[0].substr(7).split(" ")), { stream: r[0], track: r[1] };
			var o = t
				.matchPrefix(n, "a=ssrc:")
				.map(function(a) {
					return t.parseSsrcMedia(a);
				})
				.filter(function(a) {
					return a.attribute === "msid";
				});
			if (o.length > 0)
				return (r = o[0].value.split(" ")), { stream: r[0], track: r[1] };
		}),
		(t.parseSctpDescription = function(n) {
			var r = t.parseMLine(n),
				i = t.matchPrefix(n, "a=max-message-size:"),
				o;
			i.length > 0 && (o = parseInt(i[0].substr(19), 10)),
				isNaN(o) && (o = 65536);
			var a = t.matchPrefix(n, "a=sctp-port:");
			if (a.length > 0)
				return {
					port: parseInt(a[0].substr(12), 10),
					protocol: r.fmt,
					maxMessageSize: o,
				};
			var l = t.matchPrefix(n, "a=sctpmap:");
			if (l.length > 0) {
				var s = t
					.matchPrefix(n, "a=sctpmap:")[0]
					.substr(10)
					.split(" ");
				return { port: parseInt(s[0], 10), protocol: s[1], maxMessageSize: o };
			}
		}),
		(t.writeSctpDescription = function(n, r) {
			var i = [];
			return (
				n.protocol !== "DTLS/SCTP"
					? (i = [
							"m=" +
								n.kind +
								" 9 " +
								n.protocol +
								" " +
								r.protocol +
								`\r
`,
							`c=IN IP4 0.0.0.0\r
`,
							"a=sctp-port:" +
								r.port +
								`\r
`,
					  ])
					: (i = [
							"m=" +
								n.kind +
								" 9 " +
								n.protocol +
								" " +
								r.port +
								`\r
`,
							`c=IN IP4 0.0.0.0\r
`,
							"a=sctpmap:" +
								r.port +
								" " +
								r.protocol +
								` 65535\r
`,
					  ]),
				r.maxMessageSize !== void 0 &&
					i.push(
						"a=max-message-size:" +
							r.maxMessageSize +
							`\r
`
					),
				i.join("")
			);
		}),
		(t.generateSessionId = function() {
			return Math.random()
				.toString()
				.substr(2, 21);
		}),
		(t.writeSessionBoilerplate = function(n, r, i) {
			var o,
				a = r !== void 0 ? r : 2;
			n ? (o = n) : (o = t.generateSessionId());
			var l = i || "thisisadapterortc";
			return (
				`v=0\r
o=` +
				l +
				" " +
				o +
				" " +
				a +
				` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`
			);
		}),
		(t.writeMediaSection = function(n, r, i, o) {
			var a = t.writeRtpDescription(n.kind, r);
			if (
				((a += t.writeIceParameters(n.iceGatherer.getLocalParameters())),
				(a += t.writeDtlsParameters(
					n.dtlsTransport.getLocalParameters(),
					i === "offer" ? "actpass" : "active"
				)),
				(a +=
					"a=mid:" +
					n.mid +
					`\r
`),
				n.direction
					? (a +=
							"a=" +
							n.direction +
							`\r
`)
					: n.rtpSender && n.rtpReceiver
					? (a += `a=sendrecv\r
`)
					: n.rtpSender
					? (a += `a=sendonly\r
`)
					: n.rtpReceiver
					? (a += `a=recvonly\r
`)
					: (a += `a=inactive\r
`),
				n.rtpSender)
			) {
				var l =
					"msid:" +
					o.id +
					" " +
					n.rtpSender.track.id +
					`\r
`;
				(a += "a=" + l),
					(a += "a=ssrc:" + n.sendEncodingParameters[0].ssrc + " " + l),
					n.sendEncodingParameters[0].rtx &&
						((a += "a=ssrc:" + n.sendEncodingParameters[0].rtx.ssrc + " " + l),
						(a +=
							"a=ssrc-group:FID " +
							n.sendEncodingParameters[0].ssrc +
							" " +
							n.sendEncodingParameters[0].rtx.ssrc +
							`\r
`));
			}
			return (
				(a +=
					"a=ssrc:" +
					n.sendEncodingParameters[0].ssrc +
					" cname:" +
					t.localCName +
					`\r
`),
				n.rtpSender &&
					n.sendEncodingParameters[0].rtx &&
					(a +=
						"a=ssrc:" +
						n.sendEncodingParameters[0].rtx.ssrc +
						" cname:" +
						t.localCName +
						`\r
`),
				a
			);
		}),
		(t.getDirection = function(n, r) {
			for (var i = t.splitLines(n), o = 0; o < i.length; o++)
				switch (i[o]) {
					case "a=sendrecv":
					case "a=sendonly":
					case "a=recvonly":
					case "a=inactive":
						return i[o].substr(2);
				}
			return r ? t.getDirection(r) : "sendrecv";
		}),
		(t.getKind = function(n) {
			var r = t.splitLines(n),
				i = r[0].split(" ");
			return i[0].substr(2);
		}),
		(t.isRejected = function(n) {
			return n.split(" ", 2)[1] === "0";
		}),
		(t.parseMLine = function(n) {
			var r = t.splitLines(n),
				i = r[0].substr(2).split(" ");
			return {
				kind: i[0],
				port: parseInt(i[1], 10),
				protocol: i[2],
				fmt: i.slice(3).join(" "),
			};
		}),
		(t.parseOLine = function(n) {
			var r = t.matchPrefix(n, "o=")[0],
				i = r.substr(2).split(" ");
			return {
				username: i[0],
				sessionId: i[1],
				sessionVersion: parseInt(i[2], 10),
				netType: i[3],
				addressType: i[4],
				address: i[5],
			};
		}),
		(t.isValidSDP = function(n) {
			if (typeof n != "string" || n.length === 0) return !1;
			for (var r = t.splitLines(n), i = 0; i < r.length; i++)
				if (r[i].length < 2 || r[i].charAt(1) !== "=") return !1;
			return !0;
		}),
		(e.exports = t);
})(jd);
var bd = jd.exports;
const Ei = os(bd);
var I = bd;
function $v(e) {
	return (
		{
			inboundrtp: "inbound-rtp",
			outboundrtp: "outbound-rtp",
			candidatepair: "candidate-pair",
			localcandidate: "local-candidate",
			remotecandidate: "remote-candidate",
		}[e.type] || e.type
	);
}
function Mu(e, t, n, r, i) {
	var o = I.writeRtpDescription(e.kind, t);
	if (
		((o += I.writeIceParameters(e.iceGatherer.getLocalParameters())),
		(o += I.writeDtlsParameters(
			e.dtlsTransport.getLocalParameters(),
			n === "offer" ? "actpass" : i || "active"
		)),
		(o +=
			"a=mid:" +
			e.mid +
			`\r
`),
		e.rtpSender && e.rtpReceiver
			? (o += `a=sendrecv\r
`)
			: e.rtpSender
			? (o += `a=sendonly\r
`)
			: e.rtpReceiver
			? (o += `a=recvonly\r
`)
			: (o += `a=inactive\r
`),
		e.rtpSender)
	) {
		var a = e.rtpSender._initialTrackId || e.rtpSender.track.id;
		e.rtpSender._initialTrackId = a;
		var l =
			"msid:" +
			(r ? r.id : "-") +
			" " +
			a +
			`\r
`;
		(o += "a=" + l),
			(o += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + l),
			e.sendEncodingParameters[0].rtx &&
				((o += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + l),
				(o +=
					"a=ssrc-group:FID " +
					e.sendEncodingParameters[0].ssrc +
					" " +
					e.sendEncodingParameters[0].rtx.ssrc +
					`\r
`));
	}
	return (
		(o +=
			"a=ssrc:" +
			e.sendEncodingParameters[0].ssrc +
			" cname:" +
			I.localCName +
			`\r
`),
		e.rtpSender &&
			e.sendEncodingParameters[0].rtx &&
			(o +=
				"a=ssrc:" +
				e.sendEncodingParameters[0].rtx.ssrc +
				" cname:" +
				I.localCName +
				`\r
`),
		o
	);
}
function Vv(e, t) {
	var n = !1;
	return (
		(e = JSON.parse(JSON.stringify(e))),
		e.filter(function(r) {
			if (r && (r.urls || r.url)) {
				var i = r.urls || r.url;
				r.url &&
					!r.urls &&
					console.warn("RTCIceServer.url is deprecated! Use urls instead.");
				var o = typeof i == "string";
				return (
					o && (i = [i]),
					(i = i.filter(function(a) {
						var l =
							a.indexOf("turn:") === 0 &&
							a.indexOf("transport=udp") !== -1 &&
							a.indexOf("turn:[") === -1 &&
							!n;
						return l
							? ((n = !0), !0)
							: a.indexOf("stun:") === 0 &&
									t >= 14393 &&
									a.indexOf("?transport=udp") === -1;
					})),
					delete r.url,
					(r.urls = o ? i[0] : i),
					!!i.length
				);
			}
		})
	);
}
function si(e, t) {
	var n = { codecs: [], headerExtensions: [], fecMechanisms: [] },
		r = function(o, a) {
			o = parseInt(o, 10);
			for (var l = 0; l < a.length; l++)
				if (a[l].payloadType === o || a[l].preferredPayloadType === o)
					return a[l];
		},
		i = function(o, a, l, s) {
			var u = r(o.parameters.apt, l),
				c = r(a.parameters.apt, s);
			return u && c && u.name.toLowerCase() === c.name.toLowerCase();
		};
	return (
		e.codecs.forEach(function(o) {
			for (var a = 0; a < t.codecs.length; a++) {
				var l = t.codecs[a];
				if (
					o.name.toLowerCase() === l.name.toLowerCase() &&
					o.clockRate === l.clockRate
				) {
					if (
						o.name.toLowerCase() === "rtx" &&
						o.parameters &&
						l.parameters.apt &&
						!i(o, l, e.codecs, t.codecs)
					)
						continue;
					(l = JSON.parse(JSON.stringify(l))),
						(l.numChannels = Math.min(o.numChannels, l.numChannels)),
						n.codecs.push(l),
						(l.rtcpFeedback = l.rtcpFeedback.filter(function(s) {
							for (var u = 0; u < o.rtcpFeedback.length; u++)
								if (
									o.rtcpFeedback[u].type === s.type &&
									o.rtcpFeedback[u].parameter === s.parameter
								)
									return !0;
							return !1;
						}));
					break;
				}
			}
		}),
		e.headerExtensions.forEach(function(o) {
			for (var a = 0; a < t.headerExtensions.length; a++) {
				var l = t.headerExtensions[a];
				if (o.uri === l.uri) {
					n.headerExtensions.push(l);
					break;
				}
			}
		}),
		n
	);
}
function Iu(e, t, n) {
	return (
		{
			offer: {
				setLocalDescription: ["stable", "have-local-offer"],
				setRemoteDescription: ["stable", "have-remote-offer"],
			},
			answer: {
				setLocalDescription: ["have-remote-offer", "have-local-pranswer"],
				setRemoteDescription: ["have-local-offer", "have-remote-pranswer"],
			},
		}[t][e].indexOf(n) !== -1
	);
}
function Zo(e, t) {
	var n = e.getRemoteCandidates().find(function(r) {
		return (
			t.foundation === r.foundation &&
			t.ip === r.ip &&
			t.port === r.port &&
			t.priority === r.priority &&
			t.protocol === r.protocol &&
			t.type === r.type
		);
	});
	return n || e.addRemoteCandidate(t), !n;
}
function he(e, t) {
	var n = new Error(t);
	return (
		(n.name = e),
		(n.code = {
			NotSupportedError: 9,
			InvalidStateError: 11,
			InvalidAccessError: 15,
			TypeError: void 0,
			OperationError: void 0,
		}[e]),
		n
	);
}
var Gv = function(e, t) {
	function n(s, u) {
		u.addTrack(s),
			u.dispatchEvent(new e.MediaStreamTrackEvent("addtrack", { track: s }));
	}
	function r(s, u) {
		u.removeTrack(s),
			u.dispatchEvent(new e.MediaStreamTrackEvent("removetrack", { track: s }));
	}
	function i(s, u, c, f) {
		var d = new Event("track");
		(d.track = u),
			(d.receiver = c),
			(d.transceiver = { receiver: c }),
			(d.streams = f),
			e.setTimeout(function() {
				s._dispatchEvent("track", d);
			});
	}
	var o = function(s) {
		var u = this,
			c = document.createDocumentFragment();
		if (
			(["addEventListener", "removeEventListener", "dispatchEvent"].forEach(
				function(d) {
					u[d] = c[d].bind(c);
				}
			),
			(this.canTrickleIceCandidates = null),
			(this.needNegotiation = !1),
			(this.localStreams = []),
			(this.remoteStreams = []),
			(this._localDescription = null),
			(this._remoteDescription = null),
			(this.signalingState = "stable"),
			(this.iceConnectionState = "new"),
			(this.connectionState = "new"),
			(this.iceGatheringState = "new"),
			(s = JSON.parse(JSON.stringify(s || {}))),
			(this.usingBundle = s.bundlePolicy === "max-bundle"),
			s.rtcpMuxPolicy === "negotiate")
		)
			throw he(
				"NotSupportedError",
				"rtcpMuxPolicy 'negotiate' is not supported"
			);
		switch (
			(s.rtcpMuxPolicy || (s.rtcpMuxPolicy = "require"), s.iceTransportPolicy)
		) {
			case "all":
			case "relay":
				break;
			default:
				s.iceTransportPolicy = "all";
				break;
		}
		switch (s.bundlePolicy) {
			case "balanced":
			case "max-compat":
			case "max-bundle":
				break;
			default:
				s.bundlePolicy = "balanced";
				break;
		}
		if (
			((s.iceServers = Vv(s.iceServers || [], t)),
			(this._iceGatherers = []),
			s.iceCandidatePoolSize)
		)
			for (var f = s.iceCandidatePoolSize; f > 0; f--)
				this._iceGatherers.push(
					new e.RTCIceGatherer({
						iceServers: s.iceServers,
						gatherPolicy: s.iceTransportPolicy,
					})
				);
		else s.iceCandidatePoolSize = 0;
		(this._config = s),
			(this.transceivers = []),
			(this._sdpSessionId = I.generateSessionId()),
			(this._sdpSessionVersion = 0),
			(this._dtlsRole = void 0),
			(this._isClosed = !1);
	};
	Object.defineProperty(o.prototype, "localDescription", {
		configurable: !0,
		get: function() {
			return this._localDescription;
		},
	}),
		Object.defineProperty(o.prototype, "remoteDescription", {
			configurable: !0,
			get: function() {
				return this._remoteDescription;
			},
		}),
		(o.prototype.onicecandidate = null),
		(o.prototype.onaddstream = null),
		(o.prototype.ontrack = null),
		(o.prototype.onremovestream = null),
		(o.prototype.onsignalingstatechange = null),
		(o.prototype.oniceconnectionstatechange = null),
		(o.prototype.onconnectionstatechange = null),
		(o.prototype.onicegatheringstatechange = null),
		(o.prototype.onnegotiationneeded = null),
		(o.prototype.ondatachannel = null),
		(o.prototype._dispatchEvent = function(s, u) {
			this._isClosed ||
				(this.dispatchEvent(u),
				typeof this["on" + s] == "function" && this["on" + s](u));
		}),
		(o.prototype._emitGatheringStateChange = function() {
			var s = new Event("icegatheringstatechange");
			this._dispatchEvent("icegatheringstatechange", s);
		}),
		(o.prototype.getConfiguration = function() {
			return this._config;
		}),
		(o.prototype.getLocalStreams = function() {
			return this.localStreams;
		}),
		(o.prototype.getRemoteStreams = function() {
			return this.remoteStreams;
		}),
		(o.prototype._createTransceiver = function(s, u) {
			var c = this.transceivers.length > 0,
				f = {
					track: null,
					iceGatherer: null,
					iceTransport: null,
					dtlsTransport: null,
					localCapabilities: null,
					remoteCapabilities: null,
					rtpSender: null,
					rtpReceiver: null,
					kind: s,
					mid: null,
					sendEncodingParameters: null,
					recvEncodingParameters: null,
					stream: null,
					associatedRemoteMediaStreams: [],
					wantReceive: !0,
				};
			if (this.usingBundle && c)
				(f.iceTransport = this.transceivers[0].iceTransport),
					(f.dtlsTransport = this.transceivers[0].dtlsTransport);
			else {
				var d = this._createIceAndDtlsTransports();
				(f.iceTransport = d.iceTransport), (f.dtlsTransport = d.dtlsTransport);
			}
			return u || this.transceivers.push(f), f;
		}),
		(o.prototype.addTrack = function(s, u) {
			if (this._isClosed)
				throw he(
					"InvalidStateError",
					"Attempted to call addTrack on a closed peerconnection."
				);
			var c = this.transceivers.find(function(g) {
				return g.track === s;
			});
			if (c) throw he("InvalidAccessError", "Track already exists.");
			for (var f, d = 0; d < this.transceivers.length; d++)
				!this.transceivers[d].track &&
					this.transceivers[d].kind === s.kind &&
					(f = this.transceivers[d]);
			return (
				f || (f = this._createTransceiver(s.kind)),
				this._maybeFireNegotiationNeeded(),
				this.localStreams.indexOf(u) === -1 && this.localStreams.push(u),
				(f.track = s),
				(f.stream = u),
				(f.rtpSender = new e.RTCRtpSender(s, f.dtlsTransport)),
				f.rtpSender
			);
		}),
		(o.prototype.addStream = function(s) {
			var u = this;
			if (t >= 15025)
				s.getTracks().forEach(function(f) {
					u.addTrack(f, s);
				});
			else {
				var c = s.clone();
				s.getTracks().forEach(function(f, d) {
					var g = c.getTracks()[d];
					f.addEventListener("enabled", function(m) {
						g.enabled = m.enabled;
					});
				}),
					c.getTracks().forEach(function(f) {
						u.addTrack(f, c);
					});
			}
		}),
		(o.prototype.removeTrack = function(s) {
			if (this._isClosed)
				throw he(
					"InvalidStateError",
					"Attempted to call removeTrack on a closed peerconnection."
				);
			if (!(s instanceof e.RTCRtpSender))
				throw new TypeError(
					"Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender."
				);
			var u = this.transceivers.find(function(d) {
				return d.rtpSender === s;
			});
			if (!u)
				throw he(
					"InvalidAccessError",
					"Sender was not created by this connection."
				);
			var c = u.stream;
			u.rtpSender.stop(),
				(u.rtpSender = null),
				(u.track = null),
				(u.stream = null);
			var f = this.transceivers.map(function(d) {
				return d.stream;
			});
			f.indexOf(c) === -1 &&
				this.localStreams.indexOf(c) > -1 &&
				this.localStreams.splice(this.localStreams.indexOf(c), 1),
				this._maybeFireNegotiationNeeded();
		}),
		(o.prototype.removeStream = function(s) {
			var u = this;
			s.getTracks().forEach(function(c) {
				var f = u.getSenders().find(function(d) {
					return d.track === c;
				});
				f && u.removeTrack(f);
			});
		}),
		(o.prototype.getSenders = function() {
			return this.transceivers
				.filter(function(s) {
					return !!s.rtpSender;
				})
				.map(function(s) {
					return s.rtpSender;
				});
		}),
		(o.prototype.getReceivers = function() {
			return this.transceivers
				.filter(function(s) {
					return !!s.rtpReceiver;
				})
				.map(function(s) {
					return s.rtpReceiver;
				});
		}),
		(o.prototype._createIceGatherer = function(s, u) {
			var c = this;
			if (u && s > 0) return this.transceivers[0].iceGatherer;
			if (this._iceGatherers.length) return this._iceGatherers.shift();
			var f = new e.RTCIceGatherer({
				iceServers: this._config.iceServers,
				gatherPolicy: this._config.iceTransportPolicy,
			});
			return (
				Object.defineProperty(f, "state", { value: "new", writable: !0 }),
				(this.transceivers[s].bufferedCandidateEvents = []),
				(this.transceivers[s].bufferCandidates = function(d) {
					var g = !d.candidate || Object.keys(d.candidate).length === 0;
					(f.state = g ? "completed" : "gathering"),
						c.transceivers[s].bufferedCandidateEvents !== null &&
							c.transceivers[s].bufferedCandidateEvents.push(d);
				}),
				f.addEventListener(
					"localcandidate",
					this.transceivers[s].bufferCandidates
				),
				f
			);
		}),
		(o.prototype._gather = function(s, u) {
			var c = this,
				f = this.transceivers[u].iceGatherer;
			if (!f.onlocalcandidate) {
				var d = this.transceivers[u].bufferedCandidateEvents;
				(this.transceivers[u].bufferedCandidateEvents = null),
					f.removeEventListener(
						"localcandidate",
						this.transceivers[u].bufferCandidates
					),
					(f.onlocalcandidate = function(g) {
						if (!(c.usingBundle && u > 0)) {
							var m = new Event("icecandidate");
							m.candidate = { sdpMid: s, sdpMLineIndex: u };
							var y = g.candidate,
								P = !y || Object.keys(y).length === 0;
							if (P)
								(f.state === "new" || f.state === "gathering") &&
									(f.state = "completed");
							else {
								f.state === "new" && (f.state = "gathering"),
									(y.component = 1),
									(y.ufrag = f.getLocalParameters().usernameFragment);
								var h = I.writeCandidate(y);
								(m.candidate = Object.assign(m.candidate, I.parseCandidate(h))),
									(m.candidate.candidate = h),
									(m.candidate.toJSON = function() {
										return {
											candidate: m.candidate.candidate,
											sdpMid: m.candidate.sdpMid,
											sdpMLineIndex: m.candidate.sdpMLineIndex,
											usernameFragment: m.candidate.usernameFragment,
										};
									});
							}
							var p = I.getMediaSections(c._localDescription.sdp);
							P
								? (p[m.candidate.sdpMLineIndex] += `a=end-of-candidates\r
`)
								: (p[m.candidate.sdpMLineIndex] +=
										"a=" +
										m.candidate.candidate +
										`\r
`),
								(c._localDescription.sdp =
									I.getDescription(c._localDescription.sdp) + p.join(""));
							var v = c.transceivers.every(function(C) {
								return C.iceGatherer && C.iceGatherer.state === "completed";
							});
							c.iceGatheringState !== "gathering" &&
								((c.iceGatheringState = "gathering"),
								c._emitGatheringStateChange()),
								P || c._dispatchEvent("icecandidate", m),
								v &&
									(c._dispatchEvent("icecandidate", new Event("icecandidate")),
									(c.iceGatheringState = "complete"),
									c._emitGatheringStateChange());
						}
					}),
					e.setTimeout(function() {
						d.forEach(function(g) {
							f.onlocalcandidate(g);
						});
					}, 0);
			}
		}),
		(o.prototype._createIceAndDtlsTransports = function() {
			var s = this,
				u = new e.RTCIceTransport(null);
			u.onicestatechange = function() {
				s._updateIceConnectionState(), s._updateConnectionState();
			};
			var c = new e.RTCDtlsTransport(u);
			return (
				(c.ondtlsstatechange = function() {
					s._updateConnectionState();
				}),
				(c.onerror = function() {
					Object.defineProperty(c, "state", { value: "failed", writable: !0 }),
						s._updateConnectionState();
				}),
				{ iceTransport: u, dtlsTransport: c }
			);
		}),
		(o.prototype._disposeIceAndDtlsTransports = function(s) {
			var u = this.transceivers[s].iceGatherer;
			u && (delete u.onlocalcandidate, delete this.transceivers[s].iceGatherer);
			var c = this.transceivers[s].iceTransport;
			c &&
				(delete c.onicestatechange, delete this.transceivers[s].iceTransport);
			var f = this.transceivers[s].dtlsTransport;
			f &&
				(delete f.ondtlsstatechange,
				delete f.onerror,
				delete this.transceivers[s].dtlsTransport);
		}),
		(o.prototype._transceive = function(s, u, c) {
			var f = si(s.localCapabilities, s.remoteCapabilities);
			u &&
				s.rtpSender &&
				((f.encodings = s.sendEncodingParameters),
				(f.rtcp = { cname: I.localCName, compound: s.rtcpParameters.compound }),
				s.recvEncodingParameters.length &&
					(f.rtcp.ssrc = s.recvEncodingParameters[0].ssrc),
				s.rtpSender.send(f)),
				c &&
					s.rtpReceiver &&
					f.codecs.length > 0 &&
					(s.kind === "video" &&
						s.recvEncodingParameters &&
						t < 15019 &&
						s.recvEncodingParameters.forEach(function(d) {
							delete d.rtx;
						}),
					s.recvEncodingParameters.length
						? (f.encodings = s.recvEncodingParameters)
						: (f.encodings = [{}]),
					(f.rtcp = { compound: s.rtcpParameters.compound }),
					s.rtcpParameters.cname && (f.rtcp.cname = s.rtcpParameters.cname),
					s.sendEncodingParameters.length &&
						(f.rtcp.ssrc = s.sendEncodingParameters[0].ssrc),
					s.rtpReceiver.receive(f));
		}),
		(o.prototype.setLocalDescription = function(s) {
			var u = this;
			if (["offer", "answer"].indexOf(s.type) === -1)
				return Promise.reject(
					he("TypeError", 'Unsupported type "' + s.type + '"')
				);
			if (!Iu("setLocalDescription", s.type, u.signalingState) || u._isClosed)
				return Promise.reject(
					he(
						"InvalidStateError",
						"Can not set local " + s.type + " in state " + u.signalingState
					)
				);
			var c, f;
			if (s.type === "offer")
				(c = I.splitSections(s.sdp)),
					(f = c.shift()),
					c.forEach(function(g, m) {
						var y = I.parseRtpParameters(g);
						u.transceivers[m].localCapabilities = y;
					}),
					u.transceivers.forEach(function(g, m) {
						u._gather(g.mid, m);
					});
			else if (s.type === "answer") {
				(c = I.splitSections(u._remoteDescription.sdp)), (f = c.shift());
				var d = I.matchPrefix(f, "a=ice-lite").length > 0;
				c.forEach(function(g, m) {
					var y = u.transceivers[m],
						P = y.iceGatherer,
						h = y.iceTransport,
						p = y.dtlsTransport,
						v = y.localCapabilities,
						C = y.remoteCapabilities,
						S =
							I.isRejected(g) && I.matchPrefix(g, "a=bundle-only").length === 0;
					if (!S && !y.rejected) {
						var k = I.getIceParameters(g, f),
							E = I.getDtlsParameters(g, f);
						d && (E.role = "server"),
							(!u.usingBundle || m === 0) &&
								(u._gather(y.mid, m),
								h.state === "new" &&
									h.start(P, k, d ? "controlling" : "controlled"),
								p.state === "new" && p.start(E));
						var _ = si(v, C);
						u._transceive(y, _.codecs.length > 0, !1);
					}
				});
			}
			return (
				(u._localDescription = { type: s.type, sdp: s.sdp }),
				s.type === "offer"
					? u._updateSignalingState("have-local-offer")
					: u._updateSignalingState("stable"),
				Promise.resolve()
			);
		}),
		(o.prototype.setRemoteDescription = function(s) {
			var u = this;
			if (["offer", "answer"].indexOf(s.type) === -1)
				return Promise.reject(
					he("TypeError", 'Unsupported type "' + s.type + '"')
				);
			if (!Iu("setRemoteDescription", s.type, u.signalingState) || u._isClosed)
				return Promise.reject(
					he(
						"InvalidStateError",
						"Can not set remote " + s.type + " in state " + u.signalingState
					)
				);
			var c = {};
			u.remoteStreams.forEach(function(h) {
				c[h.id] = h;
			});
			var f = [],
				d = I.splitSections(s.sdp),
				g = d.shift(),
				m = I.matchPrefix(g, "a=ice-lite").length > 0,
				y = I.matchPrefix(g, "a=group:BUNDLE ").length > 0;
			u.usingBundle = y;
			var P = I.matchPrefix(g, "a=ice-options:")[0];
			return (
				P
					? (u.canTrickleIceCandidates =
							P.substr(14)
								.split(" ")
								.indexOf("trickle") >= 0)
					: (u.canTrickleIceCandidates = !1),
				d.forEach(function(h, p) {
					var v = I.splitLines(h),
						C = I.getKind(h),
						S =
							I.isRejected(h) && I.matchPrefix(h, "a=bundle-only").length === 0,
						k = v[0].substr(2).split(" ")[2],
						E = I.getDirection(h, g),
						_ = I.parseMsid(h),
						M = I.getMid(h) || I.generateIdentifier();
					if (
						S ||
						(C === "application" &&
							(k === "DTLS/SCTP" || k === "UDP/DTLS/SCTP"))
					) {
						u.transceivers[p] = { mid: M, kind: C, protocol: k, rejected: !0 };
						return;
					}
					!S &&
						u.transceivers[p] &&
						u.transceivers[p].rejected &&
						(u.transceivers[p] = u._createTransceiver(C, !0));
					var x,
						ne,
						We,
						at,
						Be,
						$n,
						Ut,
						st,
						R,
						j = I.parseRtpParameters(h),
						b,
						U;
					S ||
						((b = I.getIceParameters(h, g)),
						(U = I.getDtlsParameters(h, g)),
						(U.role = "client")),
						(Ut = I.parseRtpEncodingParameters(h));
					var K = I.parseRtcpParameters(h),
						$t = I.matchPrefix(h, "a=end-of-candidates", g).length > 0,
						Ee = I.matchPrefix(h, "a=candidate:")
							.map(function(xe) {
								return I.parseCandidate(xe);
							})
							.filter(function(xe) {
								return xe.component === 1;
							});
					if (
						((s.type === "offer" || s.type === "answer") &&
							!S &&
							y &&
							p > 0 &&
							u.transceivers[p] &&
							(u._disposeIceAndDtlsTransports(p),
							(u.transceivers[p].iceGatherer = u.transceivers[0].iceGatherer),
							(u.transceivers[p].iceTransport = u.transceivers[0].iceTransport),
							(u.transceivers[p].dtlsTransport =
								u.transceivers[0].dtlsTransport),
							u.transceivers[p].rtpSender &&
								u.transceivers[p].rtpSender.setTransport(
									u.transceivers[0].dtlsTransport
								),
							u.transceivers[p].rtpReceiver &&
								u.transceivers[p].rtpReceiver.setTransport(
									u.transceivers[0].dtlsTransport
								)),
						s.type === "offer" && !S)
					) {
						(x = u.transceivers[p] || u._createTransceiver(C)),
							(x.mid = M),
							x.iceGatherer || (x.iceGatherer = u._createIceGatherer(p, y)),
							Ee.length &&
								x.iceTransport.state === "new" &&
								($t && (!y || p === 0)
									? x.iceTransport.setRemoteCandidates(Ee)
									: Ee.forEach(function(xe) {
											Zo(x.iceTransport, xe);
									  })),
							(st = e.RTCRtpReceiver.getCapabilities(C)),
							t < 15019 &&
								(st.codecs = st.codecs.filter(function(xe) {
									return xe.name !== "rtx";
								})),
							($n = x.sendEncodingParameters || [{ ssrc: (2 * p + 2) * 1001 }]);
						var Vt = !1;
						if (E === "sendrecv" || E === "sendonly") {
							if (
								((Vt = !x.rtpReceiver),
								(Be =
									x.rtpReceiver || new e.RTCRtpReceiver(x.dtlsTransport, C)),
								Vt)
							) {
								var Te;
								(R = Be.track),
									(_ && _.stream === "-") ||
										(_
											? (c[_.stream] ||
													((c[_.stream] = new e.MediaStream()),
													Object.defineProperty(c[_.stream], "id", {
														get: function() {
															return _.stream;
														},
													})),
											  Object.defineProperty(R, "id", {
													get: function() {
														return _.track;
													},
											  }),
											  (Te = c[_.stream]))
											: (c.default || (c.default = new e.MediaStream()),
											  (Te = c.default))),
									Te && (n(R, Te), x.associatedRemoteMediaStreams.push(Te)),
									f.push([R, Be, Te]);
							}
						} else
							x.rtpReceiver &&
								x.rtpReceiver.track &&
								(x.associatedRemoteMediaStreams.forEach(function(xe) {
									var sl = xe.getTracks().find(function(fp) {
										return fp.id === x.rtpReceiver.track.id;
									});
									sl && r(sl, xe);
								}),
								(x.associatedRemoteMediaStreams = []));
						(x.localCapabilities = st),
							(x.remoteCapabilities = j),
							(x.rtpReceiver = Be),
							(x.rtcpParameters = K),
							(x.sendEncodingParameters = $n),
							(x.recvEncodingParameters = Ut),
							u._transceive(u.transceivers[p], !1, Vt);
					} else if (s.type === "answer" && !S) {
						(x = u.transceivers[p]),
							(ne = x.iceGatherer),
							(We = x.iceTransport),
							(at = x.dtlsTransport),
							(Be = x.rtpReceiver),
							($n = x.sendEncodingParameters),
							(st = x.localCapabilities),
							(u.transceivers[p].recvEncodingParameters = Ut),
							(u.transceivers[p].remoteCapabilities = j),
							(u.transceivers[p].rtcpParameters = K),
							Ee.length &&
								We.state === "new" &&
								((m || $t) && (!y || p === 0)
									? We.setRemoteCandidates(Ee)
									: Ee.forEach(function(xe) {
											Zo(x.iceTransport, xe);
									  })),
							(!y || p === 0) &&
								(We.state === "new" && We.start(ne, b, "controlling"),
								at.state === "new" && at.start(U));
						var cn = si(x.localCapabilities, x.remoteCapabilities),
							cp = cn.codecs.filter(function(xe) {
								return xe.name.toLowerCase() === "rtx";
							}).length;
						!cp &&
							x.sendEncodingParameters[0].rtx &&
							delete x.sendEncodingParameters[0].rtx,
							u._transceive(
								x,
								E === "sendrecv" || E === "recvonly",
								E === "sendrecv" || E === "sendonly"
							),
							Be && (E === "sendrecv" || E === "sendonly")
								? ((R = Be.track),
								  _
										? (c[_.stream] || (c[_.stream] = new e.MediaStream()),
										  n(R, c[_.stream]),
										  f.push([R, Be, c[_.stream]]))
										: (c.default || (c.default = new e.MediaStream()),
										  n(R, c.default),
										  f.push([R, Be, c.default])))
								: delete x.rtpReceiver;
					}
				}),
				u._dtlsRole === void 0 &&
					(u._dtlsRole = s.type === "offer" ? "active" : "passive"),
				(u._remoteDescription = { type: s.type, sdp: s.sdp }),
				s.type === "offer"
					? u._updateSignalingState("have-remote-offer")
					: u._updateSignalingState("stable"),
				Object.keys(c).forEach(function(h) {
					var p = c[h];
					if (p.getTracks().length) {
						if (u.remoteStreams.indexOf(p) === -1) {
							u.remoteStreams.push(p);
							var v = new Event("addstream");
							(v.stream = p),
								e.setTimeout(function() {
									u._dispatchEvent("addstream", v);
								});
						}
						f.forEach(function(C) {
							var S = C[0],
								k = C[1];
							p.id === C[2].id && i(u, S, k, [p]);
						});
					}
				}),
				f.forEach(function(h) {
					h[2] || i(u, h[0], h[1], []);
				}),
				e.setTimeout(function() {
					u &&
						u.transceivers &&
						u.transceivers.forEach(function(h) {
							h.iceTransport &&
								h.iceTransport.state === "new" &&
								h.iceTransport.getRemoteCandidates().length > 0 &&
								(console.warn(
									"Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"
								),
								h.iceTransport.addRemoteCandidate({}));
						});
				}, 4e3),
				Promise.resolve()
			);
		}),
		(o.prototype.close = function() {
			this.transceivers.forEach(function(s) {
				s.iceTransport && s.iceTransport.stop(),
					s.dtlsTransport && s.dtlsTransport.stop(),
					s.rtpSender && s.rtpSender.stop(),
					s.rtpReceiver && s.rtpReceiver.stop();
			}),
				(this._isClosed = !0),
				this._updateSignalingState("closed");
		}),
		(o.prototype._updateSignalingState = function(s) {
			this.signalingState = s;
			var u = new Event("signalingstatechange");
			this._dispatchEvent("signalingstatechange", u);
		}),
		(o.prototype._maybeFireNegotiationNeeded = function() {
			var s = this;
			this.signalingState !== "stable" ||
				this.needNegotiation === !0 ||
				((this.needNegotiation = !0),
				e.setTimeout(function() {
					if (s.needNegotiation) {
						s.needNegotiation = !1;
						var u = new Event("negotiationneeded");
						s._dispatchEvent("negotiationneeded", u);
					}
				}, 0));
		}),
		(o.prototype._updateIceConnectionState = function() {
			var s,
				u = {
					new: 0,
					closed: 0,
					checking: 0,
					connected: 0,
					completed: 0,
					disconnected: 0,
					failed: 0,
				};
			if (
				(this.transceivers.forEach(function(f) {
					f.iceTransport && !f.rejected && u[f.iceTransport.state]++;
				}),
				(s = "new"),
				u.failed > 0
					? (s = "failed")
					: u.checking > 0
					? (s = "checking")
					: u.disconnected > 0
					? (s = "disconnected")
					: u.new > 0
					? (s = "new")
					: u.connected > 0
					? (s = "connected")
					: u.completed > 0 && (s = "completed"),
				s !== this.iceConnectionState)
			) {
				this.iceConnectionState = s;
				var c = new Event("iceconnectionstatechange");
				this._dispatchEvent("iceconnectionstatechange", c);
			}
		}),
		(o.prototype._updateConnectionState = function() {
			var s,
				u = {
					new: 0,
					closed: 0,
					connecting: 0,
					connected: 0,
					completed: 0,
					disconnected: 0,
					failed: 0,
				};
			if (
				(this.transceivers.forEach(function(f) {
					f.iceTransport &&
						f.dtlsTransport &&
						!f.rejected &&
						(u[f.iceTransport.state]++, u[f.dtlsTransport.state]++);
				}),
				(u.connected += u.completed),
				(s = "new"),
				u.failed > 0
					? (s = "failed")
					: u.connecting > 0
					? (s = "connecting")
					: u.disconnected > 0
					? (s = "disconnected")
					: u.new > 0
					? (s = "new")
					: u.connected > 0 && (s = "connected"),
				s !== this.connectionState)
			) {
				this.connectionState = s;
				var c = new Event("connectionstatechange");
				this._dispatchEvent("connectionstatechange", c);
			}
		}),
		(o.prototype.createOffer = function() {
			var s = this;
			if (s._isClosed)
				return Promise.reject(
					he("InvalidStateError", "Can not call createOffer after close")
				);
			var u = s.transceivers.filter(function(m) {
					return m.kind === "audio";
				}).length,
				c = s.transceivers.filter(function(m) {
					return m.kind === "video";
				}).length,
				f = arguments[0];
			if (f) {
				if (f.mandatory || f.optional)
					throw new TypeError(
						"Legacy mandatory/optional constraints not supported."
					);
				f.offerToReceiveAudio !== void 0 &&
					(f.offerToReceiveAudio === !0
						? (u = 1)
						: f.offerToReceiveAudio === !1
						? (u = 0)
						: (u = f.offerToReceiveAudio)),
					f.offerToReceiveVideo !== void 0 &&
						(f.offerToReceiveVideo === !0
							? (c = 1)
							: f.offerToReceiveVideo === !1
							? (c = 0)
							: (c = f.offerToReceiveVideo));
			}
			for (
				s.transceivers.forEach(function(m) {
					m.kind === "audio"
						? (u--, u < 0 && (m.wantReceive = !1))
						: m.kind === "video" && (c--, c < 0 && (m.wantReceive = !1));
				});
				u > 0 || c > 0;

			)
				u > 0 && (s._createTransceiver("audio"), u--),
					c > 0 && (s._createTransceiver("video"), c--);
			var d = I.writeSessionBoilerplate(
				s._sdpSessionId,
				s._sdpSessionVersion++
			);
			s.transceivers.forEach(function(m, y) {
				var P = m.track,
					h = m.kind,
					p = m.mid || I.generateIdentifier();
				(m.mid = p),
					m.iceGatherer ||
						(m.iceGatherer = s._createIceGatherer(y, s.usingBundle));
				var v = e.RTCRtpSender.getCapabilities(h);
				t < 15019 &&
					(v.codecs = v.codecs.filter(function(S) {
						return S.name !== "rtx";
					})),
					v.codecs.forEach(function(S) {
						S.name === "H264" &&
							S.parameters["level-asymmetry-allowed"] === void 0 &&
							(S.parameters["level-asymmetry-allowed"] = "1"),
							m.remoteCapabilities &&
								m.remoteCapabilities.codecs &&
								m.remoteCapabilities.codecs.forEach(function(k) {
									S.name.toLowerCase() === k.name.toLowerCase() &&
										S.clockRate === k.clockRate &&
										(S.preferredPayloadType = k.payloadType);
								});
					}),
					v.headerExtensions.forEach(function(S) {
						var k =
							(m.remoteCapabilities && m.remoteCapabilities.headerExtensions) ||
							[];
						k.forEach(function(E) {
							S.uri === E.uri && (S.id = E.id);
						});
					});
				var C = m.sendEncodingParameters || [{ ssrc: (2 * y + 1) * 1001 }];
				P &&
					t >= 15019 &&
					h === "video" &&
					!C[0].rtx &&
					(C[0].rtx = { ssrc: C[0].ssrc + 1 }),
					m.wantReceive &&
						(m.rtpReceiver = new e.RTCRtpReceiver(m.dtlsTransport, h)),
					(m.localCapabilities = v),
					(m.sendEncodingParameters = C);
			}),
				s._config.bundlePolicy !== "max-compat" &&
					(d +=
						"a=group:BUNDLE " +
						s.transceivers
							.map(function(m) {
								return m.mid;
							})
							.join(" ") +
						`\r
`),
				(d += `a=ice-options:trickle\r
`),
				s.transceivers.forEach(function(m, y) {
					(d += Mu(m, m.localCapabilities, "offer", m.stream, s._dtlsRole)),
						(d += `a=rtcp-rsize\r
`),
						m.iceGatherer &&
							s.iceGatheringState !== "new" &&
							(y === 0 || !s.usingBundle) &&
							(m.iceGatherer.getLocalCandidates().forEach(function(P) {
								(P.component = 1),
									(d +=
										"a=" +
										I.writeCandidate(P) +
										`\r
`);
							}),
							m.iceGatherer.state === "completed" &&
								(d += `a=end-of-candidates\r
`));
				});
			var g = new e.RTCSessionDescription({ type: "offer", sdp: d });
			return Promise.resolve(g);
		}),
		(o.prototype.createAnswer = function() {
			var s = this;
			if (s._isClosed)
				return Promise.reject(
					he("InvalidStateError", "Can not call createAnswer after close")
				);
			if (
				!(
					s.signalingState === "have-remote-offer" ||
					s.signalingState === "have-local-pranswer"
				)
			)
				return Promise.reject(
					he(
						"InvalidStateError",
						"Can not call createAnswer in signalingState " + s.signalingState
					)
				);
			var u = I.writeSessionBoilerplate(
				s._sdpSessionId,
				s._sdpSessionVersion++
			);
			s.usingBundle &&
				(u +=
					"a=group:BUNDLE " +
					s.transceivers
						.map(function(d) {
							return d.mid;
						})
						.join(" ") +
					`\r
`),
				(u += `a=ice-options:trickle\r
`);
			var c = I.getMediaSections(s._remoteDescription.sdp).length;
			s.transceivers.forEach(function(d, g) {
				if (!(g + 1 > c)) {
					if (d.rejected) {
						d.kind === "application"
							? d.protocol === "DTLS/SCTP"
								? (u += `m=application 0 DTLS/SCTP 5000\r
`)
								: (u +=
										"m=application 0 " +
										d.protocol +
										` webrtc-datachannel\r
`)
							: d.kind === "audio"
							? (u += `m=audio 0 UDP/TLS/RTP/SAVPF 0\r
a=rtpmap:0 PCMU/8000\r
`)
							: d.kind === "video" &&
							  (u += `m=video 0 UDP/TLS/RTP/SAVPF 120\r
a=rtpmap:120 VP8/90000\r
`),
							(u +=
								`c=IN IP4 0.0.0.0\r
a=inactive\r
a=mid:` +
								d.mid +
								`\r
`);
						return;
					}
					if (d.stream) {
						var m;
						d.kind === "audio"
							? (m = d.stream.getAudioTracks()[0])
							: d.kind === "video" && (m = d.stream.getVideoTracks()[0]),
							m &&
								t >= 15019 &&
								d.kind === "video" &&
								!d.sendEncodingParameters[0].rtx &&
								(d.sendEncodingParameters[0].rtx = {
									ssrc: d.sendEncodingParameters[0].ssrc + 1,
								});
					}
					var y = si(d.localCapabilities, d.remoteCapabilities),
						P = y.codecs.filter(function(h) {
							return h.name.toLowerCase() === "rtx";
						}).length;
					!P &&
						d.sendEncodingParameters[0].rtx &&
						delete d.sendEncodingParameters[0].rtx,
						(u += Mu(d, y, "answer", d.stream, s._dtlsRole)),
						d.rtcpParameters &&
							d.rtcpParameters.reducedSize &&
							(u += `a=rtcp-rsize\r
`);
				}
			});
			var f = new e.RTCSessionDescription({ type: "answer", sdp: u });
			return Promise.resolve(f);
		}),
		(o.prototype.addIceCandidate = function(s) {
			var u = this,
				c;
			return s && !(s.sdpMLineIndex !== void 0 || s.sdpMid)
				? Promise.reject(new TypeError("sdpMLineIndex or sdpMid required"))
				: new Promise(function(f, d) {
						if (u._remoteDescription)
							if (!s || s.candidate === "")
								for (
									var g = 0;
									g < u.transceivers.length &&
									!(
										!u.transceivers[g].rejected &&
										(u.transceivers[g].iceTransport.addRemoteCandidate({}),
										(c = I.getMediaSections(u._remoteDescription.sdp)),
										(c[g] += `a=end-of-candidates\r
`),
										(u._remoteDescription.sdp =
											I.getDescription(u._remoteDescription.sdp) + c.join("")),
										u.usingBundle)
									);
									g++
								);
							else {
								var m = s.sdpMLineIndex;
								if (s.sdpMid) {
									for (var y = 0; y < u.transceivers.length; y++)
										if (u.transceivers[y].mid === s.sdpMid) {
											m = y;
											break;
										}
								}
								var P = u.transceivers[m];
								if (P) {
									if (P.rejected) return f();
									var h =
										Object.keys(s.candidate).length > 0
											? I.parseCandidate(s.candidate)
											: {};
									if (
										(h.protocol === "tcp" && (h.port === 0 || h.port === 9)) ||
										(h.component && h.component !== 1)
									)
										return f();
									if (
										(m === 0 ||
											(m > 0 &&
												P.iceTransport !== u.transceivers[0].iceTransport)) &&
										!Zo(P.iceTransport, h)
									)
										return d(he("OperationError", "Can not add ICE candidate"));
									var p = s.candidate.trim();
									p.indexOf("a=") === 0 && (p = p.substr(2)),
										(c = I.getMediaSections(u._remoteDescription.sdp)),
										(c[m] +=
											"a=" +
											(h.type ? p : "end-of-candidates") +
											`\r
`),
										(u._remoteDescription.sdp =
											I.getDescription(u._remoteDescription.sdp) + c.join(""));
								} else
									return d(he("OperationError", "Can not add ICE candidate"));
							}
						else
							return d(
								he(
									"InvalidStateError",
									"Can not add ICE candidate without a remote description"
								)
							);
						f();
				  });
		}),
		(o.prototype.getStats = function(s) {
			if (s && s instanceof e.MediaStreamTrack) {
				var u = null;
				if (
					(this.transceivers.forEach(function(f) {
						f.rtpSender && f.rtpSender.track === s
							? (u = f.rtpSender)
							: f.rtpReceiver &&
							  f.rtpReceiver.track === s &&
							  (u = f.rtpReceiver);
					}),
					!u)
				)
					throw he("InvalidAccessError", "Invalid selector.");
				return u.getStats();
			}
			var c = [];
			return (
				this.transceivers.forEach(function(f) {
					[
						"rtpSender",
						"rtpReceiver",
						"iceGatherer",
						"iceTransport",
						"dtlsTransport",
					].forEach(function(d) {
						f[d] && c.push(f[d].getStats());
					});
				}),
				Promise.all(c).then(function(f) {
					var d = new Map();
					return (
						f.forEach(function(g) {
							g.forEach(function(m) {
								d.set(m.id, m);
							});
						}),
						d
					);
				})
			);
		});
	var a = [
		"RTCRtpSender",
		"RTCRtpReceiver",
		"RTCIceGatherer",
		"RTCIceTransport",
		"RTCDtlsTransport",
	];
	a.forEach(function(s) {
		var u = e[s];
		if (u && u.prototype && u.prototype.getStats) {
			var c = u.prototype.getStats;
			u.prototype.getStats = function() {
				return c.apply(this).then(function(f) {
					var d = new Map();
					return (
						Object.keys(f).forEach(function(g) {
							(f[g].type = $v(f[g])), d.set(g, f[g]);
						}),
						d
					);
				});
			};
		}
	});
	var l = ["createOffer", "createAnswer"];
	return (
		l.forEach(function(s) {
			var u = o.prototype[s];
			o.prototype[s] = function() {
				var c = arguments;
				return typeof c[0] == "function" || typeof c[1] == "function"
					? u.apply(this, [arguments[2]]).then(
							function(f) {
								typeof c[0] == "function" && c[0].apply(null, [f]);
							},
							function(f) {
								typeof c[1] == "function" && c[1].apply(null, [f]);
							}
					  )
					: u.apply(this, arguments);
			};
		}),
		(l = ["setLocalDescription", "setRemoteDescription", "addIceCandidate"]),
		l.forEach(function(s) {
			var u = o.prototype[s];
			o.prototype[s] = function() {
				var c = arguments;
				return typeof c[1] == "function" || typeof c[2] == "function"
					? u.apply(this, arguments).then(
							function() {
								typeof c[1] == "function" && c[1].apply(null);
							},
							function(f) {
								typeof c[2] == "function" && c[2].apply(null, [f]);
							}
					  )
					: u.apply(this, arguments);
			};
		}),
		["getStats"].forEach(function(s) {
			var u = o.prototype[s];
			o.prototype[s] = function() {
				var c = arguments;
				return typeof c[1] == "function"
					? u.apply(this, arguments).then(function() {
							typeof c[1] == "function" && c[1].apply(null);
					  })
					: u.apply(this, arguments);
			};
		}),
		o
	);
};
const Wv = os(Gv);
function Ld(e) {
	const t = e && e.navigator,
		n = function(i) {
			return {
				name: { PermissionDeniedError: "NotAllowedError" }[i.name] || i.name,
				message: i.message,
				constraint: i.constraint,
				toString() {
					return this.name;
				},
			};
		},
		r = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
	t.mediaDevices.getUserMedia = function(i) {
		return r(i).catch((o) => Promise.reject(n(o)));
	};
}
function Nd(e) {
	"getDisplayMedia" in e.navigator &&
		e.navigator.mediaDevices &&
		((e.navigator.mediaDevices &&
			"getDisplayMedia" in e.navigator.mediaDevices) ||
			(e.navigator.mediaDevices.getDisplayMedia = e.navigator.getDisplayMedia.bind(
				e.navigator
			)));
}
function qa(e, t) {
	if (
		e.RTCIceGatherer &&
		(e.RTCIceCandidate ||
			(e.RTCIceCandidate = function(i) {
				return i;
			}),
		e.RTCSessionDescription ||
			(e.RTCSessionDescription = function(i) {
				return i;
			}),
		t.version < 15025)
	) {
		const r = Object.getOwnPropertyDescriptor(
			e.MediaStreamTrack.prototype,
			"enabled"
		);
		Object.defineProperty(e.MediaStreamTrack.prototype, "enabled", {
			set(i) {
				r.set.call(this, i);
				const o = new Event("enabled");
				(o.enabled = i), this.dispatchEvent(o);
			},
		});
	}
	e.RTCRtpSender &&
		!("dtmf" in e.RTCRtpSender.prototype) &&
		Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
			get() {
				return (
					this._dtmf === void 0 &&
						(this.track.kind === "audio"
							? (this._dtmf = new e.RTCDtmfSender(this))
							: this.track.kind === "video" && (this._dtmf = null)),
					this._dtmf
				);
			},
		}),
		e.RTCDtmfSender && !e.RTCDTMFSender && (e.RTCDTMFSender = e.RTCDtmfSender);
	const n = Wv(e, t.version);
	(e.RTCPeerConnection = function(i) {
		return (
			i &&
				i.iceServers &&
				((i.iceServers = Uv(i.iceServers, t.version)),
				rl("ICE servers after filtering:", i.iceServers)),
			new n(i)
		);
	}),
		(e.RTCPeerConnection.prototype = n.prototype);
}
function zd(e) {
	e.RTCRtpSender &&
		!("replaceTrack" in e.RTCRtpSender.prototype) &&
		(e.RTCRtpSender.prototype.replaceTrack = e.RTCRtpSender.prototype.setTrack);
}
const ju = Object.freeze(
	Object.defineProperty(
		{
			__proto__: null,
			shimGetDisplayMedia: Nd,
			shimGetUserMedia: Ld,
			shimPeerConnection: qa,
			shimReplaceTrack: zd,
		},
		Symbol.toStringTag,
		{ value: "Module" }
	)
);
function Bd(e, t) {
	const n = e && e.navigator,
		r = e && e.MediaStreamTrack;
	if (
		((n.getUserMedia = function(i, o, a) {
			ko("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"),
				n.mediaDevices.getUserMedia(i).then(o, a);
		}),
		!(
			t.version > 55 &&
			"autoGainControl" in n.mediaDevices.getSupportedConstraints()
		))
	) {
		const i = function(a, l, s) {
				l in a && !(s in a) && ((a[s] = a[l]), delete a[l]);
			},
			o = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
		if (
			((n.mediaDevices.getUserMedia = function(a) {
				return (
					typeof a == "object" &&
						typeof a.audio == "object" &&
						((a = JSON.parse(JSON.stringify(a))),
						i(a.audio, "autoGainControl", "mozAutoGainControl"),
						i(a.audio, "noiseSuppression", "mozNoiseSuppression")),
					o(a)
				);
			}),
			r && r.prototype.getSettings)
		) {
			const a = r.prototype.getSettings;
			r.prototype.getSettings = function() {
				const l = a.apply(this, arguments);
				return (
					i(l, "mozAutoGainControl", "autoGainControl"),
					i(l, "mozNoiseSuppression", "noiseSuppression"),
					l
				);
			};
		}
		if (r && r.prototype.applyConstraints) {
			const a = r.prototype.applyConstraints;
			r.prototype.applyConstraints = function(l) {
				return (
					this.kind === "audio" &&
						typeof l == "object" &&
						((l = JSON.parse(JSON.stringify(l))),
						i(l, "autoGainControl", "mozAutoGainControl"),
						i(l, "noiseSuppression", "mozNoiseSuppression")),
					a.apply(this, [l])
				);
			};
		}
	}
}
function Hv(e, t) {
	(e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices) ||
		(e.navigator.mediaDevices &&
			(e.navigator.mediaDevices.getDisplayMedia = function(r) {
				if (!(r && r.video)) {
					const i = new DOMException(
						"getDisplayMedia without video constraints is undefined"
					);
					return (i.name = "NotFoundError"), (i.code = 8), Promise.reject(i);
				}
				return (
					r.video === !0
						? (r.video = { mediaSource: t })
						: (r.video.mediaSource = t),
					e.navigator.mediaDevices.getUserMedia(r)
				);
			}));
}
function Fd(e) {
	typeof e == "object" &&
		e.RTCTrackEvent &&
		"receiver" in e.RTCTrackEvent.prototype &&
		!("transceiver" in e.RTCTrackEvent.prototype) &&
		Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
			get() {
				return { receiver: this.receiver };
			},
		});
}
function es(e, t) {
	if (typeof e != "object" || !(e.RTCPeerConnection || e.mozRTCPeerConnection))
		return;
	!e.RTCPeerConnection &&
		e.mozRTCPeerConnection &&
		(e.RTCPeerConnection = e.mozRTCPeerConnection),
		t.version < 53 &&
			[
				"setLocalDescription",
				"setRemoteDescription",
				"addIceCandidate",
			].forEach(function(i) {
				const o = e.RTCPeerConnection.prototype[i],
					a = {
						[i]() {
							return (
								(arguments[0] = new (i === "addIceCandidate"
									? e.RTCIceCandidate
									: e.RTCSessionDescription)(arguments[0])),
								o.apply(this, arguments)
							);
						},
					};
				e.RTCPeerConnection.prototype[i] = a[i];
			});
	const n = {
			inboundrtp: "inbound-rtp",
			outboundrtp: "outbound-rtp",
			candidatepair: "candidate-pair",
			localcandidate: "local-candidate",
			remotecandidate: "remote-candidate",
		},
		r = e.RTCPeerConnection.prototype.getStats;
	e.RTCPeerConnection.prototype.getStats = function() {
		const [o, a, l] = arguments;
		return r
			.apply(this, [o || null])
			.then((s) => {
				if (t.version < 53 && !a)
					try {
						s.forEach((u) => {
							u.type = n[u.type] || u.type;
						});
					} catch (u) {
						if (u.name !== "TypeError") throw u;
						s.forEach((c, f) => {
							s.set(f, Object.assign({}, c, { type: n[c.type] || c.type }));
						});
					}
				return s;
			})
			.then(a, l);
	};
}
function Ad(e) {
	if (
		!(typeof e == "object" && e.RTCPeerConnection && e.RTCRtpSender) ||
		(e.RTCRtpSender && "getStats" in e.RTCRtpSender.prototype)
	)
		return;
	const t = e.RTCPeerConnection.prototype.getSenders;
	t &&
		(e.RTCPeerConnection.prototype.getSenders = function() {
			const i = t.apply(this, []);
			return i.forEach((o) => (o._pc = this)), i;
		});
	const n = e.RTCPeerConnection.prototype.addTrack;
	n &&
		(e.RTCPeerConnection.prototype.addTrack = function() {
			const i = n.apply(this, arguments);
			return (i._pc = this), i;
		}),
		(e.RTCRtpSender.prototype.getStats = function() {
			return this.track
				? this._pc.getStats(this.track)
				: Promise.resolve(new Map());
		});
}
function Ud(e) {
	if (
		!(typeof e == "object" && e.RTCPeerConnection && e.RTCRtpSender) ||
		(e.RTCRtpSender && "getStats" in e.RTCRtpReceiver.prototype)
	)
		return;
	const t = e.RTCPeerConnection.prototype.getReceivers;
	t &&
		(e.RTCPeerConnection.prototype.getReceivers = function() {
			const r = t.apply(this, []);
			return r.forEach((i) => (i._pc = this)), r;
		}),
		Un(e, "track", (n) => ((n.receiver._pc = n.srcElement), n)),
		(e.RTCRtpReceiver.prototype.getStats = function() {
			return this._pc.getStats(this.track);
		});
}
function $d(e) {
	!e.RTCPeerConnection ||
		"removeStream" in e.RTCPeerConnection.prototype ||
		(e.RTCPeerConnection.prototype.removeStream = function(n) {
			ko("removeStream", "removeTrack"),
				this.getSenders().forEach((r) => {
					r.track && n.getTracks().includes(r.track) && this.removeTrack(r);
				});
		});
}
function Vd(e) {
	e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel);
}
function Gd(e) {
	if (!(typeof e == "object" && e.RTCPeerConnection)) return;
	const t = e.RTCPeerConnection.prototype.addTransceiver;
	t &&
		(e.RTCPeerConnection.prototype.addTransceiver = function() {
			this.setParametersPromises = [];
			const r = arguments[1],
				i = r && "sendEncodings" in r;
			i &&
				r.sendEncodings.forEach((a) => {
					if ("rid" in a && !/^[a-z0-9]{0,16}$/i.test(a.rid))
						throw new TypeError("Invalid RID value provided.");
					if (
						"scaleResolutionDownBy" in a &&
						!(parseFloat(a.scaleResolutionDownBy) >= 1)
					)
						throw new RangeError("scale_resolution_down_by must be >= 1.0");
					if ("maxFramerate" in a && !(parseFloat(a.maxFramerate) >= 0))
						throw new RangeError("max_framerate must be >= 0.0");
				});
			const o = t.apply(this, arguments);
			if (i) {
				const { sender: a } = o,
					l = a.getParameters();
				(!("encodings" in l) ||
					(l.encodings.length === 1 &&
						Object.keys(l.encodings[0]).length === 0)) &&
					((l.encodings = r.sendEncodings),
					(a.sendEncodings = r.sendEncodings),
					this.setParametersPromises.push(
						a
							.setParameters(l)
							.then(() => {
								delete a.sendEncodings;
							})
							.catch(() => {
								delete a.sendEncodings;
							})
					));
			}
			return o;
		});
}
function Wd(e) {
	if (!(typeof e == "object" && e.RTCRtpSender)) return;
	const t = e.RTCRtpSender.prototype.getParameters;
	t &&
		(e.RTCRtpSender.prototype.getParameters = function() {
			const r = t.apply(this, arguments);
			return (
				"encodings" in r ||
					(r.encodings = [].concat(this.sendEncodings || [{}])),
				r
			);
		});
}
function Hd(e) {
	if (!(typeof e == "object" && e.RTCPeerConnection)) return;
	const t = e.RTCPeerConnection.prototype.createOffer;
	e.RTCPeerConnection.prototype.createOffer = function() {
		return this.setParametersPromises && this.setParametersPromises.length
			? Promise.all(this.setParametersPromises)
					.then(() => t.apply(this, arguments))
					.finally(() => {
						this.setParametersPromises = [];
					})
			: t.apply(this, arguments);
	};
}
function Qd(e) {
	if (!(typeof e == "object" && e.RTCPeerConnection)) return;
	const t = e.RTCPeerConnection.prototype.createAnswer;
	e.RTCPeerConnection.prototype.createAnswer = function() {
		return this.setParametersPromises && this.setParametersPromises.length
			? Promise.all(this.setParametersPromises)
					.then(() => t.apply(this, arguments))
					.finally(() => {
						this.setParametersPromises = [];
					})
			: t.apply(this, arguments);
	};
}
const bu = Object.freeze(
	Object.defineProperty(
		{
			__proto__: null,
			shimAddTransceiver: Gd,
			shimCreateAnswer: Qd,
			shimCreateOffer: Hd,
			shimGetDisplayMedia: Hv,
			shimGetParameters: Wd,
			shimGetUserMedia: Bd,
			shimOnTrack: Fd,
			shimPeerConnection: es,
			shimRTCDataChannel: Vd,
			shimReceiverGetStats: Ud,
			shimRemoveStream: $d,
			shimSenderGetStats: Ad,
		},
		Symbol.toStringTag,
		{ value: "Module" }
	)
);
function Jd(e) {
	if (!(typeof e != "object" || !e.RTCPeerConnection)) {
		if (
			("getLocalStreams" in e.RTCPeerConnection.prototype ||
				(e.RTCPeerConnection.prototype.getLocalStreams = function() {
					return (
						this._localStreams || (this._localStreams = []), this._localStreams
					);
				}),
			!("addStream" in e.RTCPeerConnection.prototype))
		) {
			const t = e.RTCPeerConnection.prototype.addTrack;
			(e.RTCPeerConnection.prototype.addStream = function(r) {
				this._localStreams || (this._localStreams = []),
					this._localStreams.includes(r) || this._localStreams.push(r),
					r.getAudioTracks().forEach((i) => t.call(this, i, r)),
					r.getVideoTracks().forEach((i) => t.call(this, i, r));
			}),
				(e.RTCPeerConnection.prototype.addTrack = function(r, ...i) {
					return (
						i &&
							i.forEach((o) => {
								this._localStreams
									? this._localStreams.includes(o) || this._localStreams.push(o)
									: (this._localStreams = [o]);
							}),
						t.apply(this, arguments)
					);
				});
		}
		"removeStream" in e.RTCPeerConnection.prototype ||
			(e.RTCPeerConnection.prototype.removeStream = function(n) {
				this._localStreams || (this._localStreams = []);
				const r = this._localStreams.indexOf(n);
				if (r === -1) return;
				this._localStreams.splice(r, 1);
				const i = n.getTracks();
				this.getSenders().forEach((o) => {
					i.includes(o.track) && this.removeTrack(o);
				});
			});
	}
}
function Kd(e) {
	if (
		!(typeof e != "object" || !e.RTCPeerConnection) &&
		("getRemoteStreams" in e.RTCPeerConnection.prototype ||
			(e.RTCPeerConnection.prototype.getRemoteStreams = function() {
				return this._remoteStreams ? this._remoteStreams : [];
			}),
		!("onaddstream" in e.RTCPeerConnection.prototype))
	) {
		Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", {
			get() {
				return this._onaddstream;
			},
			set(n) {
				this._onaddstream &&
					(this.removeEventListener("addstream", this._onaddstream),
					this.removeEventListener("track", this._onaddstreampoly)),
					this.addEventListener("addstream", (this._onaddstream = n)),
					this.addEventListener(
						"track",
						(this._onaddstreampoly = (r) => {
							r.streams.forEach((i) => {
								if (
									(this._remoteStreams || (this._remoteStreams = []),
									this._remoteStreams.includes(i))
								)
									return;
								this._remoteStreams.push(i);
								const o = new Event("addstream");
								(o.stream = i), this.dispatchEvent(o);
							});
						})
					);
			},
		});
		const t = e.RTCPeerConnection.prototype.setRemoteDescription;
		e.RTCPeerConnection.prototype.setRemoteDescription = function() {
			const r = this;
			return (
				this._onaddstreampoly ||
					this.addEventListener(
						"track",
						(this._onaddstreampoly = function(i) {
							i.streams.forEach((o) => {
								if (
									(r._remoteStreams || (r._remoteStreams = []),
									r._remoteStreams.indexOf(o) >= 0)
								)
									return;
								r._remoteStreams.push(o);
								const a = new Event("addstream");
								(a.stream = o), r.dispatchEvent(a);
							});
						})
					),
				t.apply(r, arguments)
			);
		};
	}
}
function Yd(e) {
	if (typeof e != "object" || !e.RTCPeerConnection) return;
	const t = e.RTCPeerConnection.prototype,
		n = t.createOffer,
		r = t.createAnswer,
		i = t.setLocalDescription,
		o = t.setRemoteDescription,
		a = t.addIceCandidate;
	(t.createOffer = function(u, c) {
		const f = arguments.length >= 2 ? arguments[2] : arguments[0],
			d = n.apply(this, [f]);
		return c ? (d.then(u, c), Promise.resolve()) : d;
	}),
		(t.createAnswer = function(u, c) {
			const f = arguments.length >= 2 ? arguments[2] : arguments[0],
				d = r.apply(this, [f]);
			return c ? (d.then(u, c), Promise.resolve()) : d;
		});
	let l = function(s, u, c) {
		const f = i.apply(this, [s]);
		return c ? (f.then(u, c), Promise.resolve()) : f;
	};
	(t.setLocalDescription = l),
		(l = function(s, u, c) {
			const f = o.apply(this, [s]);
			return c ? (f.then(u, c), Promise.resolve()) : f;
		}),
		(t.setRemoteDescription = l),
		(l = function(s, u, c) {
			const f = a.apply(this, [s]);
			return c ? (f.then(u, c), Promise.resolve()) : f;
		}),
		(t.addIceCandidate = l);
}
function Xd(e) {
	const t = e && e.navigator;
	if (t.mediaDevices && t.mediaDevices.getUserMedia) {
		const n = t.mediaDevices,
			r = n.getUserMedia.bind(n);
		t.mediaDevices.getUserMedia = (i) => r(Zd(i));
	}
	!t.getUserMedia &&
		t.mediaDevices &&
		t.mediaDevices.getUserMedia &&
		(t.getUserMedia = function(r, i, o) {
			t.mediaDevices.getUserMedia(r).then(i, o);
		}.bind(t));
}
function Zd(e) {
	return e && e.video !== void 0
		? Object.assign({}, e, { video: Ed(e.video) })
		: e;
}
function qd(e) {
	if (!e.RTCPeerConnection) return;
	const t = e.RTCPeerConnection;
	(e.RTCPeerConnection = function(r, i) {
		if (r && r.iceServers) {
			const o = [];
			for (let a = 0; a < r.iceServers.length; a++) {
				let l = r.iceServers[a];
				!l.hasOwnProperty("urls") && l.hasOwnProperty("url")
					? (ko("RTCIceServer.url", "RTCIceServer.urls"),
					  (l = JSON.parse(JSON.stringify(l))),
					  (l.urls = l.url),
					  delete l.url,
					  o.push(l))
					: o.push(r.iceServers[a]);
			}
			r.iceServers = o;
		}
		return new t(r, i);
	}),
		(e.RTCPeerConnection.prototype = t.prototype),
		"generateCertificate" in t &&
			Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
				get() {
					return t.generateCertificate;
				},
			});
}
function ep(e) {
	typeof e == "object" &&
		e.RTCTrackEvent &&
		"receiver" in e.RTCTrackEvent.prototype &&
		!("transceiver" in e.RTCTrackEvent.prototype) &&
		Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
			get() {
				return { receiver: this.receiver };
			},
		});
}
function tp(e) {
	const t = e.RTCPeerConnection.prototype.createOffer;
	e.RTCPeerConnection.prototype.createOffer = function(r) {
		if (r) {
			typeof r.offerToReceiveAudio < "u" &&
				(r.offerToReceiveAudio = !!r.offerToReceiveAudio);
			const i = this.getTransceivers().find(
				(a) => a.receiver.track.kind === "audio"
			);
			r.offerToReceiveAudio === !1 && i
				? i.direction === "sendrecv"
					? i.setDirection
						? i.setDirection("sendonly")
						: (i.direction = "sendonly")
					: i.direction === "recvonly" &&
					  (i.setDirection
							? i.setDirection("inactive")
							: (i.direction = "inactive"))
				: r.offerToReceiveAudio === !0 && !i && this.addTransceiver("audio"),
				typeof r.offerToReceiveVideo < "u" &&
					(r.offerToReceiveVideo = !!r.offerToReceiveVideo);
			const o = this.getTransceivers().find(
				(a) => a.receiver.track.kind === "video"
			);
			r.offerToReceiveVideo === !1 && o
				? o.direction === "sendrecv"
					? o.setDirection
						? o.setDirection("sendonly")
						: (o.direction = "sendonly")
					: o.direction === "recvonly" &&
					  (o.setDirection
							? o.setDirection("inactive")
							: (o.direction = "inactive"))
				: r.offerToReceiveVideo === !0 && !o && this.addTransceiver("video");
		}
		return t.apply(this, arguments);
	};
}
function np(e) {
	typeof e != "object" ||
		e.AudioContext ||
		(e.AudioContext = e.webkitAudioContext);
}
const Lu = Object.freeze(
	Object.defineProperty(
		{
			__proto__: null,
			shimAudioContext: np,
			shimCallbacksAPI: Yd,
			shimConstraints: Zd,
			shimCreateOfferLegacy: tp,
			shimGetUserMedia: Xd,
			shimLocalStreamsAPI: Jd,
			shimRTCIceServerUrls: qd,
			shimRemoteStreamsAPI: Kd,
			shimTrackEventTransceiver: ep,
		},
		Symbol.toStringTag,
		{ value: "Module" }
	)
);
function Ti(e) {
	if (
		!e.RTCIceCandidate ||
		(e.RTCIceCandidate && "foundation" in e.RTCIceCandidate.prototype)
	)
		return;
	const t = e.RTCIceCandidate;
	(e.RTCIceCandidate = function(r) {
		if (
			(typeof r == "object" &&
				r.candidate &&
				r.candidate.indexOf("a=") === 0 &&
				((r = JSON.parse(JSON.stringify(r))),
				(r.candidate = r.candidate.substr(2))),
			r.candidate && r.candidate.length)
		) {
			const i = new t(r),
				o = Ei.parseCandidate(r.candidate),
				a = Object.assign(i, o);
			return (
				(a.toJSON = function() {
					return {
						candidate: a.candidate,
						sdpMid: a.sdpMid,
						sdpMLineIndex: a.sdpMLineIndex,
						usernameFragment: a.usernameFragment,
					};
				}),
				a
			);
		}
		return new t(r);
	}),
		(e.RTCIceCandidate.prototype = t.prototype),
		Un(
			e,
			"icecandidate",
			(n) => (
				n.candidate &&
					Object.defineProperty(n, "candidate", {
						value: new e.RTCIceCandidate(n.candidate),
						writable: "false",
					}),
				n
			)
		);
}
function ir(e, t) {
	if (!e.RTCPeerConnection) return;
	"sctp" in e.RTCPeerConnection.prototype ||
		Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
			get() {
				return typeof this._sctp > "u" ? null : this._sctp;
			},
		});
	const n = function(l) {
			if (!l || !l.sdp) return !1;
			const s = Ei.splitSections(l.sdp);
			return (
				s.shift(),
				s.some((u) => {
					const c = Ei.parseMLine(u);
					return (
						c && c.kind === "application" && c.protocol.indexOf("SCTP") !== -1
					);
				})
			);
		},
		r = function(l) {
			const s = l.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
			if (s === null || s.length < 2) return -1;
			const u = parseInt(s[1], 10);
			return u !== u ? -1 : u;
		},
		i = function(l) {
			let s = 65536;
			return (
				t.browser === "firefox" &&
					(t.version < 57
						? l === -1
							? (s = 16384)
							: (s = 2147483637)
						: t.version < 60
						? (s = t.version === 57 ? 65535 : 65536)
						: (s = 2147483637)),
				s
			);
		},
		o = function(l, s) {
			let u = 65536;
			t.browser === "firefox" && t.version === 57 && (u = 65535);
			const c = Ei.matchPrefix(l.sdp, "a=max-message-size:");
			return (
				c.length > 0
					? (u = parseInt(c[0].substr(19), 10))
					: t.browser === "firefox" && s !== -1 && (u = 2147483637),
				u
			);
		},
		a = e.RTCPeerConnection.prototype.setRemoteDescription;
	e.RTCPeerConnection.prototype.setRemoteDescription = function() {
		if (((this._sctp = null), t.browser === "chrome" && t.version >= 76)) {
			const { sdpSemantics: s } = this.getConfiguration();
			s === "plan-b" &&
				Object.defineProperty(this, "sctp", {
					get() {
						return typeof this._sctp > "u" ? null : this._sctp;
					},
					enumerable: !0,
					configurable: !0,
				});
		}
		if (n(arguments[0])) {
			const s = r(arguments[0]),
				u = i(s),
				c = o(arguments[0], s);
			let f;
			u === 0 && c === 0
				? (f = Number.POSITIVE_INFINITY)
				: u === 0 || c === 0
				? (f = Math.max(u, c))
				: (f = Math.min(u, c));
			const d = {};
			Object.defineProperty(d, "maxMessageSize", {
				get() {
					return f;
				},
			}),
				(this._sctp = d);
		}
		return a.apply(this, arguments);
	};
}
function or(e) {
	if (
		!(
			e.RTCPeerConnection &&
			"createDataChannel" in e.RTCPeerConnection.prototype
		)
	)
		return;
	function t(r, i) {
		const o = r.send;
		r.send = function() {
			const l = arguments[0],
				s = l.length || l.size || l.byteLength;
			if (r.readyState === "open" && i.sctp && s > i.sctp.maxMessageSize)
				throw new TypeError(
					"Message too large (can send a maximum of " +
						i.sctp.maxMessageSize +
						" bytes)"
				);
			return o.apply(r, arguments);
		};
	}
	const n = e.RTCPeerConnection.prototype.createDataChannel;
	(e.RTCPeerConnection.prototype.createDataChannel = function() {
		const i = n.apply(this, arguments);
		return t(i, this), i;
	}),
		Un(e, "datachannel", (r) => (t(r.channel, r.target), r));
}
function ts(e) {
	if (
		!e.RTCPeerConnection ||
		"connectionState" in e.RTCPeerConnection.prototype
	)
		return;
	const t = e.RTCPeerConnection.prototype;
	Object.defineProperty(t, "connectionState", {
		get() {
			return (
				{ completed: "connected", checking: "connecting" }[
					this.iceConnectionState
				] || this.iceConnectionState
			);
		},
		enumerable: !0,
		configurable: !0,
	}),
		Object.defineProperty(t, "onconnectionstatechange", {
			get() {
				return this._onconnectionstatechange || null;
			},
			set(n) {
				this._onconnectionstatechange &&
					(this.removeEventListener(
						"connectionstatechange",
						this._onconnectionstatechange
					),
					delete this._onconnectionstatechange),
					n &&
						this.addEventListener(
							"connectionstatechange",
							(this._onconnectionstatechange = n)
						);
			},
			enumerable: !0,
			configurable: !0,
		}),
		["setLocalDescription", "setRemoteDescription"].forEach((n) => {
			const r = t[n];
			t[n] = function() {
				return (
					this._connectionstatechangepoly ||
						((this._connectionstatechangepoly = (i) => {
							const o = i.target;
							if (o._lastConnectionState !== o.connectionState) {
								o._lastConnectionState = o.connectionState;
								const a = new Event("connectionstatechange", i);
								o.dispatchEvent(a);
							}
							return i;
						}),
						this.addEventListener(
							"iceconnectionstatechange",
							this._connectionstatechangepoly
						)),
					r.apply(this, arguments)
				);
			};
		});
}
function ns(e, t) {
	if (
		!e.RTCPeerConnection ||
		(t.browser === "chrome" && t.version >= 71) ||
		(t.browser === "safari" && t.version >= 605)
	)
		return;
	const n = e.RTCPeerConnection.prototype.setRemoteDescription;
	e.RTCPeerConnection.prototype.setRemoteDescription = function(i) {
		if (
			i &&
			i.sdp &&
			i.sdp.indexOf(`
a=extmap-allow-mixed`) !== -1
		) {
			const o = i.sdp
				.split(
					`
`
				)
				.filter((a) => a.trim() !== "a=extmap-allow-mixed").join(`
`);
			e.RTCSessionDescription && i instanceof e.RTCSessionDescription
				? (arguments[0] = new e.RTCSessionDescription({ type: i.type, sdp: o }))
				: (i.sdp = o);
		}
		return n.apply(this, arguments);
	};
}
function xi(e, t) {
	if (!(e.RTCPeerConnection && e.RTCPeerConnection.prototype)) return;
	const n = e.RTCPeerConnection.prototype.addIceCandidate;
	!n ||
		n.length === 0 ||
		(e.RTCPeerConnection.prototype.addIceCandidate = function() {
			return arguments[0]
				? ((t.browser === "chrome" && t.version < 78) ||
						(t.browser === "firefox" && t.version < 68) ||
						t.browser === "safari") &&
				  arguments[0] &&
				  arguments[0].candidate === ""
					? Promise.resolve()
					: n.apply(this, arguments)
				: (arguments[1] && arguments[1].apply(null), Promise.resolve());
		});
}
const Qv = Object.freeze(
	Object.defineProperty(
		{
			__proto__: null,
			removeExtmapAllowMixed: ns,
			shimAddIceCandidateNullOrEmpty: xi,
			shimConnectionState: ts,
			shimMaxMessageSize: ir,
			shimRTCIceCandidate: Ti,
			shimSendThrowTypeError: or,
		},
		Symbol.toStringTag,
		{ value: "Module" }
	)
);
function Jv(
	{ window: e } = {},
	t = { shimChrome: !0, shimFirefox: !0, shimEdge: !0, shimSafari: !0 }
) {
	const n = rl,
		r = Fv(e),
		i = {
			browserDetails: r,
			commonShim: Qv,
			extractVersion: rr,
			disableLog: zv,
			disableWarnings: Bv,
		};
	switch (r.browser) {
		case "chrome":
			if (!Du || !Za || !t.shimChrome)
				return n("Chrome shim is not included in this adapter release."), i;
			if (r.version === null)
				return n("Chrome shim can not determine version, not shimming."), i;
			n("adapter.js shimming chrome."),
				(i.browserShim = Du),
				xi(e, r),
				Td(e, r),
				xd(e),
				Za(e, r),
				Pd(e),
				Md(e, r),
				Rd(e),
				wd(e),
				Od(e),
				Id(e, r),
				Ti(e),
				ts(e),
				ir(e, r),
				or(e),
				ns(e, r);
			break;
		case "firefox":
			if (!bu || !es || !t.shimFirefox)
				return n("Firefox shim is not included in this adapter release."), i;
			n("adapter.js shimming firefox."),
				(i.browserShim = bu),
				xi(e, r),
				Bd(e, r),
				es(e, r),
				Fd(e),
				$d(e),
				Ad(e),
				Ud(e),
				Vd(e),
				Gd(e),
				Wd(e),
				Hd(e),
				Qd(e),
				Ti(e),
				ts(e),
				ir(e, r),
				or(e);
			break;
		case "edge":
			if (!ju || !qa || !t.shimEdge)
				return n("MS edge shim is not included in this adapter release."), i;
			n("adapter.js shimming edge."),
				(i.browserShim = ju),
				Ld(e),
				Nd(e),
				qa(e, r),
				zd(e),
				ir(e, r),
				or(e);
			break;
		case "safari":
			if (!Lu || !t.shimSafari)
				return n("Safari shim is not included in this adapter release."), i;
			n("adapter.js shimming safari."),
				(i.browserShim = Lu),
				xi(e, r),
				qd(e),
				tp(e),
				Yd(e),
				Jd(e),
				Kd(e),
				ep(e),
				Xd(e),
				np(e),
				Ti(e),
				ir(e, r),
				or(e),
				ns(e, r);
			break;
		default:
			n("Unsupported browser!");
			break;
	}
	return i;
}
const Nu = Jv({ window: typeof window > "u" ? void 0 : window });
function ot(e, t, n, r) {
	Object.defineProperty(e, t, {
		get: n,
		set: r,
		enumerable: !0,
		configurable: !0,
	});
}
var qo = Nu.default || Nu,
	Xn = new ((function() {
		function e() {
			(this.isIOS = ["iPad", "iPhone", "iPod"].includes(navigator.platform)),
				(this.supportedBrowsers = ["firefox", "chrome", "safari"]),
				(this.minFirefoxVersion = 59),
				(this.minChromeVersion = 72),
				(this.minSafariVersion = 605);
		}
		return (
			(e.prototype.isWebRTCSupported = function() {
				return typeof RTCPeerConnection < "u";
			}),
			(e.prototype.isBrowserSupported = function() {
				var t = this.getBrowser(),
					n = this.getVersion(),
					r = this.supportedBrowsers.includes(t);
				return r
					? t === "chrome"
						? n >= this.minChromeVersion
						: t === "firefox"
						? n >= this.minFirefoxVersion
						: t === "safari"
						? !this.isIOS && n >= this.minSafariVersion
						: !1
					: !1;
			}),
			(e.prototype.getBrowser = function() {
				return qo.browserDetails.browser;
			}),
			(e.prototype.getVersion = function() {
				return qo.browserDetails.version || 0;
			}),
			(e.prototype.isUnifiedPlanSupported = function() {
				var t = this.getBrowser(),
					n = qo.browserDetails.version || 0;
				if (t === "chrome" && n < this.minChromeVersion) return !1;
				if (t === "firefox" && n >= this.minFirefoxVersion) return !0;
				if (
					!window.RTCRtpTransceiver ||
					!("currentDirection" in RTCRtpTransceiver.prototype)
				)
					return !1;
				var r,
					i = !1;
				try {
					(r = new RTCPeerConnection()), r.addTransceiver("audio"), (i = !0);
				} catch {
				} finally {
					r && r.close();
				}
				return i;
			}),
			(e.prototype.toString = function() {
				return `Supports:
    browser:`
					.concat(
						this.getBrowser(),
						`
    version:`
					)
					.concat(
						this.getVersion(),
						`
    isIOS:`
					)
					.concat(
						this.isIOS,
						`
    isWebRTCSupported:`
					)
					.concat(
						this.isWebRTCSupported(),
						`
    isBrowserSupported:`
					)
					.concat(
						this.isBrowserSupported(),
						`
    isUnifiedPlanSupported:`
					)
					.concat(this.isUnifiedPlanSupported());
			}),
			e
		);
	})())(),
	zu = {
		iceServers: [
			{ urls: "stun:stun.l.google.com:19302" },
			{
				urls: [
					"turn:eu-0.turn.peerjs.com:3478",
					"turn:us-0.turn.peerjs.com:3478",
				],
				username: "peerjs",
				credential: "peerjsp",
			},
		],
		sdpSemantics: "unified-plan",
	},
	Kv = (function() {
		function e() {
			(this.CLOUD_HOST = "0.peerjs.com"),
				(this.CLOUD_PORT = 443),
				(this.chunkedBrowsers = { Chrome: 1, chrome: 1 }),
				(this.chunkedMTU = 16300),
				(this.defaultConfig = zu),
				(this.browser = Xn.getBrowser()),
				(this.browserVersion = Xn.getVersion()),
				(this.supports = (function() {
					var t = {
						browser: Xn.isBrowserSupported(),
						webRTC: Xn.isWebRTCSupported(),
						audioVideo: !1,
						data: !1,
						binaryBlob: !1,
						reliable: !1,
					};
					if (!t.webRTC) return t;
					var n;
					try {
						(n = new RTCPeerConnection(zu)), (t.audioVideo = !0);
						var r = void 0;
						try {
							(r = n.createDataChannel("_PEERJSTEST", { ordered: !0 })),
								(t.data = !0),
								(t.reliable = !!r.ordered);
							try {
								(r.binaryType = "blob"), (t.binaryBlob = !Xn.isIOS);
							} catch {}
						} catch {
						} finally {
							r && r.close();
						}
					} catch {
					} finally {
						n && n.close();
					}
					return t;
				})()),
				(this.pack = Pu.pack),
				(this.unpack = Pu.unpack),
				(this._dataCount = 1);
		}
		return (
			(e.prototype.noop = function() {}),
			(e.prototype.validateId = function(t) {
				return !t || /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(t);
			}),
			(e.prototype.chunk = function(t) {
				for (
					var n = [], r = t.size, i = Math.ceil(r / z.chunkedMTU), o = 0, a = 0;
					a < r;

				) {
					var l = Math.min(r, a + z.chunkedMTU),
						s = t.slice(a, l),
						u = { __peerData: this._dataCount, n: o, data: s, total: i };
					n.push(u), (a = l), o++;
				}
				return this._dataCount++, n;
			}),
			(e.prototype.blobToArrayBuffer = function(t, n) {
				var r = new FileReader();
				return (
					(r.onload = function(i) {
						i.target && n(i.target.result);
					}),
					r.readAsArrayBuffer(t),
					r
				);
			}),
			(e.prototype.binaryStringToArrayBuffer = function(t) {
				for (var n = new Uint8Array(t.length), r = 0; r < t.length; r++)
					n[r] = t.charCodeAt(r) & 255;
				return n.buffer;
			}),
			(e.prototype.randomToken = function() {
				return Math.random()
					.toString(36)
					.slice(2);
			}),
			(e.prototype.isSecure = function() {
				return location.protocol === "https:";
			}),
			e
		);
	})(),
	z = new Kv(),
	rp = {};
ot(
	rp,
	"Peer",
	() => eo,
	(e) => (eo = e)
);
var $r = {},
	Yv = Object.prototype.hasOwnProperty,
	Ce = "~";
function Lr() {}
Object.create &&
	((Lr.prototype = Object.create(null)), new Lr().__proto__ || (Ce = !1));
function Xv(e, t, n) {
	(this.fn = e), (this.context = t), (this.once = n || !1);
}
function ip(e, t, n, r, i) {
	if (typeof n != "function")
		throw new TypeError("The listener must be a function");
	var o = new Xv(n, r || e, i),
		a = Ce ? Ce + t : t;
	return (
		e._events[a]
			? e._events[a].fn
				? (e._events[a] = [e._events[a], o])
				: e._events[a].push(o)
			: ((e._events[a] = o), e._eventsCount++),
		e
	);
}
function Pi(e, t) {
	--e._eventsCount === 0 ? (e._events = new Lr()) : delete e._events[t];
}
function ge() {
	(this._events = new Lr()), (this._eventsCount = 0);
}
ge.prototype.eventNames = function() {
	var t = [],
		n,
		r;
	if (this._eventsCount === 0) return t;
	for (r in (n = this._events)) Yv.call(n, r) && t.push(Ce ? r.slice(1) : r);
	return Object.getOwnPropertySymbols
		? t.concat(Object.getOwnPropertySymbols(n))
		: t;
};
ge.prototype.listeners = function(t) {
	var n = Ce ? Ce + t : t,
		r = this._events[n];
	if (!r) return [];
	if (r.fn) return [r.fn];
	for (var i = 0, o = r.length, a = new Array(o); i < o; i++) a[i] = r[i].fn;
	return a;
};
ge.prototype.listenerCount = function(t) {
	var n = Ce ? Ce + t : t,
		r = this._events[n];
	return r ? (r.fn ? 1 : r.length) : 0;
};
ge.prototype.emit = function(t, n, r, i, o, a) {
	var l = Ce ? Ce + t : t;
	if (!this._events[l]) return !1;
	var s = this._events[l],
		u = arguments.length,
		c,
		f;
	if (s.fn) {
		switch ((s.once && this.removeListener(t, s.fn, void 0, !0), u)) {
			case 1:
				return s.fn.call(s.context), !0;
			case 2:
				return s.fn.call(s.context, n), !0;
			case 3:
				return s.fn.call(s.context, n, r), !0;
			case 4:
				return s.fn.call(s.context, n, r, i), !0;
			case 5:
				return s.fn.call(s.context, n, r, i, o), !0;
			case 6:
				return s.fn.call(s.context, n, r, i, o, a), !0;
		}
		for (f = 1, c = new Array(u - 1); f < u; f++) c[f - 1] = arguments[f];
		s.fn.apply(s.context, c);
	} else {
		var d = s.length,
			g;
		for (f = 0; f < d; f++)
			switch ((s[f].once && this.removeListener(t, s[f].fn, void 0, !0), u)) {
				case 1:
					s[f].fn.call(s[f].context);
					break;
				case 2:
					s[f].fn.call(s[f].context, n);
					break;
				case 3:
					s[f].fn.call(s[f].context, n, r);
					break;
				case 4:
					s[f].fn.call(s[f].context, n, r, i);
					break;
				default:
					if (!c)
						for (g = 1, c = new Array(u - 1); g < u; g++)
							c[g - 1] = arguments[g];
					s[f].fn.apply(s[f].context, c);
			}
	}
	return !0;
};
ge.prototype.on = function(t, n, r) {
	return ip(this, t, n, r, !1);
};
ge.prototype.once = function(t, n, r) {
	return ip(this, t, n, r, !0);
};
ge.prototype.removeListener = function(t, n, r, i) {
	var o = Ce ? Ce + t : t;
	if (!this._events[o]) return this;
	if (!n) return Pi(this, o), this;
	var a = this._events[o];
	if (a.fn)
		a.fn === n && (!i || a.once) && (!r || a.context === r) && Pi(this, o);
	else {
		for (var l = 0, s = [], u = a.length; l < u; l++)
			(a[l].fn !== n || (i && !a[l].once) || (r && a[l].context !== r)) &&
				s.push(a[l]);
		s.length ? (this._events[o] = s.length === 1 ? s[0] : s) : Pi(this, o);
	}
	return this;
};
ge.prototype.removeAllListeners = function(t) {
	var n;
	return (
		t
			? ((n = Ce ? Ce + t : t), this._events[n] && Pi(this, n))
			: ((this._events = new Lr()), (this._eventsCount = 0)),
		this
	);
};
ge.prototype.off = ge.prototype.removeListener;
ge.prototype.addListener = ge.prototype.on;
ge.prefixed = Ce;
ge.EventEmitter = ge;
$r = ge;
var O = {};
ot(
	O,
	"LogLevel",
	() => Pe,
	(e) => (Pe = e)
);
ot(
	O,
	"default",
	() => Bu,
	(e) => (Bu = e)
);
var Gt = function(e, t) {
		var n = typeof Symbol == "function" && e[Symbol.iterator];
		if (!n) return e;
		var r = n.call(e),
			i,
			o = [],
			a;
		try {
			for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; )
				o.push(i.value);
		} catch (l) {
			a = { error: l };
		} finally {
			try {
				i && !i.done && (n = r.return) && n.call(r);
			} finally {
				if (a) throw a.error;
			}
		}
		return o;
	},
	Wt = function(e, t, n) {
		if (n || arguments.length === 2)
			for (var r = 0, i = t.length, o; r < i; r++)
				(o || !(r in t)) &&
					(o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
		return e.concat(o || Array.prototype.slice.call(t));
	},
	Zv = "PeerJS: ",
	Pe;
(function(e) {
	(e[(e.Disabled = 0)] = "Disabled"),
		(e[(e.Errors = 1)] = "Errors"),
		(e[(e.Warnings = 2)] = "Warnings"),
		(e[(e.All = 3)] = "All");
})(Pe || (Pe = {}));
var qv = (function() {
		function e() {
			this._logLevel = Pe.Disabled;
		}
		return (
			Object.defineProperty(e.prototype, "logLevel", {
				get: function() {
					return this._logLevel;
				},
				set: function(t) {
					this._logLevel = t;
				},
				enumerable: !1,
				configurable: !0,
			}),
			(e.prototype.log = function() {
				for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
				this._logLevel >= Pe.All &&
					this._print.apply(this, Wt([Pe.All], Gt(t), !1));
			}),
			(e.prototype.warn = function() {
				for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
				this._logLevel >= Pe.Warnings &&
					this._print.apply(this, Wt([Pe.Warnings], Gt(t), !1));
			}),
			(e.prototype.error = function() {
				for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
				this._logLevel >= Pe.Errors &&
					this._print.apply(this, Wt([Pe.Errors], Gt(t), !1));
			}),
			(e.prototype.setLogFunction = function(t) {
				this._print = t;
			}),
			(e.prototype._print = function(t) {
				for (var n = [], r = 1; r < arguments.length; r++)
					n[r - 1] = arguments[r];
				var i = Wt([Zv], Gt(n), !1);
				for (var o in i)
					i[o] instanceof Error &&
						(i[o] = "(" + i[o].name + ") " + i[o].message);
				t >= Pe.All
					? console.log.apply(console, Wt([], Gt(i), !1))
					: t >= Pe.Warnings
					? console.warn.apply(console, Wt(["WARNING"], Gt(i), !1))
					: t >= Pe.Errors &&
					  console.error.apply(console, Wt(["ERROR"], Gt(i), !1));
			}),
			e
		);
	})(),
	Bu = new qv(),
	op = {};
ot(
	op,
	"Socket",
	() => Fu,
	(e) => (Fu = e)
);
var Ye;
(function(e) {
	(e.Data = "data"), (e.Media = "media");
})(Ye || (Ye = {}));
var Y;
(function(e) {
	(e.BrowserIncompatible = "browser-incompatible"),
		(e.Disconnected = "disconnected"),
		(e.InvalidID = "invalid-id"),
		(e.InvalidKey = "invalid-key"),
		(e.Network = "network"),
		(e.PeerUnavailable = "peer-unavailable"),
		(e.SslUnavailable = "ssl-unavailable"),
		(e.ServerError = "server-error"),
		(e.SocketError = "socket-error"),
		(e.SocketClosed = "socket-closed"),
		(e.UnavailableID = "unavailable-id"),
		(e.WebRTC = "webrtc");
})(Y || (Y = {}));
var ut;
(function(e) {
	(e.Binary = "binary"), (e.BinaryUTF8 = "binary-utf8"), (e.JSON = "json");
})(ut || (ut = {}));
var pt;
(function(e) {
	(e.Message = "message"),
		(e.Disconnected = "disconnected"),
		(e.Error = "error"),
		(e.Close = "close");
})(pt || (pt = {}));
var se;
(function(e) {
	(e.Heartbeat = "HEARTBEAT"),
		(e.Candidate = "CANDIDATE"),
		(e.Offer = "OFFER"),
		(e.Answer = "ANSWER"),
		(e.Open = "OPEN"),
		(e.Error = "ERROR"),
		(e.IdTaken = "ID-TAKEN"),
		(e.InvalidKey = "INVALID-KEY"),
		(e.Leave = "LEAVE"),
		(e.Expire = "EXPIRE");
})(se || (se = {}));
var il = {};
il = JSON.parse(
	'{"name":"peerjs","version":"1.4.7","keywords":["peerjs","webrtc","p2p","rtc"],"description":"PeerJS client","homepage":"https://peerjs.com","bugs":{"url":"https://github.com/peers/peerjs/issues"},"repository":{"type":"git","url":"https://github.com/peers/peerjs"},"license":"MIT","contributors":["Michelle Bu <michelle@michellebu.com>","afrokick <devbyru@gmail.com>","ericz <really.ez@gmail.com>","Jairo <kidandcat@gmail.com>","Jonas Gloning <34194370+jonasgloning@users.noreply.github.com>","Jairo Caro-Accino Viciana <jairo@galax.be>","Carlos Caballero <carlos.caballero.gonzalez@gmail.com>","hc <hheennrryy@gmail.com>","Muhammad Asif <capripio@gmail.com>","PrashoonB <prashoonbhattacharjee@gmail.com>","Harsh Bardhan Mishra <47351025+HarshCasper@users.noreply.github.com>","akotynski <aleksanderkotbury@gmail.com>","lmb <i@lmb.io>","Jairooo <jairocaro@msn.com>","Moritz Stückler <moritz.stueckler@gmail.com>","Simon <crydotsnakegithub@gmail.com>","Denis Lukov <denismassters@gmail.com>","Philipp Hancke <fippo@andyet.net>","Hans Oksendahl <hansoksendahl@gmail.com>","Jess <jessachandler@gmail.com>","khankuan <khankuan@gmail.com>","DUODVK <kurmanov.work@gmail.com>","XiZhao <kwang1imsa@gmail.com>","Matthias Lohr <matthias@lohr.me>","=frank tree <=frnktrb@googlemail.com>","Andre Eckardt <aeckardt@outlook.com>","Chris Cowan <agentme49@gmail.com>","Alex Chuev <alex@chuev.com>","alxnull <alxnull@e.mail.de>","Yemel Jardi <angel.jardi@gmail.com>","Ben Parnell <benjaminparnell.94@gmail.com>","Benny Lichtner <bennlich@gmail.com>","fresheneesz <bitetrudpublic@gmail.com>","bob.barstead@exaptive.com <bob.barstead@exaptive.com>","chandika <chandika@gmail.com>","emersion <contact@emersion.fr>","Christopher Van <cvan@users.noreply.github.com>","eddieherm <edhermoso@gmail.com>","Eduardo Pinho <enet4mikeenet@gmail.com>","Evandro Zanatta <ezanatta@tray.net.br>","Gardner Bickford <gardner@users.noreply.github.com>","Gian Luca <gianluca.cecchi@cynny.com>","PatrickJS <github@gdi2290.com>","jonnyf <github@jonathanfoss.co.uk>","Hizkia Felix <hizkifw@gmail.com>","Hristo Oskov <hristo.oskov@gmail.com>","Isaac Madwed <i.madwed@gmail.com>","Ilya Konanykhin <ilya.konanykhin@gmail.com>","jasonbarry <jasbarry@me.com>","Jonathan Burke <jonathan.burke.1311@googlemail.com>","Josh Hamit <josh.hamit@gmail.com>","Jordan Austin <jrax86@gmail.com>","Joel Wetzell <jwetzell@yahoo.com>","xizhao <kevin.wang@cloudera.com>","Alberto Torres <kungfoobar@gmail.com>","Jonathan Mayol <mayoljonathan@gmail.com>","Jefferson Felix <me@jsfelix.dev>","Rolf Erik Lekang <me@rolflekang.com>","Kevin Mai-Husan Chia <mhchia@users.noreply.github.com>","Pepijn de Vos <pepijndevos@gmail.com>","JooYoung <qkdlql@naver.com>","Tobias Speicher <rootcommander@gmail.com>","Steve Blaurock <sblaurock@gmail.com>","Kyrylo Shegeda <shegeda@ualberta.ca>","Diwank Singh Tomer <singh@diwank.name>","Sören Balko <Soeren.Balko@gmail.com>","Arpit Solanki <solankiarpit1997@gmail.com>","Yuki Ito <yuki@gnnk.net>","Artur Zayats <zag2art@gmail.com>"],"funding":{"type":"opencollective","url":"https://opencollective.com/peer"},"collective":{"type":"opencollective","url":"https://opencollective.com/peer"},"files":["dist/*"],"sideEffects":["lib/global.ts","lib/supports.ts"],"main":"dist/bundler.cjs","module":"dist/bundler.mjs","browser-minified":"dist/peerjs.min.js","browser-unminified":"dist/peerjs.js","types":"dist/types.d.ts","engines":{"node":">= 10"},"targets":{"types":{"source":"lib/exports.ts"},"main":{"source":"lib/exports.ts","sourceMap":{"inlineSources":true}},"module":{"source":"lib/exports.ts","includeNodeModules":["eventemitter3"],"sourceMap":{"inlineSources":true}},"browser-minified":{"context":"browser","outputFormat":"global","optimize":true,"engines":{"browsers":"cover 99%, not dead"},"source":"lib/global.ts"},"browser-unminified":{"context":"browser","outputFormat":"global","optimize":false,"engines":{"browsers":"cover 99%, not dead"},"source":"lib/global.ts"}},"scripts":{"contributors":"git-authors-cli --print=false && prettier --write package.json && git add package.json package-lock.json && git commit -m \\"chore(contributors): update and sort contributors list\\"","check":"tsc --noEmit","watch":"parcel watch","build":"rm -rf dist && parcel build","prepublishOnly":"npm run build","test":"mocha -r ts-node/register -r jsdom-global/register test/**/*.ts","format":"prettier --write .","semantic-release":"semantic-release"},"devDependencies":{"@parcel/config-default":"^2.5.0","@parcel/packager-ts":"^2.5.0","@parcel/transformer-typescript-tsc":"^2.5.0","@parcel/transformer-typescript-types":"^2.5.0","@semantic-release/changelog":"^6.0.1","@semantic-release/git":"^10.0.1","@types/chai":"^4.3.0","@types/mocha":"^9.1.0","@types/node":"^17.0.18","chai":"^4.3.6","git-authors-cli":"^1.0.40","jsdom":"^19.0.0","jsdom-global":"^3.0.2","mocha":"^9.2.0","mock-socket":"8.0.5","parcel":"^2.5.0","parcel-transformer-tsc-sourcemaps":"^1.0.2","prettier":"^2.6.2","semantic-release":"^19.0.2","standard":"^16.0.4","ts-node":"^10.5.0","typescript":"^4.5.5"},"dependencies":{"@swc/helpers":"^0.3.13","eventemitter3":"^4.0.7","peerjs-js-binarypack":"1.0.1","webrtc-adapter":"^7.7.1"}}'
);
var eg = (function() {
		var e = function(t, n) {
			return (
				(e =
					Object.setPrototypeOf ||
					({ __proto__: [] } instanceof Array &&
						function(r, i) {
							r.__proto__ = i;
						}) ||
					function(r, i) {
						for (var o in i)
							Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
					}),
				e(t, n)
			);
		};
		return function(t, n) {
			if (typeof n != "function" && n !== null)
				throw new TypeError(
					"Class extends value " + String(n) + " is not a constructor or null"
				);
			e(t, n);
			function r() {
				this.constructor = t;
			}
			t.prototype =
				n === null ? Object.create(n) : ((r.prototype = n.prototype), new r());
		};
	})(),
	tg = function(e, t) {
		var n = typeof Symbol == "function" && e[Symbol.iterator];
		if (!n) return e;
		var r = n.call(e),
			i,
			o = [],
			a;
		try {
			for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; )
				o.push(i.value);
		} catch (l) {
			a = { error: l };
		} finally {
			try {
				i && !i.done && (n = r.return) && n.call(r);
			} finally {
				if (a) throw a.error;
			}
		}
		return o;
	},
	ng = function(e, t, n) {
		if (n || arguments.length === 2)
			for (var r = 0, i = t.length, o; r < i; r++)
				(o || !(r in t)) &&
					(o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
		return e.concat(o || Array.prototype.slice.call(t));
	},
	rg = function(e) {
		var t = typeof Symbol == "function" && Symbol.iterator,
			n = t && e[t],
			r = 0;
		if (n) return n.call(e);
		if (e && typeof e.length == "number")
			return {
				next: function() {
					return (
						e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
					);
				},
			};
		throw new TypeError(
			t ? "Object is not iterable." : "Symbol.iterator is not defined."
		);
	},
	Fu = (function(e) {
		eg(t, e);
		function t(n, r, i, o, a, l) {
			l === void 0 && (l = 5e3);
			var s = e.call(this) || this;
			(s.pingInterval = l), (s._disconnected = !0), (s._messagesQueue = []);
			var u = n ? "wss://" : "ws://";
			return (s._baseUrl = u + r + ":" + i + o + "peerjs?key=" + a), s;
		}
		return (
			(t.prototype.start = function(n, r) {
				var i = this;
				this._id = n;
				var o = ""
					.concat(this._baseUrl, "&id=")
					.concat(n, "&token=")
					.concat(r);
				this._socket ||
					!this._disconnected ||
					((this._socket = new WebSocket(o + "&version=" + il.version)),
					(this._disconnected = !1),
					(this._socket.onmessage = function(a) {
						var l;
						try {
							(l = JSON.parse(a.data)),
								O.default.log("Server message received:", l);
						} catch {
							O.default.log("Invalid server message", a.data);
							return;
						}
						i.emit(pt.Message, l);
					}),
					(this._socket.onclose = function(a) {
						i._disconnected ||
							(O.default.log("Socket closed.", a),
							i._cleanup(),
							(i._disconnected = !0),
							i.emit(pt.Disconnected));
					}),
					(this._socket.onopen = function() {
						i._disconnected ||
							(i._sendQueuedMessages(),
							O.default.log("Socket open"),
							i._scheduleHeartbeat());
					}));
			}),
			(t.prototype._scheduleHeartbeat = function() {
				var n = this;
				this._wsPingTimer = setTimeout(function() {
					n._sendHeartbeat();
				}, this.pingInterval);
			}),
			(t.prototype._sendHeartbeat = function() {
				if (!this._wsOpen()) {
					O.default.log("Cannot send heartbeat, because socket closed");
					return;
				}
				var n = JSON.stringify({ type: se.Heartbeat });
				this._socket.send(n), this._scheduleHeartbeat();
			}),
			(t.prototype._wsOpen = function() {
				return !!this._socket && this._socket.readyState === 1;
			}),
			(t.prototype._sendQueuedMessages = function() {
				var n,
					r,
					i = ng([], tg(this._messagesQueue), !1);
				this._messagesQueue = [];
				try {
					for (var o = rg(i), a = o.next(); !a.done; a = o.next()) {
						var l = a.value;
						this.send(l);
					}
				} catch (s) {
					n = { error: s };
				} finally {
					try {
						a && !a.done && (r = o.return) && r.call(o);
					} finally {
						if (n) throw n.error;
					}
				}
			}),
			(t.prototype.send = function(n) {
				if (!this._disconnected) {
					if (!this._id) {
						this._messagesQueue.push(n);
						return;
					}
					if (!n.type) {
						this.emit(pt.Error, "Invalid message");
						return;
					}
					if (this._wsOpen()) {
						var r = JSON.stringify(n);
						this._socket.send(r);
					}
				}
			}),
			(t.prototype.close = function() {
				this._disconnected || (this._cleanup(), (this._disconnected = !0));
			}),
			(t.prototype._cleanup = function() {
				this._socket &&
					((this._socket.onopen = this._socket.onmessage = this._socket.onclose = null),
					this._socket.close(),
					(this._socket = void 0)),
					clearTimeout(this._wsPingTimer);
			}),
			t
		);
	})($r.EventEmitter),
	rs = {};
ot(
	rs,
	"MediaConnection",
	() => $u,
	(e) => ($u = e)
);
var ol = {};
ot(
	ol,
	"Negotiator",
	() => Au,
	(e) => (Au = e)
);
var Zi = function() {
		return (
			(Zi =
				Object.assign ||
				function(e) {
					for (var t, n = 1, r = arguments.length; n < r; n++) {
						t = arguments[n];
						for (var i in t)
							Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
					}
					return e;
				}),
			Zi.apply(this, arguments)
		);
	},
	li = function(e, t, n, r) {
		function i(o) {
			return o instanceof n
				? o
				: new n(function(a) {
						a(o);
				  });
		}
		return new (n || (n = Promise))(function(o, a) {
			function l(c) {
				try {
					u(r.next(c));
				} catch (f) {
					a(f);
				}
			}
			function s(c) {
				try {
					u(r.throw(c));
				} catch (f) {
					a(f);
				}
			}
			function u(c) {
				c.done ? o(c.value) : i(c.value).then(l, s);
			}
			u((r = r.apply(e, t || [])).next());
		});
	},
	ui = function(e, t) {
		var n = {
				label: 0,
				sent: function() {
					if (o[0] & 1) throw o[1];
					return o[1];
				},
				trys: [],
				ops: [],
			},
			r,
			i,
			o,
			a;
		return (
			(a = { next: l(0), throw: l(1), return: l(2) }),
			typeof Symbol == "function" &&
				(a[Symbol.iterator] = function() {
					return this;
				}),
			a
		);
		function l(u) {
			return function(c) {
				return s([u, c]);
			};
		}
		function s(u) {
			if (r) throw new TypeError("Generator is already executing.");
			for (; n; )
				try {
					if (
						((r = 1),
						i &&
							(o =
								u[0] & 2
									? i.return
									: u[0]
									? i.throw || ((o = i.return) && o.call(i), 0)
									: i.next) &&
							!(o = o.call(i, u[1])).done)
					)
						return o;
					switch (((i = 0), o && (u = [u[0] & 2, o.value]), u[0])) {
						case 0:
						case 1:
							o = u;
							break;
						case 4:
							return n.label++, { value: u[1], done: !1 };
						case 5:
							n.label++, (i = u[1]), (u = [0]);
							continue;
						case 7:
							(u = n.ops.pop()), n.trys.pop();
							continue;
						default:
							if (
								((o = n.trys),
								!(o = o.length > 0 && o[o.length - 1]) &&
									(u[0] === 6 || u[0] === 2))
							) {
								n = 0;
								continue;
							}
							if (u[0] === 3 && (!o || (u[1] > o[0] && u[1] < o[3]))) {
								n.label = u[1];
								break;
							}
							if (u[0] === 6 && n.label < o[1]) {
								(n.label = o[1]), (o = u);
								break;
							}
							if (o && n.label < o[2]) {
								(n.label = o[2]), n.ops.push(u);
								break;
							}
							o[2] && n.ops.pop(), n.trys.pop();
							continue;
					}
					u = t.call(e, n);
				} catch (c) {
					(u = [6, c]), (i = 0);
				} finally {
					r = o = 0;
				}
			if (u[0] & 5) throw u[1];
			return { value: u[0] ? u[1] : void 0, done: !0 };
		}
	},
	Au = (function() {
		function e(t) {
			this.connection = t;
		}
		return (
			(e.prototype.startConnection = function(t) {
				var n = this._startPeerConnection();
				if (
					((this.connection.peerConnection = n),
					this.connection.type === Ye.Media &&
						t._stream &&
						this._addTracksToConnection(t._stream, n),
					t.originator)
				) {
					if (this.connection.type === Ye.Data) {
						var r = this.connection,
							i = { ordered: !!t.reliable },
							o = n.createDataChannel(r.label, i);
						r.initialize(o);
					}
					this._makeOffer();
				} else this.handleSDP("OFFER", t.sdp);
			}),
			(e.prototype._startPeerConnection = function() {
				O.default.log("Creating RTCPeerConnection.");
				var t = new RTCPeerConnection(this.connection.provider.options.config);
				return this._setupListeners(t), t;
			}),
			(e.prototype._setupListeners = function(t) {
				var n = this,
					r = this.connection.peer,
					i = this.connection.connectionId,
					o = this.connection.type,
					a = this.connection.provider;
				O.default.log("Listening for ICE candidates."),
					(t.onicecandidate = function(l) {
						!l.candidate ||
							!l.candidate.candidate ||
							(O.default.log(
								"Received ICE candidates for ".concat(r, ":"),
								l.candidate
							),
							a.socket.send({
								type: se.Candidate,
								payload: { candidate: l.candidate, type: o, connectionId: i },
								dst: r,
							}));
					}),
					(t.oniceconnectionstatechange = function() {
						switch (t.iceConnectionState) {
							case "failed":
								O.default.log(
									"iceConnectionState is failed, closing connections to " + r
								),
									n.connection.emit(
										"error",
										new Error("Negotiation of connection to " + r + " failed.")
									),
									n.connection.close();
								break;
							case "closed":
								O.default.log(
									"iceConnectionState is closed, closing connections to " + r
								),
									n.connection.emit(
										"error",
										new Error("Connection to " + r + " closed.")
									),
									n.connection.close();
								break;
							case "disconnected":
								O.default.log(
									"iceConnectionState changed to disconnected on the connection with " +
										r
								);
								break;
							case "completed":
								t.onicecandidate = z.noop;
								break;
						}
						n.connection.emit("iceStateChanged", t.iceConnectionState);
					}),
					O.default.log("Listening for data channel"),
					(t.ondatachannel = function(l) {
						O.default.log("Received data channel");
						var s = l.channel,
							u = a.getConnection(r, i);
						u.initialize(s);
					}),
					O.default.log("Listening for remote stream"),
					(t.ontrack = function(l) {
						O.default.log("Received remote stream");
						var s = l.streams[0],
							u = a.getConnection(r, i);
						if (u.type === Ye.Media) {
							var c = u;
							n._addStreamToMediaConnection(s, c);
						}
					});
			}),
			(e.prototype.cleanup = function() {
				O.default.log("Cleaning up PeerConnection to " + this.connection.peer);
				var t = this.connection.peerConnection;
				if (t) {
					(this.connection.peerConnection = null),
						(t.onicecandidate = t.oniceconnectionstatechange = t.ondatachannel = t.ontrack = function() {});
					var n = t.signalingState !== "closed",
						r = !1;
					if (this.connection.type === Ye.Data) {
						var i = this.connection,
							o = i.dataChannel;
						o && (r = !!o.readyState && o.readyState !== "closed");
					}
					(n || r) && t.close();
				}
			}),
			(e.prototype._makeOffer = function() {
				return li(this, void 0, Promise, function() {
					var t, n, r, i, o, a, l;
					return ui(this, function(s) {
						switch (s.label) {
							case 0:
								(t = this.connection.peerConnection),
									(n = this.connection.provider),
									(s.label = 1);
							case 1:
								return (
									s.trys.push([1, 7, , 8]),
									[4, t.createOffer(this.connection.options.constraints)]
								);
							case 2:
								(r = s.sent()),
									O.default.log("Created offer."),
									this.connection.options.sdpTransform &&
										typeof this.connection.options.sdpTransform == "function" &&
										(r.sdp =
											this.connection.options.sdpTransform(r.sdp) || r.sdp),
									(s.label = 3);
							case 3:
								return s.trys.push([3, 5, , 6]), [4, t.setLocalDescription(r)];
							case 4:
								return (
									s.sent(),
									O.default.log(
										"Set localDescription:",
										r,
										"for:".concat(this.connection.peer)
									),
									(i = {
										sdp: r,
										type: this.connection.type,
										connectionId: this.connection.connectionId,
										metadata: this.connection.metadata,
										browser: z.browser,
									}),
									this.connection.type === Ye.Data &&
										((o = this.connection),
										(i = Zi(Zi({}, i), {
											label: o.label,
											reliable: o.reliable,
											serialization: o.serialization,
										}))),
									n.socket.send({
										type: se.Offer,
										payload: i,
										dst: this.connection.peer,
									}),
									[3, 6]
								);
							case 5:
								return (
									(a = s.sent()),
									a !=
										"OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer" &&
										(n.emitError(Y.WebRTC, a),
										O.default.log("Failed to setLocalDescription, ", a)),
									[3, 6]
								);
							case 6:
								return [3, 8];
							case 7:
								return (
									(l = s.sent()),
									n.emitError(Y.WebRTC, l),
									O.default.log("Failed to createOffer, ", l),
									[3, 8]
								);
							case 8:
								return [2];
						}
					});
				});
			}),
			(e.prototype._makeAnswer = function() {
				return li(this, void 0, Promise, function() {
					var t, n, r, i, o;
					return ui(this, function(a) {
						switch (a.label) {
							case 0:
								(t = this.connection.peerConnection),
									(n = this.connection.provider),
									(a.label = 1);
							case 1:
								return a.trys.push([1, 7, , 8]), [4, t.createAnswer()];
							case 2:
								(r = a.sent()),
									O.default.log("Created answer."),
									this.connection.options.sdpTransform &&
										typeof this.connection.options.sdpTransform == "function" &&
										(r.sdp =
											this.connection.options.sdpTransform(r.sdp) || r.sdp),
									(a.label = 3);
							case 3:
								return a.trys.push([3, 5, , 6]), [4, t.setLocalDescription(r)];
							case 4:
								return (
									a.sent(),
									O.default.log(
										"Set localDescription:",
										r,
										"for:".concat(this.connection.peer)
									),
									n.socket.send({
										type: se.Answer,
										payload: {
											sdp: r,
											type: this.connection.type,
											connectionId: this.connection.connectionId,
											browser: z.browser,
										},
										dst: this.connection.peer,
									}),
									[3, 6]
								);
							case 5:
								return (
									(i = a.sent()),
									n.emitError(Y.WebRTC, i),
									O.default.log("Failed to setLocalDescription, ", i),
									[3, 6]
								);
							case 6:
								return [3, 8];
							case 7:
								return (
									(o = a.sent()),
									n.emitError(Y.WebRTC, o),
									O.default.log("Failed to create answer, ", o),
									[3, 8]
								);
							case 8:
								return [2];
						}
					});
				});
			}),
			(e.prototype.handleSDP = function(t, n) {
				return li(this, void 0, Promise, function() {
					var r, i, o, a;
					return ui(this, function(l) {
						switch (l.label) {
							case 0:
								(n = new RTCSessionDescription(n)),
									(r = this.connection.peerConnection),
									(i = this.connection.provider),
									O.default.log("Setting remote description", n),
									(o = this),
									(l.label = 1);
							case 1:
								return l.trys.push([1, 5, , 6]), [4, r.setRemoteDescription(n)];
							case 2:
								return (
									l.sent(),
									O.default.log(
										"Set remoteDescription:"
											.concat(t, " for:")
											.concat(this.connection.peer)
									),
									t !== "OFFER" ? [3, 4] : [4, o._makeAnswer()]
								);
							case 3:
								l.sent(), (l.label = 4);
							case 4:
								return [3, 6];
							case 5:
								return (
									(a = l.sent()),
									i.emitError(Y.WebRTC, a),
									O.default.log("Failed to setRemoteDescription, ", a),
									[3, 6]
								);
							case 6:
								return [2];
						}
					});
				});
			}),
			(e.prototype.handleCandidate = function(t) {
				return li(this, void 0, Promise, function() {
					var n, r, i, o, a, l;
					return ui(this, function(s) {
						switch (s.label) {
							case 0:
								O.default.log("handleCandidate:", t),
									(n = t.candidate),
									(r = t.sdpMLineIndex),
									(i = t.sdpMid),
									(o = this.connection.peerConnection),
									(a = this.connection.provider),
									(s.label = 1);
							case 1:
								return (
									s.trys.push([1, 3, , 4]),
									[
										4,
										o.addIceCandidate(
											new RTCIceCandidate({
												sdpMid: i,
												sdpMLineIndex: r,
												candidate: n,
											})
										),
									]
								);
							case 2:
								return (
									s.sent(),
									O.default.log(
										"Added ICE candidate for:".concat(this.connection.peer)
									),
									[3, 4]
								);
							case 3:
								return (
									(l = s.sent()),
									a.emitError(Y.WebRTC, l),
									O.default.log("Failed to handleCandidate, ", l),
									[3, 4]
								);
							case 4:
								return [2];
						}
					});
				});
			}),
			(e.prototype._addTracksToConnection = function(t, n) {
				if (
					(O.default.log(
						"add tracks from stream ".concat(t.id, " to peer connection")
					),
					!n.addTrack)
				)
					return O.default.error(
						"Your browser does't support RTCPeerConnection#addTrack. Ignored."
					);
				t.getTracks().forEach(function(r) {
					n.addTrack(r, t);
				});
			}),
			(e.prototype._addStreamToMediaConnection = function(t, n) {
				O.default.log(
					"add stream "
						.concat(t.id, " to media connection ")
						.concat(n.connectionId)
				),
					n.addStream(t);
			}),
			e
		);
	})(),
	al = {};
ot(
	al,
	"BaseConnection",
	() => Uu,
	(e) => (Uu = e)
);
var ig = (function() {
		var e = function(t, n) {
			return (
				(e =
					Object.setPrototypeOf ||
					({ __proto__: [] } instanceof Array &&
						function(r, i) {
							r.__proto__ = i;
						}) ||
					function(r, i) {
						for (var o in i)
							Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
					}),
				e(t, n)
			);
		};
		return function(t, n) {
			if (typeof n != "function" && n !== null)
				throw new TypeError(
					"Class extends value " + String(n) + " is not a constructor or null"
				);
			e(t, n);
			function r() {
				this.constructor = t;
			}
			t.prototype =
				n === null ? Object.create(n) : ((r.prototype = n.prototype), new r());
		};
	})(),
	Uu = (function(e) {
		ig(t, e);
		function t(n, r, i) {
			var o = e.call(this) || this;
			return (
				(o.peer = n),
				(o.provider = r),
				(o.options = i),
				(o._open = !1),
				(o.metadata = i.metadata),
				o
			);
		}
		return (
			Object.defineProperty(t.prototype, "open", {
				get: function() {
					return this._open;
				},
				enumerable: !1,
				configurable: !0,
			}),
			t
		);
	})($r.EventEmitter),
	og = (function() {
		var e = function(t, n) {
			return (
				(e =
					Object.setPrototypeOf ||
					({ __proto__: [] } instanceof Array &&
						function(r, i) {
							r.__proto__ = i;
						}) ||
					function(r, i) {
						for (var o in i)
							Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
					}),
				e(t, n)
			);
		};
		return function(t, n) {
			if (typeof n != "function" && n !== null)
				throw new TypeError(
					"Class extends value " + String(n) + " is not a constructor or null"
				);
			e(t, n);
			function r() {
				this.constructor = t;
			}
			t.prototype =
				n === null ? Object.create(n) : ((r.prototype = n.prototype), new r());
		};
	})(),
	qi = function() {
		return (
			(qi =
				Object.assign ||
				function(e) {
					for (var t, n = 1, r = arguments.length; n < r; n++) {
						t = arguments[n];
						for (var i in t)
							Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
					}
					return e;
				}),
			qi.apply(this, arguments)
		);
	},
	ag = function(e) {
		var t = typeof Symbol == "function" && Symbol.iterator,
			n = t && e[t],
			r = 0;
		if (n) return n.call(e);
		if (e && typeof e.length == "number")
			return {
				next: function() {
					return (
						e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
					);
				},
			};
		throw new TypeError(
			t ? "Object is not iterable." : "Symbol.iterator is not defined."
		);
	},
	$u = (function(e) {
		og(t, e);
		function t(n, r, i) {
			var o = e.call(this, n, r, i) || this;
			return (
				(o._localStream = o.options._stream),
				(o.connectionId =
					o.options.connectionId || t.ID_PREFIX + z.randomToken()),
				(o._negotiator = new ol.Negotiator(o)),
				o._localStream &&
					o._negotiator.startConnection({
						_stream: o._localStream,
						originator: !0,
					}),
				o
			);
		}
		return (
			Object.defineProperty(t.prototype, "type", {
				get: function() {
					return Ye.Media;
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(t.prototype, "localStream", {
				get: function() {
					return this._localStream;
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(t.prototype, "remoteStream", {
				get: function() {
					return this._remoteStream;
				},
				enumerable: !1,
				configurable: !0,
			}),
			(t.prototype.addStream = function(n) {
				O.default.log("Receiving stream", n),
					(this._remoteStream = n),
					e.prototype.emit.call(this, "stream", n);
			}),
			(t.prototype.handleMessage = function(n) {
				var r = n.type,
					i = n.payload;
				switch (n.type) {
					case se.Answer:
						this._negotiator.handleSDP(r, i.sdp), (this._open = !0);
						break;
					case se.Candidate:
						this._negotiator.handleCandidate(i.candidate);
						break;
					default:
						O.default.warn(
							"Unrecognized message type:"
								.concat(r, " from peer:")
								.concat(this.peer)
						);
						break;
				}
			}),
			(t.prototype.answer = function(n, r) {
				var i, o;
				if ((r === void 0 && (r = {}), this._localStream)) {
					O.default.warn(
						"Local stream already exists on this MediaConnection. Are you answering a call twice?"
					);
					return;
				}
				(this._localStream = n),
					r && r.sdpTransform && (this.options.sdpTransform = r.sdpTransform),
					this._negotiator.startConnection(
						qi(qi({}, this.options._payload), { _stream: n })
					);
				var a = this.provider._getMessages(this.connectionId);
				try {
					for (var l = ag(a), s = l.next(); !s.done; s = l.next()) {
						var u = s.value;
						this.handleMessage(u);
					}
				} catch (c) {
					i = { error: c };
				} finally {
					try {
						s && !s.done && (o = l.return) && o.call(l);
					} finally {
						if (i) throw i.error;
					}
				}
				this._open = !0;
			}),
			(t.prototype.close = function() {
				this._negotiator &&
					(this._negotiator.cleanup(), (this._negotiator = null)),
					(this._localStream = null),
					(this._remoteStream = null),
					this.provider &&
						(this.provider._removeConnection(this), (this.provider = null)),
					this.options && this.options._stream && (this.options._stream = null),
					this.open &&
						((this._open = !1), e.prototype.emit.call(this, "close"));
			}),
			(t.ID_PREFIX = "mc_"),
			t
		);
	})(al.BaseConnection),
	is = {};
ot(
	is,
	"DataConnection",
	() => Gu,
	(e) => (Gu = e)
);
var ap = {};
ot(
	ap,
	"EncodingQueue",
	() => Vu,
	(e) => (Vu = e)
);
var sg = (function() {
		var e = function(t, n) {
			return (
				(e =
					Object.setPrototypeOf ||
					({ __proto__: [] } instanceof Array &&
						function(r, i) {
							r.__proto__ = i;
						}) ||
					function(r, i) {
						for (var o in i)
							Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
					}),
				e(t, n)
			);
		};
		return function(t, n) {
			if (typeof n != "function" && n !== null)
				throw new TypeError(
					"Class extends value " + String(n) + " is not a constructor or null"
				);
			e(t, n);
			function r() {
				this.constructor = t;
			}
			t.prototype =
				n === null ? Object.create(n) : ((r.prototype = n.prototype), new r());
		};
	})(),
	Vu = (function(e) {
		sg(t, e);
		function t() {
			var n = e.call(this) || this;
			return (
				(n.fileReader = new FileReader()),
				(n._queue = []),
				(n._processing = !1),
				(n.fileReader.onload = function(r) {
					(n._processing = !1),
						r.target && n.emit("done", r.target.result),
						n.doNextTask();
				}),
				(n.fileReader.onerror = function(r) {
					O.default.error("EncodingQueue error:", r),
						(n._processing = !1),
						n.destroy(),
						n.emit("error", r);
				}),
				n
			);
		}
		return (
			Object.defineProperty(t.prototype, "queue", {
				get: function() {
					return this._queue;
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(t.prototype, "size", {
				get: function() {
					return this.queue.length;
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(t.prototype, "processing", {
				get: function() {
					return this._processing;
				},
				enumerable: !1,
				configurable: !0,
			}),
			(t.prototype.enque = function(n) {
				this.queue.push(n), !this.processing && this.doNextTask();
			}),
			(t.prototype.destroy = function() {
				this.fileReader.abort(), (this._queue = []);
			}),
			(t.prototype.doNextTask = function() {
				this.size !== 0 &&
					(this.processing ||
						((this._processing = !0),
						this.fileReader.readAsArrayBuffer(this.queue.shift())));
			}),
			t
		);
	})($r.EventEmitter),
	lg = (function() {
		var e = function(t, n) {
			return (
				(e =
					Object.setPrototypeOf ||
					({ __proto__: [] } instanceof Array &&
						function(r, i) {
							r.__proto__ = i;
						}) ||
					function(r, i) {
						for (var o in i)
							Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
					}),
				e(t, n)
			);
		};
		return function(t, n) {
			if (typeof n != "function" && n !== null)
				throw new TypeError(
					"Class extends value " + String(n) + " is not a constructor or null"
				);
			e(t, n);
			function r() {
				this.constructor = t;
			}
			t.prototype =
				n === null ? Object.create(n) : ((r.prototype = n.prototype), new r());
		};
	})(),
	ug = function(e) {
		var t = typeof Symbol == "function" && Symbol.iterator,
			n = t && e[t],
			r = 0;
		if (n) return n.call(e);
		if (e && typeof e.length == "number")
			return {
				next: function() {
					return (
						e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
					);
				},
			};
		throw new TypeError(
			t ? "Object is not iterable." : "Symbol.iterator is not defined."
		);
	},
	Gu = (function(e) {
		lg(t, e);
		function t(n, r, i) {
			var o = e.call(this, n, r, i) || this;
			return (
				(o.stringify = JSON.stringify),
				(o.parse = JSON.parse),
				(o._buffer = []),
				(o._bufferSize = 0),
				(o._buffering = !1),
				(o._chunkedData = {}),
				(o._encodingQueue = new ap.EncodingQueue()),
				(o.connectionId =
					o.options.connectionId || t.ID_PREFIX + z.randomToken()),
				(o.label = o.options.label || o.connectionId),
				(o.serialization = o.options.serialization || ut.Binary),
				(o.reliable = !!o.options.reliable),
				o._encodingQueue.on("done", function(a) {
					o._bufferedSend(a);
				}),
				o._encodingQueue.on("error", function() {
					O.default.error(
						"DC#".concat(
							o.connectionId,
							": Error occured in encoding from blob to arraybuffer, close DC"
						)
					),
						o.close();
				}),
				(o._negotiator = new ol.Negotiator(o)),
				o._negotiator.startConnection(o.options._payload || { originator: !0 }),
				o
			);
		}
		return (
			Object.defineProperty(t.prototype, "type", {
				get: function() {
					return Ye.Data;
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(t.prototype, "dataChannel", {
				get: function() {
					return this._dc;
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(t.prototype, "bufferSize", {
				get: function() {
					return this._bufferSize;
				},
				enumerable: !1,
				configurable: !0,
			}),
			(t.prototype.initialize = function(n) {
				(this._dc = n), this._configureDataChannel();
			}),
			(t.prototype._configureDataChannel = function() {
				var n = this;
				(!z.supports.binaryBlob || z.supports.reliable) &&
					(this.dataChannel.binaryType = "arraybuffer"),
					(this.dataChannel.onopen = function() {
						O.default.log(
							"DC#".concat(n.connectionId, " dc connection success")
						),
							(n._open = !0),
							n.emit("open");
					}),
					(this.dataChannel.onmessage = function(r) {
						O.default.log(
							"DC#".concat(n.connectionId, " dc onmessage:"),
							r.data
						),
							n._handleDataMessage(r);
					}),
					(this.dataChannel.onclose = function() {
						O.default.log(
							"DC#".concat(n.connectionId, " dc closed for:"),
							n.peer
						),
							n.close();
					});
			}),
			(t.prototype._handleDataMessage = function(n) {
				var r = this,
					i = n.data,
					o = i.constructor,
					a =
						this.serialization === ut.Binary ||
						this.serialization === ut.BinaryUTF8,
					l = i;
				if (a) {
					if (o === Blob) {
						z.blobToArrayBuffer(i, function(u) {
							var c = z.unpack(u);
							r.emit("data", c);
						});
						return;
					} else if (o === ArrayBuffer) l = z.unpack(i);
					else if (o === String) {
						var s = z.binaryStringToArrayBuffer(i);
						l = z.unpack(s);
					}
				} else this.serialization === ut.JSON && (l = this.parse(i));
				if (l.__peerData) {
					this._handleChunk(l);
					return;
				}
				e.prototype.emit.call(this, "data", l);
			}),
			(t.prototype._handleChunk = function(n) {
				var r = n.__peerData,
					i = this._chunkedData[r] || { data: [], count: 0, total: n.total };
				if (
					((i.data[n.n] = n.data),
					i.count++,
					(this._chunkedData[r] = i),
					i.total === i.count)
				) {
					delete this._chunkedData[r];
					var o = new Blob(i.data);
					this._handleDataMessage({ data: o });
				}
			}),
			(t.prototype.close = function() {
				(this._buffer = []),
					(this._bufferSize = 0),
					(this._chunkedData = {}),
					this._negotiator &&
						(this._negotiator.cleanup(), (this._negotiator = null)),
					this.provider &&
						(this.provider._removeConnection(this), (this.provider = null)),
					this.dataChannel &&
						((this.dataChannel.onopen = null),
						(this.dataChannel.onmessage = null),
						(this.dataChannel.onclose = null),
						(this._dc = null)),
					this._encodingQueue &&
						(this._encodingQueue.destroy(),
						this._encodingQueue.removeAllListeners(),
						(this._encodingQueue = null)),
					this.open &&
						((this._open = !1), e.prototype.emit.call(this, "close"));
			}),
			(t.prototype.send = function(n, r) {
				if (!this.open) {
					e.prototype.emit.call(
						this,
						"error",
						new Error(
							"Connection is not open. You should listen for the `open` event before sending messages."
						)
					);
					return;
				}
				if (this.serialization === ut.JSON)
					this._bufferedSend(this.stringify(n));
				else if (
					this.serialization === ut.Binary ||
					this.serialization === ut.BinaryUTF8
				) {
					var i = z.pack(n);
					if (!r && i.size > z.chunkedMTU) {
						this._sendChunks(i);
						return;
					}
					z.supports.binaryBlob
						? this._bufferedSend(i)
						: this._encodingQueue.enque(i);
				} else this._bufferedSend(n);
			}),
			(t.prototype._bufferedSend = function(n) {
				(this._buffering || !this._trySend(n)) &&
					(this._buffer.push(n), (this._bufferSize = this._buffer.length));
			}),
			(t.prototype._trySend = function(n) {
				var r = this;
				if (!this.open) return !1;
				if (this.dataChannel.bufferedAmount > t.MAX_BUFFERED_AMOUNT)
					return (
						(this._buffering = !0),
						setTimeout(function() {
							(r._buffering = !1), r._tryBuffer();
						}, 50),
						!1
					);
				try {
					this.dataChannel.send(n);
				} catch (i) {
					return (
						O.default.error(
							"DC#:".concat(this.connectionId, " Error when sending:"),
							i
						),
						(this._buffering = !0),
						this.close(),
						!1
					);
				}
				return !0;
			}),
			(t.prototype._tryBuffer = function() {
				if (this.open && this._buffer.length !== 0) {
					var n = this._buffer[0];
					this._trySend(n) &&
						(this._buffer.shift(),
						(this._bufferSize = this._buffer.length),
						this._tryBuffer());
				}
			}),
			(t.prototype._sendChunks = function(n) {
				var r,
					i,
					o = z.chunk(n);
				O.default.log(
					"DC#"
						.concat(this.connectionId, " Try to send ")
						.concat(o.length, " chunks...")
				);
				try {
					for (var a = ug(o), l = a.next(); !l.done; l = a.next()) {
						var s = l.value;
						this.send(s, !0);
					}
				} catch (u) {
					r = { error: u };
				} finally {
					try {
						l && !l.done && (i = a.return) && i.call(a);
					} finally {
						if (r) throw r.error;
					}
				}
			}),
			(t.prototype.handleMessage = function(n) {
				var r = n.payload;
				switch (n.type) {
					case se.Answer:
						this._negotiator.handleSDP(n.type, r.sdp);
						break;
					case se.Candidate:
						this._negotiator.handleCandidate(r.candidate);
						break;
					default:
						O.default.warn(
							"Unrecognized message type:",
							n.type,
							"from peer:",
							this.peer
						);
						break;
				}
			}),
			(t.ID_PREFIX = "dc_"),
			(t.MAX_BUFFERED_AMOUNT = 8388608),
			t
		);
	})(al.BaseConnection),
	sp = {};
ot(
	sp,
	"API",
	() => Qu,
	(e) => (Qu = e)
);
var Wu = function(e, t, n, r) {
		function i(o) {
			return o instanceof n
				? o
				: new n(function(a) {
						a(o);
				  });
		}
		return new (n || (n = Promise))(function(o, a) {
			function l(c) {
				try {
					u(r.next(c));
				} catch (f) {
					a(f);
				}
			}
			function s(c) {
				try {
					u(r.throw(c));
				} catch (f) {
					a(f);
				}
			}
			function u(c) {
				c.done ? o(c.value) : i(c.value).then(l, s);
			}
			u((r = r.apply(e, t || [])).next());
		});
	},
	Hu = function(e, t) {
		var n = {
				label: 0,
				sent: function() {
					if (o[0] & 1) throw o[1];
					return o[1];
				},
				trys: [],
				ops: [],
			},
			r,
			i,
			o,
			a;
		return (
			(a = { next: l(0), throw: l(1), return: l(2) }),
			typeof Symbol == "function" &&
				(a[Symbol.iterator] = function() {
					return this;
				}),
			a
		);
		function l(u) {
			return function(c) {
				return s([u, c]);
			};
		}
		function s(u) {
			if (r) throw new TypeError("Generator is already executing.");
			for (; n; )
				try {
					if (
						((r = 1),
						i &&
							(o =
								u[0] & 2
									? i.return
									: u[0]
									? i.throw || ((o = i.return) && o.call(i), 0)
									: i.next) &&
							!(o = o.call(i, u[1])).done)
					)
						return o;
					switch (((i = 0), o && (u = [u[0] & 2, o.value]), u[0])) {
						case 0:
						case 1:
							o = u;
							break;
						case 4:
							return n.label++, { value: u[1], done: !1 };
						case 5:
							n.label++, (i = u[1]), (u = [0]);
							continue;
						case 7:
							(u = n.ops.pop()), n.trys.pop();
							continue;
						default:
							if (
								((o = n.trys),
								!(o = o.length > 0 && o[o.length - 1]) &&
									(u[0] === 6 || u[0] === 2))
							) {
								n = 0;
								continue;
							}
							if (u[0] === 3 && (!o || (u[1] > o[0] && u[1] < o[3]))) {
								n.label = u[1];
								break;
							}
							if (u[0] === 6 && n.label < o[1]) {
								(n.label = o[1]), (o = u);
								break;
							}
							if (o && n.label < o[2]) {
								(n.label = o[2]), n.ops.push(u);
								break;
							}
							o[2] && n.ops.pop(), n.trys.pop();
							continue;
					}
					u = t.call(e, n);
				} catch (c) {
					(u = [6, c]), (i = 0);
				} finally {
					r = o = 0;
				}
			if (u[0] & 5) throw u[1];
			return { value: u[0] ? u[1] : void 0, done: !0 };
		}
	},
	Qu = (function() {
		function e(t) {
			this._options = t;
		}
		return (
			(e.prototype._buildRequest = function(t) {
				var n = this._options.secure ? "https" : "http",
					r = this._options,
					i = r.host,
					o = r.port,
					a = r.path,
					l = r.key,
					s = new URL(
						""
							.concat(n, "://")
							.concat(i, ":")
							.concat(o)
							.concat(a)
							.concat(l, "/")
							.concat(t)
					);
				return (
					s.searchParams.set("ts", "".concat(Date.now()).concat(Math.random())),
					s.searchParams.set("version", il.version),
					fetch(s.href, { referrerPolicy: this._options.referrerPolicy })
				);
			}),
			(e.prototype.retrieveId = function() {
				return Wu(this, void 0, Promise, function() {
					var t, n, r;
					return Hu(this, function(i) {
						switch (i.label) {
							case 0:
								return i.trys.push([0, 2, , 3]), [4, this._buildRequest("id")];
							case 1:
								if (((t = i.sent()), t.status !== 200))
									throw new Error("Error. Status:".concat(t.status));
								return [2, t.text()];
							case 2:
								throw ((n = i.sent()),
								O.default.error("Error retrieving ID", n),
								(r = ""),
								this._options.path === "/" &&
									this._options.host !== z.CLOUD_HOST &&
									(r =
										" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),
								new Error("Could not get an ID from the server." + r));
							case 3:
								return [2];
						}
					});
				});
			}),
			(e.prototype.listAllPeers = function() {
				return Wu(this, void 0, Promise, function() {
					var t, n, r;
					return Hu(this, function(i) {
						switch (i.label) {
							case 0:
								return (
									i.trys.push([0, 2, , 3]), [4, this._buildRequest("peers")]
								);
							case 1:
								if (((t = i.sent()), t.status !== 200))
									throw t.status === 401
										? ((n = ""),
										  this._options.host === z.CLOUD_HOST
												? (n =
														"It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.")
												: (n =
														"You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature."),
										  new Error(
												"It doesn't look like you have permission to list peers IDs. " +
													n
										  ))
										: new Error("Error. Status:".concat(t.status));
								return [2, t.json()];
							case 2:
								throw ((r = i.sent()),
								O.default.error("Error retrieving list peers", r),
								new Error("Could not get list peers from the server." + r));
							case 3:
								return [2];
						}
					});
				});
			}),
			e
		);
	})(),
	cg = (function() {
		var e = function(t, n) {
			return (
				(e =
					Object.setPrototypeOf ||
					({ __proto__: [] } instanceof Array &&
						function(r, i) {
							r.__proto__ = i;
						}) ||
					function(r, i) {
						for (var o in i)
							Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
					}),
				e(t, n)
			);
		};
		return function(t, n) {
			if (typeof n != "function" && n !== null)
				throw new TypeError(
					"Class extends value " + String(n) + " is not a constructor or null"
				);
			e(t, n);
			function r() {
				this.constructor = t;
			}
			t.prototype =
				n === null ? Object.create(n) : ((r.prototype = n.prototype), new r());
		};
	})(),
	mr = function() {
		return (
			(mr =
				Object.assign ||
				function(e) {
					for (var t, n = 1, r = arguments.length; n < r; n++) {
						t = arguments[n];
						for (var i in t)
							Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
					}
					return e;
				}),
			mr.apply(this, arguments)
		);
	},
	Zn = function(e) {
		var t = typeof Symbol == "function" && Symbol.iterator,
			n = t && e[t],
			r = 0;
		if (n) return n.call(e);
		if (e && typeof e.length == "number")
			return {
				next: function() {
					return (
						e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
					);
				},
			};
		throw new TypeError(
			t ? "Object is not iterable." : "Symbol.iterator is not defined."
		);
	},
	fg = function(e, t) {
		var n = typeof Symbol == "function" && e[Symbol.iterator];
		if (!n) return e;
		var r = n.call(e),
			i,
			o = [],
			a;
		try {
			for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; )
				o.push(i.value);
		} catch (l) {
			a = { error: l };
		} finally {
			try {
				i && !i.done && (n = r.return) && n.call(r);
			} finally {
				if (a) throw a.error;
			}
		}
		return o;
	},
	eo = (function(e) {
		cg(t, e);
		function t(n, r) {
			var i = e.call(this) || this;
			(i._id = null),
				(i._lastServerId = null),
				(i._destroyed = !1),
				(i._disconnected = !1),
				(i._open = !1),
				(i._connections = new Map()),
				(i._lostMessages = new Map());
			var o;
			return (
				n && n.constructor == Object ? (r = n) : n && (o = n.toString()),
				(r = mr(
					{
						debug: 0,
						host: z.CLOUD_HOST,
						port: z.CLOUD_PORT,
						path: "/",
						key: t.DEFAULT_KEY,
						token: z.randomToken(),
						config: z.defaultConfig,
						referrerPolicy: "strict-origin-when-cross-origin",
					},
					r
				)),
				(i._options = r),
				i._options.host === "/" && (i._options.host = window.location.hostname),
				i._options.path &&
					(i._options.path[0] !== "/" &&
						(i._options.path = "/" + i._options.path),
					i._options.path[i._options.path.length - 1] !== "/" &&
						(i._options.path += "/")),
				i._options.secure === void 0 && i._options.host !== z.CLOUD_HOST
					? (i._options.secure = z.isSecure())
					: i._options.host == z.CLOUD_HOST && (i._options.secure = !0),
				i._options.logFunction &&
					O.default.setLogFunction(i._options.logFunction),
				(O.default.logLevel = i._options.debug || 0),
				(i._api = new sp.API(r)),
				(i._socket = i._createServerConnection()),
				!z.supports.audioVideo && !z.supports.data
					? (i._delayedAbort(
							Y.BrowserIncompatible,
							"The current browser does not support WebRTC"
					  ),
					  i)
					: o && !z.validateId(o)
					? (i._delayedAbort(Y.InvalidID, 'ID "'.concat(o, '" is invalid')), i)
					: (o
							? i._initialize(o)
							: i._api
									.retrieveId()
									.then(function(a) {
										return i._initialize(a);
									})
									.catch(function(a) {
										return i._abort(Y.ServerError, a);
									}),
					  i)
			);
		}
		return (
			Object.defineProperty(t.prototype, "id", {
				get: function() {
					return this._id;
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(t.prototype, "options", {
				get: function() {
					return this._options;
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(t.prototype, "open", {
				get: function() {
					return this._open;
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(t.prototype, "socket", {
				get: function() {
					return this._socket;
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(t.prototype, "connections", {
				get: function() {
					var n,
						r,
						i = Object.create(null);
					try {
						for (
							var o = Zn(this._connections), a = o.next();
							!a.done;
							a = o.next()
						) {
							var l = fg(a.value, 2),
								s = l[0],
								u = l[1];
							i[s] = u;
						}
					} catch (c) {
						n = { error: c };
					} finally {
						try {
							a && !a.done && (r = o.return) && r.call(o);
						} finally {
							if (n) throw n.error;
						}
					}
					return i;
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(t.prototype, "destroyed", {
				get: function() {
					return this._destroyed;
				},
				enumerable: !1,
				configurable: !0,
			}),
			Object.defineProperty(t.prototype, "disconnected", {
				get: function() {
					return this._disconnected;
				},
				enumerable: !1,
				configurable: !0,
			}),
			(t.prototype._createServerConnection = function() {
				var n = this,
					r = new op.Socket(
						this._options.secure,
						this._options.host,
						this._options.port,
						this._options.path,
						this._options.key,
						this._options.pingInterval
					);
				return (
					r.on(pt.Message, function(i) {
						n._handleMessage(i);
					}),
					r.on(pt.Error, function(i) {
						n._abort(Y.SocketError, i);
					}),
					r.on(pt.Disconnected, function() {
						n.disconnected ||
							(n.emitError(Y.Network, "Lost connection to server."),
							n.disconnect());
					}),
					r.on(pt.Close, function() {
						n.disconnected ||
							n._abort(Y.SocketClosed, "Underlying socket is already closed.");
					}),
					r
				);
			}),
			(t.prototype._initialize = function(n) {
				(this._id = n), this.socket.start(n, this._options.token);
			}),
			(t.prototype._handleMessage = function(n) {
				var r,
					i,
					o = n.type,
					a = n.payload,
					l = n.src;
				switch (o) {
					case se.Open:
						(this._lastServerId = this.id),
							(this._open = !0),
							this.emit("open", this.id);
						break;
					case se.Error:
						this._abort(Y.ServerError, a.msg);
						break;
					case se.IdTaken:
						this._abort(Y.UnavailableID, 'ID "'.concat(this.id, '" is taken'));
						break;
					case se.InvalidKey:
						this._abort(
							Y.InvalidKey,
							'API KEY "'.concat(this._options.key, '" is invalid')
						);
						break;
					case se.Leave:
						O.default.log("Received leave message from ".concat(l)),
							this._cleanupPeer(l),
							this._connections.delete(l);
						break;
					case se.Expire:
						this.emitError(
							Y.PeerUnavailable,
							"Could not connect to peer ".concat(l)
						);
						break;
					case se.Offer:
						var m = a.connectionId,
							y = this.getConnection(l, m);
						if (
							(y &&
								(y.close(),
								O.default.warn(
									"Offer received for existing Connection ID:".concat(m)
								)),
							a.type === Ye.Media)
						) {
							var s = new rs.MediaConnection(l, this, {
								connectionId: m,
								_payload: a,
								metadata: a.metadata,
							});
							(y = s), this._addConnection(l, y), this.emit("call", s);
						} else if (a.type === Ye.Data) {
							var u = new is.DataConnection(l, this, {
								connectionId: m,
								_payload: a,
								metadata: a.metadata,
								label: a.label,
								serialization: a.serialization,
								reliable: a.reliable,
							});
							(y = u), this._addConnection(l, y), this.emit("connection", u);
						} else {
							O.default.warn(
								"Received malformed connection type:".concat(a.type)
							);
							return;
						}
						var c = this._getMessages(m);
						try {
							for (var f = Zn(c), d = f.next(); !d.done; d = f.next()) {
								var g = d.value;
								y.handleMessage(g);
							}
						} catch (P) {
							r = { error: P };
						} finally {
							try {
								d && !d.done && (i = f.return) && i.call(f);
							} finally {
								if (r) throw r.error;
							}
						}
						break;
					default:
						if (!a) {
							O.default.warn(
								"You received a malformed message from "
									.concat(l, " of type ")
									.concat(o)
							);
							return;
						}
						var m = a.connectionId,
							y = this.getConnection(l, m);
						y && y.peerConnection
							? y.handleMessage(n)
							: m
							? this._storeMessage(m, n)
							: O.default.warn("You received an unrecognized message:", n);
						break;
				}
			}),
			(t.prototype._storeMessage = function(n, r) {
				this._lostMessages.has(n) || this._lostMessages.set(n, []),
					this._lostMessages.get(n).push(r);
			}),
			(t.prototype._getMessages = function(n) {
				var r = this._lostMessages.get(n);
				return r ? (this._lostMessages.delete(n), r) : [];
			}),
			(t.prototype.connect = function(n, r) {
				if ((r === void 0 && (r = {}), this.disconnected)) {
					O.default.warn(
						"You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."
					),
						this.emitError(
							Y.Disconnected,
							"Cannot connect to new Peer after disconnecting from server."
						);
					return;
				}
				var i = new is.DataConnection(n, this, r);
				return this._addConnection(n, i), i;
			}),
			(t.prototype.call = function(n, r, i) {
				if ((i === void 0 && (i = {}), this.disconnected)) {
					O.default.warn(
						"You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."
					),
						this.emitError(
							Y.Disconnected,
							"Cannot connect to new Peer after disconnecting from server."
						);
					return;
				}
				if (!r) {
					O.default.error(
						"To call a peer, you must provide a stream from your browser's `getUserMedia`."
					);
					return;
				}
				var o = new rs.MediaConnection(n, this, mr(mr({}, i), { _stream: r }));
				return this._addConnection(n, o), o;
			}),
			(t.prototype._addConnection = function(n, r) {
				O.default.log(
					"add connection "
						.concat(r.type, ":")
						.concat(r.connectionId, " to peerId:")
						.concat(n)
				),
					this._connections.has(n) || this._connections.set(n, []),
					this._connections.get(n).push(r);
			}),
			(t.prototype._removeConnection = function(n) {
				var r = this._connections.get(n.peer);
				if (r) {
					var i = r.indexOf(n);
					i !== -1 && r.splice(i, 1);
				}
				this._lostMessages.delete(n.connectionId);
			}),
			(t.prototype.getConnection = function(n, r) {
				var i,
					o,
					a = this._connections.get(n);
				if (!a) return null;
				try {
					for (var l = Zn(a), s = l.next(); !s.done; s = l.next()) {
						var u = s.value;
						if (u.connectionId === r) return u;
					}
				} catch (c) {
					i = { error: c };
				} finally {
					try {
						s && !s.done && (o = l.return) && o.call(l);
					} finally {
						if (i) throw i.error;
					}
				}
				return null;
			}),
			(t.prototype._delayedAbort = function(n, r) {
				var i = this;
				setTimeout(function() {
					i._abort(n, r);
				}, 0);
			}),
			(t.prototype._abort = function(n, r) {
				O.default.error("Aborting!"),
					this.emitError(n, r),
					this._lastServerId ? this.disconnect() : this.destroy();
			}),
			(t.prototype.emitError = function(n, r) {
				O.default.error("Error:", r);
				var i;
				typeof r == "string" ? (i = new Error(r)) : (i = r),
					(i.type = n),
					this.emit("error", i);
			}),
			(t.prototype.destroy = function() {
				this.destroyed ||
					(O.default.log("Destroy peer with ID:".concat(this.id)),
					this.disconnect(),
					this._cleanup(),
					(this._destroyed = !0),
					this.emit("close"));
			}),
			(t.prototype._cleanup = function() {
				var n, r;
				try {
					for (
						var i = Zn(this._connections.keys()), o = i.next();
						!o.done;
						o = i.next()
					) {
						var a = o.value;
						this._cleanupPeer(a), this._connections.delete(a);
					}
				} catch (l) {
					n = { error: l };
				} finally {
					try {
						o && !o.done && (r = i.return) && r.call(i);
					} finally {
						if (n) throw n.error;
					}
				}
				this.socket.removeAllListeners();
			}),
			(t.prototype._cleanupPeer = function(n) {
				var r,
					i,
					o = this._connections.get(n);
				if (o)
					try {
						for (var a = Zn(o), l = a.next(); !l.done; l = a.next()) {
							var s = l.value;
							s.close();
						}
					} catch (u) {
						r = { error: u };
					} finally {
						try {
							l && !l.done && (i = a.return) && i.call(a);
						} finally {
							if (r) throw r.error;
						}
					}
			}),
			(t.prototype.disconnect = function() {
				if (!this.disconnected) {
					var n = this.id;
					O.default.log("Disconnect peer with ID:".concat(n)),
						(this._disconnected = !0),
						(this._open = !1),
						this.socket.close(),
						(this._lastServerId = n),
						(this._id = null),
						this.emit("disconnected", n);
				}
			}),
			(t.prototype.reconnect = function() {
				if (this.disconnected && !this.destroyed)
					O.default.log(
						"Attempting reconnection to server with ID ".concat(
							this._lastServerId
						)
					),
						(this._disconnected = !1),
						this._initialize(this._lastServerId);
				else {
					if (this.destroyed)
						throw new Error(
							"This peer cannot reconnect to the server. It has already been destroyed."
						);
					if (!this.disconnected && !this.open)
						O.default.error(
							"In a hurry? We're still trying to make the initial connection!"
						);
					else
						throw new Error(
							"Peer ".concat(
								this.id,
								" cannot reconnect because it is not disconnected from the server!"
							)
						);
				}
			}),
			(t.prototype.listAllPeers = function(n) {
				var r = this;
				n === void 0 && (n = function(i) {}),
					this._api
						.listAllPeers()
						.then(function(i) {
							return n(i);
						})
						.catch(function(i) {
							return r._abort(Y.ServerError, i);
						});
			}),
			(t.DEFAULT_KEY = "peerjs"),
			t
		);
	})($r.EventEmitter);
rp.Peer;
var ea, Ju;
function dg() {
	if (Ju) return ea;
	Ju = 1;
	var e = function() {
		if (typeof self == "object" && self) return self;
		if (typeof window == "object" && window) return window;
		throw new Error("Unable to resolve global `this`");
	};
	return (
		(ea = (function() {
			if (this) return this;
			if (typeof globalThis == "object" && globalThis) return globalThis;
			try {
				Object.defineProperty(Object.prototype, "__global__", {
					get: function() {
						return this;
					},
					configurable: !0,
				});
			} catch {
				return e();
			}
			try {
				return __global__ || e();
			} finally {
				delete Object.prototype.__global__;
			}
		})()),
		ea
	);
}
const pg = "websocket",
	hg =
		"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",
	mg = [
		"websocket",
		"websockets",
		"socket",
		"networking",
		"comet",
		"push",
		"RFC-6455",
		"realtime",
		"server",
		"client",
	],
	vg =
		"Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)",
	gg = ["Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],
	yg = "1.0.34",
	Sg = {
		type: "git",
		url: "https://github.com/theturtle32/WebSocket-Node.git",
	},
	Cg = "https://github.com/theturtle32/WebSocket-Node",
	kg = { node: ">=4.0.0" },
	_g = {
		bufferutil: "^4.0.1",
		debug: "^2.2.0",
		"es5-ext": "^0.10.50",
		"typedarray-to-buffer": "^3.1.5",
		"utf-8-validate": "^5.0.2",
		yaeti: "^0.0.6",
	},
	Eg = {
		"buffer-equal": "^1.0.0",
		gulp: "^4.0.2",
		"gulp-jshint": "^2.0.4",
		"jshint-stylish": "^2.2.1",
		jshint: "^2.0.0",
		tape: "^4.9.1",
	},
	Tg = { verbose: !1 },
	xg = { test: "tape test/unit/*.js", gulp: "gulp" },
	Pg = "index",
	Rg = { lib: "./lib" },
	wg = "lib/browser.js",
	Og = "Apache-2.0",
	Dg = {
		name: pg,
		description: hg,
		keywords: mg,
		author: vg,
		contributors: gg,
		version: yg,
		repository: Sg,
		homepage: Cg,
		engines: kg,
		dependencies: _g,
		devDependencies: Eg,
		config: Tg,
		scripts: xg,
		main: Pg,
		directories: Rg,
		browser: wg,
		license: Og,
	};
var Mg = Dg.version,
	Jt;
if (typeof globalThis == "object") Jt = globalThis;
else
	try {
		Jt = dg();
	} catch {
	} finally {
		if ((!Jt && typeof window < "u" && (Jt = window), !Jt))
			throw new Error("Could not determine global this");
	}
var Nr = Jt.WebSocket || Jt.MozWebSocket,
	Ig = Mg;
function lp(e, t) {
	var n;
	return t ? (n = new Nr(e, t)) : (n = new Nr(e)), n;
}
Nr &&
	["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach(function(e) {
		Object.defineProperty(lp, e, {
			get: function() {
				return Nr[e];
			},
		});
	});
var up = { w3cwebsocket: Nr ? lp : null, version: Ig };
function jg() {
	const { roomID: e } = gd(),
		t = D.useRef(),
		n = D.useRef(null),
		[r, i] = D.useState(!1);
	var o = !1;
	const a = nl(),
		l = D.useRef(),
		s = new eo(void 0),
		u = new up.w3cwebsocket("ws://127.0.0.1:8000/ws/chat/" + e + "/");
	var c;
	const f = (d) => {
		const g = t.current.srcObject.getVideoTracks()[0];
		g.enabled = d;
	};
	return (
		D.useEffect(() => {
			const d = {};
			let g = localStorage.getItem("type");
			const m = document.getElementById("video-grid"),
				y = document.getElementById("audio-btn"),
				P = document.getElementById("video-btn");
			(t.current = document.createElement("video")),
				(t.current.id = "myself"),
				(t.current.muted = !0),
				(u.onopen = () => {
					console.log("WebSocket Client Connected");
				}),
				s.on("open", (S) => {
					u.send(JSON.stringify({ event: "join-room", userID: S, roomID: e }));
				}),
				(u.onmessage = (S) => {
					console.log(S);
					const k = JSON.parse(S.data);
					console.log(k);
					const E = k.event;
					if (E == "user-connected") {
						let _ = k.userID;
						l.current ? p(_, l.current) : (console.log(c), p(_, c));
					} else if (E == "user-disconnected") {
						let _ = k.userID;
						const M = document.getElementById(_);
						m.removeChild(M), d[_] && d[_].close();
					}
				}),
				navigator.mediaDevices
					.getUserMedia({ video: !0, audio: !0 })
					.then((S) => {
						c = S;
						const k = S.getAudioTracks(),
							E = S.getVideoTracks();
						(k[0].enabled = !0),
							(E[0].enabled = !0),
							y.addEventListener("click", () => {
								(k[0].enabled = !k[0].enabled),
									k[0].enabled
										? (y.innerHTML = "Audio Mute")
										: (y.innerHTML = "Audio UnMute");
							}),
							P.addEventListener("click", () => {
								f(!E[0].enabled),
									E[0].enabled
										? (P.innerHTML = "Video Off")
										: (P.innerHTML = "Video On");
							}),
							h(t.current, S),
							s.on("call", (_) => {
								console.log("video call"),
									g === "screen" && l.current
										? _.answer(l.current)
										: _.answer(S);
								const M = document.createElement("video");
								(M.id = _.peer),
									_.on("stream", (x) => {
										h(M, x);
									}),
									_.on("close", () => {
										(M.style.display = "none"),
											(M.style.visibility = "hidden"),
											M.remove();
									});
							});
					});
			function h(S, k) {
				(S.srcObject = k),
					S.addEventListener("loadedmetadata", () => {
						S.play(), m.append(S);
					});
			}
			function p(S, k) {
				const E = s.call(S, k),
					_ = document.createElement("video");
				(_.id = S),
					E.answer(k),
					E.on("stream", (M) => {
						h(_, M);
					}),
					E.on("close", () => {
						(_.style.visibility = "hidden"),
							(_.style.display = "none"),
							_.remove();
					}),
					E.on("error", () => {
						a("/");
					}),
					(d[S] = E);
			}
			console.log(o);
			const v = () => {
					o
						? C(l.current, t.current.srcObject.getAudioTracks())
						: navigator.mediaDevices
								.getDisplayMedia({ video: !0 })
								.then((S) => {
									const k = S.getVideoTracks();
									t.current.srcObject.getAudioTracks(),
										(l.current = S),
										(o = !0),
										i(!0),
										(k[0].onended = () => {
											C(S);
										}),
										(t.current.srcObject = S),
										f(!0),
										Object.values(s.connections)
											.flatMap((_) => _)
											.forEach((_) => {
												_.peerConnection
													.getSenders()
													.find((x) => x.track.kind === "video")
													.replaceTrack(k[0]);
											});
								})
								.catch((S) => {
									console.error("Error accessing screen media:", S);
								});
				},
				C = (S) => {
					(o = !1),
						i(!1),
						S.getTracks().forEach((k) => k.stop()),
						navigator.mediaDevices
							.getUserMedia({ video: !0, audio: !0 })
							.then((k) => {
								const E = k.getVideoTracks()[0];
								(E.enabled = !0),
									(t.current.srcObject = k),
									Object.values(s.connections)
										.flatMap((M) => M)
										.forEach((M) => {
											M.peerConnection
												.getSenders()
												.find((ne) => ne.track.kind === "video")
												.replaceTrack(E);
										});
							})
							.catch((k) => {
								console.error("Error accessing media devices:", k);
							}),
						f(!0);
				};
			n.current.addEventListener("click", v);
		}, []),
		F.jsx("div", {
			children: F.jsxs("div", {
				children: [
					F.jsx("div", { id: "video-grid" }),
					F.jsxs("div", {
						id: "buttons",
						children: [
							F.jsx("button", { id: "audio-btn", children: "Audio Mute" }),
							F.jsx("button", { id: "video-btn", children: "Video Off" }),
							F.jsx("button", {
								id: "screen-share-btn",
								ref: n,
								children: r ? "Stop Screen Share" : "Start Screen Share",
							}),
						],
					}),
				],
			}),
		})
	);
}
function bg() {
	const { roomID: e } = gd(),
		t = D.useRef(),
		n = D.useRef(null),
		[r, i] = D.useState(!1);
	var o = !1;
	const a = nl(),
		l = D.useRef(),
		s = new eo(void 0),
		u = new up.w3cwebsocket("ws://127.0.0.1:8000/ws/chat/" + e + "/");
	var c;
	const f = (d) => {
		const g = t.current.srcObject.getVideoTracks()[0];
		g.enabled = d;
	};
	return (
		D.useEffect(() => {
			const d = {};
			let g = localStorage.getItem("type");
			const m = document.getElementById("video-grid"),
				y = document.getElementById("audio-btn"),
				P = document.getElementById("video-btn");
			(t.current = document.createElement("video")),
				(t.current.id = "myself"),
				(t.current.muted = !0),
				(u.onopen = () => {
					console.log("WebSocket Client Connected");
				}),
				s.on("open", (S) => {
					u.send(JSON.stringify({ event: "join-room", userID: S, roomID: e }));
				}),
				(u.onmessage = (S) => {
					console.log(S);
					const k = JSON.parse(S.data);
					console.log(k);
					const E = k.event;
					if (E == "user-connected") {
						let _ = k.userID;
						l.current ? p(_, l.current) : (console.log(c), p(_, c));
					} else if (E == "user-disconnected") {
						let _ = k.userID;
						const M = document.getElementById(_);
						m.removeChild(M), d[_] && d[_].close();
					}
				}),
				navigator.mediaDevices
					.getUserMedia({ video: !0, audio: !0 })
					.then((S) => {
						c = S;
						const k = S.getAudioTracks(),
							E = S.getVideoTracks();
						(k[0].enabled = !0),
							(E[0].enabled = !0),
							y.addEventListener("click", () => {
								(k[0].enabled = !k[0].enabled),
									k[0].enabled
										? (y.innerHTML = "Audio Mute")
										: (y.innerHTML = "Audio UnMute");
							}),
							P.addEventListener("click", () => {
								f(!E[0].enabled),
									E[0].enabled
										? (P.innerHTML = "Video Off")
										: (P.innerHTML = "Video On");
							}),
							h(t.current, S),
							s.on("call", (_) => {
								console.log("video call"),
									g === "screen" && l.current
										? _.answer(l.current)
										: _.answer(S);
								const M = document.createElement("video");
								(M.id = _.peer),
									_.on("stream", (x) => {
										h(M, x);
									}),
									_.on("close", () => {
										(M.style.display = "none"),
											(M.style.visibility = "hidden"),
											M.remove();
									});
							});
					});
			function h(S, k) {
				(S.srcObject = k),
					S.addEventListener("loadedmetadata", () => {
						S.play(), m.append(S);
					});
			}
			function p(S, k) {
				const E = s.call(S, k),
					_ = document.createElement("video");
				(_.id = S),
					E.answer(k),
					E.on("stream", (M) => {
						h(_, M);
					}),
					E.on("close", () => {
						(_.style.visibility = "hidden"),
							(_.style.display = "none"),
							_.remove();
					}),
					E.on("error", () => {
						a("/");
					}),
					(d[S] = E);
			}
			console.log(o);
			const v = () => {
					o
						? C(l.current, t.current.srcObject.getAudioTracks())
						: navigator.mediaDevices
								.getDisplayMedia({ video: !0 })
								.then((S) => {
									const k = S.getVideoTracks();
									t.current.srcObject.getAudioTracks(),
										(l.current = S),
										(o = !0),
										i(!0),
										(k[0].onended = () => {
											C(S);
										}),
										(t.current.srcObject = S),
										f(!0),
										Object.values(s.connections)
											.flatMap((_) => _)
											.forEach((_) => {
												_.peerConnection
													.getSenders()
													.find((x) => x.track.kind === "video")
													.replaceTrack(k[0]);
											});
								})
								.catch((S) => {
									console.error("Error accessing screen media:", S);
								});
				},
				C = (S) => {
					(o = !1),
						i(!1),
						S.getTracks().forEach((k) => k.stop()),
						navigator.mediaDevices
							.getUserMedia({ video: !0, audio: !0 })
							.then((k) => {
								const E = k.getVideoTracks()[0];
								(E.enabled = !0),
									(t.current.srcObject = k),
									Object.values(s.connections)
										.flatMap((M) => M)
										.forEach((M) => {
											M.peerConnection
												.getSenders()
												.find((ne) => ne.track.kind === "video")
												.replaceTrack(E);
										});
							})
							.catch((k) => {
								console.error("Error accessing media devices:", k);
							}),
						f(!0);
				};
			n.current.addEventListener("click", v);
		}, []),
		F.jsx("div", {
			children: F.jsxs("div", {
				children: [
					F.jsx("div", { id: "video-grid" }),
					F.jsxs("div", {
						id: "buttons",
						children: [
							F.jsx("button", { id: "audio-btn", children: "Audio Mute" }),
							F.jsx("button", { id: "video-btn", children: "Video Off" }),
							F.jsx("button", {
								id: "screen-share-btn",
								ref: n,
								children: r ? "Stop Screen Share" : "Start Screen Share",
							}),
						],
					}),
				],
			}),
		})
	);
}
function Lg() {
	return F.jsx(F.Fragment, {
		children: F.jsx(Pv, {
			children: F.jsxs(xv, {
				children: [
					F.jsx(_i, { path: "/", element: F.jsx(Mv, {}) }),
					F.jsx(_i, { path: "/room/:roomID", element: F.jsx(jg, {}) }),
					F.jsx(_i, { path: "/dj/room/:roomID", element: F.jsx(bg, {}) }),
				],
			}),
		}),
	});
}
ta.createRoot(document.getElementById("root")).render(F.jsx(Lg, {}));
