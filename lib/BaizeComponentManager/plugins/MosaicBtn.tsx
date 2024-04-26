import { createElement } from "tsx-create-element";
import AppIcon from "../AppIcon";
import { toolCanvasManager } from "../../ToolCanvasManager";
import { fabric } from "fabric";

export const MosaicBtn = () => {
  const handleClick = () => {
    toolCanvasManager.changeSelectStatus(false);
    console.log("mosaic btn");
  };
  return (
    <div onClick={handleClick}>
      <AppIcon icon="#baize-screen-shot-masaike" />
    </div>
  );
};
