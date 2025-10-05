import { ctx, canvasW } from "./modules/canvas";
import { Particle } from "./modules/Particle";
import { Mouse } from "./modules/Mouse";

// Global values
// You can change these values to change the look of the effect
// Text
const textsToWrite = ["Hello"];
const textSize = 30;

// Particles
const mouseRadius = 150;
const particleSize = 1;
const particleScale = 10;
const adjust = {
  x: 3,
  y: 0
};

// Connect lines
const lineWidth = 1;
const distanceToDrawLine = 40;

const mouse = new Mouse(mouseRadius);
let particles: Particle[] = [];

const init = () => {
  ctx.fillStyle = "#fff";
  ctx.font = `${textSize}px Arial`;

  textsToWrite.forEach((text, i) => {
    ctx.fillText(text, 0, textSize * (i + 1));
  });

  const { width, height, data } = ctx.getImageData(0, 0, canvasW, canvasW);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pixelAlphaIndex = y * 4 * height + x * 4 + 3;

      // If the opcaity of the pixel is greater than 50%
      if (data[pixelAlphaIndex] > 128) {
        const positionX = (x + adjust.x) * particleScale;
        const positionY = (y + adjust.y) * particleScale;

        particles.push(new Particle(positionX, positionY, particleSize));
      }
    }
  }
};

const connect = () => {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i; j < particles.length; j++) {
      const particleA = particles[i];
      const particleB = particles[j];

      const dx = particleA.x - particleB.x;
      const dy = particleA.y - particleB.y;

      const distance = Math.hypot(dx, dy);

      if (distance < distanceToDrawLine) {
        ctx.globalAlpha = 1 - distance / distanceToDrawLine;
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = "#fff";

        ctx.beginPath();
        ctx.moveTo(particleA.x, particleA.y);
        ctx.lineTo(particleB.x, particleB.y);
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
};

const animate = () => {
  ctx.clearRect(0, 0, canvasW, canvasW);

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];

    p.draw();
    p.update(mouse);
  }

  connect();
  requestAnimationFrame(animate);
};

init();
animate();
