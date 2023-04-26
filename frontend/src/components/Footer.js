import React from 'react'
import './Footer.css';
import paymentProviderImage from '../images/paymentProviderImage.png' 
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
              <i className="fa-solid fa-location-dot"></i>
              <p style={{textTransform:"uppercase",margin:"1.2rem"}}>Kv complex, salem main road, muthukalipatti, rasipuram, namakkal, 637 401</p>
            </li>
            <li id='firstFooterComponent'>
              <i className="fa-solid fa-phone-volume"></i>
              <p style={{margin:"1.1rem"}}>+91 9042824939</p>
            </li>
            <li id='firstFooterComponent'>
              <i className="fa-regular fa-envelope"></i>
              <p style={{margin:"1.1rem"}}>Admin@gmail.com</p>
            </li>
            <li id='firstFooterComponent'>
              <a href='# '><i style={{margin:"1.1rem"}} className="fa-brands fa-facebook-f"></i></a>
              <a href='# '><i style={{margin:"1.1rem"}} className="fa-brands fa-square-twitter"></i></a>
              <a href='# '><i style={{margin:"1.1rem"}} className="fa-brands fa-linkedin"></i></a>
              <a href='# '><i style={{margin:"1.1rem"}} className="fa-brands fa-youtube"></i></a>
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
              <button><i className="fa-regular fa-paper-plane" style={{color:"#fff"}}></i></button>
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