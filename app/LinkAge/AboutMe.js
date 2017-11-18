import React from 'react';
import {     
  ScrollView,
    Text,
    TextInput,
    View,
        StyleSheet,
    AsyncStorage,
    Picker,
  } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';
import { Button } from 'react-native-elements';
import Countries from './Countries';



import { PowerTranslator, ProviderTypes, Translation } from 'react-native-power-translator';

const navigationOptions = {header: null }

export default class AboutMe extends React.Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
      headerTitle: "Tell us about yourself",
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
      name: "",
      profession: "Police",
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
          console.log(JSON.parse(request.responseText));
          try {
            await AsyncStorage.setItem('refereeID', "" + JSON.parse(request.responseText).referee_id);
          } catch (error) {
            console.warn(error);
          }

        } else {
          console.warn('Data not found');
        }
      };
      request.open('POST', encodeURI('http://138.68.150.49/api/referee?name=' + encodeURIComponent(this.state.name) + '&profession=' + encodeURIComponent(this.state.profession) + '&phone=' + encodeURIComponent(this.state.phone)));
      request.setRequestHeader('content-type', 'application/x-www-form-urlencoded');        
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
    
    render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <ScrollView scrollEnabled style={{padding: 20}}>
        <PowerTranslator style={{fontSize: 22, fontWeight:'bold'}} text={'Name'} />
        <TextInput placeholder='Name' onChangeText={(name) => this.setState({name})} style={styles.input} />
        <PowerTranslator style={{fontSize: 22, fontWeight:'bold'}} text={'Profession'} />
        <Picker selectedValue = {this.state.profession} onValueChange={(profession) => this.setState({profession})}>
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
        <PowerTranslator style={{fontSize: 22, fontWeight:'bold'}} text={'Phone'} />
        <TextInput placeholder='Phone'  keyboardType={'phone-pad'} onChangeText={(phone) => this.setState({phone})} style={styles.input} />
        <View style={{margin:7}} />
        <Button 
          onPress={()=> this.next()}
          title="Submit"
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
    height: 50,
  }
});