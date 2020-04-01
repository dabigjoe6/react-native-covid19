import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, AdviceCard } from '../components';
import { textColor, primaryColor } from '../config';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { theme } from '../context/Theme';

export default function Settings() {

	const darkTheme = useContext(theme).darkTheme;
	const toggleTheme = useContext(theme).toggleTheme;
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
		text: {
			color: activeTheme.textColor.normal,
			marginBottom: 5,
			fontSize: 16
		},
		headerText: {
			fontSize: 30,
			marginBottom: 30
		},
		caseTypeText: {
			fontWeight: 'bold',
			marginBottom: 8
		}
	}

	return (
		<Container>
			<View style={{ padding: 20 }}>
				<Text style={[styles.headerText, { color: activeTheme.textColor.alternate }]}>Settings</Text>

				<TouchableOpacity activeOpacity={0.8} onPress={() => { toggleTheme() }}>
					<View style={[styles.container, { backgroundColor: activeTheme.primaryColor }]}>
						<MaterialCommunityIcons
							name={activeTheme.darkTheme ? "lightbulb-on" : "lightbulb"}
							color={activeTheme.darkTheme ? "gold" : "black"}
							size={40} />
						<View style={{ flex: 5, padding: 10 }}>
							<Text style={styles.text}>Dark Mode</Text>
							<Text style={{ color: activeTheme.textColor.secondary }}>Toggle between dark and light mode</Text>
						</View>
						<MaterialCommunityIcons
							name={activeTheme.darkTheme ? "toggle-switch" : 'toggle-switch-off'}
							color={activeTheme.darkTheme ? "green" : 'gray'}
							size={40} />
					</View>
				</TouchableOpacity>
			</View>
		</Container >
	)
}