import React from 'react';
import { StyleSheet, Image, View, Text, TouchableHighlight, Dimensions } from 'react-native';
import { PowerTranslator, ProviderTypes, Translation } from 'react-native-power-translator';

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
      return 'Later\n Life';
    if(id==5)
      return 'Home Issues';
    if(id==6)
      return 'Out and\nAbout';
    if(id==7)
      return 'Loneliness';
    if(id==8)
      return 'Crisis';
    if(id==9)
      return 'Practical\n Support';
    return 'sub category'
  }


  getImage(){
    var id=this.props.id;
    if(id==1)
      return (          
        <Image
          style={styles.image}
          source={require('./1.png')}
        />);
    if(id==2){
      return (          
        <Image
          style={styles.image}
          source={require('./2.png')}
        />);
    }
    if(id==3)
            return (          
        <Image
          style={styles.image}
          source={require('./3.png')}
        />);
    if(id==4)
            return (          
        <Image
          style={styles.image}
          source={require('./4.png')}
        />);
    if(id==5)
            return (          
        <Image
          style={styles.image}
          source={require('./5.png')}
        />);
    if(id==6)
            return (          
        <Image
          style={styles.image}
          source={require('./6.png')}
        />);
    if(id==7)
            return (          
        <Image
          style={styles.image}
          source={require('./7.png')}
        />);
    if(id==8)
            return (          
        <Image
          style={styles.image}
          source={require('./8.png')}
        />);
    if(id==9)
            return (          
        <Image
          style={styles.image}
          source={require('./9.png')}
        />);
  }

render(){
  var id=(this.props.id);
  return(
      <TouchableHighlight style={styles.container} onPress={()=>this.props.func(id)}>
        <View style={styles.container} >
          {this.getImage()}
          <PowerTranslator style={{flex:3, padding:20, fontSize: 14, color: '#000', alignItems: 'center',textAlign: 'center'}} text={this.getTitle()} />
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
    height: height/3.6,
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
    fontSize: 14,
    color: '#000',  
    alignItems: 'center',
    textAlign: 'center',

  },
  image:{
    height: width/5,
    width: width/5,
    margin: 10,
  }
});


module.exports = CategoryItem;