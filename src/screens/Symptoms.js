import React from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { Container, SymptomCard, BackBtn } from '../components'

export default function Symptopms(props) {

	const styles = {
		warningContainer: {
			flexDirection: 'row',
			padding: 20,
			backgroundColor: '#FFD70020',
			margin: 10,
			borderRadius: 10
		}
	}
	return (
		<Container>
			<BackBtn onPress={() => props.navigation.goBack()} />
			<View style={{ alignItems: 'center', paddingTop: 50, paddingBottom: 100 }}>
				<SymptomCard source={require('../res/symptoms.png')} symptom="Fever" />
				<SymptomCard source={require('../res/symptoms-1.png')} symptom="Cough" />
				<SymptomCard source={require('../res/symptoms-2.png')} symptom="Shortness of breath" />

				<View style={styles.warningContainer}>
					<Icon
						name="warning"
						type="material"
						color="gold"
						containerStyle={{ marginRight: 20 }}
					/>
					<Text style={{ flex: 4, color: 'gold' }}>Seek medical advice if you develop
					symptoms, and have been in close
					contact with a person known to
					have COVID-19 or if you live in or
					have recently been in an area with
ongoing spread of COVID-19.</Text>
				</View>
			</View>
		</Container>
	)
}