import React from "react";
import { Image, FlatList } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import styles from './styles'

const GOOGLE_MAPS_APIKEY = 'AIzaSyC-EbiulXUhueCIFOtXkZngLOaCCq4DU9E'

const RouteMap = ({ origin, destination }) => {

  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };

  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>

      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      />

      <Marker
      coordinate={origin}
      title={'Origin'}
    />
    <Marker
      coordinate={destination}
      title={'Destination'}
    />

    </MapView>
  );
};

export default RouteMap;