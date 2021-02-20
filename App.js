/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { StatusBar, PermissionsAndroid, Platform } from 'react-native';

import Geolocation from 'react-native-geolocation-service';

import RootNavigatior from './src/Navigation/root';
import { withAuthenticator } from 'aws-amplify-react-native';
navigator.geolocation = require('react-native-geolocation-service');
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {

  const requestlocationpermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Uber App Location Permission",
          message:
            "Uber App needs access to your location " +
            "so you can take awesome rides.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("You can not use the location");

      }
    } catch (err) {
      console.warn(err);
    }
  }
  useEffect(() => {
    if (Platform.OS == 'android') {
      requestlocationpermission();
    } else {
      Geolocation.requestAuthorization();
    }
  }, [])


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <RootNavigatior />
    </>
  );
};

export default withAuthenticator(App)