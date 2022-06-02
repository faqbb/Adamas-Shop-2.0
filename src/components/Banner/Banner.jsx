import React from 'react'
import logo from '../../imgs/logo.png'
import '../../fonts/fonts.css'
import '../Style/Banner.css'
import { Link } from 'react-router-dom'
const Banner = () => {
  return (
    <div className='bg-dark g-0 align-items-center justify-content-center d-flex'>
        <h1 className='fs-1 mainfont text-light'>ADAMAS</h1>
        <Link to={'/'} ><img src={logo} alt="logo" className='w-50' /></Link>
        <h2 className='fs-1 mainfont text-light'>SHOP</h2>
    </div>
  )
}

export default Banner