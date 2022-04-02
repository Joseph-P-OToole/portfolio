
import React from 'react';
import './LightBox.css';
import SkillImage from '../skillCard/SkillImage';

const LightBox = (props) => {
  return (
    <div id={props.propId} onClick={props.lightBoxToggler}>
      <SkillImage lightBoxToggler={props.lightBoxToggler} source={props.source} lightBoxContent={props.lightBoxContent} />
      <h4>CLOSE</h4>
    </div>
  );
}

export default LightBox;
