import React from "react";
import "./About.css";
import { motion } from "motion/react"

import {fadIn} from "../variants";
import {fadeInVariants} from "../variants";


function About() {
  return (
    <div id="about" className="wrapper" >
      <div className="about">                                           
        <motion.div 
         className="about-logo">
          <motion.h1
          variants={fadIn("right",.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.7}}
          >About Us</motion.h1>
          <motion.p 
          variants={fadIn("left",0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.7}}
          >
            At our store, we seamlessly blend quality and creativity to 
            transform everyday  moments <br /> and special occasions into unforgettable
            experiences.
          </motion.p>
        </motion.div>
        <motion.div className="about-cards">
  {/* Left Image */}
  <motion.div
    variants={fadeInVariants.left}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.7 }}
    className="about-img"
  >
    <img
      src="https://i.pinimg.com/736x/9b/3a/b5/9b3ab5556b668ea1373f7ac585154653.jpg"
      alt="img"
    />
  </motion.div>

  {/* Middle Description (comes from up) */}
  <motion.div
    variants={fadeInVariants.up}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.7 }}
    className="about-description"
  >
    <h2>About Store</h2>
    <p >
    At our e-commerce store, we believe that shopping should be an enjoyable and enriching experience from start to finish. We offer a carefully curated selection of high-quality products designed to enhance your everyday life and special occasions, ensuring that every item meets our stringent quality standards. With a steadfast focus on convenience, competitive pricing, and exceptional customer service.
    </p> <p> we strive to make your shopping experience both effortless and inspiring. Our ever-evolving collection brings you the latest trends alongside timeless classics, thoughtfully selected to suit a variety of lifestyles. Whether you're looking for something unique for yourself or the perfect gift for a loved one, we are dedicated to helping you discover products that add value and joy to your life.
      </p>
    
  </motion.div>

  {/* Right Section */}
  <motion.div
    variants={fadeInVariants.right}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.7 }}
    className="about-description"
  >
    <h2>Holi Importance</h2>
    <p>Holi, the festival of colors, is a vibrant celebration of joy, renewal, and the triumph of good over evil. It marks the arrival of spring and brings communities together in a burst of energy, laughter, and togetherness. At our store, we honor this spirit by curating an exclusive collection specially designed for Holi.</p> <p> Our range includes eco-friendly color powders that are both safe and brilliantly vivid, alongside traditional decor, festive attire, and innovative accessories that capture the timeless charm of the festival. Each product is thoughtfully selected to enhance your celebration, allowing you to create memorable moments filled with warmth, creativity, and the true essence of Holi. We are committed to quality and authenticity, ensuring that every item reflects the rich cultural heritage of this festive season. 
    </p>
  </motion.div>
</motion.div>
 

      </div>
    </div>
  );
}

export default About;
