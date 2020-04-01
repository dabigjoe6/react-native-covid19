import React, { useContext } from 'react';
import { Icon } from 'react-native-elements';
import { View, Text } from 'react-native';
import CaseStateText from './CaseStateText';
import { theme } from '../context/Theme';
import { primaryColor, textColor } from '../config';

export default function DailyCard(props) {

	const activeTheme = useContext(theme).globalTheme;

	const styles = {
		container: {
			flexDirection: 'row',
			alignItems: 'center',
			paddingHorizontal: 10,
			paddingVertical: 5,
			backgroundColor: activeTheme.primaryColor
		},
		descriptionText: {
			color: activeTheme.textColor.secondary,
			fontSize: 12
		}
	}

	return (
		<View style={styles.container}>
			<View style={{ flex: 1 }}>
				<Icon
					containerStyle={{ marginBottom: 0, padding: 0, margin: 0 }}
					name="timelapse"
					type="material"
					color={activeTheme.textColor.alternate}
				/>
				<View style={{ backgroundColor: 'transparent', width: '50%', height: 50, borderRightWidth: 0.8, borderRightColor: activeTheme.textColor.alternate }}>

				</View>
			</View>
			<View style={{ flex: 6 }}>
				<Text style={{ color: activeTheme.textColor.normal }}>{(new Date(props.case.reportDate)).toDateString()}</Text>
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
					{`Total ${props.case.mainlandChina ? props.case.mainlandChina : 0} cases in China and ${props.case.otherLocations ? props.case.otherLocations : 0} in other locations`}</Text>
			</View>
		</View >
	)
}

