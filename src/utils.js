import { lineWidth } from './draw';

const canvas = document.getElementById("game");
const context = canvas.getContext("2d");

const canvasSize = {
    width: 0,
    height: 0
};

let liveCells = [];
let verify = false;
let iterations = 0;

const getCanvasSize = () => {
    canvasSize.width = document.querySelector(".canvas_container").offsetWidth;
    canvasSize.height = document.querySelector(".canvas_container").offsetHeight;
}

const increaseIterations = () => {
    iterations++;
}

const insertCell = (x, y) => {
    const mouseActualPos = [parseInt(x / lineWidth), parseInt(y / lineWidth)];
    if(checkSquareAlreadyDrawed(mouseActualPos[0], mouseActualPos[1])) {
        liveCells = liveCells.filter(c => c[0] !== mouseActualPos[0] || c[1] !== mouseActualPos[1]);
    } else {
        liveCells.push([mouseActualPos[0], mouseActualPos[1]]);
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

export {canvas, context, insertCell, randomCells, liveCells, clearCells, verify, lifeCycle, checkSquareAlreadyDrawed, removeLiveCells, addLiveCells, increaseIterations, getCanvasSize, canvasSize};