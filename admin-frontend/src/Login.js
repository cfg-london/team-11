import React from "react";
import {StyleSheet, css} from "aphrodite";

export default class Login extends React.Component {

	constructor() {
		super();
		this.state = {
			login: true,
			username: '',
			password: '',
			cpassword: '',
		};
	}

	loginTrue = () => {
		this.setState({login: true});
	}

	loginFalse = () => {
		this.setState({login: false});
	}

	registerAccount = () => {

		console.log(this.state.username);
		console.log(this.state.password);

		var xhr = new XMLHttpRequest();
        var data = "user_name=" + encodeURIComponent(this.state.username) + "&password=" + encodeURIComponent(this.state.password) + "&c_password=" + encodeURIComponent(this.state.cpassword);
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

	getBody = () => {
		if (this.state.login) {
			return (
				<div className={css(styles.centralFlex)}>
	  				<input placeholder="Username" className={css(styles.textArea)} onChange={(e) => this.props.changeUser(e)}/>
	  				<input type="password" placeholder="Password" className={css(styles.textArea)} onChange={(e) => this.props.changePass(e)}/>
	  				<button onClick={() => this.props.changeLogin()}>Login</button>
	  			</div>
			);
		} else {
			return (
				<div className={css(styles.centralFlex)}>

					<input placeholder="Username" onChange={e => this.setState({username: e.target.value})} className={css(styles.textarea)} />
					<input type="password" placeholder="Password" onChange={e => this.setState({password: e.target.value})} className={css(styles.textarea)} />
					<input type="password" placeholder="Reenter password" onChange={e => this.setState({cpassword: e.target.value})} className={css(styles.textarea)} />
					<button onClick={() => this.registerAccount()}>Register a new account</button>



				</div>
			);
		}
	}

	render() {

		return (

			<div className={css(styles.loginBox, styles.centralFlex)}>

				<div className={css(styles.horizontal)}>
					<div onClick={() => this.loginTrue()} className={css(styles.choice)}>Login</div>
					<div onClick={() => this.loginFalse()} className={css(styles.choice)}>Register</div>
				</div>


  				{this.getBody()}
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
		border: '3px solid black',
		width: 300,
		height: 230,
	},
	textArea: {
		resize: 'none',
	},
	horizontal: {
		display: 'flex',
		justifyContext: 'center',
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 10,
	},
	choice: {
		marginRight: 10,
		marginLeft: 10,
		":active": {
			fontSize: 20,
		}
	},
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