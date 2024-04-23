// 定义组件
class Component {
  name;
  constructor(props) {
    const { name } = props;
    this.name = name;
  }
  render() {
    return `<div>${this.name}</div>`;
  }
}

// 创建注册表
class ToolBarManager {
  components: { [name: string]: Component };
  toolBarDom: HTMLElement;
  constructor(props) {
    this.toolBarDom = props.toolBarDom;
    this.components = {};
    this.defaultRegister();
  }

  defaultRegister() {
    this.registerComponent({ name: "A" });
    this.registerComponent({ name: "B" });
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
    this.toolBarDom.innerHTML = "";
    list.forEach((name) => {
      const component = this.getComponent(name);
      console.log(component);
      if (component) {
        this.toolBarDom.innerHTML += component.render();
      }
    });
  }
}

const toolBarDom = document.createElement("div");
toolBarDom.id = "tool-bar";

// 创建注册表实例
const toolBar = new ToolBarManager({ toolBarDom });
toolBar.render(["A", "B"]);
document.body.appendChild(toolBarDom);
