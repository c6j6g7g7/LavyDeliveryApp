import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ListView, ScrollView, } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
//import { View} from 'react-native';
//import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
const users = [
 //... // more users here
 {
   order: '1',
   name: 'brynn',
   phone: 5555555,
   address: 'Calle 19 #13-22',
   map: '../images/maps1.png',
   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 {
   order: '2',
    name: 'Wilder',
    phone: 5555555,
    address: 'Calle 56 #70-22',
    map: '../images/maps2.png',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 {
   order: '3',
    name: 'Martha',
    phone: 5555555,
    address: 'Calle 156 #70-22',
    map: '../images/maps2.png',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
]


// Row comparison function
const rowHasChanged = (r1, r2) => r1.id !== r2.id

// DataSource template object
const ds = new ListView.DataSource({rowHasChanged})

export class OrderListScreen extends React.Component {
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
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
    /* 2. Get the param, provide a fallback value if not available */
    return (
      <ScrollView >
        <ListView
           dataSource={this.state.dataSource}
           renderRow={(data) => {
             return (
               <Card
                 title={data.order}

               >
               <Image
                 style={styles.image}
                 resizeMode="cover"
                 source={require('../images/maps2.png')}
                 />
                 <Text style={{marginBottom: 10}}>
                   # Order: {data.order}
                 </Text>
                 <Text style={{marginBottom: 10}}>
                 Cliente: {data.name}
                 </Text>
                 <Text style={{marginBottom: 10}}>
                 Dirección: {data.address}
                 </Text>
                 <Button
                   icon={<Icon name='code' color='#ffffff' />}
                   backgroundColor='#03A9F4'
                   buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                   title='Detalle' />
               </Card>
             )
           }
         }
         />
       </ScrollView>
      //this.renderCards();
      // implemented without image with header

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
  }
});

export default OrderListScreen;
