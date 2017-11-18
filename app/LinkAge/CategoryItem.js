import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Dimensions } from 'react-native';

const {width, height}= Dimensions.get("window");

export default class CategoryItem extends React.Component {

  constructor(props) {
    super(props);
  }

 getTitle(){
    var id=this.props.id;
    if(id==1)
      return 'Health';
    if(id==2)
      return 'Legal';
    if(id==3)
      return 'Money';
    if(id==4)
      return 'Later Life';
    if(id==5)
      return 'Home Issues';
    if(id==6)
      return 'Out and About';
    if(id==7)
      return 'Lonliness';
    if(id==8)
      return 'Crisis';
    if(id==9)
      return 'Practical Support';
    return 'sub category'
  }


  getImage(){

  }

render(){
  var id=(this.props.id);
  return(
      <TouchableHighlight style={styles.container} onPress={()=>this.props.func(id)}>
        <View style={styles.container} >
          <Text style={styles.textItem}>{this.getTitle()}</Text>
        </View>
      </TouchableHighlight>

    )
}


}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#F0EDED',
    alignItems: 'center',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    width: width / 3,
  },

  image: {
    padding:20,
    flex:1 ,
    justifyContent: 'center',
    alignItems: 'center',

  },

  textItem: {
    flex:3, 
    padding:20,
    fontSize: 20,
    color: '#000',  

  }

});


module.exports = CategoryItem;