import React from 'react'
import ItemList from '../ItemList/ItemList'

function ItemListContainer({category}) {
  console.log(category)
  return (
      <div className='d-flex col-12 flex-wrap bg-dark justify-content-around'>  
        <ItemList filter={category}/>
      </div>
    )
}

export default ItemListContainer