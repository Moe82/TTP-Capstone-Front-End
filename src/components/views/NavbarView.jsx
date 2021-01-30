import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './styles/NavbarView.css'

export default function NavbarView(props) {
  console.log("NavBarView", props)
 
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Attendance tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        {
          !props.isLoggedIn ? 
            <Nav className="mr-auto">
              <Nav.Link ></Nav.Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Contact</Nav.Link>
            </Nav> :
            <Nav className="mr-auto">
              <Nav.Link>Courses</Nav.Link>
              <Nav.Link>Settings</Nav.Link>
            </Nav>
        } 
        {
          !props.isLoggedIn ?
          <Nav.Link>Log in</Nav.Link> :
          <Nav>
            <Nav.Link onClick={()=>props.signout()}>Log out</Nav.Link>
          </Nav>
        }
        </Navbar.Collapse>
      </Navbar>
      </div>
  )
}

