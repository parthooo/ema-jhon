import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";

const Product = (props) => {
  const { name, seller, price, ratings, img, quantity } = props.product;
    const handleAddToCart = props.handleAddToCart;

  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="card-title">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturar: {seller}</p>
        <p>Ratings: {ratings} Stars</p>
      </div>
      <button 
      onClick={()=>handleAddToCart(props.product)} 
      className="btn-cart"
      >Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
    </div>
  );
};

export default Product;
