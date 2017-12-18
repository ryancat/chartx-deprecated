import uuidv1 from 'uuid/v1'
import {combineReducer, createReducer} from './stateManager'
import dataReducer from './reducers/dataReducer'
import frsReducer from './reducers/frsReducer'
import {
  storeRefresh
} from './actions/storeAction'
import {
  setRenderer
} from './actions/chartAction'

export default class Chart {
  constructor (store) {
    this.id = uuidv1()
    this.store = store

    // Add reducer to store
    this.store.asyncReducerMap[this.id] = combineReducer({
      data: dataReducer,
      frs: frsReducer
    })
    this.store.replaceReducer(createReducer(this.store.asyncReducerMap))
    this.store.dispatch(storeRefresh())
  }

  /**
   * Get the state for this chart
   */
  getState () {
    return this.store.getState(this.id)
  }

  /**
   * Set the renderer for this chart
   * 
   * @param {string} renderer 
   */
  setRenderer (renderer) {
    this.store.dispatch(setRenderer(this.id, renderer))
  }

  /**
   * Render a chart with given config
   */
  render () {
    if (this.isDirty) {

    }

    // TODO: with large data scale, the FRS may not be ready just yet.
    // We may need to have some kind of waiting logic to render it
    const frs = this.store.getState(this.id).frs

    // TODO: hock up with renderers to render FRS
    return this
  }

  dispatch (action) {
    this.store.dispatch(action)
  }

  setData (chartData) {

    return this
  }

  setName (chartName) {

    return this
  }

  // When there is no numeric data, we will use default measure to render chart
  setDefaultMeasure (defaultMeasure = chartx.constant.COUNT) {

    return this
  }

  // The data on axis will be grouped by the order in given array
  setGroupby (aspect, groupbys) {

    return this
  }

  // The size for axis will be applied on all other dimentions. For example, in
  // this case the size of x is 0, meaning we don't need to render any length on
  // y or z axis. We want the height of bars to be determined by data only
  // Note that the unit for size is determined by the size of tick intervals on
  // other axis. In this case, if the total length of x axis is 100px, and there
  // are 10 ticks, then the unit length is 10px for y axis.
  setSize (aspect, unitValue) {

    return this
  }

  // Note that the unit for tick is determined by the size of render result on
  // this axis. In this case, we render size of y as 1 unit (which is the interval
  // of x ticks), hence 0.5 will be the middle of bars (default). The optional 
  // formatXTick function is used to format the tick value
  setTick (aspect, unitValue, formatFn) {

    return this
  }

  setContainer (container) {

    return this
  }

  setTheme (theme) {

    return this
  }

  watch () {

    return this
  }

  /**
   * The death of this chart
   */
  dispose () {

  }
}