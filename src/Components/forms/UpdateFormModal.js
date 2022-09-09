import React, { useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import axios from 'axios'

export default function UpdateFormModal({ closeModal, bookId, userEmail, getAccessTokenSilently, getAllBooks, title, description, image, showTheModal }) {

  // eslint-disable-next-line
  const [show, setShow] = useState(showTheModal)
  const [isChecked, setIsChecked] = useState(false)

  const toggleStatusCheck = () => {
    setIsChecked(!isChecked)
  }


  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = `${process.env.REACT_APP_SERVER}books/${bookId}`
      // const url = `http://localhost:3001/books/${bookId}`
      let newBookBody = {
        "title": e.target.title.value,
        "image": e.target.image.value,
        "description": e.target.description.value,
        "status": e.target.status.checked,
        "user": userEmail
      }
      await axios.put(url, newBookBody)
      getAllBooks()
      closeModal()
    } catch (error) {
      console.log(error.message)
      alert("I'm sorry, there was an error with updating your book. Please try again :) ")
    }
  }
  return (
    <>
      <Modal show={show} onHide={closeModal} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Update Your Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Book Title </Form.Label>
              <Form.Control required type="text" placeholder="Their Eyes Were Watching God" defaultValue={title} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
              <Form.Label>Book Cover</Form.Label>
              <Form.Control required type="text" defaultValue={image} />
              <Form.Text className="text-muted">
                Please use an image address: http://...
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Book Description</Form.Label>
              <Form.Control required type="text" defaultValue={description} />
              <Form.Text className="text-muted">
                An amazing book by Zora Neale Hurston
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="status">
              <Form.Check type="checkbox" label="Available?" checked={isChecked} onChange={toggleStatusCheck} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Update Book!
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
