import React from 'react';
import { useHistory } from 'react-router';
import useProducts from '../../hooks/useProducts'
import useCart from '../../hooks/useCart'
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import {Button} from 'react-bootstrap'

const OrderReview = () => {
    const [products] = useProducts();
    const [cart , setCart] = useCart(products);
    const history = useHistory();
    
    const handleProceedToShipping = () => {
        // setCart([]);
        // clearTheCart();
        history.push('/shipping');
    }

    return (
        <div className="shop-container">
        <div className="product-container">
            {
                cart.map(product => <ReviewItem
                    
                    product={product}
                   
                ></ReviewItem>)
            }
        </div>
        <div className="cart-container">
            <Cart cart={cart}>
                <Button  onClick={handleProceedToShipping} className="btn-regular">Proceed to Shipping</Button>
            </Cart>
        </div>
    </div>
    );
};

export default OrderReview;