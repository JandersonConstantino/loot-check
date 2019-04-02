import * as types from "../../constants"
import balanceReducer from "../balance"

describe("balanceReducer", () => {
  it("set a balance", () => {
    const balance = 10

    expect(balanceReducer(undefined, {
      type: types.SET_BALANCE,
      payload: balance
    })).toEqual(balance)
  })

  it("deposits into the balance", () => {
    const deposit = 20
    const initialState = 5

    const expectedValue = deposit + initialState

    expect(balanceReducer(initialState, {
      type: types.DEPOSIT,
      payload: deposit
    })).toEqual(expectedValue)

  })
})