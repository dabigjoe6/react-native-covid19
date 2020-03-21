import React, { useState, createContext } from 'react';


const initialState = {
	darkTheme: true,
	backgroundColor: "#171717",
	primaryColor: "#2B303A",
	tabBarColor: "#2C2C2C",
	textColor: {
		confirmed: "#F2B900",
		recovered: "#00CC99",
		deaths: "tomato",
		secondary: '#D1D1D1',
		alternate: '#1446A0',
		normal: 'white'
	}
}

export const theme = createContext(initialState);

const { Provider } = theme;

export default function ThemeProvider(props) {

	const [darkTheme, setDarkTheme] = useState(true);
	const [globalTheme, updateGlobalTheme] = useState(initialState);

	function toggleTheme() {
		setDarkTheme(!darkTheme);

		updateGlobalTheme({
			darkTheme: darkTheme,
			backgroundColor: darkTheme ? "#171717" : '#E3F2FD',
			primaryColor: darkTheme ? "#2B303A" : '#E8F4FD',
			tabBarColor: darkTheme ? "#2C2C2C" : '#FFFFFF',
			textColor: {
				confirmed: "#F2B900",
				recovered: "#00CC99",
				deaths: "tomato",
				secondary: darkTheme ? '#D1D1D1' : '#454545',
				alternate: darkTheme ? '#1446A0' : '#6989C2',
				normal: darkTheme ? 'white' : 'black'
			}
		})
	}

	return (
		<Provider value={{ darkTheme, globalTheme, toggleTheme }}>
			{props.children}
		</Provider>
	)
}