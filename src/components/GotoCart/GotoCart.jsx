import React from 'react'
import { Link } from 'react-router-dom'

function GotoCart() {
  return (
    <Link to={'../cart'}>
        <button className='btn btn-danger fs-3'> Ver el carrito</button>
    </Link>
  )
}

export default GotoCart