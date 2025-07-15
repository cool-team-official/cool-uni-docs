# main.ts

main.ts 是 uni-app 应用的核心入口文件，主要用于初始化 Vue 应用实例并进行全局配置。在这里你可以:

- 注册全局组件 (app.component)
- 添加全局混入 (app.mixin)
- 配置全局属性 (app.config.globalProperties)
- 集成第三方插件
- 其他全局配置...

这些配置将贯穿整个应用的生命周期。

```ts
import { createSSRApp } from "vue";
import { bootstrap } from "./cool";
import App from "./App.vue";
import "./router";

export function createApp() {
  const app = createSSRApp(App);

  bootstrap(app);

  return {
    app,
  };
}
```
