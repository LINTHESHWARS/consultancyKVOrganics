import React from 'react'
import Header from '../components/Header';
import Navbar from '../components/Header';
import BannerSlider from '../components/BannerSlider';
import BreadCrumb from '../components/BreadCrumb';
import ContactAddressArea from '../components/ContactAddressArea';
import ContactMessageArea from '../components/ContactMessageArea';
import GoogleMap from '../components/GoogleMap';
import Features from '../components/Features';
import Footer from '../components/Footer';


const Contact = () => {
  return (
    <div>
        {/* <Header/> */}
        {/* <Navbar/> */}
        <BannerSlider/>
        <BreadCrumb/>
        <ContactAddressArea/>
        <ContactMessageArea/>
        <GoogleMap/>
        <Features/>
        <div><Footer/></div>
        
    </div>
  )
}

export default Contact