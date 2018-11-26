import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../icons/add.svg'
class AddSearchButton extends Component {
  state = {
    showSearchPage: false
  }
  render() {
    return (
      <div className="open-search">
      <Link
            to='/search'
            className='addmorebutton'>
            Add more</Link>
      </div>
    )
  }
}

export default AddSearchButton
