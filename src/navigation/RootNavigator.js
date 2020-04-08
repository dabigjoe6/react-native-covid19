import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Main, Cases, Advice, Prevention, Symptoms, HowItSpreads, Settings, WhatToDo, News, NewsDetails } from '../screens';
import { backgroundColor, primaryColor, textColor, tabBarColor } from '../config';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import Entypo from 'react-native-vector-icons/Entypo';


export default function RootNavigator() {

	const Stack = createStackNavigator();
	const Tab = createBottomTabNavigator();

	function StatsStack() {
		return (
			<Stack.Navigator initialRouteName="Main" headerMode="none">
				<Stack.Screen name="Main" component={Main} />
				<Stack.Screen name="Cases" component={Cases} />
			</Stack.Navigator>
		)
	}

	function AdviceStack() {
		return (
			<Stack.Navigator intialRouteName="AdviceMain" headerMode="none">
				<Stack.Screen name="AdviceMain" component={Advice} />
				<Stack.Screen name="HowItSpreads" component={HowItSpreads} />
				<Stack.Screen name="Symptoms" component={Symptoms} />
				<Stack.Screen name="Prevention" component={Prevention} />
				<Stack.Screen name="WhatToDo" component={WhatToDo} />
			</Stack.Navigator>
		)
	}

	function NewsStack() {
		return (
			<Stack.Navigator initialRouteName="NewsMain" headerMode="none">
				<Stack.Screen name="NewsMain" component={News} />
				<Stack.Screen name="NewsDetails" component={NewsDetails} />
			</Stack.Navigator>
		)
	}

	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						let iconColor = focused ? textColor.alternate : 'gray';

						if (route.name === 'Stats') {
							return <Entypo name="line-graph" color={iconColor} size={size} />
						} else if (route.name === 'Advice') {
							return <SimpleLineIcon name="notebook" color={iconColor} size={size} />
						} else if (route.name === 'News') {
							return <Entypo name="newsletter" color={iconColor} size={size} />
						} else if (route.name === "Settings") {
							return <SimpleLineIcon name="settings" color={iconColor} size={size} />
						}
					},
				})}

				tabBarOptions={{
					activeTintColor: textColor.alternate,
					inactiveTintColor: 'gray',
					style: {
						backgroundColor: tabBarColor,
						borderTopColor: 'transparent',
						height: 80,
						elevation: 20,
						borderRadius: 20,
						paddingBottom: 20,
						padding: 20,
						position: 'absolute',
						left: '2.5%',
						bottom: 15,
						width: '95%',
						alignSelf: 'center'
						// borderTopRightRadius: 20,
						// borderTopLeftRadius: 20
					},
					tabStyle: {
					}
				}}
				initialRouteName="Stats"
				headerMode="none"
			>
				<Tab.Screen name="Stats" component={StatsStack} />
				<Tab.Screen name="Advice" component={AdviceStack} />
				<Tab.Screen name="News" component={NewsStack} />
				<Tab.Screen name="Settings" component={Settings} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}
