import { RectBtn } from "./plugins/RectBtn.jsx";
import { RoundBtn } from "./plugins/RoundBtn.jsx";
import { createElement } from "tsx-create-element";
import "./iconfont.js";

export type Component = {
  name: string;
  render: (props: any) => JSX.Element;
};

export type ComponentsManager = {
  registerComponent: (props: ComponentProps) => void;
  getComponent: (name: string) => Component | undefined;
  render: (list: string[], props: any) => JSX.Element[];
};

export type ComponentProps = {
  name: string;
  render: (props: any) => JSX.Element;
};

// 定义组件
export class BaizeComponentsManager implements ComponentsManager {
  private components: { [name: string]: Component } = {};

  public registerComponent(props: ComponentProps) {
    const { name } = props;
    if (!this.components[name]) {
      const component = { ...props };
      this.components[name] = component;
    }
  }

  public getComponent(name: string) {
    return this.components[name];
  }

  public render(list: string[], props: any) {
    return list.map((name) => {
      const component = this.getComponent(name);
      if (component) {
        return component.render(props);
      }
      return null;
    });
  }
}

// 创建组件管理器
export const baizeComponentManager = new BaizeComponentsManager();

// 注册组件
baizeComponentManager.registerComponent({
  name: "RectBtn",
  render: (props) => <RectBtn {...props} />,
});
baizeComponentManager.registerComponent({
  name: "RoundBtn",
  render: (props) => <RoundBtn {...props} />,
});
baizeComponentManager.registerComponent({
  name: "test",
  render: (props) => (
    <div
      onClick={() => {
        console.log(111);
      }}
    >
      test
    </div>
  ),
});
