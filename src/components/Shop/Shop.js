
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
   

    const [products] = useProducts();
    console.log(products)
    const addToCart = (products)=>{
        console.log(products)
        addToDb(products)
    }

    return (
        <div style={{marginTop:150}}>
            <h2>Buy Your Essential</h2>
            <div className='shop container'>
                {
                    products.map(data => <Products 
                    data={data}
                    addToCart={addToCart}
                    >

                    </Products>)
                }
            </div>
            
        </div>
    );
};

export default Shop;