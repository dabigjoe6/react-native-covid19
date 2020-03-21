import React, { useState, useEffect, useRef, useContext } from 'react';
import { View, Text, FlatList, KeyboardAvoidingView } from 'react-native';
import { SearchBar, Button, Icon } from 'react-native-elements';
import { Container, CasesCard } from '../components';
import MapView, { AnimatedRegion, Animated, Marker } from 'react-native-maps';
import { theme } from '../context/Theme';
import { textColor, base_url } from '../config';

export default function Cases(props) {

	const activeTheme = useContext(theme).globalTheme;
	const darkTheme = useContext(theme).darkTheme;

	const styles = {
		container: {
			height: 250,
			width: '100%',
			position: 'relative',
			top: 0,
			zIndex: 10,
		},
		map: {
			position: 'absolute',
			top: 0,
			width: '100%',
			height: '100%'
		},
		searchContainer: {
			zIndex: 90,
			backgroundColor: activeTheme.darkTheme ? '#00000070' : '#ffffff70',
			width: '78%',
			position: 'absolute',
			right: 10,
			top: 20,
			// backgroundColor: 'transparent',
			borderWidth: 0,
			borderTopWidth: 0,
			borderBottomWidth: 0,
			borderRadius: 10,
			padding: 0,
			paddingHorizontal: 20,
			borderColor: activeTheme.textColor.secondary,
			borderBottomColor: activeTheme.textColor.secondary,
			borderTopColor: activeTheme.textColor.secondary
		}
	}


	const mapView = useRef(null);
	const [search, setSearch] = useState("");
	const [data, setData] = useState([]);

	const [filteredData, setFilteredData] = useState([]);

	const [forceListRerender, setForceListRerender] = useState(false);

	const [currentLatitude, setCurrentLatitude] = useState(35.8617);
	const [currentLongitude, setCurrentLongitude] = useState(104.1954);

	function updateSearch(search) {
		setSearch(search);
	}

	useEffect(() => {
		console.log(currentLatitude);
		console.log(currentLongitude);
	}, [currentLatitude, currentLongitude]);

	//filter data
	useEffect(() => {
		let newData;

		if (search.length > 0) {
			newData = data.filter((item) => {
				if (item) {
					return item.provinceState?.includes(search) || item.countryRegion?.includes(search);
				}
			})

		} else {
			console.log("new Data")
			newData = data;
		}

		setFilteredData(newData);

	}, [search, data]);

	useEffect(() => {
		setForceListRerender(!forceListRerender);
	}, [filteredData])

	function renderItem({ item }) {
		return (
			<CasesCard case={item} type={props.route.params['case']} onPress={() => setMapLocation(item.lat, item.long)} />
		)
	}

	function setMapLocation(latitude, longitude) {
		setCurrentLatitude(latitude);
		setCurrentLongitude(longitude);

		mapView.current.animateCamera({
			center: {
				latitude: currentLatitude,
				longitude: currentLongitude,
			},
			pitch: 1,
			heading: 0,
			zoom: 3
		})
	}

	useEffect(() => {
		getCases();
	}, [])

	async function getCases() {
		let caseType = props.route.params['case'];
		let response = await fetch(base_url + '/' + caseType.toLowerCase());

		if (response.status == 200) {
			let result = await response.json();

			setData(result, () => {
				setForceListRerender(!forceListRerender);
			});
		}
	}

	let markerColor;
	switch (props.route.params['case']) {
		case 'Confirmed':
			markerColor = activeTheme.textColor.confirmed;
			break;
		case 'Recovered':
			markerColor = activeTheme.textColor.recovered;
			break;
		case 'Deaths':
			markerColor = activeTheme.textColor.deaths;
	}
	return (
		<>
			<Button
				icon={
					<Icon
						name="arrow-back"
						type="material"
						color={activeTheme.textColor.secondary}
					/>
				}
				containerStyle={{ position: 'absolute', top: 20, left: 20, zIndex: 100 }}
				buttonStyle={{ backgroundColor: activeTheme.darkTheme ? '#00000070' : '#ffffff70', padding: 12 }}
				onPress={() => props.navigation.goBack()}
			/>
			<View style={styles.container}>
				<MapView
					ref={mapView}
					style={styles.map}
					initialCamera={{
						center: {
							latitude: 35.8617,
							longitude: 104.1954,
						},
						pitch: 1,
						heading: 0,
						zoom: 1
					}}
				>
					{data.map((item) => {
						return (
							<Marker
								coordinate={{
									longitude: item.long,
									latitude: item.lat
								}}
								pinColor={markerColor}
							/>)
					})}
				</MapView>
				{/* <View style={{}}> */}
				<SearchBar
					placeholder="Type City or province region"
					onChangeText={updateSearch}
					value={search}
					containerStyle={styles.searchContainer}
					inputContainerStyle={{ backgroundColor: 'transparent' }}
					inputStyle={{ color: activeTheme.textColor.secondary }}
					placeholderTextColor={activeTheme.textColor.secondary}
					searchIcon={{ color: activeTheme.textColor.secondary }}
				/>
				{/* </View> */}
			</View>
			<Container>
				<KeyboardAvoidingView>

					<View style={{ flex: 1, padding: 10 }}>
						<FlatList
							data={filteredData}
							renderItem={renderItem}
							extraData={forceListRerender}
						/>
					</View>
				</KeyboardAvoidingView>
			</Container>


		</>
	)
}