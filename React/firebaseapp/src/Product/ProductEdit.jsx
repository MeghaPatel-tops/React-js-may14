import { doc, getDoc, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { db } from '../Firebase';

function ProductEdit() { 
    const [product,setProduct] = useState({});
     const param = useParams();
        const id = param.id;
      
        useEffect(()=>{  
                getProductById(id);
            
        },[])

    const getProductById = async(id)=>{
        try {
            const docRef = doc(db,"products",id);
            const singleProduct = await getDoc(docRef);
            console.log(singleProduct.data());
            setProduct(singleProduct.data());
            
        } catch (error) {
            
        }
    }

    const navigate = useNavigate();
 
    const handleChange = (e)=>{
        const {name,value}=e.target;
        setProduct({
            ...product,
            [name]:value
        })
    }

    const handleClick = async()=>{
       try {
            const docRef = doc(db,"products",id);
            const result = await setDoc(docRef,product,{ merge: true });
            console.log(result);
            navigate("/product");
            
       } catch (error) {
           console.log(error);
           
       }
        
    }


    const params = useParams();


  return (
    <div>
         <div className="container">
            <form method='post'>
                    <div className="form-group">
                        <label for="email">Product Name</label>
                        <input type="text" className="form-control" id="" name="pname" onChange={handleChange} value={product.pname} />
                    </div>
                     <div className="form-group">
                        <label for="email">Product Price</label>
                        <input type="text" className="form-control" id="" name="price" onChange={handleChange} value={product.price} />
                    </div>
                     <div className="form-group">
                        <label for="email">Product Description</label>
                        <input type="text" className="form-control" id="" name="desc" onChange={handleChange} value={product.desc}/>
                    </div>
                     <div className="form-group">
                        <label for="email">Product Image</label>
                        <input type="text" className="form-control" id="" name="pimage" onChange={handleChange} value={product.pimage}/>
                    </div>
                    
                    
                    <button type='button' onClick={handleClick}>Add Data</button>
                    </form>
        </div>
    </div>
  )
}

export default ProductEdit