import React from "react";
import { Button, View, StyleSheet, Text, AsyncStorage, ImageBackground, TextInput} from "react-native";
import jwtDecode from 'jwt-decode';
import localStorage from 'react-native-sync-localstorage';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Makiko } from 'react-native-textinput-effects';


export default class Register extends React.Component{

	state = {
		email: '',
		password: '',
		isValidForm: true,
		errorMessage: ''
	};
	render(){
		return (
			<View style={styles.parent}> 
				<ImageBackground
		    	  style={styles.backgroundImage}
		     	  source={require('./../assets/background.jpg')}
		   		>
					<View style={styles.button}>
						<TextInput
						  label="Email"
						  placeholder="Email"
						  iconName={'envelope'}
         			 	  onChangeText={this.getHandler('email')}
						  style={styles.textbox}
						  value={this.state.email}
						/>
						<TextInput
			 			  label="Password"
						  placeholder="Password"
    					  iconName={'key'}
         			 	  onChangeText={this.getHandler('password')}
						  value={this.state.password}
						  style={styles.textbox}
						  secureTextEntry={true}
						/>
					</View>
					<Text style={{color:'red', fontWeight: 'bold'}}>{this.state.errorMessage}</Text>
					<View style={styles.button}>
						<Button title = "Login" onPress = {this.onLogin}
							disabled = {this.state.isValidForm}/>
					</View>
				</ImageBackground>
			</View>
		);
	}

	onLogin = () =>
	{	
   		this.setState({errorMessage: ''});
		fetch('https://aliens-app.herokuapp.com/api/v1/login', {
		  method: 'POST',
		  headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
    			email: this.state.email,
    			password: this.state.password,
  			}),
		}).then((response) => response.json()).then((res) => {
			if(res.auth_token)
			{
    		  var decoded = jwtDecode(res.auth_token);
			  localStorage.setItem('auth_token', res.auth_token);
			  localStorage.setItem('email', this.state.email);
			  localStorage.setItem('user_id', decoded.user_id);
			  localStorage.setItem('admin', decoded.admin);
			  this.props.navigation.navigate('Aliens');
			} 
			else
			{
   			   	this.setState({errorMessage: 'Incorrect Username or Password'});
			}  
		}).catch((err) => {console.log(err)});
	};
	

	
	getHandler = key => val => {
     this.setState({ [key]: val });
	 this.state.isValidForm = !(this.state.email.length > 0 && this.state.password.length > 0 && this._validateEmail(this.state.email));
  	};

	/*
     * Makes sure the email looks authentic
     */
	_validateEmail(email){
		var valid1 = email.split("@");
		var valid2 = email.split(".");
		return valid1.length == 2 && valid2.length >= 2;
	}

}


const styles = StyleSheet.create({
	parent: 
	{
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
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
		borderRadius: 15,
	},
	button: {
		width: '50%',
		paddingBottom: '1%',
		justifyContent: 'space-between',
	},
});