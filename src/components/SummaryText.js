import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AnimateNumber from 'react-native-animate-number'
import { theme } from '../context/Theme';


export default function SummaryText(props) {

	const activeTheme = useContext(theme).globalTheme;

	const styles = {
		text: {
			color: activeTheme.textColor.normal,
			fontSize: 20,
			marginBottom: 5
		},
		subText: {
			fontWeight: 'bold'
		}
	}

	let subTextColor;

	switch (props.subText) {
		case 'Confirmed':
			subTextColor = activeTheme.textColor.confirmed;
			break;
		case 'Recovered':
			subTextColor = activeTheme.textColor.recovered;
			break;
		case 'Deaths':
			subTextColor = activeTheme.textColor.deaths;
			break;
		default:
			subTextColor = activeTheme.textColor.confirmed;
			break;
	}

	return (
		<View style={{ marginVertical: 10, marginHorizontal: 20, backgroundColor: activeTheme.backgroundColor, padding: 10, elevation: 1, borderRadius: 10 }}>
			<TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
				<AnimateNumber style={styles.text} value={props.text} formatter={(val) => {
					return parseFloat(val).toFixed(0)
				}}
				/>
				<Text style={[styles.subText, { color: subTextColor }]}>{props.subText}</Text>
			</TouchableOpacity>
		</View>

	)
}