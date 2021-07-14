import {images} from '../../Models/Constants';
import React from 'react';
import {SafeAreaView, Image, View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import style from '../index.style';
import styleMap from './Map.style';
import strings from '../../Models/Constants/strings.json';
import MapView, {MAP_TYPES, PROVIDER_DEFAULT} from 'react-native-maps';
const Map = () => {
  let str = strings.Map[0];
  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      mapType={MAP_TYPES.NONE}
      style={styleMap.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.09,
        longitudeDelta: 0.035,
      }}>
      <MapView.UrlTile
        urlTemplate={'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'}
        zIndex={-1}
        maximumZ={19}
        flipY={false}
      />
    </MapView>
  );
};
export default Map;
