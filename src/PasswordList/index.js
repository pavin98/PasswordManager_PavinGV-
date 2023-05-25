import {Component} from 'react'

import './index.css'

const PassWordItem = props => {
  const {item, hiddenPass, deleteFunc} = props
  const intialText = item.web.slice(0, 1).toUpperCase()
  const upadteIdDelete = () => {
    deleteFunc(item.id)
  }
  return (
    <li>
      <div className="intial-Container">
        <p className={`IntialText ${item.BGColor}`}>{intialText}</p>
      </div>
      <div>
        <p>{item.web}</p>
        <p>{item.Name}</p>
        {hiddenPass ? (
          <p>{item.pass}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="star-image"
          />
        )}
      </div>
      <div>
        <button
          type="button"
          className="delete-btn"
          onClick={upadteIdDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

class PasswordList extends Component {
  state = {searchText: '', isChecked: false}

  updateSearchText = event => {
    this.setState({searchText: event.target.value})
  }

  updateCheckBox = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  getDeleteId = id => {
    const {deleteItem} = this.props
    deleteItem(id)
  }

  render() {
    const {listItem} = this.props
    const {searchText, isChecked} = this.state
    const filteredList = listItem.filter(eachList =>
      eachList.web.toLowerCase().includes(searchText.toLowerCase()),
    )
    return (
      <div className="second-card">
        <div className="search-card">
          <div className="list-count">
            <h3>Your Passwords</h3>
            <p className="p-count">{filteredList.length}</p>
          </div>
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="icon-image"
            />
            <input
              className="searchText"
              type="search"
              placeholder="Search"
              value={searchText}
              onChange={this.updateSearchText}
            />
          </div>
        </div>
        <hr className="headingLine" />
        <div className="display-checkbox">
          <input
            id="display-pass"
            type="checkbox"
            checked={isChecked}
            onChange={this.updateCheckBox}
            value={isChecked}
          />
          <label htmlFor="display-pass">Show passwords</label>
        </div>
        {filteredList.length === 0 ? (
          <div className="noPassword">
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
              className="no-passwords"
            />
            <p>No Passwords</p>
          </div>
        ) : (
          <ul>
            {filteredList.map(eachItem => (
              <PassWordItem
                item={eachItem}
                key={eachItem.id}
                hiddenPass={isChecked}
                deleteFunc={this.getDeleteId}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default PasswordList
