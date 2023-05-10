import React, {useState} from 'react';
import {View} from 'react-native';
import Header from './src/Composants/Header/Header';
import Grid from './src/Composants/Map/Grid';
import ArrowButtons from './src/Composants/ArrowsButton/ArrowsButton';

const App = () => {
    const convertGrid = (grid) => {
        return grid.map(row => {
            return row.split('').reverse();
        });
    };

    const initialGrid = convertGrid([
        "..#.##..",
        "###...##",
        "#....V.#",
        ".#..#V..",
        ".X.X#P.#",
        "###....#"
    ]);

    const [grid, setGrid] = useState(initialGrid);


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

        let {success, playerPosition} = await searchFirst(grid, 'QP')
        if (!success) {
            return false;
        }

        moveItem(grid, direction, playerPosition).then((isMoved) => {});
    };

    const moveItem = async (grid, direction, initialPosition) => {
        return new Promise(async (resolve, reject) => {
            let newPositions = await getNexPosition(direction, initialPosition);

            if (await isEntityCanBeAt(newPositions)) {
                resolve(false);
                return false;
            } else if (grid[newPositions[0]][newPositions[1]] === 'C' || grid[newPositions[0]][newPositions[1]] === 'V') {
                if(!await moveItem(grid, direction, newPositions)){
                    resolve(false);
                    return false;
                }
            }
            const initialPositionState = grid[initialPosition[0]][initialPosition[1]];
            const newPositionState = grid[newPositions[0]][newPositions[1]];

            let newGrid = [...grid];
            newGrid[newPositions[0]][newPositions[1]] = movableItems[initialPositionState][newPositionState];
            newGrid[initialPosition[0]][initialPosition[1]] = initialPositionState === 'V' || initialPositionState === 'Q' ? 'X' : '.';
            setGrid(newGrid);
            resolve(true);
        });
    }

    const getNexPosition = async function (direction, position) {
        return new Promise((resolve, reject) => {
            switch (direction) {
                case 'left':
                    resolve([position[0] - 1, position[1]]);
                    break;
                case 'right':
                    resolve ([position[0]+ 1, position[1]]);
                    break;
                case 'up':
                    resolve ([position[0], position[1] - 1]);
                    break;
                case 'down':
                    resolve ([position[0], position[1] + 1]);
                    break;
                default:
                    reject ("Direction non reconnue");
                    break;
            }
        });
    }

    const isEntityCanBeAt = async function (position) {
        return new Promise((resolve, reject) => {
            resolve(position[0] < 0 || position[1] < 0 || grid.length - 1 < position[0] || grid[position[0]].length - 1 < position[1] || grid[position[0]][position[1]] === '#');
        })
    }

    const searchFirst = async function (grid, search) {
        return new Promise((resolve, reject) => {
            grid.forEach((row, rowIndex) => {
                row.forEach((cell, cellIndex) => {
                    if (search.includes(cell)) {
                        console.log('oui');
                        resolve ({success: true, playerPosition: [rowIndex, cellIndex], playerState: cell});
                    }
                });
            })
            reject({success: false, playerPosition: [], playerState: ''});
        });
    }

    return (
        <View>
            <Header/>
            <Grid grid={grid}/>
            <ArrowButtons handleMove={handleMove}/>
        </View>
    );
};

export default App;
