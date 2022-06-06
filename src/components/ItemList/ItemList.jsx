import React, { useEffect, useState } from 'react'
import grabProds from '../../tools/tools'
import Item from '../Item/Item'
import LoadingScreen from '../LoadingScreen/LoadingScreen'

function ItemList( {filter} ) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

   let getProds = new Promise ((acep) => {
    setTimeout(() => {
      grabProds(setProducts)
        acep(products)
      }, 1000);

   })
   useEffect(() => {
      getProds
     .catch((err)=> console.log(err))
     .finally(()=>setLoading(false))
   }, [])
   
  
  let prodsFil = products
  if (filter) {   
    prodsFil = products.filter(product => product.category == filter)}
  return (
        <>
          { loading ? 
                  <LoadingScreen/>
                :
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