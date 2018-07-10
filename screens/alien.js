import React from 'react';
import { ScrollView, ActivityIndicator, View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import Row from './../components/AlienRow.js';
import AliensComponent from './../components/Aliens.js';
import localStorage from 'react-native-sync-localstorage';


export default class index extends React.Component{

	state = {
		aliens: [],
		isLoaded: false
	};
	constructor(props)
	{
		super(props);
		console.log( localStorage.getItem('auth_token'));
		fetch('http://192.168.1.108:3000/api/v1/user/alliens', {
		  method: 'GET',
		  headers:
		  { 
    			Authorization: localStorage.getItem('auth_token'),
				Accept: 'application/json',
			    'Content-Type': 'application/json',
  		  },
		}).then((response) => response.json()).then((res) => {
				var aliens_with_keys = res.map(addKeys);
				this.setState({aliens: aliens_with_keys});
				this.setState({isLoaded: true});
		}).catch((err) => {console.log(err)});
	}

	render(){
		return (
				<Text style={{fontSize: 21, color: 'blue', justifyContent: 'center',
    			 alignItems: 'center',
   					}}>Nothing to be viewed</Text>
			);
	}
}
const styles = StyleSheet.create({
	load: 
	{
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
        alignItems: 'center',
		paddingTop: '15%',
	},
});

const addKeys = (val, key) => ({ key, ...val });
