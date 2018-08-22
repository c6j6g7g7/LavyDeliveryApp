// Home.js

import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

import { createBottomTabNavigator, TabBarBottom } from 'react-navigation';

//import Home from '../Screen/Home';
import OrderList from './OrderListScreen';
import Recoger from './RecogerScreen';
import Verificar from './VerificarScreen';

export class Home extends Component {
  render() {
    return (

      <TabNavigator />
    )
  }
}


const TabNavigator = createBottomTabNavigator({
  OrderListScreen: {
    screen: OrderList,
    navigationOptions: { title: '1. Dirigete',
      tabBarIcon: () => (
        <Image style={styles.icon}
          source={require('../images/icon-dirigete.png')}
          />
        ),
        Label: 'Prueba',

      },
      title: 'Lavy Delivery - Revisa tus Ordenes',
  },
  RecogerScreen: {
    screen: Recoger,
    navigationOptions: { title: '2. Recoger',
      tabBarIcon: () => (
        <Image style={styles.icon}
          source={require('../images/icon-recoger.png')}

          />
        )
      },
      Label: 'Prueba2',
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
     Label: 'Prueba3',
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
