import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Chatkit from '@pusher/chatkit'

//importing Components
import ChatTitle from '../ChatTitle/ChatTitle';
import MessageList from '../MessageList/MessageList';
import SendMessageForm from '../SendMessageForm/SendMessageForm';

//declaring variables for ChatKit API keys
const instanceLocator = "v1:us1:22635d4e-741b-4e83-a13f-67f68a7210a7"
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/22635d4e-741b-4e83-a13f-67f68a7210a7/token"
const username = "Mat"
const roomId = 18878495

export default class Chat extends React.Component {
        constructor(props) {
                super(props);
                        this.state = { 
                                messages: []
                        };
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

        render() {
                return (
                        <div>
                                <Jumbotron fluid>
                                        <Container fluid>
                                                <ChatTitle />
                                                <MessageList roomId={this.state.roomId} messages={this.state.messages}/>
                                                <SendMessageForm sendMessage={this.sendMessage}/>
                                        </Container>
                                </Jumbotron>
                        </div>
                );
        }
};