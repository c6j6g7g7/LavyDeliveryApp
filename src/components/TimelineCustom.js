import React, { Component } from 'react';
import { View, TextInput  } from 'react-native';

import Timeline from 'react-native-timeline-listview';

import {
  InputContainer,
  InputStyle
} from '../styles/styles';

class TimelineCustom extends Component {

  onPress(){
    if(this.props.onPress)
      this.props.onPress();
  }

	render(){
		return (
			<View style={InputContainer}>
        <Timeline
         onEventPress={this.onPress.bind(this)}
         data={this.props.data}
         innerCircle={'icon'}
         circleSize={30}
         circleColor='rgba(255,255,255,1)'
       />
			</View>
		)
	}

}

export default TimelineCustom;
