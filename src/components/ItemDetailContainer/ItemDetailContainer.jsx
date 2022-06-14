import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { findProduct } from '../../tools/toolsv2';




function ItemDetailContainer() {
    
    const [itemfind, setItemfind] = useState(null)
    const { detailId } = useParams()
    console.log(detailId)
    
    
    useEffect( () => {
          findProduct(setItemfind, detailId)
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

export default React.memo(ItemDetailContainer)