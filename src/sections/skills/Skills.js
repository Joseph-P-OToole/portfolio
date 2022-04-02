
import React,{useState} from 'react';
import './Skills.css';
import '../../Animation.css';
import Link from '../../components/nav/Link';
import SkillText from '../../components/skillCard/SkillText';
import PuzzlePiece from '../../assets/icons/puzzle-piece.svg';

//skill images
import AdobeIllustratorImage from '../../assets/skillImages/adobe-illustrator-image.png';
import AdobePhotoshopImage from '../../assets/skillImages/adobe-photoshop-image.png';
import AndroidImage from '../../assets/skillImages/android-image.png';
import BlazorImage from '../../assets/skillImages/blazor-image.png';
import DotnetCoreImage from '../../assets/skillImages/dot-net-core-image.png';
import IosImage from '../../assets/skillImages/ios-image.png';
import JavaImage from '../../assets/skillImages/java-image.png';
import JavascriptImage from '../../assets/skillImages/js-image.png';
import PhpImage from '../../assets/skillImages/php-image.png';
import PythonImage from '../../assets/skillImages/python-image.png';
import ReactImage from '../../assets/skillImages/react-image.png';
import SqlImage from '../../assets/skillImages/sql-image.png';

//skill icons
import AdobeIllustratorIcon from '../../assets/techLogos/adobe-illustrator-icon.png';
import AdobePhotoshopIcon from '../../assets/techLogos/adobe-photoshop-icon.png';
import AndroidIcon from '../../assets/techLogos/android-icon.png';
import BlazorIcon from '../../assets/techLogos/blazor-icon.png';
import DotnetCoreIcon from '../../assets/techLogos/dot-net-core-icon.png';
import IosIcon from '../../assets/techLogos/ios-icon.png';
import JavaIcon from '../../assets/techLogos/java-icon.png';
import JavascriptIcon from '../../assets/techLogos/js-icon.png';
import PhpIcon from '../../assets/techLogos/php-icon.png';
import PythonIcon from '../../assets/techLogos/python-icon.png';
import ReactIcon from '../../assets/techLogos/react-icon.png';
import SqlIcon from '../../assets/techLogos/sql-icon.png';
import SkillImage from '../../components/skillCard/SkillImage';

const Skills = (props) => {
	const [skillName, setSkillName] = useState('Adobe Illustrator');
	const [contentAnim, setAnim] = useState('skillShotContainer');
	const skillNames = ['Adobe Illustrator', 'Adobe Photoshop', 'Android', 'Blazor', '.NET Core', 'IOS', 'Java', 'Javascript', 'Php', 'Python', 'React', 'Sql' ];

	const getIconState = (name) => {
		if(name === skillName) {
			return 'skillButtonWrapper highlight';
		}else {
			return 'skillButtonWrapper';
		}
	}//getIconState

	const getIcon = (skillName) => {
		switch(skillName) {
			case 'Adobe Illustrator':
				return AdobeIllustratorIcon;
			case 'Adobe Photoshop':
				return AdobePhotoshopIcon;
			case 'Android':
				return AndroidIcon;
			case 'Blazor':
				return BlazorIcon;
			case '.NET Core':
				return DotnetCoreIcon;
			case 'IOS':
				return IosIcon;
			case 'Java':
				return JavaIcon;
			case 'Javascript':
				return JavascriptIcon;
			case 'Php':
				return PhpIcon;
			case 'Python':
				return PythonIcon;
			case 'React':
				return ReactIcon;
			case 'Sql':
				return SqlIcon;
			default:
				return AdobeIllustratorIcon;
		}
	}// getIcon

	const getButtons = () => {
		let buttons = [];
		for(let i = 0; i < skillNames.length; i++) {
			buttons.push(<div className={getIconState(skillNames[i])}>
											<img className='skillIcon' onClick={() => switchSkill(skillNames[i])} src={getIcon(skillNames[i])} alt={skillNames[i]} />
									</div>);
		}
		return buttons;
	}// getButtons

	const [skillText, setSkillText] = useState('This is a diagram of a car I created with Adobe Illustrator. It is being used as a training tool for identifying and learning about automotive systems.');
	const getText = (name) => {
    switch(name) {
      case 'Adobe Illustrator':
        return 'This is a diagram of a car I created with Adobe Illustrator. It is being used as a training tool for identifying and learning about automotive systems.';
      case 'Adobe Photoshop':
        return 'This is a website mockup I made using Adobe Photoshop. This mockup was based on a wire frame sketch provided as a class assignment.';
      case 'Android':
        return 'This is a simple metronome app I built for Android. Users can adjust for tempo as well as for time signature. There is built in tone used for tuning and italian tempo markings. It was written using Android Studio in Java.';
      case 'Blazor':
        return 'This is an older version of my portfolio created using Blazor WASM. It is a multi page application that displays my skills and projects.';
      case '.NET Core':
        return 'This is an automotive training tool I built using .NET core and Adobe Illustrator. It uses a SQL server database and custom SVG graphics to aid in learning about automotive systems.';
      case 'IOS':
        return 'This is a coffee order app I built in IOS using Swift and SQL Lite. It allows users to create coffee orders with common drinks and custom ingredients. Users can also nickname and save the orders.';
      case 'Java':
        return 'This is an automotive troubleshooting tool I built in Java. It has a few diagnostic paths with basic troubleshooting questions that will lead the user to primary checks and a safety advisory based on the conditions.';
      case 'Javascript':
        return 'This is a game I built in vanilla Javascript. The object of the game is to collect gas cans while avoiding the asteroids. The rocket is being pulled toward a black hole and the user must use fuel in order to collect more.';
      case 'Php':
        return 'This is a raffle website I built in Php using a SQL database. Users can post items they would like to raffle providing the item value and amount of tickets to be sold. All of the data is being stored and retrieved via SQL queries.';
      case 'Python':
        return 'This is a template generator I built in Python using Tkinter, users can choose between an empty boilerplate, a canvas and animation frame boilerplate, or a full website template with many common features. It then copies the selected template to the specified directory.';
      case 'React':
        return 'This website was created using React. It is styled with custom CSS and includes custom CSS animations.';
      case 'Sql':
        return 'This is a guitar store I created using .Net core and SQL server. Users can create an account, login and view products. Admin\'s can add, delete, and edit products as well as upload multiple images for each product.';
      default:
        return 'There seems to be something wrong please select another skill to view my work';
    }
  }// getText

	const [skillImage, setSkillImage] = useState(AdobeIllustratorImage);
	const getImage = (name) => {
		switch(name) {
			case 'Adobe Illustrator':
				return AdobeIllustratorImage;
			case 'Adobe Photoshop':
				return AdobePhotoshopImage;
			case 'Android':
				return AndroidImage;
			case 'Blazor':
				return BlazorImage;
			case '.NET Core':
				return DotnetCoreImage;
			case 'IOS':
				return IosImage;
			case 'Java':
				return JavaImage;
			case 'Javascript':
				return JavascriptImage;
			case 'Php':
				return PhpImage;
			case 'Python':
				return PythonImage;
			case 'React':
				return ReactImage;
			case 'Sql':
				return SqlImage;
			default:
				return AdobeIllustratorImage;
		}
	}// getImage

	const [skillLink, setSkillLink] = useState('https://automotiveta.com/');
	const getLink = (name) => {
		switch(name) {
			case 'Adobe Illustrator':
				return 'https://automotiveta.com/';
			case 'Adobe Photoshop':
				return null;
			case 'Android':
				return null;
			case 'Blazor':
				return 'https://joseph-p-otoole.github.io/Dev/';
			case '.NET Core ':
				return 'https://automotiveta.com/';
			case 'IOS':
				return null;
			case 'Java':
				return null;
			case 'Javascript':
				return 'https://joseph-p-otoole.github.io/blackholeGame/';
			case 'Php':
				return null;
			case 'Python':
				return null;
			case 'React':
				return null;
			case 'Sql':
				return null;
			default:
				return 'https://automotiveta.com/';
		}
	}// getLink

	const switchSkill = (skill) => {
		setAnim('skillShotContainer slideOutLeft');
		setTimeout(() => {
			setSkillName(skill);
			setSkillText(getText(skill));
			setSkillImage(getImage(skill));
			setSkillLink(getLink(skill));
			setAnim('skillShotContainer slideFromRight');
		}, 300);
	}// switchSkill

	return (
		<div id="skills">
			<div className={contentAnim}>
				<SkillImage lightBoxToggler={props.lightBoxToggler} lightBoxContent={props.lightBoxContent} source={skillImage} altText={skillName} />
				<SkillText title={skillName} desc={skillText} sampleLink={skillLink} />
			</div>
			<div className="iconPanel">
				{getButtons()}
			</div>
			<Link icon={PuzzlePiece} type='actionLink link' reference='#hire' name='hire' />
		</div>
	)
}

export default Skills