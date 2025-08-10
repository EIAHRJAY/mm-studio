import { useState } from 'react'
import './styles/index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Navbar/>
     <main >
      <Home/>
     </main>
    </>
  )
}

export default App
