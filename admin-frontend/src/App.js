import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import NavBar from './NavBar';



export default class App extends React.Component {


  	render() {


    	return (
      		<div className={css(styles.centralFlex)}>

      			<NavBar />

      			<div className={css(styles.loginBox, styles.centralFlex)}>
      				<div>Username</div>
      				<textarea className={css(styles.textArea)} />
      				<div>Password</div>
      				<textarea className={css(styles.textArea)} />
      				<button>Login</button>
      			</div>






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
