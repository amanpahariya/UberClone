import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import DestinationSearch from '../Screens/DestinationScreen';
import SearchResultScreen from '../Screens/SearchResultScreen'


const Stack = createStackNavigator();

const HomeNavigation = () => {


    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
                <Stack.Screen name="SearchResultScreen" component={SearchResultScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default HomeNavigation;
