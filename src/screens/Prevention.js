import React, { useRef, useContext } from 'react'
import { View, Text, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { theme } from '../context/Theme';
import { Container, BackBtn, Bulletin } from '../components';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;

export default function Prevention(props) {

	const _carousel = useRef(null);

	const data = [
		{
			backgroundImage: require('../res/background.jpg'),
			title: "Clean your hands often", child: <>
				<Bulletin title="Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing." />
				<Bulletin title="If soap and water are not readily available, use a hand sanitizer that contains at least 60% alcohol. Cover all surfaces of your hands and rub them together until they feel dry." />
				<Bulletin title="Avoid touching your eyes, nose, and mouth with unwashed hands." />
			</>
		},
		{
			backgroundImage: require('../res/background-3.jpg'),
			title: 'Avoid close contact',
			child: <>
				<Bulletin title="Avoid close contact with people who are sick" />
				<Bulletin title="Put distance between yourself and other people if COVID-19 is spreading in your community. This is especially important for people who are at higher risk of getting very sick." />
			</>
		}]

	const styles = {
		overlayContainer: {
			zIndex: 100,
			height: '50%',
			width: '100%',
			backgroundColor: '#00000090',
			position: 'absolute',
			bottom: 0,
			padding: 20,
			paddingRight: 30,
			borderBottomLeftRadius: 20,
			borderBottomRightRadius: 20
		}
	}

	function PreventionCard(props) {
		return (
			<View style={{ alignItems: 'center', height: WINDOW_HEIGHT - 150, width: 330, alignSelf: 'center', }}>
				<Image
					source={props.backgroundImage}
					style={{ height: '50%', width: '100%', borderTopRightRadius: 20, borderTopLeftRadius: 20 }}
				/>
				<Image
					source={props.backgroundImage}
					style={{ height: '50%', width: '100%', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}
					blurRadius={50}
				/>
				<View style={styles.overlayContainer}>
					<Text style={{ fontSize: 18, color: 'white' }}>{props.title}</Text>
					<View style={{ marginTop: 10 }}>
						{props.children}
					</View>
				</View>
			</View>
		)
	}

	function renderItem({ item, index }) {
		return (
			<PreventionCard
				backgroundImage={item.backgroundImage}
				title={item.title}
				description={item.description}
			>
				{/* {index == 0 &&
				} */}
				{item.child}
			</PreventionCard>
		)
	}
	return (
		<Container>
			<BackBtn onPress={() => props.navigation.goBack()} />
			<View style={{ marginTop: 20, }}>
				<Carousel
					ref={_carousel}
					data={data}
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