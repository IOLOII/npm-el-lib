import './theme/index.scss'
import Button from "./button";
import Card from "./card";

const components = [Button, Card];

const install = function (Vue) {
  // 批量注册
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

// 注入 Vue
if (typeof window.Vue !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  // 导出 install Vue.use() 前提必须实现 install 方法；
  install,
  // 组件导出
  Button,
  Card,
};
