import { createElement } from "tsx-create-element";
import AppIcon from "../AppIcon";

export const RectBtn = () => {
  return (
    <div onClick={() => console.log("RectBtn clicked")}>
      <AppIcon icon="#baize-screen-shot-juxing" />
    </div>
  );
};
