import util from './util'

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
export function createStore (reducer) {
  // Init state come from reducer
  let state = reducer()

  return {
    // The async reducer map used to add async reducers into store
    asyncReducerMap: {},
    /**
     * Dispatch action to trigger state changes
     */
    dispatch: (action = {}) => {
      if (process.env.code === 'DEV') {
        // log actions in console
        console.group(action.type)
        console.info('%cbefore:', 'color: green', state)
        console.info('%caction:', 'color: red', action)
      }
      
      // Update state
      state = reducer(state, action)

      if (process.env.code === 'DEV') {
        // log actions in console
        console.info('%cafter:', 'color: green', state)
        console.groupEnd()
      }
    },
    /**
     * Replace the reducer for store to a different one
     * This is useful when we want to dynamically add reducers
     */
    replaceReducer: (newReducer) => {
      reducer = newReducer
    },
    /**
     * Return the current state for given key
     * This is to allow application to 'connect' to state
     */
    getState: (stateKey) => {
      if (!stateKey) {
        return state
      }
      else {
        return state[stateKey]
      }
    }
  }
}

/**
 * Create a reducer based on given reducer map.
 * By wrapping combineReducer function, we have a chance to dynamically
 * add new reducers
 * 
 * @param {object} asyncReducerMap 
 */
export function createReducer (asyncReducerMap = {}) {
  return combineReducer({...asyncReducerMap})
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
export function combineReducer (reducerMap = {}) {
  return (state = {}, action = {}) => {
    let newState = {}

    for (let key in reducerMap) {
      let reducerFn = reducerMap[key],
          existState = state[key] || {}

      if (util.isFunction(reducerFn)) {
        // Pass the whole state down as argument for
        // cross state key access
        newState[key] = reducerFn(existState, action, state, reducerMap)
      } else {
        // Recursively combine nested reducer map
        newState[key] = combineReducer(reducerMap[key])(existState, action)
      }
    }

    return newState
  }
}