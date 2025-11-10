import { collection, deleteDoc, getDocs, query ,where} from 'firebase/firestore';
import React, { useContext, useEffect } from 'react'
import { db } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../LoginContext';

function Logout() {
    const navigate = useNavigate();
    const {flag,setFlag} = useContext(LoginContext)
     
    async  function logoutClear(){
         const Uid=localStorage.getItem('firebaseUID');
        const Token =localStorage.getItem('firebaseTOKEN');
        
        console.log(Uid);
        
        if(Uid!=null && Token != null){
             localStorage.removeItem('firebaseUID');
            localStorage.removeItem('firebaseTOKEN');
        
        const q = query(
                   collection(db, "user_token"),
                   where('uid', '==', Uid),
                   where('token', '==', Token)
                 );
                
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);
        
        

       querySnapshot.forEach(async(doc)=>{
            await deleteDoc(doc.ref);
            console.log('delete item',doc);
            setFlag(0);
            navigate('/login');
            
        })
         }
         else{
            navigate('/login');
         }

    }

    useEffect(()=>{
        logoutClear();
    })

  return (
    <div>Logout</div>
  )
}

export default Logout