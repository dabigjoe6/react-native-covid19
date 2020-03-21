import React from 'react'
import { View, Text, Image, Dimensions, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Container } from '../components';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;

export default function HowItSpreads() {

	const styles = {
		overlayContainer: {
			zIndex: 100,
			height: '40%',
			width: '100%',
			backgroundColor: '#00000090',
			position: 'absolute',
			bottom: 0,
			padding: 20
		}
	}
	return (
		<Container>
			<View style={{ alignItems: 'center', height: WINDOW_HEIGHT - 200, width: 280, alignSelf: 'center' }}>
				<Image
					source={require('../res/background.jpg')}
					style={{ height: '60%', width: '100%' }}
				/>
				<Image
					source={require('../res/background.jpg')}
					style={{ height: '40%', width: '100%' }}
					blurRadius={50}
				/>
				<View style={styles.overlayContainer}>
					<Text style={{ fontSize: 18, color: 'white' }}>Person-to-person spread</Text>
					<Text style={{ fontSize: 11, color: 'white' }}>The virus is thought to spread mainly from person-to-person</Text>
					<View style={{ marginTop: 10 }}>
						<View style={{ flexDirection: 'row' }}>
							<Text style={{ color: 'white', marginRight: 10 }}>*</Text>
							<Text style={{ fontSize: 11, color: 'white' }}>{"Between people who arer in close contact with one another (within about 6 feet"}</Text>
						</View>
						<View style={{ flexDirection: 'row' }}>
							<Text style={{ color: 'white', marginRight: 10 }}>*</Text>
							<Text style={{ fontSize: 11, color: 'white' }}>{"Through respiratory droplets produced when an infected person coughs or sneezes."}</Text>
						</View>
					</View>
				</View>
				{/* <ImageBackground
					source={require('../res/background.jpg')}
					blurRadius={100}
					style={{ backgroundColor: 'red', width: '100%', height: '50%' }}>

				</ImageBackground> */}
			</View>
		</Container>
	)
}