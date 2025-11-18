import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Create from './Post/Create'
import { Route,Router, Routes } from 'react-router-dom'
import View from './Post/View'
import Edit from './Post/Edit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={ <View />}></Route>
        <Route path='/create' element={ <Create />}></Route>
        <Route path='/edit/:id' element={ <Edit />}></Route>
      </Routes>
        
    </>
  )
}

export default App
