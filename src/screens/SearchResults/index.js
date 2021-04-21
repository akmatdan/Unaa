import React from 'react';
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'

import styles from './styles'
import RouteMap from '../../components/RouteMap'
import UberTypes from '../../components/UberTypes'

const SearchResults = () => { 

  const route = useRoute();
  console.log(route.params)

  return (
    <View style={styles.container}>
    <RouteMap />
    <UberTypes />
    </View>
  );
}

export default SearchResults;