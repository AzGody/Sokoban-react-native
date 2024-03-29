import React, { useEffect, useState } from "react";
import { View, Alert, TouchableOpacity, Image } from "react-native";
import Header from "./src/Composants/Header/Header";
import Grid from "./src/Composants/Map/Grid";
import ArrowButtons from "./src/Composants/ArrowsButton/ArrowsButton";

const convertGrid = (grid) => {
  return grid.map((row) => {
    return row.split("");
  });
};
let indexMap = 0;

const App = () => {
  const [maps, setMaps] = useState([]);
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    fetch("http://192.168.231.138:8000/api/maps", {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setMaps(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (maps.length > 0) {
      setGrid(convertGrid(maps[0].matrix));
    }
  }, [maps]);

  const movableItems = {
        'P' : {
            'X' : 'Q',
            '.' : 'P',
    },
        'Q' :{
            'X' : 'Q',
            '.' : 'P'
    },
        'C' : {
            'X': 'V',
            '.' : 'C'
    },
        'V' : {
            'X': 'V',
            '.' : 'C'
    },
    }

  const handleMove = async (direction) => {
    let newGrid = [...grid];

    let { success, playerPosition } = await searchFirst(grid, "QP");
    if (!success) {
      return false;
    }

    await moveItem(grid, direction, playerPosition);

    let test = await searchFirst(grid, "C");

    if (!test.success) {
      indexMap = indexMap +1;
      if (maps.length > indexMap) {
        setGrid(convertGrid(maps[indexMap].matrix));
        Alert.alert("Bien joué, on passe au niveau "+ (indexMap+1))
      } else {
        Alert.alert("Vous avez gagné !")
      }
    }
  }


  const moveItem = async (grid, direction, initialPosition) => {
    return new Promise(async (resolve, reject) => {
      let newPositions = await getNexPosition(direction, initialPosition);

      if (await isEntityCanBeAt(newPositions)) {
        resolve(false);
        return false;
      } else if (grid[newPositions[0]][newPositions[1]] === "C" || grid[newPositions[0]][newPositions[1]] === "V") {
        if (!(await moveItem(grid, direction, newPositions))) {
          resolve(false);
          return false;
        }
      }
      const initialPositionState = grid[initialPosition[0]][initialPosition[1]];
      const newPositionState = grid[newPositions[0]][newPositions[1]];

      let newGrid = [...grid];
      newGrid[newPositions[0]][newPositions[1]] = movableItems[initialPositionState][newPositionState];
      newGrid[initialPosition[0]][initialPosition[1]] =
        initialPositionState === "V" || initialPositionState === "Q" ? "X" : ".";
      setGrid(newGrid);
      resolve(true);
    });
  };

  const getNexPosition = async function (direction, position) {
    return new Promise((resolve, reject) => {
      switch (direction) {
        case "left":
          resolve([position[0] - 1, position[1]]);
          break;
        case "right":
          resolve([position[0] + 1, position[1]]);
          break;
        case "up":
          resolve([position[0], position[1] - 1]);
          break;
        case "down":
          resolve([position[0], position[1] + 1]);
          break;
        default:
          reject("Direction non reconnue");
          break;
      }
    });
  };

  const isEntityCanBeAt = async function (position) {
    return new Promise((resolve, reject) => {
      resolve(
        position[0] < 0 ||
          position[1] < 0 ||
          grid.length - 1 < position[0] ||
          grid[position[0]].length - 1 < position[1] ||
          grid[position[0]][position[1]] === "#"
      );
    });
  };

  const searchFirst = async function (grid, search) {
    return new Promise((resolve, reject) => {
      grid.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
          if (search.includes(cell)) {
            resolve({ success: true, playerPosition: [rowIndex, cellIndex], playerState: cell });
          }
        });
      });
      resolve({ success: false, playerPosition: [], playerState: "" });
    });
  };

  const reloadLevel = function(){
    setGrid(convertGrid(maps[indexMap].matrix));
  }

  retry = 'https://cdn.iconscout.com/icon/free/png-256/retry-1-386755.png?f=webp&w=256'
  next = 'https://cdn-icons-png.flaticon.com/512/0/304.png'
  return (
      <View>
          <Header />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity onPress={reloadLevel}>
                  <Image
                      source={{ uri: retry }}
                      style={{ width: 40, height: 40, margin: 15 }}
                  />
              </TouchableOpacity>
          </View>
          <Grid grid={grid} />
          <ArrowButtons handleMove={handleMove} />
      </View>
  );

  const getLocalMaps = () => {
    const maps = JSON.parse(require("./maps.json")).maps
    const map = maps[Math.floor(Math.random() * maps.length)]
    console.log(map)
    setMaps([map]);
  }
};

export default App;
