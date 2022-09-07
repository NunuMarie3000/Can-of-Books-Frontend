import React from 'react';
import Header from './routes/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import './index.css'

class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>
    )
  }
}

export default App;
