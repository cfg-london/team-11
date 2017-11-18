import React from 'react';
import {     
  ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    FlatList
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
      <View style={styles.container}>
        <Text style={{fontSize: 27}}>
          Pick a category
        </Text>

      <FlatList style={{padding: 0}}
          data={[{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}]}
          renderItem={({item}) => (<CategoryItem id={item.id} func={this.switchState.bind(this)} />) }
          keyExtractor={(item) => item.id}
          numColumns={3}
      />
      </View>   
    )
  }else{
    return(
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
        <Text>
          Pick a category
        </Text>
        </View>
          <SubCategory id={this.state.sub} movePage={() => navigate('Notes')}/>
      </ScrollView>      

      )
  }
   }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input:{
    fontSize: 20,
    height: 50,
  }
});