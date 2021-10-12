import React, { useState } from 'react';

const CartCanvas = (props) => {

    console.log(props.data.name)
   
    return (
        <div>
            <h1>{props.data.name}</h1>
        </div>
    );
};

export default CartCanvas;