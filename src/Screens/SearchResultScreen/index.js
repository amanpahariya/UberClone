import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import RouteMap from '../../Components/RouteMap';
import UberTypes from '../../Components/UberTypes';

const SearchResultScreen = (props) => {
    const route = useRoute();

    const { originPlace, destinationPlace } = route.params
    return (
        <>
            <View style={{ justifyContent: 'flex-end' }}>
                <RouteMap origin={originPlace} destination={destinationPlace} />
                <View style={{ height: "40%", backgroundColor: 'white' }}>
                    <UberTypes />
                </View>
            </View>
        </>
    );
}

export default SearchResultScreen;
