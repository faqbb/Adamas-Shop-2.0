import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Banner from './components/Banner/Banner'
import  NavBar  from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContextProvider from './context/CartContext'
import CartContainer from './components/CartContainer/CartContainer'
import Form from './components/Form/Form'

function App() {

  return (
  <BrowserRouter>
    <CartContextProvider>
        <Banner/>
          <NavBar/>
            <Routes>
              <Route exact path={'/'} element= { <ItemListContainer/> } />
              <Route exact path='/category/fpyy' element= { <ItemListContainer category={'fpyy'}/> } />
              <Route path='/category/mm' element= { <ItemListContainer category={'mm'}/> } />
              <Route path='/category/pdb' element= { <ItemListContainer category={'pdb'}/> } />
              <Route path='/category/pyr' element= { <ItemListContainer category={'pyr'}/> } />
              <Route path='/category/mc' element= { <ItemListContainer category={'mc'}/> } />
              <Route path='/:category/:detailId' element = {<ItemDetailContainer />} />
              <Route path='/cart' element = {<CartContainer />} />
              <Route path='/checkout' element = {<Form />} />
            </Routes>
        <Footer/>
    </CartContextProvider>
  </BrowserRouter>
  )
}

export default App
