
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';
import {Button} from 'react-bootstrap'

const Shop = () => {
    

    const [products ,setProducts] = useState([]);
    const [cart ,setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    const history = useHistory();
    
    const handleProceedToOrder = () => {
        // setCart([]);
        // clearTheCart();
        history.push('/order');
    }
    


    useEffect(() => {
        fetch('./product.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, []);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const id in savedCart) {
                const addedProduct = products.find(product => product.id === id);
                if (addedProduct) {
                    const quantity = savedCart[id];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products])


    const addToCart = (products)=>{
      
        const storedItem =[...cart,products]
        setCart(storedItem)
        
        addToDb(products.id)
      
    }
    
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
      console.log(matchedProducts)
    }

    return (
        <div   style={{marginTop:100}}>
            <div className="search-container">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Product" />
            </div>
            <h2>Buy Your Essential</h2>
            <div className='shop container'>
                {
                   displayProducts.map(data => <Products 
                    data={data}
                    addToCart={addToCart}
                    >

                    </Products>)
                }
            </div>
            <div>
                {
                    <Cart
                     cart={cart} 
                    >
                         <Button  onClick={handleProceedToOrder} className="btn-regular">Proceed to Order</Button>
                    </Cart>
                    
                }
               
            </div>
          
           
         
            
          
        </div>
    );
};

export default Shop;