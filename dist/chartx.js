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