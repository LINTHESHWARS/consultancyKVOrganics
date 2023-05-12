import React from "react";
import BannerBackground from "../../Assets/home-banner-background.png";
import BannerImage from "../../Assets/home-banner-image.png";
import Fruits from "../../Assets/fruits.jpg"
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import './Home.css'
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container" >
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>

        <div className="home-text-section" >
          <h1 style={{fontSize:"5rem"}} className="primary-heading">
            Your Favourite Product Quick & Fresh
          </h1>
          <p style={{fontSize:"2rem"}} className="primary-text">
          Organic products are generally richer in nutrients, such as antioxidants and vitamins, than non-organic products. They also have lower levels of pesticides and are less likely to contain harmful residues.
          </p>
          <a href="http://localhost:3000/product" style={{textDecoration:"none"}}>
          <div>
          <button style={{fontSize:"2rem",marginTop:"1.2rem"}} className="secondary-button" id="order">
            Order Now <FiArrowRight />{" "}
          </button>
          </div>
          </a>
        </div>

        <div className="home-image-section">
          <img src={Fruits} style={{borderRadius:"5rem"}} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
