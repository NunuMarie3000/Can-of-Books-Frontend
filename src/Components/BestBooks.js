import React from 'react';
import axios from 'axios'
import { Carousel } from 'react-bootstrap'

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: ''
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getAllBooks = async() =>{
    const url = `${process.env.REACT_APP_SERVER}books`
    const allBooks = await axios.get(url)
    this.setState({books: allBooks.data}, ()=>console.log(this.state.books))
  }

  componentDidMount = () => {
    this.getAllBooks()
  }

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        <Carousel variant='dark' fade style={{width: '36rem'}}>
        {this.state.books !== '' ? (
          this.state.books.map(book => 
      <Carousel.Item  key={book._id} >
        <img style={{width:'18rem', height: '24rem'}} alt={book.title} src={book.image}/>
        <Carousel.Caption>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
        </Carousel.Caption>
      </Carousel.Item>)
        ) : (
          <h3>No Books Found :(</h3>
        )}
        </Carousel>
      </>
    )
  }
}

export default BestBooks;
