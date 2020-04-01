import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Container, AdviceCard } from '../components';
import { theme } from '../context/Theme';

export default function Advice(props) {

	const activeTheme = useContext(theme).globalTheme;

	return (
		<Container>
			<View style={{ padding: 20, paddingBottom: 100 }}>
				<Text style={{ fontSize: 30, color: activeTheme.textColor.alternate, marginBottom: 30 }}>Information Center</Text>

				<AdviceCard
					onPress={() => props.navigation.navigate("HowItSpreads")}
					icon={
						<Icon name="bug" type="entypo" color="purple" />
					}
					title="How it spreads"
					description="Learn how Covid-19 spreads"
				/>
				<AdviceCard
					onPress={() => props.navigation.navigate("Symptoms")}
					icon={
						<Icon name="air" type="entypo" color="orange" />
					}
					title="Symptoms"
					description="Symptoms of Covid-19"
				/>
				<AdviceCard
					onPress={() => props.navigation.navigate("Prevention")}
					icon={
						<Icon name="first-aid" type="foundation" color="#FF8080" />
					}
					title="Prevention and treatment"
					description="Steps taken to prevent Covid-19"
				/>
				<AdviceCard
					onPress={() => props.navigation.navigate("WhatToDo")}
					icon={
						<Icon name="question" type="foundation" color="gold" />
					}
					title="What to do"
					description="What to do if you get the virus"
				/>
			</View>
		</Container>
	)
}