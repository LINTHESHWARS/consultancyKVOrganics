import React from 'react'
import './Footer.css';
import paymentProviderImage from '../images/paymentProviderImage.png' 
import { FiArrowRight } from 'react-icons/fi';
import { BsTwitter, BsYoutube } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='grid'>
      <div className='row'>

        <div className='col'>
          <ul>
            <li>
              <h2 >Karpaga vinayaga Dairy & Organic products</h2>
            </li>
            <li id='firstFooterComponent'>
              {/* <GoLocation/> */}
              <p style={{textTransform:"uppercase",margin:"1.2rem"}}>Kv complex, salem main road, muthukalipatti, rasipuram, namakkal, 637 401</p>
            </li>
            <li id='firstFooterComponent'>
              {/* <i className="fa-solid fa-phone-volume"></i> */}
              <p style={{margin:"1.1rem"}}>+91 9042824939</p>
            </li>
            <li id='firstFooterComponent'>
              {/* <i className="fa-regular fa-envelope"></i> */}
              <p style={{margin:"1.1rem"}}>Admin@gmail.com</p>
            </li>
            <li id='firstFooterComponent'>
              <a href='# ' style={{margin:"1.1rem"}}><FaFacebookF/></a>
              <a href='# ' style={{margin:"1.1rem"}}><BsTwitter/></a>
              <a href='# ' style={{margin:"1.1rem"}}><SiLinkedin/></a>
              <a href='# ' style={{margin:"1.1rem"}}><BsYoutube/></a>
            </li>
          </ul>
        </div>

        <div className='col'>
          <ul>
            <li><h3>Company</h3></li>
            <li><a href='# '>About</a></li>
            <li><a href='# '>Blog</a></li>
            <li><a href='# '>All Products</a></li>
            <li><a href='# '>Locations Map</a></li>
            <li><a href='# '>FAQ</a></li>
            <li><a href='# '>Contact us</a></li>
          </ul>
        </div>

        <div className='col'>
          <ul>
            <li><h3>Services</h3></li>
            <li><a href='# '>Wish List</a></li>
            <li><a href='# '>Login</a></li>
            <li><a href='# '>My account</a></li>
            <li><a href='# '>Terms & Conditions</a></li>
            <li><a href='# '>Promotional Offers</a></li>
          </ul>
        </div>

        <div id='newsletter' className='col'>
          <ul>
            <li><h3>Newsletter</h3></li>
            <li><p>Subscribe to our weekly Newsletter and
              receive updates via email</p></li>
            <li className='newsletterEmail'>
              <input type='email' placeholder='Email*'></input>
              <button style={{color:"#fff",fontSize:"2rem",display:"flex",alignItems:"center"}}><FiArrowRight/></button>
            </li>
            <li>
              <h3>We Accept</h3>
            </li>
            <li>
              <img src={paymentProviderImage} alt='banner' />
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer