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
        "..#.##...",
        "###..####",
        "#.....C.#",
        "..#..#C..",
        "#.X.X#P.#",
        "####....#"
    ]);

    const [grid, setGrid] = useState(initialGrid);

    const handleMove = (direction) => {
        let newGrid = [...grid];
        let playerPosition = [];
        let playerState = '';
        grid.forEach((row, rowIndex) => {
            row.forEach((cell, cellIndex) => {
                if (cell === 'P' || cell === 'Q') {
                    playerPosition = [rowIndex, cellIndex]
                    playerState = cell;
                    return;
                }
            });
        })

        let newPositions = [];
        switch (direction) {
            case 'left':
                newPositions = [playerPosition[0] - 1, playerPosition[1]];
                break;
            case 'right':
                newPositions = [playerPosition[0] + 1, playerPosition[1]];
                break;
            case 'up':
                newPositions = [playerPosition[0], playerPosition[1] - 1];
                break;
            case 'down':
                newPositions = [playerPosition[0], playerPosition[1] + 1];
                break;
            default:
                break;
        }

        if( newPositions[0] < 0 || newPositions[1] < 0 || newGrid[newPositions[0]][newPositions[1]] === '#') {
            return;
        } else {
            newGrid[newPositions[0]][newPositions[1]] = newGrid[newPositions[0]][newPositions[1]] === 'C' ? 'Q' : 'P';
            newGrid[playerPosition[0]][playerPosition[1]] = playerState === 'P' ? '.' : 'C';
            setGrid(newGrid);
        }
    };

    const moveElement = (grid, direction) => {

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
