import React, { Component } from 'react';
import './App.css';

//importing components
import ParallaxHeader from './Components/ParallaxHeader/ParallaxHeader';
import ParallaxImageOne from './Components/ParallaxImageOne/ParallaxImageOne';
import ParallaxImageTwo from './Components/ParallaxImageTwo/ParallaxImageTwo';
import About from './Components/About/About';
import ServiceContainer from './Components/ServicesContainer/ServicesContainer';
import ContactContainer from './Components/ContactContainer/ContactContainer';

//importing font-awesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowDown)

class App extends Component {
		render() {
			return (
				<div className="App">
					<ParallaxHeader />
					<About id="about-container"/>
					<ParallaxImageOne />
					<ServiceContainer />
					<ParallaxImageTwo />
					<ContactContainer />
				</div>
			);
		}
	}

export default App;
