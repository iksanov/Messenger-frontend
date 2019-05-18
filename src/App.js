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
            hasAccount: false
        };

        console.log("App -> constructor(): state.token = " + this.state.token);
        this.tokenReceiveHandler = this.tokenReceiveHandler.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    tokenReceiveHandler(token) {
        this.setState({
            token: token,
        });
        localStorage.setItem('token', token);
        console.log("App -> tokenReceiveHandler(token) with token = " + token);
    }

    logOut() {
        localStorage.removeItem('token');
        this.setState({
            token: null,
        });
        console.log("App -> logOut()");
    }

    render() {
        console.log("App -> render() -> this.state.token " + this.state.token);

        return (
            <div>
                <div className="LogOutButton">
                    <button onClick={this.logOut}> {"LogOut"} </button>
                </div>
                <div>
                    {
                        this.state.token !== null ?
                            <Messenger token={this.state.token} /> :
                            <div>
                                {
                                    this.state.hasAccount ?
                                        <div>
                                            <SignIn onTokenReceive={this.tokenReceiveHandler} /> 
                                            <button onClick={() => {this.setState({hasAccount: false})}}> {"SignUp"} </button>
                                        </div> :
                                        <div>
                                            <SignUp onTokenReceive={this.tokenReceiveHandler} />
                                            <button onClick={() => {this.setState({hasAccount: true})}}> {"SignIn"} </button>
                                        </div>
                                }
                            </div>
                    }
                </div>
            </div>
        )
    }
}

export default App;
