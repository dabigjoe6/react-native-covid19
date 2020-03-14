import React from 'react';
import { View, Text } from 'react-native';

export default function SummaryText(props) {
	let subTextColor;

	switch (props.subText) {
		case 'Confirmed':
			subTextColor = '#F2B900';
			break;
		case 'Recovered':
			subTextColor = "#00CC99";
			break;
		case 'Deaths':
			subTextColor = '#F76353';
			break;
		default:
			subTextColor = '#F2B900';
			break;
	}

	return (
		<View style={{ margin: 20 }}>
			<Text style={{ color: 'white', fontSize: 20, marginBottom: 5 }}>{props.text}</Text>
			<Text style={{ color: subTextColor, fontWeight: 'bold' }}>{props.subText}</Text>
		</View>
	)
}