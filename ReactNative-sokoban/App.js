import React, { useState } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

const Header = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Sokoban</Text>
    </View>
  );
};

const Grid = ({ grid }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
      {grid.map((row, rowIndex) => (
        <View key={rowIndex} style={{ flexDirection: 'column' }}>
          {row.map((cell, cellIndex) => (
            <Image key={cellIndex} source={{
              uri: 'https://www.bebegavroche.com/media/catalog/product/cache/1/thumbnail/1200x/040ec09b1e35df139433887a97daa66f/s/c/sc917-figurine-en-carton-shrek-debout-qui-sourit--94--cm-1.jpg',
            }} style={{ width: 50, height: 50 }} />
          ))}
        </View>
      ))}
    </View>
  );
};

const App = () => {
  const convertGrid = (grid) => {
    return grid.map(row => {
      return row.split('');
    });
  };
  
  const initialGrid = convertGrid([
    "..####...",
    "###..####",
    "#.....C.#",
    "#.#..#C.#",
    "#.X.X#P.#",
    "#########"
  ]);
  
  const [grid, setGrid] = useState(initialGrid);

  const handleMove = (direction) => {
    /* Your move logic here */
  };

  return (
    <View>
      <Header />
      <Grid grid={grid} />
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
    </View>
  );
};

export default App;