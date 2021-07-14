import {images} from '../../Models/Constants';
import React from 'react';
import {SafeAreaView, Image, View, Text} from 'react-native';

import style from '../index.style';
import styleProfile from './Map.style';
import strings from '../../Models/Constants/strings.json';
import MapView, {MAP_TYPES, PROVIDER_DEFAULT} from 'react-native-maps';
const Map = () => {
  let str = strings.Map[0];
  return (
    <SafeAreaView style={style.container}>
      <View>
        <MapView
          showsUserLocation
          provider={PROVIDER_DEFAULT}
          mapType={MAP_TYPES.NONE}>
          <MapView.UrlTile
            urlTemplate={'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'}
            shouldReplaceMapContent={true}
          />
        </MapView>
      </View>
    </SafeAreaView>
  );
};
export default Map;
