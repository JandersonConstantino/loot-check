import { FETCH_BITCOIN } from "../constants"

const URL_FETCH_BITCOIN = "https://api.coindesk.com/v1/bpi/currentprice.json"

export const fetchBitcoin = () => dispatch => {
  return fetch(URL_FETCH_BITCOIN)
    .then(response => response.json())
    .then(json => dispatch({
      type: FETCH_BITCOIN,
      payload: json
    }))
}