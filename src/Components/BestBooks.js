import React from 'react';
import axios from 'axios'
import { Carousel, Card } from 'react-bootstrap'

import AddBook from './AddBook';
import DeleteBook from './DeleteBook';

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

          {this.state.books.length !== 0 ? (<Carousel fade style={{ width: 'auto' }}>
            {this.state.books.map(book =>
              <Carousel.Item key={book._id}>
                <Card className='book-card'>
                  <Card.Img className='card-img' variant="top" src={book.image} alt={`${book.title} book cover`} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.description}<br />{<DeleteBook bookId={book._id} getAllBooks={this.getAllBooks} />}</Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>)}</Carousel>) : (<h3>No Books Found :(</h3>)}

          <AddBook addNewBooks={this.addNewBooks} />
        </div>
      </>
    )
  }
}

export default BestBooks;
