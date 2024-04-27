import { createElement } from "tsx-create-element";
import { toolCanvasManager } from "../../toolCanvasManager";
import AppIcon from "../AppIcon";

export const SelectBtn = () => {
  const handleClick = () => {
    toolCanvasManager.changeSelectStatus(true);
  };
  return (
    <div onClick={handleClick}>
      <AppIcon icon="#baize-screen-shot-shubiaojiantou" />
    </div>
  );
};
