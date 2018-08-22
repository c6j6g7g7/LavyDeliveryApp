import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, ScrollView, Text, Alert } from 'react-native';
import { Badge } from 'react-native-elements';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 4.6986606;
const LONGITUDE = -74.0422231;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyC-wcN2AnAsa7NqWP5_8Qjb_AxwEFbtSPo';

class RecogerScreen extends Component {

  componentWillReceiveProps(next_props){
      this.setState({ coordinates: this.props.navigation.state.params.coordinates,
      directions: this.props.navigation.state.params.directions });

      /*for(var i=0; i < this.state.coordinates.length; i++ ){
          var str = this.state.coordinates[i].latitude.toString();
          Alert.alert('Mostrar ..::..: '+i,str);
      }*/
    }

  constructor(props) {
    super(props);


/*    this.state = {
      coordinates: [
        {
          latitude: 4.698528,
          longitude: -74.040274,
        },
        {
          latitude: 4.706332,
          longitude: -74.050744,
        },
      ],
    };*/
    this.state = {
          coordinates: this.props.navigation.state.params.coordinates,
          directions: this.props.navigation.state.params.directions
    };
    /*for(var i=0; i < this.state.coordinates.length; i++ ){
        var str = this.state.coordinates[i].latitude.toString();
        Alert.alert('Mostrar ..::..: '+i,str+" - "+this.state.directions);
    }*/



    this.mapView = null;
  }

  onMapPress = (e) => {
    /*this.setState({
      coordinates: [
        ...this.state.coordinates,
        e.nativeEvent.coordinate,
      ],
    });*/
    /*this.setState({
      coordinates: [
        this.state.coordinates,
        e.nativeEvent.coordinate,
      ],
    });*/
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.box}>
        <Badge
          value={2}
          textStyle={{ color: 'orange' }}
        />
        <Text>Dirigete a la Dirección {this.state.directions}</Text>
      </View>
      <View style={styles.containerMaps}>
      <MapView
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={StyleSheet.absoluteFill}
        ref={c => this.mapView = c}
        onPress={this.onMapPress}

      >
        {this.state.coordinates.map((coordinate, index) =>
          <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
        )}
        {(this.state.coordinates.length >= 2) && (
          <MapViewDirections
            origin={this.state.coordinates[0]}
            //origin={this.state.coordinates[this.state.coordinates.length - 1]}
            waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): null}
            destination={this.state.coordinates[this.state.coordinates.length-1]}
            //destination={this.state.coordinates[this.state.coordinates.length]}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"
            onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
            }}
            onReady={(result) => {
              this.mapView.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: (width / 20),
                  bottom: (height / 20),
                  left: (width / 20),
                  top: (height / 20),
                }
              });
            }}
            onError={(errorMessage) => {
              // console.log('GOT AN ERROR');
            }}
          />
        )}
      </MapView>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0)',
  },
  containerMaps:{
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default RecogerScreen;
