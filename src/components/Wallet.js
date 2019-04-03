import React from "react"
import { connect } from "react-redux"
import { deposit, withDraw } from  "../actions/balance"

export class Wallet extends React.Component {
  state = {
    balance: undefined
  }

  updateBalance = e => this.setState({ balance: parseInt(e.target.value, 10) })

  deposit = () => this.props.deposit(this.state.balance)

  withDraw = () => this.props.withDraw(this.state.balance)

  render = () => {
    return (
      <div>
        <h3 className="balance">
          Wallet balance: {this.props.balance}
        </h3>
        <br />
        <input
          className="input-wallet"
          onChange={this.updateBalance}
        />
        <button
          className="btn-deposit"
          onClick={this.deposit}
          children="Deposit"
        />
        <button
          className="btn-withdraw"
          onClick={this.withDraw}
          children="Withdraw"
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  balance: state.balance
})

export default connect(mapStateToProps, {
  deposit, withDraw,
})(Wallet)
