(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(4);
var bytesToUuid = __webpack_require__(6);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
var _seedBytes = rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
var _nodeId = [
  _seedBytes[0] | 0x01,
  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
];

// Per 4.2.2, randomize (14 bit) clockseq
var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
var _lastMSecs = 0, _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  var node = options.node || _nodeId;
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createStore = createStore;
exports.createReducer = createReducer;
exports.combineReducer = combineReducer;

var _util = __webpack_require__(7);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a store which holds charts states and utils to
 * interact with the state via dispatchers
 * 
 * Reducers are pure functions that processing chart states.
 * 
 * Chart State Example:
 * // This is one chart state. The whole charts states are composed
 * // by multiple such states.
 * state = {
 *   // data state to hold raw data
 *   data: [{
 *     'product': 'apple',
 *     'total records': 101,
 *     'last update time': 1513496590483
 *   }, {
 *     'product': 'orange',
 *     'total records': 200,
 *     'last update time': 1513496629670
 *   }, {
 *     'product': 'pear',
 *     'total records': 37,
 *     'last update time': 1513496643430
 *   }, {
 *     'product': 'apple',
 *     'total records': 150,
 *     'last update time': 1513496590483
 *   }, {
 *     'product': 'orange',
 *     'total records': 221,
 *     'last update time': 1513496629670
 *   }],
 * 
 *   // final render state (frs) to hold UI related information
 *   frs: {
 *     x: {
 *       size: 0,
 *       origin: 'middle',
 *       data: [1, 3, 6, 8, 11],
 *       label: 'product'
 *     },
 *     y: {
 *       size: 1,
 *       origin: 'end',
 *       data: [10.1, 15, 20, 22.1, 3.7],
 *       label: 'total records'
 *     },
 *     z: null
 *   }
 * }
 * 
 * @param {function} reducer 
 */
function createStore(reducer) {
  // Init state come from reducer
  var state = reducer();

  return {
    // The async reducer map used to add async reducers into store
    asyncReducerMap: {},
    /**
     * Dispatch action to trigger state changes
     */
    dispatch: function dispatch() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (true) {
        // log actions in console
        console.group(action.type);
        console.info('%cbefore:', 'color: green', state);
        console.info('%caction:', 'color: red', action);
      }

      // Update state
      state = reducer(state, action);

      if (true) {
        // log actions in console
        console.info('%cafter:', 'color: green', state);
        console.groupEnd();
      }
    },
    /**
     * Replace the reducer for store to a different one
     * This is useful when we want to dynamically add reducers
     */
    replaceReducer: function replaceReducer(newReducer) {
      reducer = newReducer;
    },
    /**
     * Return the current state for given key
     * This is to allow application to 'connect' to state
     */
    getState: function getState(stateKey) {
      if (!stateKey) {
        return state;
      } else {
        return state[stateKey];
      }
    }
  };
}

/**
 * Create a reducer based on given reducer map.
 * By wrapping combineReducer function, we have a chance to dynamically
 * add new reducers
 * 
 * @param {object} asyncReducerMap 
 */
function createReducer() {
  var asyncReducerMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return combineReducer(_extends({}, asyncReducerMap));
}

/**
 * Will combine nested reducer map to a big reducer
 * 
 * Example:
 * combineReducer({
 *   'chart 1': {
 *     data: () => {},
 *     frs: () => {}
 *   },
 *   'chart 2': {
 *     data: () => {},
 *     frs: () => {}
 *   }
 * })
 * 
 * will give a reducer function which nested with
 * combined reducer for chart 1 and chart 2
 * 
 * @param {object} reducerMap 
 */
function combineReducer() {
  var reducerMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var newState = {};

    for (var key in reducerMap) {
      var reducerFn = reducerMap[key],
          existState = state[key] || {};

      if (_util2.default.isFunction(reducerFn)) {
        // Pass the whole state down as argument for
        // cross state key access
        newState[key] = reducerFn(existState, action, state, reducerMap);
      } else {
        // Recursively combine nested reducer map
        newState[key] = combineReducer(reducerMap[key])(existState, action);
      }
    }

    return newState;
  };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _v = __webpack_require__(0);

var _v2 = _interopRequireDefault(_v);

var _stateManager = __webpack_require__(1);

var _Chart = __webpack_require__(8);

var _Chart2 = _interopRequireDefault(_Chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _store = void 0,
    // The store for all charts state
_chartMap = {}; // chart map to quickly find chart

/**
 * Trigger render loop
 */
function _loop(lastTimestamp) {
  _loop.animationKey = window.requestAnimationFrame(function () {
    var now = Date.now();
    var dt = 1000 / _loop._fps;
    _loop._accumulator = _loop._accumulator ? _loop._accumulator : 0;
    _loop._accumulator += now - lastTimestamp;

    // New frame time
    if (_loop._accumulator >= dt) {
      while (_loop._accumulator >= dt) {
        _loop._accumulator -= dt;
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _chartMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var chartId = _step.value;

          _chartMap[chartId].render();
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
    _loop(now);
  });
}

var chartx = {
  constant: {
    /**
     * The special COUNT identifier for calculating while rendering
     */
    COUNT: (0, _v2.default)()
  },

  /**
   * Spawn a chart instance
   */
  spawn: function spawn() {
    // Create store only when the first chart is about to be spawned
    if (!_store) {
      _store = (0, _stateManager.createStore)((0, _stateManager.createReducer)());
    }

    var newChart = new _Chart2.default(_store);
    _chartMap[newChart.id] = newChart;

    return newChart;
  },

  /**
   * Dispose a chart
   */
  dispose: function dispose(chart) {
    if (!chart || !_chartMap[chart.id]) {
      return;
    }

    // If we are going to dispose the last chart
    if (Object.keys(_chartMap).length === 1 && _chartMap[chart.id]) {
      window.cancelAnimationFrame(_loop.animationKey);
      _store = null;
    }

    _chartMap[chart.id] = undefined;
    chart.dispose();
  }
};

exports.default = chartx;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

module.exports = rng;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  isFunction: function isFunction(functionToCheck) {
    return functionToCheck && Object.prototype.toString.call(functionToCheck) === '[object Function]';
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _v = __webpack_require__(0);

var _v2 = _interopRequireDefault(_v);

var _stateManager = __webpack_require__(1);

var _dataReducer = __webpack_require__(9);

var _dataReducer2 = _interopRequireDefault(_dataReducer);

var _frsReducer = __webpack_require__(10);

var _frsReducer2 = _interopRequireDefault(_frsReducer);

var _storeAction = __webpack_require__(11);

var _chartAction = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Chart = function () {
  function Chart(store) {
    _classCallCheck(this, Chart);

    this.id = (0, _v2.default)();
    this.store = store;

    // Add reducer to store
    this.store.asyncReducerMap[this.id] = (0, _stateManager.combineReducer)({
      data: _dataReducer2.default,
      frs: _frsReducer2.default
    });
    this.store.replaceReducer((0, _stateManager.createReducer)(this.store.asyncReducerMap));
    this.store.dispatch((0, _storeAction.storeRefresh)());
  }

  /**
   * Get the state for this chart
   */


  _createClass(Chart, [{
    key: 'getState',
    value: function getState() {
      return this.store.getState(this.id);
    }

    /**
     * Set the renderer for this chart
     * 
     * @param {string} renderer 
     */

  }, {
    key: 'setRenderer',
    value: function setRenderer(renderer) {
      this.store.dispatch((0, _chartAction.setRenderer)(this.id, renderer));
    }

    /**
     * Render a chart with given config
     */

  }, {
    key: 'render',
    value: function render() {
      if (this.isDirty) {}

      // TODO: with large data scale, the FRS may not be ready just yet.
      // We may need to have some kind of waiting logic to render it
      var frs = this.store.getState(this.id).frs;

      // TODO: hock up with renderers to render FRS
      return this;
    }
  }, {
    key: 'dispatch',
    value: function dispatch(action) {
      this.store.dispatch(action);
    }
  }, {
    key: 'setData',
    value: function setData(chartData) {

      return this;
    }
  }, {
    key: 'setName',
    value: function setName(chartName) {

      return this;
    }

    // When there is no numeric data, we will use default measure to render chart

  }, {
    key: 'setDefaultMeasure',
    value: function setDefaultMeasure() {
      var defaultMeasure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : chartx.constant.COUNT;


      return this;
    }

    // The data on axis will be grouped by the order in given array

  }, {
    key: 'setGroupby',
    value: function setGroupby(aspect, groupbys) {

      return this;
    }

    // The size for axis will be applied on all other dimentions. For example, in
    // this case the size of x is 0, meaning we don't need to render any length on
    // y or z axis. We want the height of bars to be determined by data only
    // Note that the unit for size is determined by the size of tick intervals on
    // other axis. In this case, if the total length of x axis is 100px, and there
    // are 10 ticks, then the unit length is 10px for y axis.

  }, {
    key: 'setSize',
    value: function setSize(aspect, unitValue) {

      return this;
    }

    // Note that the unit for tick is determined by the size of render result on
    // this axis. In this case, we render size of y as 1 unit (which is the interval
    // of x ticks), hence 0.5 will be the middle of bars (default). The optional 
    // formatXTick function is used to format the tick value

  }, {
    key: 'setTick',
    value: function setTick(aspect, unitValue, formatFn) {

      return this;
    }
  }, {
    key: 'setContainer',
    value: function setContainer(container) {

      return this;
    }
  }, {
    key: 'setTheme',
    value: function setTheme(theme) {

      return this;
    }
  }, {
    key: 'watch',
    value: function watch() {

      return this;
    }

    /**
     * The death of this chart
     */

  }, {
    key: 'dispose',
    value: function dispose() {}
  }]);

  return Chart;
}();

exports.default = Chart;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dataReducer;
function dataReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  return state;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = frsReducer;
function frsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  return state;
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeRefresh = storeRefresh;
var STORE_REFRESH = exports.STORE_REFRESH = 'STORE_REFRESH';

function storeRefresh() {
  return {
    type: STORE_REFRESH
  };
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setRenderer = setRenderer;
var SET_RENDERER = exports.SET_RENDERER = 'SET_RENDERER';

function setRenderer() {
  return {
    type: SET_RENDERER
  };
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2ODZhZmRiMTIwNTRjMjFjNjI0NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC92MS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFydHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9DaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvZGF0YVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2Zyc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvc3RvcmVBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY2hhcnRBY3Rpb24uanMiXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJjcmVhdGVSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJhc3luY1JlZHVjZXJNYXAiLCJkaXNwYXRjaCIsImFjdGlvbiIsImNvbnNvbGUiLCJncm91cCIsInR5cGUiLCJpbmZvIiwiZ3JvdXBFbmQiLCJyZXBsYWNlUmVkdWNlciIsIm5ld1JlZHVjZXIiLCJnZXRTdGF0ZSIsInN0YXRlS2V5IiwicmVkdWNlck1hcCIsIm5ld1N0YXRlIiwia2V5IiwicmVkdWNlckZuIiwiZXhpc3RTdGF0ZSIsImlzRnVuY3Rpb24iLCJfc3RvcmUiLCJfY2hhcnRNYXAiLCJfbG9vcCIsImxhc3RUaW1lc3RhbXAiLCJhbmltYXRpb25LZXkiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJub3ciLCJEYXRlIiwiZHQiLCJfZnBzIiwiX2FjY3VtdWxhdG9yIiwiY2hhcnRJZCIsInJlbmRlciIsImNoYXJ0eCIsImNvbnN0YW50IiwiQ09VTlQiLCJzcGF3biIsIm5ld0NoYXJ0IiwiaWQiLCJkaXNwb3NlIiwiY2hhcnQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ1bmRlZmluZWQiLCJmdW5jdGlvblRvQ2hlY2siLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJDaGFydCIsInN0b3JlIiwiZGF0YSIsImZycyIsInJlbmRlcmVyIiwiaXNEaXJ0eSIsImNoYXJ0RGF0YSIsImNoYXJ0TmFtZSIsImRlZmF1bHRNZWFzdXJlIiwiYXNwZWN0IiwiZ3JvdXBieXMiLCJ1bml0VmFsdWUiLCJmb3JtYXRGbiIsImNvbnRhaW5lciIsInRoZW1lIiwiZGF0YVJlZHVjZXIiLCJmcnNSZWR1Y2VyIiwic3RvcmVSZWZyZXNoIiwiU1RPUkVfUkVGUkVTSCIsInNldFJlbmRlcmVyIiwiU0VUX1JFTkRFUkVSIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtE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Ozs7UUNBZW1FLFksR0FBQUEsWTtBQUZULElBQU1DLHdDQUFnQixlQUF0Qjs7QUFFQSxTQUFTRCxZQUFULEdBQXlCO0FBQzlCLFNBQU87QUFDTDdELFVBQU04RDtBQURELEdBQVA7QUFHRCxDOzs7Ozs7Ozs7Ozs7UUNKZUMsVyxHQUFBQSxXO0FBRlQsSUFBTUMsc0NBQWUsY0FBckI7O0FBRUEsU0FBU0QsV0FBVCxHQUF3QjtBQUM3QixTQUFPO0FBQ0wvRCxVQUFNZ0U7QUFERCxHQUFQO0FBR0QsQyIsImZpbGUiOiJjaGFydHguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjg2YWZkYjEyMDU0YzIxYzYyNDUiLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG4vLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbi8vIHJhbmRvbSAjJ3Mgd2UgbmVlZCB0byBpbml0IG5vZGUgYW5kIGNsb2Nrc2VxXG52YXIgX3NlZWRCeXRlcyA9IHJuZygpO1xuXG4vLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbnZhciBfbm9kZUlkID0gW1xuICBfc2VlZEJ5dGVzWzBdIHwgMHgwMSxcbiAgX3NlZWRCeXRlc1sxXSwgX3NlZWRCeXRlc1syXSwgX3NlZWRCeXRlc1szXSwgX3NlZWRCeXRlc1s0XSwgX3NlZWRCeXRlc1s1XVxuXTtcblxuLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbnZhciBfY2xvY2tzZXEgPSAoX3NlZWRCeXRlc1s2XSA8PCA4IHwgX3NlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG5cbi8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxudmFyIF9sYXN0TVNlY3MgPSAwLCBfbGFzdE5TZWNzID0gMDtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS11dWlkIGZvciBBUEkgZGV0YWlsc1xuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIHZhciBiID0gYnVmIHx8IFtdO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9XG5cbiAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfVxuXG4gIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gIC8vIGB0aW1lX2xvd2BcbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAvLyBgdGltZV9taWRgXG4gIHZhciB0bWggPSAobXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAvLyBgbm9kZWBcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmID8gYnVmIDogYnl0ZXNUb1V1aWQoYik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy91dWlkL3YxLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiBDcmVhdGUgYSBzdG9yZSB3aGljaCBob2xkcyBjaGFydHMgc3RhdGVzIGFuZCB1dGlscyB0b1xuICogaW50ZXJhY3Qgd2l0aCB0aGUgc3RhdGUgdmlhIGRpc3BhdGNoZXJzXG4gKiBcbiAqIFJlZHVjZXJzIGFyZSBwdXJlIGZ1bmN0aW9ucyB0aGF0IHByb2Nlc3NpbmcgY2hhcnQgc3RhdGVzLlxuICogXG4gKiBDaGFydCBTdGF0ZSBFeGFtcGxlOlxuICogLy8gVGhpcyBpcyBvbmUgY2hhcnQgc3RhdGUuIFRoZSB3aG9sZSBjaGFydHMgc3RhdGVzIGFyZSBjb21wb3NlZFxuICogLy8gYnkgbXVsdGlwbGUgc3VjaCBzdGF0ZXMuXG4gKiBzdGF0ZSA9IHtcbiAqICAgLy8gZGF0YSBzdGF0ZSB0byBob2xkIHJhdyBkYXRhXG4gKiAgIGRhdGE6IFt7XG4gKiAgICAgJ3Byb2R1Y3QnOiAnYXBwbGUnLFxuICogICAgICd0b3RhbCByZWNvcmRzJzogMTAxLFxuICogICAgICdsYXN0IHVwZGF0ZSB0aW1lJzogMTUxMzQ5NjU5MDQ4M1xuICogICB9LCB7XG4gKiAgICAgJ3Byb2R1Y3QnOiAnb3JhbmdlJyxcbiAqICAgICAndG90YWwgcmVjb3Jkcyc6IDIwMCxcbiAqICAgICAnbGFzdCB1cGRhdGUgdGltZSc6IDE1MTM0OTY2Mjk2NzBcbiAqICAgfSwge1xuICogICAgICdwcm9kdWN0JzogJ3BlYXInLFxuICogICAgICd0b3RhbCByZWNvcmRzJzogMzcsXG4gKiAgICAgJ2xhc3QgdXBkYXRlIHRpbWUnOiAxNTEzNDk2NjQzNDMwXG4gKiAgIH0sIHtcbiAqICAgICAncHJvZHVjdCc6ICdhcHBsZScsXG4gKiAgICAgJ3RvdGFsIHJlY29yZHMnOiAxNTAsXG4gKiAgICAgJ2xhc3QgdXBkYXRlIHRpbWUnOiAxNTEzNDk2NTkwNDgzXG4gKiAgIH0sIHtcbiAqICAgICAncHJvZHVjdCc6ICdvcmFuZ2UnLFxuICogICAgICd0b3RhbCByZWNvcmRzJzogMjIxLFxuICogICAgICdsYXN0IHVwZGF0ZSB0aW1lJzogMTUxMzQ5NjYyOTY3MFxuICogICB9XSxcbiAqIFxuICogICAvLyBmaW5hbCByZW5kZXIgc3RhdGUgKGZycykgdG8gaG9sZCBVSSByZWxhdGVkIGluZm9ybWF0aW9uXG4gKiAgIGZyczoge1xuICogICAgIHg6IHtcbiAqICAgICAgIHNpemU6IDAsXG4gKiAgICAgICBvcmlnaW46ICdtaWRkbGUnLFxuICogICAgICAgZGF0YTogWzEsIDMsIDYsIDgsIDExXSxcbiAqICAgICAgIGxhYmVsOiAncHJvZHVjdCdcbiAqICAgICB9LFxuICogICAgIHk6IHtcbiAqICAgICAgIHNpemU6IDEsXG4gKiAgICAgICBvcmlnaW46ICdlbmQnLFxuICogICAgICAgZGF0YTogWzEwLjEsIDE1LCAyMCwgMjIuMSwgMy43XSxcbiAqICAgICAgIGxhYmVsOiAndG90YWwgcmVjb3JkcydcbiAqICAgICB9LFxuICogICAgIHo6IG51bGxcbiAqICAgfVxuICogfVxuICogXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSByZWR1Y2VyIFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RvcmUgKHJlZHVjZXIpIHtcbiAgLy8gSW5pdCBzdGF0ZSBjb21lIGZyb20gcmVkdWNlclxuICBsZXQgc3RhdGUgPSByZWR1Y2VyKClcblxuICByZXR1cm4ge1xuICAgIC8vIFRoZSBhc3luYyByZWR1Y2VyIG1hcCB1c2VkIHRvIGFkZCBhc3luYyByZWR1Y2VycyBpbnRvIHN0b3JlXG4gICAgYXN5bmNSZWR1Y2VyTWFwOiB7fSxcbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaCBhY3Rpb24gdG8gdHJpZ2dlciBzdGF0ZSBjaGFuZ2VzXG4gICAgICovXG4gICAgZGlzcGF0Y2g6IChhY3Rpb24gPSB7fSkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52LmNvZGUgPT09ICdERVYnKSB7XG4gICAgICAgIC8vIGxvZyBhY3Rpb25zIGluIGNvbnNvbGVcbiAgICAgICAgY29uc29sZS5ncm91cChhY3Rpb24udHlwZSlcbiAgICAgICAgY29uc29sZS5pbmZvKCclY2JlZm9yZTonLCAnY29sb3I6IGdyZWVuJywgc3RhdGUpXG4gICAgICAgIGNvbnNvbGUuaW5mbygnJWNhY3Rpb246JywgJ2NvbG9yOiByZWQnLCBhY3Rpb24pXG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIFVwZGF0ZSBzdGF0ZVxuICAgICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5jb2RlID09PSAnREVWJykge1xuICAgICAgICAvLyBsb2cgYWN0aW9ucyBpbiBjb25zb2xlXG4gICAgICAgIGNvbnNvbGUuaW5mbygnJWNhZnRlcjonLCAnY29sb3I6IGdyZWVuJywgc3RhdGUpXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxuICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSB0aGUgcmVkdWNlciBmb3Igc3RvcmUgdG8gYSBkaWZmZXJlbnQgb25lXG4gICAgICogVGhpcyBpcyB1c2VmdWwgd2hlbiB3ZSB3YW50IHRvIGR5bmFtaWNhbGx5IGFkZCByZWR1Y2Vyc1xuICAgICAqL1xuICAgIHJlcGxhY2VSZWR1Y2VyOiAobmV3UmVkdWNlcikgPT4ge1xuICAgICAgcmVkdWNlciA9IG5ld1JlZHVjZXJcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgY3VycmVudCBzdGF0ZSBmb3IgZ2l2ZW4ga2V5XG4gICAgICogVGhpcyBpcyB0byBhbGxvdyBhcHBsaWNhdGlvbiB0byAnY29ubmVjdCcgdG8gc3RhdGVcbiAgICAgKi9cbiAgICBnZXRTdGF0ZTogKHN0YXRlS2V5KSA9PiB7XG4gICAgICBpZiAoIXN0YXRlS2V5KSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVtzdGF0ZUtleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSByZWR1Y2VyIGJhc2VkIG9uIGdpdmVuIHJlZHVjZXIgbWFwLlxuICogQnkgd3JhcHBpbmcgY29tYmluZVJlZHVjZXIgZnVuY3Rpb24sIHdlIGhhdmUgYSBjaGFuY2UgdG8gZHluYW1pY2FsbHlcbiAqIGFkZCBuZXcgcmVkdWNlcnNcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IGFzeW5jUmVkdWNlck1hcCBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlZHVjZXIgKGFzeW5jUmVkdWNlck1hcCA9IHt9KSB7XG4gIHJldHVybiBjb21iaW5lUmVkdWNlcih7Li4uYXN5bmNSZWR1Y2VyTWFwfSlcbn1cblxuLyoqXG4gKiBXaWxsIGNvbWJpbmUgbmVzdGVkIHJlZHVjZXIgbWFwIHRvIGEgYmlnIHJlZHVjZXJcbiAqIFxuICogRXhhbXBsZTpcbiAqIGNvbWJpbmVSZWR1Y2VyKHtcbiAqICAgJ2NoYXJ0IDEnOiB7XG4gKiAgICAgZGF0YTogKCkgPT4ge30sXG4gKiAgICAgZnJzOiAoKSA9PiB7fVxuICogICB9LFxuICogICAnY2hhcnQgMic6IHtcbiAqICAgICBkYXRhOiAoKSA9PiB7fSxcbiAqICAgICBmcnM6ICgpID0+IHt9XG4gKiAgIH1cbiAqIH0pXG4gKiBcbiAqIHdpbGwgZ2l2ZSBhIHJlZHVjZXIgZnVuY3Rpb24gd2hpY2ggbmVzdGVkIHdpdGhcbiAqIGNvbWJpbmVkIHJlZHVjZXIgZm9yIGNoYXJ0IDEgYW5kIGNoYXJ0IDJcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IHJlZHVjZXJNYXAgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lUmVkdWNlciAocmVkdWNlck1hcCA9IHt9KSB7XG4gIHJldHVybiAoc3RhdGUgPSB7fSwgYWN0aW9uID0ge30pID0+IHtcbiAgICBsZXQgbmV3U3RhdGUgPSB7fVxuXG4gICAgZm9yIChsZXQga2V5IGluIHJlZHVjZXJNYXApIHtcbiAgICAgIGxldCByZWR1Y2VyRm4gPSByZWR1Y2VyTWFwW2tleV0sXG4gICAgICAgICAgZXhpc3RTdGF0ZSA9IHN0YXRlW2tleV0gfHwge31cblxuICAgICAgaWYgKHV0aWwuaXNGdW5jdGlvbihyZWR1Y2VyRm4pKSB7XG4gICAgICAgIC8vIFBhc3MgdGhlIHdob2xlIHN0YXRlIGRvd24gYXMgYXJndW1lbnQgZm9yXG4gICAgICAgIC8vIGNyb3NzIHN0YXRlIGtleSBhY2Nlc3NcbiAgICAgICAgbmV3U3RhdGVba2V5XSA9IHJlZHVjZXJGbihleGlzdFN0YXRlLCBhY3Rpb24sIHN0YXRlLCByZWR1Y2VyTWFwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgY29tYmluZSBuZXN0ZWQgcmVkdWNlciBtYXBcbiAgICAgICAgbmV3U3RhdGVba2V5XSA9IGNvbWJpbmVSZWR1Y2VyKHJlZHVjZXJNYXBba2V5XSkoZXhpc3RTdGF0ZSwgYWN0aW9uKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXdTdGF0ZVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlTWFuYWdlci5qcyIsImltcG9ydCB1dWlkdjEgZnJvbSAndXVpZC92MSdcbmltcG9ydCB7Y29tYmluZVJlZHVjZXIsIGNyZWF0ZVN0b3JlLCBjcmVhdGVSZWR1Y2VyfSBmcm9tICcuL3N0YXRlTWFuYWdlcidcbmltcG9ydCBDaGFydCBmcm9tICcuL0NoYXJ0J1xuXG5cblxuXG5sZXQgX3N0b3JlLCAvLyBUaGUgc3RvcmUgZm9yIGFsbCBjaGFydHMgc3RhdGVcbiAgICBfY2hhcnRNYXAgPSB7fSAvLyBjaGFydCBtYXAgdG8gcXVpY2tseSBmaW5kIGNoYXJ0XG5cbi8qKlxuICogVHJpZ2dlciByZW5kZXIgbG9vcFxuICovXG5mdW5jdGlvbiBfbG9vcCAobGFzdFRpbWVzdGFtcCkge1xuICBfbG9vcC5hbmltYXRpb25LZXkgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgY29uc3QgZHQgPSAxMDAwIC8gX2xvb3AuX2Zwc1xuICAgIF9sb29wLl9hY2N1bXVsYXRvciA9IF9sb29wLl9hY2N1bXVsYXRvciA/IF9sb29wLl9hY2N1bXVsYXRvciA6IDBcbiAgICBfbG9vcC5fYWNjdW11bGF0b3IgKz0gbm93IC0gbGFzdFRpbWVzdGFtcFxuXG4gICAgLy8gTmV3IGZyYW1lIHRpbWVcbiAgICBpZiAoX2xvb3AuX2FjY3VtdWxhdG9yID49IGR0KSB7XG4gICAgICB3aGlsZSAoX2xvb3AuX2FjY3VtdWxhdG9yID49IGR0KSB7XG4gICAgICAgIF9sb29wLl9hY2N1bXVsYXRvciAtPSBkdFxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBjaGFydElkIG9mIF9jaGFydE1hcCkge1xuICAgICAgICBfY2hhcnRNYXBbY2hhcnRJZF0ucmVuZGVyKClcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgICBfbG9vcChub3cpXG4gIH0pXG59XG5cbmNvbnN0IGNoYXJ0eCA9IHtcbiAgY29uc3RhbnQ6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgc3BlY2lhbCBDT1VOVCBpZGVudGlmaWVyIGZvciBjYWxjdWxhdGluZyB3aGlsZSByZW5kZXJpbmdcbiAgICAgKi9cbiAgICBDT1VOVDogdXVpZHYxKClcbiAgfSxcblxuICAvKipcbiAgICogU3Bhd24gYSBjaGFydCBpbnN0YW5jZVxuICAgKi9cbiAgc3Bhd246ICgpID0+IHtcbiAgICAvLyBDcmVhdGUgc3RvcmUgb25seSB3aGVuIHRoZSBmaXJzdCBjaGFydCBpcyBhYm91dCB0byBiZSBzcGF3bmVkXG4gICAgaWYgKCFfc3RvcmUpIHtcbiAgICAgIF9zdG9yZSA9IGNyZWF0ZVN0b3JlKGNyZWF0ZVJlZHVjZXIoKSlcbiAgICB9XG5cbiAgICBsZXQgbmV3Q2hhcnQgPSBuZXcgQ2hhcnQoX3N0b3JlKVxuICAgIF9jaGFydE1hcFtuZXdDaGFydC5pZF0gPSBuZXdDaGFydFxuXG4gICAgcmV0dXJuIG5ld0NoYXJ0XG4gIH0sXG5cbiAgLyoqXG4gICAqIERpc3Bvc2UgYSBjaGFydFxuICAgKi9cbiAgZGlzcG9zZTogKGNoYXJ0KSA9PiB7XG4gICAgaWYgKCFjaGFydCB8fCAhX2NoYXJ0TWFwW2NoYXJ0LmlkXSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgd2UgYXJlIGdvaW5nIHRvIGRpc3Bvc2UgdGhlIGxhc3QgY2hhcnRcbiAgICBpZiAoT2JqZWN0LmtleXMoX2NoYXJ0TWFwKS5sZW5ndGggPT09IDEgXG4gICAgICAmJiBfY2hhcnRNYXBbY2hhcnQuaWRdKSB7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoX2xvb3AuYW5pbWF0aW9uS2V5KVxuICAgICAgX3N0b3JlID0gbnVsbFxuICAgIH1cblxuICAgIF9jaGFydE1hcFtjaGFydC5pZF0gPSB1bmRlZmluZWRcbiAgICBjaGFydC5kaXNwb3NlKClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjaGFydHhcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2hhcnR4LmpzIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cbnZhciBybmc7XG5cbnZhciBjcnlwdG8gPSBnbG9iYWwuY3J5cHRvIHx8IGdsb2JhbC5tc0NyeXB0bzsgLy8gZm9yIElFIDExXG5pZiAoY3J5cHRvICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICBybmcgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG4gICAgcmV0dXJuIHJuZHM4O1xuICB9O1xufVxuXG5pZiAoIXJuZykge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcbiAgcm5nID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcm5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICByZXR1cm4gYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQge1xuICBpc0Z1bmN0aW9uOiAoZnVuY3Rpb25Ub0NoZWNrKSA9PiB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9DaGVjayBcbiAgICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChmdW5jdGlvblRvQ2hlY2spID09PSAnW29iamVjdCBGdW5jdGlvbl0nXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC5qcyIsImltcG9ydCB1dWlkdjEgZnJvbSAndXVpZC92MSdcbmltcG9ydCB7Y29tYmluZVJlZHVjZXIsIGNyZWF0ZVJlZHVjZXJ9IGZyb20gJy4vc3RhdGVNYW5hZ2VyJ1xuaW1wb3J0IGRhdGFSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvZGF0YVJlZHVjZXInXG5pbXBvcnQgZnJzUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2Zyc1JlZHVjZXInXG5pbXBvcnQge1xuICBzdG9yZVJlZnJlc2hcbn0gZnJvbSAnLi9hY3Rpb25zL3N0b3JlQWN0aW9uJ1xuaW1wb3J0IHtcbiAgc2V0UmVuZGVyZXJcbn0gZnJvbSAnLi9hY3Rpb25zL2NoYXJ0QWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydCB7XG4gIGNvbnN0cnVjdG9yIChzdG9yZSkge1xuICAgIHRoaXMuaWQgPSB1dWlkdjEoKVxuICAgIHRoaXMuc3RvcmUgPSBzdG9yZVxuXG4gICAgLy8gQWRkIHJlZHVjZXIgdG8gc3RvcmVcbiAgICB0aGlzLnN0b3JlLmFzeW5jUmVkdWNlck1hcFt0aGlzLmlkXSA9IGNvbWJpbmVSZWR1Y2VyKHtcbiAgICAgIGRhdGE6IGRhdGFSZWR1Y2VyLFxuICAgICAgZnJzOiBmcnNSZWR1Y2VyXG4gICAgfSlcbiAgICB0aGlzLnN0b3JlLnJlcGxhY2VSZWR1Y2VyKGNyZWF0ZVJlZHVjZXIodGhpcy5zdG9yZS5hc3luY1JlZHVjZXJNYXApKVxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goc3RvcmVSZWZyZXNoKCkpXG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzdGF0ZSBmb3IgdGhpcyBjaGFydFxuICAgKi9cbiAgZ2V0U3RhdGUgKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKHRoaXMuaWQpXG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSByZW5kZXJlciBmb3IgdGhpcyBjaGFydFxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlbmRlcmVyIFxuICAgKi9cbiAgc2V0UmVuZGVyZXIgKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChzZXRSZW5kZXJlcih0aGlzLmlkLCByZW5kZXJlcikpXG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIGEgY2hhcnQgd2l0aCBnaXZlbiBjb25maWdcbiAgICovXG4gIHJlbmRlciAoKSB7XG4gICAgaWYgKHRoaXMuaXNEaXJ0eSkge1xuXG4gICAgfVxuXG4gICAgLy8gVE9ETzogd2l0aCBsYXJnZSBkYXRhIHNjYWxlLCB0aGUgRlJTIG1heSBub3QgYmUgcmVhZHkganVzdCB5ZXQuXG4gICAgLy8gV2UgbWF5IG5lZWQgdG8gaGF2ZSBzb21lIGtpbmQgb2Ygd2FpdGluZyBsb2dpYyB0byByZW5kZXIgaXRcbiAgICBjb25zdCBmcnMgPSB0aGlzLnN0b3JlLmdldFN0YXRlKHRoaXMuaWQpLmZyc1xuXG4gICAgLy8gVE9ETzogaG9jayB1cCB3aXRoIHJlbmRlcmVycyB0byByZW5kZXIgRlJTXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGRpc3BhdGNoIChhY3Rpb24pIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbilcbiAgfVxuXG4gIHNldERhdGEgKGNoYXJ0RGF0YSkge1xuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHNldE5hbWUgKGNoYXJ0TmFtZSkge1xuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIFdoZW4gdGhlcmUgaXMgbm8gbnVtZXJpYyBkYXRhLCB3ZSB3aWxsIHVzZSBkZWZhdWx0IG1lYXN1cmUgdG8gcmVuZGVyIGNoYXJ0XG4gIHNldERlZmF1bHRNZWFzdXJlIChkZWZhdWx0TWVhc3VyZSA9IGNoYXJ0eC5jb25zdGFudC5DT1VOVCkge1xuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIFRoZSBkYXRhIG9uIGF4aXMgd2lsbCBiZSBncm91cGVkIGJ5IHRoZSBvcmRlciBpbiBnaXZlbiBhcnJheVxuICBzZXRHcm91cGJ5IChhc3BlY3QsIGdyb3VwYnlzKSB7XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gVGhlIHNpemUgZm9yIGF4aXMgd2lsbCBiZSBhcHBsaWVkIG9uIGFsbCBvdGhlciBkaW1lbnRpb25zLiBGb3IgZXhhbXBsZSwgaW5cbiAgLy8gdGhpcyBjYXNlIHRoZSBzaXplIG9mIHggaXMgMCwgbWVhbmluZyB3ZSBkb24ndCBuZWVkIHRvIHJlbmRlciBhbnkgbGVuZ3RoIG9uXG4gIC8vIHkgb3IgeiBheGlzLiBXZSB3YW50IHRoZSBoZWlnaHQgb2YgYmFycyB0byBiZSBkZXRlcm1pbmVkIGJ5IGRhdGEgb25seVxuICAvLyBOb3RlIHRoYXQgdGhlIHVuaXQgZm9yIHNpemUgaXMgZGV0ZXJtaW5lZCBieSB0aGUgc2l6ZSBvZiB0aWNrIGludGVydmFscyBvblxuICAvLyBvdGhlciBheGlzLiBJbiB0aGlzIGNhc2UsIGlmIHRoZSB0b3RhbCBsZW5ndGggb2YgeCBheGlzIGlzIDEwMHB4LCBhbmQgdGhlcmVcbiAgLy8gYXJlIDEwIHRpY2tzLCB0aGVuIHRoZSB1bml0IGxlbmd0aCBpcyAxMHB4IGZvciB5IGF4aXMuXG4gIHNldFNpemUgKGFzcGVjdCwgdW5pdFZhbHVlKSB7XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gTm90ZSB0aGF0IHRoZSB1bml0IGZvciB0aWNrIGlzIGRldGVybWluZWQgYnkgdGhlIHNpemUgb2YgcmVuZGVyIHJlc3VsdCBvblxuICAvLyB0aGlzIGF4aXMuIEluIHRoaXMgY2FzZSwgd2UgcmVuZGVyIHNpemUgb2YgeSBhcyAxIHVuaXQgKHdoaWNoIGlzIHRoZSBpbnRlcnZhbFxuICAvLyBvZiB4IHRpY2tzKSwgaGVuY2UgMC41IHdpbGwgYmUgdGhlIG1pZGRsZSBvZiBiYXJzIChkZWZhdWx0KS4gVGhlIG9wdGlvbmFsIFxuICAvLyBmb3JtYXRYVGljayBmdW5jdGlvbiBpcyB1c2VkIHRvIGZvcm1hdCB0aGUgdGljayB2YWx1ZVxuICBzZXRUaWNrIChhc3BlY3QsIHVuaXRWYWx1ZSwgZm9ybWF0Rm4pIHtcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzZXRDb250YWluZXIgKGNvbnRhaW5lcikge1xuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHNldFRoZW1lICh0aGVtZSkge1xuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHdhdGNoICgpIHtcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvKipcbiAgICogVGhlIGRlYXRoIG9mIHRoaXMgY2hhcnRcbiAgICovXG4gIGRpc3Bvc2UgKCkge1xuXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ2hhcnQuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXRhUmVkdWNlciAoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gIHJldHVybiBzdGF0ZVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1Y2Vycy9kYXRhUmVkdWNlci5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZyc1JlZHVjZXIgKHN0YXRlID0ge30sIGFjdGlvbikge1xuICByZXR1cm4gc3RhdGVcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdWNlcnMvZnJzUmVkdWNlci5qcyIsImV4cG9ydCBjb25zdCBTVE9SRV9SRUZSRVNIID0gJ1NUT1JFX1JFRlJFU0gnXG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZVJlZnJlc2ggKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNUT1JFX1JFRlJFU0hcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hY3Rpb25zL3N0b3JlQWN0aW9uLmpzIiwiZXhwb3J0IGNvbnN0IFNFVF9SRU5ERVJFUiA9ICdTRVRfUkVOREVSRVInXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRSZW5kZXJlciAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX1JFTkRFUkVSXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWN0aW9ucy9jaGFydEFjdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=