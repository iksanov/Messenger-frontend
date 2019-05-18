import React, { Component } from 'react';
import { signup } from './api'

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            name: ''
        }
        console.log("SignUp -> constructor(): state.login = " + this.state.login);

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleLoginChange(event) {
        this.setState({ login: event.target.value });
        console.log("SignUp -> handleLoginChange(): this.state.login = " + this.state.login);
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
        console.log("SignUp -> handlePasswordChange(): this.state.password = " + this.state.password);
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
        console.log("SignUp -> handleNameChange(): this.state.name = " + this.state.name);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("SignUp -> handleSubmit()");

        signup(this.state.login, this.state.password, this.state.name)
            .then(token => {
                console.log("SignUp -> handleSubmit() -> signup() with token = " + token);
                return this.props.onTokenReceive(token)
            });
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit} className="login-form">
                <h1>Sign up, please</h1>
                <label>
                    Login:
                    <input
                        type='text'
                        onChange={this.handleLoginChange}
                        placeholder="..."
                        required
                        autoFocus
                      />
                </label>
                <label>
                    Password: 
                    <input
                        type='password'
                        onChange={this.handlePasswordChange}
                        placeholder="..."
                        required
                    />
                </label>
                <label>
                    Name: 
                    <input
                        type='text'
                        onChange={this.handleNameChange}
                        placeholder="..."
                        required
                    />
                </label>
                <label>
                    <input type="submit" value='Sign up!'/>
                </label>
            </form>
        );

    }
}

export default SignUp;
