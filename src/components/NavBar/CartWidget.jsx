import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../imgs/cartwidget.png'
function CartWidget() {
  return (
     <>
      <Link to={'/cart'}>
      <img src={cart} className='w-50'></img>
      </Link>
    </> 
  )
}

export default CartWidget