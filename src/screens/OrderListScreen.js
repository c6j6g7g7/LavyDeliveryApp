// Settings.js

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ListView, ScrollView, Alert } from 'react-native';
import { Card, ListItem, Button, Icon, Badge } from 'react-native-elements';
import Timeline from 'react-native-timeline-listview';


export class OrderListScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Lavy Delivery - Revisa tus Ordenes',
      //title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    };
  };


  /*constructor(props) {
    super(props);

    this.onLoginApp = this.onLoginApp.bind(this);
  }*/
    constructor(props){
         //super()
         super(props);




         this.onEventPress = this.onEventPress.bind(this);

         this.data = [
           //{otroDato: 'order1' ,time: '09:00', title: 'Calle 119 #13-22', description: 'Andres Restrepo', icon: require('../images/icono-box.png')},
           {coordinates: [
             {
               latitude: 4.6986606,
               longitude: -74.0422231
             },{
             latitude: 4.706332,
             longitude: -74.050744,
           }] ,time: '09:00', title: 'Calle 119 #13-22', description: 'Andres Restrepo', icon: require('../images/icono-box.png')},
           {coordinates: [{
             latitude: 4.6986606,
             longitude: -74.0422231
           },{ latitude: 4.5973868, longitude: -74.0780794 }],time: '10:45', title: 'Av. 7 # 102B-14', description: 'Lina Orozco', icon: require('../images/icono-box.png')},
           {coordinates: [{
             latitude: 4.6986606,
             longitude: -74.0422231
           },{ latitude: 4.737162, longitude: -74.0421526 }],time: '12:00', title: 'Calle 156 #70-22', description: 'Sofia Contreras', icon: require('../images/icono-box.png')},

           {coordinates: [{
             latitude: 4.6986606,
             longitude: -74.0422231
           },{ latitude: 4.7085854, longitude: -74.0448146 }],time: '14:00', title: 'Cra 15 # 57-30 apto 601', description: 'Pedro Navajas', icon: require('../images/icono-box.png')},
           ,{coordinates: [{
             latitude: 4.6986606,
             longitude: -74.0422231
           },{ latitude: 4.6405873, longitude: -74.0672934 }],time: '16:30', title: 'Calle 155 # 53-53', description: 'Celia Cruz', icon: require('../images/icono-box.png')},
           {coordinates: [{
             latitude: 4.6986606,
             longitude: -74.0422231
           },{ latitude: 4.7517136, longitude: -74.0485711 }],time: '17:30', title: 'Auto Norte # 170-20', description: 'Ramoncito', icon: require('../images/icono-box.png')},
           {coordinates: [{
             latitude: 4.6986606,
             longitude: -74.0422231
           },{ latitude: 4.7032101, longitude: -74.1507226 }],time: '18:00', title: 'Calle 200 # 59-17', description: 'Richard Nixon', icon: require('../images/icono-box.png')},
           {coordinates: [{
             latitude: 4.6986606,
             longitude: -74.0422231
           },{ latitude: 4.5808716, longitude: -74.1040072 }],time: '20:30', title: 'Av primera de Mayo # 13-13', description: 'Pablo Neruda', icon: require('../images/icono-box.png')}
         ]
       }
       onEventPress(data){
             this.setState({selected: data, visible:true})
             this.props.navigation.navigate('RecogerScreen', {coordinates: data.coordinates, directions: data.title});
           }

  render() {
    return (

        <ScrollView >
        <View style={styles.box}>
        <Badge
          value={1}
          textStyle={{ color: 'rgba(63,191,191,1)' }}
        />
        <Text>Dirigete a Tus servicios</Text>
        </View>

           <Timeline
            onEventPress={this.onEventPress}
            data={this.data}
            innerCircle={'icon'}
            circleSize={30}
            circleColor='rgba(255,255,255,1)'
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

export default OrderListScreen;
