
import React from 'react';
import './Hire.css';
import Link from '../../components/nav/Link';
import Cog from '../../assets/icons/cog.svg';
import BrowserIcon from '../../assets/icons/browser.png';
import LinkIcon from '../../assets/icons/link.png';
import LayersIcon from '../../assets/icons/layers.png';
import BrushIcon from '../../assets/icons/brush.png';
import DecoIcon from '../../components/icon/DecoIcon';

const Hire = () => {
	return (
		<div id='hire'>
			<div className='contentContainer'>
				<div className="textContainer">
					<DecoIcon source={BrowserIcon} alt='browser icon' />
					<h4 className='hireHeadline'>Front End</h4>
					<p className='hireText'>I am passionate about front end development. I continually look for ways to improve the flexibility and athstetics of my work and I love bringing a page to life with animations.</p>
				</div>
				<div className="textContainer">
					<DecoIcon source={LinkIcon} alt='link icon' />
					<h4 className='hireHeadline'>Back End</h4>
					<p className='hireText'>I am comfortable with back end development. I enjoy the challenge of designing an efficient database and find satisfaction in the execution of a plan.</p>
				</div>
				<div className="textContainer">
					<DecoIcon source={LayersIcon} alt='layers icon' />
					<h4 className='hireHeadline'>UI/UX</h4>
					<p className='hireText'>I am fascinated with the psychology of UI design. I strive to create intuitive, elegant designs and aim to provide users with a comfortable yet unique experience.</p>
				</div>
				<div className="textContainer">
					<DecoIcon source={BrushIcon} alt='brush icon' />
					<h4 className='hireHeadline'>Design</h4>
					<p className='hireText'>I love creating and working with vector graphics. I thoroughly enjoy the process of creating every logo, icon and graphic I make. </p>
				</div>
			</div>
			<Link icon={Cog} type='actionLink link' reference='#about' name='About' />
	</div>
	)
}

export default Hire