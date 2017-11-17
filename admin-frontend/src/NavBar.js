import React from 'react';
import {StyleSheet, css} from 'aphrodite';


export default class NavBar extends React.Component {



	render() {
		return (
			<div className={css(styles.navbar)}>
				<div className={css(styles.text, styles.left)}>{this.props.title}</div>


				{this.props.elements.map(e => <div onClick={e.func} className={css(styles.right, styles.text)}>{e.name}</div>)}



				{this.props.loggedIn && <div className={css(styles.right, styles.text, styles.click)} onClick={this.props.logout}>Log out</div>}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	navbar: {
		width: "100vw",
		height: 50,
		backgroundColor: "#F58220",
		display: 'flex',
		alignContents: 'center',
		justifyItems: 'center',
	},
	right: {
		marginLeft: 'auto',
		marginRight: 10,
	},
	left: {
		marginLeft: 10,
		marginRight: 'auto',
	},
	text: {
		marginTop: 'auto',
		marginBottom: 'auto',
	},
	click: {
		cursor: 'pointer',
	}


});