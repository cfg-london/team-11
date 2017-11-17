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
		this.setState({register: !this.state.register});
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

	getMainBody = () => {
		
	}

  	render() {
    	return (
      		<div className={css(styles.centralFlex)}>

      			<NavBar 
      				title={"Toynbee Hall"}
      				loggedIn={this.state.loggedIn}
      				logout={this.changeLogin}
      				elements={this.state.bnt}
      			/>

      			{
      				!this.state.register && !this.state.loggedIn && 
      				<Login 
      					changeLogin={this.changeLogin}
      					changeUser={this.changeUsername}
      					changePass={this.changePassword}
      				/>
      			}

      			{
      				this.state.loggedIn && 
      				<View

      				/>
      			}

      			{
      				this.state.register && 
      				<Register />
      			}

      		</div>
    	);
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
