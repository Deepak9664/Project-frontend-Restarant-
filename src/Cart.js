import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FootItem from './FoodItem'
import { clearCart } from "./Utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector(store=>store.cart.items)   // subscribing the store cart itmes 


    const dispatch=useDispatch()
    const HandleclearCart=()=>{
  dispatch(clearCart())
    }
  return (
    <div>
        <h1 className='font-bold text-3xl'>CartItems -{cartItems.length}</h1>
        <button className='bg-green-200 p-2 m-2 rounded' onClick={()=>{HandleclearCart()}}>Clear Cart</button>
  <div className='flex'>
    {cartItems.map((item)=>( <FootItem key={item.id} {...item}/>))}</div>  
   
    </div>
  )
}

export default Cart
