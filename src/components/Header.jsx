import React, { useContext, useState } from 'react'
import "./Header.css"
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { CartContext } from '../Feature/ContextProivder';



function Header() {
  const {cart}  = useContext(CartContext)
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };


  return (
    <>
    <section className='header-container '>
    <header className='wrapper'>
        <div className='holi-logo'><Link to="/">HOLI WORLD</Link> </div>
        <div className='holi-navigatiion'>
        <ul>
         <li><Link to="/">Home</Link></li>
        <li><HashLink smooth to="#about">About Us</HashLink></li>
        <li><HashLink smooth to="#product">Products</HashLink></li>
        <li><HashLink smooth to="#testimonials">Testimonials</HashLink></li>
        <li ><Link  to="/cart"><i id='cart' class="ri-shopping-cart-2-fill"></i></Link><span>{cart.length}</span></li>
        <li className='menu ' id='show' onClick={toggleSidebar}><i class="ri-menu-line"></i></li>
         </ul>
      <div className={`sidebar ${sidebar ? "show" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>✖</button>
        <ul>
          <li className='list'  onClick={toggleSidebar}>Home</li>
          <li className='list'  onClick={toggleSidebar}>About Us</li>
          <li className='list'  onClick={toggleSidebar}>Products</li>
          <li className='list'  onClick={toggleSidebar}>Testimonials</li>
          <li className='list'><Link id='sidebar-list' to="/cart" onClick={toggleSidebar}><i id='cart' class="ri-shopping-cart-2-fill"></i> ({cart.length})</Link></li>
        </ul>
      </div>

            <form>
              <input className='holi-SearchBar' type="text" placeholder='Search...' />
              <button><i class="ri-search-line"></i></button>
              </form>
            
        </div>

    </header>
    </section>
 
    </>
  )
}

export default Header
