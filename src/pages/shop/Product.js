import React, { useContext } from 'react'
import { ShopContext } from '../Context/Shop-context';


function Product(props) {
    const{id,productName,price,productImage}=props.data;
    const{addToCart}=useContext(ShopContext);

    const { cartItems } = useContext(ShopContext);
    const cartItemAmount=cartItems[id]
  return (
   <div className='product' >  
    <img src={productImage} />
    <div className='description' >
        <p><b>{productName}</b></p>
    </div>
    <div><p>{price}</p></div>
    <button className='addToCartBttn' onClick={()=>addToCart(id)}>Add to cart {cartItemAmount>0 &&<>({cartItemAmount})</> }</button>
   </div>
  
  )
}

export default Product