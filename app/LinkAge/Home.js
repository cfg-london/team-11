import React from 'react';
import {     
  ScrollView,
    Text,
    TextInput,
    View,
      StyleSheet,
    AsyncStorage,
    Image,
  } from 'react-native';
import { Button } from 'react-native-elements';
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


  static navigationOptions = ({ navigation, screenProps }) => ({
      headerTitle: "Welcome to Linkage+",
      headerStyle: {
        backgroundColor: '#FF8E00'
      },
      headerTintColor: '#FFFFFF',
      /*headerRight: <Button title="Settings" onPress={() => navigation.navigate('SettingsScreen')} />,*/
  });

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
        <Image
          style={styles.image}
          source={require('./logo.jpg')}
        />
          <View style={{margin:7}} />

          <Button 
            onPress={() =>
            this.setUrgency(1)}
            title={'Urgent\nReferal'}
            backgroundColor='#FF8E00'
            borderRadius={20}
            fontSize={26}
            padding={40}
            large
          />
          <Text style={{fontSize:15, backgroundColor: '#FFF'}}>  </Text>
          <Button 
            onPress={() =>
            this.setUrgency(0)}
            title={'Non-Urgent\nReferal'}
            backgroundColor='#FF8E00'
          borderRadius={20}
          fontSize={26}
          textStyle={styles.button}
                    padding={40}
          large
          />
          <Text style={{fontSize:15, backgroundColor: '#FFF'}}>  </Text>
          <Button 
            onPress={() =>
            call(args).catch(console.error)}
            title="Call Us"
            backgroundColor='#FF8E00'
            fontSize={20}
          borderRadius={20}
          padding={40}
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
  },
    image:{
    margin:0,
    width: '100%',
    resizeMode: 'contain',
 
  },
  button:{
    textAlign: 'center',
  }
});