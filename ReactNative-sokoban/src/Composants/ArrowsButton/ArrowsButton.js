import React from 'react';
import { View, TouchableWithoutFeedback, Image } from 'react-native';

const ArrowButtons = ({ handleMove }) => {
  return (
    <View style={{width: 200, marginLeft: 90}}>
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <TouchableWithoutFeedback onPress={() => handleMove('up')}>
        <Image source={{
        uri: 'https://cdn.pixabay.com/photo/2012/04/28/18/59/left-44037_1280.png',
      }} style={{ width: 65, height: 50, transform: [{rotate: '90deg'}], opacity: 0.8}} />
      </TouchableWithoutFeedback>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <TouchableWithoutFeedback onPress={() => handleMove('left')}>
      <Image source={{
        uri: 'https://cdn.pixabay.com/photo/2012/04/28/18/59/left-44037_1280.png',
      }} style={{ width: 65, height: 50, opacity: 0.8}} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handleMove('right')}>
      <Image source={{
        uri: 'https://cdn.pixabay.com/photo/2012/04/28/18/59/left-44037_1280.png',
      }} style={{ width: 65, height: 50, transform: [{rotate: '180deg'}], opacity: 0.8 }} />
      </TouchableWithoutFeedback>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <TouchableWithoutFeedback onPress={() => handleMove('down')}>
      <Image source={{
        uri: 'https://cdn.pixabay.com/photo/2012/04/28/18/59/left-44037_1280.png',
      }} style={{ width: 65, height: 50, transform: [{rotate: '-90deg'}] , opacity: 0.8}} />
      </TouchableWithoutFeedback>
    </View>
  </View>)}

export default ArrowButtons;