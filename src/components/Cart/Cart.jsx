import { useCartContext } from "../../context/CartContext"

const Cart = () => {
  const { cartList, emptyCart } = useCartContext()

  return (
    <div className="text-light" >
      {cartList.map(product =>
      <div key={product.id}> 
      <li>{product.name} - price: {product.price} - cantidad: {product.cantidad}</li>
      </div> )}
      <button onClick={emptyCart}>Vaciar carrito</button>
    </div>
  )
}

export default Cart
