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
import PowerButton from './PowerButton';
import Countries from './Countries';


import { PowerTranslator, ProviderTypes, Translation } from 'react-native-power-translator';

export default class Notes extends React.Component {
    
  static navigationOptions = ({ navigation, screenProps }) => ({
      headerTitle: "Any other Notes",
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

    async setUrgency(){
      try {
        await AsyncStorage.setItem('notes', "" + this.state.notes);
        this.props.navigation.navigate('Consent');
      } catch (error) {
        // Error saving data
      }

    }



    render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <ScrollView style={{padding: 20}}>
        <TextInput multiline={true} style={styles.input} placeholder='' onChangeText={(notes) => this.setState({notes})} style={styles.input} />
        <PowerButton 
          onPress={()=> this.setUrgency()}
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
    height: 300,
    borderColor: '#000'
  }
});