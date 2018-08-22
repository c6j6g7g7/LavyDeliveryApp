import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
import {  Button, Badge} from "react-native-elements";
import Timeline from 'react-native-timeline-listview';

export class VerificarScreen extends Component {

  pressCheckClothes2(){
    Alert.alert('Verificar Prenda', 'Aca verificas las prendas');
  }
  pressCheckOrder(){
    Alert.alert('Verificar Orden', 'Aca Verificas la orden');
  }

  pressTakePhoto(){
    Alert.alert('Tomar Foto', 'Aca tomas las fotos a las prendas');
  }

  pressClothes(){
    Alert.alert('Pesar Prendas', 'Aca pesar las prendas');
  }

  constructor(){
       super()
       this.onEventPress = this.onEventPress.bind(this);

       this.data = [
         { title: '3.1 Verificar prendas', icon: require('../images/icon-verifica_prenda.png')},
         { title: '3.2 Tomar Foto', icon: require('../images/icon-tomar_foto.png')},
         { title: '3.3 Pesar Prendas', icon: require('../images/icon-pesar_prendas.png')},
         { title: '3.4 Confirmar Orden', icon: require('../images/icon-confirmar_orden.png')}
         ]
     }
    onEventPress(data){
       this.setState({selected: data, visible:true})
       Alert.alert('Venta con mensaje:'+data.title,  data.description);
     }

  render() {
    /*return(
      <Timeline
       onEventPress={this.onEventPress}
       data={this.data}
       innerCircle={'icon'}
       circleSize={60}
       circleColor='rgba(255,255,255,1)'
     />
    )*/
    return (
      <View style={styles.wrapper}>
        <View style={styles.box}>
          <Badge
            value={3}
            textStyle={{ color: 'orange' }}
          />
          <Text>Verificar</Text>
        </View>


        <View id="21" style={styles.box}>
          <TouchableOpacity onPress={() => this.pressCheckClothes2()} >
            <Image source={require('../images/icon-verifica_prenda.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.pressCheckClothes2()} >
            <Text>3.1 Verificar prendas</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity  onPress={() => this.pressTakePhoto()}>
          <View id="3" style={styles.box}>

            <Image source={require('../images/icon-tomar_foto.png')} style={styles.icon} />
            <Text>3.2 Tomar Foto</Text>

          </View>
            </TouchableOpacity>

          <View id="4" style={styles.box}>
          <TouchableOpacity  onPress={() => this.pressClothes()}>
            <Image source={require('../images/icon-pesar_prendas.png')} style={styles.icon} />
            <Text>3.3 Pesar Prendas</Text>
            </TouchableOpacity>
          </View>

          <View id="5" style={styles.box}>
          <TouchableOpacity  onPress={() => this.pressCheckOrder()}>
          <Image source={require('../images/icon-confirmar_orden.png')} style={styles.icon} />
            <Text >3.4 Confirmar Orden</Text>
            </TouchableOpacity>
          </View>

    </View>
  )
  }
};

const styles = StyleSheet.create({
  container: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0)',
    },
    icon: {
      height: 45,
      width: 45,
      alignItems: 'center',

    },
    wrapper: {
      flex: 1,
    },
    box: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    texto:{
      alignItems: 'center',
      justifyContent: 'center',
    }
});

export default VerificarScreen;
