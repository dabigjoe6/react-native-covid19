import React, { useContext } from 'react';
import { ScrollView, StatusBar, KeyboardAvoidingView } from 'react-native';
import { theme } from '../context/Theme';

export default function Container(props) {

	const activeTheme = useContext(theme).globalTheme
	const darkTheme = useContext(theme).darkTheme

	return (
		<>
			<StatusBar backgroundColor={activeTheme.backgroundColor} barStyle={activeTheme.darkTheme ? "light-content" : "dark-content"} />
			<ScrollView style={[styles.container, { backgroundColor: activeTheme.backgroundColor }]} contentContainerStyle={{ flexGrow: 1 }}>
				{props.children}
			</ScrollView>
		</>
	)
}

const styles = {
	container: {
		flex: 1,
	},
}