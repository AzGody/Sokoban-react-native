import React from 'react';
import { View, Image } from 'react-native';

const Grid = ({ grid }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
      {grid.map((row, rowIndex) => (
        <View key={rowIndex} style={{ flexDirection: 'column' }}>
          {row.map((cell, cellIndex) => (
            <Image
              key={cellIndex}
              source={{
                uri: 'https://www.bebegavroche.com/media/catalog/product/cache/1/thumbnail/1200x/040ec09b1e35df139433887a97daa66f/s/c/sc917-figurine-en-carton-shrek-debout-qui-sourit--94--cm-1.jpg',
              }}
              style={{ width: 50, height: 50 }}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default Grid;