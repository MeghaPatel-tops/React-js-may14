import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Prodata() {
     const [product,setProduct]= useState([]);
    
        const getData = async()=>{
            let res = await axios.get('https://fakestoreapi.com/products')
            console.log("in function",res);
            setProduct(res.data);
        }
    
        useEffect(()=>{  
            getData();
            
            
                //console.log(product);
                
          
        },[])
  return (
    <div>Prodata
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

export default Prodata