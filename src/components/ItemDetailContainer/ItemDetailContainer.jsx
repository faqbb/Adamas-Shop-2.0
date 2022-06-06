import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import grabProds from '../../tools/tools';




function ItemDetailContainer() {
    
    const [prods, setProds] = useState([])
    const [loading,setLoading] =useState(true)
    const { detailId } = useParams()

    let getProds = new Promise ((acep) => {
        setTimeout(() => {
          grabProds(setProds)
            acep(prods)
          }, 1000);
    
       })
       useEffect(() => {
          getProds
         .catch((err)=> console.log(err))
         .finally(()=>setLoading(false))
       }, [])

    const itemFind = prods.find(producto => producto.id === detailId)
    
    
  return (
        <div className='d-flex justify-content-around bg-dark flex-wrap'>
        { loading ? 
            <LoadingScreen/>
            :
            <ItemDetail 
            prods={itemFind}
            />
        }
    </div>
  )
}

export default ItemDetailContainer