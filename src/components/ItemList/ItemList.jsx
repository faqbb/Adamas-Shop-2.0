import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import { getProducts } from '../../tools/toolsv2'

function ItemList( {filter} ) {
  const [products, setProducts] = useState([])

   useEffect(() => {
     getProducts(setProducts, filter)
    }, [filter])
   
  return (
        <>
          { products.length < 1 ? 
                  <LoadingScreen/>
                :
                   products.map((product) => {
                         return (
                               <div key={product.id} className='p-3' >  
                               <Item
                                   image={product.image}
                                   nombre={product.name}
                                   desc={product.desc}
                                   precio={product.price}
                                   stock={product.stock}
                                   id={product.id}
                                   category={product.category}
                               />             
                               </div>
                           )
                         }
                       )
                  }
          </>
      )
    }
    
    
    export default ItemList