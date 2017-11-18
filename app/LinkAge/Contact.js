import React from 'react';
import {     
  ScrollView,
    Text,
    TextInput,
    View,
    StyleSheet,
    AsyncStorage
  } from 'react-native';

import {StackNavigator,} from 'react-navigation';
import { Button } from 'react-native-elements';
import Countries from './Countries';


import { PowerTranslator, ProviderTypes, Translation } from 'react-native-power-translator';

  const navigationOptions = {
     header:{ visible:false },
  }

export default class Contact extends React.Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
      headerTitle: "Contact Details",
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
      address: "",
      phone: "",
    }
    Translation.setConfig(ProviderTypes.Google, 'AIzaSyA0DMZ38W76bNFkkU-l5Op_hPJBnZFQJ74',this.state.language);

    }

    setLanguage(language) {
      Translation.setConfig(ProviderTypes.Google, 'AIzaSyA0DMZ38W76bNFkkU-l5Op_hPJBnZFQJ74',language);
      this.setState({
        language: language,
      });
    }

    async setDetails() {
      if(this.state.address!="" && (this.state.phone)!=""){
      try {
        await AsyncStorage.setItem('address', "" + (this.state.address));
        await AsyncStorage.setItem('phone', "" + (this.state.phone));
        this.props.navigation.navigate('Category');
      } catch (error) {
        // Error saving data
      }
      }else{
        alert('Please fill in all fields!')
      }
    }


    render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={{padding: 20}}>
       <PowerTranslator style={{fontSize: 22, fontWeight:'bold'}} text={'Address'} />
          <TextInput placeholder='Address' onChangeText={(address) => this.setState({address})} style={styles.input} />
          <PowerTranslator style={{fontSize: 22, fontWeight:'bold'}} text={'Phone'} />
          <TextInput placeholder='Phone'  keyboardType={'phone-pad'} onChangeText={(phone) => this.setState({phone})} style={styles.input} />
          <View style={{margin:7}} />
          <Button 
            onPress={() =>
            this.setDetails()}
            title="Sumbit"
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