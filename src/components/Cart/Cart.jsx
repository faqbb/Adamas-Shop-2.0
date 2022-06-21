import { useCartContext } from "../../context/CartContext"
import Form from "../Form/Form"
import '../../fonts/fonts.css'
import { useState } from "react"
import { Link } from "react-router-dom"

const Cart = () => {
  const { cartList, emptyCart, removeItem, totalPrice } = useCartContext()
  const [createForm, setCreateForm] = useState(false)

  function cantXprice (cant,price)  {
    return (cant*price)
  }

  const formSwitch = () => {
    setCreateForm(true)
  }

  return (
    <div className="text-light h-100" >
      { !createForm ?
      <>
        {cartList.map(product =>
        <div key={product.id} className='col-auto d-flex justify-content-between'> 
            <li className='d-flex align-self-center bg-secondary border-end border-solid border-danger border-5 align-items-center'>
              <div className='col-1'><img src={product.image} alt="producto" className='img-fluid' /></div>  
              <div className='secondaryfont fs-3 text-light align-self-center ps-5'>
                  {product.name} - <span className="text-dark">precio:  <span className="text-danger">$</span><span className="text-light">{product.price}</span> - cantidad: <span className="text-light">{product.quantity}</span></span>
              </div>
              <button onClick={()=> removeItem(product.id)} className='btn btn-danger mainfont h-25 ms-5'>X</button>
            </li>
            <div className="text-light align-self-center pe-5">
              <div className="h2 mainfont">  <span className="text-danger">$</span> {cantXprice(product.quantity, product.price)}</div>
            </div>
        </div> )}
        <button onClick={emptyCart} className='btn btn-danger mainfont my-3 ms-3'>Vaciar carrito</button>
        <div className="my-5 row text-end me-5">
          <div className="text-light mainfont h1">TOTAL  : <span className="text-danger">$</span> {totalPrice()}</div>
        </div>
        <div className="my-5 row justify-content-center me-5">
          <Link to={'/checkout'} className="my-5 row justify-content-center me-5 text-decoration-none">
                <button className='btn btn-danger mainfont w-25 ms-5' >Ir a comprar</button>
          </Link>
        </div>
      </>
      :
        <Form/> }
    </div>
  )
}

export default Cart
