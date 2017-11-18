import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, } from 'react-navigation';
import AboutMe from './AboutMe';
import AboutUs from './AboutUs';
import Category from './Category';
import Consent from './Consent';
import Contact from './Contact';
 import Home from './Home';
import Name from './Name';
import Notes from './Notes';
import Overview from './Overview';


{/*https://reactnavigation.org/docs/intro/*/}
const Apps = StackNavigator({
  AboutMe: { screen: AboutMe,},
  AboutUs: { screen: AboutUs },
  Category: { screen: Category },
  Consent: { screen: Consent },
  Contact: { screen: Contact },
  Home: { screen: Home },
  Name: { screen: Name },
  Notes: { screen: Notes },
  Overview: { screen: Overview },
}
);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Apps/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:22,
  }
});