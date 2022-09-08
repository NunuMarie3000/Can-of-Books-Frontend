import React, { Component } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import axios from 'axios'

export default class UpdateFormModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: this.props.show,
      isChecked: false,
    }
  }

  toggleStatusCheck = () => {
    this.setState({ isChecked: !this.state.isChecked })
  }

  handleFormSubmit = async (e) => {
    e.preventDefault()
    const url = `${process.env.REACT_APP_SERVER}books/${this.props.bookId}`
    let newBookBody = {
      "title": e.target.title.value,
      "image": e.target.image.value,
      "description": e.target.description.value,
      "status": e.target.status.checked,
      "reader": this.props.userID
    }
    try {
      await axios.put(url, newBookBody)
      await this.props.getAllBooks()
      this.props.closeModal()
    } catch (error) {
      console.log(error.message)
      alert("I'm sorry, there was an error with updating your book. Please try again :) ")
    }
  }

  render() {
    return (
      <>
        <Modal show={this.state.show} onHide={this.props.closeModal} backdrop="static" keyboard={false}>
          <Modal.Header>
            <Modal.Title>Update Your Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleFormSubmit}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Book Title </Form.Label>
                <Form.Control required type="text" placeholder="Their Eyes Were Watching God" defaultValue={this.props.title} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="image">
                <Form.Label>Book Cover</Form.Label>
                <Form.Control required type="text" defaultValue={this.props.image}/>
                <Form.Text className="text-muted">
                  Please use an image address: http://...
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Book Description</Form.Label>
                <Form.Control required type="text" defaultValue={this.props.description}/>
                <Form.Text className="text-muted">
                  An amazing book by Zora Neale Hurston
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="status">
                <Form.Check type="checkbox" label="Available?" checked={this.state.isChecked} onChange={this.toggleStatusCheck} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Update Book!
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}