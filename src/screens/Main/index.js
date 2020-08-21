import * as Animatable from 'react-native-animatable';

import {Container, CountryCard, DailyCard} from '../../components';
import {FlatList, Text, View} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';

import {PieChart} from 'react-native-chart-kit';
import {SummaryText} from './components';
import {base_url} from '../../config';
import {location} from '../../context/Location';
import {styles} from './styles';
import {theme} from '../../context/Theme';

export default function Main(props) {
  const CustomPieChart = Animatable.createAnimatableComponent(PieChart);

  const activeTheme = useContext(theme).globalTheme;
  const currentLocation = useContext(location).locationContext;

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  const [cases, setCases] = useState({
    Confirmed: 0,
    Recovered: 0,
    Deaths: 0,
  });

  const [dailyUpdate, setDailyUpdate] = useState([]);

  const [lastUpdated, setLastUpdated] = useState('');
  const [confirmed, setConfirmed] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [recovered, setRecovered] = useState(0);

  const [forceListRerender, setForceListRerender] = useState(false);

  useEffect(() => {
    fetchCases();
    fetchDaily();
    fetchLocationData();
  }, [fetchCases, fetchDaily, fetchLocationData]);

  const fetchLocationData = useCallback(async () => {
    // console.log('Country name', currentLocation.country);
    let response = await fetch(
      base_url + '/countries/' + currentLocation.country,
    );

    // console.log('COUNTRY', currentLocation.country);

    if (response.status === 200) {
      let result = await response.json();

      setLastUpdated(result.lastUpdate);
      setConfirmed(result.confirmed.value);
      setDeaths(result.deaths.value);
      setRecovered(result.recovered.value);
    }
  }, [currentLocation.country]);

  const fetchDaily = useCallback(async () => {
    let response = await fetch(base_url + '/daily');

    if (response.status === 200) {
      let result = await response.json();

      setDailyUpdate(result, () => {
        setForceListRerender(!forceListRerender);
      });
    }
  }, [forceListRerender]);

  const fetchCases = useCallback(async () => {
    let response = await fetch(base_url);

    if (response.status === 200) {
      let result = await response.json();

      setCases({
        Confirmed: result.confirmed.value,
        Recovered: result.recovered.value,
        Deaths: result.deaths.value,
      });
    }
  }, []);

  const data = [
    {
      name: 'Confirmed',
      population: cases.Confirmed ? cases.Confirmed : 0,
      color: activeTheme.textColor.confirmed,
    },
    {
      name: 'Recovered',
      population: cases.Recovered ? cases.Recovered : 0,
      color: activeTheme.textColor.recovered,
    },
    {
      name: 'Deaths',
      population: cases.Deaths ? cases.Deaths : 0,
      color: activeTheme.textColor.deaths,
    },
  ];

  function renderItem({item}) {
    return <DailyCard case={item} />;
  }

  return (
    <Container>
      <View
        style={{
          ...styles.summaryCard,
          backgroundColor: activeTheme.primaryColor,
        }}>
        <View>
          <SummaryText
            text={cases.Confirmed}
            subText="Confirmed"
            onPress={() =>
              props.navigation.navigate('Cases', {case: 'Confirmed'})
            }
          />
          <SummaryText
            text={cases.Recovered}
            subText="Recovered"
            onPress={() =>
              props.navigation.navigate('Cases', {case: 'Recovered'})
            }
          />
          <SummaryText
            text={cases.Deaths}
            subText="Deaths"
            onPress={() => props.navigation.navigate('Cases', {case: 'Deaths'})}
          />
        </View>
        <View>
          <CustomPieChart
            data={data}
            width={300}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            hasLegend={false}
          />
        </View>
      </View>
      <View style={styles.countryCardWrapper}>
        <CountryCard
          country={currentLocation.country}
          lastUpdated={lastUpdated}
          confirmed={confirmed}
          deaths={deaths}
          recovered={recovered}
        />

        <Text
          style={{
            ...styles.dailyUpdatesText,
            color: activeTheme.textColor.alternate,
          }}>
          Recent Updates
        </Text>

        <FlatList
          data={dailyUpdate.reverse().slice(0, 3)}
          renderItem={renderItem}
          contentContainerStyle={styles.recentUpdateList}
          extraData={forceListRerender}
          inverted
        />
      </View>
    </Container>
  );
}
