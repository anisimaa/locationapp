import React from 'react';
import { Text, View, } from 'react-native';
import MapStyles from './styles/LocationMapStyles';
import MapView from 'react-native-maps';
import * as Location from 'expo-location'


const LocationMap = ({ navigation }) => {
  
    return (
      <View style={MapStyles.container}>
        <MapView style={MapStyles.map}>
        </MapView>
        </View>
      );
};

export default LocationMap;