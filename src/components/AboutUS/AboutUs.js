import React from 'react';
import { Button } from 'react-bootstrap';
import backg from '../../images/h2.jpg'

const AboutUs = () => {
    return (
        <div  style={{marginTop:100}}>
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
                <Button className='btn-lg '>Speak To One Of Our Career Advisor</Button>
            </div>
        
          </div>
        </div>
    );
};

export default AboutUs;