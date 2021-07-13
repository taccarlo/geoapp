import {images} from '../../Models/Constants';
import React from 'react';
import {SafeAreaView, Image, View, Text} from 'react-native';

import style from '../index.style';
import styleProfile from './Map.style';
import strings from '../../Models/Constants/strings.json';

const Map = () => {
  let str = strings.Map[0];
  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text style={style.title}>{str.map}</Text>
        <Image source={images.GTSA_logo} style={styleProfile.imageInProfile} />
      </View>
    </SafeAreaView>
  );
};
export default Map;
