
import './Main.css';
import React,{useState} from 'react';
import Nav from '../../components/nav/Nav';
import LightBox from '../../components/lightBox/LightBox'
import Header from '../header/Header';
import Home from '../home/Home';
import Skills from '../skills/Skills';
import Hire from '../hire/Hire';
import About from '../about/About';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

const Main = () => {
  let [lightBoxOpen, toggleLightBox] = useState(false);
  let [lightBoxId, toggleLightBoxId] = useState("lightBoxHidden");
  let [lightBoxContent, switchLightBoxContent] = useState("");

  function toggleLightBoxStatus() {
    if(lightBoxOpen === false) {
      toggleLightBox(lightBoxOpen = true);
      toggleLightBoxId(lightBoxId = "lightBoxShow");
    } else {
      toggleLightBox(lightBoxOpen = false);
      toggleLightBoxId(lightBoxId = "lightBoxHidden");
    }
  }

  function setLightBoxContent(name) {
    switchLightBoxContent(lightBoxContent = name);
  }

  return (
    <div>
      <Nav />
      <LightBox propId={lightBoxId} source={lightBoxContent} lightBoxToggler={toggleLightBoxStatus} lightBoxContent={setLightBoxContent} />
      <Header />
      <Home />
      <Skills  lightBoxToggler={toggleLightBoxStatus} lightBoxContent={setLightBoxContent} />
      <Hire />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default Main