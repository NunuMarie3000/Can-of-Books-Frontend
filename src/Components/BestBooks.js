import React from 'react';
import axios from 'axios'
import { Carousel, Card } from 'react-bootstrap'

import AddBook from './crud/AddBook';
import DeleteBook from './crud/DeleteBook';
import UpdateBook from './crud/UpdateBook';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: '',
    }
  }

  getAllBooks = async () => {
    const url = `${process.env.REACT_APP_SERVER}books`
    const allBooks = await axios.get(url)
    this.setState({ books: allBooks.data })
  }

  componentDidMount = () => {
    this.getAllBooks()
  }

  addNewBooks = (newBook) => {
    this.setState({ books: [...this.state.books, newBook] })
  }

  render() {
    return (
      <>
        <div className='best-books-container'>
          <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

          {this.state.books.length !== 0 ? (<Carousel fade>
            {this.state.books.map(book =>
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
                      <p>Status: {book.status ? 'Available':'Not Available'}
                      </p>
                    </div>
                    <div className='back-cover'></div>
                  </div>
                  <Card.Body>
                    <Card.Text>
                      <div className='edit-buttons-container'>
                        <AddBook addNewBooks={this.addNewBooks} />
                        <UpdateBook bookId={book._id} getAllBooks={this.getAllBooks} title={book.title} image={book.image} description={book.description} staus={book.status} />
                        <DeleteBook bookId={book._id} getAllBooks={this.getAllBooks} />
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>)}</Carousel>) : (<h3>No Books Found :(</h3>)}

          {/* <AddBook addNewBooks={this.addNewBooks} /> */}
        </div>
      </>
    )
  }
}

export default BestBooks;
