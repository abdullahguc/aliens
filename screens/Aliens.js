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
		fetch('https://aliens-app.herokuapp.com/api/v1/user/alliens', {
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
		
		if(this.state.isLoaded)
		{
			if(this.state.aliens.length > 0)
			{

				return (
					<AliensComponent aliens={this.state.aliens} navigator={this.props.navigation} ></AliensComponent>
				);
			}
			else
			{
				return (
					<Text style={{fontSize: 21, color: 'blue', justifyContent: 'center',
        			 alignItems: 'center',
	   					}}>Nothing to be viewed</Text>
				);
			}
		}
		else
		{
			return (
				<ActivityIndicator size="large" color="#0000ff" style={styles.load}/>
			);
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

const addKeys = (val, key) => ({ key, ...val });
