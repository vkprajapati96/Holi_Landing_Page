import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";



function Header() {
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
        <li><Link  to="/cart">Cart</Link></li>
        <li className='menu'><i class="ri-menu-line"></i></li>

    
            </ul>
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
