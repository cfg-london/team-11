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

export default class AboutMe extends React.Component {


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
          onPress={() =>
          navigate('AboutUs')}
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