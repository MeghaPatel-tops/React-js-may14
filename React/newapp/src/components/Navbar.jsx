import React from 'react'

function Navbar(props) {
    const listArray = props.listitem
  return (
    <div>
        <ul>
            {
                listArray.map((index)=>(
                    <li>{index}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Navbar