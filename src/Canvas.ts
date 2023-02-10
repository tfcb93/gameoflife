import Cell from "./Cell";
import Game from "./Game";

class Canvas {
  private canvasElement: HTMLCanvasElement;
  private context: CanvasRenderingContext2D | null;
  private width: number;
  private height: number;
  private squareSize: number;
  private totalSquares: {
    width: number;
    height: number;
  };
  private game: Game;
  private gridColor;
  private animationId;

  constructor(canvasElement, width, height, squareSize) {
    this.canvasElement = canvasElement;
    this.context = this.canvasElement.getContext("2d");
    this.canvasElement.width = this.width = width;
    this.canvasElement.height = this.height = height;
    this.squareSize = squareSize;
    this.totalSquares = {
      width: this.canvasElement.width / squareSize,
      height: this.canvasElement.height / squareSize,
    };
    this.eventListeners();
    this.game = new Game(this.squareSize);
    this.gridColor = "black";
  }

  eventListeners() {
    this.canvasElement.addEventListener("click", (e: MouseEvent) => {
      this.game.addCell(
        e.clientX - (e.clientX % 20),
        e.clientY - (e.clientY % 20),
        this.squareSize
      );
      this.game.drawOnClick(this.context);
    });
    document.addEventListener("keydown", (e) => {});
  }

  draw() {
    this.context?.beginPath();
    this.context!.strokeStyle = this.gridColor;
    this.context!.fillStyle = this.gridColor;
    for (let i = 0; i <= this.totalSquares.width; i++) {
      this.context!.moveTo(this.squareSize * i, 0);
      this.context?.lineTo(this.squareSize * i, this.height);
    }
    for (let i = 0; i <= this.totalSquares.height; i++) {
      this.context!.moveTo(0, this.squareSize * i);
      this.context?.lineTo(this.width, this.squareSize * i);
    }
    this.context?.stroke();
  }

  playAnimation() {
    this.game.lifeCycle();
    this.context?.clearRect(0, 0, this.width, this.height);
    this.draw();
    this.game.drawOnPlay(this.context);
    this.animationId = requestAnimationFrame(this.playAnimation.bind(this));
  }

  pauseAnimation() {
    cancelAnimationFrame(this.animationId);
  }

  stepAnimation() {
    this.game.lifeCycle();
    this.context?.clearRect(0, 0, this.width, this.height);
    this.draw();
    this.game.drawOnPlay(this.context);
  }

  clear() {
    this.game.clearCells();
    this.context?.clearRect(0, 0, this.width, this.height);
    this.draw();
  }

  changeGridColor(color) {
    this.gridColor = color;
    this.context?.clearRect(0, 0, this.width, this.height);
    this.draw();
    this.game.drawOnPlay(this.context);
  }
}

export default Canvas;
