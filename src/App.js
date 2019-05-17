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
    
		this.tokenReceiveHandler = this.tokenReceiveHandler.bind(this);
	}

	tokenReceiveHandler(token) {
		this.setState({
			token: token,
		});
		localStorage.setItem('token', token);
	}

	render() {
    let isSignedIn = (this.state.token !== null);
    console.log("App -> render() -> this.state.token " + this.state.token);

		// return isSignedIn ?
    //   // <Messenger token={ this.state.token }/> :
    //   <h1>i am signed in</h1> :
    //   <SignUp onTokenReceive={this.tokenReceiveHandler} />;
    return <SignUp onTokenReceive={this.tokenReceiveHandler} />;
	}
}

export default App;
