import { createElement } from "tsx-create-element";
import AppIcon from "../AppIcon";
import { toolCanvasManager } from "../../toolCanvasManager";
import { fabric } from "fabric";

export const ArrowBtn = () => {
  const handleClick = () => {
    toolCanvasManager.changeSelectStatus(false);
    console.log("箭头按钮点击");
  };
  return (
    <div onClick={handleClick}>
      <AppIcon icon="#baize-screen-shot-rise" />
    </div>
  );
};
