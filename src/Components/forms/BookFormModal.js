import { Form, Modal, Button } from 'react-bootstrap'
import axios from 'axios'

import React, { useState } from 'react'

export default function BookFormModal( { modalShow, addButtonFalse, addNewBooks, userEmail, getAccessTokenSilently }) {
  const [show, setShow] = useState(modalShow)
  const [isChecked, setIsChecked] = useState(false)

  const closeModal = () => {
    setShow(false)
    addButtonFalse()
  }

  const toggleStatusCheck = () => {
    setIsChecked(!isChecked)
  }

  const handleFormSubmit = async(e) => {
    e.preventDefault()
    let newBookBody = {
      "title":e.target.title.value,
      "image":e.target.image.value,
      "description":e.target.description.value,
      "status":e.target.status.checked,
      "user": userEmail
    }
    try {
      const token = await getAccessTokenSilently()
      const url = `${process.env.REACT_APP_SERVER}books`
      // const url = 'http://localhost:3001/books'

      await axios.post(url, newBookBody, {
        headers: {
          authorization: `Bearer ${token}`
        }
    }).then((res)=> addNewBooks(res.data)).catch(err=>console.log(err.message))
      // not sure if clearing out the form field is necessary since i immediately close the modal, but here we are
      e.target.title.value = ''
      e.target.image.value = ''
      e.target.description.value = ''
      e.target.status.checked = ''
      closeModal()
    } catch (error) {
      console.log(error.message)
      alert("I'm sorry, there was an error with adding your book. Please try again :) ")
    }
  }

  return (
    <Modal show={show} onHide={closeModal} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Add A Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Book Title </Form.Label>
              <Form.Control required type="text" placeholder="Their Eyes Were Watching God" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
              <Form.Label>Book Cover</Form.Label>
              <Form.Control required type="text" />
              <Form.Text className="text-muted">
                Please use an image address: http://...
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Book Description</Form.Label>
              <Form.Control required type="text" />
              <Form.Text className="text-muted">
                An amazing book by Zora Neale Hurston
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="status">
              <Form.Check type="checkbox" label="Available?" checked={isChecked} onChange={toggleStatusCheck}/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit Book!
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
