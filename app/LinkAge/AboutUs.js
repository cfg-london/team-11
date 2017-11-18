import React from 'react';
import {     
  ScrollView,
    Text,
    TextInput,
    View,
    StyleSheet,
    AsyncStorage,
    Linking,
    Image
  } from 'react-native';

import {StackNavigator,} from 'react-navigation';
import PowerButton from './PowerButton';
import Countries from './Countries';
import { PowerTranslator, ProviderTypes, Translation } from 'react-native-power-translator';

export default class AboutUs extends React.Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle: "About Toynbee Hall",
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
      <ScrollView style={{margin: '5%'}}>
        <Image
          style={styles.image}
          source={require('./logo.jpg')}
        />
      <PowerTranslator text={'We work on the frontline in the struggle against poverty. Based in the East End of London we give some of the UK’s most deprived communities a voice, providing access to free advice and support and working together to tackle social injustice.'} />
      <Text/>
      <PowerTranslator text={'The idea of this app is for people who are in contact with the vunerable elderely and provide a medium for them to quickly and effortly tell linkage about the issue so we can have a solution faster.'} /> 
      <Text/>
      <PowerTranslator text={'We hope you enjoy the app and use it to help the community'} /> 
      <View style={{padding: 20, flexDirection: 'column', alignItems: 'center'}}>
        <PowerButton 
          style={styles.button}
          backgroundColor='#FF8E00'
          borderRadius={20}
          width={300}
          onPress={() => navigate('Home')}
          title="Next"
        />
        <Text/>
        <PowerButton
          style={styles.button}
          backgroundColor='#FF8E00'
          borderRadius={20}
          margin={100}
          onPress={() => this.openLink("http://www.toynbeehall.org.uk/")}
          title="Our Website"
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
  },
  image:{
    margin:0,
    width: '100%',
    resizeMode: 'contain',
  }
});