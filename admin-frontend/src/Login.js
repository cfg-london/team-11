import React from "react";
import {StyleSheet, css} from "aphrodite";
import logo from './image.png';

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

	checkAccount = () => {
		var xhr = new XMLHttpRequest();
		var data = "user_name" + encodeURIComponent(this.state.username) + "&password=" + encodeURIComponent(this.state.password);

		xhr.addEventListener("readystatechange", () => {
			if (this.readyState === 4 || this.readyState === 200) {
				console.log(this.responseText);
				this.props.changeLogin();
			} else {
				console.log(this.responseText);
			}
		});
		xhr.open("POST", "http://138.68.150.49/api/login");
		xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		xhr.send(data);
	}

	registerAccount = () => {

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
					<div className={css(styles.middle, styles.centralFlex)}>
		  				<input placeholder="Username" className={css(styles.textArea)} onChange={e => this.setState({username: e.target.value})}/>
		  				<input type="password" placeholder="Password" className={css(styles.textArea)} onChange={e => this.setState({password: e.target.value})}/>
		  			</div>
	  				
	  				<button className={css(styles.signinButton)} onClick={() => this.checkAccount()}>Sign in</button>
	  			</div>
			);
		} else {
			return (
				<div className={css(styles.centralFlex)}>

					<div className={css(styles.middle, styles.centralFlex)}>
						<input placeholder="Username" onChange={e => this.setState({username: e.target.value})} className={css(styles.textArea)} />
						<input type="password" placeholder="Password" onChange={e => this.setState({password: e.target.value})} className={css(styles.textArea)} />
						<input type="password" placeholder="Reenter password" onChange={e => this.setState({cpassword: e.target.value})} className={css(styles.textArea)} />
					</div>

					<button className={css(styles.registerButton)} onClick={() => this.registerAccount()}>Register Now</button>

				</div>
			);
		}
	}

	render() {

		return (

			<div>
				<img src={logo} className={css(styles.logo)} />
				<div className={css(styles.loginBox, styles.centralFlex)}>


					<div className={css(styles.horizontal)}>
						<div onClick={() => this.loginTrue()} className={css(styles.choice)}>Login</div>
						<div onClick={() => this.loginFalse()} className={css(styles.choice)}>Register</div>
					</div>


	  				{this.getBody()}
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
		width: 300,
		height: 230,
		border: '1px solid #d1d3d6',
		borderRadius: 3
	},
	textArea: {
		resize: 'none',
		height: 37,
		width: 290,
		border: '0.5px solid #d1d3d6',
		borderRadius: 5,
		textAlign: 'center',
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
		cursor: 'pointer',
	},
	registerBox: {
		marginTop: 100,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	signinButton: {
		backgroundColor: 'green',
		color: 'white',
		border: 'none',
		borderRadius: 5,
		marginTop: 10,
		width: 100,
		height: 35,
	},
	registerButton: {
		backgroundColor: 'blue',
		color: 'white',
		border: 'none',
		borderRadius: 5,
		marginTop: 10,
		width: 100,
		height: 35,
	},
	middle: {
		height: 145,
	},
	logo: {
		height: 95,
		marginBottom: 5,
	}
});