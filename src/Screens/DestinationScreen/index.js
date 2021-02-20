import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config from "../../../config"
import PlaceRow from './PlaceRow';
import styles from './style';

const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};


const DestinationScreen = () => {

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    useEffect(() => {
        if(originPlace && destinationPlace){
            return (
                console.warn('aman')
            )
        }
}, [originPlace, destinationPlace]);
return (
    <SafeAreaView>
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder='From'
                    onPress={(data, details = null) => {
                        setOriginPlace({ data, details });
                    }}
                    currentLocation={true}
                    currentLocationLabel='Current location'
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                        textInput: styles.textInput,
                        listView: styles.listView,
                        separator: styles.separator,
                    }}
                    query={{
                        key: `${config.GOOGLE_API_KEY}`,
                        language: 'en',
                    }}
                    renderRow={(data) => <PlaceRow data={data} />}
                />
                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        setDestinationPlace({ data, details });
                    }}
                    currentLocation={true}
                    enablePoweredByContainer={false}
                    suppressDefaultStyles
                    styles={{
                        textInput: styles.textInput,
                        separator: styles.separator,
                    }}
                    query={{
                        key: `${config.GOOGLE_API_KEY}`,
                        language: 'en',
                    }}
                    renderRow={(data) => <PlaceRow data={data} />}
                    renderDescription={(data) => data.description || data.vicinity}
                />
            </View>
        </View>
    </SafeAreaView>
);
}

export default DestinationScreen;
