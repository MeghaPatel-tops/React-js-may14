import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { count, decrement, increment } from './Slice/CounterSlice'

function Counterapp() {
    const value = useSelector(count)
    const dispatch = useDispatch();
  return (
    <div>

          <button onClick={()=>{
                dispatch(increment())
          }}>Increment</button>
          <h1>{value}</h1>
          <button onClick={()=>{
            dispatch(decrement())
          }}>Decrement</button>

    </div>
  )
}

export default Counterapp