
import React,{useState} from 'react';
import './SkillText.css';

const SkillText = (props) => {
  let shortDesc = (props.desc).substring(0, 80) + '...';
  let [isExpand, setExpand] = useState(false);
  
  let desc;
  if(isExpand) {
    desc = props.desc;
  }else {
    desc = shortDesc;
  }
  
  let expandButton;
  if(isExpand) {
    expandButton = <div onClick={() => toggleExpandText()} className='expandButton'>read less</div>;
  }else {
    expandButton = <div onClick={() => toggleExpandText()} className='expandButton'>read more</div>;
  }
  
  let link;
  if(props.sampleLink === null) {
    link = <div className='linkPlaceHolder'></div>
  } else {
    link = <a target='_blank' rel='noreferrer' className="sampleLink" href={props.sampleLink}>Check it out</a>
  }

  const toggleExpandText = () => {
    if(!isExpand) {
      desc = props.desc;
      expandButton = <div onClick={() => toggleExpandText()} className='expandButton'>read less</div>;
      setExpand(true);
    }else {
      desc = shortDesc;
      expandButton = <div onClick={() => toggleExpandText()} className='expandButton'>read more</div>;
      setExpand(false);
    }
  }

  return (
    <div className='skillContent'>
      <h4 className='skillTitle'>{props.title}</h4>
      <p className='skillDesc'>{desc}</p>
      <div className='buttonContainer'>
        {link}
        {expandButton}
      </div>
    </div>
  )
}

export default SkillText