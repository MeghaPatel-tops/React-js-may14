import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../db';
import { NavLink } from 'react-router-dom';

function View() {
    const [posts,setPosts]= useState([]);
  
    const getPosts = async()=>{
        try {
            const q = query( collection(db,"posts"));
            const docData = onSnapshot(q,(cb)=>{
                let postArray = [];
                cb.forEach((doc)=>{
                    postArray.push({...doc.data(),id:doc.id})
                })
                console.log(postArray);
                setPosts(postArray)
                
            })
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        getPosts();
    },[])

    const delPost = async(id)=>{
        try {
            const docRef = doc(db,"posts",id);
            const res = await deleteDoc(docRef);
            getPosts();
            
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <NavLink to={'/create'}>Add new</NavLink>
        <h1>Post Data</h1>
        <table>
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Action</td>
                   
                </tr>
            </thead>
            <tbody>
                {
                    posts.map((index)=>(
                        <tr>
                            <td>{index.title}</td>
                            <td>{index.desc}</td>
                            <td><button onClick={()=>{
                                delPost(index.id)
                            }}>Delete</button></td>
                            <td>
                                <NavLink to={'/edit/'+index.id}>Edit</NavLink>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default View