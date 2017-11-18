import React from 'react';
import {StyleSheet, css} from 'aphrodite';

export default class View extends React.Component {

	constructor() {
		super();
		this.state = {
			allStatements: {},
		};
	}


	componentWillMount() {

		var request = new XMLHttpRequest();
		request.onreadystatechange = (e) => {
		  if (request.readyState !== 4) {
		    return;
		  }

		  if (request.status === 200) {
		    console.log('success', request.responseText);
		  } else {
		    console.warn('error');
		  }
		};

		request.open('GET', 'http://138.68.150.49/api/reference');
		request.setRequestHeader('Content-Type', 'application/json')
		request.send();


	}


	render() {


		return (
			<div>



			</div>

		);
	}
}

const styles = StyleSheet.create({





});