import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar className='footer' collapseOnSelect expand="md">
        <Navbar.Brand>Storm O'Bryant <br/>&copy;StormyWeatherCreations, 2022</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
