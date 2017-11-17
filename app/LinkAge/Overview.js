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

export default class Overview extends React.Component {
      
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
      <ScrollView style={{padding: 20}}>
        <Text style={{fontSize: 27}}>
          Overview
        </Text>
        <Text>{this.getUrgency()}</Text>
        <Text>Name: {this.getName()}</Text>
        <Text>Address: {this.getAddress()}</Text>
        <Text>Phone: {this.getPhone()}</Text>
        <Text>Category: {this.getCategory()}</Text>
        <Text>Notes: {this.getNotes()}</Text>
        <Button 
          onPress={()=> navigate('Consent')}
          title="Sumbit"
        />
        <Button 
          onPress={()=> navigate('Category')}
          title="Add another"
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