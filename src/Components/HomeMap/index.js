import React, { useEffect } from 'react';
import { Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import cars from "../../assets/data/cars";
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import Geolocation from 'react-native-geolocation-service';

function HomeMap() {
  const getImage = (props) => {
    if (props === 'UberX') {
      return require('../../assets/images/top-UberX.png')
    }
    if (props === 'Comfort') {
      return require('../../assets/images/top-Comfort.png')
    }
    return require('../../assets/images/top-UberXL.png')
  }

  useEffect(() => {
    const findlocation = async () => {
      await Geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
        }
      ),
        (error) => {
          console.log(error.code, error.message);
        }

    }
    findlocation();
  }, [])

  return (
    <MapView
      style={{ width: '100%', height: "100%" }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      showsMyLocationButton={true}
      followsUserLocation={true}
    >
      {
        cars.map((car) => (
          <Marker
            key={car.id}
            coordinate={{ latitude: car.latitude, longitude: car.longitude }}>
            <Image
              style={{
                width: 50,
                height: 50,
                resizeMode: 'contain',
                transform: [{
                  rotate: `${car.heading}deg`
                }]
              }}
              source={getImage(car.type)} />
          </Marker>
        ))
      }
    </MapView>
  );
}

export default HomeMap;
