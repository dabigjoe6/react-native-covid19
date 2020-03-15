import React from 'react';
import { Main, Cases } from './src/screens';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
	return (
		// <Main />
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Main" headerMode="none">
				<Stack.Screen name="Main" component={Main} />
				<Stack.Screen name="Cases" component={Cases} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}