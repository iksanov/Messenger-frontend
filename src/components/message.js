import React, {Component} from 'react';
import { getUserInfo } from './api'

class Message extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: ""
        };

        // console.log("Message -> constructor(): state.name = " + this.state.name);
    };

    componentDidMount() {
        getUserInfo(this.props.userId)
        .then(userInfo => this.setState({name: userInfo.name}));
    }

    render() {
        // console.log("Message -> render()");
        return (
            <div>
                <div> {this.state.name} </div>
                <div> {this.props.text} </div>
                <div> {this.props.time} </div>
            </div>
        );
    }

}

export default Message;