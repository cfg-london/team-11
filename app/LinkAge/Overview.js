import React from 'react';
import {     
  ScrollView,
    Text,
    TextInput,
    View,
    StyleSheet,
    AsyncStorage
  } from 'react-native';
import PowerButton from './PowerButton';
import {
  StackNavigator,
} from 'react-navigation';

import Countries from './Countries';


import { PowerTranslator, ProviderTypes, Translation } from 'react-native-power-translator';

export default class Overview extends React.Component {
     
    static navigationOptions = ({ navigation, screenProps }) => ({
      headerTitle: "Overview",
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
      urgency: "-1",
    }
    Translation.setConfig(ProviderTypes.Google, 'AIzaSyA0DMZ38W76bNFkkU-l5Op_hPJBnZFQJ74',this.state.language);
    this.getUrgency();
    this.getRefereeID();
    this.getName();
    this.getAddress();
    this.getPhone();
    this.getCategory();
    this.getNotes();
    }

    setLanguage(language) {
      Translation.setConfig(ProviderTypes.Google, 'AIzaSyA0DMZ38W76bNFkkU-l5Op_hPJBnZFQJ74',language);
      this.setState({
        language: language,
      });
    }
 
    async getUrgency(){
      try {
        var urgency = await AsyncStorage.getItem('urgency');
        this.setState({
          urgency: urgency,
        });
      } catch (error) {
        // Error saving data
      }
    }

    async getRefereeID(){
      try {
        var refereeID = await AsyncStorage.getItem('refereeID');
        this.setState({
          refereeID: refereeID,
        });
      } catch (error) {
        // Error saving data
      }
    }

    async getName(){
      try {
        var name = await AsyncStorage.getItem('name');
        this.setState({
          name: name,
        });
      } catch (error) {
        // Error saving data
      }
    }

    async getAddress(){
      try {
        var address = await AsyncStorage.getItem('address');
        this.setState({
          address: address,
        });
      } catch (error) {
        // Error saving data
      }
    }

    async getPhone(){
      try {
        var phone = await AsyncStorage.getItem('phone');
        this.setState({
          phone: phone,
        });
      } catch (error) {
        // Error saving data
      }
    }

    async getCategory(){
      try {
        var category = await AsyncStorage.getItem('category');
        this.setState({
          category: category,
        });
      } catch (error) {
        // Error saving data
      }
    }

    async getNotes(){
      try {
        var notes = await AsyncStorage.getItem('notes');
        this.setState({
          notes: notes,
        });
      } catch (error) {
        // Error saving data
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

        } else {
          console.warn('Data not found');
          console.warn(request.status);
        }
      };
      console.log(this.state.name);
      console.log(this.state.phone);
      console.log(this.state.address);
      console.log(this.state.urgency);
      //console.log(this.state.type);
      console.log(encodeURI('http://138.68.150.49/api/reference?name=' + encodeURIComponent(this.state.name) + '&phone=' + encodeURIComponent(this.state.phone) + '&address=' + encodeURIComponent(this.state.address) + '&urgency=' + encodeURIComponent(Boolean(this.state.urgency))+ '&type=' + encodeURIComponent(this.state.category)  + '&referee_id=' + encodeURIComponent(this.state.refereeID) + '&notes=' + encodeURIComponent(this.state.notes)));
      request.open('POST', encodeURI('http://138.68.150.49/api/reference?name=' + encodeURIComponent(this.state.name) + '&phone=' + encodeURIComponent(this.state.phone) + '&address=' + encodeURIComponent(this.state.address) + '&urgency=' + encodeURIComponent((this.state.urgency)) + '&type=' + encodeURIComponent(this.state.category)  + '&referee_id=' + encodeURIComponent(this.state.refereeID) + '&notes=' + encodeURIComponent(this.state.notes)));
      request.setRequestHeader('content-type', 'application/x-www-form-urlencoded');        
      request.send();

  }

  async submit() {
    this.sendData();
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

  async addAnother() {
    this.sendData();
    try {
      await AsyncStorage.removeItem('name');
      await AsyncStorage.removeItem('urgency');
      await AsyncStorage.removeItem('phone');
      await AsyncStorage.removeItem('address');
    } catch (error) {
      // Error saving data
    }

    this.props.navigation.navigate('Category');
  }

  getUrgency(){
    if(this.state.urgency==1){
      return "URGENT"
    } else{
      return "Non-Urgent"
    }
  }

    render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <ScrollView style={{padding: 20}}>
        <Text style={{fontSize: 22, fontWeight:'bold', color: 'red'}} >{this.getUrgency()} </Text>
        <PowerTranslator style={{fontSize: 22, fontWeight:'bold'}} text={'Name:'} />
        <Text style={styles.text}>{this.state.name}</Text>
        <PowerTranslator style={{fontSize: 22, fontWeight:'bold'}} text={'Address:'} />
        <Text style={styles.text}>{this.state.address}</Text>
        <PowerTranslator style={{fontSize: 22, fontWeight:'bold'}} text={'Phone no:'} />
        <Text style={styles.text}>{this.state.phone}</Text>
        <PowerTranslator style={{fontSize: 22, fontWeight:'bold'}} text={'Category:'} />
        <Text style={styles.text}>{this.state.category}</Text>
        <PowerTranslator style={{fontSize: 22, fontWeight:'bold'}} text={'Notes:'} />
        <Text style={styles.text}>{this.state.notes}</Text>
        <Text style={{fontSize:15, backgroundColor: '#FFF'}}>  </Text>
        <PowerButton 
          onPress={()=> this.submit()}
          title="Sumbit"
          backgroundColor='#FF8E00'
          borderRadius={20}
          large
        />
        <Text style={{fontSize:15, backgroundColor: '#FFF'}}>  </Text>
        <PowerButton 
          onPress={()=> this.addAnother()}
          title="Add another"
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
  },
  text:{
    fontSize: 18,
  }
});