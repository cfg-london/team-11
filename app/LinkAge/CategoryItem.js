import React from 'react';
import { StyleSheet, Image, View, Text, TouchableHighlight, Dimensions } from 'react-native';

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
          <Image
          style={styles.image}
          source={require('./logo.jpg')}
        />
          <Text style={styles.textItem}>{this.getTitle()}</Text>
        </View>
      </TouchableHighlight>

    )
}


}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#FFB352',
    alignItems: 'center',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    height: height/4,
    width: width / 3,
    borderRadius:10,
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
    alignItems: 'center'

  },
  image:{
    height: width/5,
    width: width/5,
    margin: 10,
  }
});


module.exports = CategoryItem;