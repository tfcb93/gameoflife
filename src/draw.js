import { canvas, context, liveCells, verify, increaseIterations, canvasSize } from './utils';
import { verifySurroundings, clearAllSurroundings, killCells, doTheMiracleOfLife, allSurroundingList } from './lifecycle';

let lineWidth = 15;


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
    while(line < canvasSize.width) {
        context.beginPath();
        context.moveTo(line, 0);
        context.lineTo(line, canvasSize.height);
        context.strokeStyle = "rgba(120, 120, 120, 0.5)";
        context.stroke();

        line += lineWidth;
    }
    
    line = 0;
    while(line < canvasSize.height) {
        context.beginPath();
        context.moveTo(0, line);
        context.lineTo(canvasSize.width, line);
        context.strokeStyle = "rgba(120, 120, 120, 0.5)";
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