/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React, {Component} from 'react';
import {View, Text} from 'react-native';

class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Details Activity',
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Details Activity Screen</Text>
      </View>
    );
  }
}

export default DetailsScreen;
