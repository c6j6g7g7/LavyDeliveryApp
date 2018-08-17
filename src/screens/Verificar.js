import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {  Button, Badge} from "react-native-elements";

export class Verificar extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Badge
          value={3}
          textStyle={{ color: 'orange' }}
        />
          <View id="2" style={styles.box}>
            <Image source={require('../images/icon-verifica_prenda.png')} style={styles.icon} />
            <Text>3.1 Verificar prendas</Text>
          </View>

          <View id="3" style={styles.box}>
            <Image source={require('../images/icon-tomar_foto.png')} style={styles.icon} />
            <Text>3.2 Tomar Foto</Text>
          </View>

          <View id="4" style={styles.box}>
            <Image source={require('../images/icon-pesar_prendas.png')} style={styles.icon} />
            <Text>3.3 Pesar Prendas</Text>
          </View>

          <View id="5" style={styles.box}>
            <Image source={require('../images/icon-confirmar_orden.png')} style={styles.icon} />
            <Text style={styles.texto}>3.4 Confirmar Orden</Text>
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

export default Verificar;
