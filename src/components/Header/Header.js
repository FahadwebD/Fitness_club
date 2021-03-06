import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { faHome  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import f from '../../images/headerlogo.png'


const Header = () => {
    const element = <FontAwesomeIcon icon={faHome} />
  
    return (
        <div>
            <Navbar bg="dark" fixed="top" expand="lg">
  <Container fluid>
    <Navbar.Brand   ><img style={{height:80 , width:190 }}  src={f} alt="" /></Navbar.Brand>
    <Navbar.Toggle  aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto "
        style={{ maxHeight: '100px'  }}
        navbarScroll
      >
          <Nav.Link style={{ color:'white' }} as={Link} to='/home'  >{element}</Nav.Link>
        <Nav.Link style={{ color:'white' }} as={Link} to='/aboutus'   >About Us</Nav.Link>
        
        <Nav.Link style={{ color:'white' }} as={Link}  to='/services' >Services</Nav.Link>
          
        <Nav.Link style={{ color:'white' }} as={Link}  to='/blogs' >Blogs</Nav.Link>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title={
            <span style={{color:'white'}}>Resoureces</span>
        }
        
          menuVariant="dark"
        >
          <NavDropdown.Item href='#/shirt'>Personal Trainer Course</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">SIS30315 Certificate III in Fitness</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">SIS40215 Certificate IV in Fitness</NavDropdown.Item>
           <NavDropdown.Item href="#action/3.2">LEAN Nutrition Tech and Coaching</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Optimising Recovery After Exercise</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Advanced Squatting Techniques</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">CEC Courses and Professional Development Workshops</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Professional Development Package</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">HLTAID003 Provide First Aid</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Mental Health First Aid</NavDropdown.Item>
          
          
        </NavDropdown>
        
        <Nav.Link style={{ color:'white' }} as={Link} to='/shop'>Shop</Nav.Link>
       
        
        
      </Nav>
      <Form  className="d-flex">
        
        <Button className="p-2 ">Enquire Now</Button>
        

      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;