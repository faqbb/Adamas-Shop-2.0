import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Banner from './components/Banner/Banner'
import  NavBar  from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Banner/>
      <NavBar/>
      <Routes>
        <Route path='/' element= { <ItemListContainer/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
