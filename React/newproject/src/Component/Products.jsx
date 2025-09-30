import React, { useEffect, useState } from 'react'

function Products() {

    const [product,setProduct]= useState([]);

    const getData = async()=>{
        let res = await fetch('https://fakestoreapi.com/products');
        let data = await res.json();
        console.log("in function",data);
   
        setProduct(data);
    }

    useEffect(()=>{  
        getData();
        
        
            //console.log(product);
            
      
    },[])
  return (
    <div>Products
        <ul>
            {
                product.map((index,i)=>(
                    <li key={i}>{index.title}</li>
                ))
            }
        </ul>

    </div>
  )
}

export default Products