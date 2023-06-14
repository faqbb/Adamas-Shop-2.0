import React from 'react'
import ItemList from '../ItemList/ItemList'


function ItemListContainer({category}) {
  return (
      <div className='d-flex col-12 flex-wrap bg-dark justify-content-around h-100 pb-5'>  
        <ItemList filter={category}/>
      </div>
    )
}

export default ItemListContainer