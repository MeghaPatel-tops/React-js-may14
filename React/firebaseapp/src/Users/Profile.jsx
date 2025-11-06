import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

import { db } from '../Firebase';

function Profile() {
   const navigate = useNavigate();

 async function AuthCheck(cb){
 
       let uid = localStorage.getItem('firebaseUID');
       let token = localStorage.getItem('firebaseTOKEN');
       

         const q = query(
             collection(db, "user_token"),
             where('uid', '==', uid),
             where('token', '==', token)
           );
           const querySnapshot = await getDocs(q);
           console.log(querySnapshot.docs.length);
           
            if (querySnapshot.docs.length <= 0) {
              console.log("Unauthorized User");
              navigate('/login')
              cb(flase)
            } else {
              querySnapshot.forEach(async(doc) => {
                 cb(true)
              });
            }
  }

  useEffect(()=>{
        AuthCheck((flag)=>{
          console.log("flag=",flag);
          
            if(flag){
                alert("Authorzied");
            }else{
              alert("UnAuthorzied");
            }
        });
       
        
  },[])
  return (
    <div>Profile</div>
  )
}

export default Profile