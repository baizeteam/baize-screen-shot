import { fabric } from "fabric";

const MIN_DRAG_DISTANCE = 5;

export class ToolCanvasManager {
  toolCanvas: fabric.Canvas;
  graphType: string;
  graph: fabric.Object;
  fill: string = "red";
  dragData: {
    isDragging: boolean;
    startX: number;
    startY: number;
    currentX: number;
    currentY: number;
  } = {
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
      console.log("mouse:down", this.graphType);
      if (!this.graphType || !!this.toolCanvas.getActiveObject()) {
        return;
      }
      this.dragData.isDragging = true;
      this.dragData.startX = e.pointer.x;
      this.dragData.startY = e.pointer.y;
    });
    this.toolCanvas.on("mouse:move", (e) => {
      if (
        !this.dragData.isDragging ||
        !this.graphType ||
        !!this.toolCanvas.getActiveObject()
      ) {
        return;
      }
      this.dragData.currentX = e.pointer.x;
      this.dragData.currentY = e.pointer.y;
      this.graph?.set({
        width: Math.abs(this.dragData.currentX - this.dragData.startX),
        height: Math.abs(this.dragData.currentY - this.dragData.startY),
      });

      // 计算鼠标按下时到鼠标移动时的距离
      const dragDistance = Math.sqrt(
        Math.pow(this.dragData.currentX - this.dragData.startX, 2) +
          Math.pow(this.dragData.currentY - this.dragData.startY, 2),
      );

      // 只有当拖动距离大于 MIN_DRAG_DISTANCE 时才创建图形
      if (dragDistance > MIN_DRAG_DISTANCE && !this.graph) {
        this.graph = new fabric[this.graphType]({
          left: this.dragData.startX,
          top: this.dragData.startY,
          width: 0,
          height: 0,
          fill: this.fill,
          selectable: true,
        });
        this.toolCanvas.add(this.graph);
      }
      this.toolCanvas.renderAll();
    });
    this.toolCanvas.on("mouse:up", (e) => {
      this.dragData.isDragging = false;
      this.dragData.currentX = e.pointer.x;
      this.dragData.currentY = e.pointer.y;
      if (this.graph) {
        this.toolCanvas.setActiveObject(this.graph);
        this.toolCanvas.renderAll();
        this.graph = null;
      }
    });
  }

  addGraph(graphType) {
    console.log("addGraph", graphType);
    this.graphType = graphType;
  }

  changeSelectStatus(selection) {
    this.toolCanvas.selection = selection;
    this.dragData.isDragging = false;
    this.graphType = null;
    console.log(this.toolCanvas);
  }
}

export let toolCanvasManager: ToolCanvasManager;
export function initToolCanvasManager(toolCanvasDom) {
  toolCanvasManager = new ToolCanvasManager({ toolCanvasDom });
}
