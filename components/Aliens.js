import React from 'react';
import { ScrollView, ActivityIndicator, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Row from './../components/AlienRow.js';

const AliensComponent = props => (
		<ScrollView>{props.aliens.map(alien => <Row key = {alien.key} alien={alien} navigator={props.navigator} aliens= {props.aliens}/>)}</ScrollView>
);
	

AliensComponent.propTypes = {
  aliens: PropTypes.array,
  navigator: PropTypes.object
};


export default AliensComponent;