import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

export default class DeleteBook extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      book_id: this.props.bookId,
      isLoading:false,
    }
  }

  handleDelete = async() => {
    if(this.state.book_id === 1) return alert("I'm sorry, but you cannot delete the welcome book")
    try {
      this.setState({isLoading: true})
      console.log('hey')
      const url = `${process.env.REACT_APP_SERVER}books/${this.state.book_id}`
      // const url =  `http://localhost:3001/books/${this.state.book_id}`
      await axios.delete(url).then(()=>this.setState({isLoading: false}))
      this.props.getAllBooks()
    } catch (error) {
      console.log(error.message)
      alert("I'm sorry, there seems to be an issue with deleting your book.Please try again later :)")
    }
  }

  render() {
    return (
      <>
        <Button variant='danger' disabled={this.state.isLoading} onClick={this.handleDelete}>
        {this.state.isLoading ? 'Loading...' : 'Delete'}
        </Button>
      </>
    )
  }
}
