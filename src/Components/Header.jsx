import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div>
<Navbar collapseOnSelect expand="lg" fixed="top" className="" style={{backgroundColor:"#e9f5f6",marginBottom:"30%"}}>
      <Container>
        <Navbar.Brand style={{fontFamily:' "Marcellus SC", serif',fontSize:"26px"}}> <b>Help 360</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <Nav.Link ><b>Home</b></Nav.Link>
            <Nav.Link >
             <b>About</b> 
            </Nav.Link>
            <Nav.Link >
             <b>Service</b> 
            </Nav.Link>
            <Nav.Link >
             <b>Contact</b> 
            </Nav.Link>
            <Nav.Link>
             <b>Map</b> 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header