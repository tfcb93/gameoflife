import { canvas, context, liveCells, verify, increaseIterations, getIterations, canvasSize } from './utils';
import { verifySurroundings, clearAllSurroundings, killCells, doTheMiracleOfLife, allSurroundingList } from './lifecycle';

let lineWidth = 5;


const draw = () => {
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    drawSquares();
    if(verify) {
        lifeSequence();
    }

    requestAnimationFrame(draw);
}

const lifeSequence = () => {
    liveCells.forEach(cell => verifySurroundings(cell[0], cell[1]));
    allSurroundingList.forEach(cell => verifySurroundings(cell[0], cell[1], false));
    killCells();
    doTheMiracleOfLife()
    clearAllSurroundings();
    increaseIterations();
}

const drawGrid = () => {
    let line = 0;
    while(line < canvasSize[0]) {
        context.beginPath();
        context.moveTo(line, 0);
        context.lineTo(line, canvasSize[1]);
        context.strokeStyle = "#a8a8a8";
        context.stroke();

        line += lineWidth;
    }
    
    line = 0;
    while(line < canvasSize[1]) {
        context.beginPath();
        context.moveTo(0, line);
        context.lineTo(canvasSize[0], line);
        context.strokeStyle = "#a8a8a8";
        context.stroke();

        line += lineWidth;
    }
}

const drawSquares = () => {
    liveCells.forEach(cell => drawSquare(cell[0], cell[1]));
}

const drawSquare = (x, y) => {
    context.beginPath();
    context.rect(x * lineWidth, y * lineWidth, lineWidth, lineWidth);
    context.fillStyle = "red";
    context.fill()
}

const setLineWidth = (val) => {
    lineWidth = parseInt(val);
}

export {draw, drawGrid, drawSquare, drawSquares, setLineWidth, lineWidth, lifeSequence};