import React, { useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import config from '../../../config';
import MapViewDirections from 'react-native-maps-directions';

function RouteMap({ origin, destination }) {
  

  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng
  };
  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng
  };


  return (
    <MapView
      style={{ width: '100%', height: "100%" }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 25.6586282,
        longitude: 78.456893,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      }}>
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={`${config.GOOGLE_API_KEY}`}
        strokeWidth={5}
        strokeColor="black"
      />
      <Marker
        coordinate={originLoc}
        title={'Origin'}
      />
      <Marker
        coordinate={destinationLoc}
        title={'Destination'}
      />
    </MapView>
  );
}

export default RouteMap;
