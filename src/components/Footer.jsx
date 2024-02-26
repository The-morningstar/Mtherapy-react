import React from 'react';
import './Footer.css'; // You can create a separate CSS file for styling
import shanthilogo from '../Images/shanthilogo.png'
const Footer = () => {
  return (<footer>
    <div className="footer-container">
      <div className="footer-column">
        <img className='shanthilogo' src={shanthilogo}/>
        <p className='sdesc'>Palliative care aims to improve the quality of life of people with life-limiting or disabling diseases, by treating pain and by providing emotional, mental and social support. Everyone can be a part of it.</p>
      </div>
      <div className="footer-column">
        <h3>Column 2</h3>
        <p>Content for the second column goes here.</p>
      </div>
      <div className="footer-column">
        <h3>Column 3</h3>
        <p>Content for the third column goes here.</p>
      </div>
      
    </div>
    <div className='rights'><p>&copy; All rights reserved Mobilixion Technologies Pvt. Ltd.</p></div></footer>
  );
};

export default Footer;
