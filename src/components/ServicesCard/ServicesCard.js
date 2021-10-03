import React from 'react';
import { Card, Col ,Button } from 'react-bootstrap';

const ServicesCard = (props) => {
    console.log(props.data)
    const {  course,certificate, img ,description } = props.data
      
    return (
        <div>
            <Col>
      <Card>
        <Card.Img variant="top" style={{height:300}} src={img} />
        <Card.Body>
          
          <h3>{course}</h3>
          <Card.Title>{certificate}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button>Learn More</Button>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
   
};

export default ServicesCard;