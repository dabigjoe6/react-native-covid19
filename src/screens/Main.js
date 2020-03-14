import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { SummaryText } from '../components';

export default function Main() {
	return (
		<>
			<StatusBar backgroundColor="#1A2A1E" />
			<View style={{ backgroundColor: "#1A2A1E", flex: 1, }}>
				<View style={{ margin: 20 }}>
					<Image source={{ uri: 'https://via.placeholder.com/50x100' }} style={{ height: 50, width: 100, }} />
				</View>
				<View style={{ height: 300, width: '92%', backgroundColor: '#5C996B', alignSelf: 'center', borderRadius: 7, elevation: 5, flexDirection: 'row', alignItems: 'center', padding: 20 }}>
					<View>
						<SummaryText text="102,170" subText="Confirmed" />
						<SummaryText text="57,376" subText="Recovered" />
						<SummaryText text="3,491" subText="Deaths" />
					</View>
					<View>
						{/* chart */}
					</View>
				</View>
			</View>
		</>
	)
}