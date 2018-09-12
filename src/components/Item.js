import React, { Component } from 'react';
import { View, TouchableHighlight , Text } from 'react-native';
import {
	button,
	button_text
} from '../styles/styles';
import {
	REDCOLOR
} from '../config/const';


class Item extends Component{

	onPressAdd(){
		if(this.props.onPressAdd)
			this.props.onPressAdd();
	}

	onPressSubtract(){
		if(this.props.onPressSubtract)
			this.props.onPressSubtract();
	}

	_getBackground(){
		if(this.props.disabled)
			return { backgroundColor : 'rgba(24, 124, 212, 0.5)' }
			return { backgroundColor : 'rgba(24, 124, 212, 1)' };
	}

	render(){
		return (
			<View>
				<Text>{this.props.quantity} {this.props.item}</Text>
				<TouchableHighlight
					activeOpacity={1}
					underlayColor="rgba(27, 28, 76, .6)"
					onPress={this.onPressSubtract.bind(this)}
					style={[button,this._getBackground()]}>
					<Text style={button_text}>-</Text>
				</TouchableHighlight>
				<TouchableHighlight
					activeOpacity={1}
					underlayColor="rgba(27, 28, 76, .6)"
					onPress={this.onPressAdd.bind(this)}
					style={[button,this._getBackground()]}>
					<Text style={button_text}>+</Text>
				</TouchableHighlight>
		</View>
		);
	}
}

export default Item;