import React, { Component } from 'react'
import UpdateFormModal from '../forms/UpdateFormModal'
import { Button } from 'react-bootstrap'

export default class UpdateBook extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }
  }

  handleUpdateButtonClick = () => {
    this.setState({ show: true })
  }

  closeModal = () => {
    this.setState({ show: false })
  }

  render() {
    return (
      <>
        {!this.state.show && <Button variant='info' onClick={this.handleUpdateButtonClick}>Update</Button>}

        {this.state.show && <UpdateFormModal show={this.state.show} closeModal={this.closeModal} bookId={this.props.bookId} getAllBooks={this.props.getAllBooks} title={this.props.title} image={this.props.image} description={this.props.description} staus={this.props.status} />}
      </>
    )
  }
}

