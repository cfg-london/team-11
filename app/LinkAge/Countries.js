import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, ScrollView, AsyncStorage} from 'react-native';


export default class Countries extends React.Component {

  constructor(props) {
    super(props);
  }

  async setLanguage (language) {
    try {
      await AsyncStorage.setItem('language', language);
    } catch (error) {
      // Error saving data
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
          <TouchableHighlight style={styles.footerButton} onPress={() => this.setLanguage("english")}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>🇬🇧</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.footerButton} onPress={() => this.setLanguage("bangledeshi")}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>🇧🇩</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.footerButton} onPress={() => this.setLanguage("spanish")}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>🇪🇸</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.footerButton} onPress={() => this.setLanguage("french")}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>🇫🇷</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.footerButton} onPress={() => this.clearStorage()}>
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
    backgroundColor: '#2E75B6',
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
