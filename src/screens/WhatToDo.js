import React, { useRef, useState } from 'react'
import { View, Text, Image, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { theme } from '../context/Theme';
import { Container, BackBtn, Bulletin } from '../components';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;

export default function WhatToDo(props) {

	const _carousel = useRef(null);

	const [activeSlide, setActiveSlide] = useState(0);

	const data = [
		{
			image: require('../res/symptoms-3.png'),
			title: "Stay home except to get medical care",
			points: [
				'Stay home: People who are mildly ill with COVID-19 are able to recover at home. Do not leave, except to get medical care. Do not visit public areas.',
				'Stay in touch with your doctor. Call before you get medical care. Be sure to get care if you feel worse or you think it is an emergency.',
				'Stay in touch with your doctor. Call before you get medical care. Be sure to get care if you feel worse or you think it is an emergency.'
			]
		},
		{
			image: require('../res/symptoms-4.png'),
			title: "Separate yourself from other people in your home, this is known as home isolation",
			points: [
				'Stay away from others: As much as possible, you should stay in a specific “sick room” and away from other people in your home. Use a separate bathroom, if available.',
				'Limit contact with pets & animals: You should restrict contact with pets and other animals, just like you would around other people.',
			]
		},
		{
			image: require('../res/symptoms-5.png'),
			title: "Call ahead before visiting your doctor",
			points: [
				'Call ahead: If you have a medical appointment, call your doctor’s office or emergency department, and tell them you have or may have COVID-19. This will help the office protect themselves and other patients.',
			]
		},
		{
			image: require('../res/symptoms-6.png'),
			title: "Wear a facemask if you are sick",
			points: [
				'If you are sick: You should wear a facemask when you are around other people and before you enter a healthcare provider’s office.',
				'If you are caring for others: If the person who is sick is not able to wear a facemask (for example, because it causes trouble breathing), then people who live in the home should stay in a different room. When caregivers enter the room of the sick person, they should wear a facemask. Visitors, other than caregivers, are not recommended.'
			]
		},
		{
			image: require('../res/symptoms-7.png'),
			title: "Cover your coughs and sneezes",
			points: [
				'Cover: Cover your mouth and nose with a tissue when you cough or sneeze.',
				'Dispose: Throw used tissues in a lined trash can.',
				'Wash hands: Immediately wash your hands with soap and water for at least 20 seconds. If soap and water are not available, clean your hands with an alcohol-based hand sanitizer that contains at least 60% alcohol.'
			]
		},
		{
			image: require('../res/symptoms-8.png'),
			title: "Clean your hands often",
			points: [
				'Wash hands: Wash your hands often with soap and water for at least 20 seconds. This is especially important after blowing your nose, coughing, or sneezing; going to the bathroom; and before eating or preparing food.',
				'Hand sanitizer: If soap and water are not available, use an alcohol-based hand sanitizer with at least 60% alcohol, covering all surfaces of your hands and rubbing them together until they feel dry.',
				'Soap and water: Soap and water are the best option, especially if hands are visibly dirty.',
				'Avoid touching: Avoid touching your eyes, nose, and mouth with unwashed hands.'
			]
		},
		{
			image: require('../res/symptoms-9.png'),
			title: "Avoid sharing personal household items",
			points: [
				'Do not share: Do not share dishes, drinking glasses, cups, eating utensils, towels, or bedding with other people in your home.',
				'Wash thoroughly after use: After using these items, wash them thoroughly with soap and water or put in the dishwasher.',
			]
		},
		{
			image: require('../res/symptoms-10.png'),
			title: "Clean all “high-touch” surfaces everyday",
			points: [
				'Clean and disinfect: Routinely clean high-touch surfaces in your “sick room” and bathroom. Let someone else clean and disinfect surfaces in common areas, but not your bedroom and bathroom.',
				'Clean and disinfect areas that may have blood, stool, or body fluids on them.',
				'Household cleaners and disinfectants: Clean the area or item with soap and water or another detergent if it is dirty. Then, use a household disinfectant.'
			]
		},
		{
			image: require('../res/symptoms-11.png'),
			title: "Monitor your symptoms",
			points: [
				'Seek medical attention, but call first: Seek medical care right away if your illness is worsening (for example, if you have difficulty breathing).',
				'Wear a facemask: If possible, put on a facemask before you enter the building. If you can’t put on a facemask, try to keep a safe distance from other people (at least 6 feet away). This will help protect the people in the office or waiting room.',
				'Follow care instructions from your healthcare provider and local health department: Your local health authorities will give instructions on checking your symptoms and reporting information.'
			]
		}
	]

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

	function pagination() {
		return (
			<Pagination
				dotsLength={data.length}
				activeDotIndex={activeSlide}
				containerStyle={{ backgroundColor: 'transparent' }}
				dotStyle={{
					width: 5,
					height: 5,
					borderRadius: 5,
					marginHorizontal: 4,
					backgroundColor: 'rgba(255, 255, 255, 0.92)'
				}}
				inactiveDotStyle={{
					// Define styles for inactive dots here
				}}
				inactiveDotOpacity={0.4}
				inactiveDotScale={0.6}
			/>
		);
	}

	function WhatToDoCard(props) {
		return (
			<View style={{ alignItems: 'center', paddingHorizontal: 30 }}>
				<Image source={props.image} style={{ height: 150, width: 150 }} />
				<Text style={{ fontSize: 22, fontWeight: 'bold', marginVertical: 20, color: 'white', textAlign: 'center' }}>{props.title}</Text>
				<View>
					{props.points.map(item => {
						return (
							<Bulletin title={item} />
						)
					})}
				</View>
			</View>
		)
	}

	function renderItem({ item, index }) {
		return (
			<WhatToDoCard
				image={item.image}
				title={item.title}
				points={item.points}
			>
				{/* {index == 0 &&
				} */}
				{item.child}
			</WhatToDoCard>
		)
	}
	return (
		<Container>
			<BackBtn onPress={() => props.navigation.goBack()} />
			<View style={{ marginTop: 15, }}>
				{pagination()}

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
					onSnapToItem={(index) => setActiveSlide(index)}
				/>
			</View>
		</Container>
	)
}