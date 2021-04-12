import React from 'react';
import { View, Text } from 'react-native'
import styles from './styles'
import RouteMap from '../../components/RouteMap'
import UberTypes from '../../components/UberTypes'

const SearchResults = () => {
  return (
    <View>
    <RouteMap />
    <UberTypes />
    </View>
  );
}

export default SearchResults;