import { createElement } from "tsx-create-element";
import { toolCanvasManager } from "../../ToolCanvasManager";
import { fabric } from "fabric";
import AppIcon from "../AppIcon";

export const RoundBtn = () => {
  const handleClick = () => {
    const createShape = (data) => {
      return new fabric.Ellipse({
        left: data.startX,
        top: data.startY,
      });
    };
    const updateShape = (shape, data) => {
      const width = Math.abs(data.currentX - data.startX);
      const height = Math.abs(data.currentY - data.startY);
      shape.set({
        rx: width / 2,
        ry: height / 2,
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
      <AppIcon icon="#baize-screen-shot-yuanxingweixuanzhong" />
    </div>
  );
};
