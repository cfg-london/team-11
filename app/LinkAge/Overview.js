import React from 'react';
import {     
  ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet
  } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Countries from './Countries';


import { PowerTranslator, ProviderTypes, Translation } from 'react-native-power-translator';

export default class Overview extends React.Component {
     
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
 
    getUrgency(){
      return "Urgent af";
    }

    getName(){
      return "Sean Jackson";
    }

    getAddress(){
      return "150 dab mansion"
    }

    getPhone(){
      return "420"
    }

    getCategory(){
      return "meme police"
    }

    getNotes(){
      return "notessssssssssssssssssss"
    }
    render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <ScrollView style={{padding: 20}}>
        <PowerTranslator style={{fontSize: 27}} text={'Overview'} />
        <PowerTranslator text={this.getUrgency()} />
        <PowerTranslator text={'Name:' + this.getName()} />
        <PowerTranslator text={this.getAddress()} />
        <PowerTranslator text={this.getPhone()} />
        <PowerTranslator text={this.getCategory()} />
        <PowerTranslator text={this.getNotes()} />
        <Button 
          onPress={()=> navigate('Consent')}
          title="Sumbit"
        />
        <Button 
          onPress={()=> navigate('Category')}
          title="Add another"
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