import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const count = searchInput.length

    return (
      <div className="bg-container">
        <div className="left-container">
          <h1 className="title">Calculate the Letters you enter</h1>
          <label htmlFor="label" className="label-element">
            Enter the phrase
          </label>
          <input
            type="text"
            className="input-element"
            placeholder="Enter the phrase"
            id="label"
            onChange={this.onChangeSearchInput}
          />
          <div className="count-container">
            <p className="count-text">No.of letters: {count}</p>
          </div>
        </div>
        <div className="right-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
