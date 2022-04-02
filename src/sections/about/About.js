import React from 'react';
import './About.css';
import Link from '../../components/nav/Link';
import Info from '../../assets/icons/info.svg';

const About = () => {
  return (
    <div id="about">
      <h2 id="aboutHeadline">
        Hello, my name is Joseph O'Toole
      </h2>
      <p className="aboutText">
        Currently studying web development with triOS college. I enjoy learning new skills, exploring ideas and pushing the limits of my capabilities. Formerly a red seal 310T Truck and Coach Technician, I have developed skills in systems thinking, problem solving and attention to detail. I am driven by creativity, satisfied by logic and can't wait to see what I can do for you.
      </p>
      <Link icon={Info} type='actionLink link' reference='#contact' name='Contact' />
    </div>
  )
}

export default About