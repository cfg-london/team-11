import React from 'react';
import {     
  ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    AsyncStorage,
    Linking
  } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Countries from './Countries';


import { PowerTranslator, ProviderTypes, Translation } from 'react-native-power-translator';

export default class AboutUs extends React.Component {

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
      <PowerTranslator style={{fontSize: 27, margin:10}} text={'About Us'} />
      <PowerTranslator text={'We work on the frontline in the struggle against poverty. Based in the East End of London we give some of the UK’s most deprived communities a voice, providing access to free advice and support and working together to tackle social injustice.'} />
        <Button
          style={styles.button}
          onPress={() => this.openLink("http://www.toynbeehall.org.uk/")}
          title="Our Website"
        />
        <Button 
          style={styles.button}
          onPress={() => navigate('Home')}
          title="Next"
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
  text:{
    fontSize: 18,
    margin: 10,
  },
  button:{
    margin:10,
    padding: 10,
  }
});