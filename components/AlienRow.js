/*
 * A row that contains the alien's information
 */

import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';


const styles = StyleSheet.create({
  row: { padding: 20 }
});

state = {
	props: {}
};

const Row = props => {

return (
 <Card containerStyle={{padding: 0, backgroundColor: '#eaf2ff'}} >
	  <TouchableOpacity
		onPress={() => {
					if(props.navigator != null)
						props.navigator.navigate('Alien', {alien: props.alien, navigator:props.navigator, aliens:props.aliens, refetch: props.refetch });
  			}}
		style={styles.row}>
		 <Image
		      style={{width: 50, height: 50}}
		      source={require('./../assets/aliens.png')}
		 />
		<Text style={{fontWeight: 'bold', fontSize: 20}}>{props.alien.name}</Text>
		<Text>{props.alien.desc}</Text>
		
	  </TouchableOpacity>
	</Card>
)};



export default Row;