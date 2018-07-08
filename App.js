import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Constants} from 'expo';
import aliens from './aliens';
import AliensView from './views/AliensView';
import IndexScreen from './screens/index'; 
import IndexScreen from './screens/Login'; 
import {createSwitchNavigator} from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
          <IndexNavigator
        	screenProps={{
        	  aliens: aliens,
        	}}
     	 />
    );
  }
}



const IndexNavigator = createSwitchNavigator({
	Index: IndexScreen,
	Login:   
}, 
{
	initialRouteName: "Index",
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
