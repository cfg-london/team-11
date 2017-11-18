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

import Countries from './Countries';
import CategoryItem from './CategoryItem.js'; 
import SubCategory from './SubCategory.js';
import { PowerTranslator, ProviderTypes, Translation } from 'react-native-power-translator';

import {
  StackNavigator,
} from 'react-navigation';


export default class Category extends React.Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
      headerTitle: "What type help do they need?",
      headerStyle: {
        backgroundColor: '#FF8E00'
      },
      headerTintColor: '#FFFFFF',
      headerLeft: null
      /*headerRight: <Button title="Settings" onPress={() => navigation.navigate('SettingsScreen')} />,*/
  });

  constructor(props) {
    super(props);
    this.state = {
      first: 1,
      sub: 0,
      language: "en",
    }
    Translation.setConfig(ProviderTypes.Google, 'AIzaSyA0DMZ38W76bNFkkU-l5Op_hPJBnZFQJ74',this.state.language);

    }

    setLanguage(language) {
      Translation.setConfig(ProviderTypes.Google, 'AIzaSyA0DMZ38W76bNFkkU-l5Op_hPJBnZFQJ74',language);
      this.setState({
        language: language,
      });
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

      <FlatList style={{padding: 0}}
          data={[{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}]}
          renderItem={({item}) => (<CategoryItem id={item.id} func={this.switchState.bind(this)} />) }
          keyExtractor={(item) => item.id}
          numColumns={3}
      />
      <Countries onClick={this.setLanguage.bind(this)}/>

      </View>   
    )
  }else{
 return(
  <View style={styles.container}>
    <ScrollView >
          <SubCategory id={this.state.sub} movePage={() => navigate('Notes')}/>
      </ScrollView>    
    <Countries onClick={this.setLanguage.bind(this)}/>
    </View>
  

      )
  }
   }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  inner:{
    margin:10,
  },
  input:{
    fontSize: 20,
    height: 50,
  }
});