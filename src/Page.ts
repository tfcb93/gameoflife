import Canvas from "./Canvas";

class Page {
  private mode: boolean;
  private page: HTMLElement | null;
  private buttons: any; // TODO: Make a type for it as an object with all buttons
  private canvas: Canvas;
  constructor() {
    this.page = document.getElementById("page");
    this.buttons = {};
    this.buttons.mode = document.getElementById("mode");
    this.buttons.play = document.getElementById("play");
    this.buttons.pause = document.getElementById("pause");
    this.buttons.step = document.getElementById("step");
    this.buttons.stop = document.getElementById("stop");
    this.buttons.clear = document.getElementById("clear");
    this.buttons.pause.disabled = true;
    this.startEvents();
    this.canvas = new Canvas(
      document.getElementById("game") as HTMLCanvasElement,
      window.innerWidth - (window.innerWidth % 20) - 300,
      window.innerHeight - (window.innerHeight % 20),
      20
    );
    this.canvas.drawGrid();
    this.mode = true;
  }

  startEvents() {
    this.buttons.mode.addEventListener("click", (e) => {
      if (this.mode) {
        this.canvas.changeGridColor("white");
        this.page?.classList.remove("page-light");
        this.page?.classList.add("page-dark");
        Object.keys(this.buttons).forEach((key) => {
          this.buttons[key].classList.remove("button-light");
          this.buttons[key].classList.add("button-dark");
        });
      } else {
        this.canvas.changeGridColor("black");
        this.page?.classList.remove("page-dark");
        this.page?.classList.add("page-light");
        Object.keys(this.buttons).forEach((key) => {
          this.buttons[key].classList.remove("button-dark");
          this.buttons[key].classList.add("button-light");
        });
      }
      this.mode = !this.mode;
    });

    this.buttons.play.addEventListener("click", (e) => {
      this.disableButtons(true);
      this.buttons.pause.disabled = false;
      this.canvas.playAnimation();
    });

    this.buttons.pause.addEventListener("click", (e) => {
      this.disableButtons(false);
      this.buttons.pause.disabled = true;
      this.canvas.pauseAnimation();
    });

    this.buttons.step.addEventListener("click", (e) => {
      this.canvas.stepAnimation();
    });

    this.buttons.clear.addEventListener("click", (e) => {
      this.canvas.clear();
    });
  }

  disableButtons(value: boolean) {
    this.buttons.play.disabled = value;
    this.buttons.step.disabled = value;
    this.buttons.clear.disabled = value;
    this.buttons.mode.disabled = value;
  }
}

export default Page;
