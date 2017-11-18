import React from 'react';
import {     
  ScrollView,
    Text,
    TextInput,
    View,
    StyleSheet
  } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Countries from './Countries';
import PowerButton from './PowerButton';

import { PowerTranslator, ProviderTypes, Translation } from 'react-native-power-translator';

export default class Consent extends React.Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
      headerTitle: "Final Consent",
      headerStyle: {
        backgroundColor: '#FF8E00'
      },
      headerTintColor: '#FFFFFF',
      headerLeft: null
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

  async goHome() {
    try {
      await AsyncStorage.removeItem('name');
      await AsyncStorage.removeItem('urgency');
      await AsyncStorage.removeItem('phone');
      await AsyncStorage.removeItem('address');
      await AsyncStorage.removeItem('type');
      await AsyncStorage.removeItem('notes');
    } catch (error) {
      // Error saving data
    }

    this.props.navigation.navigate('Home');
  }


    render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <ScrollView style={{padding: 20}}>
        <PowerTranslator style={{fontSize: 27}} text={'One last thing!'} />
        <PowerTranslator text={"By accepting this consent form, the person the form is about is accepting that their data is being stored with complience with the Data Protection Act of 1998. If the person the form is about is unable to consent, then a guardian can consent on their behalf"}/>
        <View style={{margin: 30}}>
        <PowerButton 
          onPress={()=> navigate('Overview')}
          title="I agree"
          backgroundColor='#FF8E00'
          borderRadius={20}
          large
          margin={100}
        />
        <Text style={{fontSize:15, backgroundColor: '#FFF'}}>  </Text>
        <PowerButton 
          onPress={()=> this.goHome()}
          title="I DO NOT agree"
          backgroundColor='#FF8E00'
          borderRadius={20}
          large
          margin={100}
        />
        </View>
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