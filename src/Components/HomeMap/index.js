import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { API, graphqlOperation } from 'aws-amplify';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { listCars } from '../../../graphql/queries';

function HomeMap() {

  const [cars, setCars] = useState([]);


  useEffect(() => {
    const fetchcars = async () => {
      try {
        const response = await API.graphql(
          graphqlOperation(
            listCars
          )
        )
        setCars(response.data.listCars.items)
      } catch (e) {
        console.error(e);
      }
    }
    fetchcars();
  }, []);

  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0222,
    longitudeDelta: 0.0121,
  })

  const getImage = (props) => {
    if (props === 'UberX') {
      return require('../../assets/images/top-UberX.png')
    }
    if (props === 'Comfort') {
      return require('../../assets/images/top-Comfort.png')
    }
    return require('../../assets/images/top-UberXL.png')
  }

  const findlocation = async () => {
    await Geolocation.getCurrentPosition(
      (position) => {
        setRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0121,
        })
      }
    ),
      (error) => {
        console.log(error.code, error.message);
      }

  }
  useEffect(() => {
    findlocation();
  }, [])

  return (
    <>
      <MapView
        style={{ width: '100%', height: "100%" }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true}
        region={region}
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
      <View style={{ position: 'absolute', top: 0, right: 0, padding: 20 }}>
        <MaterialIcons
          name="my-location"
          size={22}
          style={{
            backgroundColor: '#fff',
            padding: 10,
            elevation: 5,
            borderRadius: 10
          }}
          onPress={() => findlocation()}
        />
      </View>
    </>
  );
}

export default HomeMap;
