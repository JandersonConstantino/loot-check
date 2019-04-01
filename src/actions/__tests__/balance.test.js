import * as types from '../../constants'
import * as actions from '../balance'



it('creates an action to set the balance', () => {
  const balance = 0

  const expectedAction = { type: types.SET_BALANCE, payload: balance }

  expect(actions.setBalance(balance)).toEqual(expectedAction)
})