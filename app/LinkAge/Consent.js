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

export default class Consent extends React.Component {

    render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{padding: 20}}>
        <Text style={{fontSize: 27}}>
          One last thing!
        </Text>
        <Text>Consent me plz</Text>
        <Button 
          onPress={()=> navigate('Home')}
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