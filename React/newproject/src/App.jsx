import { useState } from 'react'
import Products from './Component/Products'
import Prodata from './Component/Prodata'
import Home from './Component/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home />
    {/* <Products />
    <Prodata /> */}
     </>
  )
}

export default App
