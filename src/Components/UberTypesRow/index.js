import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons'

const UberTypesRow = (props) => {
    const { type, onPress, isSelected } = props;


    const getImage = () => {
        if (type.type === 'UberX') {
            return require('../../assets/images/UberX.jpeg')
        }
        if (type.type === 'Comfort') {
            return require('../../assets/images/Comfort.jpeg')
        }
        return require('../../assets/images/UberXL.jpeg')
    }
    return (
        <Pressable
            onPress={onPress}
            style={[styles.container, { backgroundColor: isSelected ? '#efefef' : 'white' }]}>
            <Image style={styles.image} source={getImage()} />
            <View style={styles.middlecontainer}>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    <Text style={styles.type}>
                        {type.type}{' '}
                        <Ionicons name={'person'} size={12} />
                    </Text>
                    <Text style={{ color: '#999' }}>
                        {' '}3
                    </Text>
                </View>
                <Text style={styles.time}>8:03pm dropoff</Text>
            </View>
            <View style={styles.rightcontainer}>
                <Text style={styles.price}>est. $ {type.price}</Text>
            </View>
        </Pressable>

    );
}

export default UberTypesRow;
