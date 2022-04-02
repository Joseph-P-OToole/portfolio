
import React from 'react';
import './Footer.css';

const Footer = () => {
  let currentYear = new Date().getFullYear();
  
  return (
    <div id="footer">
        <p>
            <span id="copyYear">&copy; {currentYear}</span> - JPO DEVELOPMENT
        </p>
    </div>
  )
}

export default Footer