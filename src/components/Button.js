import React, { Component } from 'react';
import { View, TouchableHighlight , Text } from 'react-native';
import {
	button,
	button_text
} from '../styles/styles';
import {
	REDCOLOR
} from '../config/const';


class Button extends Component{

	onPress(){
		if(this.props.onPress)
			this.props.onPress();
	}

	_getBackground(){
		if(this.props.disabled)
			return { backgroundColor : 'rgba(24, 124, 212, 0.5)' }
			return { backgroundColor : 'rgba(24, 124, 212, 1)' };
	}

	render(){
		return (
			<TouchableHighlight
				activeOpacity={1}
				underlayColor="rgba(27, 28, 76, .6)"
				onPress={this.onPress.bind(this)}
				style={[button,this._getBackground()]}>
				<Text style={button_text}>{this.props.text}</Text>
			</TouchableHighlight>
		);
	}
}

export default Button;
