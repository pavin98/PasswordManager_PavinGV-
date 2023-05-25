import {Component} from 'react'

import AddPassword from './AddPassword'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="bgDetails">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
        </div>
        <AddPassword />
      </div>
    )
  }
}

export default App
