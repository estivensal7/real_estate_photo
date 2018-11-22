import React, { Component } from 'react';
import './App.css';

//importing components
import Chat from './Components/Chat/Chat';
import Navbar from './Components/Navbar/Navbar';
import ParallaxHeader from './Components/ParallaxHeader/ParallaxHeader';
import ParallaxImage from './Components/ParallaxImage/ParallaxImage';
import About from './Components/About/About';
import ServiceContainer from './Components/ServicesContainer/ServicesContainer';
import ContactContainer from './Components/ContactContainer/ContactContainer';

//importing pictures for parallax containers
import cityPic from './Images/city.jpg';
import marPic from './Images/mar.jpg';
import architectPic from './Images/architecture.jpg';

//importing font-awesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowDown)

class App extends Component {
		render() {
			return (
				<div className="App">
					{/* <Navbar /> */}
					<ParallaxHeader imageUrl={architectPic} />
					<About id="about-container"/>
					<ParallaxImage imageUrl={cityPic} />
					<ServiceContainer />
					<ParallaxImage imageUrl={marPic} />
					<ContactContainer />
				</div>
			);
		}
	}

export default App;
