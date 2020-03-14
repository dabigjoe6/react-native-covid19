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
			<Text style={styles.text}>{props.text}</Text>
			<Text style={[styles.subText, { color: subTextColor }]}>{props.subText}</Text>
		</View>
	)
}

const styles = {
	text: {
		color: 'white',
		fontSize: 20,
		marginBottom: 5
	},
	subText: {
		fontWeight: 'bold'
	}
}