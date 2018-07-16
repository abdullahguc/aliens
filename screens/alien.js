import React from 'react';
import { ScrollView, ActivityIndicator, View, StyleSheet, Text, Button, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import Row from './../components/AlienRow.js';
import AliensComponent from './../components/Aliens.js';
import localStorage from 'react-native-sync-localstorage';
import {editAlienAPI, deleteAlienAPI} from './../api.js'
import {updateAlien, deleteAlien} from './../redux/actions/actions'; 
import {connect} from 'react-redux';

class alien extends React.Component{

	state = {
		alien: {}, 
		navigation: {},
		edit: false,
		id: '',
		name: '', 
		description: '',
	};
	_onDelete = async () =>
	{
		
		var alien = this.props.navigation.state.params.alien;
		var res = await deleteAlienAPI(alien.id);
		this.props.deleteAlien(alien.id);
		this.props.navigation.navigate('Aliens');
	}
	_onEdit = async () =>
	{
		if(!this.state.edit)
		{
			var alien = this.props.navigation.state.params.alien;
			this.setState({ id: alien.id });
			this.setState({ name: alien.name });
			this.setState({ description: alien.desc });
			this.state.edit = true;
			this.forceUpdate();
		}
		else
		{
			var alien = {
				id: this.state.id,
				name: this.state.name,
				desc: this.state.description
			};
			var res = await editAlienAPI(alien);
			var resjson = await res.json();
			this.props.navigation.state.params.alien.name = this.state.name;
			this.props.navigation.state.params.alien.desc = this.state.description;
			this.state.edit = false;
			this.props.updateAlien(alien);
			this.forceUpdate();
		}

	}

	_EditArray = (arr, object) => {
		for(var i = 0; i < arr.length; i++)
		{
			if(arr[i].id = object.id)
			{
				arr[i].name = object.name;
				arr[i].desc = object.desc;
			}
		}
	};


	constructor(props)
	{
		super(props);
	}

	render(){
		this.state.alien = this.props.navigation.state.params.alien;
		this.state.navigation = this.props.navigation.state.params.navigator;
		if(this.state.edit)
			return (
			<View style={styles.form}>
				<TextInput
						  placeholder="Enter new Name"
         			 	  onChangeText={this.getHandler('name')}
						  style={styles.textbox}
						  value={this.state.name}
				/>
				<TextInput
				  placeholder="Enter new Description"
 			 	  onChangeText={this.getHandler('description')}
				  style={styles.textbox}
				  multiline={true}
    			  numberOfLines={4}
				  value={this.state.description}
				/>
				<View style={styles.button}>
							<Button title = "Edit" onPress= {this._onEdit}/>
				</View>	
			</View>	
			);
		else
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

	getHandler = key => val => {
     this.setState({ [key]: val });
  	};

	
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
	textbox: {
		backgroundColor: 'white',
		fontSize: 20,
		paddingBottom:'1%',
	},
	form: {
		paddingTop: '5%',
		width: '50%',
		paddingLeft: '10%',	
	},
});

const addKeys = (val, key) => ({ key, ...val });


export default connect(null, {updateAlien: updateAlien, deleteAlien: deleteAlien})(alien)