import { fabric } from "fabric";

interface ClipBoxOptions {
  canvas: fabric.Canvas;
}

export class ClipBox {
  private static instance: ClipBox;
  private clipBox: fabric.Rect | null = null;
  private maskBox: fabric.Rect | null = null;
  private canvas: fabric.Canvas;
  private isDragging: boolean = false;
  private startPoint: fabric.Point | null = null;

  constructor(props: ClipBoxOptions) {
    const { canvas } = props;
    this.canvas = canvas;
    this.init();
  }

  init() {
    this.maskBox = new fabric.Rect({
      left: 0,
      top: 0,
      width: this.canvas.width,
      height: this.canvas.height,
      fill: "rgba(0,0,0,0.3)",
      selectable: false,
      evented: true,
    });
    this.canvas.add(this.maskBox);
    this.canvas.on("mouse:down", this.onMouseDown.bind(this));
    this.canvas.on("mouse:move", this.onMouseMove.bind(this));
    this.canvas.on("mouse:up", this.onMouseUp.bind(this));
  }

  addClipBox({ left, top, width, height }: fabric.IRectOptions) {
    this.clipBox = new fabric.Rect({
      left,
      top,
      width,
      height,
      fill: "rgba(0,0,0,0)",
      stroke: "rgba(255,0,0,0.5)",
      strokeWidth: 1,
      selectable: true,
      evented: true,
      inverted: true,

      absolutePositioned: true,
    });
    this.clipBox.setControlsVisibility({
      mt: true,
      mb: true,
      ml: true,
      mr: true,
      bl: true,
      br: true,
      tl: true,
      tr: true,
      mtr: false,
    });
    this.canvas.add(this.clipBox);
  }

  onMouseDown(event: fabric.IEvent) {
    if (!this.clipBox) {
      const pointer = this.canvas.getPointer(event.e);
      this.startPoint = new fabric.Point(pointer.x, pointer.y);
      this.addClipBox({
        left: pointer.x,
        top: pointer.y,
        width: 0,
        height: 0,
      });
      this.maskBox.set({
        clipPath: this.clipBox,
      });
      this.isDragging = true;
    }
  }

  onMouseMove(event: fabric.IEvent) {
    if (this.isDragging && this.startPoint && this.clipBox) {
      const pointer = this.canvas.getPointer(event.e);
      const width = pointer.x - this.startPoint.x;
      const height = pointer.y - this.startPoint.y;
      this.clipBox.set({
        width: Math.abs(width),
        height: Math.abs(height),
      });
      this.canvas.renderAll();
    }
  }

  onMouseUp() {
    console.log(this.clipBox, this.maskBox);
    this.isDragging = false;
    this.startPoint = null;
  }

  public static getInstance(props: ClipBoxOptions): ClipBox {
    if (!this.instance) {
      this.instance = new ClipBox(props);
    }
    return this.instance;
  }
}
