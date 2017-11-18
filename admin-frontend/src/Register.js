import React from 'react';
import {StyleSheet, css} from 'aphrodite';


export default class Register extends React.Component {

	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			cpassword: '',
		}
	}

	registerAccount = () => {

		var data = null;
		var xhr = new XMLHttpRequest();
		xhr.withCredentials = true;

		xhr.addEventListener("readystatechange", function () {
		  if (this.readyState === 4 || this.readyState === 200) {
		    console.log(this.responseText);
		  } else if (this.readyState === 401) {
		  	console.log(this.responseText);
		  }
		});

		xhr.open("POST", "http://138.68.150.49/api/register?user_name=" + this.state.username + "&password=" + this.state.password + "&c_password=" + this.state.cpassword);
		xhr.send(data);









		// var http = new XMLHttpRequest();
		// var url = "http://138.68.150.49/api/register";
		// var params = "user_name=" + this.state.username + " &password=" + this.state.password + "&c_password=" + this.state.cpassword;
		// http.open("POST", url, true);

		// http.onreadystatechange = function() {//Call a function when the state changes.
		// 	if(http.readyState == 4 && http.status == 200) {
		// 		alert(http.responseText);
		// 	} else if (http.readyState === 401) {
		// 		alert(http.responseText);
		// 	}
		// }
		// http.send(params);
	}

	render() {

		return (

			<div className={css(styles.registerBox)}>

				<div>Username</div>
				<textarea className={css(styles.textarea)}></textarea>
				<div>Password</div>
				<textarea className={css(styles.textarea)}></textarea>
				<div>Confirm Password</div>
				<textarea className={css(styles.textarea)}></textarea>
				<button onClick={() => this.registerAccount()}>Register a new account</button>



			</div>


		);
	}
}


const styles = StyleSheet.create({
	textarea: {
		resize: 'none',
	},
	registerBox: {
		marginTop: 100,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	}

});