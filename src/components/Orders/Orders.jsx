import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
  const cart = useLoaderData();
  console.log(cart);
  return (
    <div className="container shop">
      <div className="product-container">
        <h3>All orders: {cart.length}</h3>
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
