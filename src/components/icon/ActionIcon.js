
import React from 'react';
import './ActionIcon.css';

const ActionIcon = (props) => {
  
  return (
    <div className="iconWrapper">
      <img className="actionIcon" src={props.icon} alt="action icon" />
    </div>
  )
}

export default ActionIcon