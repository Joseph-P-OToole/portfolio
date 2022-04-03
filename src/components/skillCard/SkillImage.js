
import React from 'react';
import './SkillImage.css';

const SkillImage = (props) => {
  
  const clickHandler = (source) => {
    props.lightBoxToggler();
    props.lightBoxContent(source);
  }

  let classes='skillShotImageContainer ' + props.type;

  return (
    <div className={classes} onClick={() => clickHandler(props.source)}>
      <img className='skillImage' src={props.source} alt={props.altText} title={props.altText} />
    </div>
  )
}

export default SkillImage