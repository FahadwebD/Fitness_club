import React, { useEffect, useState } from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
import { Row } from 'react-bootstrap';

const Services = () => {
    const [service , setService] = useState([])
    useEffect(()=>{
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data =>  setService(data))
    } ,[])
    return (
        <div style={{marginTop:100}}>
            <h2>From serrvices</h2>
            <Row xs={1} md={4} className="g-2">
                {
                 
                    service.map(data => 
                    <ServicesCard data= {data}>

                    </ServicesCard>)
                
            }
             </Row>
        </div>
    );
};

export default Services;