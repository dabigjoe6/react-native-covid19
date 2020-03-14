import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Container, CasesCard } from '../components';
import MapView from 'react-native-maps';
import { textColor } from '../config';

export default function Cases() {

	const [search, setSearch] = useState("");
	const [date, setData] = useState();

	function updateSearch(search) {
		setSearch(search);
		//filter data;
	}

	function renderItem({ item }) {
		return (
			<CasesCard />
		)
	}

	return (
		<Container>
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
					data={[0, 1, 2, 3]}
					renderItem={renderItem}
				/>
			</View>
		</Container>
	)
}

const styles = {
	container: {
		flex: 1,
		height: 350,
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