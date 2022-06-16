import { useCartContext } from "../../context/CartContext"
import '../../fonts/fonts.css'

const Cart = () => {
  const { cartList, emptyCart, removeItem, totalPrice } = useCartContext()

  function cantXprice (cant,price)  {
    return (cant*price)
  }
  
  return (
    <div className="text-light h-100" >
      {cartList.map(product =>
      <div key={product.id} className='col-auto d-flex justify-content-between'> 
          <li className='d-flex align-self-center bg-secondary border-end border-solid border-danger border-5 align-items-center'>
            <div className='col-1'><img src={product.image} alt="producto" className='img-fluid' /></div>  
            <div className='secondaryfont fs-3 text-light align-self-center ps-5'>
            {product.name} - <span className="text-dark">precio:  <span className="text-danger">$</span><span className="text-light">{product.price}</span> - cantidad: <span className="text-light">{product.cantidad}</span></span>
            </div>
            <button onClick={()=> removeItem(product.id)} className='btn btn-danger mainfont h-25 ms-5'>X</button>
          </li>
          <div className="text-light align-self-center pe-5">
            <div className="h2 mainfont">  <span className="text-danger">$</span> {cantXprice(product.cantidad, product.price)}</div>
            </div>
      </div> )}
      <button onClick={emptyCart} className='btn btn-danger mainfont my-3 ms-3'>Vaciar carrito</button>
      <div className="my-5 row text-end me-5">
        <div className="text-light mainfont h1">TOTAL  : <span className="text-danger">$</span> {totalPrice()}</div>
      </div>
      <div className="my-5 row justify-content-center me-5">
        <button className='btn btn-danger mainfont h-25 w-25 ms-5'>Terminar la compra</button>
      </div>
    </div>
  )
}

export default Cart
