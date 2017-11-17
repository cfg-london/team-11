import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import NavBar from './NavBar';
import Login from './Login';


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


  	render() {

  		console.log(this.state.loggedIn);


    	return (
      		<div className={css(styles.centralFlex)}>

      			<NavBar />

      			{!this.state.loggedIn && <Login changeLogin={this.changeLogin}/>}

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
