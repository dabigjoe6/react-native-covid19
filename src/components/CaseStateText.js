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

	let iconName = props.value < props.delta ? 'trending-down' : 'trending-up'

	return (
		<View style={styles.container}>
			<Icon
				// trending-up or trending-down based on the delta value
				name={iconName}
				type="material"
				color={textColor.alternate}
			/>
			<Text style={[styles.text, { color }]}>{`${props.state}: ${props.value}`}</Text>
		</View>
	)
}

const styles = {
	container: {
		margin: 5,
		flexDirection: 'row',
		alignItems: 'center'
	},
	text: {
		marginLeft: 10
	}
}