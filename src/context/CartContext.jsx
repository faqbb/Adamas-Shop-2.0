import React, { createContext, useContext, useState } from 'react'
 const CartContext = createContext([])
 export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) =>{
    const [cartlist,setCartlist] = useState([])

    function addtoCart(item) {
        setCartlist([
            ...cartlist,
            item
        ])
        console.log(cartlist)
    }

const emptyCart = () => {
    setCartlist([])
}
    return (
        <CartContext.Provider value={ {
            cartlist,
            addtoCart,
            emptyCart
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider