import * as types from "../constants"

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_BITCOIN:
      return action.payload

    default:
      return state
  }
}