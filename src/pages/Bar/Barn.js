import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap';
import { FaHome, AiOutlinePlus } from 'react-icons/fa';
import './navheader.css';
import { Link } from 'react-router-dom';

function Barn() { 
  return (
    <>
      
<Navbar bg="dark" variant="dark" className='shadow-lg' expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand className='head-name' href="/">Kristak</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link Link to="/"> <FaHome /> Home</Nav.Link>
            <Nav.Link to="/product">Product</Nav.Link>
            <Nav.Link to="/service">Service</Nav.Link>
            <Nav.Link to="/galery">Galery</Nav.Link>
            <Nav.Link to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Barn;
