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
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length !== 0 ? (<Carousel fade style={{ width: '36rem' }}>
          {this.state.books.map(book =>
            <Carousel.Item key={book._id}>
              <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '2rem' }}>
                <Card.Img variant="top" src={book.image} alt={`${book.title} book cover`} style={{ width: '18rem', height: '24rem' }} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.description}</Card.Text>
                  <Card.Footer>{<DeleteBook bookId={book._id} getAllBooks={this.getAllBooks}/>}</Card.Footer>
                </Card.Body>
              </Card>
            </Carousel.Item>)}</Carousel>) : (
          <h3>No Books Found :(</h3>
        )}

        <AddBook addNewBooks={this.addNewBooks} />

      </>
    )
  }
}

export default BestBooks;
