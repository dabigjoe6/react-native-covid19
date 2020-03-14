import React from 'react';
import { View, Text } from 'react-native';
import { textColor } from '../config';

export default function SummaryText(props) {
	let subTextColor;

	switch (props.subText) {
		case 'Confirmed':
			subTextColor = textColor.confirmed;
			break;
		case 'Recovered':
			subTextColor = textColor.recovered;
			break;
		case 'Deaths':
			subTextColor = textColor.deaths;
			break;
		default:
			subTextColor = textColor.confirmed;
			break;
	}

	return (
		<View style={{ margin: 20 }}>
			<Text style={{ color: 'white', fontSize: 20, marginBottom: 5 }}>{props.text}</Text>
			<Text style={{ color: subTextColor, fontWeight: 'bold' }}>{props.subText}</Text>
		</View>
	)
}