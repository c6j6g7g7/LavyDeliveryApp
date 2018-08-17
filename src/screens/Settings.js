// Settings.js

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ListView, ScrollView, } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';


const users = [
 //... // more users here
 {
   order: '1',
   name: 'Andres Restrepo',
   phone: 5555555,
   address: 'Calle 119 #13-22'
 },
 {
   order: '2',
    name: 'Lina',
    phone: 34343434,
    address: 'Av. 7 # 102B-14'
 },
 {
   order: '3',
    name: 'Martha',
    phone: 5555555,
    address: 'Calle 156 #70-22'
 },
]


// Row comparison function
const rowHasChanged = (r1, r2) => r1.id !== r2.id

// DataSource template object
const ds = new ListView.DataSource({rowHasChanged})

export class Settings extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Lavy Delivery - Order List',
      //title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    };
  };

  state = {
      dataSource: ds.cloneWithRows(users)
    }
  render() {
    return (
        <ScrollView >
          <ListView
             dataSource={this.state.dataSource}
             renderRow={(data) => {
               return (
                 <View key={data.order} style={styles.box}>
                           <Image
                             style={styles.icon}
                             resizeMode="cover"
                             source={require('../images/icon-pesar_prendas.png')}
                           />
                           <Text style={styles.name}>
                           Dirección: {data.address}
                           </Text>
                           <Text style={styles.name}>{data.name}</Text>

                  </View>
               )
             }
           }
           />
         </ScrollView>

      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 300,
      height: 150
    },
    icon: {
      position: 'relative',
      height: 45,
      width: 45,
      alignItems: 'center',

    },
    box: {
      flex: 1,
      flexDirection: 'row'
    },
  });

export default Settings;
