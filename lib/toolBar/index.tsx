import "./index.less";
import { createElement, mount } from "tsx-create-element";
import { baizeComponentManager } from "../BaizeComponentManager";

const DEFAULT_TOOL_LIST = [
  "SelectBtn",
  "RectBtn",
  "RoundBtn",
  "ArrowBtn",
  "TextBtn",
  "MosaicBtn",
  "SaveBtn",
]; // 默认工具栏列表

// 渲染工具栏
export function renderToolBar(faterDom: HTMLElement, params: any = {}) {
  const { toolList } = params;
  const dom = baizeComponentManager.render(
    toolList || DEFAULT_TOOL_LIST,
    params,
  );
  mount(<div className="baize-screen-shot-toolbar">{dom}</div>, faterDom);
}
