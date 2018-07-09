import React from 'react';
import { Button, View, StyleSheet, Text, AsyncStorage, ImageBackground, TextInput} from "react-native";

export default class Login extends React.Component{
	state = {
		name: '',
		email: '',
		password: '', 
		confirmPassword: '', 
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
						  value={this.state.name}
						  placeholder="Name"
						  style={styles.textbox}
         			 	  onChangeText={this.getHandler('name')}
						/>
						<TextInput
						  value={this.state.email}
         			 	  onChangeText={this.getHandler('email')}
						  placeholder="Email"
						  style={styles.textbox}
						/>
						<TextInput
						  value={this.state.password}
         			 	  onChangeText={this.getHandler('password')}
						  placeholder="Password"
						  style={styles.textbox}
						  secureTextEntry={true}
						/>
						<TextInput
						  value={this.state.confirmPassword}
         			 	  onChangeText={this.getHandler('confirmPassword')}
						  placeholder="Confirm Password"
						  style={styles.textbox}
						  secureTextEntry={true}
						/>
					</View>
					<View style={styles.button}>
						<Button title = "Register" onPress = {this.onRegister}/>
					</View>
				</ImageBackground>
			</View>
		);
	}

	onRegister = () =>
	{
		fetch('http://192.168.1.109:3000/api/v1/signup', {
		  method: 'POST',
		  headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		  },
		}).then((res) => {console.log(res)}).catch((err) => {console.log(err)});
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