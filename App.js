import React from 'react';
import ThemeProvider from './src/context/Theme';
import LocationProvider from './src/context/Location';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
	return (
		<LocationProvider>
			<ThemeProvider>
				<RootNavigator />
			</ThemeProvider>
		</LocationProvider>
	)
}