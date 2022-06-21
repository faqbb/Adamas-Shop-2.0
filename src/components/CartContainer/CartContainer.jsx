import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import '../../fonts/fonts.css'
import Cart from '../Cart/Cart'


function CartContainer() {
    const { cartList } = useCartContext()
    

  return (
    <>
    { !cartList[0] ? 
        <div className='text-light mainfont col-12 p-5  d-flex flex-column text-center'> 
            <div className='h1'>El carrito esta vacio!</div>
            <Link to={'/'}>
                    <button className='btn btn-danger h2'> Seguir Comprando</button>
            </Link>
        </div>
        : 
        <Cart/>
    }
    </>
  )
}

export default CartContainer