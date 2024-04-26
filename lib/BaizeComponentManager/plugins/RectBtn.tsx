import { createElement } from "tsx-create-element";
import AppIcon from "../AppIcon";
import { toolCanvasManager } from "../../ToolCanvasManager";
import { fabric } from "fabric";

export const RectBtn = () => {
  const handleClick = () => {
    const createShape = (data) => {
      return new fabric.Rect({
        left: data.startX,
        top: data.startY,
        width: 0,
        height: 0,
      });
    };
    const updateShape = (shape, data) => {
      shape.set({
        width: Math.abs(data.currentX - data.startX),
        height: Math.abs(data.currentY - data.startY),
      });
    };
    toolCanvasManager.changeSelectStatus(false);
    toolCanvasManager.addShape({
      createShape,
      updateShape,
      checkDistance: true,
    });
  };
  return (
    <div onClick={handleClick}>
      <AppIcon icon="#baize-screen-shot-juxing" />
    </div>
  );
};
