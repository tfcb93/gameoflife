import Canvas from "./Canvas";

function main() {
  const canvas = new Canvas(
    document.getElementById("game") as HTMLCanvasElement,
    window.innerWidth - (window.innerWidth % 20) - 300,
    window.innerHeight - (window.innerHeight % 20),
    20
  );
  canvas.draw();
}

main();
