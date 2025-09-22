import React from 'react'
import styled from 'styled-components'


function StyleCompo() {
    const MyComp = styled.div`
        background-color:gray;
        height:100px;
        width:400px;

        h1{
           color:white;
           text-align:center;
        }

        
    `;
  return (
    <div>
          <MyComp >
            <h1>Welcome to app</h1>
          </MyComp>
    </div>
  )
}

export default StyleCompo