# main.ts

uni-app 的入口文件。主要作用是初始化 vue 实例、定义全局组件、使用需要的插件

```ts
import { createSSRApp } from "vue";
import { bootstrap } from "/@/cool/bootstrap";
import App from "./App.vue";
import "./router";

export function createApp() {
  const app = createSSRApp(App);

  // 启动
  bootstrap(app);

  // 隐藏底部导航栏
  uni.hideTabBar();

  return {
    app,
  };
}
```

::: warning
默认使用自定义底部导航栏，如需取消请注释第 18 行
:::
