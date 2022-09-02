import React from 'react';
// import { Navbar, NavItem } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import Navigation from './Navigation';

class Header extends React.Component {
  render() {
    return (
      // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      //   <Navbar.Brand>My Favorite Books</Navbar.Brand>
      //   <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
      //   {/* PLACEHOLDER: render a navigation link to the about page */}
      // </Navbar>
      <>
        <Navigation/>
      </>
    )
  }
}

export default Header;
