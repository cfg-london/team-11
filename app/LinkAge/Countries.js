import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, ScrollView, AsyncStorage} from 'react-native';


export default class Countries extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: "english",
    }

  }

  async setLanguage (language) {
    try {
      await AsyncStorage.setItem('language', language);
      this.setState({
        language: language,
      });

    } catch (error) {
      // Error saving data
    }
  }

  async componentWillMount() {
    try {
      var val= await AsyncStorage.getItem('firstTime');
      if(val != "true"){
        await AsyncStorage.setItem('language', "english");
      } else {
        var language = await AsyncStorage.getItem('language');
        this.setState({
            language: language,
        });

      }
    } catch (error) {
      console.log(error);
    }
  }


 backgroundColour= (language) => {
  console.log(language);
  console.log(this.state.language);
    if(this.state.language == language){
      return({
        backgroundColor: '#000000',
        flex:1,
        borderColor: '#92979B',
        borderWidth: 0.5
      });

    } else {
      return({
        backgroundColor: '#FFFFFF',
        flex:1,
        borderColor: '#92979B',
        borderWidth: 0.5
      });
    }
  }

  async clearStorage () {
    console.log("Clearing");
    await AsyncStorage.clear();
  }
  /* Renders the page */
  render() {
  {/* Shows data is loading */}
    return (
      <View>
        <View style={styles.footerButtonsRow}>
          <TouchableHighlight style={this.backgroundColour("english")} onPress={() => this.setLanguage("english")}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>🇬🇧</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={this.backgroundColour("bangledeshi")} onPress={() => this.setLanguage("bangledeshi")}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>🇧🇩</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={this.backgroundColour("spanish")} onPress={() => this.setLanguage("spanish")}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>🇪🇸</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={this.backgroundColour("french")} onPress={() => this.setLanguage("french")}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>🇫🇷</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={this.backgroundColour("poo")} onPress={() => this.clearStorage()}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>💩</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );


  }
}


const styles = StyleSheet.create({
  footerButtonsRow: {
    flexDirection: 'row',
    height:50,
  }, 

    footerButton: {
    flex:1,
    borderColor: '#92979B',
    borderWidth: 0.5,
  },

  footerButtonView: {
    height:'100%',
    width:'100%',     
    alignItems:'center',
    justifyContent:'center',
  },

  footerButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 35,
  },


});

module.exports = Countries;
