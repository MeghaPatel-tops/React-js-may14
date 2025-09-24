import React, { useEffect, useState } from 'react'

function Header() {
    const [task,setTask]=useState("");
    const [list,setList] = useState([]);
    const [id1,setId1]=useState(0);

    const handleChange = (e)=>{
        setTask(e.target.value) 
    }

    const handleClick = ()=>{
        setList([...list,task])
        setTask(" ")
        console.log(task);
        
    }

    const delItem = (id)=>{
        let newarray = list.filter((index,item)=>item != id)
        console.log(newarray);
        setList(newarray)     
    }
    
    const updateItem = ()=>{
        
          setList((prev)=>{
         let newList = [...prev];
          newList[id1]= task;
          return newList;
          })

    }
    const editItem = (id)=>{
        let taskItem = list[id];
        setId1(id);
        setTask(taskItem)
    }
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:"50px"}}>
            <fieldset style={{padding:"50px"}}>
                <legend>Add Todo List</legend>
                <label htmlFor="">Enter Task</label>
                <input type="text" name="task" id="" onChange={handleChange} value={task}/>
                <input type="button" value="Add" onClick={handleClick} />
                <input type="button" value="Update" onClick={updateItem}  />
            </fieldset>

            <table style={{border:"5px solid black"}}>
                 <thead>
                     <tr>
                    <th>SrNo</th>
                    <th>Task</th>
                    <th colSpan={2}>Action</th>
                </tr>
                 </thead>
               <tbody>
                     {
                       list &&  list.map((index,i)=>(
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{index}</td>
                            <td><button onClick={()=>{
                                delItem(i);
                            }}>✖</button></td>
                            <td><button onClick={()=>{
                               editItem(i)
                            }}>✎</button></td>
                        </tr>
                    ))
                }
               </tbody>
            </table>

    </div>
  )
}

export default Header