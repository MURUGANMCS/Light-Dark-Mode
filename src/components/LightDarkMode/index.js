// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onChange = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const isModelClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="mode-container">
        <div className={` ${isModelClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="btn" onClick={this.onChange}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
