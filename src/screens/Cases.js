import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, KeyboardAvoidingView } from 'react-native';
import { SearchBar, Button, Icon } from 'react-native-elements';
import { Container, CasesCard } from '../components';
import MapView from 'react-native-maps';
import { textColor, base_url } from '../config';

export default function Cases(props) {

	const [search, setSearch] = useState("");
	const [data, setData] = useState([]);

	const [filteredData, setFilteredData] = useState([]);

	const [forceListRerender, setForceListRerender] = useState(false);

	function updateSearch(search) {
		setSearch(search);
	}

	//filter data
	useEffect(() => {
		let newData = data.filter((item) => {
			if (item) {
				return item.provinceState?.includes(search) || item.countryRegion?.includes(search);
			}
		})

		setFilteredData(newData, () => {
			setForceListRerender(!forceListRerender);
		})

	}, [search]);

	function renderItem({ item }) {
		return (
			<CasesCard case={item} type={props.route.params['case']} />
		)
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

	return (
		<>
			<Button
				icon={
					<Icon
						name="arrow-back"
						type="material"
						color={textColor.secondary}
					/>
				}
				containerStyle={{ position: 'absolute', top: 20, left: 20, zIndex: 100 }}
				buttonStyle={{ backgroundColor: '#00000090', padding: 12 }}
				onPress={() => props.navigation.goBack()}
			/>
			<Container>
				<KeyboardAvoidingView behavior="padding">
					<View style={styles.container}>
						<MapView
							style={styles.map}
							initialRegion={{
								latitude: 37.78825,
								longitude: -122.4324,
								latitudeDelta: 0.0922,
								longitudeDelta: 0.0421,
							}}
						/>
					</View>
					<View style={{ flex: 1, padding: 20 }}>
						<SearchBar
							placeholder="Type City or province region"
							onChangeText={updateSearch}
							value={search}
							containerStyle={styles.searchContainer}
							inputContainerStyle={{ backgroundColor: 'transparent' }}
							inputStyle={{ color: textColor.secondary }}
							placeholderTextColor={textColor.secondary}
							searchIcon={{ color: textColor.secondary }}
						/>
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

const styles = {
	container: {
		flex: 1,
		height: 280,
		width: '100%'
	},
	map: {
		position: 'absolute',
		top: 0,
		width: '100%',
		height: '100%'
	},
	searchContainer: {
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderRadius: 10,
		padding: 0,
		paddingHorizontal: 20,
		borderColor: textColor.secondary,
		borderBottomColor: textColor.secondary,
		borderTopColor: textColor.secondary
	}
}