// import React, {Component} from 'react';

// class MessegesList extends Component {

// 	constructor(props) {
// 		super(props)l
	
// 		this.state = {
// 			messeges: []
// 		};
// 	};

// 	componentDidMount() {
// 		setInterval(function() {
// 			getPublicMesseges(this.props.token, 0, 100).then(messenges => {
// 			this.setState({
// 				messeges: messenges			
// 			})
// 		});
// 		}, 1000);
			
		
// 	}

// 	render() {
// 		return (
// 			<div>
// 				{
// 					this.state.messeges.map(msg => 
// 						<div>
// 							<div> {msg.user} </div>
// 							<div> {msg.content} </div>
// 							<div> {msg.timestamp} </div>
// 						</div>
// 					)
// 				}

// 			</div>
// 		);
// 	}
// }
