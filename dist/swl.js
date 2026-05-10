(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SWL"] = factory();
	else
		root["SWL"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; var r = _regenerator(), e = r.m(_regeneratorRuntime), t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor; function n(r) { var e = "function" == typeof r && r.constructor; return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name)); } var o = { "throw": 1, "return": 2, "break": 3, "continue": 3 }; function a(r) { var e, t; return function (n) { e || (e = { stop: function stop() { return t(n.a, 2); }, "catch": function _catch() { return n.v; }, abrupt: function abrupt(r, e) { return t(n.a, o[r], e); }, delegateYield: function delegateYield(r, o, a) { return e.resultName = o, t(n.d, _regeneratorValues(r), a); }, finish: function finish(r) { return t(n.f, r); } }, t = function t(r, _t, o) { n.p = e.prev, n.n = e.next; try { return r(_t, o); } finally { e.next = n.n; } }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n; try { return r.call(this, e); } finally { n.p = e.prev, n.n = e.next; } }; } return (_regeneratorRuntime = function _regeneratorRuntime() { return { wrap: function wrap(e, t, n, o) { return r.w(a(e), t, n, o && o.reverse()); }, isGeneratorFunction: n, mark: r.m, awrap: function awrap(r, e) { return new _OverloadYield(r, e); }, AsyncIterator: _regeneratorAsyncIterator, async: function async(r, e, t, o, u) { return (n(e) ? _regeneratorAsyncGen : _regeneratorAsync)(a(r), e, t, o, u); }, keys: _regeneratorKeys, values: _regeneratorValues }; })(); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regeneratorKeys(e) { var n = Object(e), r = []; for (var t in n) r.unshift(t); return function e() { for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e; return e.done = !0, e; }; }
function _regeneratorAsync(n, e, r, t, o) { var a = _regeneratorAsyncGen(n, e, r, t, o); return a.next().then(function (n) { return n.done ? n.value : a.next(); }); }
function _regeneratorAsyncGen(r, e, t, o, n) { return new _regeneratorAsyncIterator(_regenerator().w(r, e, t, o), n || Promise); }
function _regeneratorAsyncIterator(t, e) { function n(r, o, i, f) { try { var c = t[r](o), u = c.value; return u instanceof _OverloadYield ? e.resolve(u.v).then(function (t) { n("next", t, i, f); }, function (t) { n("throw", t, i, f); }) : e.resolve(u).then(function (t) { c.value = t, i(c); }, function (t) { return n("throw", t, i, f); }); } catch (t) { f(t); } } var r; this.next || (_regeneratorDefine2(_regeneratorAsyncIterator.prototype), _regeneratorDefine2(_regeneratorAsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () { return this; })), _regeneratorDefine2(this, "_invoke", function (t, o, i) { function f() { return new e(function (e, r) { n(t, i, e, r); }); } return r = r ? r.then(f, f) : f(); }, !0); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _OverloadYield(e, d) { this.v = e, this.k = d; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// SenangWebs Loading Library

(function () {
  // --- Helper Functions (Defined Once) ---

  function hexToRgba(hex, opacity) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? "rgba(".concat(parseInt(result[1], 16), ", ").concat(parseInt(result[2], 16), ", ").concat(parseInt(result[3], 16), ", ").concat(opacity, ")") : null; // Return null if invalid hex
  }
  function isValidColor(color) {
    // Check if it's a valid hex color
    if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)) {
      return true;
    }
    // Check if it's a valid CSS color name or rgb/rgba
    var s = new Option().style;
    s.color = color;
    return s.color !== '';
  }
  function parseNumericAttr(value, defaultValue) {
    if (value === undefined || value === null || value === '') {
      return defaultValue;
    }
    var parsed = parseFloat(value);
    return isNaN(parsed) ? defaultValue : parsed;
  }
  function createSpinner(color) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'swl-spinner');
    svg.setAttribute('viewBox', '0 0 50 50');
    svg.style.animation = 'swl-spin 1s linear infinite';
    var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '25');
    circle.setAttribute('cy', '25');
    circle.setAttribute('r', '20');
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', color);
    circle.setAttribute('stroke-width', '5');
    circle.setAttribute('stroke-linecap', 'round');
    circle.setAttribute('stroke-dasharray', '80, 200');
    circle.setAttribute('stroke-dashoffset', '0');
    svg.appendChild(circle);
    return svg;
  }
  function createPulse(color) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'swl-pulse');
    svg.setAttribute('viewBox', '0 0 50 50');
    svg.style.animation = 'swl-pulse 1s ease-in-out infinite';
    var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '25');
    circle.setAttribute('cy', '25');
    circle.setAttribute('r', '20');
    circle.setAttribute('fill', color);
    svg.appendChild(circle);
    return svg;
  }
  function createImage(url) {
    var img = document.createElement('img');
    img.src = url;
    img.className = 'swl-image';
    img.onerror = function () {
      console.error("SWL Error: Could not load image at ".concat(url));
      img.remove();
    };
    return img;
  }
  function preloadImage(url) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = url;
    });
  }
  function removeOverlayLogic(overlay, startTime, minDuration, originalOverflow) {
    var elapsedTime = Date.now() - startTime;
    var remainingTime = Math.max(0, minDuration - elapsedTime);
    setTimeout(function () {
      overlay.classList.add('swl-fade-out');
      setTimeout(function () {
        overlay.remove();
        // Restore body scroll
        document.body.style.overflow = originalOverflow || '';
      }, 300);
    }, remainingTime);
  }

  // --- Main Logic ---
  var style = document.createElement('style');
  style.textContent = "\n    .swl-overlay {\n      position: fixed !important;\n      top: 0 !important;\n      left: 0 !important;\n      width: 100vw !important;\n      height: 100vh !important;\n      display: flex !important;\n      justify-content: center !important;\n      align-items: center !important;\n      opacity: 1;\n      transition: opacity 0.3s ease-out;\n      z-index: 99999 !important;\n    }\n    .swl-fade-out {\n      opacity: 0;\n    }\n    .swl-backdrop {\n      position: absolute !important;\n      top: 0 !important;\n      left: 0 !important;\n      width: 100% !important;\n      height: 100% !important;\n    }\n    .swl-content {\n      position: relative !important;\n      z-index: 1 !important;\n    }\n    .swl-spinner, .swl-pulse, .swl-image {\n      width: 50px !important;\n      height: 50px !important;\n      display: block;\n      margin: auto;\n    }\n    @keyframes swl-spin {\n      0% { transform: rotate(0deg); }\n      100% { transform: rotate(360deg); }\n    }\n    @keyframes swl-pulse {\n      0% { transform: scale(0.8); opacity: 0.5; }\n      50% { transform: scale(1); opacity: 1; }\n      100% { transform: scale(0.8); opacity: 0.5; }\n    }\n    .swl-sr-only {\n      position: absolute;\n      width: 1px;\n      height: 1px;\n      padding: 0;\n      margin: -1px;\n      overflow: hidden;\n      clip: rect(0, 0, 0, 0);\n      white-space: nowrap;\n      border-width: 0;\n    }\n  ";
  document.head.appendChild(style);

  // Initialize as soon as DOM is ready
  function initialize() {
    var swlElements = document.querySelectorAll('[data-swl]');
    swlElements.forEach(/*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(swlElement) {
        var startTime, overlay, backdrop, content, fragment, loaderType, color, minDuration, bgColor, bgOpacity, bgBlur, zIndex, imageUrl, originalOverflow, rgbaColor, srText, loaderElement, handleRemove;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              startTime = Date.now(); // Preload image if specified
              if (!(swlElement.dataset.swlType === 'image' && swlElement.dataset.swlImage)) {
                _context.next = 10;
                break;
              }
              _context.prev = 2;
              _context.next = 5;
              return preloadImage(swlElement.dataset.swlImage);
            case 5:
              _context.next = 10;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](2);
              console.warn('SWL Warning: Failed to preload image', _context.t0);
            case 10:
              overlay = document.createElement('div');
              overlay.className = 'swl-overlay';
              backdrop = document.createElement('div');
              backdrop.className = 'swl-backdrop';
              content = document.createElement('div');
              content.className = 'swl-content';
              overlay.appendChild(backdrop);
              overlay.appendChild(content);
              fragment = document.createDocumentFragment();
              while (swlElement.firstChild) {
                fragment.appendChild(swlElement.firstChild);
              }
              content.appendChild(fragment);
              document.body.appendChild(overlay);
              loaderType = swlElement.dataset.swlType || 'spinner';
              color = swlElement.dataset.swlColor || '#000000';
              minDuration = parseNumericAttr(swlElement.dataset.swlDuration, 0);
              bgColor = swlElement.dataset.swlBgColor || '#ffffff';
              bgOpacity = parseNumericAttr(swlElement.dataset.swlBgOpacity, 0.8);
              bgBlur = parseNumericAttr(swlElement.dataset.swlBgBlur, 0);
              zIndex = parseNumericAttr(swlElement.dataset.swlZIndex, 9999);
              imageUrl = swlElement.dataset.swlImage; // Extract before removal
              // Remove original element from DOM after extracting config
              swlElement.remove();

              // Prevent body scroll while loading
              originalOverflow = document.body.style.overflow;
              document.body.style.overflow = 'hidden';
              overlay.style.zIndex = zIndex;

              // Handle background color with opacity
              if (bgColor.startsWith('#')) {
                rgbaColor = hexToRgba(bgColor, bgOpacity);
                backdrop.style.backgroundColor = rgbaColor || "rgba(255, 255, 255, ".concat(bgOpacity, ")");
              } else if (isValidColor(bgColor)) {
                // For named colors, use CSS color with separate opacity
                backdrop.style.backgroundColor = bgColor;
                backdrop.style.opacity = bgOpacity;
              } else {
                console.warn("SWL Warning: Invalid color \"".concat(bgColor, "\". Using default white."));
                backdrop.style.backgroundColor = "rgba(255, 255, 255, ".concat(bgOpacity, ")");
              }
              if (bgBlur > 0) {
                backdrop.style.backdropFilter = "blur(".concat(bgBlur, "px)");
                backdrop.style.webkitBackdropFilter = "blur(".concat(bgBlur, "px)");
              }

              // Add screen reader text
              srText = document.createElement('span');
              srText.textContent = 'Loading...';
              srText.className = 'swl-sr-only';
              content.appendChild(srText);
              if (!(content.children.length <= 1)) {
                _context.next = 53;
                break;
              }
              _context.t1 = loaderType;
              _context.next = _context.t1 === 'spinner' ? 44 : _context.t1 === 'pulse' ? 46 : _context.t1 === 'image' ? 48 : 50;
              break;
            case 44:
              loaderElement = createSpinner(color);
              return _context.abrupt("break", 52);
            case 46:
              loaderElement = createPulse(color);
              return _context.abrupt("break", 52);
            case 48:
              if (imageUrl) {
                loaderElement = createImage(imageUrl);
              } else {
                console.warn('SWL Warning: data-swl-type="image" requires data-swl-image attribute.');
                loaderElement = createSpinner(color);
              }
              return _context.abrupt("break", 52);
            case 50:
              console.warn("SWL Warning: Unknown data-swl-type \"".concat(loaderType, "\". Defaulting to spinner."));
              loaderElement = createSpinner(color);
            case 52:
              if (loaderElement) {
                content.insertBefore(loaderElement, srText);
              }
            case 53:
              handleRemove = function handleRemove() {
                removeOverlayLogic(overlay, startTime, minDuration, originalOverflow);
              };
              if (document.readyState === 'complete') {
                handleRemove();
              } else {
                window.addEventListener('load', handleRemove, {
                  once: true
                });
              }
            case 55:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 7]]);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  // Initialize as early as possible
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
})();
/******/ 	return __webpack_exports__;
/******/ })()
;
});