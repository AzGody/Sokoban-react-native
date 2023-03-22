import React from 'react';
import { View, TouchableWithoutFeedback, Image } from 'react-native';

const ArrowButtons = ({ handleMove }) => {
  return (
    <View>
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <TouchableWithoutFeedback onPress={() => handleMove('up')}>
        <Image source={{
        uri: 'https://www.bebegavroche.com/media/catalog/product/cache/1/thumbnail/1200x/040ec09b1e35df139433887a97daa66f/s/c/sc917-figurine-en-carton-shrek-debout-qui-sourit--94--cm-1.jpg',
      }} style={{ width: 50, height: 50 }} />
      </TouchableWithoutFeedback>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <TouchableWithoutFeedback onPress={() => handleMove('left')}>
        <Image source={{
        uri: 'https://www.bebegavroche.com/media/catalog/product/cache/1/thumbnail/1200x/040ec09b1e35df139433887a97daa66f/s/c/sc917-figurine-en-carton-shrek-debout-qui-sourit--94--cm-1.jpg',
      }} style={{ width: 50, height: 50 }} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handleMove('right')}>
        <Image source={{
        uri: 'https://www.bebegavroche.com/media/catalog/product/cache/1/thumbnail/1200x/040ec09b1e35df139433887a97daa66f/s/c/sc917-figurine-en-carton-shrek-debout-qui-sourit--94--cm-1.jpg',
      }} style={{ width: 50, height: 50 }} />
      </TouchableWithoutFeedback>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <TouchableWithoutFeedback onPress={() => handleMove('down')}>
        <Image source={{
        uri: 'https://www.bebegavroche.com/media/catalog/product/cache/1/thumbnail/1200x/040ec09b1e35df139433887a97daa66f/s/c/sc917-figurine-en-carton-shrek-debout-qui-sourit--94--cm-1.jpg',
      }} style={{ width: 50, height: 50 }} />
      </TouchableWithoutFeedback>
    </View>
  </View>)}

export default ArrowButtons;