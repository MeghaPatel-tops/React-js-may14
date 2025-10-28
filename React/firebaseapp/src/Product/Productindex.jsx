import { collection, onSnapshot, query, QuerySnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { db } from '../Firebase'

function Productindex() {
    const [products,setProducts]=useState([]);
    const getProducts = async()=>{
        const q = query(collection(db,"products"));
        const docColl = onSnapshot(q,(querySnapsort)=>{
            let productArray = [];
            querySnapsort.forEach((doc)=>{
                productArray.push({...doc.data(),id:doc.id})
            });
            console.log(productArray);
            setProducts(productArray);
        })

    }

    useEffect(()=>{
        getProducts();
    },[])
  return (
    <div>
        <h1>Productindex</h1>
     <NavLink to={"/productadd"} className={"btn btn-primary"}>Add New Product</NavLink>
   <table className='table table-border'>
        <thead>
            <tr>
                <th>ProductName</th>
                <th>Price</th>
                <th>Description</th>
                <th>Image</th>
            </tr>
        </thead>
        <tbody>
            {
                products.map((index)=>(
                    <tr>
                        <td>{index.pname}</td>
                        <td>{index.price}</td>
                        <td>{index.desc}</td>
                        <td><img src={index.pimage} alt="" height={"100px"} width={"100px"} /></td>
                    </tr>
                ))
            }
        </tbody>
   </table>
    </div>
  )
}

export default Productindex