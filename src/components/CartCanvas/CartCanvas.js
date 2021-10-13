import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap'

const CartCanvas = (props) => {

    console.log(props.data.name)
    const {name , img , price , quantity} = props.data
   
    return (
        <div className="d-flex">
            
            <div>
                <img style={{height:100 , width:100}} src={img} alt="" />
            </div>
            <div>
                    <p><small>{name}</small></p>
                    <p><small>{quantity}</small></p>
                    <p><small style={{color:'red'}} >${price}</small></p>
                    
                    
            </div>
            
        </div>
    );
};

export default CartCanvas;