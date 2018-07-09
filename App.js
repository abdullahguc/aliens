import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Constants} from 'expo';
import aliens from './aliens';
import AliensView from './views/AliensView';
import IndexScreen from './screens/index'; 
import LoginScreen from './screens/Login'; 
import RegisterScreen from './screens/Register';
import AliensScreen from './screens/Aliens';  
import {createSwitchNavigator, 
		createStackNavigator} from 'react-navigation'

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



const IndexNavigator = createStackNavigator({
	Index: {screen: IndexScreen,
			navigationOptions:{
            	header: null
        	}},
	Login: {screen: LoginScreen,
			navigationOptions:{
            	header: null
        	}}, 
	Register: {screen: RegisterScreen,
			   navigationOptions:{
            	header: null
        	}},
	Aliens:  {screen: AliensScreen,
			  navigationOptions:{
            	header: null,
				passProps: {aliens: aliens}
        	}},
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
