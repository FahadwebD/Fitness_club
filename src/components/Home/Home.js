import React, { useEffect, useState } from 'react';
import backg from '../../images/homebg.jpg'
import { Button, Col,  Container,  Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight  } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/headerlogo.png'
import ServicesHome from '../ServicesHome/ServicesHome';
import Footer from '../Footer/Footer';

const Home = () => {

    const [homeService , setHomeService] = useState([])
    useEffect(()=>{
        fetch('./services-home.JSON')
        .then(res => res.json())
        .then(data =>  setHomeService(data))
    } ,[])
    const rightC = <FontAwesomeIcon icon={faCaretRight } />
    return (
        <div>
            <div className=' d-flex flex-column justify-content-center align-items-center' style={{ 
            backgroundImage:`url(${backg})` ,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: "100%",
        height: '90vh',
        marginTop:100
            
          }}>
       
            <div>
                <h2 className='text-white fs-1 fw-bold'>GET ON THE FAST TRACK TO YOUR FITNESS <span >CAREER</span></h2>
            </div>
            <div>
                <Button className='btn-lg '>Speak To One Of Our Career Advisor {rightC}</Button>
            </div>
        
          </div>

         <div className='container d-flex flex-column mt-5 mb-5'>
             <h3 className='dark'>Established in 1993, the  Fitness House Academi Club specialises in the delivery of nationally accredited fitness and personal training qualifications.</h3>
             <hr />
             <h5 className='fst-italic fw-lighter'>FHCA has assisted thousands of graduates to create rewarding careers as exercise professionals. We have delivered the SIS30315 Certificate III in Fitness and SIS40215 Certificate IV in Fitness for more than 28 years, with flexible study options allowing students to choose whether to complete their course either face-to-face or online.

            As the leading online fitness education provider in the country, we have developed a course that is interactive, engaging and insightful, equipping you with the knowledge and skills required to become a fully-qualified Gym Instructor and Personal Trainer.

            We also work with a large range of organisations across the fitness industry to support our students throughout their entire learning journey with us, from enrolment right through to graduation.</h5>
         </div>
         <div className='bg-dark mt-5 mb-5 p-4'>
            <div className='container d-flex flex-column p-4' >
           <div className='container mb-2'>
           <h2 className='text-white'>PARTNERING WITH LEADERS IN BANGLADESH FITNESS</h2>
            < hr/>
             <h5  className='text-white  fst-italic fw-lighter'>At AFA, we have built up a strong network of fitness industry relationships which help connect students to the industry through work placement and employment. Our partners include:</h5>
           </div>
           <div className='container'>
           <Row md={4}>
                 <Col><img style={{height:100 , width:200}} src={logo} alt="" /></Col>
                 <Col><img style={{height:100 , width:200}} src={logo} alt="" /></Col>
                 <Col><img style={{height:100 , width:200}} src={logo} alt="" /></Col>
                 <Col><img style={{height:100 , width:200}} src={logo} alt="" /></Col>
                   
                
            </Row>
           </div>
            </div>
           
            
         </div>
         <div className='container mb-5'>
             <h2>CAREER PATHWAYS</h2>
             
            <Row xs={1} md={4} className="g-2">
                {
                    homeService.map(data => <ServicesHome 
                    key={data.id}
                    data={data}
                    ></ServicesHome>)
                }
            </Row>
            </div>
           
                
 
                     
                

            


        </div>
    );
};

export default Home;