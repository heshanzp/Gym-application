import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import line_image_back from "../../assets/line_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";

const Hero = () => {

  const transition = {type: 'spring', duration : 3}
  return (
    <div className="hero">

      <div className="blur hero-blur"></div>
      <div className="left-h">
           <Header/>
        {/* the best add */}
        <div className="the-best-ad">
          <span>the best fitness club in the town</span>
        </div>
        {/* Hero Heding */}
        <div className="hero-text">
          <div>
              <span className="stroke-text">Shape </span>
              <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
              <span>
                  In here we will help you to shape and build your ideal and 
                  live up to your life to the fullest
              </span>
          </div>
        </div>
      
        {/* figures*/}
        <div className="figures">
          <div>
              <span>+140</span>
              <span>expert coachs</span>
          </div>
          <div>
              <span>+978</span>
              <span>members joined</span>
          </div>
          <div>
              <span>+50</span>
              <span>fitness programs</span>
          </div>
        </div>
        {/*hero buttons*/ }
        <div className="hero-buttons">
           <buttons className="btn">Get Started</buttons>
           <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
          <button className="btn">Join Now</button>

          <motion.div
          initial={{right: "-1rem"}}
          whileInView={{right: "4rem"}}
          transition={transition}
           className="heart-rate">
             <img src={Heart} alt="" />
             <span>Heart Rate</span>
             <span>116 bpm</span>
          </motion.div>
          {/* Hero images */}
          <motion.img 
          initial={{right: "11rem"}}
          whileInView={{right: "20rem"}}
          transition={transition}
          src={line_image_back} alt="" className="line-image-back"/>
          {/* calories */}
          <motion.div
            initial={{right: "37rem"}}
            whileInView={{right: "28rem"}}
            transition={transition}
            className="calories"
            >
            <img src={Calories} alt=" " />
            <div>
               <span>Calories Burned</span>
               <span>220_kcal</span>
            </div>
          </motion.div>
      </div>
    </div>
  );
};

export default Hero
