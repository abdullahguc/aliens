import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import Row from './../components/AlienRow.js';

const AliensView = props => (
  <ScrollView>{props.aliens.map(alien => <Row {...alien} />)}</ScrollView>
);

AliensView.propTypes = {
  aliens: PropTypes.array
};


export default AliensView;