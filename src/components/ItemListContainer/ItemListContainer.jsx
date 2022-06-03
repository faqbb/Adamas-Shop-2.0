import React, { useState } from 'react'
import { useEffect } from 'react'
import { getFirestore, doc, getDoc, collection, getDocs} from 'firebase/firestore'
import grabProds from '../../tools/tools'

function ItemListContainer() {
    
    const [products, setProducts] = useState([])
        grabProds(setProducts)
    



  return (
      products.map((product) => {
          return (
            <div key={product.id}>{product.name}</div>
          )
        }
      )
    )
}

export default ItemListContainer