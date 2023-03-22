import React, { useState } from 'react';
import { View } from 'react-native';
import Header from './src/Composants/Header/Header';
import Grid from './src/Composants/Map/Grid';
import ArrowButtons from './src/Composants/ArrowsButton/ArrowsButton';

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
   
  };


  return (
    <View>
      <Header />
      <Grid grid={grid} />
      <ArrowButtons handleMove={handleMove} />
    </View>
  );
};

export default App;
