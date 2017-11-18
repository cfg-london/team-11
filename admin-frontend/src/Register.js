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

		var xhr = new XMLHttpRequest();
        var data = "user_name=" + this.state.username + "&password=" + this.state.password + "&c_password=" + this.state.cpassword;
        xhr.addEventListener("readystatechange", function() {
            if (this.readyState === 4 || this.readyState === 200) {
                console.log(this.responseText);
            } else if (this.readyState === 401) {
            	console.log(this.responseText);
            }
        });
        xhr.open("POST", "http://138.68.150.49/api/register");
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.send(data);








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