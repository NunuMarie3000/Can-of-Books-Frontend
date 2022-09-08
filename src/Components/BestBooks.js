import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'
import { Carousel, Card } from 'react-bootstrap'

import AddBook from './crud/AddBook';
import DeleteBook from './crud/DeleteBook';
import UpdateBook from './crud/UpdateBook';
import Login from './auth/Login';
import welcome from './media/welcome.jpg'

export default function BestBooks() {

  const {
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();
  const [books, setBooks] = useState([{
    title: 'Welcome to Can of Books!',
    image: welcome,
    description: "This is an interactive book library for your life. Feel free to add your own books, edit, and delete to your heart's content!",
    status:false,
    _id:1
  }])
  const [userID, setUserID] = useState('')

  const getAllBooks = async () => {
    // getting my access token
    // after setting audience and scope in index.js, its now my jwt, i need to send it as auth headers in my get request 
    try {
      const token = await getAccessTokenSilently()
      const url = `${process.env.REACT_APP_SERVER}books`
      // const url = 'http://localhost:3001/books'
      const response = await axios.get(url, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      setBooks([...books, response.data.books])
      setUserID(response.data.userInfo._id)
    } catch (error) {
      console.log(error.message)
    }
  }

  const addNewBooks = (newBook) => {
    setBooks([...books, newBook])
  }

  // basically same as componentDidMount, but only if i add the empty dependency array
  useEffect(() => {
    getAllBooks()
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isAuthenticated ? <> <div className='best-books-container'>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {books !== '' ? (<Carousel fade>
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
                      <AddBook addNewBooks={addNewBooks} userID={userID} />
                      <UpdateBook userID={userID} bookId={book._id} getAllBooks={getAllBooks} title={book.title} image={book.image} description={book.description} staus={book.status} />
                      <DeleteBook bookId={book._id} getAllBooks={getAllBooks} />
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>)}</Carousel>) : (<h3>No Books Found :(</h3>)}
      </div></> : <Login />}


      {/* <div className='best-books-container'>
        <Button onClick={loginWithRedirect}>Login</Button>
        <Button onClick={logout}>Logout</Button>
        <h3>User is {isAuthenticated ? 'Logged in' : 'Not logged in'}</h3>
        <Button onClick={callProtectedApi}>call protected api</Button>
        <Button onClick={callApi}>call unprotect api</Button>
        {isAuthenticated && <pre>{JSON.stringify(user, null, 2)}</pre>}
      </div> */}
    </>
  )
}
