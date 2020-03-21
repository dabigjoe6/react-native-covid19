import React, { useContext } from 'react';
import { Icon } from 'react-native-elements';
import { View, Text } from 'react-native';
import CaseStateText from './CaseStateText';
import { theme } from '../context/Theme';
import AnimateNumber from 'react-native-animate-number'
import { primaryColor, textColor } from '../config';


export default function CountryCard(props) {

	const activeTheme = useContext(theme).globalTheme;

	const styles = {
		container: {
			justifyContent: 'center',
			alignItems: 'center',
			paddingHorizontal: 10,
			paddingVertical: 5,
			paddingTop: 20,
			backgroundColor: activeTheme.primaryColor,
			width: '90%',
			alignSelf: 'center',
			borderRadius: 10,
			marginBottom: 10
		},
		descriptionText: {
			color: activeTheme.textColor.secondary,
			fontSize: 12
		}
	}

	function CaseText(props) {
		let color = "";

		switch (props.case) {
			case 'Confirmed':
				color = activeTheme.textColor.confirmed;
				break;
			case 'Deaths':
				color = activeTheme.textColor.deaths;
				break;
			case 'Recovered':
				color = activeTheme.textColor.recovered;
				break;
		}

		return (
			<View style={{ marginHorizontal: 25, alignItems: 'center', marginVertical: 20 }}>
				<AnimateNumber style={{ color, fontSize: 20, fontWeight: 'bold' }} value={props.value} formatter={(val) => {
					return parseFloat(val).toFixed(0)
				}} />
				<Text style={{ color, fontSize: 11 }}>{props.case}</Text>
			</View>
		)
	}

	return (
		<View style={styles.container}>
			<Text style={{ color: activeTheme.textColor.normal, marginBottom: 10 }}>{props.country}</Text>
			<Text style={{ color: activeTheme.textColor.secondary, fontSize: 11 }}>{`Last updated ${(new Date(props.lastUpdated)).toDateString()}`}</Text>
			<View style={{ flexDirection: 'row' }}>
				<CaseText case="Confirmed" value={props.confirmed} />
				<CaseText case="Deaths" value={props.deaths} />
				<CaseText case="Recovered" value={props.recovered} />
			</View>
		</View >
	)
}

