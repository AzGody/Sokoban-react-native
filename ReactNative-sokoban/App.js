import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Header from './src/Composants/Header/Header';
import Grid from './src/Composants/Map/Grid';
import ArrowButtons from './src/Composants/ArrowsButton/ArrowsButton';

const convertGrid = (grid) => {
  return grid.map(row => {
    return row.split('');
  });
};
const App = () => {
  const [maps, setMaps] = useState([]);
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    fetch('http://192.168.231.138:8000/api/maps', {
      method: 'GET',
      headers: {
        accept: 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => setMaps(data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if (maps.length > 0) {
      setGrid(convertGrid(maps[0].matrix));
    }
  }, [maps]);


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
