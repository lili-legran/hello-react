import React from 'react';

class Counter extends React.Component {
  state = {
    currentNumber: 0
  }
  componentDidMount() {
    if (this.props.startNumber) {
      this.setState({
        currentNumber: this.props.startNumber
      })
    }
  }
  increaseCurrentNumber = () => {
    this.setState({
      currentNumber: this.state.currentNumber + 1
    })
  }
  decreaseCurrentNumber = () => {
    this.setState({
      currentNumber: this.state.currentNumber - 1
    })
  }
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <button onClick={this.decreaseCurrentNumber}>-</button>
        {this.state.currentNumber}
        <button onClick={this.increaseCurrentNumber}>+</button>
      </div>
    )
  }
}

export default Counter;