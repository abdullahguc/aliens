import React from 'react';
import { ScrollView, ActivityIndicator, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Row from './../components/AlienRow.js';

const AliensComponent = props => (
		<ScrollView>{props.aliens.map(alien => <Row {...alien} />)}</ScrollView>
);
	

AliensComponent.propTypes = {
  aliens: PropTypes.array
};


export default AliensComponent;