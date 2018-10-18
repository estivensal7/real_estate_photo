import React from 'react';
import { Button, Fade } from 'reactstrap';

//importing Components
import Chat from '../Chat/Chat';

import './ChatContainer.css';

export default class ChatContainer extends React.Component {
        constructor(props) {
        super(props);
                this.state = { fadeIn: true };
                this.toggle = this.toggle.bind(this);
        }

        render() {
                return (
                        <div className='chat-container'>
                                <Button color="primary" onClick={this.toggle}>Toggle Fade</Button>
                                <Fade in={this.state.fadeIn} >
                                        <Chat />
                                </Fade>
                        </div>
                );
        }

        toggle() {
                this.setState({
                        fadeIn: !this.state.fadeIn
                });
        }
};