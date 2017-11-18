import React from 'react';
import {     
  ScrollView,
    Text,
    TextInput,
    View,
    StyleSheet,
    AsyncStorage
  } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Countries from './Countries';
import PowerButton from './PowerButton';

import { PowerTranslator, ProviderTypes, Translation } from 'react-native-power-translator';


export default class Name extends React.Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
      headerTitle: "Referee's name",
      headerStyle: {
        backgroundColor: '#FF8E00'
      },
      headerTintColor: '#FFFFFF',
      headerLeft: null
    });

    
  constructor(props) {
    super(props);
    this.state = {
      language: "en",
      name: "",
    }
    Translation.setConfig(ProviderTypes.Google, 'AIzaSyA0DMZ38W76bNFkkU-l5Op_hPJBnZFQJ74',this.state.language);
  }

  setLanguage(language) {
    Translation.setConfig(ProviderTypes.Google, 'AIzaSyA0DMZ38W76bNFkkU-l5Op_hPJBnZFQJ74',language);
    this.setState({
      language: language,
    });
  }

  async setName() {
    if(this.state.name!=""){
    try {
      await AsyncStorage.setItem('name', "" + (this.state.name));
      this.props.navigation.navigate('Contact');
    } catch (error) {
        // Error saving data
    }
    }else{
        alert('please enter a name!');
     }    
    }

    render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <ScrollView style={{padding: 20}}>
        <TextInput placeholder='Name' onChangeText={(name) => this.setState({name})} style={styles.input} />
        <View style={{margin:7}} />
        <PowerButton 
          onPress={() =>
          this.setName()}
          title="Next"
          backgroundColor='#FF8E00'
          borderRadius={20}
          large
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