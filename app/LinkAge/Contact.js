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


import { PowerTranslator, ProviderTypes, Translation } from 'react-native-power-translator';

  const navigationOptions = {
    header: 'null',
  }

export default class Contact extends React.Component {

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

    async setDetails() {
      try {
        await AsyncStorage.setItem('address', "" + (this.state.address));
        await AsyncStorage.setItem('phone', "" + (this.state.phone));
        this.props.navigation.navigate('Category');
      } catch (error) {
        // Error saving data
      }

    }


    render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={{padding: 20}}>
        <PowerTranslator style={{fontSize: 27}} text={'Details :'} />
        <PowerTranslator text={'Address'} />
          <TextInput placeholder='Address' onChangeText={(address) => this.setState({address})} style={styles.input} />
                  <PowerTranslator text={'Phone'} />
          <TextInput placeholder='Phone' onChangeText={(phone) => this.setState({phone})} style={styles.input} />
          <View style={{margin:7}} />
          <Button 
            onPress={() =>
            this.setDetails()}
            title="Sumbit"
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