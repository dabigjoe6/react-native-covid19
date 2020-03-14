import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { backgroundColor } from '../config';

export default function Container(props) {
	return (
		<>
			<StatusBar backgroundColor={backgroundColor} />
			<ScrollView style={styles.container}>
				{props.children}
			</ScrollView>
		</>
	)
}

const styles = {
	container: {
		backgroundColor,
		flex: 1
	},
}