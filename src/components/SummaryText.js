import React from 'react';
import { View, Text } from 'react-native';
import { textColor, backgroundColor } from '../config';
import { TouchableOpacity } from 'react-native-gesture-handler';


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
		<View style={{ marginVertical: 10, marginHorizontal: 20, backgroundColor, padding: 10, elevation: 10, borderRadius: 10 }}>
			<TouchableOpacity onPress={props.onPress}>
				<Text style={styles.text}>{props.text}</Text>
				<Text style={[styles.subText, { color: subTextColor }]}>{props.subText}</Text>
			</TouchableOpacity>
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