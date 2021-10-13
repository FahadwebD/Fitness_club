import React from 'react';

const ReviewItem = (props) => {
    
    const{name , img , price , quantity} = props.product;
    return (
        <div style={{marginTop:100}}>

<div className="d-flex align-item-center">
            
            <div>
                <img style={{height:200 , width:300}} src={img} alt="" />
            </div>
            <div>
                    <p><small>{name}</small></p>
                    <p><small>{quantity}</small></p>
                    <p><small style={{color:'red'}} >${price}</small></p>
            </div>
            
        </div>
            
        </div>
    );
};

export default ReviewItem;