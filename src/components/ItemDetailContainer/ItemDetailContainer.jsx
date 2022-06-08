import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import grabProds from '../../tools/tools';
import { collection, getDocs, getFirestore } from 'firebase/firestore';




function ItemDetailContainer() {
    
    const [itemfind, setItemfind] = useState(null)
    const { detailId } = useParams()
    console.log(detailId)


    const getProducts = async () => {
      const db = getFirestore()
      const queryCollection = collection(db, 'products')
      const response = await getDocs(queryCollection)
      const data = response.docs.map(product => ( { id: product.id, ...product.data() } ) )
      const result = data.find(producto => producto.id === detailId);
      setItemfind(result)    
    }
    
    
    
    useEffect( () => {
          getProducts()
       }, [detailId])

    
  return (
        <div className='d-flex justify-content-around bg-dark flex-wrap'>
        { !itemfind ? 
            <LoadingScreen/>
            :
            <ItemDetail 
            prods={itemfind}
            />
        }
    </div>
  )
}

export default ItemDetailContainer