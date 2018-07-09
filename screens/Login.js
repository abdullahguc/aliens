import React from "react";
import { Button, View, StyleSheet, Text, AsyncStorage, ImageBackground, TextInput} from "react-native";
import jwtDecode from 'jwt-decode';

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
						  placeholder="Email"
         			 	  onChangeText={this.getHandler('email')}
						  style={styles.textbox}
						  value={this.state.email}
						/>
						<TextInput
						  placeholder="Password"
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
		fetch('http://192.168.1.109:3000/api/v1/login', {
		  method: 'POST',
		  headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
				name: 'Abdullah',
    			email: this.state.email,
    			password: this.state.password,
  			}),
		}).then((response) => response.json()).then((res) => {
			if(res.auth_token)
			{
    		  var decoded = jwtDecode(res.auth_token);
			  console.log(decoded);
			} 
			else
			{
				console.log("couldn't be found");
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