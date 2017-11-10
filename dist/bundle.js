/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Knockout JavaScript library v3.2.0
 * (c) Steven Sanderson - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function () {
  (function (p) {
    var s = this || (0, eval)("this"),
        v = s.document,
        L = s.navigator,
        w = s.jQuery,
        D = s.JSON;(function (p) {
      "function" === "function" && "object" === ( false ? "undefined" : _typeof(exports)) && "object" === ( false ? "undefined" : _typeof(module)) ? p(module.exports || exports, !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__], __WEBPACK_AMD_DEFINE_FACTORY__ = (p), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : p(s.ko = {});
    })(function (M, N) {
      function H(a, d) {
        return null === a || (typeof a === "undefined" ? "undefined" : _typeof(a)) in R ? a === d : !1;
      }function S(a, d) {
        var c;return function () {
          c || (c = setTimeout(function () {
            c = p;a();
          }, d));
        };
      }function T(a, d) {
        var c;return function () {
          clearTimeout(c);
          c = setTimeout(a, d);
        };
      }function I(b, d, c, e) {
        a.d[b] = { init: function init(b, h, k, f, m) {
            var l, q;a.s(function () {
              var f = a.a.c(h()),
                  k = !c !== !f,
                  z = !q;if (z || d || k !== l) z && a.Y.la() && (q = a.a.ia(a.f.childNodes(b), !0)), k ? (z || a.f.T(b, a.a.ia(q)), a.Ca(e ? e(m, f) : m, b)) : a.f.ja(b), l = k;
            }, null, { o: b });return { controlsDescendantBindings: !0 };
          } };a.h.ha[b] = !1;a.f.Q[b] = !0;
      }var a = "undefined" !== typeof M ? M : {};a.b = function (b, d) {
        for (var c = b.split("."), e = a, g = 0; g < c.length - 1; g++) {
          e = e[c[g]];
        }e[c[c.length - 1]] = d;
      };a.A = function (a, d, c) {
        a[d] = c;
      };a.version = "3.2.0";
      a.b("version", a.version);a.a = function () {
        function b(a, b) {
          for (var c in a) {
            a.hasOwnProperty(c) && b(c, a[c]);
          }
        }function d(a, b) {
          if (b) for (var c in b) {
            b.hasOwnProperty(c) && (a[c] = b[c]);
          }return a;
        }function c(a, b) {
          a.__proto__ = b;return a;
        }var e = { __proto__: [] } instanceof Array,
            g = {},
            h = {};g[L && /Firefox\/2/i.test(L.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];g.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(g, function (a, b) {
          if (b.length) for (var c = 0, d = b.length; c < d; c++) {
            h[b[c]] = a;
          }
        });var k = { propertychange: !0 },
            f = v && function () {
          for (var a = 3, b = v.createElement("div"), c = b.getElementsByTagName("i"); b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e", c[0];) {}return 4 < a ? a : p;
        }();return { vb: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/], u: function u(a, b) {
            for (var c = 0, d = a.length; c < d; c++) {
              b(a[c], c);
            }
          }, m: function m(a, b) {
            if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(a, b);for (var c = 0, d = a.length; c < d; c++) {
              if (a[c] === b) return c;
            }return -1;
          }, qb: function qb(a, b, c) {
            for (var d = 0, f = a.length; d < f; d++) {
              if (b.call(c, a[d], d)) return a[d];
            }return null;
          }, ua: function ua(m, b) {
            var c = a.a.m(m, b);0 < c ? m.splice(c, 1) : 0 === c && m.shift();
          }, rb: function rb(m) {
            m = m || [];for (var b = [], c = 0, d = m.length; c < d; c++) {
              0 > a.a.m(b, m[c]) && b.push(m[c]);
            }return b;
          }, Da: function Da(a, b) {
            a = a || [];for (var c = [], d = 0, f = a.length; d < f; d++) {
              c.push(b(a[d], d));
            }return c;
          }, ta: function ta(a, b) {
            a = a || [];for (var c = [], d = 0, f = a.length; d < f; d++) {
              b(a[d], d) && c.push(a[d]);
            }return c;
          }, ga: function ga(a, b) {
            if (b instanceof Array) a.push.apply(a, b);else for (var c = 0, d = b.length; c < d; c++) {
              a.push(b[c]);
            }return a;
          }, ea: function ea(b, c, d) {
            var f = a.a.m(a.a.Xa(b), c);0 > f ? d && b.push(c) : d || b.splice(f, 1);
          }, xa: e, extend: d, za: c, Aa: e ? c : d, G: b, na: function na(a, b) {
            if (!a) return a;var c = {},
                d;for (d in a) {
              a.hasOwnProperty(d) && (c[d] = b(a[d], d, a));
            }return c;
          }, Ka: function Ka(b) {
            for (; b.firstChild;) {
              a.removeNode(b.firstChild);
            }
          }, oc: function oc(b) {
            b = a.a.S(b);for (var c = v.createElement("div"), d = 0, f = b.length; d < f; d++) {
              c.appendChild(a.R(b[d]));
            }return c;
          }, ia: function ia(b, c) {
            for (var d = 0, f = b.length, e = []; d < f; d++) {
              var k = b[d].cloneNode(!0);e.push(c ? a.R(k) : k);
            }return e;
          }, T: function T(b, c) {
            a.a.Ka(b);if (c) for (var d = 0, f = c.length; d < f; d++) {
              b.appendChild(c[d]);
            }
          }, Lb: function Lb(b, c) {
            var d = b.nodeType ? [b] : b;if (0 < d.length) {
              for (var f = d[0], e = f.parentNode, k = 0, g = c.length; k < g; k++) {
                e.insertBefore(c[k], f);
              }k = 0;for (g = d.length; k < g; k++) {
                a.removeNode(d[k]);
              }
            }
          }, ka: function ka(a, b) {
            if (a.length) {
              for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b;) {
                a.shift();
              }if (1 < a.length) {
                var c = a[0],
                    d = a[a.length - 1];for (a.length = 0; c !== d;) {
                  if (a.push(c), c = c.nextSibling, !c) return;
                }a.push(d);
              }
            }return a;
          }, Nb: function Nb(a, b) {
            7 > f ? a.setAttribute("selected", b) : a.selected = b;
          }, cb: function cb(a) {
            return null === a || a === p ? "" : a.trim ? a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
          }, vc: function vc(a, b) {
            a = a || "";return b.length > a.length ? !1 : a.substring(0, b.length) === b;
          }, cc: function cc(a, b) {
            if (a === b) return !0;if (11 === a.nodeType) return !1;if (b.contains) return b.contains(3 === a.nodeType ? a.parentNode : a);if (b.compareDocumentPosition) return 16 == (b.compareDocumentPosition(a) & 16);for (; a && a != b;) {
              a = a.parentNode;
            }return !!a;
          }, Ja: function Ja(b) {
            return a.a.cc(b, b.ownerDocument.documentElement);
          }, ob: function ob(b) {
            return !!a.a.qb(b, a.a.Ja);
          }, t: function t(a) {
            return a && a.tagName && a.tagName.toLowerCase();
          }, n: function n(b, c, d) {
            var e = f && k[c];if (!e && w) w(b).bind(c, d);else if (e || "function" != typeof b.addEventListener) {
              if ("undefined" != typeof b.attachEvent) {
                var g = function g(a) {
                  d.call(b, a);
                },
                    h = "on" + c;b.attachEvent(h, g);a.a.w.da(b, function () {
                  b.detachEvent(h, g);
                });
              } else throw Error("Browser doesn't support addEventListener or attachEvent");
            } else b.addEventListener(c, d, !1);
          }, oa: function oa(b, c) {
            if (!b || !b.nodeType) throw Error("element must be a DOM node when calling triggerEvent");var d;"input" === a.a.t(b) && b.type && "click" == c.toLowerCase() ? (d = b.type, d = "checkbox" == d || "radio" == d) : d = !1;if (w && !d) w(b).trigger(c);else if ("function" == typeof v.createEvent) {
              if ("function" == typeof b.dispatchEvent) d = v.createEvent(h[c] || "HTMLEvents"), d.initEvent(c, !0, !0, s, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, b), b.dispatchEvent(d);else throw Error("The supplied element doesn't support dispatchEvent");
            } else if (d && b.click) b.click();else if ("undefined" != typeof b.fireEvent) b.fireEvent("on" + c);else throw Error("Browser doesn't support triggering events");
          }, c: function c(b) {
            return a.C(b) ? b() : b;
          }, Xa: function Xa(b) {
            return a.C(b) ? b.v() : b;
          }, Ba: function Ba(b, c, d) {
            if (c) {
              var f = /\S+/g,
                  e = b.className.match(f) || [];a.a.u(c.match(f), function (b) {
                a.a.ea(e, b, d);
              });b.className = e.join(" ");
            }
          }, bb: function bb(b, c) {
            var d = a.a.c(c);if (null === d || d === p) d = "";var f = a.f.firstChild(b);!f || 3 != f.nodeType || a.f.nextSibling(f) ? a.f.T(b, [b.ownerDocument.createTextNode(d)]) : f.data = d;a.a.fc(b);
          }, Mb: function Mb(a, b) {
            a.name = b;if (7 >= f) try {
              a.mergeAttributes(v.createElement("<input name='" + a.name + "'/>"), !1);
            } catch (c) {}
          }, fc: function fc(a) {
            9 <= f && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom));
          }, dc: function dc(a) {
            if (f) {
              var b = a.style.width;a.style.width = 0;a.style.width = b;
            }
          }, sc: function sc(b, c) {
            b = a.a.c(b);c = a.a.c(c);for (var d = [], f = b; f <= c; f++) {
              d.push(f);
            }return d;
          }, S: function S(a) {
            for (var b = [], c = 0, d = a.length; c < d; c++) {
              b.push(a[c]);
            }return b;
          }, yc: 6 === f, zc: 7 === f, L: f, xb: function xb(b, c) {
            for (var d = a.a.S(b.getElementsByTagName("input")).concat(a.a.S(b.getElementsByTagName("textarea"))), f = "string" == typeof c ? function (a) {
              return a.name === c;
            } : function (a) {
              return c.test(a.name);
            }, e = [], k = d.length - 1; 0 <= k; k--) {
              f(d[k]) && e.push(d[k]);
            }return e;
          }, pc: function pc(b) {
            return "string" == typeof b && (b = a.a.cb(b)) ? D && D.parse ? D.parse(b) : new Function("return " + b)() : null;
          }, eb: function eb(b, c, d) {
            if (!D || !D.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
            return D.stringify(a.a.c(b), c, d);
          }, qc: function qc(c, d, f) {
            f = f || {};var e = f.params || {},
                k = f.includeFields || this.vb,
                g = c;if ("object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && "form" === a.a.t(c)) for (var g = c.action, h = k.length - 1; 0 <= h; h--) {
              for (var r = a.a.xb(c, k[h]), E = r.length - 1; 0 <= E; E--) {
                e[r[E].name] = r[E].value;
              }
            }d = a.a.c(d);var y = v.createElement("form");y.style.display = "none";y.action = g;y.method = "post";for (var p in d) {
              c = v.createElement("input"), c.type = "hidden", c.name = p, c.value = a.a.eb(a.a.c(d[p])), y.appendChild(c);
            }b(e, function (a, b) {
              var c = v.createElement("input");
              c.type = "hidden";c.name = a;c.value = b;y.appendChild(c);
            });v.body.appendChild(y);f.submitter ? f.submitter(y) : y.submit();setTimeout(function () {
              y.parentNode.removeChild(y);
            }, 0);
          } };
      }();a.b("utils", a.a);a.b("utils.arrayForEach", a.a.u);a.b("utils.arrayFirst", a.a.qb);a.b("utils.arrayFilter", a.a.ta);a.b("utils.arrayGetDistinctValues", a.a.rb);a.b("utils.arrayIndexOf", a.a.m);a.b("utils.arrayMap", a.a.Da);a.b("utils.arrayPushAll", a.a.ga);a.b("utils.arrayRemoveItem", a.a.ua);a.b("utils.extend", a.a.extend);a.b("utils.fieldsIncludedWithJsonPost", a.a.vb);a.b("utils.getFormFields", a.a.xb);a.b("utils.peekObservable", a.a.Xa);a.b("utils.postJson", a.a.qc);a.b("utils.parseJson", a.a.pc);a.b("utils.registerEventHandler", a.a.n);a.b("utils.stringifyJson", a.a.eb);a.b("utils.range", a.a.sc);a.b("utils.toggleDomNodeCssClass", a.a.Ba);a.b("utils.triggerEvent", a.a.oa);a.b("utils.unwrapObservable", a.a.c);a.b("utils.objectForEach", a.a.G);a.b("utils.addOrRemoveItem", a.a.ea);a.b("unwrap", a.a.c);Function.prototype.bind || (Function.prototype.bind = function (a) {
        var d = this,
            c = Array.prototype.slice.call(arguments);a = c.shift();return function () {
          return d.apply(a, c.concat(Array.prototype.slice.call(arguments)));
        };
      });a.a.e = new function () {
        function a(b, h) {
          var k = b[c];if (!k || "null" === k || !e[k]) {
            if (!h) return p;k = b[c] = "ko" + d++;e[k] = {};
          }return e[k];
        }var d = 0,
            c = "__ko__" + new Date().getTime(),
            e = {};return { get: function get(c, d) {
            var e = a(c, !1);return e === p ? p : e[d];
          }, set: function set(c, d, e) {
            if (e !== p || a(c, !1) !== p) a(c, !0)[d] = e;
          }, clear: function clear(a) {
            var b = a[c];return b ? (delete e[b], a[c] = null, !0) : !1;
          }, F: function F() {
            return d++ + c;
          } };
      }();a.b("utils.domData", a.a.e);a.b("utils.domData.clear", a.a.e.clear);a.a.w = new function () {
        function b(b, d) {
          var f = a.a.e.get(b, c);f === p && d && (f = [], a.a.e.set(b, c, f));return f;
        }function d(c) {
          var e = b(c, !1);if (e) for (var e = e.slice(0), f = 0; f < e.length; f++) {
            e[f](c);
          }a.a.e.clear(c);a.a.w.cleanExternalData(c);if (g[c.nodeType]) for (e = c.firstChild; c = e;) {
            e = c.nextSibling, 8 === c.nodeType && d(c);
          }
        }var c = a.a.e.F(),
            e = { 1: !0, 8: !0, 9: !0 },
            g = { 1: !0, 9: !0 };return { da: function da(a, c) {
            if ("function" != typeof c) throw Error("Callback must be a function");
            b(a, !0).push(c);
          }, Kb: function Kb(d, e) {
            var f = b(d, !1);f && (a.a.ua(f, e), 0 == f.length && a.a.e.set(d, c, p));
          }, R: function R(b) {
            if (e[b.nodeType] && (d(b), g[b.nodeType])) {
              var c = [];a.a.ga(c, b.getElementsByTagName("*"));for (var f = 0, m = c.length; f < m; f++) {
                d(c[f]);
              }
            }return b;
          }, removeNode: function removeNode(b) {
            a.R(b);b.parentNode && b.parentNode.removeChild(b);
          }, cleanExternalData: function cleanExternalData(a) {
            w && "function" == typeof w.cleanData && w.cleanData([a]);
          } };
      }();a.R = a.a.w.R;a.removeNode = a.a.w.removeNode;a.b("cleanNode", a.R);a.b("removeNode", a.removeNode);a.b("utils.domNodeDisposal", a.a.w);a.b("utils.domNodeDisposal.addDisposeCallback", a.a.w.da);a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.w.Kb);(function () {
        a.a.ba = function (b) {
          var d;if (w) {
            if (w.parseHTML) d = w.parseHTML(b) || [];else {
              if ((d = w.clean([b])) && d[0]) {
                for (b = d[0]; b.parentNode && 11 !== b.parentNode.nodeType;) {
                  b = b.parentNode;
                }b.parentNode && b.parentNode.removeChild(b);
              }
            }
          } else {
            var c = a.a.cb(b).toLowerCase();d = v.createElement("div");c = c.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "</table>"] || !c.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!c.indexOf("<td") || !c.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || [0, "", ""];b = "ignored<div>" + c[1] + b + c[2] + "</div>";for ("function" == typeof s.innerShiv ? d.appendChild(s.innerShiv(b)) : d.innerHTML = b; c[0]--;) {
              d = d.lastChild;
            }d = a.a.S(d.lastChild.childNodes);
          }return d;
        };a.a.$a = function (b, d) {
          a.a.Ka(b);d = a.a.c(d);if (null !== d && d !== p) if ("string" != typeof d && (d = d.toString()), w) w(b).html(d);else for (var c = a.a.ba(d), e = 0; e < c.length; e++) {
            b.appendChild(c[e]);
          }
        };
      })();a.b("utils.parseHtmlFragment", a.a.ba);a.b("utils.setHtml", a.a.$a);a.D = function () {
        function b(c, d) {
          if (c) if (8 == c.nodeType) {
            var g = a.D.Gb(c.nodeValue);null != g && d.push({ bc: c, mc: g });
          } else if (1 == c.nodeType) for (var g = 0, h = c.childNodes, k = h.length; g < k; g++) {
            b(h[g], d);
          }
        }var d = {};return { Ua: function Ua(a) {
            if ("function" != typeof a) throw Error("You can only pass a function to ko.memoization.memoize()");var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);d[b] = a;return "\x3c!--[ko_memo:" + b + "]--\x3e";
          }, Rb: function Rb(a, b) {
            var g = d[a];if (g === p) throw Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized.");try {
              return g.apply(null, b || []), !0;
            } finally {
              delete d[a];
            }
          }, Sb: function Sb(c, d) {
            var g = [];b(c, g);for (var h = 0, k = g.length; h < k; h++) {
              var f = g[h].bc,
                  m = [f];d && a.a.ga(m, d);a.D.Rb(g[h].mc, m);f.nodeValue = "";f.parentNode && f.parentNode.removeChild(f);
            }
          }, Gb: function Gb(a) {
            return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null;
          } };
      }();a.b("memoization", a.D);a.b("memoization.memoize", a.D.Ua);
      a.b("memoization.unmemoize", a.D.Rb);a.b("memoization.parseMemoText", a.D.Gb);a.b("memoization.unmemoizeDomNodeAndDescendants", a.D.Sb);a.La = { throttle: function throttle(b, d) {
          b.throttleEvaluation = d;var c = null;return a.j({ read: b, write: function write(a) {
              clearTimeout(c);c = setTimeout(function () {
                b(a);
              }, d);
            } });
        }, rateLimit: function rateLimit(a, d) {
          var c, e, g;"number" == typeof d ? c = d : (c = d.timeout, e = d.method);g = "notifyWhenChangesStop" == e ? T : S;a.Ta(function (a) {
            return g(a, c);
          });
        }, notify: function notify(a, d) {
          a.equalityComparer = "always" == d ? null : H;
        } };var R = { undefined: 1, "boolean": 1, number: 1, string: 1 };a.b("extenders", a.La);a.Pb = function (b, d, c) {
        this.target = b;this.wa = d;this.ac = c;this.Cb = !1;a.A(this, "dispose", this.K);
      };a.Pb.prototype.K = function () {
        this.Cb = !0;this.ac();
      };a.P = function () {
        a.a.Aa(this, a.P.fn);this.M = {};
      };var G = "change",
          A = { U: function U(b, d, c) {
          var e = this;c = c || G;var g = new a.Pb(e, d ? b.bind(d) : b, function () {
            a.a.ua(e.M[c], g);e.nb && e.nb();
          });e.va && e.va(c);e.M[c] || (e.M[c] = []);e.M[c].push(g);return g;
        }, notifySubscribers: function notifySubscribers(b, d) {
          d = d || G;if (this.Ab(d)) try {
            a.k.Ea();
            for (var c = this.M[d].slice(0), e = 0, g; g = c[e]; ++e) {
              g.Cb || g.wa(b);
            }
          } finally {
            a.k.end();
          }
        }, Ta: function Ta(b) {
          var d = this,
              c = a.C(d),
              e,
              g,
              h;d.qa || (d.qa = d.notifySubscribers, d.notifySubscribers = function (a, b) {
            b && b !== G ? "beforeChange" === b ? d.kb(a) : d.qa(a, b) : d.lb(a);
          });var k = b(function () {
            c && h === d && (h = d());e = !1;d.Pa(g, h) && d.qa(g = h);
          });d.lb = function (a) {
            e = !0;h = a;k();
          };d.kb = function (a) {
            e || (g = a, d.qa(a, "beforeChange"));
          };
        }, Ab: function Ab(a) {
          return this.M[a] && this.M[a].length;
        }, yb: function yb() {
          var b = 0;a.a.G(this.M, function (a, c) {
            b += c.length;
          });
          return b;
        }, Pa: function Pa(a, d) {
          return !this.equalityComparer || !this.equalityComparer(a, d);
        }, extend: function extend(b) {
          var d = this;b && a.a.G(b, function (b, e) {
            var g = a.La[b];"function" == typeof g && (d = g(d, e) || d);
          });return d;
        } };a.A(A, "subscribe", A.U);a.A(A, "extend", A.extend);a.A(A, "getSubscriptionsCount", A.yb);a.a.xa && a.a.za(A, Function.prototype);a.P.fn = A;a.Db = function (a) {
        return null != a && "function" == typeof a.U && "function" == typeof a.notifySubscribers;
      };a.b("subscribable", a.P);a.b("isSubscribable", a.Db);a.Y = a.k = function () {
        function b(a) {
          c.push(e);
          e = a;
        }function d() {
          e = c.pop();
        }var c = [],
            e,
            g = 0;return { Ea: b, end: d, Jb: function Jb(b) {
            if (e) {
              if (!a.Db(b)) throw Error("Only subscribable things can act as dependencies");e.wa(b, b.Vb || (b.Vb = ++g));
            }
          }, B: function B(a, c, f) {
            try {
              return b(), a.apply(c, f || []);
            } finally {
              d();
            }
          }, la: function la() {
            if (e) return e.s.la();
          }, ma: function ma() {
            if (e) return e.ma;
          } };
      }();a.b("computedContext", a.Y);a.b("computedContext.getDependenciesCount", a.Y.la);a.b("computedContext.isInitial", a.Y.ma);a.b("computedContext.isSleeping", a.Y.Ac);a.p = function (b) {
        function d() {
          if (0 < arguments.length) return d.Pa(c, arguments[0]) && (d.X(), c = arguments[0], d.W()), this;a.k.Jb(d);return c;
        }var c = b;a.P.call(d);a.a.Aa(d, a.p.fn);d.v = function () {
          return c;
        };d.W = function () {
          d.notifySubscribers(c);
        };d.X = function () {
          d.notifySubscribers(c, "beforeChange");
        };a.A(d, "peek", d.v);a.A(d, "valueHasMutated", d.W);a.A(d, "valueWillMutate", d.X);return d;
      };a.p.fn = { equalityComparer: H };var F = a.p.rc = "__ko_proto__";a.p.fn[F] = a.p;a.a.xa && a.a.za(a.p.fn, a.P.fn);a.Ma = function (b, d) {
        return null === b || b === p || b[F] === p ? !1 : b[F] === d ? !0 : a.Ma(b[F], d);
      };a.C = function (b) {
        return a.Ma(b, a.p);
      };a.Ra = function (b) {
        return "function" == typeof b && b[F] === a.p || "function" == typeof b && b[F] === a.j && b.hc ? !0 : !1;
      };a.b("observable", a.p);a.b("isObservable", a.C);a.b("isWriteableObservable", a.Ra);a.b("isWritableObservable", a.Ra);a.aa = function (b) {
        b = b || [];if ("object" != (typeof b === "undefined" ? "undefined" : _typeof(b)) || !("length" in b)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b = a.p(b);a.a.Aa(b, a.aa.fn);return b.extend({ trackArrayChanges: !0 });
      };
      a.aa.fn = { remove: function remove(b) {
          for (var d = this.v(), c = [], e = "function" != typeof b || a.C(b) ? function (a) {
            return a === b;
          } : b, g = 0; g < d.length; g++) {
            var h = d[g];e(h) && (0 === c.length && this.X(), c.push(h), d.splice(g, 1), g--);
          }c.length && this.W();return c;
        }, removeAll: function removeAll(b) {
          if (b === p) {
            var d = this.v(),
                c = d.slice(0);this.X();d.splice(0, d.length);this.W();return c;
          }return b ? this.remove(function (c) {
            return 0 <= a.a.m(b, c);
          }) : [];
        }, destroy: function destroy(b) {
          var d = this.v(),
              c = "function" != typeof b || a.C(b) ? function (a) {
            return a === b;
          } : b;this.X();
          for (var e = d.length - 1; 0 <= e; e--) {
            c(d[e]) && (d[e]._destroy = !0);
          }this.W();
        }, destroyAll: function destroyAll(b) {
          return b === p ? this.destroy(function () {
            return !0;
          }) : b ? this.destroy(function (d) {
            return 0 <= a.a.m(b, d);
          }) : [];
        }, indexOf: function indexOf(b) {
          var d = this();return a.a.m(d, b);
        }, replace: function replace(a, d) {
          var c = this.indexOf(a);0 <= c && (this.X(), this.v()[c] = d, this.W());
        } };a.a.u("pop push reverse shift sort splice unshift".split(" "), function (b) {
        a.aa.fn[b] = function () {
          var a = this.v();this.X();this.sb(a, b, arguments);a = a[b].apply(a, arguments);this.W();
          return a;
        };
      });a.a.u(["slice"], function (b) {
        a.aa.fn[b] = function () {
          var a = this();return a[b].apply(a, arguments);
        };
      });a.a.xa && a.a.za(a.aa.fn, a.p.fn);a.b("observableArray", a.aa);var J = "arrayChange";a.La.trackArrayChanges = function (b) {
        function d() {
          if (!c) {
            c = !0;var d = b.notifySubscribers;b.notifySubscribers = function (a, b) {
              b && b !== G || ++g;return d.apply(this, arguments);
            };var f = [].concat(b.v() || []);e = null;b.U(function (c) {
              c = [].concat(c || []);if (b.Ab(J)) {
                var d;if (!e || 1 < g) e = a.a.Fa(f, c, { sparse: !0 });d = e;d.length && b.notifySubscribers(d, J);
              }f = c;e = null;g = 0;
            });
          }
        }if (!b.sb) {
          var c = !1,
              e = null,
              g = 0,
              h = b.U;b.U = b.subscribe = function (a, b, c) {
            c === J && d();return h.apply(this, arguments);
          };b.sb = function (b, d, m) {
            function l(a, b, c) {
              return q[q.length] = { status: a, value: b, index: c };
            }if (c && !g) {
              var q = [],
                  h = b.length,
                  t = m.length,
                  z = 0;switch (d) {case "push":
                  z = h;case "unshift":
                  for (d = 0; d < t; d++) {
                    l("added", m[d], z + d);
                  }break;case "pop":
                  z = h - 1;case "shift":
                  h && l("deleted", b[z], z);break;case "splice":
                  d = Math.min(Math.max(0, 0 > m[0] ? h + m[0] : m[0]), h);for (var h = 1 === t ? h : Math.min(d + (m[1] || 0), h), t = d + t - 2, z = Math.max(h, t), u = [], r = [], E = 2; d < z; ++d, ++E) {
                    d < h && r.push(l("deleted", b[d], d)), d < t && u.push(l("added", m[E], d));
                  }a.a.wb(r, u);break;default:
                  return;}e = q;
            }
          };
        }
      };a.s = a.j = function (b, d, c) {
        function e() {
          a.a.G(v, function (a, b) {
            b.K();
          });v = {};
        }function g() {
          e();C = 0;u = !0;n = !1;
        }function h() {
          var a = f.throttleEvaluation;a && 0 <= a ? (clearTimeout(P), P = setTimeout(k, a)) : f.ib ? f.ib() : k();
        }function k(b) {
          if (t) {
            if (E) throw Error("A 'pure' computed must not be called recursively");
          } else if (!u) {
            if (w && w()) {
              if (!z) {
                _s();return;
              }
            } else z = !1;
            t = !0;if (y) try {
              var c = {};a.k.Ea({ wa: function wa(a, b) {
                  c[b] || (c[b] = 1, ++C);
                }, s: f, ma: p });C = 0;q = r.call(d);
            } finally {
              a.k.end(), t = !1;
            } else try {
              var e = v,
                  m = C;a.k.Ea({ wa: function wa(a, b) {
                  u || (m && e[b] ? (v[b] = e[b], ++C, delete e[b], --m) : v[b] || (v[b] = a.U(h), ++C));
                }, s: f, ma: E ? p : !C });v = {};C = 0;try {
                var l = d ? r.call(d) : r();
              } finally {
                a.k.end(), m && a.a.G(e, function (a, b) {
                  b.K();
                }), n = !1;
              }f.Pa(q, l) && (f.notifySubscribers(q, "beforeChange"), q = l, !0 !== b && f.notifySubscribers(q));
            } finally {
              t = !1;
            }C || _s();
          }
        }function f() {
          if (0 < arguments.length) {
            if ("function" === typeof O) O.apply(d, arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");return this;
          }a.k.Jb(f);n && k(!0);return q;
        }function m() {
          n && !C && k(!0);return q;
        }function l() {
          return n || 0 < C;
        }var q,
            n = !0,
            t = !1,
            z = !1,
            u = !1,
            r = b,
            E = !1,
            y = !1;r && "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) ? (c = r, r = c.read) : (c = c || {}, r || (r = c.read));if ("function" != typeof r) throw Error("Pass a function that returns the value of the ko.computed");var O = c.write,
            x = c.disposeWhenNodeIsRemoved || c.o || null,
            B = c.disposeWhen || c.Ia,
            w = B,
            _s = g,
            v = {},
            C = 0,
            P = null;d || (d = c.owner);a.P.call(f);a.a.Aa(f, a.j.fn);f.v = m;f.la = function () {
          return C;
        };f.hc = "function" === typeof c.write;f.K = function () {
          _s();
        };f.Z = l;var A = f.Ta;f.Ta = function (a) {
          A.call(f, a);f.ib = function () {
            f.kb(q);n = !0;f.lb(f);
          };
        };c.pure ? (y = E = !0, f.va = function () {
          y && (y = !1, k(!0));
        }, f.nb = function () {
          f.yb() || (e(), y = n = !0);
        }) : c.deferEvaluation && (f.va = function () {
          m();delete f.va;
        });a.A(f, "peek", f.v);a.A(f, "dispose", f.K);a.A(f, "isActive", f.Z);a.A(f, "getDependenciesCount", f.la);x && (z = !0, x.nodeType && (w = function w() {
          return !a.a.Ja(x) || B && B();
        }));y || c.deferEvaluation || k();x && l() && x.nodeType && (_s = function s() {
          a.a.w.Kb(x, _s);g();
        }, a.a.w.da(x, _s));return f;
      };a.jc = function (b) {
        return a.Ma(b, a.j);
      };A = a.p.rc;a.j[A] = a.p;a.j.fn = { equalityComparer: H };a.j.fn[A] = a.j;a.a.xa && a.a.za(a.j.fn, a.P.fn);a.b("dependentObservable", a.j);a.b("computed", a.j);a.b("isComputed", a.jc);a.Ib = function (b, d) {
        if ("function" === typeof b) return a.s(b, d, { pure: !0 });b = a.a.extend({}, b);b.pure = !0;return a.s(b, d);
      };a.b("pureComputed", a.Ib);(function () {
        function b(a, g, h) {
          h = h || new c();a = g(a);if ("object" != (typeof a === "undefined" ? "undefined" : _typeof(a)) || null === a || a === p || a instanceof Date || a instanceof String || a instanceof Number || a instanceof Boolean) return a;var k = a instanceof Array ? [] : {};h.save(a, k);d(a, function (c) {
            var d = g(a[c]);switch (typeof d === "undefined" ? "undefined" : _typeof(d)) {case "boolean":case "number":case "string":case "function":
                k[c] = d;break;case "object":case "undefined":
                var l = h.get(d);k[c] = l !== p ? l : b(d, g, h);}
          });return k;
        }function d(a, b) {
          if (a instanceof Array) {
            for (var c = 0; c < a.length; c++) {
              b(c);
            }"function" == typeof a.toJSON && b("toJSON");
          } else for (c in a) {
            b(c);
          }
        }function c() {
          this.keys = [];this.hb = [];
        }a.Qb = function (c) {
          if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c, function (b) {
            for (var c = 0; a.C(b) && 10 > c; c++) {
              b = b();
            }return b;
          });
        };a.toJSON = function (b, c, d) {
          b = a.Qb(b);return a.a.eb(b, c, d);
        };c.prototype = { save: function save(b, c) {
            var d = a.a.m(this.keys, b);0 <= d ? this.hb[d] = c : (this.keys.push(b), this.hb.push(c));
          }, get: function get(b) {
            b = a.a.m(this.keys, b);return 0 <= b ? this.hb[b] : p;
          } };
      })();
      a.b("toJS", a.Qb);a.b("toJSON", a.toJSON);(function () {
        a.i = { q: function q(b) {
            switch (a.a.t(b)) {case "option":
                return !0 === b.__ko__hasDomDataOptionValue__ ? a.a.e.get(b, a.d.options.Va) : 7 >= a.a.L ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;case "select":
                return 0 <= b.selectedIndex ? a.i.q(b.options[b.selectedIndex]) : p;default:
                return b.value;}
          }, ca: function ca(b, d, c) {
            switch (a.a.t(b)) {case "option":
                switch (typeof d === "undefined" ? "undefined" : _typeof(d)) {case "string":
                    a.a.e.set(b, a.d.options.Va, p);"__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__;b.value = d;break;default:
                    a.a.e.set(b, a.d.options.Va, d), b.__ko__hasDomDataOptionValue__ = !0, b.value = "number" === typeof d ? d : "";}break;case "select":
                if ("" === d || null === d) d = p;for (var e = -1, g = 0, h = b.options.length, k; g < h; ++g) {
                  if (k = a.i.q(b.options[g]), k == d || "" == k && d === p) {
                    e = g;break;
                  }
                }if (c || 0 <= e || d === p && 1 < b.size) b.selectedIndex = e;break;default:
                if (null === d || d === p) d = "";b.value = d;}
          } };
      })();a.b("selectExtensions", a.i);a.b("selectExtensions.readValue", a.i.q);a.b("selectExtensions.writeValue", a.i.ca);a.h = function () {
        function b(b) {
          b = a.a.cb(b);123 === b.charCodeAt(0) && (b = b.slice(1, -1));var c = [],
              d = b.match(e),
              k,
              n,
              t = 0;if (d) {
            d.push(",");for (var z = 0, u; u = d[z]; ++z) {
              var r = u.charCodeAt(0);if (44 === r) {
                if (0 >= t) {
                  k && c.push(n ? { key: k, value: n.join("") } : { unknown: k });k = n = t = 0;continue;
                }
              } else if (58 === r) {
                if (!n) continue;
              } else if (47 === r && z && 1 < u.length) (r = d[z - 1].match(g)) && !h[r[0]] && (b = b.substr(b.indexOf(u) + 1), d = b.match(e), d.push(","), z = -1, u = "/");else if (40 === r || 123 === r || 91 === r) ++t;else if (41 === r || 125 === r || 93 === r) --t;else if (!k && !n) {
                k = 34 === r || 39 === r ? u.slice(1, -1) : u;continue;
              }n ? n.push(u) : n = [u];
            }
          }return c;
        }var d = ["true", "false", "null", "undefined"],
            c = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
            e = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"),
            g = /[\])"'A-Za-z0-9_$]+$/,
            h = { "in": 1, "return": 1, "typeof": 1 },
            k = {};return { ha: [], V: k, Wa: b, ya: function ya(f, m) {
            function e(b, m) {
              var f;if (!z) {
                var u = a.getBindingHandler(b);if (u && u.preprocess && !(m = u.preprocess(m, b, e))) return;if (u = k[b]) f = m, 0 <= a.a.m(d, f) ? f = !1 : (u = f.match(c), f = null === u ? !1 : u[1] ? "Object(" + u[1] + ")" + u[2] : f), u = f;u && h.push("'" + b + "':function(_z){" + f + "=_z}");
              }t && (m = "function(){return " + m + " }");g.push("'" + b + "':" + m);
            }m = m || {};var g = [],
                h = [],
                t = m.valueAccessors,
                z = m.bindingParams,
                u = "string" === typeof f ? b(f) : f;a.a.u(u, function (a) {
              e(a.key || a.unknown, a.value);
            });h.length && e("_ko_property_writers", "{" + h.join(",") + " }");return g.join(",");
          }, lc: function lc(a, b) {
            for (var c = 0; c < a.length; c++) {
              if (a[c].key == b) return !0;
            }return !1;
          }, pa: function pa(b, c, d, e, k) {
            if (b && a.C(b)) !a.Ra(b) || k && b.v() === e || b(e);else if ((b = c.get("_ko_property_writers")) && b[d]) b[d](e);
          } };
      }();a.b("expressionRewriting", a.h);a.b("expressionRewriting.bindingRewriteValidators", a.h.ha);a.b("expressionRewriting.parseObjectLiteral", a.h.Wa);a.b("expressionRewriting.preProcessBindings", a.h.ya);a.b("expressionRewriting._twoWayBindings", a.h.V);a.b("jsonExpressionRewriting", a.h);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.h.ya);(function () {
        function b(a) {
          return 8 == a.nodeType && h.test(g ? a.text : a.nodeValue);
        }function d(a) {
          return 8 == a.nodeType && k.test(g ? a.text : a.nodeValue);
        }function c(a, c) {
          for (var f = a, e = 1, k = []; f = f.nextSibling;) {
            if (d(f) && (e--, 0 === e)) return k;k.push(f);b(f) && e++;
          }if (!c) throw Error("Cannot find closing comment tag to match: " + a.nodeValue);return null;
        }function e(a, b) {
          var d = c(a, b);return d ? 0 < d.length ? d[d.length - 1].nextSibling : a.nextSibling : null;
        }var g = v && "\x3c!--test--\x3e" === v.createComment("test").text,
            h = g ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
            k = g ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
            f = { ul: !0, ol: !0 };a.f = { Q: {}, childNodes: function childNodes(a) {
            return b(a) ? c(a) : a.childNodes;
          }, ja: function ja(c) {
            if (b(c)) {
              c = a.f.childNodes(c);for (var d = 0, f = c.length; d < f; d++) {
                a.removeNode(c[d]);
              }
            } else a.a.Ka(c);
          }, T: function T(c, d) {
            if (b(c)) {
              a.f.ja(c);for (var f = c.nextSibling, e = 0, k = d.length; e < k; e++) {
                f.parentNode.insertBefore(d[e], f);
              }
            } else a.a.T(c, d);
          }, Hb: function Hb(a, c) {
            b(a) ? a.parentNode.insertBefore(c, a.nextSibling) : a.firstChild ? a.insertBefore(c, a.firstChild) : a.appendChild(c);
          }, Bb: function Bb(c, d, f) {
            f ? b(c) ? c.parentNode.insertBefore(d, f.nextSibling) : f.nextSibling ? c.insertBefore(d, f.nextSibling) : c.appendChild(d) : a.f.Hb(c, d);
          }, firstChild: function firstChild(a) {
            return b(a) ? !a.nextSibling || d(a.nextSibling) ? null : a.nextSibling : a.firstChild;
          }, nextSibling: function nextSibling(a) {
            b(a) && (a = e(a));return a.nextSibling && d(a.nextSibling) ? null : a.nextSibling;
          }, gc: b, xc: function xc(a) {
            return (a = (g ? a.text : a.nodeValue).match(h)) ? a[1] : null;
          }, Fb: function Fb(c) {
            if (f[a.a.t(c)]) {
              var k = c.firstChild;if (k) {
                do {
                  if (1 === k.nodeType) {
                    var g;g = k.firstChild;
                    var h = null;if (g) {
                      do {
                        if (h) h.push(g);else if (b(g)) {
                          var t = e(g, !0);t ? g = t : h = [g];
                        } else d(g) && (h = [g]);
                      } while (g = g.nextSibling);
                    }if (g = h) for (h = k.nextSibling, t = 0; t < g.length; t++) {
                      h ? c.insertBefore(g[t], h) : c.appendChild(g[t]);
                    }
                  }
                } while (k = k.nextSibling);
              }
            }
          } };
      })();a.b("virtualElements", a.f);a.b("virtualElements.allowedBindings", a.f.Q);a.b("virtualElements.emptyNode", a.f.ja);a.b("virtualElements.insertAfter", a.f.Bb);a.b("virtualElements.prepend", a.f.Hb);a.b("virtualElements.setDomNodeChildren", a.f.T);(function () {
        a.J = function () {
          this.Yb = {};
        };a.a.extend(a.J.prototype, { nodeHasBindings: function nodeHasBindings(b) {
            switch (b.nodeType) {case 1:
                return null != b.getAttribute("data-bind") || a.g.getComponentNameForNode(b);case 8:
                return a.f.gc(b);default:
                return !1;}
          }, getBindings: function getBindings(b, d) {
            var c = this.getBindingsString(b, d),
                c = c ? this.parseBindingsString(c, d, b) : null;return a.g.mb(c, b, d, !1);
          }, getBindingAccessors: function getBindingAccessors(b, d) {
            var c = this.getBindingsString(b, d),
                c = c ? this.parseBindingsString(c, d, b, { valueAccessors: !0 }) : null;return a.g.mb(c, b, d, !0);
          }, getBindingsString: function getBindingsString(b) {
            switch (b.nodeType) {case 1:
                return b.getAttribute("data-bind");
              case 8:
                return a.f.xc(b);default:
                return null;}
          }, parseBindingsString: function parseBindingsString(b, d, c, e) {
            try {
              var g = this.Yb,
                  h = b + (e && e.valueAccessors || ""),
                  k;if (!(k = g[h])) {
                var f,
                    m = "with($context){with($data||{}){return{" + a.h.ya(b, e) + "}}}";f = new Function("$context", "$element", m);k = g[h] = f;
              }return k(d, c);
            } catch (l) {
              throw l.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + l.message, l;
            }
          } });a.J.instance = new a.J();
      })();a.b("bindingProvider", a.J);(function () {
        function b(a) {
          return function () {
            return a;
          };
        }function d(a) {
          return a();
        }
        function c(b) {
          return a.a.na(a.k.B(b), function (a, c) {
            return function () {
              return b()[c];
            };
          });
        }function e(a, b) {
          return c(this.getBindings.bind(this, a, b));
        }function g(b, c, d) {
          var f,
              e = a.f.firstChild(c),
              k = a.J.instance,
              g = k.preprocessNode;if (g) {
            for (; f = e;) {
              e = a.f.nextSibling(f), g.call(k, f);
            }e = a.f.firstChild(c);
          }for (; f = e;) {
            e = a.f.nextSibling(f), h(b, f, d);
          }
        }function h(b, c, d) {
          var e = !0,
              k = 1 === c.nodeType;k && a.f.Fb(c);if (k && d || a.J.instance.nodeHasBindings(c)) e = f(c, null, b, d).shouldBindDescendants;e && !l[a.a.t(c)] && g(b, c, !k);
        }function k(b) {
          var c = [],
              d = {},
              f = [];a.a.G(b, function y(e) {
            if (!d[e]) {
              var k = a.getBindingHandler(e);k && (k.after && (f.push(e), a.a.u(k.after, function (c) {
                if (b[c]) {
                  if (-1 !== a.a.m(f, c)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + f.join(", "));y(c);
                }
              }), f.length--), c.push({ key: e, zb: k }));d[e] = !0;
            }
          });return c;
        }function f(b, c, f, g) {
          var m = a.a.e.get(b, q);if (!c) {
            if (m) throw Error("You cannot apply bindings multiple times to the same element.");a.a.e.set(b, q, !0);
          }!m && g && a.Ob(b, f);var l;if (c && "function" !== typeof c) l = c;else {
            var h = a.J.instance,
                n = h.getBindingAccessors || e,
                s = a.j(function () {
              (l = c ? c(f, b) : n.call(h, b, f)) && f.I && f.I();return l;
            }, null, { o: b });l && s.Z() || (s = null);
          }var v;if (l) {
            var w = s ? function (a) {
              return function () {
                return d(s()[a]);
              };
            } : function (a) {
              return l[a];
            },
                A = function A() {
              return a.a.na(s ? s() : l, d);
            };A.get = function (a) {
              return l[a] && d(w(a));
            };A.has = function (a) {
              return a in l;
            };g = k(l);a.a.u(g, function (c) {
              var d = c.zb.init,
                  e = c.zb.update,
                  k = c.key;if (8 === b.nodeType && !a.f.Q[k]) throw Error("The binding '" + k + "' cannot be used with virtual elements");
              try {
                "function" == typeof d && a.k.B(function () {
                  var a = d(b, w(k), A, f.$data, f);if (a && a.controlsDescendantBindings) {
                    if (v !== p) throw Error("Multiple bindings (" + v + " and " + k + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");v = k;
                  }
                }), "function" == typeof e && a.j(function () {
                  e(b, w(k), A, f.$data, f);
                }, null, { o: b });
              } catch (g) {
                throw g.message = 'Unable to process binding "' + k + ": " + l[k] + '"\nMessage: ' + g.message, g;
              }
            });
          }return { shouldBindDescendants: v === p };
        }
        function m(b) {
          return b && b instanceof a.N ? b : new a.N(b);
        }a.d = {};var l = { script: !0 };a.getBindingHandler = function (b) {
          return a.d[b];
        };a.N = function (b, c, d, f) {
          var e = this,
              k = "function" == typeof b && !a.C(b),
              g,
              m = a.j(function () {
            var g = k ? b() : b,
                l = a.a.c(g);c ? (c.I && c.I(), a.a.extend(e, c), m && (e.I = m)) : (e.$parents = [], e.$root = l, e.ko = a);e.$rawData = g;e.$data = l;d && (e[d] = l);f && f(e, c, l);return e.$data;
          }, null, { Ia: function Ia() {
              return g && !a.a.ob(g);
            }, o: !0 });m.Z() && (e.I = m, m.equalityComparer = null, g = [], m.Tb = function (b) {
            g.push(b);a.a.w.da(b, function (b) {
              a.a.ua(g, b);g.length || (m.K(), e.I = m = p);
            });
          });
        };a.N.prototype.createChildContext = function (b, c, d) {
          return new a.N(b, this, c, function (a, b) {
            a.$parentContext = b;a.$parent = b.$data;a.$parents = (b.$parents || []).slice(0);a.$parents.unshift(a.$parent);d && d(a);
          });
        };a.N.prototype.extend = function (b) {
          return new a.N(this.I || this.$data, this, null, function (c, d) {
            c.$rawData = d.$rawData;a.a.extend(c, "function" == typeof b ? b() : b);
          });
        };var q = a.a.e.F(),
            n = a.a.e.F();a.Ob = function (b, c) {
          if (2 == arguments.length) a.a.e.set(b, n, c), c.I && c.I.Tb(b);else return a.a.e.get(b, n);
        };a.ra = function (b, c, d) {
          1 === b.nodeType && a.f.Fb(b);return f(b, c, m(d), !0);
        };a.Wb = function (d, f, e) {
          e = m(e);return a.ra(d, "function" === typeof f ? c(f.bind(null, e, d)) : a.a.na(f, b), e);
        };a.Ca = function (a, b) {
          1 !== b.nodeType && 8 !== b.nodeType || g(m(a), b, !0);
        };a.pb = function (a, b) {
          !w && s.jQuery && (w = s.jQuery);if (b && 1 !== b.nodeType && 8 !== b.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");b = b || s.document.body;h(m(a), b, !0);
        };a.Ha = function (b) {
          switch (b.nodeType) {case 1:case 8:
              var c = a.Ob(b);if (c) return c;if (b.parentNode) return a.Ha(b.parentNode);}return p;
        };a.$b = function (b) {
          return (b = a.Ha(b)) ? b.$data : p;
        };a.b("bindingHandlers", a.d);a.b("applyBindings", a.pb);a.b("applyBindingsToDescendants", a.Ca);a.b("applyBindingAccessorsToNode", a.ra);a.b("applyBindingsToNode", a.Wb);a.b("contextFor", a.Ha);a.b("dataFor", a.$b);
      })();(function (b) {
        function d(d, f) {
          var e = g.hasOwnProperty(d) ? g[d] : b,
              l;e || (e = g[d] = new a.P(), c(d, function (a) {
            h[d] = a;delete g[d];
            l ? e.notifySubscribers(a) : setTimeout(function () {
              e.notifySubscribers(a);
            }, 0);
          }), l = !0);e.U(f);
        }function c(a, b) {
          e("getConfig", [a], function (c) {
            c ? e("loadComponent", [a, c], function (a) {
              b(a);
            }) : b(null);
          });
        }function e(c, d, g, l) {
          l || (l = a.g.loaders.slice(0));var h = l.shift();if (h) {
            var n = h[c];if (n) {
              var t = !1;if (n.apply(h, d.concat(function (a) {
                t ? g(null) : null !== a ? g(a) : e(c, d, g, l);
              })) !== b && (t = !0, !h.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
            } else e(c, d, g, l);
          } else g(null);
        }var g = {},
            h = {};a.g = { get: function get(a, c) {
            var e = h.hasOwnProperty(a) ? h[a] : b;e ? setTimeout(function () {
              c(e);
            }, 0) : d(a, c);
          }, tb: function tb(a) {
            delete h[a];
          }, jb: e };a.g.loaders = [];a.b("components", a.g);a.b("components.get", a.g.get);a.b("components.clearCachedDefinition", a.g.tb);
      })();(function () {
        function b(b, c, d, e) {
          function k() {
            0 === --u && e(h);
          }var h = {},
              u = 2,
              r = d.template;d = d.viewModel;r ? g(c, r, function (c) {
            a.g.jb("loadTemplate", [b, c], function (a) {
              h.template = a;k();
            });
          }) : k();d ? g(c, d, function (c) {
            a.g.jb("loadViewModel", [b, c], function (a) {
              h[f] = a;k();
            });
          }) : k();
        }function d(a, b, c) {
          if ("function" === typeof b) c(function (a) {
            return new b(a);
          });else if ("function" === typeof b[f]) c(b[f]);else if ("instance" in b) {
            var e = b.instance;c(function () {
              return e;
            });
          } else "viewModel" in b ? d(a, b.viewModel, c) : a("Unknown viewModel value: " + b);
        }function c(b) {
          switch (a.a.t(b)) {case "script":
              return a.a.ba(b.text);case "textarea":
              return a.a.ba(b.value);case "template":
              if (e(b.content)) return a.a.ia(b.content.childNodes);}return a.a.ia(b.childNodes);
        }function e(a) {
          return s.DocumentFragment ? a instanceof DocumentFragment : a && 11 === a.nodeType;
        }function g(a, b, c) {
          "string" === typeof b.require ? N || s.require ? (N || s.require)([b.require], c) : a("Uses require, but no AMD loader is present") : c(b);
        }function h(a) {
          return function (b) {
            throw Error("Component '" + a + "': " + b);
          };
        }var k = {};a.g.tc = function (b, c) {
          if (!c) throw Error("Invalid configuration for " + b);if (a.g.Qa(b)) throw Error("Component " + b + " is already registered");k[b] = c;
        };a.g.Qa = function (a) {
          return a in k;
        };a.g.wc = function (b) {
          delete k[b];a.g.tb(b);
        };a.g.ub = { getConfig: function getConfig(a, b) {
            b(k.hasOwnProperty(a) ? k[a] : null);
          }, loadComponent: function loadComponent(a, c, d) {
            var e = h(a);g(e, c, function (c) {
              b(a, e, c, d);
            });
          }, loadTemplate: function loadTemplate(b, d, f) {
            b = h(b);if ("string" === typeof d) f(a.a.ba(d));else if (d instanceof Array) f(d);else if (e(d)) f(a.a.S(d.childNodes));else if (d.element) {
              if (d = d.element, s.HTMLElement ? d instanceof HTMLElement : d && d.tagName && 1 === d.nodeType) f(c(d));else if ("string" === typeof d) {
                var k = v.getElementById(d);k ? f(c(k)) : b("Cannot find element with ID " + d);
              } else b("Unknown element type: " + d);
            } else b("Unknown template value: " + d);
          }, loadViewModel: function loadViewModel(a, b, c) {
            d(h(a), b, c);
          } };var f = "createViewModel";a.b("components.register", a.g.tc);a.b("components.isRegistered", a.g.Qa);a.b("components.unregister", a.g.wc);a.b("components.defaultLoader", a.g.ub);a.g.loaders.push(a.g.ub);a.g.Ub = k;
      })();(function () {
        function b(b, e) {
          var g = b.getAttribute("params");if (g) {
            var g = d.parseBindingsString(g, e, b, { valueAccessors: !0, bindingParams: !0 }),
                g = a.a.na(g, function (d) {
              return a.s(d, null, { o: b });
            }),
                h = a.a.na(g, function (d) {
              return d.Z() ? a.s(function () {
                return a.a.c(d());
              }, null, { o: b }) : d.v();
            });h.hasOwnProperty("$raw") || (h.$raw = g);return h;
          }return { $raw: {} };
        }a.g.getComponentNameForNode = function (b) {
          b = a.a.t(b);return a.g.Qa(b) && b;
        };a.g.mb = function (c, d, g, h) {
          if (1 === d.nodeType) {
            var k = a.g.getComponentNameForNode(d);if (k) {
              c = c || {};if (c.component) throw Error('Cannot use the "component" binding on a custom element matching a component');var f = { name: k, params: b(d, g) };c.component = h ? function () {
                return f;
              } : f;
            }
          }return c;
        };var d = new a.J();9 > a.a.L && (a.g.register = function (a) {
          return function (b) {
            v.createElement(b);
            return a.apply(this, arguments);
          };
        }(a.g.register), v.createDocumentFragment = function (b) {
          return function () {
            var d = b(),
                g = a.g.Ub,
                h;for (h in g) {
              g.hasOwnProperty(h) && d.createElement(h);
            }return d;
          };
        }(v.createDocumentFragment));
      })();(function () {
        var b = 0;a.d.component = { init: function init(d, c, e, g, h) {
            function k() {
              var a = f && f.dispose;"function" === typeof a && a.call(f);m = null;
            }var f, m;a.a.w.da(d, k);a.s(function () {
              var e = a.a.c(c()),
                  g,
                  n;"string" === typeof e ? g = e : (g = a.a.c(e.name), n = a.a.c(e.params));if (!g) throw Error("No component name specified");
              var t = m = ++b;a.g.get(g, function (b) {
                if (m === t) {
                  k();if (!b) throw Error("Unknown component '" + g + "'");var c = b.template;if (!c) throw Error("Component '" + g + "' has no template");c = a.a.ia(c);a.f.T(d, c);var c = n,
                      e = b.createViewModel;b = e ? e.call(b, c, { element: d }) : c;c = h.createChildContext(b);f = b;a.Ca(c, d);
                }
              });
            }, null, { o: d });return { controlsDescendantBindings: !0 };
          } };a.f.Q.component = !0;
      })();var Q = { "class": "className", "for": "htmlFor" };a.d.attr = { update: function update(b, d) {
          var c = a.a.c(d()) || {};a.a.G(c, function (c, d) {
            d = a.a.c(d);var h = !1 === d || null === d || d === p;h && b.removeAttribute(c);8 >= a.a.L && c in Q ? (c = Q[c], h ? b.removeAttribute(c) : b[c] = d) : h || b.setAttribute(c, d.toString());"name" === c && a.a.Mb(b, h ? "" : d.toString());
          });
        } };(function () {
        a.d.checked = { after: ["value", "attr"], init: function init(b, d, c) {
            function e() {
              var e = b.checked,
                  k = q ? h() : e;if (!a.Y.ma() && (!f || e)) {
                var g = a.k.B(d);m ? l !== k ? (e && (a.a.ea(g, k, !0), a.a.ea(g, l, !1)), l = k) : a.a.ea(g, k, e) : a.h.pa(g, c, "checked", k, !0);
              }
            }function g() {
              var c = a.a.c(d());b.checked = m ? 0 <= a.a.m(c, h()) : k ? c : h() === c;
            }var h = a.Ib(function () {
              return c.has("checkedValue") ? a.a.c(c.get("checkedValue")) : c.has("value") ? a.a.c(c.get("value")) : b.value;
            }),
                k = "checkbox" == b.type,
                f = "radio" == b.type;if (k || f) {
              var m = k && a.a.c(d()) instanceof Array,
                  l = m ? h() : p,
                  q = f || m;f && !b.name && a.d.uniqueName.init(b, function () {
                return !0;
              });a.s(e, null, { o: b });a.a.n(b, "click", e);a.s(g, null, { o: b });
            }
          } };a.h.V.checked = !0;a.d.checkedValue = { update: function update(b, d) {
            b.value = a.a.c(d());
          } };
      })();a.d.css = { update: function update(b, d) {
          var c = a.a.c(d());"object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) ? a.a.G(c, function (c, d) {
            d = a.a.c(d);a.a.Ba(b, c, d);
          }) : (c = String(c || ""), a.a.Ba(b, b.__ko__cssValue, !1), b.__ko__cssValue = c, a.a.Ba(b, c, !0));
        } };a.d.enable = { update: function update(b, d) {
          var c = a.a.c(d());c && b.disabled ? b.removeAttribute("disabled") : c || b.disabled || (b.disabled = !0);
        } };a.d.disable = { update: function update(b, d) {
          a.d.enable.update(b, function () {
            return !a.a.c(d());
          });
        } };a.d.event = { init: function init(b, d, c, e, g) {
          var h = d() || {};a.a.G(h, function (k) {
            "string" == typeof k && a.a.n(b, k, function (b) {
              var h,
                  l = d()[k];if (l) {
                try {
                  var q = a.a.S(arguments);e = g.$data;q.unshift(e);h = l.apply(e, q);
                } finally {
                  !0 !== h && (b.preventDefault ? b.preventDefault() : b.returnValue = !1);
                }!1 === c.get(k + "Bubble") && (b.cancelBubble = !0, b.stopPropagation && b.stopPropagation());
              }
            });
          });
        } };a.d.foreach = { Eb: function Eb(b) {
          return function () {
            var d = b(),
                c = a.a.Xa(d);if (!c || "number" == typeof c.length) return { foreach: d, templateEngine: a.O.Oa };a.a.c(d);return { foreach: c.data, as: c.as, includeDestroyed: c.includeDestroyed, afterAdd: c.afterAdd, beforeRemove: c.beforeRemove, afterRender: c.afterRender, beforeMove: c.beforeMove, afterMove: c.afterMove, templateEngine: a.O.Oa };
          };
        }, init: function init(b, d) {
          return a.d.template.init(b, a.d.foreach.Eb(d));
        }, update: function update(b, d, c, e, g) {
          return a.d.template.update(b, a.d.foreach.Eb(d), c, e, g);
        } };a.h.ha.foreach = !1;a.f.Q.foreach = !0;a.d.hasfocus = { init: function init(b, d, c) {
          function e(e) {
            b.__ko_hasfocusUpdating = !0;var f = b.ownerDocument;if ("activeElement" in f) {
              var g;try {
                g = f.activeElement;
              } catch (h) {
                g = f.body;
              }e = g === b;
            }f = d();a.h.pa(f, c, "hasfocus", e, !0);b.__ko_hasfocusLastValue = e;b.__ko_hasfocusUpdating = !1;
          }var g = e.bind(null, !0),
              h = e.bind(null, !1);a.a.n(b, "focus", g);a.a.n(b, "focusin", g);a.a.n(b, "blur", h);a.a.n(b, "focusout", h);
        }, update: function update(b, d) {
          var c = !!a.a.c(d());b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === c || (c ? b.focus() : b.blur(), a.k.B(a.a.oa, null, [b, c ? "focusin" : "focusout"]));
        } };a.h.V.hasfocus = !0;a.d.hasFocus = a.d.hasfocus;a.h.V.hasFocus = !0;a.d.html = { init: function init() {
          return { controlsDescendantBindings: !0 };
        }, update: function update(b, d) {
          a.a.$a(b, d());
        } };I("if");I("ifnot", !1, !0);I("with", !0, !1, function (a, d) {
        return a.createChildContext(d);
      });var K = {};a.d.options = { init: function init(b) {
          if ("select" !== a.a.t(b)) throw Error("options binding applies only to SELECT elements");for (; 0 < b.length;) {
            b.remove(0);
          }return { controlsDescendantBindings: !0 };
        }, update: function update(b, d, c) {
          function e() {
            return a.a.ta(b.options, function (a) {
              return a.selected;
            });
          }function g(a, b, c) {
            var d = typeof b === "undefined" ? "undefined" : _typeof(b);return "function" == d ? b(a) : "string" == d ? a[b] : c;
          }function h(c, d) {
            if (q.length) {
              var e = 0 <= a.a.m(q, a.i.q(d[0]));a.a.Nb(d[0], e);n && !e && a.k.B(a.a.oa, null, [b, "change"]);
            }
          }var k = 0 != b.length && b.multiple ? b.scrollTop : null,
              f = a.a.c(d()),
              m = c.get("optionsIncludeDestroyed");
          d = {};var l, q;q = b.multiple ? a.a.Da(e(), a.i.q) : 0 <= b.selectedIndex ? [a.i.q(b.options[b.selectedIndex])] : [];f && ("undefined" == typeof f.length && (f = [f]), l = a.a.ta(f, function (b) {
            return m || b === p || null === b || !a.a.c(b._destroy);
          }), c.has("optionsCaption") && (f = a.a.c(c.get("optionsCaption")), null !== f && f !== p && l.unshift(K)));var n = !1;d.beforeRemove = function (a) {
            b.removeChild(a);
          };f = h;c.has("optionsAfterRender") && (f = function f(b, d) {
            h(0, d);a.k.B(c.get("optionsAfterRender"), null, [d[0], b !== K ? b : p]);
          });a.a.Za(b, l, function (d, e, f) {
            f.length && (q = f[0].selected ? [a.i.q(f[0])] : [], n = !0);e = b.ownerDocument.createElement("option");d === K ? (a.a.bb(e, c.get("optionsCaption")), a.i.ca(e, p)) : (f = g(d, c.get("optionsValue"), d), a.i.ca(e, a.a.c(f)), d = g(d, c.get("optionsText"), f), a.a.bb(e, d));return [e];
          }, d, f);a.k.B(function () {
            c.get("valueAllowUnset") && c.has("value") ? a.i.ca(b, a.a.c(c.get("value")), !0) : (b.multiple ? q.length && e().length < q.length : q.length && 0 <= b.selectedIndex ? a.i.q(b.options[b.selectedIndex]) !== q[0] : q.length || 0 <= b.selectedIndex) && a.a.oa(b, "change");
          });
          a.a.dc(b);k && 20 < Math.abs(k - b.scrollTop) && (b.scrollTop = k);
        } };a.d.options.Va = a.a.e.F();a.d.selectedOptions = { after: ["options", "foreach"], init: function init(b, d, c) {
          a.a.n(b, "change", function () {
            var e = d(),
                g = [];a.a.u(b.getElementsByTagName("option"), function (b) {
              b.selected && g.push(a.i.q(b));
            });a.h.pa(e, c, "selectedOptions", g);
          });
        }, update: function update(b, d) {
          if ("select" != a.a.t(b)) throw Error("values binding applies only to SELECT elements");var c = a.a.c(d());c && "number" == typeof c.length && a.a.u(b.getElementsByTagName("option"), function (b) {
            var d = 0 <= a.a.m(c, a.i.q(b));a.a.Nb(b, d);
          });
        } };a.h.V.selectedOptions = !0;a.d.style = { update: function update(b, d) {
          var c = a.a.c(d() || {});a.a.G(c, function (c, d) {
            d = a.a.c(d);if (null === d || d === p || !1 === d) d = "";b.style[c] = d;
          });
        } };a.d.submit = { init: function init(b, d, c, e, g) {
          if ("function" != typeof d()) throw Error("The value for a submit binding must be a function");a.a.n(b, "submit", function (a) {
            var c,
                e = d();try {
              c = e.call(g.$data, b);
            } finally {
              !0 !== c && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
            }
          });
        } };a.d.text = { init: function init() {
          return { controlsDescendantBindings: !0 };
        },
        update: function update(b, d) {
          a.a.bb(b, d());
        } };a.f.Q.text = !0;(function () {
        if (s && s.navigator) var b = function b(a) {
          if (a) return parseFloat(a[1]);
        },
            d = s.opera && s.opera.version && parseInt(s.opera.version()),
            c = s.navigator.userAgent,
            e = b(c.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
            g = b(c.match(/Firefox\/([^ ]*)/));if (10 > a.a.L) var h = a.a.e.F(),
            k = a.a.e.F(),
            f = function f(b) {
          var c = this.activeElement;(c = c && a.a.e.get(c, k)) && c(b);
        },
            m = function m(b, c) {
          var d = b.ownerDocument;a.a.e.get(d, h) || (a.a.e.set(d, h, !0), a.a.n(d, "selectionchange", f));a.a.e.set(b, k, c);
        };a.d.textInput = { init: function init(b, c, f) {
            function k(c, d) {
              a.a.n(b, c, d);
            }function h() {
              var d = a.a.c(c());if (null === d || d === p) d = "";v !== p && d === v ? setTimeout(h, 4) : b.value !== d && (s = d, b.value = d);
            }function u() {
              y || (v = b.value, y = setTimeout(r, 4));
            }function r() {
              clearTimeout(y);v = y = p;var d = b.value;s !== d && (s = d, a.h.pa(c(), f, "textInput", d));
            }var s = b.value,
                y,
                v;10 > a.a.L ? (k("propertychange", function (a) {
              "value" === a.propertyName && r();
            }), 8 == a.a.L && (k("keyup", r), k("keydown", r)), 8 <= a.a.L && (m(b, r), k("dragend", u))) : (k("input", r), 5 > e && "textarea" === a.a.t(b) ? (k("keydown", u), k("paste", u), k("cut", u)) : 11 > d ? k("keydown", u) : 4 > g && (k("DOMAutoComplete", r), k("dragdrop", r), k("drop", r)));k("change", r);a.s(h, null, { o: b });
          } };a.h.V.textInput = !0;a.d.textinput = { preprocess: function preprocess(a, b, c) {
            c("textInput", a);
          } };
      })();a.d.uniqueName = { init: function init(b, d) {
          if (d()) {
            var c = "ko_unique_" + ++a.d.uniqueName.Zb;a.a.Mb(b, c);
          }
        } };a.d.uniqueName.Zb = 0;a.d.value = { after: ["options", "foreach"], init: function init(b, d, c) {
          if ("input" != b.tagName.toLowerCase() || "checkbox" != b.type && "radio" != b.type) {
            var e = ["change"],
                g = c.get("valueUpdate"),
                h = !1,
                k = null;g && ("string" == typeof g && (g = [g]), a.a.ga(e, g), e = a.a.rb(e));var f = function f() {
              k = null;h = !1;var e = d(),
                  f = a.i.q(b);a.h.pa(e, c, "value", f);
            };!a.a.L || "input" != b.tagName.toLowerCase() || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete || -1 != a.a.m(e, "propertychange") || (a.a.n(b, "propertychange", function () {
              h = !0;
            }), a.a.n(b, "focus", function () {
              h = !1;
            }), a.a.n(b, "blur", function () {
              h && f();
            }));a.a.u(e, function (c) {
              var d = f;a.a.vc(c, "after") && (d = function d() {
                k = a.i.q(b);setTimeout(f, 0);
              }, c = c.substring(5));a.a.n(b, c, d);
            });var m = function m() {
              var e = a.a.c(d()),
                  f = a.i.q(b);if (null !== k && e === k) setTimeout(m, 0);else if (e !== f) if ("select" === a.a.t(b)) {
                var g = c.get("valueAllowUnset"),
                    f = function f() {
                  a.i.ca(b, e, g);
                };f();g || e === a.i.q(b) ? setTimeout(f, 0) : a.k.B(a.a.oa, null, [b, "change"]);
              } else a.i.ca(b, e);
            };a.s(m, null, { o: b });
          } else a.ra(b, { checkedValue: d });
        }, update: function update() {} };a.h.V.value = !0;a.d.visible = { update: function update(b, d) {
          var c = a.a.c(d()),
              e = "none" != b.style.display;
          c && !e ? b.style.display = "" : !c && e && (b.style.display = "none");
        } };(function (b) {
        a.d[b] = { init: function init(d, c, e, g, h) {
            return a.d.event.init.call(this, d, function () {
              var a = {};a[b] = c();return a;
            }, e, g, h);
          } };
      })("click");a.H = function () {};a.H.prototype.renderTemplateSource = function () {
        throw Error("Override renderTemplateSource");
      };a.H.prototype.createJavaScriptEvaluatorBlock = function () {
        throw Error("Override createJavaScriptEvaluatorBlock");
      };a.H.prototype.makeTemplateSource = function (b, d) {
        if ("string" == typeof b) {
          d = d || v;var c = d.getElementById(b);if (!c) throw Error("Cannot find template with ID " + b);return new a.r.l(c);
        }if (1 == b.nodeType || 8 == b.nodeType) return new a.r.fa(b);throw Error("Unknown template type: " + b);
      };a.H.prototype.renderTemplate = function (a, d, c, e) {
        a = this.makeTemplateSource(a, e);return this.renderTemplateSource(a, d, c);
      };a.H.prototype.isTemplateRewritten = function (a, d) {
        return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a, d).data("isRewritten");
      };a.H.prototype.rewriteTemplate = function (a, d, c) {
        a = this.makeTemplateSource(a, c);d = d(a.text());a.text(d);a.data("isRewritten", !0);
      };a.b("templateEngine", a.H);a.fb = function () {
        function b(b, c, d, k) {
          b = a.h.Wa(b);for (var f = a.h.ha, m = 0; m < b.length; m++) {
            var l = b[m].key;if (f.hasOwnProperty(l)) {
              var q = f[l];if ("function" === typeof q) {
                if (l = q(b[m].value)) throw Error(l);
              } else if (!q) throw Error("This template engine does not support the '" + l + "' binding within its templates");
            }
          }d = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.h.ya(b, { valueAccessors: !0 }) + " } })()},'" + d.toLowerCase() + "')";return k.createJavaScriptEvaluatorBlock(d) + c;
        }var d = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
            c = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return { ec: function ec(b, c, d) {
            c.isTemplateRewritten(b, d) || c.rewriteTemplate(b, function (b) {
              return a.fb.nc(b, c);
            }, d);
          }, nc: function nc(a, g) {
            return a.replace(d, function (a, c, d, e, l) {
              return b(l, c, d, g);
            }).replace(c, function (a, c) {
              return b(c, "\x3c!-- ko --\x3e", "#comment", g);
            });
          }, Xb: function Xb(b, c) {
            return a.D.Ua(function (d, k) {
              var f = d.nextSibling;f && f.nodeName.toLowerCase() === c && a.ra(f, b, k);
            });
          } };
      }();a.b("__tr_ambtns", a.fb.Xb);(function () {
        a.r = {};a.r.l = function (a) {
          this.l = a;
        };a.r.l.prototype.text = function () {
          var b = a.a.t(this.l),
              b = "script" === b ? "text" : "textarea" === b ? "value" : "innerHTML";if (0 == arguments.length) return this.l[b];var d = arguments[0];"innerHTML" === b ? a.a.$a(this.l, d) : this.l[b] = d;
        };var b = a.a.e.F() + "_";a.r.l.prototype.data = function (c) {
          if (1 === arguments.length) return a.a.e.get(this.l, b + c);a.a.e.set(this.l, b + c, arguments[1]);
        };
        var d = a.a.e.F();a.r.fa = function (a) {
          this.l = a;
        };a.r.fa.prototype = new a.r.l();a.r.fa.prototype.text = function () {
          if (0 == arguments.length) {
            var b = a.a.e.get(this.l, d) || {};b.gb === p && b.Ga && (b.gb = b.Ga.innerHTML);return b.gb;
          }a.a.e.set(this.l, d, { gb: arguments[0] });
        };a.r.l.prototype.nodes = function () {
          if (0 == arguments.length) return (a.a.e.get(this.l, d) || {}).Ga;a.a.e.set(this.l, d, { Ga: arguments[0] });
        };a.b("templateSources", a.r);a.b("templateSources.domElement", a.r.l);a.b("templateSources.anonymousTemplate", a.r.fa);
      })();(function () {
        function b(b, c, d) {
          var e;for (c = a.f.nextSibling(c); b && (e = b) !== c;) {
            b = a.f.nextSibling(e), d(e, b);
          }
        }function d(c, d) {
          if (c.length) {
            var e = c[0],
                g = c[c.length - 1],
                h = e.parentNode,
                n = a.J.instance,
                t = n.preprocessNode;if (t) {
              b(e, g, function (a, b) {
                var c = a.previousSibling,
                    d = t.call(n, a);d && (a === e && (e = d[0] || b), a === g && (g = d[d.length - 1] || c));
              });c.length = 0;if (!e) return;e === g ? c.push(e) : (c.push(e, g), a.a.ka(c, h));
            }b(e, g, function (b) {
              1 !== b.nodeType && 8 !== b.nodeType || a.pb(d, b);
            });b(e, g, function (b) {
              1 !== b.nodeType && 8 !== b.nodeType || a.D.Sb(b, [d]);
            });a.a.ka(c, h);
          }
        }function c(a) {
          return a.nodeType ? a : 0 < a.length ? a[0] : null;
        }function e(b, e, h, l, q) {
          q = q || {};var n = b && c(b),
              n = n && n.ownerDocument,
              t = q.templateEngine || g;a.fb.ec(h, t, n);h = t.renderTemplate(h, l, q, n);if ("number" != typeof h.length || 0 < h.length && "number" != typeof h[0].nodeType) throw Error("Template engine must return an array of DOM nodes");n = !1;switch (e) {case "replaceChildren":
              a.f.T(b, h);n = !0;break;case "replaceNode":
              a.a.Lb(b, h);n = !0;break;case "ignoreTargetNode":
              break;default:
              throw Error("Unknown renderMode: " + e);}n && (d(h, l), q.afterRender && a.k.B(q.afterRender, null, [h, l.$data]));return h;
        }var g;a.ab = function (b) {
          if (b != p && !(b instanceof a.H)) throw Error("templateEngine must inherit from ko.templateEngine");g = b;
        };a.Ya = function (b, d, h, l, q) {
          h = h || {};if ((h.templateEngine || g) == p) throw Error("Set a template engine before calling renderTemplate");q = q || "replaceChildren";if (l) {
            var n = c(l);return a.j(function () {
              var g = d && d instanceof a.N ? d : new a.N(a.a.c(d)),
                  p = a.C(b) ? b() : "function" === typeof b ? b(g.$data, g) : b,
                  g = e(l, q, p, g, h);
              "replaceNode" == q && (l = g, n = c(l));
            }, null, { Ia: function Ia() {
                return !n || !a.a.Ja(n);
              }, o: n && "replaceNode" == q ? n.parentNode : n });
          }return a.D.Ua(function (c) {
            a.Ya(b, d, h, c, "replaceNode");
          });
        };a.uc = function (b, c, g, h, q) {
          function n(a, b) {
            d(b, s);g.afterRender && g.afterRender(b, a);
          }function t(c, d) {
            s = q.createChildContext(c, g.as, function (a) {
              a.$index = d;
            });var f = a.C(b) ? b() : "function" === typeof b ? b(c, s) : b;return e(null, "ignoreTargetNode", f, s, g);
          }var s;return a.j(function () {
            var b = a.a.c(c) || [];"undefined" == typeof b.length && (b = [b]);b = a.a.ta(b, function (b) {
              return g.includeDestroyed || b === p || null === b || !a.a.c(b._destroy);
            });a.k.B(a.a.Za, null, [h, b, t, g, n]);
          }, null, { o: h });
        };var h = a.a.e.F();a.d.template = { init: function init(b, c) {
            var d = a.a.c(c());"string" == typeof d || d.name ? a.f.ja(b) : (d = a.f.childNodes(b), d = a.a.oc(d), new a.r.fa(b).nodes(d));return { controlsDescendantBindings: !0 };
          }, update: function update(b, c, d, e, g) {
            var n = c(),
                t;c = a.a.c(n);d = !0;e = null;"string" == typeof c ? c = {} : (n = c.name, "if" in c && (d = a.a.c(c["if"])), d && "ifnot" in c && (d = !a.a.c(c.ifnot)), t = a.a.c(c.data));
            "foreach" in c ? e = a.uc(n || b, d && c.foreach || [], c, b, g) : d ? (g = "data" in c ? g.createChildContext(t, c.as) : g, e = a.Ya(n || b, g, c, b)) : a.f.ja(b);g = e;(t = a.a.e.get(b, h)) && "function" == typeof t.K && t.K();a.a.e.set(b, h, g && g.Z() ? g : p);
          } };a.h.ha.template = function (b) {
          b = a.h.Wa(b);return 1 == b.length && b[0].unknown || a.h.lc(b, "name") ? null : "This template engine does not support anonymous templates nested within its templates";
        };a.f.Q.template = !0;
      })();a.b("setTemplateEngine", a.ab);a.b("renderTemplate", a.Ya);a.a.wb = function (a, d, c) {
        if (a.length && d.length) {
          var e, g, h, k, f;for (e = g = 0; (!c || e < c) && (k = a[g]); ++g) {
            for (h = 0; f = d[h]; ++h) {
              if (k.value === f.value) {
                k.moved = f.index;f.moved = k.index;d.splice(h, 1);e = h = 0;break;
              }
            }e += h;
          }
        }
      };a.a.Fa = function () {
        function b(b, c, e, g, h) {
          var k = Math.min,
              f = Math.max,
              m = [],
              l,
              q = b.length,
              n,
              p = c.length,
              s = p - q || 1,
              u = q + p + 1,
              r,
              v,
              w;for (l = 0; l <= q; l++) {
            for (v = r, m.push(r = []), w = k(p, l + s), n = f(0, l - 1); n <= w; n++) {
              r[n] = n ? l ? b[l - 1] === c[n - 1] ? v[n - 1] : k(v[n] || u, r[n - 1] || u) + 1 : n + 1 : l + 1;
            }
          }k = [];f = [];s = [];l = q;for (n = p; l || n;) {
            p = m[l][n] - 1, n && p === m[l][n - 1] ? f.push(k[k.length] = { status: e,
              value: c[--n], index: n }) : l && p === m[l - 1][n] ? s.push(k[k.length] = { status: g, value: b[--l], index: l }) : (--n, --l, h.sparse || k.push({ status: "retained", value: c[n] }));
          }a.a.wb(f, s, 10 * q);return k.reverse();
        }return function (a, c, e) {
          e = "boolean" === typeof e ? { dontLimitMoves: e } : e || {};a = a || [];c = c || [];return a.length <= c.length ? b(a, c, "added", "deleted", e) : b(c, a, "deleted", "added", e);
        };
      }();a.b("utils.compareArrays", a.a.Fa);(function () {
        function b(b, d, g, h, k) {
          var f = [],
              m = a.j(function () {
            var l = d(g, k, a.a.ka(f, b)) || [];0 < f.length && (a.a.Lb(f, l), h && a.k.B(h, null, [g, l, k]));f.length = 0;a.a.ga(f, l);
          }, null, { o: b, Ia: function Ia() {
              return !a.a.ob(f);
            } });return { $: f, j: m.Z() ? m : p };
        }var d = a.a.e.F();a.a.Za = function (c, e, g, h, k) {
          function f(b, d) {
            x = q[d];r !== d && (A[b] = x);x.Na(r++);a.a.ka(x.$, c);s.push(x);w.push(x);
          }function m(b, c) {
            if (b) for (var d = 0, e = c.length; d < e; d++) {
              c[d] && a.a.u(c[d].$, function (a) {
                b(a, d, c[d].sa);
              });
            }
          }e = e || [];h = h || {};var l = a.a.e.get(c, d) === p,
              q = a.a.e.get(c, d) || [],
              n = a.a.Da(q, function (a) {
            return a.sa;
          }),
              t = a.a.Fa(n, e, h.dontLimitMoves),
              s = [],
              u = 0,
              r = 0,
              v = [],
              w = [];e = [];for (var A = [], n = [], x, B = 0, D, F; D = t[B]; B++) {
            switch (F = D.moved, D.status) {case "deleted":
                F === p && (x = q[u], x.j && x.j.K(), v.push.apply(v, a.a.ka(x.$, c)), h.beforeRemove && (e[B] = x, w.push(x)));u++;break;case "retained":
                f(B, u++);break;case "added":
                F !== p ? f(B, F) : (x = { sa: D.value, Na: a.p(r++) }, s.push(x), w.push(x), l || (n[B] = x));}
          }m(h.beforeMove, A);a.a.u(v, h.beforeRemove ? a.R : a.removeNode);for (var B = 0, l = a.f.firstChild(c), G; x = w[B]; B++) {
            x.$ || a.a.extend(x, b(c, g, x.sa, k, x.Na));for (u = 0; t = x.$[u]; l = t.nextSibling, G = t, u++) {
              t !== l && a.f.Bb(c, t, G);
            }!x.ic && k && (k(x.sa, x.$, x.Na), x.ic = !0);
          }m(h.beforeRemove, e);m(h.afterMove, A);m(h.afterAdd, n);a.a.e.set(c, d, s);
        };
      })();a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.Za);a.O = function () {
        this.allowTemplateRewriting = !1;
      };a.O.prototype = new a.H();a.O.prototype.renderTemplateSource = function (b) {
        var d = (9 > a.a.L ? 0 : b.nodes) ? b.nodes() : null;if (d) return a.a.S(d.cloneNode(!0).childNodes);b = b.text();return a.a.ba(b);
      };a.O.Oa = new a.O();a.ab(a.O.Oa);a.b("nativeTemplateEngine", a.O);(function () {
        a.Sa = function () {
          var a = this.kc = function () {
            if (!w || !w.tmpl) return 0;try {
              if (0 <= w.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2;
            } catch (a) {}return 1;
          }();this.renderTemplateSource = function (b, e, g) {
            g = g || {};if (2 > a) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h = b.data("precompiled");h || (h = b.text() || "", h = w.template(null, "{{ko_with $item.koBindingContext}}" + h + "{{/ko_with}}"), b.data("precompiled", h));b = [e.$data];e = w.extend({ koBindingContext: e }, g.templateOptions);e = w.tmpl(h, b, e);e.appendTo(v.createElement("div"));w.fragments = {};return e;
          };this.createJavaScriptEvaluatorBlock = function (a) {
            return "{{ko_code ((function() { return " + a + " })()) }}";
          };this.addTemplate = function (a, b) {
            v.write("<script type='text/html' id='" + a + "'>" + b + "\x3c/script>");
          };0 < a && (w.tmpl.tag.ko_code = { open: "__.push($1 || '');" }, w.tmpl.tag.ko_with = { open: "with($1) {", close: "} " });
        };a.Sa.prototype = new a.H();var b = new a.Sa();0 < b.kc && a.ab(b);a.b("jqueryTmplTemplateEngine", a.Sa);
      })();
    });
  })();
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ },
/* 1 */
/***/ function(module, exports) {

var CALLBACK_NAME = '__googleMapsApiOnLoadCallback'

var OPTIONS_KEYS = ['client', 'key', 'language', 'region', 'v']

module.exports = function(options) {
  options = options || {
    key: 'AIzaSyDR9w43fPwNxTG2nYWwWK8PCjrlDqH93U0',
    v: '3',
    libraries: ['places']
  }

  return new Promise(function(resolve, reject) {
    // Exit if not running inside a browser.
    if (typeof window === 'undefined') {
      return reject(
        new Error('Can only load the Google Maps API in the browser')
      )
    }

    // Reject the promise after a timeout.
    var timeoutId = setTimeout(function() {
      window[CALLBACK_NAME] = function() {} // Set the on load callback to a no-op.
      reject(new Error('Could not load the Google Maps API'))
    }, options.timeout || 10000)

    // Hook up the on load callback.
    window[CALLBACK_NAME] = function() {
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
      }
      resolve(window.google.maps)
      delete window[CALLBACK_NAME]
    }

    // Prepare the `script` tag to be inserted into the page.
    var scriptElement = document.createElement('script')
    var params = ['callback=' + CALLBACK_NAME]
    OPTIONS_KEYS.forEach(function(key) {
      if (options[key]) {
        params.push(key + '=' + options[key])
      }
    })
    if (options.libraries && options.libraries.length) {
      params.push('libraries=' + options.libraries.join(','))
    }
    scriptElement.src =
      'https://maps.googleapis.com/maps/api/js?' + params.join('&')

    // Insert the `script` tag.
    document.body.appendChild(scriptElement)
  })
}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(6)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 3 */
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 3;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "* {\n  /*border: 1px solid black;*/\n  box-sizing: border-box;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  border: 1 px solid black;\n  font-family: sans-serif;\n  color: #c3cbd8\n}\n\n#container {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: auto;\n  grid-template-areas:\n    \"left-nav map\";\n}\n\n#left-nav {\n  grid-area: left-nav;\n  background: black;\n  display: flex;\n  flex-wrap: wrap;\n  /*Forces child elements to accept curved border*/\n  overflow: hidden;\n}\n\n#list-name,\n#search-area,\n#menu-items {\n  width: 100%;\n  margin: 0;\n}\n\n#list-name {\n  height: 10%;\n}\n\np#name {\n  margin: 0;\n  padding-left: 1em;\n  padding-top: .5em;\n  text-align: left;\n  font-size: 1.5em;\n}\n\n#search-area {\n  height: 5%;\n  background-color: white;\n  display: flex;\n}\n\n#search-box {\n  width: 70%;\n  padding: 1em;\n  font-size: .75em;\n}\n\n#search-button {\n  height: 100%;\n  font-size: 1em;\n  border: none;\n  margin: 0;\n  width: 30%;\n  background-image: linear-gradient(to bottom, #54b4f5, #1b74ab);\n  color: white;\n}\n\nul {\n  list-style: none;\n  text-align: left;\n  padding: 5px;\n  margin: 0;\n}\n\nli {\n  padding: 10px;\n}\n\n#menu-items {\n  height: 85%;\n  font-size: 1em;\n}\n\n/*#left-nav {\n  height: 100vh;\n  width: 30%;\n  background-color: blue;\n  border: 1px solid black;\n  float: left;\n  margin: 0;\n  text-align: center;\n}*/\n", ""]);

// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },
/* 6 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			configurable: false,
			get: function() { return module.l; }
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			configurable: false,
			get: function() { return module.i; }
		});
		module.webpackPolyfill = 1;
	}
	return module;
}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var ko = __webpack_require__(0);

/* jshint esversion: 6 */

var loadGoogleMapsAPI = __webpack_require__(1);

loadGoogleMapsAPI().then(function (googleMaps) {
    initMap();
}).catch(function (err) {
    console.error('Map could not load: ' + err);
});

/************ GLOBAL VARS **************/
var map;
var markers = [];
var selectedMarker = '';
var infowindow;
// Address used
var vegasStrip = {
    lat: 36.1116423,
    lng: -115.1697258
};
// Will store results from places Casino Search
var CASINO_LIST = [];

/************* MAP FUNCTIONS ************/

function initMap() {

    // 1. Styling

    var myStyle = [{
        featureType: "administrative",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "poi",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }];

    // 2. Map and infowindow creation

    map = new google.maps.Map(document.getElementById('map'), {
        center: vegasStrip,
        zoom: 15,
        styles: myStyle
    });

    infowindow = new google.maps.InfoWindow();

    // 3. Search for Places and initiate Knockout

    var service = new google.maps.places.PlacesService(map);

    // Search for casinos then run callback
    service.nearbySearch({
        location: vegasStrip,
        radius: 2000,
        type: ['casino']
    }, callback);

    // For casino in results - add to list, create marker
    //    After list created, apply KO bindings
    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                addCasino(results[i]);
                createMarker(results[i]);
            }
        } else {
            //TODO: Add else if PlacesServiceStatus not OK
        }
        ko.applyBindings(new ViewModel());
    }

    function addCasino(place) {
        CASINO_LIST.push(place.name);
    }

    // 4. Marker Functions

    var defaultIcon = 'https://png.icons8.com/dice/android/40/000000';
    var highlightedIcon = 'https://png.icons8.com/dice/android/40/27ae60';

    // Returns image obj to assign to Marker:icon
    function makeMarkerIcon(iconUrl) {
        var url = '' + iconUrl;
        var image = {
            url: url,
            size: new google.maps.Size(21, 34),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(10, 34),
            scaledSize: new google.maps.Size(21, 34)
        };
        return image;
    }

    // Run by callback function after places search for each result
    // Creates initial markers
    // Pushes each into array and adds listeners (mouseover, click)
    function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            title: place.name,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: defaultIcon,
            position: place.geometry.location
        });

        markers.push(marker);

        // On Mouseover changes marker to highlight
        marker.addListener('mouseover', function () {
            this.setIcon(highlightedIcon);
        });

        // On Mouseout, returns marker to default
        marker.addListener('mouseout', function () {
            this.setIcon(defaultIcon);
        });

        // OnClick, toggles bounce for marker and sets InfoWindow
        marker.addListener('click', function () {
            toggleBounce(marker);
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        });
    }

    // Toggle Bounce animation for markers
    function toggleBounce(marker) {
        // If clicking on the same marker, turn bounce off
        if (marker.animation) {
            marker.setAnimation(null);
        } else {
            // If marker currently selected, turn off its animation
            if (selectedMarker) {
                selectedMarker.setAnimation(null);
            }
            // Set bounce animation on new marker
            marker.setAnimation(google.maps.Animation.BOUNCE);
            // Sets new marker as currently selected
            selectedMarker = marker;
        }
    }
}

/**** MAP FUNCTIONS OUTSIDE initMap ***/

// Clears selected when input entered
function clearSelected() {
    if (selectedMarker) {
        selectedMarker.setAnimation(null);
        selectedMarker = '';
    }
}

// Closes infoWindows
function closeInfoWindow() {
    if (infowindow) {
        infowindow.close();
    }
}

// Called when search-box input changed
// Adjust visible markers based on KO filtered array with input
function updateMarkers(newList) {
    // For each marker:
    // If marker in newList of results, visible=true, otherwise hidden
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = markers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var marker = _step.value;

            if (newList.indexOf(marker.title) != -1) {
                marker.setVisible(true);
            } else {
                marker.setVisible(false);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

/******* KNOCKOUT VIEWMODEL ********/

var ViewModel = function ViewModel() {
    var _this = this;

    var self = this;
    self.currentInput = ko.observable('');
    // Creates observable array list of casinos
    self.menuItems = ko.observableArray([]);
    self.menuItems(CASINO_LIST);

    // Creates filtered array of results when text input changed
    self.filterItems = ko.computed(function () {

        // Tracks currentInput obervable for new input
        // If currentInput empty, returns original menuItem list
        if (self.currentInput() === '') {
            return self.menuItems();
        } else {
            // If currentInput not empty, returns filtered array based on input
            var filter = _this.currentInput().toLowerCase();

            return ko.utils.arrayFilter(self.menuItems(), function (casino) {
                return casino.toLowerCase().indexOf(filter) !== -1;
            });
        }
    });

    // Event Listener for search-box text input
    // 1. Clears infowindows and resets animations
    // 2. Filters results and displays new markers / lists with matches
    $('#search-box').on('input', function () {
        var input = $('#search-box').val();
        self.currentInput(input);

        var newList = self.filterItems();

        clearSelected();
        closeInfoWindow();
        updateMarkers(newList);
    });
};

/***/ }
/******/ ]);