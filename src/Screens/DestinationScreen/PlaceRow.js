import React from 'react';
import { View, Text } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import styles from './style';

const PlaceRow = (data) => {

    return (
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                {data.data.description === 'Home'
                    ? <Entypo name='home' size={20} color={'white'} />
                    : <Entypo name='location-pin' size={20} color={'white'} />
                }
            </View>
            <Text style={styles.locationText}>{data.data.name} {data.data.name ? ',' : ''} {data.data.description || data.data.vicinity}</Text>
        </View>
    );
}

export default PlaceRow;
