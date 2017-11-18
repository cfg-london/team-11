import React from 'react';
import {     
  ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet
  } from 'react-native';

import CategoryItem from './CategoryItem.js'; 
import SubCategory from './SubCategory.js'
import {
  StackNavigator,
} from 'react-navigation';


export default class Category extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      first: 1,
      sub: 0,
    }
  }
  switchState(i){
    this.setState({
      first : 0,
      sub: parseInt(i),
    });
  }

    render() {
    const { navigate } = this.props.navigation;
    if(this.state.first){
    return (
      <ScrollView style={{padding: 20}}>
        <Text style={{fontSize: 27}}>
          Pick a category
        </Text>
          <CategoryItem id={1} func={this.switchState.bind(this)} />
          <CategoryItem id={2} func={this.switchState.bind(this)} />
          <CategoryItem id={3} func={this.switchState.bind(this)} />
          <CategoryItem id={4} func={this.switchState.bind(this)} />
          <CategoryItem id={5} func={this.switchState.bind(this)} />
          <CategoryItem id={6} func={this.switchState.bind(this)} />
          <CategoryItem id={7} func={this.switchState.bind(this)} />
          <CategoryItem id={8} func={this.switchState.bind(this)} />
          <CategoryItem id={9} func={this.switchState.bind(this)} />
      </ScrollView>      
    )
  }else{
    return(
    <ScrollView style={{padding: 20}}>
        <Text style={{fontSize: 27}}>
          Pick a category
        </Text>
          <SubCategory id={this.state.sub} movePage={() => navigate('Notes')}/>
      </ScrollView>      

      )
  }
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