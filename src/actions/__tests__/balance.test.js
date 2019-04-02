import * as types from "../../constants"
import * as actions from "../balance"


describe("Balance Reducer", () => {
  it("creates an action to set the balance", () => {
    const balance = 0
  
    const expectedAction = { type: types.SET_BALANCE, payload: balance }
  
    expect(actions.setBalance(balance)).toEqual(expectedAction)
  })
  
  it("creates an action to deposit into the balance", () => {
      const deposit = 20
  
      const expectedAction = { type: types.DEPOSIT, payload: deposit }
  
      expect(actions.deposit(deposit)).toEqual(expectedAction)
  })

  it("creates an action to withdraw from the balance", () => {
    const withDraw = 20

    const expectedAction = { type: types.WITHDRAW, payload: withDraw }

    expect(actions.withDraw(withDraw)).toEqual(expectedAction)
  })
})