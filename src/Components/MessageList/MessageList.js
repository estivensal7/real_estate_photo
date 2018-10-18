import React from 'react';
import { Badge } from 'reactstrap';

import './MessageList.css';

export default class MessageList extends React.Component {
        render() {
                return (
                        <ul className="message-list">                 
                                {this.props.messages.map(message => {
                                        return (
                                                <li key={message.id} className="message">
                                                        <Badge color="primary">
                                                                {message.text}
                                                        </Badge>
                                                </li>
                                        )
                                })}
                        </ul>   
                )
        }
}