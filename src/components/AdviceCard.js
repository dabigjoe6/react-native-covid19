import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { theme } from '../context/Theme';

export default function AdviceCard(props) {

	const activeTheme = useContext(theme).globalTheme;

	const styles = {
		container: {
			flexDirection: 'row',
			alignItems: 'center',
			width: '100%',
			marginVertical: 5,
			borderRadius: 5,
			elevation: 1,
			padding: 20
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
	return (
		<TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
			<View style={[styles.container, { backgroundColor: activeTheme.primaryColor }]}>
				{/* icon change based on case type */}
				{props.icon}
				<View style={{ flex: 5, padding: 10 }}>
					<Text style={styles.regionText}>{props.title}</Text>
					{/* //text color changes based on case type */}
					<Text style={{ color: activeTheme.textColor.secondary }}>{props.description}</Text>
				</View>
				<Icon name="ios-arrow-forward" type="ionicon" size={30} />
			</View>
		</TouchableOpacity>
	)
}