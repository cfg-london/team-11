import React from 'react';
import {     
  ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    AsyncStorage,
    Picker,
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
      name: "",
      profession: "",
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
      if(this.state.name!=""){
      this.doStuff();
      this.sendData();  
      this.props.navigation.navigate('AboutUs');
    }else{
      alert("please give us a name!")
    }
    }

   async doStuff () {
      try {
        await AsyncStorage.setItem('firstTime', "true");
        var val = await AsyncStorage.getItem('firstTime');
      } catch (error) {

      }
    }

    sendData() {
      var request = new XMLHttpRequest();
      request.onreadystatechange = async(e) => {
        if (request.readyState !== 4) {

          return;
        }
        // Checks if the data has been found
        if (request.status === 200) {
          (JSON.parse(request.responseText));
          try {
            await AsyncStorage.setItem('refereeID', JSON.parse(request.responseText).referee_id);
          } catch (error) {

          }

        } else {
          console.warn('Data not found');
        }
      };
      request.open('POST', 'http://138.68.150.49/api/referee?name=' + this.state.name + '&profession=' + this.state.profession);
      request.send();

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

    update(){
      console.log(this.state.profession);
    }
    
    render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <ScrollView style={{padding: 20}}>
        <PowerTranslator style={{fontSize: 27}} text={'Tell us about you'} />
        <PowerTranslator text={'Name'} />
        <TextInput placeholder='Name' onChangeText={(name) => this.setState({name})} style={styles.input} />
        <PowerTranslator text={'Profession'} />
        <Picker selectedValue = {this.state.profession} onValueChange = {this.update.bind(this)}>
          <Picker.Item label = "Police" value = "Police" />
          <Picker.Item label = "Fire and Rescue" value = "Fire and Rescue" />
          <Picker.Item label = "Ambulance" value = "Ambulance" />
          <Picker.Item label = "GP" value = "GP" />
          <Picker.Item label = "Pharmacist" value = "Pharmacist" />
          <Picker.Item label = "Social Worker" value = "Social Worker" />
          <Picker.Item label = "Charity" value = "Charity" />
          <Picker.Item label = "Carer" value = "Carer" />
          <Picker.Item label = "Friend, family or neighbour" value = "Friend, family or neighbour" />
          <Picker.Item label = "Other" value = "Other" />
        </Picker>        



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