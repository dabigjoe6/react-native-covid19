import React, {useContext} from 'react';
import {Text, View} from 'react-native';

import AnimateNumber from 'react-native-animate-number';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles';
import {theme} from '../../../../context/Theme';

export default function SummaryText(props) {
  const activeTheme = useContext(theme).globalTheme;

  let subTextColor;

  switch (props.subText) {
    case 'Confirmed':
      subTextColor = activeTheme.textColor.confirmed;
      break;
    case 'Recovered':
      subTextColor = activeTheme.textColor.recovered;
      break;
    case 'Deaths':
      subTextColor = activeTheme.textColor.deaths;
      break;
    default:
      subTextColor = activeTheme.textColor.confirmed;
      break;
  }

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: activeTheme.backgroundColor,
      }}>
      <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
        <AnimateNumber
          style={{...styles.text, color: activeTheme.textColor.normal}}
          value={props.text}
          formatter={val => {
            return parseFloat(val).toFixed(0);
          }}
        />
        <Text style={[styles.subText, {color: subTextColor}]}>
          {props.subText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
