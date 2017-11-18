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

  onComponentDidMount(){
  }

  switchState(i){
    console.log('flipped');
    this.setState({
      first : 0,
    });
    console.log(this.state.first);
  }

  getSub(i){
    var x={};
    x.push(<SubCategory id={11}/>,<SubCategory id={12}/>,<SubCategory id={13}/>,<SubCategory id={14}/> )
    return x;
  }

    render() {
    const { navigate } = this.props.navigation;
    console.log(this.state.first);
    if(this.state.first){
    return (
      <ScrollView style={{padding: 20}}>
        <Text style={{fontSize: 27}}>
          Pick a category
        </Text>
          <CategoryItem id={1} func={this.switchState.bind(this)}/>
          <CategoryItem id={2} func={this.switchState.bind(this)}/>
          <CategoryItem id={3} func={this.switchState.bind(this)} />
          <CategoryItem id={4} func={this.switchState.bind(this)}/>
          <CategoryItem id={5} func={this.switchState.bind(this)}/>
          <CategoryItem id={6} func={this.switchState.bind(this)}/>
          <CategoryItem id={7} func={this.switchState.bind(this)}/>
          <CategoryItem id={8} func={this.switchState.bind(this)}/>
          <CategoryItem id={9} func={this.switchState.bind(this)}/>
        <Button 
          onPress={()=> navigate('Notes')}
          title="Sumbit"
        />
      </ScrollView>      
    )
  }else{
    return(
    <ScrollView style={{padding: 20}}>
        <Text style={{fontSize: 27}}>
          Pick a category
        </Text>
          <SubCategory id={1}/>
        <Button 
          onPress={()=> navigate('Notes')}
          title="Sumbit"
        />
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