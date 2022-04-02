
import React,{useState} from 'react';
import Link from './Link';
import MobileNav from './MobileNav';
import './Nav.css';
import Logo from '../../assets/logos/logo.png';

const Nav = () => {
  const [buttonState, toggleButtonState] = useState('closed');
  const [navState, toggleNavState] = useState('mobileNav inactive');
  let [bar1Class, toggleBar1] = useState('bar bar1');
  let [bar2Class, toggleBar2] = useState('bar bar2');
  let [bar3Class, toggleBar3] = useState('bar bar3');
  
  const toggleNav = () => {
    if(buttonState === 'closed') {
      toggleButtonState('open');
      toggleNavState('mobileNav active');
      toggleButton();
    }else {
      toggleButtonState('closed');
      toggleNavState('mobileNav inactive');
      toggleButton();
    }
  }// toggleNav

  const toggleButton = () => {
    if(buttonState === 'closed') {
      toggleBar1('bar bar1Active');
      toggleBar2('bar bar2Active');
      toggleBar3('bar bar3Active');
    }else {
      toggleBar1('bar bar1');
      toggleBar2('bar bar2');
      toggleBar3('bar bar3');
    }
  }// toggleButton

  return (
    <div className='nav'>
      <a href='#' className='logoContainer'>
        <img src={Logo} alt='logo' className='logo'/>
      </a>
      <Link type='desktopNavLink link' reference='#' name='Home' />
      <Link type='desktopNavLink link' reference='#skills' name='Skills' />
      <Link type='desktopNavLink link' reference='#hire' name='Hire' />
      <Link type='desktopNavLink link' reference='#about' name='About' />
      <Link type='desktopNavLink link' reference='#contact' name='Contact' />
      <MobileNav state={navState} handler={toggleNav} />
      <div onClick={() => toggleNav()} className='navToggler'>
        <div className={bar1Class}></div>
        <div className={bar2Class}></div>
        <div className={bar3Class}></div>
      </div>  
    </div>
  )
}

export default Nav