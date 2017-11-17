import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import NavBar from './NavBar';



export default class App extends React.Component {


  	render() {


    	return (
      		<div>

      			<NavBar />

      			<div>
      				<div>Username</div>
      				<textarea className={css(styles.textArea)} />
      				<div>Password</div>
      				<textarea className={css(styles.textArea)} />
      			</div>






      		</div>
    	);
  	}
}

const styles = StyleSheet.create({
	textArea: {
		resize: 'none',
	},


});
