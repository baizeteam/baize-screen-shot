import "./style.css";
import { fabric } from "fabric";
import { ClipBox } from "../lib/clipBox";
import "../lib/toolBar";

const selectCanvas = document.querySelector(
  "#baize-select-canvas"
) as HTMLCanvasElement;

const fabricCanvas = new fabric.Canvas(selectCanvas, {
  selection: true,
  selectable: true,
  preserveObjectStacking: true,
  backgroundColor: "white",
});

ClipBox.getInstance({ canvas: fabricCanvas });

console.log(fabricCanvas);
