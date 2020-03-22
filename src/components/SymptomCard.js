import React from 'react';
import { View, Text, Image } from 'react-native';

export default function SymptomCard(props) {

	const styles = {
		image: {
			height: 80,
			width: 80,
			marginRight: 20
		},
		container: {
			flexDirection: 'row',
			alignItems: 'center',
			marginVertical: 20,
			width: '90%'
		},
		text: {
			fontSize: 18,
			color: 'white'
		}
	}

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={props.source} />
			<Text style={styles.text}>{props.symptom}</Text>
		</View>
	)
} 