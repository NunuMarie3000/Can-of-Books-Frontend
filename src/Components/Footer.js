import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
        <Navbar>
        <Navbar.Brand style={{textAlign:'right'}}>Storm O'Bryant <br/>&copy;StormyWeatherCreations, 2022</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
