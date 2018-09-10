// Settings.js

import React, { Component } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import {  Badge } from 'react-native-elements';
import Timeline from 'react-native-timeline-listview';

import { connect } from 'react-redux';

//import Timeline from '../components/TimelineCustom'

import { box }  from '../styles/styles';

import { fetchOrders } from '../redux/actions';

export class OrderListScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Lavy Delivery - Revisa tus Ordenes',
      //title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    };
  };


    constructor(props){
         super(props);
        //Alert.alert("INGRESOOOO",this.props.);
         this.onEventPress = this.onEventPress.bind(this);
         this.dataTime = [];
         /*this.data = [
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
         ]*/
         //const { dispatch, selectedSubreddit } = this.props
         
         //this.props.login(this.state)
         //dispatch(fetchOrders(Date.now()));
       }

       componentWillMount(){
        
        this.props.fetchOrders(Date.now());


       }

       onEventPress(data){
             //this.setState({selected: data, visible:true})
             this.props.navigation.navigate('RecogerScreen', {coordinates: data.coordinates, directions: data.title});
           }

      getOrder() {
      //Alert.alert("getOrder()");
      const {data} = this.props.data.data;
      
      data.map((actor, index) => {
          this.dataTime.push({
            time: '17:30',
            description: actor.office_name,
            icon: require('../images/icono-box.png')
          });                          
          //this.dataTime.title= ;
          //this.dataTime.description= actor.customer_name;
          //this.dataTime.icon = require('../images/icono-box.png');
          //this.
      })
      console.log("this.dataTime->"+JSON.stringify(this.dataTime));
      return (
                    <Timeline
                    onEventPress={this.onEventPress}
                    data={this.dataTime}
                    innerCircle={'icon'}
                    circleSize={30}
                    circleColor='rgba(255,255,255,1)'
                  />                        
                  );
      
  }


  render() {
    return (
        <ScrollView >
        <View style={box}>
        <Badge
          value={1}
          textStyle={{ color: 'rgba(63,191,191,1)' }}
        />
        <Text>Dirigete a Tus servicios</Text>

        </View>

        {
                    //console.log("DIRIGETE-this.props.data.data.data->"+JSON.stringify(this.props.data.data.data) )
                    }
         {this.props.data.isFeching && <Text>Loading...</Text>}
                    {this.props.data.data.message
                        ? this.getOrder()
                        : <Text>Sin Datos...</Text>}
        

         </ScrollView>

      );
    }
  }

  

  /*function MapStateToProps(state){
  	return {
  		data: state.fetchOrders && state.fetchOrders.isFeching ? state.fetchOrders.data : false,
      isFeching: state.fetchOrders.isFeching//data : state.data  ? Alert.alert(state.data) : false
  	}
  }

  const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(fetchOrders())
    }
  }*/


  const mapStateToProps = state => {
    
     console.log("SESSION->"+JSON.stringify(state.session) )
     //console.log("STATE->"+JSON.stringify(state.fetchOrders) )
      
    return {
        data: state.fetchOrders,
        status: state.status,
        message: state.message
    }
}

const mapDispatchToProps = dispatch => {

    return {
      fetchOrders: () => {
            return dispatch(fetchOrders(Date.now()))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderListScreen);


  //export default connect(MapStateToProps, mapDispatchToProps, {  login })(Login);
  //export default connect(MapStateToProps, mapDispatchToProps)(OrderListScreen);
//export default OrderListScreen;
