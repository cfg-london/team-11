import React from 'react';
import {     
  ScrollView,
    Text,
    TextInput,
    View,
    StyleSheet,
    AsyncStorage,
    Linking
  } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';
import { Button } from 'react-native-elements';
import Countries from './Countries';


import { PowerTranslator, ProviderTypes, Translation } from 'react-native-power-translator';

export default class AboutUs extends React.Component {


  static navigationOptions = ({ navigation, screenProps }) => ({
      headerTitle: "About Toynbee Hall",
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


    openLink(url){
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + url);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
  }

    render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <ScrollView style={{padding: 20}}>
      <PowerTranslator text={'We work on the frontline in the struggle against poverty. Based in the East End of London we give some of the UK’s most deprived communities a voice, providing access to free advice and support and working together to tackle social injustice.'} />
        <View style={{padding: 20, flexDirection: 'row', allign: 'center'}}>
        <Button
          style={styles.button}
          backgroundColor='#FF8E00'
          borderRadius={20}
          large
          onPress={() => this.openLink("http://www.toynbeehall.org.uk/")}
          title="Our Website"
        />
        <Button 
          style={styles.button}
          backgroundColor='#FF8E00'
          borderRadius={20}
          large
          width={300}
          onPress={() => navigate('Home')}
          title="Next"
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
  },
  text:{
    fontSize: 18,
    margin: 10,
  },
  button:{
    margin:10,
    padding: 10,
    width: 300,
  }
});