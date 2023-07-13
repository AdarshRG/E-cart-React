import React, { useContext } from 'react'
import { Products } from '../../Products'
import { ShopContext } from '../Context/Shop-context'
import CartItem from './Cart-item'
import './cartss.css';


function Cart() {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className='cart'  >
<div>
  <h1>
    Your cart item
  </h1>
</div>
<div className='cartItems' >
{Products.map((product)=>{
if(cartItems[product.id]!==0){
return<CartItem data={product}/>
}
})}
</div>
    </div>
  )
}

export default Cart