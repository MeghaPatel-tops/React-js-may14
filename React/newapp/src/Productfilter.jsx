import React, { useEffect, useMemo, useState } from 'react'

function Productfilter() {
   const [post,setPost]= useState([]);
   const [str,setStr] = useState("");

   const filterData = useMemo(()=>{
        return post.filter(item =>item.title.toLowerCase().includes(str.toLowerCase()))
   },[post,str]);

   async function getPost(){
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const postData = await res.json();
            console.log(postData);
            setPost(postData);
            
        } catch (error) {
            
        }
   }
  
   useEffect(()=>{
    getPost()
   },[])


  return (
    <div>Productfilter
        <input type="text" name='filter'  onChange={(e)=>{
               setStr(e.target.value)
        }} />
        <ul>
            {
                filterData.map((index,i)=>(
                    <li key={i}>{index.title}</li>
                ))
            }
        </ul>

    </div>
  )
}

export default Productfilter