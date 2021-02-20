import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

const CovidMessage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if necessary</Text>
            <Text style={styles.text}>
                Up until verion 1.0.0 all the JavaScript snippets
                where part of the extension.
                </Text>
            <View style={styles.flex}>
                <Text style={styles.rideNow}>Ride Now</Text>
                <Icon
                    name="location-arrow"
                    size={25}
                    color={"white"}
                >
                </Icon>
            </View>
        </View>
    );
}

export default CovidMessage;
