class Cell {
  private x: number;
  private y: number;
  private cellWidthAndHeight: number;
  constructor(x, y, squareSize) {
    this.x = x;
    this.y = y;
    this.cellWidthAndHeight = squareSize;
  }

  draw(ctx: CanvasRenderingContext2D) {
    // ctx?.beginPath();
    ctx!.fillStyle = "black";
    ctx?.rect(this.x, this.y, this.cellWidthAndHeight, this.cellWidthAndHeight);
    ctx?.fill();
  }

  changeCoordinates({ x, y }: { x?: number; y?: number }) {
    this.x = x !== undefined ? x : this.x;
    this.y = y !== undefined ? y : this.y;
  }

  returnPosition() {
    return [this.x, this.y];
  }

  returnStringPosition() {
    return `${this.x}x${this.y}`;
  }
}

export default Cell;
