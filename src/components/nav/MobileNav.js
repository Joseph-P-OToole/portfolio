
import React from 'react';
import Link from './Link';
import './MobileNav.css';

const MobileNav = (props) => {
  const clickHandler = () => {
    props.handler();
  }

  return (
    <div onClick={() => clickHandler()}  className={props.state} >
      <Link onClick={() => clickHandler()} focus={props.focus} type='link mobileLink' reference='#' name='Home' />
      <Link onClick={() => clickHandler()} focus={props.focus} type='link mobileLink' reference='#skills' name='Skills' />
      <Link onClick={() => clickHandler()} focus={props.focus} type='link mobileLink' reference='#hire' name='Hire' />
      <Link onClick={() => clickHandler()} focus={props.focus} type='link mobileLink' reference='#about' name='About' />
      <Link onClick={() => clickHandler()} focus={props.focus} type='link mobileLink' reference='#contact' name='Contact' />
    </div>
  )
}

export default MobileNav