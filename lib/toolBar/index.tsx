import "./index.less";
import { createElement, mount } from "tsx-create-element";
import { baizeComponentManager } from "../BaizeComponentManager";

// 渲染工具栏
export function renderToolBar(faterDom: HTMLElement, params: any = {}) {
  const dom = baizeComponentManager.render(
    ["SelectBtn", "RectBtn", "RoundBtn", "test"],
    params,
  );
  mount(<div className="baize-screen-shot-toolbar">{dom}</div>, faterDom);
}
