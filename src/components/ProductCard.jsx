import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Feature/ContextProivder";

const ProductCard = ({ image, name, price, description,quantity }) => {
  const {dispatch} =useContext(CartContext)
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
        <button  className="cart-btn" 
          onClick={()=>dispatch({type:"Add",
            product: { image, name, price, description,quantity },
          })}
          >Add to Cart</button>
          
      </div>
    </div>
  );
};

export default ProductCard;
