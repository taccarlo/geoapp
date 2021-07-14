import {images} from '../../Models/Constants';
import React from 'react';
import {SafeAreaView, Image, View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import style from '../index.style';
import styleMap from './Map.style';
import strings from '../../Models/Constants/strings.json';
import MapView, {MAP_TYPES, PROVIDER_DEFAULT} from 'react-native-maps';
import MapStyle from './Map.style';
const Map = () => {
  let str = strings.Map[0];
  return (
    <MapView
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.09,
        longitudeDelta: 0.035,
      }}
      provider={null}
      mapType={MAP_TYPES.NONE}
      style={{flex: 1}}
      //style={styleMap.map}
      showsUserLocation>
      <MapView.UrlTile
        urlTemplate="http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg"
        maximumZ={19}
      />
    </MapView>
  );
};
/*

 <MapView.UrlTile
        urlTemplate="http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg"
        maximumZ={19}
      />
to switch to google
      provider={PROVIDER_DEFAULT} and
      mapType={MAP_TYPES.STANDARD}
removing MapView.UrlTile

//Stamen tiles (OSM-based)
"https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
"https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg"

"http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
"http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg"

osm not working cause https://github.com/react-native-maps/react-native-maps/issues/3747
"http://a.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
*/
export default Map;
