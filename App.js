// App.js

import React, { Component } from 'react';
/*import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';*/
import { createStackNavigator } from 'react-navigation';

import Settings from './src/screens/Settings';
import Home from './src/screens/Home';
import Login from './src/screens/LoginScreen';
import OrderList from './src/screens/OrderListScreen';


const AppNavigator = createStackNavigator({
  LoginScreen: { screen: Login },
  SettingScreen: { screen: Settings },
  HomeScreen: { screen: Home },
  OrderListScreen: { screen: OrderList },
  initialRouteName: 'LoginScreen',
  });


export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
