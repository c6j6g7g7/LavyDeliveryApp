import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, KeyboardAvoidingView, Image, ImageBackground } from "react-native";
import {  FormInput, Button } from "react-native-elements";

export class LoginScreen extends Component {
//https://stackoverflow.com/questions/44538072/react-navigation-onpress-in-own-function
//https://github.com/Around25/react-native-navigation-example/blob/master/src/Root.js
  constructor(props) {
    super(props);

    this.onLoginApp = this.onLoginApp.bind(this);
  }

  async onLoginApp() {
    fetch('http://test.lavy.com.co/api/CarrierApi/login', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      //body: {
        //"args": {
        //"email": "javier.marmol@lavy.com.co",
        //"password": "Lavy2017",
        "email": "julian.giraldo@lavy.com.co",
        "password": "hCe4hT=qk/WX",
        "from": "Android"
      }),


    }).then((response) => response.json()).then((responseJson) => {
          // you'll get the response in responseJson
          this.setState({
           data: responseJson
         });
          //alert("OK-1: Mensaje call POST-> Status:"+this.state.data.status+"--Token:"+this.state.data.api_token);
          alert("OK-2: Mensaje call POST-> Status:"+this.state.data.status+"-Message:"+this.state.data.data.message);


      })
      .catch((error) => {
        this.setState({
         data: error
       });
          //you will get error here.
          alert("NOT OK: Alerta JS......"+error);
      });

    //this.props.navigation.navigate('OrderListScreen');
    this.props.navigation.navigate('HomeScreen');
  }


  render() {
//    const { navigate } = this.props.navigation;
    return (

        <ImageBackground source={require('../images/background.jpg')} style={styles.container} >
          <Image source={require('../images/LOGO.png')} style={styles.logo} />
          <FormInput placeholder="Nombre y Apellido" color='white' />

          <FormInput placeholder="Correo" />

          <FormInput secureTextEntry placeholder="Móvil" />

          <FormInput secureTextEntry placeholder="Password..." />

          <Button large style={styles.buttonss} onPress={this.onLoginApp} title="COMPLETAR" />
        </ImageBackground>

    )
  }

}


const styles = StyleSheet.create({
  container: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0)',
    },
    logo: {
      width: '35%',
      height: '10%',
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonss: {
      backgroundColor: '#AABBBB',
      color: 'white',
    },
});


export default LoginScreen;
