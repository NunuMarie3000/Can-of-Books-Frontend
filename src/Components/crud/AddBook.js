import React, { useState } from 'react'

import BookFormModal from '../forms/BookFormModal'

import { Button } from 'react-bootstrap'

export default function AddBook({ addNewBooks, userEmail, getAccessTokenSilently}) {
  const [addButtonClicked, setAddButtonClicked] = useState(false)

  const handleClick = () => {
    setAddButtonClicked(true)
  }

  const addButtonClickedFalse = () => {
    setAddButtonClicked(false)
  }
  return (
    <>
      {!addButtonClicked && <Button variant='success' onClick={handleClick}>Add Book</Button>}

      {addButtonClicked && <BookFormModal getAccessTokenSilently={getAccessTokenSilently} userEmail={userEmail} addNewBooks={addNewBooks} addButtonFalse={addButtonClickedFalse} modalShow={addButtonClicked} />}
    </>
  )
}

