
import React from 'react';
import './Contact.css';
import GitHub from '../../assets/icons/github.png';
import Email from '../../assets/icons/email.png';
import Indeed from '../../assets/icons/indeed.png';
import LinkedIn from '../../assets/icons/linkedin.png';

const Contact = () => {
	return (
    <div id='contact'>
      <div className='contactContent'>
        <h2>I would love to hear from you</h2>
        <div className='contactIconPanel'>
          <a className='contactLink' href="mailto:otooleJoseph@outlook.com">
            <img className='contactIcon' src={Email} title='Email' alt='Email' />
          </a>
          <a className='contactLink' href="https://github.com/Joseph-P-OToole">
            <img className='contactIcon' src={GitHub} title='GitHub' alt='GitHub' />
          </a>
          <a className='contactLink' href="https://github.com/Joseph-P-OToole">
            <img className='contactIcon' src={Indeed} title='Indeed' alt='Indeed' />
          </a>
          <a className='contactLink' href="https://www.linkedin.com/in/joseph-o-toole-786469236/">
            <img className='contactIcon' src={LinkedIn} title='LinkedIn' alt='LinkedIn' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;