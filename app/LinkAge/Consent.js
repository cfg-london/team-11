import React from 'react';
import {     
  ScrollView,
    Text,
    TextInput,
    View,
    StyleSheet
  } from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Countries from './Countries';
import { Button } from 'react-native-elements';

import { PowerTranslator, ProviderTypes, Translation } from 'react-native-power-translator';

export default class Consent extends React.Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
      headerTitle: "Final Consent",
      headerStyle: {
        backgroundColor: '#FF8E00'
      },
      headerTintColor: '#FFFFFF',
      /*headerRight: <Button title="Settings" onPress={() => navigation.navigate('SettingsScreen')} />,*/
  });

    constructor(props) {
      super(props);
    this.state = {
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


    render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <ScrollView style={{padding: 20}}>
        <PowerTranslator style={{fontSize: 27}} text={'One last thing!'} />
        <Text>
"Data Protection Policy Template

Policy statement
(your name here) is committed to a policy of protecting the rights and privacy of individuals, voluntary and community group members, volunteers staff and others in accordance with The Data Protection Act 1998. The policy applies to all voluntary and community group members and staff at the community Centre. Any breach of The Data Protection Act 1998 or The Community Centre Data Protection Policy is considered to be an offence and in that event, disciplinary procedures apply.

As a matter of good practice, other organisations and individuals working with the Centre, and who have access to personal information, will be expected to have read and comply with this policy. It is expected that any staff who deal with external organisations will take responsibility for ensuring that such organisations sign a contract agreeing to abide by this policy.

Legal Requirements
Data are protected by the Data Protection Act 1998, which came into effect on 1 March 2000. Its purpose is to protect the rights and privacy of individuals and to ensure that personal data are not processed without their knowledge, and, wherever possible, is processed without their consent.

The Act requires us to register the fact that we hold personal data and to acknowledge the right of ‘subject access’ – voluntary and community group members and staff must have the right to copies of their own data.

Managing Data Protection
We  will ensure that our details are registered with the Information Commissioner. 

Purpose of data held by the Community Association
Data may be held by us for the following purposes:
1.   Staff Administration
2.   Fundraising
3.   Realising the Objectives of a Charitable Organisation or Voluntary Body
4.   Accounts & Records
5.   Advertising, Marketing & Public Relations
6.   Information and Databank Administration
7.   Journalism and Media
8.   Processing For Not For Profit Organisations
9.   Research
10. Volunteers

Data Protection Principles
In terms of the Data Protection Act 1998, we are the ‘data controller’, and as such determine the purpose for which, and the manner in which, any personal data are, or are to be, processed. We must ensure that we have:

1.  Fairly and lawfully processed personal data
 will always put our logo on all paperwork, stating their intentions on processing the data and state if, and to whom, we intend to give the personal data. Also provide an indication of the duration the data will be kept.

2.  Processed for limited purpose
We will not use data for a purpose other than those agreed by data subjects (voluntary and community group members, staff and others). If the data held by us are requested by external organisations for any reason, this will only be passed if data subjects (voluntary and community group members, staff and others) agree. Also external organisations must state the purpose of processing, agree not to copy the data for further use and sign a contract agreeing to abide by The Data Protection Act 1998 and (your name here) Data Protection Policy.

3.  Adequate, relevant and not excessive
The Association  will monitor the data held for our purposes, ensuring we hold neither too much nor too little data in respect of the individuals about whom the data are held. If data given or obtained are excessive for such purpose, they will be immediately deleted or destroyed.

4.  Accurate and up-to-date
We will provide our members (voluntary and community group members, staff and others) with a copy of their data once a year for information and updating where relevant. All amendments will be made immediately and data no longer required will be deleted or destroyed. It is the responsibility of individuals and organisations to ensure the data held by us are accurate and up-to-date. Completion of an appropriate form( provided by us) will be taken as an indication that the data contained are accurate. Individuals should notify us of any changes, to enable personnel records to be updated accordingly. It is the responsibility of the Association to act upon notification of changes to data, amending them where relevant.

5.  Not kept longer than necessary
We discourage the retention of data for longer than it is required. All personal data will be deleted or destroyed by us after one year of non membership has elapsed.

6.  Processed in accordance with the individual’s rights         
All individuals that the Association hold data on have the right to:
• Be informed upon the request of all the information held about them within 40 days.
• Prevent the processing of their data for the purpose of direct marketing.
• Compensation if they can show that they have been caused damage by any contravention of the Act.
• The removal and correction of any inaccurate data about them.

7.  Secure
Appropriate technical and organisational measures shall be taken against unauthorised or unlawful processing of personal data and against accidental loss or destruction of data. 

All Association computers have a log in system and our Contact Database is password protected, which allow only authorised staff to access personal data. Passwords on all computers are changed frequently. All personal and financial data is kept in a locked filing cabinet and can only be accessed by the Executive officers. When  staff members are using the laptop computers out of the office care should always be taken to ensure that personal data on screen is not visible to strangers.

8.  Not transferred to countries outside the European Economic Area, unless the country has adequate protection for the individual.
Data must not be transferred to countries outside the European Economic Area without the explicit consent of the individual.  The Association takes particular care to be aware of this when publishing information on the Internet, which can be accessed from anywhere in the globe. This is because transfer includes placing data on a web site that can be accessed from outside the European Economic Area."
        </Text>
        <View style={{margin: 30}}>
        <Button 
          onPress={()=> navigate('Overview')}
          title="I agree"
          backgroundColor='#FF8E00'
          borderRadius={20}
          large
          margin={100}
        />
        </View>
      </ScrollView>   
      <Countries onClick={this.setLanguage.bind(this)}/>
      </View>
   
    )
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input:{
    fontSize: 20,
    height: 50,
  }
});