import { createStore, combineReducers } from "redux"

import balance from "./balance"
import bitcoin from "./bitcoin"

const store = createStore(
  combineReducers({
    balance,
    bitcoin,
  })
)

export default store