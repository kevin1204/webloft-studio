import { ctx } from "./canvas";
import { Mouse } from "./Mouse";

export class Particle {
  private _x: number;
  private _y: number;
  private _baseX: number;
  private _baseY: number;
  private _density: number;
  private _size: number;

  constructor(x: number, y: number, size: number) {
    this._x = x;
    this._y = y;
    this._baseX = this._x;
    this._baseY = this._y;
    this._density = Math.random() * 40 + 5;
    this._size = size;
  }

  get baseX(): number {
    return this._baseX;
  }

  get baseY(): number {
    return this._baseY;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  public draw() {
    ctx.fillStyle = "#fff";

    ctx.beginPath();
    ctx.arc(this.x, this.y, this._size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  public update(mouse: Mouse) {
    const dx = mouse.x - this._x;
    const dy = mouse.y - this._y;

    const distance = Math.hypot(dx, dy);

    const forceDirectionX = dx / distance;
    const forceDirectionY = dy / distance;

    const force = (mouse.radius - distance) / mouse.radius;

    if (distance < mouse.radius) {
      const directionX = forceDirectionX * force * this._density;
      const directionY = forceDirectionY * force * this._density;

      this._x -= directionX;
      this._y -= directionY;

      return;
    }

    if (this._x !== this._baseX) this._x -= (this._x - this._baseX) / 10;
    if (this._y !== this._baseY) this._y -= (this._y - this._baseY) / 10;
  }
}
