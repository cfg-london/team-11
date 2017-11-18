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

export default class Notes extends React.Component {
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

    async setUrgency(){
      try {
        await AsyncStorage.setItem('notes', "" + this.state.notes);
        this.props.navigation.navigate('Overview');
      } catch (error) {
        // Error saving data
      }

    }



    render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <ScrollView style={{padding: 20}}>
        <PowerTranslator style={{fontSize: 27}} text={'Notes'} />
        <TextInput placeholder='' onChangeText={(notes) => this.setState({notes})} style={styles.input} />
        <Button 
          onPress={()=> this.setUrgency()}
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