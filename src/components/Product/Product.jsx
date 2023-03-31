import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, seller, price, ratings, img, quantity } = props.product;
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="card-title">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturar: {seller}</p>
        <p>Ratings: {ratings} Stars</p>
      </div>
      <button className="btn-cart">Add to cart</button>
    </div>
  );
};

export default Product;
