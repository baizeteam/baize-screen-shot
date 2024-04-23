import "./style.css";
import { fabric } from "fabric";
// import { ClipBox } from "../lib/clipBox";

const selectCanvas = document.querySelector(
  "#baize-select-canvas"
) as HTMLCanvasElement;

const fabricCanvas = new fabric.Canvas(selectCanvas, {
  selection: false,
  preserveObjectStacking: true,
  backgroundColor: "white",
});

const clipBox = new fabric.Rect({
  left: 50,
  top: 50,
  width: 300,
  height: 300,
  fill: "rgba(0,0,0,0.5)",
  stroke: "rgba(0,0,0)",
  strokeWidth: 1,
  selectable: false,
  evented: false,
});

fabricCanvas.add(clipBox);

// ClipBox.getInstance({ canvas: fabricCanvas });

console.log(fabricCanvas);
