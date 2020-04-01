import React, { useContext } from 'react';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import { Container, BackBtn } from '../components';
import { theme } from '../context/Theme';

export default function NewsDetails(props) {

	const WINDOW_WIDTH = Dimensions.get('window').width;

	const activeTheme = useContext(theme).globalTheme;

	let news = props.route.params.news;
	let imageUrl = "http://www.traumasoft.com/wp-content/uploads/2018/09/main-news-and-events-banner.jpg"

	const styles = {
		wrapper: {
			flex: 1,
			padding: 5,
			paddingBottom: 200
		},
		image: {
			height: 200,
			width: WINDOW_WIDTH
		},
		textContainer: {
			alignItems: 'center',
			padding: 15
		},
		title: {
			color: activeTheme.textColor.normal,
			fontSize: 20,
			fontWeight: 'bold',
			marginBottom: 10
		},
		content: {
			color: activeTheme.textColor.normal,
			fontSize: 14,
			lineHeight: 25
		},
		footer: {
			color: activeTheme.textColor.normal,
			fontSize: 11
		}
	}

	return (
		<Container>
			<BackBtn onPress={() => props.navigation.goBack()} />
			<ScrollView contentContainerStyle={{ alignItems: 'center' }} style={styles.wrapper}>
				<Image source={{ uri: news.urlToImage || imageUrl }} style={styles.image} />
				<View style={styles.textContainer}>
					<Text style={styles.title}>{news.title}</Text>
					<Text style={styles.content}>{news.content}</Text>
					<Text>{news.author}</Text>
					<View style={{ alignSelf: 'flex-end', marginTop: 20 }}>
						<Text style={styles.footer}>{`Source: ${news.source.name}`}</Text>
						<Text style={styles.footer}>{`Published: ${(new Date(news.publishedAt)).toDateString()}`}</Text>
					</View>
				</View>
			</ScrollView>

		</Container>
	)
}