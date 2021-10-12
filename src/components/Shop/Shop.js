
import { useEffect, useState } from 'react';
import { Offcanvas , Button } from 'react-bootstrap';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    

    const [products ,setProducts] = useState([]);
    const [cart ,setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    


    useEffect(() => {
        fetch('./product.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, []);

    const addToCart = (products)=>{
        console.log(products)
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
                    <Cart cart={cart}></Cart>
                }
            </div>
          
           
         
            
          
        </div>
    );
};

export default Shop;