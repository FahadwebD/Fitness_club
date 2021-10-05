import React from 'react';
import { Col, Row  , Button, Container} from 'react-bootstrap';
import f_logo from '../../images/31732731-colorful-figure-of-a-man-running-removebg-preview.png';
import { faFacebook , faInstagram , faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {

    const facebook = <FontAwesomeIcon icon={faFacebook} />
    const insta = <FontAwesomeIcon icon={faInstagram} />
    const twitter = <FontAwesomeIcon icon={faTwitter} />
    return (
        
        <div className='bg-light pt-5'   >
             <Container >
        <Row>
        <Col xs={5} md={4}>
        <img className='img-fluid' style={{height:200 }} src={f_logo} alt="" />
      </Col>
   <Col xs={7} md={8}>
     <p>Established in 1993, the Australian Fitness Academy specialises in the delivery of nationally accredited fitness and personal training qualifications and have assisted thousands of graduates to create rewarding careers as exercise professionals.</p>
     <Row md={4}>
       <Col><Button>Enquire</Button>
       </Col>
           <Col><h4>ENROL TODAY</h4>
               <Col><p>1746360969</p></Col>
               </Col>
               <Col><h4>RESOURCES</h4>
               <Col><p>Student Note Book</p></Col>
               </Col>
               
               <Col><h4>Find Us</h4>
               <Col>{facebook} {insta} {twitter}</Col>
               
               </Col>
      </Row>
   </Col>
   <hr />
   <p>RTO Provider No. 21022 | Copyright © 2021  Fitness House Academy Disclaimer | Privacy Policy | Terms And Conditions</p>
  </Row>
  </Container>
  </div>
  
    );
};

export default Footer;