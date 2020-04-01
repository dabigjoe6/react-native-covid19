import React, { useState, createContext, useEffect } from 'react';


const initialState = {
	country: "",
	countryCode: "",
	region: "",
	regionName: "",
	city: "",
}

export const location = createContext(initialState);

const { Provider } = location;

export default function LocationProvider(props) {

	const [locationContext, setLocationContext] = useState(initialState);

	useEffect(() => {
		fetchLocationFromIp();
	}, []);

	async function fetchLocationFromIp() {
		let response = await fetch('http://ip-api.com/json/');

		if (response.status == 200) {

			let result = await response.json();

			setLocationContext({
				country: result.country,
				countryCode: result.countryCode,
				region: result.region,
				regionName: result.regionName,
				city: result.city
			});
		}
	}

	return (
		<Provider value={{ locationContext }}>
			{props.children}
		</Provider>
	)
}