import React from 'react'
import BannerSlider from '../components/BannerSlider';
import ContactAddressArea from '../components/ContactAddressArea';
import ContactMessageArea from '../components/ContactMessageArea';
import GoogleMap from '../components/GoogleMap';
import Footer from '../components/Footer';
import NavbarContact from '../components/NavbarContact'
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
        <NavbarContact/>
        <BannerSlider/>
        <ContactAddressArea/>
        <ContactMessageArea/>
        <GoogleMap/>
        <div><Footer/></div>
        
    </div>
  )
}

export default Contact