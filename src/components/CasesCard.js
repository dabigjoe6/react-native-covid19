import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { textColor } from '../config';

export default function CasesCard() {
	return (
		<View style={styles.container}>
			{/* icon change based on case type */}
			<Icon
				containerStyle={{ flex: 1 }}
				name="meho"
				type="antdesign"
				color={textColor.recovered}
			/>
			<View style={{ flex: 5, padding: 10 }}>
				<Text style={styles.regionText}>South Korea</Text>
				{/* //text color changes based on case type */}
				<Text style={styles.caseTypeText}>Confirmed 44</Text>
				<Text style={{ color: textColor.secondary }}>Last updated 07 March 2020</Text>
			</View>
		</View>
	)
}

const styles = {
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		marginVertical: 20
	},
	regionText: {
		color: 'white',
		marginBottom: 5,
		fontSize: 16
	},
	caseTypeText: {
		color: textColor.recovered,
		fontWeight: 'bold',
		marginBottom: 8
	}
}