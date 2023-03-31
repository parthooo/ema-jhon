import React from 'react';
import "./Product.css";

const Product = (props) => {
    const{name, seller, price, ratings, img, quantity} = props.product
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h6>{name}</h6>
        </div>
    );
};

export default Product;