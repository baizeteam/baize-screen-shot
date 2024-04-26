import { fabric } from "fabric";

const MIN_DRAG_DISTANCE = 5;

export interface IDragData {
  isDragging: boolean;
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
}

export class ToolCanvasManager {
  toolCanvas: fabric.Canvas;
  shapeData: any;
  shape: fabric.Object;
  fill: string = "rgba(0,0,0,0)";
  stroke: string = "red";
  strokeWidth: number = 2;
  dragData: IDragData = {
    isDragging: false,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
  };
  constructor(props) {
    const { toolCanvasDom } = props;
    this.initToolCanvas(toolCanvasDom);
  }

  // 初始化工具画布
  initToolCanvas(toolCanvasDom) {
    this.toolCanvas = new fabric.Canvas(toolCanvasDom, {
      selection: true,
      selectable: true,
      preserveObjectStacking: true,
      backgroundColor: "white",
    });
    this.toolCanvas.on("mouse:down", (e) => {
      if (!this.shapeData || !!this.toolCanvas.getActiveObject()) {
        return;
      }
      this.dragData.isDragging = true;
      this.dragData.startX = e.pointer.x;
      this.dragData.startY = e.pointer.y;
    });
    this.toolCanvas.on("mouse:move", (e) => {
      if (
        !this.dragData.isDragging ||
        !this.shapeData ||
        !!this.toolCanvas.getActiveObject()
      ) {
        return;
      }
      this.dragData.currentX = e.pointer.x;
      this.dragData.currentY = e.pointer.y;
      if (this.shape) {
        this.shapeData.updateShape(this.shape, this.dragData);
      }
      this.shape?.set({
        width: Math.abs(this.dragData.currentX - this.dragData.startX),
        height: Math.abs(this.dragData.currentY - this.dragData.startY),
      });

      // 计算鼠标按下时到鼠标移动时的距离
      const dragDistance = Math.sqrt(
        Math.pow(this.dragData.currentX - this.dragData.startX, 2) +
          Math.pow(this.dragData.currentY - this.dragData.startY, 2),
      );

      // 只有当拖动距离大于 MIN_DRAG_DISTANCE 时才创建图形
      if (dragDistance > MIN_DRAG_DISTANCE && !this.shape) {
        this.shape = this.shapeData.createShape(this.dragData);
        this.shape.set({
          fill: this.fill,
          selectable: true,
          strokeWidth: this.strokeWidth,
          stroke: this.stroke,
        });
        this.toolCanvas.add(this.shape);
      }
      this.toolCanvas.renderAll();
    });
    this.toolCanvas.on("mouse:up", (e) => {
      this.dragData.isDragging = false;
      this.dragData.currentX = e.pointer.x;
      this.dragData.currentY = e.pointer.y;
      if (this.shape) {
        this.toolCanvas.setActiveObject(this.shape);
        this.toolCanvas.renderAll();
        this.shape = null;
      }
    });
  }

  addShape(shapeData) {
    console.log("addShape", shapeData);
    this.shapeData = shapeData;
  }

  changeSelectStatus(selection) {
    this.toolCanvas.selection = selection;
    this.dragData.isDragging = false;
    this.shapeData = null;
    console.log(this.toolCanvas);
  }
}

export let toolCanvasManager: ToolCanvasManager;
export function initToolCanvasManager(toolCanvasDom) {
  toolCanvasManager = new ToolCanvasManager({ toolCanvasDom });
}
