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
  private cells: Array<Cell>;
  private game: Game;

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
    this.cells = [];
    this.eventListeners();
    this.game = new Game(this.squareSize);
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
    document.addEventListener("keydown", (e) => {
      if (e.key === " ") {
        this.game.lifeCycle();
        this.context?.clearRect(0, 0, this.width, this.height);
        this.draw();
        this.game.drawOnPlay(this.context);
      }
    });
  }

  draw() {
    this.context?.beginPath();
    for (let i = 0; i < this.totalSquares.width; i++) {
      this.context!.moveTo(this.squareSize * i, 0);
      this.context?.lineTo(this.squareSize * i, this.height);
    }
    for (let i = 0; i < this.totalSquares.height; i++) {
      this.context!.moveTo(0, this.squareSize * i);
      this.context?.lineTo(this.width, this.squareSize * i);
    }
    this.context?.stroke();
  }
}

export default Canvas;
