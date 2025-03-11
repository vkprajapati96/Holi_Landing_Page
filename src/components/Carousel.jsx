import "./Carousel.css"
import React from "react";
import Slider from "react-slick"; // Import Slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
// import "./Hero.css"

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <Slider className="wrapper caro" {...settings}>
      <div className="image">
        <img src="https://i.pinimg.com/736x/3e/ab/21/3eab214c1f4dcbd2feac3a6a5dafce4f.jpg" alt="Slide 1" />
        <div className="text">
  <h1 >
    Celebrate the <br /> Vibrance of Holi!
  </h1>
  <p >
    Dive into the festival of colors with our exclusive collection.

  </p>
  <button >
    Shop Now
  </button>
            </div>
      </div >
      <div className="image">
        <img src="https://i.pinimg.com/736x/96/19/8c/96198c362efd111d5f28018a9a7e4f2b.jpg" alt="Slide 2" />
        <div className="text">
  <h1 >
    Celebrate the <br /> Vibrance of Holi!
  </h1>
  <p >
    Dive into the festival of colors with our exclusive collection.

  </p>
  <button >
    Shop Now
  </button>
            </div>
      </div>
      <div className="image">
        <img src="https://i.pinimg.com/736x/5e/29/bb/5e29bbd4605692eb3db044df2b69553d.jpg" alt="Slide 3" />
        <div className="text">
  <h1 >
    Celebrate the <br /> Vibrance of Holi!
  </h1>
  <p >
    Dive into the festival of colors with our exclusive collection.

  </p>
  <button >
    Shop Now
  </button>
            </div>
      </div>

   

    </Slider>
  );
};

export default Carousel;
