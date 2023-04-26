import React from 'react'
import Home from './HomeComponents/Home'
import About from './HomeComponents/About'
import Work from './HomeComponents/Work'
import Testimonial from './HomeComponents/Testimonial'
import Contact from './HomeComponents/Contact'
import Footer from './HomeComponents/Footer'
import './LandingPage.css'


const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default LandingPage
