(() => {
    var __webpack_modules__ = {
        448: module => {
            !function(e, t) {
                true ? module.exports = t() : 0;
            }(window, (function() {
                return function(e) {
                    var t = {};
                    function n(a) {
                        if (t[a]) return t[a].exports;
                        var r = t[a] = {
                            i: a,
                            l: !1,
                            exports: {}
                        };
                        return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
                    }
                    return n.m = e, n.c = t, n.d = function(e, t, a) {
                        n.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: a
                        });
                    }, n.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                    }, n.t = function(e, t) {
                        if (1 & t && (e = n(e)), 8 & t) return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                        var a = Object.create(null);
                        if (n.r(a), Object.defineProperty(a, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e) for (var r in e) n.d(a, r, function(t) {
                            return e[t];
                        }.bind(null, r));
                        return a;
                    }, n.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default;
                        } : function() {
                            return e;
                        };
                        return n.d(t, "a", t), t;
                    }, n.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t);
                    }, n.p = "", n(n.s = 0);
                }([ function(e, t, n) {
                    "use strict";
                    n.r(t);
                    var a = [], r = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ], i = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ], o = {
                        t: "top",
                        r: "right",
                        b: "bottom",
                        l: "left",
                        c: "centered"
                    };
                    function s() {}
                    var l = [ "click", "focusin", "keydown", "input" ];
                    function d(e) {
                        l.forEach((function(t) {
                            e.addEventListener(t, e === document ? L : Y);
                        }));
                    }
                    function c(e) {
                        return Array.isArray(e) ? e.map(c) : "[object Object]" === x(e) ? Object.keys(e).reduce((function(t, n) {
                            return t[n] = c(e[n]), t;
                        }), {}) : e;
                    }
                    function u(e, t) {
                        var n = e.calendar.querySelector(".qs-overlay"), a = n && !n.classList.contains("qs-hidden");
                        t = t || new Date(e.currentYear, e.currentMonth), e.calendar.innerHTML = [ h(t, e, a), f(t, e, a), v(e, a) ].join(""), 
                        a && window.requestAnimationFrame((function() {
                            M(!0, e);
                        }));
                    }
                    function h(e, t, n) {
                        return [ '<div class="qs-controls' + (n ? " qs-blur" : "") + '">', '<div class="qs-arrow qs-left"></div>', '<div class="qs-month-year' + (t.disableYearOverlay ? " qs-disabled-year-overlay" : "") + '">', '<span class="qs-month">' + t.months[e.getMonth()] + "</span>", '<span class="qs-year">' + e.getFullYear() + "</span>", "</div>", '<div class="qs-arrow qs-right"></div>', "</div>" ].join("");
                    }
                    function f(e, t, n) {
                        var a = t.currentMonth, r = t.currentYear, i = t.dateSelected, o = t.maxDate, s = t.minDate, l = t.showAllDates, d = t.days, c = t.disabledDates, u = t.startDay, h = t.weekendIndices, f = t.events, v = t.getRange ? t.getRange() : {}, m = +v.start, y = +v.end, p = g(new Date(e).setDate(1)), w = p.getDay() - u, D = w < 0 ? 7 : 0;
                        p.setMonth(p.getMonth() + 1), p.setDate(0);
                        var b = p.getDate(), q = [], S = D + 7 * ((w + b) / 7 | 0);
                        S += (w + b) % 7 ? 7 : 0;
                        for (var M = 1; M <= S; M++) {
                            var E = (M - 1) % 7, x = d[E], C = M - (w >= 0 ? w : 7 + w), L = new Date(r, a, C), Y = f[+L], j = C < 1 || C > b, O = j ? C < 1 ? -1 : 1 : 0, P = j && !l, k = P ? "" : L.getDate(), N = +L == +i, _ = E === h[0] || E === h[1], I = m !== y, A = "qs-square " + x;
                            Y && !P && (A += " qs-event"), j && (A += " qs-outside-current-month"), !l && j || (A += " qs-num"), 
                            N && (A += " qs-active"), (c[+L] || t.disabler(L) || _ && t.noWeekends || s && +L < +s || o && +L > +o) && !P && (A += " qs-disabled"), 
                            +g(new Date) == +L && (A += " qs-current"), +L === m && y && I && (A += " qs-range-start"), 
                            +L > m && +L < y && (A += " qs-range-middle"), +L === y && m && I && (A += " qs-range-end"), 
                            P && (A += " qs-empty", k = ""), q.push('<div class="' + A + '" data-direction="' + O + '">' + k + "</div>");
                        }
                        var R = d.map((function(e) {
                            return '<div class="qs-square qs-day">' + e + "</div>";
                        })).concat(q);
                        return R.unshift('<div class="qs-squares' + (n ? " qs-blur" : "") + '">'), R.push("</div>"), 
                        R.join("");
                    }
                    function v(e, t) {
                        var n = e.overlayPlaceholder, a = e.overlayButton;
                        return [ '<div class="qs-overlay' + (t ? "" : " qs-hidden") + '">', "<div>", '<input class="qs-overlay-year" placeholder="' + n + '" inputmode="numeric" />', '<div class="qs-close">&#10005;</div>', "</div>", '<div class="qs-overlay-month-container">' + e.overlayMonths.map((function(e, t) {
                            return '<div class="qs-overlay-month" data-month-num="' + t + '">' + e + "</div>";
                        })).join("") + "</div>", '<div class="qs-submit qs-disabled">' + a + "</div>", "</div>" ].join("");
                    }
                    function m(e, t, n) {
                        var a = t.el, r = t.calendar.querySelector(".qs-active"), i = e.textContent, o = t.sibling;
                        (a.disabled || a.readOnly) && t.respectDisabledReadOnly || (t.dateSelected = n ? void 0 : new Date(t.currentYear, t.currentMonth, i), 
                        r && r.classList.remove("qs-active"), n || e.classList.add("qs-active"), p(a, t, n), 
                        n || q(t), o && (y({
                            instance: t,
                            deselect: n
                        }), t.first && !o.dateSelected && (o.currentYear = t.currentYear, o.currentMonth = t.currentMonth, 
                        o.currentMonthName = t.currentMonthName), u(t), u(o)), t.onSelect(t, n ? void 0 : new Date(t.dateSelected)));
                    }
                    function y(e) {
                        var t = e.instance.first ? e.instance : e.instance.sibling, n = t.sibling;
                        t === e.instance ? e.deselect ? (t.minDate = t.originalMinDate, n.minDate = n.originalMinDate) : n.minDate = t.dateSelected : e.deselect ? (n.maxDate = n.originalMaxDate, 
                        t.maxDate = t.originalMaxDate) : t.maxDate = n.dateSelected;
                    }
                    function p(e, t, n) {
                        if (!t.nonInput) return n ? e.value = "" : t.formatter !== s ? t.formatter(e, t.dateSelected, t) : void (e.value = t.dateSelected.toDateString());
                    }
                    function w(e, t, n, a) {
                        n || a ? (n && (t.currentYear = +n), a && (t.currentMonth = +a)) : (t.currentMonth += e.contains("qs-right") ? 1 : -1, 
                        12 === t.currentMonth ? (t.currentMonth = 0, t.currentYear++) : -1 === t.currentMonth && (t.currentMonth = 11, 
                        t.currentYear--)), t.currentMonthName = t.months[t.currentMonth], u(t), t.onMonthChange(t);
                    }
                    function D(e) {
                        if (!e.noPosition) {
                            var t = e.position.top, n = e.position.right;
                            if (e.position.centered) return e.calendarContainer.classList.add("qs-centered");
                            var a = e.positionedEl.getBoundingClientRect(), r = e.el.getBoundingClientRect(), i = e.calendarContainer.getBoundingClientRect(), o = r.top - a.top + (t ? -1 * i.height : r.height) + "px", s = r.left - a.left + (n ? r.width - i.width : 0) + "px";
                            e.calendarContainer.style.setProperty("top", o), e.calendarContainer.style.setProperty("left", s);
                        }
                    }
                    function b(e) {
                        return "[object Date]" === x(e) && "Invalid Date" !== e.toString();
                    }
                    function g(e) {
                        if (b(e) || "number" == typeof e && !isNaN(e)) {
                            var t = new Date(+e);
                            return new Date(t.getFullYear(), t.getMonth(), t.getDate());
                        }
                    }
                    function q(e) {
                        e.disabled || !e.calendarContainer.classList.contains("qs-hidden") && !e.alwaysShow && ("overlay" !== e.defaultView && M(!0, e), 
                        e.calendarContainer.classList.add("qs-hidden"), e.onHide(e));
                    }
                    function S(e) {
                        e.disabled || (e.calendarContainer.classList.remove("qs-hidden"), "overlay" === e.defaultView && M(!1, e), 
                        D(e), e.onShow(e));
                    }
                    function M(e, t) {
                        var n = t.calendar, a = n.querySelector(".qs-overlay"), r = a.querySelector(".qs-overlay-year"), i = n.querySelector(".qs-controls"), o = n.querySelector(".qs-squares");
                        e ? (a.classList.add("qs-hidden"), i.classList.remove("qs-blur"), o.classList.remove("qs-blur"), 
                        r.value = "") : (a.classList.remove("qs-hidden"), i.classList.add("qs-blur"), o.classList.add("qs-blur"), 
                        r.focus());
                    }
                    function E(e, t, n, a) {
                        var r = isNaN(+(new Date).setFullYear(t.value || void 0)), i = r ? null : t.value;
                        if (13 === e.which || 13 === e.keyCode || "click" === e.type) a ? w(null, n, i, a) : r || t.classList.contains("qs-disabled") || w(null, n, i); else if (n.calendar.contains(t)) n.calendar.querySelector(".qs-submit").classList[r ? "add" : "remove"]("qs-disabled");
                    }
                    function x(e) {
                        return {}.toString.call(e);
                    }
                    function C(e) {
                        a.forEach((function(t) {
                            t !== e && q(t);
                        }));
                    }
                    function L(e) {
                        if (!e.__qs_shadow_dom) {
                            var t = e.which || e.keyCode, n = e.type, r = e.target, o = r.classList, s = a.filter((function(e) {
                                return e.calendar.contains(r) || e.el === r;
                            }))[0], l = s && s.calendar.contains(r);
                            if (!(s && s.isMobile && s.disableMobile)) if ("click" === n) {
                                if (!s) return a.forEach(q);
                                if (s.disabled) return;
                                var d = s.calendar, c = s.calendarContainer, h = s.disableYearOverlay, f = s.nonInput, v = d.querySelector(".qs-overlay-year"), y = !!d.querySelector(".qs-hidden"), p = d.querySelector(".qs-month-year").contains(r), D = r.dataset.monthNum;
                                if (s.noPosition && !l) (c.classList.contains("qs-hidden") ? S : q)(s); else if (o.contains("qs-arrow")) w(o, s); else if (p || o.contains("qs-close")) h || M(!y, s); else if (D) E(e, v, s, D); else {
                                    if (o.contains("qs-disabled")) return;
                                    if (o.contains("qs-num")) {
                                        var b = r.textContent, g = +r.dataset.direction, x = new Date(s.currentYear, s.currentMonth + g, b);
                                        if (g) {
                                            s.currentYear = x.getFullYear(), s.currentMonth = x.getMonth(), s.currentMonthName = i[s.currentMonth], 
                                            u(s);
                                            for (var L, Y = s.calendar.querySelectorAll('[data-direction="0"]'), j = 0; !L; ) {
                                                var O = Y[j];
                                                O.textContent === b && (L = O), j++;
                                            }
                                            r = L;
                                        }
                                        return void (+x == +s.dateSelected ? m(r, s, !0) : r.classList.contains("qs-disabled") || m(r, s));
                                    }
                                    o.contains("qs-submit") ? E(e, v, s) : f && r === s.el && (S(s), C(s));
                                }
                            } else if ("focusin" === n && s) S(s), C(s); else if ("keydown" === n && 9 === t && s) q(s); else if ("keydown" === n && s && !s.disabled) {
                                var P = !s.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden");
                                13 === t && P && l ? E(e, r, s) : 27 === t && P && l && M(!0, s);
                            } else if ("input" === n) {
                                if (!s || !s.calendar.contains(r)) return;
                                var k = s.calendar.querySelector(".qs-submit"), N = r.value.split("").reduce((function(e, t) {
                                    return e || "0" !== t ? e + (t.match(/[0-9]/) ? t : "") : "";
                                }), "").slice(0, 4);
                                r.value = N, k.classList[4 === N.length ? "remove" : "add"]("qs-disabled");
                            }
                        }
                    }
                    function Y(e) {
                        L(e), e.__qs_shadow_dom = !0;
                    }
                    function j(e, t) {
                        l.forEach((function(n) {
                            e.removeEventListener(n, t);
                        }));
                    }
                    function O() {
                        S(this);
                    }
                    function P() {
                        q(this);
                    }
                    function k(e, t) {
                        var n = g(e), a = this.currentYear, r = this.currentMonth, i = this.sibling;
                        if (null == e) return this.dateSelected = void 0, p(this.el, this, !0), i && (y({
                            instance: this,
                            deselect: !0
                        }), u(i)), u(this), this;
                        if (!b(e)) throw new Error("`setDate` needs a JavaScript Date object.");
                        if (this.disabledDates[+n] || n < this.minDate || n > this.maxDate) throw new Error("You can't manually set a date that's disabled.");
                        this.dateSelected = n, t && (this.currentYear = n.getFullYear(), this.currentMonth = n.getMonth(), 
                        this.currentMonthName = this.months[n.getMonth()]), p(this.el, this), i && (y({
                            instance: this
                        }), u(i));
                        var o = a === n.getFullYear() && r === n.getMonth();
                        return o || t ? u(this, n) : o || u(this, new Date(a, r, 1)), this;
                    }
                    function N(e) {
                        return I(this, e, !0);
                    }
                    function _(e) {
                        return I(this, e);
                    }
                    function I(e, t, n) {
                        var a = e.dateSelected, r = e.first, i = e.sibling, o = e.minDate, s = e.maxDate, l = g(t), d = n ? "Min" : "Max";
                        function c() {
                            return "original" + d + "Date";
                        }
                        function h() {
                            return d.toLowerCase() + "Date";
                        }
                        function f() {
                            return "set" + d;
                        }
                        function v() {
                            throw new Error("Out-of-range date passed to " + f());
                        }
                        if (null == t) e[c()] = void 0, i ? (i[c()] = void 0, n ? (r && !a || !r && !i.dateSelected) && (e.minDate = void 0, 
                        i.minDate = void 0) : (r && !i.dateSelected || !r && !a) && (e.maxDate = void 0, 
                        i.maxDate = void 0)) : e[h()] = void 0; else {
                            if (!b(t)) throw new Error("Invalid date passed to " + f());
                            i ? ((r && n && l > (a || s) || r && !n && l < (i.dateSelected || o) || !r && n && l > (i.dateSelected || s) || !r && !n && l < (a || o)) && v(), 
                            e[c()] = l, i[c()] = l, (n && (r && !a || !r && !i.dateSelected) || !n && (r && !i.dateSelected || !r && !a)) && (e[h()] = l, 
                            i[h()] = l)) : ((n && l > (a || s) || !n && l < (a || o)) && v(), e[h()] = l);
                        }
                        return i && u(i), u(e), e;
                    }
                    function A() {
                        var e = this.first ? this : this.sibling, t = e.sibling;
                        return {
                            start: e.dateSelected,
                            end: t.dateSelected
                        };
                    }
                    function R() {
                        var e = this.shadowDom, t = this.positionedEl, n = this.calendarContainer, r = this.sibling, i = this;
                        this.inlinePosition && (a.some((function(e) {
                            return e !== i && e.positionedEl === t;
                        })) || t.style.setProperty("position", null));
                        n.remove(), a = a.filter((function(e) {
                            return e !== i;
                        })), r && delete r.sibling, a.length || j(document, L);
                        var o = a.some((function(t) {
                            return t.shadowDom === e;
                        }));
                        for (var s in e && !o && j(e, Y), this) delete this[s];
                        a.length || l.forEach((function(e) {
                            document.removeEventListener(e, L);
                        }));
                    }
                    function F(e, t) {
                        var n = new Date(e);
                        if (!b(n)) throw new Error("Invalid date passed to `navigate`");
                        this.currentYear = n.getFullYear(), this.currentMonth = n.getMonth(), u(this), t && this.onMonthChange(this);
                    }
                    function B() {
                        var e = !this.calendarContainer.classList.contains("qs-hidden"), t = !this.calendarContainer.querySelector(".qs-overlay").classList.contains("qs-hidden");
                        e && M(t, this);
                    }
                    t.default = function(e, t) {
                        var n = function(e, t) {
                            var n, l, d = function(e) {
                                var t = c(e);
                                t.events && (t.events = t.events.reduce((function(e, t) {
                                    if (!b(t)) throw new Error('"options.events" must only contain valid JavaScript Date objects.');
                                    return e[+g(t)] = !0, e;
                                }), {}));
                                [ "startDate", "dateSelected", "minDate", "maxDate" ].forEach((function(e) {
                                    var n = t[e];
                                    if (n && !b(n)) throw new Error('"options.' + e + '" needs to be a valid JavaScript Date object.');
                                    t[e] = g(n);
                                }));
                                var n = t.position, i = t.maxDate, l = t.minDate, d = t.dateSelected, u = t.overlayPlaceholder, h = t.overlayButton, f = t.startDay, v = t.id;
                                if (t.startDate = g(t.startDate || d || new Date), t.disabledDates = (t.disabledDates || []).reduce((function(e, t) {
                                    var n = +g(t);
                                    if (!b(t)) throw new Error('You supplied an invalid date to "options.disabledDates".');
                                    if (n === +g(d)) throw new Error('"disabledDates" cannot contain the same date as "dateSelected".');
                                    return e[n] = 1, e;
                                }), {}), t.hasOwnProperty("id") && null == v) throw new Error("`id` cannot be `null` or `undefined`");
                                if (null != v) {
                                    var m = a.filter((function(e) {
                                        return e.id === v;
                                    }));
                                    if (m.length > 1) throw new Error("Only two datepickers can share an id.");
                                    m.length ? (t.second = !0, t.sibling = m[0]) : t.first = !0;
                                }
                                var y = [ "tr", "tl", "br", "bl", "c" ].some((function(e) {
                                    return n === e;
                                }));
                                if (n && !y) throw new Error('"options.position" must be one of the following: tl, tr, bl, br, or c.');
                                function p(e) {
                                    throw new Error('"dateSelected" in options is ' + (e ? "less" : "greater") + ' than "' + (e || "max") + 'Date".');
                                }
                                if (t.position = function(e) {
                                    var t = e[0], n = e[1], a = {};
                                    a[o[t]] = 1, n && (a[o[n]] = 1);
                                    return a;
                                }(n || "bl"), i < l) throw new Error('"maxDate" in options is less than "minDate".');
                                d && (l > d && p("min"), i < d && p());
                                if ([ "onSelect", "onShow", "onHide", "onMonthChange", "formatter", "disabler" ].forEach((function(e) {
                                    "function" != typeof t[e] && (t[e] = s);
                                })), [ "customDays", "customMonths", "customOverlayMonths" ].forEach((function(e, n) {
                                    var a = t[e], r = n ? 12 : 7;
                                    if (a) {
                                        if (!Array.isArray(a) || a.length !== r || a.some((function(e) {
                                            return "string" != typeof e;
                                        }))) throw new Error('"' + e + '" must be an array with ' + r + " strings.");
                                        t[n ? n < 2 ? "months" : "overlayMonths" : "days"] = a;
                                    }
                                })), f && f > 0 && f < 7) {
                                    var w = (t.customDays || r).slice(), D = w.splice(0, f);
                                    t.customDays = w.concat(D), t.startDay = +f, t.weekendIndices = [ w.length - 1, w.length ];
                                } else t.startDay = 0, t.weekendIndices = [ 6, 0 ];
                                "string" != typeof u && delete t.overlayPlaceholder;
                                "string" != typeof h && delete t.overlayButton;
                                var q = t.defaultView;
                                if (q && "calendar" !== q && "overlay" !== q) throw new Error('options.defaultView must either be "calendar" or "overlay".');
                                return t.defaultView = q || "calendar", t;
                            }(t || {
                                startDate: g(new Date),
                                position: "bl",
                                defaultView: "calendar"
                            }), u = e;
                            if ("string" == typeof u) u = "#" === u[0] ? document.getElementById(u.slice(1)) : document.querySelector(u); else {
                                if ("[object ShadowRoot]" === x(u)) throw new Error("Using a shadow DOM as your selector is not supported.");
                                for (var h, f = u.parentNode; !h; ) {
                                    var v = x(f);
                                    "[object HTMLDocument]" === v ? h = !0 : "[object ShadowRoot]" === v ? (h = !0, 
                                    n = f, l = f.host) : f = f.parentNode;
                                }
                            }
                            if (!u) throw new Error("No selector / element found.");
                            if (a.some((function(e) {
                                return e.el === u;
                            }))) throw new Error("A datepicker already exists on that element.");
                            var m = u === document.body, y = n ? u.parentElement || n : m ? document.body : u.parentElement, w = n ? u.parentElement || l : y, D = document.createElement("div"), q = document.createElement("div");
                            D.className = "qs-datepicker-container qs-hidden", q.className = "qs-datepicker";
                            var M = {
                                shadowDom: n,
                                customElement: l,
                                positionedEl: w,
                                el: u,
                                parent: y,
                                nonInput: "INPUT" !== u.nodeName,
                                noPosition: m,
                                position: !m && d.position,
                                startDate: d.startDate,
                                dateSelected: d.dateSelected,
                                disabledDates: d.disabledDates,
                                minDate: d.minDate,
                                maxDate: d.maxDate,
                                noWeekends: !!d.noWeekends,
                                weekendIndices: d.weekendIndices,
                                calendarContainer: D,
                                calendar: q,
                                currentMonth: (d.startDate || d.dateSelected).getMonth(),
                                currentMonthName: (d.months || i)[(d.startDate || d.dateSelected).getMonth()],
                                currentYear: (d.startDate || d.dateSelected).getFullYear(),
                                events: d.events || {},
                                defaultView: d.defaultView,
                                setDate: k,
                                remove: R,
                                setMin: N,
                                setMax: _,
                                show: O,
                                hide: P,
                                navigate: F,
                                toggleOverlay: B,
                                onSelect: d.onSelect,
                                onShow: d.onShow,
                                onHide: d.onHide,
                                onMonthChange: d.onMonthChange,
                                formatter: d.formatter,
                                disabler: d.disabler,
                                months: d.months || i,
                                days: d.customDays || r,
                                startDay: d.startDay,
                                overlayMonths: d.overlayMonths || (d.months || i).map((function(e) {
                                    return e.slice(0, 3);
                                })),
                                overlayPlaceholder: d.overlayPlaceholder || "4-digit year",
                                overlayButton: d.overlayButton || "Submit",
                                disableYearOverlay: !!d.disableYearOverlay,
                                disableMobile: !!d.disableMobile,
                                isMobile: "ontouchstart" in window,
                                alwaysShow: !!d.alwaysShow,
                                id: d.id,
                                showAllDates: !!d.showAllDates,
                                respectDisabledReadOnly: !!d.respectDisabledReadOnly,
                                first: d.first,
                                second: d.second
                            };
                            if (d.sibling) {
                                var E = d.sibling, C = M, L = E.minDate || C.minDate, Y = E.maxDate || C.maxDate;
                                C.sibling = E, E.sibling = C, E.minDate = L, E.maxDate = Y, C.minDate = L, C.maxDate = Y, 
                                E.originalMinDate = L, E.originalMaxDate = Y, C.originalMinDate = L, C.originalMaxDate = Y, 
                                E.getRange = A, C.getRange = A;
                            }
                            d.dateSelected && p(u, M);
                            var j = getComputedStyle(w).position;
                            m || j && "static" !== j || (M.inlinePosition = !0, w.style.setProperty("position", "relative"));
                            var I = a.filter((function(e) {
                                return e.positionedEl === M.positionedEl;
                            }));
                            I.some((function(e) {
                                return e.inlinePosition;
                            })) && (M.inlinePosition = !0, I.forEach((function(e) {
                                e.inlinePosition = !0;
                            })));
                            D.appendChild(q), y.appendChild(D), M.alwaysShow && S(M);
                            return M;
                        }(e, t);
                        if (a.length || d(document), n.shadowDom && (a.some((function(e) {
                            return e.shadowDom === n.shadowDom;
                        })) || d(n.shadowDom)), a.push(n), n.second) {
                            var l = n.sibling;
                            y({
                                instance: n,
                                deselect: !n.dateSelected
                            }), y({
                                instance: l,
                                deselect: !l.dateSelected
                            }), u(l);
                        }
                        return u(n, n.startDate || n.dateSelected), n.alwaysShow && D(n), n;
                    };
                } ]).default;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const flsModules = {};
        let credCalculator = {
            borrowAmount: 1e3,
            paymentPeriod: 5,
            annualInterestRate: 4.95,
            depositDate: false,
            paymentMethod: 1,
            convertAnnualRateInMonthly: function(percent) {
                return percent / 100 / 12;
            },
            convertYearToMonth: function(years) {
                return years * 12;
            },
            monthlyPaymentCalc: function() {
                let s = this.borrowAmount, r = this.convertAnnualRateInMonthly(this.annualInterestRate), n = this.convertYearToMonth(this.paymentPeriod);
                return s * (r * (1 + r) ** n / ((1 + r) ** n - 1));
            },
            repay: function() {
                return this.monthlyPaymentCalc() * this.convertYearToMonth(this.paymentPeriod);
            },
            formattedPrice: num => `£${new Intl.NumberFormat("en-GB", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2
            }).format(num)}`,
            setTotalPrice: function() {
                if (this.paymentMethod == 2) this.depositDate ? this.annualInterestRate = 6.8 - .5 : this.annualInterestRate = 4.95 - .5; else this.depositDate ? this.annualInterestRate = 6.8 : this.annualInterestRate = 4.95;
                document.querySelector(".js-main-percent").innerHTML = `${this.annualInterestRate}%`;
                document.querySelector(".js-borrow-value").innerHTML = this.formattedPrice(this.borrowAmount);
                document.querySelector(".js-paymentPeriod").innerHTML = `${this.paymentPeriod} years`;
                document.querySelector(".js-monthly-payment").innerHTML = this.formattedPrice(this.monthlyPaymentCalc());
                document.querySelector(".js-borrow").innerHTML = this.formattedPrice(this.borrowAmount);
                document.querySelector(".js-repay").innerHTML = this.formattedPrice(this.repay());
            }
        };
        document.addEventListener("DOMContentLoaded", (function(e) {
            credCalculator.calcForm = document.querySelector("#calculator");
            if (credCalculator.calcForm) {
                credCalculator.calcForm.addEventListener("change", (e => {
                    const target = e.target;
                    if (target.name == "paymentMethod") target.value == "1" ? credCalculator.paymentMethod = 1 : credCalculator.paymentMethod = 2;
                    credCalculator.setTotalPrice();
                }));
                credCalculator.setTotalPrice();
            }
        }));
        var datepicker_min = __webpack_require__(448);
        if (document.querySelector("[data-datepicker]")) {
            const picker = datepicker_min("[data-datepicker]", {
                startDay: 1,
                position: "tr",
                formatter: (input, date, instance) => {
                    const value = date.toLocaleDateString("en-GB");
                    input.value = value;
                },
                onSelect: function(instance, date) {
                    if (date.getTime() - Date.now() >= 7776e6) credCalculator.depositDate = true; else credCalculator.depositDate = false;
                    credCalculator.setTotalPrice();
                }
            });
            flsModules.datepicker = picker;
        }
        var PipsMode;
        (function(PipsMode) {
            PipsMode["Range"] = "range";
            PipsMode["Steps"] = "steps";
            PipsMode["Positions"] = "positions";
            PipsMode["Count"] = "count";
            PipsMode["Values"] = "values";
        })(PipsMode || (PipsMode = {}));
        var PipsType;
        (function(PipsType) {
            PipsType[PipsType["None"] = -1] = "None";
            PipsType[PipsType["NoValue"] = 0] = "NoValue";
            PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
            PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
        })(PipsType || (PipsType = {}));
        function isValidFormatter(entry) {
            return isValidPartialFormatter(entry) && typeof entry.from === "function";
        }
        function isValidPartialFormatter(entry) {
            return typeof entry === "object" && typeof entry.to === "function";
        }
        function removeElement(el) {
            el.parentElement.removeChild(el);
        }
        function isSet(value) {
            return value !== null && value !== void 0;
        }
        function preventDefault(e) {
            e.preventDefault();
        }
        function unique(array) {
            return array.filter((function(a) {
                return !this[a] ? this[a] = true : false;
            }), {});
        }
        function closest(value, to) {
            return Math.round(value / to) * to;
        }
        function offset(elem, orientation) {
            var rect = elem.getBoundingClientRect();
            var doc = elem.ownerDocument;
            var docElem = doc.documentElement;
            var pageOffset = getPageOffset(doc);
            if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) pageOffset.x = 0;
            return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
        }
        function isNumeric(a) {
            return typeof a === "number" && !isNaN(a) && isFinite(a);
        }
        function addClassFor(element, className, duration) {
            if (duration > 0) {
                addClass(element, className);
                setTimeout((function() {
                    removeClass(element, className);
                }), duration);
            }
        }
        function limit(a) {
            return Math.max(Math.min(a, 100), 0);
        }
        function asArray(a) {
            return Array.isArray(a) ? a : [ a ];
        }
        function countDecimals(numStr) {
            numStr = String(numStr);
            var pieces = numStr.split(".");
            return pieces.length > 1 ? pieces[1].length : 0;
        }
        function addClass(el, className) {
            if (el.classList && !/\s/.test(className)) el.classList.add(className); else el.className += " " + className;
        }
        function removeClass(el, className) {
            if (el.classList && !/\s/.test(className)) el.classList.remove(className); else el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
        function hasClass(el, className) {
            return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
        }
        function getPageOffset(doc) {
            var supportPageOffset = window.pageXOffset !== void 0;
            var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
            var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
            var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;
            return {
                x,
                y
            };
        }
        function getActions() {
            return window.navigator.pointerEnabled ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            } : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend"
            };
        }
        function getSupportsPassive() {
            var supportsPassive = false;
            try {
                var opts = Object.defineProperty({}, "passive", {
                    get: function() {
                        supportsPassive = true;
                    }
                });
                window.addEventListener("test", null, opts);
            } catch (e) {}
            return supportsPassive;
        }
        function getSupportsTouchActionNone() {
            return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
        }
        function subRangeRatio(pa, pb) {
            return 100 / (pb - pa);
        }
        function fromPercentage(range, value, startRange) {
            return value * 100 / (range[startRange + 1] - range[startRange]);
        }
        function toPercentage(range, value) {
            return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
        }
        function isPercentage(range, value) {
            return value * (range[1] - range[0]) / 100 + range[0];
        }
        function getJ(value, arr) {
            var j = 1;
            while (value >= arr[j]) j += 1;
            return j;
        }
        function toStepping(xVal, xPct, value) {
            if (value >= xVal.slice(-1)[0]) return 100;
            var j = getJ(value, xVal);
            var va = xVal[j - 1];
            var vb = xVal[j];
            var pa = xPct[j - 1];
            var pb = xPct[j];
            return pa + toPercentage([ va, vb ], value) / subRangeRatio(pa, pb);
        }
        function fromStepping(xVal, xPct, value) {
            if (value >= 100) return xVal.slice(-1)[0];
            var j = getJ(value, xPct);
            var va = xVal[j - 1];
            var vb = xVal[j];
            var pa = xPct[j - 1];
            var pb = xPct[j];
            return isPercentage([ va, vb ], (value - pa) * subRangeRatio(pa, pb));
        }
        function getStep(xPct, xSteps, snap, value) {
            if (value === 100) return value;
            var j = getJ(value, xPct);
            var a = xPct[j - 1];
            var b = xPct[j];
            if (snap) {
                if (value - a > (b - a) / 2) return b;
                return a;
            }
            if (!xSteps[j - 1]) return value;
            return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
        }
        var Spectrum = function() {
            function Spectrum(entry, snap, singleStep) {
                this.xPct = [];
                this.xVal = [];
                this.xSteps = [];
                this.xNumSteps = [];
                this.xHighestCompleteStep = [];
                this.xSteps = [ singleStep || false ];
                this.xNumSteps = [ false ];
                this.snap = snap;
                var index;
                var ordered = [];
                Object.keys(entry).forEach((function(index) {
                    ordered.push([ asArray(entry[index]), index ]);
                }));
                ordered.sort((function(a, b) {
                    return a[0][0] - b[0][0];
                }));
                for (index = 0; index < ordered.length; index++) this.handleEntryPoint(ordered[index][1], ordered[index][0]);
                this.xNumSteps = this.xSteps.slice(0);
                for (index = 0; index < this.xNumSteps.length; index++) this.handleStepPoint(index, this.xNumSteps[index]);
            }
            Spectrum.prototype.getDistance = function(value) {
                var distances = [];
                for (var index = 0; index < this.xNumSteps.length - 1; index++) distances[index] = fromPercentage(this.xVal, value, index);
                return distances;
            };
            Spectrum.prototype.getAbsoluteDistance = function(value, distances, direction) {
                var xPct_index = 0;
                if (value < this.xPct[this.xPct.length - 1]) while (value > this.xPct[xPct_index + 1]) xPct_index++; else if (value === this.xPct[this.xPct.length - 1]) xPct_index = this.xPct.length - 2;
                if (!direction && value === this.xPct[xPct_index + 1]) xPct_index++;
                if (distances === null) distances = [];
                var start_factor;
                var rest_factor = 1;
                var rest_rel_distance = distances[xPct_index];
                var range_pct = 0;
                var rel_range_distance = 0;
                var abs_distance_counter = 0;
                var range_counter = 0;
                if (direction) start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]); else start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
                while (rest_rel_distance > 0) {
                    range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                    if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                        rel_range_distance = range_pct * start_factor;
                        rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                        start_factor = 1;
                    } else {
                        rel_range_distance = distances[xPct_index + range_counter] * range_pct / 100 * rest_factor;
                        rest_factor = 0;
                    }
                    if (direction) {
                        abs_distance_counter -= rel_range_distance;
                        if (this.xPct.length + range_counter >= 1) range_counter--;
                    } else {
                        abs_distance_counter += rel_range_distance;
                        if (this.xPct.length - range_counter >= 1) range_counter++;
                    }
                    rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
                }
                return value + abs_distance_counter;
            };
            Spectrum.prototype.toStepping = function(value) {
                value = toStepping(this.xVal, this.xPct, value);
                return value;
            };
            Spectrum.prototype.fromStepping = function(value) {
                return fromStepping(this.xVal, this.xPct, value);
            };
            Spectrum.prototype.getStep = function(value) {
                value = getStep(this.xPct, this.xSteps, this.snap, value);
                return value;
            };
            Spectrum.prototype.getDefaultStep = function(value, isDown, size) {
                var j = getJ(value, this.xPct);
                if (value === 100 || isDown && value === this.xPct[j - 1]) j = Math.max(j - 1, 1);
                return (this.xVal[j] - this.xVal[j - 1]) / size;
            };
            Spectrum.prototype.getNearbySteps = function(value) {
                var j = getJ(value, this.xPct);
                return {
                    stepBefore: {
                        startValue: this.xVal[j - 2],
                        step: this.xNumSteps[j - 2],
                        highestStep: this.xHighestCompleteStep[j - 2]
                    },
                    thisStep: {
                        startValue: this.xVal[j - 1],
                        step: this.xNumSteps[j - 1],
                        highestStep: this.xHighestCompleteStep[j - 1]
                    },
                    stepAfter: {
                        startValue: this.xVal[j],
                        step: this.xNumSteps[j],
                        highestStep: this.xHighestCompleteStep[j]
                    }
                };
            };
            Spectrum.prototype.countStepDecimals = function() {
                var stepDecimals = this.xNumSteps.map(countDecimals);
                return Math.max.apply(null, stepDecimals);
            };
            Spectrum.prototype.hasNoSize = function() {
                return this.xVal[0] === this.xVal[this.xVal.length - 1];
            };
            Spectrum.prototype.convert = function(value) {
                return this.getStep(this.toStepping(value));
            };
            Spectrum.prototype.handleEntryPoint = function(index, value) {
                var percentage;
                if (index === "min") percentage = 0; else if (index === "max") percentage = 100; else percentage = parseFloat(index);
                if (!isNumeric(percentage) || !isNumeric(value[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
                this.xPct.push(percentage);
                this.xVal.push(value[0]);
                var value1 = Number(value[1]);
                if (!percentage) {
                    if (!isNaN(value1)) this.xSteps[0] = value1;
                } else this.xSteps.push(isNaN(value1) ? false : value1);
                this.xHighestCompleteStep.push(0);
            };
            Spectrum.prototype.handleStepPoint = function(i, n) {
                if (!n) return;
                if (this.xVal[i] === this.xVal[i + 1]) {
                    this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                    return;
                }
                this.xSteps[i] = fromPercentage([ this.xVal[i], this.xVal[i + 1] ], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
                var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
                var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
                var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
                this.xHighestCompleteStep[i] = step;
            };
            return Spectrum;
        }();
        var defaultFormatter = {
            to: function(value) {
                return value === void 0 ? "" : value.toFixed(2);
            },
            from: Number
        };
        var cssClasses = {
            target: "target",
            base: "base",
            origin: "origin",
            handle: "handle",
            handleLower: "handle-lower",
            handleUpper: "handle-upper",
            touchArea: "touch-area",
            horizontal: "horizontal",
            vertical: "vertical",
            background: "background",
            connect: "connect",
            connects: "connects",
            ltr: "ltr",
            rtl: "rtl",
            textDirectionLtr: "txt-dir-ltr",
            textDirectionRtl: "txt-dir-rtl",
            draggable: "draggable",
            drag: "state-drag",
            tap: "state-tap",
            active: "active",
            tooltip: "tooltip",
            pips: "pips",
            pipsHorizontal: "pips-horizontal",
            pipsVertical: "pips-vertical",
            marker: "marker",
            markerHorizontal: "marker-horizontal",
            markerVertical: "marker-vertical",
            markerNormal: "marker-normal",
            markerLarge: "marker-large",
            markerSub: "marker-sub",
            value: "value",
            valueHorizontal: "value-horizontal",
            valueVertical: "value-vertical",
            valueNormal: "value-normal",
            valueLarge: "value-large",
            valueSub: "value-sub"
        };
        var INTERNAL_EVENT_NS = {
            tooltips: ".__tooltips",
            aria: ".__aria"
        };
        function testStep(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'step' is not numeric.");
            parsed.singleStep = entry;
        }
        function testKeyboardPageMultiplier(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
            parsed.keyboardPageMultiplier = entry;
        }
        function testKeyboardMultiplier(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
            parsed.keyboardMultiplier = entry;
        }
        function testKeyboardDefaultStep(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
            parsed.keyboardDefaultStep = entry;
        }
        function testRange(parsed, entry) {
            if (typeof entry !== "object" || Array.isArray(entry)) throw new Error("noUiSlider: 'range' is not an object.");
            if (entry.min === void 0 || entry.max === void 0) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
        }
        function testStart(parsed, entry) {
            entry = asArray(entry);
            if (!Array.isArray(entry) || !entry.length) throw new Error("noUiSlider: 'start' option is incorrect.");
            parsed.handles = entry.length;
            parsed.start = entry;
        }
        function testSnap(parsed, entry) {
            if (typeof entry !== "boolean") throw new Error("noUiSlider: 'snap' option must be a boolean.");
            parsed.snap = entry;
        }
        function testAnimate(parsed, entry) {
            if (typeof entry !== "boolean") throw new Error("noUiSlider: 'animate' option must be a boolean.");
            parsed.animate = entry;
        }
        function testAnimationDuration(parsed, entry) {
            if (typeof entry !== "number") throw new Error("noUiSlider: 'animationDuration' option must be a number.");
            parsed.animationDuration = entry;
        }
        function testConnect(parsed, entry) {
            var connect = [ false ];
            var i;
            if (entry === "lower") entry = [ true, false ]; else if (entry === "upper") entry = [ false, true ];
            if (entry === true || entry === false) {
                for (i = 1; i < parsed.handles; i++) connect.push(entry);
                connect.push(false);
            } else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count."); else connect = entry;
            parsed.connect = connect;
        }
        function testOrientation(parsed, entry) {
            switch (entry) {
              case "horizontal":
                parsed.ort = 0;
                break;

              case "vertical":
                parsed.ort = 1;
                break;

              default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
            }
        }
        function testMargin(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'margin' option must be numeric.");
            if (entry === 0) return;
            parsed.margin = parsed.spectrum.getDistance(entry);
        }
        function testLimit(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'limit' option must be numeric.");
            parsed.limit = parsed.spectrum.getDistance(entry);
            if (!parsed.limit || parsed.handles < 2) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
        }
        function testPadding(parsed, entry) {
            var index;
            if (!isNumeric(entry) && !Array.isArray(entry)) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
            if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
            if (entry === 0) return;
            if (!Array.isArray(entry)) entry = [ entry, entry ];
            parsed.padding = [ parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1]) ];
            for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
            var totalPadding = entry[0] + entry[1];
            var firstValue = parsed.spectrum.xVal[0];
            var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
            if (totalPadding / (lastValue - firstValue) > 1) throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
        }
        function testDirection(parsed, entry) {
            switch (entry) {
              case "ltr":
                parsed.dir = 0;
                break;

              case "rtl":
                parsed.dir = 1;
                break;

              default:
                throw new Error("noUiSlider: 'direction' option was not recognized.");
            }
        }
        function testBehaviour(parsed, entry) {
            if (typeof entry !== "string") throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
            var tap = entry.indexOf("tap") >= 0;
            var drag = entry.indexOf("drag") >= 0;
            var fixed = entry.indexOf("fixed") >= 0;
            var snap = entry.indexOf("snap") >= 0;
            var hover = entry.indexOf("hover") >= 0;
            var unconstrained = entry.indexOf("unconstrained") >= 0;
            var dragAll = entry.indexOf("drag-all") >= 0;
            var smoothSteps = entry.indexOf("smooth-steps") >= 0;
            if (fixed) {
                if (parsed.handles !== 2) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
                testMargin(parsed, parsed.start[1] - parsed.start[0]);
            }
            if (unconstrained && (parsed.margin || parsed.limit)) throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
            parsed.events = {
                tap: tap || snap,
                drag,
                dragAll,
                smoothSteps,
                fixed,
                snap,
                hover,
                unconstrained
            };
        }
        function testTooltips(parsed, entry) {
            if (entry === false) return;
            if (entry === true || isValidPartialFormatter(entry)) {
                parsed.tooltips = [];
                for (var i = 0; i < parsed.handles; i++) parsed.tooltips.push(entry);
            } else {
                entry = asArray(entry);
                if (entry.length !== parsed.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
                entry.forEach((function(formatter) {
                    if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                }));
                parsed.tooltips = entry;
            }
        }
        function testHandleAttributes(parsed, entry) {
            if (entry.length !== parsed.handles) throw new Error("noUiSlider: must pass a attributes for all handles.");
            parsed.handleAttributes = entry;
        }
        function testAriaFormat(parsed, entry) {
            if (!isValidPartialFormatter(entry)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
            parsed.ariaFormat = entry;
        }
        function testFormat(parsed, entry) {
            if (!isValidFormatter(entry)) throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
            parsed.format = entry;
        }
        function testKeyboardSupport(parsed, entry) {
            if (typeof entry !== "boolean") throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
            parsed.keyboardSupport = entry;
        }
        function testDocumentElement(parsed, entry) {
            parsed.documentElement = entry;
        }
        function testCssPrefix(parsed, entry) {
            if (typeof entry !== "string" && entry !== false) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
            parsed.cssPrefix = entry;
        }
        function testCssClasses(parsed, entry) {
            if (typeof entry !== "object") throw new Error("noUiSlider: 'cssClasses' must be an object.");
            if (typeof parsed.cssPrefix === "string") {
                parsed.cssClasses = {};
                Object.keys(entry).forEach((function(key) {
                    parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
                }));
            } else parsed.cssClasses = entry;
        }
        function testOptions(options) {
            var parsed = {
                margin: null,
                limit: null,
                padding: null,
                animate: true,
                animationDuration: 300,
                ariaFormat: defaultFormatter,
                format: defaultFormatter
            };
            var tests = {
                step: {
                    r: false,
                    t: testStep
                },
                keyboardPageMultiplier: {
                    r: false,
                    t: testKeyboardPageMultiplier
                },
                keyboardMultiplier: {
                    r: false,
                    t: testKeyboardMultiplier
                },
                keyboardDefaultStep: {
                    r: false,
                    t: testKeyboardDefaultStep
                },
                start: {
                    r: true,
                    t: testStart
                },
                connect: {
                    r: true,
                    t: testConnect
                },
                direction: {
                    r: true,
                    t: testDirection
                },
                snap: {
                    r: false,
                    t: testSnap
                },
                animate: {
                    r: false,
                    t: testAnimate
                },
                animationDuration: {
                    r: false,
                    t: testAnimationDuration
                },
                range: {
                    r: true,
                    t: testRange
                },
                orientation: {
                    r: false,
                    t: testOrientation
                },
                margin: {
                    r: false,
                    t: testMargin
                },
                limit: {
                    r: false,
                    t: testLimit
                },
                padding: {
                    r: false,
                    t: testPadding
                },
                behaviour: {
                    r: true,
                    t: testBehaviour
                },
                ariaFormat: {
                    r: false,
                    t: testAriaFormat
                },
                format: {
                    r: false,
                    t: testFormat
                },
                tooltips: {
                    r: false,
                    t: testTooltips
                },
                keyboardSupport: {
                    r: true,
                    t: testKeyboardSupport
                },
                documentElement: {
                    r: false,
                    t: testDocumentElement
                },
                cssPrefix: {
                    r: true,
                    t: testCssPrefix
                },
                cssClasses: {
                    r: true,
                    t: testCssClasses
                },
                handleAttributes: {
                    r: false,
                    t: testHandleAttributes
                }
            };
            var defaults = {
                connect: false,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                keyboardSupport: true,
                cssPrefix: "noUi-",
                cssClasses,
                keyboardPageMultiplier: 5,
                keyboardMultiplier: 1,
                keyboardDefaultStep: 10
            };
            if (options.format && !options.ariaFormat) options.ariaFormat = options.format;
            Object.keys(tests).forEach((function(name) {
                if (!isSet(options[name]) && defaults[name] === void 0) {
                    if (tests[name].r) throw new Error("noUiSlider: '" + name + "' is required.");
                    return;
                }
                tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
            }));
            parsed.pips = options.pips;
            var d = document.createElement("div");
            var msPrefix = d.style.msTransform !== void 0;
            var noPrefix = d.style.transform !== void 0;
            parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
            var styles = [ [ "left", "top" ], [ "right", "bottom" ] ];
            parsed.style = styles[parsed.dir][parsed.ort];
            return parsed;
        }
        function scope(target, options, originalOptions) {
            var actions = getActions();
            var supportsTouchActionNone = getSupportsTouchActionNone();
            var supportsPassive = supportsTouchActionNone && getSupportsPassive();
            var scope_Target = target;
            var scope_Base;
            var scope_Handles;
            var scope_Connects;
            var scope_Pips;
            var scope_Tooltips;
            var scope_Spectrum = options.spectrum;
            var scope_Values = [];
            var scope_Locations = [];
            var scope_HandleNumbers = [];
            var scope_ActiveHandlesCount = 0;
            var scope_Events = {};
            var scope_Document = target.ownerDocument;
            var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
            var scope_Body = scope_Document.body;
            var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
            function addNodeTo(addTarget, className) {
                var div = scope_Document.createElement("div");
                if (className) addClass(div, className);
                addTarget.appendChild(div);
                return div;
            }
            function addOrigin(base, handleNumber) {
                var origin = addNodeTo(base, options.cssClasses.origin);
                var handle = addNodeTo(origin, options.cssClasses.handle);
                addNodeTo(handle, options.cssClasses.touchArea);
                handle.setAttribute("data-handle", String(handleNumber));
                if (options.keyboardSupport) {
                    handle.setAttribute("tabindex", "0");
                    handle.addEventListener("keydown", (function(event) {
                        return eventKeydown(event, handleNumber);
                    }));
                }
                if (options.handleAttributes !== void 0) {
                    var attributes_1 = options.handleAttributes[handleNumber];
                    Object.keys(attributes_1).forEach((function(attribute) {
                        handle.setAttribute(attribute, attributes_1[attribute]);
                    }));
                }
                handle.setAttribute("role", "slider");
                handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
                if (handleNumber === 0) addClass(handle, options.cssClasses.handleLower); else if (handleNumber === options.handles - 1) addClass(handle, options.cssClasses.handleUpper);
                origin.handle = handle;
                return origin;
            }
            function addConnect(base, add) {
                if (!add) return false;
                return addNodeTo(base, options.cssClasses.connect);
            }
            function addElements(connectOptions, base) {
                var connectBase = addNodeTo(base, options.cssClasses.connects);
                scope_Handles = [];
                scope_Connects = [];
                scope_Connects.push(addConnect(connectBase, connectOptions[0]));
                for (var i = 0; i < options.handles; i++) {
                    scope_Handles.push(addOrigin(base, i));
                    scope_HandleNumbers[i] = i;
                    scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
                }
            }
            function addSlider(addTarget) {
                addClass(addTarget, options.cssClasses.target);
                if (options.dir === 0) addClass(addTarget, options.cssClasses.ltr); else addClass(addTarget, options.cssClasses.rtl);
                if (options.ort === 0) addClass(addTarget, options.cssClasses.horizontal); else addClass(addTarget, options.cssClasses.vertical);
                var textDirection = getComputedStyle(addTarget).direction;
                if (textDirection === "rtl") addClass(addTarget, options.cssClasses.textDirectionRtl); else addClass(addTarget, options.cssClasses.textDirectionLtr);
                return addNodeTo(addTarget, options.cssClasses.base);
            }
            function addTooltip(handle, handleNumber) {
                if (!options.tooltips || !options.tooltips[handleNumber]) return false;
                return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
            }
            function isSliderDisabled() {
                return scope_Target.hasAttribute("disabled");
            }
            function isHandleDisabled(handleNumber) {
                var handleOrigin = scope_Handles[handleNumber];
                return handleOrigin.hasAttribute("disabled");
            }
            function disable(handleNumber) {
                if (handleNumber !== null && handleNumber !== void 0) {
                    scope_Handles[handleNumber].setAttribute("disabled", "");
                    scope_Handles[handleNumber].handle.removeAttribute("tabindex");
                } else {
                    scope_Target.setAttribute("disabled", "");
                    scope_Handles.forEach((function(handle) {
                        handle.handle.removeAttribute("tabindex");
                    }));
                }
            }
            function enable(handleNumber) {
                if (handleNumber !== null && handleNumber !== void 0) {
                    scope_Handles[handleNumber].removeAttribute("disabled");
                    scope_Handles[handleNumber].handle.setAttribute("tabindex", "0");
                } else {
                    scope_Target.removeAttribute("disabled");
                    scope_Handles.forEach((function(handle) {
                        handle.removeAttribute("disabled");
                        handle.handle.setAttribute("tabindex", "0");
                    }));
                }
            }
            function removeTooltips() {
                if (scope_Tooltips) {
                    removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                    scope_Tooltips.forEach((function(tooltip) {
                        if (tooltip) removeElement(tooltip);
                    }));
                    scope_Tooltips = null;
                }
            }
            function tooltips() {
                removeTooltips();
                scope_Tooltips = scope_Handles.map(addTooltip);
                bindEvent("update" + INTERNAL_EVENT_NS.tooltips, (function(values, handleNumber, unencoded) {
                    if (!scope_Tooltips || !options.tooltips) return;
                    if (scope_Tooltips[handleNumber] === false) return;
                    var formattedValue = values[handleNumber];
                    if (options.tooltips[handleNumber] !== true) formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                    scope_Tooltips[handleNumber].innerHTML = formattedValue;
                }));
            }
            function aria() {
                removeEvent("update" + INTERNAL_EVENT_NS.aria);
                bindEvent("update" + INTERNAL_EVENT_NS.aria, (function(values, handleNumber, unencoded, tap, positions) {
                    scope_HandleNumbers.forEach((function(index) {
                        var handle = scope_Handles[index];
                        var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                        var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                        var now = positions[index];
                        var text = String(options.ariaFormat.to(unencoded[index]));
                        min = scope_Spectrum.fromStepping(min).toFixed(1);
                        max = scope_Spectrum.fromStepping(max).toFixed(1);
                        now = scope_Spectrum.fromStepping(now).toFixed(1);
                        handle.children[0].setAttribute("aria-valuemin", min);
                        handle.children[0].setAttribute("aria-valuemax", max);
                        handle.children[0].setAttribute("aria-valuenow", now);
                        handle.children[0].setAttribute("aria-valuetext", text);
                    }));
                }));
            }
            function getGroup(pips) {
                if (pips.mode === PipsMode.Range || pips.mode === PipsMode.Steps) return scope_Spectrum.xVal;
                if (pips.mode === PipsMode.Count) {
                    if (pips.values < 2) throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                    var interval = pips.values - 1;
                    var spread = 100 / interval;
                    var values = [];
                    while (interval--) values[interval] = interval * spread;
                    values.push(100);
                    return mapToRange(values, pips.stepped);
                }
                if (pips.mode === PipsMode.Positions) return mapToRange(pips.values, pips.stepped);
                if (pips.mode === PipsMode.Values) {
                    if (pips.stepped) return pips.values.map((function(value) {
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    }));
                    return pips.values;
                }
                return [];
            }
            function mapToRange(values, stepped) {
                return values.map((function(value) {
                    return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
                }));
            }
            function generateSpread(pips) {
                function safeIncrement(value, increment) {
                    return Number((value + increment).toFixed(7));
                }
                var group = getGroup(pips);
                var indexes = {};
                var firstInRange = scope_Spectrum.xVal[0];
                var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
                var ignoreFirst = false;
                var ignoreLast = false;
                var prevPct = 0;
                group = unique(group.slice().sort((function(a, b) {
                    return a - b;
                })));
                if (group[0] !== firstInRange) {
                    group.unshift(firstInRange);
                    ignoreFirst = true;
                }
                if (group[group.length - 1] !== lastInRange) {
                    group.push(lastInRange);
                    ignoreLast = true;
                }
                group.forEach((function(current, index) {
                    var step;
                    var i;
                    var q;
                    var low = current;
                    var high = group[index + 1];
                    var newPct;
                    var pctDifference;
                    var pctPos;
                    var type;
                    var steps;
                    var realSteps;
                    var stepSize;
                    var isSteps = pips.mode === PipsMode.Steps;
                    if (isSteps) step = scope_Spectrum.xNumSteps[index];
                    if (!step) step = high - low;
                    if (high === void 0) high = low;
                    step = Math.max(step, 1e-7);
                    for (i = low; i <= high; i = safeIncrement(i, step)) {
                        newPct = scope_Spectrum.toStepping(i);
                        pctDifference = newPct - prevPct;
                        steps = pctDifference / (pips.density || 1);
                        realSteps = Math.round(steps);
                        stepSize = pctDifference / realSteps;
                        for (q = 1; q <= realSteps; q += 1) {
                            pctPos = prevPct + q * stepSize;
                            indexes[pctPos.toFixed(5)] = [ scope_Spectrum.fromStepping(pctPos), 0 ];
                        }
                        type = group.indexOf(i) > -1 ? PipsType.LargeValue : isSteps ? PipsType.SmallValue : PipsType.NoValue;
                        if (!index && ignoreFirst && i !== high) type = 0;
                        if (!(i === high && ignoreLast)) indexes[newPct.toFixed(5)] = [ i, type ];
                        prevPct = newPct;
                    }
                }));
                return indexes;
            }
            function addMarking(spread, filterFunc, formatter) {
                var _a, _b;
                var element = scope_Document.createElement("div");
                var valueSizeClasses = (_a = {}, _a[PipsType.None] = "", _a[PipsType.NoValue] = options.cssClasses.valueNormal, 
                _a[PipsType.LargeValue] = options.cssClasses.valueLarge, _a[PipsType.SmallValue] = options.cssClasses.valueSub, 
                _a);
                var markerSizeClasses = (_b = {}, _b[PipsType.None] = "", _b[PipsType.NoValue] = options.cssClasses.markerNormal, 
                _b[PipsType.LargeValue] = options.cssClasses.markerLarge, _b[PipsType.SmallValue] = options.cssClasses.markerSub, 
                _b);
                var valueOrientationClasses = [ options.cssClasses.valueHorizontal, options.cssClasses.valueVertical ];
                var markerOrientationClasses = [ options.cssClasses.markerHorizontal, options.cssClasses.markerVertical ];
                addClass(element, options.cssClasses.pips);
                addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
                function getClasses(type, source) {
                    var a = source === options.cssClasses.value;
                    var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                    var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                    return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
                }
                function addSpread(offset, value, type) {
                    type = filterFunc ? filterFunc(value, type) : type;
                    if (type === PipsType.None) return;
                    var node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.marker);
                    node.style[options.style] = offset + "%";
                    if (type > PipsType.NoValue) {
                        node = addNodeTo(element, false);
                        node.className = getClasses(type, options.cssClasses.value);
                        node.setAttribute("data-value", String(value));
                        node.style[options.style] = offset + "%";
                        node.innerHTML = String(formatter.to(value));
                    }
                }
                Object.keys(spread).forEach((function(offset) {
                    addSpread(offset, spread[offset][0], spread[offset][1]);
                }));
                return element;
            }
            function removePips() {
                if (scope_Pips) {
                    removeElement(scope_Pips);
                    scope_Pips = null;
                }
            }
            function pips(pips) {
                removePips();
                var spread = generateSpread(pips);
                var filter = pips.filter;
                var format = pips.format || {
                    to: function(value) {
                        return String(Math.round(value));
                    }
                };
                scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
                return scope_Pips;
            }
            function baseSize() {
                var rect = scope_Base.getBoundingClientRect();
                var alt = "offset" + [ "Width", "Height" ][options.ort];
                return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
            }
            function attachEvent(events, element, callback, data) {
                var method = function(event) {
                    var e = fixEvent(event, data.pageOffset, data.target || element);
                    if (!e) return false;
                    if (isSliderDisabled() && !data.doNotReject) return false;
                    if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) return false;
                    if (events === actions.start && e.buttons !== void 0 && e.buttons > 1) return false;
                    if (data.hover && e.buttons) return false;
                    if (!supportsPassive) e.preventDefault();
                    e.calcPoint = e.points[options.ort];
                    callback(e, data);
                    return;
                };
                var methods = [];
                events.split(" ").forEach((function(eventName) {
                    element.addEventListener(eventName, method, supportsPassive ? {
                        passive: true
                    } : false);
                    methods.push([ eventName, method ]);
                }));
                return methods;
            }
            function fixEvent(e, pageOffset, eventTarget) {
                var touch = e.type.indexOf("touch") === 0;
                var mouse = e.type.indexOf("mouse") === 0;
                var pointer = e.type.indexOf("pointer") === 0;
                var x = 0;
                var y = 0;
                if (e.type.indexOf("MSPointer") === 0) pointer = true;
                if (e.type === "mousedown" && !e.buttons && !e.touches) return false;
                if (touch) {
                    var isTouchOnTarget = function(checkTouch) {
                        var target = checkTouch.target;
                        return target === eventTarget || eventTarget.contains(target) || e.composed && e.composedPath().shift() === eventTarget;
                    };
                    if (e.type === "touchstart") {
                        var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                        if (targetTouches.length > 1) return false;
                        x = targetTouches[0].pageX;
                        y = targetTouches[0].pageY;
                    } else {
                        var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                        if (!targetTouch) return false;
                        x = targetTouch.pageX;
                        y = targetTouch.pageY;
                    }
                }
                pageOffset = pageOffset || getPageOffset(scope_Document);
                if (mouse || pointer) {
                    x = e.clientX + pageOffset.x;
                    y = e.clientY + pageOffset.y;
                }
                e.pageOffset = pageOffset;
                e.points = [ x, y ];
                e.cursor = mouse || pointer;
                return e;
            }
            function calcPointToPercentage(calcPoint) {
                var location = calcPoint - offset(scope_Base, options.ort);
                var proposal = location * 100 / baseSize();
                proposal = limit(proposal);
                return options.dir ? 100 - proposal : proposal;
            }
            function getClosestHandle(clickedPosition) {
                var smallestDifference = 100;
                var handleNumber = false;
                scope_Handles.forEach((function(handle, index) {
                    if (isHandleDisabled(index)) return;
                    var handlePosition = scope_Locations[index];
                    var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                    var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                    var isCloser = differenceWithThisHandle < smallestDifference;
                    var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                    if (isCloser || isCloserAfter || clickAtEdge) {
                        handleNumber = index;
                        smallestDifference = differenceWithThisHandle;
                    }
                }));
                return handleNumber;
            }
            function documentLeave(event, data) {
                if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) eventEnd(event, data);
            }
            function eventMove(event, data) {
                if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) return eventEnd(event, data);
                var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
                var proposal = movement * 100 / data.baseSize;
                moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
            }
            function eventEnd(event, data) {
                if (data.handle) {
                    removeClass(data.handle, options.cssClasses.active);
                    scope_ActiveHandlesCount -= 1;
                }
                data.listeners.forEach((function(c) {
                    scope_DocumentElement.removeEventListener(c[0], c[1]);
                }));
                if (scope_ActiveHandlesCount === 0) {
                    removeClass(scope_Target, options.cssClasses.drag);
                    setZindex();
                    if (event.cursor) {
                        scope_Body.style.cursor = "";
                        scope_Body.removeEventListener("selectstart", preventDefault);
                    }
                }
                if (options.events.smoothSteps) {
                    data.handleNumbers.forEach((function(handleNumber) {
                        setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
                    }));
                    data.handleNumbers.forEach((function(handleNumber) {
                        fireEvent("update", handleNumber);
                    }));
                }
                data.handleNumbers.forEach((function(handleNumber) {
                    fireEvent("change", handleNumber);
                    fireEvent("set", handleNumber);
                    fireEvent("end", handleNumber);
                }));
            }
            function eventStart(event, data) {
                if (data.handleNumbers.some(isHandleDisabled)) return;
                var handle;
                if (data.handleNumbers.length === 1) {
                    var handleOrigin = scope_Handles[data.handleNumbers[0]];
                    handle = handleOrigin.children[0];
                    scope_ActiveHandlesCount += 1;
                    addClass(handle, options.cssClasses.active);
                }
                event.stopPropagation();
                var listeners = [];
                var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                    target: event.target,
                    handle,
                    connect: data.connect,
                    listeners,
                    startCalcPoint: event.calcPoint,
                    baseSize: baseSize(),
                    pageOffset: event.pageOffset,
                    handleNumbers: data.handleNumbers,
                    buttonsProperty: event.buttons,
                    locations: scope_Locations.slice()
                });
                var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                    target: event.target,
                    handle,
                    listeners,
                    doNotReject: true,
                    handleNumbers: data.handleNumbers
                });
                var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                    target: event.target,
                    handle,
                    listeners,
                    doNotReject: true,
                    handleNumbers: data.handleNumbers
                });
                listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
                if (event.cursor) {
                    scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                    if (scope_Handles.length > 1) addClass(scope_Target, options.cssClasses.drag);
                    scope_Body.addEventListener("selectstart", preventDefault, false);
                }
                data.handleNumbers.forEach((function(handleNumber) {
                    fireEvent("start", handleNumber);
                }));
            }
            function eventTap(event) {
                event.stopPropagation();
                var proposal = calcPointToPercentage(event.calcPoint);
                var handleNumber = getClosestHandle(proposal);
                if (handleNumber === false) return;
                if (!options.events.snap) addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
                setHandle(handleNumber, proposal, true, true);
                setZindex();
                fireEvent("slide", handleNumber, true);
                fireEvent("update", handleNumber, true);
                if (!options.events.snap) {
                    fireEvent("change", handleNumber, true);
                    fireEvent("set", handleNumber, true);
                } else eventStart(event, {
                    handleNumbers: [ handleNumber ]
                });
            }
            function eventHover(event) {
                var proposal = calcPointToPercentage(event.calcPoint);
                var to = scope_Spectrum.getStep(proposal);
                var value = scope_Spectrum.fromStepping(to);
                Object.keys(scope_Events).forEach((function(targetEvent) {
                    if ("hover" === targetEvent.split(".")[0]) scope_Events[targetEvent].forEach((function(callback) {
                        callback.call(scope_Self, value);
                    }));
                }));
            }
            function eventKeydown(event, handleNumber) {
                if (isSliderDisabled() || isHandleDisabled(handleNumber)) return false;
                var horizontalKeys = [ "Left", "Right" ];
                var verticalKeys = [ "Down", "Up" ];
                var largeStepKeys = [ "PageDown", "PageUp" ];
                var edgeKeys = [ "Home", "End" ];
                if (options.dir && !options.ort) horizontalKeys.reverse(); else if (options.ort && !options.dir) {
                    verticalKeys.reverse();
                    largeStepKeys.reverse();
                }
                var key = event.key.replace("Arrow", "");
                var isLargeDown = key === largeStepKeys[0];
                var isLargeUp = key === largeStepKeys[1];
                var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
                var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
                var isMin = key === edgeKeys[0];
                var isMax = key === edgeKeys[1];
                if (!isDown && !isUp && !isMin && !isMax) return true;
                event.preventDefault();
                var to;
                if (isUp || isDown) {
                    var direction = isDown ? 0 : 1;
                    var steps = getNextStepsForHandle(handleNumber);
                    var step = steps[direction];
                    if (step === null) return false;
                    if (step === false) step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                    if (isLargeUp || isLargeDown) step *= options.keyboardPageMultiplier; else step *= options.keyboardMultiplier;
                    step = Math.max(step, 1e-7);
                    step *= isDown ? -1 : 1;
                    to = scope_Values[handleNumber] + step;
                } else if (isMax) to = options.spectrum.xVal[options.spectrum.xVal.length - 1]; else to = options.spectrum.xVal[0];
                setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
                fireEvent("slide", handleNumber);
                fireEvent("update", handleNumber);
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                return false;
            }
            function bindSliderEvents(behaviour) {
                if (!behaviour.fixed) scope_Handles.forEach((function(handle, index) {
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [ index ]
                    });
                }));
                if (behaviour.tap) attachEvent(actions.start, scope_Base, eventTap, {});
                if (behaviour.hover) attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true
                });
                if (behaviour.drag) scope_Connects.forEach((function(connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) return;
                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [ connect ];
                    var handlesToDrag = [ handleBefore, handleAfter ];
                    var handleNumbersToDrag = [ index - 1, index ];
                    addClass(connect, options.cssClasses.draggable);
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }
                    if (behaviour.dragAll) {
                        handlesToDrag = scope_Handles;
                        handleNumbersToDrag = scope_HandleNumbers;
                    }
                    eventHolders.forEach((function(eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: handlesToDrag,
                            handleNumbers: handleNumbersToDrag,
                            connect
                        });
                    }));
                }));
            }
            function bindEvent(namespacedEvent, callback) {
                scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
                scope_Events[namespacedEvent].push(callback);
                if (namespacedEvent.split(".")[0] === "update") scope_Handles.forEach((function(a, index) {
                    fireEvent("update", index);
                }));
            }
            function isInternalNamespace(namespace) {
                return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
            }
            function removeEvent(namespacedEvent) {
                var event = namespacedEvent && namespacedEvent.split(".")[0];
                var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
                Object.keys(scope_Events).forEach((function(bind) {
                    var tEvent = bind.split(".")[0];
                    var tNamespace = bind.substring(tEvent.length);
                    if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) if (!isInternalNamespace(tNamespace) || namespace === tNamespace) delete scope_Events[bind];
                }));
            }
            function fireEvent(eventName, handleNumber, tap) {
                Object.keys(scope_Events).forEach((function(targetEvent) {
                    var eventType = targetEvent.split(".")[0];
                    if (eventName === eventType) scope_Events[targetEvent].forEach((function(callback) {
                        callback.call(scope_Self, scope_Values.map(options.format.to), handleNumber, scope_Values.slice(), tap || false, scope_Locations.slice(), scope_Self);
                    }));
                }));
            }
            function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
                var distance;
                if (scope_Handles.length > 1 && !options.events.unconstrained) {
                    if (lookBackward && handleNumber > 0) {
                        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                        to = Math.max(to, distance);
                    }
                    if (lookForward && handleNumber < scope_Handles.length - 1) {
                        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                        to = Math.min(to, distance);
                    }
                }
                if (scope_Handles.length > 1 && options.limit) {
                    if (lookBackward && handleNumber > 0) {
                        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                        to = Math.min(to, distance);
                    }
                    if (lookForward && handleNumber < scope_Handles.length - 1) {
                        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                        to = Math.max(to, distance);
                    }
                }
                if (options.padding) {
                    if (handleNumber === 0) {
                        distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                        to = Math.max(to, distance);
                    }
                    if (handleNumber === scope_Handles.length - 1) {
                        distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                        to = Math.min(to, distance);
                    }
                }
                if (!smoothSteps) to = scope_Spectrum.getStep(to);
                to = limit(to);
                if (to === reference[handleNumber] && !getValue) return false;
                return to;
            }
            function inRuleOrder(v, a) {
                var o = options.ort;
                return (o ? a : v) + ", " + (o ? v : a);
            }
            function moveHandles(upward, proposal, locations, handleNumbers, connect) {
                var proposals = locations.slice();
                var firstHandle = handleNumbers[0];
                var smoothSteps = options.events.smoothSteps;
                var b = [ !upward, upward ];
                var f = [ upward, !upward ];
                handleNumbers = handleNumbers.slice();
                if (upward) handleNumbers.reverse();
                if (handleNumbers.length > 1) handleNumbers.forEach((function(handleNumber, o) {
                    var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                    if (to === false) proposal = 0; else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                })); else b = f = [ true ];
                var state = false;
                handleNumbers.forEach((function(handleNumber, o) {
                    state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
                }));
                if (state) {
                    handleNumbers.forEach((function(handleNumber) {
                        fireEvent("update", handleNumber);
                        fireEvent("slide", handleNumber);
                    }));
                    if (connect != void 0) fireEvent("drag", firstHandle);
                }
            }
            function transformDirection(a, b) {
                return options.dir ? 100 - a - b : a;
            }
            function updateHandlePosition(handleNumber, to) {
                scope_Locations[handleNumber] = to;
                scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
                var translation = transformDirection(to, 0) - scope_DirOffset;
                var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
                scope_Handles[handleNumber].style[options.transformRule] = translateRule;
                updateConnect(handleNumber);
                updateConnect(handleNumber + 1);
            }
            function setZindex() {
                scope_HandleNumbers.forEach((function(handleNumber) {
                    var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                    var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                    scope_Handles[handleNumber].style.zIndex = String(zIndex);
                }));
            }
            function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
                if (!exactInput) to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
                if (to === false) return false;
                updateHandlePosition(handleNumber, to);
                return true;
            }
            function updateConnect(index) {
                if (!scope_Connects[index]) return;
                var l = 0;
                var h = 100;
                if (index !== 0) l = scope_Locations[index - 1];
                if (index !== scope_Connects.length - 1) h = scope_Locations[index];
                var connectWidth = h - l;
                var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
                var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
                scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
            }
            function resolveToValue(to, handleNumber) {
                if (to === null || to === false || to === void 0) return scope_Locations[handleNumber];
                if (typeof to === "number") to = String(to);
                to = options.format.from(to);
                if (to !== false) to = scope_Spectrum.toStepping(to);
                if (to === false || isNaN(to)) return scope_Locations[handleNumber];
                return to;
            }
            function valueSet(input, fireSetEvent, exactInput) {
                var values = asArray(input);
                var isInit = scope_Locations[0] === void 0;
                fireSetEvent = fireSetEvent === void 0 ? true : fireSetEvent;
                if (options.animate && !isInit) addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
                scope_HandleNumbers.forEach((function(handleNumber) {
                    setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
                }));
                var i = scope_HandleNumbers.length === 1 ? 0 : 1;
                if (isInit && scope_Spectrum.hasNoSize()) {
                    exactInput = true;
                    scope_Locations[0] = 0;
                    if (scope_HandleNumbers.length > 1) {
                        var space_1 = 100 / (scope_HandleNumbers.length - 1);
                        scope_HandleNumbers.forEach((function(handleNumber) {
                            scope_Locations[handleNumber] = handleNumber * space_1;
                        }));
                    }
                }
                for (;i < scope_HandleNumbers.length; ++i) scope_HandleNumbers.forEach((function(handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                }));
                setZindex();
                scope_HandleNumbers.forEach((function(handleNumber) {
                    fireEvent("update", handleNumber);
                    if (values[handleNumber] !== null && fireSetEvent) fireEvent("set", handleNumber);
                }));
            }
            function valueReset(fireSetEvent) {
                valueSet(options.start, fireSetEvent);
            }
            function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
                handleNumber = Number(handleNumber);
                if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
                setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
                fireEvent("update", handleNumber);
                if (fireSetEvent) fireEvent("set", handleNumber);
            }
            function valueGet(unencoded) {
                if (unencoded === void 0) unencoded = false;
                if (unencoded) return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
                var values = scope_Values.map(options.format.to);
                if (values.length === 1) return values[0];
                return values;
            }
            function destroy() {
                removeEvent(INTERNAL_EVENT_NS.aria);
                removeEvent(INTERNAL_EVENT_NS.tooltips);
                Object.keys(options.cssClasses).forEach((function(key) {
                    removeClass(scope_Target, options.cssClasses[key]);
                }));
                while (scope_Target.firstChild) scope_Target.removeChild(scope_Target.firstChild);
                delete scope_Target.noUiSlider;
            }
            function getNextStepsForHandle(handleNumber) {
                var location = scope_Locations[handleNumber];
                var nearbySteps = scope_Spectrum.getNearbySteps(location);
                var value = scope_Values[handleNumber];
                var increment = nearbySteps.thisStep.step;
                var decrement = null;
                if (options.snap) return [ value - nearbySteps.stepBefore.startValue || null, nearbySteps.stepAfter.startValue - value || null ];
                if (increment !== false) if (value + increment > nearbySteps.stepAfter.startValue) increment = nearbySteps.stepAfter.startValue - value;
                if (value > nearbySteps.thisStep.startValue) decrement = nearbySteps.thisStep.step; else if (nearbySteps.stepBefore.step === false) decrement = false; else decrement = value - nearbySteps.stepBefore.highestStep;
                if (location === 100) increment = null; else if (location === 0) decrement = null;
                var stepDecimals = scope_Spectrum.countStepDecimals();
                if (increment !== null && increment !== false) increment = Number(increment.toFixed(stepDecimals));
                if (decrement !== null && decrement !== false) decrement = Number(decrement.toFixed(stepDecimals));
                return [ decrement, increment ];
            }
            function getNextSteps() {
                return scope_HandleNumbers.map(getNextStepsForHandle);
            }
            function updateOptions(optionsToUpdate, fireSetEvent) {
                var v = valueGet();
                var updateAble = [ "margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips" ];
                updateAble.forEach((function(name) {
                    if (optionsToUpdate[name] !== void 0) originalOptions[name] = optionsToUpdate[name];
                }));
                var newOptions = testOptions(originalOptions);
                updateAble.forEach((function(name) {
                    if (optionsToUpdate[name] !== void 0) options[name] = newOptions[name];
                }));
                scope_Spectrum = newOptions.spectrum;
                options.margin = newOptions.margin;
                options.limit = newOptions.limit;
                options.padding = newOptions.padding;
                if (options.pips) pips(options.pips); else removePips();
                if (options.tooltips) tooltips(); else removeTooltips();
                scope_Locations = [];
                valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
            }
            function setupSlider() {
                scope_Base = addSlider(scope_Target);
                addElements(options.connect, scope_Base);
                bindSliderEvents(options.events);
                valueSet(options.start);
                if (options.pips) pips(options.pips);
                if (options.tooltips) tooltips();
                aria();
            }
            setupSlider();
            var scope_Self = {
                destroy,
                steps: getNextSteps,
                on: bindEvent,
                off: removeEvent,
                get: valueGet,
                set: valueSet,
                setHandle: valueSetHandle,
                reset: valueReset,
                disable,
                enable,
                __moveHandles: function(upward, proposal, handleNumbers) {
                    moveHandles(upward, proposal, scope_Locations, handleNumbers);
                },
                options: originalOptions,
                updateOptions,
                target: scope_Target,
                removePips,
                removeTooltips,
                getPositions: function() {
                    return scope_Locations.slice();
                },
                getTooltips: function() {
                    return scope_Tooltips;
                },
                getOrigins: function() {
                    return scope_Handles;
                },
                pips
            };
            return scope_Self;
        }
        function initialize(target, originalOptions) {
            if (!target || !target.nodeName) throw new Error("noUiSlider: create requires a single element, got: " + target);
            if (target.noUiSlider) throw new Error("noUiSlider: Slider was already initialized.");
            var options = testOptions(originalOptions);
            var api = scope(target, options, originalOptions);
            target.noUiSlider = api;
            return api;
        }
        function rangeInit(slider, type) {
            initialize(slider, {
                start: 5,
                connect: "lower",
                step: 1,
                range: {
                    min: [ +slider.dataset.min ],
                    max: [ +slider.dataset.max ]
                }
            });
            slider.noUiSlider.on("change", (function(values, handle, unencoded, tap, positions, noUiSlider) {
                if (type == "period") credCalculator.paymentPeriod = Math.floor(values[0]);
                if (type == "borrow") credCalculator.borrowAmount = values[0];
                credCalculator.setTotalPrice();
            }));
        }
        rangeInit(document.querySelector("#paymentPeriodRange"), "period");
        rangeInit(document.querySelector("#borrowRange"), "borrow");
    })();
})();