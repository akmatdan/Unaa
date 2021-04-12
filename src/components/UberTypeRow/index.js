import React from 'react';
import {View, Image, Text } from 'react-native'
import styles from './styles'

import Ionicons from "react-native-vector-icons/Ionicons"

const UberTypeRow = (props) => {

  const {type} = props;

  const getImage = () => {
    if (type.type === 'UnaaX') {
      return require('../../assets/images/UnaaX.jpeg')
    }
    if (type.type === 'Comfort') {
      return require('../../assets/images/Comfort.jpeg')
    }
    return require('../../assets/images/UnaaXL.jpeg')
  }

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image 
        style={styles.image} 
        source={getImage()} 
      />

      {/* MiddleContainer */}
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type} {' '}
          <Ionicons name="person" size={16}/>
          3
        </Text>
        <Text style={styles.time}>
          08:03 PM drop off
        </Text>
      </View>

      {/* RightContainer */}
      <View style={styles.rightContainer}>
        <Ionicons name="pricetag" size={18} color={'#38b828'} />
        <Text style={styles.price}>
          est ${type.price} 
        </Text>
      </View>
    </View>
  );
}

export default UberTypeRow;