import { createElement } from "tsx-create-element";
import "./iconfont.js";
import { RectBtn } from "./plugins/RectBtn.jsx";
import { RoundBtn } from "./plugins/RoundBtn.jsx";
import { SelectBtn } from "./plugins/SelectBtn.jsx";
import { ArrowBtn } from "./plugins/ArrowBtn.jsx";
import { TextBtn } from "./plugins/TextBtn.jsx";
import { MosaicBtn } from "./plugins/MosaicBtn.jsx";
import { SaveBtn } from "./plugins/SaveBtn.jsx";

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
  name: "SelectBtn",
  render: (props) => <SelectBtn {...props} />,
});
baizeComponentManager.registerComponent({
  name: "ArrowBtn",
  render: (props) => <ArrowBtn {...props} />,
});
baizeComponentManager.registerComponent({
  name: "TextBtn",
  render: (props) => <TextBtn {...props} />,
});
baizeComponentManager.registerComponent({
  name: "MosaicBtn",
  render: (props) => <MosaicBtn {...props} />,
});
baizeComponentManager.registerComponent({
  name: "SaveBtn",
  render: (props) => <SaveBtn {...props} />,
});
