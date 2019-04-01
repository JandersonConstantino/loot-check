import * as types from '../../constants'
import balanceReducer from '../balance'

describe('balanceReducer', () => {
  it('set a balance', () => {
    const balance = 10

    expect(balanceReducer(undefined, {
      type: types.SET_BALANCE,
      payload: balance
    })).toEqual(balance)
  })
})