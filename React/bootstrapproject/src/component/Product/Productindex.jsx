import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Productindex() {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
       getProduct();    
    },[])

    const delProduct = async(pid)=>{
        const delRes = await axios.delete('http://localhost:5000/product/'+pid);
        getProduct();
    }

    const getProduct = async()=>{
         const products = await axios.get('http://localhost:5000/product');
        setProducts(products.data);
    }
  return (
    <div>
        <h1>View Product</h1>
        <a href="/product/create" className='btn btn-primary'>Add New</a>
        <table class="table table-hover">
    <thead>
      <tr>
        <th>ProductName</th>
        <th>Price</th>
        <th>Description</th>
        <th>Image</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
         {
            products.map((index,i)=>(
                <tr id='i'>
                    <td>{index.pname}</td>
                    <td>{index.price}</td>
                    <td>{index.desc}</td>
                    <td><img src={index.image} alt="" height={"100px"} width={"100px"} /></td>
                    <td><button className='btn btn-danger' onClick={()=>{
                        delProduct(index.id)
                    }}>Delete</button></td>
                </tr>
            ))
         }
    </tbody>
  </table>
    </div>
  )
}

export default Productindex