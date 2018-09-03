import React, { Component } from 'react';
import { Platform, Image, ImageBackground } from "react-native";
import { connect } from 'react-redux';

//Componetes
import Input from '../components/Input'
import Button from '../components/Button'

//Actions
import { login } from '../redux/actions';

//Estilos
import { container, container_logon, logo }  from '../styles/styles';


export class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'julian.giraldo@lavy.com.co',
      password: 'dr#4JVnyDx',
      platform: 'Android',
      from: 'Android',
      loader: false
    }

  }

  _getDisabled(){
    let disabled = false;
    if(!this.state.email){
      disabled = true;
    }
    if(!this.state.password || this.state.password.length <= 5){
      disabled = true;
    }
    if(this.state.loader){
      disabled = true;
    }
    return disabled;
  }

  _login(){
    this.setState({ loader: true })
    this.props.login(this.state).then(($result) => {
      //Todo salido bien, eviamos a otra vista donde veremos
      this.props.navigation.navigate('HomeScreen');
      this.setState({ loader: false });
    }).catch((err) => {
      Alert.alert('Error', err.message);
    })
  }



  render() {
    return (
        <ImageBackground source={require('../images/background.jpg')} style={container_logon} >
          <Image source={require('../images/LOGO.png')} style={logo} />
          <Input
            placeholder="Correo electronico"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
            />
            <Input
              secureTextEntry={true}
              placeholder="Contraseña"
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
            />
            <Button
              onPress={this._login.bind(this)}
              disabled={this._getDisabled()}
              text="Comenzar"
            />
        </ImageBackground>
    )
  }

}


function MapStateToProps(state){
	return {
		//user : state.session && state.session.user ? state.session.user : false
    session : state.session  ? state.session : false
	}
}

/*const mapDispatchToProps = dispatch => {
  return {
      fetchData: () => dispatch(fetchData())
  }
}*/

//export default connect(MapStateToProps, mapDispatchToProps, {  login })(Login);
export default connect(MapStateToProps, { login })(LoginScreen);
