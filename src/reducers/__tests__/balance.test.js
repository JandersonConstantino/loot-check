import * as types from "../../constants"
import balanceReducer from "../balance"
import balanceReducer2 from "../balance"

describe("balanceReducer", () => {
  describe("When initializing", () => {
    const balance = 10

    it("set a balance", () => {
      expect(balanceReducer(undefined, { type: types.SET_BALANCE, payload: balance }))
        .toEqual(balance)
    })

    describe("Then re-initializing", () => {
      it("reads the balance from cookies", () => {
        expect(balanceReducer2(undefined, {}))
          .toEqual(balance)
      })
    })
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

  it("withdraws from the balance", () => {
    const initialState = 20
    const withDraw = 5

    const expectedValue = initialState - withDraw

    expect(balanceReducer(initialState, {
      type: types.WITHDRAW,
      payload: withDraw
    })).toEqual(expectedValue)
  })
})