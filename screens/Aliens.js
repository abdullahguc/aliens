import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import Row from './../components/AlienRow.js';

const AliensView = props => (
  <ScrollView>{props.screenProps.aliens.map(alien => <Row {...alien} />)}</ScrollView>
);

AliensView.propTypes = {
  aliens: PropTypes.array
};


export default AliensView;