import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, ScrollView} from 'react-native';


export default class Countries extends React.Component {

  constructor(props) {
    super(props);
  }

  /* Renders the page */
  render() {
  {/* Shows data is loading */}
    return (
      <View>
        <View style={styles.footerButtonsRow}>
          <TouchableHighlight style={styles.footerButton} onPress={() => navigate('AboutScreen')}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>ABOUT</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.footerButton} onPress={() => navigate('AboutScreen')}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>FEEDBACK</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.footerButton} onPress={() => navigate('AboutScreen')}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>FEEDBACK</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.footerButton} onPress={() => navigate('AboutScreen')}>
            <View style={styles.footerButtonView}>
              <Text style={styles.footerButtonText}>FEEDBACK</Text>
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
  },


});

module.exports = Countries;
