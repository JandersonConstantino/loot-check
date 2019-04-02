import * as types from "../constants"

const INITIAL_STATE = 0

const balance = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.SET_BALANCE:
      return action.payload

    case types.DEPOSIT:
      return state + action.payload

    default:
      return state
  }
}

export default balance
