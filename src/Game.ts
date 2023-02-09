import Cell from "./Cell";

class Game {
  public liveCells: Array<Cell>;
  public deadCells: Array<Cell>;
  public squareSize: number;

  constructor(squareSize) {
    this.liveCells = [];
    this.deadCells = [];
    this.squareSize = squareSize;
  }

  addCell(x, y, squareSize) {
    // First I need to check if I already have a cell on that position
    const existentCell = this.liveCells.find((cell) => {
      const position = cell.returnPosition();
      return position[0] === x && position[1] === y;
    });
    // If not exists, add
    if (existentCell === undefined) {
      this.liveCells.push(new Cell(x, y, squareSize));
    }
    // Else, ignore
  }

  drawOnClick(ctx) {
    const lastIndex = this.liveCells.length - 1;
    this.liveCells[lastIndex].draw(ctx);
  }

  drawOnPlay(ctx) {
    this.liveCells.forEach((cell) => {
      cell.draw(ctx);
    });
  }

  lifeCycle() {
    const bornCells: Array<string> = [];
    const deadCells: Array<string> = [];

    // Get all surroundings of all cells
    const allSurroundingsPositions = this.liveCells
      .flatMap((cell) => {
        const cellPosition = cell.returnPosition();
        // on a string, each char is 2bytes
        // numbers are 8bytes
        // but for some cases I earn more bytes than a 2-tuple
        // and I believe I save a bit more computation with this
        return [
          `${cellPosition[0]}x${cellPosition[1] - this.squareSize}`,
          `${cellPosition[0] + this.squareSize}x${
            cellPosition[1] - this.squareSize
          }`,
          `${cellPosition[0] + this.squareSize}x${cellPosition[1]}`,
          `${cellPosition[0] + this.squareSize}x${
            cellPosition[1] + this.squareSize
          }`,
          `${cellPosition[0]}x${cellPosition[1] + this.squareSize}`,
          `${cellPosition[0] - this.squareSize}x${
            cellPosition[1] + this.squareSize
          }`,
          `${cellPosition[0] - this.squareSize}x${cellPosition[1]}`,
          `${cellPosition[0] - this.squareSize}x${
            cellPosition[1] - this.squareSize
          }`,
        ];
      })
      .filter((item, index, arr) => arr.indexOf(item) === index);

    const allExistingCells = this.liveCells.map((cell) =>
      cell.returnStringPosition()
    );
    // Test all surroundings to check if there are cells
    // Non-existing cells, check if there are enough cells to create one
    [...allSurroundingsPositions, ...allExistingCells].forEach((cellPos) => {
      if (allExistingCells.find((existingCell) => existingCell === cellPos)) {
        // cell exists, do all the things necessary here
        const cellSurroundings = this.getCellSurroudings(cellPos);
        const liveSurroundings = cellSurroundings.filter((surrouding) =>
          allExistingCells.includes(surrouding)
        );
        if (liveSurroundings.length < 2 || liveSurroundings.length > 3) {
          deadCells.push(cellPos);
        }
      } else {
        const cellSurroundings = this.getCellSurroudings(cellPos);
        const liveSurroundings = cellSurroundings.filter((surrouding) =>
          allExistingCells.includes(surrouding)
        );
        if (liveSurroundings.length === 3) {
          bornCells.push(cellPos);
        }
        // Verify surroundings of this cell, if there are enough to make it alive, include it in the new array
      }
    });
    this.theMiracleOfLife(bornCells, deadCells);
  }

  getCellSurroudings(cellPos: string) {
    const positions = cellPos.split("x").map((pos) => parseInt(pos));
    return [
      `${positions[0]}x${positions[1] - this.squareSize}`,
      `${positions[0] + this.squareSize}x${positions[1] - this.squareSize}`,
      `${positions[0] + this.squareSize}x${positions[1]}`,
      `${positions[0] + this.squareSize}x${positions[1] + this.squareSize}`,
      `${positions[0]}x${positions[1] + this.squareSize}`,
      `${positions[0] - this.squareSize}x${positions[1] + this.squareSize}`,
      `${positions[0] - this.squareSize}x${positions[1]}`,
      `${positions[0] - this.squareSize}x${positions[1] - this.squareSize}`,
    ];
  }

  theMiracleOfLife(bornCells: Array<string>, deadCells: Array<string>) {
    // Kill dead cells
    this.liveCells = this.liveCells.filter(
      (cell) => !deadCells.includes(cell.returnStringPosition())
    );

    // Bring new cells to life
    bornCells.forEach((cell) => {
      const newCellPos = cell.split("x").map((pos) => parseInt(pos));
      this.liveCells.push(
        new Cell(newCellPos[0], newCellPos[1], this.squareSize)
      );
    });
  }
}

export default Game;
