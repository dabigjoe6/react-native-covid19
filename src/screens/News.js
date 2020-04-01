import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, ImageBackground, Dimensions } from 'react-native';
import { Container } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function News(props) {

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
		overlay: {
			position: 'absolute',
			top: 0,
			right: 0,
			backgroundColor: '#00000029',
			width: '100%',
			height: '100%',
			borderRadius: 10
		},
		featuredTextContainer: {
			justifyContent: 'center',
			padding: 10,
			backgroundColor: '#00000090',
			borderBottomRightRadius: 10,
			borderBottomLeftRadius: 10
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
	}

	function renderItem({ item, index }) {
		let imageUrl = "";
		if (item.urlToImage) {
			imageUrl = item.urlToImage
		} else {
			imageUrl = "http://www.traumasoft.com/wp-content/uploads/2018/09/main-news-and-events-banner.jpg"
		}
		console.log("SOURCE", item.urlToImage);
		if (index === 0) {
			return (
				<TouchableOpacity activeOpacity={0.8} onPress={() => { props.navigation.navigate("NewsDetails", { news: item }) }}>
					<ImageBackground source={{ uri: imageUrl }} style={{ justifyContent: 'flex-end', height: 300, width: WINDOW_WIDTH - 40, marginVertical: 10 }} imageStyle={{ borderRadius: 10 }}>
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
				</TouchableOpacity>
			)
		} else {
			return (
				<TouchableOpacity activeOpacity={0.8} onPress={() => { props.navigation.navigate("NewsDetails", { news: item }) }}>
					<View style={styles.itemContainer}>
						<View style={styles.itemTextContainer}>
							<Text style={styles.title}>{item.title}</Text>
							<View style={styles.itemFooter}>
								<Text style={styles.source}>{item.source.name}</Text>
								<Text style={styles.date}>{(new Date(item.publishedAt)).toDateString()}</Text>
							</View>
						</View>
						<View style={styles.imageContainer}>
							<Image source={{ uri: imageUrl }} style={{ height: 100, width: 100, borderRadius: 10 }} />
						</View>
					</View>
				</TouchableOpacity>
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