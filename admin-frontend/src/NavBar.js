import React from 'react';
import {StyleSheet, css} from 'aphrodite';


export default class NavBar extends React.Component {



	render() {
		return <div className={css(styles.navbar)}></div>;
	}
}

const styles = StyleSheet.create({
	navbar: {
		width: "100vw",
		height: 50,
		backgroundColor: "#f79d51",
	},


});