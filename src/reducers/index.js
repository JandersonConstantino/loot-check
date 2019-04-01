import { createStore, combineReducers } from 'redux'

import rootReducer from './balance'

const store = createStore(
  combineReducers({
    balance: rootReducer,
  })
)

export default store