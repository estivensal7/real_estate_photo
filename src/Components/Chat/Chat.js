import React from 'react';
import { Jumbotron, Container, Fade, Button } from 'reactstrap';
import Chatkit from '@pusher/chatkit'

//importing Components
import MessageList from '../MessageList/MessageList';
import SendMessageForm from '../SendMessageForm/SendMessageForm';

//importing custom css
import './Chat.css';

//declaring variables for ChatKit API keys
const instanceLocator = "v1:us1:22635d4e-741b-4e83-a13f-67f68a7210a7"
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/22635d4e-741b-4e83-a13f-67f68a7210a7/token"
const username = "Mat"
const roomId = 18878495

export default class Chat extends React.Component {
        constructor(props) {
                super(props);
                        this.state = { 
                                messages: [],
                                fadeIn: false 
                        };
                this.toggle = this.toggle.bind(this);
                this.sendMessage = this.sendMessage.bind(this)
        }

        //creating the chatManager to function as soon as component mounts
        componentDidMount() {
                const chatManager = new Chatkit.ChatManager({
                        instanceLocator: instanceLocator,
                        userId: 'Mat',
                        tokenProvider: new Chatkit.TokenProvider({
                                url: testToken
                        })
                });

                //connecting the chatManager to the API
                chatManager.connect().then(currentUser => {
                        this.currentUser = currentUser
                        this.currentUser.subscribeToRoom({
                                roomId: roomId,
                                hooks: {
                                        onNewMessage: message => {
                                                this.setState({
                                                        messages: [...this.state.messages, message]
                                                });
                                        }
                                }
                        });
                });
        }

        sendMessage(text) {
                this.currentUser.sendMessage({
                        text,
                        roomId: roomId
                })
        }

        toggle() {
                this.setState({
                        fadeIn: !this.state.fadeIn,
                        messages: []
                });
        }

        render() {
                return (
                        <div className="chat-js-container">
                                <Button outline color="light" onClick={this.toggle}>Chat With Us</Button>
                                <Fade in={this.state.fadeIn} >
                                        <Jumbotron fluid className="chat-jumbotron">
                                                <Container fluid className="chat-jumbotron-container">
                                                        <MessageList roomId={this.state.roomId} messages={this.state.messages}/>
                                                        <SendMessageForm sendMessage={this.sendMessage}/>
                                                </Container>
                                        </Jumbotron>
                                </Fade>
                        </div>
                );
        }
};