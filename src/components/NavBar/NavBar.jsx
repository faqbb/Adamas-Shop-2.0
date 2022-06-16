import React from 'react'
import { Link } from 'react-router-dom';
import '../../fonts/fonts.css'
import CartWidget from './CartWidget';


function NavBar() {
  return (
    <div bg="dark" className=' border-top border-5 border-danger'>
        <div className="me-auto d-flex ps-5 align-items-center justify-content-around">
          <Link to="/" className='text-danger fs-3 pe-5 secondaryfont align-self text-decoration-none'>home </Link>
          <Link  to="/category/fpyy" className='text-light fs-4 pe-5 secondaryfont text-decoration-none'>Funcional, Pilates y Yoga</Link>
          <Link  to="/category/mm" className='text-light fs-4 pe-5 secondaryfont text-decoration-none'>Maquinas de Musculacion</Link>
          <Link  to="/category/pdb" className='text-light fs-4 pe-5 secondaryfont text-decoration-none'>Pesas, Discos y Barras</Link>
          <Link  to="/category/pyr" className='text-light fs-4 pe-5 secondaryfont text-decoration-none'>Proteccion y Rehabilitacion</Link>
          <Link  to="/category/mc" className='text-light fs-4 pe-5 secondaryfont text-decoration-none'>Maquinas Cardiovasculares</Link>
          <CartWidget />
        </div>
  </div>
  )
}

export default NavBar

