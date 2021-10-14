import React from 'react';
import { Card , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = (props) => {
  
    const{ id, name , brand , price , description , img} = props.data
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
        <Button><Link to={`/detail/${id}`}>Detail</Link></Button>
        <Button  onClick={() => props.addToCart(props.data)}>Buy Now</Button>

    </div>
    </Card.Body>
   
  </Card>
    );
};

export default Products;