import { useCartContext } from "../../context/CartContext"

const Cart = () => {
  const { cartList, vaciarCarrito } = useCartContext()

  return (
    <div>
      {cartList.map(product => <li>{product.name} - price: {product.price} - cantidad: {product.cantidad}</li> )}
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>
  )
}

export default Cart
