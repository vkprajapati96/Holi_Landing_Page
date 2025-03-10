import React from 'react'
import "./Footer.css"

function Footer() {
  return (
   
     <footer>
      <div className="wrapper  footer-main">
        <div className="footer-heading">
          <h2>HOLI WORLD</h2>
          <p>
          
    Coptright © 2025 Holi World Agency Ltd.<br/>
    All rights reserved.

          </p>
          <div className="footer-icons">
            <i className="ri-facebook-box-fill"></i>
            <i className="ri-apple-fill"></i>
            <i className="ri-youtube-fill"></i>
          </div>
        </div>

        <div className="footer-about">
          <h2>About</h2>
          <div className="footer-about-paras">
            <p>About us</p>
            <p>Features</p>
            <p>News</p>
            <p>Blog</p>
          </div>
        </div>

        <div className="footer-about">
          <h2>Contact Us</h2>
          <div className="footer-about-paras">
            <p>email</p>
            <p>Phone</p>
            <p>Address</p>
            <p>Support</p>
          </div>
        </div>
    
        <div className="footer-news">
          <h2>Newsletter</h2>
          <p>Lorem ipsum dolor, sit amet consectetur <br />adipisicing elit. Eius, vero. <br /></p>
          <div className="footer-inp">
            <input type="email" placeholder="Enter your email address" />
            <button><i className="ri-send-plane-fill"></i></button>
          </div>
        </div>
      </div>
    </footer>  
   
  )
}


export default Footer
