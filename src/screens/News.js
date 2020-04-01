import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, ImageBackground, Dimensions } from 'react-native';
import { Container } from '../components';

export default function News() {

	const [news, setNews] = useState([]);

	const [forceListRender, setForceListRender] = useState(false);

	const WINDOW_WIDTH = Dimensions.get('window').width;

	useEffect(() => {
		fetchNews();
	}, []);

	useEffect(() => {
		console.log("News updated", news);
		setForceListRender(!forceListRender);
	}, [news]);

	async function fetchNews() {
		let response = await fetch('https://newsapi.org/v2/top-headlines?q=COVID&sortBy=publishedAt&apiKey=fc45533b832c4702b9a43713d12dc410&country=ng');

		if (response.status === 200) {
			let result = await response.json();

			setNews(result.articles);
		}
	}

	const styles = {
		featuredContainer: {
			justifyContent: 'flex-end',
			height: 300,
			width: WINDOW_WIDTH - 40
		},
		overlay: {
			position: 'absolute',
			top: 0,
			right: 0,
			backgroundColor: '#00000029',
			width: '100%',
			height: '100%',
			borderRadius: 20
		},
		featuredTextContainer: {
			justifyContent: 'center',
			padding: 20,
			backgroundColor: '#00000090',
			borderBottomRightRadius: 20,
			borderBottomLeftRadius: 20
		},
		title: {
			fontSize: 17,
			fontWeight: 'bold', color: 'white'
		},
		description: {
			fontSize: 14,
			color: 'white'
		},
		featuredFooter: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			marginTop: 15
		},
		source: {
			fontSize: 11,
			color: 'white'
		},
		date: {
			fontSize: 11,
			color: 'white'
		},
		itemContainer: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			height: 130,
			width: WINDOW_WIDTH - 40
		},
		itemTextContainer: {
			justifyContent: 'center',
			flex: 2,
			marginRight: 10
		},
		itemFooter: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between'
		},
		imageContainer: {
			justifyContent: 'center',
			alignItems: 'center',
			flex: 1
		},
		image: {
			height: 100,
			width: 100,
			borderRadius: 20
		}
	}

	function renderItem({ item, index }) {
		if (index === 0) {
			return (
				<ImageBackground source={{ uri: item.urlToImage }} style={styles.featuredContainer} imageStyle={{ borderRadius: 20 }}>
					<View style={styles.overlay} />
					<View style={styles.featuredTextContainer}>
						<Text style={styles.title}>{item.title}</Text>
						<Text style={styles.description} numberOfLines={2}>{item.description}</Text>
						<View style={styles.featuredFooter}>
							<Text style={styles.source}>{item.source.name}</Text>
							<Text style={styles.date}>{(new Date(item.publishedAt)).toDateString()}</Text>
						</View>
					</View>
				</ImageBackground>
			)
		} else {
			return (
				<View style={styles.itemContainer}>
					<View style={styles.itemTextContainer}>
						<Text style={styles.title}>{item.title}</Text>
						<View style={styles.itemFooter}>
							<Text style={styles.source}>{item.source.name}</Text>
							<Text style={styles.date}>{(new Date(item.publishedAt)).toDateString()}</Text>
						</View>
					</View>
					<View style={styles.imageContainer}>
						<Image source={{ uri: item.urlToImage }} style={styles.image} />
					</View>
				</View>
			)
		}

	}
	return (
		<Container>
			<View>
				<FlatList
					data={news}
					extraData={forceListRender}
					renderItem={renderItem}
					contentContainerStyle={{ alignItems: 'center', }}
				/>
			</View>
		</Container>
	)
}