import React, { Component } from 'react';
import './App.css'
import Messenger from './components/messenger';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: localStorage.getItem('token'),
        };

        console.log("App -> constructor(): state.token = " + this.state.token);
        this.tokenReceiveHandler = this.tokenReceiveHandler.bind(this);
    }

    tokenReceiveHandler(token) {
        this.setState({
            token: token,
        });
        localStorage.setItem('token', token);
        console.log("App -> tokenReceiveHandler(token) with token = " + token);
    }

    render() {
        let isSignedIn = (this.state.token !== null);
        console.log("App -> render() -> this.state.token " + this.state.token);

        return isSignedIn ?
                <Messenger token={this.state.token}/> :
                <SignUp onTokenReceive={this.tokenReceiveHandler} />;
    }
}

export default App;
