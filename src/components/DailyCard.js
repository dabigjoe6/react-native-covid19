import React from 'react';
import { Icon } from 'react-native-elements';
import { View, Text } from 'react-native';
import CaseStateText from './CaseStateText';
import { primaryColor, textColor } from '../config';

export default function DailyCard(props) {
	return (
		<View style={styles.container}>
			<Icon
				containerStyle={{ flex: 1 }}
				name="timelapse"
				type="material"
				color={textColor.alternate}
			/>
			<View style={{ flex: 6 }}>
				<Text style={{ color: 'white' }}>{(new Date(props.case.reportDateString)).toDateString()}</Text>
				<View style={{ flexDirection: 'row' }}>
					<CaseStateText
						state="Confirmed"
						value={props.case.totalConfirmed ? props.case.totalConfirmed : 0}
						delta={props.case.deltaConfirmed ? props.case.deltaConfirmed : 0}
					/>
					<CaseStateText
						state="Recovered"
						value={props.case.totalRecovered ? props.case.totalRecovered : 0}
						delta={props.case.deltaRecovered ? props.case.deltaRecovered : 0}
					/>
				</View>
				<Text style={styles.descriptionText}>
					{`Total ${props.case.mainlandChina ? props.case.mainlandChina : 0} cases in China and ${props.case.otherLocation ? props.case.otherLocation : 0} in other locations`}</Text>
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
		fontSize: 12
	}
}