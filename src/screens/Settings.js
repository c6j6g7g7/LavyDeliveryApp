// Settings.js

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {  Button, Badge} from "react-native-elements";

export class Settings extends Component {
  render() {
    return (
      <View>

        <Badge
          value={3}
          textStyle={{ color: 'orange' }}
        />
        <View id="2">
          <Image source={require('../images/icon-verifica_prenda.png')} style={styles.icon} />
          <Text style={styles.texto}>3.1 Verificar prendas</Text>
        </View>

        <Image source={require('../images/icon-tomar_foto.png')} style={styles.icon} />
        <Text>3.2 Tomar Foto</Text>

        <Image source={require('../images/icon-pesar_prendas.png')} style={styles.icon} />
        <Text>3.3 Pesar Prendas</Text>

        <Image source={require('../images/icon-confirmar_orden.png')} style={styles.icon} />
        <Text>3.4 Confirmar Orden</Text>

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
      position: 'relative',
      height: 45,
      width: 45,
      alignItems: 'center',

    },
    texto: {
      position: 'absolute',

    },
    row: {
      flex: 1,
      flexDirection: 'row'
    },

});

export default Settings;
