import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import NavBar from './NavBar';
import Login from './Login';
import View from './View';


export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			loggedIn: false,
			username: '',
			password: '',
		};
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


  	render() {

    	return (
      		<div className={css(styles.centralFlex)}>

      			<NavBar title={"Toynbee Hall"} loggedIn={this.state.loggedIn} logout={this.changeLogin}/>

      			{
      				!this.state.loggedIn && 
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
