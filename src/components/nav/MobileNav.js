
import React from 'react';
import Link from './Link';
import './MobileNav.css';
import Earth from '../../assets/icons/earth.png';
import Code from '../../assets/icons/code.svg';
import PuzzlePiece from '../../assets/icons/puzzle-piece.svg';
import Cog from '../../assets/icons/cog.svg';
import Info from '../../assets/icons/info.svg';

const MobileNav = (props) => {
  const clickHandler = () => {
    props.handler();
  }

  return (
    <div onClick={() => clickHandler()}  className={props.state} >
      <Link onClick={() => clickHandler()} icon={Earth} type='link mobileLink' reference='#' name='Home' />
      <Link onClick={() => clickHandler()} icon={Code} type='link mobileLink' reference='#skills' name='Skills' />
      <Link onClick={() => clickHandler()} icon={PuzzlePiece} type='link mobileLink' reference='#hire' name='Hire' />
      <Link onClick={() => clickHandler()} icon={Cog} type='link mobileLink' reference='#about' name='About' />
      <Link onClick={() => clickHandler()} icon={Info} type='link mobileLink' reference='#contact' name='Contact' />
    </div>
  )
}

export default MobileNav