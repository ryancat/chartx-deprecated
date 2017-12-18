/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _chartx = __webpack_require__(1);

var _chartx2 = _interopRequireDefault(_chartx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chartContainer = document.getElementById('root');

// The chart data is a big array of data points.
var chartData = [{
  'product': 'apple',
  'seller': 'Mike',
  'amount': 101,
  'last update time': 1513496590483
}, {
  'product': 'orange',
  'seller': 'Mike',
  'amount': 200,
  'last update time': 1513496629670
}, {
  'product': 'pear',
  'seller': 'Mike',
  'amount': 37,
  'last update time': 1513496643430
}, {
  'product': 'apple',
  'seller': 'John',
  'amount': 150,
  'last update time': 1513496590483
}, {
  'product': 'orange',
  'seller': 'John',
  'amount': 221,
  'last update time': 1513496629670
}];

/**
 * The x tick formatter
 * @param {string} data 
 */
function formatXTick(data) {
  return data;
}

/**
 * The y tick formatter
 * @param {string} data 
 */
function formatYTick(data) {
  return data;
}

_chartx2.default
// Spawn a new chart
.spawn().setData(chartData)
// When there is no numeric data, we will use default measure to render chart
.setDefaultMeasure(_chartx2.default.constant.COUNT)
// The data on axis will be grouped by the order in given array
.setGroupby('x', ['product'])
// The size for axis will be applied on all other dimentions. For example, in
// this case the size of x is 0, meaning we don't need to render any length on
// y or z axis. We want the height of bars to be determined by data only
.setSize('x', 0)
// Note that the unit for tick is determined by the size of render result on
// this axis. In this case, we render size of y as 1 unit (which is the interval
// of x ticks), hence 0.5 will be the middle of bars (default). The optional 
// formatXTick function is used to format the tick value
.setTick('x', 0.5, formatXTick).setGroupby('y', ['amount'])
// Note that the unit for size is determined by the size of tick intervals on
// other axis. In this case, if the total length of x axis is 100px, and there
// are 10 ticks, then the unit length is 10px for y axis.
.setSize('y', 1).setTick('y', 1, formatYTick).setContainer(chartContainer).setTheme({
  fontSize: '16px',
  background: '#ccc'
}).set;

_chartx2.default.spawn();

// // Directly render a basic bar chart, with optional settings
// chartx.render({
//   container: chartContainer,
//   data: chartData,
//   chartType: 'bar',
//   aspect: {
//     x: ['product'],
//     y: ['amount']
//   },
//   theme: {
//     fontSize: '16px',
//     background: '#ccc'
//   },
//   watch: true
// })

// Render a custom bar chart

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDJhNTRhMTg4OGQ1NDgzZWUyMTYiLCJ3ZWJwYWNrOi8vLy4vZGVtby9iYXJDaGFydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2NoYXJ0eC5qcyJdLCJuYW1lcyI6WyJjaGFydENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGFydERhdGEiLCJmb3JtYXRYVGljayIsImRhdGEiLCJmb3JtYXRZVGljayIsInNwYXduIiwic2V0RGF0YSIsInNldERlZmF1bHRNZWFzdXJlIiwiY29uc3RhbnQiLCJDT1VOVCIsInNldEdyb3VwYnkiLCJzZXRTaXplIiwic2V0VGljayIsInNldENvbnRhaW5lciIsInNldFRoZW1lIiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kIiwic2V0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REE7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUF2Qjs7QUFFQTtBQUNBLElBQUlDLFlBQVksQ0FBQztBQUNiLGFBQVcsT0FERTtBQUViLFlBQVUsTUFGRztBQUdiLFlBQVUsR0FIRztBQUliLHNCQUFvQjtBQUpQLENBQUQsRUFLWDtBQUNELGFBQVcsUUFEVjtB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QUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQSxDQUFDO0FBQ0QsMkNBQTJDLGNBQWMsK3VpQyIsImZpbGUiOiJkZW1vL2JhckNoYXJ0L2Rpc3QvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDJhNTRhMTg4OGQ1NDgzZWUyMTYiLCJpbXBvcnQgY2hhcnR4IGZyb20gJy4uLy4uL2Rpc3QvY2hhcnR4J1xuXG5jb25zdCBjaGFydENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcblxuLy8gVGhlIGNoYXJ0IGRhdGEgaXMgYSBiaWcgYXJyYXkgb2YgZGF0YSBwb2ludHMuXG5sZXQgY2hhcnREYXRhID0gW3tcbiAgICAncHJvZHVjdCc6ICdhcHBsZScsXG4gICAgJ3NlbGxlcic6ICdNaWtlJyxcbiAgICAnYW1vdW50JzogMTAxLFxuICAgICdsYXN0IHVwZGF0ZSB0aW1lJzogMTUxMzQ5NjU5MDQ4M1xuICB9LCB7XG4gICAgJ3Byb2R1Y3QnOiAnb3JhbmdlJyxcbiAgICAnc2VsbGVyJzogJ01pa2UnLFxuICAgICdhbW91bnQnOiAyMDAsXG4gICAgJ2xhc3QgdXBkYXRlIHRpbWUnOiAxNTEzNDk2NjI5NjcwXG4gIH0sIHtcbiAgICAncHJvZHVjdCc6ICdwZWFyJyxcbiAgICAnc2VsbGVyJzogJ01pa2UnLFxuICAgICdhbW91bnQnOiAzNyxcbiAgICAnbGFzdCB1cGRhdGUgdGltZSc6IDE1MTM0OTY2NDM0MzBcbiAgfSwge1xuICAgICdwcm9kdWN0JzogJ2FwcGxlJyxcbiAgICAnc2VsbGVyJzogJ0pvaG4nLFxuICAgICdhbW91bnQnOiAxNTAsXG4gICAgJ2xhc3QgdXBkYXRlIHRpbWUnOiAxNTEzNDk2NTkwNDgzXG4gIH0sIHtcbiAgICAncHJvZHVjdCc6ICdvcmFuZ2UnLFxuICAgICdzZWxsZXInOiAnSm9obicsXG4gICAgJ2Ftb3VudCc6IDIyMSxcbiAgICAnbGFzdCB1cGRhdGUgdGltZSc6IDE1MTM0OTY2Mjk2NzBcbn1dXG5cbi8qKlxuICogVGhlIHggdGljayBmb3JtYXR0ZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhIFxuICovXG5mdW5jdGlvbiBmb3JtYXRYVGljayAoZGF0YSkge1xuICByZXR1cm4gZGF0YVxufVxuXG4vKipcbiAqIFRoZSB5IHRpY2sgZm9ybWF0dGVyXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YSBcbiAqL1xuZnVuY3Rpb24gZm9ybWF0WVRpY2sgKGRhdGEpIHtcbiAgcmV0dXJuIGRhdGFcbn1cblxuY2hhcnR4XG4gIC8vIFNwYXduIGEgbmV3IGNoYXJ0XG4gIC5zcGF3bigpXG4gIC5zZXREYXRhKGNoYXJ0RGF0YSlcbiAgLy8gV2hlbiB0aGVyZSBpcyBubyBudW1lcmljIGRhdGEsIHdlIHdpbGwgdXNlIGRlZmF1bHQgbWVhc3VyZSB0byByZW5kZXIgY2hhcnRcbiAgLnNldERlZmF1bHRNZWFzdXJlKGNoYXJ0eC5jb25zdGFudC5DT1VOVClcbiAgLy8gVGhlIGRhdGEgb24gYXhpcyB3aWxsIGJlIGdyb3VwZWQgYnkgdGhlIG9yZGVyIGluIGdpdmVuIGFycmF5XG4gIC5zZXRHcm91cGJ5KCd4JywgWydwcm9kdWN0J10pXG4gIC8vIFRoZSBzaXplIGZvciBheGlzIHdpbGwgYmUgYXBwbGllZCBvbiBhbGwgb3RoZXIgZGltZW50aW9ucy4gRm9yIGV4YW1wbGUsIGluXG4gIC8vIHRoaXMgY2FzZSB0aGUgc2l6ZSBvZiB4IGlzIDAsIG1lYW5pbmcgd2UgZG9uJ3QgbmVlZCB0byByZW5kZXIgYW55IGxlbmd0aCBvblxuICAvLyB5IG9yIHogYXhpcy4gV2Ugd2FudCB0aGUgaGVpZ2h0IG9mIGJhcnMgdG8gYmUgZGV0ZXJtaW5lZCBieSBkYXRhIG9ubHlcbiAgLnNldFNpemUoJ3gnLCAwKVxuICAvLyBOb3RlIHRoYXQgdGhlIHVuaXQgZm9yIHRpY2sgaXMgZGV0ZXJtaW5lZCBieSB0aGUgc2l6ZSBvZiByZW5kZXIgcmVzdWx0IG9uXG4gIC8vIHRoaXMgYXhpcy4gSW4gdGhpcyBjYXNlLCB3ZSByZW5kZXIgc2l6ZSBvZiB5IGFzIDEgdW5pdCAod2hpY2ggaXMgdGhlIGludGVydmFsXG4gIC8vIG9mIHggdGlja3MpLCBoZW5jZSAwLjUgd2lsbCBiZSB0aGUgbWlkZGxlIG9mIGJhcnMgKGRlZmF1bHQpLiBUaGUgb3B0aW9uYWwgXG4gIC8vIGZvcm1hdFhUaWNrIGZ1bmN0aW9uIGlzIHVzZWQgdG8gZm9ybWF0IHRoZSB0aWNrIHZhbHVlXG4gIC5zZXRUaWNrKCd4JywgMC41LCBmb3JtYXRYVGljaylcbiAgLnNldEdyb3VwYnkoJ3knLCBbJ2Ftb3VudCddKVxuICAvLyBOb3RlIHRoYXQgdGhlIHVuaXQgZm9yIHNpemUgaXMgZGV0ZXJtaW5lZCBieSB0aGUgc2l6ZSBvZiB0aWNrIGludGVydmFscyBvblxuICAvLyBvdGhlciBheGlzLiBJbiB0aGlzIGNhc2UsIGlmIHRoZSB0b3RhbCBsZW5ndGggb2YgeCBheGlzIGlzIDEwMHB4LCBhbmQgdGhlcmVcbiAgLy8gYXJlIDEwIHRpY2tzLCB0aGVuIHRoZSB1bml0IGxlbmd0aCBpcyAxMHB4IGZvciB5IGF4aXMuXG4gIC5zZXRTaXplKCd5JywgMSlcbiAgLnNldFRpY2soJ3knLCAxLCBmb3JtYXRZVGljaylcbiAgLnNldENvbnRhaW5lcihjaGFydENvbnRhaW5lcilcbiAgLnNldFRoZW1lKHtcbiAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgIGJhY2tncm91bmQ6ICcjY2NjJ1xuICB9KVxuICAuc2V0XG5cbmNoYXJ0eC5zcGF3bigpXG5cbi8vIC8vIERpcmVjdGx5IHJlbmRlciBhIGJhc2ljIGJhciBjaGFydCwgd2l0aCBvcHRpb25hbCBzZXR0aW5nc1xuLy8gY2hhcnR4LnJlbmRlcih7XG4vLyAgIGNvbnRhaW5lcjogY2hhcnRDb250YWluZXIsXG4vLyAgIGRhdGE6IGNoYXJ0RGF0YSxcbi8vICAgY2hhcnRUeXBlOiAnYmFyJyxcbi8vICAgYXNwZWN0OiB7XG4vLyAgICAgeDogWydwcm9kdWN0J10sXG4vLyAgICAgeTogWydhbW91bnQnXVxuLy8gICB9LFxuLy8gICB0aGVtZToge1xuLy8gICAgIGZvbnRTaXplOiAnMTZweCcsXG4vLyAgICAgYmFja2dyb3VuZDogJyNjY2MnXG4vLyAgIH0sXG4vLyAgIHdhdGNoOiB0cnVlXG4vLyB9KVxuXG4vLyBSZW5kZXIgYSBjdXN0b20gYmFyIGNoYXJ0XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9iYXJDaGFydC9pbmRleC5qcyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIHJuZyA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG52YXIgYnl0ZXNUb1V1aWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG4vLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbi8vIHJhbmRvbSAjJ3Mgd2UgbmVlZCB0byBpbml0IG5vZGUgYW5kIGNsb2Nrc2VxXG52YXIgX3NlZWRCeXRlcyA9IHJuZygpO1xuXG4vLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbnZhciBfbm9kZUlkID0gW1xuICBfc2VlZEJ5dGVzWzBdIHwgMHgwMSxcbiAgX3NlZWRCeXRlc1sxXSwgX3NlZWRCeXRlc1syXSwgX3NlZWRCeXRlc1szXSwgX3NlZWRCeXRlc1s0XSwgX3NlZWRCeXRlc1s1XVxuXTtcblxuLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbnZhciBfY2xvY2tzZXEgPSAoX3NlZWRCeXRlc1s2XSA8PCA4IHwgX3NlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG5cbi8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxudmFyIF9sYXN0TVNlY3MgPSAwLCBfbGFzdE5TZWNzID0gMDtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS11dWlkIGZvciBBUEkgZGV0YWlsc1xuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIHZhciBiID0gYnVmIHx8IFtdO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG4gIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG4gIHZhciBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTtcblxuICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9XG5cbiAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfVxuXG4gIC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cbiAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gIC8vIGB0aW1lX2xvd2BcbiAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAvLyBgdGltZV9taWRgXG4gIHZhciB0bWggPSAobXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjtcblxuICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmO1xuXG4gIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgLy8gYGNsb2NrX3NlcV9sb3dgXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAvLyBgbm9kZWBcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmID8gYnVmIDogYnl0ZXNUb1V1aWQoYik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjE7XG5cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuY3JlYXRlU3RvcmUgPSBjcmVhdGVTdG9yZTtcbmV4cG9ydHMuY3JlYXRlUmVkdWNlciA9IGNyZWF0ZVJlZHVjZXI7XG5leHBvcnRzLmNvbWJpbmVSZWR1Y2VyID0gY29tYmluZVJlZHVjZXI7XG5cbnZhciBfdXRpbCA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cbnZhciBfdXRpbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBDcmVhdGUgYSBzdG9yZSB3aGljaCBob2xkcyBjaGFydHMgc3RhdGVzIGFuZCB1dGlscyB0b1xuICogaW50ZXJhY3Qgd2l0aCB0aGUgc3RhdGUgdmlhIGRpc3BhdGNoZXJzXG4gKiBcbiAqIFJlZHVjZXJzIGFyZSBwdXJlIGZ1bmN0aW9ucyB0aGF0IHByb2Nlc3NpbmcgY2hhcnQgc3RhdGVzLlxuICogXG4gKiBDaGFydCBTdGF0ZSBFeGFtcGxlOlxuICogLy8gVGhpcyBpcyBvbmUgY2hhcnQgc3RhdGUuIFRoZSB3aG9sZSBjaGFydHMgc3RhdGVzIGFyZSBjb21wb3NlZFxuICogLy8gYnkgbXVsdGlwbGUgc3VjaCBzdGF0ZXMuXG4gKiBzdGF0ZSA9IHtcbiAqICAgLy8gZGF0YSBzdGF0ZSB0byBob2xkIHJhdyBkYXRhXG4gKiAgIGRhdGE6IFt7XG4gKiAgICAgJ3Byb2R1Y3QnOiAnYXBwbGUnLFxuICogICAgICd0b3RhbCByZWNvcmRzJzogMTAxLFxuICogICAgICdsYXN0IHVwZGF0ZSB0aW1lJzogMTUxMzQ5NjU5MDQ4M1xuICogICB9LCB7XG4gKiAgICAgJ3Byb2R1Y3QnOiAnb3JhbmdlJyxcbiAqICAgICAndG90YWwgcmVjb3Jkcyc6IDIwMCxcbiAqICAgICAnbGFzdCB1cGRhdGUgdGltZSc6IDE1MTM0OTY2Mjk2NzBcbiAqICAgfSwge1xuICogICAgICdwcm9kdWN0JzogJ3BlYXInLFxuICogICAgICd0b3RhbCByZWNvcmRzJzogMzcsXG4gKiAgICAgJ2xhc3QgdXBkYXRlIHRpbWUnOiAxNTEzNDk2NjQzNDMwXG4gKiAgIH0sIHtcbiAqICAgICAncHJvZHVjdCc6ICdhcHBsZScsXG4gKiAgICAgJ3RvdGFsIHJlY29yZHMnOiAxNTAsXG4gKiAgICAgJ2xhc3QgdXBkYXRlIHRpbWUnOiAxNTEzNDk2NTkwNDgzXG4gKiAgIH0sIHtcbiAqICAgICAncHJvZHVjdCc6ICdvcmFuZ2UnLFxuICogICAgICd0b3RhbCByZWNvcmRzJzogMjIxLFxuICogICAgICdsYXN0IHVwZGF0ZSB0aW1lJzogMTUxMzQ5NjYyOTY3MFxuICogICB9XSxcbiAqIFxuICogICAvLyBmaW5hbCByZW5kZXIgc3RhdGUgKGZycykgdG8gaG9sZCBVSSByZWxhdGVkIGluZm9ybWF0aW9uXG4gKiAgIGZyczoge1xuICogICAgIHg6IHtcbiAqICAgICAgIHNpemU6IDAsXG4gKiAgICAgICBvcmlnaW46ICdtaWRkbGUnLFxuICogICAgICAgZGF0YTogWzEsIDMsIDYsIDgsIDExXSxcbiAqICAgICAgIGxhYmVsOiAncHJvZHVjdCdcbiAqICAgICB9LFxuICogICAgIHk6IHtcbiAqICAgICAgIHNpemU6IDEsXG4gKiAgICAgICBvcmlnaW46ICdlbmQnLFxuICogICAgICAgZGF0YTogWzEwLjEsIDE1LCAyMCwgMjIuMSwgMy43XSxcbiAqICAgICAgIGxhYmVsOiAndG90YWwgcmVjb3JkcydcbiAqICAgICB9LFxuICogICAgIHo6IG51bGxcbiAqICAgfVxuICogfVxuICogXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSByZWR1Y2VyIFxuICovXG5mdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyKSB7XG4gIC8vIEluaXQgc3RhdGUgY29tZSBmcm9tIHJlZHVjZXJcbiAgdmFyIHN0YXRlID0gcmVkdWNlcigpO1xuXG4gIHJldHVybiB7XG4gICAgLy8gVGhlIGFzeW5jIHJlZHVjZXIgbWFwIHVzZWQgdG8gYWRkIGFzeW5jIHJlZHVjZXJzIGludG8gc3RvcmVcbiAgICBhc3luY1JlZHVjZXJNYXA6IHt9LFxuICAgIC8qKlxuICAgICAqIERpc3BhdGNoIGFjdGlvbiB0byB0cmlnZ2VyIHN0YXRlIGNoYW5nZXNcbiAgICAgKi9cbiAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgLy8gbG9nIGFjdGlvbnMgaW4gY29uc29sZVxuICAgICAgICBjb25zb2xlLmdyb3VwKGFjdGlvbi50eXBlKTtcbiAgICAgICAgY29uc29sZS5pbmZvKCclY2JlZm9yZTonLCAnY29sb3I6IGdyZWVuJywgc3RhdGUpO1xuICAgICAgICBjb25zb2xlLmluZm8oJyVjYWN0aW9uOicsICdjb2xvcjogcmVkJywgYWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIHN0YXRlXG4gICAgICBzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG5cbiAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgIC8vIGxvZyBhY3Rpb25zIGluIGNvbnNvbGVcbiAgICAgICAgY29uc29sZS5pbmZvKCclY2FmdGVyOicsICdjb2xvcjogZ3JlZW4nLCBzdGF0ZSk7XG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgdGhlIHJlZHVjZXIgZm9yIHN0b3JlIHRvIGEgZGlmZmVyZW50IG9uZVxuICAgICAqIFRoaXMgaXMgdXNlZnVsIHdoZW4gd2Ugd2FudCB0byBkeW5hbWljYWxseSBhZGQgcmVkdWNlcnNcbiAgICAgKi9cbiAgICByZXBsYWNlUmVkdWNlcjogZnVuY3Rpb24gcmVwbGFjZVJlZHVjZXIobmV3UmVkdWNlcikge1xuICAgICAgcmVkdWNlciA9IG5ld1JlZHVjZXI7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUgZm9yIGdpdmVuIGtleVxuICAgICAqIFRoaXMgaXMgdG8gYWxsb3cgYXBwbGljYXRpb24gdG8gJ2Nvbm5lY3QnIHRvIHN0YXRlXG4gICAgICovXG4gICAgZ2V0U3RhdGU6IGZ1bmN0aW9uIGdldFN0YXRlKHN0YXRlS2V5KSB7XG4gICAgICBpZiAoIXN0YXRlS2V5KSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVtzdGF0ZUtleV07XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHJlZHVjZXIgYmFzZWQgb24gZ2l2ZW4gcmVkdWNlciBtYXAuXG4gKiBCeSB3cmFwcGluZyBjb21iaW5lUmVkdWNlciBmdW5jdGlvbiwgd2UgaGF2ZSBhIGNoYW5jZSB0byBkeW5hbWljYWxseVxuICogYWRkIG5ldyByZWR1Y2Vyc1xuICogXG4gKiBAcGFyYW0ge29iamVjdH0gYXN5bmNSZWR1Y2VyTWFwIFxuICovXG5mdW5jdGlvbiBjcmVhdGVSZWR1Y2VyKCkge1xuICB2YXIgYXN5bmNSZWR1Y2VyTWFwID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICByZXR1cm4gY29tYmluZVJlZHVjZXIoX2V4dGVuZHMoe30sIGFzeW5jUmVkdWNlck1hcCkpO1xufVxuXG4vKipcbiAqIFdpbGwgY29tYmluZSBuZXN0ZWQgcmVkdWNlciBtYXAgdG8gYSBiaWcgcmVkdWNlclxuICogXG4gKiBFeGFtcGxlOlxuICogY29tYmluZVJlZHVjZXIoe1xuICogICAnY2hhcnQgMSc6IHtcbiAqICAgICBkYXRhOiAoKSA9PiB7fSxcbiAqICAgICBmcnM6ICgpID0+IHt9XG4gKiAgIH0sXG4gKiAgICdjaGFydCAyJzoge1xuICogICAgIGRhdGE6ICgpID0+IHt9LFxuICogICAgIGZyczogKCkgPT4ge31cbiAqICAgfVxuICogfSlcbiAqIFxuICogd2lsbCBnaXZlIGEgcmVkdWNlciBmdW5jdGlvbiB3aGljaCBuZXN0ZWQgd2l0aFxuICogY29tYmluZWQgcmVkdWNlciBmb3IgY2hhcnQgMSBhbmQgY2hhcnQgMlxuICogXG4gKiBAcGFyYW0ge29iamVjdH0gcmVkdWNlck1hcCBcbiAqL1xuZnVuY3Rpb24gY29tYmluZVJlZHVjZXIoKSB7XG4gIHZhciByZWR1Y2VyTWFwID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICB2YXIgbmV3U3RhdGUgPSB7fTtcblxuICAgIGZvciAodmFyIGtleSBpbiByZWR1Y2VyTWFwKSB7XG4gICAgICB2YXIgcmVkdWNlckZuID0gcmVkdWNlck1hcFtrZXldLFxuICAgICAgICAgIGV4aXN0U3RhdGUgPSBzdGF0ZVtrZXldIHx8IHt9O1xuXG4gICAgICBpZiAoX3V0aWwyLmRlZmF1bHQuaXNGdW5jdGlvbihyZWR1Y2VyRm4pKSB7XG4gICAgICAgIC8vIFBhc3MgdGhlIHdob2xlIHN0YXRlIGRvd24gYXMgYXJndW1lbnQgZm9yXG4gICAgICAgIC8vIGNyb3NzIHN0YXRlIGtleSBhY2Nlc3NcbiAgICAgICAgbmV3U3RhdGVba2V5XSA9IHJlZHVjZXJGbihleGlzdFN0YXRlLCBhY3Rpb24sIHN0YXRlLCByZWR1Y2VyTWFwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbWJpbmUgbmVzdGVkIHJlZHVjZXIgbWFwXG4gICAgICAgIG5ld1N0YXRlW2tleV0gPSBjb21iaW5lUmVkdWNlcihyZWR1Y2VyTWFwW2tleV0pKGV4aXN0U3RhdGUsIGFjdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1N0YXRlO1xuICB9O1xufVxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX3YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdik7XG5cbnZhciBfc3RhdGVNYW5hZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9DaGFydCA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5cbnZhciBfQ2hhcnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2hhcnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgX3N0b3JlID0gdm9pZCAwLFxuICAgIC8vIFRoZSBzdG9yZSBmb3IgYWxsIGNoYXJ0cyBzdGF0ZVxuX2NoYXJ0TWFwID0ge307IC8vIGNoYXJ0IG1hcCB0byBxdWlja2x5IGZpbmQgY2hhcnRcblxuLyoqXG4gKiBUcmlnZ2VyIHJlbmRlciBsb29wXG4gKi9cbmZ1bmN0aW9uIF9sb29wKGxhc3RUaW1lc3RhbXApIHtcbiAgX2xvb3AuYW5pbWF0aW9uS2V5ID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgdmFyIGR0ID0gMTAwMCAvIF9sb29wLl9mcHM7XG4gICAgX2xvb3AuX2FjY3VtdWxhdG9yID0gX2xvb3AuX2FjY3VtdWxhdG9yID8gX2xvb3AuX2FjY3VtdWxhdG9yIDogMDtcbiAgICBfbG9vcC5fYWNjdW11bGF0b3IgKz0gbm93IC0gbGFzdFRpbWVzdGFtcDtcblxuICAgIC8vIE5ldyBmcmFtZSB0aW1lXG4gICAgaWYgKF9sb29wLl9hY2N1bXVsYXRvciA+PSBkdCkge1xuICAgICAgd2hpbGUgKF9sb29wLl9hY2N1bXVsYXRvciA+PSBkdCkge1xuICAgICAgICBfbG9vcC5fYWNjdW11bGF0b3IgLT0gZHQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY2hhcnRNYXBbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgdmFyIGNoYXJ0SWQgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgIF9jaGFydE1hcFtjaGFydElkXS5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIF9sb29wKG5vdyk7XG4gIH0pO1xufVxuXG52YXIgY2hhcnR4ID0ge1xuICBjb25zdGFudDoge1xuICAgIC8qKlxuICAgICAqIFRoZSBzcGVjaWFsIENPVU5UIGlkZW50aWZpZXIgZm9yIGNhbGN1bGF0aW5nIHdoaWxlIHJlbmRlcmluZ1xuICAgICAqL1xuICAgIENPVU5UOiAoMCwgX3YyLmRlZmF1bHQpKClcbiAgfSxcblxuICAvKipcbiAgICogU3Bhd24gYSBjaGFydCBpbnN0YW5jZVxuICAgKi9cbiAgc3Bhd246IGZ1bmN0aW9uIHNwYXduKCkge1xuICAgIC8vIENyZWF0ZSBzdG9yZSBvbmx5IHdoZW4gdGhlIGZpcnN0IGNoYXJ0IGlzIGFib3V0IHRvIGJlIHNwYXduZWRcbiAgICBpZiAoIV9zdG9yZSkge1xuICAgICAgX3N0b3JlID0gKDAsIF9zdGF0ZU1hbmFnZXIuY3JlYXRlU3RvcmUpKCgwLCBfc3RhdGVNYW5hZ2VyLmNyZWF0ZVJlZHVjZXIpKCkpO1xuICAgIH1cblxuICAgIHZhciBuZXdDaGFydCA9IG5ldyBfQ2hhcnQyLmRlZmF1bHQoX3N0b3JlKTtcbiAgICBfY2hhcnRNYXBbbmV3Q2hhcnQuaWRdID0gbmV3Q2hhcnQ7XG5cbiAgICByZXR1cm4gbmV3Q2hhcnQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIERpc3Bvc2UgYSBjaGFydFxuICAgKi9cbiAgZGlzcG9zZTogZnVuY3Rpb24gZGlzcG9zZShjaGFydCkge1xuICAgIGlmICghY2hhcnQgfHwgIV9jaGFydE1hcFtjaGFydC5pZF0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBhcmUgZ29pbmcgdG8gZGlzcG9zZSB0aGUgbGFzdCBjaGFydFxuICAgIGlmIChPYmplY3Qua2V5cyhfY2hhcnRNYXApLmxlbmd0aCA9PT0gMSAmJiBfY2hhcnRNYXBbY2hhcnQuaWRdKSB7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoX2xvb3AuYW5pbWF0aW9uS2V5KTtcbiAgICAgIF9zdG9yZSA9IG51bGw7XG4gICAgfVxuXG4gICAgX2NoYXJ0TWFwW2NoYXJ0LmlkXSA9IHVuZGVmaW5lZDtcbiAgICBjaGFydC5kaXNwb3NlKCk7XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNoYXJ0eDtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihnbG9iYWwpIHsvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgSW4gdGhlXG4vLyBicm93c2VyIHRoaXMgaXMgYSBsaXR0bGUgY29tcGxpY2F0ZWQgZHVlIHRvIHVua25vd24gcXVhbGl0eSBvZiBNYXRoLnJhbmRvbSgpXG4vLyBhbmQgaW5jb25zaXN0ZW50IHN1cHBvcnQgZm9yIHRoZSBgY3J5cHRvYCBBUEkuICBXZSBkbyB0aGUgYmVzdCB3ZSBjYW4gdmlhXG4vLyBmZWF0dXJlLWRldGVjdGlvblxudmFyIHJuZztcblxudmFyIGNyeXB0byA9IGdsb2JhbC5jcnlwdG8gfHwgZ2xvYmFsLm1zQ3J5cHRvOyAvLyBmb3IgSUUgMTFcbmlmIChjcnlwdG8gJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4gIHJuZyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59XG5cbmlmICghcm5nKSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuICBybmcgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBybmc7XG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpKSlcblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbnZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIHJldHVybiBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG5cblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGlzRnVuY3Rpb246IGZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuY3Rpb25Ub0NoZWNrKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9DaGVjayAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZnVuY3Rpb25Ub0NoZWNrKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfVxufTtcblxuLyoqKi8gfSksXG4vKiA4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfdiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfdjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92KTtcblxudmFyIF9zdGF0ZU1hbmFnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX2RhdGFSZWR1Y2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblxudmFyIF9kYXRhUmVkdWNlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kYXRhUmVkdWNlcik7XG5cbnZhciBfZnJzUmVkdWNlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXG52YXIgX2Zyc1JlZHVjZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJzUmVkdWNlcik7XG5cbnZhciBfc3RvcmVBY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblxudmFyIF9jaGFydEFjdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQ2hhcnQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENoYXJ0KHN0b3JlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENoYXJ0KTtcblxuICAgIHRoaXMuaWQgPSAoMCwgX3YyLmRlZmF1bHQpKCk7XG4gICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuXG4gICAgLy8gQWRkIHJlZHVjZXIgdG8gc3RvcmVcbiAgICB0aGlzLnN0b3JlLmFzeW5jUmVkdWNlck1hcFt0aGlzLmlkXSA9ICgwLCBfc3RhdGVNYW5hZ2VyLmNvbWJpbmVSZWR1Y2VyKSh7XG4gICAgICBkYXRhOiBfZGF0YVJlZHVjZXIyLmRlZmF1bHQsXG4gICAgICBmcnM6IF9mcnNSZWR1Y2VyMi5kZWZhdWx0XG4gICAgfSk7XG4gICAgdGhpcy5zdG9yZS5yZXBsYWNlUmVkdWNlcigoMCwgX3N0YXRlTWFuYWdlci5jcmVhdGVSZWR1Y2VyKSh0aGlzLnN0b3JlLmFzeW5jUmVkdWNlck1hcCkpO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goKDAsIF9zdG9yZUFjdGlvbi5zdG9yZVJlZnJlc2gpKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc3RhdGUgZm9yIHRoaXMgY2hhcnRcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoQ2hhcnQsIFt7XG4gICAga2V5OiAnZ2V0U3RhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFN0YXRlKHRoaXMuaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgcmVuZGVyZXIgZm9yIHRoaXMgY2hhcnRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVuZGVyZXIgXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NldFJlbmRlcmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UmVuZGVyZXIocmVuZGVyZXIpIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goKDAsIF9jaGFydEFjdGlvbi5zZXRSZW5kZXJlcikodGhpcy5pZCwgcmVuZGVyZXIpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgYSBjaGFydCB3aXRoIGdpdmVuIGNvbmZpZ1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBpZiAodGhpcy5pc0RpcnR5KSB7fVxuXG4gICAgICAvLyBUT0RPOiB3aXRoIGxhcmdlIGRhdGEgc2NhbGUsIHRoZSBGUlMgbWF5IG5vdCBiZSByZWFkeSBqdXN0IHlldC5cbiAgICAgIC8vIFdlIG1heSBuZWVkIHRvIGhhdmUgc29tZSBraW5kIG9mIHdhaXRpbmcgbG9naWMgdG8gcmVuZGVyIGl0XG4gICAgICB2YXIgZnJzID0gdGhpcy5zdG9yZS5nZXRTdGF0ZSh0aGlzLmlkKS5mcnM7XG5cbiAgICAgIC8vIFRPRE86IGhvY2sgdXAgd2l0aCByZW5kZXJlcnMgdG8gcmVuZGVyIEZSU1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGlzcGF0Y2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXREYXRhJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RGF0YShjaGFydERhdGEpIHtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0TmFtZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldE5hbWUoY2hhcnROYW1lKSB7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIFdoZW4gdGhlcmUgaXMgbm8gbnVtZXJpYyBkYXRhLCB3ZSB3aWxsIHVzZSBkZWZhdWx0IG1lYXN1cmUgdG8gcmVuZGVyIGNoYXJ0XG5cbiAgfSwge1xuICAgIGtleTogJ3NldERlZmF1bHRNZWFzdXJlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RGVmYXVsdE1lYXN1cmUoKSB7XG4gICAgICB2YXIgZGVmYXVsdE1lYXN1cmUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGNoYXJ0eC5jb25zdGFudC5DT1VOVDtcblxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGF0YSBvbiBheGlzIHdpbGwgYmUgZ3JvdXBlZCBieSB0aGUgb3JkZXIgaW4gZ2l2ZW4gYXJyYXlcblxuICB9LCB7XG4gICAga2V5OiAnc2V0R3JvdXBieScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEdyb3VwYnkoYXNwZWN0LCBncm91cGJ5cykge1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBUaGUgc2l6ZSBmb3IgYXhpcyB3aWxsIGJlIGFwcGxpZWQgb24gYWxsIG90aGVyIGRpbWVudGlvbnMuIEZvciBleGFtcGxlLCBpblxuICAgIC8vIHRoaXMgY2FzZSB0aGUgc2l6ZSBvZiB4IGlzIDAsIG1lYW5pbmcgd2UgZG9uJ3QgbmVlZCB0byByZW5kZXIgYW55IGxlbmd0aCBvblxuICAgIC8vIHkgb3IgeiBheGlzLiBXZSB3YW50IHRoZSBoZWlnaHQgb2YgYmFycyB0byBiZSBkZXRlcm1pbmVkIGJ5IGRhdGEgb25seVxuICAgIC8vIE5vdGUgdGhhdCB0aGUgdW5pdCBmb3Igc2l6ZSBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBzaXplIG9mIHRpY2sgaW50ZXJ2YWxzIG9uXG4gICAgLy8gb3RoZXIgYXhpcy4gSW4gdGhpcyBjYXNlLCBpZiB0aGUgdG90YWwgbGVuZ3RoIG9mIHggYXhpcyBpcyAxMDBweCwgYW5kIHRoZXJlXG4gICAgLy8gYXJlIDEwIHRpY2tzLCB0aGVuIHRoZSB1bml0IGxlbmd0aCBpcyAxMHB4IGZvciB5IGF4aXMuXG5cbiAgfSwge1xuICAgIGtleTogJ3NldFNpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTaXplKGFzcGVjdCwgdW5pdFZhbHVlKSB7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIE5vdGUgdGhhdCB0aGUgdW5pdCBmb3IgdGljayBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBzaXplIG9mIHJlbmRlciByZXN1bHQgb25cbiAgICAvLyB0aGlzIGF4aXMuIEluIHRoaXMgY2FzZSwgd2UgcmVuZGVyIHNpemUgb2YgeSBhcyAxIHVuaXQgKHdoaWNoIGlzIHRoZSBpbnRlcnZhbFxuICAgIC8vIG9mIHggdGlja3MpLCBoZW5jZSAwLjUgd2lsbCBiZSB0aGUgbWlkZGxlIG9mIGJhcnMgKGRlZmF1bHQpLiBUaGUgb3B0aW9uYWwgXG4gICAgLy8gZm9ybWF0WFRpY2sgZnVuY3Rpb24gaXMgdXNlZCB0byBmb3JtYXQgdGhlIHRpY2sgdmFsdWVcblxuICB9LCB7XG4gICAga2V5OiAnc2V0VGljaycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFRpY2soYXNwZWN0LCB1bml0VmFsdWUsIGZvcm1hdEZuKSB7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldENvbnRhaW5lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldENvbnRhaW5lcihjb250YWluZXIpIHtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0VGhlbWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRUaGVtZSh0aGVtZSkge1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd3YXRjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdhdGNoKCkge1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVhdGggb2YgdGhpcyBjaGFydFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdkaXNwb3NlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcG9zZSgpIHt9XG4gIH1dKTtcblxuICByZXR1cm4gQ2hhcnQ7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENoYXJ0O1xuXG4vKioqLyB9KSxcbi8qIDkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRhdGFSZWR1Y2VyO1xuZnVuY3Rpb24gZGF0YVJlZHVjZXIoKSB7XG4gIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG4vKioqLyB9KSxcbi8qIDEwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmcnNSZWR1Y2VyO1xuZnVuY3Rpb24gZnJzUmVkdWNlcigpIHtcbiAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcblxuICByZXR1cm4gc3RhdGU7XG59XG5cbi8qKiovIH0pLFxuLyogMTEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuc3RvcmVSZWZyZXNoID0gc3RvcmVSZWZyZXNoO1xudmFyIFNUT1JFX1JFRlJFU0ggPSBleHBvcnRzLlNUT1JFX1JFRlJFU0ggPSAnU1RPUkVfUkVGUkVTSCc7XG5cbmZ1bmN0aW9uIHN0b3JlUmVmcmVzaCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTVE9SRV9SRUZSRVNIXG4gIH07XG59XG5cbi8qKiovIH0pLFxuLyogMTIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuc2V0UmVuZGVyZXIgPSBzZXRSZW5kZXJlcjtcbnZhciBTRVRfUkVOREVSRVIgPSBleHBvcnRzLlNFVF9SRU5ERVJFUiA9ICdTRVRfUkVOREVSRVInO1xuXG5mdW5jdGlvbiBzZXRSZW5kZXJlcigpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTRVRfUkVOREVSRVJcbiAgfTtcbn1cblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpZDJWaWNHRmphem92THk5M1pXSndZV05yTDJKdmIzUnpkSEpoY0NBMk9EWmhabVJpTVRJd05UUmpNakZqTmpJME5TSXNJbmRsWW5CaFkyczZMeTh2TGk5dWIyUmxYMjF2WkhWc1pYTXZkWFZwWkM5Mk1TNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12YzNSaGRHVk5ZVzVoWjJWeUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlqYUdGeWRIZ3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZibTlrWlY5dGIyUjFiR1Z6TDNWMWFXUXZiR2xpTDNKdVp5MWljbTkzYzJWeUxtcHpJaXdpZDJWaWNHRmphem92THk4b2QyVmljR0ZqYXlrdlluVnBiR1JwYmk5bmJHOWlZV3d1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Ym05a1pWOXRiMlIxYkdWekwzVjFhV1F2YkdsaUwySjVkR1Z6Vkc5VmRXbGtMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5MWRHbHNMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5RGFHRnlkQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTl6Y21NdmNtVmtkV05sY25NdlpHRjBZVkpsWkhWalpYSXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDNKbFpIVmpaWEp6TDJaeWMxSmxaSFZqWlhJdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmMzSmpMMkZqZEdsdmJuTXZjM1J2Y21WQlkzUnBiMjR1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwyRmpkR2x2Ym5NdlkyaGhjblJCWTNScGIyNHVhbk1pWFN3aWJtRnRaWE1pT2xzaVkzSmxZWFJsVTNSdmNtVWlMQ0pqY21WaGRHVlNaV1IxWTJWeUlpd2lZMjl0WW1sdVpWSmxaSFZqWlhJaUxDSnlaV1IxWTJWeUlpd2ljM1JoZEdVaUxDSmhjM2x1WTFKbFpIVmpaWEpOWVhBaUxDSmthWE53WVhSamFDSXNJbUZqZEdsdmJpSXNJbU52Ym5OdmJHVWlMQ0puY205MWNDSXNJblI1Y0dVaUxDSnBibVp2SWl3aVozSnZkWEJGYm1RaUxDSnlaWEJzWVdObFVtVmtkV05sY2lJc0ltNWxkMUpsWkhWalpYSWlMQ0puWlhSVGRHRjBaU0lzSW5OMFlYUmxTMlY1SWl3aWNtVmtkV05sY2sxaGNDSXNJbTVsZDFOMFlYUmxJaXdpYTJWNUlpd2ljbVZrZFdObGNrWnVJaXdpWlhocGMzUlRkR0YwWlNJc0ltbHpSblZ1WTNScGIyNGlMQ0pmYzNSdmNtVWlMQ0pmWTJoaGNuUk5ZWEFpTENKZmJHOXZjQ0lzSW14aGMzUlVhVzFsYzNSaGJYQWlMQ0poYm1sdFlYUnBiMjVMWlhraUxDSjNhVzVrYjNjaUxDSnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VpTENKdWIzY2lMQ0pFWVhSbElpd2laSFFpTENKZlpuQnpJaXdpWDJGalkzVnRkV3hoZEc5eUlpd2lZMmhoY25SSlpDSXNJbkpsYm1SbGNpSXNJbU5vWVhKMGVDSXNJbU52Ym5OMFlXNTBJaXdpUTA5VlRsUWlMQ0p6Y0dGM2JpSXNJbTVsZDBOb1lYSjBJaXdpYVdRaUxDSmthWE53YjNObElpd2lZMmhoY25RaUxDSlBZbXBsWTNRaUxDSnJaWGx6SWl3aWJHVnVaM1JvSWl3aVkyRnVZMlZzUVc1cGJXRjBhVzl1Um5KaGJXVWlMQ0oxYm1SbFptbHVaV1FpTENKbWRXNWpkR2x2YmxSdlEyaGxZMnNpTENKd2NtOTBiM1I1Y0dVaUxDSjBiMU4wY21sdVp5SXNJbU5oYkd3aUxDSkRhR0Z5ZENJc0luTjBiM0psSWl3aVpHRjBZU0lzSW1aeWN5SXNJbkpsYm1SbGNtVnlJaXdpYVhORWFYSjBlU0lzSW1Ob1lYSjBSR0YwWVNJc0ltTm9ZWEowVG1GdFpTSXNJbVJsWm1GMWJIUk5aV0Z6ZFhKbElpd2lZWE53WldOMElpd2laM0p2ZFhCaWVYTWlMQ0oxYm1sMFZtRnNkV1VpTENKbWIzSnRZWFJHYmlJc0ltTnZiblJoYVc1bGNpSXNJblJvWlcxbElpd2laR0YwWVZKbFpIVmpaWElpTENKbWNuTlNaV1IxWTJWeUlpd2ljM1J2Y21WU1pXWnlaWE5vSWl3aVUxUlBVa1ZmVWtWR1VrVlRTQ0lzSW5ObGRGSmxibVJsY21WeUlpd2lVMFZVWDFKRlRrUkZVa1ZTSWwwc0ltMWhjSEJwYm1keklqb2lRVUZCUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPMEZCUTBRc1R6dEJRMVpCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hoUVVGTE8wRkJRMHc3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h0UTBGQk1rSXNNRUpCUVRCQ0xFVkJRVVU3UVVGRGRrUXNlVU5CUVdsRExHVkJRV1U3UVVGRGFFUTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzT0VSQlFYTkVMQ3RFUVVFclJEczdRVUZGY2tnN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3pzN096czdPMEZETjBSQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzYlVOQlFXMURPMEZCUTI1RE96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNhVUpCUVdsQ0xFOUJRVTg3UVVGRGVFSTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCT3pzN096czdPenM3T3pzN096czdPMUZETlVOblFrRXNWeXhIUVVGQlFTeFhPMUZCZDBSQlF5eGhMRWRCUVVGQkxHRTdVVUYzUWtGRExHTXNSMEZCUVVFc1l6czdRVUYyU1doQ096czdPenM3UVVGRlFUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRnhSRThzVTBGQlUwWXNWMEZCVkN4RFFVRnpRa2NzVDBGQmRFSXNSVUZCSzBJN1FVRkRjRU03UVVGRFFTeE5RVUZKUXl4UlFVRlJSQ3hUUVVGYU96dEJRVVZCTEZOQlFVODdRVUZEVER0QlFVTkJSU3h4UWtGQmFVSXNSVUZHV2p0QlFVZE1PenM3UVVGSFFVTXNZMEZCVlN4dlFrRkJhVUk3UVVGQlFTeFZRVUZvUWtNc1RVRkJaMElzZFVWQlFWQXNSVUZCVHpzN1FVRkRla0lzVlVGQlNTeEpRVUZLTEVWQlFXZERPMEZCUXpsQ08wRkJRMEZETEdkQ1FVRlJReXhMUVVGU0xFTkJRV05HTEU5QlFVOUhMRWxCUVhKQ08wRkJRMEZHTEdkQ1FVRlJSeXhKUVVGU0xFTkJRV0VzVjBGQllpeEZRVUV3UWl4alFVRXhRaXhGUVVFd1ExQXNTMEZCTVVNN1FVRkRRVWtzWjBKQlFWRkhMRWxCUVZJc1EwRkJZU3hYUVVGaUxFVkJRVEJDTEZsQlFURkNMRVZCUVhkRFNpeE5RVUY0UXp0QlFVTkVPenRCUVVWRU8wRkJRMEZJTEdOQlFWRkVMRkZCUVZGRExFdEJRVklzUlVGQlpVY3NUVUZCWml4RFFVRlNPenRCUVVWQkxGVkJRVWtzU1VGQlNpeEZRVUZuUXp0QlFVTTVRanRCUVVOQlF5eG5Ra0ZCVVVjc1NVRkJVaXhEUVVGaExGVkJRV0lzUlVGQmVVSXNZMEZCZWtJc1JVRkJlVU5RTEV0QlFYcERPMEZCUTBGSkxHZENRVUZSU1N4UlFVRlNPMEZCUTBRN1FVRkRSaXhMUVhSQ1NUdEJRWFZDVERzN096dEJRVWxCUXl4dlFrRkJaMElzZDBKQlFVTkRMRlZCUVVRc1JVRkJaMEk3UVVGRE9VSllMR2RDUVVGVlZ5eFZRVUZXTzBGQlEwUXNTMEUzUWtrN1FVRTRRa3c3T3pzN1FVRkpRVU1zWTBGQlZTeHJRa0ZCUTBNc1VVRkJSQ3hGUVVGak8wRkJRM1JDTEZWQlFVa3NRMEZCUTBFc1VVRkJUQ3hGUVVGbE8wRkJRMklzWlVGQlQxb3NTMEZCVUR0QlFVTkVMRTlCUmtRc1RVRkhTenRCUVVOSUxHVkJRVTlCTEUxQlFVMVpMRkZCUVU0c1EwRkJVRHRCUVVORU8wRkJRMFk3UVVGNlEwa3NSMEZCVUR0QlFUSkRSRHM3UVVGRlJEczdPenM3T3p0QlFVOVBMRk5CUVZObUxHRkJRVlFzUjBGQk9FTTdRVUZCUVN4TlFVRjBRa2tzWlVGQmMwSXNkVVZCUVVvc1JVRkJTVHM3UVVGRGJrUXNVMEZCVDBnc05FSkJRVzFDUnl4bFFVRnVRaXhGUVVGUU8wRkJRMFE3TzBGQlJVUTdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCYjBKUExGTkJRVk5JTEdOQlFWUXNSMEZCTUVNN1FVRkJRU3hOUVVGcVFtVXNWVUZCYVVJc2RVVkJRVW9zUlVGQlNUczdRVUZETDBNc1UwRkJUeXhaUVVFMlFqdEJRVUZCTEZGQlFUVkNZaXhMUVVFMFFpeDFSVUZCY0VJc1JVRkJiMEk3UVVGQlFTeFJRVUZvUWtjc1RVRkJaMElzZFVWQlFWQXNSVUZCVHpzN1FVRkRiRU1zVVVGQlNWY3NWMEZCVnl4RlFVRm1PenRCUVVWQkxGTkJRVXNzU1VGQlNVTXNSMEZCVkN4SlFVRm5Ra1lzVlVGQmFFSXNSVUZCTkVJN1FVRkRNVUlzVlVGQlNVY3NXVUZCV1Vnc1YwRkJWMFVzUjBGQldDeERRVUZvUWp0QlFVRkJMRlZCUTBsRkxHRkJRV0ZxUWl4TlFVRk5aU3hIUVVGT0xFdEJRV01zUlVGRUwwSTdPMEZCUjBFc1ZVRkJTU3hsUVVGTFJ5eFZRVUZNTEVOQlFXZENSaXhUUVVGb1FpeERRVUZLTEVWQlFXZERPMEZCUXpsQ08wRkJRMEU3UVVGRFFVWXNhVUpCUVZORExFZEJRVlFzU1VGQlowSkRMRlZCUVZWRExGVkJRVllzUlVGQmMwSmtMRTFCUVhSQ0xFVkJRVGhDU0N4TFFVRTVRaXhGUVVGeFEyRXNWVUZCY2tNc1EwRkJhRUk3UVVGRFJDeFBRVXBFTEUxQlNVODdRVUZEVER0QlFVTkJReXhwUWtGQlUwTXNSMEZCVkN4SlFVRm5RbXBDTEdWQlFXVmxMRmRCUVZkRkxFZEJRVmdzUTBGQlppeEZRVUZuUTBVc1ZVRkJhRU1zUlVGQk5FTmtMRTFCUVRWRExFTkJRV2hDTzBGQlEwUTdRVUZEUmpzN1FVRkZSQ3hYUVVGUFZ5eFJRVUZRTzBGQlEwUXNSMEZzUWtRN1FVRnRRa1FzUXpzN096czdPenM3T3pzN096czdPenM3T3pzN1FVTXpTa1E3T3pzN1FVRkRRVHM3UVVGRFFUczdPenM3TzBGQlMwRXNTVUZCU1Vzc1pVRkJTanRCUVVGQkxFbEJRVms3UVVGRFVrTXNXVUZCV1N4RlFVUm9RaXhETEVOQlEyMUNPenRCUVVWdVFqczdPMEZCUjBFc1UwRkJVME1zUzBGQlZDeERRVUZuUWtNc1lVRkJhRUlzUlVGQkswSTdRVUZETjBKRUxGRkJRVTFGTEZsQlFVNHNSMEZCY1VKRExFOUJRVTlETEhGQ1FVRlFMRU5CUVRaQ0xGbEJRVTA3UVVGRGRFUXNVVUZCVFVNc1RVRkJUVU1zUzBGQlMwUXNSMEZCVEN4RlFVRmFPMEZCUTBFc1VVRkJUVVVzUzBGQlN5eFBRVUZQVUN4TlFVRk5VU3hKUVVGNFFqdEJRVU5CVWl4VlFVRk5VeXhaUVVGT0xFZEJRWEZDVkN4TlFVRk5VeXhaUVVGT0xFZEJRWEZDVkN4TlFVRk5VeXhaUVVFelFpeEhRVUV3UXl4RFFVRXZSRHRCUVVOQlZDeFZRVUZOVXl4WlFVRk9MRWxCUVhOQ1NpeE5RVUZOU2l4aFFVRTFRanM3UVVGRlFUdEJRVU5CTEZGQlFVbEVMRTFCUVUxVExGbEJRVTRzU1VGQmMwSkdMRVZCUVRGQ0xFVkJRVGhDTzBGQlF6VkNMR0ZCUVU5UUxFMUJRVTFUTEZsQlFVNHNTVUZCYzBKR0xFVkJRVGRDTEVWQlFXbERPMEZCUXk5Q1VDeGpRVUZOVXl4WlFVRk9MRWxCUVhOQ1JpeEZRVUYwUWp0QlFVTkVPenRCUVVneVFqdEJRVUZCTzBGQlFVRTdPMEZCUVVFN1FVRkxOVUlzTmtKQlFXOUNVaXhUUVVGd1FpdzRTRUZCSzBJN1FVRkJRU3hqUVVGMFFsY3NUMEZCYzBJN08wRkJRemRDV0N4dlFrRkJWVmNzVDBGQlZpeEZRVUZ0UWtNc1RVRkJia0k3UVVGRFJEdEJRVkF5UWp0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJVemRDTzBGQlEwUllMRlZCUVUxTExFZEJRVTQ3UVVGRFJDeEhRV3hDYjBJc1EwRkJja0k3UVVGdFFrUTdPMEZCUlVRc1NVRkJUVThzVTBGQlV6dEJRVU5pUXl4WlFVRlZPMEZCUTFJN096dEJRVWRCUXl4WFFVRlBPMEZCU2tNc1IwRkVSenM3UVVGUllqczdPMEZCUjBGRExGTkJRVThzYVVKQlFVMDdRVUZEV0R0QlFVTkJMRkZCUVVrc1EwRkJRMnBDTEUxQlFVd3NSVUZCWVR0QlFVTllRU3hsUVVGVExDdENRVUZaTEd0RFFVRmFMRU5CUVZRN1FVRkRSRHM3UVVGRlJDeFJRVUZKYTBJc1YwRkJWeXh2UWtGQlZXeENMRTFCUVZZc1EwRkJaanRCUVVOQlF5eGpRVUZWYVVJc1UwRkJVME1zUlVGQmJrSXNTVUZCZVVKRUxGRkJRWHBDT3p0QlFVVkJMRmRCUVU5QkxGRkJRVkE3UVVGRFJDeEhRWEpDV1RzN1FVRjFRbUk3T3p0QlFVZEJSU3hYUVVGVExHbENRVUZEUXl4TFFVRkVMRVZCUVZjN1FVRkRiRUlzVVVGQlNTeERRVUZEUVN4TFFVRkVMRWxCUVZVc1EwRkJRM0JDTEZWQlFWVnZRaXhOUVVGTlJpeEZRVUZvUWl4RFFVRm1MRVZCUVc5RE8wRkJRMnhETzBGQlEwUTdPMEZCUlVRN1FVRkRRU3hSUVVGSlJ5eFBRVUZQUXl4SlFVRlFMRU5CUVZsMFFpeFRRVUZhTEVWQlFYVkNkVUlzVFVGQmRrSXNTMEZCYTBNc1EwRkJiRU1zU1VGRFEzWkNMRlZCUVZWdlFpeE5RVUZOUml4RlFVRm9RaXhEUVVSTUxFVkJRekJDTzBGQlEzaENaQ3hoUVVGUGIwSXNiMEpCUVZBc1EwRkJORUoyUWl4TlFVRk5SU3haUVVGc1F6dEJRVU5CU2l4bFFVRlRMRWxCUVZRN1FVRkRSRHM3UVVGRlJFTXNZMEZCVlc5Q0xFMUJRVTFHTEVWQlFXaENMRWxCUVhOQ1R5eFRRVUYwUWp0QlFVTkJUQ3hWUVVGTlJDeFBRVUZPTzBGQlEwUTdRVUY0UTFrc1EwRkJaanM3YTBKQk1rTmxUaXhOT3pzN096czdRVU01UldZN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN3NFEwRkJPRU03UVVGRE9VTTdRVUZEUVR0QlFVTkJMR2xEUVVGcFF6dEJRVU5xUXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYzBKQlFYTkNMRkZCUVZFN1FVRkRPVUk3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdPenM3T3pzN1FVTm9RMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRkJRenM3UVVGRlJEdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPMEZCUTBRN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRFJEUVVFMFF6czdRVUZGTlVNN096czdPenM3UVVOd1FrRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHVkJRV1VzVTBGQlV6dEJRVU40UWp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN096czdPenM3T3pzN096dHJRa04wUW1VN1FVRkRZbVlzWTBGQldTeHZRa0ZCUXpSQ0xHVkJRVVFzUlVGQmNVSTdRVUZETDBJc1YwRkJUMEVzYlVKQlEwWk1MRTlCUVU5TkxGTkJRVkFzUTBGQmFVSkRMRkZCUVdwQ0xFTkJRVEJDUXl4SlFVRXhRaXhEUVVFclFrZ3NaVUZCTDBJc1RVRkJiMFFzYlVKQlJIcEVPMEZCUlVRN1FVRktXU3hET3pzN096czdPenM3T3pzN096czdRVU5CWmpzN096dEJRVU5CT3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdRVUZIUVRzN096czdPMGxCU1hGQ1NTeExPMEZCUTI1Q0xHbENRVUZoUXl4TFFVRmlMRVZCUVc5Q08wRkJRVUU3TzBGQlEyeENMRk5CUVV0aUxFVkJRVXdzUjBGQlZTeHJRa0ZCVmp0QlFVTkJMRk5CUVV0aExFdEJRVXdzUjBGQllVRXNTMEZCWWpzN1FVRkZRVHRCUVVOQkxGTkJRVXRCTEV0QlFVd3NRMEZCVjJ4RUxHVkJRVmdzUTBGQk1rSXNTMEZCUzNGRExFVkJRV2hETEVsQlFYTkRMR3REUVVGbE8wRkJRMjVFWXl4cFEwRkViVVE3UVVGRmJrUkRPMEZCUm0xRUxFdEJRV1lzUTBGQmRFTTdRVUZKUVN4VFFVRkxSaXhMUVVGTUxFTkJRVmN4UXl4alFVRllMRU5CUVRCQ0xHbERRVUZqTEV0QlFVc3dReXhMUVVGTUxFTkJRVmRzUkN4bFFVRjZRaXhEUVVFeFFqdEJRVU5CTEZOQlFVdHJSQ3hMUVVGTUxFTkJRVmRxUkN4UlFVRllMRU5CUVc5Q0xHZERRVUZ3UWp0QlFVTkVPenRCUVVWRU96czdPenM3T3l0Q1FVZFpPMEZCUTFZc1lVRkJUeXhMUVVGTGFVUXNTMEZCVEN4RFFVRlhlRU1zVVVGQldDeERRVUZ2UWl4TFFVRkxNa0lzUlVGQmVrSXNRMEZCVUR0QlFVTkVPenRCUVVWRU96czdPenM3T3p0blEwRkxZV2RDTEZFc1JVRkJWVHRCUVVOeVFpeFhRVUZMU0N4TFFVRk1MRU5CUVZkcVJDeFJRVUZZTEVOQlFXOUNMRGhDUVVGWkxFdEJRVXR2UXl4RlFVRnFRaXhGUVVGeFFtZENMRkZCUVhKQ0xFTkJRWEJDTzBGQlEwUTdPMEZCUlVRN096czdPenMyUWtGSFZUdEJRVU5TTEZWQlFVa3NTMEZCUzBNc1QwRkJWQ3hGUVVGclFpeERRVVZxUWpzN1FVRkZSRHRCUVVOQk8wRkJRMEVzVlVGQlRVWXNUVUZCVFN4TFFVRkxSaXhMUVVGTUxFTkJRVmQ0UXl4UlFVRllMRU5CUVc5Q0xFdEJRVXN5UWl4RlFVRjZRaXhGUVVFMlFtVXNSMEZCZWtNN08wRkJSVUU3UVVGRFFTeGhRVUZQTEVsQlFWQTdRVUZEUkRzN096WkNRVVZUYkVRc1RTeEZRVUZSTzBGQlEyaENMRmRCUVV0blJDeExRVUZNTEVOQlFWZHFSQ3hSUVVGWUxFTkJRVzlDUXl4TlFVRndRanRCUVVORU96czdORUpCUlZGeFJDeFRMRVZCUVZjN08wRkJSV3hDTEdGQlFVOHNTVUZCVUR0QlFVTkVPenM3TkVKQlJWRkRMRk1zUlVGQlZ6czdRVUZGYkVJc1lVRkJUeXhKUVVGUU8wRkJRMFE3TzBGQlJVUTdPenM3ZDBOQlF6SkVPMEZCUVVFc1ZVRkJlRU5ETEdOQlFYZERMSFZGUVVGMlFucENMRTlCUVU5RExGRkJRVkFzUTBGQlowSkRMRXRCUVU4N096dEJRVVY2UkN4aFFVRlBMRWxCUVZBN1FVRkRSRHM3UVVGRlJEczdPenNyUWtGRFdYZENMRTBzUlVGQlVVTXNVU3hGUVVGVk96dEJRVVUxUWl4aFFVRlBMRWxCUVZBN1FVRkRSRHM3UVVGRlJEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdORUpCUTFORUxFMHNSVUZCVVVVc1V5eEZRVUZYT3p0QlFVVXhRaXhoUVVGUExFbEJRVkE3UVVGRFJEczdRVUZGUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3T3pzMFFrRkRVMFlzVFN4RlFVRlJSU3hUTEVWQlFWZERMRkVzUlVGQlZUczdRVUZGY0VNc1lVRkJUeXhKUVVGUU8wRkJRMFE3T3p0cFEwRkZZVU1zVXl4RlFVRlhPenRCUVVWMlFpeGhRVUZQTEVsQlFWQTdRVUZEUkRzN096WkNRVVZUUXl4TExFVkJRVTg3TzBGQlJXWXNZVUZCVHl4SlFVRlFPMEZCUTBRN096czBRa0ZGVVRzN1FVRkZVQ3hoUVVGUExFbEJRVkE3UVVGRFJEczdRVUZGUkRzN096czdPemhDUVVkWExFTkJSVlk3T3pzN096dHJRa0ZvU0d0Q1pDeExPenM3T3pzN096czdPenM3YTBKRFdFZGxMRmM3UVVGQlZDeFRRVUZUUVN4WFFVRlVMRWRCUVRCRE8wRkJRVUVzVFVGQmNFSnFSU3hMUVVGdlFpeDFSVUZCV2l4RlFVRlpPMEZCUVVFc1RVRkJVa2NzVFVGQlVUczdRVUZEZGtRc1UwRkJUMGdzUzBGQlVEdEJRVU5FTEVNN096czdPenM3T3pzN096dHJRa05HZFVKclJTeFZPMEZCUVZRc1UwRkJVMEVzVlVGQlZDeEhRVUY1UXp0QlFVRkJMRTFCUVhCQ2JFVXNTMEZCYjBJc2RVVkJRVm9zUlVGQldUdEJRVUZCTEUxQlFWSkhMRTFCUVZFN08wRkJRM1JFTEZOQlFVOUlMRXRCUVZBN1FVRkRSQ3hET3pzN096czdPenM3T3pzN1VVTkJaVzFGTEZrc1IwRkJRVUVzV1R0QlFVWlVMRWxCUVUxRExIZERRVUZuUWl4bFFVRjBRanM3UVVGRlFTeFRRVUZUUkN4WlFVRlVMRWRCUVhsQ08wRkJRemxDTEZOQlFVODdRVUZEVERkRUxGVkJRVTA0UkR0QlFVUkVMRWRCUVZBN1FVRkhSQ3hET3pzN096czdPenM3T3pzN1VVTktaVU1zVnl4SFFVRkJRU3hYTzBGQlJsUXNTVUZCVFVNc2MwTkJRV1VzWTBGQmNrSTdPMEZCUlVFc1UwRkJVMFFzVjBGQlZDeEhRVUYzUWp0QlFVTTNRaXhUUVVGUE8wRkJRMHd2UkN4VlFVRk5aMFU3UVVGRVJDeEhRVUZRTzBGQlIwUXNReUlzSW1acGJHVWlPaUpqYUdGeWRIZ3Vhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0Z2QyVmljR0ZqYTFWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRvY205dmRDd2dabUZqZEc5eWVTa2dlMXh1WEhScFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY2dKaVlnZEhsd1pXOW1JRzF2WkhWc1pTQTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1ZV04wYjNKNUtDazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1JsWm1sdVpTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQmtaV1pwYm1VdVlXMWtLVnh1WEhSY2RHUmxabWx1WlNoYlhTd2dabUZqZEc5eWVTazdYRzVjZEdWc2MyVWdlMXh1WEhSY2RIWmhjaUJoSUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJjZEdadmNpaDJZWElnYVNCcGJpQmhLU0FvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuSUQ4Z1pYaHdiM0owY3lBNklISnZiM1FwVzJsZElEMGdZVnRwWFR0Y2JseDBmVnh1ZlNrb2RIbHdaVzltSUhObGJHWWdJVDA5SUNkMWJtUmxabWx1WldRbklEOGdjMlZzWmlBNklIUm9hWE1zSUdaMWJtTjBhVzl1S0NrZ2UxeHVjbVYwZFhKdUlGeHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUIzWldKd1lXTnJMM1Z1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNGlMQ0lnWEhRdkx5QlVhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFIyWVhJZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3lBOUlIdDlPMXh1WEc0Z1hIUXZMeUJVYUdVZ2NtVnhkV2x5WlNCbWRXNWpkR2x2Ymx4dUlGeDBablZ1WTNScGIyNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWh0YjJSMWJHVkpaQ2tnZTF4dVhHNGdYSFJjZEM4dklFTm9aV05ySUdsbUlHMXZaSFZzWlNCcGN5QnBiaUJqWVdOb1pWeHVJRngwWEhScFppaHBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTa2dlMXh1SUZ4MFhIUmNkSEpsZEhWeWJpQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTNWxlSEJ2Y25Sek8xeHVJRngwWEhSOVhHNGdYSFJjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzRnWEhSY2RIWmhjaUJ0YjJSMWJHVWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU0E5SUh0Y2JpQmNkRngwWEhScE9pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUnNPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmxlSEJ2Y25Sek9pQjdmVnh1SUZ4MFhIUjlPMXh1WEc0Z1hIUmNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dUlGeDBYSFJ0YjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVqWVd4c0tHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1VzSUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS1R0Y2JseHVJRngwWEhRdkx5QkdiR0ZuSUhSb1pTQnRiMlIxYkdVZ1lYTWdiRzloWkdWa1hHNGdYSFJjZEcxdlpIVnNaUzVzSUQwZ2RISjFaVHRjYmx4dUlGeDBYSFF2THlCU1pYUjFjbTRnZEdobElHVjRjRzl5ZEhNZ2IyWWdkR2hsSUcxdlpIVnNaVnh1SUZ4MFhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc0Z1hIUjlYRzVjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1Z6SUc5aWFtVmpkQ0FvWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWHlsY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YlNBOUlHMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbU1nUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVJR1p2Y2lCb1lYSnRiMjU1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ0E5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1zSUc1aGJXVXNJR2RsZEhSbGNpa2dlMXh1SUZ4MFhIUnBaaWdoWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHVjRjRzl5ZEhNc0lHNWhiV1VwS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRzVoYldVc0lIdGNiaUJjZEZ4MFhIUmNkR052Ym1acFozVnlZV0pzWlRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWEhSbGJuVnRaWEpoWW14bE9pQjBjblZsTEZ4dUlGeDBYSFJjZEZ4MFoyVjBPaUJuWlhSMFpYSmNiaUJjZEZ4MFhIUjlLVHRjYmlCY2RGeDBmVnh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaMlYwUkdWbVlYVnNkRVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm1iM0lnWTI5dGNHRjBhV0pwYkdsMGVTQjNhWFJvSUc1dmJpMW9ZWEp0YjI1NUlHMXZaSFZzWlhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YmlBOUlHWjFibU4wYVc5dUtHMXZaSFZzWlNrZ2UxeHVJRngwWEhSMllYSWdaMlYwZEdWeUlEMGdiVzlrZFd4bElDWW1JRzF2WkhWc1pTNWZYMlZ6VFc5a2RXeGxJRDljYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSRVpXWmhkV3gwS0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsV3lka1pXWmhkV3gwSjEwN0lIMGdPbHh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEUxdlpIVnNaVVY0Y0c5eWRITW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVTdJSDA3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNoblpYUjBaWElzSUNkaEp5d2daMlYwZEdWeUtUdGNiaUJjZEZ4MGNtVjBkWEp1SUdkbGRIUmxjanRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiRnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZJRDBnWm5WdVkzUnBiMjRvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2tnZXlCeVpYUjFjbTRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwT3lCOU8xeHVYRzRnWEhRdkx5QmZYM2RsWW5CaFkydGZjSFZpYkdsalgzQmhkR2hmWDF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUQwZ1hDSXZYQ0k3WEc1Y2JpQmNkQzh2SUV4dllXUWdaVzUwY25rZ2JXOWtkV3hsSUdGdVpDQnlaWFIxY200Z1pYaHdiM0owYzF4dUlGeDBjbVYwZFhKdUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9YMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV6SUQwZ01pazdYRzVjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z2QyVmljR0ZqYXk5aWIyOTBjM1J5WVhBZ05qZzJZV1prWWpFeU1EVTBZekl4WXpZeU5EVWlMQ0oyWVhJZ2NtNW5JRDBnY21WeGRXbHlaU2duTGk5c2FXSXZjbTVuSnlrN1hHNTJZWElnWW5sMFpYTlViMVYxYVdRZ1BTQnlaWEYxYVhKbEtDY3VMMnhwWWk5aWVYUmxjMVJ2VlhWcFpDY3BPMXh1WEc0dkx5QXFLbUIyTVNncFlDQXRJRWRsYm1WeVlYUmxJSFJwYldVdFltRnpaV1FnVlZWSlJDb3FYRzR2TDF4dUx5OGdTVzV6Y0dseVpXUWdZbmtnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDB4cGIzTkxMMVZWU1VRdWFuTmNiaTh2SUdGdVpDQm9kSFJ3T2k4dlpHOWpjeTV3ZVhSb2IyNHViM0puTDJ4cFluSmhjbmt2ZFhWcFpDNW9kRzFzWEc1Y2JpOHZJSEpoYm1SdmJTQWpKM01nZDJVZ2JtVmxaQ0IwYnlCcGJtbDBJRzV2WkdVZ1lXNWtJR05zYjJOcmMyVnhYRzUyWVhJZ1gzTmxaV1JDZVhSbGN5QTlJSEp1WnlncE8xeHVYRzR2THlCUVpYSWdOQzQxTENCamNtVmhkR1VnWVc1a0lEUTRMV0pwZENCdWIyUmxJR2xrTENBb05EY2djbUZ1Wkc5dElHSnBkSE1nS3lCdGRXeDBhV05oYzNRZ1ltbDBJRDBnTVNsY2JuWmhjaUJmYm05a1pVbGtJRDBnVzF4dUlDQmZjMlZsWkVKNWRHVnpXekJkSUh3Z01IZ3dNU3hjYmlBZ1gzTmxaV1JDZVhSbGMxc3hYU3dnWDNObFpXUkNlWFJsYzFzeVhTd2dYM05sWldSQ2VYUmxjMXN6WFN3Z1gzTmxaV1JDZVhSbGMxczBYU3dnWDNObFpXUkNlWFJsYzFzMVhWeHVYVHRjYmx4dUx5OGdVR1Z5SURRdU1pNHlMQ0J5WVc1a2IyMXBlbVVnS0RFMElHSnBkQ2tnWTJ4dlkydHpaWEZjYm5aaGNpQmZZMnh2WTJ0elpYRWdQU0FvWDNObFpXUkNlWFJsYzFzMlhTQThQQ0E0SUh3Z1gzTmxaV1JDZVhSbGMxczNYU2tnSmlBd2VETm1abVk3WEc1Y2JpOHZJRkJ5WlhacGIzVnpJSFYxYVdRZ1kzSmxZWFJwYjI0Z2RHbHRaVnh1ZG1GeUlGOXNZWE4wVFZObFkzTWdQU0F3TENCZmJHRnpkRTVUWldOeklEMGdNRHRjYmx4dUx5OGdVMlZsSUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5aWNtOXZabUV2Ym05a1pTMTFkV2xrSUdadmNpQkJVRWtnWkdWMFlXbHNjMXh1Wm5WdVkzUnBiMjRnZGpFb2IzQjBhVzl1Y3l3Z1luVm1MQ0J2Wm1aelpYUXBJSHRjYmlBZ2RtRnlJR2tnUFNCaWRXWWdKaVlnYjJabWMyVjBJSHg4SURBN1hHNGdJSFpoY2lCaUlEMGdZblZtSUh4OElGdGRPMXh1WEc0Z0lHOXdkR2x2Ym5NZ1BTQnZjSFJwYjI1eklIeDhJSHQ5TzF4dVhHNGdJSFpoY2lCamJHOWphM05sY1NBOUlHOXdkR2x2Ym5NdVkyeHZZMnR6WlhFZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUc5d2RHbHZibk11WTJ4dlkydHpaWEVnT2lCZlkyeHZZMnR6WlhFN1hHNWNiaUFnTHk4Z1ZWVkpSQ0IwYVcxbGMzUmhiWEJ6SUdGeVpTQXhNREFnYm1GdWJ5MXpaV052Ym1RZ2RXNXBkSE1nYzJsdVkyVWdkR2hsSUVkeVpXZHZjbWxoYmlCbGNHOWphQ3hjYmlBZ0x5OGdLREUxT0RJdE1UQXRNVFVnTURBNk1EQXBMaUFnU2xOT2RXMWlaWEp6SUdGeVpXNG5kQ0J3Y21WamFYTmxJR1Z1YjNWbmFDQm1iM0lnZEdocGN5d2djMjljYmlBZ0x5OGdkR2x0WlNCcGN5Qm9ZVzVrYkdWa0lHbHVkR1Z5Ym1Gc2JIa2dZWE1nSjIxelpXTnpKeUFvYVc1MFpXZGxjaUJ0YVd4c2FYTmxZMjl1WkhNcElHRnVaQ0FuYm5ObFkzTW5YRzRnSUM4dklDZ3hNREF0Ym1GdWIzTmxZMjl1WkhNZ2IyWm1jMlYwSUdaeWIyMGdiWE5sWTNNcElITnBibU5sSUhWdWFYZ2daWEJ2WTJnc0lERTVOekF0TURFdE1ERWdNREE2TURBdVhHNGdJSFpoY2lCdGMyVmpjeUE5SUc5d2RHbHZibk11YlhObFkzTWdJVDA5SUhWdVpHVm1hVzVsWkNBL0lHOXdkR2x2Ym5NdWJYTmxZM01nT2lCdVpYY2dSR0YwWlNncExtZGxkRlJwYldVb0tUdGNibHh1SUNBdkx5QlFaWElnTkM0eUxqRXVNaXdnZFhObElHTnZkVzUwSUc5bUlIVjFhV1FuY3lCblpXNWxjbUYwWldRZ1pIVnlhVzVuSUhSb1pTQmpkWEp5Wlc1MElHTnNiMk5yWEc0Z0lDOHZJR041WTJ4bElIUnZJSE5wYlhWc1lYUmxJR2hwWjJobGNpQnlaWE52YkhWMGFXOXVJR05zYjJOclhHNGdJSFpoY2lCdWMyVmpjeUE5SUc5d2RHbHZibk11Ym5ObFkzTWdJVDA5SUhWdVpHVm1hVzVsWkNBL0lHOXdkR2x2Ym5NdWJuTmxZM01nT2lCZmJHRnpkRTVUWldOeklDc2dNVHRjYmx4dUlDQXZMeUJVYVcxbElITnBibU5sSUd4aGMzUWdkWFZwWkNCamNtVmhkR2x2YmlBb2FXNGdiWE5sWTNNcFhHNGdJSFpoY2lCa2RDQTlJQ2h0YzJWamN5QXRJRjlzWVhOMFRWTmxZM01wSUNzZ0tHNXpaV056SUMwZ1gyeGhjM1JPVTJWamN5a3ZNVEF3TURBN1hHNWNiaUFnTHk4Z1VHVnlJRFF1TWk0eExqSXNJRUoxYlhBZ1kyeHZZMnR6WlhFZ2IyNGdZMnh2WTJzZ2NtVm5jbVZ6YzJsdmJseHVJQ0JwWmlBb1pIUWdQQ0F3SUNZbUlHOXdkR2x2Ym5NdVkyeHZZMnR6WlhFZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJR05zYjJOcmMyVnhJRDBnWTJ4dlkydHpaWEVnS3lBeElDWWdNSGd6Wm1abU8xeHVJQ0I5WEc1Y2JpQWdMeThnVW1WelpYUWdibk5sWTNNZ2FXWWdZMnh2WTJzZ2NtVm5jbVZ6YzJWeklDaHVaWGNnWTJ4dlkydHpaWEVwSUc5eUlIZGxKM1psSUcxdmRtVmtJRzl1ZEc4Z1lTQnVaWGRjYmlBZ0x5OGdkR2x0WlNCcGJuUmxjblpoYkZ4dUlDQnBaaUFvS0dSMElEd2dNQ0I4ZkNCdGMyVmpjeUErSUY5c1lYTjBUVk5sWTNNcElDWW1JRzl3ZEdsdmJuTXVibk5sWTNNZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJRzV6WldOeklEMGdNRHRjYmlBZ2ZWeHVYRzRnSUM4dklGQmxjaUEwTGpJdU1TNHlJRlJvY205M0lHVnljbTl5SUdsbUlIUnZieUJ0WVc1NUlIVjFhV1J6SUdGeVpTQnlaWEYxWlhOMFpXUmNiaUFnYVdZZ0tHNXpaV056SUQ0OUlERXdNREF3S1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2QxZFdsa0xuWXhLQ2s2SUVOaGJseGNKM1FnWTNKbFlYUmxJRzF2Y21VZ2RHaGhiaUF4TUUwZ2RYVnBaSE12YzJWakp5azdYRzRnSUgxY2JseHVJQ0JmYkdGemRFMVRaV056SUQwZ2JYTmxZM003WEc0Z0lGOXNZWE4wVGxObFkzTWdQU0J1YzJWamN6dGNiaUFnWDJOc2IyTnJjMlZ4SUQwZ1kyeHZZMnR6WlhFN1hHNWNiaUFnTHk4Z1VHVnlJRFF1TVM0MElDMGdRMjl1ZG1WeWRDQm1jbTl0SUhWdWFYZ2daWEJ2WTJnZ2RHOGdSM0psWjI5eWFXRnVJR1Z3YjJOb1hHNGdJRzF6WldOeklDczlJREV5TWpFNU1qa3lPREF3TURBd08xeHVYRzRnSUM4dklHQjBhVzFsWDJ4dmQyQmNiaUFnZG1GeUlIUnNJRDBnS0NodGMyVmpjeUFtSURCNFptWm1abVptWmlrZ0tpQXhNREF3TUNBcklHNXpaV056S1NBbElEQjRNVEF3TURBd01EQXdPMXh1SUNCaVcya3JLMTBnUFNCMGJDQStQajRnTWpRZ0ppQXdlR1ptTzF4dUlDQmlXMmtySzEwZ1BTQjBiQ0ErUGo0Z01UWWdKaUF3ZUdabU8xeHVJQ0JpVzJrcksxMGdQU0IwYkNBK1BqNGdPQ0FtSURCNFptWTdYRzRnSUdKYmFTc3JYU0E5SUhSc0lDWWdNSGhtWmp0Y2JseHVJQ0F2THlCZ2RHbHRaVjl0YVdSZ1hHNGdJSFpoY2lCMGJXZ2dQU0FvYlhObFkzTWdMeUF3ZURFd01EQXdNREF3TUNBcUlERXdNREF3S1NBbUlEQjRabVptWm1abVpqdGNiaUFnWWx0cEt5dGRJRDBnZEcxb0lENCtQaUE0SUNZZ01IaG1aanRjYmlBZ1lsdHBLeXRkSUQwZ2RHMW9JQ1lnTUhobVpqdGNibHh1SUNBdkx5QmdkR2x0WlY5b2FXZG9YMkZ1WkY5MlpYSnphVzl1WUZ4dUlDQmlXMmtySzEwZ1BTQjBiV2dnUGo0K0lESTBJQ1lnTUhobUlId2dNSGd4TURzZ0x5OGdhVzVqYkhWa1pTQjJaWEp6YVc5dVhHNGdJR0piYVNzclhTQTlJSFJ0YUNBK1BqNGdNVFlnSmlBd2VHWm1PMXh1WEc0Z0lDOHZJR0JqYkc5amExOXpaWEZmYUdsZllXNWtYM0psYzJWeWRtVmtZQ0FvVUdWeUlEUXVNaTR5SUMwZ2FXNWpiSFZrWlNCMllYSnBZVzUwS1Z4dUlDQmlXMmtySzEwZ1BTQmpiRzlqYTNObGNTQStQajRnT0NCOElEQjRPREE3WEc1Y2JpQWdMeThnWUdOc2IyTnJYM05sY1Y5c2IzZGdYRzRnSUdKYmFTc3JYU0E5SUdOc2IyTnJjMlZ4SUNZZ01IaG1aanRjYmx4dUlDQXZMeUJnYm05a1pXQmNiaUFnZG1GeUlHNXZaR1VnUFNCdmNIUnBiMjV6TG01dlpHVWdmSHdnWDI1dlpHVkpaRHRjYmlBZ1ptOXlJQ2gyWVhJZ2JpQTlJREE3SUc0Z1BDQTJPeUFySzI0cElIdGNiaUFnSUNCaVcya2dLeUJ1WFNBOUlHNXZaR1ZiYmwwN1hHNGdJSDFjYmx4dUlDQnlaWFIxY200Z1luVm1JRDhnWW5WbUlEb2dZbmwwWlhOVWIxVjFhV1FvWWlrN1hHNTlYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnZGpFN1hHNWNibHh1WEc0dkx5OHZMeTh2THk4dkx5OHZMeTh2THk5Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU1hHNHZMeUF1TDI1dlpHVmZiVzlrZFd4bGN5OTFkV2xrTDNZeExtcHpYRzR2THlCdGIyUjFiR1VnYVdRZ1BTQXdYRzR2THlCdGIyUjFiR1VnWTJoMWJtdHpJRDBnTUNJc0ltbHRjRzl5ZENCMWRHbHNJR1p5YjIwZ0p5NHZkWFJwYkNkY2JseHVMeW9xWEc0Z0tpQkRjbVZoZEdVZ1lTQnpkRzl5WlNCM2FHbGphQ0JvYjJ4a2N5QmphR0Z5ZEhNZ2MzUmhkR1Z6SUdGdVpDQjFkR2xzY3lCMGIxeHVJQ29nYVc1MFpYSmhZM1FnZDJsMGFDQjBhR1VnYzNSaGRHVWdkbWxoSUdScGMzQmhkR05vWlhKelhHNGdLaUJjYmlBcUlGSmxaSFZqWlhKeklHRnlaU0J3ZFhKbElHWjFibU4wYVc5dWN5QjBhR0YwSUhCeWIyTmxjM05wYm1jZ1kyaGhjblFnYzNSaGRHVnpMbHh1SUNvZ1hHNGdLaUJEYUdGeWRDQlRkR0YwWlNCRmVHRnRjR3hsT2x4dUlDb2dMeThnVkdocGN5QnBjeUJ2Ym1VZ1kyaGhjblFnYzNSaGRHVXVJRlJvWlNCM2FHOXNaU0JqYUdGeWRITWdjM1JoZEdWeklHRnlaU0JqYjIxd2IzTmxaRnh1SUNvZ0x5OGdZbmtnYlhWc2RHbHdiR1VnYzNWamFDQnpkR0YwWlhNdVhHNGdLaUJ6ZEdGMFpTQTlJSHRjYmlBcUlDQWdMeThnWkdGMFlTQnpkR0YwWlNCMGJ5Qm9iMnhrSUhKaGR5QmtZWFJoWEc0Z0tpQWdJR1JoZEdFNklGdDdYRzRnS2lBZ0lDQWdKM0J5YjJSMVkzUW5PaUFuWVhCd2JHVW5MRnh1SUNvZ0lDQWdJQ2QwYjNSaGJDQnlaV052Y21Sekp6b2dNVEF4TEZ4dUlDb2dJQ0FnSUNkc1lYTjBJSFZ3WkdGMFpTQjBhVzFsSnpvZ01UVXhNelE1TmpVNU1EUTRNMXh1SUNvZ0lDQjlMQ0I3WEc0Z0tpQWdJQ0FnSjNCeWIyUjFZM1FuT2lBbmIzSmhibWRsSnl4Y2JpQXFJQ0FnSUNBbmRHOTBZV3dnY21WamIzSmtjeWM2SURJd01DeGNiaUFxSUNBZ0lDQW5iR0Z6ZENCMWNHUmhkR1VnZEdsdFpTYzZJREUxTVRNME9UWTJNamsyTnpCY2JpQXFJQ0FnZlN3Z2UxeHVJQ29nSUNBZ0lDZHdjbTlrZFdOMEp6b2dKM0JsWVhJbkxGeHVJQ29nSUNBZ0lDZDBiM1JoYkNCeVpXTnZjbVJ6SnpvZ016Y3NYRzRnS2lBZ0lDQWdKMnhoYzNRZ2RYQmtZWFJsSUhScGJXVW5PaUF4TlRFek5EazJOalF6TkRNd1hHNGdLaUFnSUgwc0lIdGNiaUFxSUNBZ0lDQW5jSEp2WkhWamRDYzZJQ2RoY0hCc1pTY3NYRzRnS2lBZ0lDQWdKM1J2ZEdGc0lISmxZMjl5WkhNbk9pQXhOVEFzWEc0Z0tpQWdJQ0FnSjJ4aGMzUWdkWEJrWVhSbElIUnBiV1VuT2lBeE5URXpORGsyTlRrd05EZ3pYRzRnS2lBZ0lIMHNJSHRjYmlBcUlDQWdJQ0FuY0hKdlpIVmpkQ2M2SUNkdmNtRnVaMlVuTEZ4dUlDb2dJQ0FnSUNkMGIzUmhiQ0J5WldOdmNtUnpKem9nTWpJeExGeHVJQ29nSUNBZ0lDZHNZWE4wSUhWd1pHRjBaU0IwYVcxbEp6b2dNVFV4TXpRNU5qWXlPVFkzTUZ4dUlDb2dJQ0I5WFN4Y2JpQXFJRnh1SUNvZ0lDQXZMeUJtYVc1aGJDQnlaVzVrWlhJZ2MzUmhkR1VnS0daeWN5a2dkRzhnYUc5c1pDQlZTU0J5Wld4aGRHVmtJR2x1Wm05eWJXRjBhVzl1WEc0Z0tpQWdJR1p5Y3pvZ2UxeHVJQ29nSUNBZ0lIZzZJSHRjYmlBcUlDQWdJQ0FnSUhOcGVtVTZJREFzWEc0Z0tpQWdJQ0FnSUNCdmNtbG5hVzQ2SUNkdGFXUmtiR1VuTEZ4dUlDb2dJQ0FnSUNBZ1pHRjBZVG9nV3pFc0lETXNJRFlzSURnc0lERXhYU3hjYmlBcUlDQWdJQ0FnSUd4aFltVnNPaUFuY0hKdlpIVmpkQ2RjYmlBcUlDQWdJQ0I5TEZ4dUlDb2dJQ0FnSUhrNklIdGNiaUFxSUNBZ0lDQWdJSE5wZW1VNklERXNYRzRnS2lBZ0lDQWdJQ0J2Y21sbmFXNDZJQ2RsYm1RbkxGeHVJQ29nSUNBZ0lDQWdaR0YwWVRvZ1d6RXdMakVzSURFMUxDQXlNQ3dnTWpJdU1Td2dNeTQzWFN4Y2JpQXFJQ0FnSUNBZ0lHeGhZbVZzT2lBbmRHOTBZV3dnY21WamIzSmtjeWRjYmlBcUlDQWdJQ0I5TEZ4dUlDb2dJQ0FnSUhvNklHNTFiR3hjYmlBcUlDQWdmVnh1SUNvZ2ZWeHVJQ29nWEc0Z0tpQkFjR0Z5WVcwZ2UyWjFibU4wYVc5dWZTQnlaV1IxWTJWeUlGeHVJQ292WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWTNKbFlYUmxVM1J2Y21VZ0tISmxaSFZqWlhJcElIdGNiaUFnTHk4Z1NXNXBkQ0J6ZEdGMFpTQmpiMjFsSUdaeWIyMGdjbVZrZFdObGNseHVJQ0JzWlhRZ2MzUmhkR1VnUFNCeVpXUjFZMlZ5S0NsY2JseHVJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDOHZJRlJvWlNCaGMzbHVZeUJ5WldSMVkyVnlJRzFoY0NCMWMyVmtJSFJ2SUdGa1pDQmhjM2x1WXlCeVpXUjFZMlZ5Y3lCcGJuUnZJSE4wYjNKbFhHNGdJQ0FnWVhONWJtTlNaV1IxWTJWeVRXRndPaUI3ZlN4Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCRWFYTndZWFJqYUNCaFkzUnBiMjRnZEc4Z2RISnBaMmRsY2lCemRHRjBaU0JqYUdGdVoyVnpYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1pHbHpjR0YwWTJnNklDaGhZM1JwYjI0Z1BTQjdmU2tnUFQ0Z2UxeHVJQ0FnSUNBZ2FXWWdLSEJ5YjJObGMzTXVaVzUyTG1OdlpHVWdQVDA5SUNkRVJWWW5LU0I3WEc0Z0lDQWdJQ0FnSUM4dklHeHZaeUJoWTNScGIyNXpJR2x1SUdOdmJuTnZiR1ZjYmlBZ0lDQWdJQ0FnWTI5dWMyOXNaUzVuY205MWNDaGhZM1JwYjI0dWRIbHdaU2xjYmlBZ0lDQWdJQ0FnWTI5dWMyOXNaUzVwYm1adktDY2xZMkpsWm05eVpUb25MQ0FuWTI5c2IzSTZJR2R5WldWdUp5d2djM1JoZEdVcFhHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdWFXNW1ieWduSldOaFkzUnBiMjQ2Snl3Z0oyTnZiRzl5T2lCeVpXUW5MQ0JoWTNScGIyNHBYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQmNiaUFnSUNBZ0lDOHZJRlZ3WkdGMFpTQnpkR0YwWlZ4dUlDQWdJQ0FnYzNSaGRHVWdQU0J5WldSMVkyVnlLSE4wWVhSbExDQmhZM1JwYjI0cFhHNWNiaUFnSUNBZ0lHbG1JQ2h3Y205alpYTnpMbVZ1ZGk1amIyUmxJRDA5UFNBblJFVldKeWtnZTF4dUlDQWdJQ0FnSUNBdkx5QnNiMmNnWVdOMGFXOXVjeUJwYmlCamIyNXpiMnhsWEc0Z0lDQWdJQ0FnSUdOdmJuTnZiR1V1YVc1bWJ5Z25KV05oWm5SbGNqb25MQ0FuWTI5c2IzSTZJR2R5WldWdUp5d2djM1JoZEdVcFhHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdVozSnZkWEJGYm1Rb0tWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc1hHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VtVndiR0ZqWlNCMGFHVWdjbVZrZFdObGNpQm1iM0lnYzNSdmNtVWdkRzhnWVNCa2FXWm1aWEpsYm5RZ2IyNWxYRzRnSUNBZ0lDb2dWR2hwY3lCcGN5QjFjMlZtZFd3Z2QyaGxiaUIzWlNCM1lXNTBJSFJ2SUdSNWJtRnRhV05oYkd4NUlHRmtaQ0J5WldSMVkyVnljMXh1SUNBZ0lDQXFMMXh1SUNBZ0lISmxjR3hoWTJWU1pXUjFZMlZ5T2lBb2JtVjNVbVZrZFdObGNpa2dQVDRnZTF4dUlDQWdJQ0FnY21Wa2RXTmxjaUE5SUc1bGQxSmxaSFZqWlhKY2JpQWdJQ0I5TEZ4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZKbGRIVnliaUIwYUdVZ1kzVnljbVZ1ZENCemRHRjBaU0JtYjNJZ1oybDJaVzRnYTJWNVhHNGdJQ0FnSUNvZ1ZHaHBjeUJwY3lCMGJ5QmhiR3h2ZHlCaGNIQnNhV05oZEdsdmJpQjBieUFuWTI5dWJtVmpkQ2NnZEc4Z2MzUmhkR1ZjYmlBZ0lDQWdLaTljYmlBZ0lDQm5aWFJUZEdGMFpUb2dLSE4wWVhSbFMyVjVLU0E5UGlCN1hHNGdJQ0FnSUNCcFppQW9JWE4wWVhSbFMyVjVLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6ZEdGMFpWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6ZEdGMFpWdHpkR0YwWlV0bGVWMWNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDFjYm4xY2JseHVMeW9xWEc0Z0tpQkRjbVZoZEdVZ1lTQnlaV1IxWTJWeUlHSmhjMlZrSUc5dUlHZHBkbVZ1SUhKbFpIVmpaWElnYldGd0xseHVJQ29nUW5rZ2QzSmhjSEJwYm1jZ1kyOXRZbWx1WlZKbFpIVmpaWElnWm5WdVkzUnBiMjRzSUhkbElHaGhkbVVnWVNCamFHRnVZMlVnZEc4Z1pIbHVZVzFwWTJGc2JIbGNiaUFxSUdGa1pDQnVaWGNnY21Wa2RXTmxjbk5jYmlBcUlGeHVJQ29nUUhCaGNtRnRJSHR2WW1wbFkzUjlJR0Z6ZVc1alVtVmtkV05sY2sxaGNDQmNiaUFxTDF4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUdOeVpXRjBaVkpsWkhWalpYSWdLR0Z6ZVc1alVtVmtkV05sY2sxaGNDQTlJSHQ5S1NCN1hHNGdJSEpsZEhWeWJpQmpiMjFpYVc1bFVtVmtkV05sY2loN0xpNHVZWE41Ym1OU1pXUjFZMlZ5VFdGd2ZTbGNibjFjYmx4dUx5b3FYRzRnS2lCWGFXeHNJR052YldKcGJtVWdibVZ6ZEdWa0lISmxaSFZqWlhJZ2JXRndJSFJ2SUdFZ1ltbG5JSEpsWkhWalpYSmNiaUFxSUZ4dUlDb2dSWGhoYlhCc1pUcGNiaUFxSUdOdmJXSnBibVZTWldSMVkyVnlLSHRjYmlBcUlDQWdKMk5vWVhKMElERW5PaUI3WEc0Z0tpQWdJQ0FnWkdGMFlUb2dLQ2tnUFQ0Z2UzMHNYRzRnS2lBZ0lDQWdabkp6T2lBb0tTQTlQaUI3ZlZ4dUlDb2dJQ0I5TEZ4dUlDb2dJQ0FuWTJoaGNuUWdNaWM2SUh0Y2JpQXFJQ0FnSUNCa1lYUmhPaUFvS1NBOVBpQjdmU3hjYmlBcUlDQWdJQ0JtY25NNklDZ3BJRDArSUh0OVhHNGdLaUFnSUgxY2JpQXFJSDBwWEc0Z0tpQmNiaUFxSUhkcGJHd2daMmwyWlNCaElISmxaSFZqWlhJZ1puVnVZM1JwYjI0Z2QyaHBZMmdnYm1WemRHVmtJSGRwZEdoY2JpQXFJR052YldKcGJtVmtJSEpsWkhWalpYSWdabTl5SUdOb1lYSjBJREVnWVc1a0lHTm9ZWEowSURKY2JpQXFJRnh1SUNvZ1FIQmhjbUZ0SUh0dlltcGxZM1I5SUhKbFpIVmpaWEpOWVhBZ1hHNGdLaTljYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJqYjIxaWFXNWxVbVZrZFdObGNpQW9jbVZrZFdObGNrMWhjQ0E5SUh0OUtTQjdYRzRnSUhKbGRIVnliaUFvYzNSaGRHVWdQU0I3ZlN3Z1lXTjBhVzl1SUQwZ2UzMHBJRDArSUh0Y2JpQWdJQ0JzWlhRZ2JtVjNVM1JoZEdVZ1BTQjdmVnh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlISmxaSFZqWlhKTllYQXBJSHRjYmlBZ0lDQWdJR3hsZENCeVpXUjFZMlZ5Um00Z1BTQnlaV1IxWTJWeVRXRndXMnRsZVYwc1hHNGdJQ0FnSUNBZ0lDQWdaWGhwYzNSVGRHRjBaU0E5SUhOMFlYUmxXMnRsZVYwZ2ZId2dlMzFjYmx4dUlDQWdJQ0FnYVdZZ0tIVjBhV3d1YVhOR2RXNWpkR2x2YmloeVpXUjFZMlZ5Um00cEtTQjdYRzRnSUNBZ0lDQWdJQzh2SUZCaGMzTWdkR2hsSUhkb2IyeGxJSE4wWVhSbElHUnZkMjRnWVhNZ1lYSm5kVzFsYm5RZ1ptOXlYRzRnSUNBZ0lDQWdJQzh2SUdOeWIzTnpJSE4wWVhSbElHdGxlU0JoWTJObGMzTmNiaUFnSUNBZ0lDQWdibVYzVTNSaGRHVmJhMlY1WFNBOUlISmxaSFZqWlhKR2JpaGxlR2x6ZEZOMFlYUmxMQ0JoWTNScGIyNHNJSE4wWVhSbExDQnlaV1IxWTJWeVRXRndLVnh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdMeThnVW1WamRYSnphWFpsYkhrZ1kyOXRZbWx1WlNCdVpYTjBaV1FnY21Wa2RXTmxjaUJ0WVhCY2JpQWdJQ0FnSUNBZ2JtVjNVM1JoZEdWYmEyVjVYU0E5SUdOdmJXSnBibVZTWldSMVkyVnlLSEpsWkhWalpYSk5ZWEJiYTJWNVhTa29aWGhwYzNSVGRHRjBaU3dnWVdOMGFXOXVLVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCdVpYZFRkR0YwWlZ4dUlDQjlYRzU5WEc1Y2JseHVMeThnVjBWQ1VFRkRTeUJHVDA5VVJWSWdMeTljYmk4dklDNHZjM0pqTDNOMFlYUmxUV0Z1WVdkbGNpNXFjeUlzSW1sdGNHOXlkQ0IxZFdsa2RqRWdabkp2YlNBbmRYVnBaQzkyTVNkY2JtbHRjRzl5ZENCN1kyOXRZbWx1WlZKbFpIVmpaWElzSUdOeVpXRjBaVk4wYjNKbExDQmpjbVZoZEdWU1pXUjFZMlZ5ZlNCbWNtOXRJQ2N1TDNOMFlYUmxUV0Z1WVdkbGNpZGNibWx0Y0c5eWRDQkRhR0Z5ZENCbWNtOXRJQ2N1TDBOb1lYSjBKMXh1WEc1Y2JseHVYRzVzWlhRZ1gzTjBiM0psTENBdkx5QlVhR1VnYzNSdmNtVWdabTl5SUdGc2JDQmphR0Z5ZEhNZ2MzUmhkR1ZjYmlBZ0lDQmZZMmhoY25STllYQWdQU0I3ZlNBdkx5QmphR0Z5ZENCdFlYQWdkRzhnY1hWcFkydHNlU0JtYVc1a0lHTm9ZWEowWEc1Y2JpOHFLbHh1SUNvZ1ZISnBaMmRsY2lCeVpXNWtaWElnYkc5dmNGeHVJQ292WEc1bWRXNWpkR2x2YmlCZmJHOXZjQ0FvYkdGemRGUnBiV1Z6ZEdGdGNDa2dlMXh1SUNCZmJHOXZjQzVoYm1sdFlYUnBiMjVMWlhrZ1BTQjNhVzVrYjNjdWNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxLQ2dwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0J1YjNjZ1BTQkVZWFJsTG01dmR5Z3BYRzRnSUNBZ1kyOXVjM1FnWkhRZ1BTQXhNREF3SUM4Z1gyeHZiM0F1WDJad2MxeHVJQ0FnSUY5c2IyOXdMbDloWTJOMWJYVnNZWFJ2Y2lBOUlGOXNiMjl3TGw5aFkyTjFiWFZzWVhSdmNpQS9JRjlzYjI5d0xsOWhZMk4xYlhWc1lYUnZjaUE2SURCY2JpQWdJQ0JmYkc5dmNDNWZZV05qZFcxMWJHRjBiM0lnS3owZ2JtOTNJQzBnYkdGemRGUnBiV1Z6ZEdGdGNGeHVYRzRnSUNBZ0x5OGdUbVYzSUdaeVlXMWxJSFJwYldWY2JpQWdJQ0JwWmlBb1gyeHZiM0F1WDJGalkzVnRkV3hoZEc5eUlENDlJR1IwS1NCN1hHNGdJQ0FnSUNCM2FHbHNaU0FvWDJ4dmIzQXVYMkZqWTNWdGRXeGhkRzl5SUQ0OUlHUjBLU0I3WEc0Z0lDQWdJQ0FnSUY5c2IyOXdMbDloWTJOMWJYVnNZWFJ2Y2lBdFBTQmtkRnh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0JtYjNJZ0tHeGxkQ0JqYUdGeWRFbGtJRzltSUY5amFHRnlkRTFoY0NrZ2UxeHVJQ0FnSUNBZ0lDQmZZMmhoY25STllYQmJZMmhoY25SSlpGMHVjbVZ1WkdWeUtDbGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lGeHVJQ0FnSUgxY2JpQWdJQ0JmYkc5dmNDaHViM2NwWEc0Z0lIMHBYRzU5WEc1Y2JtTnZibk4wSUdOb1lYSjBlQ0E5SUh0Y2JpQWdZMjl1YzNSaGJuUTZJSHRjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJVYUdVZ2MzQmxZMmxoYkNCRFQxVk9WQ0JwWkdWdWRHbG1hV1Z5SUdadmNpQmpZV3hqZFd4aGRHbHVaeUIzYUdsc1pTQnlaVzVrWlhKcGJtZGNiaUFnSUNBZ0tpOWNiaUFnSUNCRFQxVk9WRG9nZFhWcFpIWXhLQ2xjYmlBZ2ZTeGNibHh1SUNBdktpcGNiaUFnSUNvZ1UzQmhkMjRnWVNCamFHRnlkQ0JwYm5OMFlXNWpaVnh1SUNBZ0tpOWNiaUFnYzNCaGQyNDZJQ2dwSUQwK0lIdGNiaUFnSUNBdkx5QkRjbVZoZEdVZ2MzUnZjbVVnYjI1c2VTQjNhR1Z1SUhSb1pTQm1hWEp6ZENCamFHRnlkQ0JwY3lCaFltOTFkQ0IwYnlCaVpTQnpjR0YzYm1Wa1hHNGdJQ0FnYVdZZ0tDRmZjM1J2Y21VcElIdGNiaUFnSUNBZ0lGOXpkRzl5WlNBOUlHTnlaV0YwWlZOMGIzSmxLR055WldGMFpWSmxaSFZqWlhJb0tTbGNiaUFnSUNCOVhHNWNiaUFnSUNCc1pYUWdibVYzUTJoaGNuUWdQU0J1WlhjZ1EyaGhjblFvWDNOMGIzSmxLVnh1SUNBZ0lGOWphR0Z5ZEUxaGNGdHVaWGREYUdGeWRDNXBaRjBnUFNCdVpYZERhR0Z5ZEZ4dVhHNGdJQ0FnY21WMGRYSnVJRzVsZDBOb1lYSjBYRzRnSUgwc1hHNWNiaUFnTHlvcVhHNGdJQ0FxSUVScGMzQnZjMlVnWVNCamFHRnlkRnh1SUNBZ0tpOWNiaUFnWkdsemNHOXpaVG9nS0dOb1lYSjBLU0E5UGlCN1hHNGdJQ0FnYVdZZ0tDRmphR0Z5ZENCOGZDQWhYMk5vWVhKMFRXRndXMk5vWVhKMExtbGtYU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdTV1lnZDJVZ1lYSmxJR2R2YVc1bklIUnZJR1JwYzNCdmMyVWdkR2hsSUd4aGMzUWdZMmhoY25SY2JpQWdJQ0JwWmlBb1QySnFaV04wTG10bGVYTW9YMk5vWVhKMFRXRndLUzVzWlc1bmRHZ2dQVDA5SURFZ1hHNGdJQ0FnSUNBbUppQmZZMmhoY25STllYQmJZMmhoY25RdWFXUmRLU0I3WEc0Z0lDQWdJQ0IzYVc1a2IzY3VZMkZ1WTJWc1FXNXBiV0YwYVc5dVJuSmhiV1VvWDJ4dmIzQXVZVzVwYldGMGFXOXVTMlY1S1Z4dUlDQWdJQ0FnWDNOMGIzSmxJRDBnYm5Wc2JGeHVJQ0FnSUgxY2JseHVJQ0FnSUY5amFHRnlkRTFoY0Z0amFHRnlkQzVwWkYwZ1BTQjFibVJsWm1sdVpXUmNiaUFnSUNCamFHRnlkQzVrYVhOd2IzTmxLQ2xjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYUdGeWRIaGNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5emNtTXZZMmhoY25SNExtcHpJaXdpTHk4Z1ZXNXBjWFZsSUVsRUlHTnlaV0YwYVc5dUlISmxjWFZwY21WeklHRWdhR2xuYUNCeGRXRnNhWFI1SUhKaGJtUnZiU0FqSUdkbGJtVnlZWFJ2Y2k0Z0lFbHVJSFJvWlZ4dUx5OGdZbkp2ZDNObGNpQjBhR2x6SUdseklHRWdiR2wwZEd4bElHTnZiWEJzYVdOaGRHVmtJR1IxWlNCMGJ5QjFibXR1YjNkdUlIRjFZV3hwZEhrZ2IyWWdUV0YwYUM1eVlXNWtiMjBvS1Z4dUx5OGdZVzVrSUdsdVkyOXVjMmx6ZEdWdWRDQnpkWEJ3YjNKMElHWnZjaUIwYUdVZ1lHTnllWEIwYjJBZ1FWQkpMaUFnVjJVZ1pHOGdkR2hsSUdKbGMzUWdkMlVnWTJGdUlIWnBZVnh1THk4Z1ptVmhkSFZ5WlMxa1pYUmxZM1JwYjI1Y2JuWmhjaUJ5Ym1jN1hHNWNiblpoY2lCamNubHdkRzhnUFNCbmJHOWlZV3d1WTNKNWNIUnZJSHg4SUdkc2IySmhiQzV0YzBOeWVYQjBienNnTHk4Z1ptOXlJRWxGSURFeFhHNXBaaUFvWTNKNWNIUnZJQ1ltSUdOeWVYQjBieTVuWlhSU1lXNWtiMjFXWVd4MVpYTXBJSHRjYmlBZ0x5OGdWMGhCVkZkSElHTnllWEIwYnlCU1RrY2dMU0JvZEhSd09pOHZkMmxyYVM1M2FHRjBkMmN1YjNKbkwzZHBhMmt2UTNKNWNIUnZYRzRnSUhaaGNpQnlibVJ6T0NBOUlHNWxkeUJWYVc1ME9FRnljbUY1S0RFMktUc2dMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRiR2x1WlNCdWJ5MTFibVJsWmx4dUlDQnlibWNnUFNCbWRXNWpkR2x2YmlCM2FHRjBkMmRTVGtjb0tTQjdYRzRnSUNBZ1kzSjVjSFJ2TG1kbGRGSmhibVJ2YlZaaGJIVmxjeWh5Ym1Sek9DazdYRzRnSUNBZ2NtVjBkWEp1SUhKdVpITTRPMXh1SUNCOU8xeHVmVnh1WEc1cFppQW9JWEp1WnlrZ2UxeHVJQ0F2THlCTllYUm9MbkpoYm1SdmJTZ3BMV0poYzJWa0lDaFNUa2NwWEc0Z0lDOHZYRzRnSUM4dklFbG1JR0ZzYkNCbGJITmxJR1poYVd4ekxDQjFjMlVnVFdGMGFDNXlZVzVrYjIwb0tTNGdJRWwwSjNNZ1ptRnpkQ3dnWW5WMElHbHpJRzltSUhWdWMzQmxZMmxtYVdWa1hHNGdJQzh2SUhGMVlXeHBkSGt1WEc0Z0lIWmhjaUJ5Ym1SeklEMGdibVYzSUVGeWNtRjVLREUyS1R0Y2JpQWdjbTVuSUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREFzSUhJN0lHa2dQQ0F4TmpzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JwWmlBb0tHa2dKaUF3ZURBektTQTlQVDBnTUNrZ2NpQTlJRTFoZEdndWNtRnVaRzl0S0NrZ0tpQXdlREV3TURBd01EQXdNRHRjYmlBZ0lDQWdJSEp1WkhOYmFWMGdQU0J5SUQ0K1BpQW9LR2tnSmlBd2VEQXpLU0E4UENBektTQW1JREI0Wm1ZN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSEp1WkhNN1hHNGdJSDA3WEc1OVhHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdjbTVuTzF4dVhHNWNibHh1THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWx4dUx5OGdMaTl1YjJSbFgyMXZaSFZzWlhNdmRYVnBaQzlzYVdJdmNtNW5MV0p5YjNkelpYSXVhbk5jYmk4dklHMXZaSFZzWlNCcFpDQTlJRFJjYmk4dklHMXZaSFZzWlNCamFIVnVhM01nUFNBd0lpd2lkbUZ5SUdjN1hISmNibHh5WEc0dkx5QlVhR2x6SUhkdmNtdHpJR2x1SUc1dmJpMXpkSEpwWTNRZ2JXOWtaVnh5WEc1bklEMGdLR1oxYm1OMGFXOXVLQ2tnZTF4eVhHNWNkSEpsZEhWeWJpQjBhR2x6TzF4eVhHNTlLU2dwTzF4eVhHNWNjbHh1ZEhKNUlIdGNjbHh1WEhRdkx5QlVhR2x6SUhkdmNtdHpJR2xtSUdWMllXd2dhWE1nWVd4c2IzZGxaQ0FvYzJWbElFTlRVQ2xjY2x4dVhIUm5JRDBnWnlCOGZDQkdkVzVqZEdsdmJpaGNJbkpsZEhWeWJpQjBhR2x6WENJcEtDa2dmSHdnS0RFc1pYWmhiQ2tvWENKMGFHbHpYQ0lwTzF4eVhHNTlJR05oZEdOb0tHVXBJSHRjY2x4dVhIUXZMeUJVYUdseklIZHZjbXR6SUdsbUlIUm9aU0IzYVc1a2IzY2djbVZtWlhKbGJtTmxJR2x6SUdGMllXbHNZV0pzWlZ4eVhHNWNkR2xtS0hSNWNHVnZaaUIzYVc1a2IzY2dQVDA5SUZ3aWIySnFaV04wWENJcFhISmNibHgwWEhSbklEMGdkMmx1Wkc5M08xeHlYRzU5WEhKY2JseHlYRzR2THlCbklHTmhiaUJ6ZEdsc2JDQmlaU0IxYm1SbFptbHVaV1FzSUdKMWRDQnViM1JvYVc1bklIUnZJR1J2SUdGaWIzVjBJR2wwTGk0dVhISmNiaTh2SUZkbElISmxkSFZ5YmlCMWJtUmxabWx1WldRc0lHbHVjM1JsWVdRZ2IyWWdibTkwYUdsdVp5Qm9aWEpsTENCemJ5QnBkQ2R6WEhKY2JpOHZJR1ZoYzJsbGNpQjBieUJvWVc1a2JHVWdkR2hwY3lCallYTmxMaUJwWmlnaFoyeHZZbUZzS1NCN0lDNHVMbjFjY2x4dVhISmNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdaenRjY2x4dVhHNWNibHh1THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWx4dUx5OGdLSGRsWW5CaFkyc3BMMkoxYVd4a2FXNHZaMnh2WW1Gc0xtcHpYRzR2THlCdGIyUjFiR1VnYVdRZ1BTQTFYRzR2THlCdGIyUjFiR1VnWTJoMWJtdHpJRDBnTUNJc0lpOHFLbHh1SUNvZ1EyOXVkbVZ5ZENCaGNuSmhlU0J2WmlBeE5pQmllWFJsSUhaaGJIVmxjeUIwYnlCVlZVbEVJSE4wY21sdVp5Qm1iM0p0WVhRZ2IyWWdkR2hsSUdadmNtMDZYRzRnS2lCWVdGaFlXRmhZV0MxWVdGaFlMVmhZV0ZndFdGaFlXQzFZV0ZoWVdGaFlXRmhZV0ZoY2JpQXFMMXh1ZG1GeUlHSjVkR1ZVYjBobGVDQTlJRnRkTzF4dVptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQXlOVFk3SUNzcmFTa2dlMXh1SUNCaWVYUmxWRzlJWlhoYmFWMGdQU0FvYVNBcklEQjRNVEF3S1M1MGIxTjBjbWx1WnlneE5pa3VjM1ZpYzNSeUtERXBPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmllWFJsYzFSdlZYVnBaQ2hpZFdZc0lHOW1abk5sZENrZ2UxeHVJQ0IyWVhJZ2FTQTlJRzltWm5ObGRDQjhmQ0F3TzF4dUlDQjJZWElnWW5Sb0lEMGdZbmwwWlZSdlNHVjRPMXh1SUNCeVpYUjFjbTRnWW5Sb1cySjFabHRwS3l0ZFhTQXJJR0owYUZ0aWRXWmJhU3NyWFYwZ0sxeHVJQ0FnSUNBZ0lDQWdJR0owYUZ0aWRXWmJhU3NyWFYwZ0t5QmlkR2hiWW5WbVcya3JLMTFkSUNzZ0p5MG5JQ3RjYmlBZ0lDQWdJQ0FnSUNCaWRHaGJZblZtVzJrcksxMWRJQ3NnWW5Sb1cySjFabHRwS3l0ZFhTQXJJQ2N0SnlBclhHNGdJQ0FnSUNBZ0lDQWdZblJvVzJKMVpsdHBLeXRkWFNBcklHSjBhRnRpZFdaYmFTc3JYVjBnS3lBbkxTY2dLMXh1SUNBZ0lDQWdJQ0FnSUdKMGFGdGlkV1piYVNzclhWMGdLeUJpZEdoYlluVm1XMmtySzExZElDc2dKeTBuSUN0Y2JpQWdJQ0FnSUNBZ0lDQmlkR2hiWW5WbVcya3JLMTFkSUNzZ1luUm9XMkoxWmx0cEt5dGRYU0FyWEc0Z0lDQWdJQ0FnSUNBZ1luUm9XMkoxWmx0cEt5dGRYU0FySUdKMGFGdGlkV1piYVNzclhWMGdLMXh1SUNBZ0lDQWdJQ0FnSUdKMGFGdGlkV1piYVNzclhWMGdLeUJpZEdoYlluVm1XMmtySzExZE8xeHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdKNWRHVnpWRzlWZFdsa08xeHVYRzVjYmx4dUx5OHZMeTh2THk4dkx5OHZMeTh2THk4dlhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVseHVMeThnTGk5dWIyUmxYMjF2WkhWc1pYTXZkWFZwWkM5c2FXSXZZbmwwWlhOVWIxVjFhV1F1YW5OY2JpOHZJRzF2WkhWc1pTQnBaQ0E5SURaY2JpOHZJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXdJaXdpWlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNCcGMwWjFibU4wYVc5dU9pQW9ablZ1WTNScGIyNVViME5vWldOcktTQTlQaUI3WEc0Z0lDQWdjbVYwZFhKdUlHWjFibU4wYVc5dVZHOURhR1ZqYXlCY2JpQWdJQ0FnSUNZbUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWRHOVRkSEpwYm1jdVkyRnNiQ2htZFc1amRHbHZibFJ2UTJobFkyc3BJRDA5UFNBblcyOWlhbVZqZENCR2RXNWpkR2x2YmwwblhHNGdJSDFjYm4xY2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTl6Y21NdmRYUnBiQzVxY3lJc0ltbHRjRzl5ZENCMWRXbGtkakVnWm5KdmJTQW5kWFZwWkM5Mk1TZGNibWx0Y0c5eWRDQjdZMjl0WW1sdVpWSmxaSFZqWlhJc0lHTnlaV0YwWlZKbFpIVmpaWEo5SUdaeWIyMGdKeTR2YzNSaGRHVk5ZVzVoWjJWeUoxeHVhVzF3YjNKMElHUmhkR0ZTWldSMVkyVnlJR1p5YjIwZ0p5NHZjbVZrZFdObGNuTXZaR0YwWVZKbFpIVmpaWEluWEc1cGJYQnZjblFnWm5KelVtVmtkV05sY2lCbWNtOXRJQ2N1TDNKbFpIVmpaWEp6TDJaeWMxSmxaSFZqWlhJblhHNXBiWEJ2Y25RZ2UxeHVJQ0J6ZEc5eVpWSmxabkpsYzJoY2JuMGdabkp2YlNBbkxpOWhZM1JwYjI1ekwzTjBiM0psUVdOMGFXOXVKMXh1YVcxd2IzSjBJSHRjYmlBZ2MyVjBVbVZ1WkdWeVpYSmNibjBnWm5KdmJTQW5MaTloWTNScGIyNXpMMk5vWVhKMFFXTjBhVzl1SjF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJEYUdGeWRDQjdYRzRnSUdOdmJuTjBjblZqZEc5eUlDaHpkRzl5WlNrZ2UxeHVJQ0FnSUhSb2FYTXVhV1FnUFNCMWRXbGtkakVvS1Z4dUlDQWdJSFJvYVhNdWMzUnZjbVVnUFNCemRHOXlaVnh1WEc0Z0lDQWdMeThnUVdSa0lISmxaSFZqWlhJZ2RHOGdjM1J2Y21WY2JpQWdJQ0IwYUdsekxuTjBiM0psTG1GemVXNWpVbVZrZFdObGNrMWhjRnQwYUdsekxtbGtYU0E5SUdOdmJXSnBibVZTWldSMVkyVnlLSHRjYmlBZ0lDQWdJR1JoZEdFNklHUmhkR0ZTWldSMVkyVnlMRnh1SUNBZ0lDQWdabkp6T2lCbWNuTlNaV1IxWTJWeVhHNGdJQ0FnZlNsY2JpQWdJQ0IwYUdsekxuTjBiM0psTG5KbGNHeGhZMlZTWldSMVkyVnlLR055WldGMFpWSmxaSFZqWlhJb2RHaHBjeTV6ZEc5eVpTNWhjM2x1WTFKbFpIVmpaWEpOWVhBcEtWeHVJQ0FnSUhSb2FYTXVjM1J2Y21VdVpHbHpjR0YwWTJnb2MzUnZjbVZTWldaeVpYTm9LQ2twWEc0Z0lIMWNibHh1SUNBdktpcGNiaUFnSUNvZ1IyVjBJSFJvWlNCemRHRjBaU0JtYjNJZ2RHaHBjeUJqYUdGeWRGeHVJQ0FnS2k5Y2JpQWdaMlYwVTNSaGRHVWdLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG5OMGIzSmxMbWRsZEZOMFlYUmxLSFJvYVhNdWFXUXBYRzRnSUgxY2JseHVJQ0F2S2lwY2JpQWdJQ29nVTJWMElIUm9aU0J5Wlc1a1pYSmxjaUJtYjNJZ2RHaHBjeUJqYUdGeWRGeHVJQ0FnS2lCY2JpQWdJQ29nUUhCaGNtRnRJSHR6ZEhKcGJtZDlJSEpsYm1SbGNtVnlJRnh1SUNBZ0tpOWNiaUFnYzJWMFVtVnVaR1Z5WlhJZ0tISmxibVJsY21WeUtTQjdYRzRnSUNBZ2RHaHBjeTV6ZEc5eVpTNWthWE53WVhSamFDaHpaWFJTWlc1a1pYSmxjaWgwYUdsekxtbGtMQ0J5Wlc1a1pYSmxjaWtwWEc0Z0lIMWNibHh1SUNBdktpcGNiaUFnSUNvZ1VtVnVaR1Z5SUdFZ1kyaGhjblFnZDJsMGFDQm5hWFpsYmlCamIyNW1hV2RjYmlBZ0lDb3ZYRzRnSUhKbGJtUmxjaUFvS1NCN1hHNGdJQ0FnYVdZZ0tIUm9hWE11YVhORWFYSjBlU2tnZTF4dVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1ZFOUVUem9nZDJsMGFDQnNZWEpuWlNCa1lYUmhJSE5qWVd4bExDQjBhR1VnUmxKVElHMWhlU0J1YjNRZ1ltVWdjbVZoWkhrZ2FuVnpkQ0I1WlhRdVhHNGdJQ0FnTHk4Z1YyVWdiV0Y1SUc1bFpXUWdkRzhnYUdGMlpTQnpiMjFsSUd0cGJtUWdiMllnZDJGcGRHbHVaeUJzYjJkcFl5QjBieUJ5Wlc1a1pYSWdhWFJjYmlBZ0lDQmpiMjV6ZENCbWNuTWdQU0IwYUdsekxuTjBiM0psTG1kbGRGTjBZWFJsS0hSb2FYTXVhV1FwTG1aeWMxeHVYRzRnSUNBZ0x5OGdWRTlFVHpvZ2FHOWpheUIxY0NCM2FYUm9JSEpsYm1SbGNtVnljeUIwYnlCeVpXNWtaWElnUmxKVFhHNGdJQ0FnY21WMGRYSnVJSFJvYVhOY2JpQWdmVnh1WEc0Z0lHUnBjM0JoZEdOb0lDaGhZM1JwYjI0cElIdGNiaUFnSUNCMGFHbHpMbk4wYjNKbExtUnBjM0JoZEdOb0tHRmpkR2x2YmlsY2JpQWdmVnh1WEc0Z0lITmxkRVJoZEdFZ0tHTm9ZWEowUkdGMFlTa2dlMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE5jYmlBZ2ZWeHVYRzRnSUhObGRFNWhiV1VnS0dOb1lYSjBUbUZ0WlNrZ2UxeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTmNiaUFnZlZ4dVhHNGdJQzh2SUZkb1pXNGdkR2hsY21VZ2FYTWdibThnYm5WdFpYSnBZeUJrWVhSaExDQjNaU0IzYVd4c0lIVnpaU0JrWldaaGRXeDBJRzFsWVhOMWNtVWdkRzhnY21WdVpHVnlJR05vWVhKMFhHNGdJSE5sZEVSbFptRjFiSFJOWldGemRYSmxJQ2hrWldaaGRXeDBUV1ZoYzNWeVpTQTlJR05vWVhKMGVDNWpiMjV6ZEdGdWRDNURUMVZPVkNrZ2UxeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTmNiaUFnZlZ4dVhHNGdJQzh2SUZSb1pTQmtZWFJoSUc5dUlHRjRhWE1nZDJsc2JDQmlaU0JuY205MWNHVmtJR0o1SUhSb1pTQnZjbVJsY2lCcGJpQm5hWFpsYmlCaGNuSmhlVnh1SUNCelpYUkhjbTkxY0dKNUlDaGhjM0JsWTNRc0lHZHliM1Z3WW5sektTQjdYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjMXh1SUNCOVhHNWNiaUFnTHk4Z1ZHaGxJSE5wZW1VZ1ptOXlJR0Y0YVhNZ2QybHNiQ0JpWlNCaGNIQnNhV1ZrSUc5dUlHRnNiQ0J2ZEdobGNpQmthVzFsYm5ScGIyNXpMaUJHYjNJZ1pYaGhiWEJzWlN3Z2FXNWNiaUFnTHk4Z2RHaHBjeUJqWVhObElIUm9aU0J6YVhwbElHOW1JSGdnYVhNZ01Dd2diV1ZoYm1sdVp5QjNaU0JrYjI0bmRDQnVaV1ZrSUhSdklISmxibVJsY2lCaGJua2diR1Z1WjNSb0lHOXVYRzRnSUM4dklIa2diM0lnZWlCaGVHbHpMaUJYWlNCM1lXNTBJSFJvWlNCb1pXbG5hSFFnYjJZZ1ltRnljeUIwYnlCaVpTQmtaWFJsY20xcGJtVmtJR0o1SUdSaGRHRWdiMjVzZVZ4dUlDQXZMeUJPYjNSbElIUm9ZWFFnZEdobElIVnVhWFFnWm05eUlITnBlbVVnYVhNZ1pHVjBaWEp0YVc1bFpDQmllU0IwYUdVZ2MybDZaU0J2WmlCMGFXTnJJR2x1ZEdWeWRtRnNjeUJ2Ymx4dUlDQXZMeUJ2ZEdobGNpQmhlR2x6TGlCSmJpQjBhR2x6SUdOaGMyVXNJR2xtSUhSb1pTQjBiM1JoYkNCc1pXNW5kR2dnYjJZZ2VDQmhlR2x6SUdseklERXdNSEI0TENCaGJtUWdkR2hsY21WY2JpQWdMeThnWVhKbElERXdJSFJwWTJ0ekxDQjBhR1Z1SUhSb1pTQjFibWwwSUd4bGJtZDBhQ0JwY3lBeE1IQjRJR1p2Y2lCNUlHRjRhWE11WEc0Z0lITmxkRk5wZW1VZ0tHRnpjR1ZqZEN3Z2RXNXBkRlpoYkhWbEtTQjdYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjMXh1SUNCOVhHNWNiaUFnTHk4Z1RtOTBaU0IwYUdGMElIUm9aU0IxYm1sMElHWnZjaUIwYVdOcklHbHpJR1JsZEdWeWJXbHVaV1FnWW5rZ2RHaGxJSE5wZW1VZ2IyWWdjbVZ1WkdWeUlISmxjM1ZzZENCdmJseHVJQ0F2THlCMGFHbHpJR0Y0YVhNdUlFbHVJSFJvYVhNZ1kyRnpaU3dnZDJVZ2NtVnVaR1Z5SUhOcGVtVWdiMllnZVNCaGN5QXhJSFZ1YVhRZ0tIZG9hV05vSUdseklIUm9aU0JwYm5SbGNuWmhiRnh1SUNBdkx5QnZaaUI0SUhScFkydHpLU3dnYUdWdVkyVWdNQzQxSUhkcGJHd2dZbVVnZEdobElHMXBaR1JzWlNCdlppQmlZWEp6SUNoa1pXWmhkV3gwS1M0Z1ZHaGxJRzl3ZEdsdmJtRnNJRnh1SUNBdkx5Qm1iM0p0WVhSWVZHbGpheUJtZFc1amRHbHZiaUJwY3lCMWMyVmtJSFJ2SUdadmNtMWhkQ0IwYUdVZ2RHbGpheUIyWVd4MVpWeHVJQ0J6WlhSVWFXTnJJQ2hoYzNCbFkzUXNJSFZ1YVhSV1lXeDFaU3dnWm05eWJXRjBSbTRwSUh0Y2JseHVJQ0FnSUhKbGRIVnliaUIwYUdselhHNGdJSDFjYmx4dUlDQnpaWFJEYjI1MFlXbHVaWElnS0dOdmJuUmhhVzVsY2lrZ2UxeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTmNiaUFnZlZ4dVhHNGdJSE5sZEZSb1pXMWxJQ2gwYUdWdFpTa2dlMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE5jYmlBZ2ZWeHVYRzRnSUhkaGRHTm9JQ2dwSUh0Y2JseHVJQ0FnSUhKbGRIVnliaUIwYUdselhHNGdJSDFjYmx4dUlDQXZLaXBjYmlBZ0lDb2dWR2hsSUdSbFlYUm9JRzltSUhSb2FYTWdZMmhoY25SY2JpQWdJQ292WEc0Z0lHUnBjM0J2YzJVZ0tDa2dlMXh1WEc0Z0lIMWNibjFjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXpjbU12UTJoaGNuUXVhbk1pTENKbGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJrWVhSaFVtVmtkV05sY2lBb2MzUmhkR1VnUFNCN2ZTd2dZV04wYVc5dUtTQjdYRzRnSUhKbGRIVnliaUJ6ZEdGMFpWeHVmVnh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwzTnlZeTl5WldSMVkyVnljeTlrWVhSaFVtVmtkV05sY2k1cWN5SXNJbVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlHWnljMUpsWkhWalpYSWdLSE4wWVhSbElEMGdlMzBzSUdGamRHbHZiaWtnZTF4dUlDQnlaWFIxY200Z2MzUmhkR1ZjYm4xY2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTl6Y21NdmNtVmtkV05sY25NdlpuSnpVbVZrZFdObGNpNXFjeUlzSW1WNGNHOXlkQ0JqYjI1emRDQlRWRTlTUlY5U1JVWlNSVk5JSUQwZ0oxTlVUMUpGWDFKRlJsSkZVMGduWEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCemRHOXlaVkpsWm5KbGMyZ2dLQ2tnZTF4dUlDQnlaWFIxY200Z2UxeHVJQ0FnSUhSNWNHVTZJRk5VVDFKRlgxSkZSbEpGVTBoY2JpQWdmVnh1ZlZ4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QXVMM055WXk5aFkzUnBiMjV6TDNOMGIzSmxRV04wYVc5dUxtcHpJaXdpWlhod2IzSjBJR052Ym5OMElGTkZWRjlTUlU1RVJWSkZVaUE5SUNkVFJWUmZVa1ZPUkVWU1JWSW5YRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJ6WlhSU1pXNWtaWEpsY2lBb0tTQjdYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdkSGx3WlRvZ1UwVlVYMUpGVGtSRlVrVlNYRzRnSUgxY2JuMWNibHh1WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWlBdkwxeHVMeThnTGk5emNtTXZZV04wYVc5dWN5OWphR0Z5ZEVGamRHbHZiaTVxY3lKZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZGlzdC9jaGFydHguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==