import React from 'react';
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className='product__info'>
        <p>{title}</p>
        <p className="product__price">
            <small>$</small>
            <srong>19.99</srong>
        </p>
        <div className="product__rating">
          <p>*</p>
          <p>*</p>
          <p>*</p>

        </div>

      </div>
      <img src="https://images-na.ssl-images-amazon.com/images/I/51zBsISdaJL._SX331_BO1,204,203,200_.jpg"/>
      <button>Add to Basket</button>
    
    </div>
  )
}

export default Product
