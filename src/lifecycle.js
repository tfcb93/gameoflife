import { liveCells, checkSquareAlreadyDrawed, addLiveCells, removeLiveCells } from './utils';

let allSurroundingList = [];
let deadCells = [];
let bornCells = [];

const verifySurroundings = (x, y, isVerifyingLiveCells = true) => {
    const surroundings = [
        [x - 1, y - 1],
        [x, y - 1],
        [x + 1, y - 1],
        [x - 1, y],
        [x + 1, y],
        [x - 1, y + 1],
        [x, y + 1],
        [x + 1, y + 1],
    ];

    if(isVerifyingLiveCells) {
        const surroundingsAliveQtd = surroundings.map(s => {
            includeSurrougings(s[0], s[1]);
            return checkSquareAlreadyDrawed(s[0], s[1])
        }).filter(s => s === true).length;
        
        if(surroundingsAliveQtd < 2 || surroundingsAliveQtd > 3) {
            deadCells.push([x,y]);
        }
    } else {
        const surroundingsAliveQtd = surroundings.map(s => 
            checkSquareAlreadyDrawed(s[0], s[1])
        ).filter(s => s === true).length;

        if(surroundingsAliveQtd === 3 ) {
            bornCells.push([x,y]);
        }
    }
}

/**
 * It might have a better way to do that, but for now, I gonna let this way.
 */

const includeSurrougings = (x, y) => {
    if(allSurroundingList.find(cell => cell[0] === x && cell[1] === y)) {
        return;
    } else {
        allSurroundingList.push([x, y]);
    }
}

const clearAllSurroundings = () => {
    allSurroundingList = [];
}

const killCells = () => {
    deadCells.forEach(cell => removeLiveCells(cell[0], cell[1]));
    deadCells = [];
}

const doTheMiracleOfLife = () => {
    addLiveCells(bornCells);
    bornCells = [];
}

export {verifySurroundings, clearAllSurroundings, killCells, doTheMiracleOfLife, allSurroundingList};