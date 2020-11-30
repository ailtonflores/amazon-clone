import React from 'react';
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className='product__info'>
        <p>The lean startup</p>
        <p className="product__price">
            <small>$</small>
            <srong>19.99</srong>
        </p>
      </div>
      
    </div>
  )
}

export default Product
