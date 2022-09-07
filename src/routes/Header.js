import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

export default function Header() {
  return (
    <>
      <Navbar style={{marginLeft:'1rem'}} collapseOnSelect expand="md">
        <Navbar.Brand style={{fontSize: '2em'}}>Can of Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  )
}



// import React from 'react';
// // import { Navbar, NavItem } from 'react-bootstrap';
// // import { Link } from "react-router-dom";
// import Navigation from './Navigation';

// class Header extends React.Component {
//   render() {
//     return (
//       // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//       //   <Navbar.Brand>My Favorite Books</Navbar.Brand>
//       //   <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
//       //   {/* PLACEHOLDER: render a navigation link to the about page */}
//       // </Navbar>
//       <>
//         <Navigation/>
//       </>
//     )
//   }
// }

// export default Header;
