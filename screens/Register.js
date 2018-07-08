import React from "react";
import { Button, View, StyleSheet, Text, AsyncStorage, ImageBackground } from "react-native";

export default class Register extends React.Component{

	render(){
		return (
			<View style={styles.parent}> 
				<ImageBackground
		    	  style={styles.backgroundImage}
		     	  source={require('./../assets/background.jpg')}
		   		>
					<View style={styles.button}>
						<Button title = "Login" onPress = {this.onLogin}/>
					</View>
					<View style={styles.button}>
						<Button title = "Register" onPress = {this.onRegister}/>
					</View>
				</ImageBackground>
			</View>
		);
	}

	onLogin = () =>
	{
		this.props.navigation.navigate("Login");
	};

	onRegister = () =>
	{
		this.props.navigation.navigate("Register");
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
	button: {
		width: '50%',
		paddingBottom: '1%',
	},
});