import * as types from "../constants"
import { read_cookie, bake_cookie } from "sfcookies"

const BALANCE_COOKIE = "BALANCE_COOKIE"

const INITIAL_STATE = 0

const balance = (state = INITIAL_STATE, action) => {
  let balance

  switch (action.type) {
    case types.SET_BALANCE:
      balance = action.payload
      break

    case types.DEPOSIT:
      balance = state + action.payload
      break

    case types.WITHDRAW:
      balance = state - action.payload
      break

    default:
      balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state
      break
  }

  bake_cookie(BALANCE_COOKIE, balance)

  return balance
}

export default balance
