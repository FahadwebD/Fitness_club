import React, { useEffect, useState } from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
import { Row , Button} from 'react-bootstrap';
import backg from '../../images/h2.jpg';

const Services = () => {
    const [service , setService] = useState([])
    useEffect(()=>{
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data =>  setService(data))
    } ,[])
    return (
        <div style={{marginTop:100}}>
            <div className=' d-flex flex-column justify-content-center align-items-center' style={{ 
            backgroundImage:`url(${backg})` ,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: "100%",
        height: '50vh',
        marginTop:100
            
          }}>
       
          
        
          </div>
          <div className='m-5'>
                <h2 className=' fs-1 fw-bold'>STUDY TO BECOME A PERSONAL <span >TRAINER</span> TODAY!</h2>
                <p>Whether you're looking to get your fitness career underway or to take the next step in your Professional Development, we deliver a range of fitness and health courses to help you achieve your career goals.

Take a look at our extensive list of online and face-to-face courses below to determine which one is right for you!</p>
            </div>
           <div className='container'>
           <Row xs={1} md={3} className="g-2">
                {
                 
                    service.map(data => 
                    <ServicesCard data= {data}>

                    </ServicesCard>)
                
            }
             </Row>
           </div>
           <div className=' p-5 mt-3' style={{backgroundColor:'#89F261'}}>
               <h1>NOT SURE WHICH FITNESS COURSE IS RIGHT FOR YOU?</h1>
               <hr />
               <h3 className='fst-italic fw-lighter'>
               That's totally fine, we're here to help! Feel free to submit your details via our <a href="http://">Enquiry Form</a> or speak directly with one of our Career Advisors by calling 1300 973 342
               </h3>
           </div>
        </div>
    );
};

export default Services;