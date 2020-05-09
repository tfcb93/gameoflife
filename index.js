import { draw, setLineWidth, lifeSequence } from './src/draw';
import { canvas, insertCell, randomCells, clearCells,lifeCycle, verify, getCanvasSize } from './src/utils';

const start = () => {

    getCanvasSize();

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
    
    document.getElementById("stepBtn").addEventListener('click', (e) => {
        lifeSequence();
    });
    
    // document.getElementById("lineRange").addEventListener('input', (e) => {
    //     setLineWidth(e.target.value);
    //     document.getElementById("rangeActualValue").innerHTML = e.target.value;
    // });

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