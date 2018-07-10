import React from 'react';
import { ScrollView, ActivityIndicator, View, StyleSheet, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import Row from './../components/AlienRow.js';
import AliensComponent from './../components/Aliens.js';
import localStorage from 'react-native-sync-localstorage';


export default class index extends React.Component{

	state = {
		alien: {}, 
		navigation: {}
	};
	_onDelete = () =>
	{
		
		console.log('delete');
		var alien = this.props.navigation.state.params.alien;
		fetch('https://aliens-app.herokuapp.com/api/v1/admin/alliens/' + alien.id, {
		  method: 'DELETE',
		  headers: {
			Authorization: localStorage.getItem('auth_token'),
			Accept: 'application/json',
			'Content-Type': 'application/json',
		  }
		}).then((response) => response.json()).then((res) => {
			var aliens = this.props.navigation.state.params.alien;
			
			this.props.navigation.navigate('Aliens');
		}).catch((err) => {console.log(err)});
	}
	_onEdit = () =>
	{
		console.log(localStorage.getItem('auth_token'));;
	}



	constructor(props)
	{
		super(props);
	}

	render(){
		this.state.alien = this.props.navigation.state.params.alien;
		this.state.navigation = this.props.navigation.state.params.navigator;
		return (
				<View>
					<Row key = {this.props.navigation.state.params.alien.key} alien={this.props.navigation.state.params.alien} navigator={this.props.navigation.state.params.navigator} />
					<View style={styles.button}>
						<Button title = "Delete" color='red' onPress= {this._onDelete}/>
					</View>
					<View style={styles.button}>
						<Button title = "Edit" onPress= {this._onEdit}/>
					</View>
				</View>
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
	button: {
		width: '50%',
		paddingBottom: '1%',
		flexDirection: 'column',
		justifyContent: 'center',
        alignItems: 'center',
	},
});

const addKeys = (val, key) => ({ key, ...val });
