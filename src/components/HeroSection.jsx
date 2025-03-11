import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Carousel from './Carousel';


// const images = [
//     "https://i.pinimg.com/736x/3e/ab/21/3eab214c1f4dcbd2feac3a6a5dafce4f.jpg",
//     "https://i.pinimg.com/736x/5e/29/bb/5e29bbd4605692eb3db044df2b69553d.jpg",
//     "https://i.pinimg.com/736x/96/19/8c/96198c362efd111d5f28018a9a7e4f2b.jpg",
//     "https://i.pinimg.com/736x/f1/0a/0b/f10a0b165d81be925612c3f1daa8245a.jpg",
//     "https://i.pinimg.com/736x/fa/99/4a/fa994ad20562328b3b9d54a1a317f9ad.jpg",
// ];


function HeroSection() {
  
//   const [current, setCurrent] = useState(0);

//   function nextSlide() {
//       setCurrent(current === images.length - 1 ? 0 : current + 1);
//   }
 
//   function prevSlide() {
//       setCurrent(current === 0 ? images.length - 1 : current - 1);
//   }
  return (
    //   <div className="wrapper hero">
    //       <div className="slider ">
    //           <div className="left-arrow " onClick={prevSlide}>
    //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-6 h-6">
    //                   <path  d="M15.75 19.5L8.25 12l7.5-7.5" />
    //               </svg>
    //           </div>
    //           <div>      
    //           {images.map(
    //               (image, index) =>
    //                   current === index && (
    //                       <div key={image} className="slide ">
    //                           <img src={image} alt="images" />
    //                       </div>
    //                   )
    //           )}         
    //            </div>
    //           <div className="right-arrow" onClick={nextSlide}>
    //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" class="w-6 h-6">
    //                   <path  d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    //               </svg>
    //           </div>
    // </div>   
        <>
     
     <Carousel />
    
      
             </>
    //   </div>
  
)
}

export default HeroSection
