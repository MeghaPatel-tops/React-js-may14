import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Productcreate() {
    const [product,setProduct]= useState({});
    const navigate = useNavigate();
    const handlChange =(e)=>{
        const {name,value}=e.target;
        setProduct({
            ...product,
            [name]:value
        })
    }
    const handleClick = ()=>{
        const res = axios.post('http://localhost:5000/product',product);
        if(res){
            alert("Product successfully added");
            navigate('/product')
        }
    }
  return (
    <div>
        <h1>Product Create</h1>
            <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Enter Product Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="pname" onChange={handlChange} />
  
  </div>
    <div class="form-group">
    <label for="exampleInputEmail1">Enter Price</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="price" onChange={handlChange}/>
  
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Enter Description</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name="desc" onChange={handlChange}/>
  </div>
    <div class="form-group">
    <label for="exampleInputEmail1">Enter Image </label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="image" onChange={handlChange}/>
  
  </div>
  
  <button type="button" class="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
    </div>
  )
}

export default Productcreate