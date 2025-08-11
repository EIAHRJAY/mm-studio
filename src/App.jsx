import { useState } from 'react'
import './styles/index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Navbar/>
     <main >
      <Home/>
     </main>
    <Footer/>
    </>
  )
}

export default App
