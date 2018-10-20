import React, { Component } from 'react';
import './App.css';

//importing components
import Chat from './Components/Chat/Chat';
import Navbar from './Components/Navbar/Navbar';
import ParallaxHeader from './Components/ParallaxHeader/ParallaxHeader';
import ParallaxImage from './Components/ParallaxImage/ParallaxImage';
import About from './Components/About/About';

import fashionPic from './Images/fashion.jpg';
import forestPic from './Images/forest.jpg';

class App extends Component {
		render() {
			return (
				<div className="App">
					<Navbar />
					<ParallaxHeader imageUrl={fashionPic} />
					<About />
					<ParallaxImage imageUrl={forestPic} />
					<Chat />
				</div>
			);
		}
	}

export default App;
