import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Constants} from 'expo';
import aliens from './aliens';
import AliensView from './views/AliensView';
import IndexScreen from './screens/index'; 
import LoginScreen from './screens/Login'; 
import RegisterScreen from './screens/Register';
import AliensScreen from './screens/Aliens';
import AlienScreen from './screens/alien';    
import AddForm from './screens/AddAlien.js';    
import {createSwitchNavigator, 
		createStackNavigator} from 'react-navigation';
import localStorage from 'react-native-sync-localstorage';
import {store} from './redux/store'
import {Provider} from 'react-redux'

export default class App extends React.Component {


  render() {
    return (
		<Provider store={store}>
          <MainNavigator
        	screenProps={{
        	  aliens: aliens,
        	}}
     	 />
		</Provider>
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
	
}, 
{
	initialRouteName: "Index",
});

const AlienNavigator = createStackNavigator({
	Aliens: {screen: AliensScreen,
			navigationOptions:{
            	header: null
        	}},
	Alien: {screen: AlienScreen,
			navigationOptions:{
            	header: null
        	}},
	Add: {screen: AddForm,
			navigationOptions:{
            	header: null
        	}},
}, 
{
	initialRouteName: "Aliens",
});


var initialScreen = localStorage.getItem('user_id') ? "Aliens" : "Index";
const MainNavigator = createSwitchNavigator({
	Index: IndexNavigator,
	Aliens: AlienNavigator,
}, 
{
	initialRouteName: initialScreen,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
