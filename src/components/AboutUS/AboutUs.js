import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import backg from '../../images/h2.jpg';
import start from '../../images/First-Step-Image.webp';

const AboutUs = () => {
    return (
      <div>
            <div  style={{marginTop:100}}>
             <div className=' d-flex flex-column justify-content-center align-items-center' style={{ 
            backgroundImage:`url(${backg})` ,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: "100%",
        height: '75vh',
    
            
          }}>
       
            
        
          </div>
          
        </div>
        <div className='m-5'>
            <h1 className=' fs-1 fw-bold'>ABOUT US</h1>
            <hr />
                <h2 className=' fs-2 fw-bold'>TRAINING TOMORROW'S FITNESS LEADERS!</h2>
                <p>Established in 1993, the Club Fitness House Academy is an industry-leading fitness education provider.

With many years of experience in developing and delivering nationally-recognised fitness qualifications, we pride ourselves on offering the highest standard of fitness courses in Bangladesh.

We are committed to graduating the industry’s most knowledgeable and job-ready fitness professionals, and to help educate the next generation of Personal Trainers.</p>
            </div>


            <div>
            <div className='d-flex flex-row  align-items-center' >
                <div >
                    <img style={{height:500 , width:500}} src={start} alt="" />
                </div>
                <div>
                    <h2>STUDYING WITH AUSTRALIAN FITNESS ACADEMY</h2>
                    <br />
                    <br />
                    <br />
                    <p>We cater to all learning styles by offering students the choice to study either online or face-to-face. These flexible study options ensure our students can complete their qualifications, while also maintaining regular work and other lifestyle commitments.

Our dedicated Student Support team is committed to assisting our students through every step of the learning journey. No matter what mode of study you choose, our team are always available to provide you with the assistance you need to gain your qualifications. We are only ever a phone call, email or face-to-face chat away!</p>
                    
                </div>
            </div>
            </div>
            <div className='d-flex flex-row  align-items-center mt-4' >
             
            <div>
                    <h2>"<h2>In the process of becoming the leading fitness educator in Australia, we have built a strong network of industry connections and have developed partnerships with a number of key fitness businesses.</h2>"</h2>
                    <br />
                    <br />
                    <br />
                    <p>Our broad-reaching industry network helps connect our students directly with employers and opens up a wide range of employment opportunities upon completion of the course.

Not only are we committed to graduating the most ready-made fitness professionals in the industry, we also specialise in the development and delivery of Professional Development Courses. These Short Courses and Workshops aim to ensure fitness professionals continue to enhance their personal training skills, keep their knowledge up-to-date and gain valuable CEC points to put towards their industry registration.</p>
                    
                </div>
                <div >
                    <img style={{height:500 , width:500}} src={start} alt="" />
                </div>
            </div>
            <div className='mt-2 p-5 '>
            <h2>OUR QUALITY STANDARDS</h2>
            <hr />
            <br />
            <br />
       <Row>
       <Col sm={6}><p>The Bangladesh Fitness Academy is a nationally Registered Training Organisation (RTO), accredited by the Bangladesh Skills Quality Authority (BSQA).

As such, we are required to deliver qualifications that meet the strict BSQA compliance requirements and are regularly audited to ensure these standards are maintained.</p></Col>
    <Col sm={6}><p>Our qualifications and professional development programs are industry recognised for their standard of excellence. Our processes ensure the fitness courses are consistently reviewed and updated so that the highest quality of education is provided to students. We want our graduates to be completely prepared for employment when they enter the fitness industry and our course content and delivery reflect this vision.</p></Col>
  </Row>
  <br />
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

export default AboutUs;