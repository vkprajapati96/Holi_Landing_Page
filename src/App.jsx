import React from 'react'
import Header from './components/Header'
import {Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/Footer';
import Cart from './pages/Cart';
// import Hero from './components/hero';
// import About from './components/About';
// import Products from './components/Products';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>}/>
      
    </Routes>
    <Footer/>
  </>
  )
}

export default App
