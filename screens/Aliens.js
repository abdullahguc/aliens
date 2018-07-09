import React from 'react';
import { ScrollView, ActivityIndicator, View, StyleSheet } from 'react-native';
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
		fetch('http://192.168.1.109:3000/api/v1/user/alliens', {
		  method: 'GET',
		  headers:
		  { 
    			Authorization: localStorage.getItem('auth_token'),
				Accept: 'application/json',
			    'Content-Type': 'application/json',
  		  },
		}).then((response) => response.json()).then((res) => {
				this.setState({aliens: res});
				this.setState({isLoaded: true});
		}).catch((err) => {console.log(err)});
	}

	render(){
		
		if(this.state.isLoaded)
		{
			return (
				<AliensComponent aliens={this.state.aliens}></AliensComponent>
			);
		}
		else
		{
			if(this.state.aliens.length)
			{
				return (
					<ActivityIndicator size="large" color="#0000ff" style={styles.load}/>
				);
			}
			else
			{
				return (
					<Text>Nothing to be viewed</Text>
				);
			}
		}

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
