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

export default class AboutMe extends React.Component {

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

    next(){
      this.doStuff();  
      this.props.navigation.navigate('AboutUs');
    }

   async doStuff () {
      try {
        await AsyncStorage.setItem('firstTime', "true");
        var val = await AsyncStorage.getItem('firstTime');
      } catch (error) {

      }
    }

    async componentWillMount() {
      try {
        var val= await AsyncStorage.getItem('firstTime');
        if(val == "true"){
          this.props.navigation.navigate('Home');
        } else {
          await AsyncStorage.setItem('language', "en");
        }
      } catch (error) {
        console.log(error);

      }
    }

    
    render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <ScrollView style={{padding: 20}}>
        <PowerTranslator style={{fontSize: 27}} text={'Tell us about you'} />
        <PowerTranslator text={'Name'} />
        <TextInput placeholder='Name' style={styles.input} />
        <PowerTranslator text={'Profession'} />
        <TextInput placeholder='Profession' style={styles.input}/>
        <View style={{margin:7}} />
        <Button 
          onPress={()=> this.next()}
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