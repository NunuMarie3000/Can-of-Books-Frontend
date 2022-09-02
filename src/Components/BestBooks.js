import React from 'react';
import axios from 'axios'
import { Carousel, Card } from 'react-bootstrap'

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

        
        {this.state.books !== '' ? (<Carousel fade style={{width: '36rem'}}>
          {this.state.books.map(book => 
      <Carousel.Item  key={book._id} >
        <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '2rem'}}>
								<Card.Img variant="top" src={book.image} alt={`${book.title} book cover`} style={{width:'18rem', height: '24rem'}}/>
								<Card.Body>
									<Card.Title>{book.title}</Card.Title>
									<Card.Text>{book.description}</Card.Text>
								</Card.Body>
							</Card>
      </Carousel.Item>)}</Carousel>) : (
          <h3>No Books Found :(</h3>
        )}
        
      </>
    )
  }
}

export default BestBooks;
