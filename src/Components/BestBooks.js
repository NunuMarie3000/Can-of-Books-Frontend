import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
import { Carousel, Card } from 'react-bootstrap'

import AddBook from './crud/AddBook';
import DeleteBook from './crud/DeleteBook';
import UpdateBook from './crud/UpdateBook';
import Login from './auth/Login';

export default function BestBooks() {

  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [books, setBooks] = useState('')

  const getAllBooks = async () => {
    // getting my access token
    // after setting audience and scope in index.js, its now my jwt, i need to send it as auth headers in my get request 
    try {
      const token = await getAccessTokenSilently()
    
      const url = `${process.env.REACT_APP_SERVER}books`
      const allBooks = await axios.get(url, {
        headers:{
          authorization: `Bearer ${token}`
        }
      })
      setBooks(allBooks.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const addNewBooks = (newBook) => {
    setBooks([...books, newBook])
  }

  // basically same as componentDidMount
  useEffect(() => {
    getAllBooks()
  });

  return (
    <>
      {isAuthenticated ? <> <div className='best-books-container'>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {books.length !== 0 ? (<Carousel fade>
          {books.map(book =>
            <Carousel.Item key={book._id}>
              <Card className='book-card'>
                <div className='book'>
                  <Card.Img className='card-img' variant="top" src={book.image} alt={`${book.title} book cover`} />
                  <div className='page'></div>
                  <div className='page'></div>
                  <div className='page'></div>
                  <div className='page'></div>
                  <div className='page'></div>
                  <div className='last-page'>
                    <h2>{book.title}</h2>
                    <p>{book.description}</p>
                    <p>Status: {book.status ? 'Available' : 'Not Available'}
                    </p>
                  </div>
                  <div className='back-cover'></div>
                </div>
                <Card.Body>
                  <Card.Text>
                    <div className='edit-buttons-container'>
                      <AddBook addNewBooks={addNewBooks} />
                      <UpdateBook bookId={book._id} getAllBooks={getAllBooks} title={book.title} image={book.image} description={book.description} staus={book.status} />
                      <DeleteBook bookId={book._id} getAllBooks={getAllBooks} />
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>)}</Carousel>) : (<h3>No Books Found :(</h3>)}
      </div></> : <Login />}
    </>
  )
}
