import React, { useContext } from 'react'
import "./Cart.css"
import { CartContext } from '../Feature/ContextProivder'
import CartProduct from '../components/CartProduct';


function Cart() {
  const {cart} = useContext(CartContext);
  return (
<> 

<section class="wrapper cart-container">
  <div>
{
  cart.length > 0?(
    cart.map((p,index)=>(
      <CartProduct key={index} product={p}/>
    ))):"cart is empty now"

    }
  </div>

 
  
</section>


</>
  )
}

export default Cart
{/* <div class="cart-container">
<div class="cart-image">
  <img src="https://i.pinimg.com/736x/62/c7/b1/62c7b1836aefeda5f9ef9e332ec3daac.jpg" alt="Pichkarie" />
</div>

<div class="cart-details">
  <h3>Pichkarie</h3>
  <h4>$2.00</h4>
  <p>Experience a burst of vibrant colors with every spray of our precision-engineered pichkari.</p>
  
  <div class="cart-counter">
    <button class="counter-btn" >-</button>
    <span id="item-count">1</span>
    <button class="counter-btn" >+</button>
  </div>
  
  <div class="cart-actions">
    <button class="buy-btn">Buy Now</button>
    <button class="cart-btn">Add to Cart</button>
  </div>
</div>
</div> */}
