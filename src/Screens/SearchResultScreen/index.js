import { useNavigation, useRoute } from '@react-navigation/native';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import RouteMap from '../../Components/RouteMap';
import UberTypes from '../../Components/UberTypes';
import { createOrder } from '../../../graphql/mutations';

const SearchResultScreen = (props) => {

    const navigation = useNavigation();
    const typeState = useState(null);

    const route = useRoute();

    const { originPlace, destinationPlace } = route.params;

    const onSubmit = async () => {
        const [type] = typeState;
        if (!type) {
            return;
        }

        // submit to server


        try {
            const date = new Date();

            const userInfo = await Auth.currentAuthenticatedUser();
            console.log(userInfo);
            const input = {
                type,
                originLatitude: originPlace.details.geometry.location.lat,
                orginLongitude: originPlace.details.geometry.location.lng,
                destLatitude: destinationPlace.details.geometry.location.lat,
                destLongitude: destinationPlace.details.geometry.location.lng,
                userId: userInfo.attributes.sub,
                createdAt: date.toISOString()
            }

            const response = await API.graphql(
                graphqlOperation(
                    createOrder, {
                    input
                }
                )
            )
            console.log(response);
            Alert.alert(
                "Hurrary",
                "Your order successfully completed",
                [{
                    text:'Go home',
                    onPress:()=> navigation.navigate("Home")
                }]
            )
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <View style={{ justifyContent: 'flex-end' }}>
                <RouteMap origin={originPlace} destination={destinationPlace} />
                <View style={{ height: "40%", backgroundColor: 'white' }}>
                    <UberTypes typeState={typeState} onSubmit={onSubmit} />
                </View>
            </View>
        </>
    );
}

export default SearchResultScreen;
