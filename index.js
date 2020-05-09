import { draw } from './src/draw';
import { canvas, insertCell, randomCells, clearCells,lifeCycle } from './src/utils';

const start = () => {

    canvas.addEventListener('click', (e) => {
        insertCell(e.offsetX, e.offsetY);
    });

    document.getElementById("rngBtn").addEventListener('click', () => {
        randomCells();
    });

    document.getElementById("clrBtn").addEventListener('click', () => {
        clearCells();
        draw();
    });
    
    document.getElementById("verifyBtn").addEventListener('click', () => {
        lifeCycle();
    });
}

start();
draw();