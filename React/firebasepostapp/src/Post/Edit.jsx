import { doc, getDoc, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../db';

function Edit() {
    const [post,setPost] = useState({});
   const id = useParams().id;
   const navigate = useNavigate();
  

      const getPost = async()=>{
           try {
               const docRef = doc(db,"posts",id);
               const resPost = await getDoc(docRef);
               console.log(resPost.data());
               setPost(resPost.data());
               
           } catch (error) {
               console.log(error);
               
           }
      }


    
         const handleChange = (e)=>{
               const {name,value} = e.target;
               setPost({
                ...post,
                [name]:value
               })
         }
    
         const handleClick= async()=>{
            console.log(post);
            
              try {
                   const docRef =doc(db,"posts",id);
                   const res = await setDoc(docRef,post,{ merge: true });

                   console.log(res);
                   navigate('/');
                   
              } catch (error) {
                  console.log(error);
                  
              } 
            
         }

      useEffect(()=>{
        getPost();
      },[])
   

  return (
    <div>
           <h1>
            Post Edit
        </h1>
        <fieldset>
            <label htmlFor="">
                Enter Title
            </label>
            <input type="text" name="title" id="" onChange={handleChange}  value={post.title}/>
            <br /><br /><br />
              <label htmlFor="">
                Enter Description
            </label>
            <input type="text" name="desc" id="" onChange={handleChange} value={post.desc}/>
            <br /><br /><br />
            <input type="button" value="Add" onClick={handleClick} />
        </fieldset>
    </div>
  )
}

export default Edit