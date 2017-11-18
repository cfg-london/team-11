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
		};
	}

	changeLogin = () => {
		this.setState({loggedIn: !this.state.loggedIn});
	}

	getSubBody = () => {
		if (!this.state.loggedIn) {
			return (
				<Login changeLogin={this.changeLogin}/>
			);
		} else {
			return <View />;
		}
	}

	getMainBody = () => {
		return (

			<div className={css(styles.centralFlex)}>

      			<NavBar 
      				loggedIn={this.state.loggedIn}
      				logout={this.changeLogin}
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
