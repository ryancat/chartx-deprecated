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

var chartData = {
  x: {
    size: 1,
    origin: 'middle',
    data: [1, 2, 3]
  },
  y: {
    size: 1,
    origin: 'end',
    data: [1, 2, 3]
  },
  z: {}
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stateManager = __webpack_require__(2);

/**
 * The animation loop key for cancel animation
 */
var _animationLoopKey = null;
/**
 * Accumulator for time-based animation
 */
var _accumulator = 0;
/**
 * The default fps
 */
var _fps = 60;
/**
 * The store for game
 */
var _store = {};

var _updaterMap = {};

var _rendererMap = {};

/**
 * Trigger game loop
 */
function _loop(lastTimestamp) {
  _animationLoopKey = window.requestAnimationFrame(function () {
    var now = Date.now();
    var dt = 1000 / _fps;
    _accumulator += now - lastTimestamp;

    if (_accumulator >= dt) {
      while (_accumulator >= dt) {
        _accumulator -= dt;
      }
      for (var key in _rendererMap) {
        var renderer = _rendererMap[key];
        renderer.renderState = renderer(renderer.renderState, renderer.finalRenderState, dt);
      }
    }
    _loop(now);
  });
}

var gamux = {
  config: function config() {
    var _config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // Config the private globals
    _fps = _config.fps || _fps;

    var container = _config.container;

    // Create game layers
    _config.layers.forEach(function (layer) {
      var canvas = document.createElement('canvas');
      container.appendChild(canvas);

      _updaterMap[layer.name] = layer.updater;
      _rendererMap[layer.name] = layer.render.bind(null, canvas);
    });

    // Create game store
    _store = (0, _stateManager.createStore)((0, _stateManager.combineReducer)(_config.reducerMap, (0, _stateManager.combineUpdater)(_updaterMap, _rendererMap)));
    if (_config.init) {
      _config.init(_store.getState());
    }
  },

  getState: function getState(stateKey) {
    return _store.getState(stateKey);
  },

  layers: {},

  start: function start() {
    _loop(Date.now());
  },

  dispatch: function dispatch(action) {
    _store.dispatch(action);
  }

  // *
  //  * Game will be available once configured
};

exports.default = gamux;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = createStore;
exports.combineReducer = combineReducer;
exports.combineUpdater = combineUpdater;
function createStore(reducer) {
  // Init state
  var state = reducer();

  return {
    /**
     * Dispatch action to trigger state changes
     */
    dispatch: function dispatch() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (process.env.code === 'DEV') {
        // log actions in console
        console.group(action.type);
        console.info('%cbefore:', 'color: green', state);
        console.info('%caction:', 'color: red', action);
      }

      // Update state
      state = reducer(state, action);
      // State manager doesn't care about noticing
      // game to update state. Instead reducers
      // should set dirty state for game loop to
      // trigger update

      if (process.env.code === 'DEV') {
        // log actions in console
        console.info('%cafter:', 'color: green', state);
        console.groupEnd();
      }
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

// Assume the recuerMap is a flat map to all reducers
function combineReducer() {
  var reducerMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var updater = arguments[1];


  // Generate a combined reducer function
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var newState = {},
        dirtyKeys = [];

    // Spread the action to all reducers inside the combined one
    for (var key in reducerMap) {
      // Pass the whole state down as argument for
      // cross state key access
      var reducedState = reducerMap[key](state[key], action, state);

      if (reducedState !== state[key]) {
        dirtyKeys.push(key);
      }

      newState[key] = reducedState;
    }

    // Call update function for each reduced state
    updater(newState, dirtyKeys);

    // dirtyKeys.forEach((dirtyKey) => {
    //   updaterMap[dirtyKey](newState, dirtyKey)
    // })

    return newState;
  };
}

function combineUpdater() {
  var updaterMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var rendererMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // Generate combined updater function for all updaters
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var dirtyKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var newFinalRenderState = {};
    for (var key in updaterMap) {
      // Compute the final render state and pass into renderer
      rendererMap[key].finalRenderState = updaterMap[key](rendererMap[key].finalRenderState, state, dirtyKeys);
    }
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGE0ZmQ4MjNiZGJhYmNkYmRjZjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJ0eC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOlsiX2FuaW1hdGlvbkxvb3BLZXkiLCJfYWNjdW11bGF0b3IiLCJfZnBzIiwiX3N0b3JlIiwiX3VwZGF0ZXJNYXAiLCJfcmVuZGVyZXJNYXAiLCJfbG9vcCIsImxhc3RUaW1lc3RhbXAiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJub3ciLCJEYXRlIiwiZHQiLCJrZXkiLCJyZW5kZXJlciIsInJlbmRlclN0YXRlIiwiZmluYWxSZW5kZXJTdGF0ZSIsImdhbXV4IiwiY29uZmlnIiwiZnBzIiwiY29udGFpbmVyIiwibGF5ZXJzIiwiZm9yRWFjaCIsImxheWVyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJuYW1lIiwidXBkYXRlciIsInJlbmRlciIsImJpbmQiLCJyZWR1Y2VyTWFwIiwiaW5pdCIsImdldFN0YXRlIiwic3RhdGVLZXkiLCJzdGFydCIsImRpc3BhdGNoIiwiYWN0aW9uIiwiY3JlYXRlU3RvcmUiLCJjb21iaW5lUmVkdWNlciIsImNvbWJpbmVVcGRhdGVyIiwicmVkdWNlciIsInN0YXRlIiwicHJvY2VzcyIsImVudiIsImNvZGUiLCJjb25zb2xlIiwiZ3JvdXAiLCJ0eXBlIiwiaW5mbyIsImdyb3VwRW5kIiwibmV3U3RhdGUiLCJkaXJ0eUtleXMiLCJyZWR1Y2VkU3RhdGUiLCJwdXNoIiwidXBkYXRlck1hcCIsInJlbmRlcmVyTWFwIiwibmV3RmluYWxSZW5kZXJTdGF0ZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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dHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkYTRmZDgyM2JkYmFiY2RiZGNmMSIsImltcG9ydCB7Y29tYmluZVJlZHVjZXIsIGNyZWF0ZVN0b3JlLCBjb21iaW5lVXBkYXRlcn0gZnJvbSAnLi9zdGF0ZU1hbmFnZXInXG5cbi8qKlxuICogVGhlIGFuaW1hdGlvbiBsb29wIGtleSBmb3IgY2FuY2VsIGFuaW1hdGlvblxuICovXG5sZXQgX2FuaW1hdGlvbkxvb3BLZXkgPSBudWxsXG4vKipcbiAqIEFjY3VtdWxhdG9yIGZvciB0aW1lLWJhc2VkIGFuaW1hdGlvblxuICovXG5sZXQgX2FjY3VtdWxhdG9yID0gMFxuLyoqXG4gKiBUaGUgZGVmYXVsdCBmcHNcbiAqL1xubGV0IF9mcHMgPSA2MFxuLyoqXG4gKiBUaGUgc3RvcmUgZm9yIGdhbWVcbiAqL1xubGV0IF9zdG9yZSA9IHt9XG5cbmxldCBfdXBkYXRlck1hcCA9IHt9XG5cbmxldCBfcmVuZGVyZXJNYXAgPSB7fVxuXG4vKipcbiAqIFRyaWdnZXIgZ2FtZSBsb29wXG4gKi9cbmZ1bmN0aW9uIF9sb29wIChsYXN0VGltZXN0YW1wKSB7XG4gIF9hbmltYXRpb25Mb29wS2V5ID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgIGNvbnN0IGR0ID0gMTAwMCAvIF9mcHNcbiAgICBfYWNjdW11bGF0b3IgKz0gbm93IC0gbGFzdFRpbWVzdGFtcFxuXG4gICAgaWYgKF9hY2N1bXVsYXRvciA+PSBkdCkge1xuICAgICAgd2hpbGUgKF9hY2N1bXVsYXRvciA+PSBkdCkge1xuICAgICAgICBfYWNjdW11bGF0b3IgLT0gZHRcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGtleSBpbiBfcmVuZGVyZXJNYXApIHtcbiAgICAgICAgbGV0IHJlbmRlcmVyID0gX3JlbmRlcmVyTWFwW2tleV1cbiAgICAgICAgcmVuZGVyZXIucmVuZGVyU3RhdGUgPSByZW5kZXJlcihyZW5kZXJlci5yZW5kZXJTdGF0ZSwgcmVuZGVyZXIuZmluYWxSZW5kZXJTdGF0ZSwgZHQpXG4gICAgICB9XG4gICAgfVxuICAgIF9sb29wKG5vdylcbiAgfSlcbn1cblxuY29uc3QgZ2FtdXggPSB7XG4gIGNvbmZpZzogKGNvbmZpZyA9IHt9KSA9PiB7XG4gICAgLy8gQ29uZmlnIHRoZSBwcml2YXRlIGdsb2JhbHNcbiAgICBfZnBzID0gY29uZmlnLmZwcyB8fCBfZnBzXG5cbiAgICBsZXQgY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lclxuXG4gICAgLy8gQ3JlYXRlIGdhbWUgbGF5ZXJzXG4gICAgY29uZmlnLmxheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xuICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FudmFzKVxuXG4gICAgICBfdXBkYXRlck1hcFtsYXllci5uYW1lXSA9IGxheWVyLnVwZGF0ZXJcbiAgICAgIF9yZW5kZXJlck1hcFtsYXllci5uYW1lXSA9IGxheWVyLnJlbmRlci5iaW5kKG51bGwsIGNhbnZhcylcbiAgICB9KVxuXG4gICAgLy8gQ3JlYXRlIGdhbWUgc3RvcmVcbiAgICBfc3RvcmUgPSBjcmVhdGVTdG9yZShjb21iaW5lUmVkdWNlcihjb25maWcucmVkdWNlck1hcCwgY29tYmluZVVwZGF0ZXIoX3VwZGF0ZXJNYXAsIF9yZW5kZXJlck1hcCkpKVxuICAgIGlmIChjb25maWcuaW5pdCkge1xuICAgICAgY29uZmlnLmluaXQoX3N0b3JlLmdldFN0YXRlKCkpXG4gICAgfVxuICB9LFxuXG4gIGdldFN0YXRlOiAoc3RhdGVLZXkpID0+IHtcbiAgICByZXR1cm4gX3N0b3JlLmdldFN0YXRlKHN0YXRlS2V5KVxuICB9LFxuXG4gIGxheWVyczoge30sXG5cbiAgc3RhcnQ6ICgpID0+IHtcbiAgICBfbG9vcChEYXRlLm5vdygpKVxuICB9LFxuXG4gIGRpc3BhdGNoOiAoYWN0aW9uKSA9PiB7XG4gICAgX3N0b3JlLmRpc3BhdGNoKGFjdGlvbilcbiAgfVxuXG4gIC8vICpcbiAgLy8gICogR2FtZSB3aWxsIGJlIGF2YWlsYWJsZSBvbmNlIGNvbmZpZ3VyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtdXhcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jaGFydHguanMiLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RvcmUgKHJlZHVjZXIpIHtcbiAgLy8gSW5pdCBzdGF0ZVxuICBsZXQgc3RhdGUgPSByZWR1Y2VyKClcblxuICByZXR1cm4ge1xuICAgIC8qKlxuICAgICAqIERpc3BhdGNoIGFjdGlvbiB0byB0cmlnZ2VyIHN0YXRlIGNoYW5nZXNcbiAgICAgKi9cbiAgICBkaXNwYXRjaDogKGFjdGlvbiA9IHt9KSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuY29kZSA9PT0gJ0RFVicpIHtcbiAgICAgICAgLy8gbG9nIGFjdGlvbnMgaW4gY29uc29sZVxuICAgICAgICBjb25zb2xlLmdyb3VwKGFjdGlvbi50eXBlKVxuICAgICAgICBjb25zb2xlLmluZm8oJyVjYmVmb3JlOicsICdjb2xvcjogZ3JlZW4nLCBzdGF0ZSlcbiAgICAgICAgY29uc29sZS5pbmZvKCclY2FjdGlvbjonLCAnY29sb3I6IHJlZCcsIGFjdGlvbilcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gVXBkYXRlIHN0YXRlXG4gICAgICBzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbilcbiAgICAgIC8vIFN0YXRlIG1hbmFnZXIgZG9lc24ndCBjYXJlIGFib3V0IG5vdGljaW5nXG4gICAgICAvLyBnYW1lIHRvIHVwZGF0ZSBzdGF0ZS4gSW5zdGVhZCByZWR1Y2Vyc1xuICAgICAgLy8gc2hvdWxkIHNldCBkaXJ0eSBzdGF0ZSBmb3IgZ2FtZSBsb29wIHRvXG4gICAgICAvLyB0cmlnZ2VyIHVwZGF0ZVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuY29kZSA9PT0gJ0RFVicpIHtcbiAgICAgICAgLy8gbG9nIGFjdGlvbnMgaW4gY29uc29sZVxuICAgICAgICBjb25zb2xlLmluZm8oJyVjYWZ0ZXI6JywgJ2NvbG9yOiBncmVlbicsIHN0YXRlKVxuICAgICAgICBjb25zb2xlLmdyb3VwRW5kKClcbiAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgY3VycmVudCBzdGF0ZSBmb3IgZ2l2ZW4ga2V5XG4gICAgICogVGhpcyBpcyB0byBhbGxvdyBhcHBsaWNhdGlvbiB0byAnY29ubmVjdCcgdG8gc3RhdGVcbiAgICAgKi9cbiAgICBnZXRTdGF0ZTogKHN0YXRlS2V5KSA9PiB7XG4gICAgICBpZiAoIXN0YXRlS2V5KSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVtzdGF0ZUtleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQXNzdW1lIHRoZSByZWN1ZXJNYXAgaXMgYSBmbGF0IG1hcCB0byBhbGwgcmVkdWNlcnNcbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lUmVkdWNlciAocmVkdWNlck1hcCA9IHt9LCB1cGRhdGVyKSB7XG5cbiAgLy8gR2VuZXJhdGUgYSBjb21iaW5lZCByZWR1Y2VyIGZ1bmN0aW9uXG4gIHJldHVybiAoc3RhdGUgPSB7fSwgYWN0aW9uID0ge30pID0+IHtcbiAgICBsZXQgbmV3U3RhdGUgPSB7fSxcbiAgICAgICAgZGlydHlLZXlzID0gW11cblxuICAgIC8vIFNwcmVhZCB0aGUgYWN0aW9uIHRvIGFsbCByZWR1Y2VycyBpbnNpZGUgdGhlIGNvbWJpbmVkIG9uZVxuICAgIGZvciAobGV0IGtleSBpbiByZWR1Y2VyTWFwKSB7XG4gICAgICAvLyBQYXNzIHRoZSB3aG9sZSBzdGF0ZSBkb3duIGFzIGFyZ3VtZW50IGZvclxuICAgICAgLy8gY3Jvc3Mgc3RhdGUga2V5IGFjY2Vzc1xuICAgICAgbGV0IHJlZHVjZWRTdGF0ZSA9IHJlZHVjZXJNYXBba2V5XShzdGF0ZVtrZXldLCBhY3Rpb24sIHN0YXRlKVxuXG4gICAgICBpZiAocmVkdWNlZFN0YXRlICE9PSBzdGF0ZVtrZXldKSB7XG4gICAgICAgIGRpcnR5S2V5cy5wdXNoKGtleSlcbiAgICAgIH1cblxuICAgICAgbmV3U3RhdGVba2V5XSA9IHJlZHVjZWRTdGF0ZVxuICAgIH1cblxuICAgIC8vIENhbGwgdXBkYXRlIGZ1bmN0aW9uIGZvciBlYWNoIHJlZHVjZWQgc3RhdGVcbiAgICB1cGRhdGVyKG5ld1N0YXRlLCBkaXJ0eUtleXMpXG5cbiAgICAvLyBkaXJ0eUtleXMuZm9yRWFjaCgoZGlydHlLZXkpID0+IHtcbiAgICAvLyAgIHVwZGF0ZXJNYXBbZGlydHlLZXldKG5ld1N0YXRlLCBkaXJ0eUtleSlcbiAgICAvLyB9KVxuXG4gICAgcmV0dXJuIG5ld1N0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVVcGRhdGVyICh1cGRhdGVyTWFwID0ge30sIHJlbmRlcmVyTWFwID0ge30pIHtcbiAgLy8gR2VuZXJhdGUgY29tYmluZWQgdXBkYXRlciBmdW5jdGlvbiBmb3IgYWxsIHVwZGF0ZXJzXG4gIHJldHVybiAoc3RhdGUgPSB7fSwgZGlydHlLZXlzID0gW10pID0+IHtcbiAgICBsZXQgbmV3RmluYWxSZW5kZXJTdGF0ZSA9IHt9XG4gICAgZm9yIChsZXQga2V5IGluIHVwZGF0ZXJNYXApIHtcbiAgICAgIC8vIENvbXB1dGUgdGhlIGZpbmFsIHJlbmRlciBzdGF0ZSBhbmQgcGFzcyBpbnRvIHJlbmRlcmVyXG4gICAgICByZW5kZXJlck1hcFtrZXldLmZpbmFsUmVuZGVyU3RhdGUgPSB1cGRhdGVyTWFwW2tleV0ocmVuZGVyZXJNYXBba2V5XS5maW5hbFJlbmRlclN0YXRlLCBzdGF0ZSwgZGlydHlLZXlzKVxuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZU1hbmFnZXIuanMiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzcxZjdmNTFhOTNmYzc1MGMyNmUiLCJ3ZWJwYWNrOi8vLy4vZGVtby9iYXJDaGFydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2NoYXJ0eC5qcyJdLCJuYW1lcyI6WyJjaGFydENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGFydERhdGEiLCJ4Iiwic2l6ZSIsIm9yaWdpbiIsImRhdGEiLCJ5IiwieiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBOzs7Ozs7QUFFQSxJQUFNQSxpQkFBaUJDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBdkI7O0FBRUEsSUFBSUMsWUFBWTtBQUNkQyxLQUFHO0FBQ0RDLFVBQU0sQ0FETDtBQUVEQyxZQUFRLFFBRlA7QUFHREMsVUFBTSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUDtBQUhMLEdBRFc7QUFNZEMsS0FBRztBQUNESCxVQUFNLENBREw7QUFFREMsWUFBUSxLQUZQO0FBR0RDLFVBQU0sQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVA7QUFITCxHQU5XO0FBV2RFLEtBQUc7QUFYVyxDQUFoQixDOzs7Ozs7QUNKQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCLEVBQUU7QUFDL0QseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCwrREFBK0Q7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxZQUFZOztBQUVaO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUIsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7O0FBR3RDLE9BQU87QUFDUDtBQUNBLDJDQUEyQyxjQUFjLG16dEIiLCJmaWxlIjoiZGVtby9iYXJDaGFydC9kaXN0L2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM3MWY3ZjUxYTkzZmM3NTBjMjZlIiwiaW1wb3J0IGNoYXJ0eCBmcm9tICcuLi8uLi9kaXN0L2NoYXJ0eCdcblxuY29uc3QgY2hhcnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG5cbmxldCBjaGFydERhdGEgPSB7XG4gIHg6IHtcbiAgICBzaXplOiAxLFxuICAgIG9yaWdpbjogJ21pZGRsZScsXG4gICAgZGF0YTogWzEsIDIsIDNdXG4gIH0sXG4gIHk6IHtcbiAgICBzaXplOiAxLFxuICAgIG9yaWdpbjogJ2VuZCcsXG4gICAgZGF0YTogWzEsIDIsIDNdXG4gIH0sXG4gIHo6IHt9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9iYXJDaGFydC9pbmRleC5qcyIsIi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zdGF0ZU1hbmFnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG4vKipcbiAqIFRoZSBhbmltYXRpb24gbG9vcCBrZXkgZm9yIGNhbmNlbCBhbmltYXRpb25cbiAqL1xudmFyIF9hbmltYXRpb25Mb29wS2V5ID0gbnVsbDtcbi8qKlxuICogQWNjdW11bGF0b3IgZm9yIHRpbWUtYmFzZWQgYW5pbWF0aW9uXG4gKi9cbnZhciBfYWNjdW11bGF0b3IgPSAwO1xuLyoqXG4gKiBUaGUgZGVmYXVsdCBmcHNcbiAqL1xudmFyIF9mcHMgPSA2MDtcbi8qKlxuICogVGhlIHN0b3JlIGZvciBnYW1lXG4gKi9cbnZhciBfc3RvcmUgPSB7fTtcblxudmFyIF91cGRhdGVyTWFwID0ge307XG5cbnZhciBfcmVuZGVyZXJNYXAgPSB7fTtcblxuLyoqXG4gKiBUcmlnZ2VyIGdhbWUgbG9vcFxuICovXG5mdW5jdGlvbiBfbG9vcChsYXN0VGltZXN0YW1wKSB7XG4gIF9hbmltYXRpb25Mb29wS2V5ID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgdmFyIGR0ID0gMTAwMCAvIF9mcHM7XG4gICAgX2FjY3VtdWxhdG9yICs9IG5vdyAtIGxhc3RUaW1lc3RhbXA7XG5cbiAgICBpZiAoX2FjY3VtdWxhdG9yID49IGR0KSB7XG4gICAgICB3aGlsZSAoX2FjY3VtdWxhdG9yID49IGR0KSB7XG4gICAgICAgIF9hY2N1bXVsYXRvciAtPSBkdDtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBfcmVuZGVyZXJNYXApIHtcbiAgICAgICAgdmFyIHJlbmRlcmVyID0gX3JlbmRlcmVyTWFwW2tleV07XG4gICAgICAgIHJlbmRlcmVyLnJlbmRlclN0YXRlID0gcmVuZGVyZXIocmVuZGVyZXIucmVuZGVyU3RhdGUsIHJlbmRlcmVyLmZpbmFsUmVuZGVyU3RhdGUsIGR0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgX2xvb3Aobm93KTtcbiAgfSk7XG59XG5cbnZhciBnYW11eCA9IHtcbiAgY29uZmlnOiBmdW5jdGlvbiBjb25maWcoKSB7XG4gICAgdmFyIF9jb25maWcgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgLy8gQ29uZmlnIHRoZSBwcml2YXRlIGdsb2JhbHNcbiAgICBfZnBzID0gX2NvbmZpZy5mcHMgfHwgX2ZwcztcblxuICAgIHZhciBjb250YWluZXIgPSBfY29uZmlnLmNvbnRhaW5lcjtcblxuICAgIC8vIENyZWF0ZSBnYW1lIGxheWVyc1xuICAgIF9jb25maWcubGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKGxheWVyKSB7XG4gICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FudmFzKTtcblxuICAgICAgX3VwZGF0ZXJNYXBbbGF5ZXIubmFtZV0gPSBsYXllci51cGRhdGVyO1xuICAgICAgX3JlbmRlcmVyTWFwW2xheWVyLm5hbWVdID0gbGF5ZXIucmVuZGVyLmJpbmQobnVsbCwgY2FudmFzKTtcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBnYW1lIHN0b3JlXG4gICAgX3N0b3JlID0gKDAsIF9zdGF0ZU1hbmFnZXIuY3JlYXRlU3RvcmUpKCgwLCBfc3RhdGVNYW5hZ2VyLmNvbWJpbmVSZWR1Y2VyKShfY29uZmlnLnJlZHVjZXJNYXAsICgwLCBfc3RhdGVNYW5hZ2VyLmNvbWJpbmVVcGRhdGVyKShfdXBkYXRlck1hcCwgX3JlbmRlcmVyTWFwKSkpO1xuICAgIGlmIChfY29uZmlnLmluaXQpIHtcbiAgICAgIF9jb25maWcuaW5pdChfc3RvcmUuZ2V0U3RhdGUoKSk7XG4gICAgfVxuICB9LFxuXG4gIGdldFN0YXRlOiBmdW5jdGlvbiBnZXRTdGF0ZShzdGF0ZUtleSkge1xuICAgIHJldHVybiBfc3RvcmUuZ2V0U3RhdGUoc3RhdGVLZXkpO1xuICB9LFxuXG4gIGxheWVyczoge30sXG5cbiAgc3RhcnQ6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIF9sb29wKERhdGUubm93KCkpO1xuICB9LFxuXG4gIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBfc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgfVxuXG4gIC8vICpcbiAgLy8gICogR2FtZSB3aWxsIGJlIGF2YWlsYWJsZSBvbmNlIGNvbmZpZ3VyZWRcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGdhbXV4O1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24ocHJvY2Vzcykge1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jcmVhdGVTdG9yZSA9IGNyZWF0ZVN0b3JlO1xuZXhwb3J0cy5jb21iaW5lUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2VyO1xuZXhwb3J0cy5jb21iaW5lVXBkYXRlciA9IGNvbWJpbmVVcGRhdGVyO1xuZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlcikge1xuICAvLyBJbml0IHN0YXRlXG4gIHZhciBzdGF0ZSA9IHJlZHVjZXIoKTtcblxuICByZXR1cm4ge1xuICAgIC8qKlxuICAgICAqIERpc3BhdGNoIGFjdGlvbiB0byB0cmlnZ2VyIHN0YXRlIGNoYW5nZXNcbiAgICAgKi9cbiAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52LmNvZGUgPT09ICdERVYnKSB7XG4gICAgICAgIC8vIGxvZyBhY3Rpb25zIGluIGNvbnNvbGVcbiAgICAgICAgY29uc29sZS5ncm91cChhY3Rpb24udHlwZSk7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnJWNiZWZvcmU6JywgJ2NvbG9yOiBncmVlbicsIHN0YXRlKTtcbiAgICAgICAgY29uc29sZS5pbmZvKCclY2FjdGlvbjonLCAnY29sb3I6IHJlZCcsIGFjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSBzdGF0ZVxuICAgICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgICAgLy8gU3RhdGUgbWFuYWdlciBkb2Vzbid0IGNhcmUgYWJvdXQgbm90aWNpbmdcbiAgICAgIC8vIGdhbWUgdG8gdXBkYXRlIHN0YXRlLiBJbnN0ZWFkIHJlZHVjZXJzXG4gICAgICAvLyBzaG91bGQgc2V0IGRpcnR5IHN0YXRlIGZvciBnYW1lIGxvb3AgdG9cbiAgICAgIC8vIHRyaWdnZXIgdXBkYXRlXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5jb2RlID09PSAnREVWJykge1xuICAgICAgICAvLyBsb2cgYWN0aW9ucyBpbiBjb25zb2xlXG4gICAgICAgIGNvbnNvbGUuaW5mbygnJWNhZnRlcjonLCAnY29sb3I6IGdyZWVuJywgc3RhdGUpO1xuICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUgZm9yIGdpdmVuIGtleVxuICAgICAqIFRoaXMgaXMgdG8gYWxsb3cgYXBwbGljYXRpb24gdG8gJ2Nvbm5lY3QnIHRvIHN0YXRlXG4gICAgICovXG4gICAgZ2V0U3RhdGU6IGZ1bmN0aW9uIGdldFN0YXRlKHN0YXRlS2V5KSB7XG4gICAgICBpZiAoIXN0YXRlS2V5KSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVtzdGF0ZUtleV07XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG4vLyBBc3N1bWUgdGhlIHJlY3Vlck1hcCBpcyBhIGZsYXQgbWFwIHRvIGFsbCByZWR1Y2Vyc1xuZnVuY3Rpb24gY29tYmluZVJlZHVjZXIoKSB7XG4gIHZhciByZWR1Y2VyTWFwID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIHVwZGF0ZXIgPSBhcmd1bWVudHNbMV07XG5cblxuICAvLyBHZW5lcmF0ZSBhIGNvbWJpbmVkIHJlZHVjZXIgZnVuY3Rpb25cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgdmFyIG5ld1N0YXRlID0ge30sXG4gICAgICAgIGRpcnR5S2V5cyA9IFtdO1xuXG4gICAgLy8gU3ByZWFkIHRoZSBhY3Rpb24gdG8gYWxsIHJlZHVjZXJzIGluc2lkZSB0aGUgY29tYmluZWQgb25lXG4gICAgZm9yICh2YXIga2V5IGluIHJlZHVjZXJNYXApIHtcbiAgICAgIC8vIFBhc3MgdGhlIHdob2xlIHN0YXRlIGRvd24gYXMgYXJndW1lbnQgZm9yXG4gICAgICAvLyBjcm9zcyBzdGF0ZSBrZXkgYWNjZXNzXG4gICAgICB2YXIgcmVkdWNlZFN0YXRlID0gcmVkdWNlck1hcFtrZXldKHN0YXRlW2tleV0sIGFjdGlvbiwgc3RhdGUpO1xuXG4gICAgICBpZiAocmVkdWNlZFN0YXRlICE9PSBzdGF0ZVtrZXldKSB7XG4gICAgICAgIGRpcnR5S2V5cy5wdXNoKGtleSk7XG4gICAgICB9XG5cbiAgICAgIG5ld1N0YXRlW2tleV0gPSByZWR1Y2VkU3RhdGU7XG4gICAgfVxuXG4gICAgLy8gQ2FsbCB1cGRhdGUgZnVuY3Rpb24gZm9yIGVhY2ggcmVkdWNlZCBzdGF0ZVxuICAgIHVwZGF0ZXIobmV3U3RhdGUsIGRpcnR5S2V5cyk7XG5cbiAgICAvLyBkaXJ0eUtleXMuZm9yRWFjaCgoZGlydHlLZXkpID0+IHtcbiAgICAvLyAgIHVwZGF0ZXJNYXBbZGlydHlLZXldKG5ld1N0YXRlLCBkaXJ0eUtleSlcbiAgICAvLyB9KVxuXG4gICAgcmV0dXJuIG5ld1N0YXRlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb21iaW5lVXBkYXRlcigpIHtcbiAgdmFyIHVwZGF0ZXJNYXAgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgcmVuZGVyZXJNYXAgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gIC8vIEdlbmVyYXRlIGNvbWJpbmVkIHVwZGF0ZXIgZnVuY3Rpb24gZm9yIGFsbCB1cGRhdGVyc1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIGRpcnR5S2V5cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogW107XG5cbiAgICB2YXIgbmV3RmluYWxSZW5kZXJTdGF0ZSA9IHt9O1xuICAgIGZvciAodmFyIGtleSBpbiB1cGRhdGVyTWFwKSB7XG4gICAgICAvLyBDb21wdXRlIHRoZSBmaW5hbCByZW5kZXIgc3RhdGUgYW5kIHBhc3MgaW50byByZW5kZXJlclxuICAgICAgcmVuZGVyZXJNYXBba2V5XS5maW5hbFJlbmRlclN0YXRlID0gdXBkYXRlck1hcFtrZXldKHJlbmRlcmVyTWFwW2tleV0uZmluYWxSZW5kZXJTdGF0ZSwgc3RhdGUsIGRpcnR5S2V5cyk7XG4gICAgfVxuICB9O1xufVxuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18oMykpKVxuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFnWkdFMFptUTRNak5pWkdKaFltTmtZbVJqWmpFaUxDSjNaV0p3WVdOck9pOHZMeTR2YzNKakwyTm9ZWEowZUM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZjM1JoZEdWTllXNWhaMlZ5TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDI1dlpHVmZiVzlrZFd4bGN5OXdjbTlqWlhOekwySnliM2R6WlhJdWFuTWlYU3dpYm1GdFpYTWlPbHNpWDJGdWFXMWhkR2x2Ymt4dmIzQkxaWGtpTENKZllXTmpkVzExYkdGMGIzSWlMQ0pmWm5Ceklpd2lYM04wYjNKbElpd2lYM1Z3WkdGMFpYSk5ZWEFpTENKZmNtVnVaR1Z5WlhKTllYQWlMQ0pmYkc5dmNDSXNJbXhoYzNSVWFXMWxjM1JoYlhBaUxDSjNhVzVrYjNjaUxDSnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VpTENKdWIzY2lMQ0pFWVhSbElpd2laSFFpTENKclpYa2lMQ0p5Wlc1a1pYSmxjaUlzSW5KbGJtUmxjbE4wWVhSbElpd2labWx1WVd4U1pXNWtaWEpUZEdGMFpTSXNJbWRoYlhWNElpd2lZMjl1Wm1sbklpd2labkJ6SWl3aVkyOXVkR0ZwYm1WeUlpd2liR0Y1WlhKeklpd2labTl5UldGamFDSXNJbXhoZVdWeUlpd2lZMkZ1ZG1Geklpd2laRzlqZFcxbGJuUWlMQ0pqY21WaGRHVkZiR1Z0Wlc1MElpd2lZWEJ3Wlc1a1EyaHBiR1FpTENKdVlXMWxJaXdpZFhCa1lYUmxjaUlzSW5KbGJtUmxjaUlzSW1KcGJtUWlMQ0p5WldSMVkyVnlUV0Z3SWl3aWFXNXBkQ0lzSW1kbGRGTjBZWFJsSWl3aWMzUmhkR1ZMWlhraUxDSnpkR0Z5ZENJc0ltUnBjM0JoZEdOb0lpd2lZV04wYVc5dUlpd2lZM0psWVhSbFUzUnZjbVVpTENKamIyMWlhVzVsVW1Wa2RXTmxjaUlzSW1OdmJXSnBibVZWY0dSaGRHVnlJaXdpY21Wa2RXTmxjaUlzSW5OMFlYUmxJaXdpY0hKdlkyVnpjeUlzSW1WdWRpSXNJbU52WkdVaUxDSmpiMjV6YjJ4bElpd2laM0p2ZFhBaUxDSjBlWEJsSWl3aWFXNW1ieUlzSW1keWIzVndSVzVrSWl3aWJtVjNVM1JoZEdVaUxDSmthWEowZVV0bGVYTWlMQ0p5WldSMVkyVmtVM1JoZEdVaUxDSndkWE5vSWl3aWRYQmtZWFJsY2sxaGNDSXNJbkpsYm1SbGNtVnlUV0Z3SWl3aWJtVjNSbWx1WVd4U1pXNWtaWEpUZEdGMFpTSmRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96czdRVUZIUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeGhRVUZMTzBGQlEwdzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHRRMEZCTWtJc01FSkJRVEJDTEVWQlFVVTdRVUZEZGtRc2VVTkJRV2xETEdWQlFXVTdRVUZEYUVRN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNPRVJCUVhORUxDdEVRVUVyUkRzN1FVRkZja2c3UVVGRFFUczdRVUZGUVR0QlFVTkJPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVNM1JFRTdPMEZCUlVFN096dEJRVWRCTEVsQlFVbEJMRzlDUVVGdlFpeEpRVUY0UWp0QlFVTkJPenM3UVVGSFFTeEpRVUZKUXl4bFFVRmxMRU5CUVc1Q08wRkJRMEU3T3p0QlFVZEJMRWxCUVVsRExFOUJRVThzUlVGQldEdEJRVU5CT3pzN1FVRkhRU3hKUVVGSlF5eFRRVUZUTEVWQlFXSTdPMEZCUlVFc1NVRkJTVU1zWTBGQll5eEZRVUZzUWpzN1FVRkZRU3hKUVVGSlF5eGxRVUZsTEVWQlFXNUNPenRCUVVWQk96czdRVUZIUVN4VFFVRlRReXhMUVVGVUxFTkJRV2RDUXl4aFFVRm9RaXhGUVVFclFqdEJRVU0zUWxBc2MwSkJRVzlDVVN4UFFVRlBReXh4UWtGQlVDeERRVUUyUWl4WlFVRk5PMEZCUTNKRUxGRkJRVTFETEUxQlFVMURMRXRCUVV0RUxFZEJRVXdzUlVGQldqdEJRVU5CTEZGQlFVMUZMRXRCUVVzc1QwRkJUMVlzU1VGQmJFSTdRVUZEUVVRc2IwSkJRV2RDVXl4TlFVRk5TQ3hoUVVGMFFqczdRVUZGUVN4UlFVRkpUaXhuUWtGQlowSlhMRVZCUVhCQ0xFVkJRWGRDTzBGQlEzUkNMR0ZCUVU5WUxHZENRVUZuUWxjc1JVRkJka0lzUlVGQk1rSTdRVUZEZWtKWUxIZENRVUZuUWxjc1JVRkJhRUk3UVVGRFJEdEJRVU5FTEZkQlFVc3NTVUZCU1VNc1IwRkJWQ3hKUVVGblFsSXNXVUZCYUVJc1JVRkJPRUk3UVVGRE5VSXNXVUZCU1ZNc1YwRkJWMVFzWVVGQllWRXNSMEZCWWl4RFFVRm1PMEZCUTBGRExHbENRVUZUUXl4WFFVRlVMRWRCUVhWQ1JDeFRRVUZUUVN4VFFVRlRReXhYUVVGc1FpeEZRVUVyUWtRc1UwRkJVMFVzWjBKQlFYaERMRVZCUVRCRVNpeEZRVUV4UkN4RFFVRjJRanRCUVVORU8wRkJRMFk3UVVGRFJFNHNWVUZCVFVrc1IwRkJUanRCUVVORUxFZEJabTFDTEVOQlFYQkNPMEZCWjBKRU96dEJRVVZFTEVsQlFVMVBMRkZCUVZFN1FVRkRXa01zVlVGQlVTeHJRa0ZCYVVJN1FVRkJRU3hSUVVGb1FrRXNUMEZCWjBJc2RVVkJRVkFzUlVGQlR6czdRVUZEZGtJN1FVRkRRV2hDTEZkQlFVOW5RaXhSUVVGUFF5eEhRVUZRTEVsQlFXTnFRaXhKUVVGeVFqczdRVUZGUVN4UlFVRkphMElzV1VGQldVWXNVVUZCVDBVc1UwRkJka0k3TzBGQlJVRTdRVUZEUVVZc1dVRkJUMGNzVFVGQlVDeERRVUZqUXl4UFFVRmtMRU5CUVhOQ0xGVkJRVU5ETEV0QlFVUXNSVUZCVnp0QlFVTXZRaXhWUVVGSlF5eFRRVUZUUXl4VFFVRlRReXhoUVVGVUxFTkJRWFZDTEZGQlFYWkNMRU5CUVdJN1FVRkRRVTRzWjBKQlFWVlBMRmRCUVZZc1EwRkJjMEpJTEUxQlFYUkNPenRCUVVWQmNFSXNhMEpCUVZsdFFpeE5RVUZOU3l4SlFVRnNRaXhKUVVFd1Frd3NUVUZCVFUwc1QwRkJhRU03UVVGRFFYaENMRzFDUVVGaGEwSXNUVUZCVFVzc1NVRkJia0lzU1VGQk1rSk1MRTFCUVUxUExFMUJRVTRzUTBGQllVTXNTVUZCWWl4RFFVRnJRaXhKUVVGc1FpeEZRVUYzUWxBc1RVRkJlRUlzUTBGQk0wSTdRVUZEUkN4TFFVNUVPenRCUVZGQk8wRkJRMEZ5UWl4aFFVRlRMQ3RDUVVGWkxHdERRVUZsWlN4UlFVRlBZeXhWUVVGMFFpeEZRVUZyUXl4clEwRkJaVFZDTEZkQlFXWXNSVUZCTkVKRExGbEJRVFZDTEVOQlFXeERMRU5CUVZvc1EwRkJWRHRCUVVOQkxGRkJRVWxoTEZGQlFVOWxMRWxCUVZnc1JVRkJhVUk3UVVGRFptWXNZMEZCVDJVc1NVRkJVQ3hEUVVGWk9VSXNUMEZCVHl0Q0xGRkJRVkFzUlVGQldqdEJRVU5FTzBGQlEwWXNSMEZ5UWxjN08wRkJkVUphUVN4WlFVRlZMR3RDUVVGRFF5eFJRVUZFTEVWQlFXTTdRVUZEZEVJc1YwRkJUMmhETEU5QlFVOHJRaXhSUVVGUUxFTkJRV2RDUXl4UlFVRm9RaXhEUVVGUU8wRkJRMFFzUjBGNlFsYzdPMEZCTWtKYVpDeFZRVUZSTEVWQk0wSkpPenRCUVRaQ1dtVXNVMEZCVHl4cFFrRkJUVHRCUVVOWU9VSXNWVUZCVFVzc1MwRkJTMFFzUjBGQlRDeEZRVUZPTzBGQlEwUXNSMEV2UWxjN08wRkJhVU5hTWtJc1dVRkJWU3hyUWtGQlEwTXNUVUZCUkN4RlFVRlpPMEZCUTNCQ2JrTXNWMEZCVDJ0RExGRkJRVkFzUTBGQlowSkRMRTFCUVdoQ08wRkJRMFE3TzBGQlJVUTdRVUZEUVR0QlFYUkRXU3hEUVVGa096dHJRa0Y1UTJWeVFpeExPenM3T3pzN096czdPenM3VVVOMFJrTnpRaXhYTEVkQlFVRkJMRmM3VVVFMlEwRkRMR01zUjBGQlFVRXNZenRSUVN0Q1FVTXNZeXhIUVVGQlFTeGpPMEZCTlVWVUxGTkJRVk5HTEZkQlFWUXNRMEZCYzBKSExFOUJRWFJDTEVWQlFTdENPMEZCUTNCRE8wRkJRMEVzVFVGQlNVTXNVVUZCVVVRc1UwRkJXanM3UVVGRlFTeFRRVUZQTzBGQlEwdzdPenRCUVVkQlRDeGpRVUZWTEc5Q1FVRnBRanRCUVVGQkxGVkJRV2hDUXl4TlFVRm5RaXgxUlVGQlVDeEZRVUZQT3p0QlFVTjZRaXhWUVVGSlRTeFJRVUZSUXl4SFFVRlNMRU5CUVZsRExFbEJRVm9zUzBGQmNVSXNTMEZCZWtJc1JVRkJaME03UVVGRE9VSTdRVUZEUVVNc1owSkJRVkZETEV0QlFWSXNRMEZCWTFZc1QwRkJUMWNzU1VGQmNrSTdRVUZEUVVZc1owSkJRVkZITEVsQlFWSXNRMEZCWVN4WFFVRmlMRVZCUVRCQ0xHTkJRVEZDTEVWQlFUQkRVQ3hMUVVFeFF6dEJRVU5CU1N4blFrRkJVVWNzU1VGQlVpeERRVUZoTEZkQlFXSXNSVUZCTUVJc1dVRkJNVUlzUlVGQmQwTmFMRTFCUVhoRE8wRkJRMFE3TzBGQlJVUTdRVUZEUVVzc1kwRkJVVVFzVVVGQlVVTXNTMEZCVWl4RlFVRmxUQ3hOUVVGbUxFTkJRVkk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3hWUVVGSlRTeFJRVUZSUXl4SFFVRlNMRU5CUVZsRExFbEJRVm9zUzBGQmNVSXNTMEZCZWtJc1JVRkJaME03UVVGRE9VSTdRVUZEUVVNc1owSkJRVkZITEVsQlFWSXNRMEZCWVN4VlFVRmlMRVZCUVhsQ0xHTkJRWHBDTEVWQlFYbERVQ3hMUVVGNlF6dEJRVU5CU1N4blFrRkJVVWtzVVVGQlVqdEJRVU5FTzBGQlEwWXNTMEY0UWtrN1FVRjVRa3c3T3pzN1FVRkpRV3BDTEdOQlFWVXNhMEpCUVVORExGRkJRVVFzUlVGQll6dEJRVU4wUWl4VlFVRkpMRU5CUVVOQkxGRkJRVXdzUlVGQlpUdEJRVU5pTEdWQlFVOVJMRXRCUVZBN1FVRkRSQ3hQUVVaRUxFMUJSMHM3UVVGRFNDeGxRVUZQUVN4TlFVRk5VaXhSUVVGT0xFTkJRVkE3UVVGRFJEdEJRVU5HTzBGQmNFTkpMRWRCUVZBN1FVRnpRMFE3TzBGQlJVUTdRVUZEVHl4VFFVRlRTeXhqUVVGVUxFZEJRVzFFTzBGQlFVRXNUVUZCTVVKU0xGVkJRVEJDTEhWRlFVRmlMRVZCUVdFN1FVRkJRU3hOUVVGVVNDeFBRVUZUT3pzN1FVRkZlRVE3UVVGRFFTeFRRVUZQTEZsQlFUWkNPMEZCUVVFc1VVRkJOVUpqTEV0QlFUUkNMSFZGUVVGd1FpeEZRVUZ2UWp0QlFVRkJMRkZCUVdoQ1RDeE5RVUZuUWl4MVJVRkJVQ3hGUVVGUE96dEJRVU5zUXl4UlFVRkpZeXhYUVVGWExFVkJRV1k3UVVGQlFTeFJRVU5KUXl4WlFVRlpMRVZCUkdoQ096dEJRVWRCTzBGQlEwRXNVMEZCU3l4SlFVRkplRU1zUjBGQlZDeEpRVUZuUW0xQ0xGVkJRV2hDTEVWQlFUUkNPMEZCUXpGQ08wRkJRMEU3UVVGRFFTeFZRVUZKYzBJc1pVRkJaWFJDTEZkQlFWZHVRaXhIUVVGWUxFVkJRV2RDT0VJc1RVRkJUVGxDTEVkQlFVNHNRMEZCYUVJc1JVRkJORUo1UWl4TlFVRTFRaXhGUVVGdlEwc3NTMEZCY0VNc1EwRkJia0k3TzBGQlJVRXNWVUZCU1Zjc2FVSkJRV2xDV0N4TlFVRk5PVUlzUjBGQlRpeERRVUZ5UWl4RlFVRnBRenRCUVVNdlFuZERMR3RDUVVGVlJTeEpRVUZXTEVOQlFXVXhReXhIUVVGbU8wRkJRMFE3TzBGQlJVUjFReXhsUVVGVGRrTXNSMEZCVkN4SlFVRm5RbmxETEZsQlFXaENPMEZCUTBRN08wRkJSVVE3UVVGRFFYcENMRmxCUVZGMVFpeFJRVUZTTEVWQlFXdENReXhUUVVGc1FqczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzVjBGQlQwUXNVVUZCVUR0QlFVTkVMRWRCZWtKRU8wRkJNRUpFT3p0QlFVVk5MRk5CUVZOWUxHTkJRVlFzUjBGQk5FUTdRVUZCUVN4TlFVRnVRMlVzVlVGQmJVTXNkVVZCUVhSQ0xFVkJRWE5DTzBGQlFVRXNUVUZCYkVKRExGZEJRV3RDTEhWRlFVRktMRVZCUVVrN08wRkJRMnBGTzBGQlEwRXNVMEZCVHl4WlFVRm5RenRCUVVGQkxGRkJRUzlDWkN4TFFVRXJRaXgxUlVGQmRrSXNSVUZCZFVJN1FVRkJRU3hSUVVGdVFsVXNVMEZCYlVJc2RVVkJRVkFzUlVGQlR6czdRVUZEY2tNc1VVRkJTVXNzYzBKQlFYTkNMRVZCUVRGQ08wRkJRMEVzVTBGQlN5eEpRVUZKTjBNc1IwRkJWQ3hKUVVGblFqSkRMRlZCUVdoQ0xFVkJRVFJDTzBGQlF6RkNPMEZCUTBGRExHdENRVUZaTlVNc1IwRkJXaXhGUVVGcFFrY3NaMEpCUVdwQ0xFZEJRVzlEZDBNc1YwRkJWek5ETEVkQlFWZ3NSVUZCWjBJMFF5eFpRVUZaTlVNc1IwRkJXaXhGUVVGcFFrY3NaMEpCUVdwRExFVkJRVzFFTWtJc1MwRkJia1FzUlVGQk1FUlZMRk5CUVRGRUxFTkJRWEJETzBGQlEwUTdRVUZEUml4SFFVNUVPMEZCVDBRc1F6czdPenM3T3p0QlEzSkdSRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdRVUZKUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNkVUpCUVhWQ0xITkNRVUZ6UWp0QlFVTTNRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhGQ1FVRnhRanRCUVVOeVFqczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzY1VOQlFYRkRPenRCUVVWeVF6dEJRVU5CTzBGQlEwRTdPMEZCUlVFc01rSkJRVEpDTzBGQlF6TkNPMEZCUTBFN1FVRkRRVHRCUVVOQkxEUkNRVUUwUWl4VlFVRlZJaXdpWm1sc1pTSTZJbU5vWVhKMGVDNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlCY2RDOHZJRlJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEhaaGNpQnBibk4wWVd4c1pXUk5iMlIxYkdWeklEMGdlMzA3WEc1Y2JpQmNkQzh2SUZSb1pTQnlaWEYxYVhKbElHWjFibU4wYVc5dVhHNGdYSFJtZFc1amRHbHZiaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0cxdlpIVnNaVWxrS1NCN1hHNWNiaUJjZEZ4MEx5OGdRMmhsWTJzZ2FXWWdiVzlrZFd4bElHbHpJR2x1SUdOaFkyaGxYRzRnWEhSY2RHbG1LR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRLU0I3WEc0Z1hIUmNkRngwY21WMGRYSnVJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbVY0Y0c5eWRITTdYRzRnWEhSY2RIMWNiaUJjZEZ4MEx5OGdRM0psWVhSbElHRWdibVYzSUcxdlpIVnNaU0FvWVc1a0lIQjFkQ0JwZENCcGJuUnZJSFJvWlNCallXTm9aU2xjYmlCY2RGeDBkbUZ5SUcxdlpIVnNaU0E5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkSUQwZ2UxeHVJRngwWEhSY2RHazZJRzF2WkhWc1pVbGtMRnh1SUZ4MFhIUmNkR3c2SUdaaGJITmxMRnh1SUZ4MFhIUmNkR1Y0Y0c5eWRITTZJSHQ5WEc0Z1hIUmNkSDA3WEc1Y2JpQmNkRngwTHk4Z1JYaGxZM1YwWlNCMGFHVWdiVzlrZFd4bElHWjFibU4wYVc5dVhHNGdYSFJjZEcxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1OaGJHd29iVzlrZFd4bExtVjRjRzl5ZEhNc0lHMXZaSFZzWlN3Z2JXOWtkV3hsTG1WNGNHOXlkSE1zSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4cE8xeHVYRzRnWEhSY2RDOHZJRVpzWVdjZ2RHaGxJRzF2WkhWc1pTQmhjeUJzYjJGa1pXUmNiaUJjZEZ4MGJXOWtkV3hsTG13Z1BTQjBjblZsTzF4dVhHNGdYSFJjZEM4dklGSmxkSFZ5YmlCMGFHVWdaWGh3YjNKMGN5QnZaaUIwYUdVZ2JXOWtkV3hsWEc0Z1hIUmNkSEpsZEhWeWJpQnRiMlIxYkdVdVpYaHdiM0owY3p0Y2JpQmNkSDFjYmx4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlhNZ2IySnFaV04wSUNoZlgzZGxZbkJoWTJ0ZmJXOWtkV3hsYzE5ZktWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dElEMGdiVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WXlBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCblpYUjBaWElnWm5WdVkzUnBiMjRnWm05eUlHaGhjbTF2Ym5rZ1pYaHdiM0owYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrSUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3l3Z2JtRnRaU3dnWjJWMGRHVnlLU0I3WEc0Z1hIUmNkR2xtS0NGZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOG9aWGh3YjNKMGN5d2dibUZ0WlNrcElIdGNiaUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnYm1GdFpTd2dlMXh1SUZ4MFhIUmNkRngwWTI5dVptbG5kWEpoWW14bE9pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSY2RHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc1hHNGdYSFJjZEZ4MFhIUm5aWFE2SUdkbGRIUmxjbHh1SUZ4MFhIUmNkSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJuWlhSRVpXWmhkV3gwUlhod2IzSjBJR1oxYm1OMGFXOXVJR1p2Y2lCamIyMXdZWFJwWW1sc2FYUjVJSGRwZEdnZ2JtOXVMV2hoY20xdmJua2diVzlrZFd4bGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzRnWEhSY2RIWmhjaUJuWlhSMFpYSWdQU0J0YjJSMWJHVWdKaVlnYlc5a2RXeGxMbDlmWlhOTmIyUjFiR1VnUDF4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFUmxabUYxYkhRb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdWYkoyUmxabUYxYkhRblhUc2dmU0E2WEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFRXOWtkV3hsUlhod2IzSjBjeWdwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVHNnZlR0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHZGxkSFJsY2l3Z0oyRW5MQ0JuWlhSMFpYSXBPMXh1SUZ4MFhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThnUFNCbWRXNWpkR2x2YmlodlltcGxZM1FzSUhCeWIzQmxjblI1S1NCN0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFaV04wTENCd2NtOXdaWEowZVNrN0lIMDdYRzVjYmlCY2RDOHZJRjlmZDJWaWNHRmphMTl3ZFdKc2FXTmZjR0YwYUY5ZlhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5BZ1BTQmNJaTljSWp0Y2JseHVJRngwTHk4Z1RHOWhaQ0JsYm5SeWVTQnRiMlIxYkdVZ1lXNWtJSEpsZEhWeWJpQmxlSEJ2Y25SelhHNGdYSFJ5WlhSMWNtNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWhmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5NZ1BTQXdLVHRjYmx4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QjNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQmtZVFJtWkRneU0ySmtZbUZpWTJSaVpHTm1NU0lzSW1sdGNHOXlkQ0I3WTI5dFltbHVaVkpsWkhWalpYSXNJR055WldGMFpWTjBiM0psTENCamIyMWlhVzVsVlhCa1lYUmxjbjBnWm5KdmJTQW5MaTl6ZEdGMFpVMWhibUZuWlhJblhHNWNiaThxS2x4dUlDb2dWR2hsSUdGdWFXMWhkR2x2YmlCc2IyOXdJR3RsZVNCbWIzSWdZMkZ1WTJWc0lHRnVhVzFoZEdsdmJseHVJQ292WEc1c1pYUWdYMkZ1YVcxaGRHbHZia3h2YjNCTFpYa2dQU0J1ZFd4c1hHNHZLaXBjYmlBcUlFRmpZM1Z0ZFd4aGRHOXlJR1p2Y2lCMGFXMWxMV0poYzJWa0lHRnVhVzFoZEdsdmJseHVJQ292WEc1c1pYUWdYMkZqWTNWdGRXeGhkRzl5SUQwZ01GeHVMeW9xWEc0Z0tpQlVhR1VnWkdWbVlYVnNkQ0JtY0hOY2JpQXFMMXh1YkdWMElGOW1jSE1nUFNBMk1GeHVMeW9xWEc0Z0tpQlVhR1VnYzNSdmNtVWdabTl5SUdkaGJXVmNiaUFxTDF4dWJHVjBJRjl6ZEc5eVpTQTlJSHQ5WEc1Y2JteGxkQ0JmZFhCa1lYUmxjazFoY0NBOUlIdDlYRzVjYm14bGRDQmZjbVZ1WkdWeVpYSk5ZWEFnUFNCN2ZWeHVYRzR2S2lwY2JpQXFJRlJ5YVdkblpYSWdaMkZ0WlNCc2IyOXdYRzRnS2k5Y2JtWjFibU4wYVc5dUlGOXNiMjl3SUNoc1lYTjBWR2x0WlhOMFlXMXdLU0I3WEc0Z0lGOWhibWx0WVhScGIyNU1iMjl3UzJWNUlEMGdkMmx1Wkc5M0xuSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU2dvS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYm05M0lEMGdSR0YwWlM1dWIzY29LVnh1SUNBZ0lHTnZibk4wSUdSMElEMGdNVEF3TUNBdklGOW1jSE5jYmlBZ0lDQmZZV05qZFcxMWJHRjBiM0lnS3owZ2JtOTNJQzBnYkdGemRGUnBiV1Z6ZEdGdGNGeHVYRzRnSUNBZ2FXWWdLRjloWTJOMWJYVnNZWFJ2Y2lBK1BTQmtkQ2tnZTF4dUlDQWdJQ0FnZDJocGJHVWdLRjloWTJOMWJYVnNZWFJ2Y2lBK1BTQmtkQ2tnZTF4dUlDQWdJQ0FnSUNCZllXTmpkVzExYkdGMGIzSWdMVDBnWkhSY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJmY21WdVpHVnlaWEpOWVhBcElIdGNiaUFnSUNBZ0lDQWdiR1YwSUhKbGJtUmxjbVZ5SUQwZ1gzSmxibVJsY21WeVRXRndXMnRsZVYxY2JpQWdJQ0FnSUNBZ2NtVnVaR1Z5WlhJdWNtVnVaR1Z5VTNSaGRHVWdQU0J5Wlc1a1pYSmxjaWh5Wlc1a1pYSmxjaTV5Wlc1a1pYSlRkR0YwWlN3Z2NtVnVaR1Z5WlhJdVptbHVZV3hTWlc1a1pYSlRkR0YwWlN3Z1pIUXBYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0FnSUY5c2IyOXdLRzV2ZHlsY2JpQWdmU2xjYm4xY2JseHVZMjl1YzNRZ1oyRnRkWGdnUFNCN1hHNGdJR052Ym1acFp6b2dLR052Ym1acFp5QTlJSHQ5S1NBOVBpQjdYRzRnSUNBZ0x5OGdRMjl1Wm1sbklIUm9aU0J3Y21sMllYUmxJR2RzYjJKaGJITmNiaUFnSUNCZlpuQnpJRDBnWTI5dVptbG5MbVp3Y3lCOGZDQmZabkJ6WEc1Y2JpQWdJQ0JzWlhRZ1kyOXVkR0ZwYm1WeUlEMGdZMjl1Wm1sbkxtTnZiblJoYVc1bGNseHVYRzRnSUNBZ0x5OGdRM0psWVhSbElHZGhiV1VnYkdGNVpYSnpYRzRnSUNBZ1kyOXVabWxuTG14aGVXVnljeTVtYjNKRllXTm9LQ2hzWVhsbGNpa2dQVDRnZTF4dUlDQWdJQ0FnYkdWMElHTmhiblpoY3lBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvSjJOaGJuWmhjeWNwWEc0Z0lDQWdJQ0JqYjI1MFlXbHVaWEl1WVhCd1pXNWtRMmhwYkdRb1kyRnVkbUZ6S1Z4dVhHNGdJQ0FnSUNCZmRYQmtZWFJsY2sxaGNGdHNZWGxsY2k1dVlXMWxYU0E5SUd4aGVXVnlMblZ3WkdGMFpYSmNiaUFnSUNBZ0lGOXlaVzVrWlhKbGNrMWhjRnRzWVhsbGNpNXVZVzFsWFNBOUlHeGhlV1Z5TG5KbGJtUmxjaTVpYVc1a0tHNTFiR3dzSUdOaGJuWmhjeWxjYmlBZ0lDQjlLVnh1WEc0Z0lDQWdMeThnUTNKbFlYUmxJR2RoYldVZ2MzUnZjbVZjYmlBZ0lDQmZjM1J2Y21VZ1BTQmpjbVZoZEdWVGRHOXlaU2hqYjIxaWFXNWxVbVZrZFdObGNpaGpiMjVtYVdjdWNtVmtkV05sY2sxaGNDd2dZMjl0WW1sdVpWVndaR0YwWlhJb1gzVndaR0YwWlhKTllYQXNJRjl5Wlc1a1pYSmxjazFoY0NrcEtWeHVJQ0FnSUdsbUlDaGpiMjVtYVdjdWFXNXBkQ2tnZTF4dUlDQWdJQ0FnWTI5dVptbG5MbWx1YVhRb1gzTjBiM0psTG1kbGRGTjBZWFJsS0NrcFhHNGdJQ0FnZlZ4dUlDQjlMRnh1WEc0Z0lHZGxkRk4wWVhSbE9pQW9jM1JoZEdWTFpYa3BJRDArSUh0Y2JpQWdJQ0J5WlhSMWNtNGdYM04wYjNKbExtZGxkRk4wWVhSbEtITjBZWFJsUzJWNUtWeHVJQ0I5TEZ4dVhHNGdJR3hoZVdWeWN6b2dlMzBzWEc1Y2JpQWdjM1JoY25RNklDZ3BJRDArSUh0Y2JpQWdJQ0JmYkc5dmNDaEVZWFJsTG01dmR5Z3BLVnh1SUNCOUxGeHVYRzRnSUdScGMzQmhkR05vT2lBb1lXTjBhVzl1S1NBOVBpQjdYRzRnSUNBZ1gzTjBiM0psTG1ScGMzQmhkR05vS0dGamRHbHZiaWxjYmlBZ2ZWeHVYRzRnSUM4dklDcGNiaUFnTHk4Z0lDb2dSMkZ0WlNCM2FXeHNJR0psSUdGMllXbHNZV0pzWlNCdmJtTmxJR052Ym1acFozVnlaV1JjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1oyRnRkWGhjYmx4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QXVMM055WXk5amFHRnlkSGd1YW5NaUxDSmxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1kzSmxZWFJsVTNSdmNtVWdLSEpsWkhWalpYSXBJSHRjYmlBZ0x5OGdTVzVwZENCemRHRjBaVnh1SUNCc1pYUWdjM1JoZEdVZ1BTQnlaV1IxWTJWeUtDbGNibHh1SUNCeVpYUjFjbTRnZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVScGMzQmhkR05vSUdGamRHbHZiaUIwYnlCMGNtbG5aMlZ5SUhOMFlYUmxJR05vWVc1blpYTmNiaUFnSUNBZ0tpOWNiaUFnSUNCa2FYTndZWFJqYURvZ0tHRmpkR2x2YmlBOUlIdDlLU0E5UGlCN1hHNGdJQ0FnSUNCcFppQW9jSEp2WTJWemN5NWxibll1WTI5a1pTQTlQVDBnSjBSRlZpY3BJSHRjYmlBZ0lDQWdJQ0FnTHk4Z2JHOW5JR0ZqZEdsdmJuTWdhVzRnWTI5dWMyOXNaVnh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbWR5YjNWd0tHRmpkR2x2Ymk1MGVYQmxLVnh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbWx1Wm04b0p5VmpZbVZtYjNKbE9pY3NJQ2RqYjJ4dmNqb2daM0psWlc0bkxDQnpkR0YwWlNsY2JpQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1cGJtWnZLQ2NsWTJGamRHbHZiam9uTENBblkyOXNiM0k2SUhKbFpDY3NJR0ZqZEdsdmJpbGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lGeHVJQ0FnSUNBZ0x5OGdWWEJrWVhSbElITjBZWFJsWEc0Z0lDQWdJQ0J6ZEdGMFpTQTlJSEpsWkhWalpYSW9jM1JoZEdVc0lHRmpkR2x2YmlsY2JpQWdJQ0FnSUM4dklGTjBZWFJsSUcxaGJtRm5aWElnWkc5bGMyNG5kQ0JqWVhKbElHRmliM1YwSUc1dmRHbGphVzVuWEc0Z0lDQWdJQ0F2THlCbllXMWxJSFJ2SUhWd1pHRjBaU0J6ZEdGMFpTNGdTVzV6ZEdWaFpDQnlaV1IxWTJWeWMxeHVJQ0FnSUNBZ0x5OGdjMmh2ZFd4a0lITmxkQ0JrYVhKMGVTQnpkR0YwWlNCbWIzSWdaMkZ0WlNCc2IyOXdJSFJ2WEc0Z0lDQWdJQ0F2THlCMGNtbG5aMlZ5SUhWd1pHRjBaVnh1WEc0Z0lDQWdJQ0JwWmlBb2NISnZZMlZ6Y3k1bGJuWXVZMjlrWlNBOVBUMGdKMFJGVmljcElIdGNiaUFnSUNBZ0lDQWdMeThnYkc5bklHRmpkR2x2Ym5NZ2FXNGdZMjl1YzI5c1pWeHVJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExtbHVabThvSnlWallXWjBaWEk2Snl3Z0oyTnZiRzl5T2lCbmNtVmxiaWNzSUhOMFlYUmxLVnh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbWR5YjNWd1JXNWtLQ2xjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkpsZEhWeWJpQjBhR1VnWTNWeWNtVnVkQ0J6ZEdGMFpTQm1iM0lnWjJsMlpXNGdhMlY1WEc0Z0lDQWdJQ29nVkdocGN5QnBjeUIwYnlCaGJHeHZkeUJoY0hCc2FXTmhkR2x2YmlCMGJ5QW5ZMjl1Ym1WamRDY2dkRzhnYzNSaGRHVmNiaUFnSUNBZ0tpOWNiaUFnSUNCblpYUlRkR0YwWlRvZ0tITjBZWFJsUzJWNUtTQTlQaUI3WEc0Z0lDQWdJQ0JwWmlBb0lYTjBZWFJsUzJWNUtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpkR0YwWlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnWld4elpTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpkR0YwWlZ0emRHRjBaVXRsZVYxY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNibjFjYmx4dUx5OGdRWE56ZFcxbElIUm9aU0J5WldOMVpYSk5ZWEFnYVhNZ1lTQm1iR0YwSUcxaGNDQjBieUJoYkd3Z2NtVmtkV05sY25OY2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCamIyMWlhVzVsVW1Wa2RXTmxjaUFvY21Wa2RXTmxjazFoY0NBOUlIdDlMQ0IxY0dSaGRHVnlLU0I3WEc1Y2JpQWdMeThnUjJWdVpYSmhkR1VnWVNCamIyMWlhVzVsWkNCeVpXUjFZMlZ5SUdaMWJtTjBhVzl1WEc0Z0lISmxkSFZ5YmlBb2MzUmhkR1VnUFNCN2ZTd2dZV04wYVc5dUlEMGdlMzBwSUQwK0lIdGNiaUFnSUNCc1pYUWdibVYzVTNSaGRHVWdQU0I3ZlN4Y2JpQWdJQ0FnSUNBZ1pHbHlkSGxMWlhseklEMGdXMTFjYmx4dUlDQWdJQzh2SUZOd2NtVmhaQ0IwYUdVZ1lXTjBhVzl1SUhSdklHRnNiQ0J5WldSMVkyVnljeUJwYm5OcFpHVWdkR2hsSUdOdmJXSnBibVZrSUc5dVpWeHVJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ5WldSMVkyVnlUV0Z3S1NCN1hHNGdJQ0FnSUNBdkx5QlFZWE56SUhSb1pTQjNhRzlzWlNCemRHRjBaU0JrYjNkdUlHRnpJR0Z5WjNWdFpXNTBJR1p2Y2x4dUlDQWdJQ0FnTHk4Z1kzSnZjM01nYzNSaGRHVWdhMlY1SUdGalkyVnpjMXh1SUNBZ0lDQWdiR1YwSUhKbFpIVmpaV1JUZEdGMFpTQTlJSEpsWkhWalpYSk5ZWEJiYTJWNVhTaHpkR0YwWlZ0clpYbGRMQ0JoWTNScGIyNHNJSE4wWVhSbEtWeHVYRzRnSUNBZ0lDQnBaaUFvY21Wa2RXTmxaRk4wWVhSbElDRTlQU0J6ZEdGMFpWdHJaWGxkS1NCN1hHNGdJQ0FnSUNBZ0lHUnBjblI1UzJWNWN5NXdkWE5vS0d0bGVTbGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdibVYzVTNSaGRHVmJhMlY1WFNBOUlISmxaSFZqWldSVGRHRjBaVnh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJRU5oYkd3Z2RYQmtZWFJsSUdaMWJtTjBhVzl1SUdadmNpQmxZV05vSUhKbFpIVmpaV1FnYzNSaGRHVmNiaUFnSUNCMWNHUmhkR1Z5S0c1bGQxTjBZWFJsTENCa2FYSjBlVXRsZVhNcFhHNWNiaUFnSUNBdkx5QmthWEowZVV0bGVYTXVabTl5UldGamFDZ29aR2x5ZEhsTFpYa3BJRDArSUh0Y2JpQWdJQ0F2THlBZ0lIVndaR0YwWlhKTllYQmJaR2x5ZEhsTFpYbGRLRzVsZDFOMFlYUmxMQ0JrYVhKMGVVdGxlU2xjYmlBZ0lDQXZMeUI5S1Z4dVhHNGdJQ0FnY21WMGRYSnVJRzVsZDFOMFlYUmxYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJR052YldKcGJtVlZjR1JoZEdWeUlDaDFjR1JoZEdWeVRXRndJRDBnZTMwc0lISmxibVJsY21WeVRXRndJRDBnZTMwcElIdGNiaUFnTHk4Z1IyVnVaWEpoZEdVZ1kyOXRZbWx1WldRZ2RYQmtZWFJsY2lCbWRXNWpkR2x2YmlCbWIzSWdZV3hzSUhWd1pHRjBaWEp6WEc0Z0lISmxkSFZ5YmlBb2MzUmhkR1VnUFNCN2ZTd2daR2x5ZEhsTFpYbHpJRDBnVzEwcElEMCtJSHRjYmlBZ0lDQnNaWFFnYm1WM1JtbHVZV3hTWlc1a1pYSlRkR0YwWlNBOUlIdDlYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhWd1pHRjBaWEpOWVhBcElIdGNiaUFnSUNBZ0lDOHZJRU52YlhCMWRHVWdkR2hsSUdacGJtRnNJSEpsYm1SbGNpQnpkR0YwWlNCaGJtUWdjR0Z6Y3lCcGJuUnZJSEpsYm1SbGNtVnlYRzRnSUNBZ0lDQnlaVzVrWlhKbGNrMWhjRnRyWlhsZExtWnBibUZzVW1WdVpHVnlVM1JoZEdVZ1BTQjFjR1JoZEdWeVRXRndXMnRsZVYwb2NtVnVaR1Z5WlhKTllYQmJhMlY1WFM1bWFXNWhiRkpsYm1SbGNsTjBZWFJsTENCemRHRjBaU3dnWkdseWRIbExaWGx6S1Z4dUlDQWdJSDFjYmlBZ2ZWeHVmVnh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwzTnlZeTl6ZEdGMFpVMWhibUZuWlhJdWFuTWlMQ0l2THlCemFHbHRJR1p2Y2lCMWMybHVaeUJ3Y205alpYTnpJR2x1SUdKeWIzZHpaWEpjYm5aaGNpQndjbTlqWlhOeklEMGdiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQjdmVHRjYmx4dUx5OGdZMkZqYUdWa0lHWnliMjBnZDJoaGRHVjJaWElnWjJ4dlltRnNJR2x6SUhCeVpYTmxiblFnYzI4Z2RHaGhkQ0IwWlhOMElISjFibTVsY25NZ2RHaGhkQ0J6ZEhWaUlHbDBYRzR2THlCa2IyNG5kQ0JpY21WaGF5QjBhR2x1WjNNdUlDQkNkWFFnZDJVZ2JtVmxaQ0IwYnlCM2NtRndJR2wwSUdsdUlHRWdkSEo1SUdOaGRHTm9JR2x1SUdOaGMyVWdhWFFnYVhOY2JpOHZJSGR5WVhCd1pXUWdhVzRnYzNSeWFXTjBJRzF2WkdVZ1kyOWtaU0IzYUdsamFDQmtiMlZ6YmlkMElHUmxabWx1WlNCaGJua2daMnh2WW1Gc2N5NGdJRWwwSjNNZ2FXNXphV1JsSUdGY2JpOHZJR1oxYm1OMGFXOXVJR0psWTJGMWMyVWdkSEo1TDJOaGRHTm9aWE1nWkdWdmNIUnBiV2w2WlNCcGJpQmpaWEowWVdsdUlHVnVaMmx1WlhNdVhHNWNiblpoY2lCallXTm9aV1JUWlhSVWFXMWxiM1YwTzF4dWRtRnlJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkRHRjYmx4dVpuVnVZM1JwYjI0Z1pHVm1ZWFZzZEZObGRGUnBiVzkxZENncElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjNObGRGUnBiV1Z2ZFhRZ2FHRnpJRzV2ZENCaVpXVnVJR1JsWm1sdVpXUW5LVHRjYm4xY2JtWjFibU4wYVc5dUlHUmxabUYxYkhSRGJHVmhjbFJwYldWdmRYUWdLQ2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25ZMnhsWVhKVWFXMWxiM1YwSUdoaGN5QnViM1FnWW1WbGJpQmtaV1pwYm1Wa0p5azdYRzU5WEc0b1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ2MyVjBWR2x0Wlc5MWRDQTlQVDBnSjJaMWJtTjBhVzl1SnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGamFHVmtVMlYwVkdsdFpXOTFkQ0E5SUhObGRGUnBiV1Z2ZFhRN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVdOb1pXUlRaWFJVYVcxbGIzVjBJRDBnWkdWbVlYVnNkRk5sZEZScGJXOTFkRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDBnWTJGMFkyZ2dLR1VwSUh0Y2JpQWdJQ0FnSUNBZ1kyRmphR1ZrVTJWMFZHbHRaVzkxZENBOUlHUmxabUYxYkhSVFpYUlVhVzF2ZFhRN1hHNGdJQ0FnZlZ4dUlDQWdJSFJ5ZVNCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwZVhCbGIyWWdZMnhsWVhKVWFXMWxiM1YwSUQwOVBTQW5ablZ1WTNScGIyNG5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZV05vWldSRGJHVmhjbFJwYldWdmRYUWdQU0JqYkdWaGNsUnBiV1Z2ZFhRN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVdOb1pXUkRiR1ZoY2xScGJXVnZkWFFnUFNCa1pXWmhkV3gwUTJ4bFlYSlVhVzFsYjNWME8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZTQmpZWFJqYUNBb1pTa2dlMXh1SUNBZ0lDQWdJQ0JqWVdOb1pXUkRiR1ZoY2xScGJXVnZkWFFnUFNCa1pXWmhkV3gwUTJ4bFlYSlVhVzFsYjNWME8xeHVJQ0FnSUgxY2JuMGdLQ2twWEc1bWRXNWpkR2x2YmlCeWRXNVVhVzFsYjNWMEtHWjFiaWtnZTF4dUlDQWdJR2xtSUNoallXTm9aV1JUWlhSVWFXMWxiM1YwSUQwOVBTQnpaWFJVYVcxbGIzVjBLU0I3WEc0Z0lDQWdJQ0FnSUM4dmJtOXliV0ZzSUdWdWRtbHliMjFsYm5SeklHbHVJSE5oYm1VZ2MybDBkV0YwYVc5dWMxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2MyVjBWR2x0Wlc5MWRDaG1kVzRzSURBcE8xeHVJQ0FnSUgxY2JpQWdJQ0F2THlCcFppQnpaWFJVYVcxbGIzVjBJSGRoYzI0bmRDQmhkbUZwYkdGaWJHVWdZblYwSUhkaGN5QnNZWFIwWlhJZ1pHVm1hVzVsWkZ4dUlDQWdJR2xtSUNnb1kyRmphR1ZrVTJWMFZHbHRaVzkxZENBOVBUMGdaR1ZtWVhWc2RGTmxkRlJwYlc5MWRDQjhmQ0FoWTJGamFHVmtVMlYwVkdsdFpXOTFkQ2tnSmlZZ2MyVjBWR2x0Wlc5MWRDa2dlMXh1SUNBZ0lDQWdJQ0JqWVdOb1pXUlRaWFJVYVcxbGIzVjBJRDBnYzJWMFZHbHRaVzkxZER0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhObGRGUnBiV1Z2ZFhRb1puVnVMQ0F3S1R0Y2JpQWdJQ0I5WEc0Z0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ0x5OGdkMmhsYmlCM2FHVnVJSE52YldWaWIyUjVJR2hoY3lCelkzSmxkMlZrSUhkcGRHZ2djMlYwVkdsdFpXOTFkQ0JpZFhRZ2JtOGdTUzVGTGlCdFlXUmtibVZ6YzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWTJGamFHVmtVMlYwVkdsdFpXOTFkQ2htZFc0c0lEQXBPMXh1SUNBZ0lIMGdZMkYwWTJnb1pTbDdYRzRnSUNBZ0lDQWdJSFJ5ZVNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCWGFHVnVJSGRsSUdGeVpTQnBiaUJKTGtVdUlHSjFkQ0IwYUdVZ2MyTnlhWEIwSUdoaGN5QmlaV1Z1SUdWMllXeGxaQ0J6YnlCSkxrVXVJR1J2WlhOdUozUWdkSEoxYzNRZ2RHaGxJR2RzYjJKaGJDQnZZbXBsWTNRZ2QyaGxiaUJqWVd4c1pXUWdibTl5YldGc2JIbGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJqWVdOb1pXUlRaWFJVYVcxbGIzVjBMbU5oYkd3b2JuVnNiQ3dnWm5WdUxDQXdLVHRjYmlBZ0lDQWdJQ0FnZlNCallYUmphQ2hsS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUhOaGJXVWdZWE1nWVdKdmRtVWdZblYwSUhkb1pXNGdhWFFuY3lCaElIWmxjbk5wYjI0Z2IyWWdTUzVGTGlCMGFHRjBJRzExYzNRZ2FHRjJaU0IwYUdVZ1oyeHZZbUZzSUc5aWFtVmpkQ0JtYjNJZ0ozUm9hWE1uTENCb2IzQm1kV3hzZVNCdmRYSWdZMjl1ZEdWNGRDQmpiM0p5WldOMElHOTBhR1Z5ZDJselpTQnBkQ0IzYVd4c0lIUm9jbTkzSUdFZ1oyeHZZbUZzSUdWeWNtOXlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWTJGamFHVmtVMlYwVkdsdFpXOTFkQzVqWVd4c0tIUm9hWE1zSUdaMWJpd2dNQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JseHVmVnh1Wm5WdVkzUnBiMjRnY25WdVEyeGxZWEpVYVcxbGIzVjBLRzFoY210bGNpa2dlMXh1SUNBZ0lHbG1JQ2hqWVdOb1pXUkRiR1ZoY2xScGJXVnZkWFFnUFQwOUlHTnNaV0Z5VkdsdFpXOTFkQ2tnZTF4dUlDQWdJQ0FnSUNBdkwyNXZjbTFoYkNCbGJuWnBjbTl0Wlc1MGN5QnBiaUJ6WVc1bElITnBkSFZoZEdsdmJuTmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHTnNaV0Z5VkdsdFpXOTFkQ2h0WVhKclpYSXBPMXh1SUNBZ0lIMWNiaUFnSUNBdkx5QnBaaUJqYkdWaGNsUnBiV1Z2ZFhRZ2QyRnpiaWQwSUdGMllXbHNZV0pzWlNCaWRYUWdkMkZ6SUd4aGRIUmxjaUJrWldacGJtVmtYRzRnSUNBZ2FXWWdLQ2hqWVdOb1pXUkRiR1ZoY2xScGJXVnZkWFFnUFQwOUlHUmxabUYxYkhSRGJHVmhjbFJwYldWdmRYUWdmSHdnSVdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENrZ0ppWWdZMnhsWVhKVWFXMWxiM1YwS1NCN1hHNGdJQ0FnSUNBZ0lHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDQTlJR05zWldGeVZHbHRaVzkxZER0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOc1pXRnlWR2x0Wlc5MWRDaHRZWEpyWlhJcE8xeHVJQ0FnSUgxY2JpQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ0lDQXZMeUIzYUdWdUlIZG9aVzRnYzI5dFpXSnZaSGtnYUdGeklITmpjbVYzWldRZ2QybDBhQ0J6WlhSVWFXMWxiM1YwSUdKMWRDQnVieUJKTGtVdUlHMWhaR1J1WlhOelhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCallXTm9aV1JEYkdWaGNsUnBiV1Z2ZFhRb2JXRnlhMlZ5S1R0Y2JpQWdJQ0I5SUdOaGRHTm9JQ2hsS1h0Y2JpQWdJQ0FnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRmRvWlc0Z2QyVWdZWEpsSUdsdUlFa3VSUzRnWW5WMElIUm9aU0J6WTNKcGNIUWdhR0Z6SUdKbFpXNGdaWFpoYkdWa0lITnZJRWt1UlM0Z1pHOWxjMjRuZENBZ2RISjFjM1FnZEdobElHZHNiMkpoYkNCdlltcGxZM1FnZDJobGJpQmpZV3hzWldRZ2JtOXliV0ZzYkhsY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV05vWldSRGJHVmhjbFJwYldWdmRYUXVZMkZzYkNodWRXeHNMQ0J0WVhKclpYSXBPMXh1SUNBZ0lDQWdJQ0I5SUdOaGRHTm9JQ2hsS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUhOaGJXVWdZWE1nWVdKdmRtVWdZblYwSUhkb1pXNGdhWFFuY3lCaElIWmxjbk5wYjI0Z2IyWWdTUzVGTGlCMGFHRjBJRzExYzNRZ2FHRjJaU0IwYUdVZ1oyeHZZbUZzSUc5aWFtVmpkQ0JtYjNJZ0ozUm9hWE1uTENCb2IzQm1kV3hzZVNCdmRYSWdZMjl1ZEdWNGRDQmpiM0p5WldOMElHOTBhR1Z5ZDJselpTQnBkQ0IzYVd4c0lIUm9jbTkzSUdFZ1oyeHZZbUZzSUdWeWNtOXlMbHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdVMjl0WlNCMlpYSnphVzl1Y3lCdlppQkpMa1V1SUdoaGRtVWdaR2xtWm1WeVpXNTBJSEoxYkdWeklHWnZjaUJqYkdWaGNsUnBiV1Z2ZFhRZ2RuTWdjMlYwVkdsdFpXOTFkRnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZEM1allXeHNLSFJvYVhNc0lHMWhjbXRsY2lrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNibHh1WEc1OVhHNTJZWElnY1hWbGRXVWdQU0JiWFR0Y2JuWmhjaUJrY21GcGJtbHVaeUE5SUdaaGJITmxPMXh1ZG1GeUlHTjFjbkpsYm5SUmRXVjFaVHRjYm5aaGNpQnhkV1YxWlVsdVpHVjRJRDBnTFRFN1hHNWNibVoxYm1OMGFXOXVJR05zWldGdVZYQk9aWGgwVkdsamF5Z3BJSHRjYmlBZ0lDQnBaaUFvSVdSeVlXbHVhVzVuSUh4OElDRmpkWEp5Wlc1MFVYVmxkV1VwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJSDFjYmlBZ0lDQmtjbUZwYm1sdVp5QTlJR1poYkhObE8xeHVJQ0FnSUdsbUlDaGpkWEp5Wlc1MFVYVmxkV1V1YkdWdVozUm9LU0I3WEc0Z0lDQWdJQ0FnSUhGMVpYVmxJRDBnWTNWeWNtVnVkRkYxWlhWbExtTnZibU5oZENoeGRXVjFaU2s3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdjWFZsZFdWSmJtUmxlQ0E5SUMweE8xeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2NYVmxkV1V1YkdWdVozUm9LU0I3WEc0Z0lDQWdJQ0FnSUdSeVlXbHVVWFZsZFdVb0tUdGNiaUFnSUNCOVhHNTlYRzVjYm1aMWJtTjBhVzl1SUdSeVlXbHVVWFZsZFdVb0tTQjdYRzRnSUNBZ2FXWWdLR1J5WVdsdWFXNW5LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnlianRjYmlBZ0lDQjlYRzRnSUNBZ2RtRnlJSFJwYldWdmRYUWdQU0J5ZFc1VWFXMWxiM1YwS0dOc1pXRnVWWEJPWlhoMFZHbGpheWs3WEc0Z0lDQWdaSEpoYVc1cGJtY2dQU0IwY25WbE8xeHVYRzRnSUNBZ2RtRnlJR3hsYmlBOUlIRjFaWFZsTG14bGJtZDBhRHRjYmlBZ0lDQjNhR2xzWlNoc1pXNHBJSHRjYmlBZ0lDQWdJQ0FnWTNWeWNtVnVkRkYxWlhWbElEMGdjWFZsZFdVN1hHNGdJQ0FnSUNBZ0lIRjFaWFZsSUQwZ1cxMDdYRzRnSUNBZ0lDQWdJSGRvYVd4bElDZ3JLM0YxWlhWbFNXNWtaWGdnUENCc1pXNHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hqZFhKeVpXNTBVWFZsZFdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFVYVmxkV1ZiY1hWbGRXVkpibVJsZUYwdWNuVnVLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY1hWbGRXVkpibVJsZUNBOUlDMHhPMXh1SUNBZ0lDQWdJQ0JzWlc0Z1BTQnhkV1YxWlM1c1pXNW5kR2c3WEc0Z0lDQWdmVnh1SUNBZ0lHTjFjbkpsYm5SUmRXVjFaU0E5SUc1MWJHdzdYRzRnSUNBZ1pISmhhVzVwYm1jZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0J5ZFc1RGJHVmhjbFJwYldWdmRYUW9kR2x0Wlc5MWRDazdYRzU5WEc1Y2JuQnliMk5sYzNNdWJtVjRkRlJwWTJzZ1BTQm1kVzVqZEdsdmJpQW9ablZ1S1NCN1hHNGdJQ0FnZG1GeUlHRnlaM01nUFNCdVpYY2dRWEp5WVhrb1lYSm5kVzFsYm5SekxteGxibWQwYUNBdElERXBPMXh1SUNBZ0lHbG1JQ2hoY21kMWJXVnVkSE11YkdWdVozUm9JRDRnTVNrZ2UxeHVJQ0FnSUNBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTVRzZ2FTQThJR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWVhKbmMxdHBJQzBnTVYwZ1BTQmhjbWQxYldWdWRITmJhVjA3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lDQWdjWFZsZFdVdWNIVnphQ2h1WlhjZ1NYUmxiU2htZFc0c0lHRnlaM01wS1R0Y2JpQWdJQ0JwWmlBb2NYVmxkV1V1YkdWdVozUm9JRDA5UFNBeElDWW1JQ0ZrY21GcGJtbHVaeWtnZTF4dUlDQWdJQ0FnSUNCeWRXNVVhVzFsYjNWMEtHUnlZV2x1VVhWbGRXVXBPMXh1SUNBZ0lIMWNibjA3WEc1Y2JpOHZJSFk0SUd4cGEyVnpJSEJ5WldScFkzUnBZbXhsSUc5aWFtVmpkSE5jYm1aMWJtTjBhVzl1SUVsMFpXMG9ablZ1TENCaGNuSmhlU2tnZTF4dUlDQWdJSFJvYVhNdVpuVnVJRDBnWm5WdU8xeHVJQ0FnSUhSb2FYTXVZWEp5WVhrZ1BTQmhjbkpoZVR0Y2JuMWNia2wwWlcwdWNISnZkRzkwZVhCbExuSjFiaUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCMGFHbHpMbVoxYmk1aGNIQnNlU2h1ZFd4c0xDQjBhR2x6TG1GeWNtRjVLVHRjYm4wN1hHNXdjbTlqWlhOekxuUnBkR3hsSUQwZ0oySnliM2R6WlhJbk8xeHVjSEp2WTJWemN5NWljbTkzYzJWeUlEMGdkSEoxWlR0Y2JuQnliMk5sYzNNdVpXNTJJRDBnZTMwN1hHNXdjbTlqWlhOekxtRnlaM1lnUFNCYlhUdGNibkJ5YjJObGMzTXVkbVZ5YzJsdmJpQTlJQ2NuT3lBdkx5QmxiWEIwZVNCemRISnBibWNnZEc4Z1lYWnZhV1FnY21WblpYaHdJR2x6YzNWbGMxeHVjSEp2WTJWemN5NTJaWEp6YVc5dWN5QTlJSHQ5TzF4dVhHNW1kVzVqZEdsdmJpQnViMjl3S0NrZ2UzMWNibHh1Y0hKdlkyVnpjeTV2YmlBOUlHNXZiM0E3WEc1d2NtOWpaWE56TG1Ga1pFeHBjM1JsYm1WeUlEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWIyNWpaU0E5SUc1dmIzQTdYRzV3Y205alpYTnpMbTltWmlBOUlHNXZiM0E3WEc1d2NtOWpaWE56TG5KbGJXOTJaVXhwYzNSbGJtVnlJRDBnYm05dmNEdGNibkJ5YjJObGMzTXVjbVZ0YjNabFFXeHNUR2x6ZEdWdVpYSnpJRDBnYm05dmNEdGNibkJ5YjJObGMzTXVaVzFwZENBOUlHNXZiM0E3WEc1d2NtOWpaWE56TG5CeVpYQmxibVJNYVhOMFpXNWxjaUE5SUc1dmIzQTdYRzV3Y205alpYTnpMbkJ5WlhCbGJtUlBibU5sVEdsemRHVnVaWElnUFNCdWIyOXdPMXh1WEc1d2NtOWpaWE56TG14cGMzUmxibVZ5Y3lBOUlHWjFibU4wYVc5dUlDaHVZVzFsS1NCN0lISmxkSFZ5YmlCYlhTQjlYRzVjYm5CeWIyTmxjM011WW1sdVpHbHVaeUE5SUdaMWJtTjBhVzl1SUNodVlXMWxLU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZHdjbTlqWlhOekxtSnBibVJwYm1jZ2FYTWdibTkwSUhOMWNIQnZjblJsWkNjcE8xeHVmVHRjYmx4dWNISnZZMlZ6Y3k1amQyUWdQU0JtZFc1amRHbHZiaUFvS1NCN0lISmxkSFZ5YmlBbkx5Y2dmVHRjYm5CeWIyTmxjM011WTJoa2FYSWdQU0JtZFc1amRHbHZiaUFvWkdseUtTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0Nkd2NtOWpaWE56TG1Ob1pHbHlJR2x6SUc1dmRDQnpkWEJ3YjNKMFpXUW5LVHRjYm4wN1hHNXdjbTlqWlhOekxuVnRZWE5ySUQwZ1puVnVZM1JwYjI0b0tTQjdJSEpsZEhWeWJpQXdPeUI5TzF4dVhHNWNibHh1THk4dkx5OHZMeTh2THk4dkx5OHZMeTh2WEc0dkx5QlhSVUpRUVVOTElFWlBUMVJGVWx4dUx5OGdMaTl1YjJSbFgyMXZaSFZzWlhNdmNISnZZMlZ6Y3k5aWNtOTNjMlZ5TG1welhHNHZMeUJ0YjJSMWJHVWdhV1FnUFNBelhHNHZMeUJ0YjJSMWJHVWdZMmgxYm10eklEMGdNQ0pkTENKemIzVnlZMlZTYjI5MElqb2lJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9kaXN0L2NoYXJ0eC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9