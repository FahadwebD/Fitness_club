import React from 'react';
import { Card, Col ,Button } from 'react-bootstrap';

const ServicesCard = (props) => {
    console.log(props.data)
    const {  course,certificate, img ,description ,fee } = props.data
      
    return (
        <div>
            <Col>
      <Card>
        <Card.Img variant="left" style={{height:300}} src={img} />
        <Card.Body>
        <Card.Title>{certificate}</Card.Title>

         <p>{course}</p>
         <Card.Title>${fee}</Card.Title>
          
          <Card.Text>
            {description}
          </Card.Text>
          <Button>Enroll Now</Button>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
   
};

export default ServicesCard;