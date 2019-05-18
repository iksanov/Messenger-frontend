import React, {Component} from 'react';
import { getPublicMessages } from './api'

class MessagesList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            messages: []
        };

        console.log("MessagesList -> constructor(): state.messages = " + this.state.messages);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.loadNewMessages = this.loadNewMessages.bind(this);
        
        this.socket = new WebSocket(`ws://messenger.westeurope.cloudapp.azure.com/socket/messages?token=${this.props.token}`);

        this.socket.onmessage = (event) => {
            console.log("MessagesList -> socket.onmessage with event = " + event);
            let messages = this.state.messages;
            messages.push(JSON.parse(event.data));
            this.setState({messages: messages});
        }
    };

    loadNewMessages(token) {
        getPublicMessages(token, 0, 500).then(messages => {
            this.setState({messages: messages});
        });
    }

    componentDidMount() {
        // setInterval(() => {
        //     this.loadNewMessages(this.props.token)
        // }, 10000);
        this.loadNewMessages(this.props.token)
        console.log("MessagesList -> componentDidMount()");
    }

    render() {
        console.log("MessagesList -> render()");
        console.log("MessagesList -> render() -> last message = " + this.state.messages.length);
        return (
            <div>
                {
                    this.state.messages.map((msg,i) => 
                        <div key={i}>
                            <div> {msg.user} </div>
                            <div> {msg.content} </div>
                            <div> {msg.timestamp} </div>
                        </div>
                    )
                }

            </div>
        );
    }
}

export default MessagesList;