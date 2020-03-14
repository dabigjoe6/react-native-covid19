import React from 'react';
import { Icon } from 'react-native-elements';
import { View, Text } from 'react-native';
import CaseStateText from './CaseStateText';
import { primaryColor, textColor } from '../config';

export default function DailyCard() {
	return (
		<View style={styles.container}>
			<Icon
				containerStyle={{ flex: 1 }}
				name="timelapse"
				type="material"
				color={textColor.alternate}
			/>
			<View style={{ flex: 6 }}>
				<Text style={{ color: 'white' }}>07 March 2020</Text>
				<View style={{ flexDirection: 'row' }}>
					<CaseStateText state="Confirmed" value="368" />
					<CaseStateText state="Recovered" value="1510" />
				</View>
				<Text style={styles.descriptionText}>Total 80,153 cases on China and 344,554 on the other location </Text>
			</View>
		</View>
	)
}

const styles = {
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		marginBottom: 1,
		backgroundColor: primaryColor
	},
	descriptionText: {
		color: textColor.secondary,
		fontSize: 11
	}
}