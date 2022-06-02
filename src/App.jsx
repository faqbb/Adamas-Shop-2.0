import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Banner from './components/Banner/Banner'
import  NavBar  from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Banner/>
      <NavBar/>
    </BrowserRouter>
  )
}

export default App
