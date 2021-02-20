import React from 'react';
import HomeMap from '../../Components/HomeMap';
import { View } from 'react-native';
import CovidMessage from '../../Components/CovidMessage';
import HomeSearch from '../../Components/HomeSearch';

const HomeScreen = () => {
    return (
        <>
            <View style={{ justifyContent: 'flex-end' }}>
                <HomeMap />
                <View>
                    <CovidMessage />
                    <HomeSearch />
                </View>
            </View>
        </>
    );
}

export default HomeScreen;
