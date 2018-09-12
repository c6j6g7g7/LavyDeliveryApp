// Settings.js

import React, { Component } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import {  Badge } from 'react-native-elements';
import Timeline from 'react-native-timeline-listview';

import { connect } from 'react-redux';

//import Timeline from '../components/TimelineCustom'

import { box, badgeText, loading }  from '../styles/styles';

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
         this.onEventPress = this.onEventPress.bind(this);
       }

       componentWillMount(){        
         //console.log("componentWillMount=>"+this.props.session.token)
         this.props.fetchOrders(Date.now(),this.props.session.token);
       }

       onEventPress(data){
          //this.setState({selected: data, visible:true})
          this.props.navigation.navigate('RecogerScreen', {coordinates: data.coordinates, directions: data.title});
        }

      getOrder() {
        this.dataTime = [];
        const {data} = this.props.data.data;
      
        data.map((order, index) => {
            this.dataTime.push({
              time: order.pickup_schedule.start_time,
              title: order.order_state.name,
              description: order.pickup_address.address +' '+ order.pickup_address.address_detail,
              icon: require('../images/icono-box.png'),
              coordinates:
                [ { latitude: 4.6986606, longitude: -74.0422231 },
                  { latitude: parseFloat(order.pickup_address.lat), longitude: parseFloat(order.pickup_address.long) }] ,
            });                          
        })
      //console.log("this.dataTime->"+JSON.stringify(this.dataTime));
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
        
          <Text style={badgeText}>Dirigete a Tus servicios</Text>        
        </View>

        {
        //console.log("DIRIGETE-this.props.data.data.data->"+JSON.stringify(this.props.data.data.data) )
        }         
          {this.props.data.data.message
              ? this.getOrder()
              : <Text>Sin Datos...</Text>}
         
          {this.props.data.isFeching && <Text style={loading}>Loading...</Text>}
         </ScrollView>

      );
    }
  }

  
  const mapStateToProps = state => {
    //console.log("mapStateToProps->"+state.session.token )
     //console.log("SESSION->"+JSON.stringify(state.session) )
     //console.log("STATE->"+JSON.stringify(state.fetchOrders) )
      
    return {
        data: state.fetchOrders,
        status: state.status,
        message: state.message,
        session: state.session
    }
}

const mapDispatchToProps = dispatch => {
  
    return {
      fetchOrders: (date, token) => {
          //console.log("SCREEN-mapDispatchToProps->"+token )
            return dispatch(fetchOrders(date, token))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderListScreen);