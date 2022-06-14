import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import GotoCart from '../GotoCart/GotoCart';
import { useCartContext } from '../../context/CartContext'


function ItemDetail( {prods} ) {
  const [inputType, setInputType] = useState('boton')
  const {addtoCart, cartList} = useCartContext()
  

  const onAdd = (cant) => {
    console.log(cant)
    console.log(prods)
    addtoCart( { ...prods, cantidad: cant } )
    setInputType('line')
  }
console.log(cartList)

  return (
      <div className='d-flex bg-secondary'>
        <div className='col-4  '><Image src={prods.image} alt='producto' className='img-fluid border border-4 border-danger rounded'/></div>
        <div className='col-8 d-flex flex-column justify-content-between text-center'>
          <div className='fs-1 mainfont text-light pt-5'> {prods.name}</div>
          <div className='fs-3 secondaryfont text-light'> {prods.desc}</div>
          <div className='fs-5 secondaryfont text-light'>Disponibilidad: {prods.stock}</div>
          <div className='fs-1 mainfont text-danger'> $ <span className='text-light'>{prods.price}</span></div>
          <div className='px-5 fs-3 mb-2'>
          {
                inputType === 'boton' ? 
                <ItemCount stock={prods.stock} initial={1} onAdd={onAdd} />
                : 
                <GotoCart/>
            }
            </div>
        </div>
      </div>
  )
}

export default React.memo(ItemDetail)