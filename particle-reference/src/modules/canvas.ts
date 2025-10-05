const { innerHeight: vh, innerWidth: vw } = window;

export const canvas = document.getElementById("canvas") as HTMLCanvasElement;
export const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

canvas.setAttribute("width", String(vw));
canvas.setAttribute("height", String(vh));

export const canvasW = vw;
export const canvasH = vh;
