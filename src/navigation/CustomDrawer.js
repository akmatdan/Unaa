import React from 'react';
import { View, Text, Pressable, } from 'react-native'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'

import styles from './styles'

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>

        {/* User row */}
        <View style={styles.userContainer}>
          <View style={styles.image}>
          </View>

          <View>
            <Text style={styles.name}>Dan Akmat</Text>
            <Text style={styles.star}>5.00 *</Text>
          </View>
        </View>

        {/* Messages row */}
        <View style={styles.messagesView}>
          <Pressable onPress={() => {console.warn('Messages')}}>
            <Text style={styles.messages}>Messages</Text>
          </Pressable>
        </View>

        {/* Do more */}
        <Pressable onPress={() => {console.warn('Do more with your account')}}>
          <Text style={styles.do}>Do more with your account</Text>
        </Pressable>

        {/* Make money */}
        <Pressable onPress={() => {console.warn('Make money driving')}}>
          <Text style={styles.make}>Make money driving</Text>
        </Pressable>

      </View>
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  );
}

export default CustomDrawer;