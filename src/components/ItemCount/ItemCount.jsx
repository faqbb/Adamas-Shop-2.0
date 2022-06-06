import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../fonts/fonts.css'

function ItemCount({stock, initial, onAdd}) {
    const [cantpro, setCantpro] = useState(initial)
    function sumarpro (props){
        setCantpro(cantpro + props)
            }
    

  return (
      < div className='d-flex flex-column bg-secondary align-items-center'>
        <div className='d-flex justify-content-evenly col-6'>
          <button onClick={() => sumarpro(-1) }  disabled={cantpro === initial ? true : null} className='btn btn-dark'>-</button>
          <div className='mainfont'>{ cantpro }</div>
          <button onClick={ () => sumarpro(+1) } disabled={cantpro === stock ? true : null} className='btn btn-dark'>+</button>
        </div>
        <div className='col-6 mt-3'>
            <button onClick={ ()=> onAdd(cantpro) } className='btn btn-danger fs-3'> Enviar al carrito</button>
        </div>
      </div>
  )

  }
export default ItemCount