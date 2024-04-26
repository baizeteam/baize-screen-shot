import { createElement } from "tsx-create-element";
import AppIcon from "../AppIcon";
import { toolCanvasManager } from "../../ToolCanvasManager";

export const RectBtn = () => {
  const handleClick = () => {
    toolCanvasManager.changeSelectStatus(false);
    toolCanvasManager.addGraph("Rect");
  };
  return (
    <div onClick={handleClick}>
      <AppIcon icon="#baize-screen-shot-juxing" />
    </div>
  );
};
