import { RectBtn } from "./plugins/RectBtn";
import { RoundBtn } from "./plugins/RoundBtn";
import { createElement } from "tsx-create-element";

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

// 创建组件管理器
export const componentManager = new ComponentsManager({});

// 注册组件
componentManager.registerComponent({
  name: "RectBtn",
  render: () => <RectBtn />,
});
componentManager.registerComponent({
  name: "RoundBtn",
  render: () => <RoundBtn />,
});
componentManager.registerComponent({
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
