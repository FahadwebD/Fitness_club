import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DetailShow from '../DetailShow/DetailShow';


const Detail = () => {
    const [products , setProducts] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/FahadwebD/productjson/main/product.json')
            .then(res => res.json())
            .then(data =>setProducts(data));
    }, []);



    const {did} = useParams()
    
  const [detail , setDetail] = useState({})


  useEffect(()=>{

    if (products.length){
        const id = did;

        const newP = products.find(product => product.id === id)
        setDetail(newP)
    }
    
  } ,[did ,products])
  
 




    return (
        <div style={{marginTop:100}}>
            <DetailShow data ={detail}></DetailShow>
        </div>
    );
};

export default Detail;