import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Constants} from 'expo';
import aliens from './aliens';
import AliensView from './views/AliensView';
//import {createSwitchNavigator} from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
      <AliensView style={styles.container} aliens= {aliens}>
      </AliensView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
