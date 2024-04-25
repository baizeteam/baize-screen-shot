import "./index.less";
import { RectBtn } from "./plugins/RectBtn";
import { RoundBtn } from "./plugins/RoundBtn";
import { createElement, mount } from "tsx-create-element";

// 定义组件
export class Component {
  name;
  render;
  constructor(props) {
    const { name, render } = props;
    this.name = name;
    this.render = render;
  }
}

// 创建注册表
export class ComponentsManager {
  components: { [name: string]: Component };
  constructor(props) {
    this.components = {};
  }

  registerComponent(props) {
    const { name } = props;
    if (!this.components[name]) {
      const component = new Component(props);
      this.components[name] = component;
    }
  }

  getComponent(name) {
    console.log(this.components);
    return this.components[name];
  }

  public render(list) {
    return list.map((name) => {
      const component = this.getComponent(name);
      if (component) {
        return component.render();
      }
    });
  }
}

// 渲染工具栏
const toolBarDom = document.createElement("div");
toolBarDom.className = "baize-screen-shot-toolbar";
export const toolBar = new ComponentsManager({});
toolBar.registerComponent({
  name: "RectBtn",
  render: () => <RectBtn />,
});
toolBar.registerComponent({
  name: "RoundBtn",
  render: () => <RoundBtn />,
});
toolBar.registerComponent({
  name: "test",
  render: () => (
    <div
      onClick={() => {
        console.log(111);
      }}
    >
      test
    </div>
  ),
});

const dom = toolBar.render(["RectBtn", "RoundBtn", "test"]);

const testDom = document.createElement("div");
document.body.appendChild(testDom);
mount(<div className="baize-screen-shot-toolbar">{dom}</div>, testDom);
