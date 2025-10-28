import { addDoc, collection } from 'firebase/firestore'
import {db} from '../Firebase'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Productadd() {
    const [product,setProduct] = useState({});
    const navigate = useNavigate();
 
    const handleChange = (e)=>{
        const {name,value}=e.target;
        setProduct({
            ...product,
            [name]:value
        })
    }

    const addProduct = async()=>{
        try {
           
            const proAdd = await addDoc(collection(db,"products"),product);
            alert("data successfully addedd:",proAdd.id);
            navigate('/product');
            
            
        } catch (error) {
            console.error("Error adding document: ", error);
        }

    }
  return (
    <div>
        <div className="container">
            <form method='post'>
                    <div className="form-group">
                        <label for="email">Product Name</label>
                        <input type="text" className="form-control" id="" name="pname" onChange={handleChange} />
                    </div>
                     <div className="form-group">
                        <label for="email">Product Price</label>
                        <input type="text" className="form-control" id="" name="price" onChange={handleChange} />
                    </div>
                     <div className="form-group">
                        <label for="email">Product Description</label>
                        <input type="text" className="form-control" id="" name="desc" onChange={handleChange}/>
                    </div>
                     <div className="form-group">
                        <label for="email">Product Image</label>
                        <input type="text" className="form-control" id="" name="pimage" onChange={handleChange} />
                    </div>
                    
                    
                    <button type='button' onClick={addProduct}>Add Data</button>
                    </form>
        </div>
        
    </div>
  )
}

export default Productadd