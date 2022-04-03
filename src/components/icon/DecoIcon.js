
import React from 'react';
import './DecoIcon.css';

const DecoIcon = (props) => {
  return (
    <div className='decoIconWrapper'>
      <img className='decoIcon' src={props.source} alt={props.alt}/>
    </div>
  )
}

export default DecoIcon;