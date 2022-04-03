
import React from 'react';
import "./Link.css";
import ActionIcon from '../icon/ActionIcon';

const Link = (props) => {
  let link;

  if(props.icon === undefined) {
    link = <a className={props.type} href={props.reference}>
              {props.name}</a>
  } else {
    link = <a className={props.type} href={props.reference}>
              {props.name}
              <ActionIcon icon={props.icon} alt={props.name} />
            </a>
  }
  return (
    <div className={props.type}>
      {link}
    </div>
  )
}

export default Link;