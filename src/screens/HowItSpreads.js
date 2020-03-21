import React, { useRef, useContext } from 'react'
import { View, Text, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { theme } from '../context/Theme';
import { Container, BackBtn } from '../components';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;

export default function HowItSpreads(props) {

	const _carousel = useRef(null);

	const styles = {
		overlayContainer: {
			zIndex: 100,
			height: '30%',
			width: '100%',
			backgroundColor: '#00000090',
			position: 'absolute',
			bottom: 0,
			padding: 20,
			borderBottomLeftRadius: 20,
			borderBottomRightRadius: 20
		}
	}

	function HowItSpreadsCard(props) {
		return (
			<View style={{ alignItems: 'center', height: WINDOW_HEIGHT - 150, width: 330, alignSelf: 'center', }}>
				<Image
					source={props.backgroundImage}
					style={{ height: '70%', width: '100%', borderTopRightRadius: 20, borderTopLeftRadius: 20 }}
				/>
				<Image
					source={props.backgroundImage}
					style={{ height: '30%', width: '100%', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}
					blurRadius={50}
				/>
				<View style={styles.overlayContainer}>
					<Text style={{ fontSize: 18, color: 'white' }}>{props.title}</Text>
					<Text style={{ fontSize: 11, color: 'white' }}>{props.description}</Text>
					<View style={{ marginTop: 10 }}>
						{props.children}
					</View>
				</View>
			</View>
		)
	}

	function renderItem({ item, index }) {
		return (
			<HowItSpreadsCard
				backgroundImage={item.backgroundImage}
				title={item.title}
				description={item.description}
			>
				{/* {index == 0 &&
				} */}
				{item.child}
			</HowItSpreadsCard>
		)
	}
	return (
		<Container>
			<BackBtn onPress={() => props.navigation.goBack()} />
			<View style={{ marginTop: 20, }}>
				<Carousel
					ref={_carousel}
					data={[
						{
							backgroundImage: require('../res/background-1.jpg'),
							title: "Person-to-person spread", description: "The virus is thought to spread mainly from person-to-person", child: <>
								<View style={{ flexDirection: 'row' }}>
									<Text style={{ color: 'white', marginRight: 10 }}>*</Text>
									<Text style={{ fontSize: 11, color: 'white' }}>{"Between people who are in close contact with one another (within about 6 feet"}</Text>
								</View>
								<View style={{ flexDirection: 'row' }}>
									<Text style={{ color: 'white', marginRight: 10 }}>*</Text>
									<Text style={{ fontSize: 11, color: 'white' }}>{"Through respiratory droplets produced when an infected person coughs or sneezes."}</Text>
								</View>
							</>
						},
						{
							backgroundImage: require('../res/background-2.jpg'),
							title: 'Spread from contact with contaminated surfaces or objects',
							description: 'It may be possible that a person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes, but this is not thought to be the main way the virus spreads.'
						}]}
					renderItem={renderItem}
					sliderWidth={WINDOW_WIDTH}
					itemWidth={WINDOW_WIDTH}
					loop
					autoplay
					lockScrollWhileSnapping
					autoplayInterval={7000}
				/>
			</View>
		</Container>
	)
}