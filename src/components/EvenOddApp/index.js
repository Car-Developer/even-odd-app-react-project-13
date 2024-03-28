import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onClickIncrement = () => {
    const num = Math.floor(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + num}))
  }

  onClickIncrementState = () => {
    const {count} = this.state
    if (count % 2 === 0) {
      return 'Even'
    }
    return 'Odd'
  }

  render() {
    const stage = this.onClickIncrementState()
    console.log(stage)
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          <p className="paragraph">Count is {stage}</p>
          <div>
            <button
              className="button"
              type="button"
              onClick={this.onClickIncrement}
            >
              Increment
            </button>
          </div>
          <p>*increase by Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
