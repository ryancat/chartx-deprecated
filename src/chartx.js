import uuidv1 from 'uuid/v1'
import {combineReducer, createStore, createReducer} from './stateManager'
import Chart from './Chart'




let _store, // The store for all charts state
    _chartMap = {} // chart map to quickly find chart

/**
 * Trigger render loop
 */
function _loop (lastTimestamp) {
  _loop.animationKey = window.requestAnimationFrame(() => {
    const now = Date.now()
    const dt = 1000 / _loop._fps
    _loop._accumulator = _loop._accumulator ? _loop._accumulator : 0
    _loop._accumulator += now - lastTimestamp

    // New frame time
    if (_loop._accumulator >= dt) {
      while (_loop._accumulator >= dt) {
        _loop._accumulator -= dt
      }

      for (let chartId of _chartMap) {
        _chartMap[chartId].render()
      }
      
    }
    _loop(now)
  })
}

const chartx = {
  constant: {
    /**
     * The special COUNT identifier for calculating while rendering
     */
    COUNT: uuidv1()
  },

  /**
   * Spawn a chart instance
   */
  spawn: () => {
    // Create store only when the first chart is about to be spawned
    if (!_store) {
      _store = createStore(createReducer())
    }

    let newChart = new Chart(_store)
    _chartMap[newChart.id] = newChart

    return newChart
  },

  /**
   * Dispose a chart
   */
  dispose: (chart) => {
    if (!chart || !_chartMap[chart.id]) {
      return
    }

    // If we are going to dispose the last chart
    if (Object.keys(_chartMap).length === 1 
      && _chartMap[chart.id]) {
      window.cancelAnimationFrame(_loop.animationKey)
      _store = null
    }

    _chartMap[chart.id] = undefined
    chart.dispose()
  }
}

export default chartx