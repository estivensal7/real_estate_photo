import React, { Component } from 'react';
import './App.css';

//importing components
import Chat from './Components/Chat/Chat';
import Navbar from './Components/Navbar/Navbar';
import ParallaxHeader from './Components/ParallaxHeader/ParallaxHeader';
import ParallaxImageOne from './Components/ParallaxImageOne/ParallaxImageOne';
import About from './Components/About/About';
import ServiceContainer from './Components/ServicesContainer/ServicesContainer';
import ContactContainer from './Components/ContactContainer/ContactContainer';

//importing pictures for parallax containers
import marPic from './Images/mar.jpg';
import architectPic from './Images/architecture.jpg';

//importing font-awesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowDown)

class App extends Component {
		render() {
			return (
				<div className="App">
					{/* <Navbar /> */}
					<ParallaxHeader imageUrl={architectPic} />
					<About id="about-container"/>
					<ParallaxImageOne />
					<ServiceContainer />
					{/* <ParallaxImage imageUrl={marPic} /> */}
					<ContactContainer />
				</div>
			);
		}
	}

export default App;
