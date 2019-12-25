/**
 * Language files for Fantastic Novel Template
 * FIle name : global.js
 * Developer : SubMaRk
 * Website   : https://naynum.engineer
 * Date      : July 2, 2019
 * Update    : July 2, 2019
 */

/* DARK & LIGHT - Toggle */
window.addEventListener('DOMContentLoaded', function(){
    var mode = localStorage.getItem("mode");
    if (mode == 'false') {
        $(document.head).append('<link id="mode" rel="stylesheet" href="/templates/fantastic-novel/static/css/light.css">');
        $("#toggle").prop('checked', false);
    } else if (mode == 'true') {
        $(document.head).append('<link id="mode" rel="stylesheet" href="/templates/fantastic-novel/static/css/dark.css">');
        $("#toggle").prop('checked', true);
    } else {
        $(document.head).append('<link id="mode" rel="stylesheet" href="/templates/fantastic-novel/static/css/light.css">');
        $("#toggle").prop('checked', false);
        localStorage.setItem("mode", 'false');
    };
});

window.onload = function () {
    var e = localStorage.getItem("mode"),
        t = "/templates/fantastic-novel/static/css/dark.css",
        a = "/templates/fantastic-novel/static/css/light.css";
    "false" == e ? ($('link[id="mode"]').attr("href", a), $("#toggle").prop("checked", !1)) : "true" == e ? ($('link[id="mode"]').attr("href", t), $("#toggle").prop("checked", !0)) : ($("#toggle").prop("checked", !1), localStorage.setItem("mode", "false")), 
    $("#toggle").change(function () {
        $(this).is(":checked") ? ($('link[id="mode"]').attr("href", t), localStorage.setItem("mode", "true")) : ($('link[id="mode"]').attr("href", a), localStorage.setItem("mode", "false"))
    })
};

$(".count").text(function(){var t=$(this).html();if(t<1e3)$(this).html(t)();else{var e=numeral(t).format("0,0");$(this).html(e)}});

$(document).ready(function () {
    // Search Box
    $('.search').on('click', function () {
        $(this).toggleClass('active');
        $('.search').toggleClass('search--active');
        $('.body').toggleClass('page--active');

        if ($('.header__btn').hasClass('header__btn--active')) {
            $('.header__btn').toggleClass('header__btn--active');
            $('.header__nav').toggleClass('header__nav--active');
        }
    });
});

/**
 * @file jquery.translate.js
 * @brief jQuery plugin to translate text in the client side.
 * @author Manuel Fernandes
 * @site
 * @version 0.9
 * @license MIT license <http://www.opensource.org/licenses/MIT>
 *
 * translate.js is a jQuery plugin to translate text in the client side.
 *
 */

(function ($) {
    $.fn.translate = function (options) {
        var that = this;
        var settings = {
            css: "trn",
            lang: "en"
        };
        settings = $.extend(settings, options || {});
        if (settings.css.lastIndexOf(".", 0) !== 0)
            settings.css = "." + settings.css;
        var t = settings.t;
        this.lang = function (l) {
            if (l) {
                settings.lang = l;
                this.translate(settings)
            }
            return settings.lang
        };
        this.get = function (index) {
            var res = index;
            try {
                res = t[index][settings.lang]
            } catch (err) {
                return index
            }
            if (res)
                return res;
            else return index
        };
        this.g = this.get;
        this.find(settings.css).each(function (i) {
            var $this = $(this);
            var trn_key = $this.attr("data-trn");
            if (!trn_key) {
                trn_key = $this.html();
                $this.attr("data-trn", trn_key)
            }
            $this.html(that.get(trn_key))
        });
        return this
    }
})(jQuery)

/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
! function (a, b) {
    "function" == typeof define && define.amd ? define(b) : "object" == typeof module && module.exports ? module.exports = b() : a.numeral = b()
}(this, function () {
    function a(a, b) {
        this._input = a, this._value = b
    }
    var b, c, d = "2.0.6",
        e = {},
        f = {},
        g = {
            currentLocale: "en",
            zeroFormat: null,
            nullFormat: null,
            defaultFormat: "0,0",
            scalePercentBy100: !0
        },
        h = {
            currentLocale: g.currentLocale,
            zeroFormat: g.zeroFormat,
            nullFormat: g.nullFormat,
            defaultFormat: g.defaultFormat,
            scalePercentBy100: g.scalePercentBy100
        };
    return b = function (d) {
            var f, g, i, j;
            if (b.isNumeral(d)) f = d.value();
            else if (0 === d || "undefined" == typeof d) f = 0;
            else if (null === d || c.isNaN(d)) f = null;
            else if ("string" == typeof d)
                if (h.zeroFormat && d === h.zeroFormat) f = 0;
                else if (h.nullFormat && d === h.nullFormat || !d.replace(/[^0-9]+/g, "").length) f = null;
            else {
                for (g in e)
                    if (j = "function" == typeof e[g].regexps.unformat ? e[g].regexps.unformat() : e[g].regexps.unformat, j && d.match(j)) {
                        i = e[g].unformat;
                        break
                    } i = i || b._.stringToNumber, f = i(d)
            } else f = Number(d) || null;
            return new a(d, f)
        }, b.version = d, b.isNumeral = function (b) {
            return b instanceof a
        }, b._ = c = {
            numberToFormat: function (a, c, d) {
                var e, g, h, i, j, k, l, m = f[b.options.currentLocale],
                    n = !1,
                    o = !1,
                    p = 0,
                    q = "",
                    r = 1e12,
                    s = 1e9,
                    t = 1e6,
                    u = 1e3,
                    v = "",
                    w = !1;
                if (a = a || 0, g = Math.abs(a), b._.includes(c, "(") ? (n = !0, c = c.replace(/[\(|\)]/g, "")) : (b._.includes(c, "+") || b._.includes(c, "-")) && (j = b._.includes(c, "+") ? c.indexOf("+") : 0 > a ? c.indexOf("-") : -1, c = c.replace(/[\+|\-]/g, "")), b._.includes(c, "a") && (e = c.match(/a(k|m|b|t)?/), e = e ? e[1] : !1, b._.includes(c, " a") && (q = " "), c = c.replace(new RegExp(q + "a[kmbt]?"), ""), g >= r && !e || "t" === e ? (q += m.abbreviations.trillion, a /= r) : r > g && g >= s && !e || "b" === e ? (q += m.abbreviations.billion, a /= s) : s > g && g >= t && !e || "m" === e ? (q += m.abbreviations.million, a /= t) : (t > g && g >= u && !e || "k" === e) && (q += m.abbreviations.thousand, a /= u)), b._.includes(c, "[.]") && (o = !0, c = c.replace("[.]", ".")), h = a.toString().split(".")[0], i = c.split(".")[1], k = c.indexOf(","), p = (c.split(".")[0].split(",")[0].match(/0/g) || []).length, i ? (b._.includes(i, "[") ? (i = i.replace("]", ""), i = i.split("["), v = b._.toFixed(a, i[0].length + i[1].length, d, i[1].length)) : v = b._.toFixed(a, i.length, d), h = v.split(".")[0], v = b._.includes(v, ".") ? m.delimiters.decimal + v.split(".")[1] : "", o && 0 === Number(v.slice(1)) && (v = "")) : h = b._.toFixed(a, 0, d), q && !e && Number(h) >= 1e3 && q !== m.abbreviations.trillion) switch (h = String(Number(h) / 1e3), q) {
                    case m.abbreviations.thousand:
                        q = m.abbreviations.million;
                        break;
                    case m.abbreviations.million:
                        q = m.abbreviations.billion;
                        break;
                    case m.abbreviations.billion:
                        q = m.abbreviations.trillion
                }
                if (b._.includes(h, "-") && (h = h.slice(1), w = !0), h.length < p)
                    for (var x = p - h.length; x > 0; x--) h = "0" + h;
                return k > -1 && (h = h.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + m.delimiters.thousands)), 0 === c.indexOf(".") && (h = ""), l = h + v + (q ? q : ""), n ? l = (n && w ? "(" : "") + l + (n && w ? ")" : "") : j >= 0 ? l = 0 === j ? (w ? "-" : "+") + l : l + (w ? "-" : "+") : w && (l = "-" + l), l
            },
            stringToNumber: function (a) {
                var b, c, d, e = f[h.currentLocale],
                    g = a,
                    i = {
                        thousand: 3,
                        million: 6,
                        billion: 9,
                        trillion: 12
                    };
                if (h.zeroFormat && a === h.zeroFormat) c = 0;
                else if (h.nullFormat && a === h.nullFormat || !a.replace(/[^0-9]+/g, "").length) c = null;
                else {
                    c = 1, "." !== e.delimiters.decimal && (a = a.replace(/\./g, "").replace(e.delimiters.decimal, "."));
                    for (b in i)
                        if (d = new RegExp("[^a-zA-Z]" + e.abbreviations[b] + "(?:\\)|(\\" + e.currency.symbol + ")?(?:\\))?)?$"), g.match(d)) {
                            c *= Math.pow(10, i[b]);
                            break
                        } c *= (a.split("-").length + Math.min(a.split("(").length - 1, a.split(")").length - 1)) % 2 ? 1 : -1, a = a.replace(/[^0-9\.]+/g, ""), c *= Number(a)
                }
                return c
            },
            isNaN: function (a) {
                return "number" == typeof a && isNaN(a)
            },
            includes: function (a, b) {
                return -1 !== a.indexOf(b)
            },
            insert: function (a, b, c) {
                return a.slice(0, c) + b + a.slice(c)
            },
            reduce: function (a, b) {
                if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
                if ("function" != typeof b) throw new TypeError(b + " is not a function");
                var c, d = Object(a),
                    e = d.length >>> 0,
                    f = 0;
                if (3 === arguments.length) c = arguments[2];
                else {
                    for (; e > f && !(f in d);) f++;
                    if (f >= e) throw new TypeError("Reduce of empty array with no initial value");
                    c = d[f++]
                }
                for (; e > f; f++) f in d && (c = b(c, d[f], f, d));
                return c
            },
            multiplier: function (a) {
                var b = a.toString().split(".");
                return b.length < 2 ? 1 : Math.pow(10, b[1].length)
            },
            correctionFactor: function () {
                var a = Array.prototype.slice.call(arguments);
                return a.reduce(function (a, b) {
                    var d = c.multiplier(b);
                    return a > d ? a : d
                }, 1)
            },
            toFixed: function (a, b, c, d) {
                var e, f, g, h, i = a.toString().split("."),
                    j = b - (d || 0);
                return e = 2 === i.length ? Math.min(Math.max(i[1].length, j), b) : j, g = Math.pow(10, e), h = (c(a + "e+" + e) / g).toFixed(e), d > b - e && (f = new RegExp("\\.?0{1," + (d - (b - e)) + "}$"), h = h.replace(f, "")), h
            }
        }, b.options = h, b.formats = e, b.locales = f, b.locale = function (a) {
            return a && (h.currentLocale = a.toLowerCase()), h.currentLocale
        }, b.localeData = function (a) {
            if (!a) return f[h.currentLocale];
            if (a = a.toLowerCase(), !f[a]) throw new Error("Unknown locale : " + a);
            return f[a]
        }, b.reset = function () {
            for (var a in g) h[a] = g[a]
        }, b.zeroFormat = function (a) {
            h.zeroFormat = "string" == typeof a ? a : null
        }, b.nullFormat = function (a) {
            h.nullFormat = "string" == typeof a ? a : null
        }, b.defaultFormat = function (a) {
            h.defaultFormat = "string" == typeof a ? a : "0.0"
        }, b.register = function (a, b, c) {
            if (b = b.toLowerCase(), this[a + "s"][b]) throw new TypeError(b + " " + a + " already registered.");
            return this[a + "s"][b] = c, c
        }, b.validate = function (a, c) {
            var d, e, f, g, h, i, j, k;
            if ("string" != typeof a && (a += "", console.warn && console.warn("Numeral.js: Value is not string. It has been co-erced to: ", a)), a = a.trim(), a.match(/^\d+$/)) return !0;
            if ("" === a) return !1;
            try {
                j = b.localeData(c)
            } catch (l) {
                j = b.localeData(b.locale())
            }
            return f = j.currency.symbol, h = j.abbreviations, d = j.delimiters.decimal, e = "." === j.delimiters.thousands ? "\\." : j.delimiters.thousands, k = a.match(/^[^\d]+/), null !== k && (a = a.substr(1), k[0] !== f) ? !1 : (k = a.match(/[^\d]+$/), null !== k && (a = a.slice(0, -1), k[0] !== h.thousand && k[0] !== h.million && k[0] !== h.billion && k[0] !== h.trillion) ? !1 : (i = new RegExp(e + "{2}"), a.match(/[^\d.,]/g) ? !1 : (g = a.split(d), g.length > 2 ? !1 : g.length < 2 ? !!g[0].match(/^\d+.*\d$/) && !g[0].match(i) : 1 === g[0].length ? !!g[0].match(/^\d+$/) && !g[0].match(i) && !!g[1].match(/^\d+$/) : !!g[0].match(/^\d+.*\d$/) && !g[0].match(i) && !!g[1].match(/^\d+$/))))
        }, b.fn = a.prototype = {
            clone: function () {
                return b(this)
            },
            format: function (a, c) {
                var d, f, g, i = this._value,
                    j = a || h.defaultFormat;
                if (c = c || Math.round, 0 === i && null !== h.zeroFormat) f = h.zeroFormat;
                else if (null === i && null !== h.nullFormat) f = h.nullFormat;
                else {
                    for (d in e)
                        if (j.match(e[d].regexps.format)) {
                            g = e[d].format;
                            break
                        } g = g || b._.numberToFormat, f = g(i, j, c)
                }
                return f
            },
            value: function () {
                return this._value
            },
            input: function () {
                return this._input
            },
            set: function (a) {
                return this._value = Number(a), this
            },
            add: function (a) {
                function b(a, b, c, e) {
                    return a + Math.round(d * b)
                }
                var d = c.correctionFactor.call(null, this._value, a);
                return this._value = c.reduce([this._value, a], b, 0) / d, this
            },
            subtract: function (a) {
                function b(a, b, c, e) {
                    return a - Math.round(d * b)
                }
                var d = c.correctionFactor.call(null, this._value, a);
                return this._value = c.reduce([a], b, Math.round(this._value * d)) / d, this
            },
            multiply: function (a) {
                function b(a, b, d, e) {
                    var f = c.correctionFactor(a, b);
                    return Math.round(a * f) * Math.round(b * f) / Math.round(f * f)
                }
                return this._value = c.reduce([this._value, a], b, 1), this
            },
            divide: function (a) {
                function b(a, b, d, e) {
                    var f = c.correctionFactor(a, b);
                    return Math.round(a * f) / Math.round(b * f)
                }
                return this._value = c.reduce([this._value, a], b), this
            },
            difference: function (a) {
                return Math.abs(b(this._value).subtract(a).value())
            }
        }, b.register("locale", "en", {
            delimiters: {
                thousands: ",",
                decimal: "."
            },
            abbreviations: {
                thousand: "k",
                million: "m",
                billion: "b",
                trillion: "t"
            },
            ordinal: function (a) {
                var b = a % 10;
                return 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th"
            },
            currency: {
                symbol: "$"
            }
        }),
        function () {
            b.register("format", "bps", {
                regexps: {
                    format: /(BPS)/,
                    unformat: /(BPS)/
                },
                format: function (a, c, d) {
                    var e, f = b._.includes(c, " BPS") ? " " : "";
                    return a = 1e4 * a, c = c.replace(/\s?BPS/, ""), e = b._.numberToFormat(a, c, d), b._.includes(e, ")") ? (e = e.split(""), e.splice(-1, 0, f + "BPS"), e = e.join("")) : e = e + f + "BPS", e
                },
                unformat: function (a) {
                    return +(1e-4 * b._.stringToNumber(a)).toFixed(15)
                }
            })
        }(),
        function () {
            var a = {
                    base: 1e3,
                    suffixes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
                },
                c = {
                    base: 1024,
                    suffixes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
                },
                d = a.suffixes.concat(c.suffixes.filter(function (b) {
                    return a.suffixes.indexOf(b) < 0
                })),
                e = d.join("|");
            e = "(" + e.replace("B", "B(?!PS)") + ")", b.register("format", "bytes", {
                regexps: {
                    format: /([0\s]i?b)/,
                    unformat: new RegExp(e)
                },
                format: function (d, e, f) {
                    var g, h, i, j, k = b._.includes(e, "ib") ? c : a,
                        l = b._.includes(e, " b") || b._.includes(e, " ib") ? " " : "";
                    for (e = e.replace(/\s?i?b/, ""), h = 0; h <= k.suffixes.length; h++)
                        if (i = Math.pow(k.base, h), j = Math.pow(k.base, h + 1), null === d || 0 === d || d >= i && j > d) {
                            l += k.suffixes[h], i > 0 && (d /= i);
                            break
                        } return g = b._.numberToFormat(d, e, f), g + l
                },
                unformat: function (d) {
                    var e, f, g = b._.stringToNumber(d);
                    if (g) {
                        for (e = a.suffixes.length - 1; e >= 0; e--) {
                            if (b._.includes(d, a.suffixes[e])) {
                                f = Math.pow(a.base, e);
                                break
                            }
                            if (b._.includes(d, c.suffixes[e])) {
                                f = Math.pow(c.base, e);
                                break
                            }
                        }
                        g *= f || 1
                    }
                    return g
                }
            })
        }(),
        function () {
            b.register("format", "currency", {
                regexps: {
                    format: /(\$)/
                },
                format: function (a, c, d) {
                    var e, f, g, h = b.locales[b.options.currentLocale],
                        i = {
                            before: c.match(/^([\+|\-|\(|\s|\$]*)/)[0],
                            after: c.match(/([\+|\-|\)|\s|\$]*)$/)[0]
                        };
                    for (c = c.replace(/\s?\$\s?/, ""), e = b._.numberToFormat(a, c, d), a >= 0 ? (i.before = i.before.replace(/[\-\(]/, ""), i.after = i.after.replace(/[\-\)]/, "")) : 0 > a && !b._.includes(i.before, "-") && !b._.includes(i.before, "(") && (i.before = "-" + i.before), g = 0; g < i.before.length; g++) switch (f = i.before[g]) {
                        case "$":
                            e = b._.insert(e, h.currency.symbol, g);
                            break;
                        case " ":
                            e = b._.insert(e, " ", g + h.currency.symbol.length - 1)
                    }
                    for (g = i.after.length - 1; g >= 0; g--) switch (f = i.after[g]) {
                        case "$":
                            e = g === i.after.length - 1 ? e + h.currency.symbol : b._.insert(e, h.currency.symbol, -(i.after.length - (1 + g)));
                            break;
                        case " ":
                            e = g === i.after.length - 1 ? e + " " : b._.insert(e, " ", -(i.after.length - (1 + g) + h.currency.symbol.length - 1))
                    }
                    return e
                }
            })
        }(),
        function () {
            b.register("format", "exponential", {
                regexps: {
                    format: /(e\+|e-)/,
                    unformat: /(e\+|e-)/
                },
                format: function (a, c, d) {
                    var e, f = "number" != typeof a || b._.isNaN(a) ? "0e+0" : a.toExponential(),
                        g = f.split("e");
                    return c = c.replace(/e[\+|\-]{1}0/, ""), e = b._.numberToFormat(Number(g[0]), c, d), e + "e" + g[1]
                },
                unformat: function (a) {
                    function c(a, c, d, e) {
                        var f = b._.correctionFactor(a, c),
                            g = a * f * (c * f) / (f * f);
                        return g
                    }
                    var d = b._.includes(a, "e+") ? a.split("e+") : a.split("e-"),
                        e = Number(d[0]),
                        f = Number(d[1]);
                    return f = b._.includes(a, "e-") ? f *= -1 : f, b._.reduce([e, Math.pow(10, f)], c, 1)
                }
            })
        }(),
        function () {
            b.register("format", "ordinal", {
                regexps: {
                    format: /(o)/
                },
                format: function (a, c, d) {
                    var e, f = b.locales[b.options.currentLocale],
                        g = b._.includes(c, " o") ? " " : "";
                    return c = c.replace(/\s?o/, ""), g += f.ordinal(a), e = b._.numberToFormat(a, c, d), e + g
                }
            })
        }(),
        function () {
            b.register("format", "percentage", {
                regexps: {
                    format: /(%)/,
                    unformat: /(%)/
                },
                format: function (a, c, d) {
                    var e, f = b._.includes(c, " %") ? " " : "";
                    return b.options.scalePercentBy100 && (a = 100 * a), c = c.replace(/\s?\%/, ""), e = b._.numberToFormat(a, c, d), b._.includes(e, ")") ? (e = e.split(""), e.splice(-1, 0, f + "%"), e = e.join("")) : e = e + f + "%", e
                },
                unformat: function (a) {
                    var c = b._.stringToNumber(a);
                    return b.options.scalePercentBy100 ? .01 * c : c
                }
            })
        }(),
        function () {
            b.register("format", "time", {
                regexps: {
                    format: /(:)/,
                    unformat: /(:)/
                },
                format: function (a, b, c) {
                    var d = Math.floor(a / 60 / 60),
                        e = Math.floor((a - 60 * d * 60) / 60),
                        f = Math.round(a - 60 * d * 60 - 60 * e);
                    return d + ":" + (10 > e ? "0" + e : e) + ":" + (10 > f ? "0" + f : f)
                },
                unformat: function (a) {
                    var b = a.split(":"),
                        c = 0;
                    return 3 === b.length ? (c += 60 * Number(b[0]) * 60, c += 60 * Number(b[1]), c += Number(b[2])) : 2 === b.length && (c += 60 * Number(b[0]), c += Number(b[1])), Number(c)
                }
            })
        }(), b
});