import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, ScrollView, AsyncStorage} from 'react-native';


export default class Countries extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: "en",
    }

  }

  async setLanguage (language) {
    try {
      await AsyncStorage.setItem('language', language);
      this.setState({
        language: language,
      });
      this.props.onClick(language);
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
            //language: language,
        });

      }
    } catch (error) {
      console.log(error);
    }
  }


 backgroundColour= (language) => {
    if(this.state.language == language){
      return({
        backgroundColor: '#FF8E00',
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
      <View style={styles.footerButtonsRow}>
      <ScrollView horizontal>
          <TouchableHighlight style={this.backgroundColour("en")} onPress={() => this.setLanguage("en")}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>🇬🇧</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={this.backgroundColour("bn")} onPress={() => this.setLanguage("bn")}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>🇧🇩</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={this.backgroundColour("es")} onPress={() => this.setLanguage("es")}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>🇪🇸</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={this.backgroundColour("fr")} onPress={() => this.setLanguage("fr")}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>🇫🇷</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={this.backgroundColour("hi")} onPress={() => this.setLanguage("hi")}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>🇮🇳</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={this.backgroundColour("so")} onPress={() => this.setLanguage("so")}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>🇸🇴</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={this.backgroundColour("pl")} onPress={() => this.setLanguage("pl")}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>🇵🇱</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={this.backgroundColour("zh-TW")} onPress={() => this.setLanguage("zh-TW")}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>🇨🇳</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={this.backgroundColour("de")} onPress={() => this.setLanguage("de")}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>🇩🇪</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={this.backgroundColour("poo")} onPress={() => this.clearStorage()}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>💩</Text>
            </View>
          </TouchableHighlight>
        </ScrollView>
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
    fontSize: 55,
  },


});

module.exports = Countries;
