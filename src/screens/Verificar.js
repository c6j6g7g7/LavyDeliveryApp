// Settings.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class Verificar extends Component {
  render() {
    return (
      <View>
              <Text>This is the Verificar screen</Text>
              <Button onPress={() => this.props.navigation.navigate('LoginScreen')} title="Login"/>
            </View>
    )
  }
};

export default Verificar;
