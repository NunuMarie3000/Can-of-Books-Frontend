import React, { useState } from 'react'
import UpdateFormModal from '../forms/UpdateFormModal'
import { Button } from 'react-bootstrap'

export default function UpdateBook({userEmail, getAccessTokenSilently, bookId, getAllBooks, title, image, description}) {
  const [show, setShow] = useState(false)

  const handleUpdateButtonClick = () => {
    if (bookId === 1) return alert("I'm sorry, the welcome book cannot be edited")
    setShow(true)
  }

  const closeModal = () => {
    setShow(false)
  }

  return (
    <>
      {!show && <Button variant='info' onClick={handleUpdateButtonClick}>Update</Button>}

      {show && <UpdateFormModal closeModal={closeModal} getAccessTokenSilently={getAccessTokenSilently} userEmail={userEmail} showTheModal={show} bookId={bookId} getAllBooks={getAllBooks} title={title} image={image} description={description} />}
    </>
  )
}
