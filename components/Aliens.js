import React from 'react';
import { Button, ScrollView, ActivityIndicator, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Row from './../components/AlienRow.js';
import Icon from 'react-native-vector-icons/FontAwesome';

const AliensComponent = props => (
		<View style={styles.parent}>
			<View style={styles.button}>
			<Button title = "+ Add New Alien" onPress = {() => {props.navigator.navigate('Add', {navigator:props.navigator, aliens: props.aliens, alien: props.alien, refetch: () => {props.refetch()} });} }/>
			</View>
			<ScrollView style={styles.scroll}>{props.aliens.map(alien => <Row key = {alien.key} alien={alien} navigator={props.navigator} aliens= {props.aliens} refetch={() => {props.refetch() }}/>)}</ScrollView>
		</View>
);
	

AliensComponent.propTypes = {
  aliens: PropTypes.array,
  navigator: PropTypes.object,
  refetch: PropTypes.func,
};

const styles = StyleSheet.create({
	parent: 
	{
		flex: 1,
		justifyContent: 'center',
        alignItems: 'center',
		height: '100%',
		position: 'absolute',
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
		paddingTop: '1%',
	},
	scroll: {
		flex:1,
		height:'100%',
	}
});

export default AliensComponent;