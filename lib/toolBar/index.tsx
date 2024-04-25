import "./index.less";
import { createElement, mount } from "tsx-create-element";
import { componentManager } from "../componentManager";

// 渲染工具栏
export function renderToolBar(faterDom: HTMLElement, params: any = {}) {
  const dom = componentManager.render(["RectBtn", "RoundBtn", "test"], params);
  mount(<div className="baize-screen-shot-toolbar">{dom}</div>, faterDom);
}
