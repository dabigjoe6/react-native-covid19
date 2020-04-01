import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { textColor, primaryColor } from '../config';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../context/Theme';

export default function CasesCard(props) {

	const activeTheme = useContext(theme).globalTheme;

	const styles = {
		container: {
			flexDirection: 'row',
			alignItems: 'center',
			width: '100%',
			marginVertical: 5,
			borderRadius: 5,
			elevation: 1
		},
		regionText: {
			color: activeTheme.textColor.normal,
			marginBottom: 5,
			fontSize: 16
		},
		caseTypeText: {
			fontWeight: 'bold',
			marginBottom: 8
		}
	}

	let provinceState = props.case.provinceState ? props.case.provinceState : "";
	let countryRegion = props.case.countryRegion ? props.case.countryRegion : "";

	let iconName;
	let color;

	switch (props.type) {
		case 'Confirmed':
			iconName = 'meho';
			color = activeTheme.textColor.confirmed
			break;
		case 'Recovered':
			iconName = 'smile-circle';
			color = activeTheme.textColor.recovered;
			break;
		case 'Deaths':
			iconName = 'frown';
			color = activeTheme.textColor.deaths;
			break;
	}

	return (
		<TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
			<View style={[styles.container, { backgroundColor: activeTheme.primaryColor, }]}>
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
					<Text style={{ color: activeTheme.textColor.secondary }}>{`Last updated ${(new Date(props.case.lastUpdate)).toDateString()}`}</Text>
				</View>
			</View>
		</TouchableOpacity>

	)
}