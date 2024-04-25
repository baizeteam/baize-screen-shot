import { createElement } from "tsx-create-element";
import AppIcon from "../AppIcon";

export const RoundBtn = () => {
  return (
    <div onClick={() => console.log("RoundBtn clicked")}>
      <AppIcon icon="#baize-screen-shot-yuanxingweixuanzhong" />
    </div>
  );
};
