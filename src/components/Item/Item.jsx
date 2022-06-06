import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../fonts/fonts.css'


function Item( { image, nombre , desc, precio, stock, id, category }) {
  return (
          <Card style={{ width: '19rem' }} className='bg-secondary text-center'>
            <Card.Img variant="top" src= {image} />
            <Card.Body>
                <Card.Title className='secondaryfont fs-3 text-light'>{nombre}</Card.Title>
                <Card.Text className='secondaryfont fs-6'>
                  {desc}
                </Card.Text>
                <Card.Text className='fs-3 mainfont'>
                  <b className='text-danger'>$</b> <b className='text-light'>{precio}</b>
                </Card.Text>
                <Card.Text className='fs-6 secondaryfont'>
                  Disponibles = {stock}
                </Card.Text>
                <Link to={`/${category}/${id}`}>
                  <button  className='btn btn-danger mainfont'> Ver mas</button>
                </Link>
             </Card.Body>
      </Card>
  )
}

export default Item