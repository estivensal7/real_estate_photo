import React, { Component } from 'react';
import './App.css';
import ChatContainer from './Components/ChatContainer/ChatContainer';

class App extends Component {
		render() {
			return (
				<div className="App">
					<ChatContainer />
				</div>
			);
		}
	}

export default App;
