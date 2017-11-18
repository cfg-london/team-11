import React from 'react';
import {     
  ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    AsyncStorage
  } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Countries from './Countries';

import call from 'react-native-phone-call'


import { PowerTranslator, ProviderTypes, Translation } from 'react-native-power-translator';

    const args = {
      number: '+447759249808', // String value with the number to call
      prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
    }

export default class Home extends React.Component {


    constructor(props) {
      super(props);
    this.state = {
      language: "en",
    }
    Translation.setConfig(ProviderTypes.Google, 'AIzaSyA0DMZ38W76bNFkkU-l5Op_hPJBnZFQJ74',this.state.language);

    }

    setLanguage(language) {
      Translation.setConfig(ProviderTypes.Google, 'AIzaSyA0DMZ38W76bNFkkU-l5Op_hPJBnZFQJ74',language);
      this.setState({
        language: language,
      });
    }

    async setUrgency(urgency){
    try {
      console.log(urgency);
      await AsyncStorage.setItem('urgency', "" + (urgency));
      this.props.navigation.navigate('Name');
    } catch (error) {
      // Error saving data
    }

    }


    render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={{padding: 20}}>
        <PowerTranslator  style={{fontSize: 27}} text={'Welcome to Linkage+ App!'} />
          <View style={{margin:7}} />
          <Button 
            onPress={() =>
            call(args).catch(console.error)}
            title="Call"
          />
          <Button 
            onPress={() =>
            this.setUrgency(1)}
            title="Urgent"
          />
          <Button 
            onPress={() =>
            this.setUrgency(0)}
            title="NonUrgent"
          />

        </ScrollView>  
        <Countries onClick={this.setLanguage.bind(this)}/>
      </View>
    )
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input:{
    fontSize: 20,
    height: 50,
  }
});