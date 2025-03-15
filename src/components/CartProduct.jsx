import React, { useContext } from "react";
import { CartContext } from "../Feature/ContextProivder";

function CartProduct({ product }) {
  const { dispatch } = useContext(CartContext);

  function Increase(id) {
    dispatch({ type: "increase", id });
  }

  function Decrease(id) {
    dispatch({ type: "decrease", id });
  }

  return (
    <div>
      <div className="cart-card">
        <div className="cart-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="cart-details">
          <h3>{product.name}</h3>
          <h4>${product.price}</h4>
          <p>{product.description}</p>

          <div className="cart-counter">
            <button className="counter-btn" onClick={() => Decrease(product.id)}>
              -
            </button>
            <span>{product.quantity}</span>
            <button className="counter-btn" onClick={() => Increase(product.id)}>
              +
            </button>
          </div>
          <button className="cart-btn" onClick={() => dispatch({ type: "remove", id: product.id })}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
