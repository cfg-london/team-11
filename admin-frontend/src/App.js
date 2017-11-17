import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import NavBar from './NavBar';
import Login from './Login';
import View from './View';
import Register from './Register';


export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			loggedIn: false,
			register: false,
			username: '',
			password: '',
			bnt: [
				{name: 'Register', func: this.changeRegister}
			],
		};
	}

	changeRegister = () => {
		this.setState({register: !this.state.register, loggedIn: !this.state.loggedIn});
	}

	changeLogin = () => {
		this.setState({loggedIn: !this.state.loggedIn});
	}

	changeUsername = (e) => {
		this.setState({username: e.target.value});
	}

	changePassword = (e) => {
		this.setState({password: e.target.value});
	}
	

	getSubBody = () => {
		if (!this.state.loggedIn) {
			return (
				<Login 
      					changeLogin={this.changeLogin}
      					changeUser={this.changeUsername}
      					changePass={this.changePassword}
      				/>
			);
		} else if (this.state.register) {
			return <Register />;
		} else if (this.state.loggedIn) {
			return <View />;
		}
	}

	getMainBody = () => {
		return (

			<div className={css(styles.centralFlex)}>

      			<NavBar 
      				title={"Toynbee Hall"}
      				loggedIn={this.state.loggedIn}
      				logout={this.changeLogin}
      				elements={this.state.bnt}
      			/>

      			{this.getSubBody()}
      			

      		</div>
		);
	}

  	render() {
    	return <div>{this.getMainBody()}</div>;
  	}
}

const styles = StyleSheet.create({
	centralFlex: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContext: "center",
	},
	loginBox: {
		marginTop: 100,

	},
	textArea: {
		resize: 'none',
	},


});
