import React from 'react';
import { ScrollView, ActivityIndicator, View, StyleSheet, Text, Button, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import Row from './../components/AlienRow.js';
import AliensComponent from './../components/Aliens.js';
import localStorage from 'react-native-sync-localstorage';
import {addAlien} from './../redux/actions/actions'; 
import {connect} from 'react-redux';
import {addAlienAPI} from './../api.js'


class addAlienScreen extends React.Component{


	state = {
		alien: {}, 
		navigation: {},
		edit: false,
		id: '',
		name: '', 
		description: '',
	};
	constructor(props)
	{
		super(props);
	}

	render(){
		this.state.alien = this.props.navigation.state.params.alien;
		this.state.navigation = this.props.navigation.state.params.navigator;
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
							<Button title = "Add" onPress= {this._onAdd}/>
				</View>	
			</View>	
			);
	
	}
	
	_onAdd = async () =>
	{
			console.log(this.state.id);
			var alien = {
				name: this.state.name,
				desc: this.state.description
			};
			
			var res = await addAlienAPI(alien);
				
			ret = {...res, key: res.id};
		    this.props.addAlien(ret);	
			this.props.navigation.navigate('Aliens');		
	}

	

	getHandler = key => val => {
     this.setState({ [key]: val });
  	};
}


const styles = StyleSheet.create({
	parent: 
	{
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
        alignItems: 'center',
	
	},
	backgroundImage: {
		width: '100%',
		height: '100%',
		flexDirection: 'column',
		justifyContent: 'center',
        alignItems: 'center',
	},
	textbox: {
		backgroundColor: 'white',
		fontSize: 20,
		paddingBottom:'1%',
	},
	button: {
		width: '50%',
		paddingBottom: '1%',
	},
});


export default connect(null, {addAlien: addAlien})(addAlienScreen)
