// Home.js

import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

import { createBottomTabNavigator, TabBarBottom } from 'react-navigation';

//import Home from '../Screen/Home';
import Settings from './Settings';
import OrderList from './OrderListScreen';
import Verificar from './Verificar';

export class Home extends Component {
  render() {
    return (

      <TabNavigator />
    )
  }
}


const TabNavigator = createBottomTabNavigator({
  SettingScreen: {
    screen: Settings,
    navigationOptions: { title: '1. Dirigete',
      tabBarIcon: () => (
        <Image style={styles.icon}
          source={require('../images/icon-dirigete.png')}
          />
        )
      },
  },
  OrderListScreen: {
    screen: OrderList,
    navigationOptions: { title: '2. Recoger',
      tabBarIcon: () => (
        <Image style={styles.icon}
          source={require('../images/icon-recoger.png')}

          />
        )
      },
 },
 VerificarScreen: {
   screen: Verificar,
   navigationOptions: { title: '3. Verificar',
     tabBarIcon: () => (
       <Image style={styles.icon}
         source={require('../images/icon-verificar.png')}

         />
       )
     },
   }
},
{
  tabBarOptions: {
        showIcon: true,
        showLabel: true,
        style: {
            backgroundColor: 'white',
            height: 80,
        }
    }
  });

  const styles = StyleSheet.create({
    container: {
      marginVertical: 4,
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      height: 45,
      width: 45,
      alignItems: 'center',
    }
  });

export default Home;