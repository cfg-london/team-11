import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default class SubCategory extends React.Component {

  constructor(props) {
    super(props);
  }

 getTitle(){
    var id=this.props.id;
    var one=['Falls', 'Medication or Prescription issues', 'Getting to your GP or Hospital', 'treatment', 'flu jabs' ,'Community nursing','Physio', 'osteopathy and chiropody','Falls','Alarms', 'Housing adaptations'];
    var two=['yeee'];
    var three=['lit'];
    var four=['asdf'];
    var five=['asdff'];
    var six=['mmememe'];
    var seven=['i want to die'];
    var eight=['asdfasdfjkladfjl'];
    var nine=['memes', 'poop'];
    if(id==1)
      return one;
    if(id==2)
      return two;
    if(id==3)
      return three;
    if(id==4)
      return four;
    if(id==5)
      return five;
    if(id==6)
      return six;
    if(id==7)
      return seven;
    if(id==8)
      return eight;
    if(id==9)
      return nine;
  }


  getGroup(){
    var titles=this.getTitle();
    var x=[];
    for(i=0; i<titles.length; i++){
    x.push( <TouchableHighlight style={styles.container}>
      <View style={styles.container}>
      <Text style={styles.textItem}>{titles[i]}</Text>
      </View>
    </TouchableHighlight>);
  }
    return x;
  }

render(){
  return(
    <View>
      {this.getGroup()}
    </View>
    );
}


}

const styles = StyleSheet.create({
   container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex:1
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


module.exports = SubCategory;