import * as types from '../constants'

export const setBalance = balance => ({
  type: types.SET_BALANCE,
  payload: balance
})

export const deposit = deposit => ({
  type: types.DEPOSIT,
  payload: deposit
})