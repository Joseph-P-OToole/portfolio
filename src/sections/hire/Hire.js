
import React from 'react';
import './Hire.css';
import Link from '../../components/nav/Link';
import Cog from '../../assets/icons/cog.svg';

const Hire = () => {
	return (
		<div id='hire'>
			<div className='contentContainer'>
				<div className="textContainer">
					<h4><span className="oi oi-browser"></span><br/>Front End</h4>
					<p>I am passionate about front end development. I continually look for ways to improve the flexibility and athstetics of my work and I love bringing a page to life with animations.</p>
				</div>
				<div className="textContainer">
					<h4><span className="oi oi-link-intact"></span><br/>Back End</h4>
					<p>I am comfortable with back end development. I enjoy the challenge of designing an efficient database and find satisfaction in the execution of a plan.</p>
				</div>
				<div className="textContainer">
					<h4><span className="oi oi-layers"></span><br/>UI/UX</h4>
					<p>I am fascinated with the psychology of UI design. I strive to create intuitive, elegant designs and aim to provide users with a comfortable yet unique experience.</p>
				</div>
				<div className="textContainer">
					<h4><span className="oi oi-brush"></span><br/>Design</h4>
					<p>I love creating and working with vector graphics. I thoroughly enjoy the process of creating every logo, icon and graphic I make. </p>
				</div>
			</div>
			<Link icon={Cog} type='actionLink link' reference='#about' name='About' />
	</div>
	)
}

export default Hire