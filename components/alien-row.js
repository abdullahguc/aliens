/*
 * A row that contains the alien's information
 */

import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';


const styles = StyleSheet.create({
  row: { padding: 20 }
});



const Row = props => (
  <TouchableOpacity
    style={styles.row}
    <Text>{props.Name}</Text>
    <Text>{props.Description}</Text>
 	<Image
        source={require('../assets/aliens.png')}
    />
  </TouchableOpacity>
);

export default Row;