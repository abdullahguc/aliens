/*
 * A row that contains the alien's information
 */

import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';


const styles = StyleSheet.create({
  row: { padding: 20 }
});



const Row = props => (
  <TouchableOpacity
    style={styles.row}>
    <Text>{props.Name}</Text>
    <Text>{props.Description}</Text>
	 <Image
          style={{width: 50, height: 50}}
          source={require('./../assets/aliens.png')}
        />
  </TouchableOpacity>
);



export default Row;