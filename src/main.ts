import "./style.css";
import { fabric } from "fabric";
import { ClipBox } from "../lib/clipBox";
import { renderToolBar } from "../lib";

const toolBarDom = document.createElement("div");
toolBarDom.id = "baize-tool-bar";
document.body.appendChild(toolBarDom);
renderToolBar(toolBarDom);

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
