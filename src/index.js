import { draw, lifeSequence } from './draw';
import { canvas, insertCell, clearCells,lifeCycle, verify, getCanvasSize } from './utils';

const start = () => {

    getCanvasSize();

    canvas.addEventListener('click', (e) => {
        insertCell(e.offsetX, e.offsetY);
    });

    document.getElementById("clrBtn").addEventListener('click', () => {
        clearCells();
        draw();
    });
    
    document.getElementById("stepBtn").addEventListener('click', (e) => {
        lifeSequence();
    });

    document.getElementById("verifyBtn").addEventListener('click', () => {
        lifeCycle();
        if(verify) {
            document.getElementById("verifyBtn").innerHTML = "Pause";
        } else {
            document.getElementById("verifyBtn").innerHTML = "Play";
        }
    });
}

start();
draw();