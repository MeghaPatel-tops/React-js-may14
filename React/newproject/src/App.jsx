import { useState } from 'react'
import Products from './Component/Products'
import Prodata from './Component/Prodata'
import Home from './Component/Home'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<p class="font-mono ...">The quick brown fox ...</p>
<h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
     <Home />
    {/* <Products />
    <Prodata /> */}
     </>
  )
}

export default App
