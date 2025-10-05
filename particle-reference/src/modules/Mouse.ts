import { canvas } from "./canvas";

export class Mouse {
  private _x: number = 0;
  private _y: number = 0;
  private _radius: number;

  constructor(radius: number = 150) {
    this._radius = radius;
    canvas.addEventListener("mousemove", this.handleMouseMove.bind(this));
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  get radius(): number {
    return this._radius;
  }

  handleMouseMove({ x, y }: MouseEvent) {
    this._x = x;
    this._y = y;
  }
}
