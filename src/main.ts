import "./style.css";
import { fabric } from "fabric";
import { ClipBox } from "../lib/clipBox";
import {
  renderToolBar,
  toolCanvasManager,
  initToolCanvasManager,
} from "../lib";

// 添加操作工具栏
const toolBarDom = document.createElement("div");
toolBarDom.id = "baize-tool-bar";
document.body.appendChild(toolBarDom);
renderToolBar(toolBarDom);

// 添加fabricjs画布
const toolCanvasDom = document.querySelector(
  "#baize-tool-canvas",
) as HTMLCanvasElement;
toolCanvasDom.width = window.innerWidth;
toolCanvasDom.height = window.innerHeight;

initToolCanvasManager(toolCanvasDom);
// ClipBox.getInstance({ canvas: toolCanvasManager.toolCanvas });

console.log(toolCanvasManager.toolCanvas);
