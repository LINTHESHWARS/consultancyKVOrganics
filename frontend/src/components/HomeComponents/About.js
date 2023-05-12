import React from "react";
import AboutBackground from "../../Assets/about-background.png"
import AboutBackgroundImage from "../../Assets/about-background-image.png";
import Juice from "../../Assets/juice.jpg"
import './Home.css';

const About = () => {
  return (
    <div className="about-section-container">

      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>

      <div className="about-section-image-container">
        <img src={Juice} style={{borderRadius:"5rem"}} alt="" />
      </div>

      <div className="about-section-text-container">
        <p className="primary-subheading" style={{fontSize:"3rem"}}>About</p>
        <h1 className="primary-heading" style={{fontSize:"5rem"}}>
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text" style={{fontSize:"2rem"}}>
        Organic products are free from synthetic preservatives and additives, which may be harmful to human health.
        </p>
        <p className="primary-text" style={{fontSize:"2rem"}}>
        Organic food products are produced using organic farming practices and are certified as organic by government agencies.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button" style={{fontSize:"2rem"}}>Learn More</button>
        </div>
      </div>

    </div>
  );
};

export default About;
