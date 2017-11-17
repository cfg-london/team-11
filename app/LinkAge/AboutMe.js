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

export default class AboutMe extends React.Component {


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
        console.log("val");
        console.log(val);
        if(val == "true"){
          this.props.navigation.navigate('Home');
        } else {
          await AsyncStorage.setItem('Language', "english");
        }
      } catch (error) {
        console.log(error);

      }
    }

    render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{padding: 20}}>
        <Text style={{fontSize: 27}}>
          Tell us About you
        </Text>
        <TextInput placeholder='Name' style={styles.input} />
        <TextInput placeholder='Profession' style={styles.input}/>
        <View style={{margin:7}} />
        <Button 
          onPress={()=> this.next()}
          title="Sumbit"
        />
      </ScrollView>      
    )
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    fontSize: 20,
    height: 50,
  }
});