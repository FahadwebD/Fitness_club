import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import BlogCard from '../BlogCard/BlogCard'
import backg from '../../images/blog.jpg';

const Blog = () => {
    const [blogs ,setBlogs] = useState([])
   
   useEffect(()=>{
       fetch('./blogs.JSON')
       .then(res=> res.json())
       .then(data => setBlogs(data))
   },[])
   
    return (
        <div style={{marginTop:100}}>
            <div className=' d-flex flex-column justify-content-center align-items-center' style={{ 
            backgroundImage:`url(${backg})` ,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: "100%",
        height: '50vh',
        marginTop:100
            
          }}>
       
          
        
          </div>
          <div className='m-5'>
                <h2 className=' fs-1 fw-bold'>BLOG</h2>
                <p>Keep up to date with the latest fitness industry news, educational articles, and other fit tips!.</p>
            </div>
           <div className=' bg-light p-5'>
           <Row xs={1} md={3} className="g-2">
                {
                 
                    blogs.map(data => <BlogCard 
                        key={data.id}
                        data={data}></BlogCard> )
                
            }
             </Row>
           </div>
           <div className=' p-5 mt-3' style={{backgroundColor:'#89F261'}}>
               <h1>NOT SURE WHICH FITNESS COURSE IS RIGHT FOR YOU?</h1>
               <hr />
               <h3 className='fst-italic fw-lighter'>
               That's totally fine, we're here to help! Feel free to submit your details via our <a href="http://">Enquiry Form</a> or speak directly with one of our Career Advisors by calling 1300 973 342
               </h3>
           </div>
        </div>
    );
};

export default Blog;