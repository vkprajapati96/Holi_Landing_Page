import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ image, name, price, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product-card-heading">
        <h4>${price}</h4>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="product-btns">
        <button className="buy-btn">Buy Now</button>
        <Link to="/cart">
          <button className="cart-btn">Add to Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
