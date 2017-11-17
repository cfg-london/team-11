import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, } from 'react-navigation';
import Home from './Home';
import Settings from './Settings';
import About from './About';
import TableView from './TableView';



{/*https://reactnavigation.org/docs/intro/*/}
const Apps = StackNavigator({
  HomeScreen: { screen: Home },
  SettingsScreen: { screen: Settings },
  AboutScreen: { screen: About },
  TableViewScreen: { screen: TableView },
});

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
  }
});