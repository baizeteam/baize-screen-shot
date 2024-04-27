import { createElement } from "tsx-create-element";
import AppIcon from "../AppIcon";
import { toolCanvasManager } from "../../toolCanvasManager";
import { fabric } from "fabric";

export const SaveBtn = () => {
  const handleClick = () => {
    toolCanvasManager.changeSelectStatus(false);
    console.log("save btn clicked");
  };
  return (
    <div onClick={handleClick}>
      <AppIcon icon="#baize-screen-shot-baocun" />
    </div>
  );
};
