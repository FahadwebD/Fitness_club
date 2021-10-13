import React, { useState } from 'react';
import { Offcanvas , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartCanvas from '../CartCanvas/CartCanvas';


const Cart = (props) => {
   
    const{cart}= props
    let price = 0;
    for( const product of cart){
        price = price + product.price
    }
   
    const [show, setShow] = useState(false);
   

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
   
   return (
    <div>
    <Button style={{position:'fixed' , top:300 , float:'right', left:1240 }}  variant="primary" onClick={handleShow} >
  Cart
  <h4 style={{backgroundColor:'black' ,padding:20}}>${price}</h4>
</Button>
     
<Offcanvas show={show} onHide={handleClose} >
  <Offcanvas.Header closeButton>
    <Offcanvas.Title>Cart</Offcanvas.Title>
  </Offcanvas.Header>
  <Offcanvas.Body>
   {
        cart.map(h=> < CartCanvas 
         
          data={h}
      >
        </CartCanvas>)
   }
  </Offcanvas.Body>
 
  {props.children}
</Offcanvas>

    </div>
    );
};

export default Cart;