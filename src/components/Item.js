import React, { Component } from 'react';
import { View, TouchableHighlight , Text } from 'react-native';
import { box, badgeText }  from '../styles/styles';
import {
	button_add,
	button_text
} from '../styles/styles';

import { increment, decrement } from '../redux/actions';

import { connect } from 'react-redux';

import { COUNTER_DECREMENT, COUNTER_INCREMENT } from '../redux/ActionTypes';


class Item extends Component{

	onPressAdd(){
		this.props.increment();
	}

	onPressSubtract(){
		this.props.decrement();
	}

	_getBackground(){
		if(this.props.disabled)
			return { backgroundColor : 'rgba(24, 124, 212, 0.5)' }
			return { backgroundColor : 'rgba(24, 124, 212, 1)' };
	}

	render(){
		return (
			<View style={box}>
				<Text style={badgeText}>{this.props.quantity} {this.props.item}</Text>
				<TouchableHighlight
					activeOpacity={1}
					underlayColor="rgba(27, 28, 76, .6)"
					onPress={this.onPressSubtract.bind(this)}
					style={[button_add,this._getBackground()]}>
					<Text style={button_text}>-</Text>
				</TouchableHighlight>
				<TouchableHighlight
					activeOpacity={1}
					underlayColor="rgba(27, 28, 76, .6)"
					onPress={this.onPressAdd.bind(this)}
					style={[button_add,this._getBackground()]}>
					<Text style={button_text}>+</Text>
				</TouchableHighlight>
		</View>
		);
	}
}


const mapStateToProps = (state) => {
    //console.log("STATE=>"+JSON.stringify(state.currentOrder));
    return { quantity: state.currentOrder.quantity }
};

const mapDispatchToProps = dispatch => {
    return {
		increment: () => {
			 return dispatch(increment());
		},
		decrement: () => {
			return dispatch(decrement());
		}			
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);