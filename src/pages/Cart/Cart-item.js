import React, { useContext } from "react";
import Cart from "./cart";
import { ShopContext } from "../Context/Shop-context";

function CartItem(props) {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>{price}</p>
        <div className="counthandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            type="text"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
