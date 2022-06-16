import React, { createContext, useContext, useState } from 'react'
 const CartContext = createContext([])
 export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) =>{
    const [cartList,setCartList] = useState([])

    function addtoCart(item) {
        setCartList([
            ...cartList,
            item
        ])
        console.log(cartList)
    }



const emptyCart = () => {
    setCartList([])
}

const removeItem =(id)=> {
    setCartList(cartList.filter(prod => prod.id !== id ))
}



const totalPrice = () => {
    return cartList.reduce((contador, prod) => contador + (prod.cantidad * prod.price) ,0)
}



    return (
        <CartContext.Provider value={ {
            cartList,
            addtoCart,
            emptyCart,
            removeItem,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default React.memo(CartContextProvider)