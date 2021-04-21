import React from 'react';
import { View, Text, Pressable } from 'react-native'
import styles from './styles'
import UberTypesRow from '../UberTypeRow'
import typesData from '../../assets/data/types'

const UberTypes = () => {

  const confirm = () => {
    console.warn('confirm')
  }

  return (
    <View>
      {typesData.map((type) => ( 
        <UberTypesRow type={type} key={type.id}/>
      ))}
      
      <Pressable onPress={confirm} style={styles.button}>
        <Text style={styles.text}>Confirm Unaa</Text>
      </Pressable>
    </View>
  );
}

export default UberTypes;