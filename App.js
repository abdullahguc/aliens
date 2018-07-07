import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Constants} from 'expo';
import aliens from 'aliens.js';
import AliensView from 'views/aliens-view.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App. to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
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
