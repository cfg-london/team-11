import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, AsyncStorage } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

export default class SubCategory extends React.Component {

  constructor(props) {
    super(props);
  }

 getTitle(){
    var id=this.props.id;
    var one=['Falls', 'Medication or Prescription issues', 'Getting to your GP or Hospital', 'treatment', 'flu jabs' ,'Community nursing','Physio', 'osteopathy and chiropody','Falls','Alarms', 'Housing adaptations'];
    var two=["Housing"
,"Employment"
,"Welfare Benefits"
,"Consumer  (phones, shops, internet providers, TV licence, Gas, Electric, Water etc )"
,"Immigration"
,"Scams and Rogue Traders"]
    var three=["Debt (General)"
,"Credit Card arrears or bank charges"
,"Council Tax Arrears"
,"Attendance Allowance or Personal Independence Payments"
,"Personal Budgets or Direct Payments (Council or NHS)"
,"Universal Credit"
,"Housing Benefit"
,"Pensions"
,"Winter Fuel Payment"]
    var four=["Making a will"
,"Planning and paying for funerals"
,"Equity release"
,"Paying for care"];
    var five=["Cleaning"
,"Preparing meals"
,"Medication"
,"Bathing and Washing"
,"Shopping"
,"Repairs"
,"Nuisance neighbours"
,"Homelessness"
,"Adaptations – Ramps, lifts, rails, lights, shower/bath"];
    var six=["Taxi card scheme"
,"Blue Badge"
,"Dial a Ride"
,"Mobility scooters or aids"
,"Travel Training"]
    var seven=['Lonliness'];
    var eight=['Crisis'];
    var nine=["Understanding letters or forms"
,"Filling in forms"
,"Making appointments"
,"Helping you communicate with professionals (social worker, housing officer etc )"
,"Accompanying you to important"]
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

  async setCategory(title){
      try {
        console.log(title);
        await AsyncStorage.setItem('category', "" + (title));
        console.log("hello");
        this.props.movePage();
      } catch (error) {
        // Error saving data
      }

  }

  getGroup(){
    var titles=this.getTitle();
    var x=[];
    for(i=0; i<titles.length; i++){
      var title = titles[i];
    x.push( <TouchableHighlight style={styles.container} onPress={() => this.setCategory(title)} key={i}>
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