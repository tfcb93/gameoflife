import { lineWidth } from './draw';

const canvas = document.getElementById("game");
const context = canvas.getContext("2d");

let canvasSize;

let liveCells = [];
let verify = false;
let iterations = 0;

const getCanvasSize = () => {
    canvasSize = [document.querySelector(".canvas_container").offsetWidth, document.querySelector(".canvas_container").offsetHeight];
    console.log(canvasSize);
    context.canvas.width = canvasSize[0];
    context.canvas.height = canvasSize[1];
}

const increaseIterations = () => {
    iterations++;
}

const getIterations = () => {
    return iterations;
}

const insertCell = (x, y) => {
    const mouseActualPos = [parseInt(x / lineWidth), parseInt(y / lineWidth)];
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
        const cellX = parseInt(Math.floor(Math.random() * canvas.width) / lineWidth);
        const cellY = parseInt(Math.floor(Math.random() * canvas.height) / lineWidth);
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

export {canvas, context, insertCell, randomCells, liveCells, clearCells, verify, lifeCycle, checkSquareAlreadyDrawed, removeLiveCells, addLiveCells, increaseIterations, getIterations, getCanvasSize, canvasSize};