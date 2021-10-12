import React from 'react';
import { Card , Button } from 'react-bootstrap';

const Products = (props) => {
  
    const{name , brand , price , description , img} = props.data
    return (
        <Card>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <Card.Text>
        <h4>{brand}</h4>
      </Card.Text>
      <Card.Text>
        <h3>${price}</h3>
      </Card.Text>
      <div className='d-flex justify-content-around'>
        <Button>Details</Button>
        <Button  onClick={() => props.addToCart(props.data)}>Buy Now</Button>

    </div>
    </Card.Body>
   
  </Card>
    );
};

export default Products;