import { createElement } from "tsx-create-element";
import AppIcon from "../AppIcon";
import { toolCanvasManager } from "../../toolCanvasManager";
import { fabric } from "fabric";

export const TextBtn = () => {
  const handleClick = () => {
    toolCanvasManager.changeSelectStatus(false);
    console.log("text button click");
  };
  return (
    <div onClick={handleClick}>
      <AppIcon icon="#baize-screen-shot-text" />
    </div>
  );
};
