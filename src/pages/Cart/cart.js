import React, { useContext } from "react";
import { Products } from "../../Products";
import { ShopContext } from "../Context/Shop-context";
import CartItem from "./Cart-item";
import "./cartss.css";
import { useNavigate } from "react-router-dom";


function Cart() {
  const { cartItems,getTotalcartAmount } = useContext(ShopContext);
  const totalAmount=getTotalcartAmount ()

  const navigate=useNavigate()
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {Products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
      {totalAmount>0?(
      <div className="checkout" >
       
<p>Subtotal: Rs {totalAmount}</p>
<button onClick={()=>navigate("/")} >Continue Shopping</button>
<button>Checkout</button>
      </div>
      ):(
    <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
}

export default Cart;
