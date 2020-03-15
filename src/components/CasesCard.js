import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { textColor, primaryColor } from '../config';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CasesCard(props) {

	let provinceState = props.case.provinceState ? props.case.provinceState : "";
	let countryRegion = props.case.countryRegion ? props.case.countryRegion : "";

	let iconName;
	let color;

	switch (props.type) {
		case 'Confirmed':
			iconName = 'meho';
			color = textColor.confirmed;
			break;
		case 'Recovered':
			iconName = 'smile-circle';
			color = textColor.recovered;
			break;
		case 'Deaths':
			iconName = 'frown';
			color = textColor.deaths;
			break;
	}

	return (
		<TouchableOpacity onPress={props.onPress}>
			<View style={styles.container}>
				{/* icon change based on case type */}
				<Icon
					containerStyle={{ flex: 1 }}
					name={iconName}
					type="antdesign"
					color={color}
				/>
				<View style={{ flex: 5, padding: 10 }}>
					<Text style={styles.regionText}>{`${provinceState} ${countryRegion}`}</Text>
					{/* //text color changes based on case type */}
					<Text style={[styles.caseTypeText, { color }]}>{`${props.type} ${props.case[props.type.toLowerCase()]}`}</Text>
					<Text style={{ color: textColor.secondary }}>{`Last updated ${(new Date(props.case.lastUpdate)).toDateString()}`}</Text>
				</View>
			</View>
		</TouchableOpacity>

	)
}

const styles = {
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		backgroundColor: primaryColor,
		marginVertical: 5,
		borderRadius: 5,
		elevation: 10
	},
	regionText: {
		color: 'white',
		marginBottom: 5,
		fontSize: 16
	},
	caseTypeText: {
		fontWeight: 'bold',
		marginBottom: 8
	}
}