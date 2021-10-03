import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import f from '../../images/headerlogo.png'


const Header = () => {
    const element = <FontAwesomeIcon icon={faHome} />
    return (
        <div>
            <Navbar bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand  style={{marginLeft:4}} href="#"><img style={{height:80 , width:190 }}  src={f} alt="" /></Navbar.Brand>
    <Navbar.Toggle  aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-2"
        style={{ maxHeight: '100px'  }}
        navbarScroll
      >
          <Nav.Link style={{ color:'white' }}  href='#/home'>{element}</Nav.Link>
        <Nav.Link style={{ color:'white' }}  href='#/home'>About Us</Nav.Link>
        
        <NavDropdown
          id="nav-dropdown-dark-example"
          title={
            <span style={{color:'white'}}>Courses</span>
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
        <Nav.Link style={{ color:'white' }} href="#action2">Employment</Nav.Link>
        <Nav.Link style={{ color:'white' }} href="#action2">Blogs</Nav.Link>
      </Nav>
      <Form  className="d-flex">
        
        <Button className="p-3">Enquire Now</Button>
        

      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;