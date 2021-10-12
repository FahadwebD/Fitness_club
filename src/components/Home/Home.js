import React, { useEffect, useState } from 'react';
import backg from '../../images/homebg.jpg'
import { Button, Col,  Image,  Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight  } from '@fortawesome/free-solid-svg-icons';
import { faCheck  } from '@fortawesome/free-solid-svg-icons';

import logo1 from '../../images/beown.png';
import logo2 from '../../images/carrer.png';
import logo3 from '../../images/sfit.png';
import logo4 from '../../images/flexi.png';
import clogo1 from '../../images/attachment_78330871-removebg-preview.png';
import clogo2 from '../../images/attachment_126946868-removebg-preview.png';
import clogo3 from '../../images/attachment_117218919-removebg-preview.png';
import clogo4 from '../../images/attachment_117769297-removebg-preview.png';
import ServicesHome from '../ServicesHome/ServicesHome';
import start from '../../images/First-Step-Image.webp';
import why from '../../images/Why-Work-in-Fitness.webp';
import three from '../../images/girl-fitness-model-pic-1920x1080.jpg'

const Home = () => {

    const [homeService , setHomeService] = useState([])
    useEffect(()=>{
        fetch('./services-home.JSON')
        .then(res => res.json())
        .then(data =>  setHomeService(data))
    } ,[])
    const rightC = <FontAwesomeIcon icon={faCaretRight } />
    const check = <FontAwesomeIcon icon={faCheck } />
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
                <h2 className='text-white fs-1 fw-bold'>GET ON THE FAST TRACK TO YOUR FITNESS CAREER</h2>
            </div>
            <div>
                <Button className='btn '>Speak To One Of Our Career Advisor {rightC}</Button>
            </div>
        
          </div>

         <div className='bg-dark p-5'>
         <div className=' container d-flex flex-column  mb-5'>
             <h3 className=' text-white'>Established in 1993, the  Fitness House Academi Club specialises in the delivery of nationally accredited fitness and personal training qualifications.</h3>
             <hr />
             <h5 className='text-white fst-italic fw-lighter'>FHCA has assisted thousands of graduates to create rewarding careers as exercise professionals. We have delivered the SIS30315 Certificate III in Fitness and SIS40215 Certificate IV in Fitness for more than 28 years, with flexible study options allowing students to choose whether to complete their course either face-to-face or online.

            As the leading online fitness education provider in the country, we have developed a course that is interactive, engaging and insightful, equipping you with the knowledge and skills required to become a fully-qualified Gym Instructor and Personal Trainer.

            We also work with a large range of organisations across the fitness industry to support our students throughout their entire learning journey with us, from enrolment right through to graduation.</h5>
         </div>
         </div>
         <div className=' mt-5 mb-5 p-4'>
            <div className='container d-flex flex-column p-4' >
           <div className='container mb-2'>
           <h2>PARTNERING WITH LEADERS IN BANGLADESH FITNESS</h2>
            < hr/>
             <h5  className=' fst-italic fw-lighter'>At AFA, we have built up a strong network of fitness industry relationships which help connect students to the industry through work placement and employment. Our partners include:</h5>
           </div>
           <div className='container'>
           <Row md={4}>
                 <Col><img style={{height:110 , width:200  }} src={clogo1} alt="" /></Col>
                 
                 <Col><img style={{height:110 , width:200  }} src={clogo2} alt="" /></Col>
                 <Col><img style={{height:110 , width:200  }} src={clogo3} alt="" /></Col>
                 <Col><img style={{height:110 , width:200  }} src={clogo4} alt="" /></Col>
                   
                
            </Row>
           </div>
            </div>
           
            
         </div>
         <div className=' mb-5 bg-light'>
             <h2>CAREER PATHWAYS</h2>
             
            <Row xs={1} md={4} className="g-2" style={{height:600}}>
                {
                    homeService.map(data => <ServicesHome 
                    key={data.id}
                    data={data}
                    ></ServicesHome>)
                }
            </Row>
            </div>
            <div className='container mt-4' >
                <Row>
               
                    <Col xs={12} sm={6}>
                    <img className="img-fluid" style={{height:500 }} src={start} alt="" />
                    </Col>
                
             
                    <Col xs={12} sm={6}> 
                    <h2>TAKE THE FIRST STEP TO YOUR NEW CAREER IN FITNESS!</h2>
                    <p>Stop thinking and start doing! Turn your dream into a reality and fulfil your ambition of working in the fitness industry. Make the best decision of your life that will help establish a successful future!</p>
                    <Button className='btn-lg '>Speak To One Of Our Career Advisor {rightC}</Button>
                    </Col> 

                </Row>
            </div>
            <div className=' container mt-4' >
            <Row>
                
                <Col xs={12} sm={6}>
                    <h2>THERE ARE SO MANY GREAT REASONS TO WORK IN FITNESS</h2>
                    <div className='d-flex flex-column'>
                        <div className='d-flex align-items-center m-3 ' >
                        <Image className='bg-dark' src={logo1} style={{height:50 , width:50}} roundedCircle />
                            <h6 className='p-2'>Be your own boss</h6>
                        </div>
                        <div className='d-flex align-items-center m-3' >
                        <Image className='bg-dark' src={logo2} style={{height:50 , width:50}} roundedCircle />
                            <h6 className='p-2'>Stay fit on the job, and do what you love</h6>
                        </div>
                        <div className='d-flex align-items-center m-3' >
                        <Image className='bg-dark' src={logo3} style={{height:50 , width:50}} roundedCircle />
                            <h6 className='p-2'>Suits career changers or those coming back to work</h6>
                        </div>
                        <div className='d-flex align-items-center m-3' >
                        <Image className='bg-dark' src={logo4} style={{height:50 , width:50}} roundedCircle />
                            <h6 className='p-2'>Flexibility of part-time or full-time jobs</h6>
                        </div>
                    </div>
                    </Col> 

              
               
                <Col xs={12} sm={6}>
                    <img className="img-fluid" style={{height:500 }} src={why} alt="" />
                    </Col> 
               
                </Row>
            </div>
            <div className='  container mt-4' >
            <Row>
           
            <Col xs={12} sm={6}>
                    <img className="img-fluid" style={{height:500 }} src={three} alt="" />
                    </Col> 
                
                
                
                    <Col xs={12} sm={6}>
                    <h2>THERE ARE SO MANY GREAT REASONS TO WORK IN FITNESS</h2>
                    <div className='d-flex flex-column'>
                        <div className='d-flex ' >
                        
                            <p>{check}Flexible payment options (from $50 per week)</p>
                        </div>
                        <div className='d-flex ' >
                        
                        <p>{check}Low upfront costs (starting with just a $100 deposit)</p>
                        </div>
                        <div className='d-flex ' >
                      
                        <p>{check}Readily available support from our team of world-class educators</p>
                        </div>
                        <div className='d-flex ' >
                      
                        <p>{check}Course material constantly updated by our dedicated course development team</p>
                        </div>
                        <div className='d-flex ' >
                      
                        <p>{check}Powerful industry relationships with potential employers</p>
                        </div>
                        <div className='d-flex ' >
                      
                        <p>{check}Industry placement for enhanced practical skill development</p>
                        </div>
                        <div className='d-flex ' >
                        <Button className='btn-lg '>Speak To One Of Our Career Advisor {rightC}</Button>
                        </div>
                    </div>
                     </Col> 

               
                </Row>
            </div>
           
           
            <div className='mt-2 p-5 ' style={{backgroundColor:'#89F261'}}>
       <Row>
    <Col sm={8}><h2>[NEVER MISS A THING]</h2></Col>
    <Col sm={4}><div className='d-flex'><input type="text" /><Button>Subscribe</Button></div></Col>
  </Row>
       </div>
 
                     
                

            


        </div>
    );
};

export default Home;