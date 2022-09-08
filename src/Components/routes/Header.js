import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Logout from '../auth/Logout'
import { useAuth0 } from "@auth0/auth0-react";


export default function Header() {

  const { isAuthenticated } = useAuth0();

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
            {isAuthenticated && <><LinkContainer to='/profile'>
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
            <Nav.Item><Logout/></Nav.Item></>}
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
