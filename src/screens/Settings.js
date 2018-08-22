// Settings.js

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ListView, ScrollView, Alert } from 'react-native';
import { Card, ListItem, Button, Icon, Badge } from 'react-native-elements';
import Timeline from 'react-native-timeline-listview';


export class Settings extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Lavy Delivery - Revisa tus Ordenes',
      //title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    };
  };

    constructor(){
         super()
         this.onEventPress = this.onEventPress.bind(this);

         this.data = [
           {time: '09:00', title: 'Calle 119 #13-22', description: 'Andres Restrepo', icon: require('../images/icono-box.png')},
           {time: '10:45', title: 'Av. 7 # 102B-14', description: 'Lina Orozco', icon: require('../images/icono-box.png')},
           {time: '12:00', title: 'Calle 156 #70-22', description: 'Sofia Contreras', icon: require('../images/icono-box.png')},
           {time: '14:00', title: 'Cra 15 # 57-30 apto 601', description: 'Pedro Navajas', icon: require('../images/icono-box.png')},
           {time: '16:30', title: 'Calle 155 # 53-53', description: 'Celia Cruz', icon: require('../images/icono-box.png')},
           {time: '17:30', title: 'Auto Norte # 170-20', description: 'Ramoncito', icon: require('../images/icono-box.png')},
           {time: '18:00', title: 'Calle 200 # 59-17', description: 'Richard Nixon', icon: require('../images/icono-box.png')},
           {time: '20:30', title: 'Av primera de Mayo # 13-13', description: 'Pablo Neruda', icon: require('../images/icono-box.png')}
         ]
       }
       onEventPress(data){
             this.setState({selected: data, visible:true})
             Alert.alert('Venta con mensaje:'+data.title,  data.description);
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

export default Settings;
