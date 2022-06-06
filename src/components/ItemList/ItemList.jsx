import React, { useState } from 'react'
import grabProds, { grabProd } from '../../tools/tools'
import Item from '../Item/Item'

function ItemList( {filter} ) {
  const [products, setProducts] = useState([])
  grabProds(setProducts)
  let prodsFil = products
  if (filter) {   
    prodsFil = products.filter(product => product.category == filter)}
  return (
        prodsFil.map((product) => {
            return (
                <div key={product.id} >  
                <Item
                    image={product.image}
                    nombre={product.name}
                    desc={product.desc}
                    precio={product.price}
                    stock={product.stock}
                    id={product.id}
                />             
                </div>
            )
          }
        )
      )
    }
    

export default ItemList