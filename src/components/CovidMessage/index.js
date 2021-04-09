import React from 'react';
import { View, Text, } from 'react-native'

import styles from './styles'

const CovidMessage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style={styles.text}>Discover interesting projects and people to populate your personal news feed.</Text>
            <Text style={styles.learnMore}>Learn more</Text>
        </View>
    );
}

export default CovidMessage;