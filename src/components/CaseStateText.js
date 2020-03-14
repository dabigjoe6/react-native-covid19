import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { textColor, primaryColor } from '../config';

export default function CaseStateText(props) {

	let color;

	switch (props.state) {
		case "Confirmed":
			color = textColor.confirmed;
			break;
		case "Recovered":
			color = textColor.recovered;
			break;
	}

	return (
		<View style={{ margin: 5, flexDirection: 'row', alignItems: 'center' }}>
			<Icon
				// trending-up or trending-down based on the delta value
				name="trending-up"
				type="material"
				color={primaryColor}
			/>
			<Text style={{ color, marginLeft: 10 }}>{`${props.state}: ${props.value}`}</Text>
		</View>
	)
}