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
    return (
        <CartContext.Provider value={ {
            cartList,
            addtoCart,
            emptyCart
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider