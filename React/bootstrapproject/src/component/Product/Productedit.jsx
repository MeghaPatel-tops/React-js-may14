import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'


function Productedit() {
    const params = useParams();
    const id = params.id
    const navigate = useNavigate();

   const [product,setProduct]= useState({
         pname: '',
        price: '',
        desc: '',
        image: '',
   });
   

   const getProductById = async(id)=>{
        const proData = await axios.get('http://localhost:5000/product/'+id);
        console.log(proData.data);
        setProduct(proData.data);
        
   } 
      useEffect(()=>{
        getProductById(params.id);
   },[])

   const handlChange = (e)=>{
        const {name,value}=e.target;
        setProduct({
            ...product,
            [name]:value
        })
   }
   const handleClick=async()=>{
           try {
              let res = await axios.put('http://localhost:5000/product/'+id,product);
              if(res){
                  alert("Product successfully updated");
                  navigate('/product');
              }
           } catch (error) {
              console.log(error);
              
           }
   }


    

  return (
    <div>Productedit

                    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Enter Product Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="pname" onChange={handlChange} value={product.pname}/>
  
  </div>
    <div class="form-group">
    <label for="exampleInputEmail1">Enter Price</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="price" onChange={handlChange} value={product.price}/>
  
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Enter Description</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name="desc" onChange={handlChange} value={product.desc}/>
  </div>
    <div class="form-group">
    <label for="exampleInputEmail1">Enter Image </label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="image" onChange={handlChange} value={product.image}/>
  
  </div>
  
  <button type="button" class="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
    </div>
  )
}

export default Productedit