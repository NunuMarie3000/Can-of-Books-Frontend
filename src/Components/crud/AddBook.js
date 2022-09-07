import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

import BookFormModal from '../forms/BookFormModal'

export default class AddBook extends Component {
  constructor(props) {
    super(props)

    this.state = {
      addButtonClicked: false,
    }
  }

  handleClick = () => {
    this.setState({addButtonClicked: true})
  }

  addButtonClickedFalse = () => {
    this.setState({addButtonClicked: false})
  }

  render() {
    return (
      <>
        {!this.state.addButtonClicked && <Button variant='success' onClick={this.handleClick}>Add Book</Button>}

        {this.state.addButtonClicked && <BookFormModal addNewBooks={this.props.addNewBooks} addButtonFalse={this.addButtonClickedFalse} show={this.state.addButtonClicked}/>}
      </>
    )
  }
}
