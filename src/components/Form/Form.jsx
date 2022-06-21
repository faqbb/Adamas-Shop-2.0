import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import '../../fonts/fonts.css'

function Form() {
    const { cartList, totalPrice, emptyCart } = useCartContext()
    const [dataForm, setDataForm] = useState({ email: '', phone: '', name:'' })
    async function generateOrder(e) {
        e.preventDefault()
        let order = {}     
        
        order.buyer = dataForm
        order.total = totalPrice()
        
        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.name
            const precio = cartItem.price * cartItem.quantity
            
            
            return {id, nombre, precio}   
        })
        
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, order)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(()=> emptyCart())
  


        const queryCollectionStock = collection(db, 'products')

        const queryStockUpdate = await query(
            queryCollectionStock, //                    
            where( documentId() , 'in', cartList.map(it => it.id) )  
        )

        const batch = writeBatch(db)

        await getDocs(queryStockUpdate)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
              stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
        }) ))
        .finally(()=> swal('Compra realizada',{
            icon: "success",
          }))

        batch.commit()




    }    
        const handlerChange = (e) => {
            setDataForm({
                ...dataForm,
                [e.target.name]: e.target.value
            })
        }    
    
        
        return (
            <div className='d-flex justify-content-center secondaryfont my-5'>
                            <form className='text-light col-4 d-flex flex-column align-items-center bg-dark' onSubmit={generateOrder} >
                                <h5 className='h2 py-3'>Check<span className='text-danger'>out</span> </h5>                
                                <input 
                                    className='form-control'
                                    type='text' 
                                    name='name' 
                                    placeholder='Ingrese el nombre' 
                                    value={dataForm.name}
                                    onChange={handlerChange}
                                    /><br />
                                <input 
                                    className='form-control'
                                    type='text' 
                                    name='phone'
                                    placeholder='Ingrese el telefono' 
                                    value={dataForm.phone}
                                    onChange={handlerChange}
                                    /><br/>
                                <input 
                                    className='form-control'
                                    type='email' 
                                    name='email'
                                    placeholder='Ingrese el email' 
                                    value={dataForm.email}
                                    onChange={handlerChange}
                                    /><br/>
                                <input 
                                    className='form-control'
                                    type='email' 
                                    name='email1'
                                    placeholder='Repita email' 
                                    value={dataForm.email}
                                    onChange={handlerChange}
                                    /><br/>
                                <button  className="btn btn-danger fs-3"  onClick={generateOrder} >Terminar Compra</button>
                            </form>
    </div>
  )
}

export default Form