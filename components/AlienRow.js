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



const Row = props => (
 <Card containerStyle={{padding: 0, backgroundColor: '#eaf2ff'}} >
	  <TouchableOpacity
		onPress={}
		style={styles.row}>
		 <Image
		      style={{width: 50, height: 50}}
		      source={require('./../assets/aliens.png')}
		 />
		<Text style={{fontWeight: 'bold', fontSize: 20}}>{props.name}</Text>
		<Text>{props.desc}</Text>
		
	  </TouchableOpacity>
	</Card>
);

_onClick()
{

}

export default Row;