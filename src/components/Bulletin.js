import React from 'react';
import { View, Text } from 'react-native';

export default function Bulletin(props) {
	return (
		<View style={{ flexDirection: 'row' }}>
			<Text style={{ color: 'white', marginRight: 10 }}>*</Text>
			<Text style={{ fontSize: 11, lineHeight: 20, color: 'white' }}>{props.title}</Text>
		</View>
	)
}