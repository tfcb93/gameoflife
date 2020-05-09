import { canvas, context, liveCells, verify } from './utils';
import { verifySurroundings, clearAllSurroundings, killCells, doTheMiracleOfLife, allSurroundingList } from './lifecycle';

const draw = () => {
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    drawSquares();
    if(verify) {
        liveCells.forEach(cell => verifySurroundings(cell[0], cell[1]));
        allSurroundingList.forEach(cell => verifySurroundings(cell[0], cell[1], false));
        killCells();
        doTheMiracleOfLife()
        clearAllSurroundings();
    }

    requestAnimationFrame(draw);
}

const drawGrid = () => {
    let line = 0;
    while(line < 640) {
        context.beginPath();
        context.moveTo(line, 0);
        context.lineTo(line, 480);
        context.strokeStyle = "#a8a8a8";
        context.stroke();

        line += 5;
    }
    
    line = 0;
    while(line < 640) {
        context.beginPath();
        context.moveTo(0, line);
        context.lineTo(640, line);
        context.strokeStyle = "#a8a8a8";
        context.stroke();

        line += 5;
    }
}

const drawSquares = () => {
    liveCells.forEach(cell => drawSquare(cell[0], cell[1]));
}

const drawSquare = (x, y) => {
    context.beginPath();
    context.rect(x * 5, y * 5, 5, 5);
    context.fillStyle = "red";
    context.fill()
}

export {draw, drawGrid, drawSquare, drawSquares};