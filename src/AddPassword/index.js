import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordList from '../PasswordList'

import './index.css'

class AddPassword extends Component {
  state = {
    passwordList: [],
    website: '',
    name: '',
    password: '',
  }

  updateWeb = event => {
    this.setState({website: event.target.value})
  }

  updateName = event => {
    this.setState({name: event.target.value})
  }

  updatePass = event => {
    this.setState({password: event.target.value})
  }

  deleteItemId = id => {
    const {passwordList} = this.state
    const requiredList = passwordList.filter(eachList => eachList.id !== id)
    this.setState({passwordList: requiredList})
  }

  updateDetails = event => {
    event.preventDefault()
    const colorCode = ['darkred', 'green', 'yellow', 'lightgreen', 'orange']
    const randomCode = Math.floor(Math.random() * (colorCode.length - 1))
    const bgColor = colorCode[randomCode]
    const {website, name, password} = this.state
    const newList = {
      id: uuidv4(),
      web: website,
      Name: name,
      pass: password,
      BGColor: bgColor,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newList],
      website: '',
      name: '',
      password: '',
    }))
  }

  render() {
    const {passwordList, website, name, password} = this.state
    return (
      <div className="main-card">
        <div className="first-card">
          <div className="add-image-container1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="passwordManager-image"
            />
          </div>
          <div className="form-card">
            <form onSubmit={this.updateDetails}>
              <h1 className="addHeading">Add New Password</h1>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="icon-image"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  value={website}
                  onChange={this.updateWeb}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="icon-image"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  value={name}
                  onChange={this.updateName}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="icon-image"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={this.updatePass}
                />
              </div>
              <div className="add-btn-container">
                <button type="submit" className="add-btn">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="add-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="passwordManager-image"
            />
          </div>
        </div>
        <PasswordList listItem={passwordList} deleteItem={this.deleteItemId} />
      </div>
    )
  }
}

export default AddPassword
