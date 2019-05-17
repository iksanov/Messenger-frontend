import React, {Component} from 'react';

class PostMessageForm extends Component {

	constuctor(props) {
		this.state = {
			value: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);	
	}

	handleChange(event){
		this.setState('')
	}


	handleSubmit(event){

	}


	render() {
		return (
			<form>
				<input type='text'/>
				<input type='submit'/>
			</form>
		);
	}
}

export default PostMessageForm;
