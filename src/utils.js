const canvas = document.getElementById("game");
const context = canvas.getContext("2d");

let liveCells = [];
let verify = false;

const insertCell = (x, y) => {
    const mouseActualPos = [parseInt(x / 5), parseInt(y / 5)];
    if(checkSquareAlreadyDrawed(mouseActualPos[0], mouseActualPos[1])) {
        liveCells = liveCells.filter(c => c[0] !== mouseActualPos[0] || c[1] !== mouseActualPos[1]);
    } else {
        liveCells.push([mouseActualPos[0], mouseActualPos[1]]);
    }
}

const randomCells = () => {

    liveCells = [];

    const seedQtd = Math.floor(Math.random() * 10 + 1);

    for(let seeder = 0; seeder < seedQtd; seeder++) {
        const cellX = parseInt(Math.floor(Math.random() * canvas.width) / 5);
        const cellY = parseInt(Math.floor(Math.random() * canvas.height) / 5);
        liveCells.push([cellX, cellY]);
    }

}

const checkSquareAlreadyDrawed = (x, y) => {
    if(liveCells.find(c => c[0] === x && c[1] === y) !== undefined) {
        return true;
    } else {
        return false;
    }
}

const clearCells = () => {
    liveCells = [];
}

const addLiveCells = (newCells = []) => {
    liveCells = [...liveCells, ...newCells];
}

const removeLiveCells = (x, y) => {
    liveCells = liveCells.filter(cell => cell[0] !== x || cell[1] !== y);
}

const lifeCycle = () => {
    if(verify) {
        verify = false;
    } else {
        verify = true;
    }
}

export {canvas, context, insertCell, randomCells, liveCells, clearCells, verify, lifeCycle, checkSquareAlreadyDrawed, removeLiveCells, addLiveCells};