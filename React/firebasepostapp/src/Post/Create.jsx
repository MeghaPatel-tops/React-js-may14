import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react'
import { db } from '../db';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [post,setPost]=useState({});
    const navigate = useNavigate();
    const useRefHook = useRef();

    useEffect(()=>{
        if(useRefHook.current){
            useRefHook.current.focus();
        }
    })

     const handleChange = (e)=>{
           const {name,value} = e.target;
           setPost({
            ...post,
            [name]:value
           })
     }

     const handleClick= async()=>{
          try {
               const docRef = collection(db,"posts");
               const res = await addDoc(docRef,post);
               console.log(res);
               navigate('/');
               
          } catch (error) {
              console.log(error);
              
          } 
        
     }


  return (
    <div>
        <h1>
            Post Create
        </h1>
        <fieldset>
            <label htmlFor="">
                Enter Title
            </label>
            <input type="text" name="title" id="" onChange={handleChange} ref={useRefHook} />
            <br /><br /><br />
              <label htmlFor="">
                Enter Description
            </label>
            <input type="text" name="desc" id="" onChange={handleChange} />
            <br /><br /><br />
            <input type="button" value="Add" onClick={handleClick} />
        </fieldset>


    </div>
  )
}

export default Create