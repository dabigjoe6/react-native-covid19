import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { theme } from '../context/Theme';
import { Button, Icon } from 'react-native-elements';

export default function BackBtn(props) {

	const activeTheme = useContext(theme).globalTheme;

	return (
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
			onPress={props.onPress}
		/>
	)
}