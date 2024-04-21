import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
const Cart = ({ cart, handleClearCart, children }) => {
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // if(product.quantity ===0){
    //     product.quantity = 1;
    // }
    // //or
    // product.quantity = product.quantity || 1;
    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (total * 7) / 100;
  const grandTotal = total + totalShipping + tax;
  return (
    <div className="cart">
      <h2 className="text-center">Order Summery</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
      <button className="btn-clear" onClick={handleClearCart} >
        Clear cart
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      {children}
    </div>
  );
};

export default Cart;
