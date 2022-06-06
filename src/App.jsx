import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Banner from './components/Banner/Banner'
import  NavBar  from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Banner/>
      <NavBar/>
        <Routes>
          <Route path='/' element= { <ItemListContainer/> } />
          <Route path='/category/fpyy' element= { <ItemListContainer category={'fpyy'}/> } />
          <Route path='/category/mm' element= { <ItemListContainer category={'mm'}/> } />
          <Route path='/:category/:detailId' element = {<ItemDetailContainer />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
