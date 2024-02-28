import React from 'react';
import './Footer.css'; // You can create a separate CSS file for styling
import shanthilogo from '../Images/shanthilogo.png'
const Footer = () => {
  return (<footer>
    <div className="footer-container">
      <div className="footer-column">
        <img className='shanthilogo' src={shanthilogo}/>
        <p className='sdesc'>Palliative care aims to improve the quality of life of people <br/>with life-limiting or disabling diseases, by treating pain and by providing <br/>emotional, mental and social support. Everyone can be a part of it.</p>
      </div>
      <div className='footer-column'>
  <div className="footercontactus">
    <h3>Contact us</h3>
    
    <a  onClick={() => window.location.href = 'tel:+919446997887'}>Anoysious Joju</a>
    <a  onClick={() => window.location.href = 'tel:+919446997887'}>Nimble nixan</a>
    <p>shanthibavan@gmail.com</p>
  </div>
</div>
      
      
    </div>
    <div className='rights'><p>&copy; All rights reserved Mobilixion Technologies Pvt. Ltd.</p></div></footer>
  );
};

export default Footer;
