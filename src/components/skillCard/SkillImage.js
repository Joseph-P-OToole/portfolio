
import React from 'react';
import './SkillImage.css';

const SkillImage = (props) => {
  
  const clickHandler = (source) => {
    props.lightBoxToggler();
    props.lightBoxContent(source);
  }

  return (
    <div className='skillShotImageContainer' onClick={() => clickHandler(props.source)}>
      <img className='skillImage' src={props.source} alt={props.altText} title={props.altText} />
    </div>
  )
}

export default SkillImage